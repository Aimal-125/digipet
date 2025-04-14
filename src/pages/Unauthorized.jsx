export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-full rounded-[20px] overflow-auto p-6 sm:p-10 md:p-16 lg:p-20">
      <div className="text-6xl text-red-500 mb-5">
        &#128274; {/* Lock icon */}
      </div>
      <h1 className="text-3xl font-medium text-gray-800 mb-3 text-center">
        Access Denied
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center px-4 max-[301px]:text-[14px]">
        We're sorry, but you do not have permission to access this page. Please
        ensure you are logged in with the correct credentials or contact the
        administrator for assistance.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
      <p className="mt-8 text-sm text-gray-500 text-center">
        If you believe this is an error, please contact support.
      </p>
    </div>
  );
}
