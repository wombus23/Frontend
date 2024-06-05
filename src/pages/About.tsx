import { Button } from "@/components/ui/button";
import { DefaultLayout } from "@/layouts";
import { Link } from "react-router-dom";
import react from "@/assets/images/About/react.png";
import github from "@/assets/images/About/github.png";
import webflow from "@/assets/images/About/webflow.png";

const About = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 pb-32 max-w-screen-lg min-h-[calc(100dvh-72px)] flex flex-col justify-center items-center gap-[80px] relative z-10">
        <div className="content max-w-[568px] text-center">
          <h1 className="text-[32px] font-medium opacity-80">
            We are driven by innovation and passion for providing knowledge.
          </h1>
          <p className="text-primary-foreground opacity-80 font-normal text-[13px] pb-8">
            Our platform is helping many individual in their daily lives by
            providing legal knowledge without any inconvenience, on their
            screens with easy access to countless resources.
          </p>
          <Link to="#">
            <Button className="rounded-full">Contact Us</Button>
          </Link>
        </div>
        <div className="flex">
          <h3 className="text-[32px] font-medium w-[40%] hidden lg:flex">About Us:</h3>
          <p className="text-[13px] font-medium w-full">
            Driven by innovation, we're committed to making legal information
            accessible to all. Our AI-powered platform simplifies the
            complexities of the law, empowering you to navigate legal challenges
            confidently.
            <br />
            With accuracy and user-centric design at our core, we aim to foster
            legal literacy and promote justice for all. Join us in redefining
            legal technology and making the law a tool for empowerment.
          </p>
        </div>
      </div>
        <div className="bottom-strip absolute bottom-0 left-0 right-0 min-h-[80px] w-full bg-primary flex gap-10 px-2 lg:gap-[56px] items-center justify-center">
          <img src={github} alt="Github" className="max-h-[69px]" />
          <img src={react} alt="React" className="max-h-[69px]" />
          <img src={webflow} alt="Webflow" className="max-h-[69px]" />
        </div>
      <div className="blur-box w-[1130px] h-[508px] absolute blur-[306px] -right-[200px] -bottom-[200px] lg:-right-[500px] lg:top-0 bg-[#545A54] z-0" />
    </DefaultLayout>
  );
};

export default About;
