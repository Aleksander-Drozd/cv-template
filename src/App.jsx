import React from 'react';
import {Document, Page, PDFViewer, View} from '@react-pdf/renderer';
import {Header, Experience, PersonalInfo} from './components';
import styles from './App.styles';
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
                        <AppText style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Animi dolorum, maxime nihil placeat quas sunt?
                            Accusantium amet eum excepturi, expedita harum
                            incidunt officia quidem quo suscipit tempore.
                            Deleniti, eveniet, quia.
                        </AppText>
                        <Experience />
                    </View>
                    <View style={styles.rightSide}>
                        <PersonalInfo />
                    </View>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default app;
