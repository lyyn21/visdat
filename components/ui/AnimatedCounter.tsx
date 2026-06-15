"use client"

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  end: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  separator?: string
}

export default function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2.5,
  separator = ".",
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          separator={separator}
          decimal=","
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
        />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </span>
  )
}
