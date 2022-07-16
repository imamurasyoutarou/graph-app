import type { NextPage } from 'next'
import { useState } from 'react'
import { CheckBox } from '@/components/CheckBox'
import { Graph } from '@/components/Graph'
import { Layout } from '@/components/Layout'
import { getPopulationData, getPrefecturesData } from '@/lib/resas-api'

type Props = {
  prefectures: any
}
const Home: NextPage<Props> = ({ prefectures }) => {
  const [data, setData] = useState<Array<any>>([])
  const [populations, setPopulations] = useState<any>([])

  const onChengeGraph = async (prefCode: number, prefName: string, checked: boolean) => {
    if (checked) {
      // 追加
      const res = await getPopulationData(prefCode)
      const population = res.result.data[0].data as Array<any>
      const list: any = []
      await population.forEach(({ year, value }, index) => {
        data.length > 0
          ? list.push({ 年度: year, [prefName]: value, ...data[index] })
          : list.push({ 年度: year, [prefName]: value })
      })
      setPopulations([...populations, prefName])
      setData(list)
    } else {
      // 削除
    }
  }

  return (
    <Layout>
      都道府県
      {prefectures && (
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {prefectures.map(({ prefName, prefCode }: { prefName: string; prefCode: number }) => {
            return (
              <li key={prefName} style={{ margin: 10 }}>
                <CheckBox onChange={onChengeGraph} prefName={prefName} prefCode={prefCode} />
              </li>
            )
          })}
        </ul>
      )}
      <Graph data={data} populations={populations} />
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const prefectures = await getPrefecturesData()

  return {
    props: { prefectures },
  }
}
