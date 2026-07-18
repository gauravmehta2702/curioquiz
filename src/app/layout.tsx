import type { Metadata } from "next";
import Link from "next/link";
import { Brain } from "lucide-react";
import SiteNavigation from "@/components/SiteNavigation";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import CookieConsent from "@/components/CookieConsent";
import QuickPlay from "@/components/games/QuickPlay";
import "./globals.css";

export const metadata: Metadata = { metadataBase:new URL("https://mindrailo.com"), title:{default:"Mindrailo | Free Online Games, Quizzes and Learning",template:"%s | Mindrailo"}, description:"Play free browser games, explore quizzes and learn through interactive activities for players around the world.", applicationName:"Mindrailo", openGraph:{type:"website",siteName:"Mindrailo",url:"https://mindrailo.com",title:"Mindrailo | Free Online Games, Quizzes and Learning",description:"Free browser games, quizzes and interactive learning for global players."}, robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}){const year=new Date().getFullYear();return <html lang="en-GB"><body>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:"Mindrailo",url:"https://mindrailo.com",potentialAction:{"@type":"SearchAction",target:"https://mindrailo.com/search/?q={search_term_string}","query-input":"required name=search_term_string"}})}}/>
<SiteNavigation/><AnalyticsScripts/>{children}<QuickPlay/><CookieConsent/><footer className="site-footer"><div className="page-container footer-grid"><div><Link className="brand footer-brand" href="/"><span className="brand-icon"><Brain size={23}/></span><span>Mindrailo</span></Link><p>Free browser games, quizzes and learning experiences for players around the world.</p></div><div><h2>Explore</h2><Link href="/games/">Play games</Link><Link href="/quizzes/">All quizzes</Link><Link href="/categories/">Categories</Link><Link href="/search/">Search</Link><Link href="/kids/">Mindrailo Kids</Link></div><div><h2>Company</h2><Link href="/about/">About</Link><Link href="/contact/">Contact</Link><Link href="/methodology/">Methodology</Link><Link href="/faq/">FAQ</Link></div><div><h2>Legal</h2><Link href="/privacy/">Privacy</Link><Link href="/terms/">Terms</Link><Link href="/disclaimer/">Disclaimer</Link></div></div><div className="page-container footer-bottom"><span>© {year} Mindrailo</span><span>Built for play, curiosity and learning.</span></div></footer></body></html>}
