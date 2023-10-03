import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "One time payment",
      logo: "/feature-1.svg",
      content:
        "Get 3 months free on us. If you love Second Sense, pay a one time payment to never worry about styling yourself again.",
    },
    {
      id: 2,
      title: "Self-reported data",
      logo: "/feature-2.svg",
      content:
        "Your privacy is our top priority. With Second Sense, you own your all data.",
    },
    {
      id: 3,
      title: "New and Upcoming Updates",
      logo: "/feature-3.svg",
      content:
        "Second Sense is always working on new features and improvements. Stay tuned for exciting updates.",
    },
    {
      id: 4,
      title: "Mobile App",
      logo: "/feature-4.svg",
      content:
        "With our mobile app, you can browse any store, check your order status, and do much more on the spot.",
    },
    {
      id: 5,
      title: "100% Customizable",
      logo: "/feature-5.svg",
      content:
        "You can customize your ever-evolving personal style preferences and everything else in the way you want as the client.",
    },
    {
      id: 6,
      title: "Shop Worry-Free",
      logo: "/feature-6.svg",
      content:
        "Being both convienient and easy to use, we are here to be your unwavering second sense.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <Subtitle style="mb-2">100% CUSTOMIZABLE</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Have full control over your personal style
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-300"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Start your free trial today.
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}