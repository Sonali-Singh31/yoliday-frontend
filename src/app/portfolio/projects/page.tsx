"use client";

import { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import { ChevronUp } from "lucide-react";

const dummyData = [
  {
    title: "Kemampuan Merangkum Tulisan",
    description: "Lorem Ipsum Dolor Sit Amet...",
    category: "Bahasa Sunda",
    author: "Al-Baij Samaan",
    imageUrl: "/images/project1.jpeg",
  },
  {
    title: "Kemampuan Menulis Artikel",
    description: "Short description goes here...",
    category: "Bahasa Sunda",
    author: "Al-Baij Samaan",
    imageUrl: "/images/project2.jpeg",
  },
  {
    title: "Analisa Teks Cerita",
    description: "Detailed project on analyzing narratives.",
    category: "Bahasa Indonesia",
    author: "Rina Hartono",
    imageUrl: "/images/project3.jpeg",
  },
  {
    title: "Membuat Ringkasan Narasi",
    description: "Project for summarizing long-form stories.",
    category: "Bahasa Indonesia",
    author: "Joko Santoso",
    imageUrl: "/images/project4.jpeg",
  },
  {
    title: "Menilai Struktur Bahasa",
    description: "Assessment of language structure in texts.",
    category: "Bahasa Inggris",
    author: "Siti Nurhaliza",
    imageUrl: "/images/project5.jpeg",
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = dummyData.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-180px)]">
      {/* Filter + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex items-center w-full sm:w-auto gap-2">
          <button className="bg-white border rounded-md px-3 py-2 flex items-center gap-1 text-sm">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2H3V4zm0 4h14v2H3V8zm0 4h9v2H3v-2z" />
            </svg>
            Filter
          </button>

          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search a project"
              className="w-full px-4 py-2 border rounded-md focus:outline-orange-400 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-orange-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="overflow-y-auto flex-1 pr-1 space-y-4"
      >
        {filtered.length > 0 ? (
          filtered.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        ) : (
          <p className="text-gray-500 text-sm">No projects found.</p>
        )}
      </div>

      {/* Scroll to top button */}
      {filtered.length > 3 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-orange-500 text-white p-2 rounded-full shadow hover:bg-orange-600 z-50"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}
