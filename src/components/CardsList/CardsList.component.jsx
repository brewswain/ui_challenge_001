import "./CardsList.style.scss";
import CardData from "../../data/CardData";
import CustomCard from "../CustomCard/CustomCard.component";

const CardsList = () => {
  return (
    <div className="cards__list">
      {CardData.map((card) => {
        const {
          id,
          title,
          subtitle,
          content,
          color,
          buttonText,
          imageUrl,
          sellingPrice,
        } = card;
        return (
          <CustomCard
            key={id}
            title={title}
            subtitle={subtitle}
            content={content}
            color={color}
            buttonText={buttonText}
            imageUrl={imageUrl}
            sellingPrice={sellingPrice}
          />
        );
      })}
    </div>
  );
};
export default CardsList;
