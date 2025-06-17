import { Button } from "@/components/ui/button";
import { GithubLogo, LinkedinLogo } from "../icons";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <a href="#">
          <p className="font-bold text-sm">
            Alfiansyah<br></br>Sibyanurrizki
          </p>
        </a>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <a href="https://linkedin.com/in/alfiansyah-sibyanurrizki" target="_blank">
            <Button variant="outline" className="hidden sm:inline-flex rounded-full shadow-none" size="icon">
              <LinkedinLogo />
            </Button>
          </a>
          <a href="https://github.com/kune23" target="_blank">
            <Button variant="outline" className="rounded-full shadow-none" size="icon">
              <GithubLogo className="h-5! w-5!" />
            </Button>
          </a>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
