import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ImageSlider from "../components/elements/ImageSlider";
import { memoji } from "../constants";
import { introduction } from "../constants";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-100">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-5"
              >
                <span
                  className="text-[#22c55e]"
                  style={{ fontSize: "1.2em", fontWeight: "900" }}
                >
                  {introduction.text[0]}
                </span>
                <span
                  className="text-[#4CAF50]"
                  style={{ fontSize: "0.95em", fontWeight: "500" }}
                >
                  {introduction.text[1]}
                </span>
                <span
                  className="text-[#4CAF50]"
                  style={{ fontSize: "0.95em", fontWeight: "500" }}
                >
                  {introduction.text[2]}
                </span>
                <span
                  className="text-[#4CAF50]"
                  style={{ fontSize: "0.95em", fontWeight: "500" }}
                >
                  {introduction.text[3]}
                </span>
                <a href="https://cvdesignr.com/p/6844a48db51d7" target="_blank">
                  <span
                    className="text-[#629C34]"
                    style={{ fontSize: "0.95em", fontWeight: "700" }}
                  >
                    {introduction.text[4].split("here")[0]}
                    <span style={{ textDecoration: "underline" }}>here</span>
                    {introduction.text[4].split("here")[1]}
                  </span>
                </a>
              </m.p>
            </LazyMotion>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center">
            <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
              <ImageSlider images={memoji.image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

