import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NestedLayout = ({ children }: Props) => {
  return (
    <div className="mx-auto  w-full md:w-1/2 h-full flex">
      <div className="my-10 mx-4 md:mx-8 p-4 md:p-8 shadow-inner shadow-main-300 rounded-2xl flex-1">
        {children}
      </div>
    </div>
  );
};

export default NestedLayout;
