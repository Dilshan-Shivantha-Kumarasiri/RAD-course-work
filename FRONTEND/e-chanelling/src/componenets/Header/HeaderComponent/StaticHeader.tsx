import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function StaticHeader(): JSX.Element {
    return (
        <div className="static-header-container py-3 border-b-[1px]">
            <div className={"responsivenesss main-font flex justify-between"}>
                <ul className={"static-header-left flex"}>
                    <li><a className={"lg:mx-[0.5vw] mx-[0.8vw]"} href="#">About</a></li>
                    <li><a className={"lg:mx-[0.5vw] mx-[0.8vw]"} href="#">Doctors</a></li>
                    <li><a className={"lg:mx-[0.5vw] mx-[0.8vw]"} href="#">Contact</a></li>
                    <li><a className={"lg:mx-[0.5vw] mx-[0.8vw]"} href="#">FAQ</a></li>
                </ul>
                <ul className={"static-header-right flex"}>
                    <li className={"mx-[1vw]"}><FontAwesomeIcon icon={faPhone}
                                                                style={{color: "#1A76D1", marginRight: "3px"}}/>+9472
                        533 5646
                    </li>
                    <li className={"mx-[1vw]"}><FontAwesomeIcon icon={faEnvelope}
                                                                style={{color: "#1A76D1", marginRight: "3px"}}/> <a
                        href="#">kumarasiriods@gmail.com</a></li>
                </ul>
            </div>

        </div>
    );
}