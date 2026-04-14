"use client";

import React from "react";
import { pushEvent } from "@/utils/analytics";

type Props = {
  children: React.ReactNode;
  eventName: string;
  eventData?: Record<string, any>;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  children,
  eventName,
  eventData = {},
  className,
  href,
  onClick,
}) => {
  const handleClick = () => {
    pushEvent({
      event: eventName,
      ...eventData,
    });

    if (onClick) onClick();
  };

  if (href) {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};
