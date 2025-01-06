'use client'

import Image from "next/image";
import { useTheme } from "@/lib/store";

export default function Home() {
  const theme = useTheme((state)=> state.theme)
  const themeToggle = useTheme((state)=>state.toggleFn)
  
  return (
    <>
    <div style={{ 
      padding: '20px', 
      backgroundColor: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff',
    }}></div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={themeToggle}>Toggle Theme</button>
    </>
  );
}
