import { useEffect, useRef, useState } from "react";
import useWebSocket from "react-use-websocket";
import throttle from "lodash.throttle";

import { Cursor } from "../components/Cursor";

const renderCursorts = (users, id) => {
  return Object.keys(users).map((uuid) => {
    const user = users[uuid];

    if (uuid !== id) {
      return (
        <div key={uuid}>
          <Cursor point={[user.state.x, user.state.y]} name={user.username} />
        </div>
      );
    }
  });
};

const renderUsersList = (users) => {
  return (
    <div className="p-4">
      <ul className="list-none text-white p-5 w-max bg-card rounded-lg border border-[#383838]">
        {Object.keys(users).map((uuid) => {
          return (
            <li key={uuid}>
              <div className="flex flex-row items-center">
                <p className="text-white font-bold">
                  {users[uuid].username.toString()}:
                </p>
                <p className="ml-2 text-primary mt-[2px]">
                  {users[uuid].state.x.toString()},{" "}
                  {users[uuid].state.y.toString()}{" "}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Home = ({ username, id }) => {
  const WS_URL = "wss://live-cursor-server-production.up.railway.app";

  const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
    queryParams: { username, id },
  });

  const THROTTLE = 50;
  const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, THROTTLE));

  useEffect(() => {
    sendJsonMessage({
      x: 0,
      y: 0,
    });

    window.addEventListener("mousemove", (e) => {
      // TODO: Send to server
      sendJsonMessageThrottled.current({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  if (lastJsonMessage) {
    return (
      <>
        {renderCursorts(lastJsonMessage, id)}
        {renderUsersList(lastJsonMessage)}
      </>
    );
  }
};

export default Home;
