import Cards from "../../Component/Card.tsx";

export default function QuickViewCard(): JSX.Element {
    return (
        <>
            <section className={"responsivenesss mb-12"}>
                <div className={"flex justify-center  w-full -translate-y-8"}>
                    <h2 className={"before:w-[25vw] after:w-[25vw] h2 before:content-['']  before:inline-block  before:bg-[#2c60dc] before:h-[2.5px] after:content-['']  after:inline-block after:bg-[#2c60dc] after:h-[2.5px] before:mb-2 after:mb-2"}><span className={"text-3xl font-bold text-[#2c60dc] mx-5 "}>Quick Access</span></h2>
                </div>

                <div className={"grid grid-cols-3 gap-5  "}>
                    <Cards image={"https://www.echannelling.com/images/topSpecialities/physician.svg"} doctorSpecial={"Channel a Physician"} note={"A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means."}/>
                    {/*<Cards image={"https://www.echannelling.com/images/topSpecialities/physician.svg"} doctorSpecial={"Channel a Physician"} note={"A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means."}/>*/}
                    {/*<Cards image={"https://www.echannelling.com/images/topSpecialities/physician.svg"} doctorSpecial={"Channel a Physician"} note={"A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means."}/>*/}
                    {/*<Cards image={"https://www.echannelling.com/images/topSpecialities/physician.svg"} doctorSpecial={"Channel a Physician"} note={"A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means."}/>*/}
                    {/*<Cards image={"https://www.echannelling.com/images/topSpecialities/physician.svg"} doctorSpecial={"Channel a Physician"} note={"A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means."}/>*/}
                    {/*<Cards image={"https://www.echannelling.com/images/topSpecialities/physician.svg"} doctorSpecial={"Channel a Physician"} note={"A Physician is a Medical Practitioner who specializes in general or internal medicine (diagnosing & treatment) other than surgical means."}/>*/}
                </div>
            </section>
        </>
    );
}