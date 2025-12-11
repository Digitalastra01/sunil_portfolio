import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <Layout>
      <Hero />
      <ScrollReveal>
        <Skills />
      </ScrollReveal>
      <ScrollReveal>
        <Experience />
      </ScrollReveal>
      <ScrollReveal>
        <Projects />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </Layout>
  );
}

export default App;
