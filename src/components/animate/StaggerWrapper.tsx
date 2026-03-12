'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { staggerContainer } from '@/lib/animations/variants';

type Props = HTMLMotionProps<'div'> & { children: React.ReactNode };

export default function StaggerWrapper({ children, ...props }: Props) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      {...props}
    >
      {children}
    </motion.div>
  );
}
