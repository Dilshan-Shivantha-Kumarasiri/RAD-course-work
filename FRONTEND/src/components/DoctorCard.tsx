import React from "react";
import {useNavigate} from "react-router-dom";

export default function DoctorCard():React.JSX.Element{
    const navigate = useNavigate();

    return(
        <>
            <div className={"w-full px-5 doctor-card flex justify-between"}>
                <div className={"flex  p-5"}>
                    <div className={"mr-5 flex items-center justify-center border rounded-full w-[80px] h-[80px]"}>
                        <img className={"rounded-full  w-full h-full"} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt=""/>
                    </div>
                    <div className={"flex py-3 justify-between flex-col"}>
                        <p className={"font-bold text-[#1a8efd] text-[19px]"}>Dr sudath Innamaluwa</p>
                        <p className={"text-gray-500 text-[15px]"}>ABDOMEN/K.U.B</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-2 justify-center"}>
                    <button className={" duration-300 hover:text-white hover:bg-[#1a8efd] p-1 border-[2px] border-[#1a8efd]"}> View Profile </button>

                    <button onClick={ () => navigate("/sessions/", {state:{}})} className={" duration-300 hover:text-black hover:bg-white p-1 border-[2px] border-[#1a8efd] text-white bg-[#1a8efd]"}> Book Now </button>
                </div>
            </div>
        </>
    );
}