/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import type { Prisma, business_owner, car, car_sharing, customer, team, user } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;

interface Business_ownerSDK {
  create: <
    T extends Prisma.business_ownerCreateArgs,
    R extends CheckSelect<T, business_owner, Prisma.business_ownerGetPayload<T>>,
    U extends Omit<Prisma.business_ownerCreateArgs, 'data'> & {
      data: Prisma.business_ownerUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.business_ownerCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.business_ownerCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.business_ownerUpdateArgs,
    R extends Prisma.business_ownerGetPayload<T>,
    U extends Omit<Prisma.business_ownerUpdateArgs, 'data'> & {
      data: Prisma.business_ownerUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.business_ownerUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.business_ownerUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.business_ownerUpsertArgs, R extends Prisma.business_ownerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.business_ownerUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.business_ownerDeleteArgs, R extends Prisma.business_ownerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.business_ownerDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.business_ownerDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.business_ownerDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.business_ownerFindManyArgs,
    R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.business_ownerCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.business_ownerCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.business_ownerFindManyArgs,
    R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.business_ownerFindFirstArgs,
    R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.business_ownerFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface CarSDK {
  create: <
    T extends Prisma.carCreateArgs,
    R extends CheckSelect<T, car, Prisma.carGetPayload<T>>,
    U extends Omit<Prisma.carCreateArgs, 'data'> & {
      data: Omit<Prisma.carUncheckedCreateInput, 'car_sharing'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.carCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.carCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.carUpdateArgs,
    R extends Prisma.carGetPayload<T>,
    U extends Omit<Prisma.carUpdateArgs, 'data'> & {
      data: Omit<Prisma.carUncheckedUpdateInput, 'car_sharing'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.carUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.carUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.carUpsertArgs, R extends Prisma.carGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.carUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.carDeleteArgs, R extends Prisma.carGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.carDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.carDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.carDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.carFindManyArgs, R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.carFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.carCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.carCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.carFindManyArgs,
    R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.carFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.carFindFirstArgs, R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.carFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Car_sharingSDK {
  create: <
    T extends Prisma.car_sharingCreateArgs,
    R extends CheckSelect<T, car_sharing, Prisma.car_sharingGetPayload<T>>,
    U extends Omit<Prisma.car_sharingCreateArgs, 'data'> & {
      data: Prisma.car_sharingUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.car_sharingCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.car_sharingCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.car_sharingUpdateArgs,
    R extends Prisma.car_sharingGetPayload<T>,
    U extends Omit<Prisma.car_sharingUpdateArgs, 'data'> & {
      data: Prisma.car_sharingUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.car_sharingUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.car_sharingUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.car_sharingUpsertArgs, R extends Prisma.car_sharingGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.car_sharingUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.car_sharingDeleteArgs, R extends Prisma.car_sharingGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.car_sharingDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.car_sharingDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.car_sharingDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.car_sharingFindManyArgs,
    R extends GetFindResult<Prisma.$car_sharingPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.car_sharingFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.car_sharingCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.car_sharingCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.car_sharingFindManyArgs,
    R extends GetFindResult<Prisma.$car_sharingPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.car_sharingFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.car_sharingFindFirstArgs,
    R extends GetFindResult<Prisma.$car_sharingPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.car_sharingFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface CustomerSDK {
  create: <
    T extends Prisma.customerCreateArgs,
    R extends CheckSelect<T, customer, Prisma.customerGetPayload<T>>,
    U extends Omit<Prisma.customerCreateArgs, 'data'> & {
      data: Omit<Prisma.customerUncheckedCreateInput, 'car_sharing'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.customerCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.customerCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.customerUpdateArgs,
    R extends Prisma.customerGetPayload<T>,
    U extends Omit<Prisma.customerUpdateArgs, 'data'> & {
      data: Omit<Prisma.customerUncheckedUpdateInput, 'car_sharing'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.customerUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.customerUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.customerUpsertArgs, R extends Prisma.customerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.customerUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.customerDeleteArgs, R extends Prisma.customerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.customerDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.customerDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.customerDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.customerFindManyArgs, R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.customerCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.customerCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.customerFindManyArgs,
    R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.customerFindFirstArgs, R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.customerFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface TeamSDK {
  create: <
    T extends Prisma.teamCreateArgs,
    R extends CheckSelect<T, team, Prisma.teamGetPayload<T>>,
    U extends Omit<Prisma.teamCreateArgs, 'data'> & {
      data: Omit<Prisma.teamUncheckedCreateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.teamCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.teamCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.teamUpdateArgs,
    R extends Prisma.teamGetPayload<T>,
    U extends Omit<Prisma.teamUpdateArgs, 'data'> & {
      data: Omit<Prisma.teamUncheckedUpdateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.teamUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.teamUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.teamUpsertArgs, R extends Prisma.teamGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.teamUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.teamDeleteArgs, R extends Prisma.teamGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.teamDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.teamDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.teamDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.teamFindManyArgs, R extends GetFindResult<Prisma.$teamPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.teamFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.teamCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.teamCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.teamFindManyArgs,
    R extends GetFindResult<Prisma.$teamPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.teamFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.teamFindFirstArgs, R extends GetFindResult<Prisma.$teamPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.teamFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <
    T extends Prisma.userCreateArgs,
    R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
    U extends Omit<Prisma.userCreateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedCreateInput, 'business_owner' | 'customer'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.userUpdateArgs,
    R extends Prisma.userGetPayload<T>,
    U extends Omit<Prisma.userUpdateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedUpdateInput, 'business_owner' | 'customer'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqBaasSdk {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public business_owner!: Business_ownerSDK;

  public car!: CarSDK;

  public car_sharing!: Car_sharingSDK;

  public customer!: CustomerSDK;

  public team!: TeamSDK;

  public user!: UserSDK;

  constructor(backendHost: string, baseOptions: RequestOptions = {}) {
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.business_owner = {
      create: async function createBusiness_owner<
        T extends Prisma.business_ownerCreateArgs,
        R extends CheckSelect<T, business_owner, Prisma.business_ownerGetPayload<T>>,
        U extends Omit<Prisma.business_ownerCreateArgs, 'data'> & {
          data: Prisma.business_ownerUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/business_owner/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyBusiness_owner<
        T extends Prisma.business_ownerCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/business_owner/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateBusiness_owner<
        T extends Prisma.business_ownerUpdateArgs,
        R extends Prisma.business_ownerGetPayload<T>,
        U extends Omit<Prisma.business_ownerUpdateArgs, 'data'> & {
          data: Prisma.business_ownerUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/business_owner/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyBusiness_owner<
        T extends Prisma.business_ownerUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/business_owner/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertBusiness_owner<
        T extends Prisma.business_ownerUpsertArgs,
        R extends Prisma.business_ownerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/business_owner/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteBusiness_owner<
        T extends Prisma.business_ownerDeleteArgs,
        R extends Prisma.business_ownerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business_owner/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyBusiness_owner<
        T extends Prisma.business_ownerDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business_owner/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyBusiness_owner<
        T extends Prisma.business_ownerFindManyArgs,
        R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business_owner/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countBusiness_owner<T extends Prisma.business_ownerCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.business_ownerCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/business_owner/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountBusiness_owner<
        T extends Prisma.business_ownerFindManyArgs,
        R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.business_owner.findMany(args, options),
          ctx.business_owner.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstBusiness_owner<
        T extends Prisma.business_ownerFindFirstArgs,
        R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.business_ownerFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business_owner/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.car = {
      create: async function createCar<
        T extends Prisma.carCreateArgs,
        R extends CheckSelect<T, car, Prisma.carGetPayload<T>>,
        U extends Omit<Prisma.carCreateArgs, 'data'> & {
          data: Omit<Prisma.carUncheckedCreateInput, 'car_sharing'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/car/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyCar<T extends Prisma.carCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.carCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/car/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateCar<
        T extends Prisma.carUpdateArgs,
        R extends Prisma.carGetPayload<T>,
        U extends Omit<Prisma.carUpdateArgs, 'data'> & {
          data: Omit<Prisma.carUncheckedUpdateInput, 'car_sharing'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/car/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyCar<T extends Prisma.carUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.carUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/car/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertCar<T extends Prisma.carUpsertArgs, R extends Prisma.carGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.carUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/car/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteCar<T extends Prisma.carDeleteArgs, R extends Prisma.carGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.carDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/car/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyCar<T extends Prisma.carDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.carDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/car/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyCar<
        T extends Prisma.carFindManyArgs,
        R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.carFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/car/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countCar<T extends Prisma.carCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.carCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/car/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountCar<
        T extends Prisma.carFindManyArgs,
        R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.carFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.car.findMany(args, options),
          ctx.car.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstCar<
        T extends Prisma.carFindFirstArgs,
        R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.carFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/car/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.car_sharing = {
      create: async function createCar_sharing<
        T extends Prisma.car_sharingCreateArgs,
        R extends CheckSelect<T, car_sharing, Prisma.car_sharingGetPayload<T>>,
        U extends Omit<Prisma.car_sharingCreateArgs, 'data'> & {
          data: Prisma.car_sharingUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/car_sharing/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyCar_sharing<
        T extends Prisma.car_sharingCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.car_sharingCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/car_sharing/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateCar_sharing<
        T extends Prisma.car_sharingUpdateArgs,
        R extends Prisma.car_sharingGetPayload<T>,
        U extends Omit<Prisma.car_sharingUpdateArgs, 'data'> & {
          data: Prisma.car_sharingUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/car_sharing/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyCar_sharing<
        T extends Prisma.car_sharingUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.car_sharingUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/car_sharing/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertCar_sharing<
        T extends Prisma.car_sharingUpsertArgs,
        R extends Prisma.car_sharingGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.car_sharingUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/car_sharing/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteCar_sharing<
        T extends Prisma.car_sharingDeleteArgs,
        R extends Prisma.car_sharingGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.car_sharingDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/car_sharing/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyCar_sharing<
        T extends Prisma.car_sharingDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.car_sharingDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/car_sharing/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyCar_sharing<
        T extends Prisma.car_sharingFindManyArgs,
        R extends GetFindResult<Prisma.$car_sharingPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.car_sharingFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/car_sharing/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countCar_sharing<T extends Prisma.car_sharingCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.car_sharingCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/car_sharing/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountCar_sharing<
        T extends Prisma.car_sharingFindManyArgs,
        R extends GetFindResult<Prisma.$car_sharingPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.car_sharingFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.car_sharing.findMany(args, options),
          ctx.car_sharing.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstCar_sharing<
        T extends Prisma.car_sharingFindFirstArgs,
        R extends GetFindResult<Prisma.$car_sharingPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.car_sharingFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/car_sharing/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.customer = {
      create: async function createCustomer<
        T extends Prisma.customerCreateArgs,
        R extends CheckSelect<T, customer, Prisma.customerGetPayload<T>>,
        U extends Omit<Prisma.customerCreateArgs, 'data'> & {
          data: Omit<Prisma.customerUncheckedCreateInput, 'car_sharing'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/customer/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyCustomer<
        T extends Prisma.customerCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.customerCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/customer/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateCustomer<
        T extends Prisma.customerUpdateArgs,
        R extends Prisma.customerGetPayload<T>,
        U extends Omit<Prisma.customerUpdateArgs, 'data'> & {
          data: Omit<Prisma.customerUncheckedUpdateInput, 'car_sharing'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/customer/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyCustomer<
        T extends Prisma.customerUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.customerUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/customer/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertCustomer<
        T extends Prisma.customerUpsertArgs,
        R extends Prisma.customerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.customerUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/customer/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteCustomer<
        T extends Prisma.customerDeleteArgs,
        R extends Prisma.customerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.customerDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/customer/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyCustomer<
        T extends Prisma.customerDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.customerDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/customer/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyCustomer<
        T extends Prisma.customerFindManyArgs,
        R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/customer/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countCustomer<T extends Prisma.customerCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.customerCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/customer/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountCustomer<
        T extends Prisma.customerFindManyArgs,
        R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.customer.findMany(args, options),
          ctx.customer.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstCustomer<
        T extends Prisma.customerFindFirstArgs,
        R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.customerFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/customer/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.team = {
      create: async function createTeam<
        T extends Prisma.teamCreateArgs,
        R extends CheckSelect<T, team, Prisma.teamGetPayload<T>>,
        U extends Omit<Prisma.teamCreateArgs, 'data'> & {
          data: Omit<Prisma.teamUncheckedCreateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/team/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyTeam<T extends Prisma.teamCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.teamCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/team/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateTeam<
        T extends Prisma.teamUpdateArgs,
        R extends Prisma.teamGetPayload<T>,
        U extends Omit<Prisma.teamUpdateArgs, 'data'> & {
          data: Omit<Prisma.teamUncheckedUpdateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/team/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyTeam<T extends Prisma.teamUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.teamUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/team/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertTeam<T extends Prisma.teamUpsertArgs, R extends Prisma.teamGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.teamUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/team/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteTeam<T extends Prisma.teamDeleteArgs, R extends Prisma.teamGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.teamDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/team/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyTeam<T extends Prisma.teamDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.teamDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/team/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyTeam<
        T extends Prisma.teamFindManyArgs,
        R extends GetFindResult<Prisma.$teamPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.teamFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/team/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countTeam<T extends Prisma.teamCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.teamCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/team/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountTeam<
        T extends Prisma.teamFindManyArgs,
        R extends GetFindResult<Prisma.$teamPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.teamFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.team.findMany(args, options),
          ctx.team.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstTeam<
        T extends Prisma.teamFindFirstArgs,
        R extends GetFindResult<Prisma.$teamPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.teamFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/team/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
        U extends Omit<Prisma.userCreateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedCreateInput, 'business_owner' | 'customer'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<
        T extends Prisma.userUpdateArgs,
        R extends Prisma.userGetPayload<T>,
        U extends Omit<Prisma.userUpdateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedUpdateInput, 'business_owner' | 'customer'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
