export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  category: string;
  color: TaskColor;
  dueDate?: Date;
};

export type TaskColor = 
  | "#FF6B6B"  // Coral Red
  | "#4ECDC4"  // Turquoise
  | "#45B7D1"  // Sky Blue
  | "#FFBE0B"  // Golden Yellow
  | "#9B5DE5"; // Purple

export const todos: Todo[] = [
  {
    id: 1,
    title: "Complete project proposal",
    completed: false,
    category: "Business",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Buy groceries",
    completed: true,
    category: "Shopping",
    color: "#45B7D1",
  },
  {
    id: 3,
    title: "Gym workout",
    completed: false,
    category: "Health",
    color: "#4ECDC4",
  },
  {
    id: 4,
    title: "Team meeting",
    completed: false,
    category: "Work",
    color: "#FFBE0B",
  },
  {
    id: 5,
    title: "Book flight tickets",
    completed: false,
    category: "Travel",
    color: "#9B5DE5",
  },
  {
    id: 6,
    title: "Review quarterly reports",
    completed: true,
    category: "Business",
    color: "#FF6B6B",
  },
  {
    id: 7,
    title: "Doctor's appointment",
    completed: false,
    category: "Health",
    color: "#4ECDC4",
  },
  {
    id: 8,
    title: "Prepare presentation",
    completed: false,
    category: "Work",
    color: "#FFBE0B",
  },
  {
    id: 9,
    title: "Plan weekend trip",
    completed: true,
    category: "Travel",
    color: "#9B5DE5",
  },
  {
    id: 10,
    title: "Buy birthday gift",
    completed: false,
    category: "Shopping",
    color: "#45B7D1",
  }
];
