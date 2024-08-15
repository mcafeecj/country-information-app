# CountryInformationApp

## Project Overview
CountryInformationApp is a web application designed to provide detailed information about countries. Built using .NET 8 with ASP.NET Core Web App (Razor Pages), Bootstrap, SCSS/CSS, JavaScript, and TypeScript, the app fetches data from the REST Countries API and displays it in a responsive and user-friendly interface.

## Features
- **Responsive Design**: The application is styled with Bootstrap for a consistent and responsive user experience.
- **API Integration**: Fetches country data from the [REST Countries API](https://restcountries.com/v3.1/all) and displays it dynamically on the website.
- **Dynamic Content**: Country information, including the country's name, capital, and other details, is dynamically rendered on the page.

## Installation and Setup

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Yarn](https://yarnpkg.com/getting-started/install) package manager

### Cloning the Repository
1. Clone the repository:
   ```bash
   git clone https://github.com/mcafeecj/country-information-app.git
   ```
   
2. Run and Access the Website
	```bash
	cd country-information-app
	dotnet run
	```
	Once the application is running, you can access the website by navigating to:
	http://localhost:5029 or https://localhost:7089
	The exact port may vary. Check the output from the dotnet run command.
	
## Futher Thinking

### Improvements to Code, Maintainablity, and Deployment
Given more time, I would focus on making the components and functions within the Razor Pages and TypeScript files more modular and reusable. I would also further enhance type safety and clarity by incorporating additional TypeScript types and interfaces where appropriate. To improve user interactivity, I would introduce features to make the user experience more engaging. For example, considering the app displays information about countries, I thought about adding a page where users are shown a random country's flag and are prompted to guess the country based on its flag.

Regarding maintainability, I would invest time in researching and implementing unit tests where applicable. This would help ensure that the app remains robust and functions as expected as new features are added. For deployment, I would explore and implement automated deployment pipelines using GitHub Actions. The app would be deployed to a cloud service like AWS or Azure, with different environments set up for development, QA, and production.

### Overview

I began this task by brainstorming ideas for a web app. With the recent end of the 2024 Paris Olympics, I decided to create an app where users could learn more about different countries. From there, I started planning the UI/UX, mocking up a web page (specifically the country Bootstrap card) in Photoshop. I then researched free public APIs and found the REST Countries API, which provided the data I needed. After testing the API, I had a clear understanding of the data I would be working with.

Next, I wrote pseudocode to outline the user experience and how I would implement the solution. By this point, I had a clear vision of what I wanted to create and how it should look; however, I was not yet familiar with Razor Pages. So, I watched several YouTube tutorials to understand how Razor Pages work. I learned that each page essentially has a .cshtml file (view) and a .cs file (controller). Since I wasn’t building a custom API and planned to use JavaScript/TypeScript for integrating with the REST Countries API, I didn’t interact much with the .cs file—only testing it briefly. With more time, I would like to explore and experiment with the .cs file more to see how it can be utilized alongside the .cshtml file in various scenarios.

Overall, the process of building the application went smoothly. The main challenges I encountered were related to compiling. I had never set up TypeScript to compile into JavaScript, nor SCSS into CSS before, so I had to add scripts to my package.json to ensure everything compiled correctly as I updated my files. In the end, I really enjoyed building this country information app and appreciated the opportunity to learn about Razor Pages.