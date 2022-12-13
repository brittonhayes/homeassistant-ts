import { rest } from "msw";
import {
  MOCK_HEALTH,
  MOCK_CONFIG,
  MOCK_EVENTS,
  MOCK_SERVICES,
  MOCK_LOGBOOK,
  MOCK_STATES,
  MOCK_ERROR_LOG,
  MOCK_CALENDARS,
  MOCK_CALENDAR_EVENTS,
} from "./responses";

const API_URL = "http://localhost:8123";

export const handlers = [
  rest.get(API_URL + "/api/", (req, res, ctx) => {
    return res(ctx.json(MOCK_HEALTH));
  }),
  rest.get(API_URL + "/api/config", (req, res, ctx) => {
    return res(ctx.json(MOCK_CONFIG));
  }),
  rest.get(API_URL + "/api/events", (req, res, ctx) => {
    return res(ctx.json(MOCK_EVENTS));
  }),
  rest.get(API_URL + "/api/services", (req, res, ctx) => {
    return res(ctx.json(MOCK_SERVICES));
  }),
  rest.get(API_URL + "/api/logbook", (req, res, ctx) => {
    return res(ctx.json(MOCK_LOGBOOK));
  }),
  rest.get(API_URL + "/api/logbook/:timestamp", (req, res, ctx) => {
    return res(ctx.json(MOCK_LOGBOOK));
  }),
  rest.get(API_URL + "/api/states", (req, res, ctx) => {
    return res(ctx.json(MOCK_STATES));
  }),
  rest.get(API_URL + "/api/states/:entity_id", (req, res, ctx) => {
    return res(ctx.json(MOCK_STATES));
  }),
  rest.get(API_URL + "/api/error_log", (req, res, ctx) => {
    return res(ctx.text(MOCK_ERROR_LOG));
  }),
  rest.get(API_URL + "/api/calendars", (req, res, ctx) => {
    return res(ctx.json(MOCK_CALENDARS));
  }),
  rest.get(API_URL + "/api/calendars/:entity_id", (req, res, ctx) => {
    return res(ctx.json(MOCK_CALENDAR_EVENTS));
  }),
];
