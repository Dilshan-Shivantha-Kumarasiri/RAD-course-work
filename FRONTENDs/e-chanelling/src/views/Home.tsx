import Header from "../layouts/Header.tsx";
import Hero from "../componenets/Hero/Hero.tsx";
import MainSearch from "../componenets/MainSearch/MainSearch.tsx";
import HospitalFeature from "../componenets/FeatureComponent/HospitalFeature.tsx";
import QuickView from "../componenets/QuickView/QuickView.tsx";
import TopSpecialists from "../componenets/TopSpecialist/TopSpecilists.tsx";
import Footers from "../layouts/Footer.tsx";


export default function Home() {
    return (
        <div className={""}>
            <Header />
            <Hero />
            <MainSearch />
            <QuickView/>
            <HospitalFeature/>
            <TopSpecialists />
            <Footers/>
        </div>
    );
}