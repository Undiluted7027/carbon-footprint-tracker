import React from 'react'

const OptionsInput = ({options, value, onChange}) => {
    return (
        <select name="" id="" value = {value} onChange={(e) => onChange(e.target.value)} className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'>
            <option value="" disabled>Select an option</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    );
};

export default OptionsInput;