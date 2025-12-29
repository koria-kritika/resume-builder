// import jwt from "jsonwebtoken";

// const protect = (req, res, next) => {
//   console.log("AUTH HEADER:", req.headers.authorization);
//   console.log("JWT SECRET:", process.env.JWT_SECRET);

//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     console.log("❌ Missing or malformed auth header");
//     return res.status(401).json({ message: "Unauthorized - No token" });
//   }

//   const token = authHeader.split(" ")[1];
//   console.log("TOKEN ONLY:", token);

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("DECODED:", decoded);

//     req.userId = decoded.id;
//     next();
//   } catch (error) {
//     console.log("JWT ERROR:", error.message);
//     return res.status(401).json({ message: "Unauthorized - Invalid token" });
//   }
// };

// export default protect;
import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized - No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔥 CRITICAL CHECK
    if (!decoded || !decoded.id) {
      return res.status(401).json({ message: "Unauthorized - Invalid token payload" });
    }

    req.userId = decoded.id; // ALWAYS set from token
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

export default protect;

