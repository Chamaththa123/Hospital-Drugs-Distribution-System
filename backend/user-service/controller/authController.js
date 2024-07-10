const jwt = require("jsonwebtoken");
const db = require("../db/db");
const bcrypt = require("bcryptjs");

const saltRounds = 10;

const checkEmailExists = (email) => {
  return new Promise((resolve, reject) => {
    const emailCheckSql = "SELECT COUNT(*) AS count FROM user WHERE Email = ?";
    db.query(emailCheckSql, [email], (emailCheckErr, emailCheckResult) => {
      if (emailCheckErr) {
        return reject(emailCheckErr);
      }
      const emailExists = emailCheckResult[0].count > 0;
      resolve(emailExists);
    });
  });
};

const registerUser = async (req, res) => {
  const { Password, Email, Tp, User_Name, Role } = req.body;

  const emailExists = await checkEmailExists(Email);

  if (emailExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  bcrypt.hash(Password, saltRounds, (hashErr, hash) => {
    if (hashErr) {
      return res.status(500).json({ Error: "Error hashing password" });
    }

    const userSql =
      "INSERT INTO user (User_Name, Password, Email, Tp,Role, Status) VALUES (?, ?, ?, ?,?, ?)";
    const userValues = [User_Name, hash, Email, Tp, Role, 1];

    db.query(userSql, userValues, async (userErr, userResult) => {
      if (userErr) {
        return res
          .status(500)
          .json({ Error: "Error inserting into user table" });
      }
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

const secretKey = "HTGWEWDWFSDCFSCW";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by userName
    const findUserQuery = "SELECT * FROM user WHERE Email = ?";
    db.query(findUserQuery, [email], async (err, rows) => {
      if (err) {
        console.error("Error finding user:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (rows.length === 0) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const user = rows[0];

      // Check password
      const passwordMatch = await bcrypt.compare(password, user.Password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const user_privilages = await dbService.getUsersPrivilages(user.idUser);

      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, "HTGWEWDWFSDCFSCW");
      res.status(200).json({
        token,
        user: {
          userName: user.User_Name,
          email: user.Email,
          userId: user.idUser,
          branch: user.Branch_idBranch,
          role: user.Role,
          ...user_privilages[0],
        },
      });
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const checkToken = (req, res) => {
  if (req.userId) {
    return res.json({
      Status: "Authentication Success .Token is valid. ",
      LoggedUserId: req.userId,
    });
  } else {
    return res
      .status(401)
      .json({ Error: "Authentication failed. Token is not valid." });
  }
};

module.exports = {
  registerUser,
  loginUser,
  checkToken,
};
