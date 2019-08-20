export interface League {
  id: number

  name: {
    full: string
    normal: string
    short: string
  }

  results?: Array<Result>
}

export interface Result {
  id: number
  position: number
  participants: Array<{
    id: number
    place: number
    short: string
    points: Array<number>
    contestant?: Contestant
  }>
  beginAt: Date
}

export interface Contestant {
  id: number
  alias: string
  name: string
  region: string
}