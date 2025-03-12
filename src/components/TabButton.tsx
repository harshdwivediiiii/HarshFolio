"use client";
import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  tooltip?: string;
  activeColor?: string;
  inactiveColor?: string;
  disabled?: boolean;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
  icon,
  tooltip,
  activeColor = "text-black dark:text-white",
  inactiveColor = "text-[#ADB7BE] dark:text-gray-400",
  disabled = false,
}) => {
  const buttonClasses = active ? activeColor : inactiveColor;

  return (
    <Tooltip>
      <div data-tooltip={tooltip || ""} className="m-2">
        <Button
          onClick={selectTab}
          disabled={disabled}
          className={cn("flex items-center gap-2 px-4 py-2", disabled && "opacity-50 cursor-not-allowed")}
          role="tab"
          aria-selected={active}
        >
          {icon && <span>{icon}</span>}
          <p className={`mr-3 font-semibold hover:text-black dark:hover:text-white ${buttonClasses}`}>{children}</p>
          <motion.div
            animate={active ? "active" : "default"}
            variants={variants}
            className="h-1 bg-primary-500 mt-2 mr-3"
          ></motion.div>
        </Button>
      </div>
    </Tooltip>
  );
};

export default TabButton;
