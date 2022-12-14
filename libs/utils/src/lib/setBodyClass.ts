import { browser, device, os } from '@jam3/detect';

export function setBodyClass() {
  const classes = [
    device.mobile ? 'mobile-device' : '',
    device.touch ? 'touch-device' : '',
    device.type,
    browser.name,
    os.name,
  ].filter(Boolean);
  classes.forEach((c) =>
    document.body.classList.add(c.toLowerCase().split(' ').join('-'))
  );
}
