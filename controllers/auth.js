const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db =mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE

});

exports.register = (req, res) => {
    console.log(req.body);

    const { username, password, passwordConfirm} =req.body;

    db.query('SELECT username FROM users WHERE username= ?',[username], async (error, results) => {
        if(error){
            console.log(error);
        }
        if( results.length > 0 ){
            return res.render('register',{
                message: 'username sudah dipakai'
            })
        } else if( password !== passwordConfirm){
            return res.render('register',{
                message: 'password tidak cocok'
            });
        }
        const sql = 'INSERT INTO users SET ?';
        const user = { email: email, password: hashedPassword };
        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query(sql, user, (error, results) => {
            if (error) {
              console.error('Error inserting user:', error);
              return res.status(500).json({ error: 'Internal Server Error' });
            } else {
              console.log('User inserted:', results);
              return res.render('register', {
                message: 'User Registered'
              });
            }
          });
}