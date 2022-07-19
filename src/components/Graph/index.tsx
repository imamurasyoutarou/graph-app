import React from 'react'
import { CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useDeviceType } from '@/contexts/MediaQueryContext'
import { Data, PrefecturesLines } from '@/types'

type Props = {
  data: Data[]
  prefecturesLines: PrefecturesLines
}

export const Graph: React.FC<Props> = ({ data, prefecturesLines }) => {
  const { isSmartPhone } = useDeviceType()
  const width = !isSmartPhone ? 500 : window.innerWidth - 40
  const height = !isSmartPhone ? 400 : 300

  return (
    <LineChart width={width} height={height} data={data}>
      {prefecturesLines.map(({ prefName, color }) => {
        return <Line type='monotone' key={prefName} dataKey={prefName} stroke={color} />
      })}
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis padding={{ right: 64 }} dataKey='年度' fontSize={14}>
        <Label fontWeight='bold' fontSize={14} value='年度' position='insideBottomRight' />
      </XAxis>
      <YAxis fontSize={12} padding={{ top: 64 }}>
        <Label fontSize={12} value='人口数' fontWeight='bold' position='insideTopLeft' />
      </YAxis>
      <Legend verticalAlign='top' />
      <Tooltip />
    </LineChart>
  )
}
