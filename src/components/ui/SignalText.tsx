import React from "react";

interface SignalTextProps {
  children: React.ReactNode;
  className?: string;
}

export function SignalText({ children, className = "" }: SignalTextProps) {
  return (
    <span className={`signal-text-clean ${className}`.trim()}>
      {children}
    </span>
  );
}
