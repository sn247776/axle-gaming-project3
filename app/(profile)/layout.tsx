import StoreBar from "@/components/store/StoreBar";
import Header from "@/components/store/header/Header";
import UserBar from "@/components/store/userbar/UserBar";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-screen">
        <div className=" z-20"> <StoreBar /></div>
        <main>
          <div className="sticky top-0 bg-black z-50">
            <Header />
          </div>
          <div className="px-3 py-2 max-h-screen container ">{children}</div>
        </main>
      </div>
      {/* <StoreBar /> */}
    </div>
  );
};

export default ProfileLayout;
