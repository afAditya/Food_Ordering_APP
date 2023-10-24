import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestrauntData from "../utils/useRestrauntData";

const Body = () => {
  const [restrauntList, setRestrauntList] = useRestrauntData();
  const [searchText, setSearchText] = useState("");
  const [newResList, setNewResList] = useRestrauntData();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Please Check you Internet Connection!!! Look's like you are offline
      </h1>
    );

  return restrauntList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              if (e.target.value === "") {
                setNewResList(restrauntList);
              }
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-100 m-4 py-2 rounded-lg"
            onClick={() => {
              const updatedResList = restrauntList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setNewResList(updatedResList);
            }}
          >
            search
          </button>
        </div>
        <div className="search m-4 p-4 flex item-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg m-4"
            onClick={() => {
              let listOFRest = restrauntList.filter(
                (res) => res.info.avgRating > 4.4
              );
              setNewResList(listOFRest);
            }}
          >
            Top Rated Restraunt
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {newResList.map((restraunt) => (
          <Link key={restraunt.info.id} to={"/restraunt/" + restraunt.info.id}>
            <RestrauntCard resData={restraunt.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
