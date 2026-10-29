"use client";

/**
 * File: components/StudentCard.tsx
 * Author: Julian Knight-Alvarez
 * Date: October 28, 2026
 *
 * This component displays information about an individual student.
 * It receives student information and a remove callback through props.
 * It uses React state to control whether student details are visible.
 * Students with averages of 80 or higher receive an Honour roll badge.
 * The component also provides a button to remove the selected student.
 */

import { useState } from "react";
import type { Student } from "@/data/students";

// Props interface
interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

// StudentCard component
const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  // State for showing and hiding student details
  const [showDetails, setShowDetails] = useState(false);

  // Toggle student details
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Remove selected student
  const handleRemove = () => {
    onRemove(student.id);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md transition hover:shadow-lg">

      {/* Student name and grade */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {student.firstName} {student.lastName}
        </h2>

        <p className="mt-1 text-gray-600">
          Grade {student.grade}
        </p>
      </div>

      {/* Student details */}
      {showDetails && (
        <div className="mb-4 rounded-lg bg-gray-50 p-4">

          <p className="font-medium text-gray-700">
            Average: {student.average}%
          </p>

          {/* Honour roll badge */}
          {student.average >= 80 && (
            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Honour Roll
            </span>
          )}

        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">

        <button
          type="button"
          onClick={handleToggleDetails}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        <button
          type="button"
          onClick={handleRemove}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Remove
        </button>

      </div>
    </div>
  );
};

export default StudentCard;