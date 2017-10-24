const SelectForm = ({ id, name, handleChange, options, title, value }) => {
  const listoptions = options.map((o) => {
    if (value === o.value) {
      return <option key={`gender_${o.value}`} value={o.value} default>{o.text}</option>
    }
    return <option key={`gender_${o.value}`} value={o.value}>{o.text}</option>
  })
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <select id={id} name={name} onChange={handleChange}>
        {listoptions}
      </select>
    </div>
  )
}

export default SelectForm
