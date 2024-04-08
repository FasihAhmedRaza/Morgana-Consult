'use client'
import Footer from '@/components/Footer';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useState, useEffect } from 'react';

function AboutUs() {
  // Data for each team member
  const teamMembers = [
    {
      name: "Zeus",
      role: "Chairman and CEO",
      bio: "Graduated from Texas Tech University with a Master of Business Administration and a Master of Science in Data Science. Over 5 years of professional experience as a Data Scientist building data science systems for the public and private sector.",
      skills: [
        "Data Science",
        "Business Administration",
        "AI Consulting",
        "Licensing Solutions"
      ]
    },
    {
      name: "Hades",
      role: "Chief Operations Officer",
      bio: "Over 15+ years of experience developing custom software and machine learning solutions. Specializes in real estate, blockchain technology, and machine learning.",
      skills: [
        "Software Development",
        "Machine Learning",
        "Real Estate",
        "Blockchain Technology"
      ]
    },
    {
      name: "Poseidon",
      role: "Chief Technology Officer",
      bio: "Over 10 years of experience developing custom software and PyTorch Large Language Models. Provides educational content on developing Large Language Models through courses and YouTube videos.",
      skills: [
        "Software Development",
        "PyTorch",
        "Large Language Models",
        "Course Development",
        "YouTube Content Creation"
      ]
    }
  ];

  // State to track if client-side rendering has occurred
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mission and Vision statements
  const missionStatement = "We are a software and consulting company dedicated to leveraging AI to create innovative solutions that add value to our clients' businesses. Our mission is to empower organizations with AI-driven insights and technologies, enabling them to thrive in the digital age.";

  const visionStatement = "Our vision is to be the leading provider of AI-driven solutions, known for our commitment to excellence, innovation, and client satisfaction.";

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl text-center font-bold mb-4 text-gray-100">About Us</h1>
          <h2 className="text-4xl md:text-2xl  mt-20 text-center  font-bold mb-4 text-gray-300">Our Mission</h2>
          <p className="text-md text-center mt-5 text-gray-200">{missionStatement}</p>
          {/* <p className="text-lg text-center mt-4 text-gray-800">{visionStatement}</p> */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-black rounded-lg overflow-hidden shadow-md 
            transition-transform transform hover:scale-105 border border-gray-200">
              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-blue-600">{member.name}</h2>
                <p className="text-sm md:text-base mb-2 font-bold text-gray-300">{member.role}</p>
                <p className="text-sm md:text-base mb-4 mt-4 text-gray-200">{member.bio}</p>
                <div className="flex flex-wrap">
                  {member.skills && member.skills.map((skill, index) => (
                    <span key={index} className="mr-2 mb-2 bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm capitalize">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
