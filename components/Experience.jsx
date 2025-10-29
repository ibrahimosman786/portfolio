import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

function ExperienceCard({ experience, theme }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          theme !== "dark"
            ? "linear-gradient(90deg, rgba(224,234,240,1) 0%, rgba(232,239,243,1) 50%, rgba(224,234,240,1) 100%)"
            : "linear-gradient(90deg, rgba(33,33,52,1) 0%, rgba(39,39,61,1) 50%, rgba(33,33,52,1) 100%)",
        color: theme !== "dark" ? "#7e8c9f" : "#e5e6e9",
        boxShadow: "0 1px 2px 0 rgb(128, 77, 238)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${theme !== "dark" ? "#e0eaf0" : "#2b2b42"}`,
      }}
      style={{
        boxShadow: "0 1px 2px 0 rgb(128, 77, 238 / 0.05)",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, backgroundColor: experience.company_name === "STARR - Alberta Rocketry Research" ? "#e0eaf0" : experience.company_name === "NeoHemo" || experience.company_name === "Freelancing Collective - Self Employed" || experience.company_name === "Rotary International" ? "#ffffff" : "#000000" }}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full">
          <div className={`${experience.company_name === "HOMI (Fintech + AI Real Estate)" || experience.company_name === "STARR - Alberta Rocketry Research" || experience.company_name === "NeoHemo" || experience.company_name === "Freelancing Collective - Self Employed" || experience.company_name === "Self-employed" || experience.company_name === "Rotary International" ? "w-[80%] h-[80%]" : "w-[60%] h-[60%]"} relative overflow-hidden`}>
            <Image
              src={experience.icon}
              alt={experience.company_name}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              style={experience.company_name === "NeoHemo" ? { transform: 'scale(1.495)' } : experience.company_name === "HOMI (Fintech + AI Real Estate)" || experience.company_name === "STARR - Alberta Rocketry Research" || experience.company_name === "Freelancing Collective - Self Employed" || experience.company_name === "Self-employed" || experience.company_name === "Rotary International" ? { transform: 'scale(1.5)' } : {}}
              className="object-contain"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

function Experience() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.section className="w-full p-8 mt-20">
      <motion.div variants={textVariant()}>
        <p className={`sectionSubText text-center`}>What I have done so far</p>
        <h2 className={`sectionHeadText text-center`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={theme === "dark" ? "#7e8c9f" : "#8c9db1"}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              theme={theme}
            />
          ))}
        </VerticalTimeline>
      </div>
    </motion.section>
  );
}

export default SectionWrapper(Experience, "work");
