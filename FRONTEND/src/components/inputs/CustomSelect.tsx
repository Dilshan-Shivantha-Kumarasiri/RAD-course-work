import React from "react";

import {CustomFlowbiteTheme, Label, Select} from "flowbite-react";

interface Props{
    options:{options:string,values:string}[]
    id:string
    lableValue:string
    lableColor:boolean
}

export default function CustomSelect(props:Props): React.JSX.Element{

    const newOptions:JSX.Element[]= props.options.map((r:{options:string,values:string},index:number) => <option key={index} value={r.values}>{r.options}</option>)

    const customThemeLabel : CustomFlowbiteTheme['label'] = {
        "root":{
            "colors":{
                "white-text":"text-white",
                "black-text":"text-black"
            }
        }
    }

    const customTheme : CustomFlowbiteTheme['select'] ={
        "addon": "h-[5px]",
        "field":{
            "select":{
                "base": "block w-full h-[38px] border disabled:cursor-not-allowed disabled:opacity-50",
                "sizes": {

                    "lgd": "sm:text-md p-4"
                },
                "colors":{
                    "main":"bg-white active:outline-none focus:outline-none focus:ring-2 focus:ring-[#067bea]"
                }
            }
        },

    }


    return(
        <>
            <div className="">
                <div className="">
                    {
                        props.lableColor? <Label color={"black-text"} theme={customThemeLabel} htmlFor={props.id} value={props.lableValue} />
                        : <Label color={"white-text"} theme={customThemeLabel} htmlFor={props.id} value={props.lableValue} />
                    }
                </div>
                <Select theme={customTheme} id={props.id} required color={"colors"}>
                    {/* use array of iteration for render the values */}
                    {newOptions}
                </Select>
            </div>
        </>
    );
}