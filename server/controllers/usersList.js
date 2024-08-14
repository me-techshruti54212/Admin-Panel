const db = require("../config/database.js");

async function usersList(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;

        const offset = (page - 1) * limit;

        // Query to get the total number of records
        const [totalDataResult] = await db.query(`SELECT count(*) as total_data FROM users`);
        const totalData = totalDataResult[0].total_data;

        const totalPages = Math.ceil(totalData / limit);

        // Query to get the records of users table for pagination.
        // const usersBasicInfoQuery = `
        //     SELECT 
        //         id, 
        //         name, 
        //         username, 
        //         email, 
        //         mobile_number, 
        //         CASE 
        //             WHEN verified = 1 THEN 'verified' 
        //             ELSE 'unverified' 
        //         END AS verified_status,
        //         DATE(created_at) AS created_at
        //     FROM 
        //         users
        //     LIMIT ? OFFSET ?;
        // `;
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
                DATE(created_at) AS created_at
            FROM 
                users
        `;
        const [table_data] = await db.query(usersBasicInfoQuery, [parseInt(limit), parseInt(offset)]);
        
        // JavaScript automatically converting the date string into a full Date
        // And to handle this 
        const formattedData = table_data.map(user => ({
            ...user,
            created_at: user.created_at.toISOString().split('T')[0] // Convert to 'YYYY-MM-DD'
        }));
        
        res.status(200).json({
            users_table_data: formattedData,
            pagination: {
                total_pages: parseInt(totalPages),
                current_page: parseInt(page),
                limit: parseInt(limit),
                total_users: parseInt(totalData)
            }   
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching user connections data.',
            error: error.message
        });
    }
}

module.exports = { usersList };
