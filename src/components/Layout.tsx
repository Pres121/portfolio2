import { ReactNode } from "react";
import Navbar from "./Navbar";
import heroBg from "@/assets/hero-bg-v2.jpg";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img src={heroBg} alt="background" className="w-full h-full object-cover animated-bg opacity-60" />
      </div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
