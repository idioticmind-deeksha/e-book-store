import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const SignUp = () => {
    return (
        <>
            <div className="flex items-center justify-center flex-col h-screen p-4 ">
                <div className="dark:border-[#ffffff1a] max-w-[800px] min-w-[450px] rounded-md relative">
                    <div className="">
                        <div className="dark:bg-slate-800 dark:text-white modal-box w-full">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:hover:bg-slate-600">✕</Link>
                        </form>
                            <h3 className="font-bold text-lg">Sign Up</h3>
                            <div className="mt-4">
                            <label className="form-control w-full">
                                    <div className="label">
                                        <span className="dark:text-white label-text">User Name</span>
                                    </div>
                                    <input type="email" placeholder="Enter User Name" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full mt-4">
                                    <div className="label">
                                        <span className="dark:text-white label-text">Email</span>
                                    </div>
                                    <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full  mt-4">
                                    <div className="label">
                                        <span className="dark:text-white label-text">Password</span>
                                    </div>
                                    <input type="Password" placeholder="Enter Your Password" className="input input-bordered w-full" />
                                </label>
                                <div className="mt-6 flex justify-between items-center">
                                    <button className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200">Sign Up</button>
                                    <p>Have account? <button onClick={()=> document.getElementById("my_modal_3").showModal()} className="text-blue-500 cursor-pointer underline">Login</button></p>
                             
                                </div>
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;