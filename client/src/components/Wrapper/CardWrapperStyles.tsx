import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      Card: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexWrap: 'wrap',
      },
    title:{
        fontSize:16,
        marginVertical: 5,
    },
    logoContainer:{
        alignItems:"center"
      }
});
export default styles;