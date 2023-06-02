// TODO: evoluir pra table
import { FlatList, Heading, ScrollView, VStack, Text } from "native-base";
import { useQuery } from "@apollo/client";
import { AllCheckinsDocument, Checkin, Maybe } from "../../gql/graphql";
import { ListRenderItemInfo } from "react-native";

import { css } from "@emotion/native";

const renderItem = ({ item }: ListRenderItemInfo<Maybe<Checkin>>) => {
  if (!item) return null;

  const { id, eventId, participantId, date } = item;

  return (
    <Text>
      ID-{id} | Evento {eventId} - Participante {participantId} - Data: {date}
    </Text>
  );
};

export function CheckinList() {
  const { loading, error, data } = useQuery(AllCheckinsDocument);

  return (
    <VStack space="2.5" h="60vh" mb="4">
      <Heading style={heading}>Lista de checkins</Heading>
      <ScrollView>
        {data && <FlatList data={data.checkins} renderItem={renderItem} />}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </ScrollView>
    </VStack>
  );
}

const heading = css`
  border-bottom-width: 1px;
`;
