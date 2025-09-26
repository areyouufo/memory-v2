import autoprefixer from "autoprefixer";
import { plugin } from "postcss";

export default {
    plugin: {
        autoprefixer:{
            overrideBrowserslist:['>0.1%', 'last 2 versions', 'nod dead']
        }
    }
}