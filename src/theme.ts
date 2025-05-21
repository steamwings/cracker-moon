import theme from '@hackernoon/rich-markdown-editor/dist/styles/theme'

//TODO?
const snTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    text: 'var(--sn-stylekit-foreground-color)',
    background: 'var(--sn-stylekit-background-color)',
  }
}
