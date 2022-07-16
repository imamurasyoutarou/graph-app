import Head from 'next/head'
import React from 'react'
import styles from '@/components/Layout/style.module.css'
import { TheHeader } from '@/components/TheHeader'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  title = '都道府県グラフ',
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <TheHeader />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
