import React from "react";

interface ExpertiseCardProps {
  icon: string;
  title: string;
  text: string;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  icon,
  title,
  text,
}) => {
  return (
    <>
      <div>
        <img src={icon} alt="" />
        <h1>{title}</h1>
        <p>
          {text}
        </p>
      </div>
    </>
  );
};
