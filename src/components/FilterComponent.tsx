// components/FilterComponent.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterEvents } from "../redux/slices/eventSlice";
import { RootState } from "../redux/store";

const FilterComponent: React.FC = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.events.filter);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterEvents(e.target.value));
    };

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
