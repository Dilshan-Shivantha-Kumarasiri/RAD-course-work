import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props{
    icons:string
    bg:string
}

export default function Feature(props:Props): JSX.Element {
    return (

        <div className={` text-white p-10 feature-container ${props.bg}`}>
            <div className={"flex justify-center items-center"}>
                <i className={`relative m-auto border w-[40px] h-[40px] flex justify-center items-center`}>
                    <FontAwesomeIcon className={"text-[30px] feature-animated-icon"} icon={props.icons}/>
                </i>
            </div>
            <h6 className={"text-center font-bold p-5"}>Modern Hospital</h6>
            <p className={"text-center"}>
                The best possible care and provide a safe environment for patients and healthcare professionals at the
                hospital.
            </p>
        </div>
    );
}