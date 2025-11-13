function initializaeDataBase(database) {
  // Code to initialize the database goes here
    addDatabaseChangeListener.execAsync(´
        CREATE TABLE IF NOT EXISTS tasks(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR NOT NULL,
            description VARCHAR NOT NULL,
            done BOOLEAN DEFAULT false,
            create_date TIMESTAMP DEFAULT CURRENT_(datatime)
        )
        
        ´);
}
