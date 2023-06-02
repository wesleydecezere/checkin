import { VStack, Heading, Button } from "native-base";
import { SelectEvent } from "../select/SelectEvent";
import { SelectParticipant } from "../select/SelectParticipant";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  AllCheckinsDocument,
  CheckinInput,
  CreateCheckinDocument,
} from "../../gql/graphql";

interface CheckinFormProps {
  setIsAlertDialogOpen: (isOpen: boolean) => void;
}

export function CheckinForm({ setIsAlertDialogOpen }: CheckinFormProps) {
  const [eventId, setEventId] = useState<string>();
  const [participantId, setParticipantId] = useState<string>();

  const [addCheckin, { loading, error }] = useMutation(CreateCheckinDocument, {
    refetchQueries: [{ query: AllCheckinsDocument }],
  });

  const handleSubmit = () => {
    if (eventId === undefined || participantId === undefined) {
      setIsAlertDialogOpen(true);
    } else {
      const input: CheckinInput = {
        eventId: eventId,
        participantId: participantId,
        date: new Date(),
      };

      addCheckin({ variables: { checkinInput: input } });
      setEventId(undefined);
      setParticipantId(undefined);
    }
  };

  return (
    <VStack space="2.5" mt="4">
      <Heading>Checkin</Heading>
      <SelectEvent setEventId={setEventId} />
      <SelectParticipant setParticipantId={setParticipantId} />
      <Button onPress={handleSubmit}>Confirmar</Button>
      {loading && <p>"Submitting..."</p>}
      {error && <p>{error.message}</p>}
    </VStack>
  );
}
