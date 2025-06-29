const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-grayscale-950 flex items-center justify-center relative">
      <span
        style={{ fontFamily: "SuperMario" }}
        className="absolute text-[#22c55e] text-xl"
      >
        b
      </span>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;

