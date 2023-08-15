# Slim_Demo_Watch1
# Full Stack Watch Web Application

This is a web application built using Slim PHP framework that provides a platform for managing and displaying watches. The application requires XAMPP with Apache server and MySQL database.

## Features

- View a list of available watches
- Add new watches to the collection
- Update watch details
- Delete watches from the collection

## Installation

1. Make sure you have XAMPP installed on your machine. You can download it from [here](https://www.apachefriends.org/index.html).

2. Clone this repository to your XAMPP `htdocs` directory:

   ```sh
   git clone https://github.com/your-username/full-stack-watch-app.git

3. Import the provided SQL file (database.sql) into your MySQL database.

  # Example command (replace with your actual command)
  mysql -u your-username -p your-password watch_db < database.sql

4.Configure the database connection by editing the app/settings.php file:

    return [
      'settings' => [
          'db' => [
              'host' => 'localhost',
              'user' => 'your-username',
              'pass' => 'your-password',
              'dbname' => 'watch_db',
          ],
      ],
  ];

5.Start your XAMPP server and Apache.

6. Open a web browser and access the application at: http://localhost/full-stack-watch-app.

Usage
Browse the list of watches by navigating to the home page.
Use the provided forms to add, update, or delete watches.
Enjoy managing your watch collection!

License
This project is licensed under the MIT License - see the LICENSE file for details.


Feel free to replace `your-username`, `your-password`, and any other placeholders with the actual values relevant to your project setup. This updated `README.md` now includes the instructions you provided for importing the SQL file and configuring the database connection.



