import { useUI } from "@contexts/ui.context";
import DrawerWrapper from "@components/ui/drawer-wrapper";
import Drawer from "@components/ui/drawer";

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
