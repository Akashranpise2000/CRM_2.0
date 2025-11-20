1)Perform a detailed analysis of this front-end application, evaluating its code structure, performance metrics, security vulnerabilities, user interface design, accessibility compliance, and potential optimizations for scalability and maintainability. Provide actionable recommendations with code examples where applicable.

2)Remove the all supabase related codes from the project
: Remove all Supabase-related files, configurations, and database connections from the CRM_main folder. Ensure no references to Supabase, its libraries, or any database dependencies are retained in the codebase, including imports, environment variables, and API calls. Update any affected components or files to remove these integrations without breaking the application's functionality. Verify the changes by running a build and testing key features.

3. create a backend folders and files for the project
   Promt: In this project, I have already created the backend folder using Node.js and Express.js for the backend, and MongoDB as the database. Create the following files and folders in the backend directory: config/, db.js, controllers/, middlewares/, migrations/, models/, routes/, .env, and server.js. Use only JavaScript (.js) extensions for all backend files. Ensure the structure supports a scalable Node.js/Express.js application with MongoDB integration, including proper error handling, environment variable management, and modular organization. Populate each file with appropriate code snippets, such as database connection logic in db.js, Express server setup in server.js, and example routes, models, and controllers for a basic CRUD API (e.g., for user management or similar entities). Use the provided conversation context to infer any project-specific details, like transitioning from Supabase or ensuring compatibility with a CRM system, and avoid any references to Supabase in the generated code.

4. to do list for the projects

Create backend directory structure
Create .env file with environment variables
Create db.js with MongoDB connection logic
Create server.js with Express server setup
Create config/ directory with configuration files
Create models/ directory with Mongoose models for CRM entities
Create controllers/ directory with CRUD operations

5. for the errors

promts:Analyze both the frontend and backend components of the project. Remove all types of errors, clean up the code thoroughly, utilize the frontend to generate and define database schemas, and eliminate all API testing and routing errors in the project. Ensure the backend setup, including routes, middlewares, and controllers for the CRM system, is fully functional and error-free.

Analyze frontend types vs backend models discrepancies
Fix Contact model field naming (firstName -> first_name, etc.)

6. supabase releted files and database

in this CRM project, completely remove all Supabase-related files, configurations, dependencies, and database integrations. Ensure no Supabase SDKs, API calls, or references are used anywhere in the codebase. Replace any Supabase database functionality with a local MongoDB setup using Mongoose, including updating package.json to remove Supabase dependencies and add necessary MongoDB-related packages if needed. Verify that the backend server.js and other files are updated to connect to MongoDB instead, and test the full backend functionality without any Supabase remnants.

7. dashboard are not working properly fix it

In this project, the backend is running properly, the frontend is also running properly, but when I navigate to the dashboard, the dashboard is not working properly. Recently, I applied diffs to backend/server.js to add settings routes, updated the todo list to mark tasks like creating settings controller and routes as completed, killed Node processes using taskkill /F /IM node.exe, and restarted the backend with cd backend && npm start. What could be causing the dashboard issue, and how can I debug it?

8)login page error

In this project, analyze the login authentication page, which is not working properly. When I click on "Create a new account", after filling in all the details, I want a page that displays a "User created successfully" message. After the account creation, it should then redirect back to the login page. Additionally, address the CORS policy error blocking access to 'http://localhost:5000/api/auth/login' from 'http://localhost:3000', ensuring proper headers are set in the backend server.js for cross-origin requests. Use the provided backend files (server.js, authRoutes.js, package.json, .env) and frontend api.ts to debug and fix the authentication flow.

On the login pages, creating new accounts is functioning correctly. However, after successfully creating a new account, attempting to log in using the credentials from that new account fails to work properly.

8. contact are not working
   In this project, within the contact sidebar, when I import Excel files, the files upload correctly, but afterward, they are not working properly, and no data is showing. This issue persists despite the files being uploaded successfully. For context, previous troubleshooting involved killing Node.js processes using commands like "tasklist /FI "IMAGENAME eq node.exe"" to check running nodes. Please provide a detailed solution or debugging steps to resolve why the imported data isn't displaying after upload.

9) company details are not working in the c
   In the contact sidebar, when adding company information for the current company and past company fields, ensure that users manually type the company names instead of selecting from a dropdown or auto-populating from existing company data. The user should be able to freely enter their past and current company names as text input.

Analyze the contact form and company data structure
Identify that company address should auto-populate contact address fields
Modify the AddContactForm component to auto-populate address fields when a company is selected
Test the implementation
Change company fields to manual text inputs instead of dropdowns
Update form logic for text inputs and auto-population on typing

In the CRM application's contact sidebar, when I click the "Edit Contact" button, all other options function correctly. However, for the company field, I want to add the ability to manually enter a new company name directly in the edit form, rather than only selecting from existing companies. This should allow creating and associating a new company on the fly during contact editing. Please implement this feature, ensuring it integrates with the existing contact and company data structures (e.g., updating the store.ts logic for mapping company_id to company objects, and handling backend persistence for new companies).

12)inthe opportunities sidebar, when i click on the opportunity card, it should show me more details about the opportunity.

In the CRM-main project, specifically in the opportunities sidebar (likely within the OpportunityDialog component in components/opportunities/opportunity-dialog.tsx), when filling out all the information in the opportunity form, the select company option is not working as expected. I do not want a dropdown option populated from fetched companies; instead, I want to manually add company details via text input fields (e.g., company name, address, etc.) without relying on a predefined list or store data. Please modify the code to implement this manual company addition feature, ensuring it integrates properly with the form submission and avoids any dependencies on useCRMStore for companies in this context. Use the existing form structure and react-hook-form setup for validation.dd

13. in the calaender issued
    In the schedule or calendar view, the fields for today's activities, overdue items, completed tasks, and upcoming events are not displaying any data. I need the current and relevant data to populate and show in these columns. Please provide a solution or update to ensure this information is visible and accurate.

14. drop down for the opportunities sidebar

On the opportunities page, implement a single status bar with subfields including Quality, Meet/Contact, Meet & Present, Purpose, Negotiate, Closed by Win, Lost, Not Responding, and Remarks. All these fields should be presented in a dropdown menu. Ensure the OpportunityFormData interface in opportunity-dialog.tsx includes these subfields, update the form defaults and reset logic accordingly, and modify the UI to render them as a dropdown selection within the status field. Also, update the opportunities page table to display the status appropriately, referencing the existing code structure for form handling and table headers.

15. for new data base schemas

In this CRM project, I have recently added new sidebar elements, fields, and modules directly to the frontend. Now, I need to implement the corresponding backend components, including routes, middleware, controllers, and additional backend logic. Additionally, update the database schemas in the models, analyze the backend structure, and incorporate any important fields or enhancements required for the project, building on the recent updates to opportunity statuses and related interfaces.
