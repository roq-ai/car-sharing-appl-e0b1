/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions } from './roq-client';
import { RequestOptions } from './roq-baas-sdk';
import {
  FileCategoriesQuery,
  FileCategoriesQueryVariables,
  FileCategoryContentGroupQuery,
  FileCategoryContentGroupQueryVariables,
  FileCategoryContentGroupsQuery,
  FileCategoryContentGroupsQueryVariables,
  FileCategoryContentTypesQuery,
  FileCategoryContentTypesQueryVariables,
  FileCategoryQuery,
  FileCategoryQueryVariables,
  FileQuery,
  FileQueryVariables,
  FilesQuery,
  FilesQueryVariables,
  RoleQuery,
  RoleQueryVariables,
  RolesQuery,
  RolesQueryVariables,
  TenantQuery,
  TenantQueryVariables,
  UserInviteQuery,
  UserInviteQueryVariables,
  UserInvitesQuery,
  UserInvitesQueryVariables,
  UserProfileQuery,
  UserProfileQueryVariables,
  UserProfilesQuery,
  UserProfilesQueryVariables,
} from '@roq/client';

export function useBusinessOwnerFindMany<
  T extends Prisma.business_ownerFindManyArgs,
  R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBusinessOwnerFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.business_owner.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBusinessOwnerCount<T extends Prisma.business_ownerCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.business_ownerCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBusinessOwnerCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.business_owner.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBusinessOwnerFindManyWithCount<
  T extends Prisma.business_ownerFindManyArgs,
  R extends { data: GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBusinessOwnerFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.business_owner.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBusinessOwnerFindFirst<
  T extends Prisma.business_ownerFindFirstArgs,
  R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.business_ownerFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBusinessOwnerFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.business_owner.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarFindMany<
  T extends Prisma.carFindManyArgs,
  R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.carFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarCount<T extends Prisma.carCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.carCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarFindManyWithCount<
  T extends Prisma.carFindManyArgs,
  R extends { data: GetFindResult<Prisma.$carPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.carFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarFindFirst<
  T extends Prisma.carFindFirstArgs,
  R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>,
>(args?: Prisma.SelectSubset<T, Prisma.carFindFirstArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarSharingFindMany<
  T extends Prisma.car_sharingFindManyArgs,
  R extends GetFindResult<Prisma.$car_sharingPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.car_sharingFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarSharingFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car_sharing.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarSharingCount<T extends Prisma.car_sharingCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.car_sharingCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarSharingCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car_sharing.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarSharingFindManyWithCount<
  T extends Prisma.car_sharingFindManyArgs,
  R extends { data: GetFindResult<Prisma.$car_sharingPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.car_sharingFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarSharingFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car_sharing.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarSharingFindFirst<
  T extends Prisma.car_sharingFindFirstArgs,
  R extends GetFindResult<Prisma.$car_sharingPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.car_sharingFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarSharingFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car_sharing.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCustomerFindMany<
  T extends Prisma.customerFindManyArgs,
  R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCustomerFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.customer.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCustomerCount<T extends Prisma.customerCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.customerCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCustomerCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.customer.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCustomerFindManyWithCount<
  T extends Prisma.customerFindManyArgs,
  R extends { data: GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCustomerFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.customer.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCustomerFindFirst<
  T extends Prisma.customerFindFirstArgs,
  R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.customerFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCustomerFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.customer.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTeamFindMany<
  T extends Prisma.teamFindManyArgs,
  R extends GetFindResult<Prisma.$teamPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.teamFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTeamFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.team.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTeamCount<T extends Prisma.teamCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.teamCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTeamCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.team.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTeamFindManyWithCount<
  T extends Prisma.teamFindManyArgs,
  R extends { data: GetFindResult<Prisma.$teamPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.teamFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTeamFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.team.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTeamFindFirst<
  T extends Prisma.teamFindFirstArgs,
  R extends GetFindResult<Prisma.$teamPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.teamFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTeamFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.team.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfiles(
  args?: UserProfilesQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfilesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfiles', args || {}]);
  return useSWR<UserProfilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfiles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfile(
  args: UserProfileQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfileQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfile', args || {}]);
  return useSWR<UserProfileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfile(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRoles(args?: RolesQueryVariables, swrOptions?: SWRRequestOptions<RolesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRoles', args || {}]);
  return useSWR<RolesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.roles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRole(args: RoleQueryVariables, swrOptions?: SWRRequestOptions<RoleQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRole', args || {}]);
  return useSWR<RoleQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.role(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvites(
  args?: UserInvitesQueryVariables,
  swrOptions?: SWRRequestOptions<UserInvitesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvites', args || {}]);
  return useSWR<UserInvitesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvites(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvite(
  args: UserInviteQueryVariables,
  swrOptions?: SWRRequestOptions<UserInviteQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvite', args || {}]);
  return useSWR<UserInviteQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvite(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFiles(args?: FilesQueryVariables, swrOptions?: SWRRequestOptions<FilesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFiles', args || {}]);
  return useSWR<FilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.files(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFile(args: FileQueryVariables, swrOptions?: SWRRequestOptions<FileQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFile', args || {}]);
  return useSWR<FileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.file(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentTypes(
  args?: FileCategoryContentTypesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentTypesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentTypes', args || {}]);
  return useSWR<FileCategoryContentTypesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentTypes(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroup(
  args: FileCategoryContentGroupQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroup', args || {}]);
  return useSWR<FileCategoryContentGroupQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroup(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroups(
  args?: FileCategoryContentGroupsQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupsQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroups', args || {}]);
  return useSWR<FileCategoryContentGroupsQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroups(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategories(
  args?: FileCategoriesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoriesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategories', args || {}]);
  return useSWR<FileCategoriesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategories(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategory(
  args: FileCategoryQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategory', args || {}]);
  return useSWR<FileCategoryQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategory(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformTenant(args: TenantQueryVariables, swrOptions?: SWRRequestOptions<TenantQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformTenant', args || {}]);
  return useSWR<TenantQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.tenant(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
