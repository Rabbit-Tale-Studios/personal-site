import Button from 'components/Button'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Tooltip from 'components/Tooltip'
import { OutlineChevronRight } from 'icons/Icons'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import slugify from 'slugify'
import { cn } from 'utils/tw'
import { Skeleton, ScrollShadow } from '@nextui-org/react'

const Item = (props: {
  comingSoon?: boolean
  date?: string
  offset?: string
  title: string
}) => (
  <article
    className="reveal not-prose w-full animate-revealSm pb-2"
    style={{ animationDelay: props.offset + 's' }}
  >
    <Link
      aria-description={props.title}
      className={cn(
        'group flex w-full justify-between rounded-[14px] bg-shark-950 px-4 py-4 align-baseline text-white-200 shadow-sm transition duration-100 dark:bg-white-50 dark:text-shark-800',
        {
          'cursor-not-allowed': props.comingSoon,
        },
      )}
      href={
        props.comingSoon ? '' : '/blog/' + slugify(props.title, { lower: true })
      }
    >
      <div className="flex w-fit overflow-hidden">
        <h2 className="truncate whitespace-nowrap font-medium duration-300 ease-bounce">
          {/* animate-marquee truncate */}
          {props.title}
        </h2>
      </div>
      {/* <h2 className="truncate font-medium duration-300 ease-bounce">
        {props.title}
      </h2> */}
      <div
        className={cn(
          'flex w-1/2 items-center justify-end gap-2 transition-transform duration-300 ease-bounce lg:translate-x-6 lg:group-hover:translate-x-0',
          { 'translate-x-6 lg:group-hover:translate-x-6': props.comingSoon }, //lg:group-hover:translate-x-6
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
            'opacity-70 transition duration-300 ease-bounce lg:translate-x-4 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-70',
            {
              //lg:group-hover:opacity-0
              'opacity-0 lg:group-hover:translate-x-4 lg:group-hover:opacity-0':
                props.comingSoon,
            },
          )}
        />
      </div>
    </Link>
  </article>
)

const Page = () => {
  const [filter, setFilter] = useState('all')

  const blogs = [
    {
      title: 'Life Blogs',
      type: 'life',
      content: (
        <React.Fragment>
          <div className="group/tooltip relative w-full">
            <Tooltip text="Coming soon" position="right" />
            <Item title="The Cats Brand" comingSoon />
          </div>

          <Item
            title="Embracing Quiet Holidays"
            date="2024-03-30"
            offset="0.2"
          />

          <Item title="My Design Journey" date="2024-03-26" offset="0.4" />
        </React.Fragment>
      ),
    },
    {
      title: 'Dev Blogs',
      type: 'dev',
      content: (
        <React.Fragment>
          <div className="group/tooltip relative w-full">
            <Tooltip text="Coming soon" position="right" />
            <Item
              title="Tiny Buddies"
              comingSoon
              // offset={
              //   filter === 'all' && lastFilter === 'life' ? undefined : '0.6'
              // }

              offset={'0.6'}
            />
          </div>
          {/* <Item
            title="My Design Journey"
            date="2024-03-26"
            offset={filter === 'dev' ? '0' : '0.6'}
          /> */}
        </React.Fragment>
      ),
    },
  ]

  const filteredBlogs = blogs.filter(
    (blog) => filter === 'all' || blog.type === filter,
  )

  return (
    <Layout>
      <Section>
        {/* <div className="mb-6 flex w-full animate-revealSm space-x-3 self-start overflow-hidden"> */}
        <ScrollShadow
          orientation="horizontal"
          hideScrollBar
          className="mb-6 max-w-lg animate-revealSm self-start"
        >
          <div className="inline-flex space-x-3 whitespace-nowrap">
            <Button
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'primary' : 'ghost'}
              size="sm"
            >
              All
            </Button>
            <Button
              onClick={() => setFilter('life')}
              variant={filter === 'life' ? 'primary' : 'ghost'}
              size="sm"
            >
              Life Blogs
            </Button>
            <Button
              onClick={() => setFilter('dev')}
              variant={filter === 'dev' ? 'primary' : 'ghost'}
              size="sm"
            >
              Dev Blogs
            </Button>
            {/* <Skeleton className="h-9 w-24 rounded-full bg-shark-950/5" />
            <Skeleton className="h-9 w-24 rounded-full bg-shark-950/5" />
            <Skeleton className="h-9 w-24 rounded-full bg-shark-950/5" /> */}
          </div>
        </ScrollShadow>
        {/* </div> */}
        {filteredBlogs.map((blog, index) => (
          <article key={index} className="prose mb-6 w-full dark:prose-invert">
            <h3 className="animate-revealSm self-start">{blog.title}</h3>
            {blog.content}
          </article>
        ))}
      </Section>
    </Layout>
  )
}

export default Page
