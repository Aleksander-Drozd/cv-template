import {Font} from '@react-pdf/renderer';
import LatoRegular from '../fonts/Lato/Lato-Regular.ttf';
import LatoItalic from '../fonts/Lato/Lato-Italic.ttf';
import LatoBold from '../fonts/Lato/Lato-Bold.ttf';

Font.register({
    family: 'Lato',
    src: LatoRegular,
});

Font.register({
    family: 'Lato Italic',
    src: LatoItalic,
});

Font.register({
    family: 'Lato Bold',
    src: LatoBold,
});
