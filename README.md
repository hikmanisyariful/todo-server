# todo-server


**Create Todo**
----
  Create todo and Returns json data about a single Todo.

* **URL**

  /todos

* **Method:**

  `POST`

* **Data Params**

  ```
  {
    title : string,
    description: string,
    StatusId: integer,
    due_Date: date,
    UserId: integer
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      id: 1,
      title: 'Make a documentation',
      description:'To easy your code while working a project',
      StatusId: 1,
      due_date: '2020-03-02',
      UserId: 1,
      createdAt: "2020-03-02T07:45:05.993Z",
      updatedAt: "2020-03-02T07:45:05.993Z",
    }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : [
        'title is required',
        'description is required',
        'status is required',
        'date has passed'
      ]
    }
    ```
  OR

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Please login first']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Invalid Token Errors']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHORIZED<br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHORIZED',
      errors : ['You are not authorized to view this page.']
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

**Find All Todo**
----
  Returns json data about all todo.

* **URL**

  /todos

* **Method:**

  `GET`
  
* **Headers**

  **Required:**

  token

*  **URL Params**

   **Required:**
 
   none

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
     [
        {
          id: 1,
          title: 'Make a documentation',
          description:'To easy your code while working a project',
          StatusId: 1,
          due_date: '2020-03-02',
          UserId: 1,
          createdAt: "2020-03-02T07:45:05.993Z",
          updatedAt: "2020-03-02T07:45:05.993Z",
          Status : {
            id: 1,
            name: "ongoing",
            createdAt: "2020-03-02T06:52:07.340Z",
            updatedAt: "2020-03-02T06:52:07.340Z"
          },
          User: {
            id: 1,
            name: "April",
            email: "april@gmail.com",
            createdAt: "2020-03-02T09:49:06.087Z",
            updatedAt: "2020-03-02T09:49:06.087Z"
          }
        },
        {
          id: 2,
          title: 'Make rest api',
          description:'Look at from read.md',
          StatusId: 2,
          due_date: '2020-03-03',
          UserId: 1,
          createdAt: "2020-03-02T07:45:05.993Z",
          updatedAt: "2020-03-02T07:45:05.993Z",
          Status : {
            "id": 2,
            "name": "overdue",
            "createdAt": "2020-03-02T06:52:07.340Z",
            "updatedAt": "2020-03-02T06:52:07.340Z"
          },
          User: {
            id: 1,
            name: "April",
            email: "april@gmail.com",
            createdAt: "2020-03-02T09:49:06.087Z",
            updatedAt: "2020-03-02T09:49:06.087Z"
          }
        }
    ]
 
    ```
 
* **Error Response:**

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Please login first']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Invalid Token Errors']
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

***

**Find One Todo**
----
  Returns json data about a single todo.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
* **Headers**

  **Required:**

  token


*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      id: 1,
      title: 'Make a documentation',
      description:'To easy your code while working a project',
      StatusId: 2,
      due_date: '2020-03-02',
      UserId: 1,
      createdAt: "2020-03-02T07:45:05.993Z",
      updatedAt: "2020-03-02T07:45:05.993Z",
      Status : {
          id: 2,
          name: "overdue",
          createdAt: "2020-03-02T06:52:07.340Z",
          updatedAt: "2020-03-02T06:52:07.340Z"
      },
      User: {
        id: 1,
        name: "April",
        email: "april@gmail.com",
        createdAt: "2020-03-02T09:49:06.087Z",
        updatedAt: "2020-03-02T09:49:06.087Z"
      }
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
      message : 'Not Found',
      errors :  'Not Found',
    }
    ```

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Please login first']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Invalid Token Errors']
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```  

***


**Update Todo**
----
  Update todo and Returns json data about a single Todo.

* **URL**

  /todos/:id

* **Method:**

  `POST`

* **Headers**

  **Required:**

  token

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  ```
  {
    title : string,
    description: string,
    StatusId: integer,
    due_Date: date
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      id: 1,
      title: 'New Title',
      description:'To easy your code while working a project',
      StatusId: 2,
      due_date: '2020-03-02',
      UserId: 1,
      createdAt: "2020-03-02T07:45:05.993Z",
      updatedAt: "2020-03-02T07:45:05.993Z"
    }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : [
        'title is required',
        'description is required',
        'status is required',
        'date has passed'
      ]
    }
    ```
  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
      message : 'Not Found',
      errors :  ['Not Found'],
    }
    ```

  OR  

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Please login first']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Invalid Token Errors']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHORIZED<br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHORIZED',
      errors : ['You are not authorized to view this page.']
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

****

**Delete Todo**
----
  Delete Todo and Returns json data about a message.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
* **Headers**

  **Required:**

  token

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```
    {
      message : 'Deleted Todo Seccessfully'
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```
    {
      message : 'Not Found',
      errors : ['Not Found] 
    }
    ```

  OR  

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Please login first']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHENTICATED <br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHENTICATED',
      errors : ['Invalid Token Errors']
    }
    ```

  OR

  * **Code:** 401 NOT AUTHORIZED<br />
    **Content:** 
    ```
    {
      message : 'NOT AUTHORIZED',
      errors : ['You are not authorized to view this page.']
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```

***

# USER

**Register User**
----
  Create new user and Returns json data about a single user.

* **URL**

  /register

* **Method:**

  `POST`

* **Data Params**

  ```
  {
    name : required string,
    email: required string,
    password: required string
  }
  ```

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
    {
      id: 1,
      name: "Ipul",
      email: "ipul@gmail.com"
      updatedAt: "2020-03-02T09:49:06.087Z",
      createdAt: "2020-03-02T09:49:06.087Z"
    }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : [
        'name is required',
        'email is required',
        'format email is wrong',
        'Email must be unique',
        'password is required',
        'Minimal 8 character'
      ]
    }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```


****

**Login User**
----
  login user and Returns json data about a accessToken.

* **URL**

  /login

* **Method:**

  `POST`

* **Data Params**

  ```
  {
    email: string,
    password: string
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFwcmlsIiwiZW1haWwiOiJhcHJpbEBnbWFpbC5jb20iLCJpYXQiOjE1ODMxNDQwNTh9.UpLvSulZRmT-CD-xaw8Zk-WvqVsLxC8g-_SEVdUAl4A"
    }

    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```
    {
      message : 'BAD REQUEST',
      errors : ['Invalid email/password]
    }
    ```
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```
    {
      message : 'Internal Server Error,
    }
    ```
