import { useEffect, useRef, useState } from "react";
import Autosuggest from "react-autosuggest";
import { useMutation } from "react-query";
import { debounce, searchCollege } from "../services/collegeService";
const collegeNames = [
  "Indian Institute of Technology Bombay",
  "Indian Institute of Technology Delhi",
  "University of Dhaka",
  "University of Chittagong",
  "University of Rajshahi",
  "University of Khulna",
  "University of Barisal",
  "University of Comilla",
  "University of Rangpur",
  "University of Jagannath",
  "University of Jahangirnagar",
  "Pabna University of Science and Technology",
  "Bangladesh University of Engineering and Technology",
  "Rajshahi University of Engineering and Technology",
  "Chittagong University of Engineering and Technology",
  "Khulna University of Engineering and Technology",
  "Dhaka University of Engineering and Technology",
  "Bangladesh Agricultural University",
  "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
  "Sher-e-Bangla Agricultural University",
  "Chittagong Veterinary and Animal Sciences University",
  "Khulna Agricultural University",
  "Patuakhali Science and Technology University",
  "Hajee Mohammad Danesh Science and Technology University",
  "Mawlana Bhashani Science and Technology University",
  "Noakhali Science and Technology University",
  "Jessore Science and Technology University",
  "Jatiya Kabi Kazi Nazrul Islam University",
  "Shahjalal University of Science and Technology",
  "Jagannath University",
  "Jahangirnagar University",
  "Islamic University",
  "Bangabandhu Sheikh Mujibur Rahman Maritime University",
  "Bangabandhu Sheikh Mujibur Rahman Aviation and Aerospace University",
  "Harvard University",
  "Stanford University",
  "MIT",
  "University of Cambridge",
  "University of Oxford",
  "California Institute of Technology",
  "University of Chicago",
  "Princeton University",
  "Columbia University",
  "Yale University",
  "University of Pennsylvania",
  "University of California, Berkeley",
  "University of California, Los Angeles",
  "University of Michigan",
  "University of Toronto",
  "University of Tokyo",
  "University of Hong Kong",
  "University of Melbourne",
  "University of Sydney",
];

export default function CollegeAutoSuggestion({ formData, setFormData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [alwaysRender, setAlwaysRender] = useState(true); // add this line
  const mutation = useMutation(searchCollege);
  const { data, isLoading } = mutation;
  const colleges = data?.data;
  const [suggestions, setSuggestions] = useState([]);


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
      setSuggestions([]);
      setAlwaysRender(false); // add this line
      console.log(suggestion, "suggestion");
      setFormData({ ...formData, collegeId: suggestion._id });
    }
  };

  return (
    <div className="relative">
      <div className="relative rounded-md shadow-sm">
        <div className="relative">
        <Autosuggest
          inputProps={{
            name: "collegeName",
            value: searchTerm,
            required: true,
            onChange: onCollegeChange,
            id: "search",
            className:
            "mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
            placeholder: "Search for colleges...",
            onFocus: () => setSuggestions([]),
            // onBlur: () => setTimeout(() => setSuggestions([]), 200),
          }}
          suggestions={isLoading ? [{name: "Loading..."}] : suggestions}
          onSuggestionsFetchRequested={({ value }) => {
            debouncedSearch(value);
          }}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={(suggestion) => suggestion.name}
          renderSuggestion={renderSuggestion}
          onSuggestionSelected={handleSuggestionSelected}
          alwaysRenderSuggestions={alwaysRender}
        />
        </div>
      </div>
    </div>
  );
}
