"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./LatestNews.css";

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

  // Add modal-open class when modal is opened
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <div className="fixed inset-0 modal-backdrop blur-effect z-50 flex items-center justify-center p-4">
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
            <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: news.content }} />
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm text-gray-500">Source: {news.source}</span>
              <a 
                href={news.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#DA491A] hover:text-[#DA491A]/80 font-medium"
              >
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
          className="text-[#DA491A] hover:text-[#DA491A]/80 inline-flex items-center gap-2 font-medium cursor-pointer group"
        >
          Read More
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2"
            className="transform group-hover:translate-x-1 transition-transform"
          >
            <path 
              d="M5 12h14M12 5l7 7-7 7" 
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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Hardcoded news data with both articles
        const data: NewsItem[] = [
          {
            image: "/blogs/1.jpg",
            date: {
              day: "04",
              month: "Mar",
            },
            title: "Rockfall Netting: Your Invisible Shield Against Nature's Gravity",
            excerpt:
              "Discover how rockfall netting acts as a crucial protective barrier in various sectors including transportation, mining, urban development, and adventure zones.",
            content: `
              <h1 class="text-2xl font-bold mb-4">Rockfall Netting: Your Invisible Shield Against Nature's Gravity</h1>
              
              <p class="mb-6">Imagine cruising along a scenic mountain highway, the sun casting golden hues over rugged cliffs, when suddenly—a rock tumbles onto the road ahead. Heart-stopping, isn't it? This is where rockfall netting steps in as the unsung hero, quietly safeguarding our journeys and communities from nature's unpredictable moods.</p>
              
              <h2 class="text-xl font-bold mb-3">Why Should We Care About Rockfall Netting?</h2>
              <p class="mb-6">In regions where mountains and hills dominate the landscape, falling rocks aren't just a rare occurrence—they're a persistent challenge. These natural events can disrupt transportation, damage infrastructure, and, most critically, endanger lives. Rockfall netting acts as a protective barrier, preventing loose rocks from making unwelcome appearances in our daily lives.</p>
              
              <h2 class="text-xl font-bold mb-3">Where Does Rockfall Netting Make a Difference?</h2>
              <p class="mb-6">Rockfall netting isn't a one-size-fits-all solution; it's tailored to meet the unique demands of various sectors:</p>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Transportation Lifelines:</strong> Highways, railways, and tunnels winding through mountainous terrains are vulnerable to rockfalls. Implementing rockfall netting ensures these vital routes remain safe and operational, allowing us to travel without a second thought. <a href="#">[citeturn0search0]</a></li>
                <li class="mb-2"><strong>Mining Frontiers:</strong> Mining operations often venture into steep and unstable grounds. Rockfall netting provides a safety net—literally—for workers, enhancing both safety and productivity. <a href="#">[citeturn0search0]</a></li>
                <li class="mb-2"><strong>Urban Escapes:</strong> As cities expand into hilly areas, the risk of rockfalls near residential and commercial properties increases. Rockfall netting ensures that our homes and workplaces remain sanctuaries, free from the threat of descending debris. <a href="#">[citeturn0search0]</a></li>
                <li class="mb-2"><strong>Adventure Zones:</strong> Tourist spots like ski resorts and hiking trails draw enthusiasts to the mountains. Rockfall netting ensures these adventures are thrilling for the right reasons, keeping nature's surprises at bay. <a href="#">[citeturn0search0]</a></li>
              </ul>
              
              <h2 class="text-xl font-bold mb-3">What Are the Types of Rockfall Netting?</h2>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Double-Twisted Hexagonal Wire Mesh:</strong> Think of this as the fine mesh sieve, ideal for catching smaller rock fragments (typically less than 2 feet). Its design offers continuous coverage, blending seamlessly with the natural landscape.</li>
                <li class="mb-2"><strong>Wire Rope Cable Nets:</strong> When dealing with the big players—rocks up to 4-5 feet—these sturdy nets come into play, offering enhanced strength and durability. <a href="#">[citeturn0search11]</a></li>
                <li class="mb-2"><strong>Ring Nets:</strong> For the giants among rocks, ring nets provide high strength and flexibility, adapting to the most challenging conditions. <a href="#">[citeturn0search11]</a></li>
              </ul>
              
              <h2 class="text-xl font-bold mb-3">Is Rockfall Netting Effective?</h2>
              <p class="mb-6">Absolutely. Studies have shown that well-designed and properly installed rockfall netting systems significantly reduce the risk of rockfall-related incidents. By anchoring the netting to the slope with rock bolts, these systems can withstand the impact of falling rocks, providing continuous coverage and blending in with the natural environment. <a href="#">[citeturn0search11]</a></p>
              
              <h2 class="text-xl font-bold mb-3">What's Happening in the Rockfall Netting Market?</h2>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Market Growth:</strong> The global rockfall barrier market was valued at approximately USD 0.51 billion in 2023 and is projected to grow at a CAGR of 6.31% from 2024 to 2029. <a href="#">[citeturn0search9]</a></li>
                <li class="mb-2"><strong>Innovations:</strong> Advancements in material science have led to the development of lightweight, high-strength materials for rockfall nets, improving their performance and durability. <a href="#">[citeturn0search1]</a></li>
              </ul>
              
              <h2 class="text-xl font-bold mb-3">In Conclusion</h2>
              <p class="mb-6">Rockfall netting may not be visible to the casual observer, but its presence is profoundly felt. It stands as a testament to human ingenuity, allowing us to coexist safely with the majestic yet unpredictable forces of nature. So, the next time you traverse a mountain pass or relax in a hillside town, take a moment to appreciate the silent guardians—those unassuming nets—that keep our world securely anchored.</p>
              
              <p class="font-bold text-[#DA491A]">Secure Matrix Rockfall Netting is one of the most reliable and affordable netting that you can go for. With years of trust placed in us by our customers, be rest assured that your landscape stands protected while having a neat look.</p>
            `,
            source: "Secure Matrix",
            url: "#",
          },
          {
            image: "/blogs/2.webp",
            date: {
              day: "03",
              month: "Mar",
            },
            title: "The Ultimate Guide to Gabion Wall Nets: A Fusion of Functionality and Aesthetics",
            excerpt:
              "Explore how gabion wall nets combine durability, sustainability, and aesthetic appeal for modern landscaping, civil engineering, and architectural design applications.",
            content: `
              <h1 class="text-2xl font-bold mb-4">The Ultimate Guide to Gabion Wall Nets: A Fusion of Functionality and Aesthetics</h1>
              
              <p class="mb-6">Gabion wall nets have gained immense popularity in modern landscaping, civil engineering, and architectural design. These wire mesh containers, filled with stones or other materials, offer a perfect combination of durability, sustainability, and aesthetic appeal. From preventing soil erosion to creating eye-catching landscape designs, gabion walls have proven their versatility in numerous applications.</p>
              
              <p class="mb-6">In this comprehensive guide, we'll explore the history, benefits, applications, industry trends, and statistical insights surrounding gabion wall nets. Whether you're a homeowner, engineer, or architect, this guide will help you understand why gabion walls are becoming a preferred choice in construction and design.</p>
              
              <h2 class="text-xl font-bold mb-3">What Are Gabion Wall Nets?</h2>
              <p class="mb-6">Gabion wall nets are wire mesh containers filled with stones, rocks, or other suitable materials. These structures are stacked together to form walls, retaining structures, or decorative features. The wire mesh is typically made from galvanized steel or PVC-coated steel, ensuring long-lasting durability and resistance to corrosion.</p>
              
              <h2 class="text-xl font-bold mb-3">A Brief History of Gabion Walls</h2>
              <p class="mb-6">The use of gabions dates back centuries, with their earliest applications found in military fortifications. Ancient civilizations, including the Egyptians and Romans, used gabions to reinforce riverbanks and defensive walls. Over time, this simple yet effective construction method evolved into a sustainable and cost-efficient solution for modern infrastructure and landscaping projects.</p>
              
              <h2 class="text-xl font-bold mb-3">Why Gabion Wall Nets Are Gaining Popularity</h2>
              <p class="mb-6">Gabion walls are increasingly favored in construction and landscaping due to their durability, eco-friendliness, and cost-effectiveness. Below are the key reasons behind their growing popularity.</p>
              
              <h3 class="text-lg font-bold mb-2">1. Durability and Strength</h3>
              <p class="mb-6">Gabion walls are known for their exceptional strength and resilience. Unlike traditional concrete walls, they can withstand extreme weather conditions, including:</p>
              <ul class="list-disc pl-6 mb-4">
                <li class="mb-2">Heavy rainfall and flooding</li>
                <li class="mb-2">Earthquakes and ground movements</li>
                <li class="mb-2">High winds and pressure loads</li>
              </ul>
              <p class="mb-6">According to a report by Allied Market Research, the global gabion structure market was valued at <strong>$3.5 billion in 2022</strong> and is expected to reach <strong>$5.2 billion by 2032</strong>, growing at a CAGR of <strong>4.2%</strong>. The increasing demand for durable construction materials has significantly contributed to this growth.</p>
              
              <h3 class="text-lg font-bold mb-2">2. Eco-Friendliness</h3>
              <p class="mb-4">Sustainability is a major concern in modern construction. Gabion walls contribute to environmental conservation in several ways:</p>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Reduced Carbon Footprint:</strong> They minimize the use of concrete, which is a major contributor to carbon emissions.</li>
                <li class="mb-2"><strong>Improved Water Drainage:</strong> Unlike solid concrete walls, gabion walls allow water to flow through, preventing waterlogging and promoting groundwater recharge.</li>
                <li class="mb-2"><strong>Biodiversity Support:</strong> The gaps in the stones create small habitats for plants and wildlife, enhancing biodiversity.</li>
              </ul>
              <p class="mb-6">A study by the International Journal of Environmental Science and Technology found that gabion walls reduce soil erosion by up to <strong>90%</strong> compared to traditional concrete walls, making them ideal for erosion control projects.</p>
              
              <h3 class="text-lg font-bold mb-2">3. Cost-Effectiveness</h3>
              <p class="mb-4">Gabion walls offer significant cost savings compared to conventional construction methods:</p>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Locally Sourced Materials:</strong> Stones and fillers can be sourced from nearby areas, reducing transportation costs.</li>
                <li class="mb-2"><strong>Minimal Labor Requirements:</strong> The simple construction process requires fewer workers and specialized machinery.</li>
                <li class="mb-2"><strong>Long-Term Savings:</strong> With minimal maintenance needs, gabion walls last for decades, reducing repair and replacement costs.</li>
              </ul>
              <p class="mb-6">Industry estimates suggest that gabion walls cost <strong>30-40% less</strong> than conventional concrete walls, making them an attractive option for budget-conscious projects.</p>
              
              <h2 class="text-xl font-bold mb-3">Applications of Gabion Wall Nets</h2>
              <p class="mb-6">Gabion walls are used across various industries for functional and decorative purposes. Below are some of the most common applications.</p>
              
              <h3 class="text-lg font-bold mb-2">1. Retaining Walls</h3>
              <p class="mb-6">Gabion walls are extensively used for slope stabilization and soil erosion control. Their permeability allows water to drain through, reducing hydrostatic pressure and minimizing landslides.</p>
              
              <h3 class="text-lg font-bold mb-2">2. Landscaping and Garden Design</h3>
              <p class="mb-4">In residential and commercial landscaping, gabion walls are used for:</p>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Raised flower beds</li>
                <li class="mb-2">Outdoor seating areas</li>
                <li class="mb-2">Decorative features</li>
                <li class="mb-2">Waterfall and pond edging</li>
              </ul>
              <p class="mb-6">Their natural appearance blends seamlessly with gardens and outdoor spaces, making them a favorite among landscape architects.</p>
              
              <h3 class="text-lg font-bold mb-2">3. Infrastructure Projects</h3>
              <p class="mb-4">Gabion walls play a crucial role in infrastructure development, including:</p>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Bridge Abutments:</strong> Reinforcing riverbanks and bridge supports.</li>
                <li class="mb-2"><strong>Road Embankments:</strong> Preventing soil erosion along highways.</li>
                <li class="mb-2"><strong>Flood Control Systems:</strong> Diverting water flow in flood-prone areas.</li>
              </ul>
              
              <h3 class="text-lg font-bold mb-2">4. Noise Barriers</h3>
              <p class="mb-6">Gabion walls also serve as effective noise barriers along highways and railways. The dense rock filling absorbs sound waves, reducing noise pollution in urban areas.</p>
              
              <h2 class="text-xl font-bold mb-3">Industry Trends and Innovations</h2>
              <p class="mb-6">As the demand for gabion walls grows, new innovations and trends are emerging in the industry.</p>
              
              <h3 class="text-lg font-bold mb-2">1. Use of Recycled Materials</h3>
              <p class="mb-6">Manufacturers are increasingly using recycled materials for gabion mesh and stone fillers. This not only reduces environmental impact but also lowers production costs.</p>
              
              <h3 class="text-lg font-bold mb-2">2. Aesthetic Enhancements</h3>
              <p class="mb-4">Gabion walls are no longer limited to plain stone fillers. Designers are now incorporating:</p>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Colored stones and glass for a modern look</li>
                <li class="mb-2">LED lighting for nighttime aesthetics</li>
                <li class="mb-2">Custom shapes and patterns for artistic appeal</li>
              </ul>
              
              <h3 class="text-lg font-bold mb-2">3. Modular Gabion Systems</h3>
              <p class="mb-6">Pre-fabricated modular gabion systems are gaining popularity due to their ease of installation and flexibility. These units can be quickly assembled on-site, saving time and labor.</p>
              
              <h2 class="text-xl font-bold mb-3">Statistical Insights: The Growing Demand for Gabion Walls</h2>
              <p class="mb-4">The increasing use of gabion walls is reflected in industry statistics:</p>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Asia-Pacific leads the market:</strong> The region accounts for over 40% of the global gabion market, driven by urbanization in China and India.</li>
                <li class="mb-2"><strong>Erosion control applications:</strong> Expected to grow at a CAGR of 4.8% from 2023 to 2032, reflecting the need for sustainable environmental solutions.</li>
                <li class="mb-2"><strong>Residential landscaping growth:</strong> The use of gabion walls in home gardens has increased by 25% in the last five years.</li>
              </ul>
              
              <h2 class="text-xl font-bold mb-3">Conclusion: Why Gabion Wall Nets Are Here to Stay</h2>
              <p class="mb-6">Gabion wall nets are more than just a construction material; they represent a perfect balance of durability, sustainability, and aesthetics. Their ability to withstand harsh environmental conditions, promote biodiversity, and reduce construction costs makes them a preferred choice for a wide range of applications.</p>
              
              <p class="mb-6">As the world shifts towards eco-friendly and cost-efficient solutions, gabion walls are set to become an integral part of modern landscaping and infrastructure development. Whether you're working on a small garden project or a large-scale civil engineering endeavor, gabion walls offer a solution that is both practical and visually appealing.</p>
              
              <p class="mb-6">So, the next time you see a gabion wall, take a moment to appreciate its ingenuity. It's not just a wall—it's a testament to how innovation and nature can work together to create something truly remarkable.</p>
              
              <p class="font-bold text-[#DA491A]">Secure Matrix Gabion wall is one of the most reliable and affordable netting that you can go for. With years of trust placed in us by our customers, be rest assured that your landscape stands protected while having a neat look.</p>
            `,
            source: "Secure Matrix ",
            url: "#",
          },
          {
            image: "/blogs/3.jpeg",
            date: {
              day: "02",
              month: "Mar",
            },
            title: "The Ultimate Guide to PVC Coated Chain Link Fencing: Durability Meets Aesthetics",
            excerpt:
              "When it comes to securing your property, few fencing options offer the perfect combination of strength, affordability, and visual appeal like PVC-coated chain link fencing.",
            content: `
              <h1 class="text-2xl font-bold mb-4">The Ultimate Guide to PVC Coated Chain Link Fencing: Durability Meets Aesthetics</h1>
              
              <p class="mb-6">When it comes to securing your property, few fencing options offer the perfect combination of strength, affordability, and visual appeal like PVC-coated chain link fencing. Whether you're looking to secure a residential backyard, commercial property, or industrial facility, this fencing type has gained widespread popularity due to its durability, low maintenance, and aesthetic flexibility.</p>
              
              <p class="mb-6">But why exactly is PVC-coated chain link fencing becoming the preferred choice over traditional fencing materials like wood or wrought iron? In this in-depth guide, we will explore everything you need to know about PVC-coated chain link fencing, from its benefits and industry insights to installation tips and future innovations.</p>
              
              <h2 class="text-xl font-bold mb-3">What is PVC Coated Chain Link Fencing?</h2>
              <p class="mb-6">PVC-coated chain link fencing is a traditional chain link fence with an added polyvinyl chloride (PVC) coating. This protective layer enhances durability, prevents rust and corrosion, and adds a sleek aesthetic finish.</p>
              
              <h3 class="text-lg font-bold mb-2">Key Components of PVC Coated Chain Link Fencing</h3>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Galvanized Steel Mesh</strong> – The base material, known for its strength and resilience.</li>
                <li class="mb-2"><strong>PVC Coating</strong> – A weather-resistant plastic layer that enhances durability and aesthetic appeal.</li>
                <li class="mb-2"><strong>Steel or Aluminum Posts</strong> – Provide support and stability to the fence structure.</li>
                <li class="mb-2"><strong>Tension Wire and Brackets</strong> – Ensures the fence remains taut and secure over time.</li>
              </ul>
              
              <p class="mb-6">PVC-coated chain link fencing comes in multiple colors, including green, black, brown, and custom shades, making it easy to match different environments. This versatility has made it a popular choice for homes, schools, businesses, and recreational areas.</p>
              
              <h2 class="text-xl font-bold mb-3">Why PVC Coated Chain Link Fencing is a Game-Changer</h2>
              
              <h3 class="text-lg font-bold mb-2">1. Unmatched Durability</h3>
              <p class="mb-6">PVC-coated chain link fencing is designed to withstand extreme weather conditions. The PVC layer acts as a protective barrier, shielding the steel mesh from moisture, UV rays, and chemical exposure.</p>
              
              <p class="mb-4">Key durability factors:</p>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Resistant to rust and corrosion, unlike plain galvanized chain link fencing.</li>
                <li class="mb-2">Can withstand harsh weather conditions, including rain, snow, and intense sun.</li>
                <li class="mb-2">Average lifespan of 20-30 years, compared to 5-10 years for uncoated chain link fencing.</li>
              </ul>
              
              <h3 class="text-lg font-bold mb-2">2. Low Maintenance</h3>
              <p class="mb-6">One of the standout benefits of PVC-coated chain link fencing is its minimal upkeep requirements.</p>
              
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Unlike wood fences, it doesn't require staining, painting, or sealing.</li>
                <li class="mb-2">Unlike wrought iron fences, it doesn't rust or need frequent refinishing.</li>
                <li class="mb-2">A simple rinse with water removes dirt and debris, making it cost-effective in the long run.</li>
              </ul>
              
              <h3 class="text-lg font-bold mb-2">3. Aesthetic Appeal</h3>
              <p class="mb-6">PVC-coated fencing transforms the traditional metallic look of chain link fences into a modern and visually appealing solution.</p>
              
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Available in multiple colors (green, black, brown, white, and custom shades).</li>
                <li class="mb-2">Blends seamlessly with gardens, commercial properties, and public spaces.</li>
                <li class="mb-2">Smooth finish eliminates sharp edges, making it safe for children and pets.</li>
              </ul>
              
              <h3 class="text-lg font-bold mb-2">4. Eco-Friendly and Sustainable</h3>
              <p class="mb-6">PVC-coated chain link fencing is environmentally friendly, as both PVC and galvanized steel are recyclable.</p>
              
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Over 60% of chain link fencing materials are recycled.</li>
                <li class="mb-2">It's a sustainable alternative to wood fencing, which requires tree harvesting.</li>
              </ul>
              
              <h3 class="text-lg font-bold mb-2">5. Cost-Effectiveness</h3>
              <p class="mb-6">PVC-coated chain link fencing provides an excellent return on investment (ROI).</p>
              
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Costs 20-30% less than vinyl or wood fencing.</li>
                <li class="mb-2">Minimal maintenance expenses.</li>
                <li class="mb-2">Long lifespan, reducing replacement costs.</li>
              </ul>
              
              <h2 class="text-xl font-bold mb-3">Industry Insights and Statistical Data</h2>
              <p class="mb-6">The fencing industry has seen significant growth, particularly in the demand for PVC-coated chain link fencing. Here are some interesting insights:</p>
              
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Market Growth:</strong> The global fencing market, including PVC-coated chain link fencing, is projected to grow at a CAGR of 4.8% from 2023 to 2030.</li>
                <li class="mb-2"><strong>Cost Savings:</strong> PVC-coated chain link fencing is 20-30% more affordable than alternative fencing materials like vinyl, wood, and aluminum.</li>
                <li class="mb-2"><strong>Durability:</strong> Studies show PVC-coated chain link fencing can withstand wind speeds of up to 100 mph, making it ideal for storm-prone areas.</li>
                <li class="mb-2"><strong>Commercial Use:</strong> Over 40% of commercial properties in the U.S. use chain link fencing, with PVC-coated options becoming increasingly popular.</li>
              </ul>
              
              <h2 class="text-xl font-bold mb-3">Applications of PVC Coated Chain Link Fencing</h2>
              <p class="mb-6">PVC-coated chain link fencing is used in various industries and settings due to its versatility.</p>
              
              <h3 class="text-lg font-bold mb-2">1. Residential Use</h3>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Home Security</strong> – Protects backyards, gardens, and driveways.</li>
                <li class="mb-2"><strong>Pet Containment</strong> – Ideal for dog runs and secure pet living spaces.</li>
                <li class="mb-2"><strong>Swimming Pools</strong> –Ensures compliance with safety regulations..</li>
              </ul>

              <h3 class="text-lg font-bold mb-2">2. Commercial and Industrial Use</h3>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">Used in<strong>Warehouses,construction sites, and factories.</strong></li>
                <li class="mb-2">Protects property from<strong>Tresspassing and Theft.</strong></li>
                <li class="mb-2">High-security versions come with<strong> barbed wire or anti-climb coatings.</strong></li>
              </ul>


              <h3 class="text-lg font-bold mb-2">3. Public and Recreational Areas</h3>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Schools and Parks</strong> – Provides a safe boundary for childre.</li>
                <li class="mb-2"><strong>Sports Facilities</strong> – Used for tennis courts, baseball fields, and stadium enclosures.</li>
                <li class="mb-2"><strong>Government and Military Zones</strong> - Ideal for high-security applications.</li>
              </ul>
              
               <h2 class="text-xl font-bold mb-3">How to Choose the Right PVC Coated Chain Link Fence</h2>
              <p class="mb-6">Selecting the right fence involves considering several factors:</p>

              <h3 class="text-lg font-bold mb-2">1. Gauge of the Wire</h3>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Residential: 9-11 gauge</strong>for standard home security.</li>
                <li class="mb-2"><strong>Commercial: 6-8 gauge</strong> for enhanced strength.</li>
              </ul>

              <h3 class="text-lg font-bold mb-2">2. Fence Height</h3>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>4-6 feet</strong>– Suitable for homes and gardens.</li>
                <li class="mb-2"><strong>8-12 feet</strong>–  Ideal for commercial and industrial security.</li>
              </ul>

              <h3 class="text-lg font-bold mb-2">3. Color and Finish</h3>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Green and black</strong>blend naturally into surroundings.</li>
                <li class="mb-2"><strong>Custom colors</strong>available for branding and aesthetic needs.</li>
              </ul>
              <h3 class="text-lg font-bold mb-2">4. Installation Considerations </h3>
              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2">DIY installation is possible, but<strong>professional installation</strong>ensures durability.</li>
                <li class="mb-2">Ensure<strong>proper post spacing</strong>and<strong>tension wire support</strong>for longevity.</li>
              </ul>


              <h2 class="text-xl font-bold mb-3">The Future of PVC Coated Chain Link Fencing</h2>
              <p class="mb-6">As technology evolves, <strong>new innovations</strong> are emerging in the fencing industry:</p>

              <ul class="list-disc pl-6 mb-6">
                <li class="mb-2"><strong>Anti-Climb Technology</strong> - Improved security features to prevent intrusions.</li>
                <li class="mb-2"><strong>Solar-Powered Integrated Lighting</strong> - Smart fences with built-in solar lights for enhanced safety.</li>
                <li class="mb-2"><strong>Improved PVC Coatings – UV-resistant coatings </strong> for longer-lasting protection.</li>
              </ul>


                 <h2 class="text-xl font-bold mb-3">Conclusion: Why Gabion Wall Nets Are Here to Stay</h2>
              <p class="mb-6">PVC-coated chain link fencing isn’t just a practical fencing solution—it’s a smart investment. With its long lifespan, low maintenance, and aesthetic appeal, this fencing type is becoming a top choice for homeowners, businesses, and public spaces alike</p>
              
              <p class="mb-6">Whether you need a budget-friendly security solution or a visually appealing fence, PVC-coated chain link fencing offers the perfect balance of durability and design.</p>
              
              <p class="mb-6">Next time you're considering a fencing upgrade, go for PVC-coated chain link fencing—a solution that stands strong against time, weather, and security challenges.</p>
              
              <p class="font-bold text-[#DA491A]">Secure Matrix PVC-coated chain link fencing is one of the most reliable and affordable netting that you can go for. With years of trust placed in us by our customers, be rest assured that your landscape stands protected while having a neet look.</p>`,
              source: "Secure Matrix",
              url: "#",
          }
        ];
        setNews(data);
      } catch (err) {
        setError("Failed to load news. Please try again later.");
        console.error("Error fetching news:", err);
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
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
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
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">
            Blogs
          </h2>
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