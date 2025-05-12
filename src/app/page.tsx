"use client";

import { useState, useRef, useEffect } from "react";

interface Job {
  id: string;
  title: string;
  salary: string;
  equity: string;
  remote: string;
  experience: string;
  type: string;
  posted: string;
  recruiter: string;
  locations: string[];
  visa: string;
  hires: string;
  remotePolicy: string;
  hours: string;
  timezones: string[];
  relocation: string;
  skills: string[];
  contact: {
    name: string;
    role: string;
    location: string;
  };
}

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
}

const jobData: Job = {
  id: "1",
  title: "EdTech Learning & Sales Enablement",
  salary: "$40K - $65K",
  equity: "No equity",
  remote: "Remote",
  experience: "3-5 years",
  type: "Full Time",
  posted: "yesterday",
  recruiter: "Recruiter recently active",
  locations: [
    "Alabama",
    "Ohio",
    "Texas",
    "Illinois",
    "Michigan",
    "Georgia",
    "Wisconsin",
    "Indiana",
    "Oklahoma",
  ],
  visa: "Not Available",
  hires: "Everywhere",
  remotePolicy: "Remote only",
  hours: "9:00 AM - 6:00 PM",
  timezones: ["Mountain Time", "Central Time", "Eastern Time", "Atlantic Time"],
  relocation: "Allowed",
  skills: ["CRM", "Sales", "Presentation Skills", "Onboarding"],
  contact: {
    name: "Mason Hillgoss",
    role: "Employee",
    location: "Prague",
  },
};

export default function JobPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChatClosed, setIsChatClosed] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
    { id: 2, text: "I need help with my order", sender: "user" },
    {
      id: 3,
      text: "Sure! Please provide me with your order number",
      sender: "bot",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: messageInput,
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setMessageInput("");

    // bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: "Thanks for providing that! I’m looking into your order now.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col overflow-hidden">
      <div className="flex flex-col lg:flex-row flex-1 w-full gap-6 p-4 md:p-6 overflow-hidden">
        <div className="lg:w-3/4 w-full overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Gradient Header*/}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 md:p-8 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-1">
                    {jobData.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {jobData.salary}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {jobData.type}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {jobData.experience}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {jobData.remote}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex gap-3">
                  <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-medium hover:bg-blue-50 transition duration-200 shadow-sm">
                    Apply Now
                  </button>
                  <button className="border-2 border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition duration-200">
                    Save Job
                  </button>
                </div>
              </div>
            </div>

            {/*  Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Posted {jobData.posted}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {jobData.recruiter}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Location & Policy
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Remote Policy:</span>{" "}
                      {jobData.remotePolicy}
                    </p>
                    <p>
                      <span className="font-medium">Hires:</span>{" "}
                      {jobData.hires}
                    </p>
                    <p>
                      <span className="font-medium">Timezones:</span>{" "}
                      {jobData.timezones.join(", ")}
                    </p>
                    <p>
                      <span className="font-medium">Visa Sponsorship:</span>{" "}
                      {jobData.visa}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Schedule & Relocation
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Hours:</span>{" "}
                      {jobData.hours}
                    </p>
                    <p>
                      <span className="font-medium">Relocation:</span>{" "}
                      {jobData.relocation}
                    </p>
                    <div className="flex items-center">
                      <span className="font-medium">Locations:</span>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none transition duration-200"
                      >
                        {isDropdownOpen ? "▲ Hide" : "▼ Show all"}
                      </button>
                    </div>
                    {isDropdownOpen && (
                      <div className="mt-2 bg-white p-3 rounded-lg shadow-inner">
                        <ul className="columns-2 gap-4">
                          {jobData.locations.map((location, index) => (
                            <li key={index} className="py-1 text-sm">
                              {location}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                  Required Skills
                </h2>
                <div className="flex flex-wrap gap-3">
                  {jobData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full font-medium hover:shadow-md transition duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hiring Contact info */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Hiring Contact
                </h2>
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold text-xl">
                    {jobData.contact.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {jobData.contact.name}
                    </h3>
                    <p className="text-gray-600">{jobData.contact.role}</p>
                    <p className="text-gray-500 text-sm mt-1 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      {jobData.contact.location}
                    </p>
                    <button className="mt-3 text-blue-600 hover:text-blue-800 font-medium flex items-center transition duration-200">
                      Contact Recruiter
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* footer button for apply */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 text-center border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Ready to apply?
                </h3>
                <p className="text-gray-600 mb-5">
                  This position is accepting applications through our platform.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-200">
                  Apply for This Position
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Window */}
        {!isChatClosed && (
          <div className="hidden md:block md:w-1/4 w-full bg-white rounded-2xl shadow-lg flex flex-col border border-gray-100">
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-t-2xl shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-indigo-600">
                  🤖
                </div>
                <h2 className="text-xl font-bold tracking-tight">
                  AI Assistant
                </h2>
              </div>
              <button
                onClick={() => setIsChatClosed(true)}
                className="text-white hover:text-gray-200 focus:outline-none transition duration-200 p-1 rounded-full hover:bg-indigo-700"
              >
                ✕
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } mb-4 group`}
                >
                  {message.sender === "bot" && (
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2 text-indigo-600">
                      🤖
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-xl shadow-sm transition-all duration-200 group-hover:shadow-md ${
                      message.sender === "user"
                        ? "bg-indigo-600 text-white"
                        : "bg-white text-gray-800 border border-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center ml-2 text-gray-600">
                      👤
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-gray-200 bg-white rounded-b-2xl"
            >
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 bg-gray-50 text-gray-800 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition duration-200 flex items-center space-x-1"
                >
                  <span>Send</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
