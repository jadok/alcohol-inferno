const ListAlcohols = ({ list }) => {
  const alcohols = list.map((alcohol) => {
    const k = `${Math.floor(Math.random() * 1000)}_${alcohol.qty}_${alcohol.degree}_${Math.floor(Math.random() * 1000)}`
    return (
      <div key={k}>
        <span key={k}>{alcohol.qty}</span>
        <span key={k}>{alcohol.degree}</span>
      </div>
    )
  })
  return (<ul>{alcohols}</ul>)
}

export default ListAlcohols
