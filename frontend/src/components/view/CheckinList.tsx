// TODO: evoluir pra table
import { FlatList, Heading, ScrollView, VStack, Text } from "native-base";
import { useQuery } from "@apollo/client";
import { AllCheckinsDocument, Checkin, Maybe } from "../../gql/graphql";
import { ListRenderItemInfo } from "react-native";

const renderItem = ({ item }: ListRenderItemInfo<Maybe<Checkin>>) => {
  if (!item) return null;

  const { id, eventId, participantId } = item;

  return (
    <Text>
      ID-{id} | Evento {eventId} - Participante {participantId}
    </Text>
  );
};

export function CheckinList() {
  const { loading, error, data } = useQuery(AllCheckinsDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <VStack space="2.5" h="60vh" mb="4">
      <Heading>Lista de checkins</Heading>
      <ScrollView>
        {data && <FlatList data={data.checkins} renderItem={renderItem} />}
      </ScrollView>
    </VStack>
  );
}
