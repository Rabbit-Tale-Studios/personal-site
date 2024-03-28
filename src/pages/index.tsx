import Layout from 'components/Layout'
import Tag from 'components/Tag'
import Calendar from 'components/calendar/Calendar'
import { marchData } from 'lib/activity/2024/mar'
import { februaryData } from 'lib/activity/2024/feb'

const Page = () => (
  <Layout>
    {/* <SolidLogoText
      size={256}
      className="mt-10 animate-revealMd text-shark-950"
    /> */}
    <Tag year="2024" />
    <Calendar data={marchData} />
    {/* <Calendar data={februaryData} /> */}
    <Calendar data={februaryData} />
    {/* <Tag year="2023" />
    <Calendar data={decemberData} /> */}
  </Layout>
)

export default Page
