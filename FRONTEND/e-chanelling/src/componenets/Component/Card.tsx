import {Card} from "flowbite-react";
import type {CustomFlowbiteTheme} from 'flowbite-react';

interface Props{
    doctorSpecial:string,
    note : string
    image:string
}

export default function Cards(props: Props): JSX.Element {

    const customTheme: CustomFlowbiteTheme['card'] = {
        "root": {
            "base": " text-[#3b647e]  flex rounded-lg bg-[#f3f7ff]  border-gray-200 bg-white shadow-md dark:border-gray-700 ",
            "children": "flex h-full flex-col justify-center gap-4 p-6",
            "horizontal": {
                "off": "flex-col",
                "on": "flex-col md:max-w-xl md:flex-row"
            },
            "href": " hover:bg-[#2c60dc] hover:text-white"
        },
        "img": {
            "base": "",
            "horizontal": {
                "off": "rounded-t-lg",
                "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            }
        }
    };


    return (

        <Card href="#" className="max-w-sm bg-[#f3f7ff] " theme={customTheme}>
            <div className={"bg-cover w-full     flex justify-center bg-[url('https://www.echannelling.com/images/homeTile/hometile-bg.svg')]"}>
                <img src={props.image} alt="" className={"w-[70px]"}/>
            </div>
            <h5 className="text-[1rem] m-auto font-bold tracking-tight  ">
                {props.doctorSpecial}
            </h5>
            <p className="font-normal text-[0.75rem] ">
                {props.note}
            </p>
        </Card>


    );
}