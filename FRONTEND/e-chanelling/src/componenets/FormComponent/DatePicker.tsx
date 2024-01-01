import {Datepicker, Label} from "flowbite-react";

interface Props{
    id:string
    lableValue:string
}

export default function DatePickers(props: Props):JSX.Element {
    return(
        <div>
            <Label htmlFor={props.id} value={props.lableValue} />
            <Datepicker/>
        </div>
    )
}