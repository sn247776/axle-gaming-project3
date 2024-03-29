import StoreBar from "@/components/store/storeBar/StoreBar";
import Header from "@/components/store/header/Header";
import UserBar from "@/components/store/userbar/UserBar";
import './scrollbar.scss'
const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-screen flex flex-col">

      <div className="sticky  top-0 bg-black/60 backdrop-blur-xl z-50 w-full left-0">
        <Header />
      </div>

      <div style={{height:"calc(100vh - 64px)"}} className=" flex w-full h-full overflow-hidden  ">
        <StoreBar />

               <div className=" z-0  w-[100%] h-screen flex flex-col overflow-y-scroll px-2 ">
                <main className="container">
                {children}
                </main>
              </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
