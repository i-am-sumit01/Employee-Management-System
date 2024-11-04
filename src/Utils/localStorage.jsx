const employee = [
    {
        "ID": 1,
        "firstName": "Sumit",
        "email": "sumit@me.com",
        "password": 123,
        "Tasks": [
            {
                "Active": true,
                "NewTask": true,
                "Completed": false,
                "Failed": false,
                "Title": "Prepare project report",
                "Description": "Prepare and submit the project report for the IT infrastructure upgrade.",
                "TaskDate": "2024-10-22"
            },
            {
                "Active": true,
                "NewTask": false,
                "Completed": false,
                "Failed": false,
                "Title": "Client meeting",
                "Description": "Attend the meeting with TCS for project discussion.",
                "TaskDate": "2024-10-25"
            }
        ],
        "taskCounts": {
            "active": 2,
            "new": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "ID": 2,
        "firstName": "Anjali",
        "email": "anjali@me.com",
        "password": 123,
        "Tasks": [
            {
                "Active": true,
                "NewTask": true,
                "Completed": false,
                "Failed": false,
                "Title": "Develop website module",
                "Description": "Develop the backend module for the e-commerce website.",
                "TaskDate": "2024-10-20"
            },
            {
                "Active": false,
                "NewTask": false,
                "Completed": true,
                "Failed": false,
                "Title": "Code review",
                "Description": "Complete the code review of team members’ submissions.",
                "TaskDate": "2024-10-18"
            }
        ],
        "taskCounts": {
            "active": 2,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "ID": 3,
        "firstName": "Rajesh",
        "email": "rajesh@me.com",
        "password": 123,
        "Tasks": [
            {
                "Active": true,
                "NewTask": false,
                "Completed": false,
                "Failed": false,
                "Title": "Write technical documentation",
                "Description": "Create documentation for the new API integration.",
                "TaskDate": "2024-10-19"
            },
            {
                "Active": false,
                "NewTask": true,
                "Completed": true,
                "Failed": false,
                "Title": "Database migration",
                "Description": "Successfully completed database migration for client systems.",
                "TaskDate": "2024-10-15"
            }
        ],
        "taskCounts": {
            "active": 1,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "ID": 4,
        "firstName": "Priya",
        "email": "priya@me.com",
        "password": 123,
        "Tasks": [
            {
                "Active": true,
                "NewTask": true,
                "Completed": false,
                "Failed": false,
                "Title": "Security audit",
                "Description": "Conduct a security audit for Infosys’ internal systems.",
                "TaskDate": "2024-10-26"
            },
            {
                "Active": false,
                "NewTask": false,
                "Completed": true,
                "Failed": false,
                "Title": "Firewall setup",
                "Description": "Set up a new firewall for the internal network.",
                "TaskDate": "2024-10-12"
            }
        ],
        "taskCounts": {
            "active": 1,
            "new": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "ID": 5,
        "firstName": "Vikram",
        "email": "vikram@me.com",
        "password": 123,
        "Tasks": [
            {
                "Active": true,
                "NewTask": false,
                "Completed": false,
                "Failed": true,
                "Title": "Mobile app testing",
                "Description": "Test the new mobile app for bugs and performance issues.",
                "TaskDate": "2024-10-20"
            },
            {
                "Active": false,
                "NewTask": true,
                "Completed": false,
                "Failed": false,
                "Title": "Server maintenance",
                "Description": "Schedule and conduct maintenance for the database server.",
                "TaskDate": "2024-10-21"
            }
        ],
        "taskCounts": {
            "active": 1,
            "new": 1,
            "completed": 0,
            "failed": 1
        }
    }
];


const admin = {
    "ID": 1,
    "email": "admin@example.com",
    "password": 123,
    "firstName": "Admin"
}


export const setLocalStorage = ()=>{
    localStorage.setItem('employees', (JSON.stringify(employee)))
    localStorage.setItem('admin', (JSON.stringify(admin)))

}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    // console.log(employees, admin)
    return {employees, admin}

    // localStorage.setItem('admin', (JSON.stringify(admin)))

}