// src/types/react-animated-slider.d.ts
declare module 'react-animated-slider' {
  import { Component, ReactNode } from 'react';

  export interface SliderProps {
    autoplay?: boolean | { delay: number };
    className?: string;
    slideIndex?: number
    previousButton?: ReactNode
    nextButton?: ReactNode
    bullets?: boolean
    infinite?: boolean
    autoplay?: number
    duration?: number
    touchDisabled?: boolean
    minSwipeOffset?: number
    onSlideChange?: (args: { slideIndex: number }) => void
    classNames?: {
      slider?: string
      previousButton?: string
      nextButton?: string
      buttonDisabled?: string
      track?: string
      slide?: string
      hidden?: string
      previous?: string
      current?: string
      next?: string
      animateIn?: string
      animateOut?: string
      bullets?: string
      bullet?: string
      bulletActive?: string
    }
  }

  export class Slider extends Component<SliderProps> {}
  export class Slide extends Component<any> {}
}