import Button from 'components/Button'
import Layout from 'components/Layout'
import Section from 'components/Section'
import Tooltip from 'components/Tooltip'
import { OutlineChevronRight } from 'icons/Icons'
import moment from 'moment'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
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
          {props.title}
        </h2>
      </div>
      <div
        className={cn(
          'flex w-1/2 items-center justify-end gap-2 transition-transform duration-300 ease-bounce lg:translate-x-6 lg:group-hover:translate-x-0',
          { 'translate-x-6 lg:group-hover:translate-x-6': props.comingSoon },
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
  const [key, setKey] = useState(0)
  const [lastFilter, setLastFilter] = useState('all')

  useEffect(() => {
    setKey((prevKey) => prevKey + 1)
    setLastFilter(filter)
  }, [filter])

  const blogs = [
    {
      title: 'Life Blogs',
      type: 'life',
      content: [
        { title: 'Our Tiny Company', date: '2024-05-26' },
        { title: 'Embracing Quiet Holidays', date: '2024-03-30' },
        { title: 'My Design Journey', date: '2024-03-28' },
      ],
    },
    {
      title: 'Dev Blogs',
      type: 'dev',
      content: [
        { title: 'Rabbit Hole Social', comingSoon: true },
        { title: 'Tiny Buddies', date: '2024-05-26' },
      ],
    },
  ]

  const getFilteredBlogs = () => {
    return blogs
      .filter((blog) => filter === 'all' || blog.type === filter)
      .map((blog) => ({
        ...blog,
        content: blog.content.map((item, index) => {
          let offset = '0'
          if (filter === 'all') {
            offset =
              blog.type === 'dev' ? `${0.6 + index * 0.2}` : `${index * 0.2}`
          } else {
            offset = `${index * 0.2}`
          }
          return {
            ...item,
            offset: offset,
          }
        }),
      }))
  }

  return (
    <Layout>
      <Section>
        <ScrollShadow
          orientation="horizontal"
          hideScrollBar
          className="mb-6 max-w-lg animate-revealSm self-start"
        >
          <div className="inline-flex space-x-2 whitespace-nowrap">
            <Button
              text="All"
              onClick={() => setFilter('all')}
              variant={filter === 'all' ? 'primary' : 'ghost'}
              size="sm"
            />
            <Button
              text="Life Blogs"
              onClick={() => setFilter('life')}
              variant={filter === 'life' ? 'primary' : 'ghost'}
              size="sm"
            />
            <Button
              text="Dev Blogs"
              onClick={() => setFilter('dev')}
              variant={filter === 'dev' ? 'primary' : 'ghost'}
              size="sm"
            />
          </div>
        </ScrollShadow>
        {getFilteredBlogs().map((blog, index) => (
          <article
            key={`${key}-${index}`}
            className="prose mb-6 w-full dark:prose-invert"
          >
            <h3 className="animate-revealSm self-start">{blog.title}</h3>
            {blog.content.map((item, idx) => (
              <Item key={`${key}-${idx}`} {...item} />
            ))}
          </article>
        ))}
      </Section>
    </Layout>
  )
}

export default Page
