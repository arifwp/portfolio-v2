import clsx from "clsx";
import { Navbar } from "../Navbar";

export const ContainerLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("w-full", className)}>
      <Navbar />

      {/* Main  */}
      <main className="w-full">{children}</main>

      {/* Footer */}
      {/* <footer></footer> */}
    </div>
  );
};
