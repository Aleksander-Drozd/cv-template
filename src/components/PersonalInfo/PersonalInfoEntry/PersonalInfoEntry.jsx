import React from 'react';

import styles from './PersonalInfoEntry.styles';
import {View} from '@react-pdf/renderer';
import AppText from '../../common/AppText/AppText';

const PersonalInfoEntry = ({label, value}) => (
    <View style={styles.wrapper}>
        <AppText style={styles.label}>{label}</AppText>
        <AppText>{value}</AppText>
    </View>
);

export default PersonalInfoEntry;
