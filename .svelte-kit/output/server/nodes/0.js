import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.zSi98A-H.js","_app/immutable/chunks/scheduler.k-kUyWhY.js","_app/immutable/chunks/index.TEwWPNSA.js"];
export const stylesheets = ["_app/immutable/assets/0.UliOhwic.css"];
export const fonts = ["_app/immutable/assets/bootstrap-icons.2eO-ad8Y.woff2","_app/immutable/assets/bootstrap-icons.NpS-Zr3P.woff"];
