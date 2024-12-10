import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Login = ({ onSubmit }) => {
  const [username, setusername] = useState("");

  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold text-white">Welcome</h1>
          <p className="text-xl font-normal text-gray-500 mt-1">
            What should people call you?
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(username, uuidv4().toString());
            }}
            className="mt-10"
          >
            <input
              type="text"
              value={username}
              placeholder="Username"
              className="px-5 py-4 w-full  rounded-lg outline-none bg-card border border-[#383838] text-white text-[1.2rem]"
              onChange={(e) => setusername(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary px-6 py-3 rounded-lg mt-10 text-white font-bold hover:scale-105 transition-all ease-linear active:scale-100"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
