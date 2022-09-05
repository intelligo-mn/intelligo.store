export function fadeInOut (duration:number = 0.2) {
  return {
    from: { 
      opacity: 0,
      transition: {
        type: 'easeInOut',
				duration: duration,
      } 
    },
    to: { 
      opacity: 1,
      transition: {
        type: 'easeInOut',
				duration: duration,
      } 
    },
  }
}