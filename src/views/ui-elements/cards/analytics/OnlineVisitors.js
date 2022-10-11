// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import axios from 'axios'
import { Users } from 'react-feather'

// ** Custom Components
import StatsWithAreaChart from '@components/widgets/stats/StatsWithAreaChart'

const OnlineVisitors = ({ kFormatter }) => {
  // ** State
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/card/card-statistics/subscribers').then(res => setData(res.data))
    return () => setData(null)
  }, [])

  return data !== null ? (
    <StatsWithAreaChart
      icon={<Users size={21} />}
      color='primary'
      stats={kFormatter(data.analyticsData.subscribers)}
      statTitle='Visitantes Online'
      series={data.series}
      type='area'
    />
  ) : null
}

export default OnlineVisitors
