const NeonArrow = () => {
    const delays = ["[animation-delay:0.2s]", "[animation-delay:0.4s]", "[animation-delay:0.6s]", "[animation-delay:0.8s]", "[animation-delay:1s]"];
    const positions = [
      "-top-[30px] -left-[30px]",
      "-top-[15px] -left-[15px]",
      "top-0 left-0",
      "top-[15px] left-[15px]",
      "top-[30px] left-[30px]",
    ];
  
    return (
      <div className="relative w-[50px] h-[50px] rotate-45">
        {positions.map((pos, index) => (
          <span
            key={index}
            className={`absolute w-full h-full box-border border-0 border-b-[3px] border-r-[3px] border-white animate-arrow ${pos} ${delays[index]}`}
          />
        ))}
      </div>
    );
  };
  
  export default NeonArrow;
  