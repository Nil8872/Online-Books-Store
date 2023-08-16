import React, {createContext, ReactNode, useState, useEffect} from 'react'
import {toast, ToastOptions} from 'react-toastify'
import { useLoading } from './CustomHook';


const toastStyles: ToastOptions<{
    position: string;
    autoClose: number;
    closeOnClick: boolean;
    pauseOnHover: boolean;
    draggable: boolean;
    theme: string;
  }> = {
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  type Category = {
    name:string;
    _id: string;
  }

  type CategroryContext = {
    categories : Category[],
    deleteCategory : (id:string)=>void;
    updateCategory : (id:string, name:string)=>void;
    addCategory : (name:string)=>void;
  }

export const CategoryContext = createContext<CategroryContext | undefined>(undefined)

 
type CategoryProps = {
    children : ReactNode
}

const  CategoryProvider: React.FC<CategoryProps> = ({children}) => {

    const [categories, setCategories] = useState([]);
    const {setLoading} = useLoading();

    const getAllCategories = async() =>{
        
        try {
            setLoading(true);
           const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/all`, {method: 'GET'})
           const data = await result.json();
           if(data.success === true) {
               setCategories(data.categories);
            }
            else{
                toast.error(data.message, {theme: "colored"})
            }
             
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!", {theme:"colored"})
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getAllCategories();
    },[])

    const deleteCategory = async(id: string) =>{

         try {
            setLoading(true);
            const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/${id}`, {method: 'DELETE'})
            const data = await result.json();
            if(data.success === true) {
                toast.error(data.message, toastStyles);
                getAllCategories();
            }
            else{
                toast.error(data.message, toastStyles);
            }
            
         } catch (error) {
            console.log(error);
            toast.error("Something went wrong", toastStyles);
         }finally{
            setLoading(false);
         }
    }

    const addCategory = async(name:string) =>{
        const options = {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({name})
        }
        try {
            setLoading(true);
            const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category`, options);
            const data = await result.json();
            if(data.success === true) {
                toast.success(data.message, toastStyles);
                getAllCategories();
            }
            else{
                toast.error(data.message, toastStyles)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong", toastStyles);
        }
        finally{
            setLoading(false);
        }
    }

    const updateCategory = async(id:string, name:string) =>{
        // console.log(name);
        const options = {
            method: 'PUT',
            headers: {"content-type": "application/json"},
            body: JSON.stringify({name})
        }
        try {
            setLoading(true);
            const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/category/${id}`, options)
            const data = await result.json();
            if(data.success === true) {
                console.log(data)
                toast.success(data.message, toastStyles);
                getAllCategories();
            }else{
                toast.error(data.message, toastStyles)
            }
            
         } catch (error) {
            console.log(error);
            toast.error("Something went wrong ", toastStyles)
         }
         finally{
            setLoading(false);
         }
    }
    


  return (
    <CategoryContext.Provider value={{categories, deleteCategory, addCategory,updateCategory}}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider
