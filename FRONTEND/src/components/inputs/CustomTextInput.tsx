import {TextInput , Label} from "flowbite-react";
import type { CustomFlowbiteTheme } from 'flowbite-react';


interface Props{
    lableName?:string
}


export default function CustomTextInput(props: Props): React.JSX.Element{

    const customTheme : CustomFlowbiteTheme['textInput'] ={
        "addon": "h-[5px]",
        "field":{
            "input":{
                "base": "block w-full h-[38px] border disabled:cursor-not-allowed disabled:opacity-50",
                "sizes": {

                    "lgd": "sm:text-md p-4"
                },
                "colors":{
                    "main":"bg-white focus:outline-none focus:ring-2 focus:ring-[#067bea]"
                }
            }
        },

    }

    return(
        <>
            <Label>{props.lableName}</Label>
            <TextInput  theme={customTheme} color={"main"}></TextInput>
        </>
    );
}