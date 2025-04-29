const BackgroundDecoration = () => {
  return (
    <>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#433bff]/10 to-transparent rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#433bff]/10 to-transparent rounded-full -ml-48 -mb-48"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 left-[15%] w-8 h-8 bg-[#433bff]/5 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-[20%] w-12 h-12 bg-[#433bff]/10 rounded-lg rotate-45 animate-float-delay"></div>
      <div className="absolute bottom-1/4 left-[40%] w-6 h-6 bg-[#433bff]/8 rounded-full animate-float-slow"></div>
    </>
  );
};

export default BackgroundDecoration;