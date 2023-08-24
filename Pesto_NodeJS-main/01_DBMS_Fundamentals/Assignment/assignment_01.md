
# Database Concepts and Normalization

## Question 1: Normalization of the Bookstore Database

### First Normal Form (1NF)
1NF ensures that each column contains atomic values and there are no repeating groups.

Given table appears to be in 1NF as:

| Book ID | Title                 | Author          | Genre       | Publisher         | ISBN           | Price  |
|---------|-----------------------|-----------------|-------------|-------------------|---------------|--------|
| 101     | To Kill a Mockingbird | Harper Lee      | Fiction     | HarperCollins     | 978-0061120084 | 10.99  |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction   | Scribner          | 978-0743273565 | 12.50  |
| 103     | Principles of Physics | Jearl Walker   | Science     | Wiley             | 978-0321976444 | 50.00  |

### Second Normal Form (2NF)
The table is already in 2NF, since all non-key attributes are fully functionally dependent on the primary key.

### Third Normal Form (3NF)
To move the table to 3NF, we should separate out "Publisher" into its own table:

1. **Books Table**:
   
| Book ID | Title                 | Author          | Genre       | ISBN           | Price  |
|---------|-----------------------|-----------------|-------------|---------------|--------|
| 101     | To Kill a Mockingbird | Harper Lee      | Fiction     | 978-0061120084 | 10.99  |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction   | 978-0743273565 | 12.50  |
| 103     | Principles of Physics | Jearl Walker   | Science     | 978-0321976444 | 50.00  |

2. **Publisher Table**:

| Author                   | Publisher      |
|--------------------------|----------------|
| Harper Lee               | HarperCollins  |
| F. Scott Fitzgerald      | Scribner       |
| Jearl Walker             | Wiley          |

## [Bonus]Question 2: Database Normalization Practice

### Step 1: First Normal Form (1NF)
The given table seems to be in 1NF as:

| Employee ID | Employee Name | Department   | Project ID | Project Name | Start Date | End Date   | Salary  |
|-------------|---------------|--------------|------------|--------------|------------|------------|---------|
| 101         | John Doe      | HR           | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000    |
| ...         | ...           | ...          | ...        | ...          | ...        | ...        | ...    |

### Step 2: Second Normal Form (2NF)

1. **Employee Table**:

| Employee ID | Employee Name | Department   | Salary  |
|-------------|---------------|--------------|---------|
| 101         | John Doe      | HR           | 5000    |
| ...         | ...           | ...          | ...    |

2. **Project Table**:

| Project ID | Project Name | Start Date | End Date   |
|------------|--------------|------------|------------|
| 001        | Project A    | 2023-01-15 | 2023-06-30 |
| ...        | ...          | ...        | ...        |

3. **Employee-Project Assignment Table**:

| Employee ID | Project ID |
|-------------|------------|
| 101         | 001        |
| ...         | ...        |

### Step 3: Third Normal Form (3NF)
To resolve transitive dependency, we can create a separate Department table:

1. **Department Table**:

| Department ID | Department Name | Salary  |
|---------------|-----------------|---------|
| 1             | HR              | 5000    |
| ...           | ...             | ...    |

2. **Employee Table** (modified):

| Employee ID | Employee Name | Department ID |
|-------------|---------------|---------------|
| 101         | John Doe      | 1             |
| ...         | ...           | ...           |

The other tables remain unchanged.

### Step 4: Fourth Normal Form (4NF)
No multi-valued dependencies are observed in the tables, so they're already in 4NF.

### Step 5: Fifth Normal Form (5NF)
The tables don't exhibit any complex multi-valued relationships, so they're already in 5NF.

## Question 3: Primary keys and foreign keys in a relational database
- **Primary Key**: A unique identifier for a record in a table.
- **Foreign Key**: Refers to the primary key of another table, establishing a relationship between tables.

## Question 4: ACID properties
- **Atomicity**: All operations within a transaction are completed successfully; otherwise, changes are rolled back.
- **Consistency**: A transaction brings the database from one valid state to another.
- **Isolation**: Transactions are isolated from each other.
- **Durability**: Once committed, changes are permanent.

## Question 5: Indexing in a database
Indexing speeds up the retrieval of rows from a database table by maintaining a data structure (typically a B-tree).

## Question 6: Concurrency control and deadlocks
Concurrency control preserves database consistency during concurrent transactions. Deadlocks are standstills where transactions wait for each other to release resources.

## Question 7: Database sharding
Database sharding breaks a larger database into smaller pieces, distributing them across storage resources.

**Real-time examples**:
1. **E-Commerce Platforms**: Shard based on user IDs.
2. **Social Media Platforms**: Shard based on timestamps or geographical regions.
