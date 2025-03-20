
import  desktopDivider from "../images/pattern-divider-desktop.svg";
import  mobileDivider from "../images/pattern-divider-mobile.svg";
import dice from "../images/icon-dice.svg";
import { useState,useEffect } from "react";


const Card= () => {
    
  
   
   const[data,setData]=useState<any>()
   let adviceObj:any;
   let url='https://api.adviceslip.com/advice'
   
    





const FetchAPI=(url:string):any=>{

                   
                        fetch(url)
                            .then((response) => {
                                
                                if(response.ok){
                                    return response.json()
                                }   
                                else{
                                    console.error('Something went wrong')
                                    return
                                }
                            
                            })
                            .then((data) => {
                                setData(data)
                                console.log(data)
                                return data
                            })
                            .catch((error) => {
                                console.error('Error:', error)
                            })
                        
    }

   
    useEffect(() => {

        FetchAPI(url)

    }, [])   
    
    if(data){
        adviceObj={...data}
    }else{
        adviceObj={slip:{id:0,advice:'no advice to give yet'}}
    }
    

    return(

        <div id="card" className="bg-[rgba(49,58,73,255)] flex flex-col p-[20px] overflow-hidden items-center rounded-sm justify-center w-[75%] mx-auto h-[320px]" >


            <div id='content' className="mb-8 flex flex-col items-center justify-center p-4">
                <h1 className="text-[rgba(255,255,255,255)] text-[18px]">Advice #{adviceObj.slip.id}</h1>
                <br/>
                <p>{adviceObj.slip.advice}</p>
            </div>



            <br/>

            <div className="mt-8 " >
                <img 
                    src={mobileDivider } 
                  
                    alt="divider" 
                    className={`
                        w-[95%]
                        sm:w-[95%]
                        md:hidden
                        lg:hidden
                        xl:hidden
                        2xl:hidden
                        `}
                    />



                <img 
                    src={desktopDivider } 
                   
                    alt="divider" 
                    className={
                        `hidden
                        sm:hidden
                        md:block w-[95%]
                        lg:block w-[95%]
                        xl:block w-[95%]
                        2xl:block w-[95%]
                        
                        `}

                        
                    />
            </div>
            <br/>
            <div className="bg-[#52feaa] opacity-75 w-[50px] h-[50px] mr-[10px]  cursor-pointer absolute bottom-[110px] rounded-full py-[15px] hover:shadow-2xl shadow-white opacity-100" onClick={()=>FetchAPI(url)}>
                 <img src={dice} alt="dice" className="w-[20px] mx-auto   h-[20px] " />
            </div>
           
        </div>



    )
}

export default Card;