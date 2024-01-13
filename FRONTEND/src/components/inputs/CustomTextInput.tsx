import {TextInput , Label} from "flowbite-react";
import type { CustomFlowbiteTheme } from 'flowbite-react';


interface Props{
    lableName?:string
    name:string
    lableColor:boolean
    placeHolder?:string
}


export default function CustomTextInput(props: Props): React.JSX.Element{

    const customThemeLabel : CustomFlowbiteTheme['label'] = {
        "root":{
            "colors":{
                "white-text":"text-white",
                "black-text":"text-black"
            }
        }
    }

    const customThemeTextInput : CustomFlowbiteTheme['textInput'] ={
        "addon": "h-[5px]",
        "field":{
            "input":{
                "base": "block w-full h-[38px] border disabled:cursor-not-allowed disabled:opacity-50",
                "sizes": {

                    "lgd": "sm:text-md p-4"
                },
                "colors":{
                    "main":"bg-white focus:outline-none focus:ring-2 focus:ring-[#067bea] "
                }
            }
        },

    }

    return(
        <>
            {
                props.lableColor ? <Label theme={customThemeLabel} color={'black-text'}>{props.lableName}</Label> :
                <Label theme={customThemeLabel} color={'black-white'}>{props.lableName}</Label>
            }
            <TextInput placeholder-={"h2"} name={props.name} theme={customThemeTextInput} color={"main"}></TextInput>
        </>
    );
}