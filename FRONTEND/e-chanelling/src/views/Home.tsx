import Header from "../layouts/Header.tsx";
import Hero from "../componenets/Hero/Hero.tsx";
import MainSearch from "../componenets/MainSearch/MainSearch.tsx";
import HospitalFeature from "../componenets/FeatureComponent/HospitalFeature.tsx";
import QuickView from "../componenets/QuickView/QuickView.tsx";

export default function Home() {
    return (
        <div className={""}>
            <Header />
            <Hero />
            <MainSearch />
            <QuickView/>
            <HospitalFeature/>
        </div>
    );
}