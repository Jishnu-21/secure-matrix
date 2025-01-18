// src/types/react-animated-slider.d.ts
declare module 'react-animated-slider' {
    import { Component } from 'react';
  
    export interface SliderProps {
      autoplay?: boolean | { delay: number };
      className?: string;
      // Add other props as needed
    }
  
    export class Slider extends Component<SliderProps> {}
    export class Slide extends Component<any> {}
  }