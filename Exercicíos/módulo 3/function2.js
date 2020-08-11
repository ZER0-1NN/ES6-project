import axios from 'axios';

const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn("Erro na API.")
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');