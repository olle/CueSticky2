import { trigger, handler } from "flyps";

(function() {
  let RESIZING = false;
  window.addEventListener("resize", evt => {
    if (RESIZING === false) {
      setTimeout(() => trigger("window-will-be-resized"), 1);
    } else {
      window.clearTimeout(RESIZING);
    }
    RESIZING = window.setTimeout(() => {
      trigger("window-was-resized", {
        width: window.innerWidth,
        height: window.innerHeight
      });
      RESIZING = false;
    }, 100);
  });
})();

handler("window-will-be-resized", () => {
  document["body"].style.opacity = 0.1;
});

handler("window-was-resized", ({ db }, __, { width, height }) => {
  document["body"].style.opacity = 1;
  let layout = width > height ? "landscape" : "portrait";
  return { db: { ...db, window: { ...db.window, layout: layout } } };
});
