"use client";
import { useEffect, useMemo, useState } from "react";

export default function LanguageNarrator({ text }: { text: string }) {
  const [voices,setVoices]=useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI,setVoiceURI]=useState("");
  const [rate,setRate]=useState(0.9);
  useEffect(()=>{
    if(typeof window==="undefined"||!("speechSynthesis" in window)) return;
    const load=()=>setVoices(window.speechSynthesis.getVoices());
    load(); window.speechSynthesis.addEventListener("voiceschanged",load);
    return()=>window.speechSynthesis.removeEventListener("voiceschanged",load);
  },[]);
  const selected=useMemo(()=>voices.find(v=>v.voiceURI===voiceURI)??voices[0],[voices,voiceURI]);
  const speak=()=>{ if(!selected||typeof window==="undefined") return; window.speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(text); u.voice=selected; u.lang=selected.lang; u.rate=rate; window.speechSynthesis.speak(u); };
  return <div className="narrator-panel" aria-label="Narration controls">
    <label>Voice language<select value={selected?.voiceURI??""} onChange={e=>setVoiceURI(e.target.value)}>{voices.map(v=><option key={v.voiceURI} value={v.voiceURI}>{v.lang} — {v.name}</option>)}</select></label>
    <label>Speed<select value={rate} onChange={e=>setRate(Number(e.target.value))}><option value={0.7}>Slow</option><option value={0.9}>Normal</option><option value={1.1}>Fast</option></select></label>
    <button className="button button-secondary" type="button" onClick={speak}>🔊 Narrate</button>
    <small>Available languages depend on voices installed in this browser or device.</small>
  </div>;
}
