import { MonthDataType } from 'lib/activity/activityTypes'

export const aprilData: MonthDataType[] = [
  {
    month: 3,
    year: 2024,
    days: [
      {
        day: 1,
        type: 'Feature',
        content: [
          //  { type: 'Image', image: tinyBudiesMock },
          {
            type: 'TextBlock',
            text: {
              title: 'Little Secret 🤫',
              body: [
                "I have a little secret project I've been working on for a while now. It's a personal project that I'm really excited about and I can't wait to share it with you all. Stay tuned for more updates!",
              ],
            },
          },
          {
            type: 'LinkButton',
            link: {
              external: true,
              href: '/secret',
              text: 'Check it out',
            },
          },
        ],
      },
      {
        day: 10,
        type: 'Blog',
        content: [
          //  { type: 'Image', image: tinyBudiesMock },
          {
            type: 'TextBlock',
            text: {
              title: 'Blog Update',
              body: [
                "I've just updated my blog page with a new features and improvements. I've added a new filter option that allows you to filter blogs by category. I've also made some design changes to make the page more user-friendly. Check it out and let me know what you think!",
              ],
            },
          },
          {
            type: 'LinkButton',
            link: {
              href: '/blog',
              text: 'Check it out',
            },
          },
        ],
      },
    ],
  },
]
