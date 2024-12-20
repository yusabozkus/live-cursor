import { useState } from "react";
import { toast } from 'react-hot-toast'
import { Audio, InfinitySpin } from "react-loader-spinner";
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
              if (username.length < 3) {
                toast.error('Username can be a minimum of 3 characters!')
              } else {
                if (username.length > 20) {
                  toast.error('Username can be a maximum of 20 characters!')
                } else {
                  onSubmit(username, uuidv4().toString());
                }
              }
            }}
            className="mt-10"
          >
            <input
              required
              type="text"
              value={username}
              min={3}
              max={20}
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
