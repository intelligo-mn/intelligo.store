// See: https://medium.com/@karllsonVomDach/jest-typescript-and-svgs-44b4333a1164
declare module '*.svg' {
  const content: any
  export const ReactComponent: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}
