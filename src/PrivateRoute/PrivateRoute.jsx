import { useContext } from "react"
import { AuthContext } from "../Context/CreateContext"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"


export default function PrivateRoute({ children }) {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-cente mt-20">
            <span className="loading loading-bars loading-md r bg-[#9538e2]"></span>
        </div>

    }
    if (user) {
        return children
    }
    return (
        <div>
            <Navigate to='/auth/login'></Navigate>
        </div>
    )
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}