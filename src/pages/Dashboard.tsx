import React from 'react';
import { useAuth } from '../context/AuthContext';
import { StudentDashboard } from '../components/dashboards/StudentDashboard';
import { EntrepreneurDashboard } from '../components/dashboards/EntrepreneurDashboard';
import { CollegeDashboard } from '../components/dashboards/CollegeDashboard';
import { CompanyDashboard } from '../components/dashboards/CompanyDashboard';
import { IncubatorDashboard } from '../components/dashboards/IncubatorDashboard';

export function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const getDashboard = () => {
    switch (user.role) {
      case 'student':
        return <StudentDashboard />;
      case 'entrepreneur':
        return <EntrepreneurDashboard />;
      case 'college':
        return <CollegeDashboard />;
      case 'company':
        return <CompanyDashboard />;
      case 'incubator':
        return <IncubatorDashboard />;
      default:
        return <div>Invalid role</div>;
    }
  };

  return getDashboard();
}