import "./CustomCard.style.scss";

const CustomCard = (cardProps) => {
  const {
    title,
    subtitle,
    content,
    color,
    buttonText,
    imageUrl,
    sellingPrice,
  } = cardProps;
  console.log(cardProps);
  return (
    <div className="custom__card" style={{ backgroundColor: color }}>
      {title}
    </div>
  );
};

export default CustomCard;
