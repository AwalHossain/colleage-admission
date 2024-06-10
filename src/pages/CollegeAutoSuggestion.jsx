import { useState } from "react";
import Autosuggest from "react-autosuggest";
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
  const [y, setY] = useState(false);
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : collegeNames.filter((college) =>
          college.toLowerCase().includes(inputValue)
        );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions(collegeNames);
  };

  const [suggestions, setSuggestions] = useState(collegeNames);
  const [collegeInput, setCollegeInput] = useState("");

  const onCollegeChange = (event, { newValue }) => {
    setCollegeInput(newValue);
    setFormData({ ...formData, collegeName: newValue });
  };

  const renderSuggestion = (suggestion) => (
    <div className="p-2 border border-gray-200 mb-0.3 bg-gray-50 rounded cursor-pointer">
      {suggestion}
    </div>
  );

  return (
    <div>
      <Autosuggest
        inputProps={{
          name: "collegeName",
          value: collegeInput,
          required: true,
          onChange: onCollegeChange,
          onFocus: () => {
            console.log("focused");
            setY(true);
          },
          onBlur: () => {
            setY(false);
          },
          className:
            "mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",
        }}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={() => setY(false)}
        alwaysRenderSuggestions={y}
      />
    </div>
  );
}
