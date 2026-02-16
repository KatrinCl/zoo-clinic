import jwt from "jsonwebtoken";

const authAdmin = (req, res, next) => {
  try {
    const token = req.cookies.adminToken;
    if (!token) {
      return res.status(401).json({ success: false, message: "Нет доступа (нет токена)" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, message: "Доступ запрещён" });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Неверный или просроченный токен" });
  }
};

export default authAdmin;
