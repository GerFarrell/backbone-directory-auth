# Backbone.js Employee Directory With Authentication#

[Backbone Directory](https://github.com/ccoenraets/backbone-directory) is a simple Employee Directory application built with [Backbone.js](http://documentcloud.github.com/backbone/). 
I have added some basic authentication to this great project to show one way to this with backbone.js. 
I have added the front-end authentication code to the 'web' directory only. 

The application allows you to look up employees by name, view the details of an employee, and navigate up and down the Org Chart by clicking the employee’s manager or any of his/her direct reports.

## Set Up: ##

1. Install [Vagrant](http://vagrantup.com)
2. Checkout the code
3. In your terminal, navigate to the code, and type `vagrant up`

## Manual Setup ##

Prerequisites: LAMP Server (Linux, Apache, MySQL, PHP)

1. Create a MySQL database name "directory".
2. Execute directory.sql to create and populate the "employee" table:

	mysql directory -uroot < directory.sql


