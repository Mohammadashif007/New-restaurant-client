import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

const FeatureFood = () => {
    return (
        <section>
            <div
                className="hero min-h-screen bg-fixed"
                style={{
                    backgroundImage:
                        `url(${featuredImg})`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                    {/* <SectionTitle heading={"from our menu"} subHeading={"Check it out"}></SectionTitle> */}
                        <div className="flex justify-center items-center gap-6 w-4/5 mx-auto">
                            <img className="w-[400px] w-1/2" src={featuredImg} alt="" />
                            <div className="w-1/2 text-start">
                                <p className="text-[20px]">March 20, 2023</p>
                                <p className="text-[20px]">WHERE CAN I GET SOME?</p>
                                <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                <button className="btn mt-5  border-b-4 bg-opacity-10 border-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureFood;
