import React from "react";

type Props = {
  location: string;
  year: string;
};

const PhotoCaption = ({ location, year }: Props) => {
  return (
    <div className="flex w-full mt-2 justify-between items-center">
      <p className="light italic">{location} National Park</p>
      <p className="light">{year}</p>
    </div>
  );
};

export default PhotoCaption;
