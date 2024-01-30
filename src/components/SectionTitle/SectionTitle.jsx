import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-1/3 mx-auto text-center py-20'>
            <p className='text-[#D99904] text-[20px] py-4'>---{subHeading}---</p>
            <p className='text-[40px] border-y-4 border-gray-700 py-4 uppercase'>{heading}</p>
        </div>
    );
};

export default SectionTitle;