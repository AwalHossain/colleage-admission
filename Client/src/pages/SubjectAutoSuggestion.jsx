import { useState } from 'react';
import Autosuggest from 'react-autosuggest';
const subjectNames = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Economics',
    'Accounting',
    'Business Studies',
    'History',
    'Geography',
    'Political Science',
    'Sociology',
    'Psychology',
    'Physical Education',
    'Music',
    'Art',
    'Dance',
    'Theatre',
    'Design',
    'Film Studies',
    'Media Studies',
    'Environmental Science',
    'Agriculture',
    'Food Technology',
    'Nutrition',
    'Fashion Design',
    'Textile Design',
    'Interior Design',
    'Architecture',
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Electronics Engineering',
    'Computer Engineering',
    'Information Technology',
    'Software Engineering',
    'Biotechnology',
    'Chemical Engineering',
    'Aeronautical Engineering',
    'Automobile Engineering',
    'Marine Engineering',
    'Petroleum Engineering',
    'Mining Engineering',
    'Metallurgical Engineering',
    'Textile Engineering',
    'Environmental Engineering',
    'Aerospace Engineering',
    'Nuclear Engineering',
    'Industrial Engineering',
    'Production Engineering',
    'Manufacturing Engineering',
    'Material Science',
    'Robotics',
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Cyber Security',
    'Cloud Computing',
    'Network Security',
    'Information Security',
    'Digital Forensics',
    'Internet of Things',
    'Blockchain Technology',
    'Augmented Reality',
    'Virtual Reality',
    'Game Development',
    'Mobile Application Development',
    'Web Development',
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
    'UI/UX Design',
    'Graphic Design',
    'Animation',
    'VFX',
    'Film Making',
    'Photography',
    'Journalism',
    'Mass Communication',
    'Public Relations',
    'Advertising',
    'Event Management',
    'Hospitality Management',
    'Travel and Tourism',
    'Culinary Arts',
    'Baking and Pastry',
    'Hotel Management',
    'Resort Management',
    'Sports Management',
    'Healthcare Management',
    'Hospital Administration',
    'Pharmacy',
    'Nursing',
    'Physiotherapy',
]

export default function SubjectAutoSuggestion({ formData, setFormData}) {
    
  const [y, setY] = useState(false);
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] :
    
    subjectNames.filter(
      college => college.toLowerCase().includes(inputValue)
    );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions(subjectNames);
  };

  const [suggestions, setSuggestions] = useState(subjectNames);
  const [collegeInput, setCollegeInput] = useState('');

  const onCollegeChange = (event, { newValue }) => {
    setCollegeInput(newValue);
    setFormData({ ...formData, subject: newValue });
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
            name: 'collegeName',
          value: collegeInput,
          onChange: onCollegeChange,
          required: true,
          onFocus: () => {
            console.log('focused');
            setY(true);
          },
          onBlur: () => {
            setY(false);
          },
          className: 'mt-1 p-2 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
        }}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={()=> setY(false)}
        alwaysRenderSuggestions={y}
      />
    </div>
  )
}
