

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e8EKb7ST.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/index.TEwWPNSA.js"];
export const stylesheets = ["_app/immutable/assets/2.RpjBm7Bu.css"];
export const fonts = [];
