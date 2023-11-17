import { useState } from "react";
import ItemList from "./ItemList";

const RestrauntCategory = ({ data, showItems, index, setShowIndex }) => {
  //   const [showItems, setShowItems] = useState(false);

  const handleShowItems = (e) => {
    setShowIndex(index);
  };

  return (
    <div className="p-3 bg-gray-180 shadow-lg w-6/12 mx-auto my-4 ">
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-lg" onClick={handleShowItems}>
          {data.title}
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};
RestrauntCategory;

export default RestrauntCategory;
