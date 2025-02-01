import {
  HeroSection,
  About,
  Projects,
  Contact,
  SocialProf
} from "../components/sections"

export default function Page() {
  return (
    <>
      <HeroSection />
      <SocialProf />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
