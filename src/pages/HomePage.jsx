import React from 'react';
import { Layout } from '../components/layout/Layout';
import { HeroSection } from '../components/home/HeroSection';
import { IntroSection } from '../components/home/IntroSection';
import { RoomSection } from '../components/home/RoomSection';
import { ServiceSection } from '../components/home/ServiceSection';
import { FeedbackSection } from '../components/home/FeedbackSection';
const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <RoomSection />
      <ServiceSection />
      <FeedbackSection />
    </Layout>
  );
};

export default HomePage;