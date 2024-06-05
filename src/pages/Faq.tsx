import { DefaultLayout } from "@/layouts";
import {
  Accordion,
  AccordionContent as _AccordionContent,
  AccordionItem as _AccordionItem,
  AccordionTrigger as _AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10 pt-32 max-w-screen-lg min-h-[calc(100dvh-72px)] flex flex-col lg:flex-row gap-[124px]">
        <article className="w-[80%] relative z-10">
          <h1 className="font-overpass font-medium text-[32px]">
            Frequently Asked Questions
          </h1>
          <p className="text-[13px] font-medium opacity-50">
            {
              "Qanoon Bot’s powerful features. From Basic legal question to complicated  case solving, experience a new level of  efficiency and connectivity."
            }
          </p>
          <Accordion
            className="mt-[48px]"
            type="single"
            collapsible
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>How accurate is Qanoon Bot ?</AccordionTrigger>
              <AccordionContent>
                Qanoon Bot leverages cutting-edge technology to provide you with
                reliable legal insights. Empower yourself with knowledge, and
                let Qanoon Bot be your guide through the legal landscape.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How secure is my data on this site ?
              </AccordionTrigger>
              <AccordionContent>
                Qanoon Bot leverages cutting-edge technology to provide you with
                reliable legal insights. Empower yourself with knowledge, and
                let Qanoon Bot be your guide through the legal landscape.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What makes Qanoon Bot different from other chat bot ?
              </AccordionTrigger>
              <AccordionContent>
                Qanoon Bot leverages cutting-edge technology to provide you with
                reliable legal insights. Empower yourself with knowledge, and
                let Qanoon Bot be your guide through the legal landscape.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How often do you release updates ?
              </AccordionTrigger>
              <AccordionContent>
                Qanoon Bot leverages cutting-edge technology to provide you with
                reliable legal insights. Empower yourself with knowledge, and
                let Qanoon Bot be your guide through the legal landscape.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is there any subscription fees ?
              </AccordionTrigger>
              <AccordionContent>
                Qanoon Bot leverages cutting-edge technology to provide you with
                reliable legal insights. Empower yourself with knowledge, and
                let Qanoon Bot be your guide through the legal landscape.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </article>
        <article className="sidebar w-full max-w-[328px] flex flex-col gap-2 text-[13px] text-primary-foreground font-medium relative z-10">
          <h3 className="text-foreground">Related Blogs</h3>
          <Link to="#">Evolution of AI in Legal Practice</Link>
          <Link to="#">Ensuring Fairness and Equity in Legal GPT Systems</Link>
          <Link to="#">
            Exploring the Role of AI in Predicting Legal Outcomes
          </Link>
          <Link to="#">Guide to Using GPT for Legal Research</Link>
          <Link to="#">Integrating GPT into Law School Curricula</Link>
        </article>
        <div className="blur-box w-[1130px] h-[508px] absolute blur-[306px] -right-[200px] -bottom-[200px] lg:-right-[500px] lg:top-0 bg-[#582D79] z-0" />
      </div>
    </DefaultLayout>
  );
};

const AccordionItem = (props: any) => {
  return <_AccordionItem {...props} className="border-b-0"></_AccordionItem>;
};

const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <_AccordionTrigger className="font-medium text-[13px] text-left text-primary-foreground py-2">
      {children}
    </_AccordionTrigger>
  );
};
const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <_AccordionContent className="ps-4 border-s-[2px] border-s-primary pb-0">
      {children}
    </_AccordionContent>
  );
};

export default Faq;
