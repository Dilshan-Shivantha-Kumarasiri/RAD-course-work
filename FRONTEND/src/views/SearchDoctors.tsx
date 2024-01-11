import React from "react";
import NavBar from "../components/Layouts/NavBar.tsx";
import Footer from "../components/Layouts/Footer.tsx";
import CustomTextInput from "../components/inputs/CustomTextInput.tsx";
import CustomSelect from "../components/inputs/CustomSelect.tsx";
import {Breadcrumb, Button} from "flowbite-react";
import DoctorCard from "../components/DoctorCard.tsx";
import CustomPagination from "../components/CustomPagination.tsx";
import {HiHome} from "react-icons/hi";
import {useNavigate} from "react-router-dom";

export default function SearchDoctors(): React.JSX.Element {

    const navigate = useNavigate();

    /* the options of the select input */
    const selectOptions:{options:string,values:string}[] = [
        {options:"Doctors",values:"Doctors"},
        {options:"Specialization",values:"Specialization"}
    ];

    return (
        <>
            <section>
                <NavBar/>
            </section>
            <section>
                <div className={"px-52 w-full flex items-center  gap-x-7 bg-gradient-to-r from-cyan-500 to-blue-500 h-[100px]"}>
                    <div className={"w-full flex items-center justify-center gap-x-7"}>
                        <div className={"flex-1"}>
                            {/* select type */}
                            <CustomSelect lableValue={"Select type"} id={"selectDoctor"} options={selectOptions}/>
                        </div>
                        <div className={"flex-1"}>
                            {/* find doctor */}
                            <CustomTextInput lableName={"Select doctor"}/>
                        </div>
                        <div className={"self-end"}>
                            {/* searchBtn */}
                            <Button className="dark:bg-[#00db6e]" >Search</Button>
                        </div>
                    </div>
                </div>
                <div className={"min-h-[500px] px-52 pt-10"}>
                    <div className={"min-h-[500px]  border-gray-500"}>
                        <div className={"flex justify-between"}>
                            <div>
                                <p className={"text-gray-600 font-medium"}>Search Result</p>
                                <p className={"text-[12px]"}>All Doctors</p>
                            </div>
                            <div>
                                <p className={"font-medium text-gray-600 text-[15px]"}><span>1</span> Result found</p>
                            </div>
                        </div>

                        <div className={"mt-5"}>
                            <Breadcrumb className={"dark:text-red-500"} aria-label="Default breadcrumb example">
                                <Breadcrumb.Item onClick={() => navigate("/")} icon={HiHome}>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item >Doctors</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>

                    {/*  card  */}
                        <div className={"mt-10"}>
                            <div className={"my-5"}>
                                <DoctorCard/>
                            </div><div className={"my-5"}>
                                <DoctorCard/>
                            </div><div className={"my-5"}>
                                <DoctorCard/>
                            </div><div className={"my-5"}>
                                <DoctorCard/>
                            </div><div className={"my-5"}>
                                <DoctorCard/>
                            </div>
                        </div>
                        <div>
                            {/* pagination */}
                            {/*  need to apply use state and function  */}
                            <CustomPagination/>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer/>
            </section>

        </>
    );
}