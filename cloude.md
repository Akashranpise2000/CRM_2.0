Complete CRM Project - MERN Stack Development Guide
I'll provide you with a comprehensive, step-by-step prompt guide to build a full-featured CRM system using the MERN stack.
Project Overview Prompt
Create a comprehensive Customer Relationship Management (CRM) system using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with the following complete feature set:

PROJECT STRUCTURE:

- Backend: Node.js + Express.js + MongoDB
- Frontend: React.js + Redux Toolkit + Tailwind CSS
- Authentication: JWT-based authentication
- File Storage: Multer for file uploads
- Real-time: Socket.io for notifications
  Step-by-Step Development Prompts
  STEP 1: Project Initialization & Setup
  Set up the MERN stack project structure:

1. Create root folder: crm-system
2. Initialize backend:

   - Create /backend folder
   - Run: npm init -y
   - Install dependencies: express mongoose dotenv bcryptjs jsonwebtoken cors morgan nodemon multer socket.io nodemailer
   - Create folders: controllers, models, routes, middleware, config, utils, uploads
   - Set up .env file with: PORT, MONGODB_URI, JWT_SECRET, JWT_EXPIRE
   - Create server.js with Express app setup

3. Initialize frontend:

   - Create /frontend folder using: npx create-react-app frontend
   - Install dependencies: axios react-router-dom @reduxjs/toolkit react-redux recharts react-hot-toast react-icons tailwindcss
   - Set up Tailwind CSS configuration
   - Create folder structure: components, pages, redux, services, utils
     STEP 2: Database Models
     Create MongoDB schemas for the CRM system:

4. User Model (models/User.js):

   - Fields: firstName, lastName, email, password, role (admin/manager/sales), avatar, phone, department, status, permissions
   - Methods: password hashing, JWT token generation

5. Customer Model (models/Customer.js):

   - Fields: firstName, lastName, email, phone, company, address, city, state, country, zipCode, source, status (lead/prospect/customer), assignedTo, tags, customFields, createdBy, notes

6. Contact Model (models/Contact.js):

   - Fields: customerId, contactPerson, email, phone, position, isPrimary, socialMedia

7. Lead Model (models/Lead.js):

   - Fields: name, email, phone, company, source, status (new/contacted/qualified/lost), score, assignedTo, followUpDate, notes, products/services interested

8. Deal/Opportunity Model (models/Deal.js):

   - Fields: title, customerId, value, stage (prospecting/qualification/proposal/negotiation/closed-won/closed-lost), probability, expectedCloseDate, assignedTo, products, notes

9. Task Model (models/Task.js):

   - Fields: title, description, type (call/meeting/email/follow-up), priority, status, dueDate, assignedTo, relatedTo (customer/lead/deal), reminders

10. Activity Model (models/Activity.js):

    - Fields: type, description, relatedTo, relatedModel, performedBy, metadata, timestamp

11. Product Model (models/Product.js):

    - Fields: name, description, price, category, SKU, stock, status

12. Campaign Model (models/Campaign.js):

    - Fields: name, type, status, startDate, endDate, budget, targetAudience, metrics

13. Invoice Model (models/Invoice.js):

    - Fields: invoiceNumber, customerId, items, subtotal, tax, total, status, dueDate, paidDate

14. Note Model (models/Note.js):

    - Fields: content, attachments, relatedTo, relatedModel, createdBy

15. Report Model (models/Report.js): - Fields: name, type, filters, generatedBy, data, createdAt
    STEP 3: Authentication & Authorization
    Implement complete authentication system:

16. Auth Controller (controllers/authController.js):

    - register: Create new user with hashed password
    - login: Authenticate user and return JWT token
    - getCurrentUser: Get logged-in user profile
    - updateProfile: Update user information
    - changePassword: Change user password
    - forgotPassword: Send password reset email
    - resetPassword: Reset password with token

17. Auth Middleware (middleware/auth.js):

    - protect: Verify JWT token
    - authorize: Check user roles and permissions
    - isAdmin: Admin-only access

