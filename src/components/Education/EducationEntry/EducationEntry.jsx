import React from 'react';

import styles from './EducationEntry.styles';
import {View} from '@react-pdf/renderer';
import AppText from '../../common/AppText/AppText';
import BulletList from '../../common/BulletList/BulletList';

const EducationEntry = ({start, end, academy, major, degree, achievements}) => (
    <View style={styles.wrapper}>
        <AppText style={styles.timespan}>
            {start} - {end}
        </AppText>
        <View style={styles.content}>
            <AppText style={styles.major}>
                {major} <AppText style={styles.degree}>({degree})</AppText>
            </AppText>
            <AppText style={styles.academy}>{academy}</AppText>
            <BulletList items={achievements} />
        </View>
    </View>
);

export default EducationEntry;
