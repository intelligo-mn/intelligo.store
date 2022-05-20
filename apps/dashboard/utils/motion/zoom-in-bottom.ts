export function zoomInBottom (duration:number = 0.2) {
  return {
    from: { 
      y: 8,
      opacity: 0,
      scale: 0.99,
      transition: {
        type: 'easeOut',
				duration: duration,
      } 
    },
    to: { 
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'easeOut',
				duration: duration,
      } 
    },
  }
}