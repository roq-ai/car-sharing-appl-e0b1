/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model business_owner
 *
 */
export type business_owner = $Result.DefaultSelection<Prisma.$business_ownerPayload>;
/**
 * Model car
 *
 */
export type car = $Result.DefaultSelection<Prisma.$carPayload>;
/**
 * Model car_sharing
 *
 */
export type car_sharing = $Result.DefaultSelection<Prisma.$car_sharingPayload>;
/**
 * Model customer
 *
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>;
/**
 * Model team
 *
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Business_owners
 * const business_owners = await prisma.business_owner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Business_owners
   * const business_owners = await prisma.business_owner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.business_owner`: Exposes CRUD operations for the **business_owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Business_owners
   * const business_owners = await prisma.business_owner.findMany()
   * ```
   */
  get business_owner(): Prisma.business_ownerDelegate<ExtArgs>;

  /**
   * `prisma.car`: Exposes CRUD operations for the **car** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cars
   * const cars = await prisma.car.findMany()
   * ```
   */
  get car(): Prisma.carDelegate<ExtArgs>;

  /**
   * `prisma.car_sharing`: Exposes CRUD operations for the **car_sharing** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Car_sharings
   * const car_sharings = await prisma.car_sharing.findMany()
   * ```
   */
  get car_sharing(): Prisma.car_sharingDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.customerDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.teamDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    business_owner: 'business_owner';
    car: 'car';
    car_sharing: 'car_sharing';
    customer: 'customer';
    team: 'team';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'business_owner' | 'car' | 'car_sharing' | 'customer' | 'team' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      business_owner: {
        payload: Prisma.$business_ownerPayload<ExtArgs>;
        fields: Prisma.business_ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.business_ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.business_ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findFirst: {
            args: Prisma.business_ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.business_ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findMany: {
            args: Prisma.business_ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>[];
          };
          create: {
            args: Prisma.business_ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          createMany: {
            args: Prisma.business_ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.business_ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          update: {
            args: Prisma.business_ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          deleteMany: {
            args: Prisma.business_ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.business_ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.business_ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          aggregate: {
            args: Prisma.Business_ownerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness_owner>;
          };
          groupBy: {
            args: Prisma.business_ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerGroupByOutputType>[];
          };
          count: {
            args: Prisma.business_ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerCountAggregateOutputType> | number;
          };
        };
      };
      car: {
        payload: Prisma.$carPayload<ExtArgs>;
        fields: Prisma.carFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.carFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.carFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          findFirst: {
            args: Prisma.carFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.carFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          findMany: {
            args: Prisma.carFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>[];
          };
          create: {
            args: Prisma.carCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          createMany: {
            args: Prisma.carCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.carDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          update: {
            args: Prisma.carUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          deleteMany: {
            args: Prisma.carDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.carUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.carUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$carPayload>;
          };
          aggregate: {
            args: Prisma.CarAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCar>;
          };
          groupBy: {
            args: Prisma.carGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CarGroupByOutputType>[];
          };
          count: {
            args: Prisma.carCountArgs<ExtArgs>;
            result: $Utils.Optional<CarCountAggregateOutputType> | number;
          };
        };
      };
      car_sharing: {
        payload: Prisma.$car_sharingPayload<ExtArgs>;
        fields: Prisma.car_sharingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.car_sharingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$car_sharingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.car_sharingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$car_sharingPayload>;
          };
          findFirst: {
            args: Prisma.car_sharingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$car_sharingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.car_sharingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$car_sharingPayload>;
          };
          findMany: {
            args: Prisma.car_sharingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$car_sharingPayload>[];
          };
          create: {
            args: Prisma.car_sharingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$car_sharingPayload>;
          };
          createMany: {
            args: Prisma.car_sharingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.car_sharingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$car_sharingPayload>;
          };
          update: {
            args: Prisma.car_sharingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$car_sharingPayload>;
          };
          deleteMany: {
            args: Prisma.car_sharingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.car_sharingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.car_sharingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$car_sharingPayload>;
          };
          aggregate: {
            args: Prisma.Car_sharingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCar_sharing>;
          };
          groupBy: {
            args: Prisma.car_sharingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Car_sharingGroupByOutputType>[];
          };
          count: {
            args: Prisma.car_sharingCountArgs<ExtArgs>;
            result: $Utils.Optional<Car_sharingCountAggregateOutputType> | number;
          };
        };
      };
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>;
        fields: Prisma.customerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[];
          };
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer>;
          };
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.customerCountArgs<ExtArgs>;
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number;
          };
        };
      };
      team: {
        payload: Prisma.$teamPayload<ExtArgs>;
        fields: Prisma.teamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[];
          };
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.teamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CarCountOutputType
   */

  export type CarCountOutputType = {
    car_sharing: number;
  };

  export type CarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car_sharing?: boolean | CarCountOutputTypeCountCar_sharingArgs;
  };

  // Custom InputTypes

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarCountOutputType
     */
    select?: CarCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CarCountOutputType without action
   */
  export type CarCountOutputTypeCountCar_sharingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: car_sharingWhereInput;
  };

  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    car_sharing: number;
  };

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car_sharing?: boolean | CustomerCountOutputTypeCountCar_sharingArgs;
  };

  // Custom InputTypes

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCar_sharingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: car_sharingWhereInput;
  };

  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    user: number;
  };

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TeamCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    business_owner: number;
    customer: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business_owner?: boolean | UserCountOutputTypeCountBusiness_ownerArgs;
    customer?: boolean | UserCountOutputTypeCountCustomerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusiness_ownerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: business_ownerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: customerWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model business_owner
   */

  export type AggregateBusiness_owner = {
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  export type Business_ownerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    business_name: string | null;
    business_address: string | null;
    business_contact: string | null;
    business_email: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    business_name: string | null;
    business_address: string | null;
    business_contact: string | null;
    business_email: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerCountAggregateOutputType = {
    id: number;
    user_id: number;
    business_name: number;
    business_address: number;
    business_contact: number;
    business_email: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Business_ownerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    business_name?: true;
    business_address?: true;
    business_contact?: true;
    business_email?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    business_name?: true;
    business_address?: true;
    business_contact?: true;
    business_email?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    business_name?: true;
    business_address?: true;
    business_contact?: true;
    business_email?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Business_ownerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owner to aggregate.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned business_owners
     **/
    _count?: true | Business_ownerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Business_ownerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type GetBusiness_ownerAggregateType<T extends Business_ownerAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness_owner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness_owner[P]>
      : GetScalarType<T[P], AggregateBusiness_owner[P]>;
  };

  export type business_ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithAggregationInput | business_ownerOrderByWithAggregationInput[];
    by: Business_ownerScalarFieldEnum[] | Business_ownerScalarFieldEnum;
    having?: business_ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Business_ownerCountAggregateInputType | true;
    _min?: Business_ownerMinAggregateInputType;
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type Business_ownerGroupByOutputType = {
    id: string;
    user_id: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    business_email: string;
    created_at: Date;
    updated_at: Date;
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  type GetBusiness_ownerGroupByPayload<T extends business_ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Business_ownerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Business_ownerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>
          : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>;
      }
    >
  >;

  export type business_ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        business_name?: boolean;
        business_address?: boolean;
        business_contact?: boolean;
        business_email?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['business_owner']
    >;

  export type business_ownerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    business_name?: boolean;
    business_address?: boolean;
    business_contact?: boolean;
    business_email?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type business_ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $business_ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'business_owner';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        business_name: string;
        business_address: string;
        business_contact: string;
        business_email: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['business_owner']
    >;
    composites: {};
  };

  type business_ownerGetPayload<S extends boolean | null | undefined | business_ownerDefaultArgs> = $Result.GetResult<
    Prisma.$business_ownerPayload,
    S
  >;

  type business_ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    business_ownerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Business_ownerCountAggregateInputType | true;
  };

  export interface business_ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business_owner']; meta: { name: 'business_owner' } };
    /**
     * Find zero or one Business_owner that matches the filter.
     * @param {business_ownerFindUniqueArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends business_ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Business_owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {business_ownerFindUniqueOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends business_ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends business_ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends business_ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Business_owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Business_owners
     * const business_owners = await prisma.business_owner.findMany()
     *
     * // Get first 10 Business_owners
     * const business_owners = await prisma.business_owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const business_ownerWithIdOnly = await prisma.business_owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends business_ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Business_owner.
     * @param {business_ownerCreateArgs} args - Arguments to create a Business_owner.
     * @example
     * // Create one Business_owner
     * const Business_owner = await prisma.business_owner.create({
     *   data: {
     *     // ... data to create a Business_owner
     *   }
     * })
     *
     **/
    create<T extends business_ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerCreateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Business_owners.
     *     @param {business_ownerCreateManyArgs} args - Arguments to create many Business_owners.
     *     @example
     *     // Create many Business_owners
     *     const business_owner = await prisma.business_owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends business_ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Business_owner.
     * @param {business_ownerDeleteArgs} args - Arguments to delete one Business_owner.
     * @example
     * // Delete one Business_owner
     * const Business_owner = await prisma.business_owner.delete({
     *   where: {
     *     // ... filter to delete one Business_owner
     *   }
     * })
     *
     **/
    delete<T extends business_ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerDeleteArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Business_owner.
     * @param {business_ownerUpdateArgs} args - Arguments to update one Business_owner.
     * @example
     * // Update one Business_owner
     * const business_owner = await prisma.business_owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends business_ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Business_owners.
     * @param {business_ownerDeleteManyArgs} args - Arguments to filter Business_owners to delete.
     * @example
     * // Delete a few Business_owners
     * const { count } = await prisma.business_owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends business_ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Business_owners
     * const business_owner = await prisma.business_owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends business_ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Business_owner.
     * @param {business_ownerUpsertArgs} args - Arguments to update or create a Business_owner.
     * @example
     * // Update or create a Business_owner
     * const business_owner = await prisma.business_owner.upsert({
     *   create: {
     *     // ... data to create a Business_owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business_owner we want to update
     *   }
     * })
     **/
    upsert<T extends business_ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpsertArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerCountArgs} args - Arguments to filter Business_owners to count.
     * @example
     * // Count the number of Business_owners
     * const count = await prisma.business_owner.count({
     *   where: {
     *     // ... the filter for the Business_owners we want to count
     *   }
     * })
     **/
    count<T extends business_ownerCountArgs>(
      args?: Subset<T, business_ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Business_ownerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Business_ownerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Business_ownerAggregateArgs>(
      args: Subset<T, Business_ownerAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusiness_ownerAggregateType<T>>;

    /**
     * Group by Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends business_ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: business_ownerGroupByArgs['orderBy'] }
        : { orderBy?: business_ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, business_ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBusiness_ownerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the business_owner model
     */
    readonly fields: business_ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business_owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__business_ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the business_owner model
   */
  interface business_ownerFieldRefs {
    readonly id: FieldRef<'business_owner', 'String'>;
    readonly user_id: FieldRef<'business_owner', 'String'>;
    readonly business_name: FieldRef<'business_owner', 'String'>;
    readonly business_address: FieldRef<'business_owner', 'String'>;
    readonly business_contact: FieldRef<'business_owner', 'String'>;
    readonly business_email: FieldRef<'business_owner', 'String'>;
    readonly created_at: FieldRef<'business_owner', 'DateTime'>;
    readonly updated_at: FieldRef<'business_owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * business_owner findUnique
   */
  export type business_ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner findUniqueOrThrow
   */
  export type business_ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the business_owner
       */
      select?: business_ownerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: business_ownerInclude<ExtArgs> | null;
      /**
       * Filter, which business_owner to fetch.
       */
      where: business_ownerWhereUniqueInput;
    };

  /**
   * business_owner findFirst
   */
  export type business_ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findFirstOrThrow
   */
  export type business_ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findMany
   */
  export type business_ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owners to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner create
   */
  export type business_ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a business_owner.
     */
    data: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
  };

  /**
   * business_owner createMany
   */
  export type business_ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many business_owners.
     */
    data: business_ownerCreateManyInput | business_ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * business_owner update
   */
  export type business_ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a business_owner.
     */
    data: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
    /**
     * Choose, which business_owner to update.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner updateMany
   */
  export type business_ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update business_owners.
     */
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyInput>;
    /**
     * Filter which business_owners to update
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner upsert
   */
  export type business_ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the business_owner to update in case it exists.
     */
    where: business_ownerWhereUniqueInput;
    /**
     * In case the business_owner found by the `where` argument doesn't exist, create a new business_owner with this data.
     */
    create: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
    /**
     * In case the business_owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
  };

  /**
   * business_owner delete
   */
  export type business_ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter which business_owner to delete.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner deleteMany
   */
  export type business_ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owners to delete
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner without action
   */
  export type business_ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
  };

  /**
   * Model car
   */

  export type AggregateCar = {
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  export type CarAvgAggregateOutputType = {
    year: number | null;
  };

  export type CarSumAggregateOutputType = {
    year: number | null;
  };

  export type CarMinAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    license_plate: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CarMaxAggregateOutputType = {
    id: string | null;
    make: string | null;
    model: string | null;
    year: number | null;
    color: string | null;
    license_plate: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CarCountAggregateOutputType = {
    id: number;
    make: number;
    model: number;
    year: number;
    color: number;
    license_plate: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CarAvgAggregateInputType = {
    year?: true;
  };

  export type CarSumAggregateInputType = {
    year?: true;
  };

  export type CarMinAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    license_plate?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CarMaxAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    license_plate?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CarCountAggregateInputType = {
    id?: true;
    make?: true;
    model?: true;
    year?: true;
    color?: true;
    license_plate?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car to aggregate.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cars
     **/
    _count?: true | CarCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CarAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CarSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CarMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CarMaxAggregateInputType;
  };

  export type GetCarAggregateType<T extends CarAggregateArgs> = {
    [P in keyof T & keyof AggregateCar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar[P]>
      : GetScalarType<T[P], AggregateCar[P]>;
  };

  export type carGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: carWhereInput;
    orderBy?: carOrderByWithAggregationInput | carOrderByWithAggregationInput[];
    by: CarScalarFieldEnum[] | CarScalarFieldEnum;
    having?: carScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarCountAggregateInputType | true;
    _avg?: CarAvgAggregateInputType;
    _sum?: CarSumAggregateInputType;
    _min?: CarMinAggregateInputType;
    _max?: CarMaxAggregateInputType;
  };

  export type CarGroupByOutputType = {
    id: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    created_at: Date;
    updated_at: Date;
    _count: CarCountAggregateOutputType | null;
    _avg: CarAvgAggregateOutputType | null;
    _sum: CarSumAggregateOutputType | null;
    _min: CarMinAggregateOutputType | null;
    _max: CarMaxAggregateOutputType | null;
  };

  type GetCarGroupByPayload<T extends carGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CarGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CarGroupByOutputType[P]>
          : GetScalarType<T[P], CarGroupByOutputType[P]>;
      }
    >
  >;

  export type carSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      make?: boolean;
      model?: boolean;
      year?: boolean;
      color?: boolean;
      license_plate?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      car_sharing?: boolean | car$car_sharingArgs<ExtArgs>;
      _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['car']
  >;

  export type carSelectScalar = {
    id?: boolean;
    make?: boolean;
    model?: boolean;
    year?: boolean;
    color?: boolean;
    license_plate?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type carInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car_sharing?: boolean | car$car_sharingArgs<ExtArgs>;
    _count?: boolean | CarCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $carPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'car';
    objects: {
      car_sharing: Prisma.$car_sharingPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        make: string;
        model: string;
        year: number;
        color: string;
        license_plate: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['car']
    >;
    composites: {};
  };

  type carGetPayload<S extends boolean | null | undefined | carDefaultArgs> = $Result.GetResult<Prisma.$carPayload, S>;

  type carCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    carFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CarCountAggregateInputType | true;
  };

  export interface carDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['car']; meta: { name: 'car' } };
    /**
     * Find zero or one Car that matches the filter.
     * @param {carFindUniqueArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends carFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, carFindUniqueArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Car that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {carFindUniqueOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends carFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Car that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindFirstArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends carFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindFirstArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Car that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindFirstOrThrowArgs} args - Arguments to find a Car
     * @example
     * // Get one Car
     * const car = await prisma.car.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends carFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Cars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cars
     * const cars = await prisma.car.findMany()
     *
     * // Get first 10 Cars
     * const cars = await prisma.car.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carWithIdOnly = await prisma.car.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends carFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Car.
     * @param {carCreateArgs} args - Arguments to create a Car.
     * @example
     * // Create one Car
     * const Car = await prisma.car.create({
     *   data: {
     *     // ... data to create a Car
     *   }
     * })
     *
     **/
    create<T extends carCreateArgs<ExtArgs>>(
      args: SelectSubset<T, carCreateArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Cars.
     *     @param {carCreateManyArgs} args - Arguments to create many Cars.
     *     @example
     *     // Create many Cars
     *     const car = await prisma.car.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends carCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Car.
     * @param {carDeleteArgs} args - Arguments to delete one Car.
     * @example
     * // Delete one Car
     * const Car = await prisma.car.delete({
     *   where: {
     *     // ... filter to delete one Car
     *   }
     * })
     *
     **/
    delete<T extends carDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, carDeleteArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Car.
     * @param {carUpdateArgs} args - Arguments to update one Car.
     * @example
     * // Update one Car
     * const car = await prisma.car.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends carUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, carUpdateArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Cars.
     * @param {carDeleteManyArgs} args - Arguments to filter Cars to delete.
     * @example
     * // Delete a few Cars
     * const { count } = await prisma.car.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends carDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, carDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cars
     * const car = await prisma.car.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends carUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, carUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Car.
     * @param {carUpsertArgs} args - Arguments to update or create a Car.
     * @example
     * // Update or create a Car
     * const car = await prisma.car.upsert({
     *   create: {
     *     // ... data to create a Car
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car we want to update
     *   }
     * })
     **/
    upsert<T extends carUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, carUpsertArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Cars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carCountArgs} args - Arguments to filter Cars to count.
     * @example
     * // Count the number of Cars
     * const count = await prisma.car.count({
     *   where: {
     *     // ... the filter for the Cars we want to count
     *   }
     * })
     **/
    count<T extends carCountArgs>(
      args?: Subset<T, carCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CarAggregateArgs>(
      args: Subset<T, CarAggregateArgs>,
    ): Prisma.PrismaPromise<GetCarAggregateType<T>>;

    /**
     * Group by Car.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {carGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends carGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: carGroupByArgs['orderBy'] }
        : { orderBy?: carGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, carGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the car model
     */
    readonly fields: carFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for car.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__carClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car_sharing<T extends car$car_sharingArgs<ExtArgs> = {}>(
      args?: Subset<T, car$car_sharingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the car model
   */
  interface carFieldRefs {
    readonly id: FieldRef<'car', 'String'>;
    readonly make: FieldRef<'car', 'String'>;
    readonly model: FieldRef<'car', 'String'>;
    readonly year: FieldRef<'car', 'Int'>;
    readonly color: FieldRef<'car', 'String'>;
    readonly license_plate: FieldRef<'car', 'String'>;
    readonly created_at: FieldRef<'car', 'DateTime'>;
    readonly updated_at: FieldRef<'car', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * car findUnique
   */
  export type carFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car findUniqueOrThrow
   */
  export type carFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car findFirst
   */
  export type carFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cars.
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * car findFirstOrThrow
   */
  export type carFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which car to fetch.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cars.
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cars.
     */
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * car findMany
   */
  export type carFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter, which cars to fetch.
     */
    where?: carWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cars to fetch.
     */
    orderBy?: carOrderByWithRelationInput | carOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cars.
     */
    cursor?: carWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cars from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cars.
     */
    skip?: number;
    distinct?: CarScalarFieldEnum | CarScalarFieldEnum[];
  };

  /**
   * car create
   */
  export type carCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * The data needed to create a car.
     */
    data: XOR<carCreateInput, carUncheckedCreateInput>;
  };

  /**
   * car createMany
   */
  export type carCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cars.
     */
    data: carCreateManyInput | carCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * car update
   */
  export type carUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * The data needed to update a car.
     */
    data: XOR<carUpdateInput, carUncheckedUpdateInput>;
    /**
     * Choose, which car to update.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car updateMany
   */
  export type carUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cars.
     */
    data: XOR<carUpdateManyMutationInput, carUncheckedUpdateManyInput>;
    /**
     * Filter which cars to update
     */
    where?: carWhereInput;
  };

  /**
   * car upsert
   */
  export type carUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * The filter to search for the car to update in case it exists.
     */
    where: carWhereUniqueInput;
    /**
     * In case the car found by the `where` argument doesn't exist, create a new car with this data.
     */
    create: XOR<carCreateInput, carUncheckedCreateInput>;
    /**
     * In case the car was found with the provided `where` argument, update it with this data.
     */
    update: XOR<carUpdateInput, carUncheckedUpdateInput>;
  };

  /**
   * car delete
   */
  export type carDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
    /**
     * Filter which car to delete.
     */
    where: carWhereUniqueInput;
  };

  /**
   * car deleteMany
   */
  export type carDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cars to delete
     */
    where?: carWhereInput;
  };

  /**
   * car.car_sharing
   */
  export type car$car_sharingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    where?: car_sharingWhereInput;
    orderBy?: car_sharingOrderByWithRelationInput | car_sharingOrderByWithRelationInput[];
    cursor?: car_sharingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Car_sharingScalarFieldEnum | Car_sharingScalarFieldEnum[];
  };

  /**
   * car without action
   */
  export type carDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car
     */
    select?: carSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: carInclude<ExtArgs> | null;
  };

  /**
   * Model car_sharing
   */

  export type AggregateCar_sharing = {
    _count: Car_sharingCountAggregateOutputType | null;
    _min: Car_sharingMinAggregateOutputType | null;
    _max: Car_sharingMaxAggregateOutputType | null;
  };

  export type Car_sharingMinAggregateOutputType = {
    id: string | null;
    car_id: string | null;
    customer_id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    pickup_location: string | null;
    dropoff_location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Car_sharingMaxAggregateOutputType = {
    id: string | null;
    car_id: string | null;
    customer_id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    pickup_location: string | null;
    dropoff_location: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Car_sharingCountAggregateOutputType = {
    id: number;
    car_id: number;
    customer_id: number;
    start_time: number;
    end_time: number;
    pickup_location: number;
    dropoff_location: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Car_sharingMinAggregateInputType = {
    id?: true;
    car_id?: true;
    customer_id?: true;
    start_time?: true;
    end_time?: true;
    pickup_location?: true;
    dropoff_location?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Car_sharingMaxAggregateInputType = {
    id?: true;
    car_id?: true;
    customer_id?: true;
    start_time?: true;
    end_time?: true;
    pickup_location?: true;
    dropoff_location?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Car_sharingCountAggregateInputType = {
    id?: true;
    car_id?: true;
    customer_id?: true;
    start_time?: true;
    end_time?: true;
    pickup_location?: true;
    dropoff_location?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Car_sharingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car_sharing to aggregate.
     */
    where?: car_sharingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of car_sharings to fetch.
     */
    orderBy?: car_sharingOrderByWithRelationInput | car_sharingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: car_sharingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` car_sharings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` car_sharings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned car_sharings
     **/
    _count?: true | Car_sharingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Car_sharingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Car_sharingMaxAggregateInputType;
  };

  export type GetCar_sharingAggregateType<T extends Car_sharingAggregateArgs> = {
    [P in keyof T & keyof AggregateCar_sharing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCar_sharing[P]>
      : GetScalarType<T[P], AggregateCar_sharing[P]>;
  };

  export type car_sharingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: car_sharingWhereInput;
    orderBy?: car_sharingOrderByWithAggregationInput | car_sharingOrderByWithAggregationInput[];
    by: Car_sharingScalarFieldEnum[] | Car_sharingScalarFieldEnum;
    having?: car_sharingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Car_sharingCountAggregateInputType | true;
    _min?: Car_sharingMinAggregateInputType;
    _max?: Car_sharingMaxAggregateInputType;
  };

  export type Car_sharingGroupByOutputType = {
    id: string;
    car_id: string;
    customer_id: string;
    start_time: Date;
    end_time: Date;
    pickup_location: string;
    dropoff_location: string;
    created_at: Date;
    updated_at: Date;
    _count: Car_sharingCountAggregateOutputType | null;
    _min: Car_sharingMinAggregateOutputType | null;
    _max: Car_sharingMaxAggregateOutputType | null;
  };

  type GetCar_sharingGroupByPayload<T extends car_sharingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Car_sharingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Car_sharingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Car_sharingGroupByOutputType[P]>
          : GetScalarType<T[P], Car_sharingGroupByOutputType[P]>;
      }
    >
  >;

  export type car_sharingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        car_id?: boolean;
        customer_id?: boolean;
        start_time?: boolean;
        end_time?: boolean;
        pickup_location?: boolean;
        dropoff_location?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        car?: boolean | carDefaultArgs<ExtArgs>;
        customer?: boolean | customerDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['car_sharing']
    >;

  export type car_sharingSelectScalar = {
    id?: boolean;
    car_id?: boolean;
    customer_id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    pickup_location?: boolean;
    dropoff_location?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type car_sharingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car?: boolean | carDefaultArgs<ExtArgs>;
    customer?: boolean | customerDefaultArgs<ExtArgs>;
  };

  export type $car_sharingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'car_sharing';
    objects: {
      car: Prisma.$carPayload<ExtArgs>;
      customer: Prisma.$customerPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        car_id: string;
        customer_id: string;
        start_time: Date;
        end_time: Date;
        pickup_location: string;
        dropoff_location: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['car_sharing']
    >;
    composites: {};
  };

  type car_sharingGetPayload<S extends boolean | null | undefined | car_sharingDefaultArgs> = $Result.GetResult<
    Prisma.$car_sharingPayload,
    S
  >;

  type car_sharingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    car_sharingFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Car_sharingCountAggregateInputType | true;
  };

  export interface car_sharingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['car_sharing']; meta: { name: 'car_sharing' } };
    /**
     * Find zero or one Car_sharing that matches the filter.
     * @param {car_sharingFindUniqueArgs} args - Arguments to find a Car_sharing
     * @example
     * // Get one Car_sharing
     * const car_sharing = await prisma.car_sharing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends car_sharingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, car_sharingFindUniqueArgs<ExtArgs>>,
    ): Prisma__car_sharingClient<
      $Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Car_sharing that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {car_sharingFindUniqueOrThrowArgs} args - Arguments to find a Car_sharing
     * @example
     * // Get one Car_sharing
     * const car_sharing = await prisma.car_sharing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends car_sharingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, car_sharingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__car_sharingClient<
      $Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Car_sharing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_sharingFindFirstArgs} args - Arguments to find a Car_sharing
     * @example
     * // Get one Car_sharing
     * const car_sharing = await prisma.car_sharing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends car_sharingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, car_sharingFindFirstArgs<ExtArgs>>,
    ): Prisma__car_sharingClient<
      $Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Car_sharing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_sharingFindFirstOrThrowArgs} args - Arguments to find a Car_sharing
     * @example
     * // Get one Car_sharing
     * const car_sharing = await prisma.car_sharing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends car_sharingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, car_sharingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__car_sharingClient<
      $Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Car_sharings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_sharingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Car_sharings
     * const car_sharings = await prisma.car_sharing.findMany()
     *
     * // Get first 10 Car_sharings
     * const car_sharings = await prisma.car_sharing.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const car_sharingWithIdOnly = await prisma.car_sharing.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends car_sharingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, car_sharingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Car_sharing.
     * @param {car_sharingCreateArgs} args - Arguments to create a Car_sharing.
     * @example
     * // Create one Car_sharing
     * const Car_sharing = await prisma.car_sharing.create({
     *   data: {
     *     // ... data to create a Car_sharing
     *   }
     * })
     *
     **/
    create<T extends car_sharingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, car_sharingCreateArgs<ExtArgs>>,
    ): Prisma__car_sharingClient<$Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Car_sharings.
     *     @param {car_sharingCreateManyArgs} args - Arguments to create many Car_sharings.
     *     @example
     *     // Create many Car_sharings
     *     const car_sharing = await prisma.car_sharing.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends car_sharingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, car_sharingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Car_sharing.
     * @param {car_sharingDeleteArgs} args - Arguments to delete one Car_sharing.
     * @example
     * // Delete one Car_sharing
     * const Car_sharing = await prisma.car_sharing.delete({
     *   where: {
     *     // ... filter to delete one Car_sharing
     *   }
     * })
     *
     **/
    delete<T extends car_sharingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, car_sharingDeleteArgs<ExtArgs>>,
    ): Prisma__car_sharingClient<$Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Car_sharing.
     * @param {car_sharingUpdateArgs} args - Arguments to update one Car_sharing.
     * @example
     * // Update one Car_sharing
     * const car_sharing = await prisma.car_sharing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends car_sharingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, car_sharingUpdateArgs<ExtArgs>>,
    ): Prisma__car_sharingClient<$Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Car_sharings.
     * @param {car_sharingDeleteManyArgs} args - Arguments to filter Car_sharings to delete.
     * @example
     * // Delete a few Car_sharings
     * const { count } = await prisma.car_sharing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends car_sharingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, car_sharingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Car_sharings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_sharingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Car_sharings
     * const car_sharing = await prisma.car_sharing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends car_sharingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, car_sharingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Car_sharing.
     * @param {car_sharingUpsertArgs} args - Arguments to update or create a Car_sharing.
     * @example
     * // Update or create a Car_sharing
     * const car_sharing = await prisma.car_sharing.upsert({
     *   create: {
     *     // ... data to create a Car_sharing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Car_sharing we want to update
     *   }
     * })
     **/
    upsert<T extends car_sharingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, car_sharingUpsertArgs<ExtArgs>>,
    ): Prisma__car_sharingClient<$Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Car_sharings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_sharingCountArgs} args - Arguments to filter Car_sharings to count.
     * @example
     * // Count the number of Car_sharings
     * const count = await prisma.car_sharing.count({
     *   where: {
     *     // ... the filter for the Car_sharings we want to count
     *   }
     * })
     **/
    count<T extends car_sharingCountArgs>(
      args?: Subset<T, car_sharingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Car_sharingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Car_sharing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Car_sharingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Car_sharingAggregateArgs>(
      args: Subset<T, Car_sharingAggregateArgs>,
    ): Prisma.PrismaPromise<GetCar_sharingAggregateType<T>>;

    /**
     * Group by Car_sharing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {car_sharingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends car_sharingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: car_sharingGroupByArgs['orderBy'] }
        : { orderBy?: car_sharingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, car_sharingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCar_sharingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the car_sharing model
     */
    readonly fields: car_sharingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for car_sharing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__car_sharingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car<T extends carDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, carDefaultArgs<ExtArgs>>,
    ): Prisma__carClient<$Result.GetResult<Prisma.$carPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    customer<T extends customerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, customerDefaultArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the car_sharing model
   */
  interface car_sharingFieldRefs {
    readonly id: FieldRef<'car_sharing', 'String'>;
    readonly car_id: FieldRef<'car_sharing', 'String'>;
    readonly customer_id: FieldRef<'car_sharing', 'String'>;
    readonly start_time: FieldRef<'car_sharing', 'DateTime'>;
    readonly end_time: FieldRef<'car_sharing', 'DateTime'>;
    readonly pickup_location: FieldRef<'car_sharing', 'String'>;
    readonly dropoff_location: FieldRef<'car_sharing', 'String'>;
    readonly created_at: FieldRef<'car_sharing', 'DateTime'>;
    readonly updated_at: FieldRef<'car_sharing', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * car_sharing findUnique
   */
  export type car_sharingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    /**
     * Filter, which car_sharing to fetch.
     */
    where: car_sharingWhereUniqueInput;
  };

  /**
   * car_sharing findUniqueOrThrow
   */
  export type car_sharingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    /**
     * Filter, which car_sharing to fetch.
     */
    where: car_sharingWhereUniqueInput;
  };

  /**
   * car_sharing findFirst
   */
  export type car_sharingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    /**
     * Filter, which car_sharing to fetch.
     */
    where?: car_sharingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of car_sharings to fetch.
     */
    orderBy?: car_sharingOrderByWithRelationInput | car_sharingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for car_sharings.
     */
    cursor?: car_sharingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` car_sharings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` car_sharings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of car_sharings.
     */
    distinct?: Car_sharingScalarFieldEnum | Car_sharingScalarFieldEnum[];
  };

  /**
   * car_sharing findFirstOrThrow
   */
  export type car_sharingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    /**
     * Filter, which car_sharing to fetch.
     */
    where?: car_sharingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of car_sharings to fetch.
     */
    orderBy?: car_sharingOrderByWithRelationInput | car_sharingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for car_sharings.
     */
    cursor?: car_sharingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` car_sharings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` car_sharings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of car_sharings.
     */
    distinct?: Car_sharingScalarFieldEnum | Car_sharingScalarFieldEnum[];
  };

  /**
   * car_sharing findMany
   */
  export type car_sharingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    /**
     * Filter, which car_sharings to fetch.
     */
    where?: car_sharingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of car_sharings to fetch.
     */
    orderBy?: car_sharingOrderByWithRelationInput | car_sharingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing car_sharings.
     */
    cursor?: car_sharingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` car_sharings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` car_sharings.
     */
    skip?: number;
    distinct?: Car_sharingScalarFieldEnum | Car_sharingScalarFieldEnum[];
  };

  /**
   * car_sharing create
   */
  export type car_sharingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    /**
     * The data needed to create a car_sharing.
     */
    data: XOR<car_sharingCreateInput, car_sharingUncheckedCreateInput>;
  };

  /**
   * car_sharing createMany
   */
  export type car_sharingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many car_sharings.
     */
    data: car_sharingCreateManyInput | car_sharingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * car_sharing update
   */
  export type car_sharingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    /**
     * The data needed to update a car_sharing.
     */
    data: XOR<car_sharingUpdateInput, car_sharingUncheckedUpdateInput>;
    /**
     * Choose, which car_sharing to update.
     */
    where: car_sharingWhereUniqueInput;
  };

  /**
   * car_sharing updateMany
   */
  export type car_sharingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update car_sharings.
     */
    data: XOR<car_sharingUpdateManyMutationInput, car_sharingUncheckedUpdateManyInput>;
    /**
     * Filter which car_sharings to update
     */
    where?: car_sharingWhereInput;
  };

  /**
   * car_sharing upsert
   */
  export type car_sharingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    /**
     * The filter to search for the car_sharing to update in case it exists.
     */
    where: car_sharingWhereUniqueInput;
    /**
     * In case the car_sharing found by the `where` argument doesn't exist, create a new car_sharing with this data.
     */
    create: XOR<car_sharingCreateInput, car_sharingUncheckedCreateInput>;
    /**
     * In case the car_sharing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<car_sharingUpdateInput, car_sharingUncheckedUpdateInput>;
  };

  /**
   * car_sharing delete
   */
  export type car_sharingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    /**
     * Filter which car_sharing to delete.
     */
    where: car_sharingWhereUniqueInput;
  };

  /**
   * car_sharing deleteMany
   */
  export type car_sharingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which car_sharings to delete
     */
    where?: car_sharingWhereInput;
  };

  /**
   * car_sharing without action
   */
  export type car_sharingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
  };

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  export type CustomerMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerCountAggregateOutputType = {
    id: number;
    user_id: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CustomerMinAggregateInputType = {
    id?: true;
    user_id?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerCountAggregateInputType = {
    id?: true;
    user_id?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customers
     **/
    _count?: true | CustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType;
  };

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>;
  };

  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput;
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[];
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum;
    having?: customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
  };

  export type CustomerGroupByOutputType = {
    id: string;
    user_id: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at: Date;
    updated_at: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
          : GetScalarType<T[P], CustomerGroupByOutputType[P]>;
      }
    >
  >;

  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        address?: boolean;
        city?: boolean;
        state?: boolean;
        zip_code?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        car_sharing?: boolean | customer$car_sharingArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['customer']
    >;

  export type customerSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    car_sharing?: boolean | customer$car_sharingArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'customer';
    objects: {
      car_sharing: Prisma.$car_sharingPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        address: string;
        city: string;
        state: string;
        zip_code: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['customer']
    >;
    composites: {};
  };

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<
    Prisma.$customerPayload,
    S
  >;

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    customerFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CustomerCountAggregateInputType | true;
  };

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer']; meta: { name: 'customer' } };
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     **/
    create<T extends customerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customerCreateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Customers.
     *     @param {customerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     **/
    delete<T extends customerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customerDeleteArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     **/
    upsert<T extends customerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpsertArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the customer model
     */
    readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    car_sharing<T extends customer$car_sharingArgs<ExtArgs> = {}>(
      args?: Subset<T, customer$car_sharingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$car_sharingPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<'customer', 'String'>;
    readonly user_id: FieldRef<'customer', 'String'>;
    readonly address: FieldRef<'customer', 'String'>;
    readonly city: FieldRef<'customer', 'String'>;
    readonly state: FieldRef<'customer', 'String'>;
    readonly zip_code: FieldRef<'customer', 'String'>;
    readonly created_at: FieldRef<'customer', 'DateTime'>;
    readonly updated_at: FieldRef<'customer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>;
  };

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>;
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput;
  };

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput;
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>;
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
  };

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput;
  };

  /**
   * customer.car_sharing
   */
  export type customer$car_sharingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the car_sharing
     */
    select?: car_sharingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: car_sharingInclude<ExtArgs> | null;
    where?: car_sharingWhereInput;
    orderBy?: car_sharingOrderByWithRelationInput | car_sharingOrderByWithRelationInput[];
    cursor?: car_sharingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Car_sharingScalarFieldEnum | Car_sharingScalarFieldEnum[];
  };

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
  };

  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput;
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[];
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
    having?: teamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
  };

  export type TeamGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | team$userArgs<ExtArgs>;
      _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type teamSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | team$userArgs<ExtArgs>;
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<
    Prisma.$teamPayload,
    S
  >;

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teamFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team']; meta: { name: 'team' } };
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     **/
    create<T extends teamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamCreateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teams.
     *     @param {teamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     **/
    delete<T extends teamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamDeleteArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     **/
    upsert<T extends teamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpsertArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team model
     */
    readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends team$userArgs<ExtArgs> = {}>(
      args?: Subset<T, team$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<'team', 'String'>;
    readonly description: FieldRef<'team', 'String'>;
    readonly name: FieldRef<'team', 'String'>;
    readonly created_at: FieldRef<'team', 'DateTime'>;
    readonly updated_at: FieldRef<'team', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>;
  };

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>;
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput;
  };

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput;
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>;
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
  };

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput;
  };

  /**
   * team.user
   */
  export type team$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    team_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    team_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    team_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    team_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    team_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    team_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    team_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      team_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
      customer?: boolean | user$customerArgs<ExtArgs>;
      team?: boolean | user$teamArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    team_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
    customer?: boolean | user$customerArgs<ExtArgs>;
    team?: boolean | user$teamArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      business_owner: Prisma.$business_ownerPayload<ExtArgs>[];
      customer: Prisma.$customerPayload<ExtArgs>[];
      team: Prisma.$teamPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        team_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    business_owner<T extends user$business_ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$business_ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    customer<T extends user$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    team<T extends user$teamArgs<ExtArgs> = {}>(
      args?: Subset<T, user$teamArgs<ExtArgs>>,
    ): Prisma__teamClient<
      $Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly team_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.business_owner
   */
  export type user$business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    cursor?: business_ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * user.customer
   */
  export type user$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * user.team
   */
  export type user$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    where?: teamWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Business_ownerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    business_name: 'business_name';
    business_address: 'business_address';
    business_contact: 'business_contact';
    business_email: 'business_email';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Business_ownerScalarFieldEnum =
    (typeof Business_ownerScalarFieldEnum)[keyof typeof Business_ownerScalarFieldEnum];

  export const CarScalarFieldEnum: {
    id: 'id';
    make: 'make';
    model: 'model';
    year: 'year';
    color: 'color';
    license_plate: 'license_plate';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CarScalarFieldEnum = (typeof CarScalarFieldEnum)[keyof typeof CarScalarFieldEnum];

  export const Car_sharingScalarFieldEnum: {
    id: 'id';
    car_id: 'car_id';
    customer_id: 'customer_id';
    start_time: 'start_time';
    end_time: 'end_time';
    pickup_location: 'pickup_location';
    dropoff_location: 'dropoff_location';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Car_sharingScalarFieldEnum = (typeof Car_sharingScalarFieldEnum)[keyof typeof Car_sharingScalarFieldEnum];

  export const CustomerScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    team_id: 'team_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type business_ownerWhereInput = {
    AND?: business_ownerWhereInput | business_ownerWhereInput[];
    OR?: business_ownerWhereInput[];
    NOT?: business_ownerWhereInput | business_ownerWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    business_name?: StringFilter<'business_owner'> | string;
    business_address?: StringFilter<'business_owner'> | string;
    business_contact?: StringFilter<'business_owner'> | string;
    business_email?: StringFilter<'business_owner'> | string;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type business_ownerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    business_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type business_ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: business_ownerWhereInput | business_ownerWhereInput[];
      OR?: business_ownerWhereInput[];
      NOT?: business_ownerWhereInput | business_ownerWhereInput[];
      user_id?: UuidFilter<'business_owner'> | string;
      business_name?: StringFilter<'business_owner'> | string;
      business_address?: StringFilter<'business_owner'> | string;
      business_contact?: StringFilter<'business_owner'> | string;
      business_email?: StringFilter<'business_owner'> | string;
      created_at?: DateTimeFilter<'business_owner'> | Date | string;
      updated_at?: DateTimeFilter<'business_owner'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type business_ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    business_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: business_ownerCountOrderByAggregateInput;
    _max?: business_ownerMaxOrderByAggregateInput;
    _min?: business_ownerMinOrderByAggregateInput;
  };

  export type business_ownerScalarWhereWithAggregatesInput = {
    AND?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    OR?: business_ownerScalarWhereWithAggregatesInput[];
    NOT?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'business_owner'> | string;
    user_id?: UuidWithAggregatesFilter<'business_owner'> | string;
    business_name?: StringWithAggregatesFilter<'business_owner'> | string;
    business_address?: StringWithAggregatesFilter<'business_owner'> | string;
    business_contact?: StringWithAggregatesFilter<'business_owner'> | string;
    business_email?: StringWithAggregatesFilter<'business_owner'> | string;
    created_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
  };

  export type carWhereInput = {
    AND?: carWhereInput | carWhereInput[];
    OR?: carWhereInput[];
    NOT?: carWhereInput | carWhereInput[];
    id?: UuidFilter<'car'> | string;
    make?: StringFilter<'car'> | string;
    model?: StringFilter<'car'> | string;
    year?: IntFilter<'car'> | number;
    color?: StringFilter<'car'> | string;
    license_plate?: StringFilter<'car'> | string;
    created_at?: DateTimeFilter<'car'> | Date | string;
    updated_at?: DateTimeFilter<'car'> | Date | string;
    car_sharing?: Car_sharingListRelationFilter;
  };

  export type carOrderByWithRelationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    car_sharing?: car_sharingOrderByRelationAggregateInput;
  };

  export type carWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: carWhereInput | carWhereInput[];
      OR?: carWhereInput[];
      NOT?: carWhereInput | carWhereInput[];
      make?: StringFilter<'car'> | string;
      model?: StringFilter<'car'> | string;
      year?: IntFilter<'car'> | number;
      color?: StringFilter<'car'> | string;
      license_plate?: StringFilter<'car'> | string;
      created_at?: DateTimeFilter<'car'> | Date | string;
      updated_at?: DateTimeFilter<'car'> | Date | string;
      car_sharing?: Car_sharingListRelationFilter;
    },
    'id'
  >;

  export type carOrderByWithAggregationInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: carCountOrderByAggregateInput;
    _avg?: carAvgOrderByAggregateInput;
    _max?: carMaxOrderByAggregateInput;
    _min?: carMinOrderByAggregateInput;
    _sum?: carSumOrderByAggregateInput;
  };

  export type carScalarWhereWithAggregatesInput = {
    AND?: carScalarWhereWithAggregatesInput | carScalarWhereWithAggregatesInput[];
    OR?: carScalarWhereWithAggregatesInput[];
    NOT?: carScalarWhereWithAggregatesInput | carScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'car'> | string;
    make?: StringWithAggregatesFilter<'car'> | string;
    model?: StringWithAggregatesFilter<'car'> | string;
    year?: IntWithAggregatesFilter<'car'> | number;
    color?: StringWithAggregatesFilter<'car'> | string;
    license_plate?: StringWithAggregatesFilter<'car'> | string;
    created_at?: DateTimeWithAggregatesFilter<'car'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'car'> | Date | string;
  };

  export type car_sharingWhereInput = {
    AND?: car_sharingWhereInput | car_sharingWhereInput[];
    OR?: car_sharingWhereInput[];
    NOT?: car_sharingWhereInput | car_sharingWhereInput[];
    id?: UuidFilter<'car_sharing'> | string;
    car_id?: UuidFilter<'car_sharing'> | string;
    customer_id?: UuidFilter<'car_sharing'> | string;
    start_time?: DateTimeFilter<'car_sharing'> | Date | string;
    end_time?: DateTimeFilter<'car_sharing'> | Date | string;
    pickup_location?: StringFilter<'car_sharing'> | string;
    dropoff_location?: StringFilter<'car_sharing'> | string;
    created_at?: DateTimeFilter<'car_sharing'> | Date | string;
    updated_at?: DateTimeFilter<'car_sharing'> | Date | string;
    car?: XOR<CarRelationFilter, carWhereInput>;
    customer?: XOR<CustomerRelationFilter, customerWhereInput>;
  };

  export type car_sharingOrderByWithRelationInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    customer_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    car?: carOrderByWithRelationInput;
    customer?: customerOrderByWithRelationInput;
  };

  export type car_sharingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: car_sharingWhereInput | car_sharingWhereInput[];
      OR?: car_sharingWhereInput[];
      NOT?: car_sharingWhereInput | car_sharingWhereInput[];
      car_id?: UuidFilter<'car_sharing'> | string;
      customer_id?: UuidFilter<'car_sharing'> | string;
      start_time?: DateTimeFilter<'car_sharing'> | Date | string;
      end_time?: DateTimeFilter<'car_sharing'> | Date | string;
      pickup_location?: StringFilter<'car_sharing'> | string;
      dropoff_location?: StringFilter<'car_sharing'> | string;
      created_at?: DateTimeFilter<'car_sharing'> | Date | string;
      updated_at?: DateTimeFilter<'car_sharing'> | Date | string;
      car?: XOR<CarRelationFilter, carWhereInput>;
      customer?: XOR<CustomerRelationFilter, customerWhereInput>;
    },
    'id'
  >;

  export type car_sharingOrderByWithAggregationInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    customer_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: car_sharingCountOrderByAggregateInput;
    _max?: car_sharingMaxOrderByAggregateInput;
    _min?: car_sharingMinOrderByAggregateInput;
  };

  export type car_sharingScalarWhereWithAggregatesInput = {
    AND?: car_sharingScalarWhereWithAggregatesInput | car_sharingScalarWhereWithAggregatesInput[];
    OR?: car_sharingScalarWhereWithAggregatesInput[];
    NOT?: car_sharingScalarWhereWithAggregatesInput | car_sharingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'car_sharing'> | string;
    car_id?: UuidWithAggregatesFilter<'car_sharing'> | string;
    customer_id?: UuidWithAggregatesFilter<'car_sharing'> | string;
    start_time?: DateTimeWithAggregatesFilter<'car_sharing'> | Date | string;
    end_time?: DateTimeWithAggregatesFilter<'car_sharing'> | Date | string;
    pickup_location?: StringWithAggregatesFilter<'car_sharing'> | string;
    dropoff_location?: StringWithAggregatesFilter<'car_sharing'> | string;
    created_at?: DateTimeWithAggregatesFilter<'car_sharing'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'car_sharing'> | Date | string;
  };

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[];
    OR?: customerWhereInput[];
    NOT?: customerWhereInput | customerWhereInput[];
    id?: UuidFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    city?: StringFilter<'customer'> | string;
    state?: StringFilter<'customer'> | string;
    zip_code?: StringFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
    car_sharing?: Car_sharingListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type customerOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    car_sharing?: car_sharingOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type customerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: customerWhereInput | customerWhereInput[];
      OR?: customerWhereInput[];
      NOT?: customerWhereInput | customerWhereInput[];
      user_id?: UuidFilter<'customer'> | string;
      address?: StringFilter<'customer'> | string;
      city?: StringFilter<'customer'> | string;
      state?: StringFilter<'customer'> | string;
      zip_code?: StringFilter<'customer'> | string;
      created_at?: DateTimeFilter<'customer'> | Date | string;
      updated_at?: DateTimeFilter<'customer'> | Date | string;
      car_sharing?: Car_sharingListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: customerCountOrderByAggregateInput;
    _max?: customerMaxOrderByAggregateInput;
    _min?: customerMinOrderByAggregateInput;
  };

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    OR?: customerScalarWhereWithAggregatesInput[];
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'customer'> | string;
    user_id?: UuidWithAggregatesFilter<'customer'> | string;
    address?: StringWithAggregatesFilter<'customer'> | string;
    city?: StringWithAggregatesFilter<'customer'> | string;
    state?: StringWithAggregatesFilter<'customer'> | string;
    zip_code?: StringWithAggregatesFilter<'customer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
  };

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[];
    OR?: teamWhereInput[];
    NOT?: teamWhereInput | teamWhereInput[];
    id?: UuidFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    name?: StringFilter<'team'> | string;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type teamOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type teamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teamWhereInput | teamWhereInput[];
      OR?: teamWhereInput[];
      NOT?: teamWhereInput | teamWhereInput[];
      description?: StringNullableFilter<'team'> | string | null;
      name?: StringFilter<'team'> | string;
      created_at?: DateTimeFilter<'team'> | Date | string;
      updated_at?: DateTimeFilter<'team'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teamCountOrderByAggregateInput;
    _max?: teamMaxOrderByAggregateInput;
    _min?: teamMinOrderByAggregateInput;
  };

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    OR?: teamScalarWhereWithAggregatesInput[];
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team'> | string;
    description?: StringNullableWithAggregatesFilter<'team'> | string | null;
    name?: StringWithAggregatesFilter<'team'> | string;
    created_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    team_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    business_owner?: Business_ownerListRelationFilter;
    customer?: CustomerListRelationFilter;
    team?: XOR<TeamNullableRelationFilter, teamWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    business_owner?: business_ownerOrderByRelationAggregateInput;
    customer?: customerOrderByRelationAggregateInput;
    team?: teamOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      team_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      business_owner?: Business_ownerListRelationFilter;
      customer?: CustomerListRelationFilter;
      team?: XOR<TeamNullableRelationFilter, teamWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    team_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type business_ownerCreateInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    business_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBusiness_ownerInput;
  };

  export type business_ownerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    business_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    business_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBusiness_ownerNestedInput;
  };

  export type business_ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    business_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerCreateManyInput = {
    id?: string;
    user_id: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    business_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    business_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    business_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car_sharing?: car_sharingCreateNestedManyWithoutCarInput;
  };

  export type carUncheckedCreateInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car_sharing?: car_sharingUncheckedCreateNestedManyWithoutCarInput;
  };

  export type carUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car_sharing?: car_sharingUpdateManyWithoutCarNestedInput;
  };

  export type carUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car_sharing?: car_sharingUncheckedUpdateManyWithoutCarNestedInput;
  };

  export type carCreateManyInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type carUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type car_sharingCreateInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car: carCreateNestedOneWithoutCar_sharingInput;
    customer: customerCreateNestedOneWithoutCar_sharingInput;
  };

  export type car_sharingUncheckedCreateInput = {
    id?: string;
    car_id: string;
    customer_id: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type car_sharingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: carUpdateOneRequiredWithoutCar_sharingNestedInput;
    customer?: customerUpdateOneRequiredWithoutCar_sharingNestedInput;
  };

  export type car_sharingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type car_sharingCreateManyInput = {
    id?: string;
    car_id: string;
    customer_id: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type car_sharingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type car_sharingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car_sharing?: car_sharingCreateNestedManyWithoutCustomerInput;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateInput = {
    id?: string;
    user_id: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car_sharing?: car_sharingUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car_sharing?: car_sharingUpdateManyWithoutCustomerNestedInput;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car_sharing?: car_sharingUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type customerCreateManyInput = {
    id?: string;
    user_id: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutTeamInput;
  };

  export type teamUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type teamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type teamCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    team?: teamUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type business_ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    business_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    business_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    business_email?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type Car_sharingListRelationFilter = {
    every?: car_sharingWhereInput;
    some?: car_sharingWhereInput;
    none?: car_sharingWhereInput;
  };

  export type car_sharingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type carCountOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carAvgOrderByAggregateInput = {
    year?: SortOrder;
  };

  export type carMaxOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carMinOrderByAggregateInput = {
    id?: SortOrder;
    make?: SortOrder;
    model?: SortOrder;
    year?: SortOrder;
    color?: SortOrder;
    license_plate?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type carSumOrderByAggregateInput = {
    year?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type CarRelationFilter = {
    is?: carWhereInput;
    isNot?: carWhereInput;
  };

  export type CustomerRelationFilter = {
    is?: customerWhereInput;
    isNot?: customerWhereInput;
  };

  export type car_sharingCountOrderByAggregateInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    customer_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type car_sharingMaxOrderByAggregateInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    customer_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type car_sharingMinOrderByAggregateInput = {
    id?: SortOrder;
    car_id?: SortOrder;
    customer_id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    pickup_location?: SortOrder;
    dropoff_location?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type Business_ownerListRelationFilter = {
    every?: business_ownerWhereInput;
    some?: business_ownerWhereInput;
    none?: business_ownerWhereInput;
  };

  export type CustomerListRelationFilter = {
    every?: customerWhereInput;
    some?: customerWhereInput;
    none?: customerWhereInput;
  };

  export type TeamNullableRelationFilter = {
    is?: teamWhereInput | null;
    isNot?: teamWhereInput | null;
  };

  export type business_ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    team_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateNestedOneWithoutBusiness_ownerInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutBusiness_ownerNestedInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    upsert?: userUpsertWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBusiness_ownerInput, userUpdateWithoutBusiness_ownerInput>,
      userUncheckedUpdateWithoutBusiness_ownerInput
    >;
  };

  export type car_sharingCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<car_sharingCreateWithoutCarInput, car_sharingUncheckedCreateWithoutCarInput>
      | car_sharingCreateWithoutCarInput[]
      | car_sharingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: car_sharingCreateOrConnectWithoutCarInput | car_sharingCreateOrConnectWithoutCarInput[];
    createMany?: car_sharingCreateManyCarInputEnvelope;
    connect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
  };

  export type car_sharingUncheckedCreateNestedManyWithoutCarInput = {
    create?:
      | XOR<car_sharingCreateWithoutCarInput, car_sharingUncheckedCreateWithoutCarInput>
      | car_sharingCreateWithoutCarInput[]
      | car_sharingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: car_sharingCreateOrConnectWithoutCarInput | car_sharingCreateOrConnectWithoutCarInput[];
    createMany?: car_sharingCreateManyCarInputEnvelope;
    connect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type car_sharingUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<car_sharingCreateWithoutCarInput, car_sharingUncheckedCreateWithoutCarInput>
      | car_sharingCreateWithoutCarInput[]
      | car_sharingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: car_sharingCreateOrConnectWithoutCarInput | car_sharingCreateOrConnectWithoutCarInput[];
    upsert?: car_sharingUpsertWithWhereUniqueWithoutCarInput | car_sharingUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: car_sharingCreateManyCarInputEnvelope;
    set?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    disconnect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    delete?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    connect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    update?: car_sharingUpdateWithWhereUniqueWithoutCarInput | car_sharingUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: car_sharingUpdateManyWithWhereWithoutCarInput | car_sharingUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: car_sharingScalarWhereInput | car_sharingScalarWhereInput[];
  };

  export type car_sharingUncheckedUpdateManyWithoutCarNestedInput = {
    create?:
      | XOR<car_sharingCreateWithoutCarInput, car_sharingUncheckedCreateWithoutCarInput>
      | car_sharingCreateWithoutCarInput[]
      | car_sharingUncheckedCreateWithoutCarInput[];
    connectOrCreate?: car_sharingCreateOrConnectWithoutCarInput | car_sharingCreateOrConnectWithoutCarInput[];
    upsert?: car_sharingUpsertWithWhereUniqueWithoutCarInput | car_sharingUpsertWithWhereUniqueWithoutCarInput[];
    createMany?: car_sharingCreateManyCarInputEnvelope;
    set?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    disconnect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    delete?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    connect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    update?: car_sharingUpdateWithWhereUniqueWithoutCarInput | car_sharingUpdateWithWhereUniqueWithoutCarInput[];
    updateMany?: car_sharingUpdateManyWithWhereWithoutCarInput | car_sharingUpdateManyWithWhereWithoutCarInput[];
    deleteMany?: car_sharingScalarWhereInput | car_sharingScalarWhereInput[];
  };

  export type carCreateNestedOneWithoutCar_sharingInput = {
    create?: XOR<carCreateWithoutCar_sharingInput, carUncheckedCreateWithoutCar_sharingInput>;
    connectOrCreate?: carCreateOrConnectWithoutCar_sharingInput;
    connect?: carWhereUniqueInput;
  };

  export type customerCreateNestedOneWithoutCar_sharingInput = {
    create?: XOR<customerCreateWithoutCar_sharingInput, customerUncheckedCreateWithoutCar_sharingInput>;
    connectOrCreate?: customerCreateOrConnectWithoutCar_sharingInput;
    connect?: customerWhereUniqueInput;
  };

  export type carUpdateOneRequiredWithoutCar_sharingNestedInput = {
    create?: XOR<carCreateWithoutCar_sharingInput, carUncheckedCreateWithoutCar_sharingInput>;
    connectOrCreate?: carCreateOrConnectWithoutCar_sharingInput;
    upsert?: carUpsertWithoutCar_sharingInput;
    connect?: carWhereUniqueInput;
    update?: XOR<
      XOR<carUpdateToOneWithWhereWithoutCar_sharingInput, carUpdateWithoutCar_sharingInput>,
      carUncheckedUpdateWithoutCar_sharingInput
    >;
  };

  export type customerUpdateOneRequiredWithoutCar_sharingNestedInput = {
    create?: XOR<customerCreateWithoutCar_sharingInput, customerUncheckedCreateWithoutCar_sharingInput>;
    connectOrCreate?: customerCreateOrConnectWithoutCar_sharingInput;
    upsert?: customerUpsertWithoutCar_sharingInput;
    connect?: customerWhereUniqueInput;
    update?: XOR<
      XOR<customerUpdateToOneWithWhereWithoutCar_sharingInput, customerUpdateWithoutCar_sharingInput>,
      customerUncheckedUpdateWithoutCar_sharingInput
    >;
  };

  export type car_sharingCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<car_sharingCreateWithoutCustomerInput, car_sharingUncheckedCreateWithoutCustomerInput>
      | car_sharingCreateWithoutCustomerInput[]
      | car_sharingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: car_sharingCreateOrConnectWithoutCustomerInput | car_sharingCreateOrConnectWithoutCustomerInput[];
    createMany?: car_sharingCreateManyCustomerInputEnvelope;
    connect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutCustomerInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    connect?: userWhereUniqueInput;
  };

  export type car_sharingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?:
      | XOR<car_sharingCreateWithoutCustomerInput, car_sharingUncheckedCreateWithoutCustomerInput>
      | car_sharingCreateWithoutCustomerInput[]
      | car_sharingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: car_sharingCreateOrConnectWithoutCustomerInput | car_sharingCreateOrConnectWithoutCustomerInput[];
    createMany?: car_sharingCreateManyCustomerInputEnvelope;
    connect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
  };

  export type car_sharingUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<car_sharingCreateWithoutCustomerInput, car_sharingUncheckedCreateWithoutCustomerInput>
      | car_sharingCreateWithoutCustomerInput[]
      | car_sharingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: car_sharingCreateOrConnectWithoutCustomerInput | car_sharingCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | car_sharingUpsertWithWhereUniqueWithoutCustomerInput
      | car_sharingUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: car_sharingCreateManyCustomerInputEnvelope;
    set?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    disconnect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    delete?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    connect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    update?:
      | car_sharingUpdateWithWhereUniqueWithoutCustomerInput
      | car_sharingUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | car_sharingUpdateManyWithWhereWithoutCustomerInput
      | car_sharingUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: car_sharingScalarWhereInput | car_sharingScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    upsert?: userUpsertWithoutCustomerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCustomerInput, userUpdateWithoutCustomerInput>,
      userUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type car_sharingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?:
      | XOR<car_sharingCreateWithoutCustomerInput, car_sharingUncheckedCreateWithoutCustomerInput>
      | car_sharingCreateWithoutCustomerInput[]
      | car_sharingUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: car_sharingCreateOrConnectWithoutCustomerInput | car_sharingCreateOrConnectWithoutCustomerInput[];
    upsert?:
      | car_sharingUpsertWithWhereUniqueWithoutCustomerInput
      | car_sharingUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: car_sharingCreateManyCustomerInputEnvelope;
    set?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    disconnect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    delete?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    connect?: car_sharingWhereUniqueInput | car_sharingWhereUniqueInput[];
    update?:
      | car_sharingUpdateWithWhereUniqueWithoutCustomerInput
      | car_sharingUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?:
      | car_sharingUpdateManyWithWhereWithoutCustomerInput
      | car_sharingUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: car_sharingScalarWhereInput | car_sharingScalarWhereInput[];
  };

  export type userCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    upsert?: userUpsertWithWhereUniqueWithoutTeamInput | userUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutTeamInput | userUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: userUpdateManyWithWhereWithoutTeamInput | userUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>
      | userCreateWithoutTeamInput[]
      | userUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: userCreateOrConnectWithoutTeamInput | userCreateOrConnectWithoutTeamInput[];
    upsert?: userUpsertWithWhereUniqueWithoutTeamInput | userUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: userCreateManyTeamInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutTeamInput | userUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: userUpdateManyWithWhereWithoutTeamInput | userUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type business_ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type customerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type teamCreateNestedOneWithoutUserInput = {
    create?: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
    connectOrCreate?: teamCreateOrConnectWithoutUserInput;
    connect?: teamWhereUniqueInput;
  };

  export type business_ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type business_ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type customerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type teamUpdateOneWithoutUserNestedInput = {
    create?: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
    connectOrCreate?: teamCreateOrConnectWithoutUserInput;
    upsert?: teamUpsertWithoutUserInput;
    disconnect?: teamWhereInput | boolean;
    delete?: teamWhereInput | boolean;
    connect?: teamWhereUniqueInput;
    update?: XOR<
      XOR<teamUpdateToOneWithWhereWithoutUserInput, teamUpdateWithoutUserInput>,
      teamUncheckedUpdateWithoutUserInput
    >;
  };

  export type business_ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBusiness_ownerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
  };

  export type userUpsertWithoutBusiness_ownerInput = {
    update: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBusiness_ownerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
  };

  export type userUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    team?: teamUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type car_sharingCreateWithoutCarInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer: customerCreateNestedOneWithoutCar_sharingInput;
  };

  export type car_sharingUncheckedCreateWithoutCarInput = {
    id?: string;
    customer_id: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type car_sharingCreateOrConnectWithoutCarInput = {
    where: car_sharingWhereUniqueInput;
    create: XOR<car_sharingCreateWithoutCarInput, car_sharingUncheckedCreateWithoutCarInput>;
  };

  export type car_sharingCreateManyCarInputEnvelope = {
    data: car_sharingCreateManyCarInput | car_sharingCreateManyCarInput[];
    skipDuplicates?: boolean;
  };

  export type car_sharingUpsertWithWhereUniqueWithoutCarInput = {
    where: car_sharingWhereUniqueInput;
    update: XOR<car_sharingUpdateWithoutCarInput, car_sharingUncheckedUpdateWithoutCarInput>;
    create: XOR<car_sharingCreateWithoutCarInput, car_sharingUncheckedCreateWithoutCarInput>;
  };

  export type car_sharingUpdateWithWhereUniqueWithoutCarInput = {
    where: car_sharingWhereUniqueInput;
    data: XOR<car_sharingUpdateWithoutCarInput, car_sharingUncheckedUpdateWithoutCarInput>;
  };

  export type car_sharingUpdateManyWithWhereWithoutCarInput = {
    where: car_sharingScalarWhereInput;
    data: XOR<car_sharingUpdateManyMutationInput, car_sharingUncheckedUpdateManyWithoutCarInput>;
  };

  export type car_sharingScalarWhereInput = {
    AND?: car_sharingScalarWhereInput | car_sharingScalarWhereInput[];
    OR?: car_sharingScalarWhereInput[];
    NOT?: car_sharingScalarWhereInput | car_sharingScalarWhereInput[];
    id?: UuidFilter<'car_sharing'> | string;
    car_id?: UuidFilter<'car_sharing'> | string;
    customer_id?: UuidFilter<'car_sharing'> | string;
    start_time?: DateTimeFilter<'car_sharing'> | Date | string;
    end_time?: DateTimeFilter<'car_sharing'> | Date | string;
    pickup_location?: StringFilter<'car_sharing'> | string;
    dropoff_location?: StringFilter<'car_sharing'> | string;
    created_at?: DateTimeFilter<'car_sharing'> | Date | string;
    updated_at?: DateTimeFilter<'car_sharing'> | Date | string;
  };

  export type carCreateWithoutCar_sharingInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type carUncheckedCreateWithoutCar_sharingInput = {
    id?: string;
    make: string;
    model: string;
    year: number;
    color: string;
    license_plate: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type carCreateOrConnectWithoutCar_sharingInput = {
    where: carWhereUniqueInput;
    create: XOR<carCreateWithoutCar_sharingInput, carUncheckedCreateWithoutCar_sharingInput>;
  };

  export type customerCreateWithoutCar_sharingInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutCar_sharingInput = {
    id?: string;
    user_id: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutCar_sharingInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutCar_sharingInput, customerUncheckedCreateWithoutCar_sharingInput>;
  };

  export type carUpsertWithoutCar_sharingInput = {
    update: XOR<carUpdateWithoutCar_sharingInput, carUncheckedUpdateWithoutCar_sharingInput>;
    create: XOR<carCreateWithoutCar_sharingInput, carUncheckedCreateWithoutCar_sharingInput>;
    where?: carWhereInput;
  };

  export type carUpdateToOneWithWhereWithoutCar_sharingInput = {
    where?: carWhereInput;
    data: XOR<carUpdateWithoutCar_sharingInput, carUncheckedUpdateWithoutCar_sharingInput>;
  };

  export type carUpdateWithoutCar_sharingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type carUncheckedUpdateWithoutCar_sharingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    make?: StringFieldUpdateOperationsInput | string;
    model?: StringFieldUpdateOperationsInput | string;
    year?: IntFieldUpdateOperationsInput | number;
    color?: StringFieldUpdateOperationsInput | string;
    license_plate?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUpsertWithoutCar_sharingInput = {
    update: XOR<customerUpdateWithoutCar_sharingInput, customerUncheckedUpdateWithoutCar_sharingInput>;
    create: XOR<customerCreateWithoutCar_sharingInput, customerUncheckedCreateWithoutCar_sharingInput>;
    where?: customerWhereInput;
  };

  export type customerUpdateToOneWithWhereWithoutCar_sharingInput = {
    where?: customerWhereInput;
    data: XOR<customerUpdateWithoutCar_sharingInput, customerUncheckedUpdateWithoutCar_sharingInput>;
  };

  export type customerUpdateWithoutCar_sharingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutCar_sharingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type car_sharingCreateWithoutCustomerInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car: carCreateNestedOneWithoutCar_sharingInput;
  };

  export type car_sharingUncheckedCreateWithoutCustomerInput = {
    id?: string;
    car_id: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type car_sharingCreateOrConnectWithoutCustomerInput = {
    where: car_sharingWhereUniqueInput;
    create: XOR<car_sharingCreateWithoutCustomerInput, car_sharingUncheckedCreateWithoutCustomerInput>;
  };

  export type car_sharingCreateManyCustomerInputEnvelope = {
    data: car_sharingCreateManyCustomerInput | car_sharingCreateManyCustomerInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    team?: teamCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    team_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCustomerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
  };

  export type car_sharingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: car_sharingWhereUniqueInput;
    update: XOR<car_sharingUpdateWithoutCustomerInput, car_sharingUncheckedUpdateWithoutCustomerInput>;
    create: XOR<car_sharingCreateWithoutCustomerInput, car_sharingUncheckedCreateWithoutCustomerInput>;
  };

  export type car_sharingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: car_sharingWhereUniqueInput;
    data: XOR<car_sharingUpdateWithoutCustomerInput, car_sharingUncheckedUpdateWithoutCustomerInput>;
  };

  export type car_sharingUpdateManyWithWhereWithoutCustomerInput = {
    where: car_sharingScalarWhereInput;
    data: XOR<car_sharingUpdateManyMutationInput, car_sharingUncheckedUpdateManyWithoutCustomerInput>;
  };

  export type userUpsertWithoutCustomerInput = {
    update: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCustomerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
  };

  export type userUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    team?: teamUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    team_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutTeamInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeamInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeamInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
  };

  export type userCreateManyTeamInputEnvelope = {
    data: userCreateManyTeamInput | userCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutTeamInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
    create: XOR<userCreateWithoutTeamInput, userUncheckedCreateWithoutTeamInput>;
  };

  export type userUpdateWithWhereUniqueWithoutTeamInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutTeamInput, userUncheckedUpdateWithoutTeamInput>;
  };

  export type userUpdateManyWithWhereWithoutTeamInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutTeamInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    team_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type business_ownerCreateWithoutUserInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    business_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    business_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerCreateOrConnectWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerCreateManyUserInputEnvelope = {
    data: business_ownerCreateManyUserInput | business_ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type customerCreateWithoutUserInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car_sharing?: car_sharingCreateNestedManyWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutUserInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    car_sharing?: car_sharingUncheckedCreateNestedManyWithoutCustomerInput;
  };

  export type customerCreateOrConnectWithoutUserInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerCreateManyUserInputEnvelope = {
    data: customerCreateManyUserInput | customerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type teamCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamCreateOrConnectWithoutUserInput = {
    where: teamWhereUniqueInput;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    update: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    data: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
  };

  export type business_ownerUpdateManyWithWhereWithoutUserInput = {
    where: business_ownerScalarWhereInput;
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type business_ownerScalarWhereInput = {
    AND?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    OR?: business_ownerScalarWhereInput[];
    NOT?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    business_name?: StringFilter<'business_owner'> | string;
    business_address?: StringFilter<'business_owner'> | string;
    business_contact?: StringFilter<'business_owner'> | string;
    business_email?: StringFilter<'business_owner'> | string;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
  };

  export type customerUpsertWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
  };

  export type customerUpdateManyWithWhereWithoutUserInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutUserInput>;
  };

  export type customerScalarWhereInput = {
    AND?: customerScalarWhereInput | customerScalarWhereInput[];
    OR?: customerScalarWhereInput[];
    NOT?: customerScalarWhereInput | customerScalarWhereInput[];
    id?: UuidFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    city?: StringFilter<'customer'> | string;
    state?: StringFilter<'customer'> | string;
    zip_code?: StringFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
  };

  export type teamUpsertWithoutUserInput = {
    update: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
    create: XOR<teamCreateWithoutUserInput, teamUncheckedCreateWithoutUserInput>;
    where?: teamWhereInput;
  };

  export type teamUpdateToOneWithWhereWithoutUserInput = {
    where?: teamWhereInput;
    data: XOR<teamUpdateWithoutUserInput, teamUncheckedUpdateWithoutUserInput>;
  };

  export type teamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type car_sharingCreateManyCarInput = {
    id?: string;
    customer_id: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type car_sharingUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateOneRequiredWithoutCar_sharingNestedInput;
  };

  export type car_sharingUncheckedUpdateWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type car_sharingUncheckedUpdateManyWithoutCarInput = {
    id?: StringFieldUpdateOperationsInput | string;
    customer_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type car_sharingCreateManyCustomerInput = {
    id?: string;
    car_id: string;
    start_time: Date | string;
    end_time: Date | string;
    pickup_location: string;
    dropoff_location: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type car_sharingUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car?: carUpdateOneRequiredWithoutCar_sharingNestedInput;
  };

  export type car_sharingUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type car_sharingUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    car_id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    pickup_location?: StringFieldUpdateOperationsInput | string;
    dropoff_location?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyTeamInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerCreateManyUserInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    business_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateManyUserInput = {
    id?: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    business_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    business_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    business_email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car_sharing?: car_sharingUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    car_sharing?: car_sharingUncheckedUpdateManyWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CarCountOutputTypeDefaultArgs instead
   */
  export type CarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CarCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
   */
  export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CustomerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TeamCountOutputTypeDefaultArgs instead
   */
  export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TeamCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use business_ownerDefaultArgs instead
   */
  export type business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    business_ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use carDefaultArgs instead
   */
  export type carArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = carDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use car_sharingDefaultArgs instead
   */
  export type car_sharingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    car_sharingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use customerDefaultArgs instead
   */
  export type customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    customerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teamDefaultArgs instead
   */
  export type teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
