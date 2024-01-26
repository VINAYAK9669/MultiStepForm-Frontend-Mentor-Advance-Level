# MultiStep Form with React, Vite, React-Router, Redux, and Tailwind CSS  [Level - Advance]🚀

## Description

This project is a solution to the Frontend Mentor challenge, where I created a responsive multistep form using React, Vite, React-Router, Redux, and Tailwind CSS. The application showcases the implementation of various features and technologies, making use of a highly sought-after tech stack.

## Netlify Demo Link

[Live Demo](https://multi-step-form-frontend-advance.netlify.app/) 

## Github Repository Link

[GitHub Repository](https://github.com/VINAYAK9669/MultiStepForm-Frontend-Mentor-Advance-Level?tab=readme-ov-file) 

## Tech Stack Used

- React
- Vite
- React-Router
- Redux
- Tailwind CSS

## Features Implemented

1. **React Router for Page Navigation:** Utilized React Router for seamless navigation between different form steps. 🌐

2. **Redux and Redux Toolkit Implementation:** Integrated Redux and Redux Toolkit for state management, enhancing the scalability and maintainability of the application. 🔄

3. **Reusable Components:** Demonstrated the use of reusable components, such as a single Button component responsible for handling all form interactions. 🔄

## Chalneges Faced

😏 Once I move to another step, the previous records should be there. So, I implemented Redux to make them global and learn a few advanced things.

😒 When I decided to use a button as a reusable component, I faced challenges in handling all the form submissions, such as routing for all pages and error handling, and styling dependent on whether the button is the next button or back button.

😭 The toughest thing I faced was while selecting checkboxes. I needed to update them in Redux whenever the user clicked on one of the checkboxes. If the user deselected a checkbox, I had to delete it from the global state. Not only this, but once the user moved to the forward step and came back again to this page, I had to show them the selected checkboxes. To be honest, I wasted around 3+ hours fixing this issue.

😍 During the page navigation, I had to prevent the user from navigating through the steps. The user can navigate through steps only upon filling the first step correctly.



## Notes

While the project has implemented numerous advanced features, there may be some remaining loopholes, which are minor and can be considered as areas for future improvement.



