# Task Manager

A full-stack task management application built with Django and React.

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Filter tasks by status (All, Active, Completed)
- Modern and responsive UI
- Real-time updates
- Optional task descriptions

## Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- npm (Node Package Manager)
- Docker and Docker Compose (optional, for containerized deployment)

## Project Structure

```
task-manager/
├── backend/             # Django backend
│   ├── tasks/          # Django app
│   ├── manage.py
│   └── requirements.txt
├── frontend/           # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
└── docker-compose.yml  # Docker configuration
```

## Setup Instructions

### Option 1: Docker Setup (Recommended)

1. Make sure Docker and Docker Compose are installed on your system.

2. From the project root directory:

   For Windows PowerShell:
   ```powershell
   # Stop any running containers
   docker-compose down
   
   # Build and start the containers
   docker-compose up --build
   ```

   For Bash (Linux/Mac):
   ```bash
   # Stop any running containers and start new ones
   docker-compose down && docker-compose up --build
   ```

   This will:
   - Build both frontend and backend containers
   - Run database migrations automatically
   - Start the Django backend at http://127.0.0.1:8000
   - Start the React frontend at http://localhost:3000
   - Set up all necessary dependencies

3. To stop the application:
   ```bash
   docker-compose down
   ```

### Option 2: Manual Setup

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   # Windows
   python -m venv venv
   .\venv\Scripts\activate

   # Linux/Mac
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the Django development server:
   ```bash
   python manage.py runserver
   ```
   The backend will be available at http://127.0.0.1:8000

#### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   The frontend will be available at http://localhost:3000

## Usage

1. Open your browser and navigate to http://localhost:3000
2. Add a new task:
   - Enter a task title (required)
   - Add an optional description
   - Click "Add Task" or press Enter
3. Manage tasks:
   - Mark tasks as complete by clicking the circle icon
   - Delete tasks using the trash icon
4. Filter tasks using the buttons below the form:
   - All: Shows all tasks
   - Active: Shows only incomplete tasks
   - Completed: Shows only completed tasks

## API Endpoints

- GET /api/tasks/ - List all tasks
- POST /api/tasks/ - Create a new task
- PATCH /api/tasks/{id}/ - Update a task
- DELETE /api/tasks/{id}/delete/ - Delete a task

## Technologies Used

- Backend:
  - Django
  - Django REST Framework
  - SQLite (default database)

- Frontend:
  - React
  - Axios for API calls
  - Tailwind CSS for styling
  - React Hot Toast for notifications

- DevOps:
  - Docker
  - Docker Compose 
  - Docker Compose 