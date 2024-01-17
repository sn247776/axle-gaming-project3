import StoreBar from "@/components/store/storeBar/StoreBar";
import Header from "@/components/store/header/Header";
import UserBar from "@/components/store/userbar/UserBar";
import './scrollbar.scss'

const StoreLayout = async ({ children }: { children: React.ReactNode }) => {
  return (

    <div className="h-full w-screen flex flex-col">

      <div className="sticky  top-0 bg-black/60 backdrop-blur-xl z-50 w-full left-0">
        <Header />
      </div>

      <div className=" flex w-full h-full  ">
        <StoreBar />
        {/* <main className=" flex w-[50%] bg-black mx-5"> */}
          {/* <div className="  flex flex-col w-full  ">

            <div className=" flex flex-auto h-full max-w-full  "> */}
               <div className=" z-0  w-[100%] flex flex-col overflow-x-hidden overflow-y-scroll px-2 ">
                <main className="container">
                {children}
                </main>
              </div>
{/* 
            </div>
          </div> */}
        {/* </main> */}
        {/* <div className=" sticky right-[1%] top-0"> */}
        <UserBar />
        {/* </div> */}
      </div>
    </div>
  );
};

export default StoreLayout;
