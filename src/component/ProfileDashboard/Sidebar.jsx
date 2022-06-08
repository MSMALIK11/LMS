import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink ,Link} from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";


import { AiOutlineMenuUnfold } from "react-icons/ai";

const Sidebar = ({ routes }) => {
  const [isOpen, setIsOpen] = React.useState(false);
 
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: "0.5",
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: "0.2",
      },
    },
  };

  return (
    <div className=" mt-4 d-flex ">
      <motion.div
        animate={{
          width: isOpen ? "250px" : "50px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 8,
          },
        }}
        className="sidebar-container padding-top-sm "
      >
        <AiOutlineMenuUnfold
          className="toggle-menu mt-3"
          onClick={() => setIsOpen(!isOpen)}
        />
        <section className="route p-1 mt-5  ">
          {routes &&
            routes.map((route, i) => (
              <NavLink
                // className={({ isActive }) => (isActive ? "active" : "")}
                to={route.path}
                key={route.path}
                className={`nav-link-wraper gap-3 ${({ isActive }) =>
                  isActive ? "active" : ""}`}
              >
                <div className="icon  ">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      variant={showAnimation}
                      className={`route-text`}
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            ))}
        </section>
      </motion.div>

      <main style={{ width: "100%" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar