var Sc = (e) => {
  throw TypeError(e);
};
var pl = (e, t, n) => t.has(e) || Sc("Cannot " + n);
var P = (e, t, n) => (
    pl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  q = (e, t, n) =>
    t.has(e)
      ? Sc("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  $ = (e, t, n, r) => (
    pl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  Te = (e, t, n) => (pl(e, t, "access private method"), n);
var gs = (e, t, n, r) => ({
  set _(o) {
    $(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function Mg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s &&
            Object.defineProperty(
              e,
              o,
              s.get ? s : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
function jf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Of = { exports: {} },
  _i = {},
  _f = { exports: {} },
  G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ss = Symbol.for("react.element"),
  Lg = Symbol.for("react.portal"),
  Ig = Symbol.for("react.fragment"),
  Dg = Symbol.for("react.strict_mode"),
  zg = Symbol.for("react.profiler"),
  Fg = Symbol.for("react.provider"),
  $g = Symbol.for("react.context"),
  Bg = Symbol.for("react.forward_ref"),
  Ug = Symbol.for("react.suspense"),
  Vg = Symbol.for("react.memo"),
  Wg = Symbol.for("react.lazy"),
  Ec = Symbol.iterator;
function Hg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ec && e[Ec]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Af = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mf = Object.assign,
  Lf = {};
function no(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || Af);
}
no.prototype.isReactComponent = {};
no.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
no.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function If() {}
If.prototype = no.prototype;
function nu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || Af);
}
var ru = (nu.prototype = new If());
ru.constructor = nu;
Mf(ru, no.prototype);
ru.isPureReactComponent = !0;
var Cc = Array.isArray,
  Df = Object.prototype.hasOwnProperty,
  ou = { current: null },
  zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ff(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Df.call(t, r) && !zf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: ss,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: ou.current,
  };
}
function Qg(e, t) {
  return {
    $$typeof: ss,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ss;
}
function Kg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var bc = /\/+/g;
function hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Kg("" + e.key)
    : t.toString(36);
}
function Fs(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ss:
          case Lg:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + hl(i, 0) : r),
      Cc(o)
        ? ((n = ""),
          e != null && (n = e.replace(bc, "$&/") + "/"),
          Fs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (su(o) &&
            (o = Qg(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(bc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Cc(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + hl(s, l);
      i += Fs(s, t, n, a, o);
    }
  else if (((a = Hg(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + hl(s, l++)), (i += Fs(s, t, n, a, o));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function vs(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Fs(e, r, "", "", function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function Yg(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var De = { current: null },
  $s = { transition: null },
  Gg = {
    ReactCurrentDispatcher: De,
    ReactCurrentBatchConfig: $s,
    ReactCurrentOwner: ou,
  };
function $f() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = {
  map: vs,
  forEach: function (e, t, n) {
    vs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!su(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
G.Component = no;
G.Fragment = Ig;
G.Profiler = zg;
G.PureComponent = nu;
G.StrictMode = Dg;
G.Suspense = Ug;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gg;
G.act = $f;
G.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Mf({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = ou.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Df.call(t, a) &&
        !zf.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ss, type: e.type, key: o, ref: s, props: r, _owner: i };
};
G.createContext = function (e) {
  return (
    (e = {
      $$typeof: $g,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Fg, _context: e }),
    (e.Consumer = e)
  );
};
G.createElement = Ff;
G.createFactory = function (e) {
  var t = Ff.bind(null, e);
  return (t.type = e), t;
};
G.createRef = function () {
  return { current: null };
};
G.forwardRef = function (e) {
  return { $$typeof: Bg, render: e };
};
G.isValidElement = su;
G.lazy = function (e) {
  return { $$typeof: Wg, _payload: { _status: -1, _result: e }, _init: Yg };
};
G.memo = function (e, t) {
  return { $$typeof: Vg, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function (e) {
  var t = $s.transition;
  $s.transition = {};
  try {
    e();
  } finally {
    $s.transition = t;
  }
};
G.unstable_act = $f;
G.useCallback = function (e, t) {
  return De.current.useCallback(e, t);
};
G.useContext = function (e) {
  return De.current.useContext(e);
};
G.useDebugValue = function () {};
G.useDeferredValue = function (e) {
  return De.current.useDeferredValue(e);
};
G.useEffect = function (e, t) {
  return De.current.useEffect(e, t);
};
G.useId = function () {
  return De.current.useId();
};
G.useImperativeHandle = function (e, t, n) {
  return De.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function (e, t) {
  return De.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function (e, t) {
  return De.current.useLayoutEffect(e, t);
};
G.useMemo = function (e, t) {
  return De.current.useMemo(e, t);
};
G.useReducer = function (e, t, n) {
  return De.current.useReducer(e, t, n);
};
G.useRef = function (e) {
  return De.current.useRef(e);
};
G.useState = function (e) {
  return De.current.useState(e);
};
G.useSyncExternalStore = function (e, t, n) {
  return De.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function () {
  return De.current.useTransition();
};
G.version = "18.3.1";
_f.exports = G;
var w = _f.exports;
const _ = jf(w),
  iu = Mg({ __proto__: null, default: _ }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xg = w,
  qg = Symbol.for("react.element"),
  Zg = Symbol.for("react.fragment"),
  Jg = Object.prototype.hasOwnProperty,
  ev = Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  tv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bf(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Jg.call(t, r) && !tv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: qg,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: ev.current,
  };
}
_i.Fragment = Zg;
_i.jsx = Bf;
_i.jsxs = Bf;
Of.exports = _i;
var g = Of.exports,
  Uf = { exports: {} },
  Je = {},
  Vf = { exports: {} },
  Wf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, T) {
    var M = N.length;
    N.push(T);
    e: for (; 0 < M; ) {
      var W = (M - 1) >>> 1,
        F = N[W];
      if (0 < o(F, T)) (N[W] = T), (N[M] = F), (M = W);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var T = N[0],
      M = N.pop();
    if (M !== T) {
      N[0] = M;
      e: for (var W = 0, F = N.length, Y = F >>> 1; W < Y; ) {
        var X = 2 * (W + 1) - 1,
          me = N[X],
          Ne = X + 1,
          J = N[Ne];
        if (0 > o(me, M))
          Ne < F && 0 > o(J, me)
            ? ((N[W] = J), (N[Ne] = M), (W = Ne))
            : ((N[W] = me), (N[X] = M), (W = X));
        else if (Ne < F && 0 > o(J, M)) (N[W] = J), (N[Ne] = M), (W = Ne);
        else break e;
      }
    }
    return T;
  }
  function o(N, T) {
    var M = N.sortIndex - T.sortIndex;
    return M !== 0 ? M : N.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    m = 3,
    d = !1,
    E = !1,
    y = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(N) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= N)
        r(u), (T.sortIndex = T.expirationTime), t(a, T);
      else break;
      T = n(u);
    }
  }
  function S(N) {
    if (((y = !1), v(N), !E))
      if (n(a) !== null) (E = !0), B(C);
      else {
        var T = n(u);
        T !== null && V(S, T.startTime - N);
      }
  }
  function C(N, T) {
    (E = !1), y && ((y = !1), h(R), (R = -1)), (d = !0);
    var M = m;
    try {
      for (
        v(T), f = n(a);
        f !== null && (!(f.expirationTime > T) || (N && !z()));

      ) {
        var W = f.callback;
        if (typeof W == "function") {
          (f.callback = null), (m = f.priorityLevel);
          var F = W(f.expirationTime <= T);
          (T = e.unstable_now()),
            typeof F == "function" ? (f.callback = F) : f === n(a) && r(a),
            v(T);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Y = !0;
      else {
        var X = n(u);
        X !== null && V(S, X.startTime - T), (Y = !1);
      }
      return Y;
    } finally {
      (f = null), (m = M), (d = !1);
    }
  }
  var b = !1,
    k = null,
    R = -1,
    D = 5,
    O = -1;
  function z() {
    return !(e.unstable_now() - O < D);
  }
  function L() {
    if (k !== null) {
      var N = e.unstable_now();
      O = N;
      var T = !0;
      try {
        T = k(!0, N);
      } finally {
        T ? K() : ((b = !1), (k = null));
      }
    } else b = !1;
  }
  var K;
  if (typeof p == "function")
    K = function () {
      p(L);
    };
  else if (typeof MessageChannel < "u") {
    var A = new MessageChannel(),
      H = A.port2;
    (A.port1.onmessage = L),
      (K = function () {
        H.postMessage(null);
      });
  } else
    K = function () {
      x(L, 0);
    };
  function B(N) {
    (k = N), b || ((b = !0), K());
  }
  function V(N, T) {
    R = x(function () {
      N(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || d || ((E = !0), B(C));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (D = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var M = m;
      m = T;
      try {
        return N();
      } finally {
        m = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, T) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var M = m;
      m = N;
      try {
        return T();
      } finally {
        m = M;
      }
    }),
    (e.unstable_scheduleCallback = function (N, T, M) {
      var W = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? W + M : W))
          : (M = W),
        N)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = M + F),
        (N = {
          id: c++,
          callback: T,
          priorityLevel: N,
          startTime: M,
          expirationTime: F,
          sortIndex: -1,
        }),
        M > W
          ? ((N.sortIndex = M),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (y ? (h(R), (R = -1)) : (y = !0), V(S, M - W)))
          : ((N.sortIndex = F), t(a, N), E || d || ((E = !0), B(C))),
        N
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (N) {
      var T = m;
      return function () {
        var M = m;
        m = T;
        try {
          return N.apply(this, arguments);
        } finally {
          m = M;
        }
      };
    });
})(Wf);
Vf.exports = Wf;
var nv = Vf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rv = w,
  Ze = nv;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Hf = new Set(),
  Lo = {};
function ur(e, t) {
  Kr(e, t), Kr(e + "Capture", t);
}
function Kr(e, t) {
  for (Lo[e] = t, e = 0; e < t.length; e++) Hf.add(t[e]);
}
var Qt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ql = Object.prototype.hasOwnProperty,
  ov =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  kc = {},
  Pc = {};
function sv(e) {
  return Ql.call(Pc, e)
    ? !0
    : Ql.call(kc, e)
    ? !1
    : ov.test(e)
    ? (Pc[e] = !0)
    : ((kc[e] = !0), !1);
}
function iv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function lv(e, t, n, r) {
  if (t === null || typeof t > "u" || iv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ze(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Pe[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Pe[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Pe[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Pe[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Pe[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Pe[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lu = /[\-:]([a-z])/g;
function au(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lu, au);
    Pe[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lu, au);
    Pe[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(lu, au);
  Pe[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Pe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Pe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uu(e, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (lv(t, n, o, r) && (n = null),
    r || o === null
      ? sv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ys = Symbol.for("react.element"),
  yr = Symbol.for("react.portal"),
  wr = Symbol.for("react.fragment"),
  cu = Symbol.for("react.strict_mode"),
  Kl = Symbol.for("react.profiler"),
  Qf = Symbol.for("react.provider"),
  Kf = Symbol.for("react.context"),
  du = Symbol.for("react.forward_ref"),
  Yl = Symbol.for("react.suspense"),
  Gl = Symbol.for("react.suspense_list"),
  fu = Symbol.for("react.memo"),
  dn = Symbol.for("react.lazy"),
  Yf = Symbol.for("react.offscreen"),
  Nc = Symbol.iterator;
function co(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Nc && e[Nc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var de = Object.assign,
  ml;
function So(e) {
  if (ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ml = (t && t[1]) || "";
    }
  return (
    `
` +
    ml +
    e
  );
}
var gl = !1;
function vl(e, t) {
  if (!e || gl) return "";
  gl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (gl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? So(e) : "";
}
function av(e) {
  switch (e.tag) {
    case 5:
      return So(e.type);
    case 16:
      return So("Lazy");
    case 13:
      return So("Suspense");
    case 19:
      return So("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vl(e.type, !1)), e;
    case 11:
      return (e = vl(e.type.render, !1)), e;
    case 1:
      return (e = vl(e.type, !0)), e;
    default:
      return "";
  }
}
function Xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wr:
      return "Fragment";
    case yr:
      return "Portal";
    case Kl:
      return "Profiler";
    case cu:
      return "StrictMode";
    case Yl:
      return "Suspense";
    case Gl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Kf:
        return (e.displayName || "Context") + ".Consumer";
      case Qf:
        return (e._context.displayName || "Context") + ".Provider";
      case du:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fu:
        return (
          (t = e.displayName || null), t !== null ? t : Xl(e.type) || "Memo"
        );
      case dn:
        (t = e._payload), (e = e._init);
        try {
          return Xl(e(t));
        } catch {}
    }
  return null;
}
function uv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Xl(t);
    case 8:
      return t === cu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function _n(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Gf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function cv(e) {
  var t = Gf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ws(e) {
  e._valueTracker || (e._valueTracker = cv(e));
}
function Xf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Gf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ei(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return de({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Tc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = _n(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function qf(e, t) {
  (t = t.checked), t != null && uu(e, "checked", t, !1);
}
function Zl(e, t) {
  qf(e, t);
  var n = _n(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Jl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Jl(e, t.type, _n(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Rc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Jl(e, t, n) {
  (t !== "number" || ei(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Eo = Array.isArray;
function jr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + _n(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ea(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return de({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function jc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (Eo(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: _n(n) };
}
function Zf(e, t) {
  var n = _n(t.value),
    r = _n(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Oc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ta(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Jf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var xs,
  ep = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        xs = xs || document.createElement("div"),
          xs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = xs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Io(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ko = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  dv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ko).forEach(function (e) {
  dv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ko[t] = ko[e]);
  });
});
function tp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ko.hasOwnProperty(e) && ko[e])
    ? ("" + t).trim()
    : t + "px";
}
function np(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = tp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var fv = de(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function na(e, t) {
  if (t) {
    if (fv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function ra(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var oa = null;
function pu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sa = null,
  Or = null,
  _r = null;
function _c(e) {
  if ((e = as(e))) {
    if (typeof sa != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Di(t)), sa(e.stateNode, e.type, t));
  }
}
function rp(e) {
  Or ? (_r ? _r.push(e) : (_r = [e])) : (Or = e);
}
function op() {
  if (Or) {
    var e = Or,
      t = _r;
    if (((_r = Or = null), _c(e), t)) for (e = 0; e < t.length; e++) _c(t[e]);
  }
}
function sp(e, t) {
  return e(t);
}
function ip() {}
var yl = !1;
function lp(e, t, n) {
  if (yl) return e(t, n);
  yl = !0;
  try {
    return sp(e, t, n);
  } finally {
    (yl = !1), (Or !== null || _r !== null) && (ip(), op());
  }
}
function Do(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Di(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var ia = !1;
if (Qt)
  try {
    var fo = {};
    Object.defineProperty(fo, "passive", {
      get: function () {
        ia = !0;
      },
    }),
      window.addEventListener("test", fo, fo),
      window.removeEventListener("test", fo, fo);
  } catch {
    ia = !1;
  }
function pv(e, t, n, r, o, s, i, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Po = !1,
  ti = null,
  ni = !1,
  la = null,
  hv = {
    onError: function (e) {
      (Po = !0), (ti = e);
    },
  };
function mv(e, t, n, r, o, s, i, l, a) {
  (Po = !1), (ti = null), pv.apply(hv, arguments);
}
function gv(e, t, n, r, o, s, i, l, a) {
  if ((mv.apply(this, arguments), Po)) {
    if (Po) {
      var u = ti;
      (Po = !1), (ti = null);
    } else throw Error(j(198));
    ni || ((ni = !0), (la = u));
  }
}
function cr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ap(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ac(e) {
  if (cr(e) !== e) throw Error(j(188));
}
function vv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cr(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Ac(o), e;
        if (s === r) return Ac(o), t;
        s = s.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (l === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (l === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function up(e) {
  return (e = vv(e)), e !== null ? cp(e) : null;
}
function cp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var dp = Ze.unstable_scheduleCallback,
  Mc = Ze.unstable_cancelCallback,
  yv = Ze.unstable_shouldYield,
  wv = Ze.unstable_requestPaint,
  he = Ze.unstable_now,
  xv = Ze.unstable_getCurrentPriorityLevel,
  hu = Ze.unstable_ImmediatePriority,
  fp = Ze.unstable_UserBlockingPriority,
  ri = Ze.unstable_NormalPriority,
  Sv = Ze.unstable_LowPriority,
  pp = Ze.unstable_IdlePriority,
  Ai = null,
  At = null;
function Ev(e) {
  if (At && typeof At.onCommitFiberRoot == "function")
    try {
      At.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : kv,
  Cv = Math.log,
  bv = Math.LN2;
function kv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Cv(e) / bv) | 0)) | 0;
}
var Ss = 64,
  Es = 4194304;
function Co(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = Co(l)) : ((s &= i), s !== 0 && (r = Co(s)));
  } else (i = n & ~o), i !== 0 ? (r = Co(i)) : s !== 0 && (r = Co(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Pv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Nv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - xt(s),
      l = 1 << i,
      a = o[i];
    a === -1
      ? (!(l & n) || l & r) && (o[i] = Pv(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function aa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hp() {
  var e = Ss;
  return (Ss <<= 1), !(Ss & 4194240) && (Ss = 64), e;
}
function wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function is(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function Tv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - xt(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function mu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function mp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gp,
  gu,
  vp,
  yp,
  wp,
  ua = !1,
  Cs = [],
  bn = null,
  kn = null,
  Pn = null,
  zo = new Map(),
  Fo = new Map(),
  pn = [],
  Rv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Lc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bn = null;
      break;
    case "dragenter":
    case "dragleave":
      kn = null;
      break;
    case "mouseover":
    case "mouseout":
      Pn = null;
      break;
    case "pointerover":
    case "pointerout":
      zo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fo.delete(t.pointerId);
  }
}
function po(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = as(t)), t !== null && gu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function jv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (bn = po(bn, e, t, n, r, o)), !0;
    case "dragenter":
      return (kn = po(kn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Pn = po(Pn, e, t, n, r, o)), !0;
    case "pointerover":
      var s = o.pointerId;
      return zo.set(s, po(zo.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (s = o.pointerId), Fo.set(s, po(Fo.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function xp(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = cr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ap(n)), t !== null)) {
          (e.blockedOn = t),
            wp(e.priority, function () {
              vp(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Bs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ca(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oa = r), n.target.dispatchEvent(r), (oa = null);
    } else return (t = as(n)), t !== null && gu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ic(e, t, n) {
  Bs(e) && n.delete(t);
}
function Ov() {
  (ua = !1),
    bn !== null && Bs(bn) && (bn = null),
    kn !== null && Bs(kn) && (kn = null),
    Pn !== null && Bs(Pn) && (Pn = null),
    zo.forEach(Ic),
    Fo.forEach(Ic);
}
function ho(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ua ||
      ((ua = !0),
      Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority, Ov)));
}
function $o(e) {
  function t(o) {
    return ho(o, e);
  }
  if (0 < Cs.length) {
    ho(Cs[0], e);
    for (var n = 1; n < Cs.length; n++) {
      var r = Cs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    bn !== null && ho(bn, e),
      kn !== null && ho(kn, e),
      Pn !== null && ho(Pn, e),
      zo.forEach(t),
      Fo.forEach(t),
      n = 0;
    n < pn.length;
    n++
  )
    (r = pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pn.length && ((n = pn[0]), n.blockedOn === null); )
    xp(n), n.blockedOn === null && pn.shift();
}
var Ar = Zt.ReactCurrentBatchConfig,
  si = !0;
function _v(e, t, n, r) {
  var o = ee,
    s = Ar.transition;
  Ar.transition = null;
  try {
    (ee = 1), vu(e, t, n, r);
  } finally {
    (ee = o), (Ar.transition = s);
  }
}
function Av(e, t, n, r) {
  var o = ee,
    s = Ar.transition;
  Ar.transition = null;
  try {
    (ee = 4), vu(e, t, n, r);
  } finally {
    (ee = o), (Ar.transition = s);
  }
}
function vu(e, t, n, r) {
  if (si) {
    var o = ca(e, t, n, r);
    if (o === null) Rl(e, t, r, ii, n), Lc(e, r);
    else if (jv(o, e, t, n, r)) r.stopPropagation();
    else if ((Lc(e, r), t & 4 && -1 < Rv.indexOf(e))) {
      for (; o !== null; ) {
        var s = as(o);
        if (
          (s !== null && gp(s),
          (s = ca(e, t, n, r)),
          s === null && Rl(e, t, r, ii, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Rl(e, t, r, null, n);
  }
}
var ii = null;
function ca(e, t, n, r) {
  if (((ii = null), (e = pu(r)), (e = Qn(e)), e !== null))
    if (((t = cr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ap(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ii = e), null;
}
function Sp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (xv()) {
        case hu:
          return 1;
        case fp:
          return 4;
        case ri:
        case Sv:
          return 16;
        case pp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Sn = null,
  yu = null,
  Us = null;
function Ep() {
  if (Us) return Us;
  var e,
    t = yu,
    n = t.length,
    r,
    o = "value" in Sn ? Sn.value : Sn.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return (Us = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Vs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function bs() {
  return !0;
}
function Dc() {
  return !1;
}
function et(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? bs
        : Dc),
      (this.isPropagationStopped = Dc),
      this
    );
  }
  return (
    de(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = bs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = bs));
      },
      persist: function () {},
      isPersistent: bs,
    }),
    t
  );
}
var ro = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wu = et(ro),
  ls = de({}, ro, { view: 0, detail: 0 }),
  Mv = et(ls),
  xl,
  Sl,
  mo,
  Mi = de({}, ls, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mo &&
            (mo && e.type === "mousemove"
              ? ((xl = e.screenX - mo.screenX), (Sl = e.screenY - mo.screenY))
              : (Sl = xl = 0),
            (mo = e)),
          xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Sl;
    },
  }),
  zc = et(Mi),
  Lv = de({}, Mi, { dataTransfer: 0 }),
  Iv = et(Lv),
  Dv = de({}, ls, { relatedTarget: 0 }),
  El = et(Dv),
  zv = de({}, ro, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fv = et(zv),
  $v = de({}, ro, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Bv = et($v),
  Uv = de({}, ro, { data: 0 }),
  Fc = et(Uv),
  Vv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Wv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Hv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Qv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Hv[e]) ? !!t[e] : !1;
}
function xu() {
  return Qv;
}
var Kv = de({}, ls, {
    key: function (e) {
      if (e.key) {
        var t = Vv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Wv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xu,
    charCode: function (e) {
      return e.type === "keypress" ? Vs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Yv = et(Kv),
  Gv = de({}, Mi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  $c = et(Gv),
  Xv = de({}, ls, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xu,
  }),
  qv = et(Xv),
  Zv = de({}, ro, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jv = et(Zv),
  ey = de({}, Mi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ty = et(ey),
  ny = [9, 13, 27, 32],
  Su = Qt && "CompositionEvent" in window,
  No = null;
Qt && "documentMode" in document && (No = document.documentMode);
var ry = Qt && "TextEvent" in window && !No,
  Cp = Qt && (!Su || (No && 8 < No && 11 >= No)),
  Bc = " ",
  Uc = !1;
function bp(e, t) {
  switch (e) {
    case "keyup":
      return ny.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var xr = !1;
function oy(e, t) {
  switch (e) {
    case "compositionend":
      return kp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Uc = !0), Bc);
    case "textInput":
      return (e = t.data), e === Bc && Uc ? null : e;
    default:
      return null;
  }
}
function sy(e, t) {
  if (xr)
    return e === "compositionend" || (!Su && bp(e, t))
      ? ((e = Ep()), (Us = yu = Sn = null), (xr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Cp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var iy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!iy[e.type] : t === "textarea";
}
function Pp(e, t, n, r) {
  rp(r),
    (t = li(t, "onChange")),
    0 < t.length &&
      ((n = new wu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var To = null,
  Bo = null;
function ly(e) {
  Dp(e, 0);
}
function Li(e) {
  var t = Cr(e);
  if (Xf(t)) return e;
}
function ay(e, t) {
  if (e === "change") return t;
}
var Np = !1;
if (Qt) {
  var Cl;
  if (Qt) {
    var bl = "oninput" in document;
    if (!bl) {
      var Wc = document.createElement("div");
      Wc.setAttribute("oninput", "return;"),
        (bl = typeof Wc.oninput == "function");
    }
    Cl = bl;
  } else Cl = !1;
  Np = Cl && (!document.documentMode || 9 < document.documentMode);
}
function Hc() {
  To && (To.detachEvent("onpropertychange", Tp), (Bo = To = null));
}
function Tp(e) {
  if (e.propertyName === "value" && Li(Bo)) {
    var t = [];
    Pp(t, Bo, e, pu(e)), lp(ly, t);
  }
}
function uy(e, t, n) {
  e === "focusin"
    ? (Hc(), (To = t), (Bo = n), To.attachEvent("onpropertychange", Tp))
    : e === "focusout" && Hc();
}
function cy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Li(Bo);
}
function dy(e, t) {
  if (e === "click") return Li(t);
}
function fy(e, t) {
  if (e === "input" || e === "change") return Li(t);
}
function py(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == "function" ? Object.is : py;
function Uo(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ql.call(t, o) || !Et(e[o], t[o])) return !1;
  }
  return !0;
}
function Qc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Kc(e, t) {
  var n = Qc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Qc(n);
  }
}
function Rp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Rp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jp() {
  for (var e = window, t = ei(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ei(e.document);
  }
  return t;
}
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function hy(e) {
  var t = jp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Rp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Eu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = Kc(n, s));
        var i = Kc(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var my = Qt && "documentMode" in document && 11 >= document.documentMode,
  Sr = null,
  da = null,
  Ro = null,
  fa = !1;
function Yc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fa ||
    Sr == null ||
    Sr !== ei(r) ||
    ((r = Sr),
    "selectionStart" in r && Eu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ro && Uo(Ro, r)) ||
      ((Ro = r),
      (r = li(da, "onSelect")),
      0 < r.length &&
        ((t = new wu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Sr))));
}
function ks(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Er = {
    animationend: ks("Animation", "AnimationEnd"),
    animationiteration: ks("Animation", "AnimationIteration"),
    animationstart: ks("Animation", "AnimationStart"),
    transitionend: ks("Transition", "TransitionEnd"),
  },
  kl = {},
  Op = {};
Qt &&
  ((Op = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Er.animationend.animation,
    delete Er.animationiteration.animation,
    delete Er.animationstart.animation),
  "TransitionEvent" in window || delete Er.transitionend.transition);
function Ii(e) {
  if (kl[e]) return kl[e];
  if (!Er[e]) return e;
  var t = Er[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Op) return (kl[e] = t[n]);
  return e;
}
var _p = Ii("animationend"),
  Ap = Ii("animationiteration"),
  Mp = Ii("animationstart"),
  Lp = Ii("transitionend"),
  Ip = new Map(),
  Gc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zn(e, t) {
  Ip.set(e, t), ur(t, [e]);
}
for (var Pl = 0; Pl < Gc.length; Pl++) {
  var Nl = Gc[Pl],
    gy = Nl.toLowerCase(),
    vy = Nl[0].toUpperCase() + Nl.slice(1);
  zn(gy, "on" + vy);
}
zn(_p, "onAnimationEnd");
zn(Ap, "onAnimationIteration");
zn(Mp, "onAnimationStart");
zn("dblclick", "onDoubleClick");
zn("focusin", "onFocus");
zn("focusout", "onBlur");
zn(Lp, "onTransitionEnd");
Kr("onMouseEnter", ["mouseout", "mouseover"]);
Kr("onMouseLeave", ["mouseout", "mouseover"]);
Kr("onPointerEnter", ["pointerout", "pointerover"]);
Kr("onPointerLeave", ["pointerout", "pointerover"]);
ur(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ur(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ur("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ur(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ur(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ur(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var bo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  yy = new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));
function Xc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), gv(r, t, void 0, e), (e.currentTarget = null);
}
function Dp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && o.isPropagationStopped())) break e;
          Xc(o, l, u), (s = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && o.isPropagationStopped())
          )
            break e;
          Xc(o, l, u), (s = a);
        }
    }
  }
  if (ni) throw ((e = la), (ni = !1), (la = null), e);
}
function se(e, t) {
  var n = t[va];
  n === void 0 && (n = t[va] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zp(t, e, 2, !1), n.add(r));
}
function Tl(e, t, n) {
  var r = 0;
  t && (r |= 4), zp(n, e, r, t);
}
var Ps = "_reactListening" + Math.random().toString(36).slice(2);
function Vo(e) {
  if (!e[Ps]) {
    (e[Ps] = !0),
      Hf.forEach(function (n) {
        n !== "selectionchange" && (yy.has(n) || Tl(n, !1, e), Tl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ps] || ((t[Ps] = !0), Tl("selectionchange", !1, t));
  }
}
function zp(e, t, n, r) {
  switch (Sp(t)) {
    case 1:
      var o = _v;
      break;
    case 4:
      o = Av;
      break;
    default:
      o = vu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ia ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Rl(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = Qn(l)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  lp(function () {
    var u = s,
      c = pu(n),
      f = [];
    e: {
      var m = Ip.get(e);
      if (m !== void 0) {
        var d = wu,
          E = e;
        switch (e) {
          case "keypress":
            if (Vs(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = Yv;
            break;
          case "focusin":
            (E = "focus"), (d = El);
            break;
          case "focusout":
            (E = "blur"), (d = El);
            break;
          case "beforeblur":
          case "afterblur":
            d = El;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = zc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Iv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = qv;
            break;
          case _p:
          case Ap:
          case Mp:
            d = Fv;
            break;
          case Lp:
            d = Jv;
            break;
          case "scroll":
            d = Mv;
            break;
          case "wheel":
            d = ty;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = Bv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = $c;
        }
        var y = (t & 4) !== 0,
          x = !y && e === "scroll",
          h = y ? (m !== null ? m + "Capture" : null) : m;
        y = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              h !== null && ((S = Do(p, h)), S != null && y.push(Wo(p, S, v)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((m = new d(m, E, null, n, c)), f.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (d = e === "mouseout" || e === "pointerout"),
          m &&
            n !== oa &&
            (E = n.relatedTarget || n.fromElement) &&
            (Qn(E) || E[Kt]))
        )
          break e;
        if (
          (d || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          d
            ? ((E = n.relatedTarget || n.toElement),
              (d = u),
              (E = E ? Qn(E) : null),
              E !== null &&
                ((x = cr(E)), E !== x || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((d = null), (E = u)),
          d !== E)
        ) {
          if (
            ((y = zc),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = $c),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (x = d == null ? m : Cr(d)),
            (v = E == null ? m : Cr(E)),
            (m = new y(S, p + "leave", d, n, c)),
            (m.target = x),
            (m.relatedTarget = v),
            (S = null),
            Qn(c) === u &&
              ((y = new y(h, p + "enter", E, n, c)),
              (y.target = v),
              (y.relatedTarget = x),
              (S = y)),
            (x = S),
            d && E)
          )
            t: {
              for (y = d, h = E, p = 0, v = y; v; v = vr(v)) p++;
              for (v = 0, S = h; S; S = vr(S)) v++;
              for (; 0 < p - v; ) (y = vr(y)), p--;
              for (; 0 < v - p; ) (h = vr(h)), v--;
              for (; p--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = vr(y)), (h = vr(h));
              }
              y = null;
            }
          else y = null;
          d !== null && qc(f, m, d, y, !1),
            E !== null && x !== null && qc(f, x, E, y, !0);
        }
      }
      e: {
        if (
          ((m = u ? Cr(u) : window),
          (d = m.nodeName && m.nodeName.toLowerCase()),
          d === "select" || (d === "input" && m.type === "file"))
        )
          var C = ay;
        else if (Vc(m))
          if (Np) C = fy;
          else {
            C = cy;
            var b = uy;
          }
        else
          (d = m.nodeName) &&
            d.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = dy);
        if (C && (C = C(e, u))) {
          Pp(f, C, n, c);
          break e;
        }
        b && b(e, m, u),
          e === "focusout" &&
            (b = m._wrapperState) &&
            b.controlled &&
            m.type === "number" &&
            Jl(m, "number", m.value);
      }
      switch (((b = u ? Cr(u) : window), e)) {
        case "focusin":
          (Vc(b) || b.contentEditable === "true") &&
            ((Sr = b), (da = u), (Ro = null));
          break;
        case "focusout":
          Ro = da = Sr = null;
          break;
        case "mousedown":
          fa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fa = !1), Yc(f, n, c);
          break;
        case "selectionchange":
          if (my) break;
        case "keydown":
        case "keyup":
          Yc(f, n, c);
      }
      var k;
      if (Su)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        xr
          ? bp(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Cp &&
          n.locale !== "ko" &&
          (xr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && xr && (k = Ep())
            : ((Sn = c),
              (yu = "value" in Sn ? Sn.value : Sn.textContent),
              (xr = !0))),
        (b = li(u, R)),
        0 < b.length &&
          ((R = new Fc(R, e, null, n, c)),
          f.push({ event: R, listeners: b }),
          k ? (R.data = k) : ((k = kp(n)), k !== null && (R.data = k)))),
        (k = ry ? oy(e, n) : sy(e, n)) &&
          ((u = li(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Fc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    Dp(f, t);
  });
}
function Wo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = Do(e, n)),
      s != null && r.unshift(Wo(e, s, o)),
      (s = Do(e, t)),
      s != null && r.push(Wo(e, s, o))),
      (e = e.return);
  }
  return r;
}
function vr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function qc(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = Do(n, s)), a != null && i.unshift(Wo(n, a, l)))
        : o || ((a = Do(n, s)), a != null && i.push(Wo(n, a, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var wy = /\r\n?/g,
  xy = /\u0000|\uFFFD/g;
function Zc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      wy,
      `
`
    )
    .replace(xy, "");
}
function Ns(e, t, n) {
  if (((t = Zc(t)), Zc(e) !== t && n)) throw Error(j(425));
}
function ai() {}
var pa = null,
  ha = null;
function ma(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ga = typeof setTimeout == "function" ? setTimeout : void 0,
  Sy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Jc = typeof Promise == "function" ? Promise : void 0,
  Ey =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Jc < "u"
      ? function (e) {
          return Jc.resolve(null).then(e).catch(Cy);
        }
      : ga;
function Cy(e) {
  setTimeout(function () {
    throw e;
  });
}
function jl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), $o(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  $o(t);
}
function Nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ed(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var oo = Math.random().toString(36).slice(2),
  Ot = "__reactFiber$" + oo,
  Ho = "__reactProps$" + oo,
  Kt = "__reactContainer$" + oo,
  va = "__reactEvents$" + oo,
  by = "__reactListeners$" + oo,
  ky = "__reactHandles$" + oo;
function Qn(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Kt] || n[Ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ed(e); e !== null; ) {
          if ((n = e[Ot])) return n;
          e = ed(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function as(e) {
  return (
    (e = e[Ot] || e[Kt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Cr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Di(e) {
  return e[Ho] || null;
}
var ya = [],
  br = -1;
function Fn(e) {
  return { current: e };
}
function ie(e) {
  0 > br || ((e.current = ya[br]), (ya[br] = null), br--);
}
function ne(e, t) {
  br++, (ya[br] = e.current), (e.current = t);
}
var An = {},
  _e = Fn(An),
  Ue = Fn(!1),
  rr = An;
function Yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return An;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function ui() {
  ie(Ue), ie(_e);
}
function td(e, t, n) {
  if (_e.current !== An) throw Error(j(168));
  ne(_e, t), ne(Ue, n);
}
function Fp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(j(108, uv(e) || "Unknown", o));
  return de({}, n, r);
}
function ci(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || An),
    (rr = _e.current),
    ne(_e, e),
    ne(Ue, Ue.current),
    !0
  );
}
function nd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Fp(e, t, rr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ie(Ue),
      ie(_e),
      ne(_e, e))
    : ie(Ue),
    ne(Ue, n);
}
var Bt = null,
  zi = !1,
  Ol = !1;
function $p(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Py(e) {
  (zi = !0), $p(e);
}
function $n() {
  if (!Ol && Bt !== null) {
    Ol = !0;
    var e = 0,
      t = ee;
    try {
      var n = Bt;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bt = null), (zi = !1);
    } catch (o) {
      throw (Bt !== null && (Bt = Bt.slice(e + 1)), dp(hu, $n), o);
    } finally {
      (ee = t), (Ol = !1);
    }
  }
  return null;
}
var kr = [],
  Pr = 0,
  di = null,
  fi = 0,
  rt = [],
  ot = 0,
  or = null,
  Vt = 1,
  Wt = "";
function Wn(e, t) {
  (kr[Pr++] = fi), (kr[Pr++] = di), (di = e), (fi = t);
}
function Bp(e, t, n) {
  (rt[ot++] = Vt), (rt[ot++] = Wt), (rt[ot++] = or), (or = e);
  var r = Vt;
  e = Wt;
  var o = 32 - xt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - xt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Vt = (1 << (32 - xt(t) + o)) | (n << o) | r),
      (Wt = s + e);
  } else (Vt = (1 << s) | (n << o) | r), (Wt = e);
}
function Cu(e) {
  e.return !== null && (Wn(e, 1), Bp(e, 1, 0));
}
function bu(e) {
  for (; e === di; )
    (di = kr[--Pr]), (kr[Pr] = null), (fi = kr[--Pr]), (kr[Pr] = null);
  for (; e === or; )
    (or = rt[--ot]),
      (rt[ot] = null),
      (Wt = rt[--ot]),
      (rt[ot] = null),
      (Vt = rt[--ot]),
      (rt[ot] = null);
}
var Xe = null,
  Ge = null,
  ae = !1,
  wt = null;
function Up(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xe = e), (Ge = Nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = or !== null ? { id: Vt, overflow: Wt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xa(e) {
  if (ae) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!rd(e, t)) {
        if (wa(e)) throw Error(j(418));
        t = Nn(n.nextSibling);
        var r = Xe;
        t && rd(e, t)
          ? Up(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ae = !1), (Xe = e));
      }
    } else {
      if (wa(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (ae = !1), (Xe = e);
    }
  }
}
function od(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xe = e;
}
function Ts(e) {
  if (e !== Xe) return !1;
  if (!ae) return od(e), (ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ma(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (wa(e)) throw (Vp(), Error(j(418)));
    for (; t; ) Up(e, t), (t = Nn(t.nextSibling));
  }
  if ((od(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = Nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Xe ? Nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Vp() {
  for (var e = Ge; e; ) e = Nn(e.nextSibling);
}
function Gr() {
  (Ge = Xe = null), (ae = !1);
}
function ku(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
var Ny = Zt.ReactCurrentBatchConfig;
function go(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function Rs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sd(e) {
  var t = e._init;
  return t(e._payload);
}
function Wp(e) {
  function t(h, p) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [p]), (h.flags |= 16)) : v.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function o(h, p) {
    return (h = On(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function s(h, p, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((h.flags |= 2), p) : v)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, v, S) {
    return p === null || p.tag !== 6
      ? ((p = zl(v, h.mode, S)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function a(h, p, v, S) {
    var C = v.type;
    return C === wr
      ? c(h, p, v.props.children, S, v.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === dn &&
            sd(C) === p.type))
      ? ((S = o(p, v.props)), (S.ref = go(h, p, v)), (S.return = h), S)
      : ((S = Xs(v.type, v.key, v.props, null, h.mode, S)),
        (S.ref = go(h, p, v)),
        (S.return = h),
        S);
  }
  function u(h, p, v, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = Fl(v, h.mode, S)), (p.return = h), p)
      : ((p = o(p, v.children || [])), (p.return = h), p);
  }
  function c(h, p, v, S, C) {
    return p === null || p.tag !== 7
      ? ((p = nr(v, h.mode, S, C)), (p.return = h), p)
      : ((p = o(p, v)), (p.return = h), p);
  }
  function f(h, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = zl("" + p, h.mode, v)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ys:
          return (
            (v = Xs(p.type, p.key, p.props, null, h.mode, v)),
            (v.ref = go(h, null, p)),
            (v.return = h),
            v
          );
        case yr:
          return (p = Fl(p, h.mode, v)), (p.return = h), p;
        case dn:
          var S = p._init;
          return f(h, S(p._payload), v);
      }
      if (Eo(p) || co(p))
        return (p = nr(p, h.mode, v, null)), (p.return = h), p;
      Rs(h, p);
    }
    return null;
  }
  function m(h, p, v, S) {
    var C = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return C !== null ? null : l(h, p, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ys:
          return v.key === C ? a(h, p, v, S) : null;
        case yr:
          return v.key === C ? u(h, p, v, S) : null;
        case dn:
          return (C = v._init), m(h, p, C(v._payload), S);
      }
      if (Eo(v) || co(v)) return C !== null ? null : c(h, p, v, S, null);
      Rs(h, v);
    }
    return null;
  }
  function d(h, p, v, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(v) || null), l(p, h, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ys:
          return (h = h.get(S.key === null ? v : S.key) || null), a(p, h, S, C);
        case yr:
          return (h = h.get(S.key === null ? v : S.key) || null), u(p, h, S, C);
        case dn:
          var b = S._init;
          return d(h, p, v, b(S._payload), C);
      }
      if (Eo(S) || co(S)) return (h = h.get(v) || null), c(p, h, S, C, null);
      Rs(p, S);
    }
    return null;
  }
  function E(h, p, v, S) {
    for (
      var C = null, b = null, k = p, R = (p = 0), D = null;
      k !== null && R < v.length;
      R++
    ) {
      k.index > R ? ((D = k), (k = null)) : (D = k.sibling);
      var O = m(h, k, v[R], S);
      if (O === null) {
        k === null && (k = D);
        break;
      }
      e && k && O.alternate === null && t(h, k),
        (p = s(O, p, R)),
        b === null ? (C = O) : (b.sibling = O),
        (b = O),
        (k = D);
    }
    if (R === v.length) return n(h, k), ae && Wn(h, R), C;
    if (k === null) {
      for (; R < v.length; R++)
        (k = f(h, v[R], S)),
          k !== null &&
            ((p = s(k, p, R)), b === null ? (C = k) : (b.sibling = k), (b = k));
      return ae && Wn(h, R), C;
    }
    for (k = r(h, k); R < v.length; R++)
      (D = d(k, h, R, v[R], S)),
        D !== null &&
          (e && D.alternate !== null && k.delete(D.key === null ? R : D.key),
          (p = s(D, p, R)),
          b === null ? (C = D) : (b.sibling = D),
          (b = D));
    return (
      e &&
        k.forEach(function (z) {
          return t(h, z);
        }),
      ae && Wn(h, R),
      C
    );
  }
  function y(h, p, v, S) {
    var C = co(v);
    if (typeof C != "function") throw Error(j(150));
    if (((v = C.call(v)), v == null)) throw Error(j(151));
    for (
      var b = (C = null), k = p, R = (p = 0), D = null, O = v.next();
      k !== null && !O.done;
      R++, O = v.next()
    ) {
      k.index > R ? ((D = k), (k = null)) : (D = k.sibling);
      var z = m(h, k, O.value, S);
      if (z === null) {
        k === null && (k = D);
        break;
      }
      e && k && z.alternate === null && t(h, k),
        (p = s(z, p, R)),
        b === null ? (C = z) : (b.sibling = z),
        (b = z),
        (k = D);
    }
    if (O.done) return n(h, k), ae && Wn(h, R), C;
    if (k === null) {
      for (; !O.done; R++, O = v.next())
        (O = f(h, O.value, S)),
          O !== null &&
            ((p = s(O, p, R)), b === null ? (C = O) : (b.sibling = O), (b = O));
      return ae && Wn(h, R), C;
    }
    for (k = r(h, k); !O.done; R++, O = v.next())
      (O = d(k, h, R, O.value, S)),
        O !== null &&
          (e && O.alternate !== null && k.delete(O.key === null ? R : O.key),
          (p = s(O, p, R)),
          b === null ? (C = O) : (b.sibling = O),
          (b = O));
    return (
      e &&
        k.forEach(function (L) {
          return t(h, L);
        }),
      ae && Wn(h, R),
      C
    );
  }
  function x(h, p, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === wr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case ys:
          e: {
            for (var C = v.key, b = p; b !== null; ) {
              if (b.key === C) {
                if (((C = v.type), C === wr)) {
                  if (b.tag === 7) {
                    n(h, b.sibling),
                      (p = o(b, v.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  b.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === dn &&
                    sd(C) === b.type)
                ) {
                  n(h, b.sibling),
                    (p = o(b, v.props)),
                    (p.ref = go(h, b, v)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, b);
                break;
              } else t(h, b);
              b = b.sibling;
            }
            v.type === wr
              ? ((p = nr(v.props.children, h.mode, S, v.key)),
                (p.return = h),
                (h = p))
              : ((S = Xs(v.type, v.key, v.props, null, h.mode, S)),
                (S.ref = go(h, p, v)),
                (S.return = h),
                (h = S));
          }
          return i(h);
        case yr:
          e: {
            for (b = v.key; p !== null; ) {
              if (p.key === b)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(h, p.sibling),
                    (p = o(p, v.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Fl(v, h.mode, S)), (p.return = h), (h = p);
          }
          return i(h);
        case dn:
          return (b = v._init), x(h, p, b(v._payload), S);
      }
      if (Eo(v)) return E(h, p, v, S);
      if (co(v)) return y(h, p, v, S);
      Rs(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = o(p, v)), (p.return = h), (h = p))
          : (n(h, p), (p = zl(v, h.mode, S)), (p.return = h), (h = p)),
        i(h))
      : n(h, p);
  }
  return x;
}
var Xr = Wp(!0),
  Hp = Wp(!1),
  pi = Fn(null),
  hi = null,
  Nr = null,
  Pu = null;
function Nu() {
  Pu = Nr = hi = null;
}
function Tu(e) {
  var t = pi.current;
  ie(pi), (e._currentValue = t);
}
function Sa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Mr(e, t) {
  (hi = e),
    (Pu = Nr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function lt(e) {
  var t = e._currentValue;
  if (Pu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nr === null)) {
      if (hi === null) throw Error(j(308));
      (Nr = e), (hi.dependencies = { lanes: 0, firstContext: e });
    } else Nr = Nr.next = e;
  return t;
}
var Kn = null;
function Ru(e) {
  Kn === null ? (Kn = [e]) : Kn.push(e);
}
function Qp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Ru(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Yt(e, r)
  );
}
function Yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var fn = !1;
function ju(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Tn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Yt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ru(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Yt(e, n)
  );
}
function Ws(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mu(e, n);
  }
}
function id(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mi(e, t, n, r) {
  var o = e.updateQueue;
  fn = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), i === null ? (s = u) : (i.next = u), (i = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== i &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var f = o.baseState;
    (i = 0), (c = u = a = null), (l = s);
    do {
      var m = l.lane,
        d = l.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var E = e,
            y = l;
          switch (((m = t), (d = n), y.tag)) {
            case 1:
              if (((E = y.payload), typeof E == "function")) {
                f = E.call(d, f, m);
                break e;
              }
              f = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = y.payload),
                (m = typeof E == "function" ? E.call(d, f, m) : E),
                m == null)
              )
                break e;
              f = de({}, f, m);
              break e;
            case 2:
              fn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = o.effects),
          m === null ? (o.effects = [l]) : m.push(l));
      } else
        (d = {
          eventTime: d,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = d), (a = f)) : (c = c.next = d),
          (i |= m);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (o.lastBaseUpdate = m),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (ir |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function ld(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var us = {},
  Mt = Fn(us),
  Qo = Fn(us),
  Ko = Fn(us);
function Yn(e) {
  if (e === us) throw Error(j(174));
  return e;
}
function Ou(e, t) {
  switch ((ne(Ko, t), ne(Qo, e), ne(Mt, us), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ta(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ta(t, e));
  }
  ie(Mt), ne(Mt, t);
}
function qr() {
  ie(Mt), ie(Qo), ie(Ko);
}
function Yp(e) {
  Yn(Ko.current);
  var t = Yn(Mt.current),
    n = ta(t, e.type);
  t !== n && (ne(Qo, e), ne(Mt, n));
}
function _u(e) {
  Qo.current === e && (ie(Mt), ie(Qo));
}
var ue = Fn(0);
function gi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var _l = [];
function Au() {
  for (var e = 0; e < _l.length; e++)
    _l[e]._workInProgressVersionPrimary = null;
  _l.length = 0;
}
var Hs = Zt.ReactCurrentDispatcher,
  Al = Zt.ReactCurrentBatchConfig,
  sr = 0,
  ce = null,
  ve = null,
  Se = null,
  vi = !1,
  jo = !1,
  Yo = 0,
  Ty = 0;
function Re() {
  throw Error(j(321));
}
function Mu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Et(e[n], t[n])) return !1;
  return !0;
}
function Lu(e, t, n, r, o, s) {
  if (
    ((sr = s),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hs.current = e === null || e.memoizedState === null ? _y : Ay),
    (e = n(r, o)),
    jo)
  ) {
    s = 0;
    do {
      if (((jo = !1), (Yo = 0), 25 <= s)) throw Error(j(301));
      (s += 1),
        (Se = ve = null),
        (t.updateQueue = null),
        (Hs.current = My),
        (e = n(r, o));
    } while (jo);
  }
  if (
    ((Hs.current = yi),
    (t = ve !== null && ve.next !== null),
    (sr = 0),
    (Se = ve = ce = null),
    (vi = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Iu() {
  var e = Yo !== 0;
  return (Yo = 0), e;
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (ce.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function at() {
  if (ve === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = Se === null ? ce.memoizedState : Se.next;
  if (t !== null) (Se = t), (ve = e);
  else {
    if (e === null) throw Error(j(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      Se === null ? (ce.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function Go(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ml(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = ve,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var l = (i = null),
      a = null,
      u = s;
    do {
      var c = u.lane;
      if ((sr & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (i = r)) : (a = a.next = f),
          (ce.lanes |= c),
          (ir |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (i = r) : (a.next = l),
      Et(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (ce.lanes |= s), (ir |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    Et(s, t.memoizedState) || (Be = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Gp() {}
function Xp(e, t) {
  var n = ce,
    r = at(),
    o = t(),
    s = !Et(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (Be = !0)),
    (r = r.queue),
    Du(Jp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Xo(9, Zp.bind(null, n, r, o, t), void 0, null),
      Ee === null)
    )
      throw Error(j(349));
    sr & 30 || qp(n, t, o);
  }
  return o;
}
function qp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), eh(t) && th(e);
}
function Jp(e, t, n) {
  return n(function () {
    eh(t) && th(e);
  });
}
function eh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function th(e) {
  var t = Yt(e, 1);
  t !== null && St(t, e, 1, -1);
}
function ad(e) {
  var t = Nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Go,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Oy.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function Xo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ce.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nh() {
  return at().memoizedState;
}
function Qs(e, t, n, r) {
  var o = Nt();
  (ce.flags |= e),
    (o.memoizedState = Xo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fi(e, t, n, r) {
  var o = at();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ve !== null) {
    var i = ve.memoizedState;
    if (((s = i.destroy), r !== null && Mu(r, i.deps))) {
      o.memoizedState = Xo(t, n, s, r);
      return;
    }
  }
  (ce.flags |= e), (o.memoizedState = Xo(1 | t, n, s, r));
}
function ud(e, t) {
  return Qs(8390656, 8, e, t);
}
function Du(e, t) {
  return Fi(2048, 8, e, t);
}
function rh(e, t) {
  return Fi(4, 2, e, t);
}
function oh(e, t) {
  return Fi(4, 4, e, t);
}
function sh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ih(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fi(4, 4, sh.bind(null, t, e), n)
  );
}
function zu() {}
function lh(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ah(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function uh(e, t, n) {
  return sr & 21
    ? (Et(n, t) || ((n = hp()), (ce.lanes |= n), (ir |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function Ry(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (Al.transition = r);
  }
}
function ch() {
  return at().memoizedState;
}
function jy(e, t, n) {
  var r = jn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dh(e))
  )
    fh(t, n);
  else if (((n = Qp(e, t, n, r)), n !== null)) {
    var o = Ie();
    St(n, e, r, o), ph(n, t, r);
  }
}
function Oy(e, t, n) {
  var r = jn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dh(e)) fh(t, o);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Et(l, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Ru(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Qp(e, t, o, r)),
      n !== null && ((o = Ie()), St(n, e, r, o), ph(n, t, r));
  }
}
function dh(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function fh(e, t) {
  jo = vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ph(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), mu(e, n);
  }
}
var yi = {
    readContext: lt,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  _y = {
    readContext: lt,
    useCallback: function (e, t) {
      return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: lt,
    useEffect: ud,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Qs(4194308, 4, sh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Qs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Qs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = jy.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ad,
    useDebugValue: zu,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e);
    },
    useTransition: function () {
      var e = ad(!1),
        t = e[0];
      return (e = Ry.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        o = Nt();
      if (ae) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(j(349));
        sr & 30 || qp(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        ud(Jp.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Xo(9, Zp.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nt(),
        t = Ee.identifierPrefix;
      if (ae) {
        var n = Wt,
          r = Vt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ty++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ay = {
    readContext: lt,
    useCallback: lh,
    useContext: lt,
    useEffect: Du,
    useImperativeHandle: ih,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: ah,
    useReducer: Ml,
    useRef: nh,
    useState: function () {
      return Ml(Go);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = at();
      return uh(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Ml(Go)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Gp,
    useSyncExternalStore: Xp,
    useId: ch,
    unstable_isNewReconciler: !1,
  },
  My = {
    readContext: lt,
    useCallback: lh,
    useContext: lt,
    useEffect: Du,
    useImperativeHandle: ih,
    useInsertionEffect: rh,
    useLayoutEffect: oh,
    useMemo: ah,
    useReducer: Ll,
    useRef: nh,
    useState: function () {
      return Ll(Go);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = at();
      return ve === null ? (t.memoizedState = e) : uh(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(Go)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Gp,
    useSyncExternalStore: Xp,
    useId: ch,
    unstable_isNewReconciler: !1,
  };
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = de({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ea(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : de({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $i = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = jn(e),
      s = Ht(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Tn(e, s, o)),
      t !== null && (St(t, e, o, r), Ws(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = jn(e),
      s = Ht(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Tn(e, s, o)),
      t !== null && (St(t, e, o, r), Ws(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = jn(e),
      o = Ht(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Tn(e, o, r)),
      t !== null && (St(t, e, r, n), Ws(t, e, r));
  },
};
function cd(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Uo(n, r) || !Uo(o, s)
      : !0
  );
}
function hh(e, t, n) {
  var r = !1,
    o = An,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = lt(s))
      : ((o = Ve(t) ? rr : _e.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Yr(e, o) : An)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $i),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function dd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && $i.enqueueReplaceState(t, t.state, null);
}
function Ca(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ju(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (o.context = lt(s))
    : ((s = Ve(t) ? rr : _e.current), (o.context = Yr(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ea(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && $i.enqueueReplaceState(o, o.state, null),
      mi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += av(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Il(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ba(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Ly = typeof WeakMap == "function" ? WeakMap : Map;
function mh(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xi || ((xi = !0), (Ma = r)), ba(e, t);
    }),
    n
  );
}
function gh(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ba(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        ba(e, t),
          typeof r != "function" &&
            (Rn === null ? (Rn = new Set([this])) : Rn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function fd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Ly();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Gy.bind(null, e, t, n)), t.then(e, e));
}
function pd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function hd(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ht(-1, 1)), (t.tag = 2), Tn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Iy = Zt.ReactCurrentOwner,
  Be = !1;
function Me(e, t, n, r) {
  t.child = e === null ? Hp(t, null, n, r) : Xr(t, e.child, n, r);
}
function md(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Mr(t, o),
    (r = Lu(e, t, n, r, s, o)),
    (n = Iu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gt(e, t, o))
      : (ae && n && Cu(t), (t.flags |= 1), Me(e, t, r, o), t.child)
  );
}
function gd(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Qu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), vh(e, t, s, r, o))
      : ((e = Xs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Uo), n(i, r) && e.ref === t.ref)
    )
      return Gt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = On(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vh(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Uo(s, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), Gt(e, t, o);
  }
  return ka(e, t, n, r, o);
}
function yh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Rr, Ke),
        (Ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Rr, Ke),
          (Ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ne(Rr, Ke),
        (Ke |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Rr, Ke),
      (Ke |= r);
  return Me(e, t, o, n), t.child;
}
function wh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ka(e, t, n, r, o) {
  var s = Ve(n) ? rr : _e.current;
  return (
    (s = Yr(t, s)),
    Mr(t, o),
    (n = Lu(e, t, n, r, s, o)),
    (r = Iu()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Gt(e, t, o))
      : (ae && r && Cu(t), (t.flags |= 1), Me(e, t, n, o), t.child)
  );
}
function vd(e, t, n, r, o) {
  if (Ve(n)) {
    var s = !0;
    ci(t);
  } else s = !1;
  if ((Mr(t, o), t.stateNode === null))
    Ks(e, t), hh(t, n, r), Ca(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = lt(u))
      : ((u = Ve(n) ? rr : _e.current), (u = Yr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && dd(t, i, r, u)),
      (fn = !1);
    var m = t.memoizedState;
    (i.state = m),
      mi(t, r, i, o),
      (a = t.memoizedState),
      l !== r || m !== a || Ue.current || fn
        ? (typeof c == "function" && (Ea(t, n, c, r), (a = t.memoizedState)),
          (l = fn || cd(t, n, l, r, m, a, u))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Kp(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : ht(t.type, l)),
      (i.props = u),
      (f = t.pendingProps),
      (m = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = lt(a))
        : ((a = Ve(n) ? rr : _e.current), (a = Yr(t, a)));
    var d = n.getDerivedStateFromProps;
    (c =
      typeof d == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== f || m !== a) && dd(t, i, r, a)),
      (fn = !1),
      (m = t.memoizedState),
      (i.state = m),
      mi(t, r, i, o);
    var E = t.memoizedState;
    l !== f || m !== E || Ue.current || fn
      ? (typeof d == "function" && (Ea(t, n, d, r), (E = t.memoizedState)),
        (u = fn || cd(t, n, u, r, m, E, a) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, E, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, E, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (i.props = r),
        (i.state = E),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pa(e, t, n, r, s, o);
}
function Pa(e, t, n, r, o, s) {
  wh(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && nd(t, n, !1), Gt(e, t, s);
  (r = t.stateNode), (Iy.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Xr(t, e.child, null, s)), (t.child = Xr(t, null, l, s)))
      : Me(e, t, l, s),
    (t.memoizedState = r.state),
    o && nd(t, n, !0),
    t.child
  );
}
function xh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? td(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && td(e, t.context, !1),
    Ou(e, t.containerInfo);
}
function yd(e, t, n, r, o) {
  return Gr(), ku(o), (t.flags |= 256), Me(e, t, n, r), t.child;
}
var Na = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ta(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Sh(e, t, n) {
  var r = t.pendingProps,
    o = ue.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ne(ue, o & 1),
    e === null)
  )
    return (
      xa(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = i))
                : (s = Vi(i, r, 0, null)),
              (e = nr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ta(n)),
              (t.memoizedState = Na),
              e)
            : Fu(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Dy(e, t, i, r, l, o, n);
  if (s) {
    (s = r.fallback), (i = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = On(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (s = On(l, s)) : ((s = nr(s, i, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ta(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (s.memoizedState = i),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Na),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = On(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fu(e, t) {
  return (
    (t = Vi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function js(e, t, n, r) {
  return (
    r !== null && ku(r),
    Xr(t, e.child, null, n),
    (e = Fu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Dy(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Il(Error(j(422)))), js(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (o = t.mode),
        (r = Vi({ mode: "visible", children: r.children }, o, 0, null)),
        (s = nr(s, o, i, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Xr(t, e.child, null, i),
        (t.child.memoizedState = Ta(i)),
        (t.memoizedState = Na),
        s);
  if (!(t.mode & 1)) return js(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(j(419))), (r = Il(s, r, void 0)), js(e, t, i, r);
  }
  if (((l = (i & e.childLanes) !== 0), Be || l)) {
    if (((r = Ee), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== s.retryLane &&
          ((s.retryLane = o), Yt(e, o), St(r, e, o, -1));
    }
    return Hu(), (r = Il(Error(j(421)))), js(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Xy.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ge = Nn(o.nextSibling)),
      (Xe = t),
      (ae = !0),
      (wt = null),
      e !== null &&
        ((rt[ot++] = Vt),
        (rt[ot++] = Wt),
        (rt[ot++] = or),
        (Vt = e.id),
        (Wt = e.overflow),
        (or = t)),
      (t = Fu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function wd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sa(e.return, t, n);
}
function Dl(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function Eh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((Me(e, t, r.children, n), (r = ue.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wd(e, n, t);
        else if (e.tag === 19) wd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(ue, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && gi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Dl(t, !1, o, n, s);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Dl(t, !0, n, null, s);
        break;
      case "together":
        Dl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ks(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ir |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = On(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = On(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function zy(e, t, n) {
  switch (t.tag) {
    case 3:
      xh(t), Gr();
      break;
    case 5:
      Yp(t);
      break;
    case 1:
      Ve(t.type) && ci(t);
      break;
    case 4:
      Ou(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ne(pi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(ue, ue.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Sh(e, t, n)
          : (ne(ue, ue.current & 1),
            (e = Gt(e, t, n)),
            e !== null ? e.sibling : null);
      ne(ue, ue.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Eh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ne(ue, ue.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yh(e, t, n);
  }
  return Gt(e, t, n);
}
var Ch, Ra, bh, kh;
Ch = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ra = function () {};
bh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Yn(Mt.current);
    var s = null;
    switch (n) {
      case "input":
        (o = ql(e, o)), (r = ql(e, r)), (s = []);
        break;
      case "select":
        (o = de({}, o, { value: void 0 })),
          (r = de({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (o = ea(e, o)), (r = ea(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ai);
    }
    na(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Lo.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                l[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Lo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && se("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
kh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vo(e, t) {
  if (!ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Fy(e, t, n) {
  var r = t.pendingProps;
  switch ((bu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return je(t), null;
    case 1:
      return Ve(t.type) && ui(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qr(),
        ie(Ue),
        ie(_e),
        Au(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ts(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), wt !== null && (Da(wt), (wt = null)))),
        Ra(e, t),
        je(t),
        null
      );
    case 5:
      _u(t);
      var o = Yn(Ko.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        bh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return je(t), null;
        }
        if (((e = Yn(Mt.current)), Ts(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Ot] = t), (r[Ho] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < bo.length; o++) se(bo[o], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              Tc(r, s), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              jc(r, s), se("invalid", r);
          }
          na(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ns(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Ns(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : Lo.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              ws(r), Rc(r, s, !0);
              break;
            case "textarea":
              ws(r), Oc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ai);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Jf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ot] = t),
            (e[Ho] = r),
            Ch(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ra(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < bo.length; o++) se(bo[o], e);
                o = r;
                break;
              case "source":
                se("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (o = r);
                break;
              case "details":
                se("toggle", e), (o = r);
                break;
              case "input":
                Tc(e, r), (o = ql(e, r)), se("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = de({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                jc(e, r), (o = ea(e, r)), se("invalid", e);
                break;
              default:
                o = r;
            }
            na(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? np(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ep(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Io(e, a)
                    : typeof a == "number" && Io(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Lo.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && se("scroll", e)
                      : a != null && uu(e, s, a, i));
              }
            switch (n) {
              case "input":
                ws(e), Rc(e, r, !1);
                break;
              case "textarea":
                ws(e), Oc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + _n(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? jr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      jr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ai);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) kh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = Yn(Ko.current)), Yn(Mt.current), Ts(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ot] = t),
            (s = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ns(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ns(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ot] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (ie(ue),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ae && Ge !== null && t.mode & 1 && !(t.flags & 128))
          Vp(), Gr(), (t.flags |= 98560), (s = !1);
        else if (((s = Ts(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(j(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(j(317));
            s[Ot] = t;
          } else
            Gr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (s = !1);
        } else wt !== null && (Da(wt), (wt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ue.current & 1 ? we === 0 && (we = 3) : Hu())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        qr(), Ra(e, t), e === null && Vo(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return Tu(t.type._context), je(t), null;
    case 17:
      return Ve(t.type) && ui(), je(t), null;
    case 19:
      if ((ie(ue), (s = t.memoizedState), s === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) vo(s, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = gi(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    vo(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(ue, (ue.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            he() > Jr &&
            ((t.flags |= 128), (r = !0), vo(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gi(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vo(s, !0),
              s.tail === null && s.tailMode === "hidden" && !i.alternate && !ae)
            )
              return je(t), null;
          } else
            2 * he() - s.renderingStartTime > Jr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vo(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = he()),
          (t.sibling = null),
          (n = ue.current),
          ne(ue, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ke & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function $y(e, t) {
  switch ((bu(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && ui(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qr(),
        ie(Ue),
        ie(_e),
        Au(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return _u(t), null;
    case 13:
      if (
        (ie(ue), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        Gr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ie(ue), null;
    case 4:
      return qr(), null;
    case 10:
      return Tu(t.type._context), null;
    case 22:
    case 23:
      return Wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Os = !1,
  Oe = !1,
  By = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Tr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        pe(e, t, r);
      }
    else n.current = null;
}
function ja(e, t, n) {
  try {
    n();
  } catch (r) {
    pe(e, t, r);
  }
}
var xd = !1;
function Uy(e, t) {
  if (((pa = si), (e = jp()), Eu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            m = null;
          t: for (;;) {
            for (
              var d;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = i + o),
                f !== s || (r !== 0 && f.nodeType !== 3) || (a = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (d = f.firstChild) !== null;

            )
              (m = f), (f = d);
            for (;;) {
              if (f === e) break t;
              if (
                (m === n && ++u === o && (l = i),
                m === s && ++c === r && (a = i),
                (d = f.nextSibling) !== null)
              )
                break;
              (f = m), (m = f.parentNode);
            }
            f = d;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ha = { focusedElem: e, selectionRange: n }, si = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var y = E.memoizedProps,
                    x = E.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : ht(t.type, y),
                      x
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (S) {
          pe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (E = xd), (xd = !1), E;
}
function Oo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && ja(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Bi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ph(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ph(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ot], delete t[Ho], delete t[va], delete t[by], delete t[ky])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Nh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Sd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nh(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function _a(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ai));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_a(e, t, n), e = e.sibling; e !== null; ) _a(e, t, n), (e = e.sibling);
}
function Aa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Aa(e, t, n), e = e.sibling; e !== null; ) Aa(e, t, n), (e = e.sibling);
}
var Ce = null,
  yt = !1;
function ln(e, t, n) {
  for (n = n.child; n !== null; ) Th(e, t, n), (n = n.sibling);
}
function Th(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == "function")
    try {
      At.onCommitFiberUnmount(Ai, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Oe || Tr(n, t);
    case 6:
      var r = Ce,
        o = yt;
      (Ce = null),
        ln(e, t, n),
        (Ce = r),
        (yt = o),
        Ce !== null &&
          (yt
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ce.removeChild(n.stateNode));
      break;
    case 18:
      Ce !== null &&
        (yt
          ? ((e = Ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? jl(e.parentNode, n)
              : e.nodeType === 1 && jl(e, n),
            $o(e))
          : jl(Ce, n.stateNode));
      break;
    case 4:
      (r = Ce),
        (o = yt),
        (Ce = n.stateNode.containerInfo),
        (yt = !0),
        ln(e, t, n),
        (Ce = r),
        (yt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Oe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && ja(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      ln(e, t, n);
      break;
    case 1:
      if (
        !Oe &&
        (Tr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          pe(n, t, l);
        }
      ln(e, t, n);
      break;
    case 21:
      ln(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Oe = (r = Oe) || n.memoizedState !== null), ln(e, t, n), (Oe = r))
        : ln(e, t, n);
      break;
    default:
      ln(e, t, n);
  }
}
function Ed(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new By()),
      t.forEach(function (r) {
        var o = qy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ce = l.stateNode), (yt = !1);
              break e;
            case 3:
              (Ce = l.stateNode.containerInfo), (yt = !0);
              break e;
            case 4:
              (Ce = l.stateNode.containerInfo), (yt = !0);
              break e;
          }
          l = l.return;
        }
        if (Ce === null) throw Error(j(160));
        Th(s, i, o), (Ce = null), (yt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        pe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Rh(t, e), (t = t.sibling);
}
function Rh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), Pt(e), r & 4)) {
        try {
          Oo(3, e, e.return), Bi(3, e);
        } catch (y) {
          pe(e, e.return, y);
        }
        try {
          Oo(5, e, e.return);
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      break;
    case 1:
      ft(t, e), Pt(e), r & 512 && n !== null && Tr(n, n.return);
      break;
    case 5:
      if (
        (ft(t, e),
        Pt(e),
        r & 512 && n !== null && Tr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Io(o, "");
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && qf(o, s),
              ra(l, i);
            var u = ra(l, s);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                f = a[i + 1];
              c === "style"
                ? np(o, f)
                : c === "dangerouslySetInnerHTML"
                ? ep(o, f)
                : c === "children"
                ? Io(o, f)
                : uu(o, c, f, u);
            }
            switch (l) {
              case "input":
                Zl(o, s);
                break;
              case "textarea":
                Zf(o, s);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var d = s.value;
                d != null
                  ? jr(o, !!s.multiple, d, !1)
                  : m !== !!s.multiple &&
                    (s.defaultValue != null
                      ? jr(o, !!s.multiple, s.defaultValue, !0)
                      : jr(o, !!s.multiple, s.multiple ? [] : "", !1));
            }
            o[Ho] = s;
          } catch (y) {
            pe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((ft(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (s = e.memoizedProps);
        try {
          o.nodeValue = s;
        } catch (y) {
          pe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (ft(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          $o(t.containerInfo);
        } catch (y) {
          pe(e, e.return, y);
        }
      break;
    case 4:
      ft(t, e), Pt(e);
      break;
    case 13:
      ft(t, e),
        Pt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((s = o.memoizedState !== null),
          (o.stateNode.isHidden = s),
          !s ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Uu = he())),
        r & 4 && Ed(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Oe = (u = Oe) || c), ft(t, e), (Oe = u)) : ft(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (f = I = c; I !== null; ) {
              switch (((m = I), (d = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Oo(4, m, m.return);
                  break;
                case 1:
                  Tr(m, m.return);
                  var E = m.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (y) {
                      pe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Tr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    bd(f);
                    continue;
                  }
              }
              d !== null ? ((d.return = m), (I = d)) : bd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = tp("display", i)));
              } catch (y) {
                pe(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                pe(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), Pt(e), r & 4 && Ed(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), Pt(e);
  }
}
function Pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Io(o, ""), (r.flags &= -33));
          var s = Sd(e);
          Aa(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Sd(e);
          _a(e, l, i);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      pe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Vy(e, t, n) {
  (I = e), jh(e);
}
function jh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Os;
      if (!i) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || Oe;
        l = Os;
        var u = Oe;
        if (((Os = i), (Oe = a) && !u))
          for (I = o; I !== null; )
            (i = I),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? kd(o)
                : a !== null
                ? ((a.return = i), (I = a))
                : kd(o);
        for (; s !== null; ) (I = s), jh(s), (s = s.sibling);
        (I = o), (Os = l), (Oe = u);
      }
      Cd(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), (I = s)) : Cd(e);
  }
}
function Cd(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Oe || Bi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Oe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && ld(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ld(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && $o(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Oe || (t.flags & 512 && Oa(t));
      } catch (m) {
        pe(t, t.return, m);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function bd(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function kd(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bi(4, t);
          } catch (a) {
            pe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              pe(t, o, a);
            }
          }
          var s = t.return;
          try {
            Oa(t);
          } catch (a) {
            pe(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oa(t);
          } catch (a) {
            pe(t, i, a);
          }
      }
    } catch (a) {
      pe(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var Wy = Math.ceil,
  wi = Zt.ReactCurrentDispatcher,
  $u = Zt.ReactCurrentOwner,
  it = Zt.ReactCurrentBatchConfig,
  Z = 0,
  Ee = null,
  ge = null,
  ke = 0,
  Ke = 0,
  Rr = Fn(0),
  we = 0,
  qo = null,
  ir = 0,
  Ui = 0,
  Bu = 0,
  _o = null,
  $e = null,
  Uu = 0,
  Jr = 1 / 0,
  $t = null,
  xi = !1,
  Ma = null,
  Rn = null,
  _s = !1,
  En = null,
  Si = 0,
  Ao = 0,
  La = null,
  Ys = -1,
  Gs = 0;
function Ie() {
  return Z & 6 ? he() : Ys !== -1 ? Ys : (Ys = he());
}
function jn(e) {
  return e.mode & 1
    ? Z & 2 && ke !== 0
      ? ke & -ke
      : Ny.transition !== null
      ? (Gs === 0 && (Gs = hp()), Gs)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sp(e.type))),
        e)
    : 1;
}
function St(e, t, n, r) {
  if (50 < Ao) throw ((Ao = 0), (La = null), Error(j(185)));
  is(e, n, r),
    (!(Z & 2) || e !== Ee) &&
      (e === Ee && (!(Z & 2) && (Ui |= n), we === 4 && hn(e, ke)),
      We(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Jr = he() + 500), zi && $n()));
}
function We(e, t) {
  var n = e.callbackNode;
  Nv(e, t);
  var r = oi(e, e === Ee ? ke : 0);
  if (r === 0)
    n !== null && Mc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Mc(n), t === 1))
      e.tag === 0 ? Py(Pd.bind(null, e)) : $p(Pd.bind(null, e)),
        Ey(function () {
          !(Z & 6) && $n();
        }),
        (n = null);
    else {
      switch (mp(r)) {
        case 1:
          n = hu;
          break;
        case 4:
          n = fp;
          break;
        case 16:
          n = ri;
          break;
        case 536870912:
          n = pp;
          break;
        default:
          n = ri;
      }
      n = zh(n, Oh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Oh(e, t) {
  if (((Ys = -1), (Gs = 0), Z & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Lr() && e.callbackNode !== n) return null;
  var r = oi(e, e === Ee ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ei(e, r);
  else {
    t = r;
    var o = Z;
    Z |= 2;
    var s = Ah();
    (Ee !== e || ke !== t) && (($t = null), (Jr = he() + 500), tr(e, t));
    do
      try {
        Ky();
        break;
      } catch (l) {
        _h(e, l);
      }
    while (!0);
    Nu(),
      (wi.current = s),
      (Z = o),
      ge !== null ? (t = 0) : ((Ee = null), (ke = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = aa(e)), o !== 0 && ((r = o), (t = Ia(e, o)))), t === 1)
    )
      throw ((n = qo), tr(e, 0), hn(e, r), We(e, he()), n);
    if (t === 6) hn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Hy(o) &&
          ((t = Ei(e, r)),
          t === 2 && ((s = aa(e)), s !== 0 && ((r = s), (t = Ia(e, s)))),
          t === 1))
      )
        throw ((n = qo), tr(e, 0), hn(e, r), We(e, he()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Hn(e, $e, $t);
          break;
        case 3:
          if (
            (hn(e, r), (r & 130023424) === r && ((t = Uu + 500 - he()), 10 < t))
          ) {
            if (oi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ga(Hn.bind(null, e, $e, $t), t);
            break;
          }
          Hn(e, $e, $t);
          break;
        case 4:
          if ((hn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - xt(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Wy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ga(Hn.bind(null, e, $e, $t), r);
            break;
          }
          Hn(e, $e, $t);
          break;
        case 5:
          Hn(e, $e, $t);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return We(e, he()), e.callbackNode === n ? Oh.bind(null, e) : null;
}
function Ia(e, t) {
  var n = _o;
  return (
    e.current.memoizedState.isDehydrated && (tr(e, t).flags |= 256),
    (e = Ei(e, t)),
    e !== 2 && ((t = $e), ($e = n), t !== null && Da(t)),
    e
  );
}
function Da(e) {
  $e === null ? ($e = e) : $e.push.apply($e, e);
}
function Hy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!Et(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function hn(e, t) {
  for (
    t &= ~Bu,
      t &= ~Ui,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Pd(e) {
  if (Z & 6) throw Error(j(327));
  Lr();
  var t = oi(e, 0);
  if (!(t & 1)) return We(e, he()), null;
  var n = Ei(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = aa(e);
    r !== 0 && ((t = r), (n = Ia(e, r)));
  }
  if (n === 1) throw ((n = qo), tr(e, 0), hn(e, t), We(e, he()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Hn(e, $e, $t),
    We(e, he()),
    null
  );
}
function Vu(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Jr = he() + 500), zi && $n());
  }
}
function lr(e) {
  En !== null && En.tag === 0 && !(Z & 6) && Lr();
  var t = Z;
  Z |= 1;
  var n = it.transition,
    r = ee;
  try {
    if (((it.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (it.transition = n), (Z = t), !(Z & 6) && $n();
  }
}
function Wu() {
  (Ke = Rr.current), ie(Rr);
}
function tr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Sy(n)), ge !== null))
    for (n = ge.return; n !== null; ) {
      var r = n;
      switch ((bu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ui();
          break;
        case 3:
          qr(), ie(Ue), ie(_e), Au();
          break;
        case 5:
          _u(r);
          break;
        case 4:
          qr();
          break;
        case 13:
          ie(ue);
          break;
        case 19:
          ie(ue);
          break;
        case 10:
          Tu(r.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (ge = e = On(e.current, null)),
    (ke = Ke = t),
    (we = 0),
    (qo = null),
    (Bu = Ui = ir = 0),
    ($e = _o = null),
    Kn !== null)
  ) {
    for (t = 0; t < Kn.length; t++)
      if (((n = Kn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Kn = null;
  }
  return e;
}
function _h(e, t) {
  do {
    var n = ge;
    try {
      if ((Nu(), (Hs.current = yi), vi)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        vi = !1;
      }
      if (
        ((sr = 0),
        (Se = ve = ce = null),
        (jo = !1),
        (Yo = 0),
        ($u.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (qo = t), (ge = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          a = t;
        if (
          ((t = ke),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var d = pd(i);
          if (d !== null) {
            (d.flags &= -257),
              hd(d, i, l, s, t),
              d.mode & 1 && fd(s, u, t),
              (t = d),
              (a = u);
            var E = t.updateQueue;
            if (E === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else E.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              fd(s, u, t), Hu();
              break e;
            }
            a = Error(j(426));
          }
        } else if (ae && l.mode & 1) {
          var x = pd(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              hd(x, i, l, s, t),
              ku(Zr(a, l));
            break e;
          }
        }
        (s = a = Zr(a, l)),
          we !== 4 && (we = 2),
          _o === null ? (_o = [s]) : _o.push(s),
          (s = i);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var h = mh(s, a, t);
              id(s, h);
              break e;
            case 1:
              l = a;
              var p = s.type,
                v = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Rn === null || !Rn.has(v))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = gh(s, l, t);
                id(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Lh(n);
    } catch (C) {
      (t = C), ge === n && n !== null && (ge = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ah() {
  var e = wi.current;
  return (wi.current = yi), e === null ? yi : e;
}
function Hu() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Ee === null || (!(ir & 268435455) && !(Ui & 268435455)) || hn(Ee, ke);
}
function Ei(e, t) {
  var n = Z;
  Z |= 2;
  var r = Ah();
  (Ee !== e || ke !== t) && (($t = null), tr(e, t));
  do
    try {
      Qy();
      break;
    } catch (o) {
      _h(e, o);
    }
  while (!0);
  if ((Nu(), (Z = n), (wi.current = r), ge !== null)) throw Error(j(261));
  return (Ee = null), (ke = 0), we;
}
function Qy() {
  for (; ge !== null; ) Mh(ge);
}
function Ky() {
  for (; ge !== null && !yv(); ) Mh(ge);
}
function Mh(e) {
  var t = Dh(e.alternate, e, Ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Lh(e) : (ge = t),
    ($u.current = null);
}
function Lh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $y(n, t)), n !== null)) {
        (n.flags &= 32767), (ge = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (ge = null);
        return;
      }
    } else if (((n = Fy(n, t, Ke)), n !== null)) {
      ge = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ge = t;
      return;
    }
    ge = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function Hn(e, t, n) {
  var r = ee,
    o = it.transition;
  try {
    (it.transition = null), (ee = 1), Yy(e, t, n, r);
  } finally {
    (it.transition = o), (ee = r);
  }
  return null;
}
function Yy(e, t, n, r) {
  do Lr();
  while (En !== null);
  if (Z & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Tv(e, s),
    e === Ee && ((ge = Ee = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _s ||
      ((_s = !0),
      zh(ri, function () {
        return Lr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = it.transition), (it.transition = null);
    var i = ee;
    ee = 1;
    var l = Z;
    (Z |= 4),
      ($u.current = null),
      Uy(e, n),
      Rh(n, e),
      hy(ha),
      (si = !!pa),
      (ha = pa = null),
      (e.current = n),
      Vy(n),
      wv(),
      (Z = l),
      (ee = i),
      (it.transition = s);
  } else e.current = n;
  if (
    (_s && ((_s = !1), (En = e), (Si = o)),
    (s = e.pendingLanes),
    s === 0 && (Rn = null),
    Ev(n.stateNode),
    We(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xi) throw ((xi = !1), (e = Ma), (Ma = null), e);
  return (
    Si & 1 && e.tag !== 0 && Lr(),
    (s = e.pendingLanes),
    s & 1 ? (e === La ? Ao++ : ((Ao = 0), (La = e))) : (Ao = 0),
    $n(),
    null
  );
}
function Lr() {
  if (En !== null) {
    var e = mp(Si),
      t = it.transition,
      n = ee;
    try {
      if (((it.transition = null), (ee = 16 > e ? 16 : e), En === null))
        var r = !1;
      else {
        if (((e = En), (En = null), (Si = 0), Z & 6)) throw Error(j(331));
        var o = Z;
        for (Z |= 4, I = e.current; I !== null; ) {
          var s = I,
            i = s.child;
          if (I.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oo(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (I = f);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var m = c.sibling,
                        d = c.return;
                      if ((Ph(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = d), (I = m);
                        break;
                      }
                      I = d;
                    }
                }
              }
              var E = s.alternate;
              if (E !== null) {
                var y = E.child;
                if (y !== null) {
                  E.child = null;
                  do {
                    var x = y.sibling;
                    (y.sibling = null), (y = x);
                  } while (y !== null);
                }
              }
              I = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), (I = i);
          else
            e: for (; I !== null; ) {
              if (((s = I), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Oo(9, s, s.return);
                }
              var h = s.sibling;
              if (h !== null) {
                (h.return = s.return), (I = h);
                break e;
              }
              I = s.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          i = I;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (I = v);
          else
            e: for (i = p; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bi(9, l);
                  }
                } catch (C) {
                  pe(l, l.return, C);
                }
              if (l === i) {
                I = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (I = S);
                break e;
              }
              I = l.return;
            }
        }
        if (
          ((Z = o), $n(), At && typeof At.onPostCommitFiberRoot == "function")
        )
          try {
            At.onPostCommitFiberRoot(Ai, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (it.transition = t);
    }
  }
  return !1;
}
function Nd(e, t, n) {
  (t = Zr(n, t)),
    (t = mh(e, t, 1)),
    (e = Tn(e, t, 1)),
    (t = Ie()),
    e !== null && (is(e, 1, t), We(e, t));
}
function pe(e, t, n) {
  if (e.tag === 3) Nd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Nd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rn === null || !Rn.has(r)))
        ) {
          (e = Zr(n, e)),
            (e = gh(t, e, 1)),
            (t = Tn(t, e, 1)),
            (e = Ie()),
            t !== null && (is(t, 1, e), We(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Gy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (ke & n) === n &&
      (we === 4 || (we === 3 && (ke & 130023424) === ke && 500 > he() - Uu)
        ? tr(e, 0)
        : (Bu |= n)),
    We(e, t);
}
function Ih(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Es), (Es <<= 1), !(Es & 130023424) && (Es = 4194304))
      : (t = 1));
  var n = Ie();
  (e = Yt(e, t)), e !== null && (is(e, t, n), We(e, n));
}
function Xy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ih(e, n);
}
function qy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Ih(e, n);
}
var Dh;
Dh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ue.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), zy(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), ae && t.flags & 1048576 && Bp(t, fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ks(e, t), (e = t.pendingProps);
      var o = Yr(t, _e.current);
      Mr(t, n), (o = Lu(null, t, r, e, o, n));
      var s = Iu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((s = !0), ci(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ju(t),
            (o.updater = $i),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ca(t, r, e, n),
            (t = Pa(null, t, r, !0, s, n)))
          : ((t.tag = 0), ae && s && Cu(t), Me(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ks(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Jy(r)),
          (e = ht(r, e)),
          o)
        ) {
          case 0:
            t = ka(null, t, r, e, n);
            break e;
          case 1:
            t = vd(null, t, r, e, n);
            break e;
          case 11:
            t = md(null, t, r, e, n);
            break e;
          case 14:
            t = gd(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        ka(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        vd(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((xh(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          Kp(e, t),
          mi(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = Zr(Error(j(423)), t)), (t = yd(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Zr(Error(j(424)), t)), (t = yd(e, t, r, n, o));
            break e;
          } else
            for (
              Ge = Nn(t.stateNode.containerInfo.firstChild),
                Xe = t,
                ae = !0,
                wt = null,
                n = Hp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gr(), r === o)) {
            t = Gt(e, t, n);
            break e;
          }
          Me(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Yp(t),
        e === null && xa(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        ma(r, o) ? (i = null) : s !== null && ma(r, s) && (t.flags |= 32),
        wh(e, t),
        Me(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && xa(t), null;
    case 13:
      return Sh(e, t, n);
    case 4:
      return (
        Ou(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xr(t, null, r, n)) : Me(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        md(e, t, r, o, n)
      );
    case 7:
      return Me(e, t, t.pendingProps, n), t.child;
    case 8:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Me(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          ne(pi, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (Et(s.value, i)) {
            if (s.children === o.children && !Ue.current) {
              t = Gt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = Ht(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Sa(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(j(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Sa(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        Me(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Mr(t, n),
        (o = lt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Me(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ht(r, t.pendingProps)),
        (o = ht(r.type, o)),
        gd(e, t, r, o, n)
      );
    case 15:
      return vh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ht(r, o)),
        Ks(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), ci(t)) : (e = !1),
        Mr(t, n),
        hh(t, r, o),
        Ca(t, r, o, n),
        Pa(null, t, r, !0, e, n)
      );
    case 19:
      return Eh(e, t, n);
    case 22:
      return yh(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function zh(e, t) {
  return dp(e, t);
}
function Zy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function st(e, t, n, r) {
  return new Zy(e, t, n, r);
}
function Qu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Jy(e) {
  if (typeof e == "function") return Qu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === du)) return 11;
    if (e === fu) return 14;
  }
  return 2;
}
function On(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Xs(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == "function")) Qu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case wr:
        return nr(n.children, o, s, t);
      case cu:
        (i = 8), (o |= 8);
        break;
      case Kl:
        return (
          (e = st(12, n, t, o | 2)), (e.elementType = Kl), (e.lanes = s), e
        );
      case Yl:
        return (e = st(13, n, t, o)), (e.elementType = Yl), (e.lanes = s), e;
      case Gl:
        return (e = st(19, n, t, o)), (e.elementType = Gl), (e.lanes = s), e;
      case Yf:
        return Vi(n, o, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Qf:
              i = 10;
              break e;
            case Kf:
              i = 9;
              break e;
            case du:
              i = 11;
              break e;
            case fu:
              i = 14;
              break e;
            case dn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function nr(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function Vi(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = Yf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function zl(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function Fl(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function e0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = wl(0)),
    (this.expirationTimes = wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ku(e, t, n, r, o, s, i, l, a) {
  return (
    (e = new e0(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = st(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ju(s),
    e
  );
}
function t0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fh(e) {
  if (!e) return An;
  e = e._reactInternals;
  e: {
    if (cr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return Fp(e, n, t);
  }
  return t;
}
function $h(e, t, n, r, o, s, i, l, a) {
  return (
    (e = Ku(n, r, !0, e, o, s, i, l, a)),
    (e.context = Fh(null)),
    (n = e.current),
    (r = Ie()),
    (o = jn(n)),
    (s = Ht(r, o)),
    (s.callback = t ?? null),
    Tn(n, s, o),
    (e.current.lanes = o),
    is(e, o, r),
    We(e, r),
    e
  );
}
function Wi(e, t, n, r) {
  var o = t.current,
    s = Ie(),
    i = jn(o);
  return (
    (n = Fh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ht(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Tn(o, t, i)),
    e !== null && (St(e, o, i, s), Ws(e, o, i)),
    i
  );
}
function Ci(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Td(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yu(e, t) {
  Td(e, t), (e = e.alternate) && Td(e, t);
}
function n0() {
  return null;
}
var Bh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Gu(e) {
  this._internalRoot = e;
}
Hi.prototype.render = Gu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Wi(e, t, null, null);
};
Hi.prototype.unmount = Gu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    lr(function () {
      Wi(null, e, null, null);
    }),
      (t[Kt] = null);
  }
};
function Hi(e) {
  this._internalRoot = e;
}
Hi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pn.length && t !== 0 && t < pn[n].priority; n++);
    pn.splice(n, 0, e), n === 0 && xp(e);
  }
};
function Xu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Rd() {}
function r0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Ci(i);
        s.call(u);
      };
    }
    var i = $h(t, r, e, 0, null, !1, !1, "", Rd);
    return (
      (e._reactRootContainer = i),
      (e[Kt] = i.current),
      Vo(e.nodeType === 8 ? e.parentNode : e),
      lr(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Ci(a);
      l.call(u);
    };
  }
  var a = Ku(e, 0, !1, null, null, !1, !1, "", Rd);
  return (
    (e._reactRootContainer = a),
    (e[Kt] = a.current),
    Vo(e.nodeType === 8 ? e.parentNode : e),
    lr(function () {
      Wi(t, a, n, r);
    }),
    a
  );
}
function Ki(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = Ci(i);
        l.call(a);
      };
    }
    Wi(t, i, e, o);
  } else i = r0(n, t, e, o, r);
  return Ci(i);
}
gp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Co(t.pendingLanes);
        n !== 0 &&
          (mu(t, n | 1), We(t, he()), !(Z & 6) && ((Jr = he() + 500), $n()));
      }
      break;
    case 13:
      lr(function () {
        var r = Yt(e, 1);
        if (r !== null) {
          var o = Ie();
          St(r, e, 1, o);
        }
      }),
        Yu(e, 1);
  }
};
gu = function (e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728);
    if (t !== null) {
      var n = Ie();
      St(t, e, 134217728, n);
    }
    Yu(e, 134217728);
  }
};
vp = function (e) {
  if (e.tag === 13) {
    var t = jn(e),
      n = Yt(e, t);
    if (n !== null) {
      var r = Ie();
      St(n, e, t, r);
    }
    Yu(e, t);
  }
};
yp = function () {
  return ee;
};
wp = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
sa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Zl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Di(r);
            if (!o) throw Error(j(90));
            Xf(r), Zl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Zf(e, n);
      break;
    case "select":
      (t = n.value), t != null && jr(e, !!n.multiple, t, !1);
  }
};
sp = Vu;
ip = lr;
var o0 = { usingClientEntryPoint: !1, Events: [as, Cr, Di, rp, op, Vu] },
  yo = {
    findFiberByHostInstance: Qn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  s0 = {
    bundleType: yo.bundleType,
    version: yo.version,
    rendererPackageName: yo.rendererPackageName,
    rendererConfig: yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = up(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yo.findFiberByHostInstance || n0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var As = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!As.isDisabled && As.supportsFiber)
    try {
      (Ai = As.inject(s0)), (At = As);
    } catch {}
}
Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o0;
Je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xu(t)) throw Error(j(200));
  return t0(e, t, null, n);
};
Je.createRoot = function (e, t) {
  if (!Xu(e)) throw Error(j(299));
  var n = !1,
    r = "",
    o = Bh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ku(e, 1, !1, null, null, n, !1, r, o)),
    (e[Kt] = t.current),
    Vo(e.nodeType === 8 ? e.parentNode : e),
    new Gu(t)
  );
};
Je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = up(t)), (e = e === null ? null : e.stateNode), e;
};
Je.flushSync = function (e) {
  return lr(e);
};
Je.hydrate = function (e, t, n) {
  if (!Qi(t)) throw Error(j(200));
  return Ki(null, e, t, !0, n);
};
Je.hydrateRoot = function (e, t, n) {
  if (!Xu(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = "",
    i = Bh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = $h(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[Kt] = t.current),
    Vo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Hi(t);
};
Je.render = function (e, t, n) {
  if (!Qi(t)) throw Error(j(200));
  return Ki(null, e, t, !1, n);
};
Je.unmountComponentAtNode = function (e) {
  if (!Qi(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (lr(function () {
        Ki(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Kt] = null);
        });
      }),
      !0)
    : !1;
};
Je.unstable_batchedUpdates = Vu;
Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qi(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Ki(e, t, n, !1, r);
};
Je.version = "18.3.1-next-f1338f8080-20240426";
function Uh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uh);
    } catch (e) {
      console.error(e);
    }
}
Uh(), (Uf.exports = Je);
var cs = Uf.exports;
const Vh = jf(cs);
var Wh,
  jd = cs;
(Wh = jd.createRoot), jd.hydrateRoot;
const i0 = 1,
  l0 = 1e6;
let $l = 0;
function a0() {
  return ($l = ($l + 1) % Number.MAX_SAFE_INTEGER), $l.toString();
}
const Bl = new Map(),
  Od = (e) => {
    if (Bl.has(e)) return;
    const t = setTimeout(() => {
      Bl.delete(e), Mo({ type: "REMOVE_TOAST", toastId: e });
    }, l0);
    Bl.set(e, t);
  },
  u0 = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, i0) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Od(n)
            : e.toasts.forEach((r) => {
                Od(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  qs = [];
let Zs = { toasts: [] };
function Mo(e) {
  (Zs = u0(Zs, e)),
    qs.forEach((t) => {
      t(Zs);
    });
}
function c0({ ...e }) {
  const t = a0(),
    n = (o) => Mo({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => Mo({ type: "DISMISS_TOAST", toastId: t });
  return (
    Mo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Hh() {
  const [e, t] = w.useState(Zs);
  return (
    w.useEffect(
      () => (
        qs.push(t),
        () => {
          const n = qs.indexOf(t);
          n > -1 && qs.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: c0,
      dismiss: (n) => Mo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function ye(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function _d(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Yi(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = _d(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : _d(e[o], null);
        }
      };
  };
}
function Ct(...e) {
  return w.useCallback(Yi(...e), e);
}
function Gi(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = w.createContext(i),
      a = n.length;
    n = [...n, i];
    const u = (f) => {
      var h;
      const { scope: m, children: d, ...E } = f,
        y = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[a]) || l,
        x = w.useMemo(() => E, Object.values(E));
      return g.jsx(y.Provider, { value: x, children: d });
    };
    u.displayName = s + "Provider";
    function c(f, m) {
      var y;
      const d = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[a]) || l,
        E = w.useContext(d);
      if (E) return E;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [u, c];
  }
  const o = () => {
    const s = n.map((i) => w.createContext(i));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || s;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, d0(o, ...t)];
}
function d0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((l, { useScope: a, scopeName: u }) => {
        const f = a(s)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Ad(e) {
  const t = f0(e),
    n = w.forwardRef((r, o) => {
      const { children: s, ...i } = r,
        l = w.Children.toArray(s),
        a = l.find(h0);
      if (a) {
        const u = a.props.children,
          c = l.map((f) =>
            f === a
              ? w.Children.count(u) > 1
                ? w.Children.only(null)
                : w.isValidElement(u)
                ? u.props.children
                : null
              : f
          );
        return g.jsx(t, {
          ...i,
          ref: o,
          children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null,
        });
      }
      return g.jsx(t, { ...i, ref: o, children: s });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function f0(e) {
  const t = w.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (w.isValidElement(o)) {
      const i = g0(o),
        l = m0(s, o.props);
      return (
        o.type !== w.Fragment && (l.ref = r ? Yi(r, i) : i),
        w.cloneElement(o, l)
      );
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var p0 = Symbol("radix.slottable");
function h0(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === p0
  );
}
function m0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const a = s(...l);
            return o(...l), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function g0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function v0(e) {
  const t = e + "CollectionProvider",
    [n, r] = Gi(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (y) => {
      const { scope: x, children: h } = y,
        p = _.useRef(null),
        v = _.useRef(new Map()).current;
      return g.jsx(o, { scope: x, itemMap: v, collectionRef: p, children: h });
    };
  i.displayName = t;
  const l = e + "CollectionSlot",
    a = Ad(l),
    u = _.forwardRef((y, x) => {
      const { scope: h, children: p } = y,
        v = s(l, h),
        S = Ct(x, v.collectionRef);
      return g.jsx(a, { ref: S, children: p });
    });
  u.displayName = l;
  const c = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    m = Ad(c),
    d = _.forwardRef((y, x) => {
      const { scope: h, children: p, ...v } = y,
        S = _.useRef(null),
        C = Ct(x, S),
        b = s(c, h);
      return (
        _.useEffect(
          () => (
            b.itemMap.set(S, { ref: S, ...v }), () => void b.itemMap.delete(S)
          )
        ),
        g.jsx(m, { [f]: "", ref: C, children: p })
      );
    });
  d.displayName = c;
  function E(y) {
    const x = s(e + "CollectionConsumer", y);
    return _.useCallback(() => {
      const p = x.collectionRef.current;
      if (!p) return [];
      const v = Array.from(p.querySelectorAll(`[${f}]`));
      return Array.from(x.itemMap.values()).sort(
        (b, k) => v.indexOf(b.ref.current) - v.indexOf(k.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: d }, E, r];
}
function y0(e) {
  const t = w0(e),
    n = w.forwardRef((r, o) => {
      const { children: s, ...i } = r,
        l = w.Children.toArray(s),
        a = l.find(S0);
      if (a) {
        const u = a.props.children,
          c = l.map((f) =>
            f === a
              ? w.Children.count(u) > 1
                ? w.Children.only(null)
                : w.isValidElement(u)
                ? u.props.children
                : null
              : f
          );
        return g.jsx(t, {
          ...i,
          ref: o,
          children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null,
        });
      }
      return g.jsx(t, { ...i, ref: o, children: s });
    });
  return (n.displayName = `${e}.Slot`), n;
}
function w0(e) {
  const t = w.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (w.isValidElement(o)) {
      const i = C0(o),
        l = E0(s, o.props);
      return (
        o.type !== w.Fragment && (l.ref = r ? Yi(r, i) : i),
        w.cloneElement(o, l)
      );
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var x0 = Symbol("radix.slottable");
function S0(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === x0
  );
}
function E0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const a = s(...l);
            return o(...l), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function C0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var b0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Qe = b0.reduce((e, t) => {
    const n = y0(`Primitive.${t}`),
      r = w.forwardRef((o, s) => {
        const { asChild: i, ...l } = o,
          a = i ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          g.jsx(a, { ...l, ref: s })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function Qh(e, t) {
  e && cs.flushSync(() => e.dispatchEvent(t));
}
function Mn(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function k0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mn(e);
  w.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var P0 = "DismissableLayer",
  za = "dismissableLayer.update",
  N0 = "dismissableLayer.pointerDownOutside",
  T0 = "dismissableLayer.focusOutside",
  Md,
  Kh = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  qu = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: i,
        onDismiss: l,
        ...a
      } = e,
      u = w.useContext(Kh),
      [c, f] = w.useState(null),
      m =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, d] = w.useState({}),
      E = Ct(t, (k) => f(k)),
      y = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = y.indexOf(x),
      p = c ? y.indexOf(c) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = p >= h,
      C = j0((k) => {
        const R = k.target,
          D = [...u.branches].some((O) => O.contains(R));
        !S ||
          D ||
          (o == null || o(k),
          i == null || i(k),
          k.defaultPrevented || l == null || l());
      }, m),
      b = O0((k) => {
        const R = k.target;
        [...u.branches].some((O) => O.contains(R)) ||
          (s == null || s(k),
          i == null || i(k),
          k.defaultPrevented || l == null || l());
      }, m);
    return (
      k0((k) => {
        p === u.layers.size - 1 &&
          (r == null || r(k),
          !k.defaultPrevented && l && (k.preventDefault(), l()));
      }, m),
      w.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Md = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            Ld(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = Md);
            }
          );
      }, [c, m, n, u]),
      w.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            Ld());
        },
        [c, u]
      ),
      w.useEffect(() => {
        const k = () => d({});
        return (
          document.addEventListener(za, k),
          () => document.removeEventListener(za, k)
        );
      }, []),
      g.jsx(Qe.div, {
        ...a,
        ref: E,
        style: {
          pointerEvents: v ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: ye(e.onFocusCapture, b.onFocusCapture),
        onBlurCapture: ye(e.onBlurCapture, b.onBlurCapture),
        onPointerDownCapture: ye(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
qu.displayName = P0;
var R0 = "DismissableLayerBranch",
  Yh = w.forwardRef((e, t) => {
    const n = w.useContext(Kh),
      r = w.useRef(null),
      o = Ct(t, r);
    return (
      w.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      g.jsx(Qe.div, { ...e, ref: o })
    );
  });
Yh.displayName = R0;
function j0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mn(e),
    r = w.useRef(!1),
    o = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const s = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              Gh(N0, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function O0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mn(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          Gh(T0, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Ld() {
  const e = new CustomEvent(za);
  document.dispatchEvent(e);
}
function Gh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Qh(o, s) : o.dispatchEvent(s);
}
var _0 = qu,
  A0 = Yh,
  Ln = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  M0 = "Portal",
  Xh = w.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, s] = w.useState(!1);
    Ln(() => s(!0), []);
    const i =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return i ? Vh.createPortal(g.jsx(Qe.div, { ...r, ref: t }), i) : null;
  });
Xh.displayName = M0;
function L0(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var Zu = (e) => {
  const { present: t, children: n } = e,
    r = I0(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    s = Ct(r.ref, D0(o));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(o, { ref: s })
    : null;
};
Zu.displayName = "Presence";
function I0(e) {
  const [t, n] = w.useState(),
    r = w.useRef(null),
    o = w.useRef(e),
    s = w.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [l, a] = L0(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const u = Ms(r.current);
      s.current = l === "mounted" ? u : "none";
    }, [l]),
    Ln(() => {
      const u = r.current,
        c = o.current;
      if (c !== e) {
        const m = s.current,
          d = Ms(u);
        e
          ? a("MOUNT")
          : d === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(c && m !== d ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    Ln(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          f = (d) => {
            const y = Ms(r.current).includes(CSS.escape(d.animationName));
            if (d.target === t && y && (a("ANIMATION_END"), !o.current)) {
              const x = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                }));
            }
          },
          m = (d) => {
            d.target === t && (s.current = Ms(r.current));
          };
        return (
          t.addEventListener("animationstart", m),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", m),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: w.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function Ms(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function D0(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var z0 = iu[" useInsertionEffect ".trim().toString()] || Ln;
function F0({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, s, i] = $0({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    a = l ? e : o;
  {
    const c = w.useRef(e !== void 0);
    w.useEffect(() => {
      const f = c.current;
      f !== l &&
        console.warn(
          `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${
            l ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (c.current = l);
    }, [l, r]);
  }
  const u = w.useCallback(
    (c) => {
      var f;
      if (l) {
        const m = B0(c) ? c(e) : c;
        m !== e && ((f = i.current) == null || f.call(i, m));
      } else s(c);
    },
    [l, e, s, i]
  );
  return [a, u];
}
function $0({ defaultProp: e, onChange: t }) {
  const [n, r] = w.useState(e),
    o = w.useRef(n),
    s = w.useRef(t);
  return (
    z0(() => {
      s.current = t;
    }, [t]),
    w.useEffect(() => {
      var i;
      o.current !== n &&
        ((i = s.current) == null || i.call(s, n), (o.current = n));
    }, [n, o]),
    [n, r, s]
  );
}
function B0(e) {
  return typeof e == "function";
}
var U0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  V0 = "VisuallyHidden",
  Xi = w.forwardRef((e, t) =>
    g.jsx(Qe.span, { ...e, ref: t, style: { ...U0, ...e.style } })
  );
Xi.displayName = V0;
var W0 = Xi,
  Ju = "ToastProvider",
  [ec, H0, Q0] = v0("Toast"),
  [qh] = Gi("Toast", [Q0]),
  [K0, qi] = qh(Ju),
  Zh = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [l, a] = w.useState(null),
      [u, c] = w.useState(0),
      f = w.useRef(!1),
      m = w.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Ju}\`. Expected non-empty \`string\`.`
        ),
      g.jsx(ec.Provider, {
        scope: t,
        children: g.jsx(K0, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: w.useCallback(() => c((d) => d + 1), []),
          onToastRemove: w.useCallback(() => c((d) => d - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: m,
          children: i,
        }),
      })
    );
  };
Zh.displayName = Ju;
var Jh = "ToastViewport",
  Y0 = ["F8"],
  Fa = "toast.viewportPause",
  $a = "toast.viewportResume",
  em = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = Y0,
        label: o = "Notifications ({hotkey})",
        ...s
      } = e,
      i = qi(Jh, n),
      l = H0(n),
      a = w.useRef(null),
      u = w.useRef(null),
      c = w.useRef(null),
      f = w.useRef(null),
      m = Ct(t, f, i.onViewportChange),
      d = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      E = i.toastCount > 0;
    w.useEffect(() => {
      const x = (h) => {
        var v;
        r.length !== 0 &&
          r.every((S) => h[S] || h.code === S) &&
          ((v = f.current) == null || v.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [r]),
      w.useEffect(() => {
        const x = a.current,
          h = f.current;
        if (E && x && h) {
          const p = () => {
              if (!i.isClosePausedRef.current) {
                const b = new CustomEvent(Fa);
                h.dispatchEvent(b), (i.isClosePausedRef.current = !0);
              }
            },
            v = () => {
              if (i.isClosePausedRef.current) {
                const b = new CustomEvent($a);
                h.dispatchEvent(b), (i.isClosePausedRef.current = !1);
              }
            },
            S = (b) => {
              !x.contains(b.relatedTarget) && v();
            },
            C = () => {
              x.contains(document.activeElement) || v();
            };
          return (
            x.addEventListener("focusin", p),
            x.addEventListener("focusout", S),
            x.addEventListener("pointermove", p),
            x.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", v),
            () => {
              x.removeEventListener("focusin", p),
                x.removeEventListener("focusout", S),
                x.removeEventListener("pointermove", p),
                x.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", v);
            }
          );
        }
      }, [E, i.isClosePausedRef]);
    const y = w.useCallback(
      ({ tabbingDirection: x }) => {
        const p = l().map((v) => {
          const S = v.ref.current,
            C = [S, ...lw(S)];
          return x === "forwards" ? C : C.reverse();
        });
        return (x === "forwards" ? p.reverse() : p).flat();
      },
      [l]
    );
    return (
      w.useEffect(() => {
        const x = f.current;
        if (x) {
          const h = (p) => {
            var C, b, k;
            const v = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !v) {
              const R = document.activeElement,
                D = p.shiftKey;
              if (p.target === x && D) {
                (C = u.current) == null || C.focus();
                return;
              }
              const L = y({ tabbingDirection: D ? "backwards" : "forwards" }),
                K = L.findIndex((A) => A === R);
              Ul(L.slice(K + 1))
                ? p.preventDefault()
                : D
                ? (b = u.current) == null || b.focus()
                : (k = c.current) == null || k.focus();
            }
          };
          return (
            x.addEventListener("keydown", h),
            () => x.removeEventListener("keydown", h)
          );
        }
      }, [l, y]),
      g.jsxs(A0, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", d),
        tabIndex: -1,
        style: { pointerEvents: E ? void 0 : "none" },
        children: [
          E &&
            g.jsx(Ba, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = y({ tabbingDirection: "forwards" });
                Ul(x);
              },
            }),
          g.jsx(ec.Slot, {
            scope: n,
            children: g.jsx(Qe.ol, { tabIndex: -1, ...s, ref: m }),
          }),
          E &&
            g.jsx(Ba, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = y({ tabbingDirection: "backwards" });
                Ul(x);
              },
            }),
        ],
      })
    );
  });
em.displayName = Jh;
var tm = "ToastFocusProxy",
  Ba = w.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = qi(tm, n);
    return g.jsx(Xi, {
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var u;
        const l = i.relatedTarget;
        !((u = s.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Ba.displayName = tm;
var ds = "Toast",
  G0 = "toast.swipeStart",
  X0 = "toast.swipeMove",
  q0 = "toast.swipeCancel",
  Z0 = "toast.swipeEnd",
  nm = w.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [l, a] = F0({ prop: r, defaultProp: o ?? !0, onChange: s, caller: ds });
    return g.jsx(Zu, {
      present: n || l,
      children: g.jsx(tw, {
        open: l,
        ...i,
        ref: t,
        onClose: () => a(!1),
        onPause: Mn(e.onPause),
        onResume: Mn(e.onResume),
        onSwipeStart: ye(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ye(e.onSwipeMove, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`
            );
        }),
        onSwipeCancel: ye(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ye(e.onSwipeEnd, (u) => {
          const { x: c, y: f } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`
            ),
            a(!1);
        }),
      }),
    });
  });
nm.displayName = ds;
var [J0, ew] = qh(ds, { onClose() {} }),
  tw = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: f,
        onSwipeCancel: m,
        onSwipeEnd: d,
        ...E
      } = e,
      y = qi(ds, n),
      [x, h] = w.useState(null),
      p = Ct(t, (A) => h(A)),
      v = w.useRef(null),
      S = w.useRef(null),
      C = o || y.duration,
      b = w.useRef(0),
      k = w.useRef(C),
      R = w.useRef(0),
      { onToastAdd: D, onToastRemove: O } = y,
      z = Mn(() => {
        var H;
        (x == null ? void 0 : x.contains(document.activeElement)) &&
          ((H = y.viewport) == null || H.focus()),
          i();
      }),
      L = w.useCallback(
        (A) => {
          !A ||
            A === 1 / 0 ||
            (window.clearTimeout(R.current),
            (b.current = new Date().getTime()),
            (R.current = window.setTimeout(z, A)));
        },
        [z]
      );
    w.useEffect(() => {
      const A = y.viewport;
      if (A) {
        const H = () => {
            L(k.current), u == null || u();
          },
          B = () => {
            const V = new Date().getTime() - b.current;
            (k.current = k.current - V),
              window.clearTimeout(R.current),
              a == null || a();
          };
        return (
          A.addEventListener(Fa, B),
          A.addEventListener($a, H),
          () => {
            A.removeEventListener(Fa, B), A.removeEventListener($a, H);
          }
        );
      }
    }, [y.viewport, C, a, u, L]),
      w.useEffect(() => {
        s && !y.isClosePausedRef.current && L(C);
      }, [s, C, y.isClosePausedRef, L]),
      w.useEffect(() => (D(), () => O()), [D, O]);
    const K = w.useMemo(() => (x ? um(x) : null), [x]);
    return y.viewport
      ? g.jsxs(g.Fragment, {
          children: [
            K &&
              g.jsx(nw, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                children: K,
              }),
            g.jsx(J0, {
              scope: n,
              onClose: z,
              children: cs.createPortal(
                g.jsx(ec.ItemSlot, {
                  scope: n,
                  children: g.jsx(_0, {
                    asChild: !0,
                    onEscapeKeyDown: ye(l, () => {
                      y.isFocusedToastEscapeKeyDownRef.current || z(),
                        (y.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: g.jsx(Qe.li, {
                      tabIndex: 0,
                      "data-state": s ? "open" : "closed",
                      "data-swipe-direction": y.swipeDirection,
                      ...E,
                      ref: p,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: ye(e.onKeyDown, (A) => {
                        A.key === "Escape" &&
                          (l == null || l(A.nativeEvent),
                          A.nativeEvent.defaultPrevented ||
                            ((y.isFocusedToastEscapeKeyDownRef.current = !0),
                            z()));
                      }),
                      onPointerDown: ye(e.onPointerDown, (A) => {
                        A.button === 0 &&
                          (v.current = { x: A.clientX, y: A.clientY });
                      }),
                      onPointerMove: ye(e.onPointerMove, (A) => {
                        if (!v.current) return;
                        const H = A.clientX - v.current.x,
                          B = A.clientY - v.current.y,
                          V = !!S.current,
                          N = ["left", "right"].includes(y.swipeDirection),
                          T = ["left", "up"].includes(y.swipeDirection)
                            ? Math.min
                            : Math.max,
                          M = N ? T(0, H) : 0,
                          W = N ? 0 : T(0, B),
                          F = A.pointerType === "touch" ? 10 : 2,
                          Y = { x: M, y: W },
                          X = { originalEvent: A, delta: Y };
                        V
                          ? ((S.current = Y), Ls(X0, f, X, { discrete: !1 }))
                          : Id(Y, y.swipeDirection, F)
                          ? ((S.current = Y),
                            Ls(G0, c, X, { discrete: !1 }),
                            A.target.setPointerCapture(A.pointerId))
                          : (Math.abs(H) > F || Math.abs(B) > F) &&
                            (v.current = null);
                      }),
                      onPointerUp: ye(e.onPointerUp, (A) => {
                        const H = S.current,
                          B = A.target;
                        if (
                          (B.hasPointerCapture(A.pointerId) &&
                            B.releasePointerCapture(A.pointerId),
                          (S.current = null),
                          (v.current = null),
                          H)
                        ) {
                          const V = A.currentTarget,
                            N = { originalEvent: A, delta: H };
                          Id(H, y.swipeDirection, y.swipeThreshold)
                            ? Ls(Z0, d, N, { discrete: !0 })
                            : Ls(q0, m, N, { discrete: !0 }),
                            V.addEventListener(
                              "click",
                              (T) => T.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                y.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  nw = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = qi(ds, t),
      [s, i] = w.useState(!1),
      [l, a] = w.useState(!1);
    return (
      sw(() => i(!0)),
      w.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : g.jsx(Xh, {
            asChild: !0,
            children: g.jsx(Xi, {
              ...r,
              children:
                s && g.jsxs(g.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  rw = "ToastTitle",
  rm = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return g.jsx(Qe.div, { ...r, ref: t });
  });
rm.displayName = rw;
var ow = "ToastDescription",
  om = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return g.jsx(Qe.div, { ...r, ref: t });
  });
om.displayName = ow;
var sm = "ToastAction",
  im = w.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? g.jsx(am, {
          altText: n,
          asChild: !0,
          children: g.jsx(tc, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${sm}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
im.displayName = sm;
var lm = "ToastClose",
  tc = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = ew(lm, n);
    return g.jsx(am, {
      asChild: !0,
      children: g.jsx(Qe.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: ye(e.onClick, o.onClose),
      }),
    });
  });
tc.displayName = lm;
var am = w.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return g.jsx(Qe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function um(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        iw(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          s = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...um(r));
      }
    }),
    t
  );
}
function Ls(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Qh(o, s) : o.dispatchEvent(s);
}
var Id = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === "left" || t === "right" ? s && r > n : !s && o > n;
};
function sw(e = () => {}) {
  const t = Mn(e);
  Ln(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function iw(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function lw(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ul(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var aw = Zh,
  cm = em,
  dm = nm,
  fm = rm,
  pm = om,
  hm = im,
  mm = tc;
function gm(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = gm(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function vm() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = gm(e)) && (r && (r += " "), (r += t));
  return r;
}
const Dd = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  zd = vm,
  ym = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return zd(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((u) => {
        const c = n == null ? void 0 : n[u],
          f = s == null ? void 0 : s[u];
        if (c === null) return null;
        const m = Dd(c) || Dd(f);
        return o[u][m];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [f, m] = c;
          return m === void 0 || (u[f] = m), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: f, className: m, ...d } = c;
              return Object.entries(d).every((E) => {
                let [y, x] = E;
                return Array.isArray(x)
                  ? x.includes({ ...s, ...l }[y])
                  : { ...s, ...l }[y] === x;
              })
                ? [...u, f, m]
                : u;
            }, []);
    return zd(
      e,
      i,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  wm = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var cw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dw = w.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: i,
      ...l
    },
    a
  ) =>
    w.createElement(
      "svg",
      {
        ref: a,
        ...cw,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: wm("lucide", o),
        ...l,
      },
      [
        ...i.map(([u, c]) => w.createElement(u, c)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const re = (e, t) => {
  const n = w.forwardRef(({ className: r, ...o }, s) =>
    w.createElement(dw, {
      ref: s,
      iconNode: t,
      className: wm(`lucide-${uw(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fw = re("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pw = re("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hw = re("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mw = re("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gw = re("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vw = re("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yw = re("Cloud", [
  [
    "path",
    { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ww = re("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xw = re("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sw = re("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ew = re("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cw = re("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fd = re("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bw = re("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kw = re("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $d = re("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xm = re("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pw = re("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nw = re("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tw = re("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rw = re("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jw = re("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ow = re("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _w = re("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nc = re("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Aw = re("Zap", [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ]),
  rc = "-",
  Mw = (e) => {
    const t = Iw(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const l = i.split(rc);
        return l[0] === "" && l.length !== 1 && l.shift(), Sm(l, t) || Lw(i);
      },
      getConflictingClassGroupIds: (i, l) => {
        const a = n[i] || [];
        return l && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  Sm = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Sm(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const s = e.join(rc);
    return (i = t.validators.find(({ validator: l }) => l(s))) == null
      ? void 0
      : i.classGroupId;
  },
  Bd = /^\[(.+)\]$/,
  Lw = (e) => {
    if (Bd.test(e)) {
      const t = Bd.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Iw = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      zw(Object.entries(e.classGroups), n).forEach(([s, i]) => {
        Ua(i, r, s, t);
      }),
      r
    );
  },
  Ua = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const s = o === "" ? t : Ud(t, o);
        s.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Dw(o)) {
          Ua(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([s, i]) => {
        Ua(i, Ud(t, s), n, r);
      });
    });
  },
  Ud = (e, t) => {
    let n = e;
    return (
      t.split(rc).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Dw = (e) => e.isThemeGetter,
  zw = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((s) =>
            typeof s == "string"
              ? t + s
              : typeof s == "object"
              ? Object.fromEntries(
                  Object.entries(s).map(([i, l]) => [t + i, l])
                )
              : s
          );
          return [n, o];
        })
      : e,
  Fw = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (s, i) => {
      n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(s) {
        let i = n.get(s);
        if (i !== void 0) return i;
        if ((i = r.get(s)) !== void 0) return o(s, i), i;
      },
      set(s, i) {
        n.has(s) ? n.set(s, i) : o(s, i);
      },
    };
  },
  Em = "!",
  $w = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      s = t.length,
      i = (l) => {
        const a = [];
        let u = 0,
          c = 0,
          f;
        for (let x = 0; x < l.length; x++) {
          let h = l[x];
          if (u === 0) {
            if (h === o && (r || l.slice(x, x + s) === t)) {
              a.push(l.slice(c, x)), (c = x + s);
              continue;
            }
            if (h === "/") {
              f = x;
              continue;
            }
          }
          h === "[" ? u++ : h === "]" && u--;
        }
        const m = a.length === 0 ? l : l.substring(c),
          d = m.startsWith(Em),
          E = d ? m.substring(1) : m,
          y = f && f > c ? f - c : void 0;
        return {
          modifiers: a,
          hasImportantModifier: d,
          baseClassName: E,
          maybePostfixModifierPosition: y,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: i }) : i;
  },
  Bw = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Uw = (e) => ({ cache: Fw(e.cacheSize), parseClassName: $w(e), ...Mw(e) }),
  Vw = /\s+/,
  Ww = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      s = [],
      i = e.trim().split(Vw);
    let l = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const u = i[a],
        {
          modifiers: c,
          hasImportantModifier: f,
          baseClassName: m,
          maybePostfixModifierPosition: d,
        } = n(u);
      let E = !!d,
        y = r(E ? m.substring(0, d) : m);
      if (!y) {
        if (!E) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((y = r(m)), !y)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        E = !1;
      }
      const x = Bw(c).join(":"),
        h = f ? x + Em : x,
        p = h + y;
      if (s.includes(p)) continue;
      s.push(p);
      const v = o(y, E);
      for (let S = 0; S < v.length; ++S) {
        const C = v[S];
        s.push(h + C);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function Hw() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Cm(t)) && (r && (r += " "), (r += n));
  return r;
}
const Cm = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Cm(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Qw(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(a) {
    const u = t.reduce((c, f) => f(c), e());
    return (n = Uw(u)), (r = n.cache.get), (o = n.cache.set), (s = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const c = Ww(a, n);
    return o(a, c), c;
  }
  return function () {
    return s(Hw.apply(null, arguments));
  };
}
const oe = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  bm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Kw = /^\d+\/\d+$/,
  Yw = new Set(["px", "full", "screen"]),
  Gw = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Xw =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  qw = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Zw = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Jw =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  zt = (e) => Ir(e) || Yw.has(e) || Kw.test(e),
  an = (e) => so(e, "length", lx),
  Ir = (e) => !!e && !Number.isNaN(Number(e)),
  Vl = (e) => so(e, "number", Ir),
  wo = (e) => !!e && Number.isInteger(Number(e)),
  ex = (e) => e.endsWith("%") && Ir(e.slice(0, -1)),
  Q = (e) => bm.test(e),
  un = (e) => Gw.test(e),
  tx = new Set(["length", "size", "percentage"]),
  nx = (e) => so(e, tx, km),
  rx = (e) => so(e, "position", km),
  ox = new Set(["image", "url"]),
  sx = (e) => so(e, ox, ux),
  ix = (e) => so(e, "", ax),
  xo = () => !0,
  so = (e, t, n) => {
    const r = bm.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  lx = (e) => Xw.test(e) && !qw.test(e),
  km = () => !1,
  ax = (e) => Zw.test(e),
  ux = (e) => Jw.test(e),
  cx = () => {
    const e = oe("colors"),
      t = oe("spacing"),
      n = oe("blur"),
      r = oe("brightness"),
      o = oe("borderColor"),
      s = oe("borderRadius"),
      i = oe("borderSpacing"),
      l = oe("borderWidth"),
      a = oe("contrast"),
      u = oe("grayscale"),
      c = oe("hueRotate"),
      f = oe("invert"),
      m = oe("gap"),
      d = oe("gradientColorStops"),
      E = oe("gradientColorStopPositions"),
      y = oe("inset"),
      x = oe("margin"),
      h = oe("opacity"),
      p = oe("padding"),
      v = oe("saturate"),
      S = oe("scale"),
      C = oe("sepia"),
      b = oe("skew"),
      k = oe("space"),
      R = oe("translate"),
      D = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      z = () => ["auto", Q, t],
      L = () => [Q, t],
      K = () => ["", zt, an],
      A = () => ["auto", Ir, Q],
      H = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      B = () => ["solid", "dashed", "dotted", "double", "none"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      N = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      T = () => ["", "0", Q],
      M = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      W = () => [Ir, Q];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [xo],
        spacing: [zt, an],
        blur: ["none", "", un, Q],
        brightness: W(),
        borderColor: [e],
        borderRadius: ["none", "", "full", un, Q],
        borderSpacing: L(),
        borderWidth: K(),
        contrast: W(),
        grayscale: T(),
        hueRotate: W(),
        invert: T(),
        gap: L(),
        gradientColorStops: [e],
        gradientColorStopPositions: [ex, an],
        inset: z(),
        margin: z(),
        opacity: W(),
        padding: L(),
        saturate: W(),
        scale: W(),
        sepia: T(),
        skew: W(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Q] }],
        container: ["container"],
        columns: [{ columns: [un] }],
        "break-after": [{ "break-after": M() }],
        "break-before": [{ "break-before": M() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...H(), Q] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: D() }],
        "overscroll-x": [{ "overscroll-x": D() }],
        "overscroll-y": [{ "overscroll-y": D() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [y] }],
        "inset-x": [{ "inset-x": [y] }],
        "inset-y": [{ "inset-y": [y] }],
        start: [{ start: [y] }],
        end: [{ end: [y] }],
        top: [{ top: [y] }],
        right: [{ right: [y] }],
        bottom: [{ bottom: [y] }],
        left: [{ left: [y] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", wo, Q] }],
        basis: [{ basis: z() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Q] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ["first", "last", "none", wo, Q] }],
        "grid-cols": [{ "grid-cols": [xo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", wo, Q] }, Q] }],
        "col-start": [{ "col-start": A() }],
        "col-end": [{ "col-end": A() }],
        "grid-rows": [{ "grid-rows": [xo] }],
        "row-start-end": [{ row: ["auto", { span: [wo, Q] }, Q] }],
        "row-start": [{ "row-start": A() }],
        "row-end": [{ "row-end": A() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Q] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Q] }],
        gap: [{ gap: [m] }],
        "gap-x": [{ "gap-x": [m] }],
        "gap-y": [{ "gap-y": [m] }],
        "justify-content": [{ justify: ["normal", ...N()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...N(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...N(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t] }],
        "min-w": [{ "min-w": [Q, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Q,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [un] },
              un,
            ],
          },
        ],
        h: [{ h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Q, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", un, an] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Vl,
            ],
          },
        ],
        "font-family": [{ font: [xo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Q,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ir, Vl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              zt,
              Q,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Q] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Q] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [h] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [h] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", zt, an] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", zt, Q] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Q] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [h] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...H(), rx] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", nx] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              sx,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [E] }],
        "gradient-via-pos": [{ via: [E] }],
        "gradient-to-pos": [{ to: [E] }],
        "gradient-from": [{ from: [d] }],
        "gradient-via": [{ via: [d] }],
        "gradient-to": [{ to: [d] }],
        rounded: [{ rounded: [s] }],
        "rounded-s": [{ "rounded-s": [s] }],
        "rounded-e": [{ "rounded-e": [s] }],
        "rounded-t": [{ "rounded-t": [s] }],
        "rounded-r": [{ "rounded-r": [s] }],
        "rounded-b": [{ "rounded-b": [s] }],
        "rounded-l": [{ "rounded-l": [s] }],
        "rounded-ss": [{ "rounded-ss": [s] }],
        "rounded-se": [{ "rounded-se": [s] }],
        "rounded-ee": [{ "rounded-ee": [s] }],
        "rounded-es": [{ "rounded-es": [s] }],
        "rounded-tl": [{ "rounded-tl": [s] }],
        "rounded-tr": [{ "rounded-tr": [s] }],
        "rounded-br": [{ "rounded-br": [s] }],
        "rounded-bl": [{ "rounded-bl": [s] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [h] }],
        "border-style": [{ border: [...B(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [h] }],
        "divide-style": [{ divide: B() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...B()] }],
        "outline-offset": [{ "outline-offset": [zt, Q] }],
        "outline-w": [{ outline: [zt, an] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: K() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [h] }],
        "ring-offset-w": [{ "ring-offset": [zt, an] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", un, ix] }],
        "shadow-color": [{ shadow: [xo] }],
        opacity: [{ opacity: [h] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": V() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", un, Q] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [v] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [h] }],
        "backdrop-saturate": [{ "backdrop-saturate": [v] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Q,
            ],
          },
        ],
        duration: [{ duration: W() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Q] }],
        delay: [{ delay: W() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Q] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [S] }],
        "scale-x": [{ "scale-x": [S] }],
        "scale-y": [{ "scale-y": [S] }],
        rotate: [{ rotate: [wo, Q] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [b] }],
        "skew-y": [{ "skew-y": [b] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Q,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Q,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Q] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [zt, an, Vl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  dx = Qw(cx);
function Jt(...e) {
  return dx(vm(e));
}
const fx = aw,
  Pm = w.forwardRef(({ className: e, ...t }, n) =>
    g.jsx(cm, {
      ref: n,
      className: Jt(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Pm.displayName = cm.displayName;
const px = ym(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Nm = w.forwardRef(({ className: e, variant: t, ...n }, r) =>
    g.jsx(dm, { ref: r, className: Jt(px({ variant: t }), e), ...n })
  );
Nm.displayName = dm.displayName;
const hx = w.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(hm, {
    ref: n,
    className: Jt(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
hx.displayName = hm.displayName;
const Tm = w.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(mm, {
    ref: n,
    className: Jt(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: g.jsx(nc, { className: "h-4 w-4" }),
  })
);
Tm.displayName = mm.displayName;
const Rm = w.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(fm, { ref: n, className: Jt("text-sm font-semibold", e), ...t })
);
Rm.displayName = fm.displayName;
const jm = w.forwardRef(({ className: e, ...t }, n) =>
  g.jsx(pm, { ref: n, className: Jt("text-sm opacity-90", e), ...t })
);
jm.displayName = pm.displayName;
function mx() {
  const { toasts: e } = Hh();
  return g.jsxs(fx, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
        return g.jsxs(
          Nm,
          {
            ...s,
            children: [
              g.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && g.jsx(Rm, { children: n }),
                  r && g.jsx(jm, { children: r }),
                ],
              }),
              o,
              g.jsx(Tm, {}),
            ],
          },
          t
        );
      }),
      g.jsx(Pm, {}),
    ],
  });
}
var Vd = ["light", "dark"],
  gx = "(prefers-color-scheme: dark)",
  vx = w.createContext(void 0),
  yx = { setTheme: (e) => {}, themes: [] },
  wx = () => {
    var e;
    return (e = w.useContext(vx)) != null ? e : yx;
  };
w.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: s,
    value: i,
    attrs: l,
    nonce: a,
  }) => {
    let u = s === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((E) => `'${E}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      f = o
        ? Vd.includes(s) && s
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      m = (E, y = !1, x = !0) => {
        let h = i ? i[E] : E,
          p = y ? E + "|| ''" : `'${h}'`,
          v = "";
        return (
          o &&
            x &&
            !y &&
            Vd.includes(E) &&
            (v += `d.style.colorScheme = '${E}';`),
          n === "class"
            ? y || h
              ? (v += `c.add(${p})`)
              : (v += "null")
            : h && (v += `d[s](n,${p})`),
          v
        );
      },
      d = e
        ? `!function(){${c}${m(e)}}()`
        : r
        ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${gx}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m(
            "dark"
          )}}else{${m("light")}}}else if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${m(i ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + m(s, !1, !1) + "}"
          }${f}}catch(e){}}()`
        : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${
            i ? `var x=${JSON.stringify(i)};` : ""
          }${m(i ? "x[e]" : "e", !0)}}else{${m(
            s,
            !1,
            !1
          )};}${f}}catch(t){}}();`;
    return w.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: d },
    });
  }
);
var xx = (e) => {
    switch (e) {
      case "success":
        return Cx;
      case "info":
        return kx;
      case "warning":
        return bx;
      case "error":
        return Px;
      default:
        return null;
    }
  },
  Sx = Array(12).fill(0),
  Ex = ({ visible: e, className: t }) =>
    _.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      _.createElement(
        "div",
        { className: "sonner-spinner" },
        Sx.map((n, r) =>
          _.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  Cx = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  bx = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  kx = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Px = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  Nx = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    _.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    _.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  Tx = () => {
    let [e, t] = _.useState(document.hidden);
    return (
      _.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Va = 1,
  Rx = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Va++,
            s = this.toasts.find((l) => l.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            s
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: i, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            s,
            i = r
              .then(async (a) => {
                if (((s = ["resolve", a]), _.isValidElement(a)))
                  (o = !1), this.create({ id: n, type: "default", message: a });
                else if (Ox(a) && !a.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (a) => {
                if (((s = ["reject", a]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var a;
                o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t);
              }),
            l = () =>
              new Promise((a, u) =>
                i.then(() => (s[0] === "reject" ? u(s[1]) : a(s[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Va++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Fe = new Rx(),
  jx = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Va++;
    return Fe.addToast({ title: e, ...t, id: n }), n;
  },
  Ox = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  _x = jx,
  Ax = () => Fe.toasts,
  Mx = () => Fe.getActiveToasts();
Object.assign(
  _x,
  {
    success: Fe.success,
    info: Fe.info,
    warning: Fe.warning,
    error: Fe.error,
    custom: Fe.custom,
    message: Fe.message,
    promise: Fe.promise,
    dismiss: Fe.dismiss,
    loading: Fe.loading,
  },
  { getHistory: Ax, getToasts: Mx }
);
function Lx(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
Lx(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Is(e) {
  return e.label !== void 0;
}
var Ix = 3,
  Dx = "32px",
  zx = "16px",
  Wd = 4e3,
  Fx = 356,
  $x = 14,
  Bx = 20,
  Ux = 200;
function pt(...e) {
  return e.filter(Boolean).join(" ");
}
function Vx(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var Wx = (e) => {
  var t, n, r, o, s, i, l, a, u, c, f;
  let {
      invert: m,
      toast: d,
      unstyled: E,
      interacting: y,
      setHeights: x,
      visibleToasts: h,
      heights: p,
      index: v,
      toasts: S,
      expanded: C,
      removeToast: b,
      defaultRichColors: k,
      closeButton: R,
      style: D,
      cancelButtonStyle: O,
      actionButtonStyle: z,
      className: L = "",
      descriptionClassName: K = "",
      duration: A,
      position: H,
      gap: B,
      loadingIcon: V,
      expandByDefault: N,
      classNames: T,
      icons: M,
      closeButtonAriaLabel: W = "Close toast",
      pauseWhenPageIsHidden: F,
    } = e,
    [Y, X] = _.useState(null),
    [me, Ne] = _.useState(null),
    [J, dr] = _.useState(!1),
    [en, Bn] = _.useState(!1),
    [tn, fr] = _.useState(!1),
    [nn, ps] = _.useState(!1),
    [ul, hs] = _.useState(!1),
    [cl, ao] = _.useState(0),
    [pr, mc] = _.useState(0),
    uo = _.useRef(d.duration || A || Wd),
    gc = _.useRef(null),
    Un = _.useRef(null),
    kg = v === 0,
    Pg = v + 1 <= h,
    tt = d.type,
    hr = d.dismissible !== !1,
    Ng = d.className || "",
    Tg = d.descriptionClassName || "",
    ms = _.useMemo(
      () => p.findIndex((U) => U.toastId === d.id) || 0,
      [p, d.id]
    ),
    Rg = _.useMemo(() => {
      var U;
      return (U = d.closeButton) != null ? U : R;
    }, [d.closeButton, R]),
    vc = _.useMemo(() => d.duration || A || Wd, [d.duration, A]),
    dl = _.useRef(0),
    mr = _.useRef(0),
    yc = _.useRef(0),
    gr = _.useRef(null),
    [jg, Og] = H.split("-"),
    wc = _.useMemo(
      () => p.reduce((U, te, le) => (le >= ms ? U : U + te.height), 0),
      [p, ms]
    ),
    xc = Tx(),
    _g = d.invert || m,
    fl = tt === "loading";
  (mr.current = _.useMemo(() => ms * B + wc, [ms, wc])),
    _.useEffect(() => {
      uo.current = vc;
    }, [vc]),
    _.useEffect(() => {
      dr(!0);
    }, []),
    _.useEffect(() => {
      let U = Un.current;
      if (U) {
        let te = U.getBoundingClientRect().height;
        return (
          mc(te),
          x((le) => [
            { toastId: d.id, height: te, position: d.position },
            ...le,
          ]),
          () => x((le) => le.filter((ut) => ut.toastId !== d.id))
        );
      }
    }, [x, d.id]),
    _.useLayoutEffect(() => {
      if (!J) return;
      let U = Un.current,
        te = U.style.height;
      U.style.height = "auto";
      let le = U.getBoundingClientRect().height;
      (U.style.height = te),
        mc(le),
        x((ut) =>
          ut.find((ct) => ct.toastId === d.id)
            ? ut.map((ct) => (ct.toastId === d.id ? { ...ct, height: le } : ct))
            : [{ toastId: d.id, height: le, position: d.position }, ...ut]
        );
    }, [J, d.title, d.description, x, d.id]);
  let rn = _.useCallback(() => {
    Bn(!0),
      ao(mr.current),
      x((U) => U.filter((te) => te.toastId !== d.id)),
      setTimeout(() => {
        b(d);
      }, Ux);
  }, [d, b, x, mr]);
  _.useEffect(() => {
    if (
      (d.promise && tt === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let U;
    return (
      C || y || (F && xc)
        ? (() => {
            if (yc.current < dl.current) {
              let te = new Date().getTime() - dl.current;
              uo.current = uo.current - te;
            }
            yc.current = new Date().getTime();
          })()
        : uo.current !== 1 / 0 &&
          ((dl.current = new Date().getTime()),
          (U = setTimeout(() => {
            var te;
            (te = d.onAutoClose) == null || te.call(d, d), rn();
          }, uo.current))),
      () => clearTimeout(U)
    );
  }, [C, y, d, tt, F, xc, rn]),
    _.useEffect(() => {
      d.delete && rn();
    }, [rn, d.delete]);
  function Ag() {
    var U, te, le;
    return M != null && M.loading
      ? _.createElement(
          "div",
          {
            className: pt(
              T == null ? void 0 : T.loader,
              (U = d == null ? void 0 : d.classNames) == null
                ? void 0
                : U.loader,
              "sonner-loader"
            ),
            "data-visible": tt === "loading",
          },
          M.loading
        )
      : V
      ? _.createElement(
          "div",
          {
            className: pt(
              T == null ? void 0 : T.loader,
              (te = d == null ? void 0 : d.classNames) == null
                ? void 0
                : te.loader,
              "sonner-loader"
            ),
            "data-visible": tt === "loading",
          },
          V
        )
      : _.createElement(Ex, {
          className: pt(
            T == null ? void 0 : T.loader,
            (le = d == null ? void 0 : d.classNames) == null
              ? void 0
              : le.loader
          ),
          visible: tt === "loading",
        });
  }
  return _.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Un,
      className: pt(
        L,
        Ng,
        T == null ? void 0 : T.toast,
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
        T == null ? void 0 : T.default,
        T == null ? void 0 : T[tt],
        (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[tt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = d.richColors) != null ? r : k,
      "data-styled": !(d.jsx || d.unstyled || E),
      "data-mounted": J,
      "data-promise": !!d.promise,
      "data-swiped": ul,
      "data-removed": en,
      "data-visible": Pg,
      "data-y-position": jg,
      "data-x-position": Og,
      "data-index": v,
      "data-front": kg,
      "data-swiping": tn,
      "data-dismissible": hr,
      "data-type": tt,
      "data-invert": _g,
      "data-swipe-out": nn,
      "data-swipe-direction": me,
      "data-expanded": !!(C || (N && J)),
      style: {
        "--index": v,
        "--toasts-before": v,
        "--z-index": S.length - v,
        "--offset": `${en ? cl : mr.current}px`,
        "--initial-height": N ? "auto" : `${pr}px`,
        ...D,
        ...d.style,
      },
      onDragEnd: () => {
        fr(!1), X(null), (gr.current = null);
      },
      onPointerDown: (U) => {
        fl ||
          !hr ||
          ((gc.current = new Date()),
          ao(mr.current),
          U.target.setPointerCapture(U.pointerId),
          U.target.tagName !== "BUTTON" &&
            (fr(!0), (gr.current = { x: U.clientX, y: U.clientY })));
      },
      onPointerUp: () => {
        var U, te, le, ut;
        if (nn || !hr) return;
        gr.current = null;
        let ct = Number(
            ((U = Un.current) == null
              ? void 0
              : U.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          on = Number(
            ((te = Un.current) == null
              ? void 0
              : te.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Vn =
            new Date().getTime() -
            ((le = gc.current) == null ? void 0 : le.getTime()),
          dt = Y === "x" ? ct : on,
          sn = Math.abs(dt) / Vn;
        if (Math.abs(dt) >= Bx || sn > 0.11) {
          ao(mr.current),
            (ut = d.onDismiss) == null || ut.call(d, d),
            Ne(
              Y === "x" ? (ct > 0 ? "right" : "left") : on > 0 ? "down" : "up"
            ),
            rn(),
            ps(!0),
            hs(!1);
          return;
        }
        fr(!1), X(null);
      },
      onPointerMove: (U) => {
        var te, le, ut, ct;
        if (
          !gr.current ||
          !hr ||
          ((te = window.getSelection()) == null
            ? void 0
            : te.toString().length) > 0
        )
          return;
        let on = U.clientY - gr.current.y,
          Vn = U.clientX - gr.current.x,
          dt = (le = e.swipeDirections) != null ? le : Vx(H);
        !Y &&
          (Math.abs(Vn) > 1 || Math.abs(on) > 1) &&
          X(Math.abs(Vn) > Math.abs(on) ? "x" : "y");
        let sn = { x: 0, y: 0 };
        Y === "y"
          ? (dt.includes("top") || dt.includes("bottom")) &&
            ((dt.includes("top") && on < 0) ||
              (dt.includes("bottom") && on > 0)) &&
            (sn.y = on)
          : Y === "x" &&
            (dt.includes("left") || dt.includes("right")) &&
            ((dt.includes("left") && Vn < 0) ||
              (dt.includes("right") && Vn > 0)) &&
            (sn.x = Vn),
          (Math.abs(sn.x) > 0 || Math.abs(sn.y) > 0) && hs(!0),
          (ut = Un.current) == null ||
            ut.style.setProperty("--swipe-amount-x", `${sn.x}px`),
          (ct = Un.current) == null ||
            ct.style.setProperty("--swipe-amount-y", `${sn.y}px`);
      },
    },
    Rg && !d.jsx
      ? _.createElement(
          "button",
          {
            "aria-label": W,
            "data-disabled": fl,
            "data-close-button": !0,
            onClick:
              fl || !hr
                ? () => {}
                : () => {
                    var U;
                    rn(), (U = d.onDismiss) == null || U.call(d, d);
                  },
            className: pt(
              T == null ? void 0 : T.closeButton,
              (o = d == null ? void 0 : d.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (s = M == null ? void 0 : M.close) != null ? s : Nx
        )
      : null,
    d.jsx || w.isValidElement(d.title)
      ? d.jsx
        ? d.jsx
        : typeof d.title == "function"
        ? d.title()
        : d.title
      : _.createElement(
          _.Fragment,
          null,
          tt || d.icon || d.promise
            ? _.createElement(
                "div",
                {
                  "data-icon": "",
                  className: pt(
                    T == null ? void 0 : T.icon,
                    (i = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : i.icon
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || Ag()
                  : null,
                d.type !== "loading"
                  ? d.icon || (M == null ? void 0 : M[tt]) || xx(tt)
                  : null
              )
            : null,
          _.createElement(
            "div",
            {
              "data-content": "",
              className: pt(
                T == null ? void 0 : T.content,
                (l = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : l.content
              ),
            },
            _.createElement(
              "div",
              {
                "data-title": "",
                className: pt(
                  T == null ? void 0 : T.title,
                  (a = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : a.title
                ),
              },
              typeof d.title == "function" ? d.title() : d.title
            ),
            d.description
              ? _.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: pt(
                      K,
                      Tg,
                      T == null ? void 0 : T.description,
                      (u = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof d.description == "function"
                    ? d.description()
                    : d.description
                )
              : null
          ),
          w.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && Is(d.cancel)
            ? _.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: d.cancelButtonStyle || O,
                  onClick: (U) => {
                    var te, le;
                    Is(d.cancel) &&
                      hr &&
                      ((le = (te = d.cancel).onClick) == null || le.call(te, U),
                      rn());
                  },
                  className: pt(
                    T == null ? void 0 : T.cancelButton,
                    (c = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : c.cancelButton
                  ),
                },
                d.cancel.label
              )
            : null,
          w.isValidElement(d.action)
            ? d.action
            : d.action && Is(d.action)
            ? _.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: d.actionButtonStyle || z,
                  onClick: (U) => {
                    var te, le;
                    Is(d.action) &&
                      ((le = (te = d.action).onClick) == null || le.call(te, U),
                      !U.defaultPrevented && rn());
                  },
                  className: pt(
                    T == null ? void 0 : T.actionButton,
                    (f = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                d.action.label
              )
            : null
        )
  );
};
function Hd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Hx(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let s = o === 1,
        i = s ? "--mobile-offset" : "--offset",
        l = s ? zx : Dx;
      function a(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${i}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? a(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${i}-${u}`] = l)
              : (n[`${i}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : a(l);
    }),
    n
  );
}
var Qx = w.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: s,
      closeButton: i,
      className: l,
      offset: a,
      mobileOffset: u,
      theme: c = "light",
      richColors: f,
      duration: m,
      style: d,
      visibleToasts: E = Ix,
      toastOptions: y,
      dir: x = Hd(),
      gap: h = $x,
      loadingIcon: p,
      icons: v,
      containerAriaLabel: S = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [b, k] = _.useState([]),
    R = _.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(b.filter((F) => F.position).map((F) => F.position))
          )
        ),
      [b, r]
    ),
    [D, O] = _.useState([]),
    [z, L] = _.useState(!1),
    [K, A] = _.useState(!1),
    [H, B] = _.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    V = _.useRef(null),
    N = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    T = _.useRef(null),
    M = _.useRef(!1),
    W = _.useCallback((F) => {
      k((Y) => {
        var X;
        return (
          ((X = Y.find((me) => me.id === F.id)) != null && X.delete) ||
            Fe.dismiss(F.id),
          Y.filter(({ id: me }) => me !== F.id)
        );
      });
    }, []);
  return (
    _.useEffect(
      () =>
        Fe.subscribe((F) => {
          if (F.dismiss) {
            k((Y) => Y.map((X) => (X.id === F.id ? { ...X, delete: !0 } : X)));
            return;
          }
          setTimeout(() => {
            Vh.flushSync(() => {
              k((Y) => {
                let X = Y.findIndex((me) => me.id === F.id);
                return X !== -1
                  ? [...Y.slice(0, X), { ...Y[X], ...F }, ...Y.slice(X + 1)]
                  : [F, ...Y];
              });
            });
          });
        }),
      []
    ),
    _.useEffect(() => {
      if (c !== "system") {
        B(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? B("dark")
            : B("light")),
        typeof window > "u")
      )
        return;
      let F = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        F.addEventListener("change", ({ matches: Y }) => {
          B(Y ? "dark" : "light");
        });
      } catch {
        F.addListener(({ matches: X }) => {
          try {
            B(X ? "dark" : "light");
          } catch (me) {
            console.error(me);
          }
        });
      }
    }, [c]),
    _.useEffect(() => {
      b.length <= 1 && L(!1);
    }, [b]),
    _.useEffect(() => {
      let F = (Y) => {
        var X, me;
        o.every((Ne) => Y[Ne] || Y.code === Ne) &&
          (L(!0), (X = V.current) == null || X.focus()),
          Y.code === "Escape" &&
            (document.activeElement === V.current ||
              ((me = V.current) != null &&
                me.contains(document.activeElement))) &&
            L(!1);
      };
      return (
        document.addEventListener("keydown", F),
        () => document.removeEventListener("keydown", F)
      );
    }, [o]),
    _.useEffect(() => {
      if (V.current)
        return () => {
          T.current &&
            (T.current.focus({ preventScroll: !0 }),
            (T.current = null),
            (M.current = !1));
        };
    }, [V.current]),
    _.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${S} ${N}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      R.map((F, Y) => {
        var X;
        let [me, Ne] = F.split("-");
        return b.length
          ? _.createElement(
              "ol",
              {
                key: F,
                dir: x === "auto" ? Hd() : x,
                tabIndex: -1,
                ref: V,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": H,
                "data-y-position": me,
                "data-lifted": z && b.length > 1 && !s,
                "data-x-position": Ne,
                style: {
                  "--front-toast-height": `${
                    ((X = D[0]) == null ? void 0 : X.height) || 0
                  }px`,
                  "--width": `${Fx}px`,
                  "--gap": `${h}px`,
                  ...d,
                  ...Hx(a, u),
                },
                onBlur: (J) => {
                  M.current &&
                    !J.currentTarget.contains(J.relatedTarget) &&
                    ((M.current = !1),
                    T.current &&
                      (T.current.focus({ preventScroll: !0 }),
                      (T.current = null)));
                },
                onFocus: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    M.current ||
                    ((M.current = !0), (T.current = J.relatedTarget));
                },
                onMouseEnter: () => L(!0),
                onMouseMove: () => L(!0),
                onMouseLeave: () => {
                  K || L(!1);
                },
                onDragEnd: () => L(!1),
                onPointerDown: (J) => {
                  (J.target instanceof HTMLElement &&
                    J.target.dataset.dismissible === "false") ||
                    A(!0);
                },
                onPointerUp: () => A(!1),
              },
              b
                .filter((J) => (!J.position && Y === 0) || J.position === F)
                .map((J, dr) => {
                  var en, Bn;
                  return _.createElement(Wx, {
                    key: J.id,
                    icons: v,
                    index: dr,
                    toast: J,
                    defaultRichColors: f,
                    duration:
                      (en = y == null ? void 0 : y.duration) != null ? en : m,
                    className: y == null ? void 0 : y.className,
                    descriptionClassName:
                      y == null ? void 0 : y.descriptionClassName,
                    invert: n,
                    visibleToasts: E,
                    closeButton:
                      (Bn = y == null ? void 0 : y.closeButton) != null
                        ? Bn
                        : i,
                    interacting: K,
                    position: F,
                    style: y == null ? void 0 : y.style,
                    unstyled: y == null ? void 0 : y.unstyled,
                    classNames: y == null ? void 0 : y.classNames,
                    cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                    actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                    removeToast: W,
                    toasts: b.filter((tn) => tn.position == J.position),
                    heights: D.filter((tn) => tn.position == J.position),
                    setHeights: O,
                    expandByDefault: s,
                    gap: h,
                    loadingIcon: p,
                    expanded: z,
                    pauseWhenPageIsHidden: C,
                    swipeDirections: e.swipeDirections,
                  });
                })
            )
          : null;
      })
    )
  );
});
const Kx = ({ ...e }) => {
    const { theme: t = "system" } = wx();
    return g.jsx(Qx, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  Yx = ["top", "right", "bottom", "left"],
  In = Math.min,
  Ye = Math.max,
  bi = Math.round,
  Ds = Math.floor,
  Lt = (e) => ({ x: e, y: e }),
  Gx = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Xx = { start: "end", end: "start" };
function Wa(e, t, n) {
  return Ye(e, In(t, n));
}
function Xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qt(e) {
  return e.split("-")[0];
}
function io(e) {
  return e.split("-")[1];
}
function oc(e) {
  return e === "x" ? "y" : "x";
}
function sc(e) {
  return e === "y" ? "height" : "width";
}
const qx = new Set(["top", "bottom"]);
function _t(e) {
  return qx.has(qt(e)) ? "y" : "x";
}
function ic(e) {
  return oc(_t(e));
}
function Zx(e, t, n) {
  n === void 0 && (n = !1);
  const r = io(e),
    o = ic(e),
    s = sc(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[s] > t.floating[s] && (i = ki(i)), [i, ki(i)];
}
function Jx(e) {
  const t = ki(e);
  return [Ha(e), t, Ha(t)];
}
function Ha(e) {
  return e.replace(/start|end/g, (t) => Xx[t]);
}
const Qd = ["left", "right"],
  Kd = ["right", "left"],
  e1 = ["top", "bottom"],
  t1 = ["bottom", "top"];
function n1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Kd : Qd) : t ? Qd : Kd;
    case "left":
    case "right":
      return t ? e1 : t1;
    default:
      return [];
  }
}
function r1(e, t, n, r) {
  const o = io(e);
  let s = n1(qt(e), n === "start", r);
  return (
    o && ((s = s.map((i) => i + "-" + o)), t && (s = s.concat(s.map(Ha)))), s
  );
}
function ki(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Gx[t]);
}
function o1(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Om(e) {
  return typeof e != "number"
    ? o1(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Pi(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Yd(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = _t(t),
    i = ic(t),
    l = sc(i),
    a = qt(t),
    u = s === "y",
    c = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    m = r[l] / 2 - o[l] / 2;
  let d;
  switch (a) {
    case "top":
      d = { x: c, y: r.y - o.height };
      break;
    case "bottom":
      d = { x: c, y: r.y + r.height };
      break;
    case "right":
      d = { x: r.x + r.width, y: f };
      break;
    case "left":
      d = { x: r.x - o.width, y: f };
      break;
    default:
      d = { x: r.x, y: r.y };
  }
  switch (io(t)) {
    case "start":
      d[i] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      d[i] += m * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const s1 = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: s = [],
      platform: i,
    } = n,
    l = s.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: c, y: f } = Yd(u, r, a),
    m = r,
    d = {},
    E = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: x, fn: h } = l[y],
      {
        x: p,
        y: v,
        data: S,
        reset: C,
      } = await h({
        x: c,
        y: f,
        initialPlacement: r,
        placement: m,
        strategy: o,
        middlewareData: d,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (c = p ?? c),
      (f = v ?? f),
      (d = { ...d, [x]: { ...d[x], ...S } }),
      C &&
        E <= 50 &&
        (E++,
        typeof C == "object" &&
          (C.placement && (m = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : C.rects),
          ({ x: c, y: f } = Yd(u, m, a))),
        (y = -1));
  }
  return { x: c, y: f, placement: m, strategy: o, middlewareData: d };
};
async function Zo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: f = "floating",
      altBoundary: m = !1,
      padding: d = 0,
    } = Xt(t, e),
    E = Om(d),
    x = l[m ? (f === "floating" ? "reference" : "floating") : f],
    h = Pi(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: a,
      })
    ),
    p =
      f === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    v = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    S = (await (s.isElement == null ? void 0 : s.isElement(v)))
      ? (await (s.getScale == null ? void 0 : s.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Pi(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: p,
            offsetParent: v,
            strategy: a,
          })
        : p
    );
  return {
    top: (h.top - C.top + E.top) / S.y,
    bottom: (C.bottom - h.bottom + E.bottom) / S.y,
    left: (h.left - C.left + E.left) / S.x,
    right: (C.right - h.right + E.right) / S.x,
  };
}
const i1 = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: c = 0 } = Xt(e, t) || {};
      if (u == null) return {};
      const f = Om(c),
        m = { x: n, y: r },
        d = ic(o),
        E = sc(d),
        y = await i.getDimensions(u),
        x = d === "y",
        h = x ? "top" : "left",
        p = x ? "bottom" : "right",
        v = x ? "clientHeight" : "clientWidth",
        S = s.reference[E] + s.reference[d] - m[d] - s.floating[E],
        C = m[d] - s.reference[d],
        b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let k = b ? b[v] : 0;
      (!k || !(await (i.isElement == null ? void 0 : i.isElement(b)))) &&
        (k = l.floating[v] || s.floating[E]);
      const R = S / 2 - C / 2,
        D = k / 2 - y[E] / 2 - 1,
        O = In(f[h], D),
        z = In(f[p], D),
        L = O,
        K = k - y[E] - z,
        A = k / 2 - y[E] / 2 + R,
        H = Wa(L, A, K),
        B =
          !a.arrow &&
          io(o) != null &&
          A !== H &&
          s.reference[E] / 2 - (A < L ? O : z) - y[E] / 2 < 0,
        V = B ? (A < L ? A - L : A - K) : 0;
      return {
        [d]: m[d] + V,
        data: {
          [d]: H,
          centerOffset: A - H - V,
          ...(B && { alignmentOffset: V }),
        },
        reset: B,
      };
    },
  }),
  l1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: f = !0,
              fallbackPlacements: m,
              fallbackStrategy: d = "bestFit",
              fallbackAxisSideDirection: E = "none",
              flipAlignment: y = !0,
              ...x
            } = Xt(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const h = qt(o),
            p = _t(l),
            v = qt(l) === l,
            S = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            C = m || (v || !y ? [ki(l)] : Jx(l)),
            b = E !== "none";
          !m && b && C.push(...r1(l, y, E, S));
          const k = [l, ...C],
            R = await Zo(t, x),
            D = [];
          let O = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((c && D.push(R[h]), f)) {
            const A = Zx(o, i, S);
            D.push(R[A[0]], R[A[1]]);
          }
          if (
            ((O = [...O, { placement: o, overflows: D }]),
            !D.every((A) => A <= 0))
          ) {
            var z, L;
            const A = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1,
              H = k[A];
            if (
              H &&
              (!(f === "alignment" ? p !== _t(H) : !1) ||
                O.every((N) =>
                  _t(N.placement) === p ? N.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: A, overflows: O },
                reset: { placement: H },
              };
            let B =
              (L = O.filter((V) => V.overflows[0] <= 0).sort(
                (V, N) => V.overflows[1] - N.overflows[1]
              )[0]) == null
                ? void 0
                : L.placement;
            if (!B)
              switch (d) {
                case "bestFit": {
                  var K;
                  const V =
                    (K = O.filter((N) => {
                      if (b) {
                        const T = _t(N.placement);
                        return T === p || T === "y";
                      }
                      return !0;
                    })
                      .map((N) => [
                        N.placement,
                        N.overflows
                          .filter((T) => T > 0)
                          .reduce((T, M) => T + M, 0),
                      ])
                      .sort((N, T) => N[1] - T[1])[0]) == null
                      ? void 0
                      : K[0];
                  V && (B = V);
                  break;
                }
                case "initialPlacement":
                  B = l;
                  break;
              }
            if (o !== B) return { reset: { placement: B } };
          }
          return {};
        },
      }
    );
  };
function Gd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Xd(e) {
  return Yx.some((t) => e[t] >= 0);
}
const a1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = Xt(e, t);
          switch (r) {
            case "referenceHidden": {
              const s = await Zo(t, { ...o, elementContext: "reference" }),
                i = Gd(s, n.reference);
              return {
                data: { referenceHiddenOffsets: i, referenceHidden: Xd(i) },
              };
            }
            case "escaped": {
              const s = await Zo(t, { ...o, altBoundary: !0 }),
                i = Gd(s, n.floating);
              return { data: { escapedOffsets: i, escaped: Xd(i) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  _m = new Set(["left", "top"]);
async function u1(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = qt(n),
    l = io(n),
    a = _t(n) === "y",
    u = _m.has(i) ? -1 : 1,
    c = s && a ? -1 : 1,
    f = Xt(t, e);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: E,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      };
  return (
    l && typeof E == "number" && (d = l === "end" ? E * -1 : E),
    a ? { x: d * c, y: m * u } : { x: m * u, y: d * c }
  );
}
const c1 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: l } = t,
            a = await u1(t, e);
          return i === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: s + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  d1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: l = {
                fn: (x) => {
                  let { x: h, y: p } = x;
                  return { x: h, y: p };
                },
              },
              ...a
            } = Xt(e, t),
            u = { x: n, y: r },
            c = await Zo(t, a),
            f = _t(qt(o)),
            m = oc(f);
          let d = u[m],
            E = u[f];
          if (s) {
            const x = m === "y" ? "top" : "left",
              h = m === "y" ? "bottom" : "right",
              p = d + c[x],
              v = d - c[h];
            d = Wa(p, d, v);
          }
          if (i) {
            const x = f === "y" ? "top" : "left",
              h = f === "y" ? "bottom" : "right",
              p = E + c[x],
              v = E - c[h];
            E = Wa(p, E, v);
          }
          const y = l.fn({ ...t, [m]: d, [f]: E });
          return {
            ...y,
            data: { x: y.x - n, y: y.y - r, enabled: { [m]: s, [f]: i } },
          };
        },
      }
    );
  },
  f1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = Xt(e, t),
            c = { x: n, y: r },
            f = _t(o),
            m = oc(f);
          let d = c[m],
            E = c[f];
          const y = Xt(l, t),
            x =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (a) {
            const v = m === "y" ? "height" : "width",
              S = s.reference[m] - s.floating[v] + x.mainAxis,
              C = s.reference[m] + s.reference[v] - x.mainAxis;
            d < S ? (d = S) : d > C && (d = C);
          }
          if (u) {
            var h, p;
            const v = m === "y" ? "width" : "height",
              S = _m.has(qt(o)),
              C =
                s.reference[f] -
                s.floating[v] +
                ((S && ((h = i.offset) == null ? void 0 : h[f])) || 0) +
                (S ? 0 : x.crossAxis),
              b =
                s.reference[f] +
                s.reference[v] +
                (S ? 0 : ((p = i.offset) == null ? void 0 : p[f]) || 0) -
                (S ? x.crossAxis : 0);
            E < C ? (E = C) : E > b && (E = b);
          }
          return { [m]: d, [f]: E };
        },
      }
    );
  },
  p1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: i, elements: l } = t,
            { apply: a = () => {}, ...u } = Xt(e, t),
            c = await Zo(t, u),
            f = qt(o),
            m = io(o),
            d = _t(o) === "y",
            { width: E, height: y } = s.floating;
          let x, h;
          f === "top" || f === "bottom"
            ? ((x = f),
              (h =
                m ===
                ((await (i.isRTL == null ? void 0 : i.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((h = f), (x = m === "end" ? "top" : "bottom"));
          const p = y - c.top - c.bottom,
            v = E - c.left - c.right,
            S = In(y - c[x], p),
            C = In(E - c[h], v),
            b = !t.middlewareData.shift;
          let k = S,
            R = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (R = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = p),
            b && !m)
          ) {
            const O = Ye(c.left, 0),
              z = Ye(c.right, 0),
              L = Ye(c.top, 0),
              K = Ye(c.bottom, 0);
            d
              ? (R = E - 2 * (O !== 0 || z !== 0 ? O + z : Ye(c.left, c.right)))
              : (k =
                  y - 2 * (L !== 0 || K !== 0 ? L + K : Ye(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: R, availableHeight: k });
          const D = await i.getDimensions(l.floating);
          return E !== D.width || y !== D.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Zi() {
  return typeof window < "u";
}
function lo(e) {
  return Am(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qe(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Dt(e) {
  var t;
  return (t = (Am(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Am(e) {
  return Zi() ? e instanceof Node || e instanceof qe(e).Node : !1;
}
function bt(e) {
  return Zi() ? e instanceof Element || e instanceof qe(e).Element : !1;
}
function It(e) {
  return Zi() ? e instanceof HTMLElement || e instanceof qe(e).HTMLElement : !1;
}
function qd(e) {
  return !Zi() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot;
}
const h1 = new Set(["inline", "contents"]);
function fs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = kt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !h1.has(o);
}
const m1 = new Set(["table", "td", "th"]);
function g1(e) {
  return m1.has(lo(e));
}
const v1 = [":popover-open", ":modal"];
function Ji(e) {
  return v1.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const y1 = ["transform", "translate", "scale", "rotate", "perspective"],
  w1 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  x1 = ["paint", "layout", "strict", "content"];
function lc(e) {
  const t = ac(),
    n = bt(e) ? kt(e) : e;
  return (
    y1.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    w1.some((r) => (n.willChange || "").includes(r)) ||
    x1.some((r) => (n.contain || "").includes(r))
  );
}
function S1(e) {
  let t = Dn(e);
  for (; It(t) && !eo(t); ) {
    if (lc(t)) return t;
    if (Ji(t)) return null;
    t = Dn(t);
  }
  return null;
}
function ac() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const E1 = new Set(["html", "body", "#document"]);
function eo(e) {
  return E1.has(lo(e));
}
function kt(e) {
  return qe(e).getComputedStyle(e);
}
function el(e) {
  return bt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Dn(e) {
  if (lo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (qd(e) && e.host) || Dt(e);
  return qd(t) ? t.host : t;
}
function Mm(e) {
  const t = Dn(e);
  return eo(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : It(t) && fs(t)
    ? t
    : Mm(t);
}
function Jo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Mm(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = qe(o);
  if (s) {
    const l = Qa(i);
    return t.concat(
      i,
      i.visualViewport || [],
      fs(o) ? o : [],
      l && n ? Jo(l) : []
    );
  }
  return t.concat(o, Jo(o, [], n));
}
function Qa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Lm(e) {
  const t = kt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = It(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    l = bi(n) !== s || bi(r) !== i;
  return l && ((n = s), (r = i)), { width: n, height: r, $: l };
}
function uc(e) {
  return bt(e) ? e : e.contextElement;
}
function Dr(e) {
  const t = uc(e);
  if (!It(t)) return Lt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Lm(t);
  let i = (s ? bi(n.width) : n.width) / r,
    l = (s ? bi(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: i, y: l }
  );
}
const C1 = Lt(0);
function Im(e) {
  const t = qe(e);
  return !ac() || !t.visualViewport
    ? C1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function b1(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== qe(e)) ? !1 : t;
}
function ar(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = uc(e);
  let i = Lt(1);
  t && (r ? bt(r) && (i = Dr(r)) : (i = Dr(e)));
  const l = b1(s, n, r) ? Im(s) : Lt(0);
  let a = (o.left + l.x) / i.x,
    u = (o.top + l.y) / i.y,
    c = o.width / i.x,
    f = o.height / i.y;
  if (s) {
    const m = qe(s),
      d = r && bt(r) ? qe(r) : r;
    let E = m,
      y = Qa(E);
    for (; y && r && d !== E; ) {
      const x = Dr(y),
        h = y.getBoundingClientRect(),
        p = kt(y),
        v = h.left + (y.clientLeft + parseFloat(p.paddingLeft)) * x.x,
        S = h.top + (y.clientTop + parseFloat(p.paddingTop)) * x.y;
      (a *= x.x),
        (u *= x.y),
        (c *= x.x),
        (f *= x.y),
        (a += v),
        (u += S),
        (E = qe(y)),
        (y = Qa(E));
    }
  }
  return Pi({ width: c, height: f, x: a, y: u });
}
function tl(e, t) {
  const n = el(e).scrollLeft;
  return t ? t.left + n : ar(Dt(e)).left + n;
}
function Dm(e, t) {
  const n = e.getBoundingClientRect(),
    r = n.left + t.scrollLeft - tl(e, n),
    o = n.top + t.scrollTop;
  return { x: r, y: o };
}
function k1(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    i = Dt(r),
    l = t ? Ji(t.floating) : !1;
  if (r === i || (l && s)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Lt(1);
  const c = Lt(0),
    f = It(r);
  if (
    (f || (!f && !s)) &&
    ((lo(r) !== "body" || fs(i)) && (a = el(r)), It(r))
  ) {
    const d = ar(r);
    (u = Dr(r)), (c.x = d.x + r.clientLeft), (c.y = d.y + r.clientTop);
  }
  const m = i && !f && !s ? Dm(i, a) : Lt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + c.x + m.x,
    y: n.y * u.y - a.scrollTop * u.y + c.y + m.y,
  };
}
function P1(e) {
  return Array.from(e.getClientRects());
}
function N1(e) {
  const t = Dt(e),
    n = el(e),
    r = e.ownerDocument.body,
    o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + tl(e);
  const l = -n.scrollTop;
  return (
    kt(r).direction === "rtl" && (i += Ye(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: l }
  );
}
const Zd = 25;
function T1(e, t) {
  const n = qe(e),
    r = Dt(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const c = ac();
    (!c || (c && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  const u = tl(r);
  if (u <= 0) {
    const c = r.ownerDocument,
      f = c.body,
      m = getComputedStyle(f),
      d =
        (c.compatMode === "CSS1Compat" &&
          parseFloat(m.marginLeft) + parseFloat(m.marginRight)) ||
        0,
      E = Math.abs(r.clientWidth - f.clientWidth - d);
    E <= Zd && (s -= E);
  } else u <= Zd && (s += u);
  return { width: s, height: i, x: l, y: a };
}
const R1 = new Set(["absolute", "fixed"]);
function j1(e, t) {
  const n = ar(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = It(e) ? Dr(e) : Lt(1),
    i = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    a = o * s.x,
    u = r * s.y;
  return { width: i, height: l, x: a, y: u };
}
function Jd(e, t, n) {
  let r;
  if (t === "viewport") r = T1(e, n);
  else if (t === "document") r = N1(Dt(e));
  else if (bt(t)) r = j1(t, n);
  else {
    const o = Im(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Pi(r);
}
function zm(e, t) {
  const n = Dn(e);
  return n === t || !bt(n) || eo(n)
    ? !1
    : kt(n).position === "fixed" || zm(n, t);
}
function O1(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Jo(e, [], !1).filter((l) => bt(l) && lo(l) !== "body"),
    o = null;
  const s = kt(e).position === "fixed";
  let i = s ? Dn(e) : e;
  for (; bt(i) && !eo(i); ) {
    const l = kt(i),
      a = lc(i);
    !a && l.position === "fixed" && (o = null),
      (
        s
          ? !a && !o
          : (!a && l.position === "static" && !!o && R1.has(o.position)) ||
            (fs(i) && !a && zm(e, i))
      )
        ? (r = r.filter((c) => c !== i))
        : (o = l),
      (i = Dn(i));
  }
  return t.set(e, r), r;
}
function _1(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Ji(t)
          ? []
          : O1(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = i[0],
    a = i.reduce((u, c) => {
      const f = Jd(t, c, o);
      return (
        (u.top = Ye(f.top, u.top)),
        (u.right = In(f.right, u.right)),
        (u.bottom = In(f.bottom, u.bottom)),
        (u.left = Ye(f.left, u.left)),
        u
      );
    }, Jd(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function A1(e) {
  const { width: t, height: n } = Lm(e);
  return { width: t, height: n };
}
function M1(e, t, n) {
  const r = It(t),
    o = Dt(t),
    s = n === "fixed",
    i = ar(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Lt(0);
  function u() {
    a.x = tl(o);
  }
  if (r || (!r && !s))
    if (((lo(t) !== "body" || fs(o)) && (l = el(t)), r)) {
      const d = ar(t, !0, s, t);
      (a.x = d.x + t.clientLeft), (a.y = d.y + t.clientTop);
    } else o && u();
  s && !r && o && u();
  const c = o && !r && !s ? Dm(o, l) : Lt(0),
    f = i.left + l.scrollLeft - a.x - c.x,
    m = i.top + l.scrollTop - a.y - c.y;
  return { x: f, y: m, width: i.width, height: i.height };
}
function Wl(e) {
  return kt(e).position === "static";
}
function ef(e, t) {
  if (!It(e) || kt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Dt(e) === n && (n = n.ownerDocument.body), n;
}
function Fm(e, t) {
  const n = qe(e);
  if (Ji(e)) return n;
  if (!It(e)) {
    let o = Dn(e);
    for (; o && !eo(o); ) {
      if (bt(o) && !Wl(o)) return o;
      o = Dn(o);
    }
    return n;
  }
  let r = ef(e, t);
  for (; r && g1(r) && Wl(r); ) r = ef(r, t);
  return r && eo(r) && Wl(r) && !lc(r) ? n : r || S1(e) || n;
}
const L1 = async function (e) {
  const t = this.getOffsetParent || Fm,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: M1(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function I1(e) {
  return kt(e).direction === "rtl";
}
const D1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: k1,
  getDocumentElement: Dt,
  getClippingRect: _1,
  getOffsetParent: Fm,
  getElementRects: L1,
  getClientRects: P1,
  getDimensions: A1,
  getScale: Dr,
  isElement: bt,
  isRTL: I1,
};
function $m(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function z1(e, t) {
  let n = null,
    r;
  const o = Dt(e);
  function s() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function i(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const u = e.getBoundingClientRect(),
      { left: c, top: f, width: m, height: d } = u;
    if ((l || t(), !m || !d)) return;
    const E = Ds(f),
      y = Ds(o.clientWidth - (c + m)),
      x = Ds(o.clientHeight - (f + d)),
      h = Ds(c),
      v = {
        rootMargin: -E + "px " + -y + "px " + -x + "px " + -h + "px",
        threshold: Ye(0, In(1, a)) || 1,
      };
    let S = !0;
    function C(b) {
      const k = b[0].intersectionRatio;
      if (k !== a) {
        if (!S) return i();
        k
          ? i(!1, k)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      k === 1 && !$m(u, e.getBoundingClientRect()) && i(), (S = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, v);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function F1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = uc(e),
    c = o || s ? [...(u ? Jo(u) : []), ...Jo(t)] : [];
  c.forEach((h) => {
    o && h.addEventListener("scroll", n, { passive: !0 }),
      s && h.addEventListener("resize", n);
  });
  const f = u && l ? z1(u, n) : null;
  let m = -1,
    d = null;
  i &&
    ((d = new ResizeObserver((h) => {
      let [p] = h;
      p &&
        p.target === u &&
        d &&
        (d.unobserve(t),
        cancelAnimationFrame(m),
        (m = requestAnimationFrame(() => {
          var v;
          (v = d) == null || v.observe(t);
        }))),
        n();
    })),
    u && !a && d.observe(u),
    d.observe(t));
  let E,
    y = a ? ar(e) : null;
  a && x();
  function x() {
    const h = ar(e);
    y && !$m(y, h) && n(), (y = h), (E = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var h;
      c.forEach((p) => {
        o && p.removeEventListener("scroll", n),
          s && p.removeEventListener("resize", n);
      }),
        f == null || f(),
        (h = d) == null || h.disconnect(),
        (d = null),
        a && cancelAnimationFrame(E);
    }
  );
}
const $1 = c1,
  B1 = d1,
  U1 = l1,
  V1 = p1,
  W1 = a1,
  tf = i1,
  H1 = f1,
  Q1 = (e, t, n) => {
    const r = new Map(),
      o = { platform: D1, ...n },
      s = { ...o.platform, _c: r };
    return s1(e, t, { ...o, platform: s });
  };
var K1 = typeof document < "u",
  Y1 = function () {},
  Js = K1 ? w.useLayoutEffect : Y1;
function Ni(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Ni(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Ni(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Bm(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function nf(e, t) {
  const n = Bm(e);
  return Math.round(t * n) / n;
}
function Hl(e) {
  const t = w.useRef(e);
  return (
    Js(() => {
      t.current = e;
    }),
    t
  );
}
function G1(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [c, f] = w.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [m, d] = w.useState(r);
  Ni(m, r) || d(r);
  const [E, y] = w.useState(null),
    [x, h] = w.useState(null),
    p = w.useCallback((N) => {
      N !== b.current && ((b.current = N), y(N));
    }, []),
    v = w.useCallback((N) => {
      N !== k.current && ((k.current = N), h(N));
    }, []),
    S = s || E,
    C = i || x,
    b = w.useRef(null),
    k = w.useRef(null),
    R = w.useRef(c),
    D = a != null,
    O = Hl(a),
    z = Hl(o),
    L = Hl(u),
    K = w.useCallback(() => {
      if (!b.current || !k.current) return;
      const N = { placement: t, strategy: n, middleware: m };
      z.current && (N.platform = z.current),
        Q1(b.current, k.current, N).then((T) => {
          const M = { ...T, isPositioned: L.current !== !1 };
          A.current &&
            !Ni(R.current, M) &&
            ((R.current = M),
            cs.flushSync(() => {
              f(M);
            }));
        });
    }, [m, t, n, z, L]);
  Js(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), f((N) => ({ ...N, isPositioned: !1 })));
  }, [u]);
  const A = w.useRef(!1);
  Js(
    () => (
      (A.current = !0),
      () => {
        A.current = !1;
      }
    ),
    []
  ),
    Js(() => {
      if ((S && (b.current = S), C && (k.current = C), S && C)) {
        if (O.current) return O.current(S, C, K);
        K();
      }
    }, [S, C, K, O, D]);
  const H = w.useMemo(
      () => ({ reference: b, floating: k, setReference: p, setFloating: v }),
      [p, v]
    ),
    B = w.useMemo(() => ({ reference: S, floating: C }), [S, C]),
    V = w.useMemo(() => {
      const N = { position: n, left: 0, top: 0 };
      if (!B.floating) return N;
      const T = nf(B.floating, c.x),
        M = nf(B.floating, c.y);
      return l
        ? {
            ...N,
            transform: "translate(" + T + "px, " + M + "px)",
            ...(Bm(B.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: T, top: M };
    }, [n, l, B.floating, c.x, c.y]);
  return w.useMemo(
    () => ({ ...c, update: K, refs: H, elements: B, floatingStyles: V }),
    [c, K, H, B, V]
  );
}
const X1 = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? tf({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? tf({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  q1 = (e, t) => ({ ...$1(e), options: [e, t] }),
  Z1 = (e, t) => ({ ...B1(e), options: [e, t] }),
  J1 = (e, t) => ({ ...H1(e), options: [e, t] }),
  eS = (e, t) => ({ ...U1(e), options: [e, t] }),
  tS = (e, t) => ({ ...V1(e), options: [e, t] }),
  nS = (e, t) => ({ ...W1(e), options: [e, t] }),
  rS = (e, t) => ({ ...X1(e), options: [e, t] });
var oS = "Arrow",
  Um = w.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return g.jsx(Qe.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : g.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Um.displayName = oS;
var sS = Um;
function iS(e) {
  const [t, n] = w.useState(void 0);
  return (
    Ln(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, l;
          if ("borderBoxSize" in s) {
            const a = s.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (i = u.inlineSize), (l = u.blockSize);
          } else (i = e.offsetWidth), (l = e.offsetHeight);
          n({ width: i, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var Vm = "Popper",
  [Wm, Hm] = Gi(Vm),
  [xC, Qm] = Wm(Vm),
  Km = "PopperAnchor",
  Ym = w.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = Qm(Km, n),
      i = w.useRef(null),
      l = Ct(t, i),
      a = w.useRef(null);
    return (
      w.useEffect(() => {
        const u = a.current;
        (a.current = (r == null ? void 0 : r.current) || i.current),
          u !== a.current && s.onAnchorChange(a.current);
      }),
      r ? null : g.jsx(Qe.div, { ...o, ref: l })
    );
  });
Ym.displayName = Km;
var cc = "PopperContent",
  [lS, aS] = Wm(cc),
  Gm = w.forwardRef((e, t) => {
    var J, dr, en, Bn, tn, fr;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: i = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: f = "partial",
        hideWhenDetached: m = !1,
        updatePositionStrategy: d = "optimized",
        onPlaced: E,
        ...y
      } = e,
      x = Qm(cc, n),
      [h, p] = w.useState(null),
      v = Ct(t, (nn) => p(nn)),
      [S, C] = w.useState(null),
      b = iS(S),
      k = (b == null ? void 0 : b.width) ?? 0,
      R = (b == null ? void 0 : b.height) ?? 0,
      D = r + (s !== "center" ? "-" + s : ""),
      O =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      z = Array.isArray(u) ? u : [u],
      L = z.length > 0,
      K = { padding: O, boundary: z.filter(cS), altBoundary: L },
      {
        refs: A,
        floatingStyles: H,
        placement: B,
        isPositioned: V,
        middlewareData: N,
      } = G1({
        strategy: "fixed",
        placement: D,
        whileElementsMounted: (...nn) =>
          F1(...nn, { animationFrame: d === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          q1({ mainAxis: o + R, alignmentAxis: i }),
          a &&
            Z1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? J1() : void 0,
              ...K,
            }),
          a && eS({ ...K }),
          tS({
            ...K,
            apply: ({
              elements: nn,
              rects: ps,
              availableWidth: ul,
              availableHeight: hs,
            }) => {
              const { width: cl, height: ao } = ps.reference,
                pr = nn.floating.style;
              pr.setProperty("--radix-popper-available-width", `${ul}px`),
                pr.setProperty("--radix-popper-available-height", `${hs}px`),
                pr.setProperty("--radix-popper-anchor-width", `${cl}px`),
                pr.setProperty("--radix-popper-anchor-height", `${ao}px`);
            },
          }),
          S && rS({ element: S, padding: l }),
          dS({ arrowWidth: k, arrowHeight: R }),
          m && nS({ strategy: "referenceHidden", ...K }),
        ],
      }),
      [T, M] = Zm(B),
      W = Mn(E);
    Ln(() => {
      V && (W == null || W());
    }, [V, W]);
    const F = (J = N.arrow) == null ? void 0 : J.x,
      Y = (dr = N.arrow) == null ? void 0 : dr.y,
      X = ((en = N.arrow) == null ? void 0 : en.centerOffset) !== 0,
      [me, Ne] = w.useState();
    return (
      Ln(() => {
        h && Ne(window.getComputedStyle(h).zIndex);
      }, [h]),
      g.jsx("div", {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: V ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: me,
          "--radix-popper-transform-origin": [
            (Bn = N.transformOrigin) == null ? void 0 : Bn.x,
            (tn = N.transformOrigin) == null ? void 0 : tn.y,
          ].join(" "),
          ...(((fr = N.hide) == null ? void 0 : fr.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: g.jsx(lS, {
          scope: n,
          placedSide: T,
          onArrowChange: C,
          arrowX: F,
          arrowY: Y,
          shouldHideArrow: X,
          children: g.jsx(Qe.div, {
            "data-side": T,
            "data-align": M,
            ...y,
            ref: v,
            style: { ...y.style, animation: V ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Gm.displayName = cc;
var Xm = "PopperArrow",
  uS = { top: "bottom", right: "left", bottom: "top", left: "right" },
  qm = w.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = aS(Xm, r),
      i = uS[s.placedSide];
    return g.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: g.jsx(sS, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
qm.displayName = Xm;
function cS(e) {
  return e !== null;
}
var dS = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, h, p;
    const { placement: n, rects: r, middlewareData: o } = t,
      i = ((x = o.arrow) == null ? void 0 : x.centerOffset) !== 0,
      l = i ? 0 : e.arrowWidth,
      a = i ? 0 : e.arrowHeight,
      [u, c] = Zm(n),
      f = { start: "0%", center: "50%", end: "100%" }[c],
      m = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + l / 2,
      d = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + a / 2;
    let E = "",
      y = "";
    return (
      u === "bottom"
        ? ((E = i ? f : `${m}px`), (y = `${-a}px`))
        : u === "top"
        ? ((E = i ? f : `${m}px`), (y = `${r.floating.height + a}px`))
        : u === "right"
        ? ((E = `${-a}px`), (y = i ? f : `${d}px`))
        : u === "left" &&
          ((E = `${r.floating.width + a}px`), (y = i ? f : `${d}px`)),
      { data: { x: E, y } }
    );
  },
});
function Zm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var fS = Ym,
  pS = Gm,
  hS = qm,
  mS = Symbol("radix.slottable");
function gS(e) {
  const t = ({ children: n }) => g.jsx(g.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = mS), t;
}
var [nl] = Gi("Tooltip", [Hm]),
  dc = Hm(),
  Jm = "TooltipProvider",
  vS = 700,
  rf = "tooltip.open",
  [yS, eg] = nl(Jm),
  tg = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = vS,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: s,
      } = e,
      i = w.useRef(!0),
      l = w.useRef(!1),
      a = w.useRef(0);
    return (
      w.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      g.jsx(yS, {
        scope: t,
        isOpenDelayedRef: i,
        delayDuration: n,
        onOpen: w.useCallback(() => {
          window.clearTimeout(a.current), (i.current = !1);
        }, []),
        onClose: w.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (i.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: w.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
tg.displayName = Jm;
var ng = "Tooltip",
  [SC, rl] = nl(ng),
  Ka = "TooltipTrigger",
  wS = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = rl(Ka, n),
      s = eg(Ka, n),
      i = dc(n),
      l = w.useRef(null),
      a = Ct(t, l, o.onTriggerChange),
      u = w.useRef(!1),
      c = w.useRef(!1),
      f = w.useCallback(() => (u.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", f),
        [f]
      ),
      g.jsx(fS, {
        asChild: !0,
        ...i,
        children: g.jsx(Qe.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: ye(e.onPointerMove, (m) => {
            m.pointerType !== "touch" &&
              !c.current &&
              !s.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: ye(e.onPointerLeave, () => {
            o.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: ye(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", f, { once: !0 });
          }),
          onFocus: ye(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: ye(e.onBlur, o.onClose),
          onClick: ye(e.onClick, o.onClose),
        }),
      })
    );
  });
wS.displayName = Ka;
var xS = "TooltipPortal",
  [EC, SS] = nl(xS, { forceMount: void 0 }),
  to = "TooltipContent",
  rg = w.forwardRef((e, t) => {
    const n = SS(to, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
      i = rl(to, e.__scopeTooltip);
    return g.jsx(Zu, {
      present: r || i.open,
      children: i.disableHoverableContent
        ? g.jsx(og, { side: o, ...s, ref: t })
        : g.jsx(ES, { side: o, ...s, ref: t }),
    });
  }),
  ES = w.forwardRef((e, t) => {
    const n = rl(to, e.__scopeTooltip),
      r = eg(to, e.__scopeTooltip),
      o = w.useRef(null),
      s = Ct(t, o),
      [i, l] = w.useState(null),
      { trigger: a, onClose: u } = n,
      c = o.current,
      { onPointerInTransitChange: f } = r,
      m = w.useCallback(() => {
        l(null), f(!1);
      }, [f]),
      d = w.useCallback(
        (E, y) => {
          const x = E.currentTarget,
            h = { x: E.clientX, y: E.clientY },
            p = NS(h, x.getBoundingClientRect()),
            v = TS(h, p),
            S = RS(y.getBoundingClientRect()),
            C = OS([...v, ...S]);
          l(C), f(!0);
        },
        [f]
      );
    return (
      w.useEffect(() => () => m(), [m]),
      w.useEffect(() => {
        if (a && c) {
          const E = (x) => d(x, c),
            y = (x) => d(x, a);
          return (
            a.addEventListener("pointerleave", E),
            c.addEventListener("pointerleave", y),
            () => {
              a.removeEventListener("pointerleave", E),
                c.removeEventListener("pointerleave", y);
            }
          );
        }
      }, [a, c, d, m]),
      w.useEffect(() => {
        if (i) {
          const E = (y) => {
            const x = y.target,
              h = { x: y.clientX, y: y.clientY },
              p =
                (a == null ? void 0 : a.contains(x)) ||
                (c == null ? void 0 : c.contains(x)),
              v = !jS(h, i);
            p ? m() : v && (m(), u());
          };
          return (
            document.addEventListener("pointermove", E),
            () => document.removeEventListener("pointermove", E)
          );
        }
      }, [a, c, i, u, m]),
      g.jsx(og, { ...e, ref: s })
    );
  }),
  [CS, bS] = nl(ng, { isInside: !1 }),
  kS = gS("TooltipContent"),
  og = w.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        ...l
      } = e,
      a = rl(to, n),
      u = dc(n),
      { onClose: c } = a;
    return (
      w.useEffect(
        () => (
          document.addEventListener(rf, c),
          () => document.removeEventListener(rf, c)
        ),
        [c]
      ),
      w.useEffect(() => {
        if (a.trigger) {
          const f = (m) => {
            const d = m.target;
            d != null && d.contains(a.trigger) && c();
          };
          return (
            window.addEventListener("scroll", f, { capture: !0 }),
            () => window.removeEventListener("scroll", f, { capture: !0 })
          );
        }
      }, [a.trigger, c]),
      g.jsx(qu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: i,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: c,
        children: g.jsxs(pS, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            g.jsx(kS, { children: r }),
            g.jsx(CS, {
              scope: n,
              isInside: !0,
              children: g.jsx(W0, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
rg.displayName = to;
var sg = "TooltipArrow",
  PS = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = dc(n);
    return bS(sg, n).isInside ? null : g.jsx(hS, { ...o, ...r, ref: t });
  });
PS.displayName = sg;
function NS(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function TS(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function RS(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function jS(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const l = t[s],
      a = t[i],
      u = l.x,
      c = l.y,
      f = a.x,
      m = a.y;
    c > r != m > r && n < ((f - u) * (r - c)) / (m - c) + u && (o = !o);
  }
  return o;
}
function OS(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    _S(t)
  );
}
function _S(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        i = t[t.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        i = n[n.length - 2];
      if ((s.x - i.x) * (o.y - i.y) >= (s.y - i.y) * (o.x - i.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var AS = tg,
  ig = rg;
const MS = AS,
  LS = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    g.jsx(ig, {
      ref: r,
      sideOffset: t,
      className: Jt(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
LS.displayName = ig.displayName;
var ol = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  IS = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  mn,
  tu,
  Sf,
  DS =
    ((Sf = class {
      constructor() {
        q(this, mn, IS);
        q(this, tu, !1);
      }
      setTimeoutProvider(e) {
        $(this, mn, e);
      }
      setTimeout(e, t) {
        return P(this, mn).setTimeout(e, t);
      }
      clearTimeout(e) {
        P(this, mn).clearTimeout(e);
      }
      setInterval(e, t) {
        return P(this, mn).setInterval(e, t);
      }
      clearInterval(e) {
        P(this, mn).clearInterval(e);
      }
    }),
    (mn = new WeakMap()),
    (tu = new WeakMap()),
    Sf),
  Ya = new DS();
function zS(e) {
  setTimeout(e, 0);
}
var sl = typeof window > "u" || "Deno" in globalThis;
function mt() {}
function FS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function $S(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function BS(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ga(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function US(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function of(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: s,
    queryKey: i,
    stale: l,
  } = e;
  if (i) {
    if (r) {
      if (t.queryHash !== fc(i, t.options)) return !1;
    } else if (!ts(t.queryKey, i)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function sf(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (es(t.options.mutationKey) !== es(s)) return !1;
    } else if (!ts(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function fc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || es)(e);
}
function es(e) {
  return JSON.stringify(e, (t, n) =>
    Xa(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function ts(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => ts(e[n], t[n]))
    : !1;
}
var VS = Object.prototype.hasOwnProperty;
function lg(e, t) {
  if (e === t) return e;
  const n = lf(e) && lf(t);
  if (!n && !(Xa(e) && Xa(t))) return t;
  const o = (n ? e : Object.keys(e)).length,
    s = n ? t : Object.keys(t),
    i = s.length,
    l = n ? new Array(i) : {};
  let a = 0;
  for (let u = 0; u < i; u++) {
    const c = n ? u : s[u],
      f = e[c],
      m = t[c];
    if (f === m) {
      (l[c] = f), (n ? u < o : VS.call(e, c)) && a++;
      continue;
    }
    if (
      f === null ||
      m === null ||
      typeof f != "object" ||
      typeof m != "object"
    ) {
      l[c] = m;
      continue;
    }
    const d = lg(f, m);
    (l[c] = d), d === f && a++;
  }
  return o === i && a === o ? e : l;
}
function lf(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Xa(e) {
  if (!af(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !af(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function af(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function WS(e) {
  return new Promise((t) => {
    Ya.setTimeout(t, e);
  });
}
function HS(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? lg(e, t)
    : t;
}
function QS(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function KS(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var pc = Symbol();
function ag(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === pc
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var Gn,
  gn,
  Fr,
  Ef,
  YS =
    ((Ef = class extends ol {
      constructor() {
        super();
        q(this, Gn);
        q(this, gn);
        q(this, Fr);
        $(this, Fr, (t) => {
          if (!sl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, gn) || this.setEventListener(P(this, Fr));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, gn)) == null || t.call(this), $(this, gn, void 0));
      }
      setEventListener(t) {
        var n;
        $(this, Fr, t),
          (n = P(this, gn)) == null || n.call(this),
          $(
            this,
            gn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        P(this, Gn) !== t && ($(this, Gn, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, Gn) == "boolean"
          ? P(this, Gn)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (Gn = new WeakMap()),
    (gn = new WeakMap()),
    (Fr = new WeakMap()),
    Ef),
  ug = new YS();
function GS() {
  let e, t;
  const n = new Promise((o, s) => {
    (e = o), (t = s);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
var XS = zS;
function qS() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = XS;
  const s = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    i = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || i();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        s(() => {
          l(...a);
        });
      },
    schedule: s,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Le = qS(),
  $r,
  vn,
  Br,
  Cf,
  ZS =
    ((Cf = class extends ol {
      constructor() {
        super();
        q(this, $r, !0);
        q(this, vn);
        q(this, Br);
        $(this, Br, (t) => {
          if (!sl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, vn) || this.setEventListener(P(this, Br));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, vn)) == null || t.call(this), $(this, vn, void 0));
      }
      setEventListener(t) {
        var n;
        $(this, Br, t),
          (n = P(this, vn)) == null || n.call(this),
          $(this, vn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        P(this, $r) !== t &&
          ($(this, $r, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, $r);
      }
    }),
    ($r = new WeakMap()),
    (vn = new WeakMap()),
    (Br = new WeakMap()),
    Cf),
  Ti = new ZS();
function JS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function cg(e) {
  return (e ?? "online") === "online" ? Ti.isOnline() : !0;
}
var qa = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function dg(e) {
  let t = !1,
    n = 0,
    r;
  const o = GS(),
    s = () => o.status !== "pending",
    i = (y) => {
      var x;
      if (!s()) {
        const h = new qa(y);
        m(h), (x = e.onCancel) == null || x.call(e, h);
      }
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      ug.isFocused() &&
      (e.networkMode === "always" || Ti.isOnline()) &&
      e.canRun(),
    c = () => cg(e.networkMode) && e.canRun(),
    f = (y) => {
      s() || (r == null || r(), o.resolve(y));
    },
    m = (y) => {
      s() || (r == null || r(), o.reject(y));
    },
    d = () =>
      new Promise((y) => {
        var x;
        (r = (h) => {
          (s() || u()) && y(h);
        }),
          (x = e.onPause) == null || x.call(e);
      }).then(() => {
        var y;
        (r = void 0), s() || (y = e.onContinue) == null || y.call(e);
      }),
    E = () => {
      if (s()) return;
      let y;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        y = x ?? e.fn();
      } catch (h) {
        y = Promise.reject(h);
      }
      Promise.resolve(y)
        .then(f)
        .catch((h) => {
          var b;
          if (s()) return;
          const p = e.retry ?? (sl ? 0 : 3),
            v = e.retryDelay ?? JS,
            S = typeof v == "function" ? v(n, h) : v,
            C =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, h));
          if (t || !C) {
            m(h);
            return;
          }
          n++,
            (b = e.onFail) == null || b.call(e, n, h),
            WS(S)
              .then(() => (u() ? void 0 : d()))
              .then(() => {
                t ? m(h) : E();
              });
        });
    };
  return {
    promise: o,
    status: () => o.status,
    cancel: i,
    continue: () => (r == null || r(), o),
    cancelRetry: l,
    continueRetry: a,
    canStart: c,
    start: () => (c() ? E() : d().then(E), o),
  };
}
var Xn,
  bf,
  fg =
    ((bf = class {
      constructor() {
        q(this, Xn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          $S(this.gcTime) &&
            $(
              this,
              Xn,
              Ya.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (sl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        P(this, Xn) && (Ya.clearTimeout(P(this, Xn)), $(this, Xn, void 0));
      }
    }),
    (Xn = new WeakMap()),
    bf),
  qn,
  Ur,
  nt,
  Zn,
  xe,
  ns,
  Jn,
  gt,
  Ft,
  kf,
  eE =
    ((kf = class extends fg {
      constructor(t) {
        super();
        q(this, gt);
        q(this, qn);
        q(this, Ur);
        q(this, nt);
        q(this, Zn);
        q(this, xe);
        q(this, ns);
        q(this, Jn);
        $(this, Jn, !1),
          $(this, ns, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          $(this, Zn, t.client),
          $(this, nt, P(this, Zn).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          $(this, qn, cf(this.options)),
          (this.state = t.state ?? P(this, qn)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, xe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        if (
          ((this.options = { ...P(this, ns), ...t }),
          this.updateGcTime(this.options.gcTime),
          this.state && this.state.data === void 0)
        ) {
          const n = cf(this.options);
          n.data !== void 0 &&
            (this.setState(uf(n.data, n.dataUpdatedAt)), $(this, qn, n));
        }
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, nt).remove(this);
      }
      setData(t, n) {
        const r = HS(this.state.data, t, this.options);
        return (
          Te(this, gt, Ft).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Te(this, gt, Ft).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, xe)) == null ? void 0 : r.promise;
        return (
          (o = P(this, xe)) == null || o.cancel(t),
          n ? n.then(mt).catch(mt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(P(this, qn));
      }
      isActive() {
        return this.observers.some((t) => US(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === pc ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Ga(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !BS(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, xe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, xe)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, nt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, xe) &&
              (P(this, Jn)
                ? P(this, xe).cancel({ revert: !0 })
                : P(this, xe).cancelRetry()),
            this.scheduleGc()),
          P(this, nt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Te(this, gt, Ft).call(this, { type: "invalidate" });
      }
      async fetch(t, n) {
        var a, u, c, f, m, d, E, y, x, h, p, v;
        if (
          this.state.fetchStatus !== "idle" &&
          ((a = P(this, xe)) == null ? void 0 : a.status()) !== "rejected"
        ) {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, xe))
            return P(this, xe).continueRetry(), P(this, xe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const S = this.observers.find((C) => C.options.queryFn);
          S && this.setOptions(S.options);
        }
        const r = new AbortController(),
          o = (S) => {
            Object.defineProperty(S, "signal", {
              enumerable: !0,
              get: () => ($(this, Jn, !0), r.signal),
            });
          },
          s = () => {
            const S = ag(this.options, n),
              b = (() => {
                const k = {
                  client: P(this, Zn),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return o(k), k;
              })();
            return (
              $(this, Jn, !1),
              this.options.persister ? this.options.persister(S, b, this) : S(b)
            );
          },
          l = (() => {
            const S = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: P(this, Zn),
              state: this.state,
              fetchFn: s,
            };
            return o(S), S;
          })();
        (u = this.options.behavior) == null || u.onFetch(l, this),
          $(this, Ur, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = l.fetchOptions) == null ? void 0 : c.meta)) &&
            Te(this, gt, Ft).call(this, {
              type: "fetch",
              meta: (f = l.fetchOptions) == null ? void 0 : f.meta,
            }),
          $(
            this,
            xe,
            dg({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              onCancel: (S) => {
                S instanceof qa &&
                  S.revert &&
                  this.setState({ ...P(this, Ur), fetchStatus: "idle" }),
                  r.abort();
              },
              onFail: (S, C) => {
                Te(this, gt, Ft).call(this, {
                  type: "failed",
                  failureCount: S,
                  error: C,
                });
              },
              onPause: () => {
                Te(this, gt, Ft).call(this, { type: "pause" });
              },
              onContinue: () => {
                Te(this, gt, Ft).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            })
          );
        try {
          const S = await P(this, xe).start();
          if (S === void 0)
            throw new Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(S),
            (d = (m = P(this, nt).config).onSuccess) == null ||
              d.call(m, S, this),
            (y = (E = P(this, nt).config).onSettled) == null ||
              y.call(E, S, this.state.error, this),
            S
          );
        } catch (S) {
          if (S instanceof qa) {
            if (S.silent) return P(this, xe).promise;
            if (S.revert) {
              if (this.state.data === void 0) throw S;
              return this.state.data;
            }
          }
          throw (
            (Te(this, gt, Ft).call(this, { type: "error", error: S }),
            (h = (x = P(this, nt).config).onError) == null ||
              h.call(x, S, this),
            (v = (p = P(this, nt).config).onSettled) == null ||
              v.call(p, this.state.data, S, this),
            S)
          );
        } finally {
          this.scheduleGc();
        }
      }
    }),
    (qn = new WeakMap()),
    (Ur = new WeakMap()),
    (nt = new WeakMap()),
    (Zn = new WeakMap()),
    (xe = new WeakMap()),
    (ns = new WeakMap()),
    (Jn = new WeakMap()),
    (gt = new WeakSet()),
    (Ft = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...tE(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            const o = {
              ...r,
              ...uf(t.data, t.dataUpdatedAt),
              dataUpdateCount: r.dataUpdateCount + 1,
              ...(!t.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return $(this, Ur, t.manual ? o : void 0), o;
          case "error":
            const s = t.error;
            return {
              ...r,
              error: s,
              errorUpdateCount: r.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: r.fetchFailureCount + 1,
              fetchFailureReason: s,
              fetchStatus: "idle",
              status: "error",
            };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, nt).notify({ query: this, type: "updated", action: t });
        });
    }),
    kf);
function tE(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: cg(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function uf(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function cf(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function df(e) {
  return {
    onFetch: (t, n) => {
      var c, f, m, d, E;
      const r = t.options,
        o =
          (m =
            (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : f.fetchMore) == null
            ? void 0
            : m.direction,
        s = ((d = t.state.data) == null ? void 0 : d.pages) || [],
        i = ((E = t.state.data) == null ? void 0 : E.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let y = !1;
        const x = (v) => {
            Object.defineProperty(v, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (y = !0)
                  : t.signal.addEventListener("abort", () => {
                      y = !0;
                    }),
                t.signal
              ),
            });
          },
          h = ag(t.options, t.fetchOptions),
          p = async (v, S, C) => {
            if (y) return Promise.reject();
            if (S == null && v.pages.length) return Promise.resolve(v);
            const k = (() => {
                const z = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: S,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return x(z), z;
              })(),
              R = await h(k),
              { maxPages: D } = t.options,
              O = C ? KS : QS;
            return {
              pages: O(v.pages, R, D),
              pageParams: O(v.pageParams, S, D),
            };
          };
        if (o && s.length) {
          const v = o === "backward",
            S = v ? nE : ff,
            C = { pages: s, pageParams: i },
            b = S(r, C);
          l = await p(C, b, v);
        } else {
          const v = e ?? s.length;
          do {
            const S = a === 0 ? i[0] ?? r.initialPageParam : ff(r, l);
            if (a > 0 && S == null) break;
            (l = await p(l, S)), a++;
          } while (a < v);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var y, x;
            return (x = (y = t.options).persister) == null
              ? void 0
              : x.call(
                  y,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function ff(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function nE(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var rs,
  Tt,
  Ae,
  er,
  Rt,
  cn,
  Pf,
  rE =
    ((Pf = class extends fg {
      constructor(t) {
        super();
        q(this, Rt);
        q(this, rs);
        q(this, Tt);
        q(this, Ae);
        q(this, er);
        $(this, rs, t.client),
          (this.mutationId = t.mutationId),
          $(this, Ae, t.mutationCache),
          $(this, Tt, []),
          (this.state = t.state || oE()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, Tt).includes(t) ||
          (P(this, Tt).push(t),
          this.clearGcTimeout(),
          P(this, Ae).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        $(
          this,
          Tt,
          P(this, Tt).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          P(this, Ae).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        P(this, Tt).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, Ae).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, er)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, l, a, u, c, f, m, d, E, y, x, h, p, v, S, C, b, k, R, D;
        const n = () => {
            Te(this, Rt, cn).call(this, { type: "continue" });
          },
          r = {
            client: P(this, rs),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey,
          };
        $(
          this,
          er,
          dg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t, r)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (O, z) => {
              Te(this, Rt, cn).call(this, {
                type: "failed",
                failureCount: O,
                error: z,
              });
            },
            onPause: () => {
              Te(this, Rt, cn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Ae).canRun(this),
          })
        );
        const o = this.state.status === "pending",
          s = !P(this, er).canStart();
        try {
          if (o) n();
          else {
            Te(this, Rt, cn).call(this, {
              type: "pending",
              variables: t,
              isPaused: s,
            }),
              await ((l = (i = P(this, Ae).config).onMutate) == null
                ? void 0
                : l.call(i, t, this, r));
            const z = await ((u = (a = this.options).onMutate) == null
              ? void 0
              : u.call(a, t, r));
            z !== this.state.context &&
              Te(this, Rt, cn).call(this, {
                type: "pending",
                context: z,
                variables: t,
                isPaused: s,
              });
          }
          const O = await P(this, er).start();
          return (
            await ((f = (c = P(this, Ae).config).onSuccess) == null
              ? void 0
              : f.call(c, O, t, this.state.context, this, r)),
            await ((d = (m = this.options).onSuccess) == null
              ? void 0
              : d.call(m, O, t, this.state.context, r)),
            await ((y = (E = P(this, Ae).config).onSettled) == null
              ? void 0
              : y.call(
                  E,
                  O,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  r
                )),
            await ((h = (x = this.options).onSettled) == null
              ? void 0
              : h.call(x, O, null, t, this.state.context, r)),
            Te(this, Rt, cn).call(this, { type: "success", data: O }),
            O
          );
        } catch (O) {
          try {
            throw (
              (await ((v = (p = P(this, Ae).config).onError) == null
                ? void 0
                : v.call(p, O, t, this.state.context, this, r)),
              await ((C = (S = this.options).onError) == null
                ? void 0
                : C.call(S, O, t, this.state.context, r)),
              await ((k = (b = P(this, Ae).config).onSettled) == null
                ? void 0
                : k.call(
                    b,
                    void 0,
                    O,
                    this.state.variables,
                    this.state.context,
                    this,
                    r
                  )),
              await ((D = (R = this.options).onSettled) == null
                ? void 0
                : D.call(R, void 0, O, t, this.state.context, r)),
              O)
            );
          } finally {
            Te(this, Rt, cn).call(this, { type: "error", error: O });
          }
        } finally {
          P(this, Ae).runNext(this);
        }
      }
    }),
    (rs = new WeakMap()),
    (Tt = new WeakMap()),
    (Ae = new WeakMap()),
    (er = new WeakMap()),
    (Rt = new WeakSet()),
    (cn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          P(this, Tt).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, Ae).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Pf);
function oE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var Ut,
  vt,
  os,
  Nf,
  sE =
    ((Nf = class extends ol {
      constructor(t = {}) {
        super();
        q(this, Ut);
        q(this, vt);
        q(this, os);
        (this.config = t),
          $(this, Ut, new Set()),
          $(this, vt, new Map()),
          $(this, os, 0);
      }
      build(t, n, r) {
        const o = new rE({
          client: t,
          mutationCache: this,
          mutationId: ++gs(this, os)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        P(this, Ut).add(t);
        const n = zs(t);
        if (typeof n == "string") {
          const r = P(this, vt).get(n);
          r ? r.push(t) : P(this, vt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (P(this, Ut).delete(t)) {
          const n = zs(t);
          if (typeof n == "string") {
            const r = P(this, vt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && P(this, vt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = zs(t);
        if (typeof n == "string") {
          const r = P(this, vt).get(n),
            o =
              r == null ? void 0 : r.find((s) => s.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = zs(t);
        if (typeof n == "string") {
          const o =
            (r = P(this, vt).get(n)) == null
              ? void 0
              : r.find((s) => s !== t && s.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Le.batch(() => {
          P(this, Ut).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            P(this, Ut).clear(),
            P(this, vt).clear();
        });
      }
      getAll() {
        return Array.from(P(this, Ut));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => sf(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => sf(t, n));
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Le.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(mt)))
        );
      }
    }),
    (Ut = new WeakMap()),
    (vt = new WeakMap()),
    (os = new WeakMap()),
    Nf);
function zs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
var jt,
  Tf,
  iE =
    ((Tf = class extends ol {
      constructor(t = {}) {
        super();
        q(this, jt);
        (this.config = t), $(this, jt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          s = n.queryHash ?? fc(o, n);
        let i = this.get(s);
        return (
          i ||
            ((i = new eE({
              client: t,
              queryKey: o,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(i)),
          i
        );
      }
      add(t) {
        P(this, jt).has(t.queryHash) ||
          (P(this, jt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, jt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, jt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, jt).get(t);
      }
      getAll() {
        return [...P(this, jt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => of(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => of(t, r)) : n;
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (jt = new WeakMap()),
    Tf),
  fe,
  yn,
  wn,
  Vr,
  Wr,
  xn,
  Hr,
  Qr,
  Rf,
  lE =
    ((Rf = class {
      constructor(e = {}) {
        q(this, fe);
        q(this, yn);
        q(this, wn);
        q(this, Vr);
        q(this, Wr);
        q(this, xn);
        q(this, Hr);
        q(this, Qr);
        $(this, fe, e.queryCache || new iE()),
          $(this, yn, e.mutationCache || new sE()),
          $(this, wn, e.defaultOptions || {}),
          $(this, Vr, new Map()),
          $(this, Wr, new Map()),
          $(this, xn, 0);
      }
      mount() {
        gs(this, xn)._++,
          P(this, xn) === 1 &&
            ($(
              this,
              Hr,
              ug.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, fe).onFocus());
              })
            ),
            $(
              this,
              Qr,
              Ti.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, fe).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        gs(this, xn)._--,
          P(this, xn) === 0 &&
            ((e = P(this, Hr)) == null || e.call(this),
            $(this, Hr, void 0),
            (t = P(this, Qr)) == null || t.call(this),
            $(this, Qr, void 0));
      }
      isFetching(e) {
        return P(this, fe).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, yn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, fe).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = P(this, fe).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Ga(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return P(this, fe)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, fe).get(r.queryHash),
          s = o == null ? void 0 : o.state.data,
          i = FS(t, s);
        if (i !== void 0)
          return P(this, fe)
            .build(this, r)
            .setData(i, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Le.batch(() =>
          P(this, fe)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, fe).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, fe);
        Le.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, fe);
        return Le.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Le.batch(() =>
            P(this, fe)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(mt).catch(mt);
      }
      invalidateQueries(e, t = {}) {
        return Le.batch(
          () => (
            P(this, fe)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Le.batch(() =>
            P(this, fe)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let s = o.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(mt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : s
                );
              })
          );
        return Promise.all(r).then(mt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, fe).build(this, t);
        return n.isStaleByTime(Ga(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(mt).catch(mt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = df(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(mt).catch(mt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = df(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ti.isOnline()
          ? P(this, yn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, fe);
      }
      getMutationCache() {
        return P(this, yn);
      }
      getDefaultOptions() {
        return P(this, wn);
      }
      setDefaultOptions(e) {
        $(this, wn, e);
      }
      setQueryDefaults(e, t) {
        P(this, Vr).set(es(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, Vr).values()],
          n = {};
        return (
          t.forEach((r) => {
            ts(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, Wr).set(es(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, Wr).values()],
          n = {};
        return (
          t.forEach((r) => {
            ts(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, wn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = fc(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === pc && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, wn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        P(this, fe).clear(), P(this, yn).clear();
      }
    }),
    (fe = new WeakMap()),
    (yn = new WeakMap()),
    (wn = new WeakMap()),
    (Vr = new WeakMap()),
    (Wr = new WeakMap()),
    (xn = new WeakMap()),
    (Hr = new WeakMap()),
    (Qr = new WeakMap()),
    Rf),
  aE = w.createContext(void 0),
  uE = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    g.jsx(aE.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ri() {
  return (
    (Ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ri.apply(this, arguments)
  );
}
var Cn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Cn || (Cn = {}));
const pf = "popstate";
function cE(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: s, search: i, hash: l } = r.location;
    return Za(
      "",
      { pathname: s, search: i, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : hg(o);
  }
  return fE(t, n, null, e);
}
function He(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function pg(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function dE() {
  return Math.random().toString(36).substr(2, 8);
}
function hf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Za(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ri(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? il(t) : t,
      { state: n, key: (t && t.key) || r || dE() }
    )
  );
}
function hg(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function il(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function fE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: s = !1 } = r,
    i = o.history,
    l = Cn.Pop,
    a = null,
    u = c();
  u == null && ((u = 0), i.replaceState(Ri({}, i.state, { idx: u }), ""));
  function c() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    l = Cn.Pop;
    let x = c(),
      h = x == null ? null : x - u;
    (u = x), a && a({ action: l, location: y.location, delta: h });
  }
  function m(x, h) {
    l = Cn.Push;
    let p = Za(y.location, x, h);
    u = c() + 1;
    let v = hf(p, u),
      S = y.createHref(p);
    try {
      i.pushState(v, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      o.location.assign(S);
    }
    s && a && a({ action: l, location: y.location, delta: 1 });
  }
  function d(x, h) {
    l = Cn.Replace;
    let p = Za(y.location, x, h);
    u = c();
    let v = hf(p, u),
      S = y.createHref(p);
    i.replaceState(v, "", S),
      s && a && a({ action: l, location: y.location, delta: 0 });
  }
  function E(x) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof x == "string" ? x : hg(x);
    return (
      (p = p.replace(/ $/, "%20")),
      He(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, h)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(o, i);
    },
    listen(x) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(pf, f),
        (a = x),
        () => {
          o.removeEventListener(pf, f), (a = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: E,
    encodeLocation(x) {
      let h = E(x);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: d,
    go(x) {
      return i.go(x);
    },
  };
  return y;
}
var mf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(mf || (mf = {}));
function pE(e, t, n) {
  return n === void 0 && (n = "/"), hE(e, t, n);
}
function hE(e, t, n, r) {
  let o = typeof t == "string" ? il(t) : t,
    s = vg(o.pathname || "/", n);
  if (s == null) return null;
  let i = mg(e);
  mE(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) {
    let u = NE(s);
    l = bE(i[a], u);
  }
  return l;
}
function mg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (s, i, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: i,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (He(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = zr([r, a.relativePath]),
      c = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (He(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      mg(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: EE(u, s.index), routesMeta: c });
  };
  return (
    e.forEach((s, i) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) o(s, i);
      else for (let a of gg(s.path)) o(s, i, a);
    }),
    t
  );
}
function gg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [s, ""] : [s];
  let i = gg(r.join("/")),
    l = [];
  return (
    l.push(...i.map((a) => (a === "" ? s : [s, a].join("/")))),
    o && l.push(...i),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function mE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : CE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const gE = /^:[\w-]+$/,
  vE = 3,
  yE = 2,
  wE = 1,
  xE = 10,
  SE = -2,
  gf = (e) => e === "*";
function EE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(gf) && (r += SE),
    t && (r += yE),
    n
      .filter((o) => !gf(o))
      .reduce((o, s) => o + (gE.test(s) ? vE : s === "" ? wE : xE), r)
  );
}
function CE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function bE(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    s = "/",
    i = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      c = s === "/" ? t : t.slice(s.length) || "/",
      f = kE(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        c
      ),
      m = a.route;
    if (!f) return null;
    Object.assign(o, f.params),
      i.push({
        params: o,
        pathname: zr([s, f.pathname]),
        pathnameBase: TE(zr([s, f.pathnameBase])),
        route: m,
      }),
      f.pathnameBase !== "/" && (s = zr([s, f.pathnameBase]));
  }
  return i;
}
function kE(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = PE(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let s = o[0],
    i = s.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: m, isOptional: d } = c;
      if (m === "*") {
        let y = l[f] || "";
        i = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const E = l[f];
      return (
        d && !E ? (u[m] = void 0) : (u[m] = (E || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: i,
    pattern: e,
  };
}
function PE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pg(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function NE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      pg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function vg(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const zr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  TE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function RE(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const yg = ["post", "put", "patch", "delete"];
new Set(yg);
const jE = ["get", ...yg];
new Set(jE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ji() {
  return (
    (ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ji.apply(this, arguments)
  );
}
const OE = w.createContext(null),
  _E = w.createContext(null),
  wg = w.createContext(null),
  ll = w.createContext(null),
  al = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xg = w.createContext(null);
function hc() {
  return w.useContext(ll) != null;
}
function Sg() {
  return hc() || He(!1), w.useContext(ll).location;
}
function AE(e, t) {
  return ME(e, t);
}
function ME(e, t, n, r) {
  hc() || He(!1);
  let { navigator: o } = w.useContext(wg),
    { matches: s } = w.useContext(al),
    i = s[s.length - 1],
    l = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : "/";
  i && i.route;
  let u = Sg(),
    c;
  if (t) {
    var f;
    let x = typeof t == "string" ? il(t) : t;
    a === "/" || ((f = x.pathname) != null && f.startsWith(a)) || He(!1),
      (c = x);
  } else c = u;
  let m = c.pathname || "/",
    d = m;
  if (a !== "/") {
    let x = a.replace(/^\//, "").split("/");
    d = "/" + m.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let E = pE(e, { pathname: d }),
    y = FE(
      E &&
        E.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, l, x.params),
            pathname: zr([
              a,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? a
                : zr([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && y
    ? w.createElement(
        ll.Provider,
        {
          value: {
            location: ji(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Cn.Pop,
          },
        },
        y
      )
    : y;
}
function LE() {
  let e = VE(),
    t = RE(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: o }, n) : null,
    null
  );
}
const IE = w.createElement(LE, null);
class DE extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          al.Provider,
          { value: this.props.routeContext },
          w.createElement(xg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function zE(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(OE);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(al.Provider, { value: t }, r)
  );
}
function FE(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let i = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let c = i.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    c >= 0 || He(!1), (i = i.slice(0, Math.min(i.length, c + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < i.length; c++) {
      let f = i[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: m, errors: d } = n,
          E =
            f.route.loader &&
            m[f.route.id] === void 0 &&
            (!d || d[f.route.id] === void 0);
        if (f.route.lazy || E) {
          (a = !0), u >= 0 ? (i = i.slice(0, u + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((c, f, m) => {
    let d,
      E = !1,
      y = null,
      x = null;
    n &&
      ((d = l && f.route.id ? l[f.route.id] : void 0),
      (y = f.route.errorElement || IE),
      a &&
        (u < 0 && m === 0
          ? (WE("route-fallback"), (E = !0), (x = null))
          : u === m &&
            ((E = !0), (x = f.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, m + 1)),
      p = () => {
        let v;
        return (
          d
            ? (v = y)
            : E
            ? (v = x)
            : f.route.Component
            ? (v = w.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = c),
          w.createElement(zE, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || m === 0)
      ? w.createElement(DE, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: d,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Eg = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Eg || {});
function $E(e) {
  let t = w.useContext(_E);
  return t || He(!1), t;
}
function BE(e) {
  let t = w.useContext(al);
  return t || He(!1), t;
}
function UE(e) {
  let t = BE(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || He(!1), n.route.id;
}
function VE() {
  var e;
  let t = w.useContext(xg),
    n = $E(Eg.UseRouteError),
    r = UE();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const vf = {};
function WE(e, t, n) {
  vf[e] || (vf[e] = !0);
}
function HE(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Ja(e) {
  He(!1);
}
function QE(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Cn.Pop,
    navigator: s,
    static: i = !1,
    future: l,
  } = e;
  hc() && He(!1);
  let a = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: i,
        future: ji({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, i]
    );
  typeof r == "string" && (r = il(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: m = "",
      state: d = null,
      key: E = "default",
    } = r,
    y = w.useMemo(() => {
      let x = vg(c, a);
      return x == null
        ? null
        : {
            location: { pathname: x, search: f, hash: m, state: d, key: E },
            navigationType: o,
          };
    }, [a, c, f, m, d, E, o]);
  return y == null
    ? null
    : w.createElement(
        wg.Provider,
        { value: u },
        w.createElement(ll.Provider, { children: n, value: y })
      );
}
function KE(e) {
  let { children: t, location: n } = e;
  return AE(eu(t), n);
}
new Promise(() => {});
function eu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let s = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, eu(r.props.children, s));
        return;
      }
      r.type !== Ja && He(!1), !r.props.index || !r.props.children || He(!1);
      let i = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = eu(r.props.children, s)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const YE = "6";
try {
  window.__reactRouterVersion = YE;
} catch {}
const GE = "startTransition",
  yf = iu[GE];
function XE(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    s = w.useRef();
  s.current == null && (s.current = cE({ window: o, v5Compat: !0 }));
  let i = s.current,
    [l, a] = w.useState({ action: i.action, location: i.location }),
    { v7_startTransition: u } = r || {},
    c = w.useCallback(
      (f) => {
        u && yf ? yf(() => a(f)) : a(f);
      },
      [a, u]
    );
  return (
    w.useLayoutEffect(() => i.listen(c), [i, c]),
    w.useEffect(() => HE(r), [r]),
    w.createElement(QE, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: i,
      future: r,
    })
  );
}
var wf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(wf || (wf = {}));
var xf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(xf || (xf = {}));
var qE = Symbol.for("react.lazy"),
  Oi = iu[" use ".trim().toString()];
function ZE(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Cg(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === qE &&
    "_payload" in e &&
    ZE(e._payload)
  );
}
function JE(e) {
  const t = tC(e),
    n = w.forwardRef((r, o) => {
      let { children: s, ...i } = r;
      Cg(s) && typeof Oi == "function" && (s = Oi(s._payload));
      const l = w.Children.toArray(s),
        a = l.find(rC);
      if (a) {
        const u = a.props.children,
          c = l.map((f) =>
            f === a
              ? w.Children.count(u) > 1
                ? w.Children.only(null)
                : w.isValidElement(u)
                ? u.props.children
                : null
              : f
          );
        return g.jsx(t, {
          ...i,
          ref: o,
          children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null,
        });
      }
      return g.jsx(t, { ...i, ref: o, children: s });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var eC = JE("Slot");
function tC(e) {
  const t = w.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (
      (Cg(o) && typeof Oi == "function" && (o = Oi(o._payload)),
      w.isValidElement(o))
    ) {
      const i = sC(o),
        l = oC(s, o.props);
      return (
        o.type !== w.Fragment && (l.ref = r ? Yi(r, i) : i),
        w.cloneElement(o, l)
      );
    }
    return w.Children.count(o) > 1 ? w.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var nC = Symbol("radix.slottable");
function rC(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === nC
  );
}
function oC(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const a = s(...l);
            return o(...l), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...s })
      : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function sC(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
const iC = ym(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground hover:bg-primary/90 rounded shadow-md hover:shadow-lg",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded",
          outline:
            "border-2 border-muted-foreground/50 bg-transparent hover:border-foreground hover:bg-muted/10 rounded",
          secondary:
            "bg-white/20 text-foreground hover:bg-white/30 backdrop-blur-sm rounded",
          ghost: "hover:bg-accent/10 hover:text-accent-foreground rounded",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 px-3 text-xs",
          lg: "h-11 px-8 text-sm",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  be = w.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? eC : "button";
      return g.jsx(i, {
        className: Jt(iC({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    }
  );
be.displayName = "Button";
const lC = () => {
    const [e, t] = w.useState(!1),
      [n, r] = w.useState(!1);
    w.useEffect(() => {
      const s = () => {
        r(window.scrollY > 0);
      };
      return (
        window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
      );
    }, []);
    const o = [
      { label: "Home", href: "#home" },
      { label: "Professional", href: "#professional" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ];
    return g.jsx("nav", {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-netflix ${
        n
          ? "bg-background shadow-nav"
          : "bg-gradient-to-b from-background/80 to-transparent"
      }`,
      children: g.jsxs("div", {
        className: "w-full px-8",
        children: [
          g.jsxs("div", {
            className: "flex items-center justify-between h-16",
            children: [
              g.jsx("a", {
                href: "#home",
                className:
                  "font-bebas text-3xl text-primary tracking-[0.15em] hover:text-primary/90 transition-colors",
                children: "Jayrajsinh Dabhi",
              }),
              g.jsx("div", {
                className: "hidden md:flex items-center space-x-6",
                children: o.map((s) =>
                  g.jsxs(
                    "a",
                    {
                      href: s.href,
                      className:
                        "text-sm text-foreground/80 hover:text-foreground transition-colors relative group py-1",
                      children: [
                        s.label,
                        g.jsx("span", {
                          className:
                            "absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300",
                        }),
                      ],
                    },
                    s.label
                  )
                ),
              }),
              g.jsxs("div", {
                className: "hidden md:flex items-center space-x-3",
                children: [
                  g.jsx(be, {
                    variant: "ghost",
                    size: "icon",
                    className:
                      "text-foreground/80 hover:text-foreground hover:bg-transparent transition-colors",
                    children: g.jsx(Nw, { className: "h-5 w-5" }),
                  }),
                  g.jsx(be, {
                    variant: "ghost",
                    size: "icon",
                    className:
                      "text-foreground/80 hover:text-foreground hover:bg-transparent transition-colors",
                    children: g.jsx(fw, { className: "h-5 w-5" }),
                  }),
                  g.jsx(be, {
                    variant: "ghost",
                    size: "icon",
                    className:
                      "text-foreground/80 hover:text-foreground hover:bg-transparent transition-colors",
                    children: g.jsx("div", {
                      className:
                        "h-8 w-8 rounded-sm bg-primary/20 flex items-center justify-center",
                      children: g.jsx(_w, { className: "h-5 w-5" }),
                    }),
                  }),
                ],
              }),
              g.jsx(be, {
                variant: "ghost",
                size: "icon",
                className: "md:hidden",
                onClick: () => t(!e),
                children: e
                  ? g.jsx(nc, { className: "h-6 w-6" })
                  : g.jsx(kw, { className: "h-6 w-6" }),
              }),
            ],
          }),
          e &&
            g.jsx("div", {
              className:
                "md:hidden py-4 space-y-2 bg-background/95 animate-fade-in",
              children: o.map((s) =>
                g.jsx(
                  "a",
                  {
                    href: s.href,
                    className:
                      "block py-2 text-foreground/80 hover:text-foreground transition-colors",
                    onClick: () => t(!1),
                    children: s.label,
                  },
                  s.label
                )
              ),
            }),
        ],
      }),
    });
  },
  aC = () =>
    g.jsxs("section", {
      id: "home",
      className: "relative w-full h-screen flex items-center",
      children: [
        g.jsxs("div", {
          className: "absolute inset-0 z-0",
          children: [
            g.jsx("img", {
              src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
              alt: "Hero background",
              className: "w-full h-full object-cover",
            }),
            g.jsx("div", {
              className: "absolute inset-0 bg-gradient-hero-bottom",
            }),
            g.jsx("div", {
              className: "absolute inset-0 bg-gradient-hero-sides",
            }),
          ],
        }),
        g.jsx("div", {
          className: "container mx-auto px-8 z-20 relative",
          children: g.jsxs("div", {
            className: "max-w-2xl space-y-6 animate-fade-in",
            children: [
              g.jsxs("div", {
                className:
                  "flex items-center gap-3 text-sm text-muted-foreground",
                children: [
                  g.jsx("span", {
                    className:
                      "font-bebas text-base tracking-wider text-primary",
                    children: "2025",
                  }),
                  g.jsx("span", { children: "•" }),
                  g.jsx("span", { children: "AVAILABLE FOR HIRE" }),
                  g.jsx("span", { children: "•" }),
                  g.jsx("span", { children: "REMOTE / HYBRID / ON-SITE" }),
                ],
              }),
              g.jsx("h1", {
                className: "font-bebas text-7xl leading-none tracking-tight",
                children: "Jayrajsinh Dabhi",
              }),
              g.jsx("h2", {
                className: "text-3xl font-semibold text-foreground",
                children: "Senior Full-Stack Developer",
              }),
              g.jsx("p", {
                className:
                  "text-lg text-muted-foreground leading-relaxed max-w-xl",
                children:
                  "Computer engineering student who accidentally ships production features and treats messy legacy code as a personal puzzle. I make slow systems stop whining, write tests so future me doesn’t rage, and automate the boring parts so humans can do the fun stuff..",
              }),
              g.jsxs("div", {
                className: "flex gap-3 pt-2",
                children: [
                  g.jsxs(be, {
                    size: "lg",
                    className:
                      "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm uppercase tracking-wider px-8 h-12 transition-all duration-300",
                    children: [
                      g.jsx(xm, { className: "mr-2 h-5 w-5 fill-current" }),
                      "View Resume",
                    ],
                  }),
                  g.jsxs(be, {
                    size: "lg",
                    variant: "secondary",
                    className:
                      "bg-white/20 hover:bg-white/30 text-foreground font-semibold text-sm uppercase tracking-wider px-8 h-12 backdrop-blur-sm transition-all duration-300",
                    children: [
                      g.jsx(Ew, { className: "mr-2 h-5 w-5" }),
                      "More Info",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        g.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10",
        }),
      ],
    }),
  uC = () => {
    const e = [
      {
        title: "Senior Full-Stack Developer",
        company: "Tech Company Inc.",
        location: "Remote",
        period: "2022 - Present",
        achievements: [
          "Led development of booking platform managing 50M+ bookings and 10K+ users",
          "Implemented robust security measures including XSS script validation",
          "Transformed legacy reporting engine from 5 minutes to 5 seconds using microservices",
          "Drove feature-rich integrations including chat, video consultations, and API linkups",
        ],
      },
      {
        title: "Full-Stack Developer",
        company: "Innovation Labs",
        location: "San Francisco, CA",
        period: "2020 - 2022",
        achievements: [
          "Built scalable e-commerce solutions serving 10,000+ daily active users",
          "Integrated Stripe payment processing with advanced password policies",
          "Developed real-time analytics dashboard with interactive visualizations",
          "Mentored junior developers and conducted code reviews",
        ],
      },
      {
        title: "Software Engineer",
        company: "StartUp Ventures",
        location: "Austin, TX",
        period: "2018 - 2020",
        achievements: [
          "Developed RESTful APIs and microservices architecture",
          "Implemented CI/CD pipelines reducing deployment time by 60%",
          "Collaborated with cross-functional teams on product development",
          "Contributed to open-source projects and internal tooling",
        ],
      },
    ];
    return g.jsx("section", {
      id: "professional",
      className: "py-16 px-8 bg-card/30",
      children: g.jsxs("div", {
        className: "w-full max-w-5xl mx-auto",
        children: [
          g.jsx("h2", {
            className: "text-2xl font-bold mb-8",
            children: "Professional Experience",
          }),
          g.jsx("div", {
            className: "space-y-8",
            children: e.map((t, n) =>
              g.jsxs(
                "div",
                {
                  className:
                    "relative pl-8 border-l-2 border-primary/30 hover:border-primary/60 transition-colors animate-fade-in",
                  style: { animationDelay: `${n * 100}ms` },
                  children: [
                    g.jsx("div", {
                      className:
                        "absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background",
                    }),
                    g.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        g.jsxs("div", {
                          children: [
                            g.jsx("h3", {
                              className: "text-xl font-semibold",
                              children: t.title,
                            }),
                            g.jsxs("div", {
                              className:
                                "flex flex-wrap gap-4 text-sm text-muted-foreground mt-2",
                              children: [
                                g.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    g.jsx(pw, { className: "h-4 w-4" }),
                                    g.jsx("span", { children: t.company }),
                                  ],
                                }),
                                g.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    g.jsx(bw, { className: "h-4 w-4" }),
                                    g.jsx("span", { children: t.location }),
                                  ],
                                }),
                                g.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    g.jsx(hw, { className: "h-4 w-4" }),
                                    g.jsx("span", { children: t.period }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        g.jsx("ul", {
                          className: "space-y-2 text-muted-foreground",
                          children: t.achievements.map((r, o) =>
                            g.jsxs(
                              "li",
                              {
                                className: "flex gap-2",
                                children: [
                                  g.jsx("span", {
                                    className: "text-primary mt-1.5",
                                    children: "•",
                                  }),
                                  g.jsx("span", {
                                    className: "flex-1",
                                    children: r,
                                  }),
                                ],
                              },
                              o
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                },
                n
              )
            ),
          }),
        ],
      }),
    });
  },
  cC = ({
    title: e,
    description: t,
    image: n,
    tags: r,
    year: o,
    duration: s,
  }) => {
    const [i, l] = w.useState(!1);
    return g.jsx("div", {
      className:
        "relative group cursor-pointer flex-shrink-0 w-80 transition-all duration-300 ease-netflix",
      onMouseEnter: () => l(!0),
      onMouseLeave: () => l(!1),
      children: g.jsxs("div", {
        className: `relative rounded overflow-hidden transition-all duration-300 ${
          i ? "scale-110 shadow-card-hover z-20" : "scale-100 shadow-card"
        }`,
        children: [
          g.jsxs("div", {
            className: "relative aspect-video",
            children: [
              g.jsx("img", {
                src: n,
                alt: e,
                className: "w-full h-full object-cover",
              }),
              g.jsx("div", {
                className: `absolute inset-0 transition-opacity duration-300 ${
                  i ? "bg-gradient-card-hover opacity-100" : "opacity-0"
                }`,
              }),
            ],
          }),
          i &&
            g.jsxs("div", {
              className:
                "absolute bottom-0 left-0 right-0 p-4 bg-card animate-fade-in",
              children: [
                g.jsxs("div", {
                  className: "flex gap-2 mb-3",
                  children: [
                    g.jsx(be, {
                      size: "icon",
                      className:
                        "h-9 w-9 rounded-full bg-foreground hover:bg-foreground/90 text-background",
                      children: g.jsx(xm, {
                        className: "h-4 w-4 fill-current",
                      }),
                    }),
                    g.jsx(be, {
                      size: "icon",
                      variant: "outline",
                      className:
                        "h-9 w-9 rounded-full border-2 border-muted-foreground/50 hover:border-foreground",
                      children: g.jsx(Pw, { className: "h-4 w-4" }),
                    }),
                    g.jsx(be, {
                      size: "icon",
                      variant: "outline",
                      className:
                        "h-9 w-9 rounded-full border-2 border-muted-foreground/50 hover:border-foreground ml-auto",
                      children: g.jsx(mw, { className: "h-4 w-4" }),
                    }),
                  ],
                }),
                g.jsx("h3", {
                  className: "font-semibold text-base mb-2 line-clamp-1",
                  children: e,
                }),
                g.jsxs("div", {
                  className:
                    "flex items-center gap-2 text-xs text-muted-foreground mb-2",
                  children: [
                    g.jsx("span", {
                      className: "text-green-500 font-semibold",
                      children: "Featured",
                    }),
                    g.jsx("span", { children: "•" }),
                    g.jsx("span", { children: o }),
                    g.jsx("span", { children: "•" }),
                    g.jsx("span", { children: s }),
                  ],
                }),
                g.jsx("div", {
                  className: "flex gap-1 flex-wrap",
                  children: r.slice(0, 3).map((a, u) =>
                    g.jsxs(
                      "span",
                      {
                        children: [
                          g.jsx("span", {
                            className: "text-xs text-muted-foreground",
                            children: a,
                          }),
                          u < Math.min(r.length, 3) - 1 &&
                            g.jsx("span", {
                              className: "text-muted-foreground mx-1",
                              children: "•",
                            }),
                        ],
                      },
                      u
                    )
                  ),
                }),
              ],
            }),
        ],
      }),
    });
  },
  dC = () => {
    const e = w.useRef(null),
      [t, n] = w.useState(!1),
      [r, o] = w.useState(!0),
      s = (a) => {
        e.current &&
          e.current.scrollBy({
            left: a === "left" ? -800 : 800,
            behavior: "smooth",
          });
      },
      i = () => {
        if (e.current) {
          const { scrollLeft: a, scrollWidth: u, clientWidth: c } = e.current;
          n(a > 0), o(a < u - c - 10);
        }
      },
      l = [
        {
          title: "E-Commerce Platform",
          description:
            "Full-stack e-commerce solution with Stripe integration managing 10,000+ users and 50M+ bookings",
          image:
            "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
          tags: ["React", "Node.js", "MongoDB", "Stripe"],
          year: "2024",
          duration: "6 months",
        },
        {
          title: "Social Media Analytics Dashboard",
          description:
            "Real-time analytics platform with interactive data visualizations",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
          tags: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
          year: "2024",
          duration: "4 months",
        },
        {
          title: "AI Chat Application",
          description:
            "Real-time chat with AI-powered assistance and video consultations",
          image:
            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
          tags: ["React", "WebSocket", "OpenAI", "Redis"],
          year: "2023",
          duration: "5 months",
        },
        {
          title: "Project Management Tool",
          description:
            "Collaborative workspace with task automation and team analytics",
          image:
            "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&h=400&fit=crop",
          tags: ["Angular", "Java Spring", "MySQL", "Microservices"],
          year: "2023",
          duration: "8 months",
        },
        {
          title: "Video Streaming Platform",
          description:
            "High-performance streaming service with adaptive bitrate and CDN delivery",
          image:
            "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop",
          tags: ["React", "AWS", "Redis", "WebRTC"],
          year: "2023",
          duration: "12 months",
        },
        {
          title: "Healthcare Portal",
          description: "Secure patient management system with HIPAA compliance",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
          tags: ["React", "Ruby on Rails", "PostgreSQL"],
          year: "2022",
          duration: "10 months",
        },
      ];
    return g.jsx("section", {
      id: "projects",
      className: "py-16 relative",
      children: g.jsxs("div", {
        className: "w-full px-8",
        children: [
          g.jsx("div", {
            className: "mb-4",
            children: g.jsx("h2", {
              className: "text-2xl font-bold",
              children: "Featured Projects",
            }),
          }),
          g.jsxs("div", {
            className: "relative group/carousel",
            children: [
              t &&
                g.jsx(be, {
                  variant: "ghost",
                  size: "icon",
                  onClick: () => s("left"),
                  className:
                    "absolute left-0 top-1/2 -translate-y-1/2 z-30 h-full w-12 rounded-none bg-background/80 hover:bg-background/95 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300",
                  children: g.jsx(gw, { className: "h-8 w-8" }),
                }),
              g.jsx("div", {
                ref: e,
                onScroll: i,
                className:
                  "flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth pb-8 -mx-2 px-2",
                style: { scrollbarWidth: "none", msOverflowStyle: "none" },
                children: l.map((a, u) => g.jsx(cC, { ...a }, u)),
              }),
              r &&
                g.jsx(be, {
                  variant: "ghost",
                  size: "icon",
                  onClick: () => s("right"),
                  className:
                    "absolute right-0 top-1/2 -translate-y-1/2 z-30 h-full w-12 rounded-none bg-background/80 hover:bg-background/95 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300",
                  children: g.jsx(vw, { className: "h-8 w-8" }),
                }),
            ],
          }),
        ],
      }),
    });
  },
  fC = () => {
    const e = [
      {
        icon: ww,
        title: "Frontend Development",
        skills: [
          "React",
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "Vue.js",
          "Redux",
        ],
      },
      {
        icon: xw,
        title: "Backend Development",
        skills: [
          "Ruby on Rails",
          "Node.js",
          "Python",
          "PostgreSQL",
          "MongoDB",
          "GraphQL",
        ],
      },
      {
        icon: yw,
        title: "Cloud & DevOps",
        skills: [
          "AWS",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Terraform",
          "Jenkins",
        ],
      },
      {
        icon: jw,
        title: "Mobile Development",
        skills: ["React Native", "Flutter", "iOS", "Android", "PWA"],
      },
      {
        icon: Aw,
        title: "Performance",
        skills: [
          "Optimization",
          "Caching",
          "CDN",
          "Load Balancing",
          "Microservices",
        ],
      },
      {
        icon: Rw,
        title: "Security",
        skills: [
          "XSS Prevention",
          "Password Policies",
          "DevOps Security",
          "OWASP",
          "Compliance",
        ],
      },
    ];
    return g.jsx("section", {
      id: "skills",
      className: "py-16 px-8",
      children: g.jsxs("div", {
        className: "w-full",
        children: [
          g.jsx("h2", {
            className: "text-2xl font-bold mb-8",
            children: "Skills",
          }),
          g.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: e.map((t, n) =>
              g.jsxs(
                "div",
                {
                  className:
                    "bg-card/50 p-6 rounded border border-border hover:border-muted-foreground/30 transition-all duration-300 animate-fade-in",
                  style: { animationDelay: `${n * 50}ms` },
                  children: [
                    g.jsxs("div", {
                      className: "flex items-center gap-3 mb-4",
                      children: [
                        g.jsx("div", {
                          className: "p-2 bg-primary/10 rounded",
                          children: g.jsx(t.icon, {
                            className: "h-5 w-5 text-primary",
                          }),
                        }),
                        g.jsx("h3", {
                          className: "text-lg font-semibold",
                          children: t.title,
                        }),
                      ],
                    }),
                    g.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: t.skills.map((r) =>
                        g.jsx(
                          "span",
                          {
                            className:
                              "px-2 py-1 bg-secondary text-xs rounded text-muted-foreground hover:text-foreground transition-colors cursor-default",
                            children: r,
                          },
                          r
                        )
                      ),
                    }),
                  ],
                },
                n
              )
            ),
          }),
        ],
      }),
    });
  },
  pC = () => {
    const e = [
      { icon: Cw, label: "LinkedIn", href: "#" },
      { icon: Sw, label: "GitHub", href: "#" },
      { icon: Ow, label: "Twitter", href: "#" },
      { icon: Fd, label: "Email", href: "mailto:jayrajsinh.dabhi@icloud.com" },
    ];
    return g.jsx("section", {
      id: "contact",
      className: "py-20 px-4",
      children: g.jsxs("div", {
        className: "container mx-auto text-center",
        children: [
          g.jsx("h2", {
            className: "text-3xl font-bold mb-6",
            children: "Let's Connect",
          }),
          g.jsx("p", {
            className: "text-muted-foreground mb-8 max-w-2xl mx-auto",
            children:
              "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
          }),
          g.jsx("div", {
            className: "flex justify-center gap-4 mb-12",
            children: e.map((t) =>
              g.jsx(
                be,
                {
                  variant: "outline",
                  size: "icon",
                  className:
                    "h-12 w-12 border-border hover:border-primary hover:bg-primary/10",
                  asChild: !0,
                  children: g.jsx("a", {
                    href: t.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: g.jsx(t.icon, { className: "h-5 w-5" }),
                  }),
                },
                t.label
              )
            ),
          }),
          g.jsxs("div", {
            className:
              "max-w-md mx-auto p-6 bg-card rounded-lg border border-border",
            children: [
              g.jsx("h3", {
                className: "text-xl font-semibold mb-4",
                children: "Quick Contact",
              }),
              g.jsx("p", {
                className: "text-muted-foreground mb-4",
                children:
                  "Use the AI assistant below to ask questions, or reach out directly via email.",
              }),
              g.jsx(be, {
                className: "bg-primary hover:bg-primary/90 w-full",
                asChild: !0,
                children: g.jsxs("a", {
                  href: "mailto:jayrajsinh.dabhi@icloud.com",
                  children: [
                    g.jsx(Fd, { className: "mr-2 h-4 w-4" }),
                    "Send Email",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  bg = w.forwardRef(({ className: e, type: t, ...n }, r) =>
    g.jsx("input", {
      type: t,
      className: Jt(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: r,
      ...n,
    })
  );
bg.displayName = "Input";
const hC = () => {
    const [e, t] = w.useState(!1),
      [n, r] = w.useState([
        {
          role: "assistant",
          content:
            "Hi! I'm here to help answer questions about this portfolio. Feel free to ask about skills, experience, or projects!",
        },
      ]),
      [o, s] = w.useState(""),
      [i, l] = w.useState(!1),
      a = w.useRef(null),
      { toast: u } = Hh(),
      c = () => {
        var m;
        (m = a.current) == null || m.scrollIntoView({ behavior: "smooth" });
      };
    w.useEffect(() => {
      c();
    }, [n]);
    const f = async () => {
      var d, E, y, x;
      if (!o.trim() || i) return;
      const m = { role: "user", content: o };
      r((h) => [...h, m]), s(""), l(!0);
      try {
        const h = await fetch("undefined/functions/v1/chat-assistant", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer undefined",
          },
          body: JSON.stringify({ messages: [...n, m] }),
        });
        if (!h.ok) {
          const C = await h.json();
          throw new Error(C.error || "Failed to get response");
        }
        const p = (d = h.body) == null ? void 0 : d.getReader(),
          v = new TextDecoder();
        let S = "";
        if (p) {
          let C = "";
          for (;;) {
            const { done: b, value: k } = await p.read();
            if (b) break;
            C += v.decode(k, { stream: !0 });
            const R = C.split(`
`);
            C = R.pop() || "";
            for (const D of R)
              if (D.startsWith("data: ")) {
                const O = D.slice(6).trim();
                if (O === "[DONE]") continue;
                try {
                  const L =
                    (x =
                      (y =
                        (E = JSON.parse(O).choices) == null ? void 0 : E[0]) ==
                      null
                        ? void 0
                        : y.delta) == null
                      ? void 0
                      : x.content;
                  L &&
                    ((S += L),
                    r((K) => {
                      const A = [...K],
                        H = A[A.length - 1];
                      return (
                        (H == null ? void 0 : H.role) === "assistant"
                          ? (H.content = S)
                          : A.push({ role: "assistant", content: S }),
                        A
                      );
                    }));
                } catch (z) {
                  console.error("Parse error:", z);
                }
              }
          }
        }
      } catch (h) {
        console.error("Chat error:", h),
          u({
            title: "Error",
            description:
              h instanceof Error ? h.message : "Failed to send message",
            variant: "destructive",
          });
      } finally {
        l(!1);
      }
    };
    return g.jsxs(g.Fragment, {
      children: [
        g.jsx(be, {
          onClick: () => t(!0),
          className:
            "fixed bottom-8 right-8 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-glow z-50 animate-scale-in",
          size: "icon",
          children: g.jsx($d, { className: "h-6 w-6" }),
        }),
        e &&
          g.jsxs("div", {
            className:
              "fixed bottom-8 right-8 w-96 h-[500px] bg-card border border-border rounded-lg shadow-2xl z-50 flex flex-col animate-scale-in",
            children: [
              g.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 border-b border-border bg-primary/10",
                children: [
                  g.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      g.jsx($d, { className: "h-5 w-5 text-primary" }),
                      g.jsx("h3", {
                        className: "font-semibold",
                        children: "Portfolio Assistant",
                      }),
                    ],
                  }),
                  g.jsx(be, {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => t(!1),
                    className: "h-8 w-8",
                    children: g.jsx(nc, { className: "h-4 w-4" }),
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-4",
                children: [
                  n.map((m, d) =>
                    g.jsx(
                      "div",
                      {
                        className: `flex ${
                          m.role === "user" ? "justify-end" : "justify-start"
                        }`,
                        children: g.jsx("div", {
                          className: `max-w-[80%] p-3 rounded-lg ${
                            m.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-foreground"
                          }`,
                          children: g.jsx("p", {
                            className: "text-sm",
                            children: m.content,
                          }),
                        }),
                      },
                      d
                    )
                  ),
                  i &&
                    g.jsx("div", {
                      className: "flex justify-start",
                      children: g.jsx("div", {
                        className: "bg-secondary p-3 rounded-lg",
                        children: g.jsxs("div", {
                          className: "flex gap-1",
                          children: [
                            g.jsx("div", {
                              className:
                                "w-2 h-2 bg-muted-foreground rounded-full animate-bounce",
                            }),
                            g.jsx("div", {
                              className:
                                "w-2 h-2 bg-muted-foreground rounded-full animate-bounce",
                              style: { animationDelay: "0.1s" },
                            }),
                            g.jsx("div", {
                              className:
                                "w-2 h-2 bg-muted-foreground rounded-full animate-bounce",
                              style: { animationDelay: "0.2s" },
                            }),
                          ],
                        }),
                      }),
                    }),
                  g.jsx("div", { ref: a }),
                ],
              }),
              g.jsx("div", {
                className: "p-4 border-t border-border",
                children: g.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    g.jsx(bg, {
                      value: o,
                      onChange: (m) => s(m.target.value),
                      onKeyPress: (m) => m.key === "Enter" && f(),
                      placeholder: "Ask me anything...",
                      disabled: i,
                      className: "flex-1",
                    }),
                    g.jsx(be, {
                      onClick: f,
                      disabled: i || !o.trim(),
                      size: "icon",
                      className: "bg-primary hover:bg-primary/90",
                      children: g.jsx(Tw, { className: "h-4 w-4" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
      ],
    });
  },
  mC = () =>
    g.jsxs("div", {
      className: "min-h-screen bg-background text-foreground antialiased",
      children: [
        g.jsx(lC, {}),
        g.jsxs("main", {
          children: [
            g.jsx(aC, {}),
            g.jsx(uC, {}),
            g.jsx(dC, {}),
            g.jsx(fC, {}),
            g.jsx(pC, {}),
          ],
        }),
        g.jsx(hC, {}),
        g.jsx("footer", {
          className: "py-12 px-8 border-t border-border/50",
          children: g.jsxs("div", {
            className: "w-full max-w-7xl mx-auto",
            children: [
              g.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",
                children: [
                  g.jsxs("div", {
                    children: [
                      g.jsx("h4", {
                        className:
                          "font-semibold mb-3 text-muted-foreground text-sm",
                        children: "Questions?",
                      }),
                      g.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Use the AI assistant or email directly",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    children: [
                      g.jsx("h4", {
                        className:
                          "font-semibold mb-3 text-muted-foreground text-sm",
                        children: "Connect",
                      }),
                      g.jsxs("ul", {
                        className: "space-y-2 text-sm text-muted-foreground",
                        children: [
                          g.jsx("li", {
                            children: g.jsx("a", {
                              href: "#",
                              className:
                                "hover:text-foreground transition-colors",
                              children: "LinkedIn",
                            }),
                          }),
                          g.jsx("li", {
                            children: g.jsx("a", {
                              href: "#",
                              className:
                                "hover:text-foreground transition-colors",
                              children: "GitHub",
                            }),
                          }),
                          g.jsx("li", {
                            children: g.jsx("a", {
                              href: "#",
                              className:
                                "hover:text-foreground transition-colors",
                              children: "Twitter",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    children: [
                      g.jsx("h4", {
                        className:
                          "font-semibold mb-3 text-muted-foreground text-sm",
                        children: "Resources",
                      }),
                      g.jsxs("ul", {
                        className: "space-y-2 text-sm text-muted-foreground",
                        children: [
                          g.jsx("li", {
                            children: g.jsx("a", {
                              href: "#",
                              className:
                                "hover:text-foreground transition-colors",
                              children: "Resume",
                            }),
                          }),
                          g.jsx("li", {
                            children: g.jsx("a", {
                              href: "#",
                              className:
                                "hover:text-foreground transition-colors",
                              children: "Portfolio",
                            }),
                          }),
                          g.jsx("li", {
                            children: g.jsx("a", {
                              href: "#",
                              className:
                                "hover:text-foreground transition-colors",
                              children: "Blog",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    children: [
                      g.jsx("h4", {
                        className:
                          "font-semibold mb-3 text-muted-foreground text-sm",
                        children: "Legal",
                      }),
                      g.jsxs("ul", {
                        className: "space-y-2 text-sm text-muted-foreground",
                        children: [
                          g.jsx("li", {
                            children: g.jsx("a", {
                              href: "#",
                              className:
                                "hover:text-foreground transition-colors",
                              children: "Privacy",
                            }),
                          }),
                          g.jsx("li", {
                            children: g.jsx("a", {
                              href: "#",
                              className:
                                "hover:text-foreground transition-colors",
                              children: "Terms",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                className:
                  "pt-8 border-t border-border/50 text-center text-muted-foreground text-xs",
                children: [
                  g.jsx("p", {
                    children: "© 2025 Jayrajsinh Dabhi. All rights reserved.",
                  }),
                  g.jsx("p", {
                    className: "mt-2",
                    children:
                      "Built with React, TypeScript, Tailwind CSS, and Lovable Cloud",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  gC = () => {
    const e = Sg();
    return (
      w.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      g.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: g.jsxs("div", {
          className: "text-center",
          children: [
            g.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            g.jsx("p", {
              className: "mb-4 text-xl text-gray-600",
              children: "Oops! Page not found",
            }),
            g.jsx("a", {
              href: "/",
              className: "text-blue-500 underline hover:text-blue-700",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  vC = new lE(),
  yC = () =>
    g.jsx(uE, {
      client: vC,
      children: g.jsxs(MS, {
        children: [
          g.jsx(mx, {}),
          g.jsx(Kx, {}),
          g.jsx(XE, {
            children: g.jsxs(KE, {
              children: [
                g.jsx(Ja, { path: "/", element: g.jsx(mC, {}) }),
                g.jsx(Ja, { path: "*", element: g.jsx(gC, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Wh(document.getElementById("root")).render(g.jsx(yC, {}));
