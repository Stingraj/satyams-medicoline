import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BlogPreview() {
  const { ref, visible } = useScrollReveal();
  
  // Show 3 most recent blog posts (index 0, 1, 2)
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading with Red Underline */}
        <div className="text-center mb-16">
          <h2 className="font-extrabold text-[#1F2937] text-3xl sm:text-4xl tracking-tight mb-4">
            Latest Health Tips &amp; News
          </h2>
          <div className="flex justify-center mb-5">
            <div className="w-16 h-1 bg-[#C0392B] rounded-full"></div>
          </div>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Stay informed with our expert health articles and updates.
          </p>
        </div>

        {/* 3 Column Grid on Desktop, 1 Column on Mobile */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${
            visible ? 'section-visible' : 'section-hidden'
          }`}
        >
          {recentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Blog Thumbnail Color Panel */}
              <div
                className="h-48 w-full flex items-center justify-center text-white font-extrabold text-lg select-none"
                style={{ background: post.bgColor }}
              >
                <div className="bg-black/10 backdrop-blur-[2px] w-full h-full flex items-center justify-center p-6 text-center">
                  <span className="text-shadow-sm">{post.category}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-1">
                {/* Category Tag */}
                <div className="mb-3">
                  <span className="text-[#C0392B] text-xs font-bold uppercase tracking-widest bg-[#C0392B]/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Blog Title in Bold Dark */}
                <h3 className="font-extrabold text-gray-900 text-lg mb-3 tracking-tight leading-snug hover:text-[#C0392B] transition-colors duration-200">
                  <Link to={`/blog#${post.id}`}>{post.title}</Link>
                </h3>

                {/* Short excerpt of 2 lines max */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Bottom row: Read More & Date */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <Link
                    to={`/blog#${post.id}`}
                    className="text-[#C0392B] hover:text-[#C0392B] text-sm font-bold inline-flex items-center gap-1 group transition-colors duration-200"
                  >
                    Read More 
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Centered "View All Articles" button with red outline style */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-block border-2 border-[#C0392B] text-[#C0392B] hover:bg-[#8F2D22] hover:text-white transition-all duration-200 text-sm font-bold px-8 py-3.5 rounded-xl"
          >
            View All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}
