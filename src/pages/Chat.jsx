import { useEffect, useState } from "react";

import { io } from "socket.io-client";

const socket = io(
  "http://localhost:5000"
);

function Chat() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  // RECEIVE MESSAGE
  useEffect(() => {

    socket.on(
      "receive_message",

      (data) => {

        setMessages((prev) => [

          ...prev,

          data,
        ]);
      }
    );

    return () => {

      socket.off(
        "receive_message"
      );
    };
  }, []);

  // SEND MESSAGE
  const sendMessage = async () => {

    if (!message.trim()) return;

    const messageData = {

      user: user.name,

      text: message,
    };

    socket.emit(
      "send_message",

      messageData
    );

    setMessage("");
  };

  return (

    <section className="min-h-screen bg-[#020617] text-white p-8">

      {/* HEADER */}
      <div className="mb-8">

        <h1 className="text-4xl font-black mb-2">

          Live Project Chat 💬

        </h1>

        <p className="text-gray-400">

          Communicate with admin and developers in real-time.

        </p>

      </div>

      {/* CHAT BOX */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 h-[500px] overflow-y-auto mb-6">

        {messages.length === 0 && (

          <div className="text-center text-gray-500 mt-40">

            No Messages Yet

          </div>
        )}

        <div className="space-y-4">

          {messages.map(

            (msg, index) => (

              <div

                key={index}

                className={`max-w-[70%] p-4 rounded-2xl ${
                  msg.user ===
                  user.name

                    ? "bg-indigo-600 ml-auto"

                    : "bg-[#0f172a]"
                }`}
              >

                <p className="font-bold mb-1 text-sm">

                  {msg.user}

                </p>

                <p>

                  {msg.text}

                </p>

              </div>
            )
          )}

        </div>

      </div>

      {/* INPUT */}
      <div className="flex gap-4">

        <input
          type="text"

          placeholder="Type message..."

          value={message}

          onChange={(e) =>

            setMessage(
              e.target.value
            )
          }

          className="flex-1 bg-[#0f172a] border border-white/10 p-4 rounded-2xl focus:outline-none focus:border-indigo-500"
        />

        <button

          onClick={sendMessage}

          className="bg-indigo-600 hover:bg-indigo-700 px-8 rounded-2xl font-semibold transition-all"
        >

          Send

        </button>

      </div>

    </section>
  );
}

export default Chat;