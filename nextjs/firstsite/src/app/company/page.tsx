import React from 'react';
import { Header } from '../../../components/Header/header';
import { Footer } from '../../../components/Footer/footer';
import { Company } from '../../../components/Main/Company/company';

export default function Home() {
  return (
    <div>
      <Header />
      <Company />
      <Footer />
    </div>
  );
}