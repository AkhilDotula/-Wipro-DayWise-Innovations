import React, {useState, useEffect} from "react";
import * as signalR from "@microsoft/signalr";

const Chat = () => {
    const [connection, setConnection] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
  
    useEffect(() => {
      // Create connection
      const newConnection = new signalR.HubConnectionBuilder()
        .withUrl("http://localhost:5090/chatHub")
        .withAutomaticReconnect()
        .build();
  
      setConnection(newConnection);
    }, []);
   useEffect(() => {
      if (connection) {
        connection
          .start()
          .then(() => {
            console.log("Connected!");
            connection.on("ReceiveMessage", (user, message) => {
              setMessages((prev) => [...prev, { user, message }]);
            });
          })
          .catch((err) => console.error("Connection failed:", err));
      }
    }, [connection]);
  
    const sendMessage = async () => {
      if (connection && message) {
        await connection.invoke("SendMessage", username || "Anonymous", message);
        setMessage("");
      }
    };
  
    return (
      <div>
        <h2>Real-Time Chat</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
         />
          <button onClick={sendMessage}>Send</button>
        </div>
        <div>
          {messages.map((msg, index) => (
            <p key={index}>
              <strong>{msg.user}:</strong> {msg.message}
            </p>
          ))}
        </div>
      </div>
    );
  };
  
  export default Chat;