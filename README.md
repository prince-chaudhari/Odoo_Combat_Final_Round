# BookHive

BookHive is a full-stack application that allows users to browse and search for books in both "All Books" and "My Books" views. The application includes a React frontend, a Django backend, and an admin page for managing books.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Admin Page](#admin-page)
- [Contributing](#contributing)
- [License](#license)

## Features

- View all books available in the library.
- View books specific to the logged-in user.
- Search books by title.
- User profile section with details and logout functionality.
- Admin page to manage books (add, edit, delete).
- Responsive UI using Material-UI components.

## Installation

To run this project locally, follow these steps:

### Backend (Django)

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/bookhive.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd bookhive/backend
    ```

3. Create a virtual environment:

    ```bash
    python -m venv env
    ```

4. Activate the virtual environment:

    - On Windows:

        ```bash
        .\env\Scripts\activate
        ```

    - On macOS/Linux:

        ```bash
        source env/bin/activate
        ```

5. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

6. Apply migrations:

    ```bash
    python manage.py migrate
    ```

7. Create a superuser for the admin page:

    ```bash
    python manage.py createsuperuser
    ```

8. Start the Django development server:

    ```bash
    python manage.py runserver
    ```

The backend should now be running on `http://localhost:8000`.

### Frontend (React)

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

The application should now be running on `http://localhost:3000`.

## Usage

- Use the top navigation bar to switch between "All Books" and "My Books" views.
- Use the search bar to filter books by title.
- View user profile details on the right side of the screen.
- Click on the logout button to simulate logging out (functionality can be expanded).
- Access the admin page at `http://localhost:8000/admin` to manage books.

## Components

### `App`

The main component that manages the state and layout of the application.

### `BookCard`

A component that displays individual book details.

### `UserProfile`

A component that displays user profile information.

## Project Structure

The project structure is as follows:
