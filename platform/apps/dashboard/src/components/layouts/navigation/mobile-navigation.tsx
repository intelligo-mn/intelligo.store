import { useUI } from "apps/dashboard/src/contexts/ui.context";
import DrawerWrapper from "apps/dashboard/src/components/ui/drawer-wrapper";
import Drawer from "apps/dashboard/src/components/ui/drawer";

const MobileNavigation: React.FC = ({ children }) => {
  const { displaySidebar, closeSidebar } = useUI();

  return (
    <Drawer open={displaySidebar} onClose={closeSidebar} variant="left">
      <DrawerWrapper onClose={closeSidebar}>
        <div className="flex flex-col space-y-6 p-5">{children}</div>
      </DrawerWrapper>
    </Drawer>
  );
};
export default MobileNavigation;
