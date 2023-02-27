// TODO: evoluir pra table
import { FlatList, Heading, ScrollView, VStack } from "native-base";
import { useQuery } from "@apollo/client";
import { GET_CHECKINS } from "../../graphql/queries";

export function CheckinList() {
  const { loading, error, data } = useQuery(GET_CHECKINS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return (
    <VStack space="2.5" h="60vh" mb="4">
      <Heading>Lista de checkins</Heading>
      <ScrollView>
        <FlatList
          data={data.checkins}
          renderItem={({ item }) =>
            `ID-${item.id} | Evento ${item.eventId} - Participante ${item.participantId}`
          }
        />
      </ScrollView>
    </VStack>
  );
}
