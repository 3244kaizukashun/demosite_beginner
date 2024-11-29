import React from 'react';
import { Header } from '../../../components/Header/header';
import { Footer } from '../../../components/Footer/footer';
import { Business } from '../../../components/Main/Business/business';

export default function Home() {
  return (
    <div>
      <Header />
      <Business />
      <Footer />
    </div>
  );
}