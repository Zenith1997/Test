SELECT u.firstName, u.lastName
FROM user u
WHERE u.firstName = 'Victor'
AND NOT EXISTS (
    SELECT *
    FROM groupMembership gm
    JOIN `group` g ON gm.groupID = g.id
    WHERE gm.userID = u.id
    AND g.name LIKE 'TEST-%'
);