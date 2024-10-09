import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function sidebar() {  
  const location = useLocation(); // Get the current URL location

  // Function to check if a path is active
  const isActive = (path) => location.pathname === path;


  return (
    <aside
      id="default-sidebar"
      className="fixed w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-4 py-7 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        {/* Logo */}

        <div>
          <svg
            width="60"
            height="100"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.1874 31.0452C2.72485 29.5873 2.54537 26.0904 4.84573 24.388L35.6436 1.59589C36.9481 0.630476 38.7066 0.54895 40.0948 1.38953L78.9721 24.9297C81.3858 26.3912 81.5683 29.8251 79.3231 31.5341L49.393 54.3169C48.0975 55.303 46.3335 55.4055 44.9325 54.5761L5.1874 31.0452Z"
              fill="#10197A"
            />
            <path
              d="M42.172 16V20.628H45.2344V24.6538H42.172V33.1699C42.172 33.8695 42.2982 34.357 42.5505 34.6323C42.8029 34.9075 43.3018 35.0452 44.0473 35.0452C44.6208 35.0452 45.1025 35.0108 45.4925 34.9419V39.0882C44.4487 39.4208 43.3591 39.5871 42.2237 39.5871C40.228 39.5871 38.7541 39.1168 37.8022 38.1763C36.8502 37.2358 36.3742 35.8079 36.3742 33.8925V24.6538H34V20.628H36.3742V16H42.172Z"
              fill="white"
            />
            <rect x="48.5996" y="35" width="5" height="5" fill="#364EAB" />
          </svg>
        </div>

        {/* Pages */}

        <ul className="space-y-2 font-medium">
          <li>
          <Link
              to="/dashboard"
              className={`flex items-center p-2 rounded-lg group ${
                isActive("/dashboard")
                  ? "bg-darkest dark:bg-gray-600 text-white"
                  : "text-darkest dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
              </svg>
              <span className="flex-1 ms-3 font-bold whitespace-nowrap">Dashboard</span>
            </Link>
          </li>
          <li>
          <Link
              to="/analytics"
              className={`flex items-center p-2 rounded-lg group ${
                isActive("/analytics")
                  ? "bg-darkest dark:bg-gray-600 text-white"
                  : "text-darkest dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5 text-darkest transition duration-75 dark:text-gray-400 group-hover:text-darkest dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"></path>
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"></path>
              </svg>
              <span className="ms-3 font-bold">analytics</span>
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-darkest rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-darkest transition duration-75 dark:text-gray-400 group-hover:text-darkest dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"></path>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap font-bold">My Tasks</span>
            </a>
          </li>

          <li>  
            <Link
              to="/create-task"
              className={`flex items-center p-2 rounded-lg group ${
                isActive("/create-task")
                  ? "bg-darkest dark:bg-gray-600 text-white"
                  : "text-darkest dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="flex-shrink-0 w-5 h-5  transition duration-75 dark:text-gray-400 group-hover:text-darkest dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"></path>
                <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"></path>
                <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"></path>
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap font-bold">Create Task</span>
              </Link>
            
          </li>

          <li >
           <Link
              to="/settings"
              className={`flex items-center p-2 rounded-lg group ${
                isActive("/settings")
                  ? "bg-darkest dark:bg-gray-600 text-white"
                  : "text-darkest dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                />
              </svg>
              
              <span className="flex-1 ms-3 whitespace-nowrap font-bold">Settings</span>
              </Link>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-2 text-darkest rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg
                className="w-5 h-5 text-darkest dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap font-bold">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
