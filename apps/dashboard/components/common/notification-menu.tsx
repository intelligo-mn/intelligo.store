import { useState } from "react";
import { useLayer } from "react-laag";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "@components/icons/bell";
import { Dot } from "@components/icons/dot";
import NotificationCard from "@components/ui/notification-card";

type ItemType = {
  source?: string;
  text?: string | React.ReactNode;
  time?: string;
};
interface MenuType {
  data: object[];
}

const NotificationMenu: React.FC<MenuType> = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  // helper function to close the menu
  function close() {
    setOpen(false);
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    // auto: true, // automatically find the best placement
    placement: "bottom-end", // we prefer to place the menu "top-end"
    triggerOffset: 12, // keep some distance to the trigger
    // containerOffset: 16, // give the menu some room to breath relative to the container
    // arrowOffset: 16, // let the arrow have some room to breath also
  });

  // Again, we're using framer-motion for the transition effect
  return (
    <>
      <button
        className="relative flex items-center justify-center rounded outline-none transition duration-300 ease-in-out text-heading focus:ring-1 focus:outline-none"
        aria-label="show notifications"
        {...triggerProps}
        onClick={() => setOpen(!isOpen)}
      >
        <Bell className="h-5 w-5" />

        <div className="flex absolute -top-1 end-0 text-green-500">
          <Dot />
        </div>
      </button>

      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              {...layerProps}
              initial={{ opacity: 0, scale: 0.85 }} // animate from
              animate={{ opacity: 1, scale: 1 }} // animate to
              exit={{ opacity: 0, scale: 0.85 }} // animate exit
              transition={{
                type: "spring",
                stiffness: 800,
                damping: 35,
              }}
              className="w-80 bg-light rounded shadow-base z-20 overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-200">
                <span className="text-lg text-heading font-semibold">
                  Notification
                </span>

                <button className="text-red-500 text-sm font-semibold transition duration-200 hover:text-red-600 focus:outline-none focus:ring-1">
                  Clear all
                </button>
              </div>
              {!!data.length ? (
                data?.map((item: ItemType, index) => (
                  <NotificationCard
                    key={index}
                    src={item.source}
                    text={item.text}
                    time={item.time}
                  />
                ))
              ) : (
                <div className="bg-light flex items-center justify-center border-b border-border-200">
                  <p className="text-sm text-body py-5">
                    You don't have any notifications.
                  </p>
                </div>
              )}

              <a
                href="#"
                className="flex items-center justify-center bg-light text-sm text-green-500 font-semibold h-11 px-4 transition duration-200 ease-in-out hover:text-green-600"
              >
                See all notifications
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default NotificationMenu;
