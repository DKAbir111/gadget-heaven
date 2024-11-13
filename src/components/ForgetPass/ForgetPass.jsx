import { sendPasswordResetEmail } from "firebase/auth";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/firebase.init";

export default function ForgetPass() {
    const emailRef = useRef();
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleForgetPassword = (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        if (!email) {
            toast("Enter a valid email address");
            return;
        }

        if (!validateEmail(email)) {
            toast("Please enter a valid email address");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                navigate('/auth/login');
                toast("Password reset email sent successfully to your email address");
            })
            .catch((error) => {
                const errorMessage = error.message || 'Something went wrong. Please try again later.';
                toast(errorMessage);
            });
    };

    return (
        <div className="hero bg-base-100 px-2 py-20">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm py-12">
                <h3 className="text-lg text-center font-semibold">Password Recovery</h3>
                <form className="card-body py-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input
                            type="email"
                            ref={emailRef}
                            placeholder="Enter your email address"
                            name="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control mt-4">
                        <button
                            onClick={handleForgetPassword}
                            className="btn bg-[#9538e2] text-white hover:bg-[#9538e2]"
                        >
                            Send Recovery Code
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-sm">Do not have an account?
                    <Link to='/auth/signup' className="underline font-semibold"> Sign up</Link> </p>
            </div>
        </div>
    );
}
