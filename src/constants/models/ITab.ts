export type TabTitle = 'nearby' | 'encounters' | 'profile' | 'chat';

export interface ITab {
  id: number,
  title: TabTitle,
  icon?: string
}
