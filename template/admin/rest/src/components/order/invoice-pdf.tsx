import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Order, SettingsOptions, UserAddress } from "@ts-types/generated";
import { formatAddress } from "@utils/format-address";
import usePrice from "@utils/use-price";
import dayjs from "dayjs";

export default function InvoicePdf({
  order,
  subtotal,
  total,
  discount,
  delivery_fee,
  sales_tax,
  settings,
}: {
  order: Order;
  settings: SettingsOptions;
  subtotal: string;
  total: string;
  discount: string;
  delivery_fee: string;
  sales_tax: string;
}) {
  return (
    <Document>
      <Page size="A4" style={{ paddingVertical: 40 }} wrap>
        <View style={styles.container}>
          {/* Address */}
          <View style={styles.addressWrapper}>
            <View style={styles.section}>
              <Text style={[styles.addressText, { marginBottom: 20 }]}>
                Invoice No:
                <Text style={{ color: "#374151" }}>
                  {order.tracking_number}
                </Text>
              </Text>
              <Text
                style={[styles.addressText, { color: "#374151", fontSize: 12 }]}
              >
                {order?.customer?.name}
              </Text>
              <Text style={styles.addressText}>{order?.customer?.email}</Text>
              <Text style={styles.addressText}>{order?.customer_contact}</Text>
              <Text style={styles.addressText}>
                {formatAddress(order?.shipping_address as UserAddress)}
              </Text>
            </View>

            <View style={[styles.section]}>
              <Text style={[styles.addressTextRight, { marginBottom: 20 }]}>
                Date: {dayjs().format("D MMMM, YYYY")}
              </Text>
              <Text
                style={[
                  styles.addressTextRight,
                  { color: "#374151", fontSize: 12 },
                ]}
              >
                {settings?.siteTitle}
              </Text>
              <Text style={styles.addressTextRight}>
                {settings?.contactDetails?.website}
              </Text>
              <Text style={styles.addressTextRight}>
                {settings?.contactDetails?.contact}
              </Text>
              <Text style={styles.addressTextRight}>
                {settings?.contactDetails?.location?.formattedAddress}
              </Text>
            </View>
          </View>

          {/* Table */}
          <View style={styles.orderTable}>
            <View style={styles.tbody}>
              <View style={styles.tr}>
                <Text style={[styles.td, { width: 50, textAlign: "center" }]}>
                  #
                </Text>
                <Text style={[styles.td, { flex: 1 }]}>name</Text>
                <Text style={[styles.td, { width: 75, textAlign: "center" }]}>
                  Quantity
                </Text>
                <Text style={[styles.td, { flex: 1, textAlign: "center" }]}>
                  Variations
                </Text>
                <Text style={[styles.td, { width: 100, textAlign: "right" }]}>
                  Total
                </Text>
              </View>

              {order.products.map((product, index) => {
                const { price } = usePrice({
                  // @ts-ignore
                  amount: parseFloat(product.pivot.subtotal),
                  currencyCode: settings.currency!,
                });

                return (
                  <View style={styles.tr} key={index} wrap={false}>
                    <Text
                      style={[styles.td, { width: 50, textAlign: "center" }]}
                    >
                      {index + 1}
                    </Text>
                    <Text style={[styles.td, { flex: 1 }]}>{product.name}</Text>
                    <Text
                      style={[styles.td, { width: 75, textAlign: "center" }]}
                    >
                      {product?.pivot?.order_quantity}
                    </Text>
                    <Text style={[styles.td, { flex: 1, textAlign: "center" }]}>
                      {
                        product?.variation_options?.find(
                          (item) =>
                            item?.id === product?.pivot?.variation_option_id
                        )?.title
                      }
                    </Text>
                    <Text
                      style={[styles.td, { width: 100, textAlign: "right" }]}
                    >
                      {price}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={{ width: "100%" }} wrap={false}>
            {/* Border */}
            <View style={styles.singleBorder} />

            {/* Total */}
            <View style={styles.totalCountWrapper}>
              <View style={styles.totalCountRow}>
                <Text style={styles.totalCountCell}>Sub Total</Text>
                <Text style={styles.totalCountCell}>{subtotal}</Text>
              </View>
              <View style={styles.totalCountRow}>
                <Text style={styles.totalCountCell}>Discount</Text>
                <Text style={styles.totalCountCell}>{discount}</Text>
              </View>
              <View style={styles.totalCountRow}>
                <Text style={styles.totalCountCell}>Tax</Text>
                <Text style={styles.totalCountCell}>{sales_tax}</Text>
              </View>
              <View style={styles.totalCountRow}>
                <Text style={styles.totalCountCell}>Delivery Fee</Text>
                <Text style={styles.totalCountCell}>{delivery_fee}</Text>
              </View>
              <View style={styles.totalCountRow}>
                <Text style={[styles.totalCountCell, { fontSize: 12 }]}>
                  Total
                </Text>
                <Text style={[styles.totalCountCell, { fontSize: 12 }]}>
                  {total}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 600,
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
  },

  addressWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  section: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
  },

  addressText: {
    fontSize: 11,
    color: "#6B7280",
    fontWeight: 400,
    marginBottom: 5,
  },
  addressTextRight: {
    fontSize: 11,
    color: "#6B7280",
    fontWeight: 400,
    marginBottom: 5,
    textAlign: "right",
  },

  orderTable: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  thead: {
    width: "100%",
    backgroundColor: "#F3F4F6",
    display: "flex",
    flexDirection: "row",
  },

  th: {
    fontSize: 11,
    // fontFamily: "Lato Bold",
    color: "#374151",
    padding: "12pt 16pt",
    borderRightWidth: 1,
    borderRightColor: "#ffffff",
    borderRightStyle: "solid",
  },

  tbody: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  tr: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },

  td: {
    fontSize: 11,
    color: "#6B7280",
    padding: "12pt 16pt",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    borderTopStyle: "solid",
    borderRightWidth: 1,
    borderRightColor: "#ffffff",
    borderRightStyle: "solid",
  },

  singleBorder: {
    width: "50%",
    display: "flex",
    marginLeft: "auto",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    borderTopStyle: "solid",
    marginBottom: 2,
  },

  totalCountWrapper: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    borderTopStyle: "solid",
  },

  totalCountRow: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  totalCountCell: {
    fontSize: 11,
    color: "#6B7280",
    padding: "8pt 16pt 2pt",
  },
});
