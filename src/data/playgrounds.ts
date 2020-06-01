import * as firebase from "firebase/app";
import "firebase/firestore";

export const playgrounds = [
  {
    id: "blink",
    name: "Blink",
    url: "https://wokwi.com/playground/blink",
    image: "https://wokwi.com/assets/playground/blink/thumbnail.png",
  },
  {
    id: "blink-without-delay-3-leds",
    name: "Blink Without Delay",
    url: "https://wokwi.com/playground/blink-without-delay-3-leds",
    image:
      "https://wokwi.com/assets/playground/blink-without-delay-3-leds/thumbnail.png",
  },
  {
    id: "charlieplexing",
    name: "Charlieplexing",
    url: "https://wokwi.com/playground/charlieplexing",
    image: "https://wokwi.com/assets/playground/charlieplexing/thumbnail.png",
  },
  {
    id: "dice-roller",
    name: "Dice Roller",
    url: "https://wokwi.com/playground/dice-roller",
    image: "https://wokwi.com/assets/playground/dice-roller/thumbnail.png",
  },
  {
    id: "fastled",
    name: "FastLED ColorPalette",
    url: "https://wokwi.com/playground/fastled",
    image: "https://wokwi.com/assets/playground/fastled/thumbnail.png",
  },
  {
    id: "i2c-scanner",
    name: "I²C Scanner",
    url: "https://wokwi.com/playground/i2c-scanner",
    image: "https://wokwi.com/assets/playground/i2c-scanner/thumbnail.png",
  },
  {
    id: "keypad",
    name: "Keypad",
    url: "https://wokwi.com/playground/keypad",
    image: "https://wokwi.com/assets/playground/keypad/thumbnail.png",
  },
  {
    id: "lcd1602-i2c",
    name: "LCD1602 Playground",
    url: "https://wokwi.com/playground/lcd1602-i2c",
    image: "https://wokwi.com/assets/playground/lcd1602-i2c/thumbnail.png",
  },
  {
    id: "serial",
    name: "Serial Monitor",
    url: "https://wokwi.com/playground/serial",
    image: "https://wokwi.com/assets/playground/serial/thumbnail.png",
  },
  {
    id: "seven-segment-clock",
    name: "7 Segment Clock",
    url: "https://wokwi.com/playground/seven-segment-clock",
    image:
      "https://wokwi.com/assets/playground/seven-segment-clock/thumbnail.png",
  },
  {
    id: "neopixel-matrix",
    name: "NeoPixel Matrix",
    url: "https://wokwi.com/playground/neopixel-matrix",
    image: "https://wokwi.com/assets/playground/neopixel-matrix/thumbnail.png",
  },
  {
    id: "neopixel-strip",
    name: "NeoPixel Strip",
    url: "https://wokwi.com/playground/neopixel-strip",
    image: "https://wokwi.com/assets/playground/neopixel-strip/thumbnail.png",
  },
  {
    id: "potentiometer",
    name: "Potentiometer",
    url: "https://wokwi.com/playground/potentiometer",
    image: "https://wokwi.com/assets/playground/potentiometer/thumbnail.png",
  },
  {
    id: "rotary-dialer",
    name: "Rotary Dialer",
    url: "https://wokwi.com/playground/rotary-dialer",
    image: "https://wokwi.com/assets/playground/rotary-dialer/thumbnail.png",
  },
  {
    id: "simon-game",
    name: "Simon Game",
    url: "https://wokwi.com/playground/simon-game",
    image: "https://wokwi.com/assets/playground/simon-game/thumbnail.png",
  },
  {
    id: "spaceship-game",
    name: "Spaceship Game",
    url: "https://wokwi.com/playground/spaceship-game",
    image: "https://wokwi.com/assets/playground/spaceship-game/thumbnail.png",
  },
  {
    id: "traffic-light",
    name: "Traffic Light",
    url: "https://wokwi.com/playground/traffic-light",
    image: "https://wokwi.com/assets/playground/traffic-light/thumbnail.png",
  },
  {
    id: "ssd1306",
    name: "128x64 OLED Display",
    url: "https://wokwi.com/playground/ssd1306",
    image: "https://wokwi.com/assets/playground/ssd1306/thumbnail.png",
  },
];

export async function loadPlaygrounds(
  col: firebase.firestore.CollectionReference
) {
  for (const playground of playgrounds) {
    const copy = { ...playground, votes: 0 };
    delete copy.id;
    await col.doc(playground.id).set(copy);
  }
}
