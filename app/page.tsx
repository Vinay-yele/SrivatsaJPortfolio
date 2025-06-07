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
          <div className="flex flex-col items-start gap-4">
            <div className="relative rounded-full overflow-hidden border-4 border-purple-600 shadow-lg shadow-purple-500/20 transition-transform hover:scale-105 duration-300">
              <Image
                src="/srivatsa.jpeg"
                alt="Profile"
                width={180}
                height={180}
                className="object-cover w-44 h-44"
                priority
              />
            </div>
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
                <Link href="https://github.com/srivatsa-J/">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/srivatsa-j-683bb1259/">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="text-gray-400 text-sm">
              <p>© 2025 Srivatsa J. All rights reserved.</p>
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
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-mono">Projects</h2>
  </div>
  <div className="space-y-8">
    {/* Project 1 */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold">Handwritten Mathematical Equation Recognition</h3>
          </div>
          <p className="text-gray-400 mb-2 text-sm">December 2024 - Present (Ongoing)</p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Developed a deep learning-based system using CNN and LSTM that accurately predicts and evaluates
            handwritten mathematical equations, achieving <span className="text-green-400 font-semibold">85% accuracy</span> on test datasets.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="text-white border-purple-500 hover:bg-purple-500/20 transition-colors">Deep Learning</Badge>
            <Badge variant="outline" className="text-white border-blue-500 hover:bg-blue-500/20 transition-colors">CNN</Badge>
            <Badge variant="outline" className="text-white border-green-500 hover:bg-green-500/20 transition-colors">LSTM</Badge>
            <Badge variant="outline" className="text-white border-yellow-500 hover:bg-yellow-500/20 transition-colors">Tkinter</Badge>
            <Badge variant="outline" className="text-white border-red-500 hover:bg-red-500/20 transition-colors">LaTeX</Badge>
          </div>
          <ul className="list-none text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">▸</span>
              Built a Tkinter-based frontend to capture and display handwritten equations
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">▸</span>
              Enables real-time evaluation and solution of equations up to grade 8 math level
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 mt-1">▸</span>
              Trained on <span className="text-blue-400 font-semibold">100,000 images</span> across 10 batches
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-800 rounded-lg p-4 border border-gray-600">
              <div className="w-32 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-mono text-xs">∑ x² + y = z</span>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">Math Recognition Demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="text-xl font-bold">IPL Score Predictor</h3>
          </div>
          <p className="text-gray-400 mb-2 text-sm">August 2024</p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Engineered a robust IPL Score Predictor leveraging Random Forest Regressor, achieving high accuracy of
            <span className="text-green-400 font-semibold"> 93.69%</span> in predicting match outcomes.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="text-white border-blue-500 hover:bg-blue-500/20 transition-colors">Python</Badge>
            <Badge variant="outline" className="text-white border-orange-500 hover:bg-orange-500/20 transition-colors">Power-BI</Badge>
            <Badge variant="outline" className="text-white border-red-500 hover:bg-red-500/20 transition-colors">Streamlit</Badge>
            <Badge variant="outline" className="text-white border-green-500 hover:bg-green-500/20 transition-colors">Random Forest</Badge>
          </div>
          <ul className="list-none text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">▸</span>
              Integrated the predictive model into an interactive web application using Streamlit
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">▸</span>
              Enabled dynamic prediction of match scores using over <span className="text-orange-400 font-semibold">10 match-specific parameters</span>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-800 rounded-lg p-4 border border-gray-600">
              <div className="w-32 h-24 bg-gradient-to-br from-blue-600 to-orange-600 rounded-md flex flex-col items-center justify-center">
                <div className="text-white font-bold text-lg">180</div>
                <div className="text-white text-xs">Predicted Score</div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">IPL Prediction Model</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h3 className="text-xl font-bold">Event Staff Planning System for Sports</h3>
          </div>
          <p className="text-gray-400 mb-2 text-sm">March 2024 - June 2024</p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Designed and implemented a comprehensive event staff planning system, improving operational efficiency
            by <span className="text-green-400 font-semibold">40%</span> and streamlining the management of over <span className="text-blue-400 font-semibold">200 staff members</span>.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="text-white border-red-500 hover:bg-red-500/20 transition-colors">Streamlit</Badge>
            <Badge variant="outline" className="text-white border-blue-500 hover:bg-blue-500/20 transition-colors">Python</Badge>
            <Badge variant="outline" className="text-white border-purple-500 hover:bg-purple-500/20 transition-colors">Data Visualization</Badge>
          </div>
          <ul className="list-none text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">▸</span>
              Developed a user-friendly Streamlit interface for real-time data entry and visualization
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">▸</span>
              Optimized staff schedules and roles
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">▸</span>
              Reduced manual processing time by <span className="text-yellow-400 font-semibold">50%</span>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-gray-800 rounded-lg p-4 border border-gray-600">
              <div className="w-32 h-24 bg-gradient-to-br from-green-600 to-teal-600 rounded-md flex flex-col items-center justify-center">
                <div className="text-white font-bold text-sm">200+</div>
                <div className="text-white text-xs">Staff Managed</div>
                <div className="text-green-200 text-xs mt-1">40% ↑ Efficiency</div>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">Staff Management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


          {/* Certifications and Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Certifications Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-orange-700 shadow-lg hover:shadow-orange-500/20 transition-shadow">
              <h2 className="text-2xl font-mono mb-4 text-orange-400">Certifications</h2>
              <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-orange-600 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                <span className="font-bold text-white text-lg">O</span>
                </div>
                <div>
                <h3 className="font-semibold text-white">Gen AI OCI</h3>
                <p className="text-gray-400 text-sm">Oracle</p>
                </div>
              </div>
              </div>
            </section>

            {/* Extracurricular Activities Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-700 shadow-lg hover:shadow-purple-500/20 transition-shadow">
              <h2 className="text-2xl font-mono mb-4 text-purple-400">Activities</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="font-bold text-white text-lg">A</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">GRADIENT - AIML Student Club</h3>
                    <ul className="list-disc list-inside text-gray-300 text-sm mt-1 space-y-1">
                      <li>Volunteer for Phase Shift 2023 event</li>
                      <li>Participated in AI Week 2024 event</li>
                      <li>Logistics and Event Management Member</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
