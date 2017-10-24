const InputForm = ({ id, title, name, value, type = 'text', handleChange }) => (
  <div>
    <label for={id}>{title}</label>
    <input type={type} id={id} name={name} onChange={handleChange} value={value} />
  </div>
)

export default InputForm
