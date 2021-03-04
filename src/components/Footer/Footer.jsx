import React from 'react';

import styles from './Footer.styles';
import {Link, View} from '@react-pdf/renderer';
import AppText from '../common/AppText/AppText';

const Footer = () => (
    <View style={styles.wrapper}>
        <AppText style={styles.consent}>
            I hereby give consent for my personal data included in the
            application to be processed by (company name) for the purposes of
            the recruitment process.
        </AppText>
        <AppText style={styles.credits}>
            CV created by me using React and{' '}
            <Link href={'https://www.npmjs.com/package/@react-pdf/renderer'}>
                @react-pdf/renderer
            </Link>{' '}
            (
            <Link href={'https://www.npmjs.com/package/@react-pdf/renderer'}>
                GitHub
            </Link>
            )
        </AppText>
    </View>
);

export default Footer;
