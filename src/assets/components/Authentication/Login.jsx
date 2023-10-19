import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import auth from "../../../../firebase.config";
import { useState } from "react";
import toast from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";


const Login = () => {
    const [log ,setlog] =useState()
    const { googleSignIn, SignIn } = useContext(AuthContext)
    const [error, setError] = useState()
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const Email = form.Email.value;
        const Password = form.Password.value;


        const user = { Email, Password }
        console.log(user);
        SignIn(Email, Password)
            .then(res => {
                console.log(res);
                console.log(location);
                Swal.fire({
                    title: 'Successful!',
                    text: 'Log in Success',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })

                return navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.error(err);
                setError(err)
                if (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'OK'
                      })
                }
            })
        }
        const handleGoogleSignIn = () => {
            googleSignIn()
                .then(res => {
                    setlog(res)
                    Swal.fire({
                        title: 'Successful!',
                        text: 'Log in Success',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                })
                .catch(error => { setError(error) 
                    Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })})
          

        }

        return (
            <div>
                <div className=" max-w-2xl mx-auto items-center justify-center  p-6  ">
                    <div className="w-full ">
                        <div className="text-3xl font-semibold text-center  mb-6">
                            Log In
                        </div>

                        <div className="bg-[#FCB100]   rounded-lg shadow-xl ">

                            <div className="p-8 ">
                                <form onSubmit={handleLogin} className=" " >
                                    <div className="mb-6 "><label
                                        className="block   text-lg font-semibold mb-2" >
                                        Email
                                    </label>
                                        <input
                                            type="text"
                                            name="Email"
                                            required
                                            className="w-full p-3 borderborder-gray-300 rounded"
                                            placeholder="You@me.com"
                                        /></div>
                                    <div className="mb-6"><label

                                        className="block   text-lg font-semibold mb-2"
                                    >
                                        Password
                                    </label>
                                        <input
                                            type="text"
                                            name="Password"
                                            required
                                            className="w-full p-3 borderborder-gray-300 rounded"
                                            placeholder="Type here..."
                                        /></div>


                                    <div className=" flex justify-center mt-6 ">
                                        <button className="btn lowerCase bg-[#FCB100]" type="submit"> Login</button>
                                    </div>
                                    
                <div className="relative flex justify-center items-center text-sm py-4">
                  <hr className='h-[1px] w-full ' />  <span className="px-2 flex-1"> Or</span><hr className='h-[1px] w-full' />
                </div>
                <div className="mb-6">
                  <button type='submit' onClick={handleGoogleSignIn}
                    className="w-full  my-4 rounded border flex items-center justify-center transition btn lowerCase bg-[#FCB100] duration-300    "
                  >
                    <svg className='' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 48 48">
                      <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                    </svg>
                    <h1>Log in with Google</h1>
                  </button>
                </div>
                                    <p className="py-2  text-center ">Already have an account? Click here to <Link to='/SignUp'><span className="font-bold text-purple-600"> Register </span></Link> </p>

                                </form>

                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="dark"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    };

    export default Login;