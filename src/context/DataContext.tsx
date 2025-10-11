import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Job {
  id: string;
  title: string;
  company: string;
  type: 'full-time' | 'internship' | 'part-time';
  location: string;
  salary?: string;
  description: string;
  requirements: string[];
  postedDate: string;
  applications?: number;
  status?: 'active' | 'closed' | 'draft';
}

interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  company: string;
  appliedDate: string;
  status: 'applied' | 'under-review' | 'interview-scheduled' | 'rejected' | 'accepted';
}

interface Startup {
  id: string;
  name: string;
  founder: string;
  stage: 'idea' | 'mvp' | 'prototype' | 'seed' | 'series-a';
  sector: string;
  fundingRaised: string;
  teamSize: number;
  mentor?: string;
  progress: number;
  joinedDate: string;
}

interface Mentor {
  id: string;
  name: string;
  expertise: string;
  experience: string;
  rating: number;
  sessions: number;
  price: string;
  available: boolean;
}

interface Company {
  id: string;
  name: string;
  industry: string;
  size: string;
  location: string;
  jobsPosted: number;
  studentsHired: number;
  partnershipType: string;
}

interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  students: number;
  image: string;
  description: string;
  price: string;
  progress?: number;
  enrolled?: boolean;
}

interface Event {
  id: string;
  title: string;
  type: 'webinar' | 'workshop' | 'hackathon' | 'networking';
  date: string;
  time: string;
  organizer: string;
  description: string;
  registrations: number;
  maxCapacity: number;
  registered?: boolean;
}

interface DataContextType {
  // Jobs
  jobs: Job[];
  applications: Application[];
  applyToJob: (jobId: string) => void;
  postJob: (job: Omit<Job, 'id'>) => void;
  
  // Courses
  courses: Course[];
  enrollInCourse: (courseId: string) => void;
  updateCourseProgress: (courseId: string, progress: number) => void;
  
  // Events
  events: Event[];
  registerForEvent: (eventId: string) => void;
  createEvent: (event: Omit<Event, 'id' | 'registrations' | 'registered'>) => void;
  
  // Startups (for Incubators)
  startups: Startup[];
  onboardStartup: (startup: Omit<Startup, 'id'>) => void;
  updateStartupProgress: (startupId: string, progress: number) => void;
  
  // Mentors
  mentors: Mentor[];
  bookMentor: (mentorId: string) => void;
  
  // Companies (for Colleges)
  companies: Company[];
  addCompanyPartnership: (company: Omit<Company, 'id'>) => void;
  
  // Placements (for Colleges)
  placements: any[];
  addPlacement: (placement: any) => void;
  
  // Notifications
  notifications: string[];
  addNotification: (message: string) => void;
  clearNotifications: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  
  // Use localStorage for persistence
  const [jobs, setJobs] = useLocalStorage<Job[]>('jobs', [
  
    {
      id: '1',
      title: 'Frontend Developer Intern',
      company: 'TechStart Inc.',
      type: 'internship',
      location: 'Bangalore',
      salary: '₹25,000/month',
      description: 'Build responsive web applications using React.js and modern frontend technologies.',
      requirements: ['React.js', 'JavaScript', 'CSS', 'HTML'],
      postedDate: '2 days ago',
      applications: 45,
      status: 'active'
    },
    {
      id: '2',
      title: 'Software Engineer',
      company: 'Microsoft',
      type: 'full-time',
      location: 'Hyderabad',
      salary: '₹8-12 LPA',
      description: 'Join our cloud computing team and work on Azure services.',
      requirements: ['Java', 'Spring Boot', 'Azure', 'SQL'],
      postedDate: '1 week ago',
      applications: 32,
      status: 'active'
    },
    {
      id: '3',
      title: 'Data Science Intern',
      company: 'Flipkart',
      type: 'internship',
      location: 'Bangalore',
      salary: '₹30,000/month',
      description: 'Analyze customer data and build machine learning models.',
      requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      postedDate: '3 days ago',
      applications: 28,
      status: 'active'
    }
  ]);

