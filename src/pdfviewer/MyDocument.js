import React from 'react';
import styles from './styles';
import { Page, Text, View, Document, Image, PDFViewer } from '@react-pdf/renderer';
import GiftImg from '../assets/img/complete.jpg';

const MyDocument = ({ giftcontent }) => {
    return (
        <PDFViewer width="100%" height="1000px">
            <Document>
                <Page size="A5" style={styles.page} orientation="landscape">
                    <View>
                        <Image style={styles.image} src={GiftImg} alt="images" />
                    </View>
                    <View style={styles.giftcard}>
                        <View style={styles.gifttitle}>
                            <Text>{giftcontent?.ptitle}</Text>
                        </View>
                        <View style={styles.giftindexs}>
                            <View style={styles.giftindex}>
                                <Text>Name: {giftcontent?.psalonName}</Text>
                            </View>
                            <View style={styles.giftindex}>
                                <Text>Price: {giftcontent?.pprice}</Text>
                            </View>
                            <View style={styles.giftindex}>
                                <Text>Terms and conditions: {giftcontent?.pterm}</Text>
                            </View>
                            <View style={styles.giftindex}>
                                <Text>To: {giftcontent?.pto}</Text>
                            </View>
                            <View style={styles.giftindex}>
                                <Text>From: {giftcontent?.pfrom}</Text>
                            </View>
                            <View style={styles.giftindex}>
                                <Text>Occasion: {giftcontent?.poccasion}</Text>
                            </View>
                            <View style={styles.giftindex}>
                                <View style={styles.giftpart}><Text>Amount: {giftcontent?.pamount}</Text></View>
                                <View style={styles.giftpart}><Text>Check out: {giftcontent?.pcheckout}</Text></View>
                            </View>
                            <View style={styles.giftindex}>
                                <Text>Note: {giftcontent?.pnote}</Text>
                            </View>
                        </View>
                    </View>

                </Page>
            </Document>
        </PDFViewer>
    )
}

export default MyDocument;