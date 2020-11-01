webpackHotUpdate("app",{

/***/ "./src/Widget.js":
/*!***********************!*\
  !*** ./src/Widget.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _widgettype_Comparative__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgettype/Comparative */ "./src/widgettype/Comparative.js");
/* harmony import */ var _widgettype_GeoWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgettype/GeoWidget */ "./src/widgettype/GeoWidget.js");
/* harmony import */ var _widgettype_demo_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgettype/demo/Grid */ "./src/widgettype/demo/Grid.js");
/* harmony import */ var _widgettype_demo_RatingMeter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgettype/demo/RatingMeter */ "./src/widgettype/demo/RatingMeter.js");
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tools */ "./src/Tools.js");
/* harmony import */ var _globalstate_GlobalStateProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globalstate/GlobalStateProvider */ "./src/globalstate/GlobalStateProvider.js");
/* harmony import */ var _layout_SouthEastSizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/SouthEastSizer */ "./src/layout/SouthEastSizer.js");
/* harmony import */ var _Widget_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Widget.css */ "./src/Widget.css");
/* harmony import */ var _Widget_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Widget_css__WEBPACK_IMPORTED_MODULE_8__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var Widget = function Widget(props) {
  var widgetRecord = props.widgetRecord;

  var _useGlobalState = Object(_globalstate_GlobalStateProvider__WEBPACK_IMPORTED_MODULE_6__["useGlobalState"])(),
      _useGlobalState2 = _slicedToArray(_useGlobalState, 2),
      _useGlobalState2$ = _useGlobalState2[0],
      userName = _useGlobalState2$.userName,
      dashboardData = _useGlobalState2$.dashboardData,
      widgetData = _useGlobalState2$.widgetData,
      dispatch = _useGlobalState2[1];

  var style = {
    left: widgetRecord.properties.position.x,
    top: widgetRecord.properties.position.y,
    width: widgetRecord.properties.size.width,
    height: widgetRecord.properties.size.height,
    id: widgetRecord.id
  };
  var Specific = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, " ", widgetRecord.type, " ");

  switch (widgetRecord.type) {
    case 'grid':
      Specific = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgettype_demo_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        widgetRecord: widgetRecord
      });
      break;

    case 'ratingmeter':
      Specific = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgettype_demo_RatingMeter__WEBPACK_IMPORTED_MODULE_4__["default"], {
        widgetRecord: widgetRecord
      });
      break;

    case 'comparative':
    case 'multiComparative':
    case 'gauge':
    case 'mix':
    case 'comparativeTimeSeries':
    case 'shareTrend':
    case 'crossTab':
    case 'dimensionException':
    case 'exceptionTimeSeries':
    case 'mmTrend':
    case 'scattergram':
    case 'trend':
    case 'waterfall':
      Specific = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgettype_Comparative__WEBPACK_IMPORTED_MODULE_1__["default"], {
        widgetRecord: widgetRecord
      });
      break;

    case 'geoWidget':
      Specific = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_widgettype_GeoWidget__WEBPACK_IMPORTED_MODULE_2__["default"], {
        widgetRecord: widgetRecord
      });
      break;
  }

  var findAncestor = function findAncestor(el, cls) {
    if (el.classList.contains(cls)) {
      return el;
    }

    while ((el = el.parentElement) && !el.classList.contains(cls)) {
      ;
    }

    return el;
  };

  var onMouseDownForMove = function onMouseDownForMove(e) {
    e.stopPropagation();
    var startX = e.clientX;
    var startY = e.clientY;
    var par = findAncestor(e.target, 'widget');

    if (par == null) {
      return;
    }

    function doDrag(e) {
      par.style.left = startLeft + e.clientX - startX + 'px';
      par.style.top = startTop + e.clientY - startY + 'px';
      par.style.width = startWidth;
      par.style.height = startHeight;
    }

    function stopDrag(e) {
      dispatch({
        type: 'RESIZE_WIDGET',
        payload: {
          id: widgetRecord.id,
          w: par.style.width,
          h: par.style.height
        }
      });
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
    }

    var startLeft = parseInt(document.defaultView.getComputedStyle(par).left, 10);
    var startTop = parseInt(document.defaultView.getComputedStyle(par).top, 10);
    var startWidth = parseInt(document.defaultView.getComputedStyle(par).width, 10);
    var startHeight = parseInt(document.defaultView.getComputedStyle(par).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
  };

  var onMouse = function onMouse(e, display) {
    e.stopPropagation();

    function findAncestor(el, cls) {
      if (el.classList.contains(cls)) {
        return el;
      }

      while ((el = el.parentElement) && !el.classList.contains(cls)) {
        ;
      }

      return el;
    }

    var w = findAncestor(e.target, 'widget');

    if (w != null) {
      w.getElementsByClassName("tools")[0].style.display = display;
      w.getElementsByClassName("southeastsizer")[0].style.display = display;
    }
  };

  var _onClick = function onClick(e, display) {
    //e.stopPropagation();
    dispatch({
      type: 'ACTIVATE_WIDGET',
      payload: {
        id: widgetRecord.id
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    className: "widget bordershadow ".concat(widgetRecord.active ? "active" : ""),
    onClick: function onClick(e) {
      _onClick(e);
    },
    onMouseEnter: function onMouseEnter(e) {
      onMouse(e, 'block');
    },
    onMouseLeave: function onMouseLeave(e) {
      onMouse(e, 'none');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onMouseDown: function onMouseDown(e) {
      onMouseDownForMove(e);
    },
    style: {
      cursor: 'move',
      position: 'relative',
      display: 'flex',
      flexDirection: 'rows',
      justifyContent: 'space-between',
      borderBottom: '0px solid lightgray',
      padding: '0 0 5px 0',
      height: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 'bold',
      paddingTop: '3px'
    }
  }, widgetRecord.defaultTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tools__WEBPACK_IMPORTED_MODULE_5__["default"], {
    widgetRecord: widgetRecord
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'rows',
      justifyContent: 'space-between',
      borderBottom: '0px solid lightgray',
      padding: '0 0 5px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '12px'
    }
  }, "breadcrumb  >  more  >  more")), Specific, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'rows',
      justifyContent: 'space-between',
      borderBottom: '0px solid lightgray',
      padding: '5px 0 0 0',
      height: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 'bold',
      paddingTop: '3px'
    }
  }, "footer left"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 'bold',
      paddingTop: '3px'
    }
  }, "(", widgetRecord.id, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_SouthEastSizer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    widgetRecord: widgetRecord
  }));
};

