# GeoAttend

GeoAttend is a MERN-based (MongoDB, Express.js, React, Node.js) application designed to automate the attendance tracking process for employees across multiple office locations using geolocation technology.

## Working

The app calculates the distance between the office and the employee using the Geolocation API. If the distance is within a certain radius, the employee is marked as "present." If the employee moves out of the defined radius, they are marked as "absent."

## Features

- **Automatic Attendance Detection**: Uses Geolocation API to calculate the distance between the employee's current location and the office location.
- **Dynamic Radius Calculation**: Configurable radius for marking attendance, allowing flexibility based on different office requirements.
- **Real-time Status Updates**: Automatically updates employee status (present or absent) based on location.
- **Admin Dashboard**: View all employees, their current status, and manage their details.
- **Add New Employees**: Allows adding new employees to the system directly from the dashboard.
- **Simple User Interface**: Easy-to-use interface for both employees and administrators.

## Screenshot

![GeoAttend Screenshot](Screenshot%202024-09-04%20023708.png)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kotiyalashwin/GeoAttend.git
   cd GeoAttend

   ```

2. **Install dependencies **
