// components/SortComponent.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortEvents } from "../redux/slices/eventSlice";

const SortComponent: React.FC = () => {
    const [sortBy, setSortBy] = useState("");
    const dispatch = useDispatch();

    // Handling sort change event
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSortBy(value);
        dispatch(sortEvents(value));
    };

    return (
        <div className="flex flex-col justify-start items-start">
            <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
                Sort By
            </label>
            <select
                name="type"
                id="type"
                value={sortBy}
                onChange={handleChange}
                className="w-full mt-2 p-2 border border-gray-400 rounded dark:border-gray-700 bg-white dark:bg-gray-900"
                required
            >
                <option value="">Select</option>
                <option value="name">Name</option>
                <option value="startDate">Start Date</option>
                <option value="endDate">End Date</option>
                <option value="type">Type</option>
            </select>
        </div>
    );
};

export default SortComponent;
