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
    // Form data state
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

    // State for handle error for each input
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const dispatch = useDispatch();

    // Validation function
    const validate = () => {
        const errors: { [key: string]: string } = {};
        const today = new Date().toISOString().split("T")[0];

        if (!formData.name) errors.name = "Event name is required.";
        if (!formData.type) errors.type = "Event type is required.";
        if (!formData.startDate) errors.startDate = "Start date is required.";
        if (!formData.endDate) errors.endDate = "End date is required.";
        if (
            formData.startDate &&
            formData.endDate &&
            formData.startDate >= formData.endDate
        )
            errors.endDate = "End date must be after start date.";
        if (formData.startDate && formData.startDate > today)
            errors.startDate = "Start date cannot be in the future.";
        if (isNaN(formData.subEvents) || formData.subEvents < 0)
            errors.subEvents =
                "Sub-events must be a valid non-negative number.";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle change input
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

    // Handle after submit
    const handleSubmit = (e: React.FormEvent) => {
        // Prevent reloading page
        e.preventDefault();
        if (!validate()) return;

        // Create new unique ID for each event
        const newEvent = {
            id: uuidv4(),
            ...formData,
        };

        // dispatch event for add event
        dispatch(addEvent(newEvent));

        // Clearing state after save the event
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
        <div className="w-full flex bg-transparent flex-col justify-center items-center mb-10 px-2 lg:px-0">
            <form
                onSubmit={handleSubmit}
                className="px-7 py-6 h-full bg-gray-50 dark:bg-gray-950 border border-gray-400 dark:border-gray-600 space-y-4 flex 
                    flex-col w-full lg:w-[70%] items-center justify-between gap-3 rounded-lg shadow-lg"
            >
                <div className="w-full">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Event Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Event Name"
                        className="w-full mt-2 p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                        required
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                </div>

                <div className="w-full">
                    <label
                        htmlFor="type"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Event Type
                    </label>
                    <select
                        name="type"
                        id="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-400 rounded dark:border-gray-700 bg-white dark:bg-gray-900"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="sports">Sports</option>
                        <option value="music">Music</option>
                        <option value="general">General</option>
                        <option value="children">Children</option>
                        <option value="school">School</option>
                    </select>
                    {errors.type && (
                        <p className="text-red-500 text-sm">{errors.type}</p>
                    )}
                </div>

                <div className="w-full">
                    <label
                        htmlFor="startDate"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Event Start Date
                    </label>
                    <input
                        type="date"
                        name="startDate"
                        id="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                        required
                    />
                    {errors.startDate && (
                        <p className="text-red-500 text-sm">
                            {errors.startDate}
                        </p>
                    )}
                </div>

                <div className="w-full">
                    <label
                        htmlFor="endDate"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Event End Date
                    </label>
                    <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        className="w-full mt-2 p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                        required
                    />
                    {errors.endDate && (
                        <p className="text-red-500 text-sm">{errors.endDate}</p>
                    )}
                </div>

                <div className="w-full">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Event Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Event Description"
                        className="w-full mt-2 p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                    />
                </div>

                <div className="w-full">
                    <label
                        htmlFor="handledBy"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Event Handled By
                    </label>
                    <input
                        type="text"
                        name="handledBy"
                        id="handledBy"
                        value={formData.handledBy}
                        onChange={handleChange}
                        placeholder="Event Handled By"
                        className="w-full mt-2 p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                    />
                </div>

                <div className="w-full">
                    <label
                        htmlFor="organisation"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Event Organisation
                    </label>
                    <input
                        type="text"
                        name="organisation"
                        id="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="Event Organisation"
                        className="w-full mt-2 p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                    />
                </div>

                <div className="w-full">
                    <label
                        htmlFor="subEvents"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Total Number of Sub-events
                    </label>
                    <input
                        type="number"
                        name="subEvents"
                        id="subEvents"
                        value={
                            formData.subEvents == 0 ? "" : formData.subEvents
                        }
                        onChange={handleChange}
                        placeholder="Total Number of Sub-events"
                        className="w-full mt-2 p-2 border border-gray-400 dark:border-gray-700 rounded bg-white dark:bg-gray-900"
                        required
                    />
                    {errors.subEvents && (
                        <p className="text-red-500 text-sm">
                            {errors.subEvents}
                        </p>
                    )}
                </div>

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
