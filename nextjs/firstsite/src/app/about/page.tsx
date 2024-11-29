import React from 'react';
import { Header } from '../../../components/Header/header';
import { Footer } from '../../../components/Footer/footer';
import { About } from '../../../components/Main/About/about';

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Footer />
    </div>
  );
}