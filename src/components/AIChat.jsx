import { useState } from "react";

function AIChat() {

  /* =========================================
      STATES
  ========================================= */

  const [message, setMessage] =
    useState("");

  const [reply, setReply] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  

  const API_KEY =
    "AIzaSyB1ZseZuYCM4_Ix5y7hJSuT5EguiW-qqxU";

  

  const sendMessage = async () => {

    if (!message.trim()) return;

    setLoading(true);

    try {

      const response = await fetch(

        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,

        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            contents: [
              {
                parts: [
                  {
                    text: message
                  }
                ]
              }
            ]

          })

        }
      );

      const data =
        await response.json();

      console.log(
        "FULL DATA:",
        data
      );

      console.log(
        "STATUS:",
        response.status
      );

      /* =========================================
          AI RESPONSE
      ========================================= */

      if (

        data?.candidates &&
        data.candidates.length > 0

      ) {

        setReply(

          data.candidates[0]
          .content.parts[0].text

        );

      } else {

        setReply(
          "No response from AI"
        );

      }

    } catch (error) {

      console.log(error);

      setReply(
        "AI Error"
      );

    } finally {

      setLoading(false);

    }
  };

  

  return (

    <div
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "20px",
        background: "#fff",
        boxShadow:
          "0 5px 20px rgba(0,0,0,0.1)"
      }}
    >

      <h1>
        AI Bike Assistant
      </h1>

      <input
        type="text"
        placeholder="Ask something..."
        value={message}
        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }

        onKeyDown={(e) => {

          if (
            e.key === "Enter"
          ) {

            sendMessage();

          }

        }}

        style={{
          width: "100%",
          height: "55px",
          padding: "0 15px",
          borderRadius: "12px",
          border:
            "1px solid #ddd",
          marginTop: "20px",
          fontSize: "16px"
        }}
      />

      <button
        onClick={sendMessage}

        style={{
          marginTop: "20px",
          width: "100%",
          height: "55px",
          border: "none",
          borderRadius: "12px",
          background: "#2563eb",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >

        {loading
          ? "Loading..."
          : "Send"}

      </button>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "14px",
          background: "#f3f4f6",
          minHeight: "100px",
          whiteSpace: "pre-wrap"
        }}
      >

        {reply}

      </div>

    </div>
  );
}

export default AIChat;