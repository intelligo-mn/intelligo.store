export function fadeInTop (duration:number = 0.5) {
  return {
    from: { 
      position: 'relative',
      top: "50px",
      opacity: 0,
      transition: {
        type: 'easeInOut',
				duration: duration,
      } 
    },
    to: { 
      position: 'relative',
      top: "0",
      opacity: 1,
      transition: {
        type: 'easeInOut',
				duration: duration,
      } 
    },
  }
}