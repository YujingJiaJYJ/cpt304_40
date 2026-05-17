"use strict";

const storageAvailable = ((prop) => {
  try {
    const storage = window[prop];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch {
    return false;
  }
})("localStorage");
