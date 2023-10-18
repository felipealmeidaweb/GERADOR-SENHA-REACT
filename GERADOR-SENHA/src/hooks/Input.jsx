import PropTypes from "prop-types"


Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setpasswordSize: PropTypes.func.isRequired
}

export default function Input(props) {
  return (
    <input
      type="number"
      id="passwordSize"
      min={1}
      value={props.passwordSize}
      onChange={(ev) => props.setpasswordSize(+ev.target.value)}
    />
  )
}