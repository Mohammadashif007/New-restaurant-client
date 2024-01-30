import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className='flex gap-5'>
            <img className='w-[100px] rounded-r-full rounded-b-full' src={image} alt="" />
            <div>
                <p>{name}----------------</p>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;