  const [applications, setApplications] = useLocalStorage<Application[]>('applications', []);
  
  const [courses, setCourses] = useLocalStorage<Course[]>('courses', [
    {
      id: '1',
      title: 'Complete React.js Bootcamp',
      provider: 'TechAcademy',
      duration: '12 weeks',
      level: 'intermediate',
      rating: 4.8,
      students: 15420,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Master React.js from fundamentals to advanced concepts',
      price: 'Free',
      progress: 0,
      enrolled: false
    },
    {
      id: '2',
      title: 'Machine Learning Fundamentals',
      provider: 'AI Institute',
      duration: '8 weeks',
      level: 'beginner',
      rating: 4.7,
      students: 8925,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Learn the basics of machine learning and data science',
      price: '₹999',
      progress: 0,
      enrolled: false
    }
  ]);

  const [events, setEvents] = useLocalStorage<Event[]>('events', [
    {
      id: '1',
      title: 'React.js Masterclass',
      type: 'webinar',
      date: '2025-03-15',
      time: '3:00 PM - 5:00 PM IST',
      organizer: 'TechTalks',
      description: 'Deep dive into React.js hooks, context API, and performance optimization',
      registrations: 1250,
      maxCapacity: 2000,
      registered: false
    },
    {
      id: '2',
      title: 'AI Innovation Hackathon 2025',
      type: 'hackathon',
      date: '2025-03-20',
      time: '48 Hours',
      organizer: 'Google Developers',
      description: '48-hour hackathon focused on AI and machine learning solutions',
      registrations: 850,
      maxCapacity: 1000,
      registered: false
    }
  ]);

  const [startups, setStartups] = useLocalStorage<Startup[]>('startups', [
    {
      id: '1',
      name: 'EcoTech Solutions',
      founder: 'Arjun Patel',
      stage: 'mvp',
      sector: 'CleanTech',
      fundingRaised: '₹25L',
      teamSize: 4,
      mentor: 'Dr. Sharma',
      progress: 65,
      joinedDate: 'Jan 2025'
    },
    {
      id: '2',
      name: 'HealthAI',
      founder: 'Priya Reddy',
      stage: 'prototype',
      sector: 'HealthTech',
      fundingRaised: '₹15L',
      teamSize: 3,
      mentor: 'Mr. Kumar',
      progress: 45,
      joinedDate: 'Dec 2024'
    }
  ]);

  const [mentors, setMentors] = useLocalStorage<Mentor[]>('mentors', [
    {
      id: '1',
      name: 'Dr. Rajesh Sharma',
      expertise: 'Technology & Product',
      experience: '15+ years at Google, Microsoft',
      rating: 4.9,
      sessions: 120,
      price: '₹2,000/session',
      available: true
    },
    {
      id: '2',
      name: 'Priya Gupta',
      expertise: 'Marketing & Growth',
      experience: '12+ years at Flipkart, Zomato',
      rating: 4.8,
      sessions: 95,
      price: '₹1,500/session',
      available: true
    }
  ]);

  const [companies, setCompanies] = useLocalStorage<Company[]>('companies', [
    {
      id: '1',
      name: 'TCS',
      industry: 'IT Services',
      size: '500,000+ employees',
      location: 'Mumbai',
      jobsPosted: 45,
      studentsHired: 156,
      partnershipType: 'Premium Partner'
    },
    {
      id: '2',
      name: 'Microsoft',
      industry: 'Technology',
      size: '10,000+ employees',
      location: 'Hyderabad',
      jobsPosted: 12,
      studentsHired: 28,
      partnershipType: 'Premium Partner'
    }
  ]);

  const [placements, setPlacements] = useLocalStorage<any[]>('placements', []);
  const [notifications, setNotifications] = useState<string[]>([]);

