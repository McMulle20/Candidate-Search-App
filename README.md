# Candidate-Search-App-Mod13

## Description
This project allows employers to search for potential candidates using the GitHub API. The application retrieves candidate information from GitHub, allowing users to view candidate details and save potential candidates to a list. Users can also reject candidates and view a list of saved candidates. The application is built with TypeScript and deployed to Render.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Steps to install and set up your project:
1. Clone the repository: git clone [link](https://github.com/McMulle20/Candidate-Search-App-Mod13-).
   
2. Navigate to the project directory: cd CandidateSearch

3. Install dependencies: npm install

4. Set up GitHub Personal Access Token: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token

5. Add the token to the .env file in the project root

6. Build and run the project: npm run build && npm run dev

## Usage

Once the application is set up and running, you can search for candidates, which will load their details (name, username, location, avatar, email, GitHub URL, company) from GitHub. 

Clicking the "+" button will save the candidate to your list of potential candidates and move on to the next one. Whereas, clicking the "-" button will skip the current candidate and move to the next without saving. 

On the Saved Candidates page, you'll see a list of previously saved candidates. If no candidates have been saved yet, an appropriate message will be displayed. The list of saved candidates will persist across page reloads using local storage. If there are no more candidates available, the application will show a message indicating no candidates are left.

## Credits

BootCamp Guide and the links provided: 
Xpert Learning Assistant
https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token
https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28#authenticating-with-a-personal-access-token
https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide
https://docs.render.com/configure-environment-variables
https://docs.github.com/en/rest/users/users
## License

This project is licensed under the MIT License.

---
## How to Contribute

Follow these steps to contribute to the project:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push the branch to your fork (git push origin feature-name).
Submit a pull request. For detailed guidelines on contributing, you can refer to the Contributor Covenant.

## Tests

Render: 
https://candidate-search-app-mod13.onrender.com
