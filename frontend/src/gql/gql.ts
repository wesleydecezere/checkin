/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateCheckin($checkinInput: CheckinInput!) {\n    createCheckin(checkin: $checkinInput) {\n      id\n    }\n  }\n": types.CreateCheckinDocument,
    "\n  query AllEvents {\n    events {\n      id\n      date\n    }\n  }\n": types.AllEventsDocument,
    "\n  query AllPupils {\n    pupils {\n      id\n      name\n      grade\n      belt\n      active\n    }\n  }\n": types.AllPupilsDocument,
    "\n  query AllCheckins {\n    checkins {\n      id\n      eventId\n      participantId\n      date\n    }\n  }\n": types.AllCheckinsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateCheckin($checkinInput: CheckinInput!) {\n    createCheckin(checkin: $checkinInput) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCheckin($checkinInput: CheckinInput!) {\n    createCheckin(checkin: $checkinInput) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllEvents {\n    events {\n      id\n      date\n    }\n  }\n"): (typeof documents)["\n  query AllEvents {\n    events {\n      id\n      date\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllPupils {\n    pupils {\n      id\n      name\n      grade\n      belt\n      active\n    }\n  }\n"): (typeof documents)["\n  query AllPupils {\n    pupils {\n      id\n      name\n      grade\n      belt\n      active\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllCheckins {\n    checkins {\n      id\n      eventId\n      participantId\n      date\n    }\n  }\n"): (typeof documents)["\n  query AllCheckins {\n    checkins {\n      id\n      eventId\n      participantId\n      date\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;