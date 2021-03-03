import React from 'react';

import styles from './ExperienceEntry.styles';
import {View} from '@react-pdf/renderer';
import {AppText} from '../../common';
import BulletList from '../../common/BulletList/BulletList';

const ExperienceEntry = ({start, end, position, company, bulletPoints}) => (
    <View style={styles.container}>
        <AppText style={styles.timespan}>
            {start} - {end}
        </AppText>
        <View style={styles.details}>
            <AppText style={styles.position}>{position}</AppText>
            <AppText style={styles.company}>{company}</AppText>
            <BulletList items={bulletPoints} />
        </View>
    </View>
);

export default ExperienceEntry;
