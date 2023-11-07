// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import EventsPage from './components/EventsPage';
import EventDetailPage from './components/EventDetailPage';
import NewEventPage from './components/NewEventPage';
import EditEventPage from './components/EditEventPage';
import RootLayout from './components/Root';
import EventRoot from './components/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventRoot />,
        children: [
          { path: '', element: <EventsPage /> },
          { path: ':id', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':id/edit', element: <EditEventPage /> }
        ]
      },
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
