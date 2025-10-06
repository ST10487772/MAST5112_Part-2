export interface Course {
  id: string;
  name: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: number;
}
