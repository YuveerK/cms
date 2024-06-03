import React from "react";
import { Oval, TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0 bg-black/50">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="blue"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        secondaryColor="white"
      />
    </div>
  );
};

export default Loading;
