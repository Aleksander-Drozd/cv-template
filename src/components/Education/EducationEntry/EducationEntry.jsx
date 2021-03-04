import React from 'react';

import styles from './EducationEntry.styles';
import {View} from '@react-pdf/renderer';
import AppText from '../../common/AppText/AppText';

const EducationEntry = ({start, end, academy, faculty, major, degree}) => (
    <View style={styles.wrapper}>
        <AppText style={styles.timespan}>
            {start} - {end}
        </AppText>
        <View style={styles.content}>
            <AppText style={styles.major}>
                {major} <AppText style={styles.degree}>({degree})</AppText>
            </AppText>
            <AppText>{academy}</AppText>
            <AppText>{faculty}</AppText>
        </View>
    </View>
);

export default EducationEntry;
