import React from 'react'; 
 
 
export type GlobalLodingContextType = {
    isLoading : boolean;
    setLoading : React.Dispatch<React.SetStateAction<boolean>>;
}
  
const GlobalLodingContext = React.createContext<GlobalLodingContextType | undefined>({
   isLoading : false,
   setLoading : ()=>{},

});

export default GlobalLodingContext;