# NotesAPI
Built a simple RESTful API for managing notes with basic CRUD operations. Implemented API design, data handling and
validation. <br>

# Endpoints
GET /notes: Retrieve all notes.<br>
POST /notes: Create a note with title (max 50 characters, required) and optional content.<br>
GET /notes/:id: Retrieve a specific note.<br>
PATCH /notes/:id: Update a note's title or content.<br>
DELETE /notes/:id: Delete a note.<br>

# Schema
id: Auto-generated UUID.<br>
title: String (max 50 characters, required).<br>
content: String (optional).<br>
createdAt: Auto-generated timestamp.<br>
updatedAt: Auto-updated timestamp.<br>

# Validation
Ensured title is required and not longer than 50 characters.<br>
Provided meaningful error messages and appropriate HTTP status codes.<br>

# Data Storage
Used an in-memory array to store notes.

# Testing 
Wrote unit test for **_POST /notes_** using **Jest**.

