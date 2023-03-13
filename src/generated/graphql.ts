import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AsssdBenchMark = {
  __typename?: 'ASSSDBenchMark';
  createdAt?: Maybe<Scalars['Int']>;
  /** 测评结果描述 */
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** 测评结果名称 */
  name: Scalars['String'];
  /** 测评结果细节数据 */
  recordValue: Array<Maybe<RecordValue>>;
};


export type AsssdBenchMarkRecordValueArgs = {
  createdAt?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<RecordName>;
  type?: InputMaybe<RecordType>;
  unit?: InputMaybe<RecordUnit>;
  value?: InputMaybe<Scalars['Float']>;
};

export type ControllerMeta = {
  __typename?: 'ControllerMeta';
  /** @deprecated Use `created_at` instead. */
  createdAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  driverMeta: Array<DriverMeta>;
  id: Scalars['Int'];
  model?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
};


export type ControllerMetaDriverMetaArgs = {
  capacity?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  linkedId?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  vendor?: InputMaybe<Scalars['String']>;
};

export type DriverMeta = {
  __typename?: 'DriverMeta';
  /** as_ssd_benchmark */
  asSsdBenchmark: Array<Maybe<AsssdBenchMark>>;
  capacity?: Maybe<Scalars['Float']>;
  /** controller_meta */
  controllerMeta: Array<Maybe<ControllerMeta>>;
  createdAt?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  model?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  vendor?: Maybe<Scalars['String']>;
};


export type DriverMetaAsSsdBenchmarkArgs = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};


export type DriverMetaControllerMetaArgs = {
  createdAt?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  linkedId?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  vendor?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAsSsdBenchmark: AsssdBenchMark;
  createControllerMeta: ControllerMeta;
  createDriverMeta: DriverMeta;
};


export type MutationCreateAsSsdBenchmarkArgs = {
  description: Scalars['String'];
  driverId: Scalars['Int'];
  name: Scalars['String'];
  records: Array<RecordValueInput>;
};


export type MutationCreateControllerMetaArgs = {
  description: Scalars['String'];
  driverId: Scalars['Int'];
  model: Scalars['String'];
  vendor: Scalars['String'];
};


export type MutationCreateDriverMetaArgs = {
  capacity: Scalars['Float'];
  model: Scalars['String'];
  name: Scalars['String'];
  vendor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  controllerMeta: Array<Maybe<ControllerMeta>>;
  driverMeta: Array<Maybe<DriverMeta>>;
};


export type QueryControllerMetaArgs = {
  createdAt?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  linkedId?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  vendor?: InputMaybe<Scalars['String']>;
};


export type QueryDriverMetaArgs = {
  capacity?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Int']>;
  linkedId?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  vendor?: InputMaybe<Scalars['String']>;
};

export enum RecordName {
  Rand = 'RAND',
  RandLatency = 'RAND_LATENCY',
  Seq = 'SEQ',
  SeqLatency = 'SEQ_LATENCY'
}

export enum RecordType {
  Mix = 'MIX',
  Read = 'READ',
  Write = 'WRITE'
}

export enum RecordUnit {
  Iops = 'IOPS',
  Latency = 'LATENCY',
  Mbps = 'MBPS'
}

/** 记录值的基本单位 */
export type RecordValue = {
  __typename?: 'RecordValue';
  createdAt?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name: RecordName;
  type: RecordType;
  unit: RecordUnit;
  value: Scalars['Int'];
};

export type RecordValueInput = {
  createdAt?: InputMaybe<Scalars['Int']>;
  name: RecordName;
  type: RecordType;
  unit: RecordUnit;
  value: Scalars['Int'];
};

export type GetUListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUListQuery = { __typename?: 'Query', driverMeta: Array<{ __typename?: 'DriverMeta', id: number, name?: string | null, controllerMeta: Array<{ __typename?: 'ControllerMeta', id: number, model?: string | null } | null>, asSsdBenchmark: Array<{ __typename?: 'ASSSDBenchMark', name: string, recordValue: Array<{ __typename?: 'RecordValue', id: number } | null> } | null> } | null> };


export const GetUListDocument = gql`
    query getUList {
  driverMeta {
    id
    name
    controllerMeta {
      id
      model
    }
    asSsdBenchmark {
      name
      recordValue {
        id
      }
    }
  }
}
    `;

export function useGetUListQuery(options?: Omit<Urql.UseQueryArgs<GetUListQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUListQuery, GetUListQueryVariables>({ query: GetUListDocument, ...options });
};