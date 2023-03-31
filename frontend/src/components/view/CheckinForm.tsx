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

  if (loading) return <>"Submitting...";</>;
  if (error) return <>`Submission error! ${error.message}`;</>;

  const handleSubmit = () => {
    if (eventId === undefined || participantId === undefined) {
      setIsAlertDialogOpen(true);
    } else {
      const input: CheckinInput = {
        eventId: eventId,
        participantId: participantId,
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
    </VStack>
  );
}
