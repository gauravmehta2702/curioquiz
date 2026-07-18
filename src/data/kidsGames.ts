export type KidsGameType = "quiz" | "memory" | "tic-tac-toe" | "snakes-ladders";
export type KidsSubject = "Maths" | "English" | "Science" | "Geography" | "Logic" | "Classic";

export type KidsGameDefinition = {
  slug: string;
  title: string;
  emoji: string;
  subject: KidsSubject;
  ages: number[];
  difficulty: "Easy" | "Medium" | "Challenge";
  type: KidsGameType;
  objective: string;
  description: string;
  affiliateCategory?: "books" | "stem" | "stationery";
};

const q = (slug:string,title:string,emoji:string,subject:KidsSubject,ages:number[],difficulty:KidsGameDefinition["difficulty"],objective:string,description:string,affiliateCategory:KidsGameDefinition["affiliateCategory"]="books"):KidsGameDefinition => ({slug,title,emoji,subject,ages,difficulty,type:"quiz",objective,description,affiliateCategory});

export const kidsGames: KidsGameDefinition[] = [
 q("addition-adventure","Addition Adventure","➕","Maths",[6,7,8],"Easy","Add numbers accurately","Count, combine and solve cheerful addition challenges.","stationery"),
 q("subtraction-sprint","Subtraction Sprint","➖","Maths",[6,7,8],"Easy","Subtract within age-appropriate ranges","Race through friendly take-away questions.","stationery"),
 q("multiplication-race","Multiplication Race","✖️","Maths",[7,8,9,10,11],"Medium","Recall multiplication facts","Build times-table confidence one lap at a time."),
 q("division-dash","Division Dash","➗","Maths",[8,9,10,11],"Medium","Understand equal sharing","Share numbers into equal groups."),
 q("fraction-pizza","Fraction Pizza","🍕","Maths",[7,8,9,10,11],"Medium","Recognise common fractions","Slice pizzas and identify fractions."),
 q("decimal-detective","Decimal Detective","🔎","Maths",[9,10,11],"Challenge","Compare and interpret decimals","Investigate decimal clues and choose the right value."),
 q("time-master","Time Master","🕒","Maths",[6,7,8,9],"Medium","Read and reason about time","Practise hours, minutes and everyday schedules."),
 q("money-challenge","Money Challenge","🪙","Maths",[6,7,8,9,10],"Medium","Use money in practical problems","Count coins and solve simple shopping questions."),
 q("shape-detective","Shape Detective","🔷","Maths",[6,7,8],"Easy","Identify 2D and 3D shapes","Spot sides, corners and shape properties."),
 q("measurement-lab","Measurement Lab","📏","Maths",[7,8,9,10,11],"Medium","Compare length, mass and capacity","Choose sensible measurements for real objects."),
 q("mental-maths","Mental Maths Sprint","⚡","Maths",[7,8,9,10,11],"Challenge","Improve mental calculation","Quick-fire arithmetic with adjustable age level."),
 q("number-patterns","Number Pattern Quest","🔢","Maths",[6,7,8,9,10],"Medium","Continue number sequences","Find the rule and complete each pattern."),
 q("spelling-bee","Spelling Bee","🐝","English",[6,7,8,9,10,11],"Medium","Strengthen spelling","Choose correctly spelled age-appropriate words.","books"),
 q("phonics-builder","Phonics Builder","🔤","English",[6,7],"Easy","Connect sounds and letters","Match common sounds to letters and words.","books"),
 q("vocabulary-quest","Vocabulary Quest","📚","English",[7,8,9,10,11],"Medium","Grow word knowledge","Explore meanings, synonyms and context.","books"),
 q("grammar-adventure","Grammar Adventure","📝","English",[7,8,9,10,11],"Medium","Recognise grammar patterns","Practise nouns, verbs, adjectives and sentence choices.","books"),
 q("punctuation-power","Punctuation Power","❗","English",[7,8,9,10,11],"Medium","Use punctuation correctly","Repair sentences with commas, capitals and full stops.","books"),
 q("reading-detective","Reading Detective","🕵️","English",[7,8,9,10,11],"Challenge","Find information in short texts","Read carefully and answer comprehension clues.","books"),
 q("sentence-builder","Sentence Builder","🏗️","English",[6,7,8,9],"Easy","Build clear sentences","Choose words that make complete, sensible sentences.","books"),
 q("synonym-safari","Synonym Safari","🦁","English",[8,9,10,11],"Medium","Recognise similar meanings","Find word pairs that mean nearly the same thing.","books"),
 q("animal-kingdom","Animal Kingdom","🐘","Science",[6,7,8,9],"Easy","Classify and understand animals","Explore habitats, diets and animal groups.","stem"),
 q("space-explorer","Space Explorer","🚀","Science",[7,8,9,10,11],"Medium","Understand basic space science","Visit planets, stars and the Moon.","stem"),
 q("human-body","Human Body Mission","🫀","Science",[8,9,10,11],"Medium","Identify body systems and functions","Learn what organs do in child-friendly language.","stem"),
 q("weather-lab","Weather Lab","🌦️","Science",[6,7,8,9],"Easy","Recognise weather and seasons","Observe clouds, rain, temperature and seasons.","stem"),
 q("world-flags","World Flags","🏳️","Geography",[7,8,9,10,11],"Medium","Recognise selected world flags","Match countries and their flags."),
 q("continents-oceans","Continents & Oceans","🌍","Geography",[6,7,8,9],"Easy","Name continents and oceans","Travel around a simple world map."),
 q("capital-cities","Capital Cities","🏙️","Geography",[9,10,11],"Challenge","Match countries and capitals","Build global knowledge through quick questions."),
 q("pattern-builder","Pattern Builder","🧩","Logic",[6,7,8,9],"Easy","Recognise visual and number patterns","Choose what comes next."),
 {slug:"memory-match",title:"Memory Match",emoji:"🧠",subject:"Logic",ages:[6,7,8,9,10,11],difficulty:"Easy",type:"memory",objective:"Improve visual memory and concentration",description:"Turn cards, remember positions and match every pair.",affiliateCategory:"stem"},
 {slug:"tic-tac-toe",title:"Tic-Tac-Toe",emoji:"⭕",subject:"Classic",ages:[6,7,8,9,10,11],difficulty:"Easy",type:"tic-tac-toe",objective:"Plan ahead and recognise winning lines",description:"Play X and O against a friendly computer opponent."},
 {slug:"snakes-and-ladders",title:"Snakes & Ladders",emoji:"🐍",subject:"Classic",ages:[6,7,8,9,10,11],difficulty:"Easy",type:"snakes-ladders",objective:"Practise counting and turn-taking",description:"Roll the dice, climb ladders and avoid slippery snakes."},
];

export const kidsSubjects = ["Maths","English","Science","Geography","Logic","Classic"] as const;
export const kidsAges = [6,7,8,9,10,11] as const;
export function getKidsGame(slug:string){ return kidsGames.find(game=>game.slug===slug); }
