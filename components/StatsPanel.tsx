/*
 * File:   components/StatsPanel.tsx
 * Author: Yassine Ouzzi
 * Date:   2026-10-27
 *
 * StatsPanel shows three numbers about the whole student list: how many
 * students there are, how many are on the honour roll (an average of 80 or
 * more), and how many are in grade 12. Its only input is the prop "students",
 * the full list owned by StudentPortal, not the search results. The three
 * numbers are worked out from that list every time the component is drawn,
 * so they are not state and change as soon as a student is added or removed.
 * The output is a row of three cards, one per number.
 */

import type { Student } from "@/data/students";

// Props
interface StatsPanelProps {
  students: Student[];
}

// A student with an average of 80 or more is on the honour roll
const HONOUR_ROLL_AVERAGE = 80;

const StatsPanel = ({ students }: StatsPanelProps) => {
  // Derived values: worked out on every render, never stored
  const totalStudents = students.length;
  const honourRollCount = students.filter(
    (student) => student.average >= HONOUR_ROLL_AVERAGE,
  ).length;
  const graduatingCount = students.filter(
    (student) => student.grade === 12,
  ).length;

  const stats = [
    { label: "Students", value: totalStudents },
    { label: "Honour roll", value: honourRollCount },
    { label: "Graduating", value: graduatingCount },
  ];

  // Output: one card per number, one column on mobile
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
        >
          <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
          <p className="mt-1 text-sm font-medium text-gray-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsPanel;
