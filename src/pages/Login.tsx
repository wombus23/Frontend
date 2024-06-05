import { DefaultLayout } from "@/layouts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader } from "@/components/ui/loader";
import { Link, useNavigate } from "react-router-dom";
import login from "@/assets/images/Login/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [shake, setShake] = useState(false); // State for shaking animation

  const _onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setLoading(true);
      setShake(false); // Reset shake state
  
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");
  
      const response = await fetch("https://qanoonbots-652bb77e7052.herokuapp.com/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setMessage("Login successful");
        return navigate("/dashboard/chat"); // Redirect to chats page
      }
  
      setMessage(data.error || "Login failed");
      setShake(true); // Trigger shaking animation on error
    } catch (error: any) {
      console.error(error);
      setMessage("Internal server error");
    } finally {
      setLoading(false);
    }
  };  

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10 max-w-screen-lg min-h-[calc(100dvh-72px)] flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-1 relative z-10">
        <img src={login} alt="Login" className="max-w-[280px] lg:max-w-[487px]" />
        <div className="w-full max-w-[320px]">
          <form
            onSubmit={_onSubmit}
            className={`flex flex-col gap-4 bg-[#141846] p-[24px] rounded-lg`}
            method="POST"
          >
            <h1 className="text-[20px]">Login into Account</h1>
            {message && (
              <p className="text-red-500">{message}</p>
            )}
            <Input
              disabled={loading}
              type="text"
              name="email"
              placeholder="Email..."
              className={`bg-[#24306A] border-border ${shake ? "shake border-red-500" : ""}`}
            />
            <Input
              disabled={loading}
              type="password"
              name="password"
              placeholder="Password..."
              className={`bg-[#24306A] border-border ${shake ? 'shake border-red-500' : ''}`}
            />
            <Button variant={"default"} type="submit" className="uppercase">
              {loading ? <Loader className="w-[18px] h-[18px]" /> : "Login"}
            </Button>
            <p className="text-center text-[13px] uppercase">
              Don't have an account?{" "}
              <Link
                className="text-primary-foreground py-1 px-2 font-bold rounded-full hover:bg-blue-800/10"
                to="/signup"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="blur-box w-[1130px] h-[508px] absolute blur-[306px] -right-[200px] -bottom-[200px] lg:-left-[500px] lg:bottom-0 bg-[#428DFC] lg:bg-[#7A8886] z-0" />
    </DefaultLayout>
  );
};

export default Login;
