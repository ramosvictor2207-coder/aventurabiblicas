import { createElement, useEffect } from "react";

const MEDIA_ID = "i3esavj8ly";

function loadScript(src: string, type?: string) {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const el = document.createElement("script");
  el.src = src;
  el.async = true;
  if (type) el.type = type;
  document.head.appendChild(el);
}

/** Vídeo vertical (9:16) da Wistia. Os scripts do player carregam uma única vez, no navegador. */
export function WistiaVideo() {
  useEffect(() => {
    loadScript("https://fast.wistia.com/player.js");
    loadScript(`https://fast.wistia.com/embed/${MEDIA_ID}.js`, "module");
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl bg-muted shadow-2xl">
      <style>{`wistia-player[media-id='${MEDIA_ID}']:not(:defined){background:center / contain no-repeat url('https://fast.wistia.com/embed/medias/${MEDIA_ID}/swatch');display:block;filter:blur(5px);padding-top:177.78%;}`}</style>
      {createElement("wistia-player", { "media-id": MEDIA_ID, aspect: "0.5625" })}
    </div>
  );
}
