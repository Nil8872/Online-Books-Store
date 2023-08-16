import { useLoading } from "../context/CustomHook";
import "../index.css"
import gif from "../assets/Double RingNew.gif"

const GlobalLoader = () => {
    const { isLoading } = useLoading();
    console.log(isLoading);
    return (
        <>
            {isLoading && (
                <div className="loading" >
                    {/* <h1 style={{fontSize: "60px"}}>Loading...</h1> */}
                    {/* You can use any loading spinner or effect here */}
                    <img src={gif} alt="loading" />
                </div>
            )}
        </>
    );
};

export default GlobalLoader;
