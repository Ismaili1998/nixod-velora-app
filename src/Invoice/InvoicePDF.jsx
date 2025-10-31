import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Font,
} from '@react-pdf/renderer';

// Create styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  colorStrip: {
    height: 8,
    background: 'linear-gradient(90deg, #14b8a6 0%, #3b82f6 100%)',
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  invoiceTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  invoiceNumber: {
    fontSize: 11,
    color: '#64748b',
  },
  dateSection: {
    textAlign: 'right',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 6,
  },
  dateLabel: {
    color: '#64748b',
    fontWeight: 'bold',
    marginRight: 8,
  },
  dateValue: {
    color: '#1e293b',
  },
  addressSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  addressBlock: {
    width: '45%',
  },
  addressLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#14b8a6',
    letterSpacing: 1,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  addressName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  addressLine: {
    fontSize: 10,
    color: '#64748b',
    marginBottom: 2,
  },
  table: {
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#14b8a6',
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableHeaderCell: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingVertical: 12,
  },
  tableCell: {
    fontSize: 10,
    color: '#1e293b',
  },
  descriptionCell: {
    width: '50%',
    fontWeight: 'bold',
  },
  quantityCell: {
    width: '15%',
    textAlign: 'right',
  },
  rateCell: {
    width: '17.5%',
    textAlign: 'right',
  },
  amountCell: {
    width: '17.5%',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  totalsSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginBottom: 30,
  },
  totalsBox: {
    width: '40%',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    color: '#64748b',
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalValue: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    marginVertical: 8,
  },
  grandTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
    color: '#1e293b',
  },
  grandTotalLabel: {
    fontWeight: 'bold',
  },
  grandTotalValue: {
    fontWeight: 'bold',
    color: '#14b8a6',
  },
  notesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  notesBlock: {
    width: '47%',
  },
  notesTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  notesText: {
    fontSize: 9,
    color: '#64748b',
    lineHeight: 1.4,
  },
});

// PDF Document Component
const InvoicePDF = ({ invoiceData }) => {
  const calculateSubtotal = () => {
    return invoiceData.items.reduce((sum, item) => sum + item.amount, 0);
  };

  const calculateTax = () => {
    return (calculateSubtotal() * invoiceData.taxRate) / 100;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Color Strip */}
        <View style={styles.colorStrip} />

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.invoiceTitle}>INVOICE</Text>
            <Text style={styles.invoiceNumber}>
              No: {invoiceData.invoiceNumber}
            </Text>
          </View>
          <View style={styles.dateSection}>
            <View style={styles.dateRow}>
              <Text style={styles.dateLabel}>Date:</Text>
              <Text style={styles.dateValue}>
                {invoiceData.date.format('MMM DD, YYYY')}
              </Text>
            </View>
            <View style={styles.dateRow}>
              <Text style={styles.dateLabel}>Due Date:</Text>
              <Text style={styles.dateValue}>
                {invoiceData.dueDate.format('MMM DD, YYYY')}
              </Text>
            </View>
          </View>
        </View>

        {/* Address Section */}
        <View style={styles.addressSection}>
          <View style={styles.addressBlock}>
            <Text style={styles.addressLabel}>From</Text>
            <Text style={styles.addressName}>{invoiceData.from.name}</Text>
            <Text style={styles.addressLine}>{invoiceData.from.address}</Text>
            <Text style={styles.addressLine}>{invoiceData.from.city}</Text>
            <Text style={styles.addressLine}>{invoiceData.from.email}</Text>
            <Text style={styles.addressLine}>{invoiceData.from.phone}</Text>
          </View>
          <View style={styles.addressBlock}>
            <Text style={styles.addressLabel}>Bill To</Text>
            <Text style={styles.addressName}>{invoiceData.to.name}</Text>
            <Text style={styles.addressLine}>{invoiceData.to.address}</Text>
            <Text style={styles.addressLine}>{invoiceData.to.city}</Text>
            <Text style={styles.addressLine}>{invoiceData.to.email}</Text>
            <Text style={styles.addressLine}>{invoiceData.to.phone}</Text>
          </View>
        </View>

        {/* Items Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderCell, styles.descriptionCell]}>
              Description
            </Text>
            <Text style={[styles.tableHeaderCell, styles.quantityCell]}>
              Qty
            </Text>
            <Text style={[styles.tableHeaderCell, styles.rateCell]}>Rate</Text>
            <Text style={[styles.tableHeaderCell, styles.amountCell]}>
              Amount
            </Text>
          </View>

          {/* Table Rows */}
          {invoiceData.items.map((item) => (
            <View key={item.id} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.descriptionCell]}>
                {item.description}
              </Text>
              <Text style={[styles.tableCell, styles.quantityCell]}>
                {item.quantity}
              </Text>
              <Text style={[styles.tableCell, styles.rateCell]}>
                ${item.rate.toFixed(2)}
              </Text>
              <Text style={[styles.tableCell, styles.amountCell]}>
                ${item.amount.toFixed(2)}
              </Text>
            </View>
          ))}
        </View>

        {/* Totals Section */}
        <View style={styles.totalsSection}>
          <View style={styles.totalsBox}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal:</Text>
              <Text style={styles.totalValue}>
                ${calculateSubtotal().toFixed(2)}
              </Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>
                Tax ({invoiceData.taxRate}%):
              </Text>
              <Text style={styles.totalValue}>
                ${calculateTax().toFixed(2)}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalLabel}>Total:</Text>
              <Text style={styles.grandTotalValue}>
                ${calculateTotal().toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        {/* Notes Section */}
        <View style={styles.notesSection}>
          <View style={styles.notesBlock}>
            <Text style={styles.notesTitle}>Notes</Text>
            <Text style={styles.notesText}>{invoiceData.notes}</Text>
          </View>
          <View style={styles.notesBlock}>
            <Text style={styles.notesTitle}>Terms & Conditions</Text>
            <Text style={styles.notesText}>{invoiceData.terms}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Export Button Component
export const InvoicePDFDownloadButton = ({ invoiceData, children }) => (
  <PDFDownloadLink
    document={<InvoicePDF invoiceData={invoiceData} />}
    fileName={`invoice-${invoiceData.invoiceNumber}.pdf`}
  >
    {({ blob, url, loading, error }) =>
      loading ? 'Generating PDF...' : children || 'Download PDF'
    }
  </PDFDownloadLink>
);

export default InvoicePDF;