import React from "react";
import { Suspense } from "react";
import Loading from "./loading";

type Props = {
  children: React.ReactNode;
};

const UserLayout = ({ children }: Props) => {
  return (
    <div className="container w-full max-w-screen-xl mx-auto py-10 px-2.5 lg:px-20">
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default UserLayout;
