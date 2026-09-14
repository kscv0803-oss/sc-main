export interface Service {
  name: string
  icon: string
  description: string
  url: string
}

// 새 서비스를 추가하려면 이 배열에 객체 하나만 추가하면 됩니다.
export const services: Service[] = [
  {
    name: 'EV5 차계부',
    icon: '🚗',
    description: '전기차 충전·정비·비용 관리',
    url: 'https://ev5-carnote.vercel.app'
  },
  {
    name: '노트',
    icon: '📝',
    description: '메모·할 일·여행 기록',
    url: 'https://sc-notebook.vercel.app'
  }
]
