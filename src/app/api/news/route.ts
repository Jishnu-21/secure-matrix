import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // Mock news data
    const mockNews = [
      {
        title: "Major Infrastructure Project Launched in Mumbai",
        description: "A new $2 billion infrastructure project has been launched in Mumbai, focusing on improving urban transportation and connectivity.",
        content: "Mumbai is set to witness one of its largest infrastructure developments with the launch of a comprehensive $2 billion project. The initiative includes new metro lines, road upgrades, and sustainable transportation solutions. The project aims to reduce traffic congestion and improve connectivity across the city's major business districts. Local authorities expect the project to be completed within the next 36 months, creating thousands of jobs in the construction sector.",
        urlToImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800",
        publishedAt: new Date().toISOString(),
        source: { name: "Construction Times India" }
      },
      {
        title: "Green Building Technologies Transform Indian Construction",
        description: "Indian construction firms are increasingly adopting sustainable building practices and green technologies.",
        content: "The Indian construction industry is witnessing a significant shift towards sustainable building practices. Leading developers are incorporating solar panels, rainwater harvesting systems, and energy-efficient materials in their projects. This trend is driven by both environmental concerns and cost savings in the long run. Industry experts predict that green building materials will account for 40% of all construction materials used in India by 2026.",
        urlToImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800",
        publishedAt: new Date().toISOString(),
        source: { name: "BuildTech Magazine" }
      },
      {
        title: "New Smart City Project Announced in Gujarat",
        description: "Gujarat government announces a new smart city project with advanced infrastructure and technology integration.",
        content: "The Gujarat government has unveiled plans for a new smart city project that will incorporate cutting-edge technology and sustainable infrastructure. The project, estimated at $1.5 billion, will feature IoT-enabled utilities, smart transportation systems, and green spaces. The construction is expected to begin in the next quarter and will showcase India's capabilities in modern urban development.",
        urlToImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800",
        publishedAt: yesterday.toISOString(),
        source: { name: "Urban Development News" }
      },
      {
        title: "Revolutionary Construction Material Developed by Indian Scientists",
        description: "Indian researchers develop eco-friendly construction material that could reduce building costs by 30%.",
        content: "A team of scientists from IIT Delhi has developed a new construction material that promises to revolutionize the industry. The material, made from recycled industrial waste, is stronger than conventional materials while being 30% more cost-effective. Early trials show excellent durability and weather resistance, making it suitable for various climate conditions across India.",
        urlToImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800",
        publishedAt: yesterday.toISOString(),
        source: { name: "Tech Construction Daily" }
      },
      {
        title: "Major Highway Construction Project Connects East and West India",
        description: "A new highway project aims to improve connectivity between eastern and western regions of India.",
        content: "The National Highways Authority of India (NHAI) has commenced work on a ambitious highway project connecting major cities between east and west India. The project includes multiple bridges, tunnels, and eco-friendly passages for wildlife. This infrastructure development is expected to boost economic growth and reduce transportation costs significantly.",
        urlToImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800",
        publishedAt: yesterday.toISOString(),
        source: { name: "Infrastructure Today" }
      },
      {
        title: "AI and Robotics Transform Indian Construction Sites",
        description: "Construction companies in India are increasingly adopting AI and robotics for improved efficiency and safety.",
        content: "Leading construction firms in India are embracing artificial intelligence and robotics to enhance their operations. These technologies are being used for site surveys, progress monitoring, and safety compliance. The integration of AI has shown to reduce project timelines by 20% while improving worker safety conditions significantly.",
        urlToImage: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800",
        publishedAt: yesterday.toISOString(),
        source: { name: "Digital Construction News" }
      }
    ];

    // Transform the news data to match our format
    const transformedNews = mockNews.map(article => {
      const date = new Date(article.publishedAt);
      return {
        image: article.urlToImage,
        date: {
          day: date.getDate().toString(),
          month: date.toLocaleString('default', { month: 'short' })
        },
        title: article.title,
        excerpt: article.description,
        content: article.content,
        source: article.source.name,
        url: "https://constructionworld.in/latest-news" // Mock URL since we don't have real URLs
      };
    });

    return NextResponse.json(transformedNews);
  } catch (error) {
    console.error('Error in news API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}
