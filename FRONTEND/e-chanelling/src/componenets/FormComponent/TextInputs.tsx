import {Label , TextInput} from "flowbite-react";


export default function TextInputs(): JSX.Element{
    return(
        <div>
            <Label htmlFor="email1" value="Your email" />
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
    );
}