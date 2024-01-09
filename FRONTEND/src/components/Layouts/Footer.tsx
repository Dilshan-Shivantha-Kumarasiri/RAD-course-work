import React from "react";

export default function Footer(): React.JSX.Element {
    return (
        <>
            <footer className={"mt-10"}>
                <div
                    className={"flex p-10 bg-[#1b2433] text-[#d0d3da] border-b-2 border-[#293241] justify-center "}>

                    <div className={"flex-[1.5] flex flex-col font-[Rubik]"}>
                        <p className={"text-[32px] secondary-font-color font-medium"}>Health <span
                            className={"text-[40px] text-[#54de54]"}>+</span></p>
                        <p className={"text-[20px] font-[Rubik]"}>Talk to online doctors and get medical advice, online
                            prescriptions, refills and medical notes within minutes. On-demand healthcare services at
                            your fingertips.</p>
                        <p className={"text-[22px] text-white mt-5 mb-3 font-medium"}>Stay Update to our Newsletter</p>
                        <div>
                            <input className={" py-3 px-10 rounded-full bg-[#293241] mr-2"} placeholder={"enter your email"} type="text"/>
                            <button className={" py-3 px-5 rounded-full bg-[#1a8efd] active:outline"} >Subscribe</button>
                        </div>
                    </div>

                    <div className={"items-center flex-1 flex flex-col"}>
                        <div className={"flex flex-col font-[Rubik]"}>
                            <p className={"text-[24px] font-medium text-white font-[Rubik] my-4"}>Services</p>
                            <a className={"my-2"} href="">Emergency Care</a>
                            <a className={"my-2"} href="">Heart Diseases</a>
                            <a className={"my-2"} href="">Dental Care</a>
                            <a className={"my-2"} href="">Prescription</a>
                            <a className={"my-2"} href="">Insight for doctors</a>
                        </div>
                    </div>

                    <div className={"items-center flex-1 flex flex-col"}>
                        <div className={"flex flex-col font-[Rubik]"}>
                            <a className={"text-[24px] font-medium text-white font-[Rubik] my-4"}>Legal</a>
                            <a className={"my-2"} >General Info</a>
                            <a className={"my-2"} >Privacy Policy</a>
                            <a className={"my-2"} >Terms of Services</a>
                            <a className={"my-2"} >Consultations</a>
                            <a className={"my-2"} >How it Works</a>
                        </div>
                    </div>

                    <div className={"items-center flex-1 flex flex-col"}>
                        <div className={"flex flex-col font-[Rubik]"}>
                            <a className={"text-[24px] font-medium text-white font-[Rubik] my-4"}>Talk To Us</a>
                            <a className={"my-2"} >Support@healthplus.com</a>
                            <a className={"my-2"} >appointment@healthplush.com</a>
                            <a className={"my-2"} >+9472 533 5646</a>
                            <a className={"my-2"} >+9472 533 5645</a>
                        </div>
                    </div>
                </div>
                <div className={"p-10 bg-[#1b2433] text-[#d0d3da]"}>
                    <p>2013-2023 Health+.All rights reserved.</p>
                    <div></div>
                </div>

            </footer>
        </>
    );
}