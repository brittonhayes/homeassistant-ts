/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/** Type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
type OneOf<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
  ? OneOf<[XOR<A, B>, ...Rest]>
  : never;

export interface paths {
  "/api/": {
    /**
     * Returns a message if the API is up and running.
     * @description Returns a message if the API is up and running.
     */
    get: {
      /**
       * Returns a message if the API is up and running.
       * @description Returns a message if the API is up and running.
       */
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["Message"];
          };
        };
      };
    };
  };
  "/api/config": {
    /**
     * Returns the configuration of the Home Assistant instance.
     * @description Returns the configuration of the Home Assistant instance.
     */
    get: {
      /**
       * Returns the configuration of the Home Assistant instance.
       * @description Returns the configuration of the Home Assistant instance.
       */
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["Config"];
          };
        };
      };
    };
  };
  "/api/events": {
    /**
     * Returns an array of event objects. Each event object contains event name and listener count.
     * @description Returns an array of event objects. Each event object contains event name and listener count.
     */
    get: {
      /**
       * Returns an array of event objects. Each event object contains event name and listener count.
       * @description Returns an array of event objects. Each event object contains event name and listener count.
       */
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["Events"];
          };
        };
      };
    };
  };
  "/api/services": {
    /**
     * Returns an array of service objects. Each service object contains domain, service name, and description.
     * @description Returns an array of service objects. Each service object contains domain, service name, and description.
     */
    get: {
      /**
       * Returns an array of service objects. Each service object contains domain, service name, and description.
       * @description Returns an array of service objects. Each service object contains domain, service name, and description.
       */
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["Services"];
          };
        };
      };
    };
  };
  "/api/logbook": {
    /**
     * Returns an array of logbook objects.
     * @description Returns an array of logbook objects.
     */
    get: {
      /**
       * Returns an array of logbook objects.
       * @description Returns an array of logbook objects.
       */
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["Logs"];
          };
        };
      };
    };
  };
  "/api/logbook/{timestamp}": {
    /**
     * Returns an array of logbook entries.
     * @description Returns an array of logbook entries.
     */
    get: {
      /**
       * Returns an array of logbook entries.
       * @description Returns an array of logbook entries.
       */
      parameters: {
        /** @description Timestamp in ISO 8601 format */
        path: {
          timestamp: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["Logs"];
          };
        };
      };
    };
  };
  "/api/states": {
    /**
     * Returns an array of state objects. Each state object contains entity ID, state, and attributes.
     * @description Returns an array of state objects. Each state object contains entity ID, state, and attributes.
     */
    get: {
      /**
       * Returns an array of state objects. Each state object contains entity ID, state, and attributes.
       * @description Returns an array of state objects. Each state object contains entity ID, state, and attributes.
       */
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["States"];
          };
        };
      };
    };
  };
  "/api/states/{entity_id}": {
    /**
     * Returns a state object for the specified entity ID.
     * @description Returns a state object for the specified entity ID.
     */
    get: {
      /**
       * Returns a state object for the specified entity ID.
       * @description Returns a state object for the specified entity ID.
       */
      parameters: {
        /** @description Entity ID */
        path: {
          entity_id: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["State"];
          };
        };
        /** @description Entity not found */
        404: {
          content: {
            "application/json": components["schemas"]["Message"];
          };
        };
      };
    };
  };
  "/api/error_log": {
    /**
     * Returns an array of error logs in a plaintext response.
     * @description Returns an array of error logs in a plaintext response.
     */
    get: {
      /**
       * Returns an array of error logs in a plaintext response.
       * @description Returns an array of error logs in a plaintext response.
       */
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "text/plain": string;
          };
        };
      };
    };
  };
  "/api/calendars": {
    /**
     * Returns an array of calendar objects. Each calendar object contains calendar name, and entity ID.
     * @description Returns an array of calendar objects. Each calendar object contains calendar name, and entity ID.
     */
    get: {
      /**
       * Returns an array of calendar objects. Each calendar object contains calendar name, and entity ID.
       * @description Returns an array of calendar objects. Each calendar object contains calendar name, and entity ID.
       */
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["CalendarEntities"];
          };
        };
      };
    };
  };
  "/api/calendars/{entity_id}": {
    /**
     * Returns an array of calendar event objects for the specified entity ID.
     * @description Returns an array of calendar event objects for the specified entity ID.
     */
    get: {
      /**
       * Returns an array of calendar event objects for the specified entity ID.
       * @description Returns an array of calendar event objects for the specified entity ID.
       */
      parameters: {
        /** @description Entity ID */
        path: {
          entity_id: string;
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "application/json": components["schemas"]["CalendarEvents"];
          };
        };
        /** @description Entity not found */
        404: {
          content: {
            "application/json": components["schemas"]["Message"];
          };
        };
      };
    };
  };
  "/api/template": {
    /**
     * Render a Home Assistant template.
     * @description Render a Home Assistant template.
     */
    post: {
      /**
       * Render a Home Assistant template.
       * @description Render a Home Assistant template.
       */
      requestBody: {
        content: {
          "application/json": components["schemas"]["Template"];
        };
      };
      responses: {
        /** @description Successful response */
        200: {
          content: {
            "text/plain": string;
          };
        };
        /** @description Bad request */
        400: {
          content: {
            "application/json": components["schemas"]["Message"];
          };
        };
      };
    };
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Message: {
      /** @description The message returned by the API. */
      message?: string;
    };
    Config: {
      /** @description The components that are enabled in the Home Assistant instance. */
      components?: string[];
      /** @description The directory where the Home Assistant configuration is stored. */
      config_dir?: string;
      /** @description The elevation of the Home Assistant instance. */
      elevation?: number;
      /** @description The latitude of the Home Assistant instance. */
      latitude?: number;
      /** @description The location name of the Home Assistant instance. */
      location_name?: string;
      /** @description The longitude of the Home Assistant instance. */
      longitude?: number;
      /** @description The time zone of the Home Assistant instance. */
      time_zone?: string;
      /** @description The unit system of the Home Assistant instance. */
      unit_system?: {
        /** @description The length unit of the Home Assistant instance. */
        length?: string;
        /** @description The mass unit of the Home Assistant instance. */
        mass?: string;
        /** @description The pressure unit of the Home Assistant instance. */
        pressure?: string;
        /** @description The temperature unit of the Home Assistant instance. */
        temperature?: string;
        /** @description The volume unit of the Home Assistant instance. */
        volume?: string;
      };
      /** @description The version of the Home Assistant instance. */
      version?: string;
      /** @description The external directories that are whitelisted in the Home Assistant instance. */
      whitelist_external_dirs?: string[];
    };
    /** @description An array of event objects. Each event object contains event name and listener count. */
    Events: components["schemas"]["Event"][];
    Event: {
      /** @description The type of the event. */
      event?: string;
      /** @description The data of the event. */
      listener_count?: Record<string, never>;
    };
    /** @description An array of service objects. Each service object contains domain, service name, and description. */
    Services: components["schemas"]["Service"][];
    Service: {
      /** @description The domain of the service. */
      domain?: string;
      /** @description The names of the services. */
      services?: {
        /** @description The name of the service. */
        name?: string;
        /** @description The description of the service. */
        description?: string;
        /** @description The fields of the service. */
        fields?: Record<string, never>;
        /** @description The target of the service. */
        target?: Record<string, never>;
      }[];
    };
    State: {
      /** @description The attributes of the state. */
      attributes?: Record<string, never>;
      /** @description The entity ID of the state. */
      entity_id?: string;
      /** @description The last changed time of the state. */
      last_changed?: string;
      /** @description The last updated time of the state. */
      last_updated?: string;
      /** @description The state of the state. */
      state?: string;
    };
    /** @description An array of state objects. Each state object contains entity ID, state, attributes, and last changed time. */
    States: components["schemas"]["State"][];
    /** @description An array of calendar objects. Each calendar object contains calendar name, and entity ID. */
    CalendarEntities: components["schemas"]["CalendarEntity"][];
    CalendarEntity: {
      /** @description The name of the calendar. */
      calendar?: string;
      /** @description The entity ID of the calendar. */
      entity_id?: string;
    };
    /** @description An array of calendar event objects. Each calendar event object contains event name, start time, end time, and location. */
    CalendarEvents: components["schemas"]["CalendarEvent"][];
    CalendarEvent: {
      /** @description The summary of the calendar event. */
      summary?: string;
      /** @description The description of the calendar event. */
      description?: string;
      /** @description The location of the calendar event. */
      location?: string;
      start?: OneOf<
        [
          {
            /**
             * Format: date-time
             * @description The start date/time of the calendar event.
             */
            dateTime?: string;
          },
          {
            /**
             * Format: date
             * @description The start date of the calendar event.
             */
            date?: string;
          }
        ]
      >;
      end?: OneOf<
        [
          {
            /**
             * Format: date-time
             * @description The start date/time of the calendar event.
             */
            dateTime?: string;
          },
          {
            /**
             * Format: date
             * @description The start date of the calendar event.
             */
            date?: string;
          }
        ]
      >;
    };
    Template: {
      /** @description The template to render. */
      template?: string;
    };
    /** @description An array of log objects. Each log object contains log level, timestamp, source, and message. */
    Logs: components["schemas"]["Log"][];
    Log: {
      /** @description The user id context of the log */
      context_user_id?: string;
      /** @description The domain of the log. */
      domain?: string;
      /** @description The entity id of the log. */
      entity_id?: string;
      /** @description The message of the log. */
      message?: string;
      /** @description The name of the log. */
      name?: string;
      /**
       * Format: date-time
       * @description The timestamp of the log.
       */
      when?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export type operations = Record<string, never>;
