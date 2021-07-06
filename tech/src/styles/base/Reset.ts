import { createGlobalStyle } from 'styled-components'
import { media } from '../mixins/media'

const Reset = createGlobalStyle`
  /* Adapted from Sanitize.css 8.0.0 and the Eric Meyer reset */

  /* Document
   * ========================================================================== */

  /**
   * Remove the default margin and paddings from all elements (opinionated).
   */

  * { margin: 0; padding: 0; }

  /**
   * 1. Remove repeating backgrounds in all browsers (opinionated).
   * 2. Add border box sizing in all browsers (opinionated).
   */

  *,
  ::before,
  ::after {
    background-repeat: no-repeat; /* 1 */
    box-sizing: border-box; /* 2 */
  }

  /**
   * 1. Add text decoration inheritance in all browsers (opinionated).
   * 2. Add vertical alignment inheritance in all browsers (opinionated).
   */

  ::before,
  ::after {
    text-decoration: inherit; /* 1 */
    vertical-align: inherit; /* 2 */
  }

  /**
   * 1. Use the default cursor in all browsers (opinionated).
   * 2. Use the default user interface font in all browsers (opinionated).
   * 3. Correct the line height in all browsers.
   * 4. Use a 4-space tab width in all browsers (opinionated).
   * 5. Prevent adjustments of font size after orientation changes in
   *    IE on Windows Phone and in iOS.
   * 6. Breaks words to prevent overflow in all browsers (opinionated).
   * 7. Increase the base font size as the screen gets larger (uses
   *    % instead of px to respect the user's chosen base font size).
   */

  html {
    cursor: default; /* 1 */
    font-family: var(--bodyFont); /* 2 */

    line-height: 1.15; /* 3 */
    -moz-tab-size: 4; /* 4 */
    tab-size: 4; /* 4 */
    -ms-text-size-adjust: 100%; /* 5 */
    -webkit-text-size-adjust: 100%; /* 5 */
    word-break: break-word; /* 6 */

    font-size: 16px;
    ${media.sm` font-size: 16.5px `}
    ${media.md` font-size: 17px `}
    ${media.lg` font-size: 17.5px `} /* 7 */
  }

  /* Sections
   * ========================================================================== */

  /**
   * 1. Set the minimum body height to the full viewport (opinionated).
   * 2. Prevent unwanted horizontal scrolling.
   */

  body {
    min-height: 100vh; /* 1 */
    overflow-x: hidden; /* 2 */
  }

  /**
   * Correct the font size on 'h1' elements within 'section' and
   * 'article' contexts in Chrome, Firefox, and Safari.
   */

  h1 {
    font-size: 2em;
  }

  /* Grouping content
   * ========================================================================== */

  /**
   * 1. Add the correct sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */

  hr {
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  /**
   * Add the correct display in IE.
   */

  main {
    display: block;
  }

  /**
   * Remove the list style on lists in all browsers (opinionated).
   */

  ol,
  ul {
    list-style: none;
  }

  /**
  * 1. Use the default monospace user interface font
  *    in all browsers (opinionated).
  * 2. Correct the odd 'em' font sizing in all browsers.
  */

  pre {
    font-family: var(--codeFont); /* 1 */
    font-size: 1em; /* 2 */
  }

  /* Text-level semantics
   * ========================================================================== */

  /**
   * Add the correct text decoration in Edge, IE, Opera, and Safari.
   */

  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */

  b,
  strong {
    font-weight: bolder;
  }

  /**
   * 1. Use the default monospace user interface font
   *    in all browsers (opinionated).
   * 2. Correct the odd 'em' font sizing in all browsers.
   */

  code,
  kbd,
  samp {
    font-family: var(--codeFont); /* 1 */
    font-size: 1em; /* 2 */
  }

  /**
   * Add the correct font size in all browsers.
   */

  small {
    font-size: 80%;
  }

  /*
   * 1. Remove the text shadow on text selections in Firefox 61- (opinionated).
   * 2. Restore the coloring undone by defining the text shadow
   *    in all browsers (opinionated).
   */

  ::-moz-selection {
    background-color: #b3d4fc; /* 2 */
    color: #000; /* 2 */
    text-shadow: none; /* 1 */
  }

  ::selection {
    background-color: #b3d4fc; /* 2 */
    color: #000; /* 2 */
    text-shadow: none; /* 1 */
  }

  /* Embedded content
   * ========================================================================== */

  /*
   * Change the alignment on media elements in all browers (opinionated).
   */

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  iframe {
    border: none;
  }

  /* img {
    max-width: 100%;
    height: auto;
  } */ /* May be unnecessary with gatsby-image's default styles */

  /**
   * Add the correct display in iOS 4-7.
   */

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  /**
   * Change the fill color to match the text color in all browsers (opinionated).
   */

  svg:not([fill]) {
    fill: currentColor;
  }
  
  /**
   * Limit the width to the size of the viewport in all browsers.
   */

  svg {
    max-width: 100%;
  }

  /**
   * Hide the overflow in IE.
   */

  svg:not(:root) {
    overflow: hidden;
  }

  /* Tabular data
   * ========================================================================== */

  /**
   * Collapse border spacing in all browsers (opinionated).
   */

  table {
    border-collapse: collapse;
  }

  /* Forms
   * ========================================================================== */

  /**
   * Inherit styling in all browsers (opinionated).
   */

  button,
  input,
  select,
  textarea {
    line-height: inherit;
    /* line-height: normal; */ /* May fix vertical alignment issues in iOS */
    letter-spacing: inherit;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  /**
   * Remove default styling in all browsers (opinionated).
   */

  input,
  textarea {
    appearance: none;
    border: 0;
    border-radius: 0;
    background-color: transparent;
  }

  /**
   * Since clicking a radio button label triggers the input, 
   * match the default UX in all browsers. 
   */
  
  input[type='radio'] + label { 
    cursor: pointer; 
  }

  /**
    * 1. Show the overflow in IE.
    * 2. Remove the inheritance of text transform in Edge, Firefox, and IE.
    * 3. Set the cursor to pointer in all browsers.
    */

  a {
    text-decoration: none;
  }

  button {
    overflow: visible; /* 1 */
    text-transform: none; /* 2 */
    cursor: pointer; /* 3 */
  }

  button {
    border-style: none;
    padding: 0;
    background: transparent;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  /**
   * 1. Remove the border in all browsers.
   * 2. Correct min-width in Chrome and Firefox.
   */

  fieldset {
    border: 0; /* 1 */
    min-width: 0; /* 2 */
  }
  
  /**
   * Show the overflow in Edge and IE.
   */

  input {
    overflow: visible;
  }

  /**
   * 1. Correct the text wrapping in Edge and IE.
   * 2. Correct the color inheritance from 'fieldset' elements in IE.
   */

  legend {
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    white-space: normal; /* 1 */
  }

  /**
   * 1. Add the correct display in Edge and IE.
   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */

  progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }

  /**
   * Remove the inheritance of text transform in Firefox.
   */

  select {
    text-transform: none;
  }

  /**
   * 1. Remove the default vertical scrollbar in IE.
   * 2. Change the resize direction on textareas in all browsers (opinionated).
   */

  textarea {
    overflow: auto; /* 1 */
    resize: vertical; /* 2 */
  }

  /**
   * Remove the premature highlighting of invalid inputs and textareas in Firefox.
   * See: https://stackoverflow.com/questions/5939341/firefox-4-is-there-a-way-to-remove-the-red-border-in-a-required-form-input 
   * See:   https://stackoverflow.com/questions/3809146/firefox-4-required-input-form-red-border-outline
   */
  
  input:-moz-placeholder,
  input:focus,
  input:invalid,
  textarea:-moz-placeholder,
  textarea:focus,
  textarea:invalid { 
    box-shadow: none !important; 
  }

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  /**
   * Correct the cursor style of increment and decrement buttons in Safari.
   */

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  /**
   * Correct the text style of placeholders in Chrome, Edge, and Safari.
   */

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /**
   * Remove the inner border of focus outlines in Firefox.
   */

  ::-moz-focus-inner {
    border-style: none;
  }

  /**
   * Restore the focus outline styles unset by the previous rule in Firefox.
   */

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /* Interactive
   * ========================================================================== */

  /*
   * Add the correct display in Edge and IE.
   */

  details {
    display: block;
  }

  /*
   * Add the correct styles in Edge, IE, and Safari.
   */

  dialog {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    border: solid;
    background-color: white;
    height: -moz-fit-content;
    height: -webkit-fit-content;
    height: fit-content;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    color: black;
  }

  dialog:not([open]) {
    display: none;
  }

  /*
   * Add the correct display in all browsers.
   */

  summary {
    display: list-item;
  }

  /* User interaction
   * ========================================================================== */

  /**
   * Remove the tapping delay on clickable elements
   * in all browsers (opinionated).
   */

  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    touch-action: manipulation;
  }

  /**
   * Remove the tap highlight on iOS. 
   */

  a,
  button,
  input,
  label,
  select,
  textarea,
  ul { 
    -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
  }

  /**
   * Remove the default colours on all browsers.. 
   */

  a {
    /* text-decoration: none; */
    color: inherit;
  }

  /* Accessibility
  * ========================================================================== */

  /**
   * Remove default focus outline ONLY if user is not navigating by keyboard.
   */

  [data-whatintent="mouse"] *:focus, 
  [data-whatintent="touch"] *:focus, 
  html:not([data-whatinput="keyboard"]) *:focus { 
    outline: none; 
  }

  /**
   * Change the cursor on busy elements in all browsers (opinionated).
   */

  [aria-busy="true"] {
    cursor: progress;
  }

  /**
   * Change the cursor on control elements in all browsers (opinionated).
   */

  [aria-controls] {
    cursor: pointer;
  }

  /**
   * Change the cursor on disabled, not-editable, or otherwise
   * inoperable elements in all browsers (opinionated).
   */

  [aria-disabled="true"],
  [disabled] {
    cursor: not-allowed;
  }

  /**
   * Change the display on visually hidden accessible elements
   * in all browsers (opinionated).
   */

  [aria-hidden="false"][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute;
  }

  /**
   * Turn off all animations if the user prefers reduced motion.
   */
  @media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
`

export default Reset
