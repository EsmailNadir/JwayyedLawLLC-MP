'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Gift, Gavel, ArrowRight, Star, DollarSign } from 'lucide-react';

export default function MasconPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#D4A574] to-[#C9995E] py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Jwayyed Law LLC at MASCON 2025
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Visit our booth for exclusive opportunities and free legal consultations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-white/90">
                <Calendar className="w-5 h-5 mr-2" />
                <span>August 23-24, 2025</span>
              </div>
              <div className="flex items-center text-white/90">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Booth #55 - Greater Columbus Convention Center</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Follow us on social media and leave us a review to support our community
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://instagram.com/jjlawohio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-semibold text-gray-900">Instagram</span>
              <span className="text-sm text-gray-600">@jjlawohio</span>
            </a>
            
            <a
              href="https://tiktok.com/@jjlawohio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <svg className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span className="font-semibold text-gray-900">TikTok</span>
              <span className="text-sm text-gray-600">@jjlawohio</span>
            </a>
            
            <a
              href="https://www.google.com/search?sca_esv=1c2c48b035966a68&hl=en-US&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_VyCFWEUf6DBepoMcd2T7MiOL9-azPqhM8XfD6v3GBWfr266ME-Vry2f_ah8RhiZMCqQyeaTFQmHPzYaFSCZL3jSBgD&q=Jwayyed+Law+LLC+Reviews&sa=X&ved=2ahUKEwj66IH3wZmPAxWyjIkEHetXLpgQ0bkNegQIHhAE&biw=1280&bih=712&dpr=2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Google Reviews</span>
              <span className="text-sm text-gray-600">Leave us a review</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Offerings */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We&apos;re Offering at MASCON
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Stop by our booth for these exclusive MASCON opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 50% OFF WILLS - TOP FEATURE */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <DollarSign className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">50% DEAL HALF OFF WILLS</h3>
                <p className="text-xl mb-6 opacity-90">
                  PROTECT YOUR FAMILY&apos;S FUTURE
                </p>
                
                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold mb-2">DID YOU KNOW?</p>
                  <p className="text-sm text-red-100">
                    IN OHIO, YOUR FAMILY&apos;S HANDS ARE TIED WITHOUT A WILL. DO NOT LET THE COURT DECIDE WHO INHERITS, VERBAL WISHES DON&apos;T COUNT!
                  </p>
                </div>

                <div className="text-left mb-6 space-y-2">
                  <p className="font-semibold">WHY CHOOSE US:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• ENSURE YOUR ASSETS AND CHILDREN ARE CARED FOR BY PEOPLE YOU TRUST</li>
                    <li>• PROTECT YOUR LOVED ONES FROM COURT BATTLES, DELAYS, AND EXTRA COSTS</li>
                    <li>• SECURE YOUR WISHES FOR FINANCES, HEALTH, AND ESTATE DECISIONS</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfO5tmhUeOEqUlOuvT-dDN-ITri42_5gbNGYP-9dlKvh8Krxg/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get 50% OFF Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <div className="text-center">
                    <p className="text-sm text-red-100">REDEEM BEFORE:</p>
                    <p className="text-lg font-bold">SEP 1, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Raffle Entry */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-8 text-white">
              <div className="text-center">
                <Gift className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Enter Our Raffle!</h3>
                <div className="text-left mb-6 space-y-2">
                  <p className="font-semibold">Prizes Include:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 2 FREE WILLS ($1000 value each)</li>
                    <li>• 6 Gift Cards</li>
                    <li>• 6 Tumbler Cups with JL Logo</li>
                  </ul>
                </div>
                <div className="text-left mb-6 space-y-2">
                  <p className="font-semibold">How to Enter:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Submit your contact info (required)</li>
                    <li>• Leave us a Google Review</li>
                    <li>• Follow us on Instagram @jjlawohio</li>
                    <li>• Follow us on TikTok @jjlawohio</li>
                    <li>• Repost one of our videos</li>
                  </ul>
                  <p className="text-xs mt-3">*Entries valid both days (23rd & 24th) • Close at 6pm • Winner announced at 7pm</p>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfPfIBj08Gv646TzpNJ2FDwd7HfGrD2Fxe02QCdBH0BwODcRQ/viewform?usp=preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Enter Raffle Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>

            {/* Legal Consultation */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white">
              <div className="text-center">
                <Gavel className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Ask a Lawyer</h3>
                <p className="text-lg mb-6 opacity-90">
                  Submit your ANONYMOUS legal questions for Attorney Jwayyed to answer live during our Q&A sessions
                </p>
                <div className="text-left mb-6 space-y-2">
                  <p className="font-semibold">Q&A Schedule:</p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>• Saturday (23rd): 7:00-8:10 PM</span>
                      <span>Location: Hall D180 + D181</span>
                    </li>
                    <li className="flex justify-between">
                      <span>• Sunday (24th): 4:10-5:10 PM</span>
                      <span>Location: Hall D180 + D181</span>
                    </li>
                  </ul>
                  <p className="text-xs mt-3">*Submissions close shortly before each Q&A session begins</p>
                </div>
                <div className="text-left mb-6 space-y-2">
                  <p className="font-semibold">Our Services:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Criminal Law</li>
                    <li>• Constitutional Law</li>
                    <li>• Employment Law</li>
                    <li>• Civil Law</li>
                    <li>• Wills and Estates</li>
                    <li>• Real Estate/Property Law</li>
                  </ul>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScoZhScOshKudsmDI20XK0sQzl2H91phrEQLpOKQnXZTA30XA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Ask a Lawyer
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Event Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="w-12 h-12 text-[#D4A574] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dates</h3>
              <p className="text-gray-600">August 23-24, 2025</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#D4A574] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Greater Columbus Convention Center</p>
              <p className="text-gray-500 text-sm">Columbus, Ohio</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#D4A574] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">55</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Booth</h3>
              <p className="text-gray-600">Booth #55</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#D4A574]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            See You at MASCON 2025!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Don&apos;t miss out on our exclusive offers. Visit Booth #55 for your chance to save 50% on wills and get free legal advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfO5tmhUeOEqUlOuvT-dDN-ITri42_5gbNGYP-9dlKvh8Krxg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#D4A574] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Get 50% OFF Wills
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#D4A574] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 
