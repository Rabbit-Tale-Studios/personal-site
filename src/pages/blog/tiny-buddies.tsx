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
      title: 'Tiny Buddies - New Mobile Pixel Pet Game',
      description: `Discover Tiny Buddies, a new mobile pixel pet game where you care for, play with, and dress up your pet. Learn more about its development and how to support us!`,
    }}
  >
    <Section className="mb-0 mt-20">
      <article className="prose w-full max-w-prose dark:prose-invert prose-headings:font-semibold prose-img:rounded-3xl">
        <header>
          <BackButton />
          <h1 className="animate-fade">
            Tiny Buddies - New Mobile Pixel Pet Game
          </h1>
          <p className="animate-fadeMd">May 26, 2024</p>
        </header>
        <section className="animate-fadeLg">
          <h2>Exciting News: Tiny Buddies is Here!</h2>
          <p>
            Today is the day I've finally found the strength to share our latest
            project with you — <strong>Tiny Buddies</strong>! Tiny Buddies is a
            mobile pixel pet game where you take care of your pet. You can play
            with it, dress it up to your liking, buy new toys, food, and
            clothes, and even decorate its home!
          </p>
          <p>
            The game is still in the very early stages of development, but we
            are closer to releasing version 1.0 than ever. It will be available
            for free on our Patronite. If you're interested in our game and
            would like to support us before its release, you can do so{' '}
            <TextLink
              href="https://patreon.com/TinyBuddies"
              text="here"
              external
            />
            .
          </p>
          <h2>Where Will Patronite Funds Go?</h2>
          <p>
            We're dedicated to making Tiny Buddies the best experience it can
            be, and your support will help us in many areas. Here's how your
            contributions will be used:
          </p>
          <ul>
            <li>Hiring more creative staff, including writers and artists</li>
            <li>Developing intricate and vibrant pixel art</li>
            <li>Designing an intuitive and engaging user interface</li>
            <li>Enhancing game mechanics and features through programming</li>
            <li>
              Providing robust technical support and effective advertising
            </li>
            <li>Creating an immersive soundtrack and sound effects</li>
            <li>Conducting extensive playtesting and user feedback sessions</li>
            <li>
              Implementing additional customization options for pets and homes
            </li>
          </ul>
          <h2>Change Log:</h2>
          <h3>[UI]</h3>
          <ul>
            <li>Fixed the pet change feature in the menu.</li>
            <li>Resolved multiple display bugs.</li>
          </ul>
          <h3>[Physic]</h3>
          <ul>
            <li>Fixed the ball sinking into the ground issue.</li>
            <li>Corrected ball collision calculations with walls and pets.</li>
          </ul>
          <h3>[Sound]</h3>
          <ul>
            <li>Added barking/meowing sounds.</li>
          </ul>
        </section>
      </article>
    </Section>
  </Layout>
)

export default Page
