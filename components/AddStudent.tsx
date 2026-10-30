"use client";

/*
FIle: AddStudent.tsx 
Author: Carl Ibarlin
Date:

This component allows the user to add a new student,
it receives a callback function from StudentPortal.
The user enters a first name, last name, grade, and average then
the component checks that both names are not empty before adding,
after adding a student, all inputs reset to their default values.
 */

import { useState } from "react";

// Props for AddStudent 
interface AddStudentProps {
    onAdd: (
        firstName: string,
        lastName: string, 
        grade: number, 
        average: number
    ) => void;
}

// AddStudent component
const AddStudent = ({ onAdd }: AddStudentProps ) => {

    // Input states
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState(9);
    const [average, setAverage] = useState(70);
    const [error, setError] = useState("");

    // add student button handler
    const handleAddStudent = () => {
        // Check if first name or last name is empty
        if (firstName.trim() === "" || lastName.trim() === "") {
            setError("Please enter both first name and last name.");
            return;
        }

        if (average < 0 || average > 100) {
            setError("Average must be between 0 and 100.");
            return;
        }

        // Clear the error message
        setError("");

        // Send student information to StudentPortal
        onAdd(firstName.trim(), lastName.trim(), grade, average);

        // Reset inputs
        setFirstName("");
        setLastName("");
        setGrade(9);
        setAverage(70);
    };


    return (
        <div className="rounded-lg bg-white p-6 text-gray-900 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">
                Add a student
            </h2>

            <div className="space-y-4">
                {/* First Name */}
                <div>
                    <label htmlFor="first-name" className="mb-2 block">
                        FIrst Name
                    </label>
                    <input
                        id="first-name"
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        className="w-full rounded border p-2"
                    />
                </div>
 
                {/* Last Name */}
                <div>
                    <label htmlFor="last-name" className="mb-2 block">
                        Last Name
                    </label>
                    <input
                        id="last-name"
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="w-full rounded border p-2"
                    />

                </div>

                {/* Grade */}
                <div>
                    <label htmlFor="student-grade" className="mb-2 block">
                        Grade
                    </label>
                    <select
                        id="student-grade"
                        value={grade}
                        onChange={(event) => setGrade(Number(event.target.value))}
                        className="w-full rounded border p-2"
                    >
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                </div>

                {/* Average */}
                <div>
                    <label htmlFor="student-average" className="mb-2 block">
                        Average
                    </label>
                    <input
                        id="student-average"
                        type="number"
                        min="0"
                        max="100"
                        value={average}
                        onChange={(event) => setAverage(Number(event.target.value))}
                        className="w-full rounded border p-2"
                    />
                </div>

                {/* Display validation error */}
                {error && (
                    <p className="text-sm font-medium text-red-600" role="alert">
                        {error}
                    </p>
                )}

                {/* Add button */}
                <button 
                    type="button"
                    onClick={handleAddStudent}
                    className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                    Add student
                </button>
            </div>
        </div>
    );
};

export default AddStudent;