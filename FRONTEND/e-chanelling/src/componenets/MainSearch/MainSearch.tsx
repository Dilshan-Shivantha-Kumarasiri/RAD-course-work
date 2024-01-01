import SearchBtn from "./MainSearchComponent/SearchBtn.tsx";
import SearchInputContext from "./MainSearchComponent/SearchInputContext.tsx";
import React from "react";

export default function MainSearch(): JSX.Element {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [bg , setBg] = React.useState("#00b5ec")
    //bg prop is background color

    function setColor(color:string): void{
        setBg(color)
    }

    return(
        <>
            <section className={"responsivenesss"}>
                <div className={"grid grid-cols-3"}>
                    <SearchBtn main={"Doctor Channelling"} sub={"Channel a doctor"} bg="#00b5ec" handleClick={(color:string) =>setColor(color)} />
                    <SearchBtn main={"Tele-Channelling"} sub={"Video consultation"} bg="#0057a4" handleClick={(color:string) => setColor(color)} />
                    <SearchBtn main={"Driving License Medical"} sub={"Book an appointmen"} bg="#4cb847" handleClick={(color:string) =>setColor(color)} />
                </div>
                <SearchInputContext bg={bg} id={bg}/>
            </section>
        </>
    );
}