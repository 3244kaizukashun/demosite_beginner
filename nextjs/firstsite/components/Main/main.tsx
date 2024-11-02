import React from 'react';
import { Mainvisual } from './MainVisual/mainvisual';
import { News } from './News/news';
import { About } from './About/about';
import { Business } from './Business/business';
import { Company } from './Company/company';


export function Main() {
  return (
    <main>
        <Mainvisual />
        <News />
        <About />
        <Business />
        <Company />
    </main>
  );
}