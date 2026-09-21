import BlogSection from './Components/blogpost.tsx';
import CircularMenu from './Components/Circular.tsx';
import HeroSection from './Components/HeroSection.tsx'
import TabSection from './Components/TabsSection.tsx';
import WhatWeOffer from './Components/WhatweOffer.tsx';
export default function Home() {
  return (
    <>
      <HeroSection/>
      <WhatWeOffer/>
      <TabSection/>
      <BlogSection/>
     
    </>
  );
}