export const TestCards = ({ imageSrc, name, department, about }) => {
  return (
    <div className="relative w-full max-w-sm p-8 overflow-hidden text-center transition-all duration-300 transform shadow-lg crounded-lg group hover:shadow-xl hover:scale-105 colors">
      {/* Shimmer pseudo-element */}
      <span className="absolute inset-0 block transition-transform duration-500 ease-in-out transform -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-full"></span>

      {/* The actual card content */}
      <div className="relative z-10">
        <div className="w-24 h-24 mx-auto mb-6 overflow-hidden border-4 border-blue-400 rounded-full">
          <img src={imageSrc} alt={`Portrait of ${name}`} className="object-cover w-full h-full" />
        </div>
        <div className="text-center">
          <h2 className="mb-1 text-2xl font-bold text-blue-400">{name}</h2>
          <h3 className="mb-4 text-base italic text-gray-400">{department}</h3>
          <p className="leading-relaxed text-gray-300">{about}</p>
        </div>
      </div>
    </div>
  );
};