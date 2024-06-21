// import { getUsers } from "../utils";
// import { useState, useEffect } from "react";
// export const useGetUsers = () => {
//     const [users, setUsers] = useState([]);
//     const  [errors, setErrors] = useState('');
//     const [loading, setLoading] = useState(false);
//     useEffect(()=>{
//         const fetchUsers = async () => {
//             try {
//                 setLoading(true);
//                 const response = await getUsers();
//                 setUsers(response.users);
//                 setLoading(false);
//             }
//             catch(error){
//                 setLoading(false)
//                 setErrors(`Error: ${error.message}`)
//             }
//         }
//         fetchUsers();
//     },[])
//     return{users, loading, errors}
// }

import { getUsers } from "../util"
import { useEffect, useState } from "react"
export const useGetUsers = () => {
    const [users , setUsers] = useState([]);
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false)
    useEffect(() => {
        const fetchUsers  = async () => {
            try{
                setLoading(true);
                const result = await getUsers();
                console.log({result});
                setUsers(result.users);
                setLoading(false);
            }
            catch(error){
                setError(`Error:${error.message}`)
                setLoading(false);
            }
        }
        fetchUsers();
    },[]);
    return {users , error , loading}
}










