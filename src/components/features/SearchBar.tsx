"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { SearchIcon, ClockIcon, XIcon } from "@/components/ui/icons";
import { searchEngines } from "@/types/search";
import { useSearchStore } from "@/store/selectStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function SearchBar() {
  const {
    selectedEngineIndex,
    searchHistory,
    changeSelectedEngine,
    addToHistory,
    clearHistory
  } = useSearchStore();

  const [inputValue, setInputValue] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: FormEvent, query: string = inputValue) => {
    e.preventDefault();
    if (!query.trim()) return;

    const selectedEngine = searchEngines[selectedEngineIndex];
    let transformedQuery;

    if (selectedEngine.name === "Ecosia") {
      transformedQuery = query
        .toLowerCase()
        .replace(/ /g, "%20")
        .replace(/[^a-zA-Z0-9%]/g, "");
    } else {
      transformedQuery = query
        .toLowerCase()
        .replace(/ /g, "+")
        .replace(/[^a-zA-Z0-9+]/g, "");
    }

    window.open(`${selectedEngine.url}${transformedQuery}`, "_blank");
    addToHistory(query);
    setInputValue("");
    setShowHistory(false);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <Card className="p-2 bg-black/90 backdrop-blur-sm border-red-800">
        <div className="flex items-center space-x-2">
          {/* Engine Selector */}
          <div className="flex flex-wrap gap-1 min-w-0">
            {searchEngines.map((engine, index) => (
              <Button
                key={engine.name}
                variant={selectedEngineIndex === index ? "default" : "ghost"}
                size="sm"
                onClick={() => changeSelectedEngine(index)}
                className={`
                  text-xs h-8 px-2 transition-all duration-200
                  ${selectedEngineIndex === index 
                    ? "bg-red-600 text-white" 
                    : "text-red-300 hover:text-white hover:bg-red-900"
                  }
                `}
              >
                <span className="mr-1">{engine.icon}</span>
                <span className="hidden sm:inline">{engine.name}</span>
              </Button>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex-1 relative">
            <form onSubmit={(e) => handleSubmit(e)} className="relative">
              <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setShowHistory(true)}
                placeholder={`Search with ${searchEngines[selectedEngineIndex].name}...`}
                className="bg-black border-red-800 text-red-100 placeholder-red-400 pr-10"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-transparent hover:bg-red-900"
              >
                <SearchIcon className="h-4 w-4" />
              </Button>
            </form>

            {/* Search History Dropdown */}
            {showHistory && searchHistory.length > 0 && (
              <Card className="absolute top-full left-0 right-0 mt-1 z-50 bg-black border-red-800 max-h-60 overflow-y-auto">
                <div className="p-2 border-b border-red-800 flex items-center justify-between">
                  <span className="text-sm text-red-300 flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    Recent Searches
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      clearHistory();
                      setShowHistory(false);
                    }}
                    className="text-red-400 hover:text-white h-6 px-2"
                  >
                    <XIcon className="h-3 w-3" />
                  </Button>
                </div>
                <div className="p-1">
                  {searchHistory.map((query, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleSubmit(e, query)}
                      className="w-full text-left px-3 py-2 text-sm text-red-300 hover:bg-red-900 rounded transition-colors"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </Card>

      {/* Click outside to close history */}
      {showHistory && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowHistory(false)}
        />
      )}
    </div>
  );
}