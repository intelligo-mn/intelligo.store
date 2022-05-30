import Link from "@intelligo/dashboard/components/ui/link";
import { getIcon } from "@intelligo/dashboard/utils/get-icon";
import * as sidebarIcons from "@intelligo/dashboard/components/icons/sidebar";
import { useUI } from "@intelligo/dashboard/contexts/ui.context";

const SidebarItem = ({ href, icon, label }: any) => {
  const { closeSidebar } = useUI();
  return (
    <Link
      href={href}
      className="flex w-full items-center text-base text-body-dark text-start focus:text-accent"
    >
      {getIcon({
        iconList: sidebarIcons,
        iconName: icon,
        className: "w-5 h-5 me-4",
      })}
      <span onClick={() => closeSidebar()}>{label}</span>
    </Link>
  );
};

export default SidebarItem;
