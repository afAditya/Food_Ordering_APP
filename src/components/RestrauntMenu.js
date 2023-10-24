import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestrauntMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="restraunt-menu">
      <h1>{name}</h1>
      <p>
        {costForTwoMessage} - {cuisines.join(", ")}
      </p>
      <ul>
        {itemCards?.map((itemCard) => (
          <li key={itemCard.card.info.id}>
            {itemCard.card.info.name} - {"Rs. "}
            {itemCard.card.info.price / 100 ||
              itemCard.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
