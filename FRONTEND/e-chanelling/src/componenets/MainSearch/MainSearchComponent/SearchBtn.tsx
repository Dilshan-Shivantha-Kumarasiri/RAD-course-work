interface Props {
    bg:string
    handleClick:any
    main:string
    sub:string
}

export default function SearchBtn(props:Props): JSX.Element {

    const style = {
        backgroundColor:props.bg //background color
    }

    return(
        <>
            <div className={`-translate-y-[5rem] main-text cursor-pointer text-[1.1rem] text-white h-20 bg-[${props.bg}] border flex flex-col justify-center items-center `} style={style} onClick={()=>props.handleClick(props.bg)}>
                <p>{props.main}</p>
                <small>{props.sub}</small>
            </div>
        </>
    );
}