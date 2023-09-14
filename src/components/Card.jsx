import axios from "axios";
import React, { useEffect, useState } from "react";
import AppLoader from "./Loader";

const Card = ({ queryInput }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.punkapi.com/v2/beers");
        setData(response.data); // Assuming the data you want is in response.data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(queryInput.toLowerCase())
  );

  return (
    <>
      {!data ? (
        <AppLoader />
      ) : (
        <div>
          <div className="px-10 py-20  grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
            {(queryInput === "" ? data : filteredData)?.map((item, i) => (
              <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer card">
                <div>
                  <img
                    src={item?.image_url}
                    className="h-48 object-contain mx-auto"
                    alt=""
                  />
                </div>
                <div className="py-4 px-4 bg-white">
                  <h3 className="text-md font-semibold text-gray-600">
                    {item?.name}
                  </h3>
                  <p className="mt-4 text-lg font-thin description">
                    {item?.description.substring(0, 80)}...
                  </p>
                  <h3 className="text-md font-semibold text-gray-600">
                    Food Pairings
                  </h3>
                  {item.food_pairing.map((food) => (
                    <p className="mt-4 text-lg font-thin description">{food}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
