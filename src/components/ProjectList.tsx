import React from "react";
import { Calendar, Users, Clock } from "lucide-react";
interface ProjectCardProps {
  project: {
    name: string;
    progress: number;
    status: "active" | "completed" | "on-hold";
    startDate: string;
    endDate: string;
    team: Array<{
      image: string;
      name: string;
    }>;
  };
}
const ProjectCard = ({
  project
}: ProjectCardProps) => {
  const statusColors = {
    active: "bg-green-100 text-green-700",
    completed: "bg-blue-100 text-blue-700",
    "on-hold": "bg-orange-100 text-orange-700"
  };
  return <div className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-800">{project.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[project.status]}`}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} />
          <span>
            {project.startDate} - {project.endDate}
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="text-gray-800 font-medium">
              {project.progress}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-full bg-blue-600 rounded-full" style={{
            width: `${project.progress}%`
          }}></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {project.team.map((member, index) => <img key={index} src={member.image} alt={member.name} className="w-8 h-8 rounded-full border-2 border-white" title={member.name} />)}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock size={16} />
            <span>2 days left</span>
          </div>
        </div>
      </div>
    </div>;
};
export const ProjectList = () => {
  const projects = [{
    name: "Tower Construction Phase 1",
    progress: 75,
    status: "active",
    startDate: "01 Jan 2024",
    endDate: "30 Jun 2024",
    team: [{
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "John Doe"
    }, {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Sarah Smith"
    }, {
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Mike Johnson"
    }]
  }, {
    name: "Commercial Complex Design",
    progress: 100,
    status: "completed",
    startDate: "15 Nov 2023",
    endDate: "15 Jan 2024",
    team: [{
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "John Doe"
    }, {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Sarah Smith"
    }]
  }, {
    name: "Residential Building Phase 2",
    progress: 45,
    status: "on-hold",
    startDate: "01 Feb 2024",
    endDate: "30 Aug 2024",
    team: [{
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "John Doe"
    }, {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Sarah Smith"
    }, {
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Mike Johnson"
    }]
  }] as const;
  return <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
    </div>;
};