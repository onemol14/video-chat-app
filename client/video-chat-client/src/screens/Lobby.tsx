import { useCallback, useState } from "react";
import { useSocket } from "../context/SocketProvider";


const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const socket = useSocket();
  
  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log(email, room);
  }, []);


  return (
    <div>
      <h1> Lobby </h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <label htmlFor="room">Room Number</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <br/>   

        <button type="submit"> submit </button>
      </form>
    </div>
  );
};

export default LobbyScreen;
