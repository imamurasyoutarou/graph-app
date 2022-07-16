import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'
import { getPrefecturesData } from '@/lib/resas-api'

const Home: NextPage = ({ prefectures }) => {
  return <Layout>都道府県</Layout>
}

export default Home

export const getStaticProps = async () => {
  const prefectures = await getPrefecturesData()

  return {
    props: { prefectures },
  }
}
