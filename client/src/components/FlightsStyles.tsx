import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    ticketContainer:{
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6A5ACD',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    },
    row:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item:{
        
    },
    provider:{
        marginVertical: 10,
    },
    title:{
        fontSize: 24,
    },
    price:{
        color: '#BF40BF',
        marginVertical: 5,
        marginLeft: 'auto',
        fontWeight: 'bold'
    },
    space:{
        marginVertical: 5,
    }

})
export default styles;