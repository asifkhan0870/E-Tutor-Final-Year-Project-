import { images } from "..";

const { teacher1, teacher2, teacher3, teacher4, school1, school2, school3 } =
  images;
export const welcomeScreenData = {
  title: `Welcome at our E-Tutor Application `,
  secondarytitle: `Let's Start`,
  subtitle: `Please Sign in to view personalized recommendations`,
};

export const gradesData = [
  // "Grade 1-5",
  // "Grade 6-9",
  // "Grade 10-12",
  // "Grade 12-13",
  "IIT-JEE ",
  "NEET",
  "GATE",
];

export const provincesData = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  // "Madhya Pradesh",
  // "Maharashtra",
  // "Manipur",
  // "Meghalaya",
  // "Mizoram",
  // "Nagaland",
  // "Odisha",
  // "Punjab",
  // "Rajasthan",
  // "Sikkim",
  // "Tamil Nadu",
  // "Telangana",
  // "Tripura",
  // "Uttar Pradesh",
  // "Uttarakhand",
  // "West Bengal",
];

export const teacherData = [
  {
    name: "Cassie Valdez",
    subject: "Biology",
    image: teacher1,
  },
  {
    name: "Paul Simons",
    subject: "Chemistry",
    image: teacher2,
  },
  {
    name: "Simon Patrick",
    subject: "Computer Science",
    image: teacher4,
  },
  {
    name: "Graham Osbor",
    subject: "Physics",
    image: teacher3,
  },
];

export const institutionData = [
  {
    name: "Victory College",
    field: "Bio Science",
    description:
      "Studying how CBD awareness and availability as it related to pain management alternatives.",
    rating: "4.5",
    reviews: "413",
    image: school1,
  },
  {
    name: "New Montana",
    field: "Bio Science",
    description:
      "Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com",
    rating: "4.1",
    reviews: "354",
    image: school2,
  },
  {
    name: "Susipwan College",
    field: "Bio Science",
    description:
      "This is a private higher education center which conducting classes for GCE AL Students.",
    rating: "3.0",
    reviews: "745",
    image: school3,
  },
  {
    name: `Simon's Rock College`,
    field: "Computer Science",
    description: "Early college for gifted high schoolers",
    rating: "4.1",
    reviews: "354",
    image: school2,
  },
];

export const areaFilters = ["Island", "Province", "Districts"];

export const subjectFilters = [
  "All Subjects",
  "Biology",
  "Chemistry",
  "Physics",
  "Science for Technology",
];
