"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ExperienceCard = ({ experienceData }) => {
  const startDate = experienceData.startDate.split("-");
  const startYear = startDate[0];
  const endDate = experienceData.endDate.split("-");
  const endYear = endDate[0];
  const jobLocation = experienceData.jobLocation.split(",");
  const jobCity = jobLocation[0];

  const [hideData, setHideData] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setHideData(!hideData);
  };

  useEffect(() => {
    if (experienceData._id !== "65f1fe4e0556c3f887e9db22") {
      setHideData(true);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        <motion.div
          animate={{ x: [-100, 0] }}
          transition={{
            duration: "1",
          }}
          className="font-bold text-2xl"
        >
          {experienceData.company_name}
        </motion.div>

        {!hideData && (
          <motion.div
            animate={
              hideData
                ? { y: [50, 0], transitionEnd: { display: "block" } }
                : { y: [-50, 0], transitionEnd: { display: "none" } }
            }
            transition={{
              duration: "1",
            }}
            className=""
          >
            <div
              className={`flex flex-col justify-center items-start font-bold`}
            >
              <div>{experienceData.jobTitle}</div>
              <div>
                {startYear}-{endYear}, {jobCity.toUpperCase()}
              </div>
            </div>
            <div className={``}>{experienceData.summary}</div>

            <div className={`m-4 `}>
              <ul className="list-disc">
                {experienceData.bulletPoints.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          </motion.div>
        )}

        {/* <div
          className={`${
            hideData && "hidden"
          } flex flex-col justify-center items-start font-bold`}
        >
          <div>{experienceData.jobTitle}</div>
          <div>
            {startYear}-{endYear}, {jobCity.toUpperCase()}
          </div>
        </div>
        <div className={`${hideData && "hidden"}`}>
          {experienceData.summary}
        </div>

        <div className={`m-4 ${hideData && "hidden"}`}>
          <ul className="list-disc">
            {experienceData.bulletPoints.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div> */}
        <motion.div
          animate={hideData ? { y: [30, 0] } : { y: [-50, 0] }}
          transition={{
            duration: "1",
          }}
          className="flex items-center justify-center"
        >
          <div className="border-t-2 border-black w-full" />
          <button
            onClick={handleClick}
            className=" border border-black rounded-full w-20 h-20 text-3xl"
          >
            {hideData ? "+" : "-"}
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default ExperienceCard;
