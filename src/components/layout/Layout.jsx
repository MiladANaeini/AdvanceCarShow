import TopNav from "./TopNav";
import AppRoutes from "../../routes";

const Layout = () => {
  return (
    <>
      <TopNav />
      <main className="h-full">
        <AppRoutes />
      </main>
    </>
  );
};

export default Layout;
