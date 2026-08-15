"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FloatingTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FloatingTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FloatingTextareaProps
>(({ label, error, id, className, ...props }, ref) => {
  return (
    <div className="relative">
      <textarea
        ref={ref}
        id={id}
        placeholder=" "
        className={cn(
          "peer w-full rounded-md border border-paper/15 bg-paper px-3 pb-2 pt-6 text-sm text-ink outline-none focus-visible:ring-[3px] focus-visible:ring-cobalt/30",
          error && "border-cobalt",
          className
        )}
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-4 text-sm text-ink/40 transition-all duration-150 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-focus:top-2 peer-focus:text-xs peer-focus:!text-cobalt"
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-cobalt">{error}</p>}
    </div>
  );
});
FloatingTextarea.displayName = "FloatingTextarea";