import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const createHash = async (password) =>
{
    return await bcryptjs.hash(password, 10)
}

export const isValidPassword = async (password, passwordHash) =>
{
    return await bcryptjs.compare(password, passwordHash);
}

export const generateToken = async (user) =>
{
    return jwt.sign({ user: { ...user, password: undefined } }, process.env.PRIVATE_KEY, { expiresIn: '1m' });
}
