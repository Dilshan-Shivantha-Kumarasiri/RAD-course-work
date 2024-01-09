

interface Props{
    value:string
}

export default function GrayButton(prop:Props): JSX.Element{

    return(
        <button className={"bg-gray-300 self-end h-[40px] w-auto  px-5 block"}>{prop.value}</button>
    );

}