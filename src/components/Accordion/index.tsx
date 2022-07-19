import React, { useState } from 'react'
import { IconBottom } from '../icon/iconBottom'
import { IconRight } from '../icon/iconRight'
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
        <div> {name}</div>
        <div>{open ? <IconBottom /> : <IconRight />}</div>
      </div>
      <div className={styles.children} style={{ display: open ? 'inline' : 'none' }}>
        {children}
      </div>
    </div>
  )
}
