# Candidate Search Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is a candidate search application built with **React, TypeScript, and Vite**. The application allows employers to search for potential candidates using the GitHub API, review their details, and save preferred candidates. The interface is clean, responsive, and designed to streamline the candidate review process. Below is an example of what the application looks like. A direct link to the deployed application is provided in the "Questions" section below.

![Candidate-Search-img](https://github.com/user-attachments/assets/aa35aa8b-90a0-4026-8584-869f25acc283)


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install this project, you can clone it from the GitHub repository linked in the "Questions" section below.

```bash
git clone https://github.com/Sinnema1/candidate-search.git
cd main
npm install
```

## Usage

To use this project locally:

1. **Set up Environment Variables**:  
   Create an `.env` file in the `environment` directory with your GitHub API token:

   ```plaintext
   VITE_GITHUB_TOKEN=your_github_api_token
   ```

2. **Run the Development Server**:

   ```bash
   npm run dev
   ```
3. **Access the Application**:  
   Open [http://localhost:5173](http://localhost:5173) in your browser to use the application.

### Deployment on Render

This project is deployed as a Static Site on **Render**. The deployment process involves:

- **Build Command**: `npm install && npm run build`  
- **Publish Directory**: `dist`

## License

This application is covered under the MIT license.

## Contributing

Anyone may contribute to this project, there are no restrictions. To contribute:

1. Fork the repository.
2. Create a new branch for your changes.
3. Submit a pull request with your updates.

## Tests

After cloning, you can ensure that the application is working by running the following commands:

1. Install dependencies:

   ```bash
   npm install
   ```
2. Run the application:

   ```bash
   npm run dev
   ```
3. **Open [http://localhost:5173](http://localhost:5173) and navigate through the application to verify functionality.**

## Questions

- **Project Link**: [Candidate Search Deployment](https://candidate-search-czd2.onrender.com)
- **GitHub**: [Sinnema1](https://github.com/Sinnema1)
- **Contact**: You can reach me with additional questions at [test@test.com](mailto:test@test.com).
