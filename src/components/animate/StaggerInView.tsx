'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { staggerContainer } from '@/lib/animations/variants';

type Props = HTMLMotionProps<'div'> & {
  children: React.ReactNode;
  variants?: Variants;
  once?: boolean;
  margin?: string;
};

export default function StaggerInView({
  children,
  variants = staggerContainer,
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
