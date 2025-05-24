import { useState } from "react";

export default function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "Idiot." },
    ]);
    setInput("");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded">
      <div className="space-y-2 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? "text-right" : "text-left"}>
            <span className={msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"} style={{ padding: '6px', borderRadius: '6px', display: 'inline-block' }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">Send</button>
      </form>
    </div>
  );
}
