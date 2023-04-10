import React,{useState} from 'react'
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import  Constants  from 'expo-constants';

interface ModalProps{
    children: React.ReactNode,
    modalHeader: string,
    visible: boolean,
    setVisible: Function,
}

const CustomModal:React.FC<ModalProps> = ({children, modalHeader}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)}>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.dialogContainer}>
        <Text style={styles.modalHeader}>{modalHeader}</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            {children}
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    height: '100%',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalHeader:{
    fontWeight: 'bold',
    headerTintColor: '#fff',
    marginVertical: 10,
    fontSize: 20,
    textAlign:'center'
  }
});

export default CustomModal