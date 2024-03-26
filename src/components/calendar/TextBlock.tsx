import Twemoji from 'react-twemoji'

const TextBlock = (props: { data: any }) => {
  return (
    <li className="bg-white-50 mx-2 flex flex-col rounded-[18px] p-4 font-medium dark:bg-zinc-900">
      <Twemoji options={{ className: 'emoji' }}>
        <h2 className="text-shark-950 mb-2 text-xl font-extrabold dark:text-zinc-200">
          {props.data.title}
        </h2>
        <p className="text-shark-600 text-pretty dark:text-zinc-400">
          {props.data.body}
        </p>
      </Twemoji>
    </li>
  )
}

export default TextBlock
