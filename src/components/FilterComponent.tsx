// components/FilterComponent.tsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterEvents } from "../redux/slices/eventSlice";

const FilterComponent: React.FC = () => {
    const [filter, setFilter] = useState<string>("");
    const dispatch = useDispatch();

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
        dispatch(filterEvents(e.target.value));
    };

    useEffect(() => {}, [filter]);

    return (
        <div className="flex flex-col gap-2 justify-start">
            <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
                Filter By
            </label>
            <input
                type="text"
                value={filter}
                onChange={handleFilterChange}
                placeholder="Filter by Name"
                className="p-2 border border-gray-400 rounded bg-white dark:bg-gray-900"
            />
        </div>
    );
};

export default FilterComponent;
