import { FaChevronDown } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  return (
    <div className="mb-4 flex items-center justify-end">
      <div className="relative w-50">
        <select
          id="sort"
          onChange={handleSortChange}
          value={searchParams.get("sortBy") || ""}
          className="cursor-pointer appearance-none w-full border border-gray-300 bg-white p-2 rounded-xl shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        >
          <option value="">Default</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="popularity">Popularity</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <FaChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default SortOptions;
