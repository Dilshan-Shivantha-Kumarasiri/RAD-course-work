import React from "react";
import NavBar from "../components/Layouts/NavBar.tsx";
import Footer from "../components/Layouts/Footer.tsx";
import "../assets/css/home.css"

export default function Home(): React.JSX.Element {

    return (
        <>
            <NavBar/>
            {/* ------ main hero ----- */}
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
                                <p className={" text-center text-[22px] font-[Poppins] text-[#4d4b4b]"}>Receive
                                    Patients</p>
                            </div>

                            <div className={"flex flex-col items-center"}>
                                <p className={"text-center text-[32px] font-[Rubik] text-[#1a8efd] font-medium"}>50+</p>
                                <p className={"text-center text-[22px] font-[Poppins] text-[#4d4b4b]"}>Expert
                                    Doctors</p>
                            </div>

                            <div className={"flex flex-col items-center"}>
                                <p className={"text-center text-[32px] font-[Rubik] text-[#1a8efd] font-medium"}>10+</p>
                                <p className={"text-center text-[22px] font-[Poppins] text-[#4d4b4b]"}>Years of
                                    Experience</p>
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

            {/* ------ what we do section ----- */}
            <section className={"px-10 mt-20 flex flex-col items-center"}>
                <div className={"relative "}>
                    <h4 className={"what-we-do-header text-[40px] font-medium"}>What
                        we do</h4>
                </div>
                <p className={"text-center mt-10"}>
                    we bring healthcare to your convenience, offering a comprehensive range of on-demand medical
                    services tailored to your needs. Our platform allows you to connect with experienced online doctors
                    who provide expert medical advice, issue online prescription and offer quick refills whenever you
                    require them
                </p>
            </section>
            <section className={"flex gap-10 px-10 mt-20 flex-wrap"}>
                <div className={"min-w-[400px] relative border-2 rounded-3xl flex flex-col items-center flex-1 p-5"}>
                    {/* emergency care */}
                    <div className={"rounded-full bg-[#dce6ff] absolute p-2 top-[-20px] what-we-do-icon"}>
                        <svg color={"#1a8efd"} width={"30px"} height={"30px"} aria-hidden="true" focusable="false"
                             data-prefix="fas" data-icon="truck-medical"
                             className="svg-inline--fa fa-truck-medical info-fa-icon" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="currentColor"
                                  d="M0 48C0 21.5 21.5 0 48 0H368c26.5 0 48 21.5 48 48V96h50.7c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3V256v32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V48zM416 256H544V237.3L466.7 160H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80v48l-48 0c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h48c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16H240V80c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z"></path>
                        </svg>
                    </div>
                    <h4 className={"text-center mb-3 mt-5 font-medium text-[28px]"}>Emergency Care</h4>
                    <p className={"text-center"}>Our Emergency Care service is designed to be your reliable support in
                        critical situations. Whether it's a sudden illness, injury, or any medical concern that requires
                        immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide
                        prompt and efficient care.</p>
                </div>

                <div className={"min-w-[400px] relative border-2 rounded-3xl flex flex-col items-center flex-1 p-5"}>
                    {/* Heart Disease */}
                    <div className={"rounded-full bg-[#dce6ff] absolute p-2 top-[-20px]"}>
                        <svg color={"#1a8efd"} width={"30px"} height={"30px"} aria-hidden="true" focusable="false"
                             data-prefix="fas" data-icon="heart-pulse"
                             className="svg-inline--fa fa-heart-pulse info-fa-icon" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"></path>
                        </svg>
                    </div>
                    <h4 className={"text-center mb-3 mt-5 font-medium text-[28px]"}>Heart Diseases</h4>
                    <p className={"text-center"}>Our team of experienced cardiologists and medical experts use
                        state-of-the-art technology to assess your cardiovascular health and design personalized
                        treatment plans. From comprehensive screenings to advanced interventions, we are committed to
                        helping you maintain a healthy heart and lead a fulfilling life.</p>
                </div>

                <div className={"min-w-[400px] relative border-2 rounded-3xl flex flex-col items-center flex-1 p-5"}>
                    {/* Dental care */}
                    <div className={"rounded-full bg-[#dce6ff]  absolute p-2 top-[-20px]"}>
                        <svg color={"#1a8efd"} width={"30px"} height={"30px"} aria-hidden="true" focusable="false"
                             data-prefix="fas" data-icon="tooth"
                             className="svg-inline--fa fa-tooth info-fa-icon" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                  d="M186.1 52.1C169.3 39.1 148.7 32 127.5 32C74.7 32 32 74.7 32 127.5v6.2c0 15.8 3.7 31.3 10.7 45.5l23.5 47.1c4.5 8.9 7.6 18.4 9.4 28.2l36.7 205.8c2 11.2 11.6 19.4 22.9 19.8s21.4-7.4 24-18.4l28.9-121.3C192.2 323.7 207 312 224 312s31.8 11.7 35.8 28.3l28.9 121.3c2.6 11.1 12.7 18.8 24 18.4s20.9-8.6 22.9-19.8l36.7-205.8c1.8-9.8 4.9-19.3 9.4-28.2l23.5-47.1c7.1-14.1 10.7-29.7 10.7-45.5v-2.1c0-55-44.6-99.6-99.6-99.6c-24.1 0-47.4 8.8-65.6 24.6l-3.2 2.8 19.5 15.2c7 5.4 8.2 15.5 2.8 22.5s-15.5 8.2-22.5 2.8l-24.4-19-37-28.8z"></path>
                        </svg>
                    </div>
                    <h4 className={"text-center mb-3 mt-5 font-medium text-[28px]"}>Dental Care</h4>
                    <p className={"text-center"}>Smile with confidence as our Dental Care services cater to all your
                        oral health needs. Our skilled dentists provide a wide range of treatments, from routine
                        check-ups and cleanings to cosmetic procedures and restorative treatments.</p>
                </div>
            </section>

            {/* why choose health section */}
            <section className={"flex items-center justify-center px-10 mt-20"}>
                <div className={"flex-1"}>
                    <img
                        src="https://alkaison.github.io/Health-Plus/static/media/doctor-book-appointment.edb3f4ac282ff3fefaec.png"
                        alt=""/>
                </div>
                <div className={"flex-1"}>
                    <div className={"relative why-choose-health-container"}>
                        <h4 className={" text-[40px] font-medium why-choose-health"}>Why Choose Health</h4>
                    </div>
                    <p className={"my-5 font-[Rubik] text-[18px] text-[#4d4b4b]"}>Discover the reasons to choose Health Plus for your healthcare needs. Experience expert care,
                        convenience, and personalized solutions, making your well-being our top priority. Join us on a
                        journey to better health and a happier life.</p>
                    <ul>
                        <li className={"align-middle my-4 text-[22px] font-[Rubik] font-medium"}>
                            <svg width={"20px"} aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="circle-check"
                                 className="inline-block svg-inline--fa fa-circle-check mr-2 " role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 style={{color: "rgb(30, 143, 253)"}}>
                                <path fill="currentColor"
                                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                            </svg>

                            Best Professional Doctors

                        </li>
                        <li className={"align-middle my-4 text-[22px] font-[Rubik] font-medium"}>
                            <svg width={"20px"} aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="circle-check"
                                 className="inline-block svg-inline--fa fa-circle-check mr-2 " role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 style={{color: "rgb(30, 143, 253)"}}>
                                <path fill="currentColor"
                                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                            </svg>

                            Emergency Care
                        </li>

                        <li className={"align-middle my-4 text-[22px] font-[Rubik] font-medium"}>
                            <svg width={"20px"} aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="circle-check"
                                 className="inline-block svg-inline--fa fa-circle-check mr-2 " role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 style={{color: "rgb(30, 143, 253)"}}>
                                <path fill="currentColor"
                                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                            </svg>

                            24/7 Support Live Chat
                        </li>

                        <li className={"align-middle my-4 text-[22px] font-[Rubik] font-medium "}>
                            <svg width={"20px"} aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="circle-check"
                                 className="inline-block svg-inline--fa fa-circle-check mr-2 " role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 style={{color: "rgb(30, 143, 253)"}}>
                                <path fill="currentColor"
                                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                            </svg>

                            Enrollment Easy and Quick
                        </li>
                    </ul>
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
                </div>
            </section>

            {/* footer component */}
            <Footer/>
        </>
    );
}