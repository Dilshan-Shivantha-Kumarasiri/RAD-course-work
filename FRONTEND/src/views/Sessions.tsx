import NavBar from "../components/Layouts/NavBar.tsx";
import Footer from "../components/Layouts/Footer.tsx";
import {Breadcrumb} from 'flowbite-react'
import {HiHome} from 'react-icons/hi';
import React from "react";
import {useNavigate} from "react-router-dom";
import SessionCard from "../components/SessionCard.tsx";


export default function Sessions(): React.JSX.Element {

    const navigate = useNavigate();

    return (
        <section>
            <NavBar/>
            <div>
                <div className={"mt-3 px-10"}>
                    <Breadcrumb className={"dark:text-red-500"} aria-label="Default breadcrumb example">
                        <Breadcrumb.Item onClick={() => navigate("/")} icon={HiHome}>
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item onClick={() => navigate("/find/doctors/")}>Doctors</Breadcrumb.Item>
                        <Breadcrumb.Item>Sessions</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className={"gap-2  px-52 mt-10 flex"}>
                    <div>
                        <div className={"doctor-card flex flex-col justify-center items-center"}>
                            <div className={" flex justify-center w-[300px] h-[70px] doctor-view-card-session"}>
                                <div
                                    className={"translate-y-[30px] items-center justify-center w-[70px] h-[70px] rounded-full  flex"}>
                                    <img className={"w-full h-full rounded-full"}
                                         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                                         alt=""/>
                                </div>
                            </div>
                            <div className={" flex-col flex justify-center mt-14 p-5"}>
                                <p className={"text-center text-xl font-bold text-slate-600"}>Dr PREM L</p>
                                <p className={"text-center text-xl font-bold text-slate-600"}>Durairajah</p>
                                <p className={"text-slate-600 text-center"}>Aesthetic cosmetic</p>
                                <button className={"mt-3 text-blue-600 border border-blue-600 w-full p-2"}>view
                                    profile
                                </button>
                            </div>

                            <div className={"text-[14px] text-slate-500 uppercase mt-2 p-5"}>
                                <p className={"font-bold"}>session AT:</p>
                                <p>Room NO: 12</p>
                                <p className={"font-bold"}>No 22 Colombo road</p>
                            </div>
                        </div>
                    </div>
                    <div className={" p-2 grid grid-cols-3 w-full doctor-card gap-3"}>
                        <div>
                            <SessionCard/>
                        </div>
                        <div>
                            <SessionCard/>
                        </div>
                        <div>
                            <SessionCard/>
                        </div>
                        <div>
                            <SessionCard/>
                        </div>
                        <div>
                            <SessionCard/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    );
}