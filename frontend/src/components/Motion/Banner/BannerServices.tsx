import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedLettersProps {
  title: string;
  disabled?: boolean;
}

const banner: Variants = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni: Variants = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const BannerServices: React.FC = () => {
  const [playMarquee, setPlayMarquee] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowCenter title={"Services"} playMarquee={playMarquee} />
    </motion.div>
  );
};



  
const AnimatedLetters: React.FC<AnimatedLettersProps> = ({
  title,
  disabled,
}) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter) => (
      <motion.span
        className='row-letter2'
        style={ { } }
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);



const BannerRowCenter: React.FC<{ title: string; playMarquee: boolean }> = ({
  title,
  playMarquee,
}) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'>
        <AnimatedLetters title={title} disabled  />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

export default BannerServices;