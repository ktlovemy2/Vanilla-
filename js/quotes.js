const quotes = [
  {
    quote:
      "Why should we build our happiness on the opinons of others, when we can find it in our own hearts?",
    author: "Jean-Jacques Rousseau",
  },
  {
    quote:
      "The world of reality has its limits; the world of imagination is boundless.",
    author: "Jean-Jacques Rousseau",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Why should we build our happiness on the opinons of others, when we can find it in our own hearts?",
    author: "Jean-Jacques Rousseau",
  },
  {
    quote:
      "The world of reality has its limits; the world of imagination is boundless.",
    author: "Jean-Jacques Rousseau",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Why should we build our happiness on the opinons of others, when we can find it in our own hearts?",
    author: "Jean-Jacques Rousseau",
  },
  {
    quote:
      "The world of reality has its limits; the world of imagination is boundless.",
    author: "Jean-Jacques Rousseau",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
