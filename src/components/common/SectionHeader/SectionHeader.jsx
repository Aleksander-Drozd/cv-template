import React from 'react';

import styles from './SectionHeader.styles';
import {View} from '@react-pdf/renderer';
import AppText from '../AppText/AppText';

const SectionHeader = ({title}) => (
    <View style={styles.wrapper}>
        <AppText style={styles.text}>{title}</AppText>
        <View style={styles.separator} />
    </View>
);

export default SectionHeader;
