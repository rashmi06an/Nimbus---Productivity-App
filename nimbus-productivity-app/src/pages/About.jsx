import React from 'react';
import { Clock, CheckCircle, BarChart3, Brain, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nimbus</h1>
            <p className="text-xl text-primary-100 mb-8">
              Nimbus is a powerful productivity tool designed to help you manage tasks, track time, 
              and boost your efficiency with insightful analytics.
            </p>
          </div>
        </div>
      </section>

      {/* App Overview */}
      <section className="py-16 bg-white dark:bg-dark-200">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Why we built Nimbus
            </h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                In today's fast-paced digital world, staying productive and managing time effectively has become more 
                challenging than ever. We created Nimbus to address this challenge by providing a seamless, intuitive 
                platform that combines task management, time tracking, and productivity analytics in one unified experience.
              </p>
              
              <p>
                Our mission is to help individuals and teams reclaim their time, focus on what matters most, and achieve 
                their goals with less stress and more clarity. We believe that productivity shouldn't feel overwhelming—it 
                should feel empowering.
              </p>
              
              <p>
                Nimbus was designed with a focus on simplicity and effectiveness. We've carefully crafted each feature 
                to ensure it adds real value to your workflow without unnecessary complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50 dark:bg-dark-100">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-600 dark:text-primary-400 mb-4 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg inline-block">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Smart Task Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Create, organize, and prioritize tasks with ease. Add due dates, tags, and detailed descriptions 
                to keep everything organized exactly how you need it.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400">•</span>
                  <span>Task prioritization with visual indicators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400">•</span>
                  <span>Custom tags for flexible organization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 dark:text-primary-400">•</span>
                  <span>Due date tracking and reminders</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-secondary-600 dark:text-secondary-400 mb-4 bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-lg inline-block">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Effective Time Tracking
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Track time spent on tasks with a single click. The built-in timer makes it easy to maintain 
                accurate records of how you spend your working hours.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 dark:text-secondary-400">•</span>
                  <span>One-click time tracking for any task</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 dark:text-secondary-400">•</span>
                  <span>Detailed time logs and history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-600 dark:text-secondary-400">•</span>
                  <span>Pomodoro timer for focused work sessions</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-accent-600 dark:text-accent-400 mb-4 bg-accent-100 dark:bg-accent-900/30 p-3 rounded-lg inline-block">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Insightful Analytics
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Visualize your productivity patterns with beautiful charts and reports. Identify trends, spot areas 
                for improvement, and celebrate your progress.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 dark:text-accent-400">•</span>
                  <span>Visual time distribution by task and tag</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 dark:text-accent-400">•</span>
                  <span>Productivity trends over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-600 dark:text-accent-400">•</span>
                  <span>Task completion rate analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-warning-600 dark:text-warning-400 mb-4 bg-warning-100 dark:bg-warning-900/30 p-3 rounded-lg inline-block">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Smart Notes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Capture ideas, information, and insights with our integrated notes system. Keep everything organized 
                with tags and full-text search.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 dark:text-warning-400">•</span>
                  <span>Rich text editing capabilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 dark:text-warning-400">•</span>
                  <span>Tag-based organization system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-warning-600 dark:text-warning-400">•</span>
                  <span>Fast, powerful search across all notes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Productivity Tips */}
      <section className="py-16 bg-white dark:bg-dark-200">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Productivity Tips
            </h2>
            
            <div className="space-y-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  The Pomodoro Technique
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The Pomodoro Technique is a time management method that uses a timer to break work into intervals, 
                  traditionally 25 minutes in length, separated by short breaks. Here's how to use it effectively:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Choose a task to work on</li>
                  <li>Set the Pomodoro timer for 25 minutes</li>
                  <li>Work on the task until the timer rings</li>
                  <li>Take a short break (5 minutes)</li>
                  <li>After four pomodoros, take a longer break (15-30 minutes)</li>
                </ol>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Task Prioritization
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Not all tasks are created equal. Use these strategies to prioritize effectively:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Use the Eisenhower Matrix to categorize tasks by urgency and importance</li>
                  <li>Start your day with the most challenging or important task (eat the frog)</li>
                  <li>Limit your daily to-do list to 3-5 important tasks</li>
                  <li>Re-evaluate your priorities regularly throughout the day</li>
                </ul>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Time Blocking
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Time blocking involves dedicating specific time periods to certain tasks or types of work:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Plan your day or week in advance, assigning specific time blocks to different activities</li>
                  <li>Group similar tasks together to minimize context switching</li>
                  <li>Include buffer time between blocks for unexpected issues</li>
                  <li>Be realistic about how long tasks will take</li>
                  <li>Schedule breaks and downtime deliberately</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/time-tracker" className="button-primary">
                Try the Pomodoro Timer
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-100">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Meet the Team
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & Lead Developer",
                bio: "Alex built the first version of Nimbus to solve his own productivity challenges and has been improving it ever since.",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "Sarah Chen",
                role: "UX Designer",
                bio: "Sarah's passion for intuitive interfaces and clean design helps make Nimbus a joy to use every day.",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                name: "Marcus Johnson",
                role: "Product Manager",
                bio: "Marcus brings years of experience in productivity tools and ensures Nimbus solves real user problems.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((member, index) => (
              <div key={index} className="card overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Join Us on This Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              We're just getting started and have big plans for the future of Nimbus. We'd love to hear your 
              feedback, suggestions, and stories about how Nimbus helps you be more productive.
            </p>
            <Link to="/tasks" className="button-primary button-lg">
              Start Using Nimbus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;