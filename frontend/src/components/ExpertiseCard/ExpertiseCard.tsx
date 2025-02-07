import React from "react";
import "./styles.css"
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
      <div className="card">
        <img className="icon" src={icon} alt="" />
        <h1 className="title">{title}</h1>
        <p className="text">
          {text}
        </p>
      </div>
    </>
  );
};
