import type { NextPage } from 'next'
import { CheckBox } from '@/components/CheckBox'
import { Layout } from '@/components/Layout'
import { getPrefecturesData } from '@/lib/resas-api'

type Props = {
  prefectures: any
}
const Home: NextPage<Props> = ({ prefectures }) => {
  const onChengeGraph = (prefCode: number, prefName: string, checked: boolean) => {
    console.log(prefCode, prefName, checked)
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
