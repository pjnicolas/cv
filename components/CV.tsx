import Job from './Job'
import SideSection from './SideSection'

import trEs from '../es.json'
import trEn from '../en.json'

interface Props {
  language: 'es' | 'en'
  printable?: boolean
}

export default function CV({ language, printable }: Props) {
  const tr = {
    en: trEn,
    es: trEs,
  }[language]

  return (
    <main className="flex flex-col gap-8 p-6 lg:p-12 lg:py-[150px] max-w-7xl mx-auto">
      <div className="text-6xl text-center mb-12">
        {tr.name} <span className="font-bold">{tr.surname}</span>
      </div>

      {!printable && (
        <div className="text-center mx-auto relative group">
          {!printable && (
            <div className="w-full absolute h-2 bg-blue-200 bottom-0 -translate-y-1 group-hover:bg-blue-300 transition-colors" />
          )}
          <a href={language === 'en' ? '/es' : '/'} className="relative">
            {tr.changeLanguage}
          </a>
        </div>
      )}

      <div className="text-center max-w-lg mx-auto">{tr.about}</div>

      <div className="flex flex-col gap-12 lg:flex-row pt-8">
        <div className="flex flex-col gap-12 lg:w-[300px] lg:min-w-[300px]">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold">{tr.contact.title}</div>

            <div>{tr.contact.email}</div>

            <div className="relative group w-fit">
              {!printable && (
                <div className="w-full absolute h-2 bg-blue-200 bottom-0 -translate-y-1 group-hover:bg-blue-300 transition-colors" />
              )}
              <a
                href={`https://linked.in/${tr.contact.linkedin}`}
                target="_blank"
                className="relative"
              >
                linked.in/{tr.contact.linkedin}
              </a>
            </div>

            <div className="relative group w-fit">
              {!printable && (
                <div className="w-full absolute h-2 bg-blue-200 bottom-0 -translate-y-1 group-hover:bg-blue-300 transition-colors" />
              )}
              <a
                href={`https://github.com/${tr.contact.github}`}
                target="_blank"
                className="relative"
              >
                github.com/{tr.contact.github}
              </a>
            </div>
          </div>

          <SideSection title={tr.skills.title} items={tr.skills.list} />

          <SideSection
            title={tr.achievements.title}
            items={tr.achievements.list}
          />
        </div>

        <div className="flex flex-col gap-12">
          {tr.jobs.map((job) => (
            <Job key={job.companyName} printable={printable} {...job} />
          ))}
        </div>
      </div>
    </main>
  )
}
