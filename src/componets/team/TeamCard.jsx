import PropTypes from "prop-types"
import "./Team.css"

const TeamCard = ({passedUser}) => {
  return (
    <div className="card container">
        <h3 ><span className="card-title">Name:</span> {`${passedUser.firstName} ${passedUser.lastname}`}</h3>
        <h4><span className="card-title">Email:</span> {passedUser.email} </h4>
        <h4 ><span className="card-title">Age:</span> {passedUser.age} </h4>
    </div>
  )
}

TeamCard.propTypes = {
  passedUser: PropTypes.shape({
    age: PropTypes.any,
    email: PropTypes.any,
    firstName: PropTypes.any,
    lastname: PropTypes.any
  })
}

export default TeamCard