"use client";

import { useEffect, useState } from "react";
import type { KidsGameDefinition } from "@/data/kidsGames";
import LanguageNarrator from "./LanguageNarrator";
import AITeacherHelp from "./AITeacherHelp";

type Question = { q: string; options: string[]; answer: string; explain: string };

const specificBanks: Record<string, Question[]> = {
  "addition-adventure": [
    { q:"What is 6 + 7?", options:["11","12","13","14"], answer:"13", explain:"Six plus seven equals thirteen." },
    { q:"What is 9 + 8?", options:["15","16","17","18"], answer:"17", explain:"Nine plus eight equals seventeen." },
    { q:"What is 14 + 5?", options:["18","19","20","21"], answer:"19", explain:"Fourteen plus five equals nineteen." },
  ],
  "subtraction-sprint": [
    { q:"What is 15 − 6?", options:["7","8","9","10"], answer:"9", explain:"Fifteen take away six leaves nine." },
    { q:"What is 20 − 8?", options:["10","11","12","13"], answer:"12", explain:"Twenty take away eight leaves twelve." },
    { q:"What is 31 − 9?", options:["21","22","23","24"], answer:"22", explain:"Thirty-one minus nine equals twenty-two." },
  ],
  "multiplication-race": [
    { q:"What is 6 × 4?", options:["20","22","24","26"], answer:"24", explain:"Six groups of four make twenty-four." },
    { q:"What is 8 × 7?", options:["48","54","56","64"], answer:"56", explain:"Eight times seven is fifty-six." },
    { q:"What is 9 × 5?", options:["35","40","45","50"], answer:"45", explain:"Nine groups of five make forty-five." },
  ],
  "division-dash": [
    { q:"What is 24 ÷ 6?", options:["3","4","5","6"], answer:"4", explain:"Twenty-four shared into six equal groups gives four." },
    { q:"What is 35 ÷ 5?", options:["5","6","7","8"], answer:"7", explain:"Thirty-five divided by five equals seven." },
    { q:"What is 48 ÷ 8?", options:["5","6","7","8"], answer:"6", explain:"Forty-eight divided by eight equals six." },
  ],
  "fraction-pizza": [
    { q:"Which fraction means one of four equal parts?", options:["1/2","1/3","1/4","3/4"], answer:"1/4", explain:"One quarter is one of four equal parts." },
    { q:"Which fraction is equal to one half?", options:["2/4","1/3","3/4","2/3"], answer:"2/4", explain:"Two quarters cover the same amount as one half." },
    { q:"Which is larger?", options:["1/4","3/4","They are equal","Cannot tell"], answer:"3/4", explain:"Three quarters is larger than one quarter." },
  ],
  "decimal-detective": [
    { q:"Which decimal is largest?", options:["0.4","0.8","0.3","0.6"], answer:"0.8", explain:"Eight tenths is the largest value." },
    { q:"What is 0.5 + 0.2?", options:["0.6","0.7","0.8","0.9"], answer:"0.7", explain:"Five tenths plus two tenths equals seven tenths." },
    { q:"Which equals 75 hundredths?", options:["0.075","0.75","7.5","75.0"], answer:"0.75", explain:"Seventy-five hundredths is written 0.75." },
  ],
  "time-master": [
    { q:"How many minutes are in one hour?", options:["30","45","60","100"], answer:"60", explain:"One hour contains sixty minutes." },
    { q:"Half past 3 is written as…", options:["3:15","3:30","3:45","4:30"], answer:"3:30", explain:"Half past three is thirty minutes after three." },
    { q:"What time is 20 minutes after 4:10?", options:["4:20","4:30","4:40","5:10"], answer:"4:30", explain:"Adding twenty minutes to 4:10 gives 4:30." },
  ],
  "money-challenge": [
    { q:"A toy costs £3 and a book costs £4. What is the total?", options:["£5","£6","£7","£8"], answer:"£7", explain:"Three pounds plus four pounds equals seven pounds." },
    { q:"You pay £10 for an item costing £6. How much change?", options:["£2","£3","£4","£5"], answer:"£4", explain:"Ten pounds minus six pounds leaves four pounds." },
    { q:"Which is worth more?", options:["50p","£1","20p","10p"], answer:"£1", explain:"One pound equals one hundred pence." },
  ],
  "shape-detective": [
    { q:"How many sides does a hexagon have?", options:["5","6","7","8"], answer:"6", explain:"A hexagon has six sides." },
    { q:"Which shape has no corners?", options:["Square","Triangle","Circle","Rectangle"], answer:"Circle", explain:"A circle has no straight sides or corners." },
    { q:"How many faces does a cube have?", options:["4","5","6","8"], answer:"6", explain:"A cube has six square faces." },
  ],
  "measurement-lab": [
    { q:"Which unit is best for the length of a pencil?", options:["Kilometres","Centimetres","Litres","Kilograms"], answer:"Centimetres", explain:"A pencil is conveniently measured in centimetres." },
    { q:"Which unit measures liquid capacity?", options:["Litres","Metres","Grams","Seconds"], answer:"Litres", explain:"Litres measure how much liquid a container can hold." },
    { q:"100 centimetres equals…", options:["1 metre","10 metres","100 metres","1 kilometre"], answer:"1 metre", explain:"One hundred centimetres make one metre." },
  ],
  "mental-maths": [
    { q:"What is 50 + 25?", options:["65","70","75","80"], answer:"75", explain:"Fifty plus twenty-five equals seventy-five." },
    { q:"Double 18 is…", options:["26","34","36","38"], answer:"36", explain:"Two groups of eighteen make thirty-six." },
    { q:"Half of 90 is…", options:["40","45","50","55"], answer:"45", explain:"Ninety split into two equal parts gives forty-five." },
  ],
  "number-patterns": [
    { q:"What comes next: 5, 10, 15, 20, ?", options:["21","22","25","30"], answer:"25", explain:"The pattern adds five each time." },
    { q:"What comes next: 3, 6, 12, 24, ?", options:["30","36","42","48"], answer:"48", explain:"Each number is doubled." },
    { q:"What is missing: 100, 90, 80, ?, 60", options:["65","70","75","85"], answer:"70", explain:"The pattern subtracts ten each time." },
  ],
  "spelling-bee": [
    { q:"Which word is spelled correctly?", options:["frend","friend","freind","friand"], answer:"friend", explain:"Friend is spelled f-r-i-e-n-d." },
    { q:"Which word is spelled correctly?", options:["beautiful","beautifull","beutiful","beautyful"], answer:"beautiful", explain:"Beautiful is spelled b-e-a-u-t-i-f-u-l." },
    { q:"Which word is spelled correctly?", options:["necessary","neccessary","necesary","necessery"], answer:"necessary", explain:"Necessary has one c and two s letters." },
  ],
  "phonics-builder": [
    { q:"Which word begins with the /sh/ sound?", options:["ship","chip","sip","tip"], answer:"ship", explain:"Ship begins with the sh sound." },
    { q:"Which word rhymes with cat?", options:["dog","hat","cup","bed"], answer:"hat", explain:"Cat and hat have the same ending sound." },
    { q:"Which word has the long /ee/ sound?", options:["tree","trap","top","turn"], answer:"tree", explain:"Tree contains the long ee sound." },
  ],
  "vocabulary-quest": [
    { q:"What does enormous mean?", options:["Very small","Very large","Very quiet","Very quick"], answer:"Very large", explain:"Enormous means extremely large." },
    { q:"Choose the synonym of happy.", options:["Joyful","Angry","Tired","Rough"], answer:"Joyful", explain:"Joyful means nearly the same as happy." },
    { q:"Choose the antonym of ancient.", options:["Old","Modern","Historic","Broken"], answer:"Modern", explain:"Modern is the opposite of ancient." },
  ],
  "grammar-adventure": [
    { q:"Which word is a noun?", options:["run","bright","school","quickly"], answer:"school", explain:"School names a place, so it is a noun." },
    { q:"Which word is an adjective?", options:["blue","jump","softly","table"], answer:"blue", explain:"Blue can describe a noun, so it is an adjective." },
    { q:"Choose the correct sentence.", options:["She are running.","She is running.","She running is.","Is she running are."], answer:"She is running.", explain:"She is running has correct subject–verb agreement." },
  ],
  "punctuation-power": [
    { q:"Which sentence is punctuated correctly?", options:["where are you","Where are you?","where are you.","Where are you!"], answer:"Where are you?", explain:"A question begins with a capital and ends with a question mark." },
    { q:"Which sentence uses a comma correctly?", options:["I bought apples bananas and pears.","I bought, apples bananas and pears.","I bought apples, bananas and pears.","I bought apples bananas, and pears"], answer:"I bought apples, bananas and pears.", explain:"A comma separates items in a list." },
    { q:"Which sentence is correct?", options:["sam lives in london.","Sam lives in London.","Sam lives in london", "sam lives in London."], answer:"Sam lives in London.", explain:"Names and places need capital letters, and the sentence needs a full stop." },
  ],
  "reading-detective": [
    { q:"Mia packed an umbrella because dark clouds filled the sky. Why did she pack it?", options:["It was sunny","Rain was likely","She was cold","It was night"], answer:"Rain was likely", explain:"Dark clouds suggest rain may be coming." },
    { q:"Leo whispered in the library. Why did he whisper?", options:["Libraries are quiet","He was outside","He was singing","He was angry"], answer:"Libraries are quiet", explain:"People usually speak quietly in libraries." },
    { q:"The puppy scratched at the door and wagged its tail. What did it probably want?", options:["To go outside","To sleep","To read","To hide"], answer:"To go outside", explain:"Scratching at the door often means a dog wants to go out." },
  ],
  "sentence-builder": [
    { q:"Choose the complete sentence.", options:["The green frog.","Jumping over.","The green frog jumped.","Very quickly."], answer:"The green frog jumped.", explain:"It has a subject and a verb and expresses a complete idea." },
    { q:"Which word best completes: The bird ___ in the sky.", options:["flies","blue","nest","soft"], answer:"flies", explain:"Flies is the action that completes the sentence." },
    { q:"Choose the best order.", options:["cake / baked / Mum / a","Mum baked a cake.","Baked Mum cake a.","A cake Mum baked?"], answer:"Mum baked a cake.", explain:"The sentence follows subject, verb and object order." },
  ],
  "synonym-safari": [
    { q:"Which word is a synonym of quick?", options:["Fast","Late","Heavy","Dark"], answer:"Fast", explain:"Fast and quick have similar meanings." },
    { q:"Which word is a synonym of clever?", options:["Smart","Noisy","Weak","Empty"], answer:"Smart", explain:"Smart and clever have similar meanings." },
    { q:"Which word is a synonym of begin?", options:["Finish","Start","Pause","Forget"], answer:"Start", explain:"Begin and start mean the same thing." },
  ],
  "animal-kingdom": [
    { q:"Which animal is a mammal?", options:["Dolphin","Shark","Trout","Octopus"], answer:"Dolphin", explain:"Dolphins breathe air and feed milk to their young." },
    { q:"What is a herbivore?", options:["An animal that eats plants","An animal that eats meat","An animal that flies","An animal that sleeps all day"], answer:"An animal that eats plants", explain:"Herbivores mainly eat plants." },
    { q:"Which habitat suits a camel?", options:["Desert","Arctic","Rainforest canopy","Deep ocean"], answer:"Desert", explain:"Camels are adapted to dry desert conditions." },
  ],
  "space-explorer": [
    { q:"Which planet is known as the Red Planet?", options:["Venus","Mars","Neptune","Mercury"], answer:"Mars", explain:"Iron minerals make Mars look reddish." },
    { q:"What does Earth orbit?", options:["The Moon","Mars","The Sun","Jupiter"], answer:"The Sun", explain:"Earth travels around the Sun." },
    { q:"Which is a natural satellite of Earth?", options:["The Moon","The Sun","Mars","Polaris"], answer:"The Moon", explain:"The Moon naturally orbits Earth." },
  ],
  "human-body": [
    { q:"Which organ pumps blood around the body?", options:["Heart","Lungs","Brain","Stomach"], answer:"Heart", explain:"The heart pumps blood through blood vessels." },
    { q:"Which organs help us breathe?", options:["Kidneys","Lungs","Bones","Skin"], answer:"Lungs", explain:"The lungs take in oxygen and remove carbon dioxide." },
    { q:"What protects the brain?", options:["Skull","Ribs","Spine","Muscles"], answer:"Skull", explain:"The skull forms a hard protective case around the brain." },
  ],
  "weather-lab": [
    { q:"Which instrument measures temperature?", options:["Thermometer","Compass","Ruler","Clock"], answer:"Thermometer", explain:"A thermometer measures temperature." },
    { q:"What type of cloud often brings thunderstorms?", options:["Cumulonimbus","Cirrus","Fog","Mist"], answer:"Cumulonimbus", explain:"Tall cumulonimbus clouds can produce thunderstorms." },
    { q:"Which season usually follows spring?", options:["Winter","Autumn","Summer","Spring"], answer:"Summer", explain:"In the usual seasonal cycle, summer follows spring." },
  ],
  "world-flags": [
    { q:"Which country has a maple leaf on its flag?", options:["Canada","Japan","Brazil","India"], answer:"Canada", explain:"Canada's flag has a red maple leaf." },
    { q:"Which country's flag has a red circle on a white background?", options:["Japan","France","Italy","Germany"], answer:"Japan", explain:"Japan's flag features a red sun disc." },
    { q:"Which country's flag is called the Union Jack?", options:["United Kingdom","United States","Australia","New Zealand"], answer:"United Kingdom", explain:"The Union Jack is the national flag of the United Kingdom." },
  ],
  "continents-oceans": [
    { q:"Which is the largest continent?", options:["Asia","Africa","Europe","Australia"], answer:"Asia", explain:"Asia is the largest continent by land area." },
    { q:"Which ocean lies between Africa and Australia?", options:["Indian Ocean","Atlantic Ocean","Arctic Ocean","Southern Ocean"], answer:"Indian Ocean", explain:"The Indian Ocean lies between Africa, Asia and Australia." },
    { q:"How many continents are commonly taught?", options:["5","6","7","8"], answer:"7", explain:"Seven continents are commonly taught." },
  ],
  "capital-cities": [
    { q:"What is the capital of France?", options:["Paris","Rome","Madrid","Berlin"], answer:"Paris", explain:"Paris is the capital of France." },
    { q:"What is the capital of India?", options:["Mumbai","New Delhi","Kolkata","Chennai"], answer:"New Delhi", explain:"New Delhi is the capital of India." },
    { q:"What is the capital of Japan?", options:["Tokyo","Kyoto","Osaka","Seoul"], answer:"Tokyo", explain:"Tokyo is the capital of Japan." },
  ],
  "pattern-builder": [
    { q:"What comes next: ▲ ● ▲ ● ?", options:["▲","●","■","◆"], answer:"▲", explain:"The pattern alternates triangle and circle." },
    { q:"What comes next: 1, 4, 7, 10, ?", options:["11","12","13","14"], answer:"13", explain:"The pattern adds three each time." },
    { q:"Which completes the pattern: red, blue, blue, red, blue, blue, ?", options:["red","blue","green","yellow"], answer:"red", explain:"The repeating unit is red, blue, blue." },
  ],
};

