const SelectForm = ({ id, name, options, handleChange, value }) => {
  const listoptions = options.map((o) => {
    if (value === o.value) {
      return <option key={`gender_${o.value}`} value={o.value} default>{o.text}</option>
    }
    return <option key={`gender_${o.value}`} value={o.value}>{o.text}</option>
  })
  return (
    <div>
      <select id={id} name={name} onChange={handleChange}>
        {listoptions}
      </select>
    </div>
  )
}

export default SelectForm
