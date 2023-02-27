import { useState } from "react";
import { NativeBaseProvider, Center, VStack, Spacer } from "native-base";
import { CheckinList } from "./components/view/CheckinList";
import { AlertFormIsInvalid } from "./components/AlertFormIsInvalid";
import { CheckinForm } from "./components/view/CheckinForm";

export function App() {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);

  return (
    <NativeBaseProvider>
      <Center h="100%" justifyContent="center">
        <VStack h="100%">
          <CheckinForm setIsAlertDialogOpen={setIsAlertDialogOpen} />
          <Spacer />
          <CheckinList />
        </VStack>
        <AlertFormIsInvalid
          isOpen={isAlertDialogOpen}
          setIsOpen={setIsAlertDialogOpen}
        />
      </Center>
    </NativeBaseProvider>
  );
}
