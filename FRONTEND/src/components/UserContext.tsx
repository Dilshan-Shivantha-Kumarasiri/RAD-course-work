// import {useEffect, useRef} from "react";

export default function UserContext(): JSX.Element {


    return (
        <>
            <div className={" group flex flex-col items-center px-10 relative"}>
                <div className={"peer w-[70px] h-[70px] p-2 rounded-full"}>
                    <img className={"h-full w-full rounded-full"}
                         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                         alt=""/>
                </div>
                <div className={" group-hover:flex hidden bg-white border absolute text-center mt-[60px]"}>
                    <ul>
                        <li className={"hover:bg-gray-100 text-nowrap p-2 border-b"}>Appointment history</li>
                        <li className={"hover:bg-gray-100 text-nowrap p-2 border-b"}>Appointment cancel</li>
                        <li className={"hover:bg-gray-100 p-2 border-b"}>My account</li>
                        <li className={"p-2"}>
                            <button className={"border p-2 mt-5 bg-blue-700 text-white rounded "}>Log out</button>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );

}