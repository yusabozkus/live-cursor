import Login from "./pages/Login";
import Home from "./pages/Home";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [username, setUsername] = useState("");
  const [uuid, setUuid] = useState("");

  return (
    <main className="w-full h-[100vh] bg-body">
      <Toaster
        toastOptions={{
          className: '',
          style: {
            backgroundColor: "#242424",
            border: '1px solid #fafafa',
            padding: '16px',
            color: '#fff',
          },
        }}
        position="top-center"
      />
      {username && uuid ? (
        <Home username={username} id={uuid} />
      ) : (
        <Login
          onSubmit={(username, id) => {
            setUsername(username);
            setUuid(id);
          }}
        />
      )}

      <div className="fixed bottom-5 left-0 right-0 w-max m-auto">
        <h1 className="text-white
         text-[.9rem]">made by <strong className="text-primary">fuez</strong></h1>
      </div>
    </main>
  );
}

export default App;
