import Feature from "./component/Feature.tsx";
import {faHospital, faUser, faThermometer, faMedkit} from "@fortawesome/free-solid-svg-icons";

export default function HospitalFeature() {

    return(
        <div className={"grid h-auto grid-cols-4"}>
            <Feature bg={"bg-[#396cf0]"} icons={faHospital}/>
            <Feature bg={"bg-[#1c58ef]"} icons={faUser} />
            <Feature bg={"bg-[#396cf0]"} icons={faThermometer} />
            <Feature bg={"bg-[#1c58ef]"} icons={faMedkit}/>
        </div>
    );
}