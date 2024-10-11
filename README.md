# Theme Switcher App

The Theme Switcher App is a React application that allows users to toggle between light and dark themes dynamically. It utilizes the Context API for state management, making it easy to manage the theme across different components.

## Features
- **Light and Dark Modes:** Switch between light and dark themes with a single button click.
- **Context API:** Uses React's Context API to manage and share the current theme state across the application.
- **Responsive Design:** The app provides a user-friendly interface with smooth transitions between themes.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **CSS**: Custom styles for light and dark modes, ensuring a smooth visual experience.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/samyam81/React-theme-switcher-application.git
   ```
2. Navigate to the project directory:
   ```bash
   cd React-theme-switcher-application
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

## Usage
1. Click the **Switch to Dark Mode** button to change the theme to dark mode.
2. Click the **Switch to Light Mode** button to revert to light mode.
3. The active theme will be displayed at the top of the page.

## Project Structure
```
/src
  ├── App.js             # Main component of the app
  ├── ThemeContext.js    # Context for managing theme state
  ├── ThemeSwitcher.js    # Component for switching themes
  ├── Content.js         # Displays current theme status
  ├── Content.css        # Styles for Content component
  └── index.js           # Entry point of the React app
```

## Styling
The app features:
- **Light Mode:** A clean white background with dark text for easy readability.
- **Dark Mode:** A dark background with light text, reducing eye strain in low-light environments.

### CSS Classes
- `.content`: Common styles for the content area, including transitions for smooth theme switching.
- `.light` and `.dark`: Specific styles for each theme.

## Future Improvements
- Store the user's theme preference in local storage to persist the theme across sessions.
- Add animations for smoother transitions between themes.
- Implement additional themes for more customization options.

---

Enjoy switching between light and dark modes with the **Theme Switcher App**!