18. Auth Routes (routes/authRoutes.js):

    - POST /api/auth/register
    - POST /api/auth/login
    - GET /api/auth/me
    - PUT /api/auth/updateprofile
    - PUT /api/auth/changepassword
    - POST /api/auth/forgotpassword
    - PUT /api/auth/resetpassword/:token
      STEP 4: Customer Management APIs
      Create customer management endpoints:

19. Customer Controller (controllers/customerController.js):

    - getCustomers: Get all customers with pagination, filtering, sorting
    - getCustomer: Get single customer with full details
    - createCustomer: Add new customer
    - updateCustomer: Update customer information
    - deleteCustomer: Soft delete customer
    - importCustomers: Bulk import from CSV
    - exportCustomers: Export to CSV/Excel
    - getCustomerStats: Get customer statistics
    - assignCustomer: Assign customer to sales rep
    - addNote: Add note to customer
    - uploadDocument: Upload customer documents

20. Customer Routes (routes/customerRoutes.js):

    - GET /api/customers (with query params: page, limit, search, filter, sort)
    - GET /api/customers/:id
    - POST /api/customers
    - PUT /api/customers/:id
    - DELETE /api/customers/:id
    - POST /api/customers/import
    - GET /api/customers/export
    - GET /api/customers/stats
    - PUT /api/customers/:id/assign
    - POST /api/customers/:id/notes
    - POST /api/customers/:id/documents
      STEP 5: Lead Management APIs
      Implement lead management system:

21. Lead Controller (controllers/leadController.js):

    - getLeads: Get all leads with filtering
    - getLead: Get single lead details
    - createLead: Create new lead
    - updateLead: Update lead information
    - deleteLead: Delete lead
    - convertToCustomer: Convert lead to customer
    - updateLeadStatus: Change lead status
    - assignLead: Assign lead to sales rep
    - scoreLeads: Auto-score leads based on criteria
    - getLeadPipeline: Get leads by stage

22. Lead Routes (routes/leadRoutes.js):

    - GET /api/leads
    - GET /api/leads/:id
    - POST /api/leads
    - PUT /api/leads/:id
    - DELETE /api/leads/:id
    - POST /api/leads/:id/convert
    - PUT /api/leads/:id/status
    - PUT /api/leads/:id/assign
    - GET /api/leads/pipeline
      STEP 6: Deal/Sales Pipeline APIs
      Create sales pipeline management:

23. Deal Controller (controllers/dealController.js):

    - getDeals: Get all deals with filters
    - getDeal: Get single deal
    - createDeal: Create new deal
    - updateDeal: Update deal
    - deleteDeal: Delete deal
    - moveDealStage: Move deal through pipeline
    - getDealsPipeline: Get deals grouped by stage
    - getDealsForecast: Sales forecast
    - closeDeal: Mark deal as won/lost

24. Deal Routes (routes/dealRoutes.js):

    - GET /api/deals
    - GET /api/deals/:id
    - POST /api/deals
    - PUT /api/deals/:id
    - DELETE /api/deals/:id
    - PUT /api/deals/:id/stage
    - GET /api/deals/pipeline
    - GET /api/deals/forecast
    - PUT /api/deals/:id/close
      STEP 7: Task & Activity Management
      Implement task and activity tracking:

25. Task Controller (controllers/taskController.js):

    - getTasks: Get all tasks with filters (my tasks, overdue, by priority)
    - getTask: Get task details
    - createTask: Create new task
    - updateTask: Update task
    - deleteTask: Delete task
    - completeTask: Mark task as complete
    - getUpcomingTasks: Get tasks due soon
    - getTaskStats: Task statistics

26. Activity Controller (controllers/activityController.js):

    - logActivity: Automatically log user activities
    - getActivities: Get activity feed
    - getEntityActivities: Get activities for specific customer/lead/deal

27. Routes:

    - GET /api/tasks
    - POST /api/tasks
    - PUT /api/tasks/:id
    - DELETE /api/tasks/:id
    - PUT /api/tasks/:id/complete
    - GET /api/activities
    - GET /api/activities/:entityType/:entityId
      STEP 8: Product & Invoice Management
      Create product and invoice system:

