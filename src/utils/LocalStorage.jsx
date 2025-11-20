
  const employee =[
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Fix UI alignment",
          "description": "Adjust the button alignment on the login page.",
          "date": "2025-11-20",
          "category": "Frontend",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "API authentication bug",
          "description": "Resolve the token refresh issue in authentication API.",
          "date": "2025-11-18",
          "category": "Backend",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Prepare project report",
          "description": "Create a weekly progress report for the manager.",
          "date": "2025-11-17",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Database cleanup",
          "description": "Remove unused tables and optimize indexes.",
          "date": "2025-11-19",
          "category": "Database",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Add dark mode",
          "description": "Implement dark mode support across the dashboard.",
          "date": "2025-11-10",
          "category": "Frontend",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Email service integration",
          "description": "Connect SendGrid API for user notifications.",
          "date": "2025-11-14",
          "category": "Backend",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Write API documentation",
          "description": "Document all new product-related API endpoints.",
          "date": "2025-11-16",
          "category": "Documentation",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Code review",
          "description": "Review merge requests for the mobile app team.",
          "date": "2025-11-18",
          "category": "Code Review",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Refactor dashboard UI",
          "description": "Improve the layout structure for the new dashboard.",
          "date": "2025-11-12",
          "category": "Frontend",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Fix payment gateway issue",
          "description": "Resolve failed transactions due to timeout errors.",
          "date": "2025-11-15",
          "category": "Backend",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "User onboarding flow",
          "description": "Update the onboarding steps for new users.",
          "date": "2025-11-19",
          "category": "Product",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix CSS grid crash",
          "description": "Homepage grid breaks on smaller screens.",
          "date": "2025-11-11",
          "category": "Frontend",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Optimize backend workers",
          "description": "Improve worker queue speed and reduce processing time.",
          "date": "2025-11-13",
          "category": "Backend",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Team meeting notes",
          "description": "Prepare summary of weekly developer meeting.",
          "date": "2025-11-17",
          "category": "Documentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Security patch updates",
          "description": "Apply security updates to API and database servers.",
          "date": "2025-11-20",
          "category": "Security",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Add push notifications",
          "description": "Implement push alerts for mobile devices.",
          "date": "2025-11-19",
          "category": "Mobile",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Fix login speed issue",
          "description": "Improve login API response time from 3s to under 1s.",
          "date": "2025-11-14",
          "category": "Backend",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Test new UI components",
          "description": "Perform QA testing on newly developed UI widgets.",
          "date": "2025-11-16",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Prepare sprint planning",
          "description": "Organize items for the upcoming sprint.",
          "date": "2025-11-18",
          "category": "Management",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    }
  ]

  const admin =[{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }] 

export const setLocalStorage=()=>{
  localStorage.setItem('employee',JSON.stringify(employee))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees = JSON.parse(localStorage.getItem('employee'));
  const admin = JSON.parse(localStorage.getItem('admin'));admin
  console.log(employees,admin )
} 