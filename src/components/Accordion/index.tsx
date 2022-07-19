import React, { useState } from 'react'
import styles from '@/components/Accordion/style.module.css'
type Props = {
  name: string
  children: React.ReactNode
  open: boolean
  onClick: () => void
}

export const Accordion: React.FC<Props> = ({ name, children, onClick, open }) => {
  return (
    <div className={styles.container}>
      <div onClick={onClick} className={styles.name}>
        {name}
      </div>
      <div style={{ display: open ? 'inline' : 'none' }}>{children}</div>
    </div>
  )
}
