export function zoomOutIn (duration:number = 0.2) {
  return {
    from: { 
      scale: 1.1,
      transition: {
        type: 'easeOut',
				duration: duration,
      } 
    },
    to: { 
      scale: 1,
      transition: {
        type: 'easeOut',
				duration: duration,
      } 
    },
  }
}