import React from "react";

export default function SignUp():React.JSX.Element{
    return(
        <>
            <section className={" relative h-full bg-white"}>
                <div>
                    <a href="#">
                        <p className={"absolute text-gray-500 font-medium p-5 hover:secondary-font-color"}>Back to home</p>
                    </a>
                </div>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <div className={"flex justify-center"}>
                            {/* main company logo/text */}
                            <a className={"text-[32px] secondary-font-color font-medium"} href={"#"}>Health <span
                                className={"text-[40px] text-[#54de54]"}>+</span></a>
                        </div>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an
                        new account</h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input id="email" name="fname" type="email" autoComplete="email" required
                                           className=" px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none  focus:ring-[#1a8efd] sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input id="email" name="lname" type="email" autoComplete="email" required
                                           className=" px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none  focus:ring-[#1a8efd] sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email
                                    address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required
                                           className=" px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none  focus:ring-[#1a8efd] sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password"
                                           required
                                           className="px-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-[#1a8efd] sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div>
                                <button type="submit"
                                        className="flex w-full justify-center rounded-md bg-[#1a8efd] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#067bea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                    in
                                </button>
                                <button type="submit"
                                        className="border mt-5 flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                                    up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </>
    );
}