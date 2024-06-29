import Bullet from './Bullet'

interface Props {
  title: string
  items: string[]
}

export default function SideSection({ title, items }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-xl font-bold">{title}</div>

      <ul className="flex flex-col gap-2 text-neutral-800">
        {items.map((text) => (
          <li key={text}>
            <Bullet />
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}
