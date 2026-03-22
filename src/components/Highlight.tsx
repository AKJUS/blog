import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Highlight({ children }: Props) {
  return (
    <div className="border-primary rounded-lg border-2 px-4 py-[0.6rem] text-center text-[0.95em] shadow-[0_0_8px_rgba(0,0,0,0.125)]">
      <strong className="text-primary tracking-[0.05em]">{children}</strong>
    </div>
  );
}
