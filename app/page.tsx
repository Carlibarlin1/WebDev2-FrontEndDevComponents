/*
File: page.tsx
Author: Carl Ibarlin
Date:

This file displays the main page of the student portal,
it imports the StudentPortal component.
The page renders the portal as the main content of StudentPortal which 
manages the student data and interactions.
 */

import StudentPortal from "@/components/StudentPortal";

const Home = () => {
  return <StudentPortal/>;
}

export default Home;
