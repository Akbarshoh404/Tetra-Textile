import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Section3.scss";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState } from "react";

const Section3 = () => {
  const { t, i18n } = useTranslation();
  const notify = (obj) => toast(obj);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ow19j4b",
        "template_6onqwwc",
        form.current,
        "4F8zSdh1LNvOeNdPe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const sendTG = (e) => {
    const botToken = "6003417354:AAEoN52U25V3LUvhR5J-7dRN2XJaRN4yipM";
    const chatId = "-1001914746741";
    const message = `
    📩 Xabar:
  ___________________________

 👨 Ism Familiya: ${name}
 📞 Telefon raqam: ${number}
 ✍️ Matn: ${text}
    `;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Message sent successfully!");
        } else {
          response.json().then((error) => {
            console.log(`Failed to send message: ${error.description}`);
          });
        }
      })
      .catch((error) => console.error("Error sending message:", error));
  };

  return (
    <>
      <div id="Home_secC3">
        <div className="containerContact">
          <div className="contactBlocks">
            <p className="boldTextContact">{t("sotuvTxt")}</p>
            <p className="textContact">{t("telefonTxt")}</p>
            <p className="aboutTxt">{t("number1")}</p>
            <p className="aboutTxt">{t("number2")}</p>
          </div>
          <div className="contactBlocks">
            <p className="boldTextContact">{t("manzilTxt")}</p>
            <p className="aboutTxt2">{t("adressTxt")}</p>
          </div>
        </div>

        <div className="containerContact3">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <p className="sendMessageTxt">{t("sendMsgTxt")}</p>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder={t("Name")}
              className="inputs first"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="tel"
              id="number"
              name="user_number"
              placeholder={t("Number")}
              className="inputs"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <textarea
              id="message"
              name="message"
              placeholder={t("Message")}
              className="textArea"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <button
              type="submit"
              value="Send"
              onClick={() => {
                if (name.length != 0) {
                  if (number.length != 0) {
                    if (text.length != 0) {
                      notify(t("success"));
                      // postTest();
                      sendTG();
                    } else {
                      notify(t("plsFill"));
                    }
                  } else {
                    notify(t("plsFill"));
                  }
                } else {
                  notify(t("plsFill"));
                }
              }}
            >
              {t("Submit")}
            </button>

            <Toaster />
          </form>
        </div>
      </div>
    </>
  );
};

export default Section3;
