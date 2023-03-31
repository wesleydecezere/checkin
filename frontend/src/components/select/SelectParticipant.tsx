import { Select } from "native-base";
import { useQuery } from "@apollo/client";
import { AllPupilsDocument, Pupil } from "../../gql/graphql";

interface SelectParticipantProps {
  setParticipantId: (participantId?: string) => void;
}

export function SelectParticipant({
  setParticipantId,
}: SelectParticipantProps) {
  const { loading, error, data } = useQuery(AllPupilsDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Select
      placeholder="Escolha o participante"
      onValueChange={(id) => setParticipantId(id === "" ? undefined : id)}
    >
      <Select.Item label={""} value={""} />
      {data?.pupils.map(
        (
          { id, name }: any // TODO: add Participant type
        ) => (
          <Select.Item key={id} label={name} value={id} />
        )
      )}
    </Select>
  );
}
