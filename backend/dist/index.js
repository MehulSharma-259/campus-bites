import "dotenv/config";
import express from 'express';
import authRoutes from "./routes/auth.routes.js";
import contentRoutes from "./routes/content.routes.js";
import cors from "cors";
const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/content', contentRoutes);
app.listen(port, () => console.log(`Server started at ${port}`));
//# sourceMappingURL=index.js.map