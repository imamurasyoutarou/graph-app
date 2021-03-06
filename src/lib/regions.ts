import { hokkaidoTohoku, kanto, chubu, kinki, chugoku, shikoku, kyushu } from '@/constants/regions'
import { Prefectures } from '@/types'

export const formatRegions = (prefectures: Prefectures[]) => {
  const fotmatList: Array<Prefectures[]> = [[], [], [], [], [], [], []]

  prefectures.forEach((value) => {
    if (hokkaidoTohoku.includes(value.prefName)) {
      fotmatList[0].push({ ...value })
    }

    if (kanto.includes(value.prefName)) {
      fotmatList[1].push({ ...value })
    }
    if (chubu.includes(value.prefName)) {
      fotmatList[2].push({ ...value })
    }
    if (kinki.includes(value.prefName)) {
      fotmatList[3].push({ ...value })
    }
    if (chugoku.includes(value.prefName)) {
      fotmatList[4].push({ ...value })
    }
    if (shikoku.includes(value.prefName)) {
      fotmatList[5].push({ ...value })
    }
    if (kyushu.includes(value.prefName)) {
      fotmatList[6].push({ ...value })
    }
  })

  return fotmatList
}
