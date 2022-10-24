var _jsxFileName = "/Users/hanhnguyen/Documents/SOURCE CODE/ktn-dapp/src/main.tsx";
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=808e0cb1"; const Suspense = __vite__cjsImport0_react["Suspense"];
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=808e0cb1"; const ReactDOM = __vite__cjsImport1_reactDom_client.__esModule ? __vite__cjsImport1_reactDom_client.default : __vite__cjsImport1_reactDom_client;
import "/src/assets/styles/main.css?t=1666582738499";
import App from "/src/App.tsx?t=1666582738499";
import { store } from "/src/app/store.ts";
import { Provider } from "/node_modules/.vite/deps/react-redux.js?v=808e0cb1";
import { ThemeProvider } from "/node_modules/.vite/deps/@mui_material_styles.js?v=808e0cb1";
import { theme } from "/src/theme.tsx";
import PageLoading from "/src/pages/PageLoading.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=808e0cb1"; const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"];
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ _jsxDEV(ThemeProvider, {
  theme,
  children: /* @__PURE__ */ _jsxDEV(Provider, {
    store,
    children: /* @__PURE__ */ _jsxDEV(Suspense, {
      fallback: /* @__PURE__ */ _jsxDEV(PageLoading, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 28
      }, this),
      children: /* @__PURE__ */ _jsxDEV(App, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 15,
  columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQUFBLFNBQWNBLGdCQUFlO0FBQzdCLE9BQU9DLGNBQWM7QUFDckIsT0FBTztBQUNQLE9BQU9DLFNBQVM7QUFDaEIsU0FBU0MsYUFBYTtBQUN0QixTQUFTQyxnQkFBZ0I7QUFDekIsU0FBU0MscUJBQXFCO0FBQzlCLFNBQVNDLGFBQWE7QUFDdEIsT0FBT0MsaUJBQWlCO0FBR3hCO0FBRUFOLFNBQVNPLFdBQVdDLFNBQVNDLGVBQWUsTUFBTSxDQUFFLEVBQUVDLE9BQ3BELHdCQUFDLGVBQWE7QUFBQSxFQUFDO0FBQUEsRUFBYSxVQUMxQix3QkFBQyxVQUFRO0FBQUEsSUFBQztBQUFBLElBQWEsVUFDckIsd0JBQUMsVUFBUTtBQUFBLE1BQUUsVUFBVSx3QkFBQyxhQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFJLFVBQ25DLHdCQUFDLEtBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDRyIsIm5hbWVzIjpbIlN1c3BlbnNlIiwiUmVhY3RET00iLCJBcHAiLCJzdG9yZSIsIlByb3ZpZGVyIiwiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiUGFnZUxvYWRpbmciLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYW5obmd1eWVuL0RvY3VtZW50cy9TT1VSQ0UgQ09ERS9rdG4tZGFwcC9zcmMvbWFpbi50c3giXSwiZmlsZSI6Ii9Vc2Vycy9oYW5obmd1eWVuL0RvY3VtZW50cy9TT1VSQ0UgQ09ERS9rdG4tZGFwcC9zcmMvbWFpbi50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse1N1c3BlbnNlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xuaW1wb3J0ICdAL2Fzc2V0cy9zdHlsZXMvbWFpbi5jc3MnXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL2FwcC9zdG9yZSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgUGFnZUxvYWRpbmcgZnJvbSAnLi9wYWdlcy9QYWdlTG9hZGluZydcblxuLy9CMTogY2FsbCBjcmVhdGUgbWV0YWRhdGEgQjI6Y2FsbCBTTUMgbWludCA9PiBCU0MgXG4vL0IxOiBDYWxsIGNyZWF0ZSBvcmRlciBCMjogY2FsbCBTTUMgdHJhbmZlciBCMzogY2FsbCBsb2cgdHggQjQgbGlzdGVuIGV2ZW50IGF3YWl0ID0+IEVUSCAuLi5cblxuUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpISkucmVuZGVyKFxuICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPFN1c3BlbnNlICBmYWxsYmFjaz17PFBhZ2VMb2FkaW5nIC8+fT5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICA8L1Byb3ZpZGVyPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4gICxcbilcblxuXG4iXX0=