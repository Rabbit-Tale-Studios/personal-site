import TextLink from 'components/TextLink'
import { MonthDataType } from 'lib/activity/activityTypes'
import tinyBudiesMock from 'public/images/feb-2024/tiny_buddies_mock.webp'

export const marchData: MonthDataType[] = [
  {
    month: 2,
    year: 2024,
    days: [
      {
        day: 14,
        type: 'Work',
        content: [
          { type: 'Image', image: tinyBudiesMock },

          {
            type: 'TextBlock',
            text: {
              title: 'Tiny Buddies 🐶🐱',
              body: [
                `Today me and my friend `,
                <TextLink
                  href="https://github.com/SquareShox"
                  text="SquareShox"
                  external
                />,
                ` launched a little project called Tiny Buddies. It's a mobile game where you take care of a tiny buddy and help them grow. It's been a blast to work on and I'm excited to see where it goes!`,
              ],
            },
          },
          // {
          //   type: 'LinkButton',
          //   link: {
          //     external: true,
          //     href: '#',
          //     text: 'Check it out',
          //   },
          // },
        ],
      },
      {
        day: 26,
        type: 'Blog',
        content: [
          {
            type: 'TextBlock',
            text: {
              title: 'New personal site 🎉',
              body: `If you're reading this... thank you! Happy to have you here in my little corner of the internet and I hope you're enjoying yourself. I have plenty more coming and hope you'll stick around ❤️`,
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: false,
              href: '/blog/my-design-journey',
              text: 'Read more',
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: false,
              href: '/404',
              text: 'Check 404 page',
            },
          },
        ],
      },
    ],
  },
]
