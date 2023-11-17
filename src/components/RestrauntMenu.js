import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";
import { useState } from "react";

const RestrauntMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestrauntMenu(resID);

  const [showIndex, setShowIndex] = useState(0);

  const handleShowIndex = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // console.log(categories[0]);

  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {costForTwoMessage} - {cuisines.join(", ")}
      </p>

      {/* only starter is being displayed currently */}
      {categories[0]?.card?.card?.categories.map((category, index) => (
        <RestrauntCategory
          key={category.title}
          data={category}
          showItems={index === showIndex ? true : false}
          index={index}
          setShowIndex={handleShowIndex}
        />
      ))}
    </div>
  );
};

export default RestrauntMenu;
