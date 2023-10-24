import { useState, useEffect } from "react";

const useRestrauntMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8452145&lng=77.6601695&restaurantId=${resID}&catalog_qa=undefined&submitAction=ENTER`
    );

    let res = await data.json();
    setResInfo(res.data);
  };

  return resInfo;
};

export default useRestrauntMenu;
