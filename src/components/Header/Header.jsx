import React from 'react';
import {Text, View} from '@react-pdf/renderer';
import styles from './Header.style';

const Header = () => (
    <View style={styles.wrapper}>
        <Text style={styles.name}>Name and surname</Text>
        <Text style={styles.title}>Full-stack developer</Text>
    </View>
);

export default Header;
