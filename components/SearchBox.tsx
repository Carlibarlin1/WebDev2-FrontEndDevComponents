/*
File: SearchBox.tsx
Author: Carl Ibarlin
Date: 

This component displays a search input for finding students,
it receives the current search text through a prop.
When the user types, it calls a function provided by StudentPortal,
the StudentPortal uses the updated text to filter students by name then 
the component displays the input field using Tailwind CSS.
*/

// Props for the SearchBox component
interface SearchBoxProps {
    searchText: string;
    onSearchChange: (value: string) => void;
}

// Search Box component
const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
    return (
        <div className="mb-6">
            <label
                htmlFor="student-search"
                className="mb-2 block text-sm font-semibold text-white"            >
                Search Students
            </label>

            <input
                id="student-search"
                type="text"
                placeholder="Search by student name..."
                value={searchText}
                onChange={(event) => onSearchChange(event.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"            />
        </div>
    );
};

export default SearchBox;