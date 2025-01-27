import React,{ useState } from "react";

import SearchBar from "./components/search-bar";
import SearchFilters from "./components/search-filters";
import IdeaGrid from "./components/idea-grid";


export default function App() {

  const ideas = ["1","2","3","4"];

  return (

    <div className="flex flex-col">

    <div>
    <SearchBar></SearchBar>
    </div>
    
<div className="bg-red">
  hello
<SearchFilters className="w-1/2 bg-red" ></SearchFilters>
    <IdeaGrid ideas={ideas} className="w-1/2 bg-red" ></IdeaGrid>
       
</div>
 
    </div>
  );
}
