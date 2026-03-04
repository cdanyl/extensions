/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Advanced - Display a prompt when copying is successful. */
  "showCopyTip": boolean,
  /**  - Show the path or URL of the most recent copy in the subtitle of the command. */
  "showLastCopy": boolean,
  /**  - Show the tab title of the browser when copying the URL of the current browser tab. */
  "showTabTitle": boolean,
  /**  - Replace the home directory in copied paths with '~' for a cleaner look. */
  "useTildeForHome": boolean,
  /** Multi-path Separator - The separator between paths when copying multiple file paths. */
  "multiPathSeparator": "
" | " " | "," | ";" | ":",
  /** URL Format - When copying URLs, select what to copy. */
  "copyUrlContent": "Original" | "Protocol://host/pathname" | "Protocol://host" | "Host",
  /** Unsupported App Action - When copying, select what to copy when the app is not supported. */
  "copyWhenUnSupported": "none" | "windowTitle" | "appName" | "appPath" | "bundleId",
  /** URL Cleanup - Optionally remove tracking parameters or strip query and fragment. */
  "urlCleanupMode": "none" | "removeTracking" | "removeQueryAndFragment"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `copy-path` command */
  export type CopyPath = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `copy-path` command */
  export type CopyPath = {}
}

