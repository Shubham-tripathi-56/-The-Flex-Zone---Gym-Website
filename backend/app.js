import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";


const app = express();
const router = express.Router();

app.use(cors())
// Load environment variables from .env file
config({ path: "./config.env" });
console.log(`Server will run on PORT: ${process.env.PORT}`);

// CORS configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-----------------------------------------------------------------
router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  //-----------------------------------------------------------------
  try {
    await sendEmail({
      email: "shubhamtripathi90667@gmail.com",
      subject: "GYM WEBSITE CONTACT",
         message,
         name,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success:false,
      message:"Internal Server Error"
    })
  }

  //----------------------
});

//======================================================================
// Example GET route
// router.get("/", (req, res) => {
//   res.json({ success: true, message: "Hello" });
// });

// Use the router

//=========================================================================

app.use(router);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
