import { DefaultLayout } from "@/layouts";
import consultation from "@/assets/images/Features/consultation.png";
import search from "@/assets/images/Features/search.png";

const Features = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10 max-w-screen-lg min-h-[calc(100dvh-72px)] flex flex-col justify-center gap-1 relative z-10">
        <div className="content max-w-[420px]">
          <h1 className="text-[32px] font-medium">Our Features</h1>
          <p className="text-[13px] opacity-50">
            With use of AI, Qanoon Bot is providing top-notch legal guidance for
            any individual in any field of life.
          </p>
        </div>
        <div className="features flex flex-col lg:flex-row gap-10 lg:gap-[120px] mt-20">
          <div className="feature flex gap-[22px]">
            <img
              className="min-w-[72px] h-[69px] object-cover"
              src={consultation}
              alt="Consultation"
            />
            <div className="data space-y-1">
              <h5 className="text-[24px] font-normal">
                Real-Time Consultation
              </h5>
              <p className="text-[13px] font-medium opacity-50">
                Enables user to have one on one chat with a professional lawyer
                for the solution of their legal problem.
              </p>
            </div>
          </div>
          <div className="feature flex gap-[22px]">
            <img
              className="min-w-[72px] h-[69px] object-cover"
              src={search}
              alt="Search"
            />
            <div className="data space-y-1">
              <h5 className="text-[24px] font-normal">Intelligent Search</h5>
              <p className="text-[13px] font-medium opacity-50">
                Enables user to search in depth for the solution of their
                problems. Our platform makes sure to provide accurate and to the
                point information.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="blur-box w-[1130px] h-[508px] absolute blur-[306px] left-1/2 -translate-x-1/2 -bottom-[200px] bg-[#4F1717] z-0" />
    </DefaultLayout>
  );
};

export default Features;
