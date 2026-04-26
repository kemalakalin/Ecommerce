import { BookOpen, LayoutGrid, TrendingUp } from "lucide-react";

function ServicesSection() {
  const services = [
    {
      icon: <BookOpen size={36} className="text-[#23A6F0]" />,
      title: "Easy Wins",
      desc: "Get your best looking smile now!",
    },
    {
      icon: <LayoutGrid size={36} className="text-[#23A6F0]" />,
      title: "Concrete",
      desc: "Defalcate is most focused in helping you discover your most beautiful smile",
    },
    {
      icon: <TrendingUp size={36} className="text-[#23A6F0]" />,
      title: "Hack Growth",
      desc: "Overcame any hurdle or any other problem.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1050px] mx-auto px-4 text-center">
        
        {/* Header */}
        <p className="text-[#737373] text-sm font-semibold mb-3">
          Featured Products
        </p>

        <h2 className="text-[#252B42] text-2xl md:text-3xl font-extrabold mb-4">
          THE BEST SERVICES
        </h2>

        <p className="text-[#737373] text-sm max-w-[500px] mx-auto mb-16">
          Problems trying to resolve the conflict between
        </p>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              
              <div className="mb-6">{item.icon}</div>

              <h3 className="text-[#252B42] text-lg font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-[#737373] text-sm max-w-[220px]">
                {item.desc}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;