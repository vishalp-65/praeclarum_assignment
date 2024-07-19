import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Event {
    id: string;
    name: string;
    type: string;
    startDate: string;
    endDate: string;
    description: string;
    handledBy: string;
    organisation: string;
    subEvents: number;
}

interface EventsState {
    events: Event[];
}

const initialState: EventsState = {
    events: [],
};

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        addEvent: (state, action: PayloadAction<Event>) => {
            state.events.push(action.payload);
        },
        deleteEvent: (state, action: PayloadAction<string>) => {
            state.events = state.events.filter(
                (event) => event.id !== action.payload
            );
        },
    },
});

export const { addEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
