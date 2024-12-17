SELECT u.id AS userId, u.firstName, u.lastName, g.id AS groupId, g.name AS groupName
FROM user u
JOIN groupMembership gm ON u.id = gm.userID
JOIN `group` g ON gm.groupID = g.id
WHERE u.created < g.created;