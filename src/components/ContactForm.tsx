import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const formDiv = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "toptrendev_portfolio",
        "template_itioruz",
        e.target,
        "OpDniNYfc23yJCvMb"
      )
      .then(
        () => {
          formDiv.current?.reset();
          setIsSent(true);
          alert("Thank you I will get back to you as soon as possible ! (:");

          console.log("Sending email with values:", {
            name: formDiv.current?.from_name?.value,
            last: formDiv.current?.from_last?.value,
            email: formDiv.current?.from_email?.value,
            message: formDiv.current?.message?.value,
          });
        },
        (error) => {
          console.error(error);
          setIsSent(false);
        }
      );
  };

  return (
    <div
      className="justify-center"
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
        width: "100%",
        height: "95%",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div>
        <h2
          style={{ fontFamily: "Morganite Bold, sans-serif" }}
          className="message bg-green-400 p-2 rounded-xl text-grayscale-200 text-center rounded-br-[0%] relative shadow-2xl text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          <Typewriter words={["REACH OUT ANYTIME!"]} loop={true} />
          &nbsp;
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <form
          id="contact_form"
          ref={formDiv}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          style={{ fontFamily: "Poppins, sans-serif" }}
          className="w-[80%] h-full flex flex-col gap-4 pt-4 text-green-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full flex flex-col">
              <label
                htmlFor="firstname"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                First Name
              </label>
              <input
                className="p-[0.5em] rounded-xl text-grayscale-950 bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your First Name"
                id="firstname"
                type="text"
                name="from_name"
                required
              />
            </div>
            <div className="w-full flex flex-col">
              <label
                htmlFor="lastname"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                Last Name
              </label>
              <input
                className="p-[0.5em] rounded-xl text-grayscale-950 bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your Last Name"
                id="lastname"
                type="text"
                name="from_last"
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="email"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              E-mail
            </label>
            <input
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your E-mail"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </div>
          <div className="w-full flex flex-col">
            <label
              htmlFor="message"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              Message
            </label>
            <textarea
              className="p-[0.5em] rounded-xl text-grayscale-950 bg-green-200 min-h-[150px] sm:min-h-[120px] md:min-h-[150px] resize-none w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your message..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <input
              className="w-[100px] h-[50px] bg-green-400 rounded-xl cursor-pointer hover:bg-green-700 mb-5"
              type="submit"
              value={!isSent ? "Send" : "Done!"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
