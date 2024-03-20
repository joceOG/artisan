import React, { FC, useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../../../sass/main.scss";

// Components
import Banner from "../Banner/BannerServices";
import Loader from "../Loader";

const AppServices: FC = () => {
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
              <div>
               <br></br>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default AppServices;