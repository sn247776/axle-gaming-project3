import StoreBar from "@/components/store/StoreBar";
import Header from "@/components/store/header/Header";
import UserBar from "@/components/store/userbar/UserBar";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-full">
        <main className="pl-20">
          <div className="sticky top-0 bg-black z-50">
            <Header />
          </div>
          <div className="p-3">{children}</div>
        </main>
      </div>
      <StoreBar />
    </div>
  );
};

export default ProfileLayout;
