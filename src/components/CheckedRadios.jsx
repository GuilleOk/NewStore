// eslint-disable-next-line react/prop-types
const CheckedRadios = ({text, name, handleChange}) => {
  return (
    <div className="form-check">
      <label className="form-check-label">
        <input className="form-check-input"
          type="radio"
          name={name}
          value={text}
          onChange={handleChange}
        />
        {text}
      </label>
    </div>
  )
}

export default CheckedRadios