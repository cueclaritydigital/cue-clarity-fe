'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { fadeUp } from '@/lib/animations/variants';

type Props = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
  variants?: Variants;
  once?: boolean;
  margin?: string;
};

export default function FadeInView({
  children,
  variants = fadeUp,
  once = true,
  margin = '-80px',
  ...props
}: Props) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
