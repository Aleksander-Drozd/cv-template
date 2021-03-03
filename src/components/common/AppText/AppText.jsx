import React from 'react';

import styles from './AppText.styles';
import {Text} from '@react-pdf/renderer';

const AppText = ({style, children}) => (
    <Text style={[styles.text, style]}>{children}</Text>
);

export default AppText;
