import React from 'react';

import styles from './LanguageEntry.styles';
import {View} from '@react-pdf/renderer';
import {AppText} from '../../common';

const LanguageEntry = ({label, level}) => (
    <View style={styles.wrapper}>
        <AppText style={styles.label}>{label}</AppText>
        <AppText>{level}</AppText>
    </View>
);

export default LanguageEntry;
