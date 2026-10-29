
/**
 * File: components/StudentList.tsx
 * Author: Julian Knight-Alvarez
 * Date: October 28, 2026
 *
 * This component displays a list of students using StudentCard components.
 * It receives an array of students and a remove callback through props.
 * The component uses the map method to generate a card for each student.
 * If the array is empty, a message is displayed instead of student cards.
 * Tailwind CSS provides a responsive grid layout for different screen sizes.
 */

import type { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard";

// Props interface
interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

// StudentList component
const StudentList = ({ students, onRemove }: StudentListProps) => {
  return (
    <div className="w-full">
      {/* Display message when no students are available */}
      {students.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
          <p className="text-lg font-medium text-gray-600">
            No students found.
          </p>
        </div>
      ) : (
        /* Display student cards in a responsive grid */
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentList;

