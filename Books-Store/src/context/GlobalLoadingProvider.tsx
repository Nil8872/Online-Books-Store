import React,{ReactNode, useState} from 'react'
import GlobalLodingContext from './GlobalLoadingContext';
 


type GlobalLoadingProviderProps = {
    children: ReactNode;
}

const  GlobalLoadingProvider : React.FC<GlobalLoadingProviderProps> = ({children})  =>{

    const [isLoading, setLoading] = useState<boolean>(false);



  return (
    <GlobalLodingContext.Provider value={{isLoading, setLoading}}>
      {children}
    </GlobalLodingContext.Provider>
  )
}

export default GlobalLoadingProvider
