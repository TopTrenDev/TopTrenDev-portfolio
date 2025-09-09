import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { m, LazyMotion, domAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTheme } from "../contexts/ThemeContext";

const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formDiv = useRef<HTMLFormElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

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
          setIsLoading(false);
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
          setIsLoading(false);
        }
      );
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={`p-8 rounded-3xl backdrop-blur-xl border shadow-2xl ${
          isDark 
            ? 'bg-gray-800/50 border-gray-700' 
            : 'bg-white/70 border-gray-200'
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <m.h2
            className={`text-4xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Typewriter 
              words={["Let's Connect!", "Send a Message", "Get In Touch"]} 
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
            />
          </m.h2>
          <m.p
            className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Fill out the form below and I'll get back to you as soon as possible!
          </m.p>
        </div>

        {/* Form */}
        <form
          id="contact_form"
          ref={formDiv}
          method="POST"
          target="_blank"
          onSubmit={sendEmail}
          className="space-y-6"
        >
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <m.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label
                htmlFor="firstname"
                className={`block text-sm font-semibold ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                First Name *
              </label>
              <input
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/20 ${
                  isDark
                    ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400'
                    : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-400'
                }`}
                placeholder="Enter your first name"
                id="firstname"
                type="text"
                name="from_name"
                required
              />
            </m.div>
            
            <m.div
              className="space-y-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label
                htmlFor="lastname"
                className={`block text-sm font-semibold ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                Last Name *
              </label>
              <input
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/20 ${
                  isDark
                    ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400'
                    : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-400'
                }`}
                placeholder="Enter your last name"
                id="lastname"
                type="text"
                name="from_last"
                required
              />
            </m.div>
          </div>

          {/* Email Field */}
          <m.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <label
              htmlFor="email"
              className={`block text-sm font-semibold ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Email Address *
            </label>
            <input
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/20 ${
                isDark
                  ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400'
                  : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-400'
              }`}
              placeholder="Enter your email address"
              id="email"
              type="email"
              name="from_email"
              required
            />
          </m.div>

          {/* Message Field */}
          <m.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <label
              htmlFor="message"
              className={`block text-sm font-semibold ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}
            >
              Message *
            </label>
            <textarea
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/20 resize-none min-h-[120px] ${
                isDark
                  ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-green-400'
                  : 'bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-400'
              }`}
              placeholder="Tell me about your project or just say hello..."
              name="message"
              required
            />
          </m.div>

          {/* Submit Button */}
          <m.div
            className="flex justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <m.button
              type="submit"
              disabled={isLoading}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
                isLoading || isSent
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25'
              } text-white`}
              whileHover={!isLoading && !isSent ? { scale: 1.05 } : {}}
              whileTap={!isLoading && !isSent ? { scale: 0.95 } : {}}
            >
              {isLoading ? (
                <>
                  <m.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  />
                  Sending...
                </>
              ) : isSent ? (
                <>
                  <span>✓</span>
                  Message Sent!
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <m.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </m.span>
                </>
              )}
            </m.button>
          </m.div>
        </form>
      </m.div>
    </LazyMotion>
  );
};

export default ContactForm;
