import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;


export const loginStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#fcfcfc',
        height: '100%',
        alignItems: 'center',
    },
    logo: {
        width: '80%',
        height: 100,
        // marginTop: 50,
        marginBottom: 30
    },
    username: {
        height: 50,
        width: windowWidth / 1.1,
        borderColor: '#2B664C',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        // marginBottom: 20,
    },
    password: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#2B664C',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        width: windowWidth / 1.1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        height: 50,
        width: windowWidth / 1.1,
        backgroundColor: '#2B664C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 60,
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        fontFamily: 'Gilroy-Medium',
        color: 'white',
    }
})

