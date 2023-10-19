import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;

        const Email = form.Email.value;
        const Password = form.Password.value;
        
       
        const user = { Email,Password}
        console.log(user);
      


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
                                <p className="py-4  text-center ">Already have an account? Click here to <Link to='/SignUp'><span className="font-bold text-purple-600"> Register </span></Link> </p>

                            </form>


                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;