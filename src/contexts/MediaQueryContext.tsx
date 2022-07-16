import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import { size } from '@/constants/media-query'
const MediaQueryContext = React.createContext({
  isSmartPhone: false,
  isTablet: false,
  isPc: false,
})

interface LayoutProps {
  children: React.ReactNode
}

export const MediaQueryProvider: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const isSmartPhone = useMediaQuery({ maxWidth: size.mobile })
  const isTablet = useMediaQuery({
    minWidth: size.mobile,
    maxWidth: size.tablet,
  })

  const isMobile = isSmartPhone || isTablet
  const isPc = !isMobile

  return (
    <MediaQueryContext.Provider value={{ isSmartPhone, isTablet, isPc }}>
      {children}
    </MediaQueryContext.Provider>
  )
}

export const useDeviceType = () => useContext(MediaQueryContext)
