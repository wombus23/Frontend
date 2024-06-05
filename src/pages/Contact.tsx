import { Button } from "@/components/ui/button";
import { DefaultLayout } from "@/layouts";

const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  alert("Form Submitted")!;
};

const Contact = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10 max-w-screen-lg min-h-[calc(100dvh-72px)] flex flex-col-reverse lg:flex-row lg:items-center gap-10 lg:gap-1 relative z-10">
        <div className="content space-y-3 w-full mb-auto lg:mb-0">
          <h1 className="text-[32px] font-medium opacity-80">Contact Us</h1>
          <div className="flex flex-col lg:flex-row gap-[12px]">
            <Data title="Email" value="info@qanoonbot.com" />
            <Data title="Phone" value="+1 123-456-7890" />
            <Data title="ٓAddress" value="123 Main Street, City, Country" />
          </div>
        </div>
        <form
          onSubmit={sendMessage}
          className="w-full bg-[#f8f8f8] rounded-xl p-[24px] space-y-[12px]"
        >
          <h3 className="text-secondary text-[20px] font-medium">
            Get in Touch
          </h3>
          <div className="flex gap-[6px]">
            <div className="input-group flex flex-col gap-1">
              <label
                className="text-secondary text-[9px] font-medium"
                htmlFor=""
              >
                Name
              </label>
              <Input type="text" placeholder="John" />
            </div>
            <div className="input-group flex flex-col gap-1">
              <label
                className="text-secondary text-[9px] font-medium"
                htmlFor=""
              >
                Surname
              </label>
              <Input type="text" />
            </div>
          </div>
          <div className="input-group flex flex-col gap-1">
            <label className="text-secondary text-[9px] font-medium" htmlFor="">
              Email
            </label>
            <Input type={"email"} />
          </div>
          <div className="input-group flex flex-col gap-1">
            <label className="text-secondary text-[9px] font-medium" htmlFor="">
              Address
            </label>
            <Input type={"text"} />
          </div>
          <div className="input-group flex flex-col gap-1">
            <label className="text-secondary text-[9px] font-medium" htmlFor="">
              Description
            </label>
            <TextArea />
          </div>
          <Button type="submit" className="w-full" variant={"secondary"}>
            Submit
          </Button>
        </form>
      </div>
      <div className="blur-box w-[1130px] h-[508px] absolute blur-[306px] -right-[200px] -bottom-[200px] lg:-right-[500px] lg:-bottom-[200px] bg-[#1E8BA3] z-0" />
    </DefaultLayout>
  );
};

const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      className="bg-white border-2 border-gray-100 text-black placeholder:text-gray-300 p-2 rounded-lg"
      {...props}
    />
  );
};

const TextArea = (
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => {
  return (
    <textarea
      className="bg-white border-2 border-gray-100 text-black placeholder:text-gray-300 p-2 rounded-lg min-h-[80px]"
      {...props}
    />
  );
};

const Data = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col gap-2 font-medium text-[13px]">
      <h6 className="text-primary-foreground">{title}</h6>
      <p className="opacity-50">{value}</p>
    </div>
  );
};

export default Contact;
