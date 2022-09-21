import axios from 'axios';

const setAuthHeader = (header: string | undefined) => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + header;
};

export default setAuthHeader;
