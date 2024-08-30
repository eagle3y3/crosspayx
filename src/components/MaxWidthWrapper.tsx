import { cn } from "../lib/utils";
import React, { type ReactNode } from "react";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col sm:border-r sm:border-zinc-700 md:ml-60",
        className
      )}
    >
      {children}
    </div>
  );
};
