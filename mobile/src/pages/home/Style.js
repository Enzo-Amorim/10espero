import { Dimensions, StyleSheet } from 'react-native'

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    FirstView: {
        width: deviceWidth,
        height: 300,
        backgroundColor: '#448DFF'
    },
    HomeText: {
        position: 'absolute',
        width: 106,
        height: 27,
        left: 35,
        top: 77,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        lineHeight: 27,
    },
})

export default styles