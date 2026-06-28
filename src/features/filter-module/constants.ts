import type { SelectItem } from "shared/ui";

export const FILTER_GAME_TYPE_NAME = "Game Type";
export const FILTER_GAME_TYPE_VALUES: SelectItem[] = [
  { text: "All", value: "" },
  { text: "VS", value: "vs" },
  { text: "Other", value: "other" },
];

export const FILTER_PLATFORM_NAME = "Platform";
export const FILTER_PLATFORM_VALUES: SelectItem[] = [
  { text: "All", value: "" },
  { text: "Mobile", value: "MOBILE" },
  { text: "Web", value: "WEB" },
  { text: "Download", value: "DOWNLOAD" },
];
