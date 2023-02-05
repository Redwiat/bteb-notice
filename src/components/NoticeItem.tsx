import type { Notice } from '../utils/fetchNotices'
import DownloadButton from './DownloadButton'

export default function NoticeItem(props: Notice) {
  return (
    <div aria-label="Notice" className="flex py-4">
      <div className="flex-grow pl-4">
        <time
          className="flex items-center mb-2 text-gray-500 text-sm"
          datetime={props.date}
        >
          {props.dateInMonth}
          <span className="inline-block mx-2">•</span>
          {props.dateDiffInDay}
        </time>
        <h2 innerHTML={props.title} />
      </div>
      <div className="flex-shrink-0 flex items-center justify-center px-2">
        <DownloadButton href={props.url} />
      </div>
    </div>
  )
}
