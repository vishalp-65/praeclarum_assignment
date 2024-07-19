// components/SortComponent.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortEvents } from "../redux/slices/eventSlice";
import { RootState } from "../redux/store";

const SortComponent: React.FC = () => {
    const dispatch = useDispatch();
    const sortBy = useSelector((state: RootState) => state.events.sortBy);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
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
