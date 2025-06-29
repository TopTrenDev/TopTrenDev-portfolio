import MarqueeCards from "../components/MarqueeCards";
import SectionTitle from "../components/SectionTitle";
import SkillsCards from "../components/SkillsCards";

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
        </div>
        <div className="xl:border-l-2 xl:border-r-2 xl:border-green-400 h-full">
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-green-400"></div>
            <MarqueeCards direction="left">
              <SkillsCards />
            </MarqueeCards>
          </div>
          <div className="relative">
            <div className="absolute top-[45px] w-full h-[1px] bg-green-400"></div>
            <MarqueeCards direction="right">
              <SkillsCards />
            </MarqueeCards>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

