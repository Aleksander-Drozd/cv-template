import {StyleSheet} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    pdfViewer: {
        margin: '0 auto',
        display: 'block',
    },
    container: {
        flexDirection: 'row',
        height: '100%',
    },
    leftSide: {
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
        paddingHorizontal: 15,
    },
});

export default styles;
