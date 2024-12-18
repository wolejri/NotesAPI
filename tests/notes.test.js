const request = require('supertest');
const express = require('express');
const notesRoutes = require('../routes/noteRoutes');

const app = express();
app.use(express.json());
app.use('/notes', notesRoutes);

describe('POST /notes', () => {
    it('should create a new note', async () => {
        const response = await request(app).post('/notes').send({title: 'Test Note', content: 'This is a test note.'});
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test Note');
        expect(response.body.content).toBe('This is a test note.')
    });


    it('should return 400 if title is missing', async () => {
        const response = await request(app).post('/notes').send({content: 'This is a test note.'});
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Title is required');
    });

    it('should return 400 if title.length is > 50', async () => {
        const response = await request(app).post('/notes').send({title: "a".repeat(51)});
        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Title cannot exceed 50 characters.');
    })
});