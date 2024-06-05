import { DashboardLayout } from "@/layouts";

const Chats = () => {
  return (
    <DashboardLayout>
      <div className="w-full h-[100dvh] p-4 relative">
        <header className="h-[40px] flex items-center p-4 absolute top-0 left-0 bg-neutral-800/80 backdrop-blur-lg w-full">
          <h1 className="font-light text-[16px] text-neutral-500">Chats</h1>
        </header>
      </div>
    </DashboardLayout>
  );
};

export default Chats;
