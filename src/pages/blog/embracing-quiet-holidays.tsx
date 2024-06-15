import CodeBlock from 'components/CodeSytax'
import Layout from 'components/Layout'
import Section from 'components/Section'
//import TextLink from 'components/TextLink'
import BackButton from 'components/blog/BackButton'
//import Image from 'next/image'

const Page = () => (
  <Layout
    metaTagsProps={{
      title: 'Embracing Quiet Holidays',
      description: `Reflections on finding joy in the simplicity of the holiday season, even without traditional celebrations.`,
    }}
  >
    <Section className="mb-0 mt-20">
      <article className="prose w-full max-w-prose dark:prose-invert prose-headings:font-semibold prose-img:rounded-3xl">
        <header>
          <BackButton />
          <h1 className="animate-fade">Embracing Quiet Holidays</h1>
          <p className="animate-fadeMd">March 30, 2024</p>
        </header>
        <section className="animate-fadeLg">
          {/* <Twemoji options={{ className: 'emoji' }}> */}
          <p>
            Finally, a moment to breathe and relax — the holidays are here.
            While I'm not someone who traditionally celebrates holidays, the joy
            of this season for me lies in the opportunity to spend quality time
            with someone special.
          </p>
          {/* <CodeBlock
            codeString={`function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// This will work correctly.
let message: string = greet('123');`}
            language={'typescript'}
          />
          <h3>Details</h3>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul> */}
          {/* <Image src={idea} alt="Image" placeholder="blur" /> */}
          <h2>The Essence of the Season</h2>
          <p>
            It's a break from the usual hustle, a pause in the daily routines,
            and a chance to recharge and connect on a deeper level. The
            significance of the holidays transcends beyond mere festivities;
            it's about the warmth and comfort of companionship.
          </p>
          {/* <Image src={idea} alt="Image" placeholder="blur" /> */}
          <h2>Cherishing Connections</h2>
          <p>
            In the midst of this break, I find myself reflecting on the
            importance of taking time to appreciate the people in our lives.
            Whether it's a family member, a friend, or a loved one, the presence
            of someone to share in the quiet moments is truly what makes this
            time of year meaningful for me.
          </p>
          <h2>A Time for Gratitude</h2>
          <p>
            So, as the world around us twinkles with holiday lights and the air
            fills with the spirit of the season, I embrace this time as a
            reminder of the simple pleasures of life. It's a time to slow down,
            express gratitude, and cherish the moments we spend with those who
            matter most.
          </p>
          <p>
            Here's to finding joy in the little things and making the most of
            this holiday season, however you choose to spend it.
          </p>
          <p>With ❤️,</p>
          <p>— Kris 🐱</p>
          {/* </Twemoji> */}
        </section>
      </article>
    </Section>
  </Layout>
)

export default Page
