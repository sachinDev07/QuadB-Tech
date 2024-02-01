const Shimmer = () => {
  return (
    <div className="md:p-4 flex flex-col shadow-lg py-4 md:rounded-lg">
      <div className="bg-gray-300 rounded-lg">
        <div className="w-full h-[400px] mb-4 pb-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      <div className="px-2 mt-4">
        <div className="w-3/4 h-4 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-2"></div>

        <div className="w-1/2 h-4 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-2"></div>

        <div className="w-1/2 h-4 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-2"></div>

        <div className="w-1/2 h-4 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-2"></div>

        <div className="w-1/2 h-4 bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-2"></div>
      </div>
    </div>
  );
};

export default Shimmer;
