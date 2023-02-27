import React from "react";
import { Select } from "native-base";
import { useQuery } from "@apollo/client";
import { GET_PUPILS } from "../../graphql/queries";

export function SelectParticipant({ setParticipantId }) {
  const { loading, error, data } = useQuery(GET_PUPILS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Select
      placeholder="Escolha o participante"
      onValueChange={(id) => setParticipantId(id === "" ? null : id)}
    >
      <Select.Item />
      {data.pupils.map(({ id, name }) => (
        <Select.Item key={id} label={name} value={id} />
      ))}
    </Select>
  );
}
