import React from 'react'
import { CheckBox } from '../CheckBox'
import styles from '@/components/RegionCheckBoxList/style.module.css'
import { Prefectures } from '@/types'

type Props = {
  regions: Array<Prefectures[]>
  onChange: (prefCode: number, prefName: string, checked: boolean) => void
}

export const RegionCheckBoxList: React.FC<Props> = ({ regions, onChange }) => {
  const regionName = ['北海道', '東北', '関東', '中部', '近畿', '中国', '四国', '九州']

  return (
    <div>
      {regions.map((region: Prefectures[], index: number) => {
        return (
          <div key={`key_${index}`}>
            <div className={styles.listName}>{regionName[index]}</div>
            <ul className={styles.list}>
              {region.map(({ prefName, prefCode }: Prefectures) => {
                return (
                  <li className={styles.listItem} key={prefName}>
                    <CheckBox onChange={onChange} prefName={prefName} prefCode={prefCode} />
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
