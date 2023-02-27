import React from "react";
import { AlertDialog } from "native-base";

export function AlertFormIsInvalid({ isOpen, setIsOpen }) {
  return (
    <AlertDialog isOpen={isOpen}>
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
