import Head from 'next/head'
import React from 'react'
import styles from '@/Layout/style.module.css'

interface LayoutProps {
  title?: string
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  title = '都道府県部グラフ',
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <main className={styles.main}>{children}</main>
    </div>
  )
}
