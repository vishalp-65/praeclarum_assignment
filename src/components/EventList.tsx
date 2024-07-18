import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";

const EventList: React.FC = () => {
    const events = useSelector((state: RootState) => state.events.events);
    const dispatch = useDispatch();

    const handleDelete = (id: string) => {
        // dispatch(deleteEvent(id));
    };

    return (
        <div className="p-4 w-full">
            <table className="w-full bg-white border border-gray-300 text-center">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Type</th>
                        <th className="py-2 px-4 border-b">Start Date</th>
                        <th className="py-2 px-4 border-b">End Date</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Handled By</th>
                        <th className="py-2 px-4 border-b">Organisation</th>
                        <th className="py-2 px-4 border-b">Sub-events</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td className="py-2 px-4 border-b">{event.name}</td>
                            <td className="py-2 px-4 border-b">{event.type}</td>
                            <td className="py-2 px-4 border-b">
                                {event.startDate}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {event.endDate}
                            </td>
                            <td
                                className="py-2 px-4 border-b truncate relative"
                                style={{ maxWidth: "150px" }}
                            >
                                <div className="tooltip-container">
                                    {event.description}
                                    <span className="tooltip-text">
                                        {event.description}
                                    </span>
                                </div>
                            </td>
                            <td className="py-2 px-4 border-b">
                                {event.handledBy}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {event.organisation}
                            </td>
                            <td className="py-2 px-4 border-b">
                                {event.subEvents}
                            </td>
                            <td className="py-2 px-4 border-b">
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
        </div>
    );
};

export default EventList;
