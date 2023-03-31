import React from "react";
import { Select } from "native-base";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../../graphql/queries";

interface SelectEventProps {
  setEventId: (eventId?: string) => void;
}

export function SelectEvent({ setEventId }: SelectEventProps) {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Select
      placeholder="Escolha o evento"
      onValueChange={(id) => setEventId(id === "" ? undefined : id)}
    >
      <Select.Item label={""} value={""} />
      {data.events.map(
        (
          { id }: any // TODO: add Event type
        ) => (
          <Select.Item key={id} label={`Evento ${id}`} value={id} />
        )
      )}
    </Select>
  );
}
