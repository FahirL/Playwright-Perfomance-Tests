# Playwright-Perfomance-Tests - description
This repository contains performance tests using Playwright for measuring various performance metrics of web applications, such as first meaningful paint, total blocking time, and time to DOM content loaded.

# About tests
Playwright-Perfomance-Tests/tests/domContentLoadTest.js  
This test uses Playwright to launch a new Chromium browser and navigate to the Google homepage. It then waits for the DOM Content Loaded event to fire before measuring the time it took to reach that point. Finally, it logs the result and checks whether the time was within an acceptable range.

Playwright-Perfomance-Tests/tests/fmp-test.js  
This test measures the time it takes for the first important image to load on the Facebook homepage, which is identified using its URL. It checks that the image loads within 2.5 seconds and logs the result to the console.

Playwright-Perfomance-Tests/tests/loadTimeTest.js.js  
This script measures the time it takes for a webpage to load using the Playwright testing framework. It navigates to the URL demo.guru99.com/test/login.html and records the start and end times of the page load. It then calculates the page load time by subtracting the start time from the end time, and logs the result to the console.
The code then uses an assertion to verify that the page loaded within 4.5 seconds. If the page load time exceeds this limit, the assertion will fail and an error message will be displayed in the console.
Finally, the browser instance is closed.


# Playwright Performance Tests

This project contains a suite of performance tests using [Playwright](https://playwright.dev/), a Node.js library to automate Chromium, Firefox and WebKit with a single API.

## Getting Started

### Prerequisites

To run these tests, you'll need to have Node.js and npm installed on your machine. You can download them from the official Node.js website: https://nodejs.org/.

### Installation

1. Clone the repository:
git clone https://github.com/FahirL/Playwright-Perfomance-Tests.git

2. Install dependencies:
npm install

### Usage

To run the tests:
npm run test
### Configuration

You can configure the tests by editing the `playwright.config.js` file. See the [Playwright documentation](https://playwright.dev/docs/test-configuration/) for more information.

## Contributing

Contributions to this project are welcome! Please see the [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE).
