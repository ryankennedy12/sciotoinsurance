import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer placeholder - will be built out later */}
      <footer className="bg-charcoal text-cream py-space-xl">
        <div className="max-w-7xl mx-auto px-space-md lg:px-space-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-space-md">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-display text-xl font-semibold tracking-[0.1em]">
                SCIOTO
              </span>
              <span className="font-body text-xs tracking-[0.15em] text-cream/60">
                INSURANCE GROUP
              </span>
            </div>
            <span className="body-sm text-cream/60">
              © {new Date().getFullYear()} All rights reserved. New Albany, Ohio
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
