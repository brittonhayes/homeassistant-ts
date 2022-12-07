# 🏠 Home Assistant - Typescript SDK

[![CI](https://github.com/brittonhayes/homeassistant-ts/actions/workflows/ci.yml/badge.svg)](https://github.com/brittonhayes/homeassistant-ts/actions/workflows/ci.yml)

📚 [SDK Docs](https://github.com/brittonhayes/homeassistant-ts/tree/main/docs)

📚 [OpenAPI 3.x Spec](https://github.com/brittonhayes/homeassistant-ts/tree/main/openapi.yaml)

This is typescript REST API client for the [Home Assistant](https://www.home-assistant.io/) API. Allows you to interact with your Home Assistant instance from Typescript/JS projects.

## ⚡ Usage

How to use the library


### 📦 Installation

```bash
npm install @brittonhayes/homeassistant-ts
```

### 🚀 Quickstart

Create a client

```ts
import * as homeassistant from '@brittonhayes/homeassistant-ts';

const ha = new homeassistant.Client({
    baseUrl: process.env.HASS_URL,
    token: process.env.HASS_TOKEN,
});
```

List all home assistant services

```ts
const services = await ha.services.list();
console.log(services);
```

List all logbook entries (as plaintext)

```ts
const logs = await ha.logbook.list();
console.log(logs);
```

Retrieve all calendar events from a calendar

```ts
const calendar = await ha.calendars.retrieve('calendar.calendar_name');
console.log(calendar);
```

### Development

```shell
# Install dependencies
npm install
# Format the code
npm run format
# Build the library
npm run build
```