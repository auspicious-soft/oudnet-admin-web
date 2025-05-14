const ReusableLoader = () => {
  const size = 50;
  const color = "#EEC584"; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div
        className="rounded-full border-4 border-t-transparent animate-spin"
        style={{
          width: size,
          height: size,
          borderColor: `${color} ${color} ${color} transparent`,
        }}
      />
    </div>
  );
};

export default ReusableLoader;
