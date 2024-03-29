/*! For license information please see stories-Usage-stories-mdx.59510b37.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_ravenpay_raven_bank_ui=self.webpackChunk_ravenpay_raven_bank_ui||[]).push([[528],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/Usage.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:function(){return __page}});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__("./src/stories/assets/code-brackets.svg"),__webpack_require__("./src/stories/assets/colors.svg"),__webpack_require__("./src/stories/assets/comments.svg"),__webpack_require__("./src/stories/assets/direction.svg"),__webpack_require__("./src/stories/assets/flow.svg"),__webpack_require__("./src/stories/assets/plugin.svg"),__webpack_require__("./src/stories/assets/repo.svg"),__webpack_require__("./src/stories/assets/stackalt.svg"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_11__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Introduction/Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("style",{children:"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 900;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px 30px 20px 15px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span {\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h1,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.p,{children:"The Raven Bank UI library follows a naming convention based on atomic design principles.\nThis means that the components are broken down into smaller, reusable elements such as buttons,\nforms, and typography. These elements are then combined to form more complex components, such as a login form or a navigation menu. The naming convention used follows a BEM (Block, Element, Modifier) syntax, which helps to keep the CSS organized and consistent across components."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.p,{children:"Users can interact with the Raven Bank UI library through the use of Storybook, which is a development environment for UI components. Storybook allows users to view, test, and interact with components in isolation, making it easier to develop and maintain complex UIs. Users can also customize and export code from Storybook for use in their projects."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.p,{children:"To customize the Raven Bank UI library, users can override the default styles by creating their own CSS classes and applying them to the components. This allows for a high level of customization while still maintaining the core functionality of the components. Additionally, users can export the components as individual modules, allowing for easy integration into existing projects."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.p,{children:'One important convention to note is that most of the components in the Raven Bank UI library are named with the prefix "Raven", such as "RavenTooltip" and "RavenButton". This naming convention helps to distinguish the components from those in other libraries and also provides consistency across the library.'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.p,{children:"Overall, the naming conventions and use of Storybook make it easy for users to interact with and customize the Raven Bank UI library for their specific needs."})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction/Usage",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_11__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},__webpack_exports__.default=componentMeta},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/assets/code-brackets.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg"},"./src/stories/assets/colors.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.a4bd0486.svg"},"./src/stories/assets/comments.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.a3859089.svg"},"./src/stories/assets/direction.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.b770f9af.svg"},"./src/stories/assets/flow.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.edad2ac1.svg"},"./src/stories/assets/plugin.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.d494b228.svg"},"./src/stories/assets/repo.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.6d496322.svg"},"./src/stories/assets/stackalt.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg"}}]);