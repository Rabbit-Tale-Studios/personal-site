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
    ],
  },
]
