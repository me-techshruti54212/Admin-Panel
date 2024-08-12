const db = require("../config/database.js");

async function usersList(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;
        // console.log(page, limit);

        const offset = (page - 1) * limit;

        // Query to get the total number of records
        const [totalDataResult] = await db.query(`SELECT count(*) as total_data FROM users`);
        const totalData = totalDataResult[0].total_data;

        const totalPages = Math.ceil(totalData / limit);

        // Query to get the records of users table.
        const usersBasicInfoQuery = `
            SELECT 
                id, 
                name, 
                username, 
                email, 
                mobile_number, 
                CASE 
                    WHEN verified = 1 THEN 'verified' 
                    ELSE 'unverified' 
                END AS verified_status,
                created_at
            FROM 
                users
            LIMIT ? OFFSET ?;
        `;

        const [table_data] = await db.query(usersBasicInfoQuery, [parseInt(limit), parseInt(offset)]);
        
        res.status(200).json({
            users_table_data: table_data,
            pagination: {
                total_pages: parseInt(totalPages),
                current_page: parseInt(page),
                limit: parseInt(limit),
                total_users: parseInt(totalData)
            }   
        });
        // console.log(table_data);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
}

module.exports = { usersList };
