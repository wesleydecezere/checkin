import { gql } from "@apollo/client";

export const ADD_CHECKIN = gql`
  mutation CreateCheckin($checkinInput: CheckinInput!) {
    createCheckin(checkin: $checkinInput) {
      id
    }
  }
`;
