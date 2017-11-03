select username, user_id from user
where username = $1 AND pw = $2;