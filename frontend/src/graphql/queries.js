import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query {
    events {
      id
    }
  }
`;

export const GET_PUPILS = gql`
  query {
    pupils {
      id
      name
      grade
    }
  }
`;

export const GET_CHECKINS = gql`
  query {
    checkins {
      id
      eventId
      participantId
    }
  }
`;
