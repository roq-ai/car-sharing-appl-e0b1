import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useCarSharingFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { carSharingValidationSchema } from 'validationSchema/car-sharings';
import { CarSharingInterface } from 'interfaces/car-sharing';
import { CarInterface } from 'interfaces/car';
import { CustomerInterface } from 'interfaces/customer';

function CarSharingEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'car_sharing',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useCarSharingFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: CarSharingInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.car_sharing.update({
        data: values as RoqTypes.car_sharing,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/car-sharings');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<CarSharingInterface>({
    initialValues: data,
    validationSchema: carSharingValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Car Sharings',
              link: '/car-sharings',
            },
            {
              label: 'Update Car Sharing',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Car Sharing
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="start_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Start Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.start_time ? new Date(formik.values?.start_time) : null}
              onChange={(value: Date) => formik.setFieldValue('start_time', value)}
            />
          </FormControl>
          <FormControl id="end_time" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              End Time
            </FormLabel>
            <DatePicker
              selected={formik.values?.end_time ? new Date(formik.values?.end_time) : null}
              onChange={(value: Date) => formik.setFieldValue('end_time', value)}
            />
          </FormControl>

          <TextInput
            error={formik.errors.pickup_location}
            label={'Pickup Location'}
            props={{
              name: 'pickup_location',
              placeholder: 'Pickup Location',
              value: formik.values?.pickup_location,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.dropoff_location}
            label={'Dropoff Location'}
            props={{
              name: 'dropoff_location',
              placeholder: 'Dropoff Location',
              value: formik.values?.dropoff_location,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<CarInterface>
            formik={formik}
            name={'car_id'}
            label={'Select Car'}
            placeholder={'Select Car'}
            fetcher={() => roqClient.car.findManyWithCount({})}
            labelField={'make'}
          />
          <AsyncSelect<CustomerInterface>
            formik={formik}
            name={'customer_id'}
            label={'Select Customer'}
            placeholder={'Select Customer'}
            fetcher={() => roqClient.customer.findManyWithCount({})}
            labelField={'address'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/car-sharings')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'car_sharing',
    operation: AccessOperationEnum.UPDATE,
  }),
)(CarSharingEditPage);
