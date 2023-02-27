import { VStack, Heading, Button } from "native-base";
import { SelectEvent } from "../select/SelectEvent";
import { SelectParticipant } from "../select/SelectParticipant";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CHECKIN } from "../../graphql/mutations";
import { GET_CHECKINS } from "../../graphql/queries";

export function CheckinForm({ setIsAlertDialogOpen }) {
  const [eventId, setEventId] = useState();
  const [participantId, setParticipantId] = useState();

  const [addCheckin, { data, loading, error }] = useMutation(ADD_CHECKIN, {
    refetchQueries: [{ query: GET_CHECKINS }],
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  const input = {
    variables: {
      checkinInput: {
        eventId: eventId,
        participantId: participantId,
      },
    },
  };

  const handleSubmit = () => {
    if (eventId == null || participantId == null) {
      setIsAlertDialogOpen(true);
    } else {
      addCheckin(input);
      setEventId(null);
      setParticipantId(null);
    }
  };

  return (
    <VStack space="2.5" mt="4">
      <Heading>Checkin</Heading>
      <SelectEvent setEventId={setEventId} />
      <SelectParticipant setParticipantId={setParticipantId} />
      <Button onPress={handleSubmit}>Confirmar</Button>
    </VStack>
  );
}
