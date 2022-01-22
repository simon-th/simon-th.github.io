import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import { GitHub, Spotify, LinkedIn, Instagram } from './icons';

type LayoutProps = {
  children: React.ReactNode;
};

const iconClass =
  'w-6 h-6 stroke-slate-500 fill-none stroke-1.5 hover:stroke-white hover:scale-110 transition ease-in-out';
const sideBarClass =
  'w-full flex flex-row md:flex-col justify-center md:pb-0 md:w-fit';

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="min-h-screen bg-dark-navy text-white">
      <Helmet>
        <title>Simon Hoque</title>
        <meta name="description" content="Simon Hoque personal website" />
        <meta
          name="keywords"
          content="computer, software, engineer, developer, backend, frontend, data science, machine learning"
        />
        <meta name="author" content="Simon Hoque" />
      </Helmet>
      <Navbar />
      <div className="container relative mx-auto top-0 py-28 sm:py-36 xl:py-48 xl:pb-auto z-10">
        {children}
      </div>
      <div className="bottom-0 w-full flex flex-col gap-4 pb-6 md:flex-row justify-between bg-transparent md:pb-12 md:fixed px-6">
        <div className={`${sideBarClass} gap-6`}>
          <a
            href="https://www.linkedin.com/in/simon-hoque"
            className={iconClass}
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </a>
          <a
            href="https://www.github.com/simon-th"
            className={iconClass}
            aria-label="GitHub"
          >
            <GitHub />
          </a>
          <a
            href="https://www.instagram.com/_simonhoque"
            className={iconClass}
            aria-label="Instagram"
          >
            <Instagram />
          </a>
          <a
            href="https://spoti.fi/3iTN4YT"
            className={iconClass}
            aria-label="Spotify"
          >
            <Spotify />
          </a>
        </div>
        <div className={`${sideBarClass} md:rotate-text`}>
          <a href="mailto:simon.thoque@gmail.com">
            <p className="text-sm text-slate-500 tracking-widest transition ease-in-out hover:scale-105 hover:text-white">
              simon.thoque@gmail.com
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
