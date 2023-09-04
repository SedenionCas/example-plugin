import { Icon } from "@tabler/icons-react";
import React from "react";
import { JSX } from "react";
import { PluginStore } from "react-pluggable";
import "./plugin.css";
import {
  IPanelPlugin,
  Icon3dCubeSphere,
  LazySuspense,
  Setting,
  SettingSection,
} from "sedenion-plugin-types";

class ExamplePlugin implements IPanelPlugin {
  icon: Icon = Icon3dCubeSphere;
  namespace: string = "example";
  version: string = "2.0.0";
  index: number = 0;
  pluginStore!: PluginStore;

  // Settings are automatically placed in the settings panel
  settings: SettingSection[] = [
    // Settings are divided into sections
    {
      // Every section needs to have a name and an array of settings
      name: "Example Settings",
      settings: [
        // The type of settings is automatically inferred from the default value
        // The options are string, number, boolean, string[]
        new Setting(
          "Example Setting 1",
          "example of text input",
          "Initial value"
        ),
        new Setting("Example Setting 2", "example of number input", 0),
        new Setting("Example Setting 3", "example of boolean input", true),
        // When using string[] type, you can provide a default value to pick form the array
        // If none is specified, the first option will be picked
        new Setting(
          "Example Setting 4",
          "example of string array input",
          ["Option1", "Option2", "Option3"],
          "Option2"
        ),
      ],
    },
  ];

  // Display is called when the plugin is displayed
  // You should return a JSX element here just remember to lazy load it
  display(): JSX.Element {
    const LazyPanel = React.lazy(() => import("./Panel"));

    return (
      <LazySuspense>
        <LazyPanel />
      </LazySuspense>
    );
  }

  // Get dependencies should return an array of plugin names and versions
  // that this plugin depends on
  getDependencies(): string[] {
    return [];
  }

  // Activate is called when the plugin is activated
  // You should register all functions and events here
  activate(): void {

    // Register the display function
    // Note that it needs to be prefixed with the namespace
    this.pluginStore.executeFunction(
      "Renderer.add",
      `${this.namespace}.display`,
      this.display
  );
  }

  // Deactivate is called when the plugin is deactivated
  // Always remember to unregister all functions and events here
  deactivate(): void {
    // Unregister the display function
    // Always remember to unregister all functions and events here
    this.pluginStore.removeFunction(`${this.namespace}.display`);
  }

  // Generally you don't need to modify this function
  // Get plugin name should return the name in the format of
  // namespace@version
  getPluginName(): string {
    return `${this.namespace}@${this.version}`;
  }

  // Generally you don't need to modify this function
  // Init is called when the plugin is initialized
  // To register functions or events you should use activate instead
  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  // Generally you don't need to modify this function
  // They are used in the panel id system
  incrementIndex(): void {
    this.index++;
  }
  getIndex(): number {
    return this.index;
  }
}

export { ExamplePlugin };
