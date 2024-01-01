import {Select, Label} from "flowbite-react";



export default function Selects(props): JSX.Element {
    return (
        <div>
            <Label htmlFor={props.id} value={props.value} />
            <Select  >
                <option>Doctors</option>
                <hr />
                <option>USQ</option>
            </Select>
        </div>
    );
}