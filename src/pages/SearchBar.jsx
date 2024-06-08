import { SearchIcon } from "@heroicons/react/outline";
import React, { useEffect, useRef, useState } from "react";
import Autosuggest from "react-autosuggest";
import { useMutation } from "react-query";
import { debounce, searchCollege } from "../services/collegeService";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const mutation = useMutation(searchCollege);
  const { data, isLoading } = mutation;
  const colleges = data?.data;
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (colleges) {
      const collegeNames = colleges.map((college) => college.name);
      setSuggestions(collegeNames);
    }
  }, [colleges]);

  const debouncedSearch = useRef(debounce((value)=> mutation.mutate(value), 500)).current;

  const onCollegeChange = (event, { newValue }) => {
    setSearchTerm(event.target.value);
    debouncedSearch(event.target.value);
  };

  const renderSuggestion = (suggestion) => (
    isLoading ?(
        <div className="p-2 border border-gray-200 mb-0.3 bg-gray-50 rounded cursor-pointer">
            Loading...
        </div>
    ):(
    <div className="p-2 border border-gray-200 mb-0.3 bg-gray-50 rounded cursor-pointer">
      {suggestion}
    </div>
    )
  );

  return (
    <div>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute top-0 bottom-24 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12"></div>
        </div>
        <Autosuggest
          inputProps={{
            name: "collegeName",
            value: searchTerm,
            required: true,
            onChange: onCollegeChange,
            id: "search",
            className:
              "px-2 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-3xl",
            placeholder: "Search for colleges...",
          }}
          suggestions={suggestions}
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={renderSuggestion}
        />
      </div>
    </div>
  );
}