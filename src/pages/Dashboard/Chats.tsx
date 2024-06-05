import { DashboardLayout } from "@/layouts";

const Chats = () => {
  return (
    <DashboardLayout>
      <div className="w-full h-[100dvh] p-4 relative">
        <div className="list flex flex-col gap-2 pe-2 max-h-[calc(100dvh-40px)] overflow-y-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
            <div className="box w-full min-h-[200px] bg-neutral-500/10 rounded-lg"></div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chats;
