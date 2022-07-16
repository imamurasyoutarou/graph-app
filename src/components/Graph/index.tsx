import React from 'react'
import { CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {
  data: any
  populations: Array<{ prefName: string; color: string }>
}

export const Graph: React.FC<Props> = ({ data, populations }) => {
  return (
    <LineChart width={400} height={400} data={data}>
      {populations.map(({ prefName, color }: { prefName: string; color: string }) => {
        return <Line type='monotone' key={prefName} dataKey={prefName} stroke={color} />
      })}
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='年度'>
        <Label value='年度' position='insideBottomRight' />
      </XAxis>
      <YAxis label={{ value: '人口数', angle: 0, position: 'insideTopLeft' }} />
      <Legend verticalAlign='top' />
      <Tooltip />
    </LineChart>
  )
}
