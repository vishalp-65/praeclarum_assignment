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
    },
});

export const { addEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
