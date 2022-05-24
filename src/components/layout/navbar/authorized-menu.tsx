import { useState } from "react";
import { useLayer } from "react-laag";
import { motion, AnimatePresence } from "framer-motion";
import { siteSettings } from "@settings/site.settings";
import Avatar from "@components/ui/avatar";
import { zoomInBottom } from "@utils/motion/zoom-in-bottom";
import { useCustomerQuery } from "@graphql/auth.graphql";
import { useRouter } from "next/router";

export default function AuthorizedMenu() {
  const { data } = useCustomerQuery();
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  // helper function to close the menu
  function close() {
    setOpen(false);
  }
  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    placement: "bottom-end", // we prefer to place the menu "bottom-end"
    triggerOffset: 10, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
  });
  function handleClick(path: string) {
    close();
    router.push(path);
  }
  return (
    <>
      <button
        type="button"
        className="flex items-center focus:outline-none"
        aria-label="toggle profile dropdown"
        onClick={() => setOpen(!isOpen)}
        {...triggerProps}
      >
        <Avatar
          src={
            data?.me?.profile?.avatar?.thumbnail ?? "/avatar-placeholder.svg"
          }
          title="user name"
        />
        <span className="sr-only">user avatar</span>
      </button>

      {renderLayer(
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              {...layerProps}
              initial="from"
              animate="to"
              exit="from"
              variants={zoomInBottom()}
              className="py-4 w-48 bg-white rounded shadow-700 z-20"
            >
              {siteSettings.authorizedLinks.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <button
                    onClick={() => handleClick(href)}
                    className="block w-full py-2.5 px-6 text-sm text-left font-semibold capitalize text-heading transition duration-200 hover:text-primary focus:outline-none"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
