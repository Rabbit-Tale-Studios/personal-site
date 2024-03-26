import Layout from 'components/Layout'
import Section from 'components/Section'
import Tooltip from 'components/Tooltip'
import { OutlineChevronRight } from 'icons/Icons'
import moment from 'moment'
import Link from 'next/link'
import slugify from 'slugify'
import { cn } from 'utils/tw'

const Item = (props: {
  comingSoon?: boolean
  date?: string
  offset?: string
  title: string
}) => (
  <article
    className="reveal w-full animate-revealSm pb-2"
    style={{ animationDelay: props.offset + 's' }}
  >
    <Link
      aria-description={props.title}
      className={cn(
        'text-white-200 bg-shark-950 group flex w-full justify-between rounded-[14px] px-4 py-4 align-baseline shadow-sm transition duration-100',
        {
          'cursor-not-allowed': props.comingSoon,
        },
      )}
      href={
        props.comingSoon ? '' : '/blog/' + slugify(props.title, { lower: true })
      }
    >
      <h2 className="font-medium duration-300 ease-bounce">{props.title}</h2>
      <div
        className={cn(
          'flex translate-x-6 items-center gap-2 transition-transform duration-300 ease-bounce sm:group-hover:translate-x-0',
          { 'sm:group-hover:translate-x-6': props.comingSoon },
        )}
      >
        <p className="text-sm opacity-70">
          {props.date
            ? moment(props.date).format('MMMM D, YYYY')
            : 'xxxxx xx, xxxx'}
        </p>
        <OutlineChevronRight
          size={20}
          className={cn(
            'translate-x-4 opacity-0 transition duration-300 ease-bounce sm:group-hover:translate-x-0 sm:group-hover:opacity-70',
            {
              'sm:group-hover:translate-x-4 sm:group-hover:opacity-0':
                props.comingSoon,
            },
          )}
        />
      </div>
    </Link>
  </article>
)

const Page = () => (
  <Layout>
    <Section>
      <div className="group/tooltip relative w-full">
        <Tooltip text="Coming soon" position="right" />
        <Item title="The Cats Brand" comingSoon />
      </div>

      <Item title="My Design Journey" date="2024-03-26" offset="0.2" />
    </Section>
  </Layout>
)

export default Page
