import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GlobalGame } from "@/data/games";
import { gameHref } from "@/data/games";
export default function GameCard({game}:{game:GlobalGame}){return <Link href={gameHref(game)} className="arcade-card"><div className="arcade-art" aria-hidden="true"><span>{game.emoji}</span></div><div className="arcade-card-body"><p className="small-label">{game.category}</p><h3>{game.title}</h3><p>{game.description}</p><span className="card-link">Play now <ArrowRight size={16}/></span></div></Link>}
