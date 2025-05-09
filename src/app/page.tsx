'use client';

import { useState, useRef, useEffect } from 'react';

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
  sender: 'bot' | 'user';
}

const jobData: Job = {
  id: '1',
  title: 'EdTech Learning & Sales Enablement',
  salary: '$40K - $65K',
  equity: 'No equity',
  remote: 'Remote',
  experience: '3-5 years',
  type: 'Full Time',
  posted: 'yesterday',
  recruiter: 'Recruiter recently active',
  locations: ['Alabama', 'Ohio', 'Texas', 'Illinois', 'Michigan', 'Georgia', 'Wisconsin', 'Indiana', 'Oklahoma'],
  visa: 'Not Available',
  hires: 'Everywhere',
  remotePolicy: 'Remote only',
  hours: '9:00 AM - 6:00 PM',
  timezones: ['Mountain Time', 'Central Time', 'Eastern Time', 'Atlantic Time'],
  relocation: 'Allowed',
  skills: ['CRM', 'Sales', 'Presentation Skills', 'Onboarding'],
  contact: {
    name: 'Mason Hillgoss',
    role: 'Employee',
    location: 'Prague',
  },
};

export default function JobPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChatClosed, setIsChatClosed] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
    { id: 2, text: 'I need help with my order', sender: 'user' },
    { id: 3, text: 'Sure! Please provide me with your order number', sender: 'bot' },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: messageInput,
      sender: 'user',
    };
    setMessages([...messages, newMessage]);
    setMessageInput('');

    // Simulate bot response (for demo purposes)
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: 'Thanks for providing that! I’m looking into your order now.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  // Auto-scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col overflow-hidden">
      <div className="flex flex-col md:flex-row flex-1 w-full gap-4 p-4 overflow-hidden">
        {/* Main Job Content */}
        <div className="md:w-3/4 w-full overflow-y-auto">
          {/* Sticky Header */}
          <div className="sticky top-0 bg-gradient-to-r from-gray-100 to-gray-200 z-10 flex justify-between items-center mb-4 p-6 shadow-sm">
            <div className="text-4xl text-gray-600 font-semibold">EdTech Learning • $ Sales Enablement</div>
            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition duration-200">
              Save
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6">
            {/* Job Title and Details */}
            <h1 className="text-2xl font-bold mb-2 text-gray-800">{jobData.title}</h1>
            <div className="text-sm text-gray-600 mb-4">
              {jobData.salary} • {jobData.equity} | {jobData.remote} + 9 | {jobData.experience} | {jobData.type}
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Posted: {jobData.posted} • {jobData.recruiter}
            </div>

            {/* Job Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Job Location</h2>
                <p className="text-gray-600">
                  {jobData.remote} • {jobData.locations.join(' • ')}
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Visa Sponsorship</h2>
                <p className="text-gray-600">{jobData.visa}</p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Remote Work Policy</h2>
                <p className="text-gray-600">{jobData.remotePolicy}</p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Hires remotely</h2>
                <p className="text-gray-600">{jobData.hires}</p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Preferred Timezones</h2>
                <p className="text-gray-600">{jobData.timezones.join(', ')}</p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Collaboration Hours</h2>
                <p className="text-gray-600">{jobData.hours}</p>
              </div>
            </div>

            {/* Relocation */}
            <div className="mb-6">
              <h2 className="font-semibold mb-1 text-gray-700">Relocation</h2>
              <div className="flex items-center">
                <p className="text-gray-600">{jobData.relocation}</p>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  ▼
                </button>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="font-semibold mb-1 text-gray-700">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {jobData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hiring Contact */}
            <div className="mb-6">
              <h2 className="font-semibold mb-1 text-gray-700">Hiring contact</h2>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center text-gray-600 font-semibold">
                  MH
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{jobData.contact.name}</p>
                  <p className="text-gray-500 text-sm">{jobData.contact.role}</p>
                  <p className="text-gray-500 text-sm">{jobData.contact.location}</p>
                </div>
              </div>
            </div>

            
          </div>
          {/* dummy content to test the scrolling */}
          <div className="p-6">
            {/* Job Title and Details */}
            <h1 className="text-2xl font-bold mb-2 text-gray-800">{jobData.title}</h1>
            <div className="text-sm text-gray-600 mb-4">
              {jobData.salary} • {jobData.equity} | {jobData.remote} + 9 | {jobData.experience} | {jobData.type}
            </div>
            <div className="text-sm text-gray-500 mb-6">
              Posted: {jobData.posted} • {jobData.recruiter}
            </div>

            {/* Job Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Job Location</h2>
                <p className="text-gray-600">
                  {jobData.remote} • {jobData.locations.join(' • ')}
                </p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Visa Sponsorship</h2>
                <p className="text-gray-600">{jobData.visa}</p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Remote Work Policy</h2>
                <p className="text-gray-600">{jobData.remotePolicy}</p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Hires remotely</h2>
                <p className="text-gray-600">{jobData.hires}</p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Preferred Timezones</h2>
                <p className="text-gray-600">{jobData.timezones.join(', ')}</p>
              </div>
              <div>
                <h2 className="font-semibold mb-1 text-gray-700">Collaboration Hours</h2>
                <p className="text-gray-600">{jobData.hours}</p>
              </div>
            </div>

            {/* Relocation */}
            <div className="mb-6">
              <h2 className="font-semibold mb-1 text-gray-700">Relocation</h2>
              <div className="flex items-center">
                <p className="text-gray-600">{jobData.relocation}</p>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  ▼
                </button>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="font-semibold mb-1 text-gray-700">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {jobData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hiring Contact */}
            <div className="mb-6">
              <h2 className="font-semibold mb-1 text-gray-700">Hiring contact</h2>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex items-center justify-center text-gray-600 font-semibold">
                  MH
                </div>
                <div>
                  <p className="text-gray-700 font-medium">{jobData.contact.name}</p>
                  <p className="text-gray-500 text-sm">{jobData.contact.role}</p>
                  <p className="text-gray-500 text-sm">{jobData.contact.location}</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        {/* Chat Window */}
        {!isChatClosed && (
          <div className="hidden md:block md:w-1/4 w-full bg-white rounded-2xl shadow-lg flex flex-col border border-gray-100">
            {/* Sticky Chat Header */}
            <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-t-2xl shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-indigo-600">
                  🤖
                </div>
                <h2 className="text-xl font-bold tracking-tight">AI Assistant</h2>
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
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4 group`}
                >
                  {message.sender === 'bot' && (
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2 text-indigo-600">
                      🤖
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] p-3 rounded-xl shadow-sm transition-all duration-200 group-hover:shadow-md ${
                      message.sender === 'user'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center ml-2 text-gray-600">
                      👤
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-4 right-4 flex space-x-4 md:hidden">
        <button className="bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 transition duration-200">
          <span className="text-gray-700">🏠</span>
        </button>
        <button className="bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 transition duration-200">
          <span className="text-gray-700">💬</span>
        </button>
      </div>
    </div>
  );
}