function QuizGame({ game }: { game: KidsGameDefinition }) {
  const qs = specificBanks[game.slug];
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [locked, setLocked] = useState(false);
  const item = qs[i % qs.length];
  const choose = (a: string) => {
    if (locked) return;
    const ok = a === item.answer;
    setFeedback(ok ? `✅ ${item.explain}` : "Not quite. Try again or ask the Help Teacher for a hint.");
    if (ok) {
      setLocked(true);
      setScore((s) => s + 1);
      window.setTimeout(() => { setI((n) => n + 1); setFeedback(""); setLocked(false); }, 900);
    }
  };
  return <div className="game-stage polished-stage">
    <div className="game-topbar"><div className="game-score">⭐ Score {score}</div><div className="question-counter">Question {(i % qs.length) + 1} of {qs.length}</div></div>
    <div className="question-card"><span className="question-emoji">{game.emoji}</span><h2>{item.q}</h2></div>
    <div className="answer-grid">{item.options.map((o)=><button key={o} type="button" disabled={locked} onClick={()=>choose(o)}>{o}</button>)}</div>
    {feedback && <p className="game-feedback" aria-live="polite">{feedback}</p>}
    <div className="game-support-row"><AITeacherHelp title={game.title} objective={game.objective} question={item.q}/><LanguageNarrator text={`${game.title}. ${item.q}`}/></div>
  </div>;
}