__signature__(Widget, "useGlobalState{[{userName,dashboardData,widgetData}, dispatch]}", function () {
  return [_globalstate_GlobalStateProvider__WEBPACK_IMPORTED_MODULE_6__["useGlobalState"]];
});

var _default = Widget;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Widget, "Widget", "C:\\code\\dashboard-server\\Projects\\SDM\\client\\react-custom\\src\\Widget.js");
  reactHotLoader.register(_default, "default", "C:\\code\\dashboard-server\\Projects\\SDM\\client\\react-custom\\src\\Widget.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvV2lkZ2V0LmpzIl0sIm5hbWVzIjpbIldpZGdldCIsInByb3BzIiwid2lkZ2V0UmVjb3JkIiwidXNlR2xvYmFsU3RhdGUiLCJ1c2VyTmFtZSIsImRhc2hib2FyZERhdGEiLCJ3aWRnZXREYXRhIiwiZGlzcGF0Y2giLCJzdHlsZSIsImxlZnQiLCJwcm9wZXJ0aWVzIiwicG9zaXRpb24iLCJ4IiwidG9wIiwieSIsIndpZHRoIiwic2l6ZSIsImhlaWdodCIsImlkIiwiU3BlY2lmaWMiLCJ0eXBlIiwiZmluZEFuY2VzdG9yIiwiZWwiLCJjbHMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJvbk1vdXNlRG93bkZvck1vdmUiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwic3RhcnRYIiwiY2xpZW50WCIsInN0YXJ0WSIsImNsaWVudFkiLCJwYXIiLCJ0YXJnZXQiLCJkb0RyYWciLCJzdGFydExlZnQiLCJzdGFydFRvcCIsInN0YXJ0V2lkdGgiLCJzdGFydEhlaWdodCIsInN0b3BEcmFnIiwicGF5bG9hZCIsInciLCJoIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFyc2VJbnQiLCJkZWZhdWx0VmlldyIsImdldENvbXB1dGVkU3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZSIsImRpc3BsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib25DbGljayIsImFjdGl2ZSIsImN1cnNvciIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbSIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nVG9wIiwiZGVmYXVsdFRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7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ZmYwNmRlZmY3NGY2NWQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ29tcGFyYXRpdmUgZnJvbSAnLi93aWRnZXR0eXBlL0NvbXBhcmF0aXZlJ1xyXG5pbXBvcnQgR2VvV2lkZ2V0IGZyb20gJy4vd2lkZ2V0dHlwZS9HZW9XaWRnZXQnXHJcblxyXG5pbXBvcnQgR3JpZCBmcm9tICcuL3dpZGdldHR5cGUvZGVtby9HcmlkJ1xyXG5pbXBvcnQgUmF0aW5nTWV0ZXIgZnJvbSAnLi93aWRnZXR0eXBlL2RlbW8vUmF0aW5nTWV0ZXInXHJcblxyXG5pbXBvcnQgVG9vbHMgZnJvbSAnLi9Ub29scydcclxuaW1wb3J0IHsgdXNlR2xvYmFsU3RhdGUgfSBmcm9tICcuL2dsb2JhbHN0YXRlL0dsb2JhbFN0YXRlUHJvdmlkZXInO1xyXG5pbXBvcnQgU291dGhFYXN0U2l6ZXIgZnJvbSAnLi9sYXlvdXQvU291dGhFYXN0U2l6ZXInXHJcbmltcG9ydCAnLi9XaWRnZXQuY3NzJ1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHByb3BzKSA9PiB7XHJcbiAgdmFyIHdpZGdldFJlY29yZCA9IHByb3BzLndpZGdldFJlY29yZFxyXG4gIGNvbnN0IFt7dXNlck5hbWUsZGFzaGJvYXJkRGF0YSx3aWRnZXREYXRhfSwgZGlzcGF0Y2hdID0gdXNlR2xvYmFsU3RhdGUoKTtcclxuXHJcbiAgdmFyIHN0eWxlID0ge1xyXG4gICBsZWZ0OiB3aWRnZXRSZWNvcmQucHJvcGVydGllcy5wb3NpdGlvbi54LFxyXG4gICB0b3A6IHdpZGdldFJlY29yZC5wcm9wZXJ0aWVzLnBvc2l0aW9uLnksXHJcbiAgIHdpZHRoOiB3aWRnZXRSZWNvcmQucHJvcGVydGllcy5zaXplLndpZHRoLFxyXG4gICBoZWlnaHQ6IHdpZGdldFJlY29yZC5wcm9wZXJ0aWVzLnNpemUuaGVpZ2h0LFxyXG4gICBpZDogd2lkZ2V0UmVjb3JkLmlkXHJcbiAgfVxyXG5cclxuICB2YXIgU3BlY2lmaWMgPSA8ZGl2PiB7d2lkZ2V0UmVjb3JkLnR5cGV9IDwvZGl2PlxyXG4gIHN3aXRjaCAod2lkZ2V0UmVjb3JkLnR5cGUpIHsgXHJcbiAgICBjYXNlICdncmlkJzpcclxuICAgICAgU3BlY2lmaWMgPSA8R3JpZCB3aWRnZXRSZWNvcmQ9e3dpZGdldFJlY29yZH0vPjsgXHJcbiAgICAgIGJyZWFrOyBcclxuICAgIGNhc2UgJ3JhdGluZ21ldGVyJzpcclxuICAgICAgU3BlY2lmaWMgPSA8UmF0aW5nTWV0ZXIgd2lkZ2V0UmVjb3JkPXt3aWRnZXRSZWNvcmR9Lz47IFxyXG4gICAgICBicmVhazsgXHJcblxyXG5cclxuICAgIGNhc2UgJ2NvbXBhcmF0aXZlJzpcclxuICAgIGNhc2UgJ211bHRpQ29tcGFyYXRpdmUnOlxyXG4gICAgY2FzZSAnZ2F1Z2UnOlxyXG4gICAgY2FzZSAnbWl4JzpcclxuICAgIGNhc2UgJ2NvbXBhcmF0aXZlVGltZVNlcmllcyc6XHJcbiAgICBjYXNlICdzaGFyZVRyZW5kJzpcclxuICAgIGNhc2UgJ2Nyb3NzVGFiJzpcclxuICAgIGNhc2UgJ2RpbWVuc2lvbkV4Y2VwdGlvbic6XHJcbiAgICBjYXNlICdleGNlcHRpb25UaW1lU2VyaWVzJzpcclxuICAgIGNhc2UgJ21tVHJlbmQnOlxyXG4gICAgY2FzZSAnc2NhdHRlcmdyYW0nOlxyXG4gICAgY2FzZSAndHJlbmQnOlxyXG4gICAgY2FzZSAnd2F0ZXJmYWxsJzpcclxuICAgICAgU3BlY2lmaWMgPSA8Q29tcGFyYXRpdmUgd2lkZ2V0UmVjb3JkPXt3aWRnZXRSZWNvcmR9Lz47ICAgXHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnZ2VvV2lkZ2V0JzpcclxuICAgICAgU3BlY2lmaWMgPSA8R2VvV2lkZ2V0IHdpZGdldFJlY29yZD17d2lkZ2V0UmVjb3JkfS8+OyBcclxuICAgICAgYnJlYWs7IFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmluZEFuY2VzdG9yID0gKGVsLCBjbHMpID0+IHtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge3JldHVybiBlbH1cclxuICAgIHdoaWxlICgoZWwgPSBlbC5wYXJlbnRFbGVtZW50KSAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNscykpO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Nb3VzZURvd25Gb3JNb3ZlID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB2YXIgc3RhcnRYID0gZS5jbGllbnRYO1xyXG4gICAgdmFyIHN0YXJ0WSA9IGUuY2xpZW50WTtcclxuXHJcbiAgICB2YXIgcGFyID0gZmluZEFuY2VzdG9yKGUudGFyZ2V0LCd3aWRnZXQnKVxyXG4gICAgaWYgKHBhciA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZG9EcmFnKGUpIHtcclxuICAgICAgcGFyLnN0eWxlLmxlZnQgPSAoc3RhcnRMZWZ0ICsgZS5jbGllbnRYIC0gc3RhcnRYKSArICdweCdcclxuICAgICAgcGFyLnN0eWxlLnRvcCA9IChzdGFydFRvcCArIGUuY2xpZW50WSAtIHN0YXJ0WSkgKyAncHgnXHJcbiAgICAgIHBhci5zdHlsZS53aWR0aCA9IHN0YXJ0V2lkdGhcclxuICAgICAgcGFyLnN0eWxlLmhlaWdodCA9IHN0YXJ0SGVpZ2h0XHJcbiAgICB9ICAgICAgICAgICAgXHJcbiAgICBmdW5jdGlvbiBzdG9wRHJhZyhlKSB7XHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnUkVTSVpFX1dJREdFVCcsIHBheWxvYWQ6IHtpZDogd2lkZ2V0UmVjb3JkLmlkLCB3OiBwYXIuc3R5bGUud2lkdGgsIGg6IHBhci5zdHlsZS5oZWlnaHR9fSk7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkb0RyYWcsIGZhbHNlKTsgICAgXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcERyYWcsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHZhciBzdGFydExlZnQgPSBwYXJzZUludChkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHBhcikubGVmdCwgMTApO1xyXG4gICAgdmFyIHN0YXJ0VG9wID0gcGFyc2VJbnQoZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShwYXIpLnRvcCwgMTApO1xyXG4gICAgdmFyIHN0YXJ0V2lkdGggPSBwYXJzZUludChkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHBhcikud2lkdGgsIDEwKTtcclxuICAgIHZhciBzdGFydEhlaWdodCA9IHBhcnNlSW50KGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUocGFyKS5oZWlnaHQsIDEwKTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBkb0RyYWcsIGZhbHNlKTtcclxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3RvcERyYWcsIGZhbHNlKTtcclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3Qgb25Nb3VzZSA9IChlLCBkaXNwbGF5KSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZnVuY3Rpb24gZmluZEFuY2VzdG9yIChlbCwgY2xzKSB7XHJcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkge3JldHVybiBlbH1cclxuICAgICAgd2hpbGUgKChlbCA9IGVsLnBhcmVudEVsZW1lbnQpICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSk7XHJcbiAgICAgIHJldHVybiBlbDtcclxuICAgIH1cclxuICAgIHZhciB3ID0gZmluZEFuY2VzdG9yKGUudGFyZ2V0LCd3aWRnZXQnKVxyXG4gICAgaWYgKHcgIT0gbnVsbCkge1xyXG4gICAgICB3LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b29sc1wiKVswXS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVxyXG4gICAgICB3LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzb3V0aGVhc3RzaXplclwiKVswXS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSAoZSwgZGlzcGxheSkgPT4ge1xyXG4gICAgLy9lLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6ICdBQ1RJVkFURV9XSURHRVQnLCBwYXlsb2FkOiB7aWQ6IHdpZGdldFJlY29yZC5pZH19KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YHdpZGdldCBib3JkZXJzaGFkb3cgJHt3aWRnZXRSZWNvcmQuYWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0gb25DbGljaz17KGUpID0+IHtvbkNsaWNrKGUpfX0gb25Nb3VzZUVudGVyPXsoZSkgPT4ge29uTW91c2UoZSwnYmxvY2snKX19IG9uTW91c2VMZWF2ZT17KGUpID0+IHtvbk1vdXNlKGUsJ25vbmUnKX19PlxyXG4gICAgICA8ZGl2IG9uTW91c2VEb3duPXsoZSkgPT4ge29uTW91c2VEb3duRm9yTW92ZShlKX19IHN0eWxlPXt7Y3Vyc29yOidtb3ZlJyxwb3NpdGlvbjoncmVsYXRpdmUnLGRpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J3Jvd3MnLGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxib3JkZXJCb3R0b206JzBweCBzb2xpZCBsaWdodGdyYXknLHBhZGRpbmc6JzAgMCA1cHggMCcsaGVpZ2h0OicyMHB4J319PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzExcHgnLGZvbnRXZWlnaHQ6J2JvbGQnLHBhZGRpbmdUb3A6JzNweCd9fT57d2lkZ2V0UmVjb3JkLmRlZmF1bHRUaXRsZX08L2Rpdj5cclxuICAgICAgICA8VG9vbHMgd2lkZ2V0UmVjb3JkPXt3aWRnZXRSZWNvcmR9Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxmbGV4RGlyZWN0aW9uOidyb3dzJyxqdXN0aWZ5Q29udGVudDonc3BhY2UtYmV0d2VlbicsYm9yZGVyQm90dG9tOicwcHggc29saWQgbGlnaHRncmF5JyxwYWRkaW5nOicwIDAgNXB4IDAnfX0+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMTJweCd9fT5icmVhZGNydW1iICAmZ3Q7ICBtb3JlICAmZ3Q7ICBtb3JlPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7U3BlY2lmaWN9ICAgICBcclxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J3Jvd3MnLGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxib3JkZXJCb3R0b206JzBweCBzb2xpZCBsaWdodGdyYXknLHBhZGRpbmc6JzVweCAwIDAgMCcsaGVpZ2h0OicyMHB4J319PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzExcHgnLGZvbnRXZWlnaHQ6J2JvbGQnLHBhZGRpbmdUb3A6JzNweCd9fT5mb290ZXIgbGVmdDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzExcHgnLGZvbnRXZWlnaHQ6J2JvbGQnLHBhZGRpbmdUb3A6JzNweCd9fT4oe3dpZGdldFJlY29yZC5pZH0pPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U291dGhFYXN0U2l6ZXIgd2lkZ2V0UmVjb3JkPXt3aWRnZXRSZWNvcmR9Lz5cclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldFxyXG4iXSwic291cmNlUm9vdCI6IiJ9