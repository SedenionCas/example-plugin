# Sedenion Example Plugin README

## Overview

The Sedenion Example Plugin is an extension for the Sedenion calculator, designed to demonstrate how to create and integrate custom functionality into the calculator. This README provides an overview of the plugin, installation instructions, and usage guidelines.

## Setting up

1. Clone Sedenion

```bash
git clone https://github.com/SedenionCas/sedenion
```

2. Clone this repository

```bash
git clone https://github.com/SedenionCas/example-plugin
```

3. Load the plugin into Sedenion

_package.json_

```json
{
   ...
   "dependencies": {
      ...
      "plugin-name": "file:<path to plugin>"
   },
   ...
}
```

## Documentation

For detailed documentation and information on how to use specific features of this plugin, please refer to the documentation provided in [docs](https://docs.sedenion.net).

## Checklist
To ensure that your plugin is ready for release, please ensure that you have completed the following checklist:
1. Unsubscribe from all events and listeners in deactivate()
2. Everything is theme friendly
3. You have readme.md

## Guidelines
- All events/listeners are prefixed by your plugin name
- plugins and themes must not:
   - Obfuscate code to hide its purpose
   - Insert dynamic ads
   - Collect telemetry data client side

## Disclosures
The following have to be indicated clearly in the readme.md
- Payment is required for full access
- An account is required to use the plugin
- Network access. Clearly indicate what data is sent where and why
- Static ads or popups
- Server-side telemetry. Link to the privacy policy must be included.
- Closed source code. We will handle this on a case by case basis.

## Removing plugins and themes
In case of a policy violation, we may attempt to contact the developer and provide a reasonable timeframe for them to resolve the problem.

If the problem isn't resolved by then, we'll remove plugins or themes from our directory.

We may immediately remove a plugin or theme if:

    The plugin or theme appears to malicious.
    The developer is uncooperative.
    This is a repeated violation.

In addition, we may also remove plugins or themes that have become unmaintained or severely broken.

## License

This plugin is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute it as per the terms of the license.

## Contact

For any questions, issues, or feedback related to this plugin, please open issue at the issues tab on the GitHub repository.

## Acknowledgments

We would like to thank the Sedenion calculator community for their support and contributions to this project.

Enjoy using the Sedenion Example Plugin with your Sedenion calculator!
