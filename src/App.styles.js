import {StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        fontSize: 12,
        flexDirection: 'row',
    },
    main: {
        width: '70%',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    description: {
        fontSize: 11,
    },
    rightSide: {
        width: '30%',
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 10,
    },
});

export default styles;
