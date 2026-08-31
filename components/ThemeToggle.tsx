'use client';
import { useEffect, useState } from 'react';
export function ThemeToggle(){const [dark,setDark]=useState(false);useEffect(()=>{const v=localStorage.getItem('theme');const d=v? v==='dark':matchMedia('(prefers-color-scheme: dark)').matches;setDark(d);document.documentElement.classList.toggle('dark',d)},[]);return <button aria-label="Toggle dark mode" onClick={()=>{const n=!dark;setDark(n);localStorage.setItem('theme',n?'dark':'light');document.documentElement.classList.toggle('dark',n)}}>{dark?'Light':'Dark'}</button>}
