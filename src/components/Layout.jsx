import { Outlet } from "react-router-dom";

function Layout() {
  return (
      <div className={'app-container'}>
        <Outlet /> {/* Hier werden die Inhalte von Home, Add, Profile gerendert */}
      </div>
  );
}

export default Layout;
