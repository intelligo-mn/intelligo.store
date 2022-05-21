import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import cn from "classnames";
import { ExpandLessIcon } from "@components/icons/expand-less-icon";
import { ExpandMoreIcon } from "@components/icons/expand-more-icon";
import { getIcon } from "@utils/get-icon";
import * as sidebarIcons from "@components/icons/sidebar";
import { useUI } from "@contexts/ui.context";
import { useTranslation } from "next-i18next";

function SidebarMenuItem({ className, item, depth = 0 }: any) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isOpen, setOpen] = useState(() => router.pathname === item.href);
  const { href, labelTransKey, items, icon } = item;
  const { displaySidebar, closeSidebar } = useUI();

  function toggleCollapse() {
    setOpen((prevValue) => !prevValue);
  }

  function onClick() {
    if (Array.isArray(items)) {
      toggleCollapse();
    } else {
      router.push(href);
      displaySidebar && closeSidebar();
    }
  }

  let expandIcon;
  if (Array.isArray(items) && items.length) {
    expandIcon = !isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />;
  }

  return (
    <>
      <motion.li
        initial={false}
        animate={{ backgroundColor: "#ffffff" }}
        onClick={onClick}
        className="py-3 rounded-md"
      >
        <button
          className={cn(
            "flex w-full items-center text-base text-start outline-none border-0 focus:outline-none focus:ring-0 focus:text-accent",
            router.pathname === href ? "text-accent" : "text-heading",
            className
          )}
        >
          {getIcon({
            iconList: sidebarIcons,
            iconName: icon,
            className: "w-5 h-5 me-4",
          })}
          <p className="flex-1">{t(labelTransKey)}</p>
          <span>{expandIcon}</span>
        </button>
      </motion.li>
      <AnimatePresence initial={false}>
        {Array.isArray(items) && isOpen ? (
          <li>
            <motion.ul
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="ms-4 text-xs"
            >
              {items?.map((currentItem) => {
                const childDepth = depth + 1;
                return (
                  <SidebarMenuItem
                    key={`${currentItem.href}${currentItem.label}`}
                    item={currentItem}
                    depth={childDepth}
                    className={cn("text-sm text-body")}
                  />
                );
              })}
            </motion.ul>
          </li>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function SidebarMenu({ items, className }: any) {
  return (
    <ul className={cn("text-xs", className)}>
      {items?.map((item: any) => (
        <SidebarMenuItem
          key={`${item.href}${item.labelTransKey}`}
          item={item}
        />
      ))}
    </ul>
  );
}

export default SidebarMenu;
