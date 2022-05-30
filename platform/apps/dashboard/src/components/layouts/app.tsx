import { SUPER_ADMIN } from "apps/dashboard/src/utils/constants";
import dynamic from "next/dynamic";

const AdminLayout = dynamic(() => import("apps/dashboard/src/components/layouts/admin"));
const OwnerLayout = dynamic(() => import("apps/dashboard/src/components/layouts/owner"));

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
