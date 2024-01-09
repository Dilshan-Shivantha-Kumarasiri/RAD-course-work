import {Label , TextInput} from "flowbite-react";

interface Props{
    lableValue:string,
    placeHolder:string
}

let style ={
    border:"1px solid red",
    position:"relative",
    // zIndex:0
};

export default function TextInputs(props: Props): JSX.Element{
    return(
        <div styley={style}>
            <Label htmlFor="email1" value={props.lableValue} />
            <TextInput id="email1" type="text" placeholder={props.placeHolder} required />
            <div className={"input-data-search absolute mt-1 border "} style={{width:"100%" , height:"100px" , backgroundColor:"red"}}> </div>

        </div>
    );
}