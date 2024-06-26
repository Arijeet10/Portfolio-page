"use client";

import { motion } from "framer-motion";

const TestimonialCard = ({ testimonialData }) => {
  return (
    <>
      <motion.div
        
        initial={{ opacity: 0, scale: 0.5, y: [100] }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={` shadow-2xl border border-black rounded-[20px] flex flex-col w-[350px] p-8 justify-between gap-4`}
      >
        <div className="">
          <img
            src={testimonialData.image.url}
            alt="company logo"
            className="object-fill w-full h-56 rounded-[20px]"
          />
        </div>
        <div>{testimonialData.review}</div>
        <div className="flex flex-col items-start font-bold">
          <span className="text-2xl">{testimonialData.name}</span>
          <span>{testimonialData.position}</span>
        </div>
      </motion.div>
    </>
  );
};

export default TestimonialCard;
