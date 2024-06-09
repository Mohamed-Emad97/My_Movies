## Overview

**MY Movies** is a React-based web application that utilizes the API from [The Movie Database (TMDb)](https://www.themoviedb.org/) to display movie information. The application allows users to browse through a vast collection of movies, view detailed information, and search for their favorite films.

## Features

- **Browse Movies**: Explore a wide range of movies from various genres.
- **Movie Details**: View detailed information about each movie, including synopsis, ratings, and cast.
- **Search Functionality**: Quickly find movies by their title.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

### Framework

- **React.js**: A JavaScript library for building user interfaces.

### Libraries

- **Axios**: For making HTTP requests to the TMDb API.
- **React Router DOM**: For handling routing within the application.
- **FontAwesome**: For adding scalable vector icons and social logos.

### Toolkits

- **Bootstrap**: For responsive design and styling.
- **Redux**: For state management across the application.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/my-movies.git
   cd my-movies
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Add your TMDb API key**:

   Create a `.env` file in the root directory and add your TMDb API key:

   ```sh
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

4. **Run the application**:

   ```sh
   npm start
   ```

   The application will start on `http://localhost:3000`.

## Usage

- **Home Page**: Displays a list of popular movies.
- **Search Bar**: Enter a movie title to search for specific films.
- **Movie Details Page**: Click on any movie to view more information.
