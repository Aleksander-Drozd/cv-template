import React from 'react';

import styles from './SkillEntry.styles';
import {View} from '@react-pdf/renderer';
import AppText from '../../common/AppText/AppText';

const SkillEntry = ({label, level}) => (
    <View style={styles.wrapper}>
        <AppText style={styles.label}>{label}</AppText>
        <View style={styles.levelWrapper}>
            <View style={{...styles.level, width: `${level}%`}} />
        </View>
    </View>
);

export default SkillEntry;
