const db = require("../config/database.js");

async function reportedPosts(req, res) {
    try {
        const query = `
            SELECT 
                rp.user_id AS reporting_user_id, 
                ap.user_id AS post_owner_user_id, 
                rp.all_post_id, 
                ap.post_type, 
                rp.remark 
            FROM 
                report_posts AS rp 
            JOIN 
                all_posts AS ap 
            ON 
                rp.all_post_id = ap.id;
        `;

        // Execute the query
        const [results] = await db.query(query);

        // Send the results as a JSON response
        res.status(200).json({
            reported_posts_list: results
        });
    } catch (error) {
        console.error("Error fetching reported posts:", error.message);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching reported posts data.",
            error: error.message
        });
    }
}

module.exports = { reportedPosts };
