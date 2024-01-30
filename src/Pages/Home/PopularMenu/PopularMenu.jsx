import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../components/MenuItem/MenuItem";

const PopularMenu = () => {
    const [popularMenu, setPopularMenu] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const popular = data.filter(
                    (item) => item.category === "popular"
                );
                setPopularMenu(popular);
            });
    }, []);
    return (
        <div className="my-5">
            <SectionTitle
                heading={"from our menu"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10 mb-10">
                {popularMenu.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <div className="text-center">
                <button className="btn border-b-4 border-gray-700">
                    View Full Menu
                </button>
            </div>
        </div>
    );
};

export default PopularMenu;
