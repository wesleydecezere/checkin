import React from "react";
import { Select } from "native-base";
import { useQuery } from "@apollo/client";
import { GET_PUPILS } from "../../graphql/queries";

interface SelectParticipantProps {
  setParticipantId: (participantId?: string) => void;
}

export function SelectParticipant({
  setParticipantId,
}: SelectParticipantProps) {
  const { loading, error, data } = useQuery(GET_PUPILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Select
      placeholder="Escolha o participante"
      onValueChange={(id) => setParticipantId(id === "" ? undefined : id)}
    >
      <Select.Item label={""} value={""} />
      {data.pupils.map(
        (
          { id, name }: any // TODO: add Participant type
        ) => (
          <Select.Item key={id} label={name} value={id} />
        )
      )}
    </Select>
  );
}
