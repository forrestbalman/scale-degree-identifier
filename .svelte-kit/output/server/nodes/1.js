

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.r8MxFKru.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/index.TEwWPNSA.js","_app/immutable/chunks/singletons.U2un4Fdf.js"];
export const stylesheets = [];
export const fonts = [];
