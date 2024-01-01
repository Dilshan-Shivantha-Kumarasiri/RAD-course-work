import {Label , TextInput} from "flowbite-react";

interface Props{
    lableValue:string,
    placeHolder:string
}

export default function TextInputs(props: Props): JSX.Element{
    return(
        <div>
            <Label htmlFor="email1" value={props.lableValue} />
            <TextInput id="email1" type="text" placeholder={props.placeHolder} required />
        </div>
    );
}