import { Heart, ShoppingCart, Eye, Clock, BookOpen } from "lucide-react";

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=600&auto=format&fit=crop",
  },
];

function FeaturedPosts() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1050px] mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#23A6F0] text-sm font-bold mb-3">
            Practice Advice
          </p>

          <h2 className="text-[#252B42] text-3xl md:text-4xl font-extrabold">
            Featured Posts
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {posts.map((post, index) => (
            <div key={index} className="flex gap-6">
              
              {/* Image */}
              <div className="relative w-[220px] h-[320px] overflow-hidden">
                <img
                  src={post.image}
                  alt="post"
                  className="w-full h-full object-cover"
                />

                {/* Sale badge */}
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
                  Sale
                </span>

                {/* Icons */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3">
                  <div className="bg-white p-2 rounded-full shadow">
                    <Heart size={16} />
                  </div>
                  <div className="bg-white p-2 rounded-full shadow">
                    <ShoppingCart size={16} />
                  </div>
                  <div className="bg-white p-2 rounded-full shadow">
                    <Eye size={16} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#23A6F0] text-sm font-bold">
                      English Department
                    </p>

                    <span className="bg-[#252B42] text-white text-xs px-2 py-1 rounded">
                      ⭐ 4.9
                    </span>
                  </div>

                  <h3 className="text-[#252B42] text-lg font-bold mb-2">
                    Graphic Design
                  </h3>

                  <p className="text-[#737373] text-sm mb-3 max-w-[260px]">
                    We focus on ergonomics and meeting you where you work.
                    It's only a keystroke away.
                  </p>

                  <p className="text-[#737373] text-xs mb-2">
                    ⬇ 15 Sales
                  </p>

                  <div className="flex gap-2 mb-3 text-sm font-bold">
                    <span className="text-[#BDBDBD]">$16.48</span>
                    <span className="text-[#23856D]">$6.48</span>
                  </div>

                  {/* Colors */}
                  <div className="flex gap-2 mb-4">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                    <span className="w-3 h-3 rounded-full bg-black"></span>
                  </div>

                  {/* Meta */}
                  <div className="flex gap-4 text-xs text-[#737373] mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={12} /> 22h...
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen size={12} /> 64 Lessons
                    </div>
                    <div>📈 Progress</div>
                  </div>
                </div>

                {/* Button */}
                <button className="border border-[#23A6F0] text-[#23A6F0] px-5 py-2 rounded-full text-sm font-bold hover:bg-[#23A6F0] hover:text-white transition w-fit">
                  Learn More →
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;