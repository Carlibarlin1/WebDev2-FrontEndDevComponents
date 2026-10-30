
"use client";

/*
File: StudentPortal.tsx
Author: Carl Ibarlin
Date: October 29, 2026

This component manages the main student portal.
It stores the student list and search text using React state.
It connects the search box, student list, statistics, and add student components.
It handles adding, removing, and clearing students from the list.
It displays the three main sections of the student portal.
*/

import { useState } from "react";
import SearchBox from "./SearchBox";
import AddStudent from "./AddStudent";
import { students as initialStudents, type Student } from "@/data/students";
import StudentList from "./StudentList";
import StatsPanel from "./StatsPanel";

// StudentPortal component
const StudentPortal = () => {

    // State for the student list
    const [students, setStudents] = useState<Student[]>(initialStudents);

    // State for the search input
    const [searchText, setSearchText] = useState("");

    // Add a new student
    const handleAddStudent = (
        firstName: string,
        lastName: string,
        grade: number,
        average: number
    ) => {
        // Find a unique ID for the new student
        const newId = Math.max(0, ...students.map((student) => student.id)) + 1;

        // Create the new student object
        const newStudent: Student = {
            id: newId,
            firstName,
            lastName,
            grade,
            average,
        };

        // Add the new student without changing the original array
        setStudents((currentStudents) => [...currentStudents, newStudent]);
    };

    // Remove a student using their ID
    const handleRemoveStudent = (id: number) => {
        setStudents((currentStudents) =>
            currentStudents.filter((student) => student.id !== id)
        );
    };

    // Remove all students from the list
    const handleClearAll = () => {
        setStudents([]);
    };

    // Filter students by first or last name 
    const filteredStudents = students.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`;

        return fullName.toLowerCase().includes(searchText.toLowerCase());
    });


    return (
        <main className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">
                Student Portal
            </h1>

            {/* Overview section */}
            <section id="overview" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">
                    Overview
                </h2>
                <StatsPanel students={students} />
            </section>

            {/* Students section */}
            <section id="students" className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">
                    Students
                </h2>

                {/* Search input */}
                <SearchBox
                    searchText={searchText}
                    onSearchChange={setSearchText}
                />

                <StudentList
                    students={filteredStudents}
                    onRemove={handleRemoveStudent}
                />

                {/* Clear all students button */}
                <button
                    type="button"
                    onClick={handleClearAll}
                    className="mt-6 rounded-lg bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
                >
                    Clear All Students
                </button>
            </section>

            {/* Add student section */}
            <section id="add-student" className="mt-8">
                <AddStudent onAdd={handleAddStudent} />
            </section>
        </main>
    );

};

export default StudentPortal;