28. Product Controller (controllers/productController.js):

    - getProducts: Get all products
    - getProduct: Get product details
    - createProduct: Add new product
    - updateProduct: Update product
    - deleteProduct: Delete product
    - updateStock: Update inventory

29. Invoice Controller (controllers/invoiceController.js):

    - getInvoices: Get all invoices
    - getInvoice: Get invoice details
    - createInvoice: Generate new invoice
    - updateInvoice: Update invoice
    - deleteInvoice: Delete invoice
    - sendInvoice: Email invoice to customer
    - markAsPaid: Mark invoice as paid
    - getInvoiceStats: Invoice statistics

30. Routes:

    - Product routes: /api/products/\*
    - Invoice routes: /api/invoices/\*
      STEP 9: Analytics & Reporting
      Implement analytics and reporting system:

31. Analytics Controller (controllers/analyticsController.js):

    - getDashboardStats: Overall CRM statistics
    - getSalesAnalytics: Sales performance metrics
    - getCustomerAnalytics: Customer insights
    - getLeadAnalytics: Lead conversion rates
    - getRevenueAnalytics: Revenue trends
    - getUserPerformance: Individual user performance
    - getCustomReport: Generate custom reports

32. Routes:

    - GET /api/analytics/dashboard
    - GET /api/analytics/sales
    - GET /api/analytics/customers
    - GET /api/analytics/leads
    - GET /api/analytics/revenue
    - GET /api/analytics/users
    - POST /api/analytics/custom-report
      STEP 10: Communication & Campaign Management
      Implement communication features:

33. Email Controller (controllers/emailController.js):

    - sendEmail: Send individual emails
    - sendBulkEmail: Send bulk emails
    - getEmailTemplates: Get email templates
    - createEmailTemplate: Create template
    - trackEmailOpens: Track email analytics

34. Campaign Controller (controllers/campaignController.js):

    - getCampaigns: Get all campaigns
    - createCampaign: Create new campaign
    - updateCampaign: Update campaign
    - getCampaignMetrics: Get campaign performance

35. Routes:

    - POST /api/emails/send
    - POST /api/emails/bulk
    - GET /api/campaigns
    - POST /api/campaigns
    - GET /api/campaigns/:id/metrics
      STEP 11: Frontend - Authentication & Layout
      Create React frontend authentication:

36. Redux Setup (redux/store.js):

    - Configure Redux store with slices
    - Create authSlice, customerSlice, leadSlice, dealSlice, taskSlice

37. Auth Pages:

    - LoginPage: Login form with email/password
    - RegisterPage: User registration
    - ForgotPasswordPage: Password reset request
    - ResetPasswordPage: Password reset form

38. Layout Components:

    - Sidebar: Navigation menu
    - Header: User profile, notifications
    - PrivateRoute: Protected route wrapper
    - Layout: Main app layout wrapper

39. API Service (services/api.js):

    - Axios instance with interceptors
    - Token management
    - Error handling
      STEP 12: Frontend - Dashboard
      Create main dashboard:

40. Dashboard Page (pages/Dashboard.js):

    - KPI Cards: Total customers, leads, deals, revenue
    - Charts: Sales trends, lead conversion, revenue graph
    - Recent activities feed
    - Upcoming tasks list
    - Quick actions buttons
    - Performance metrics

41. Use Recharts library for:

    - LineChart: Revenue over time
    - BarChart: Deals by stage
    - PieChart: Lead sources
    - AreaChart: Customer growth
      STEP 13: Frontend - Customer Management
      Create customer management interface:

42. Customers List Page (pages/Customers/CustomersList.js):

    - Data table with pagination
    - Search and filter functionality
    - Sorting options
    - Bulk actions (delete, export, assign)
    - Add customer button
    - Customer cards/list view toggle

43. Customer Detail Page (pages/Customers/CustomerDetail.js):

    - Customer information section
    - Contact details
    - Activity timeline
    - Related deals
    - Related tasks
    - Notes section
    - Documents/attachments
    - Edit customer modal

