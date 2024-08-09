const db = require("../config/database.js");

async function dashboard(req, res) {
  try {
    // Query to get total users and total users created today
    const usersQuery = `
        SELECT 
            COUNT(*) AS total_users,
            COUNT(CASE WHEN DATE(created_at) = CURDATE() THEN 1 END) AS total_users_today
        FROM users;
    `;
    const [usersRows] = await db.query(usersQuery);

    // Query to get total likes, comments, shares, and posts
    const postsQuery = `
        SELECT 
            SUM(likes_count) AS total_likes,
            SUM(comment_count) AS total_comments,
            SUM(share_count) AS total_shares,
            COUNT(id) AS total_posts,
            COUNT(CASE WHEN DATE(created_at) = CURDATE() THEN 1 END) AS total_posts_today
        FROM all_posts;
    `;
    const [postsRows] = await db.query(postsQuery);
    let total_engagement = (postsRows[0].total_posts || 0) / ((postsRows[0].total_likes || 0) + (postsRows[0].total_comments || 0) + (postsRows[0].total_shares || 0) || 1);

    // Query to count the number of complete and incomplete users
    const profileStatusQuery = `
        SELECT
            profile_status,
            COUNT(*) AS user_count
        FROM (
            SELECT
                u.id,
                CASE 
                    WHEN MAX(p.profile_pic IS NOT NULL) 
                        AND MAX(p.profile_video IS NOT NULL) 
                        AND MAX(pi.interest_id IS NOT NULL) 
                        AND MAX(ps.skill_id IS NOT NULL) 
                THEN 'Complete'
                ELSE 'Incomplete'
                END AS profile_status
            FROM
                users u
            LEFT JOIN
                profiles p ON u.id = p.user_id
            LEFT JOIN
                profile_interests pi ON u.id = pi.user_id
            LEFT JOIN
                profile_skills ps ON u.id = ps.user_id
            GROUP BY
                u.id
        ) AS profile_statuses
        GROUP BY
            profile_status;
    `;
    const [profileStatusRows] = await db.query(profileStatusQuery);

    let completeUsers = 0;
    let incompleteUsers = 0;

    profileStatusRows.forEach(row => {
        if (row.profile_status === 'Complete') {
            completeUsers = row.user_count;
        } else if (row.profile_status === 'Incomplete') {
            incompleteUsers = row.user_count;
        }
    });

    // Query to get skill names and their respective user counts fro pie chart
    const skillsQuery = `
        SELECT 
            s.name, 
            COUNT(ps.user_id) AS user_count, 
            ROUND((CAST(COUNT(ps.user_id) AS FLOAT) * 100.0 / (SELECT COUNT(DISTINCT user_id) FROM profile_skills)), 2) AS percentage 
        FROM 
            skills s 
        LEFT JOIN 
            profile_skills ps ON s.id = ps.skill_id 
        GROUP BY 
            s.name;
    `;
    const [skillsRows] = await db.query(skillsQuery);

    const skillNames = [];
    const userCounts = [];

    skillsRows.forEach(row => {
        skillNames.push(row.name);
        userCounts.push(row.percentage);
    });

    // Query to get interest category names and their respective user counts for pie chart
    const categoriesQuery = `
        SELECT 
            ic.name AS category_name,
            COUNT(DISTINCT pi.user_id) AS user_count,
            ROUND(CAST(COUNT(DISTINCT pi.user_id) AS FLOAT) * 100.0 / (SELECT COUNT(DISTINCT user_id) FROM profile_interests), 2) AS percentage
        FROM 
            interest_categories ic
        JOIN 
            interests i ON ic.id = i.category_id
        JOIN 
            profile_interests pi ON i.id = pi.interest_id
        GROUP BY 
            ic.name;

    `;
    const [categoriesRows] = await db.query(categoriesQuery);

    const categoryNames = [];
    const categoryPercentages = [];

    categoriesRows.forEach(row => {
        categoryNames.push(row.category_name);
        categoryPercentages.push(row.percentage);
    });

    // Query to get connection status counts
    const connectionsQuery = `
        SELECT 
            status,
            COUNT(*) AS status_count
        FROM 
            connections
        WHERE
            status IN ('pending', 'accepted', 'rejected')
        GROUP BY 
            status;
    `;
    const [connectionsRows] = await db.query(connectionsQuery);

    let pendingCount = 0;
    let acceptedCount = 0;
    let rejectedCount = 0;

    connectionsRows.forEach(row => {
        if (row.status === 'pending') {
            pendingCount = row.status_count;
        } else if (row.status === 'accepted') {
            acceptedCount = row.status_count;
        } else if (row.status === 'rejected') {
            rejectedCount = row.status_count;
        }
    });

    // Query to get reported posts count
    const reportedPostsQuery = `
        SELECT COUNT(*) AS reported_posts_count
        FROM report_posts;
    `;
    const [reportedPostsRows] = await db.query(reportedPostsQuery);

    // Query to get reported users count
    const reportedUsersQuery = `
        SELECT COUNT(*) AS reported_users_count
        FROM report_users;
    `;
    const [reportedUsersRows] = await db.query(reportedUsersQuery);

    // Query to get daily video and photo counts for line chart
    const mediaPostsQuery = `
    SELECT 
        DATE_FORMAT(created_at, '%Y-%m-%d') AS date, 
        CAST(SUM(CASE WHEN post_type = 'video' THEN 1 ELSE 0 END) AS UNSIGNED) AS video_count, 
        CAST(SUM(CASE WHEN post_type = 'post' THEN 1 ELSE 0 END) AS UNSIGNED) AS photo_count 
    FROM 
        all_posts 
    GROUP BY 
        DATE_FORMAT(created_at, '%Y-%m-%d') 
    ORDER BY 
        date;

`;

const [mediaPostsRows] = await db.query(mediaPostsQuery);

const videosData = [];
const photosData = [];

mediaPostsRows.forEach(row => {
    videosData.push([row.date, row.video_count]); 
    photosData.push([row.date, row.photo_count]); 
});



    res.status(200).json({
        total_users: usersRows[0].total_users,
        total_users_today: usersRows[0].total_users_today,
        // total_likes: postsRows[0].total_likes,
        // total_comments: postsRows[0].total_comments,
        // total_shares: postsRows[0].total_shares,
        total_posts: postsRows[0].total_posts,
        total_engagement: total_engagement,
        total_posts_today: postsRows[0].total_posts_today,
        complete_profiles: completeUsers,
        incomplete_profiles: incompleteUsers,
        skill_names: skillNames,
        skill_user_counts: userCounts,
        category_names: categoryNames,
        category_percentages: categoryPercentages,
        pending_count: pendingCount,
        accepted_count: acceptedCount,
        rejected_count: rejectedCount,
        reported_posts_count: reportedPostsRows[0].reported_posts_count,
        reported_users_count: reportedUsersRows[0].reported_users_count,
        videos_count: videosData,
        photos_count: photosData,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "An error occurred while fetching user details" });
  }
}

module.exports = { dashboard };
