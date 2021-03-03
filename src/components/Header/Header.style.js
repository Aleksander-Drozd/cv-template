import {StyleSheet} from '@react-pdf/renderer';
import * as Colors from '../../const/colors';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.BLUE,
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    name: {
        fontFamily: 'Lato Bold',
        fontSize: 22,
    },
    title: {
        marginTop: 5,
        fontSize: 12,
    },
});

export default styles;
