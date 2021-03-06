import jwt from 'jsonwebtoken';

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.PASSWORD_SECRET, { expiresIn: '7d' });
}

export {
    generateToken
}