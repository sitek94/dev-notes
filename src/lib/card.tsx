interface CardProps {
  title: string
  href?: string
  body: string
  date: string
}

export function Card({title, href, body, date}: CardProps) {
  return (
    <li>
      <p className="text-sm text-gray-500">
        <time dateTime={date}>{date}</time>
      </p>
      <a href={href} className="mt-2 block">
        <p className="text-xl font-semibold text-gray-900">{title}</p>
        <p className="mt-3 text-base text-gray-500">{body}</p>
      </a>
      <div className="mt-3">
        <a
          href={href}
          className="text-base font-semibold text-primary-600 hover:text-primary-500"
        >
          Read more
        </a>
      </div>
    </li>
  )
}