  const applyToJob = (jobId: string) => {
    const job = jobs.find(j => j.id === jobId);
    if (job && user) {
      const newApplication: Application = {
        id: Date.now().toString(),
        jobId,
        jobTitle: job.title,
        company: job.company,
        appliedDate: new Date().toLocaleDateString(),
        status: 'applied'
      };
      setApplications(prev => [...prev, newApplication]);
      addNotification(`Successfully applied to ${job.title} at ${job.company}`);
    }
  };

  const postJob = (jobData: Omit<Job, 'id'>) => {
    const newJob: Job = {
      id: Date.now().toString(),
      ...jobData
    };
    setJobs(prev => [newJob, ...prev]);
    addNotification(`Successfully posted job: ${jobData.title}`);
  };

  const enrollInCourse = (courseId: string) => {
    setCourses(prev => prev.map(course => 
      course.id === courseId 
        ? { ...course, enrolled: true, progress: 0 }
        : course
    ));
    const course = courses.find(c => c.id === courseId);
    if (course) {
      addNotification(`Successfully enrolled in ${course.title}`);
    }
  };

  const updateCourseProgress = (courseId: string, progress: number) => {
    setCourses(prev => prev.map(course => 
      course.id === courseId 
        ? { ...course, progress }
        : course
    ));
  };

  const registerForEvent = (eventId: string) => {
    setEvents(prev => prev.map(event => 
      event.id === eventId 
        ? { ...event, registered: true, registrations: event.registrations + 1 }
        : event
    ));
    const event = events.find(e => e.id === eventId);
    if (event) {
      addNotification(`Successfully registered for ${event.title}`);
    }
  };

  const createEvent = (eventData: Omit<Event, 'id' | 'registrations' | 'registered'>) => {
    const newEvent: Event = {
      id: Date.now().toString(),
      registrations: 0,
      registered: false,
      ...eventData
    };
    setEvents(prev => [newEvent, ...prev]);
    addNotification(`Successfully created event: ${eventData.title}`);
  };

  const onboardStartup = (startupData: Omit<Startup, 'id'>) => {
    const newStartup: Startup = {
      id: Date.now().toString(),
      ...startupData
    };
    setStartups(prev => [newStartup, ...prev]);
    addNotification(`Successfully onboarded startup: ${startupData.name}`);
  };

  const updateStartupProgress = (startupId: string, progress: number) => {
    setStartups(prev => prev.map(startup => 
      startup.id === startupId 
        ? { ...startup, progress }
        : startup
    ));
    addNotification(`Updated startup progress to ${progress}%`);
  };

  const bookMentor = (mentorId: string) => {
    const mentor = mentors.find(m => m.id === mentorId);
    if (mentor) {
      addNotification(`Successfully booked session with ${mentor.name}`);
    }
  };

  const addCompanyPartnership = (companyData: Omit<Company, 'id'>) => {
    const newCompany: Company = {
      id: Date.now().toString(),
      ...companyData
    };
    setCompanies(prev => [newCompany, ...prev]);
    addNotification(`Successfully added partnership with ${companyData.name}`);
  };

  const addPlacement = (placementData: any) => {
    const newPlacement = {
      id: Date.now().toString(),
      ...placementData,
      date: new Date().toLocaleDateString()
    };
    setPlacements(prev => [newPlacement, ...prev]);
    addNotification(`Successfully recorded placement: ${placementData.studentName} at ${placementData.company}`);
  };

  const addNotification = (message: string) => {
    setNotifications(prev => [message, ...prev.slice(0, 4)]);
    setTimeout(() => {
      setNotifications(prev => prev.slice(0, -1));
    }, 5000);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const value = {
    jobs,
    applications,
    applyToJob,
    postJob,
    courses,
    enrollInCourse,
    updateCourseProgress,
    events,
    registerForEvent,
    createEvent,
    startups,
    onboardStartup,
    updateStartupProgress,
    mentors,
    bookMentor,
    companies,
    addCompanyPartnership,
    placements,
    addPlacement,
    notifications,
    addNotification,
    clearNotifications
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}