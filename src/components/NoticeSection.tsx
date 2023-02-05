import { For, Show } from 'solid-js'

import NoticeItem from './NoticeItem'
import Spinner from './Spinner'
import fetchNotices from '../utils/fetchNotices'
import onScrollBottom from '../utils/onScrollBottom'

export default function NoticeSection() {
  const { notices, next, loading } = fetchNotices()

  onScrollBottom(next)

  return (
    <section className="mt-12 flex-grow flex">
      <div
        aria-label="Notices"
        className="flex flex-col max-w-2xl w-full mx-auto py-4 bg-white divide-y divide-gray-100 dark:divide-gray-700/50 dark:bg-gray-800"
      >
        <Show when={notices().length > 0} fallback={<Spinner />}>
          <For each={notices()}>{notice => <NoticeItem {...notice} />}</For>
          <Show when={loading()}>
            <span className="inline-flex pt-4">
              <Spinner />
            </span>
          </Show>
        </Show>
      </div>
    </section>
  )
}
