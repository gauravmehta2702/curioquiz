import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import GlobalGamePlayer from "@/components/games/GlobalGamePlayer";
import GameCard from "@/components/games/GameCard";
import {getGlobalGame,globalGames} from "@/data/games";
export function generateStaticParams(){return globalGames.filter(g=>g.type!=="kids-link").map(g=>({slug:g.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const game=getGlobalGame(slug);if(!game)return{};return{title:`Play ${game.title} Online Free | Mindrailo`,description:game.description,alternates:{canonical:`/games/${game.slug}/`}}}
export default async function GlobalGamePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const game=getGlobalGame(slug);if(!game||game.type==="kids-link")notFound();const related=globalGames.filter(g=>g.slug!==game.slug).slice(0,4);return <main><section className="section"><div className="page-container"><div className="game-page-head"><Link href="/games/">← Games Arcade</Link><p className="small-label">{game.category} game</p><h1>{game.emoji} {game.title}</h1><p>{game.description}</p></div><GlobalGamePlayer game={game}/><section className="game-info-card"><h2>How to play</h2><p>{game.howToPlay}</p><p><strong>Tip:</strong> Games save only lightweight preferences or scores in your browser. No account is required.</p></section><div className="section-heading compact-heading"><div><span className="small-label">Keep playing</span><h2>More fun games</h2></div></div><div className="arcade-grid compact-grid">{related.map(g=><GameCard key={g.slug} game={g}/>)}</div></div></section></main>}
