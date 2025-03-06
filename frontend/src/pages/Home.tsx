import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Twitter, Facebook } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <CheckCircle2 className="h-6 w-6 text-indigo-600 mr-2" />
            <h1 className="text-xl font-bold text-gray-900">TaskMaster</h1>
          </div>
          <div className="space-x-2">
            <Link to="/login">
              <Button variant="outline">Log in</Button>
            </Link>

            <Link to="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Organize your tasks, <br />
                <span className="text-indigo-600">boost your productivity</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md">
                TaskMaster helps you manage your tasks efficiently, prioritize
                your work, and never miss a deadline again.
              </p>
              <div className="space-x-4">
                <Link to="/signup">
                  <Button size="lg">Get Started — It's Free</Button>
                </Link>

                <Link to="/dashboard">
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Task Management Dashboard"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose TaskMaster?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Simple Task Management
              </h3>
              <p className="text-gray-600">
                Create, organize, and track your tasks with an intuitive
                interface designed for productivity.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Never Miss Deadlines
              </h3>
              <p className="text-gray-600">
                Set due dates and priorities for your tasks to stay on top of
                your schedule and commitments.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Track Your Progress
              </h3>
              <p className="text-gray-600">
                Monitor your productivity and task completion rate to improve
                your workflow and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-indigo-600 font-bold">JD</span>
              </div>
              <div>
                <h4 className="font-semibold">Jane Doe</h4>
                <p className="text-gray-500 text-sm">Product Manager</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "TaskMaster has completely transformed how I manage my team's
              projects. The intuitive interface and powerful features have
              boosted our productivity by at least 30%. I can't imagine going
              back to our old system."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to boost your productivity?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their task management
            and productivity with TaskMaster.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-indigo-400 mr-2" />
                <h1 className="text-xl font-bold text-white">TaskMaster</h1>
              </div>
              <p className="text-gray-400 max-w-xs">
                The simple yet powerful task management tool for individuals and
                teams.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>
              &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6 text-indigo-400" />
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">GitHub</span>
                <Facebook className="h-6 w-6 text-indigo-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
