import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEvent } from "../redux/slices/eventSlice";

interface EventFormState {
    name: string;
    type: string;
    startDate: string;
    endDate: string;
    description: string;
    handledBy: string;
    organisation: string;
    subEvents: number;
}

const EventForm: React.FC = () => {
    const [formData, setFormData] = useState<EventFormState>({
        name: "",
        type: "",
        startDate: "",
        endDate: "",
        description: "",
        handledBy: "",
        organisation: "",
        subEvents: 0,
    });

    // Redux dispatcher
    const dispatch = useDispatch();

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create unique ID for every event
        const newEvent = {
            id: uuidv4(),
            ...formData,
        };
        // Dispatch redux
        dispatch(addEvent(newEvent));
        setFormData({
            name: "",
            type: "",
            startDate: "",
            endDate: "",
            description: "",
            handledBy: "",
            organisation: "",
            subEvents: 0,
        });
    };

    return (
        <div className="w-full flex bg-transparent flex-col justify-center items-center mb-10">
            <form
                onSubmit={handleSubmit}
                className="px-7 py-6 h-full bg-gray-50 dark:bg-gray-950 border border-gray-400 dark:border-gray-600 space-y-4 flex 
                    flex-col w-full lg:w-[70%] items-center justify-between gap-3 rounded-lg shadow-lg"
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Event Name"
                    className="w-full mt-2 p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                    required
                />
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-400 rounded dark:border-gray-700 bg-white dark:bg-gray-900"
                    required
                >
                    <option value="">Select Type</option>
                    <option value="sports">Sports</option>
                    <option value="music">Music</option>
                    <option value="general">General</option>
                    <option value="children">Children</option>
                    <option value="school">School</option>
                </select>
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                    required
                />
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                    required
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Event Description"
                    className="w-full p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                />
                <input
                    type="text"
                    name="handledBy"
                    value={formData.handledBy}
                    onChange={handleChange}
                    placeholder="Event Handled By"
                    className="w-full p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                />
                <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Event Organisation"
                    className="w-full p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                />
                <input
                    type="number"
                    name="subEvents"
                    value={formData.subEvents}
                    onChange={handleChange}
                    placeholder="Total Number of Sub-events"
                    className="w-full p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 text-black shadow-lg dark:text-white rounded-lg bg-gray-200 dark:bg-gray-900 border border-gray-500"
                >
                    Save Event
                </button>
            </form>
        </div>
    );
};

export default EventForm;
