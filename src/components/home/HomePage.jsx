import { motion, useScroll, useSpring } from "framer-motion";
import HeroSection from './desktop/HeroSection';
import AboutUsSection from './desktop/AboutUsSection';
import FeaturesSection from './desktop/FeaturesSection';
import HowItWorkSection from './desktop/HowItWorkSection';
import ForCompanies from './desktop/ForCompanies';
import ForCandidates from './desktop/ForCandidates';
import TopEmployers from './desktop/TopEmployers';
import HeroSectionMob from './mobile/HeroSectionMob';
import AboutUsSectionMob from './mobile/AboutUsSectionMob';
import FeaturesSectionMob from './mobile/FeaturesSectionMob';
import TopEmployersMob from './mobile/TopEmployersMob';
import HowItWorkSectionMob from './mobile/HowItWorkSectionMob';
import ForCompaniesMob from './mobile/ForCompaniesMob';
import ForCandidatesMob from './mobile/ForCandidatesMob';
import ScrollToTop from 'react-scroll-to-top';
import Queries from './desktop/Queries';
import QueriesMob from "./mobile/QueriesMob";

const HomePage = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div className="progress-bar" style={{ scaleX }} />

            <div className='container-fluid p-0'>
                {/* For non-mobile devices */}
                <div className='d-none d-md-block'>
                    <HeroSection />
                    <AboutUsSection />
                    <FeaturesSection />
                    <TopEmployers />
                    <HowItWorkSection />
                    <ForCompanies />
                    <ForCandidates />
                    <Queries/>
                    <ScrollToTop smooth style={{ bottom: '15vh'}} />
                </div>

                {/* For mobile devices */}
                <div className='d-md-none'>
                    <HeroSectionMob />
                    <AboutUsSectionMob />
                    <FeaturesSectionMob />
                    <TopEmployersMob />
                    <HowItWorkSectionMob />
                    <ForCompaniesMob />
                    <ForCandidatesMob />
                    <QueriesMob />
                    <ScrollToTop smooth style={{ bottom: '5vh', right: '20px'}} />
                </div>
            </div>
        </>
    );
}

export default HomePage