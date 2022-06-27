import React from 'react';

import { motion } from 'framer-motion';

const HoverHelper = ({ children, clicked, small, ...otherProps }) => {
  return (
    <motion.div
      {...otherProps}
      whileHover={small ? { scale: 1.02 } : { scale: 1.1 }}
      whileTap={clicked ? { scale: 0.8 } : null}
    >
      {children}
    </motion.div>
  );
};

export default HoverHelper;
