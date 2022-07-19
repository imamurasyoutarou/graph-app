import React, { useState } from 'react'
import styles from '@/components/Accordion/style.module.css'
type Props = {
  name: string
  children: React.ReactNode
}

export const Accordion: React.FC<Props> = ({ name, children }) => {
  const [open, setOpen] = useState(true)

  return (
    <div className={styles.container}>
      <div
        onClick={() => {
          setOpen(!open)
        }}
        className={styles.name}
      >
        {name}
      </div>
      <div style={{ display: open ? 'none' : 'inline' }}>{children}</div>
    </div>
  )
}
