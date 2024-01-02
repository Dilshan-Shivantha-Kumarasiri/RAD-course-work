
{/*<div>*/}
{/*    {props.isLableHave && <label htmlFor={props.lableId} className="block text-sm font-medium leading-6 text-gray-900">{props.lableName}</label>}*/}
{/*    <div className="mt-2">*/}
{/*        <input id={props.id} name={props.name} type={props.type} autoComplete={props.autoComplete} required={props.isRequireds}*/}
{/*               className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />*/}
{/*    </div>*/}
{/*</div>*/}
// interface Props{
//     lableId:string
//     lablename:string
//     name:string
//     value:string
//     islablehave:string
//
// }

// @ts-ignore
export default function TextFieldTwo(props): JSX.Element{
    return (
        <>
            <div>
                {props.islablehave && <label htmlFor={props.lableId} className="block text-sm font-medium leading-6 text-gray-900">{props.lablename}</label>}
                <div className="mt-2">
                    <input {...props}
                           className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
        </>
    );
}