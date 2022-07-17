import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { CheckBoxList } from '@/components/CheckBoxList'
import { Layout } from '@/components/Layout'
import { getPopulationData, getPrefecturesData } from '@/lib/resas-api'
import { Data, Prefectures, PrefecturesLines } from '@/types'

const Graph = dynamic(() => import('@/components/Graph').then((modules) => modules.Graph) as any, {
  ssr: false,
}) as any
// NOTE: error 対応	 https://github.com/recharts/recharts/issues/2272

type Props = {
  prefectures: Prefectures
}

const Home: NextPage<Props> = ({ prefectures }) => {
  const [data, setData] = useState<Data[]>([])
  const [prefecturesLines, setPrefecturesLines] = useState<PrefecturesLines>([])

  const onChengeGraph = async (prefCode: number, prefName: string, checked: boolean) => {
    if (checked) {
      // 追加
      const res: any = await getPopulationData(prefCode)
      const populations = res.result.data[0].data
      const list: Data[] = []
      await populations.forEach(
        ({ year, value }: { year: string; value: string }, index: number) => {
          return data.length > 0
            ? list.push({ [prefName]: value, ...data[index] })
            : list.push({ 年度: year, [prefName]: value })
        },
      )
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
      setPrefecturesLines([...prefecturesLines, { prefName, color: randomColor }])
      setData(list)
    } else {
      // 削除
      const list: Data[] = []
      await data.forEach((value: Data) => {
        delete value[prefName]
        list.push(value)
      })

      const newPrefecturesLines = await prefecturesLines.filter(
        (value: { prefName: string }) => value.prefName !== prefName,
      )

      setPrefecturesLines(newPrefecturesLines)
      setData(list)
    }
  }

  return (
    <Layout>
      <h1 className={styles.title}>都道府県</h1>
      {prefectures && <CheckBoxList prefectures={prefectures} onChange={onChengeGraph} />}
      <div className={styles.graph}>
        <Graph data={data} prefecturesLines={prefecturesLines} />
      </div>
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
