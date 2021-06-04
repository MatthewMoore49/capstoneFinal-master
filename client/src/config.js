import dotenv from 'dotenv'

dotenv.config()

export const BACKEND_URL=process.env.NODE_ENV === 'development'?"http://localhost:5000/": "mongodb+srv://general:kableCap21@cluster0.dzt8m.mongodb.net/attractions?retryWrites=true&w=majority"
