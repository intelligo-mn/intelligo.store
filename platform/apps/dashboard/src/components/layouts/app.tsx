import { SUPER_ADMIN } from "@intelligo/dashboard/utils/constants";
import dynamic from "next/dynamic";

const AdminLayout = dynamic(() => import("@intelligo/dashboard/components/layouts/admin"));
const OwnerLayout = dynamic(() => import("@intelligo/dashboard/components/layouts/owner"));

export default function AppLayout({
  userPermissions,
  ...props
}: {
  userPermissions: string[];
}) {
  if (userPermissions?.includes(SUPER_ADMIN)) {
    return <AdminLayout {...props} />;
  }
  return <OwnerLayout {...props} />;
}
