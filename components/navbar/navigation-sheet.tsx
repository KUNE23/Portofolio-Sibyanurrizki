import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-3 px-6">
        <p className="font-bold text-sm text-center">
          Alfiansyah<br></br>Sibyanurrizki
        </p>
        <NavMenu orientation="vertical" className="mt-3" />
      </SheetContent>
    </Sheet>
  );
};
