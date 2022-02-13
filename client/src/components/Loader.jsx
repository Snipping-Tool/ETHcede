const Loader = () => (
  <button
    type="button"
    onClick={handleSubmit}
    className="text-white mt-2 border-[1px] p-2 border-[#be185d] hover:bg-[#3d4f7c] rounded-full cursor-pointer flex w-full justify-center items-center"
  >
    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-pink-700 mr-2" />
    Processing...
  </button>
);

export default Loader;
