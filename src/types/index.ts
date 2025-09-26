export type UserRole = 'student' | 'entrepreneur' | 'college' | 'company' | 'incubator';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  type: 'full-time' | 'internship' | 'part-time';
  location: string;
  salary?: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  image: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'webinar' | 'workshop' | 'hackathon' | 'networking';
  date: string;
  time: string;
  organizer: string;
  description: string;
  registrations: number;
}