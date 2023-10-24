import { useEffect, useState } from "react";

const useRestrauntData = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchRestrauntData();
  }, []);

  const fetchRestrauntData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8452145&lng=77.6601695&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setResData(
      res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const setRestrauntData = (arr) => {
    setResData(arr);
  };

  return [resData, setRestrauntData];
};

export default useRestrauntData;
