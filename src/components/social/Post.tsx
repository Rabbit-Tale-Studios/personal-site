import { Image, User } from '@nextui-org/react'
import Button from 'components/Button'
import {
  OutlineBookmark,
  OutlineChat,
  OutlineChevronLeft,
  OutlineChevronRight,
  OutlineHome,
  OutlineMore,
  OutlineStars,
  SolidNestAlt,
} from 'icons/Icons'
import { formatNumber } from 'lib/formatNumber'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// function getRandomNumber(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

const postData = [
  {
    user: {
      name: 'Hasira',
      description: '@Hasiradoo',
      avatarSrc:
        'https://pbs.twimg.com/profile_images/1777614638261080064/H9iQD24q_400x400.jpg',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc sollicitudin lacinia.',
    stats: {
      hasLiked: false,
      data: {
        likes: 1_233,
        comments: 10_666,
        reposts: 644_666,
        views: 422_345,
      },
    },
    images: [
      'https://kris.starowl.social/og.png',
      'public/images/placeholder.jpg',
      'public/images/jan-2024/spltjs.jpg',
      'public/images/feb-2024/solarpunk.jpg',
      'public/images/feb-2024/ob-theme-switcher.jpg',
    ],
  },
  {
    user: {
      name: 'User',
      description: '@User_id',
      avatarSrc:
        'https://pbs.twimg.com/profile_images/1777614638261080064/H9iQD24q_400x400.jpg',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc sollicitudin lacinia.',
    stats: {
      hasLiked: false,
      data: {
        likes: 634,
        comments: 34,
        reposts: 0,
        views: 0,
      },
    },
    images: [
      'https://pbs.twimg.com/profile_images/1777614638261080064/H9iQD24q_400x400.jpg',
      'https://kris.starowl.social/og.png',
    ],
  },
  {
    user: {
      name: 'User',
      description: '@User_id',
      avatarSrc:
        'https://pbs.twimg.com/profile_images/1777614638261080064/H9iQD24q_400x400.jpg',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc sollicitudin lacinia.',
    stats: {
      hasLiked: false,
      data: {
        likes: 2,
        comments: 1_234,
        reposts: 5_555_555,
        views: 0,
      },
    },
    images: ['https://kris.starowl.social/og.png'],
  },
  // Add more post data here...
]

const Posts = () => {
  return postData.map((post, index) => <Post key={index} {...post} />)
}

interface PostStatsProps {
  hasLiked: boolean
  data: { likes: number; comments: number; reposts: number; views: number }
}

const Post = ({ user, content, stats, images }: (typeof postData)[0]) => {
  return (
    <article className="w-full cursor-pointer space-y-4 rounded-2xl p-3 transition-colors hover:bg-shark-950/5">
      <header className="flex items-center">
        <User
          classNames={{
            base: 'flex-1 justify-start',
            wrapper: 'max-xl:hidden',
            name: 'text-sm font-bold',
            description: 'text-sm',
          }}
          name={user.name}
          description={
            <Link href={`https://twitter.com/${user.description.slice(1)}`}>
              {user.description}
            </Link>
          }
          avatarProps={{
            name: user.name,
            src: user.avatarSrc,
            showFallback: true,
            fallback: <SolidNestAlt size={24} />,
          }}
        />
        <Button type={'icon'}>
          <OutlineMore size={24} />
        </Button>
      </header>
      <main>
        <PostContent content={content} images={images} />
        <PostStats hasLiked={stats.hasLiked} data={stats.data} />
      </main>
    </article>
  )
}

const PostContent = ({
  content,
  images,
}: {
  content: string
  images: string[]
}) => {
  const [currentImage, setCurrentImage] = useState(images[0])
  // const [aspectRatio, setAspectRatio] = useState('16/9')

  // useEffect(() => {
  //   const img = new window.Image()
  //   img.onload = () => {
  //     setAspectRatio(`${img.width}/${img.height}`)
  //   }
  //   img.src = currentImage
  // }, [currentImage])

  return (
    <div className="mb-2 flex flex-col space-y-2">
      <div className="relative mb-2 overflow-hidden rounded-2xl">
        {images.length > 1 && (
          <React.Fragment>
            <div className="absolute left-0 right-0 top-0 z-10 flex h-8 items-center bg-gradient-to-b from-shark-950/50 to-transparent px-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`mx-1 h-1 flex-1 rounded-full backdrop-blur-xl ${currentImage === image ? 'bg-shark-50' : 'bg-shark-50/50'}`}
                  onClick={() => setCurrentImage(image)}
                />
              ))}
            </div>
            <div className="absolute left-0 right-0 top-1/2 z-10 flex items-center justify-between px-4">
              <Button
                onClick={() =>
                  setCurrentImage(
                    images[
                      (images.indexOf(currentImage) - 1 + images.length) %
                        images.length
                    ],
                  )
                }
                className="bg-shark-950/30 text-shark-50 backdrop-blur-xl"
                type={'icon'}
              >
                <OutlineChevronLeft size={24} />
              </Button>
              <Button
                onClick={() =>
                  setCurrentImage(
                    images[(images.indexOf(currentImage) + 1) % images.length],
                  )
                }
                type={'icon'}
                className="bg-shark-950/30 text-shark-50 backdrop-blur-xl"
              >
                <OutlineChevronRight size={24} />
              </Button>
            </div>
          </React.Fragment>
        )}
        <Image
          src={currentImage}
          alt="Post image"
          width={1920}
          height={1080}
          fallbackSrc="public/images/placeholder.jpg"
          className={`-z-10 w-full object-cover`} //aspect-[${aspectRatio}]
        />
      </div>
      <p>{content}</p>
    </div>
  )
}

