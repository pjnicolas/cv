interface Props {
  companyName: string
  title: string
  startDate?: string
  endDate?: string
  personalProject?: boolean
  location: string
  href?: string
  description: string[]
  printable?: boolean
}

export default function Job({
  companyName,
  title,
  startDate,
  endDate,
  location,
  description,
  href,
  personalProject,
  printable,
}: Props) {
  return (
    <div className="relative">
      <div
        className={`flex flex-col rounded border-l-0
          ${personalProject ? 'border-orange-200' : 'border-blue-200'}
        `}
      >
        <div className="flex flex-row items-baseline justify-between">
          <div className="flex flex-col lg:flex-row text-xl font-bold">
            <div className="">{title}&nbsp;</div>
            <div className="relative group w-fit">
              {href ? (
                <>
                  {!printable && (
                    <div className="w-full absolute h-2 bg-blue-200 bottom-0 -translate-y-1 group-hover:bg-blue-300 transition-colors" />
                  )}
                  <a
                    href={href}
                    target="_blank"
                    className={
                      personalProject
                        ? 'relative text-orange-600'
                        : 'relative text-blue-700'
                    }
                  >
                    {companyName}
                  </a>
                </>
              ) : (
                <div
                  className={
                    personalProject
                      ? 'relative text-orange-600'
                      : 'relative text-blue-700'
                  }
                >
                  {companyName}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-2 text-neutral-500">
          <div className="flex gap-2">
            <div>{startDate}</div>
            {endDate && <div>-</div>}
            {endDate && <div>{endDate}</div>}
          </div>

          {location && <div className="hidden lg:block">|</div>}
          {location && <div>{location}</div>}
        </div>

        <ul className="mt-4 flex flex-col gap-2 text-neutral-800">
          {description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </ul>
      </div>
    </div>
  )
}
