import PropTypes from "prop-types";

function UserGreetings ({isLog = false}) {
    return isLog ? <h2>Welcome Back</h2>: <h2>Please log in</h2>;
}
UserGreetings.propTypes = {
    isLog: PropTypes.bool,
}
export default UserGreetings;