import React from 'react'

type Props = {
  prefName: string
  prefCode: number
  onChange: (prefCode: number, prefName: string, checked: boolean) => void
}

export const CheckBox: React.FC<Props> = ({ prefName, prefCode, onChange }) => {
  const getGraph = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(prefCode, prefName, e.target.checked)
  }
  return (
    <label>
      <input onChange={(e) => getGraph(e)} type='checkbox' />
      {prefName}
    </label>
  )
}
