# 🔋 battery
#### A battery web-app

This little website allows you to check your battery status on any device.
The primary purpose is to experiment with the new
[Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API).

Planned features:
- [x] Display correct battery percentage
- [x] Visualize battery percentage in battery icon
- [ ] Automatically refresh percentage using battery status events
- [ ] Add charging icon
- [ ] Add animations on changing state (e.g. from charging to discharging)

## Firefox

Unfortunately, Firefox [dropped the support](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API#Browser_compatibility)
for Battery Status API in version 52. Thus, the web-app will not work on newer Firefox version. 🦊❌
