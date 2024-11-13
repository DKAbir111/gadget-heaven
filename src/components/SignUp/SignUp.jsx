import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/CreateContext";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { toast } from "react-toastify";
import PageTitle from "../PageTitle/PageTitle";


export default function SignUp() {
    const { createUser, logOut } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Password verification regex
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        // Basic validations
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        } else if (!passwordRegex.test(password)) {
            setError("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

        try {

            createUser(name, email, password)
                .then(result => {
                    console.log(result)
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            setSuccess("Verification email sent please check.");
                            event.target.reset();
                            logOut();
                            navigate('/auth/login')
                            toast("Verification email sent please check")

                        })
                })
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="hero bg-base-100  px-2 py-20">
            <PageTitle title="Signup" />
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm  py-12">
                <h3 className="text-lg text-center">Create your account</h3>
                <form className="card-body py-5" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Full name" name="name" className="input input-bordered" required />
                    </div>
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
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                        <span className="absolute right-2 top-12 btn btn-xs btn-ghost" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}

                        </span>
                    </div>
                    <div>
                        {
                            error ? <p className="text-red-500 text-xs text-center">{error}</p> :
                                <p className="text-green-500 text-xs text-center">{success}</p>
                        }
                    </div>

                    <div className="form-control mt-2">
                        <button className="btn  bg-[#9538e2] text-white hover:bg-[#9538e2]">Login</button>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm">Already have an account?
                    <Link to='/auth/login' className="underline font-semibold"> Sign in</Link> </p>
            </div>
        </div>
    )
}
