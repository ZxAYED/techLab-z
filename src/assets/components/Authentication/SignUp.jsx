import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";

;

const SignUp = () => {
   const {createUser}=useContext(AuthContext);

        const handleSignUp = (e) => {
            e.preventDefault();
    
            const form = e.target;
    
            const Email = form.Email.value;
            const Password = form.Password.value;
            const Image = form.Image.value;
            const Name = form.Name.value;
            
            createUser(Email,Password)
            .then(res=>{

                const user ={Email}
                fetch('http://localhost:5001/users',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.InsertedId){
                        Swal.fire({
                            title: 'Success!',
                            text: 'Successfully added a new user',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                })
            })
            .catch(err=>console.error(err))


            const user = { Email,Password,Image,Name}
            console.log(user);
          
    
    
        }
        return (
            <div>
                <div className=" max-w-2xl mx-auto items-center justify-center  p-6  ">
                    <div className="w-full ">
                        <div className="text-3xl font-semibold text-center  mb-6">
                           Registration form
                        </div>
    
                        <div className="bg-[#FCB100]   rounded-lg shadow-xl ">
    
                            <div className="p-8 ">
                                <form onSubmit={handleSignUp} className=" " >
                                    <div className="mb-6 "><label
                                        className="block   text-lg font-semibold mb-2" >
                                      User name
                                    </label>
                                        <input
                                            type="text"
                                            name="Name"
                                            required
                                            className="w-full p-3 borderborder-gray-300 rounded"
                                            placeholder="Name"
                                        /></div>
                                    <div className="mb-6 "><label
                                        className="block   text-lg font-semibold mb-2" >
                                     Image URL
                                    </label>
                                        <input
                                            type="text"
                                            name="Image"
                                            required
                                            className="w-full p-3 borderborder-gray-300 rounded"
                                            placeholder="Image URL"
                                        /></div>
                                    <div className="mb-6 "><label
                                        className="block   text-lg font-semibold mb-2" >
                                     Email
                                    </label>
                                        <input
                                            type="text"
                                            name="Email"
                                            required
                                            className="w-full p-3 borderborder-gray-300 rounded"
                                            placeholder="you@me.com"
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
    
    
                                </form>
    
    
                            </div>
    
                        </div>
                    </div>
                </div>
            </div >
        );
    };
export default SignUp;