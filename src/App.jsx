import React from 'react';
import {Document, Page, PDFViewer, View} from '@react-pdf/renderer';
import {
    Header,
    Experience,
    PersonalInfo,
    Education,
    Skills,
} from './components';
import styles from './App.styles';
import {AppText} from './components/common';

const app = () => (
    <PDFViewer
        width={1000}
        height={1500}
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
                        <Education />
                    </View>
                    <View style={styles.rightSide}>
                        <PersonalInfo />
                        <Skills />
                    </View>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default app;
