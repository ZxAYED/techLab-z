import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

;

const SignUp = () => {
   const {createUser}=useContext(AuthContext);
   const [users,setUsers]=useState(null)
   const [error, setError]=useState()
        const handleSignUp = (e) => {
            e.preventDefault();
    
            const form = e.target;
          
            const Email = form.Email.value;
            const Password = form.Password.value;
            if(/^(?=.*[A-Z])(?=.*[\W_]).{7,}$/.test(Password)
            ){
                return Swal.fire({
                    title: 'Error!',
                    text: 'The password is less than 6 characters or dont have a capital letter or dont have a special character',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
            }
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
                    setUsers(data)
                   
                        Swal.fire({
                            title: 'Success!',
                            text: 'Successfully added a new user',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          })
                          .catch(err=>{console.error(err)
                            setError(err)
                            Swal.fire({
                                title: 'Error!',
                                text: error.message,
                                icon: 'error',
                                confirmButtonText: 'OK'
                              })})
                
                    
                    

                })
            })
            .catch(err=>{console.error(err)
            setError(err)
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'OK'
              })})


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
                                        <p>(The password must contains more than 6 characters or atleast have a capital letter or  have a special character)</p>
    
    
                                    <div className=" flex justify-center mt-6 ">
                                        <button className="btn lowerCase bg-[#FCB100]" type="submit"> Sign Up</button>
                                    </div>
                                    <p className="py-4  text-center ">Already have an account? Click here to <Link to='/Login'><span className="font-bold text-purple-600"> Log In </span></Link> </p>
    
                                </form>
    
    
                            </div>
    
                        </div>
                    </div>
                </div>
            </div >
        );
    };
export default SignUp;