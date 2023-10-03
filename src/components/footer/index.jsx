import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";
import bgImage from "../../bg3.jpg"


export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div
        className="bg-primary-300"
        style={{
        backgroundImage: `url(${bgImage})`, // Set the background image
        }}
      >
      {/* Contact */}
      <div className="border-b border-white/15 relative overflow-hidden">
        <div className="container mx-auto max-w-[1344px]">
          <motion.section 
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="px-5 py-10 flex flex-col items-center text-center sm:px-10"
          >
            <SubHead
              color="text-white"
              style="mb-[18px] sm:w-9/12 md:w-9/12 lg:w-6/12"
            >
              We're here to help.
            </SubHead>
            <Paragraph
              color="text-white/70"
              fontSize="text-sm"
              style="mb-[30px] sm:w-7/12 lg:w-5/12"
            >
              Our support crew are here to make you feel like your most confident self 24/7.
            </Paragraph>
            <MainButton style="w-full sm:w-9/12 sm:w-fit lg:w-fit hover:bg-primary-100 hover:border-white hover:text-white transition-all duration-200 ease-in">
              CONTACT US
            </MainButton>
          </motion.section>
        </div>

        
      </div>
      {/* Footer */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-10">
          <div className="lg:col-span-1">
            <img
              className="w-[320px] h-auto mb-10 lg:mb-0"
              src="logowhite.png"
              alt="logo-footer"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Features</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Company</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Resources</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Get Help</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
              </div>
            </div>
          </div>
          <div className="text-center lg:col-span-3 md:flex justify-between items-center">
            <div className="flex items-center justify-center gap-4 mb-4 order-2">
              <a  target="_blank">
                <img
                  className="footer-icon"
                  src="/instagram.svg"
                  alt="instagram"
                />
              </a>
              <a target="_blank">
                <img className="footer-icon" src="/github.svg" alt="github" />
              </a>
              <a  target="_blank">
                <img
                  className="footer-icon"
                  src="/telegram.svg"
                  alt="telegram"
                />
              </a>
              <a  target="_blank">
                <img
                  className="footer-icon"
                  src="/linkedin.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <p className="font-body text-white font-medium order-1">
              Second Sense by{" "}
              <a
                className="italic underline"
                target="_blank"
              >
                Maryann Xu
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