44. Add/Edit Customer Form:

    - Multi-step form
    - Form validation
    - Custom fields support
    - File upload for avatar/documents
      STEP 14: Frontend - Lead Management
      Create lead management interface:

45. Leads Page (pages/Leads/LeadsList.js):

    - Kanban board view (drag-and-drop between stages)
    - List view option
    - Filter by status, source, assigned user
    - Lead scoring indicators
    - Quick actions (call, email, convert)

46. Lead Detail Page:

    - Lead information
    - Lead score visualization
    - Activity history
    - Convert to customer button
    - Follow-up scheduling

47. Lead Form:

    - Create/edit lead form
    - Auto-scoring based on criteria
    - Duplicate detection
      STEP 15: Frontend - Sales Pipeline
      Create sales pipeline interface:

48. Pipeline Page (pages/Deals/Pipeline.js):

    - Kanban board with deal stages
    - Drag-and-drop to move deals
    - Deal cards showing value, probability, close date
    - Filter and search
    - Total value per stage
    - Win/loss analytics

49. Deal Detail Page:

    - Deal information
    - Associated customer
    - Products/services
    - Activity timeline
    - Edit deal modal
    - Close deal (won/lost) with reason

50. Deal Form:

    - Create/edit deal
    - Product selector
    - Probability calculator
    - Expected close date picker
      STEP 16: Frontend - Task Management
      Create task management system:

51. Tasks Page (pages/Tasks/TasksList.js):

    - Tasks list with filtering (all, my tasks, overdue, completed)
    - Calendar view option
    - Task priority indicators
    - Due date highlighting
    - Quick complete checkbox
    - Task categories

52. Task Detail/Form:

    - Create/edit task modal
    - Task type selection
    - Related entity linking (customer/lead/deal)
    - Due date and time picker
    - Priority setting
    - Reminder configuration
    - Assign to user

53. Calendar View (pages/Tasks/TasksCalendar.js):

    - Monthly calendar with tasks
    - Drag to reschedule
    - Color-coded by priority/type
      STEP 17: Frontend - Products & Invoices
      Create product and invoice management:

54. Products Page (pages/Products/ProductsList.js):

    - Product catalog with images
    - Grid/list view
    - Category filtering
    - Stock level indicators
    - Add/edit product modal

55. Invoices Page (pages/Invoices/InvoicesList.js):

    - Invoice list with status badges
    - Filter by status, date, customer
    - Create invoice button
    - Send invoice via email
    - Download PDF option

56. Invoice Detail Page:

    - Invoice preview
    - Customer information
    - Line items table
    - Total calculations
    - Payment status
    - Payment history
    - Send/print options

57. Create Invoice Form:

    - Customer selector
    - Product picker with quantities
    - Dynamic total calculation
    - Tax configuration
    - Terms and notes
      STEP 18: Frontend - Analytics & Reports
      Create analytics and reporting:

58. Analytics Dashboard (pages/Analytics/Dashboard.js):

    - Date range selector
    - Key metrics overview
    - Sales performance charts
    - Conversion funnel
    - Revenue trends
    - Top performers leaderboard
    - Customer acquisition cost

59. Sales Report (pages/Analytics/SalesReport.js):

    - Detailed sales metrics
    - Deals won/lost analysis
    - Average deal size
    - Sales cycle length
    - Export report option

60. Customer Report (pages/Analytics/CustomerReport.js):

    - Customer demographics
    - Customer lifetime value
    - Retention rates
    - Customer segmentation

61. Custom Reports (pages/Analytics/CustomReports.js):

    - Report builder interface
    - Filter configuration
    - Chart type selector
    - Save report templates
      STEP 19: Frontend - Settings & Admin
      Create settings and admin panel:

62. User Management (pages/Admin/Users.js):

    - User list with roles
    - Add/edit/delete users
    - Role and permission management
    - User activity logs

63. Company Settings (pages/Settings/CompanySettings.js):

    - Company information
    - Logo upload
    - Business hours
    - Currency settings
    - Tax configuration

