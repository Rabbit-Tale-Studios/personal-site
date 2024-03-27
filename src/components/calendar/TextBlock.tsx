import Twemoji from 'react-twemoji'

const TextBlock = (props: { data: any }) => {
  return (
    <li className="mx-2 flex flex-col rounded-[18px] bg-white-50 p-4 font-medium dark:bg-shark-950">
      <Twemoji options={{ className: 'emoji' }}>
        <h2 className="mb-2 text-xl font-extrabold text-shark-950 dark:text-zinc-200">
          {props.data.title}
        </h2>
        <p className="text-pretty text-shark-600 dark:text-zinc-400">
          {props.data.body}
        </p>
      </Twemoji>
    </li>
  )
}

export default TextBlock
