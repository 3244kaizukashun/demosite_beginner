import React from 'react';
import { Header } from '../../../components/Header/header';
import { Footer } from '../../../components/Footer/footer';
import { News } from '../../../components/Main/News/news';

export default function Home() {
  return (
    <div>
      <Header />
      <News />
      <Footer />
    </div>
  );
}