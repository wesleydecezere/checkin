import React from "react";
import { Select } from "native-base";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../../graphql/queries";

export function SelectEvent({ setEventId }) {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Select
      placeholder="Escolha o evento"
      onValueChange={(id) => setEventId(id === "" ? null : id)}
    >
      <Select.Item label={null} value={null} />
      {data.events.map(({ id }) => (
        <Select.Item key={id} label={`Evento ${id}`} value={id} />
      ))}
    </Select>
  );
}
