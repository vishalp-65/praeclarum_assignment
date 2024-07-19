# Event Management Application

This is a React application for managing events. It allows users to add, edit, delete, and view events with their details. The application uses Redux for state management and React Router for navigation between different pages.

## Deployed Link

The application is deployed and can be accessed [here](https://praeclarumassignment.netlify.app).

## Features

- Add new events with details like name, type, start date, end date, description, handler, organization, and number of sub-events.
- View all events in a data table with sorting and filtering capabilities.
- Edit and delete events.
- Persistent state management with Redux.
- Responsive design with Tailwind CSS.
- Date pickers for selecting start and end dates.
- Navigation between the add event form and event list.


## Folder Structure
```
├── public
│ ├── index.html
│ └── ...
├── src
│ ├── components
│ │ ├── EventForm.tsx
│ │ ├── EventList.tsx
│ │ ├── Navbar.tsx
│ │ ├── SortComponent.tsx
│ │ └── FilterComponent.tsx
│ ├── redux
│ │ ├── slices
│ │ │ └── eventSlice.ts
│ │ └── store.ts
│ ├── types
│ │ └── eventTypes.ts
│ ├── App.tsx
│ ├── index.css
│ ├── index.tsx
│ └── ...
├── README.md

```

## How to Run the Project Locally

1. **Clone the repository**

   ```sh
   git clone https://github.com/vishalp-65/praeclarum_assignment.git
   cd praeclarum_assignment

2. **Install dependencies**

   `npm install`


3. **Start the development server**

   `npm start`

4. **Open the application in your browser**

  Navigate to`http://localhost:3000` to view the application.
