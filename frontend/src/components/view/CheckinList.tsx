// TODO: evoluir pra table
import { FlatList, Heading, ScrollView, VStack, Text } from "native-base";
import { useQuery } from "@apollo/client";
import { GET_CHECKINS } from "../../graphql/queries";

// TODO: add Checkin type
const renderItem = ({ item }: any) => (
  <Text>
    ID-{item.id} | Evento {item.eventId} - Participante {item.participantId}
  </Text>
);

export function CheckinList() {
  const { loading, error, data } = useQuery(GET_CHECKINS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <VStack space="2.5" h="60vh" mb="4">
      <Heading>Lista de checkins</Heading>
      <ScrollView>
        <FlatList data={data.checkins} renderItem={renderItem} />
      </ScrollView>
    </VStack>
  );
}
