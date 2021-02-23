import { createGlobalStyle } from 'styled-components'

const CustomProperties = createGlobalStyle`
  :root {
    /* Font Families */
    --bodyFont: 
      system-ui,
      /* macOS 10.11-10.12 */ -apple-system,
      /* Windows 6+ */ Segoe UI,
      /* Android 4+ */ Roboto,
      /* Ubuntu 10.10+ */ Ubuntu,
      /* Gnome 3+ */ Cantarell,
      /* KDE Plasma 5+ */ "Noto Sans",
      /* fallback */ sans-serif,
      /* macOS emoji */ "Apple Color Emoji",
      /* Windows emoji */ "Segoe UI Emoji",
      /* Windows emoji */ "Segoe UI Symbol",
      /* Linux emoji */ "Noto Color Emoji";;
    --headingFont: inherit;
    --codeFont: 
      /* macOS 10.10+ */ Menlo,
      /* Windows 6+ */ Consolas,
      /* Android 4+ */ "Roboto Mono",
      /* Ubuntu 10.10+ */ "Ubuntu Monospace",
      /* KDE Plasma 5+ */ "Noto Mono",
      /* KDE Plasma 4+ */ "Oxygen Mono",
      /* Linux/OpenOffice fallback */ "Liberation Mono",
      /* fallback */ monospace;

    /* Type scale (apply to local variables rather than using directly) */
    --f1: .75rem;
    --f2: .875rem;
    --f3: 1rem;
    --f4: 1.125rem;
    --f5: 1.25rem;
    --f6: 1.5rem;
    --f7: 1.875rem;
    --f8: 2.25rem;
    --f9: 3rem;
    --f10: 3.75rem;
    --f11: 4.5rem;

    /* Font Weights */
    --fw1: 400;
    --fw2: 700;

    /* Line Heights */
    --lh1: 1.25;
    --lh2: 1.5;
    --lh3: 1.7;

    /* Letter Spacings */
    --ls1: -.05em;
    --ls2: .05em;
    --ls3: .1em;
    --ls4: .25em;
 
    /* Space and Size Scale (margin, padding, width, height, border width) */
    --s1: .25rem;
    --s2: .5rem;
    --s3: .75rem;
    --s4: 1rem;
    --s5: 1.5rem;
    --s6: 2rem;
    --s7: 3rem;
    --s8: 4rem;
    --s9: 6rem;
    --s10: 8rem;
    --s11: 12rem;
    --s12: 16rem;
    --s13: 24rem;
    --s14: 32rem;
    --s15: 48rem;
    --s16: 64rem;
    --s17: 96rem;

    /* Max-widths */
    --measure1: 45ch;
    --measure2: 55ch;
    --measure3: 66ch;
    --measure4: 75ch;

    /* Border width */
    --bw0: 0;
    --bw1: .0625rem;
    --bw2: .125rem;
    --bw3: .25rem;
    --bw4: .5rem;
    --bw5: 1rem;
    --bw6: 2rem;

    /* Border radius */
    --r0: 0;
    --r1: .125rem;
    --r2: .25rem;
    --r3: .375rem;
    --r4: .5rem;
    --r5: .75rem;
    --r6: 1rem;
    --r100: 100%;

    /* Shadows */
    --shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
    --shadow-lg: 0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08);

    /* Transitions */
    --trans1: all 0.15s ease-in-out;
    --trans2: all 0.2s ease-in-out;
    --trans3: all 0.3s ease-in-out;
    --trans4: all 0.5s ease-in-out;
   
    /* Colors */
    /* TODO: add/move actual colours here */


    /* Blacks */
    --black-01: hsla(0, 0%, 0%, .01);
    --black-02: hsla(0, 0%, 0%, .02);
    --black-05: hsla(0, 0%, 0%, .05);
    --black-10: hsla(0, 0%, 0%, .1);
    --black-20: hsla(0, 0%, 0%, .2);
    --black-30: hsla(0, 0%, 0%, .3);
    --black-40: hsla(0, 0%, 0%, .4);
    --black-50: hsla(0, 0%, 0%, .5);
    --black-60: hsla(0, 0%, 0%, .6);
    --black-70: hsla(0, 0%, 0%, .7);
    --black-80: hsla(0, 0%, 0%, .8);
    --black-85: hsla(0, 0%, 0%, .85);
    --black-90: hsla(0, 0%, 0%, .9);
    --black-95: hsla(0, 0%, 0%, .95);

    /* Whites */
    --white-01: hsla(0, 0%, 100%, .01);
    --white-02: hsla(0, 0%, 100%, .02);
    --white-05: hsla(0, 0%, 100%, .05);
    --white-10: hsla(0, 0%, 100%, .1);
    --white-20: hsla(0, 0%, 100%, .2);
    --white-30: hsla(0, 0%, 100%, .3);
    --white-40: hsla(0, 0%, 100%, .4);
    --white-50: hsla(0, 0%, 100%, .5);
    --white-60: hsla(0, 0%, 100%, .6);
    --white-70: hsla(0, 0%, 100%, .7);
    --white-80: hsla(0, 0%, 100%, .8);
    --white-85: hsla(0, 0%, 100%, .85);
    --white-90: hsla(0, 0%, 100%, .9);
    --white-95: hsla(0, 0%, 100%, .95);

    /* Grays */
    --gray-1: hsl(0, 0%, 97%);
    --gray-2: hsl(0, 0%, 88%);
    --gray-3: hsl(0, 0%, 81%);
    --gray-4: hsl(0, 0%, 69%);
    --gray-5: hsl(0, 0%, 62%);
    --gray-6: hsl(0, 0%, 49%);
    --gray-7: hsl(0, 0%, 38%);
    --gray-8: hsl(0, 0%, 32%);
    --gray-9: hsl(0, 0%, 23%);
    --gray-10: hsl(0, 0%, 13%);

    /* Tachyons grays */
    --near-black: #111;
    --dark-gray:#333;
    --mid-gray:#555;
    --gray: #777;
    --silver: #999;
    --light-silver: #aaa;
    --moon-gray: #ccc;
    --light-gray: #eee;
    --near-white: #f4f4f4;

    /* Tachyons colors */
    --dark-red: #e7040f;
    --red: #ff4136;
    --light-red: #ff725c;
    --orange: #ff6300;
    --gold: #ffb700;
    --yellow: #ffd700;
    --light-yellow: #fbf1a9;
    --purple: #5e2ca5;
    --light-purple: #a463f2;
    --dark-pink: #d5008f;
    --hot-pink: #ff41b4;
    --pink: #ff80cc;
    --light-pink: #ffa3d7;
    --dark-green: #137752;
    --green: #19a974;
    --light-green: #9eebcf;
    --navy: #001b44;
    --dark-blue: #00449e;
    --blue: #357edd;
    --light-blue: #96ccff;
    --lightest-blue: #cdecff;
  }
`

export default CustomProperties
