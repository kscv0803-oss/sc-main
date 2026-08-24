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
    url: 'https://ev5-chaegyepu.vercel.app'
  }
]
