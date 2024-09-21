import { HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex py-4 items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <HomeIcon className="text-primary size-5" />
          <p className="font-bold">Capsulify</p>
        </div>

        <Link href="/dashboard">
          <Button variant="primary">Sign in</Button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
