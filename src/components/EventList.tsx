// components/EventList.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteEvent } from "../redux/slices/eventSlice";
import FilterComponent from "./FilterComponent";
import SortComponent from "./SortButtons";

const EventList: React.FC = () => {
    // Getting events
    const events = useSelector(
        (state: RootState) => state.events.filteredEvents
    );
    const dispatch = useDispatch();

    // Handle delete event and dispatch event for delete
    const handleDelete = (id: string) => {
        dispatch(deleteEvent(id));
    };

    return (
        <div className="p-2 w-full min-h-screen overflow-hidden">
            {events.length > 0 ? (
                <div
                    className="w-auto md:w-full px-2 md:px-5 py-10 border border-gray-400 dark:border-gray-600 rounded-lg bg-gray-50
                 dark:bg-gray-950 overflow-x-scroll md:overflow-auto shadow-xl"
                >
                    <div className="flex w-full items-center justify-start gap-8 mb-9">
                        <SortComponent />
                        <FilterComponent />
                    </div>
                    <div
                        className="bg-white dark:bg-gray-900 border border-gray-700
                 dark:border-gray-500 text-center rounded-2xl shadow-lg"
                    >
                        {/* Table start */}
                        <table className="w-full px-3">
                            {/* Table head */}
                            <thead>
                                <tr className="border-b border-gray-600">
                                    <th className="p-4">Name</th>
                                    <th className="p-4">Type</th>
                                    <th className="p-4">Start Date</th>
                                    <th className="p-4">End Date</th>
                                    <th className="p-4">Description</th>
                                    <th className="p-4">Handled By</th>
                                    <th className="p-4">Organisation</th>
                                    <th className="p-4">Sub-events</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>

                            {/* Table body */}
                            <tbody className="text-center">
                                {events.map((event, ind) => (
                                    <tr
                                        key={event.id}
                                        className={`${
                                            ind === events.length - 1
                                                ? "rounded-b-2xl rounded border-b border-gray-400 dark:border-gray-700"
                                                : "rounded-none"
                                        }`}
                                    >
                                        <td className="py-2 px-4">
                                            {event.name}
                                        </td>
                                        <td className="py-2 px-4">
                                            {event.type}
                                        </td>
                                        <td className="py-2 px-4">
                                            {event.startDate}
                                        </td>
                                        <td className="py-2 px-4">
                                            {event.endDate}
                                        </td>
                                        <td
                                            className="py-2 px-4 truncate relative"
                                            style={{ maxWidth: "150px" }}
                                        >
                                            <div className="tooltip-container">
                                                {event.description}
                                                <span className="tooltip-text">
                                                    {event.description}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-2 px-4">
                                            {event.handledBy}
                                        </td>
                                        <td className="py-2 px-4">
                                            {event.organisation}
                                        </td>
                                        <td className="py-2 px-4">
                                            {event.subEvents}
                                        </td>
                                        <td className="py-2 px-4">
                                            <button
                                                onClick={() =>
                                                    handleDelete(event.id)
                                                }
                                                className="p-1.5 text-white bg-red-500 rounded"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                // Handling empty events
                <div className="flex flex-col items-center justify-center w-full text-center h-80 text-xl text-gray-600">
                    <p>No item found!</p>
                    <p>Please add item using event form</p>
                </div>
            )}
        </div>
    );
};

export default EventList;
