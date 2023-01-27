import baseCode from '@lekoarts/gatsby-theme-minimal-blog/src/styles/code'

export default {
  pre: {
    fontFamily: 'ml, monospace',
  },
  code: {
    fontFamily: 'ml, monospace',
  },
  'pre[class~="language-java"]:before': {
    content: `"scala"`,
    background: `#dc322f !important`,
    color: `white !important`,
  },
  'pre[class~="language-kt"]:before': {
    content: `"KT"`,

    background: `#806EE3 !important`,
  },
  'pre[class~="language-groovy"]:before': {
    content: `"GROOVY"`,
    background: `#629CBC !important`,
  },
  ...baseCode,
  'p > code, li > code': {
    bg: `codebg`,
    color: `text`,
    padding: '0.2rem 0.3rem',
    borderRadius: `6px`,
    fontSize: `90%`,
  },
}
