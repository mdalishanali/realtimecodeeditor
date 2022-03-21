import React, { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created a New Room");

    console.log(id);
  };
  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("Room ID and Username is required");
      return;
    }
    navigate(`/editor/${roomId}`);
  };
  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/code-sync.png" alt="code-sync-logo" />
        <h4 className="mainLabel">Paste Invitation Room</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="Room"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="Username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onKeyUp={handleInputEnter}
          />

          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>

          <span className="createInfo">
            If you don't have invite then create &nbsp{" "}
            <a href="ww." onClick={createNewRoom} className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💛 &nbsp; by &nbsp;{" "}
          <a href="https://github.com">Md Alishan Ali</a>{" "}
        </h4>
      </footer>
    </div>
  );
};
