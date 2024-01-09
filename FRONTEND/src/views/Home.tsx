import React from "react";
import NavBar from "../components/Layouts/NavBar.tsx";
import "../assets/css/home.css"

export default function Home(): React.JSX.Element {

    return (
        <>
            <NavBar/>
            {/* main hero */}
            <main>
                <div className={"px-10 flex hero-container justify-center items-center gap-x-5"}>
                        <div className={"flex-[60%] py-10 flex flex-col gap-y-8 "}>
                            {/* left */}
                            <div>
                                <p className={"text-[#4d4b4b] font-[Rubik,serif] font-medium text-[22px]"}>❤️ Health
                                    comes
                                    first</p>
                            </div>
                            <div>
                                <p className={" w-[550px]  text-black font-[500] text-[40px]"}>Find your Doctor and make
                                    and
                                    Appointments</p>
                            </div>
                            <div>
                                <p className={" w-[550px] text-[18px] text-[#4d4b4b] font-[Rubik] tracking-[0.7px]"}>
                                    Talk and online doctors and get medical advice,
                                    online prescriptions, refills and medical notes within
                                    minutes.On-demand healthcare services at your
                                    fingertips
                                </p>
                            </div>
                            <div>
                                <button
                                    className={"group duration-500 bg-[#1a8efd] gap-x-2 hover:border-[#1a8efd] hover:bg-white hover:text-[#1a8efd] border-2 border-[white] items-center text-white flex py-3 px-4 rounded-3xl"}>
                                    <svg width={"14px"} aria-hidden="true" focusable="false" data-prefix="fas"
                                         data-icon="calendar-check"
                                         className="svg-inline--fa fa-calendar-check group-hover:fill-amber-500 "
                                         role="img"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                              d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"></path>
                                    </svg>
                                    <p>Book Appointment</p>
                                </button>
                            </div>

                            <div className={"flex gap-x-10 "}>
                                <div className={"flex flex-col items-center justify-center"}>
                                    <p className={" text-center text-[32px] font-[Rubik] text-[#1a8efd] font-medium"}>145k+</p>
                                    <p className={" text-center text-[22px] font-[Poppins] text-[#4d4b4b]"}>Receive Patients</p>
                                </div>

                                <div className={"flex flex-col items-center"}>
                                    <p className={"text-center text-[32px] font-[Rubik] text-[#1a8efd] font-medium"}>50+</p>
                                    <p className={"text-center text-[22px] font-[Poppins] text-[#4d4b4b]"}>Expert Doctors</p>
                                </div>

                                <div className={"flex flex-col items-center"}>
                                    <p className={"text-center text-[32px] font-[Rubik] text-[#1a8efd] font-medium"}>10+</p>
                                    <p className={"text-center text-[22px] font-[Poppins] text-[#4d4b4b]"}>Years of Experience</p>
                                </div>
                            </div>
                        </div>


                        <div className={"my-10 flex-[40%]"}>
                            {/* right */}
                            <img className={"w-full h-auto"}
                                 src="https://alkaison.github.io/Health-Plus/static/media/doctor-picture.0261bb4efe7a9075c56a.png"
                                 alt=""/>
                        </div>

                </div>
            </main>
        </>
    );
}