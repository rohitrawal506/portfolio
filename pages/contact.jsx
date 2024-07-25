import { motion } from "framer-motion";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import PagesMetaHead from "../components/PagesMetaHead";
import Image from "next/image";
import contactMe from "../public/contact.svg";
function contact() {
  return (
    <div>
      <PagesMetaHead title="Contact" />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col sm:justify-center items-center sm:flex-row mt-5 md:mt-2"
      >
        <div className="w-full md:w-2/5 text-left">
          <ContactDetails />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="sm:w-2/5 text-right float-right sm:mt-0"
        >
          <Image
            width={200}
            height={200}
            layout="responsive"
            src={contactMe}
            alt="Developer"
          />
        </motion.div>
      </motion.section>
    </div>
  );
}

export default contact;
