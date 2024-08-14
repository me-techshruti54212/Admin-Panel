const db = require("../config/database.js");

async function usersList(req, res) {
    try {
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
                END AS verified_status 
            FROM 
                users;
        `;

        const [results, fields] = await db.query(usersBasicInfoQuery);
        res.status(200).json(results);
    } catch (error) {
        // Handle any errors that occur during the query execution
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
}

module.exports = { usersList };
