import type {Metadata} from "next";
import {notFound} from "next/navigation";
import Link from "next/link";
import UniversalKidsGame from "@/components/kids/UniversalKidsGame";
import {AffiliateRecommendations,AdSlot} from "@/components/revenue/RevenueModules";
import {getKidsGame,kidsGames} from "@/data/kidsGames";
export function generateStaticParams(){return kidsGames.map(game=>({slug:game.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const game=getKidsGame(slug);if(!game)return{};return{title:`${game.title} – Free Game for Ages ${Math.min(...game.ages)}–${Math.max(...game.ages)} | MindRailo`,description:game.description,alternates:{canonical:`/kids/games/${game.slug}/`}}}
export default async function GamePage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const game=getKidsGame(slug);if(!game)notFound();return <main><section className="section"><div className="page-container"><div className="game-page-head"><Link href="/kids/">← Kids World</Link><p className="small-label">{game.subject} · Ages {Math.min(...game.ages)}–{Math.max(...game.ages)}</p><h1>{game.emoji} {game.title}</h1><p>{game.description}</p><div className="learning-objective"><strong>Learning objective:</strong> {game.objective}</div></div><UniversalKidsGame game={game}/><AdSlot label="Future child-safe advertisement"/><AffiliateRecommendations category={game.affiliateCategory}/></div></section></main>}
