"use client";
import Link from "next/link";
import { Brain, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["/quizzes/","Quizzes"],["/categories/","Categories"],["/search/","Search"],["/guides/","Guides"],["/kids/","Mindrailo Kids"],["/faq/","FAQ"],["/about/","About"]] as const;
export default function SiteNavigation(){
 const [open,setOpen]=useState(false);
 useEffect(()=>{ const fn=(e:KeyboardEvent)=>e.key==="Escape"&&setOpen(false); window.addEventListener("keydown",fn); return()=>window.removeEventListener("keydown",fn)},[]);
 return <header className="site-header"><div className="page-container navigation">
  <Link className="brand" href="/" aria-label="Mindrailo homepage"><span className="brand-icon"><Brain size={24}/></span><span>Mindrailo</span></Link>
  <nav className="desktop-nav" aria-label="Main navigation">{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav>
  <Link className="nav-action" href="/quizzes/">Start a quiz</Link>
  <button className="mobile-menu" type="button" aria-label={open?"Close navigation menu":"Open navigation menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<nav className="mobile-nav page-container" aria-label="Mobile navigation">{links.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>}</header>
}
