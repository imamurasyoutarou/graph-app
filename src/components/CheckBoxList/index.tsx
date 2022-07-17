import React from 'react'
import { CheckBox } from '../CheckBox'
import styles from '@/components/CheckBoxList/style.module.css'
import { Prefectures } from '@/types'

type Props = {
  prefectures: Prefectures
  onChange: (prefCode: number, prefName: string, checked: boolean) => void
}

export const CheckBoxList: React.FC<Props> = ({ prefectures, onChange }) => {
  return (
    <ul className={styles.list}>
      {prefectures.map(({ prefName, prefCode }) => {
        return (
          <li className={styles.listItem} key={prefName}>
            <CheckBox onChange={onChange} prefName={prefName} prefCode={prefCode} />
          </li>
        )
      })}
    </ul>
  )
}
