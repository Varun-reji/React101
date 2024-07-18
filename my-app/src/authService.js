// authService.js
export const login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:5000/login', {
            username,
            password
        });
        const token = response.data.token;
        document.cookie = `token=${token}; Secure; HttpOnly`;
        return token;
    } catch (error) {
        throw new Error('Invalid credentials');
    }
};

export const logout = () => {
    document.cookie = 'token=; Max-Age=0';
};

export const getToken = () => {
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
    return cookieValue;
};
