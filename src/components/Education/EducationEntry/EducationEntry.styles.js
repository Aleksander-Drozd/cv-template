import {StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginTop: 10,
    },
    timespan: {
        width: '20%',
        fontSize: 10,
        fontFamily: 'Lato Bold',
    },
    content: {
        width: '80%',
    },
    major: {
        fontFamily: 'Lato Bold',
        fontSize: 12,
        marginBottom: 2,
    },
    degree: {
        fontFamily: 'Lato',
    },
});

export default styles;
