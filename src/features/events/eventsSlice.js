import { createSlice } from "@reduxjs/toolkit";
import eventsData from "../../api/events.json";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: eventsData.events,
    filteredEvents: eventsData.events,
  },
  reducers: {
    filterEvents: (state, action) => {
      const { type, date, location } = action.payload;
      state.filteredEvents = state.events.filter((event) => {
        return (
          (!type || event.type === type) &&
          (!date || event.date === date) &&
          (!location ||
            event.location.toLowerCase().includes(location.toLowerCase()))
        );
      });
    },
    addEvent: (state, action) => {
      const newEvent = {
        id: state.events.length + 1, 
        ...action.payload,
      };
      state.events.push(newEvent);
      state.filteredEvents.push(newEvent);
    },
  },
});


export const { filterEvents, addEvent } = eventsSlice.actions;


export default eventsSlice.reducer;
