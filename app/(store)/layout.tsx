import StoreBar from "@/components/store/StoreBar";
import Header from "@/components/store/header/Header";
import UserBar from "@/components/store/userbar/UserBar";

const StoreLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-full">
        <main className="pl-20">
          <div className="sticky top-0 bg-black z-50">
            <Header />
          </div>
          <div className="p-3 ">{children}</div>
        </main>
        <div className="fixed w-[250px] right-1 top-[150px] z-50 bg-black min-h-[100%] border-2">
          <UserBar />
        </div>
      </div>
      <StoreBar />
    </div>
  );
};

export default StoreLayout;
