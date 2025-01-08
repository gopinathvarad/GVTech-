"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Full-stack web development (MERN stack expertise) Frontend development using React, Vue.js, or Angular Backend development using Node.js, Express.js",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform app development (React Native, Flutter) Native app development (Android/iOS)",
    href: "",
  },
  {
    num: "03",
    title: "Data Engineering & Visualization",
    description:
      "ETL pipeline development, Data visualization dashboards (Tableau, Power BI, D3.js), Database design and optimization (SQL, NoSQL)",
    href: "",
  },
  {
    num: "04",
    title: "Custom Software Development",
    description:
      "Business automation tools, Custom SaaS platform development, Inventory management or CRM systems, Tailored solutions for startups or enterprises",
    href: "",
  },
  {
    num: "05",
    title: "UI/UX Design",
    description:
      "Wireframing and prototyping (Figma, Adobe XD), Website and app redesign services, Accessibility and responsiveness testing, Custom graphic design elements",
    href: "",
  },
  {
    num: "06",
    title: "Other Niche Services",
    description:
      "Predictive analytics and data modeling, Game development (Unity, Unreal Engine), AR/VR application development, API integration for third-party platforms (e.g., Stripe, Twilio)",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
