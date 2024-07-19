import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteEvent } from "../redux/slices/eventSlice";

const EventList: React.FC = () => {
    const events = useSelector((state: RootState) => state.events.events);
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteEvent(id));
    };

    return (
        <div className="p-4 w-full min-h-screen">
            {events.length > 0 ? (
                <table
                    className="w-full px-3 bg-white dark:bg-gray-900 border border-gray-700
                 dark:border-gray-500 text-center rounded-2xl"
                >
                    <thead>
                        <tr className="border-b border-gray-600">
                            <th className="p-4">Type</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Start Date</th>
                            <th className="p-4">End Date</th>
                            <th className="p-4">Description</th>
                            <th className="p-4">Handled By</th>
                            <th className="p-4">Organisation</th>
                            <th className="p-4">Sub-events</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-900 text-center">
                        {events.map((event) => (
                            <tr
                                key={event.id}
                                className="border-b border-gray-400 dark:border-gray-700"
                            >
                                <td className="py-2 px-4">{event.name}</td>
                                <td className="py-2 px-4">{event.type}</td>
                                <td className="py-2 px-4">{event.startDate}</td>
                                <td className="py-2 px-4">{event.endDate}</td>
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
                                <td className="py-2 px-4">{event.handledBy}</td>
                                <td className="py-2 px-4">
                                    {event.organisation}
                                </td>
                                <td className="py-2 px-4">{event.subEvents}</td>
                                <td className="py-2 px-4">
                                    <button
                                        onClick={() => handleDelete(event.id)}
                                        className="p-1.5 text-white bg-red-500 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="flex flex-col items-center justify-center w-full text-center h-40">
                    <p>No item found!</p>
                    <p>Please add item using event form</p>
                </div>
            )}
        </div>
    );
};

export default EventList;
