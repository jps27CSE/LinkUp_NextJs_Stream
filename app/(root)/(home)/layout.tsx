import { ReactNode } from "react";
import { Sidebar } from "lucide-react";
import Navbar from "@/components/Navbar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div> {children}</div>
        </section>
      </div>
    </div>
  );
};
export default HomeLayout;