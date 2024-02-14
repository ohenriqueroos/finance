import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <div className="bg-zinc-950 h-screen w-screen">
      <Outlet></Outlet>
    </div>
  );
};

export default RootPage;
