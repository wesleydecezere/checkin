/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum BeltEnum {
  Black = 'BLACK',
  Blue = 'BLUE',
  Brown = 'BROWN',
  Purple = 'PURPLE',
  White = 'WHITE'
}

export type Checkin = {
  __typename?: 'Checkin';
  eventId: Scalars['ID'];
  id: Scalars['ID'];
  participantId: Scalars['ID'];
};

export type CheckinInput = {
  eventId: Scalars['ID'];
  participantId: Scalars['ID'];
};

export type Event = {
  __typename?: 'Event';
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCheckin: Checkin;
  createPupil: Pupil;
  deletePupilById: Scalars['Boolean'];
  updatePupilById?: Maybe<Pupil>;
};


export type MutationCreateCheckinArgs = {
  checkin: CheckinInput;
};


export type MutationCreatePupilArgs = {
  pupil: PupilInput;
};


export type MutationDeletePupilByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdatePupilByIdArgs = {
  id: Scalars['ID'];
  pupil: PupilInput;
};

export type Pupil = {
  __typename?: 'Pupil';
  active: Scalars['Boolean'];
  belt: BeltEnum;
  grade: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PupilInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  belt: BeltEnum;
  grade: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkins: Array<Maybe<Checkin>>;
  events: Array<Maybe<Event>>;
  pupil?: Maybe<Pupil>;
  pupils: Array<Maybe<Pupil>>;
};


export type QueryPupilArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateCheckinMutationVariables = Exact<{
  checkinInput: CheckinInput;
}>;


export type CreateCheckinMutation = { __typename?: 'Mutation', createCheckin: { __typename?: 'Checkin', id: string } };

export type AllEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'Event', id: string } | null> };

export type AllPupilsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPupilsQuery = { __typename?: 'Query', pupils: Array<{ __typename?: 'Pupil', id: string, name: string, grade: number } | null> };

export type AllCheckinsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCheckinsQuery = { __typename?: 'Query', checkins: Array<{ __typename?: 'Checkin', id: string, eventId: string, participantId: string } | null> };


export const CreateCheckinDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCheckin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkinInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckinInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCheckin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkinInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCheckinMutation, CreateCheckinMutationVariables>;
export const AllEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllEvents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AllEventsQuery, AllEventsQueryVariables>;
export const AllPupilsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPupils"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pupils"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}}]}}]}}]} as unknown as DocumentNode<AllPupilsQuery, AllPupilsQueryVariables>;
export const AllCheckinsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCheckins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"eventId"}},{"kind":"Field","name":{"kind":"Name","value":"participantId"}}]}}]}}]} as unknown as DocumentNode<AllCheckinsQuery, AllCheckinsQueryVariables>;