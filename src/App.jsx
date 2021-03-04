import React from 'react';
import {Document, Page, PDFViewer, View} from '@react-pdf/renderer';
import {
    Header,
    Experience,
    PersonalInfo,
    Education,
    Skills,
    Languages,
    Footer,
} from './components';
import styles from './App.styles';
import {AppText} from './components/common';

const app = () => (
    <PDFViewer width={900} height={1300} style={styles.pdfViewer}>
        <Document>
            <Page size="A4">
                <Header />
                <View style={styles.container}>
                    <View style={styles.leftSide}>
                        <AppText style={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ad adipisci cupiditate, dignissimos et eum
                            harum incidunt, magni minima non numquam officiis
                            omnis placeat quibusdam sapiente soluta totam,
                            voluptas voluptatem voluptatum.
                        </AppText>
                        <Experience />
                        <Education />
                        <Footer />
                    </View>
                    <View style={styles.rightSide}>
                        <PersonalInfo />
                        <Skills />
                        <Languages />
                    </View>
                </View>
            </Page>
        </Document>
    </PDFViewer>
);

export default app;
