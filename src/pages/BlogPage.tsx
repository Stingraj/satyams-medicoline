import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    // Scroll to top or specific post anchor if hash exists
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  // Extract unique categories for filters
  const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  // Filter posts
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="pt-[72px] lg:pt-[104px] bg-[#fbf9f8] min-h-screen">
      {/* Blog Hero Section */}
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#C0392B] text-xs font-bold uppercase tracking-widest bg-[#C0392B]/10 px-3.5 py-1.5 rounded-full border border-[#C0392B]/20 mb-4 inline-block">
            Medicoline Journal
          </span>
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Latest Health Tips &amp; Insights
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Professional medical insights, wellness suggestions, and guidelines from home healthcare experts.
          </p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#C0392B] text-white shadow-[0_10px_24px_rgba(192,57,43,0.16)]'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#C0392B]/50 hover:text-[#C0392B]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 text-lg font-medium">No articles found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                id={post.id}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col scroll-mt-28"
              >
                {/* Visual Thumbnail */}
                <div
                  className="h-64 w-full flex items-center justify-center text-white font-extrabold text-2xl select-none"
                  style={{ background: post.imageBgColor }}
                >
                  <div className="bg-black/15 backdrop-blur-[1px] w-full h-full flex items-center justify-center p-6 text-center">
                    <span className="text-shadow-md tracking-wide">{post.category}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-8 sm:p-10 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase mb-4">
                    <span className="flex items-center gap-1.5 text-[#C0392B]">
                      <Tag size={13} />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="font-extrabold text-gray-900 text-2xl mb-4 tracking-tight leading-snug hover:text-[#C0392B] transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="text-[#C0392B] hover:text-[#A93226] text-sm font-bold inline-flex items-center gap-1.5 group transition-colors duration-200"
                    >
                      Schedule Support 
                      <ArrowRight size={15} className="transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-gray-400 text-xs font-semibold">Author: Medicoline Health Team</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
