import React from "react";
import Clock from "./clock";

const allDateMethods = [
  `getDate`,
  `getDay`,
  `getFullYear`,
  `getHours`,
  `getMilliseconds`,
  `getMinutes`,
  `getMonth`,
  `getSeconds`,
  `getTime`,
  `getTimezoneOffset`,
  `getUTCDate`,
  `getUTCDay`,
  `getUTCFullYear`,
  `getUTCHours`,
  `getUTCMilliseconds`,
  `getUTCMinutes`,
  `getUTCMonth`,
  `getUTCSeconds`,
  `getYear`,
  `toDateString`,
  `toGMTString`,
  `toISOString`,
  `toJSON`,
  `toLocaleDateString`,
  `toLocaleString`,
  `toLocaleTimeString`,
  `toTimeString`,
  `toUTCString`,
];
const elements = allDateMethods.map((method) => {
  return <Clock method={method} />;
});

export default function Methods() {
  return <div>{elements}</div>;
}