const WIN_LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] as const;
type Mark = "X"|"O"|"";
function getWinner(board:Mark[]):Mark|"draw"|null { for(const [a,b,c] of WIN_LINES) if(board[a]&&board[a]===board[b]&&board[a]===board[c]) return board[a]; return board.every(Boolean)?"draw":null; }
function chooseComputerMove(board:Mark[]):number|null { const empty=board.map((v,i)=>v?-1:i).filter(i=>i>=0); if(!empty.length)return null; const win=(m:"X"|"O")=>{for(const i of empty){const c=[...board];c[i]=m;if(getWinner(c)===m)return i;}return null}; return win("O")??win("X")??(!board[4]?4:null)??[0,2,6,8].filter(i=>!board[i])[0]??empty[0]; }
function TicTacToe(){
 const [board,setBoard]=useState<Mark[]>(Array(9).fill("")); const [thinking,setThinking]=useState(false); const [wins,setWins]=useState({you:0,cpu:0,draw:0}); const result=getWinner(board);
 const play=(i:number)=>{if(board[i]||result||thinking)return;const next=[...board];next[i]="X";const playerResult=getWinner(next);setBoard(next);if(playerResult==="X")setWins(s=>({...s,you:s.you+1}));else if(playerResult==="draw")setWins(s=>({...s,draw:s.draw+1}));else setThinking(true)};
 useEffect(()=>{if(!thinking)return;const t=window.setTimeout(()=>{setBoard(cur=>{if(getWinner(cur))return cur;const m=chooseComputerMove(cur);if(m===null)return cur;const n=[...cur];n[m]="O";const cpuResult=getWinner(n);if(cpuResult==="O")setWins(s=>({...s,cpu:s.cpu+1}));else if(cpuResult==="draw")setWins(s=>({...s,draw:s.draw+1}));return n});setThinking(false)},420);return()=>clearTimeout(t)},[thinking]);
 const reset=()=>{setBoard(Array(9).fill(""));setThinking(false)}; const status=result==="X"?"🎉 You win!":result==="O"?"🤖 Computer wins — try again!":result==="draw"?"🤝 Draw!":thinking?"Computer is thinking…":"Your turn — place X";
 return <div className="game-stage polished-stage ttt-game"><div className="classic-scoreboard"><span>YOU {wins.you}</span><span>DRAWS {wins.draw}</span><span>CPU {wins.cpu}</span></div><h2>{status}</h2><p className="game-instruction">Make a straight line of three before the computer.</p><div className="ttt-board" role="grid">{board.map((v,i)=><button key={i} type="button" aria-label={`Square ${i+1}${v?`, ${v}`:", empty"}`} className={v?`mark-${v.toLowerCase()}`:""} disabled={!!v||!!result||thinking} onClick={()=>play(i)}>{v}</button>)}</div><div className="game-actions"><button className="button button-primary" onClick={reset}>New round</button></div><AITeacherHelp title="Tic-Tac-Toe" objective="plan ahead and make a line of three"/></div>
}

