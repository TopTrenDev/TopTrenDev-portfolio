import { m, LazyMotion, domAnimation } from "framer-motion";
import ContactForm from "../components/ContactForm";
import SocialLinks from "../components/SocialLinks";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="CONTACT" subtitle="Get in touch" />
        </div>
        <div className="w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4"
            >
              <div className="flex justify-center"></div>
              <ContactForm />
            </m.div>
          </LazyMotion>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <SocialLinks />
        <div className="bg-grayscale-950 flex justify-center pb-4 text-green-200">
          <span>
            TopTrenDev's Portfolio (<em>Marek Dvojak</em>) © Copyright{" "}
            {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

