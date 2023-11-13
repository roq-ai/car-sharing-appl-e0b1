import * as yup from 'yup';

export const carSharingValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  pickup_location: yup.string().required(),
  dropoff_location: yup.string().required(),
  car_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
