import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="px-2 w-full lg:px-6 mx-auto">{children}</div>;
};

export default Container;
