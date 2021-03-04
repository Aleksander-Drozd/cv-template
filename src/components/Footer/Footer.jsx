import React from 'react';

import styles from './Footer.styles';
import {View} from '@react-pdf/renderer';
import AppText from '../common/AppText/AppText';

const Footer = () => (
    <View style={styles.wrapper}>
        <AppText style={styles.consent}>
            I hereby give consent for my personal data included in the
            application to be processed by (COMPANY NAME) for the purposes of
            the recruitment process.
        </AppText>
    </View>
);

export default Footer;
