import { Navbar } from "@/components/Navbar";

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full pt-18">
      <Navbar />

      {children}
    </div>
  );
}