function Memory(){
 const symbols=["🐼","🚀","🍎","⭐","🦁","🎈"]; const deck=["🐼","🚀","🍎","⭐","🦁","🎈","⭐","🐼","🎈","🍎","🚀","🦁"].map((value,index)=>({value,id:index})); const [open,setOpen]=useState<number[]>([]);const [done,setDone]=useState<number[]>([]);const [moves,setMoves]=useState(0);
 const flip=(i:number)=>{if(open.includes(i)||done.includes(i)||open.length===2)return;const n=[...open,i];setOpen(n);if(n.length===2){setMoves(m=>m+1);window.setTimeout(()=>{if(deck[n[0]].value===deck[n[1]].value)setDone(d=>[...d,...n]);setOpen([])},650)}};
 return <div className="game-stage polished-stage"><div className="game-topbar"><div className="game-score">Pairs {done.length/2}/{symbols.length}</div><div>Moves {moves}</div></div><h2>{done.length===deck.length?"🎉 All pairs matched!":"Match all the pairs"}</h2><div className="memory-board">{deck.map((c,i)=><button key={c.id} type="button" className={done.includes(i)?"matched":""} onClick={()=>flip(i)}>{open.includes(i)||done.includes(i)?c.value:"?"}</button>)}</div><AITeacherHelp title="Memory Match" objective="remember where matching cards are hidden"/></div>
}

