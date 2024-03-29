import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.baseFontSize = '18px'
Wordpress2016.baseLineHeight = 2

Wordpress2016.overrideThemeStyles = () => {
  return {
    h1: {
      fontFamily: ['Lato', 'sans-serif'].join(',')
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`
    }
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
