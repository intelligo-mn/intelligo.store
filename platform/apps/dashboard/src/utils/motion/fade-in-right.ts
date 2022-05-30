export function fadeInRight (duration:number = 0.3) {
  return {
    from: { 
      right: '-100%',
      transition: {
        type: 'easeInOut',
				duration: duration,
      } 
    },
    to: { 
      right: 0,
      transition: {
        type: 'easeInOut',
				duration: duration,
      } 
    },
  }
}