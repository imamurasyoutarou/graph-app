import React from 'react'
import { CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {
  data: any
  populations: Array<{ prefName: string; color: string }>
}

export const Graph: React.FC<Props> = ({ data, populations }) => {
  const width = window.innerWidth - 40
  return (
    <LineChart width={width} height={500} data={data}>
      {populations.map(({ prefName, color }: { prefName: string; color: string }) => {
        return <Line type='monotone' key={prefName} dataKey={prefName} stroke={color} />
      })}
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis padding={{ right: 64 }} dataKey='年度' fontSize={14}>
        <Label fontWeight='bold' fontSize={14} value='年度' position='insideBottomRight' />
      </XAxis>
      <YAxis fontSize={14} padding={{ top: 64 }}>
        <Label fontSize={14} value='人口数' fontWeight='bold' position='insideTopLeft' />
      </YAxis>
      <Legend verticalAlign='top' />
      <Tooltip />
    </LineChart>
  )
}
