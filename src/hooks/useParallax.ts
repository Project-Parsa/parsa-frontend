import { MotionValue, useTransform } from "framer-motion";

const useParallax = (
  val: MotionValue<number>,
  d: number
): MotionValue<number> => {
  return useTransform(val, [0, 1], [-d, d]);
};

export default useParallax;
