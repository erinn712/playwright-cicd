import { defineConfig, devices } from '@playwright/test';
import os from 'os';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['html'],
    ['allure-playwright', {
      environmentInfo: {
        os_platform: os.platform(),
        os_release: os.release(),
        os_version: os.version(),
        node_version: process.version,
      }
    }]
  ],
  use: {
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],
});
