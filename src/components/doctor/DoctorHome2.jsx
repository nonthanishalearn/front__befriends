import React from "react";
import Image from 'next/image'

const DoctorHome = (props) => {
  const contents = props.contents;
  const mainContents = props.mainContents;
  const imageDoctor = props.imageDoctor;

  return (
    <div className="mt-10">
        <img src={imageDoctor} alt={imageDoctor} />
    </div>
  );
};

export default DoctorHome;
