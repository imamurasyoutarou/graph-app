import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { CheckBox } from '@/components/CheckBox'
import { Layout } from '@/components/Layout'
import { getPopulationData, getPrefecturesData } from '@/lib/resas-api'

const Graph = dynamic(() => import('@/components/Graph').then((modules) => modules.Graph), {
  ssr: false,
})
// NOTE: error 対応	 https://github.com/recharts/recharts/issues/2272

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
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
      setPopulations([...populations, { prefName, color: randomColor }])

      setData(list)
    } else {
      // 削除
      const list: any = []
      await data.forEach((value, index) => {
        delete value[prefName]
        list.push(value)
      })
      const newPopulations = await populations.filter((value) => value.prefName !== prefName)

      setPopulations(newPopulations)
      setData(list)
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
