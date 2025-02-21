"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './LatestNews.css';

interface NewsItem {
  image: string;
  date: {
    day: string;
    month: string;
  };
  title: string;
  excerpt: string;
  content: string;
  source: string;
  url: string;
}

interface NewsModalProps {
  news: NewsItem | null;
  onClose: () => void;
}

const NewsModal = ({ news, onClose }: NewsModalProps) => {
  if (!news) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-medium text-gray-900">{news.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <div className="relative h-[300px] mb-6">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">{news.content}</p>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-gray-500">Source: {news.source}</span>
              <a 
                href={news.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#DA491A] hover:text-[#DA491A]/80 font-medium"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ news, onClick }: { news: NewsItem; onClick: () => void }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="relative h-[240px]">
      <Image
        src={news.image}
        alt={news.title}
        fill
        className="object-cover"
      />
      <div className="absolute top-4 left-4 bg-white rounded-lg p-2 text-center min-w-[50px]">
        <div className="text-lg font-medium text-gray-900">{news.date.day}</div>
        <div className="text-sm text-gray-500 uppercase">{news.date.month}</div>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
        {news.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-3">
        {news.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">Source: {news.source}</span>
        <button 
          onClick={onClick}
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
        </button>
      </div>
    </div>
  </div>
);

const LatestNews = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError('Failed to load news. Please try again later.');
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const renderNewsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item, index) => (
        <NewsCard
          key={index}
          news={item}
          onClick={() => setSelectedNews(item)}
        />
      ))}
    </div>
  );

  const renderMobileSwiper = () => (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ 
        clickable: true,
        dynamicBullets: true
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      loop={true}
      className="w-full px-1"
    >
      {news.map((item, index) => (
        <SwiperSlide key={index} className="pb-4">
          <NewsCard
            news={item}
            onClick={() => setSelectedNews(item)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <section className="py-6 md:py-24 px-4 bg-[#FAFAFA]">
      <div className="container mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">Latest News</h2>
          <div className="w-20 h-1 bg-[#DA491A] mx-auto"></div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#DA491A]"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-600">{error}</div>
        ) : (
          isMobile ? renderMobileSwiper() : renderNewsGrid()
        )}
      </div>

      {selectedNews && (
        <NewsModal
          news={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </section>
  );
};

export default LatestNews;
