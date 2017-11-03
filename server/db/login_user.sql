select username, user_id from users
where username = $1 AND pw = $2;