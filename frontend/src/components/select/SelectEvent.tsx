import { Select } from "native-base";
import { useQuery } from "@apollo/client";
import { AllEventsDocument, Event, Maybe } from "../../gql/graphql";

interface SelectEventProps {
  setEventId: (eventId?: string) => void;
}

export function SelectEvent({ setEventId }: SelectEventProps) {
  const { loading, error, data } = useQuery(AllEventsDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Select
      placeholder="Escolha o evento"
      onValueChange={(id) => setEventId(id === "" ? undefined : id)}
    >
      <Select.Item label={""} value={""} />
      {data?.events?.map((event: Maybe<Event>) => {
        if (!event) return null;

        const { id } = event;
        return <Select.Item key={id} label={`Evento ${id}`} value={id} />;
      })}
    </Select>
  );
}
