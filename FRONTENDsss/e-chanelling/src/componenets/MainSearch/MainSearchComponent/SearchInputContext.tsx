import DoctorChannelling from "../../../layouts/MainSearchLayout/DoctorChanelling.tsx";
import TeleChannelling from "../../../layouts/MainSearchLayout/TeliChannelling.tsx";
import LicenseMedical from "../../../layouts/MainSearchLayout/LicenseMedical.tsx";

interface Props{
    bg:string,
    id:string
}

export default function SearchInputContext(props:Props): JSX.Element{

    const style ={
        backgroundColor:props.bg
    }

    /*
    * I want to render the search form field when click the buttons
    * for that i pass the color value as prop thinking of id is the color hexa code value
    * do conditional rendering using the color value(hexa value)
    */

    let renderingContext:JSX.Element;
    if (props.id === "#00b5ec"){
        renderingContext = <DoctorChannelling />
    }else if (props.id === "#0057a4") {
        renderingContext = <TeleChannelling />
    }else {
        renderingContext = <LicenseMedical />
    }

    return(
        <>
            <div className={" p-5 -translate-y-[5rem] h-auto bg-red-600 border-t   "} style={style}>
                {renderingContext}
            </div>
        </>
    );
}