import { SearchIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import Autosuggest from "react-autosuggest";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { debounce, searchCollege } from "../services/collegeService";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const mutation = useMutation(searchCollege);
  const { data, isLoading } = mutation;
  const colleges = data?.data;
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (colleges) {
      setSuggestions(colleges);
    }
  }, [colleges]);

  const debouncedSearch = useRef(
    debounce((value) => mutation.mutate(value), 200)
  ).current;

  const onCollegeChange = (event, { newValue }) => {
    setSearchTerm(newValue);
    debouncedSearch(newValue);
  };

  const renderSuggestion = (suggestionValue, { isHighlighted }) => {
    return (
      <div className={`p-2 border border-gray-200 mb-0.3 bg-gray-50 rounded cursor-pointer ${isHighlighted ? 'bg-gray-200' : ''}`}>
        {isLoading ? "Loading..." : suggestionValue.name}
      </div>
    );
  };

  const handleSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    if (method === "click" || method === "enter") {
      setSearchTerm(suggestionValue);
      navigate(`/colleges/${suggestion.id}`);
    }
  };

  return (
    <div className="relative">
      <div className="relative rounded-md shadow-sm">
        <div className="relativ">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <Autosuggest
          inputProps={{
            name: "collegeName",
            value: searchTerm,
            required: true,
            onChange: onCollegeChange,
            id: "search",
            className:
              "px-10 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-3xl",
            placeholder: "Search for colleges...",
            onFocus: () => setSuggestions([]),
            onBlur: () => setTimeout(() => setSuggestions([]), 200),
          }}
          suggestions={isLoading ? [{name: "Loading..."}] : suggestions}
          onSuggestionsFetchRequested={({ value }) => {
            debouncedSearch(value);
          }}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={(suggestion) => suggestion.name}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={handleSuggestionSelected}
          alwaysRenderSuggestions={true}
        />
        </div>
      </div>
    </div>
  );
}
