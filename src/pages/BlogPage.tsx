import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts, BlogPost } from '../data/blog';
import { Calendar, Tag, ArrowRight, ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  const location = useLocation();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Scroll to top on page load or post selection change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedPost]);

  useEffect(() => {
    // If location has post hash, auto-select that post
    if (location.hash) {
      const id = location.hash.substring(1);
      const post = blogPosts.find((p) => p.id === id);
      if (post) {
        setSelectedPost(post);
      }
    }
  }, [location]);

  if (selectedPost) {
    return (
      <div className="pt-20 lg:pt-24 bg-[#F9FAFB] min-h-screen pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-2 text-[#C0392B] hover:text-[#C0392B] font-bold text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Articles
          </button>

          {/* Article Header */}
          <article className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm p-6 sm:p-10">
            <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase mb-6">
              <span className="bg-[#F3F4F6] text-[#C0392B] border border-[#C0392B]/20 px-3 py-1 rounded-full">
                {selectedPost.category}
              </span>
              <span className="flex items-center gap-1.5 font-body">
                <Calendar size={13} />
                {selectedPost.date}
              </span>
            </div>

            <h1 className="font-heading font-black text-[#1F2937] text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight leading-tight">
              {selectedPost.title}
            </h1>

            {/* Visual Thumbnail Placeholder inside Article details */}
            <div
              className="w-full h-64 sm:h-80 rounded-2xl flex items-center justify-center font-heading font-black text-2xl select-none mb-8"
              style={{ backgroundColor: selectedPost.bgColor, color: selectedPost.textColor }}
            >
              <div className="text-center p-6">
                <Tag size={32} className="mx-auto mb-2 opacity-80" />
                <span className="tracking-widest uppercase text-lg sm:text-xl">{selectedPost.category}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="font-body text-gray-700 text-[16px] sm:text-[18px] leading-relaxed space-y-6">
              {selectedPost.fullContent.map((paragraph, index) => {
                // If it starts with a number, style it as a header or bullet
                if (/^\d+\./.test(paragraph)) {
                  return (
                    <h3 key={index} className="font-heading font-bold text-xl text-[#1F2937] pt-4 mb-2">
                      {paragraph}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24 bg-[#F9FAFB] min-h-screen pb-16">
      {/* Blog Hero Section */}
      <div className="bg-[#1F2937] text-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#C0392B] text-xs font-bold uppercase tracking-widest bg-[#C0392B]/10 px-3.5 py-1.5 rounded-full border border-[#C0392B]/20 mb-4 inline-block font-heading">
            Medicoline Journal
          </span>
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            Latest Health Tips &amp; Insights
          </h1>
          <p className="font-body text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Professional medical insights, wellness suggestions, and guidelines from home healthcare experts.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Visual Thumbnail */}
              <div
                className="h-48 w-full flex items-center justify-center font-heading font-bold text-xl select-none"
                style={{ backgroundColor: post.bgColor, color: post.textColor }}
              >
                <div className="text-center p-4">
                  <Tag size={24} className="mx-auto mb-1.5 opacity-85" />
                  <span className="tracking-wider uppercase text-sm sm:text-base">{post.category}</span>
                </div>
              </div>

              {/* Article Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400 uppercase mb-3 font-body">
                  <span className="bg-[#F3F4F6] text-[#C0392B] px-2 py-0.5 rounded-full border border-[#C0392B]/10">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>

                <h2 className="font-heading font-bold text-[#1F2937] text-lg sm:text-xl mb-3 tracking-tight leading-snug hover:text-[#C0392B] transition-colors duration-200">
                  {post.title}
                </h2>

                <p className="font-body text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center">
                  <span
                    className="text-[#C0392B] text-sm font-bold inline-flex items-center gap-1 transition-colors duration-200 hover:underline"
                  >
                    Read More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
