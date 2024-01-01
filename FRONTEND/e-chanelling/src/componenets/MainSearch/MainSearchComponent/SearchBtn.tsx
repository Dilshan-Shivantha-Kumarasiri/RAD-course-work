interface Props {
    bg:string
    handleClick:any
}

export default function SearchBtn(props:Props): JSX.Element {

    const style = {
        backgroundColor:props.bg //background color
    }

    return(
        <>
            <div className={`-translate-y-16 h-20 bg-[${props.bg}] border flex `} style={style} onClick={()=>props.handleClick(props.bg)}>
                <p></p>
                <p></p>
            </div>
        </>
    );
}