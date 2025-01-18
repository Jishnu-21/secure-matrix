"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  date: {
    day: string;
    month: string;
  };
  title: string;
  excerpt: string;
}

const BlogCard = ({ image, date, title, excerpt }: BlogCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
    {/* Image Container */}
    <div className="relative h-[240px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      {/* Date Badge */}
      <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-center min-w-[50px]">
        <div className="text-lg font-medium text-gray-900">{date.day}</div>
        <div className="text-sm text-gray-500 uppercase">{date.month}</div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {excerpt}
      </p>
      <Link 
        href="#" 
        className="text-[#DA491A] hover:text-[#DA491A]/80 inline-flex items-center gap-2 font-medium"
      >
        Read More
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          className="mt-0.5"
        >
          <path 
            d="M1 8H15M15 8L8 1M15 8L8 15" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  </div>
);

const LatestNews = () => {
  const blogs = [
    {
      image: "/images/blog1.jpg",
      date: {
        day: "23",
        month: "Jan"
      },
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      image: "/images/blog1.jpg",
      date: {
        day: "23",
        month: "Jan"
      },
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      image: "/images/blog1.jpg",
      date: {
        day: "23",
        month: "Jan"
      },
      title: "Curabitur porttitor orci eget neque accumsan venenatis.",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]">
      <div className="container mx-auto max-w-[1400px]">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">
            Latest News
          </h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              {...blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
