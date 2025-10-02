import { ReactNode } from "react";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <h1>Salman Shariff</h1>
      
      {children}
    </div>
  );
}