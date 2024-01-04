import StoreBar from "@/components/store/StoreBar";
import Header from "@/components/store/header/Header";
import UserBar from "@/components/store/userbar/UserBar";
import './scrollbar.scss'

const StoreLayout = async ({ children }: { children: React.ReactNode }) => {
  return (

      <div className="h-full max-w-screen  ">
        <StoreBar />
        <main className="pl-20">
         <div className="  flex flex-col w-full ">
         <div className="sticky top-0 bg-black z-50">
            <Header />
          </div>
          <div className=" flex flex-auto h-full max-w-full  ">
            <div className=" z-0  w-full flex flex-col overflow-x-hidden overflow-y-scroll px-2">
            {children}
            </div>

          {/* <div className=" w-[500px] bg-[#9d3737] top-0 right-0 min-h-[100%] border-2"> */}
          <UserBar />
        {/* </div> */}
          </div>    
          </div>      
        </main>
        
      </div>
  );
};

export default StoreLayout;
