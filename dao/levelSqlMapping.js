var level = {
	insert:'INSERT INTO level(levelid, canme, ename) VALUES(? , ? , ?)',
	update:'UPDATE level SET levelid = ?, canme = ?, ename = ? WHERE id = ?',
	delete: 'DELETE FROM level WHERE id=?',
	queryById: 'SELECT * FROM level WHERE id=?',
	queryAll: 'SELECT * FROM level'
};

module.exports = level;