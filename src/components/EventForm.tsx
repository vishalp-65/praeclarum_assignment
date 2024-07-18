import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
        const newEvent = {
            id: uuidv4(),
            ...formData,
        };
        // Dispatch redux
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
        <div className="w-full flex flex-col justify-center items-center">
            <form
                onSubmit={handleSubmit}
                className="p-4 space-y-4 flex flex-col w-full lg:w-[70%] items-center justify-between gap-3"
            >
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Event Name"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
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
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Event Description"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="handledBy"
                    value={formData.handledBy}
                    onChange={handleChange}
                    placeholder="Event Handled By"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Event Organisation"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="subEvents"
                    value={formData.subEvents}
                    onChange={handleChange}
                    placeholder="Total Number of Sub-events"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded"
                >
                    Save Event
                </button>
            </form>
        </div>
    );
};

export default EventForm;
