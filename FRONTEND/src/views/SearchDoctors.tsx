import React from "react";
import NavBar from "../components/Layouts/NavBar.tsx";
import Footer from "../components/Layouts/Footer.tsx";
import CustomTextInput from "../components/inputs/CustomTextInput.tsx";
import CustomSelect from "../components/inputs/CustomSelect.tsx";
import {Button} from "flowbite-react";

export default function SearchDoctors(): React.JSX.Element {
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
                <div className={""}>

                </div>
            </section>
            <section>
                <Footer/>
            </section>

        </>
    );
}