import Layout from 'components/Layout'
import Section from 'components/Section'
//import TextLink from 'components/TextLink'
import BackButton from 'components/blog/BackButton'
//import Image from 'next/image'
import Twemoji from 'react-twemoji'

const Page = () => (
  <Layout
    metaTagsProps={{
      title: 'My Design Journey',
      description: `A brief explanation as to what this site actually is.`,
    }}
  >
    <Section className="mb-0 mt-20">
      <article className="prose w-full max-w-prose dark:prose-invert prose-headings:font-semibold prose-img:rounded-3xl">
        <header>
          <BackButton />
          <h1 className="animate-fade">My Design Journey</h1>
          <p className="animate-fadeMd">March 3, 2024</p>
        </header>
        <section className="animate-fadeLg">
          <Twemoji options={{ className: 'emoji' }}>
            <h2>New begginings</h2>
            <p>
              Hello and welcome to my very first blog post! After years of
              immersing myself in the world of design and web development,
              starting from 2016, I am thrilled to announce the launch of my
              personal portfolio.
            </p>
            {/* <Image src={idea} alt="Image" placeholder="blur" /> */}
            <h2>The Road So Far</h2>
            <p>
              The road to this moment has been both exciting and challenging.
              For several years, I've dedicated myself to learning the
              intricacies of design and mastering the art of web creation. This
              journey has been filled with countless hours of practice,
              exploration, and continuous learning.
            </p>
            {/* <Image src={idea} alt="Image" placeholder="blur" /> */}
            <h2>Overcoming Challenges</h2>
            <p>
              I must admit, taking the final step to publish my portfolio
              required a significant push. The process of compiling my work,
              reflecting on my progress, and deciding how best to present myself
              to the world was daunting. However, the satisfaction and joy I
              feel now that it's live are immense. ❤️
            </p>
            <h2>A Testament to Persistence</h2>
            <p>
              I'm overjoyed to share this milestone with you. This blog and
              portfolio are not just a display of my work but a testament to the
              persistence, passion, and love for design and technology that have
              driven me over the years. It's a celebration of finally achieving
              a goal that seemed so distant when I first started out in 2016.
            </p>
            <h2>Looking Ahead</h2>
            <p>
              Stay tuned as I continue to explore new projects, ideas, and
              designs. Through this blog, I hope to share insights, experiences,
              and inspirations that I encounter on my ongoing journey in the
              world of design and web development.
            </p>
            <p>
              Thank you for stopping by and sharing in this special moment with
              me. Here's to many more milestones, creations, and discoveries
              together!
            </p>
            <p>With love,</p>
            <p>— Kris</p>
          </Twemoji>
        </section>
      </article>
    </Section>
  </Layout>
)

export default Page
