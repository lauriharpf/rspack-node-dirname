"use strict";
(self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || []).push([["src_foo_bar_baz_render_js"], {
"./src/foo/bar/baz/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: function() { return render; }
});
/* harmony import */var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */ "./src/foo/bar/baz/render.css");


function render() {
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = `__dirname: ${'src\foo\bar\baz'}` 
}

}),

}]);