const SNAKES:Record<number,number>={98:78,95:56,92:72,83:61,69:33,64:42,48:26,36:6}; const LADDERS:Record<number,number>={2:38,7:14,8:31,15:26,21:42,28:84,51:67,71:91,78:98};
function buildBoardNumbers(){const out:number[]=[];for(let row=9;row>=0;row--){const r=Array.from({length:10},(_,i)=>row*10+1+i);if(row%2===1)r.reverse();out.push(...r)}return out}
const BOARD_NUMBERS=buildBoardNumbers();
function Snakes(){
 const [position,setPosition]=useState(1);const [dice,setDice]=useState<number|null>(null);const [message,setMessage]=useState("Roll the dice to begin!");const [rolling,setRolling]=useState(false);const nums=BOARD_NUMBERS;
 const roll=()=>{if(position===100||rolling)return;setRolling(true);let ticks=0;const timer=window.setInterval(()=>{setDice(Math.floor(Math.random()*6)+1);ticks++;if(ticks===7){clearInterval(timer);const value=Math.floor(Math.random()*6)+1;setDice(value);setPosition(cur=>{const attempted=cur+value;if(attempted>100){setMessage(`You rolled ${value}. You need an exact roll to reach 100.`);return cur}if(LADDERS[attempted]){setMessage(`🪜 Brilliant! Climb from ${attempted} to ${LADDERS[attempted]}.`);return LADDERS[attempted]}if(SNAKES[attempted]){setMessage(`🐍 Oops! Slide from ${attempted} to ${SNAKES[attempted]}.`);return SNAKES[attempted]}setMessage(attempted===100?"🏆 You reached square 100!":`Move ${value} spaces to square ${attempted}.`);return attempted});setRolling(false)}},70)};
 return <div className="game-stage polished-stage snakes-game"><div className="snakes-header"><div><h2>{position===100?"🏆 You won!":"Snakes & Ladders"}</h2><p className="game-instruction">Climb ladders, avoid snakes and reach 100.</p></div><div className={`dice-display ${rolling?"rolling":""}`}><span>🎲</span><strong>{dice??"–"}</strong></div></div><div className="snakes-board-wrap"><div className="snakes-board">{nums.map(n=><div key={n} className={`snakes-cell ${n%2?"cell-odd":"cell-even"} ${n===position?"player-square":""}`}><span className="cell-number">{n}</span>{LADDERS[n]&&<span className="board-symbol ladder-symbol">🪜</span>}{SNAKES[n]&&<span className="board-symbol snake-symbol">🐍</span>}{n===position&&<span className="player-token">🔵</span>}</div>)}</div></div><p className="snake-message" aria-live="polite">{message}</p><div className="game-actions"><button className="button button-primary" disabled={rolling||position===100} onClick={roll}>🎲 Roll dice</button><button className="button button-secondary" onClick={()=>{setPosition(1);setDice(null);setMessage("Roll the dice to begin!")}}>Start again</button></div><AITeacherHelp title="Snakes & Ladders" objective="count forward and understand number order"/></div>
}

export default function UniversalKidsGame({game}:{game:KidsGameDefinition}){if(game.type==="tic-tac-toe")return <TicTacToe/>;if(game.type==="memory")return <Memory/>;if(game.type==="snakes-ladders")return <Snakes/>;return <QuizGame game={game}/>}
