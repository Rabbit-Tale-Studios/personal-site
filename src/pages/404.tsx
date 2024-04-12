import Button from 'components/Button'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Splt from 'react-spltjs'

const myArray = [['text-blue-500'], ['text-indigo-500'], ['text-violet-500']]

const Page = () => (
  <Layout>
    <Section>
      <h1 className="mb-3 font-mono text-8xl font-black">
        <Splt
          array={myArray}
          text="404"
          className="inline-block animate-revealLg"
          speed={0.5}
          offset={0.2}
          ease="cubic-bezier(0,-1,0,3)"
        />
      </h1>
      <h2 className="mb-12 animate-revealSm text-shark-500 dark:text-white-400">
        Bruh, how did you get here?
      </h2>
      <div className="animate-rotate">
        <Button
          text={`Take me home`}
          as="a"
          href={'./'}
          type="primary"
          className="h-12 place-content-center"
        />
      </div>
    </Section>
  </Layout>
)

export default Page
