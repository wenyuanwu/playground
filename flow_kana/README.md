First use SQLite3 to run the sql source file and generate the table. 
cat create_table.sql | sqlite3 sales.db
Secondly, install the sqlite3-ruby gem to enable the interaction between SQLite3 and Ruby programs.
