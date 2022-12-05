import "./fetch-polyfill";

import { Fetcher } from "openapi-typescript-fetch";
import * as homeassistant from "./schema";
import { logger } from "./logger";

/**
 * Home Assistant API client properties
 *
 * @example { baseUrl: "http://localhost:8123", token: process.env.HA_TOKEN }
 */
export interface ClientProperties {
  /**
   * The base URL of the Home Assistant instance
   *
   * @default "http://localhost:8123"
   */
  baseUrl?: string;

  /**
   * The Home Assistant API token
   */
  token?: string;

  /**
   * Enable debug logging
   *
   * @default false
   */
  debug?: boolean;
}

/**
 * Home Assistant API Client
 */
export class Client {
  private readonly client = Fetcher.for<homeassistant.paths>();

  /**
   *
   * @param properties Home Assistant client connection properties
   * @returns Home Assistant API Client Fetcher
   */
  constructor(properties: ClientProperties) {
    this.client.configure({
      baseUrl: properties.baseUrl ?? "http://localhost:8123",
      init: {
        headers: {
          Authorization: `Bearer ${properties.token}`,
        },
      },
      use: properties.debug ? [logger] : undefined,
    });

    return this;
  }

  /**
   * API health endpoints
   */
  public readonly health = {
    /**
     * Retrieve the health of the Home Assistant instance
     *
     * @returns Health status of Home Assistant
     */
    retrieve: async () => {
      const get = this.client.path("/api/").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },
  };

  /**
   * Home Assistant configuration
   */
  public readonly config = {
    /**
     * Retrieve the configuration of the Home Assistant instance
     *
     * @returns Home Assistant configuration
     */
    retrieve: async () => {
      const get = this.client.path("/api/config").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },
  };

  /**
   * Home Assistant events endpoint
   */
  public readonly events = {
    /**
     * List all home assistant events
     *
     * @returns List of events
     */
    list: async () => {
      const get = this.client.path("/api/events").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },
  };

  /**
   * Home Assistant services endpoint
   */
  public readonly services = {
    /**
     * List all services
     *
     * @example await homeassistant.services.list();
     * @returns List of available services
     */
    list: async () => {
      const get = this.client.path("/api/services").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },
  };

  /**
   * Home Assistant logbook endpoint
   */
  public readonly logbook = {
    /**
     * List the logbook entries for a given window of time.
     *
     * @param timestamp - The timestamp of the logbook entry
     * @example
     *  // List all logbook entries
     *  await homeassistant.logbook.list();
     *
     *  // List all logbook entries from 2021-01-01
     *  await homeassistant.logbook.list("2021-01-01T00:00:00.000Z");
     * @returns List of logbook entries
     */
    list: async (timestamp?: string) => {
      let get = this.client.path("/api/logbook").method("get").create();
      let requestProperties = {};
      if (timestamp) {
        get = this.client.path("/api/logbook/{timestamp}").method("get").create();
        requestProperties = { timestamp: timestamp };
      }

      const { status, data } = await get(requestProperties);
      return { status, data };
    },
  };

  /**
   * Home Assistant states endpoint
   */
  public readonly states = {
    /**
     * Retrieve the state of a given entity
     *
     * @param entityId - The entity ID of the state
     * @returns The state of the entity
     * @example
     *  // List all states
     *  await homeassistant.states.list();
     *  // List states filtered by entity ID
     *  await homeassistant.states.list('fan.air_purifier');
     */
    retrieve: async (entityId: string) => {
      const get = this.client.path("/api/states/{entity_id}").method("get").create();
      const { status, data } = await get({
        entity_id: entityId,
      });
      return { status, data };
    },

    /**
     * List all home assistant entity states
     *
     * @returns List of states
     * @example await homeassistant.errorlogs.list();
     */
    list: async () => {
      const get = this.client.path("/api/states").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },
  };

  /**
   * Home Assistant error logs endpoint
   */
  public readonly errorlogs = {
    /**
     * List all home assistant error logs. Output is in the format text/plain.
     *
     * @returns List of error logs
     */
    list: async () => {
      const get = this.client.path("/api/error_log").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },
  };

  public readonly calendar = {
    /**
     * List all home assistant calendars
     */
    list: async () => {
      const get = this.client.path("/api/calendars").method("get").create();
      const { status, data } = await get({});
      return { status, data };
    },

    /**
     * List all the events for a given calendar
     *
     * @param entityId - The entity ID of the calendar
     * @returns List of calendar events
     */
    retrieve: async (entityId: string) => {
      const get = this.client.path("/api/calendars/{entity_id}").method("get").create();
      const { status, data } = await get({
        entity_id: entityId,
      });
      return { status, data };
    },
  };

  /**
   * Home Assistant template rendering endpoint
   */
  public readonly template = {
    /**
     * Render a template
     *
     * @param template - The template to render
     * @returns The rendered template in a text/plain response
     */
    render: async (template: string) => {
      const post = this.client.path("/api/template").method("post").create();
      const { status, data } = await post({
        template: template,
      });
      return { status, data };
    },
  };
}
