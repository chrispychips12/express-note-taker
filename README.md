
# Express Note Taker Application

Deployed Application: 

- Live Site: https://express-note-taker-wb08.onrender.com/
- GitHub Repository: https://github.com/chrispychips12/express-note-taker

## Description
A simple note-taking application that allows users to create, save, and delete notes.

User Story

- AS A small business owner
- I WANT to be able to write and save notes
- SO THAT I can organize my thoughts and keep track of tasks I need to complete

Acceptance Criteria

- GIVEN a note-taking application
- WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
- THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
- WHEN I click on the Save button
- THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
- WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
- WHEN I click on the "New Note" button in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears

Features 

- Unique Note ID Generation: Each note is assigned a unique ID using the uuid package, ensuring that notes can be easily identified and managed.
- Delete Functionality: Users can delete notes, which will be removed from the JSON data file and will no longer appear in the list of saved notes.
- Improved Error Handling: The application includes robust error handling to manage issues such as failed file reads or writes, ensuring a smooth user experience.
- Consistent File Path Management: File paths for reading and writing notes have been standardized to avoid errors and ensure data is handled correctly.
- Deployment: The application is deployed on Render, making it accessible from anywhere.


Installation

- Clone the repository:
- git clone https://github.com/chrispychips12/express-note-taker.git
- Navigate to the project directory:
- cd express-note-taker
- Install the necessary dependencies:
- npm install
- Start the application:
- node server.js
- Open your browser and go to http://localhost:3000

## Usage
Run `npm start` to start the server, then navigate to `http://localhost:3000` in your browser.

## License
MIT License

Screenshots:
![Screenshot 2024-08-17 at 1 24 51 PM](https://github.com/user-attachments/assets/9404da2b-e247-499b-893e-f8290d09a5f3)
![Screenshot 2024-08-17 at 1 24 39 PM](https://github.com/user-attachments/assets/71f347e0-4b7a-4f6c-963c-2532de4ddbdf)




