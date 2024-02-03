import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { MenuSquare } from "lucide-react";
import DrawerLinks from "./drawer-link";

const MobileDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <MenuSquare className="w-5 h-5" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          {/* <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
          <DrawerLinks />
        </DrawerHeader>
        <DrawerFooter>
          {/* <Button>Submit</Button> */}
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
