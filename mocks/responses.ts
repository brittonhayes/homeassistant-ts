export const MOCK_HEALTH = {
  message: "API running.",
};

export const MOCK_CONFIG = {
  components: [
    "sensor.cpuspeed",
    "frontend",
    "config.core",
    "http",
    "map",
    "api",
    "sun",
    "config",
    "discovery",
    "conversation",
    "recorder",
    "group",
    "sensor",
    "websocket_api",
    "automation",
    "config.automation",
    "config.customize",
  ],
  config_dir: "/home/ha/.homeassistant",
  elevation: 510,
  latitude: 45.8781529,
  location_name: "Home",
  longitude: 8.458853651,
  time_zone: "Europe/Zurich",
  unit_system: {
    length: "km",
    mass: "g",
    temperature: "\u00b0C",
    volume: "L",
  },
  version: "0.56.2",
  whitelist_external_dirs: ["/home/ha/.homeassistant/www", "/home/ha/.homeassistant/"],
};

export const MOCK_EVENTS = [
  {
    event: "state_changed",
    listener_count: 5,
  },
  {
    event: "time_changed",
    listener_count: 2,
  },
];

export const MOCK_SERVICES = [
  {
    domain: "browser",
    services: ["browse_url"],
  },
  {
    domain: "keyboard",
    services: ["volume_up", "volume_down"],
  },
];

export const MOCK_LOGBOOK = [
  {
    context_user_id: null,
    domain: "alarm_control_panel",
    entity_id: "alarm_control_panel.area_001",
    message: "changed to disarmed",
    name: "Security",
    when: "2020-06-20T16:44:26.127295+00:00",
  },
  {
    context_user_id: null,
    domain: "homekit",
    entity_id: "alarm_control_panel.area_001",
    message: "send command alarm_arm_night for Security",
    name: "HomeKit",
    when: "2020-06-21T02:59:05.759645+00:00",
  },
  {
    context_user_id: null,
    domain: "alarm_control_panel",
    entity_id: "alarm_control_panel.area_001",
    message: "changed to armed_night",
    name: "Security",
    when: "2020-06-21T02:59:06.015463+00:00",
  },
];

export const MOCK_STATES = [
  {
    attributes: {},
    entity_id: "sun.sun",
    last_changed: "2016-05-30T21:43:32.418320+00:00",
    state: "below_horizon",
  },
  {
    attributes: {},
    entity_id: "process.Dropbox",
    last_changed: "22016-05-30T21:43:32.418320+00:00",
    state: "on",
  },
];

export const MOCK_ERROR_LOG = `15-12-20 11:02:50 homeassistant.components.recorder: Found unfinished sessions
15-12-20 11:03:03 netdisco.ssdp: Error fetching description at http://192.168.1.1:8200/rootDesc.xml
15-12-20 11:04:36 homeassistant.components.alexa: Received unknown intent HelpIntent`;

export const MOCK_CALENDARS = [
  {
    entity_id: "calendar.holidays",
    name: "National Holidays",
  },
  {
    entity_id: "calendar.personal",
    name: "Personal Calendar",
  },
];

export const MOCK_CALENDAR_EVENTS = [
  {
    summary: "Cinco de Mayo",
    start: {
      date: "2022-05-05",
    },
    end: {
      date: "2022-05-06",
    },
  },
  {
    summary: "Birthday Party",
    start: {
      dateTime: "2022-05-06T20:00:00-07:00",
    },
    end: {
      dateTime: "2022-05-06T23:00:00-07:00",
    },
    description: "Don't forget to bring balloons",
    location: "Brian's House",
  },
];
