export function heightCollapse() {
  return {
    from: {
      opacity: 0,
      height: 0,
      transition: {
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    to: {
      opacity: 1,
      height: "auto",
      transition: {
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };
}
