import Navbar from "@components/layouts/navigation/top-navbar";
import OwnerInformation from "@components/user/user-details";
import MobileNavigation from "@components/layouts/navigation/mobile-navigation";

const OwnerLayout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
      <Navbar />
      <MobileNavigation>
        <OwnerInformation />
      </MobileNavigation>

      <div className="flex flex-1 pt-20">
        <aside className="shadow w-72 xl:w-76 hidden lg:block overflow-y-auto bg-white px-4 fixed start-0 bottom-0 h-full pt-22">
          <OwnerInformation />
        </aside>
        <main className="w-full lg:ps-72 xl:ps-76">
          <div className="p-5 md:p-8 h-full">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default OwnerLayout;
