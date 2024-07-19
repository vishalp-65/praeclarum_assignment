// redux/slices/eventSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event } from "../../types/eventTypes";

interface EventState {
    events: Event[];
    filteredEvents: Event[];
}

const initialState: EventState = {
    events: [],
    filteredEvents: [],
};

// Checking if provided field is a event fields or not
const isEventField = (field: string): field is keyof Event => {
    return ["name", "type", "startDate", "endDate"].includes(field);
};

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        // Add a new event
        addEvent: (state, action: PayloadAction<Event>) => {
            state.events.push(action.payload);
            state.filteredEvents = state.events;
        },

        // Delete a event
        deleteEvent: (state, action: PayloadAction<string>) => {
            state.events = state.events.filter(
                (event) => event.id !== action.payload
            );
            state.filteredEvents = state.events;
        },
        // Sorting event based on field
        sortEvents(state, action: PayloadAction<string>) {
            const field = action.payload;
            if (isEventField(field)) {
                state.filteredEvents = [...state.filteredEvents].sort(
                    (a, b) => {
                        if (a[field] < b[field]) return -1;
                        if (a[field] > b[field]) return 1;
                        return 0;
                    }
                );
            }
        },

        // Filtering events based on name
        filterEvents(state, action: PayloadAction<string>) {
            const filter = action.payload.toLowerCase();
            state.filteredEvents = state.events.filter((event) =>
                event.name.toLowerCase().includes(filter)
            );
        },
    },
});

export const { addEvent, deleteEvent, sortEvents, filterEvents } =
    eventsSlice.actions;
export default eventsSlice.reducer;
