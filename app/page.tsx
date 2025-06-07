"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Mail, Phone, Github, Linkedin, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-mono">SRIVATSA J.</h1>
              <p className="text-gray-400">AI/ML ENGINEERING STUDENT</p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              AI/ML engineering student with hands-on experience in developing machine learning applications and
              web-based solutions. Passionate about deep learning, computer vision, and predictive modeling with a focus
              on practical applications.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href="mailto:srivatsajutur@gmail.com" className="text-gray-300 hover:text-white">
                  srivatsajutur@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href="tel:+919035067148" className="text-gray-300 hover:text-white">
                  +91 9035067148
                </a>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xl font-mono border-b border-gray-800 pb-2">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Bachelor of Engineering in AI/ML</h3>
                <p className="text-gray-400">BMS College of Engineering</p>
                <p className="text-gray-500 text-sm">Currently pursuing</p>
              </div>
              <div>
                <h3 className="font-medium">Pre-University Course (PCMB)</h3>
                <p className="text-gray-400">Narayana PU College</p>
                <p className="text-gray-500 text-sm">Completed</p>
              </div>
              <div>
                <h3 className="font-medium">10th Grade</h3>
                <p className="text-gray-400">Basavarajeshwari Public School and College</p>
                <p className="text-gray-500 text-sm">Ballari, Karnataka - Completed</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="text-gray-400 text-sm">
              <p>© 2024 Srivatsa J. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Projects Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">Projects</h2>
            </div>
            <div className="space-y-6">
              {/* Project 1 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Handwritten Mathematical Equation Recognition</h3>
                <p className="text-gray-400 mb-2">December 2024 - Present (Ongoing)</p>
                <p className="text-gray-300 mb-4">
                  Developed a deep learning-based system using CNN and LSTM that accurately predicts and evaluates
                  handwritten mathematical equations, achieving 85% accuracy on test datasets.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">CNN</Badge>
                  <Badge variant="outline">LSTM</Badge>
                  <Badge variant="outline">Tkinter</Badge>
                  <Badge variant="outline">LaTeX</Badge>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Built a Tkinter-based frontend to capture and display handwritten equations</li>
                  <li>Enables real-time evaluation and solution of equations up to grade 8 math level</li>
                  <li>Trained on 100,000 images across 10 batches</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">IPL Score Predictor</h3>
                <p className="text-gray-400 mb-2">August 2024</p>
                <p className="text-gray-300 mb-4">
                  Engineered a robust IPL Score Predictor leveraging Random Forest Regressor, achieving high accuracy of
                  93.69% in predicting match outcomes.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Power-BI</Badge>
                  <Badge variant="outline">Streamlit</Badge>
                  <Badge variant="outline">Random Forest</Badge>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Integrated the predictive model into an interactive web application using Streamlit</li>
                  <li>Enabled dynamic prediction of match scores using over 10 match-specific parameters</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Event Staff Planning System for Sports</h3>
                <p className="text-gray-400 mb-2">March 2024 - June 2024</p>
                <p className="text-gray-300 mb-4">
                  Designed and implemented a comprehensive event staff planning system, improving operational efficiency
                  by 40% and streamlining the management of over 200 staff members.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Streamlit</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">Data Visualization</Badge>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Developed a user-friendly Streamlit interface for real-time data entry and visualization</li>
                  <li>Optimized staff schedules and roles</li>
                  <li>Reduced manual processing time by 50%</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>C/C++</Badge>
                  <Badge>Python</Badge>
                  <Badge>Java (Basics)</Badge>
                  <Badge>MySQL</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Libraries & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>pandas</Badge>
                  <Badge>NumPy</Badge>
                  <Badge>Matplotlib</Badge>
                  <Badge>Streamlit</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Development Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>VS Code</Badge>
                  <Badge>Jupyter</Badge>
                  <Badge>Git</Badge>
                  <Badge>Google Colab</Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications and Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Certifications Section */}
            <section className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-mono mb-4">Certifications</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <span className="font-bold">O</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Gen AI OCI</h3>
                    <p className="text-gray-400">Oracle</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Extracurricular Activities Section */}
            <section className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-mono mb-4">Activities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">GRADIENT - AIML Student Club</h3>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    <li>Volunteer for Phase Shift 2023 event</li>
                    <li>Participated in AI Week 2024 event</li>
                    <li>Logistics and Event Management Member</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