64. Email Templates (pages/Settings/EmailTemplates.js):

    - Template list
    - Create/edit templates
    - Template preview
    - Variable placeholders

65. Custom Fields (pages/Settings/CustomFields.js):

    - Add custom fields to entities
    - Field type selection
    - Required/optional settings

66. Integration Settings:

    - Email integration (SMTP)
    - Calendar sync
    - Third-party API keys
      STEP 20: Real-time Features & Notifications
      Implement real-time features:

67. Backend Socket.io Setup (server.js):

    - Initialize Socket.io
    - Authentication for socket connections
    - Event handlers for notifications

68. Notification System:

    - Create Notification model
    - Notification controller and routes
    - Real-time notification broadcasting
    - Notification types: task assigned, deal updated, new lead, etc.

69. Frontend Real-time (components/Notifications.js):

    - Socket.io client setup
    - Notification dropdown in header
    - Real-time notification updates
    - Mark as read functionality
    - Notification sound/toast alerts
      STEP 21: Additional Features
      Implement advanced features:

70. File Upload System:

    - Configure Multer for file uploads
    - Image optimization
    - Document storage
    - Avatar/logo uploads

71. Search Functionality:

    - Global search across all entities
    - Advanced search with filters
    - Search suggestions

72. Export/Import:

    - CSV export for all data
    - Excel export
    - CSV import with validation
    - Data mapping interface

73. Audit Logs:

    - Log all important actions
    - View audit trail
    - Filter by user, date, action type

74. Email Integration:

    - Nodemailer setup
    - Email templates
    - Send emails from CRM
    - Track email opens

75. Backup & Data:

    - Database backup functionality
    - Data export for backup
    - Data restore option
      STEP 22: UI/UX Enhancements
      Polish the user interface:

76. Design System:

    - Color palette (primary, secondary, success, warning, danger)
    - Typography system
    - Spacing scale
    - Component library

77. Components:

    - Reusable button variants
    - Form input components
    - Modal/dialog components
    - Toast notifications
    - Loading spinners
    - Empty states
    - Error states

78. Responsive Design:

    - Mobile-responsive layout
    - Hamburger menu for mobile
    - Touch-friendly interactions
    - Responsive tables/cards

79. Animations:

    - Page transitions
    - Hover effects
    - Loading animations
    - Smooth scrolling
      STEP 23: Testing & Security
      Implement security and testing:

80. Security Measures:

    - Input validation and sanitization
    - XSS protection
    - CSRF protection
    - Rate limiting
    - SQL injection prevention
    - Secure password hashing
    - HTTPS enforcement
    - Helmet.js for security headers

81. Error Handling:

    - Global error handler middleware
    - Custom error classes
    - Meaningful error messages
    - Error logging

82. Validation:

    - Backend validation with express-validator
    - Frontend validation with Yup/Formik
    - File upload validation

83. Testing (Optional):

    - Unit tests with Jest
    - API tests with Supertest
    - Frontend tests with React Testing Library
      STEP 24: Deployment & Final Steps
      Prepare for deployment:

84. Environment Configuration:

    - Production environment variables
    - Database connection for production
    - CORS configuration
    - API rate limiting

85. Build & Optimize:

    - Frontend production build
    - Code minification
    - Image optimization
    - Lazy loading implementation

86. Deployment:

    - Deploy backend to Heroku/DigitalOcean/AWS
    - Deploy frontend to Vercel/Netlify
    - Configure MongoDB Atlas
    - Set up domain and SSL

87. Documentation:
    - API documentation
    - User manual
    - Setup instructions
    - README file
      Quick Start Command Summary
      bash# Backend Setup
      cd backend
      npm init -y
      npm install express mongoose dotenv bcryptjs jsonwebtoken cors morgan nodemon multer socket.io nodemailer express-validator helmet express-rate-limit

# Frontend Setup

npx create-react-app frontend
cd frontend
npm install axios react-router-dom @reduxjs/toolkit react-redux recharts react-hot-toast react-icons @headlessui/react date-fns formik yup socket.io-client
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
