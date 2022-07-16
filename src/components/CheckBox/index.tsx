import React from 'react'

type Props = {
  prefName: string
  onChange: () => void
}

export const CheckBox: React.FC<Props> = ({ prefName, onChange }) => {
  return (
    <label>
      <input onChange={onChange} type='checkbox' />
      {prefName}
    </label>
  )
}
