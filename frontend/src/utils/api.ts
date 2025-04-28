import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const fetchGameStatus = async (gameId) => {
    try {
        const response = await axios.get(`${API_URL}/games/${gameId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching game status:', error);
        throw error;
    }
};

export const submitAction = async (gameId, action) => {
    try {
        const response = await axios.post(`${API_URL}/games/${gameId}/action`, { action });
        return response.data;
    } catch (error) {
        console.error('Error submitting action:', error);
        throw error;
    }
};