export type GameCategory = "Board" | "Puzzle" | "Brain" | "Word" | "Casual" | "Classic" | "Learning";
export type GlobalGameType = "chess" | "connect-four" | "sudoku" | "number-merge" | "snake" | "kids-link";

export type GlobalGame = {
  slug: string;
  title: string;
  emoji: string;
  category: GameCategory;
  type: GlobalGameType;
  description: string;
  howToPlay: string;
  featured?: boolean;
  quick?: boolean;
  tags: string[];
};

export const globalGames: GlobalGame[] = [
  {slug:"chess",title:"Chess",emoji:"♟️",category:"Board",type:"chess",description:"Play a complete local two-player chess game with piece movement, captures, promotion and move history.",howToPlay:"Select a piece, then choose a highlighted legal square. Capture the opponent king by delivering checkmate.",featured:true,quick:true,tags:["strategy","board","classic"]},
  {slug:"connect-four",title:"Connect Four",emoji:"🔴",category:"Board",type:"connect-four",description:"Drop discs and connect four before the computer does.",howToPlay:"Choose a column. Your disc falls to the lowest available space. Make four in a row horizontally, vertically or diagonally.",featured:true,quick:true,tags:["strategy","family","quick"]},
  {slug:"sudoku",title:"Sudoku",emoji:"🔢",category:"Puzzle",type:"sudoku",description:"Solve a clean 9×9 number puzzle with notes, validation and a new puzzle button.",howToPlay:"Fill each row, column and 3×3 box with digits 1–9 without repeating a digit.",featured:true,quick:true,tags:["numbers","logic","brain"]},
  {slug:"number-merge",title:"Number Merge",emoji:"✨",category:"Brain",type:"number-merge",description:"Slide and combine matching tiles in this original number-merging puzzle.",howToPlay:"Use arrow keys or the on-screen controls. Equal tiles merge into a larger tile. Keep the board from filling.",featured:true,quick:true,tags:["numbers","strategy","mobile"]},
  {slug:"snake",title:"Classic Snake",emoji:"🐍",category:"Casual",type:"snake",description:"Guide the snake, collect fruit and beat your best score.",howToPlay:"Use arrow keys or the on-screen controls. Eat fruit to grow and avoid walls and your own tail.",featured:true,quick:true,tags:["arcade","retro","quick"]},
  {slug:"tic-tac-toe",title:"Tic-Tac-Toe",emoji:"⭕",category:"Classic",type:"kids-link",description:"Play X and O against a friendly computer opponent.",howToPlay:"Make three marks in a row before the computer.",quick:true,tags:["family","strategy","quick"]},
  {slug:"snakes-and-ladders",title:"Snakes & Ladders",emoji:"🎲",category:"Classic",type:"kids-link",description:"Roll the dice, climb ladders and avoid snakes on a full 100-square board.",howToPlay:"Roll, move and reach square 100 using an exact final roll.",quick:true,tags:["family","board","dice"]},
  {slug:"memory-match",title:"Memory Match",emoji:"🧠",category:"Brain",type:"kids-link",description:"Flip cards and match every pair in as few moves as possible.",howToPlay:"Open two cards at a time and remember their positions.",tags:["memory","family","quick"]},
];

export const gameCategories: GameCategory[] = ["Board","Puzzle","Brain","Word","Casual","Classic","Learning"];
export function getGlobalGame(slug:string){return globalGames.find(game=>game.slug===slug)}
export function gameHref(game:GlobalGame){return game.type==="kids-link"?`/kids/games/${game.slug}/`:`/games/${game.slug}/`}
