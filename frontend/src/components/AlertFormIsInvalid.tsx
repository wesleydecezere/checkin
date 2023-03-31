import React, { useRef } from "react";
import { AlertDialog } from "native-base";

interface AlertFormIsInvalidProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function AlertFormIsInvalid({
  isOpen,
  setIsOpen,
}: AlertFormIsInvalidProps) {
  const ref = useRef();

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={ref}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton onPress={() => setIsOpen(false)} />
        <AlertDialog.Header>Atenção</AlertDialog.Header>
        <AlertDialog.Body>
          Por favor, selecione e evento e o participante antes de confirmar.
        </AlertDialog.Body>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