const PostStats = ({ hasLiked, data }: PostStatsProps) => {
  return (
    <div className="flex w-full">
      <div className="flex w-1/2 space-x-2">
        <Button
          type={'link'}
          hasIcon
          iconPosition={'left'}
          className="group relative w-full justify-start overflow-visible"
        >
          <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blue-500 group-hover:before:block group-hover:before:size-10 group-hover:before:bg-blue-500 group-hover:before:opacity-30 group-hover:before:content-['']">
            <OutlineHome size={24} />
          </div>
          <span
            className={`lining-nums transition-colors group-hover:text-blue-500 ${hasLiked ? 'text-color-star' : ''}`}
          >
            {data.likes !== 0 ? formatNumber(data.likes) : ''}
          </span>
        </Button>
        <Button
          //onClick={onComment}
          type={'link'}
          hasIcon
          iconPosition={'left'}
          className="group relative w-full justify-start overflow-visible"
        >
          <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blue-500 group-hover:before:block group-hover:before:size-10 group-hover:before:bg-blue-500 group-hover:before:opacity-30 group-hover:before:content-['']">
            <OutlineHome size={24} />
          </div>
          <span className="lining-nums transition-colors group-hover:text-blue-500">
            {data.comments !== 0 ? formatNumber(data.comments) : ''}
          </span>
        </Button>
        <Button
          type={'link'}
          hasIcon
          iconPosition={'left'}
          className="group relative w-full justify-start overflow-visible"
        >
          <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blue-500 group-hover:before:block group-hover:before:size-10 group-hover:before:bg-blue-500 group-hover:before:opacity-30 group-hover:before:content-['']">
            <OutlineHome size={24} />
          </div>
          <span className="lining-nums transition-colors group-hover:text-blue-500">
            {data.reposts !== 0 ? formatNumber(data.reposts) : ''}
          </span>
        </Button>
        {/* <Button
          type={'link'}
          hasIcon
          iconPosition={'left'}
          className="group relative w-full justify-start overflow-visible"
        >
          <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blue-500 group-hover:before:block group-hover:before:size-10 group-hover:before:bg-blue-500 group-hover:before:opacity-30 group-hover:before:content-['']">
            <OutlineHome size={24} />
          </div>
          <span className="lining-nums transition-colors group-hover:text-blue-500">
            {data.views !== 0 ? formatNumber(data.views) : ''}
          </span>
        </Button> */}
      </div>
      <div className="flex w-full flex-1 justify-end">
        <Button type={'icon'}>
          <OutlineBookmark className="icon" size={24} />
        </Button>
        {/* <Button type={'icon'}>
          <OutlineHome className="icon" size={24} />
        </Button> */}
      </div>
    </div>
  )
}

export default Posts
