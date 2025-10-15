export interface SearchEngine {
  name: string;
  url: string;
  icon: string;
}

export const searchEngines: SearchEngine[] = [
  { name: "Google", url: "https://www.google.com/search?q=", icon: "🔍" },
  { name: "Bing", url: "https://www.bing.com/search?pglt=675&q=", icon: "🅱️" },
  { name: "DuckDuckGo", url: "https://duckduckgo.com/?q=", icon: "🦆" },
  { name: "You", url: "https://you.com/search?q=", icon: "🤖" },
  { name: "Ecosia", url: "https://www.ecosia.org/search?method=index&q=", icon: "🌱" },
  { name: "YouTube", url: "https://www.youtube.com/results?search_query=", icon: "📺" }
];