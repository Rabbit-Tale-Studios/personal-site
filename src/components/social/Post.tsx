import { Image, User } from '@nextui-org/react'
import placeholder from 'public/images/placeholder.jpg'
import Button from 'components/Button'
import {
  OutlineBookmark,
  OutlineChat,
  OutlineChevronLeft,
  OutlineChevronRight,
  OutlineHome,
  OutlineMore,
  OutlineRepeat,
  OutlineStar,
  OutlineStars,
  SolidNestAlt,
} from 'icons/Icons'
import { formatNumber } from 'lib/formatNumber'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useClickOutside from 'hooks/useClickOutside'
import { useInView } from 'react-intersection-observer'
import { StaticImageData } from 'next/image'
import Modal from 'components/social/Modal'

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
      'https://pbs.twimg.com/media/F5KYC5XXUAAbFro?format=jpg&name=4096x4096',
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
  const [modalImages, setModalImages] = useState<string[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [currentPostStats, setCurrentPostStats] =
    useState<PostStatsProps | null>(null)

  const handleImageClick = (images: string[], stats: PostStatsProps) => {
    setModalImages(images)
    setCurrentPostStats(stats)
    setModalOpen(true)
  }

  return (
    <React.Fragment>
      {postData.map((post, index) => (
        <Post
          key={index}
          {...post}
          onImageClick={() => handleImageClick(post.images, post.stats)}
        />
      ))}
      {currentPostStats && (
        <Modal
          images={modalImages}
          open={modalOpen}
          setOpen={setModalOpen}
          stats={currentPostStats}
        />
      )}
    </React.Fragment>
  )
}

export interface PostStatsProps {
  hasLiked: boolean
  data: { likes: number; comments: number; reposts: number; views: number }
  className?: string
  iconColor?: string
}

const Post = ({
  user,
  content,
  stats,
  images,
  onImageClick,
}: (typeof postData)[0] & { onImageClick: (image: string[]) => void }) => {
  return (
    <article className="w-full cursor-pointer space-y-4 p-3 transition-colors hover:bg-shark-950/5 max-sm:border-b sm:rounded-2xl">
      <header className="flex items-center">
        <User
          classNames={{
            base: 'flex-1 justify-start',
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
      <PostContent
        content={content}
        images={images}
        onImageClick={onImageClick}
      />
      <PostStats hasLiked={stats.hasLiked} data={stats.data} />
    </article>
  )
}

const PostContent = ({
  content,
  images,
  onImageClick,
}: {
  content: string
  images: string[]
  onImageClick: (images: string[]) => void
}) => {
  const [currentImage, setCurrentImage] = useState(images[0])

  return (
    <div className="mb-2 flex flex-col space-y-2">
      <div className="relative mb-2 overflow-hidden rounded-2xl">
        {images.length > 1 && (
          <React.Fragment>
            <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex h-6 items-center bg-gradient-to-b from-shark-950/50 to-transparent px-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`mx-1 h-0.5 flex-1 rounded-full backdrop-blur-xl ${currentImage === image ? 'bg-shark-50' : 'bg-shark-50/50'}`}
                  // onClick={() => setCurrentImage(image)}
                />
              ))}
            </div>
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-20 flex -translate-y-1/2 items-center justify-between px-4">
              <Button
                onClick={() =>
                  setCurrentImage(
                    images[
                      (images.indexOf(currentImage) - 1 + images.length) %
                        images.length
                    ],
                  )
                }
                className={`pointer-events-auto bg-shark-950/30 text-shark-50 backdrop-blur-xl transition-all duration-300 ease-bounce active:-rotate-12 active:scale-90 sm:hover:!scale-90 sm:active:!-rotate-12 sm:active:!scale-75 sm:group-hover:rotate-0 sm:group-hover:scale-100 sm:group-hover:opacity-100 ${images.indexOf(currentImage) <= 0 ? 'invisible' : ''}`}
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
                className={`pointer-events-auto bg-shark-950/30 text-shark-50 backdrop-blur-xl transition-all duration-300 ease-bounce active:-rotate-12 active:scale-90 sm:hover:!scale-90 sm:active:!rotate-12 sm:active:!scale-75 sm:group-hover:rotate-0 sm:group-hover:scale-100 sm:group-hover:opacity-100 ${images.indexOf(currentImage) >= images.length - 1 ? 'invisible' : ''}`}
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
          fallbackSrc={placeholder.src}
          onClick={() => onImageClick(images)}
          className={`user-select-none w-full object-cover`} //aspect-[${aspectRatio}]
        />
      </div>
      <p>{content}</p>
    </div>
  )
}

export const PostStats = ({
  hasLiked,
  data,
  className,
  iconColor,
}: PostStatsProps) => {
  return (
    <div className={`flex w-full ${className}`}>
      <div className="flex w-1/2 space-x-2">
        <Button
          type={'link'}
          hasIcon
          iconPosition={'left'}
          className={`group relative w-full justify-start overflow-visible ${iconColor}`}
        >
          <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-gold-600 group-hover:before:block group-hover:before:size-8 group-hover:before:bg-gold-600 group-hover:before:opacity-30 group-hover:before:content-['']">
            <OutlineStar size={20} />
          </div>
          <span
            className={`text-sm lining-nums transition-colors group-hover:text-gold-600 ${hasLiked ? 'text-color-star' : ''}`}
          >
            {data.likes !== 0 ? formatNumber(data.likes) : ''}
          </span>
        </Button>
        <Button
          //onClick={onComment}
          type={'link'}
          hasIcon
          iconPosition={'left'}
          className={`group relative w-full justify-start overflow-visible ${iconColor}`}
        >
          <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blue-600 group-hover:before:block group-hover:before:size-8 group-hover:before:bg-blue-600 group-hover:before:opacity-30 group-hover:before:content-['']">
            <OutlineChat size={20} />
          </div>
          <span className="text-sm lining-nums transition-colors group-hover:text-blue-600">
            {data.comments !== 0 ? formatNumber(data.comments) : ''}
          </span>
        </Button>
        <Button
          type={'link'}
          hasIcon
          iconPosition={'left'}
          className={`group relative w-full justify-start overflow-visible ${iconColor}`}
        >
          <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-green-600 group-hover:before:block group-hover:before:size-8 group-hover:before:bg-green-600 group-hover:before:opacity-30 group-hover:before:content-['']">
            <OutlineRepeat size={20} />
          </div>
          <span className="text-sm lining-nums transition-colors group-hover:text-green-600">
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
        <Button
          type={'icon'}
          className={`group relative justify-start overflow-visible ${iconColor}`}
        >
          <div className="relative before:absolute before:inset-1/2 before:size-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transform before:rounded-full before:transition-all group-hover:text-blue-600 group-hover:before:block group-hover:before:size-8 group-hover:before:bg-blue-600 group-hover:before:opacity-30 group-hover:before:content-['']">
            <OutlineBookmark size={20} />
          </div>
        </Button>
        {/* <Button
          type={'icon'}
          className={`hover:bg-blue-600 hover:text-blue-600 ${iconColor}`}
        >
          <OutlineBookmark size={24} />
        </Button> */}
        {/* <Button type={'icon'}>
          <OutlineHome className="icon" size={24} />
        </Button> */}
      </div>
    </div>
  )
}

export default Posts
