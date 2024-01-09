import React from "react";


export default function NavBar(): React.JSX.Element {
    return (
        <>
            <nav className={"flex justify-between px-10 items-center"}>
                <div>
                    {/* main company logo/text */}
                    <a className={"text-[32px] secondary-font-color font-medium"} href={"#"}>Health <span className={"text-[40px] text-[#54de54]"}>+</span></a>
                </div>
                <div>
                    {/* main navigation menu */}
                    <ul className={"navigation-links flex items-center"}>
                        <li className={"mx-[1.5vw] lg:mx-[10px] text-[18px] hover:secondary-font-color"}><a href="#">Home</a></li>
                        <li className={"mx-[1.5vw] lg:mx-[10px] text-[18px] hover:secondary-font-color"}><a href="#">Services</a></li>
                        <li className={"mx-[1.5vw] lg:mx-[10px] text-[18px] hover:secondary-font-color"}><a href="#">About</a></li>
                        <li className={"mx-[1.5vw] lg:mx-[10px] text-[18px] hover:secondary-font-color"}><a href="#">Reviews</a></li>
                        <li className={"mx-[1.5vw] lg:mx-[10px] text-[18px] hover:secondary-font-color"}><a href="#">Doctors</a></li>
                    </ul>
                </div>
                <div>
                    {/* user sign in area */}
                    <a href="#" className={""}>
                        <button className={"duration-300 sing-in-btn  hover:text-[#1a8efd] hover:bg-white border-2 hover:border-[#1a8efd] border-[white] px-5 py-2 rounded-3xl bg-[#1a8efd] text-white"}>
                            Sign in
                        </button>
                    </a>
                </div>
            </nav>
        </>
    );
}