import axios from 'axios'

export const getPrefecturesData = async () => {
  let data
  await axios
    .get(' https://opendata.resas-portal.go.jp/api/v1/prefectures', {
      headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY as string },
    })
    .then((results) => {
      data = results.data.result
    })
    .catch(() => {
      data = null
    })
  return data
}

export const getPopulationData = async (prefCode: number) => {
  let data
  await axios
    .get(
      `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
      {
        headers: {
          'X-API-KEY': process.env.NEXT_PUBLIC_RESAS_API_KEY as string,
        },
      },
    )
    .then((results) => {
      data = results.data.result.data[0].data
    })
    .catch(() => {
      data = null
    })
  return data
}
