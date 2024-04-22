import Twemoji from 'react-twemoji'

const TextBlock = (props: { data: any; themeData: any }) => {
  return (
    <li
      key={props.data.id}
      className={`mx-2 flex flex-col rounded-[18px] bg-white-50 p-4 font-medium dark:bg-shark-950 ${['Work', 'Life', 'Misc'].includes(props.themeData ?? '') ? '!bg-shark-950 dark:!bg-white-50' : ''}`}
    >
      {/* <Twemoji key={0} options={{ className: 'emoji' }}> */}
      <h2
        className={`mb-2 text-xl font-extrabold text-shark-950 dark:text-shark-50 ${['Work', 'Life', 'Misc'].includes(props.themeData ?? '') ? '!text-shark-50 dark:!text-shark-950' : ''}`}
      >
        {props.data.title}
      </h2>
      <p
        className={`text-pretty text-shark-600 dark:text-shark-300 ${['Work', 'Life', 'Misc'].includes(props.themeData ?? '') ? '!text-shark-300 dark:!text-shark-600' : ''}`}
      >
        {props.data.body}
      </p>
      {/* </Twemoji> */}
    </li>
  )
}

export default TextBlock
