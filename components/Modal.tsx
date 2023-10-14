import React, {FC} from 'react';
import {Button, Modal, StyleSheet, View} from 'react-native';

interface Props {
  children: JSX.Element;
  visibility: boolean;
  handleModalClose: () => void;
}

const ModalDialog: FC<Props> = ({children, visibility, handleModalClose}) => {
  const closeModal = () => {
    handleModalClose();
  };
  return (
    <View>
      <Modal visible={visibility} transparent={true} animationType="slide">
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            {children}
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default ModalDialog;
