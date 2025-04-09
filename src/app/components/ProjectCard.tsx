interface ProjectCardProps {
    title: string;
    description: string;
    category: string;
    author: string;
    imageUrl: string;
  }
  
  export default function ProjectCard({
    title,
    description,
    category,
    author,
    imageUrl,
  }: ProjectCardProps) {
    return (
      <div className="bg-white shadow-sm rounded-xl flex flex-col sm:flex-row overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-40 w-full sm:w-48 object-cover"
        />
        <div className="p-4 flex-1">
          <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
          <p className="text-gray-500 text-xs sm:text-sm">{description}</p>
          <div className="mt-2 text-xs text-gray-400">
            {category} • Oleh {author}
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <button className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  