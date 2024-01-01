import {Select, Label} from "flowbite-react";

interface Props{
    id:string
    lableValue:string
}



export default function Selects(props: Props): JSX.Element {
    return (
        <div>
            <Label htmlFor={props.id} value={props.lableValue} />
            <Select  >
                <option>Doctors</option>
                <option>Speciali</option>
            </Select>
        </div>
    );
}