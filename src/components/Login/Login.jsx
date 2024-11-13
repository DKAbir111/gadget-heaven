import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/CreateContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";


export default function Login() {
    const { signInWithGoogle, logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                toast("Successfully signed in,Welcome!")
                navigate('/');
            })
            .catch(error => {
                console.error("Google sign-in failed", error.message)
            })
    }
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                if (!result.user.emailVerified) {
                    setError("Email verification failed")
                    return;
                }
                else {
                    console.log(result)
                    navigate('/');
                    event.target.reset()
                    toast("Successfully signed in,Welcome!")

                }
            })
            .catch(error => {
                console.error("Login failed", error.message)
                setError(error.message)
            })

    }

    return (
        <div className="hero bg-base-100  px-2 py-20">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm  py-12">
                <h3 className="text-lg text-center">Login to <span className="font-semibold">GadgetHeaven</span></h3>
                <form className="card-body py-5" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                        <span className="absolute right-2 top-12 btn btn-xs btn-ghost" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}

                        </span>
                        <label className="label">
                            <Link to='/auth/forgetpassword' className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div><p className="text-center text-xs text-red-500">{error}</p></div>
                    <div className="form-control mt-2">
                        <button className="btn  bg-[#9538e2] text-white hover:bg-[#9538e2]">Login</button>
                    </div>
                </form>
                <div className="px-20 cursor-pointer" onClick={handleGoogleSignIn}>
                    <span className="flex items-center gap-1 border rounded-md p-2 justify-center text-sm hover:bg-base-200"><FcGoogle className="text-2xl" />  Sign in with Google</span>

                </div>
                <p className="mt-4 text-center text-sm">Do not have an account?
                    <Link to='/auth/signup' className="underline font-semibold"> Sign up</Link> </p>
            </div>
        </div>

    )
}
