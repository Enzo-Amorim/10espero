import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        top: -32,
    },
    union: {
        backgroundColor: '#2874E8',
        width: 414,
        height: 350,
        top: 0,
        alignItems: 'center',
        position: 'absolute',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 6,
    },
    LoginSquare: {
        position: "absolute",
        width: 300,
        height: 300,
        top: 170,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius: 15,
        alignItems: 'center',
    },
    LoginTitle: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        lineHeight: 36,
        top: 25
    },
    InputUser: {
        backgroundColor: '#DEE0F8',
        fontSize: 14,
        padding: 5,
        width: 235,
        height: 35,
        top: 50,
        borderRadius: 5
    },
    InputPassword: {
        backgroundColor: '#DEE0F8',
        fontSize: 14,
        padding: 5,
        width: 235,
        height: 35,
        top: 84,
        borderRadius: 5
    },
    FrgtPassword: {
        color: '#3592FF',
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        width: 122,
        height: 14,
        top: 90,
        left: 72
    },
    LoginButton: {
        backgroundColor: '#2874E8',
        width: 231,
        height: 32,
        top: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    ButtonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: "#FFF"
    },
    LineLeft: {
        position: 'absolute',
        width: 80,
        height: 1,
        left: 32,
        top: 512,
        backgroundColor: '#A7A7A7'
    },
    AnotherLogin: {
        fontFamily: 'Poppins-Regular',
        fontSize: 11,
        top: 504,
        color: '#A7A7A7'
    },
    LineRight: {
        position: 'absolute',
        width: 80,
        height: 1,
        right: 32,
        top: 512,
        backgroundColor: '#A7A7A7'
    },
    GoogleBox: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 140,
        height: 33,
        top: 570,
        backgroundColor: '#F14436'
    },
    GoogleText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        lineHeight: 18,
        color: '#FFF'
    }  
})

export default styles;