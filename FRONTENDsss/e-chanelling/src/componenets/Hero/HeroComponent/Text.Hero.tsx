import 'animate.css';

export default function TextHero():JSX.Element{
    return (
        <>
            <p  className={"text-[#2C2D3F] font-bold main-font text-[2.375rem]"}>
                <span className={""}>We Provide <span className={"text-[#1A76D1]"}>Medical</span> Services</span>
                <br />
                <span>That You Can <span className={"text-[#1A76D1]"}>Trust</span></span>
            </p>
            <p className={"text-[#2C2D3F] text-[0.75rem]"}>
                Welcome aboard! We're excited to have you join our virtual platform, where we focus on delivering<br />
                valuable insights, informative articles, and engaging healthcare discussions. Your presence adds to
                the vibrancy of our<br /> community, and we look forward to sharing<br />
            </p>
        </>
    )
}