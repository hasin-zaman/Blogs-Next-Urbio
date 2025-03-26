import BlogsList from '@/components/BlogsList';
import Hero from '@/components/Hero';
import React from 'react'

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <BlogsList />
    </React.Fragment>
  );
}