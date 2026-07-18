"use client";
import Link from "next/link";
import { Gamepad2, X } from "lucide-react";
import { useState } from "react";
import { globalGames, gameHref } from "@/data/games";
export default function QuickPlay(){const [open,setOpen]=useState(false);const quick=globalGames.filter(g=>g.quick);return <div className="quick-play"><button className="quick-play-button" onClick={()=>setOpen(v=>!v)} aria-expanded={open}>{open?<X size={20}/>:<Gamepad2 size={20}/>}<span>{open?"Close":"Quick Play"}</span></button>{open&&<div className="quick-play-panel"><div className="quick-play-head"><strong>Jump into a game</strong><Link href="/games/" onClick={()=>setOpen(false)}>View all</Link></div>{quick.map(game=><Link key={game.slug} href={gameHref(game)} onClick={()=>setOpen(false)}><span>{game.emoji}</span><span><strong>{game.title}</strong><small>{game.category}</small></span></Link>)}</div>}</div>}
