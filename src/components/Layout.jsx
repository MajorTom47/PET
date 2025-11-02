import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      {/* Bottom navigation will be added here */}
    </div>
  );
};

export default Layout;
