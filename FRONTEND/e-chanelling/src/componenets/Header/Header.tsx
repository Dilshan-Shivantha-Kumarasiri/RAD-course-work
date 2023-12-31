import StaticHeader from "./HeaderComponent/StaticHeader.tsx";
import NavigationMenu from "./HeaderComponent/NavigationMenu.tsx"

export default function Header(){
    return (
        <>
            <StaticHeader />
            <NavigationMenu />
        </>

    );
}