import {StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 5,
    },
    label: {
        fontFamily: 'Lato Bold',
        fontSize: 10,
    },
    levelWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#265279',
        height: 8,
    },
    level: {
        position: 'absolute',
        left: -1,
        top: -1,
        backgroundColor: '#265279',
        height: 8,
    },
});

export default styles;
