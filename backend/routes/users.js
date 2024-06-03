const router = require("express").Router();
const pool = require("../database/database.config");

// Create User
router.post("/residents/create-user", async (req, res) => {
  const { first_name, last_name, id_number, email, password, role } = req.body;

  const check_user = `
    SELECT * FROM users WHERE email = ? 
  `;

  const create_user = `
    INSERT INTO users (first_name, last_name, id_number, email, password, role)
    VALUES (?,?,?,?,?,?)
  `;

  try {
    const [existingUser] = await pool.promise().query(check_user, [email]);

    if (existingUser.length > 0) {
      return res.status(400).json("A user with this email already exists");
    }

    const [result] = await pool
      .promise()
      .query(create_user, [
        first_name,
        last_name,
        id_number,
        email,
        password,
        role,
      ]);

    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
});

// Get User
router.get("/residents/get-user", async (req, res) => {
  const { user_id } = req.body;
  const q = `
    SELECT * FROM users WHERE user_id = ?
  `;

  try {
    const [rows] = await pool.promise().query(q, [user_id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];
    const { password, ...data } = user;

    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update User
router.put("/residents/update-user", async (req, res) => {
  const { user_id, first_name, last_name, id_number, email, password, role } =
    req.body;

  const update_user = `
    UPDATE users SET first_name = ?, last_name = ?, id_number = ?, email = ?, password = ?, role = ? WHERE user_id = ?
  `;

  try {
    const [result] = await pool
      .promise()
      .query(update_user, [
        first_name,
        last_name,
        id_number,
        email,
        password,
        role,
        user_id,
      ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete User
router.delete("/residents/delete-user", async (req, res) => {
  const { user_id } = req.body;

  const delete_user = `
    DELETE FROM users WHERE user_id = ?
  `;

  try {
    const [result] = await pool.promise().query(delete_user, [user_id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
