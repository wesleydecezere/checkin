import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query AllEvents {
    events {
      id
    }
  }
`;

export const GET_PUPILS = gql`
  query AllPupils {
    pupils {
      id
      name
      grade
      belt
      active
    }
  }
`;

export const GET_CHECKINS = gql`
  query AllCheckins {
    checkins {
      id
      eventId
      participantId
    }
  }
`;
