/* this file conatins references to the vendor libraries
we're using in the project. This is used by webpack
in the production build only*. A spearate bundle for vendor
code is useful since it's unlikely to change as ofter
as the application's code. So all the libraries we reference
here will be written to vendor.js so they can be
cached until one of them change. so basically, this avoids
customers having to download a huge JS file anytime a line
of code changes. They only habe to download vendor.js when
a vendor library changes which should be less frequent.
Any files that aren't referenced here will be bundled into
main.js for hte production build.
*/

// eslint-disable-next-line no-unused-vars
import fetch from "whatwg-fetch";
