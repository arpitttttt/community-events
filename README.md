# 🎉Local Community Events

**Community Events** is a React-based platform that allows users to **discover, explore, and join local community events**. Users can filter events by type, date, and location, create new events, and RSVP with automatic email confirmations. The app is designed with a modern, responsive interface and a focus on user-friendly interactions.


## 🌐 Live Demo

[Community-Events](https://arpitttttt.github.io/community-events/)<!-- Replace with actual deployed URL -->

---


## ✨ Features

- 🔍 **Browse Events** – View a curated list of local events in grid or list view.
- 🎯 **Fancy Filters** – Filter events by type, date, or location with smooth UI interactions.
- 📝 **Event Details** – Detailed view including title, date, location, host, and description.
- ✅ **RSVP / Join Event** – Users can RSVP by entering their name and email. Confirmation email is automatically sent via EmailJS.
- ➕ **Create Event** – Add new events with form validation (title, type, date, location, host, description).
- 📱 **Responsive Design** – Mobile-first layout that works across all devices.


---

## 🛠️ Tech Stack

### Frontend

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router (HashRouter)](https://reactrouter.com/)
- [EmailJS](https://www.emailjs.com/) – For sending RSVP confirmation emails

### Deployment

- **Frontend:** GitHub Pages

---

## 🧠 System Architecture

- **State Management:** Redux Toolkit stores all events and RSVP data.
- **Routing:** HashRouter is used for seamless navigation and to avoid 404 errors on GitHub Pages.
- **Email Service:** EmailJS handles sending confirmation emails when users RSVP.
- **Reusable Components:** Cards, modals, filters, and forms are modular and reusable.


---
📷 Screenshots
<img width="1920" height="905" alt="Screenshot 2025-09-04 172242" src="https://github.com/user-attachments/assets/8e7951a9-3ba3-4c95-81ac-efb77f75f422" /><img width="1899" height="907" alt="Screenshot 2025-09-04 172315" src="https://github.com/user-attachments/assets/405629d8-538a-4dcb-94f6-9efd9f84adeb" />
<img width="1920" height="903" alt="Screenshot 2025-09-04 172334" src="https://github.com/user-attachments/assets/b76e2146-fcde-4bc2-9d9b-491234ac3f32" />
<img width="1920" height="901" alt="Screenshot 2025-09-04 172345" src="https://github.com/user-attachments/assets/7795c3c5-3621-4065-bf86-96f41ff294b2" />
<img width="1896" height="905" alt="Screenshot 2025-09-04 172401" src="https://github.com/user-attachments/assets/dde07a38-ccfa-4b3a-9f33-b43d9d215b2d" />
<img width="1920" height="907" alt="Screenshot 2025-09-04 172450" src="https://github.com/user-attachments/assets/e8874097-f444-4025-a4e0-3a9b87e80429" /><img width="1920" height="897" alt="Screenshot 2025-09-04 172517" src="https://github.com/user-attachments/assets/db6c9da4-f3cb-4905-b9c7-b26a8319f80c" />




## 📦 Getting Started Locally

### Prerequisites

- Node.js and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/arpitttttt/community-events.git
cd community-events

# Install dependencies
npm install

# Start development server
npm run dev

