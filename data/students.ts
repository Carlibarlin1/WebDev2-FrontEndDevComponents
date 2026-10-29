/**
 * File: data/students.ts
 * Author: Julian Knight-Alvarez
 * Date: October 28, 2026
 *
 * This file defines the Student interface used throughout the application.
 * It provides the structure for storing student information.
 * Each student contains an ID, first name, last name, grade, and average.
 * The file also exports sample student data for the student portal.
 * This data is used to display students and calculate school statistics.
 */

// Student interface
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// Sample student data
export const students: Student[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    grade: 9,
    average: 75,
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    grade: 10,
    average: 88,
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Brown",
    grade: 11,
    average: 92,
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Davis",
    grade: 12,
    average: 79,
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Wilson",
    grade: 12,
    average: 85,
  },
  {
    id: 6,
    firstName: "Jessica",
    lastName: "Taylor",
    grade: 9,
    average: 68,
  },
  {
    id: 7,
    firstName: "Daniel",
    lastName: "Anderson",
    grade: 10,
    average: 81,
  },
  {
    id: 8,
    firstName: "Zara",
    lastName: "Ahmed",
    grade: 11,
    average: 95,
  },
];