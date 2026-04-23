import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningManagement from "@/components/LearningManagement";
import CorporateTrainings from "@/components/CorporateTrainings";
import PersonalisedTraining from "@/components/PersonalisedTraining";
import CapacityDevelopment from "@/components/CapacityDevelopment";
import ManagementDevelopment from "@/components/ManagementDevelopment";
import LearningWithCEO from "@/components/LearningWithCEO";
import TrainingConsultant from "@/components/TrainingConsultant";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <LearningManagement />
      <CorporateTrainings />
      <PersonalisedTraining />
      <CapacityDevelopment />
      <ManagementDevelopment />
      <LearningWithCEO />
      <TrainingConsultant />
      <CallToAction />
      <Testimonials />
      <Footer />
    </main>
  );
}