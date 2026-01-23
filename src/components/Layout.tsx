import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header placeholder - will be built out later */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container-wide px-space-md md:px-space-lg py-space-sm">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-semibold text-primary">
              Scioto Insurance Group
            </span>
            <nav className="hidden md:flex items-center gap-space-md">
              <span className="body-sm text-muted-foreground">Navigation coming soon</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer placeholder - will be built out later */}
      <footer className="bg-charcoal text-cream py-space-xl">
        <div className="container-wide px-space-md md:px-space-lg">
          <div className="flex flex-col md:flex-row justify-between items-center gap-space-md">
            <span className="font-display text-xl font-medium">
              Scioto Insurance Group
            </span>
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
