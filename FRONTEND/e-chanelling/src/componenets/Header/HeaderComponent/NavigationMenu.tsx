
export default function NavigationMenu(){
    return (
        <div className={"responsivenesss flex items-center justify-between py-2"}>
            <div>
                <a href="#">
                    <img src="src/assets/logo/main-logo.png" alt=""/>
                </a>

            </div>
            <div className={"flex items-center"}>
                <ul className={"flex font-medium main-font"}>
                    <li className={" pcr-navigation relative cursor-pointer"}><a href="#">PCR</a></li>
                    <li className={"appointment-navigation relative mx-[2vw] cursor-pointer"}><a href="#">My Appointments</a></li>
                </ul>
                <button className={"main-btn rounded-lg"}>Sign in</button>
            </div>
            {/* need to add user profile if user register if not show sign in btn */}

        </div>
    );
}