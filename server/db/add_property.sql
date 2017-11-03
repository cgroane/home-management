-- req.body.name, req.body.description, req.body.address, req.body.city, req.body.state, req.body.zip, req.body.image_url, req.body.loan, req.body.monthly_mortgage,req.body.desired_rent

insert into homes (name, description, address, city, state, zip, image_url, loan, monthly_mortgage, desired_rent, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)