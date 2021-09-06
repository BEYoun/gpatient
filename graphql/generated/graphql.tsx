import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Cabinet = {
  __typename?: 'Cabinet';
  id: Scalars['ID'];
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type City = {
  __typename?: 'City';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  region_id?: Maybe<Region>;
};


export type Doctor = {
  __typename?: 'Doctor';
  id: Scalars['Int'];
  lastName: Scalars['String'];
  firstName: Scalars['String'];
  adresse: Scalars['String'];
  numberPhone: Scalars['String'];
  speciality?: Maybe<Speciality>;
  ville?: Maybe<City>;
  email?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createUserClient: Profile;
  createUserSession: UserSession;
  deleteUserSession: Scalars['Boolean'];
  createCabinet: Cabinet;
  createPatient: Patient;
};


export type MutationCreateUserArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
  role: Scalars['String'];
};


export type MutationCreateUserClientArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
  role: Scalars['String'];
  cabinetId: Scalars['String'];
};


export type MutationCreateUserSessionArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationDeleteUserSessionArgs = {
  me: Scalars['Boolean'];
};


export type MutationCreateCabinetArgs = {
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationCreatePatientArgs = {
  cin: Scalars['String'];
  sex?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['Int']>;
  assurance?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  numberPhone?: Maybe<Scalars['String']>;
};

export type PaginationDoctors = {
  __typename?: 'PaginationDoctors';
  doctors?: Maybe<Array<Maybe<Doctor>>>;
  nbrPages: Scalars['Int'];
  page: Scalars['Int'];
};

export type Patient = {
  __typename?: 'Patient';
  id: Scalars['ID'];
  cin: Scalars['String'];
  sex?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['Int']>;
  assurance?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  profession?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  numberPhone?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['ID'];
  email: Scalars['String'];
  cabinet: Cabinet;
};

export type Query = {
  __typename?: 'Query';
  userSession?: Maybe<UserSession>;
  allCabinet?: Maybe<Array<Maybe<Cabinet>>>;
  getCabinetById?: Maybe<Cabinet>;
  getDoctors: PaginationDoctors;
  getAllPatients?: Maybe<Array<Maybe<Patient>>>;
  getPatientById: Patient;
  getCities?: Maybe<Array<Maybe<City>>>;
  getSpecialities?: Maybe<Array<Maybe<Speciality>>>;
};


export type QueryUserSessionArgs = {
  me: Scalars['Boolean'];
};


export type QueryGetCabinetByIdArgs = {
  cabinetId: Scalars['String'];
};


export type QueryGetPatientByIdArgs = {
  patientId: Scalars['String'];
};

export type Region = {
  __typename?: 'Region';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Speciality = {
  __typename?: 'Speciality';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  email: Scalars['ID'];
  role: Scalars['String'];
};

export type UserSession = {
  __typename?: 'UserSession';
  createdAt: Scalars['Date'];
  expiresAt: Scalars['Date'];
  user: User;
};

export type CreateUserSessionMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserSessionMutation = (
  { __typename?: 'Mutation' }
  & { createUserSession: (
    { __typename?: 'UserSession' }
    & Pick<UserSession, 'expiresAt' | 'createdAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'email' | 'role'>
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUserSession'>
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'email' | 'role'>
  ) }
);

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = (
  { __typename?: 'Query' }
  & { getCities?: Maybe<Array<Maybe<(
    { __typename?: 'City' }
    & Pick<City, 'id' | 'name'>
  )>>> }
);

export type GetDoctorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDoctorsQuery = (
  { __typename?: 'Query' }
  & { getDoctors: (
    { __typename?: 'PaginationDoctors' }
    & Pick<PaginationDoctors, 'nbrPages' | 'page'>
    & { doctors?: Maybe<Array<Maybe<(
      { __typename?: 'Doctor' }
      & Pick<Doctor, 'id' | 'lastName' | 'firstName' | 'adresse' | 'numberPhone'>
      & { speciality?: Maybe<(
        { __typename?: 'Speciality' }
        & Pick<Speciality, 'name'>
      )>, ville?: Maybe<(
        { __typename?: 'City' }
        & Pick<City, 'name'>
      )> }
    )>>> }
  ) }
);

export type GetSpecialitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSpecialitiesQuery = (
  { __typename?: 'Query' }
  & { getSpecialities?: Maybe<Array<Maybe<(
    { __typename?: 'Speciality' }
    & Pick<Speciality, 'id' | 'name'>
  )>>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { userSession?: Maybe<(
    { __typename?: 'UserSession' }
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'email' | 'role'>
    ) }
  )> }
);


export const CreateUserSessionDocument = gql`
    mutation CreateUserSession($email: String!, $password: String!) {
  createUserSession(email: $email, password: $password) {
    user {
      email
      role
    }
    expiresAt
    createdAt
  }
}
    `;
export type CreateUserSessionMutationFn = Apollo.MutationFunction<CreateUserSessionMutation, CreateUserSessionMutationVariables>;

/**
 * __useCreateUserSessionMutation__
 *
 * To run a mutation, you first call `useCreateUserSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserSessionMutation, { data, loading, error }] = useCreateUserSessionMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserSessionMutation, CreateUserSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserSessionMutation, CreateUserSessionMutationVariables>(CreateUserSessionDocument, options);
      }
export type CreateUserSessionMutationHookResult = ReturnType<typeof useCreateUserSessionMutation>;
export type CreateUserSessionMutationResult = Apollo.MutationResult<CreateUserSessionMutation>;
export type CreateUserSessionMutationOptions = Apollo.BaseMutationOptions<CreateUserSessionMutation, CreateUserSessionMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  deleteUserSession(me: true)
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  createUser(password: $password, email: $email, role: "patient") {
    email
    role
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetCitiesDocument = gql`
    query GetCities {
  getCities {
    id
    name
  }
}
    `;

/**
 * __useGetCitiesQuery__
 *
 * To run a query within a React component, call `useGetCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
      }
export function useGetCitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCitiesQuery, GetCitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCitiesQuery, GetCitiesQueryVariables>(GetCitiesDocument, options);
        }
export type GetCitiesQueryHookResult = ReturnType<typeof useGetCitiesQuery>;
export type GetCitiesLazyQueryHookResult = ReturnType<typeof useGetCitiesLazyQuery>;
export type GetCitiesQueryResult = Apollo.QueryResult<GetCitiesQuery, GetCitiesQueryVariables>;
export const GetDoctorsDocument = gql`
    query GetDoctors {
  getDoctors {
    doctors {
      id
      lastName
      firstName
      adresse
      numberPhone
      speciality {
        name
      }
      ville {
        name
      }
    }
    nbrPages
    page
  }
}
    `;

/**
 * __useGetDoctorsQuery__
 *
 * To run a query within a React component, call `useGetDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDoctorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDoctorsQuery(baseOptions?: Apollo.QueryHookOptions<GetDoctorsQuery, GetDoctorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDoctorsQuery, GetDoctorsQueryVariables>(GetDoctorsDocument, options);
      }
export function useGetDoctorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDoctorsQuery, GetDoctorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDoctorsQuery, GetDoctorsQueryVariables>(GetDoctorsDocument, options);
        }
export type GetDoctorsQueryHookResult = ReturnType<typeof useGetDoctorsQuery>;
export type GetDoctorsLazyQueryHookResult = ReturnType<typeof useGetDoctorsLazyQuery>;
export type GetDoctorsQueryResult = Apollo.QueryResult<GetDoctorsQuery, GetDoctorsQueryVariables>;
export const GetSpecialitiesDocument = gql`
    query GetSpecialities {
  getSpecialities {
    id
    name
  }
}
    `;

/**
 * __useGetSpecialitiesQuery__
 *
 * To run a query within a React component, call `useGetSpecialitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecialitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecialitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpecialitiesQuery(baseOptions?: Apollo.QueryHookOptions<GetSpecialitiesQuery, GetSpecialitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpecialitiesQuery, GetSpecialitiesQueryVariables>(GetSpecialitiesDocument, options);
      }
export function useGetSpecialitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpecialitiesQuery, GetSpecialitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpecialitiesQuery, GetSpecialitiesQueryVariables>(GetSpecialitiesDocument, options);
        }
export type GetSpecialitiesQueryHookResult = ReturnType<typeof useGetSpecialitiesQuery>;
export type GetSpecialitiesLazyQueryHookResult = ReturnType<typeof useGetSpecialitiesLazyQuery>;
export type GetSpecialitiesQueryResult = Apollo.QueryResult<GetSpecialitiesQuery, GetSpecialitiesQueryVariables>;
export const MeDocument = gql`
    query Me {
  userSession(me: true) {
    user {
      email
      role
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;