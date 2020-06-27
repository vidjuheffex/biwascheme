import BiwaScheme from "./main.js";
import { jsonp_receiver } from "./library/webscheme_lib.js"

window.BiwaScheme = window.BiwaScheme || {};
Object.assign(window.BiwaScheme, BiwaScheme);
window.BiwaScheme.jsonp_receiver = jsonp_receiver;
window.BiwaScheme.on_node = false;
