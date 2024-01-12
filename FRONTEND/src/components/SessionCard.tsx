

export default function SessionCard(): JSX.Element{
    return(
        <>
            <div className={"p-5 border"}>
                <div className={"flex justify-center"}>
                    <img className={"w-14"} src="/src/assets/img/sessions/H483.jpg" alt=""/>
                </div>
                <div className={"mt-5 font-bold text-slate-600 text-[15px]"}>
                    Health+ Hospitals
                </div>
                <div className={" mt-2mt-2 flex items-center"}>
                    <svg  className="w-4 h-4 text-gray-800 dark:text-slate-600" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path
                            d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                    </svg>
                    <p className={"text-slate-600 text-[14px]"}>Colombo 06</p>
                </div>
                <div>
                    <p className={" mt-2 text-slate-600 font-bold text-[13px]"}>Date : <span>2024 - 02 -01</span></p>
                </div>
                <div>
                    <p className={" mt-2 text-slate-600 font-bold text-[13px]"}>11:00 AM <span>(Morning)</span></p>
                </div>
                <div>
                    <p className={"mt-2 text-[13px]"}>Active patients : <span>0</span></p>
                </div>
                <div>
                    <p className={"mt-2 text-[13px]"}>Channelling fee</p>
                    <p className={"text-slate-600 font-bold text-[13px]"}>2800 + Booking fee</p>
                </div>
                <div className={"mt-4 w-full"}>
                    <button className={"m-auto block w-full bg-blue-700 text-white py-1"} disabled={false}>Book Now</button>
                </div>
            </div>

        </>
    );
}