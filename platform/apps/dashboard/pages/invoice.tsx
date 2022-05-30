import InvoicePdf from "apps/dashboard/src/components/order/invoice-pdf";
import ErrorMessage from "apps/dashboard/src/components/ui/error-message";
import Loader from "apps/dashboard/src/components/ui/loader/loader";
import { useOrderQuery } from "apps/dashboard/src/data/order/use-order.query";
import { PDFViewer } from "@react-pdf/renderer";

const InvoicePage = () => {
  const { data, isLoading: loading, error } = useOrderQuery("1");
  if (loading) return <Loader showText={false} />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <InvoicePdf order={data?.order!} />
    </PDFViewer>
  );
};

export default InvoicePage;
