import { DefaultLayout } from "@/layouts";
import Hero from "@/assets/images/Home/Hero.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-[40px] lg:gap-[150px] items-center min-h-[calc(100dvh-72px)]">
        <div className="w-full space-y-4 z-10 relative text-center lg:text-left">
          <h1 className="text-lg lg:text-[64px] leading-normal font-medium px-20 lg:px-0">
            Your Intelligent AI Lawyer Is Here!
          </h1>
          <p className="text-[13px] font-light opacity-50 leading-loose hidden lg:block">
            Guiding You Through the Legal Maze with Ease ! AI chat bot with
            count less resources to help you with your legal matters. Get advice
            from your virtual lawyer on any matter.
          </p>
          <div className="items-center justify-start gap-[20px] hidden lg:flex">
            <Link to={"/signup"}>
              <Button className="uppercase rounded-full min-w-[80px]">
                Try for free
              </Button>
            </Link>
            <Link to={"/login"}>
              <Button
                variant={"secondary"}
                className="uppercase rounded-full min-w-[80px]"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
        <img
          className="w-full relative z-10 max-w-[280px] lg:max-w-none"
          src={Hero}
          alt="Qanoon BOT"
        />
        <div className="lg:hidden flex flex-col gap-10 relative z-10">
          <p className="text-[13px] font-light opacity-50 leading-loose text-center">
            Guiding You Through the Legal Maze with Ease ! AI chat bot with
            count less resources to help you with your legal matters. Get advice
            from your virtual lawyer on any matter.
          </p>
          <div className="flex items-center justify-center gap-[20px]">
            <Link to={"/signup"}>
              <Button className="uppercase rounded-full min-w-[80px]">
                Try for free
              </Button>
            </Link>
            <Link to={"/login"}>
              <Button
                variant={"secondary"}
                className="uppercase rounded-full min-w-[80px]"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
        <div className="blur-box w-[1130px] h-[508px] absolute blur-[306px] -right-[200px] -bottom-[200px] bg-[#428DFC] lg:bg-[#2D5B6A] z-0" />
        <p className="absolute left-1/2 bottom-4 -translate-x-1/2 text-overpass text-[15px] text-white opacity-50">
          © Qanoon Bot 2024
        </p>
      </div>
    </DefaultLayout>
  );
};

export default Home;
