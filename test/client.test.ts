import { Client } from "../src/client";

import { server } from "../mocks/server";
import {
  MOCK_CALENDARS,
  MOCK_CALENDAR_EVENTS,
  MOCK_CONFIG,
  MOCK_ERROR_LOG,
  MOCK_EVENTS,
  MOCK_HEALTH,
  MOCK_LOGBOOK,
  MOCK_SERVICES,
  MOCK_STATES,
} from "../mocks/responses";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const client = new Client({
  baseUrl: "http://localhost:8123",
});

describe("health", () => {
  it("retrieve instance health", async () => {
    const response = await client.health.retrieve();
    expect(response).toMatchObject({ status: 200, data: MOCK_HEALTH });
  });
});

describe("config", () => {
  it("retrieve instance configuration", async () => {
    const response = await client.config.retrieve();
    expect(response).toMatchObject({ status: 200, data: MOCK_CONFIG });
  });
});

describe("events", () => {
  it("list events", async () => {
    const response = await client.events.list();
    expect(response).toMatchObject({ status: 200, data: MOCK_EVENTS });
  });
});

describe("services", () => {
  it("list services", async () => {
    const response = await client.services.list();
    expect(response).toMatchObject({ status: 200, data: MOCK_SERVICES });
  });
});

describe("logbook", () => {
  it("list logbook entries", async () => {
    const response = await client.logbook.list();
    expect(response).toMatchObject({ status: 200, data: MOCK_LOGBOOK });
  });
});

describe("states", () => {
  it("list entity states", async () => {
    const response = await client.states.list();
    expect(response).toMatchObject({ status: 200, data: MOCK_STATES });
  });
});

describe("errorlogs", () => {
  it("retrieve error logs in plaintext format", async () => {
    const response = await client.errorlogs.list();
    expect(response).toMatchObject({ status: 200, data: MOCK_ERROR_LOG });
  });
});

describe("calendars", () => {
  it("list calendars", async () => {
    const response = await client.calendar.list();
    expect(response).toMatchObject({ status: 200, data: MOCK_CALENDARS });
  });

  it("retrieve events for calendar", async () => {
    const response = await client.calendar.retrieve("calendar.calendar");
    expect(response).toMatchObject({ status: 200, data: MOCK_CALENDAR_EVENTS });
  });
});
