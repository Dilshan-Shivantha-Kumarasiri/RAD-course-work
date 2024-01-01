import Header from "../layouts/Header.tsx";
import Hero from "../componenets/Hero/Hero.tsx";
import MainSearch from "../componenets/MainSearch/MainSearch.tsx";

export default function Home() {
    return (
        <div className={""}>
            <Header />
            <Hero />
            <MainSearch />
        </div>
    );
}