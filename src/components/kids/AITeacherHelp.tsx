"use client";
import { useState } from "react";

export default function AITeacherHelp({title,objective,question}:{title:string;objective:string;question?:string}){
 const [open,setOpen]=useState(false); const [step,setStep]=useState(0);
 const hints=[
  `Let us slow down. This activity helps you ${objective.toLowerCase()}. Look for the most important clue first.`,
  question?`Read this carefully: “${question}”. Try removing answers that clearly cannot be right.`:`Try a smaller example first, then use the same idea in the game.`,
  `You do not need to rush. Say your thinking aloud, test one choice, and check whether it fits.`,
 ];
 return <div className="teacher-help"><button className="button teacher-button" type="button" onClick={()=>setOpen(!open)}>🤖 Help teacher</button>{open&&<div className="teacher-bubble" role="status"><strong>MindRailo Help Teacher · {title}</strong><p>{hints[Math.min(step,hints.length-1)]}</p><div className="teacher-actions"><button type="button" onClick={()=>setStep(Math.min(step+1,hints.length-1))}>Give another hint</button><button type="button" onClick={()=>{setOpen(false);setStep(0)}}>I’ll try now</button></div><small>This offline helper gives guided hints and never asks a child for personal information.</small></div>}</div>;
}
