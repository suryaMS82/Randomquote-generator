
let quotes=[ {
    "quotetext": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "---Thomas Edison"
  },
  {
    "quotetext": "You can observe a lot just by watching.",
    "author": "---Yogi Berra"
  },
  {
    "quotetext": "A house divided against itself cannot stand.",
    "author": "---Abraham Lincoln"
  },
  {
    "quotetext": "Difficulties increase the nearer we get to the goal.",
    "author": "---Johann Wolfgang von Goethe"
  },
  {
    "quotetext": "Fate is in your hands and no one elses",
    "author": "---Byron Pulsifer"
  },
  {
    "quotetext": "Be the chief but never the lord.",
    "author": "---Lao Tzu"
  },
  {
    "quotetext": "Nothing happens unless first we dream.",
    "author": "---Carl Sandburg"
  },
  {
    "quotetext": "Well begun is half done.",
    "author": "---Aristotle"
  },
  {
    "quotetext": "Life is a learning experience, only if you learn.",
    "author": "---Yogi Berra"
  },
  {
    "quotetext": "Self-complacency is fatal to progress.",
    "author": "---Margaret Sangster"
  },
  {
    "quotetext": "Peace comes from within. Do not seek it without.",
    "author": "---Buddha"
  },
  {
    "quotetext": "What you give is what you get.",
    "author": "---Byron Pulsifer"
  },
  {
    "quotetext": "We can only learn to love by loving.",
    "author": "---Iris Murdoch"
  },
  {
    "quotetext": "Life is change. Growth is optional. Choose wisely.",
    "author": "---Karen Clark"
  },
  {
    "quotetext": "You'll see it when you believe it.",
    "author": "---Wayne Dyer"
  },
  

  {
    "quotetext": "To lead people walk behind them.",
    "author": "---Lao Tzu"
  },
  {
    "quotetext": "Having nothing, nothing can he lose.",
    "author": "---William Shakespeare"
  },
  {
    "quotetext": "Trouble is only opportunity in work clothes.",
    "author": "---Henry J. Kaiser"
  },
  {
    "quotetext": "A rolling stone gathers no moss.",
    "author": "---Publilius Syrus"
  },
  {
    "quotetext": "Ideas are the beginning points of all fortunes.",
    "author": "---Napoleon Hill"
  },
  {
    "quotetext": "Everything in life is luck.",
    "author": "---Donald Trump"
  },
  {
    "quotetext": "Doing nothing is better than being busy doing nothing.",
    "author": "---Lao Tzu"
  },
  {
    "quotetext": "Trust yourself. You know more than you think you do.",
    "author": "---Benjamin Spock"
  },
  {
    "quotetext": "Study the past, if you would divine the future.",
    "author": "---Confucius"
  },
  
  {
    "quotetext": "From error to error one discovers the entire truth.",
    "author": "---Sigmund Freud"
  },
  {
    "quotetext": "Well done is better than well said.",
    "author": "---Benjamin Franklin"
  },
  {
    "quotetext": "Bite off more than you can chew, then chew it.",
    "author": "---Ella Williams"
  },
  {
    "quotetext": "Work out your own salvation. Do not depend on others.",
    "author": "---Buddha"
  },
  {
    "quotetext": "One today is worth two tomorrows.",
    "author": "---Benjamin Franklin"
  },
  {
    "quotetext": "Once you choose hope, anythings possible.",
    "author": "---Christopher Reeve"
  },
  {
    "quotetext": "God always takes the simplest way.",
    "author": "---Albert Einstein"
  },
  {
    "quotetext": "One fails forward toward success.",
    "author": "---Charles Kettering"
  },
  {
    "quotetext": "From small beginnings come great things.",
    "author":'---' 
  },
  {
    "quotetext": "Learning is a treasure that will follow its owner everywhere",
    "author": "---Chinese proverb"
  },
  {
    "quotetext": "Be as you wish to seem.",
    "author": "---Socrates"
  },
  {
    "quotetext": "The world is always in movement.",
    "author": "---V. Naipaul"
  },
  {
    "quotetext": "Never mistake activity for achievement.",
    "author": "---John Wooden"
  },
  {
    "quotetext": "What worries you masters you.",
    "author": "---Haddon Robinson"
  },
  {
    "quotetext": "One faces the future with ones past.",
    "author": "---Pearl Buck"
  },
  {
    "quotetext": "Goals are the fuel in the furnace of achievement.",
    "author": "---Brian Tracy"
  },
  {
    "quotetext": "Who sows virtue reaps honour.",
    "author": "---Leonardo da Vinci"
  },
  {
    "quotetext": "Be kind whenever possible. It is always possible.",
    "author": "---Dalai Lama"
  },

];
const quotetext=document.querySelector('.quotetext');
const author=document.querySelector('.author');
const button=document.querySelector('.button');

button.addEventListener('click' ,() =>{
    let random=Math.floor(Math.random()*quotes.length);
    quotetext.innerHTML = quotes[random].quotetext; 
    author.innerHTML= quotes[random].author;
})