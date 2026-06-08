import type {AppTheme} from './types'

type ThemeConfig = {
  label: string
  aside: {
    logo: string
    mark: string
    title: string
    width: string
    bgColor: string
    markBgColor: string
    markColor: string
  }
  drawer: {
    padding: string
    width: string
    bgColor: string
  }
  menu: {
    textColor: string
    hoverTextColor: string
    activeTextColor: string
    bgColor: string
    hoverBgColor: string
    activeBgColor: string
    borderColor: string
  }
  layout: {
    bgColor: string
    headerBgColor: string
    headerBorderColor: string
  }
}

export const defaultTheme: AppTheme = 'default'

export const themeConfigs = {
  default: {
    label: '默认',
    aside: {
      logo: 'https://element-plus.gitee.io/images/element-plus-logo-small.svg',
      mark: 'EP',
      title: 'Element Plus Admin',
      width: '240px',
      bgColor: '#001428',
      markBgColor: '#ffffff',
      markColor: '#2d8cf0',
    },
    drawer: {
      padding: '0px',
      width: '200px',
      bgColor: '#001428',
    },
    menu: {
      textColor: '#bbb',
      hoverTextColor: '#fff',
      activeTextColor: '#fff',
      bgColor: '#001428',
      hoverBgColor: 'transparent',
      activeBgColor: '#2d8cf0',
      borderColor: 'transparent',
    },
    layout: {
      bgColor: '#f5f7f9',
      headerBgColor: '#fff',
      headerBorderColor: 'transparent',
    },
  },
  china: {
    label: '中国',
    aside: {
      logo: '',
      mark: '中',
      title: '华夏后台',
      width: '240px',
      bgColor: 'linear-gradient(180deg, #8f1622 0%, #5f1018 100%)',
      markBgColor: '#f4cf77',
      markColor: '#7b1119',
    },
    drawer: {
      padding: '0px',
      width: '220px',
      bgColor: 'linear-gradient(180deg, #8f1622 0%, #5f1018 100%)',
    },
    menu: {
      textColor: '#f7d7a2',
      hoverTextColor: '#fff8e7',
      activeTextColor: '#fff8e7',
      bgColor: 'transparent',
      hoverBgColor: 'rgba(244, 207, 119, 0.12)',
      activeBgColor: '#c52b35',
      borderColor: 'transparent',
    },
    layout: {
      bgColor: '#f8f1e8',
      headerBgColor: '#fffaf1',
      headerBorderColor: 'rgba(143, 22, 34, 0.16)',
    },
  },
} as const satisfies Record<AppTheme, ThemeConfig>

export const themeOptions = Object.freeze(
  Object.entries(themeConfigs).map(([value, theme]) => ({
    label: theme.label,
    value: value as AppTheme,
  })),
)

export const getThemeConfig = (theme: AppTheme) => themeConfigs[theme]
export const config = themeConfigs[defaultTheme]
