"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBell, faUser, faAngleDown } from '@fortawesome/free-regular-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    leads: false,
    opportunities: false,
    analytics: false,
  });

  const handleDropdownToggle = (menu) => {
    setDropdownOpen({
      ...dropdownOpen,
      [menu]: !dropdownOpen[menu],
    });
  };

  return (
    <main>
      <div className="min-h-screen bg-gray-100 p-2">
        <nav className="bg-white shadow-md">
          <div className="flex">
            <img src="/skillcapital.png" alt="Skill Capital" className="space-x-2" />
          </div>
          <div className="container mx-auto flex items-end justify-end">
            <div className="flex space-x-2">
              <Link href="/" legacyBehavior>
                <a className="px-1 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded">
                  Home <FontAwesomeIcon icon={faAngleDown} />
                </a>
              </Link>
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('leads')}
                  className="px-3 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded"
                >
                  Leads <FontAwesomeIcon icon={faAngleDown} />
                </button>
                {dropdownOpen.leads && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                    <Link href="/new-leads" legacyBehavior>
                      <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        New Leads
                      </a>
                    </Link>
                    <Link href="/lead-status" legacyBehavior>
                      <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Lead Status
                      </a>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/opportunities" legacyBehavior>
                <a className="px-3 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded">
                  Opportunities <FontAwesomeIcon icon={faAngleDown} />
                </a>
              </Link>
              <Link href="/learners" legacyBehavior>
                <a className="px-3 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded">
                  Learners <FontAwesomeIcon icon={faAngleDown} />
                </a>
              </Link>
              <Link href="/courses" legacyBehavior>
                <a className="px-3 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded">
                  Courses <FontAwesomeIcon icon={faAngleDown} />
                </a>
              </Link>
              <Link href="/activities" legacyBehavior>
                <a className="px-3 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded">
                  Activities <FontAwesomeIcon icon={faAngleDown} />
                </a>
              </Link>
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('analytics')}
                  className="px-3 py-2 text-gray-700 font-semibold hover:bg-gray-100 rounded"
                >
                  Analytics <FontAwesomeIcon icon={faAngleDown} />
                </button>
                {dropdownOpen.analytics && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                    <Link href="/analytics-overview" legacyBehavior>
                      <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Overview
                      </a>
                    </Link>
                    <Link href="/analytics-reports" legacyBehavior>
                      <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                        Reports
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-6 mr-10">
              <button><FontAwesomeIcon icon={faStar} size="2x" /></button>
              <button><FontAwesomeIcon icon={faBell} size="2x" /></button>
              <button><FontAwesomeIcon icon={faUser} size="2x" /></button>
            </div>
          </div>
        </nav>
        <main>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6 p-10">
            <div className="bg-white shadow-md p-4 rounded-lg flex items-center justify-between">
              <div>
                <h2 className="text-lg text-gray-500">Not Contacted</h2>
                <p className="text-2xl">1</p>
              </div>
              <div className="text-4xl"><FontAwesomeIcon icon={faUsers} /></div>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md flex items-center justify-between">
              <div>
                <h2 className="text-lg text-gray-500">Warm Lead</h2>
                <p className="text-2xl">25</p>
              </div>
              <div className="text-4xl"><FontAwesomeIcon icon={faUsers} /></div>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md flex items-center justify-between">
              <div>
                <h2 className="text-lg text-gray-500">Attempted</h2>
                <p className="text-2xl">21</p>
              </div>
              <div className="text-4xl"><FontAwesomeIcon icon={faUsers} /></div>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md flex items-center justify-between">
              <div>
                <h2 className="text-lg text-gray-500">Registered</h2>
                <p className="text-2xl">1</p>
              </div>
              <div className="text-4xl"><FontAwesomeIcon icon={faUsers} /></div>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md flex items-center justify-between">
              <div>
                <h2 className="text-lg text-gray-500">Opportunity</h2>
                <p className="text-2xl">1</p>
              </div>
              <div className="text-4xl"><FontAwesomeIcon icon={faUsers} /></div>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md flex items-center justify-between">
              <div>
                <h2 className="text-lg text-gray-500">Cold Lead</h2>
                <p className="text-2xl">36</p>
              </div>
              <div className="text-4xl"><FontAwesomeIcon icon={faUsers} /></div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="bg-white shadow-md p-4 rounded-md">
              <h2 className="text-xl font-bold mb-4 flex items-center justify-center">Today Leads</h2>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <h2 className="text-xl font-bold mb-4 flex items-center justify-center">Analytics</h2>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
};

export default Home;
