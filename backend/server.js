const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: "healthy", message: "Spotify Backend API running smoothly" });
});

// Mock Track List Endpoint
app.get('/api/tracks', (req, res) => {
    res.json([
        { id: 1, title: "DevOps Anthem", artist: "The Containers", url: "/tracks/song1.mp3" },
        { id: 2, title: "Git Push It", artist: "Merge Conflict", url: "/tracks/song2.mp3" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is operating in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
