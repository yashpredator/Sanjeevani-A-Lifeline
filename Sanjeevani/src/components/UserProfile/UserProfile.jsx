import React from 'react'
import { useAuth } from "../../store/auth";

function UserProfile() {

    const {user} = useAuth();

    return (
        <div className="flex justify-center items-center overflow-auto overflow-y-auto bg-pink-300">
            <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
            <div className='flex flex-row justify-center overflow-auto -mt-1'>
                    
                    <img className="size-16" src='./Images/logo.png'/>
                    
                </div>
                <h2 className="text-3xl mb-6 mt-5 ml-16">Welcome New User</h2>
                
                <form>
               
                    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={user.name} id="last-name" type="text" placeholder="Last Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" value={user.email} type="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sex">
                            Sex
                        </label>
                        <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sex">
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                     <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                            Age
                        </label>
                        <input value={user.age} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="Age" />
                    </div>
                    <div className="mb-4">
                       
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="House No">
                            House No:
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="House No" type="text" placeholder="House No:" />
                    </div>
                    <div className="mb-4">
                       
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Locality">
                         Locatlity
                     </label>
                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Locality" type="text" placeholder="Locality" />
                 </div>
                 <div className="mb-4">
                       
                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="City">
                            City
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="City" type="text" placeholder="City" />
                    </div>
                    <div className="mb-4">
                       
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="State">
                         State
                     </label>
                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="State" type="text" placeholder="State" />
                 </div>
                 <div className="mb-4">
                       
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PinCode">
                        Pin Code:
                     </label>
                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Pin Code" type="text" placeholder="Pin Code" />
                 </div>
                 <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile-pic">
                            Profile Picture
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="profile-pic"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                console.log(file); // You can use this file for further processing
                            }}
                        />
                    </div>
                
                
                   
                   
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
  
}

export default UserProfile
