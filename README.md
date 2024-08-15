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
With more time, I would make the components/functions within the Razor Pages/TypeScript file more modular and reusable, and I would further add TypeScript types/interfaces where it makes sense for type saftey and clarity. 
I would add more user interactivity to make the user experience more enjoyable. Since this is an app that displays information about countries, I thought about having a page where the user is shown a random country's flag, and they have to guess what that country is based on the flag.
Regarding maintainability, I would do some research on and implement unit tests where applicable to ensure everything will continue running as expected as I add more features to the app.
As far as deployment goes, I would do research on the best options such as setting up automated deployment piplines via GitHub Actions. I would deploy the app to a cloud service like AWS or Azure. And I would like to setup different environments such as dev, qa, and production.

### Overview
I began the task by first brainstorming ideas for a web app. With the 2024 Paris Olympics just finishing, I thought of creating an app where users could learn more information about different countries.
From there I started planning out how I wanted the UI/UX to be. I mocked up a web page (specifically the country bootstrap card) in photoshop. Then I looked into free public api's that I could hit and I found the REST Countries API.
After testing that endpoint, I saw what data I would be working with. I then wrote pseudocode to describe the user experience and how I would be implementing the solution. At this point I knew what I wanted to make and how I wanted it to look; however, I was not familiar with Razor Pages.
I watched a couple different YouTube tutorials on how Razor Pages worked and understood that each page had essentially an cshtml file (view) and a cs file (controller). Since I wasn't building out an api and I was going to be using JavaScript/TypeScript to integrate the REST Countries API endpoint, I didn't touch the .cs file much (only to test out how it works).
With more time I would like to experiment this more and see different use cases for how to utilize the .cs file tied to the .cshtml file more. Anyway, building the application went pretty smooth. The only issues I ran into were related to compiling.
In my experience, I never had to setup anything so that TypeScript would compile into JavaScript nor SCSS with CSS, so I had to add scripts to my package.json to ensure things would compile as I update my files.
Overall, I really enjoyed building this country information app and liked that I got to learn about Razor Pages.
