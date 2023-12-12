import React, { FC, useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../../../sass/main.scss";

// Components
import Banner from "../Banner/Banner";
import Loader from "../Loader";

const App2: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Banner />
            {!loading && (
              <div className='transition-image final'>
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  layoutId='main-image-1'
                />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App2;