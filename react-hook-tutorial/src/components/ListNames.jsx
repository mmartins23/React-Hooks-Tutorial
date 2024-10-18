export default function ListNames({list}) {
    console.log('ListNames component rendered ...')
  return (
    <div>
        <ul>
            {list.map(name => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    </div>
  )
}
