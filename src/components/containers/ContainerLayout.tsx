import clsx from "clsx";
import { Navbar } from "../Navbar";
import { MobileNavbar } from "../MobileNavbar";

export const ContainerLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("w-full relative", className)}>
      <Navbar />

      {/* Main  */}
      <main className="w-full">{children}</main>

      <MobileNavbar />

      {/* Footer */}
      {/* <footer></footer> */}
    </div>
  );
};
