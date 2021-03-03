import React from 'react';
import {Document, Page, PDFViewer, View} from '@react-pdf/renderer';
import {Header} from './components';
import styles from './App.styles';
import SectionHeader from './components/common/SectionHeader/SectionHeader';
import {AppText} from './components/common';

const app = () => (
    <PDFViewer
        width={900}
        height={2000}
        style={{margin: '0 auto', display: 'block'}}
    >
        <Document>
            <Page size="A4">
                <Header />
                <View style={styles.container}>
                    <View style={styles.main}>
                        <AppText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi dolorum, maxime nihil placeat quas sunt?
                            Accusantium amet eum excepturi, expedita harum
                            incidunt officia quidem quo suscipit tempore.
                            Deleniti, eveniet, quia.
                        </AppText>
                        <SectionHeader title={'Experience'} />
                    </View>
                    <View style={styles.rightSide}>
                        <SectionHeader title={'Personal info'} />
                    </View>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default app;
