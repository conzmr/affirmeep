const axios = require('axios');

const getAffirmation = async() => {
    try {
        const {data} = await axios.get('https://www.affirmations.dev/');
        return data.affirmation;
    } catch (error) {
        return 'Today is my best day';
    }
};

module.exports = getAffirmation;