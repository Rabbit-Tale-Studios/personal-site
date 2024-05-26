import Layout from 'components/Layout'
import Section from 'components/Section'
import TextLink from 'components/TextLink'
import BackButton from 'components/blog/BackButton'
import Image from 'next/image'
import workspace1 from 'public/images/blog/my-workspace/workspace-1.jpg'
import workspace2 from 'public/images/blog/my-workspace/workspace-2.jpg'

const Page = () => (
  <Layout
    metaTagsProps={{
      title:
        'The Birth of Poker Cats Creations and Our Journey into Game Development',
      description: `Discover the story behind Poker Cats Creations, our new LLC, and our exciting journey into mobile game development. Learn about our first project and future plans!`,
    }}
  >
    <Section className="mb-0 mt-20">
      <article className="prose w-full max-w-prose dark:prose-invert prose-headings:font-semibold prose-img:rounded-3xl">
        <header>
          <BackButton />
          <h1 className="animate-fade">
            The Birth of Poker Cats Creations and Our Journey into Game
            Development
          </h1>
          <p className="animate-fadeMd">May 26, 2024</p>
        </header>
        <section className="animate-fadeLg">
          <h2>
            The Birth of Poker Cats Creations and Our Journey into Game
            Development
          </h2>
          <p>
            For quite some time, my friends and I — 4 of us plus myself — had
            this grand idea of forming an LLC called{' '}
            <strong>Poker Cats Creations</strong>. Our vision was to create a
            small studio dedicated to developing various projects, both big and
            small.
          </p>
          <p>
            As fate would have it, our first project turned out to be a mobile
            game. You can read more about this exciting project{' '}
            <TextLink href="/blog/tiny-buddies" text="Tiny Buddies" />. The
            process of creating this game was so exhilarating that it sparked a
            deeper passion in me for game development. This led to the idea of
            establishing <strong>Rabbit Tale Studios</strong> in the future.
          </p>
          <h2>The Origin Story: Poker Cats Creations</h2>
          <p>
            The journey began with a simple yet ambitious idea among friends. We
            wanted to pool our talents and resources to bring creative projects
            to life. Forming an LLC was the first step towards making this dream
            a reality. Poker Cats Creations was born out of a shared love for
            creativity and innovation.
          </p>
          <h2>Our First Venture: A Mobile Game</h2>
          <p>
            Our debut project was a mobile game. The experience of developing
            this game was incredibly fulfilling. From brainstorming ideas to
            seeing them come to life on a screen, every step was a learning
            curve and a source of immense joy. This project not only solidified
            our teamwork but also set a strong foundation for our future
            endeavors.
          </p>
          <h2>A Glimpse into the Future: Rabbit Tale Studio</h2>
          <p>
            The success and enjoyment of working on our first game ignited a
            desire to create more games. This led to the conception of{' '}
            <strong>Rabbit Tale Studios</strong>. The idea behind Rabbit Tale
            Studios is to build a dedicated game development studio focused on
            creating engaging and innovative games. We envision a future where
            we can bring even more imaginative ideas to life and share them with
            the world.
          </p>
          <h2>Why Poker Cats Creations?</h2>
          <p>
            You might wonder, why the name Poker Cats Creations? Well, it
            embodies the playful yet strategic nature we aim to bring to our
            projects. Much like a game of poker, our approach involves a mix of
            skill, creativity, and a bit of luck. And the 'Cats' part? We just
            really love cats! (Who doesn't?)
          </p>
          <h2>What’s Next?</h2>
          <p>
            As we continue to work on our first mobile game, we are already
            brainstorming ideas for our next projects under Rabbit Tale Studios.
            Our goal is to create a variety of games that cater to different
            tastes and preferences. We are committed to bringing high-quality
            and enjoyable games to our audience.
          </p>
          <h2>Join Us on This Journey</h2>
          <p>
            We are excited about the future and can't wait to share more of our
            projects with you. Stay tuned for updates on our progress and
            upcoming releases. If you’re as passionate about games as we are,
            consider supporting us through our Patronite. Your support can help
            us bring more creative projects to life and make a lasting impact in
            the world of game development.
          </p>
          <p>
            Thank you for being a part of our journey. Let's create something
            amazing together!
          </p>

          <p>With ❤️,</p>
          <p>— Kris 🐱</p>
        </section>
      </article>
    </Section>
  </Layout>
)

export default Page
