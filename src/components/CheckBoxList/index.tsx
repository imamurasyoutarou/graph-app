import React from 'react'
import { CheckBox } from '../CheckBox'
import styles from '@/components/CheckBoxList/style.module.css'

type Props = {
  prefectures: { prefName: string; prefCode: number }[]
  onChange: (prefCode: number, prefName: string, checked: boolean) => void
}

export const CheckBoxList: React.FC<Props> = ({ prefectures, onChange }) => {
  return (
    <ul className={styles.list}>
      {prefectures.map(({ prefName, prefCode }: { prefName: string; prefCode: number }) => {
        return (
          <li className={styles.listItem} key={prefName}>
            <CheckBox onChange={onChange} prefName={prefName} prefCode={prefCode} />
          </li>
        )
      })}
    </ul>
  )
}
