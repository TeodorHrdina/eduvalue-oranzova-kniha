export type SlovakRegion =
  | 'Bratislavský kraj'
  | 'Trnavský kraj'
  | 'Trenčianský kraj'
  | 'Nitrianský kraj'
  | 'Žilinský kraj'
  | 'Banskobystrický kraj'
  | 'Prešovský kraj'
  | 'Košický kraj'

export interface Project {
  id: string
  title: string
  establishmentDate: Date
  memberCount: number
  activeRegions: SlovakRegion[]
  imageUrl: string
  description: string
  chiefImage: string
  chiefQuote: string
  chiefName: string
  primaryTargetGroup: string
  theme: string
  humanResources: string
}
