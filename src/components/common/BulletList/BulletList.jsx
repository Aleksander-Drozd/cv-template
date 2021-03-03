import React from 'react';

import styles from './BulletList.styles';
import {View} from '@react-pdf/renderer';
import {AppText} from '../index';

const BulletList = ({items}) => (
    <View>
        {items.map(item => (
            <BulletItem>{item}</BulletItem>
        ))}
    </View>
);

const BulletItem = ({children}) => (
    <View style={styles.itemWrapper}>
        <AppText style={styles.bulletPoint}>•</AppText>
        <AppText style={styles.text}>{children}</AppText>
    </View>
);

export default BulletList;
