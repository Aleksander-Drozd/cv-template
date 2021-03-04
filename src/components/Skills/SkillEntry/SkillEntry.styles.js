import {StyleSheet} from '@react-pdf/renderer';
import * as Colors from '../../../const/colors';

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 5,
    },
    label: {
        fontFamily: 'Lato Bold',
    },
    levelWrapper: {
        flexDirection: 'row',
        marginTop: 5,
        borderWidth: 1,
        borderColor: Colors.DARK_BLUE,
        height: 8,
    },
    level: {
        position: 'absolute',
        left: -1,
        top: -1,
        backgroundColor: Colors.DARK_BLUE,
        height: 8,
    },
});

export default styles;
