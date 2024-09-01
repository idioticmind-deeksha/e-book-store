import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal ">
                    <div className="modal-box dark:bg-slate-800 dark:text-white">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:hover:bg-slate-600">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4">
                            <label className="form-control w-full">
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
                                <button className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200">Login</button>
                                <p>Not registered? <Link to="/signup" className="text-blue-500 cursor-pointer underline">Signup</Link></p>                                
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}
export default Login;