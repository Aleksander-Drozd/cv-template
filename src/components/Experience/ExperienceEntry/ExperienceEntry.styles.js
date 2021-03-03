import {StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    timespan: {
        width: '20%',
        fontFamily: 'Lato Bold',
        lineHeight: 1.5,
        fontSize: 11,
    },
    details: {
        width: '80%',
    },
    position: {
        fontFamily: 'Lato Bold',
    },
    company: {
        fontFamily: 'Lato Italic',
        marginVertical: 3,
    },
});

export default styles;
