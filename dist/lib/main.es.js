import * as $ from "react";
import se, { useLayoutEffect as np, useState as Kr, forwardRef as Ju, createElement as Va, createContext as Xu, useId as sp, useContext as oc, useEffect as Ur, useMemo as op, useImperativeHandle as ap, useRef as ip } from "react";
import * as $o from "react-dom";
import cp from "react-dom";
function Qu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bn = { exports: {} }, bn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ac;
function lp() {
  if (ac) return bn;
  ac = 1;
  var e = se, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, c, l) {
    var u, p = {}, m = null, v = null;
    l !== void 0 && (m = "" + l), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (u in c) n.call(c, u) && !o.hasOwnProperty(u) && (p[u] = c[u]);
    if (i && i.defaultProps) for (u in c = i.defaultProps, c) p[u] === void 0 && (p[u] = c[u]);
    return { $$typeof: t, type: i, key: m, ref: v, props: p, _owner: s.current };
  }
  return bn.Fragment = r, bn.jsx = a, bn.jsxs = a, bn;
}
var _n = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ic;
function up() {
  return ic || (ic = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = se, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), x = Symbol.iterator, y = "@@iterator";
    function h(P) {
      if (P === null || typeof P != "object")
        return null;
      var J = x && P[x] || P[y];
      return typeof J == "function" ? J : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(P) {
      {
        for (var J = arguments.length, ue = new Array(J > 1 ? J - 1 : 0), be = 1; be < J; be++)
          ue[be - 1] = arguments[be];
        b("error", P, ue);
      }
    }
    function b(P, J, ue) {
      {
        var be = _.ReactDebugCurrentFrame, Be = be.getStackAddendum();
        Be !== "" && (J += "%s", ue = ue.concat([Be]));
        var Ke = ue.map(function(Ve) {
          return String(Ve);
        });
        Ke.unshift("Warning: " + J), Function.prototype.apply.call(console[P], console, Ke);
      }
    }
    var w = !1, g = !1, S = !1, E = !1, k = !1, I;
    I = Symbol.for("react.module.reference");
    function z(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === o || k || P === s || P === l || P === u || E || P === v || w || g || S || typeof P == "object" && P !== null && (P.$$typeof === m || P.$$typeof === p || P.$$typeof === a || P.$$typeof === i || P.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === I || P.getModuleId !== void 0));
    }
    function M(P, J, ue) {
      var be = P.displayName;
      if (be)
        return be;
      var Be = J.displayName || J.name || "";
      return Be !== "" ? ue + "(" + Be + ")" : ue;
    }
    function V(P) {
      return P.displayName || "Context";
    }
    function F(P) {
      if (P == null)
        return null;
      if (typeof P.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof P == "function")
        return P.displayName || P.name || null;
      if (typeof P == "string")
        return P;
      switch (P) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case i:
            var J = P;
            return V(J) + ".Consumer";
          case a:
            var ue = P;
            return V(ue._context) + ".Provider";
          case c:
            return M(P, P.render, "ForwardRef");
          case p:
            var be = P.displayName || null;
            return be !== null ? be : F(P.type) || "Memo";
          case m: {
            var Be = P, Ke = Be._payload, Ve = Be._init;
            try {
              return F(Ve(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, te = 0, Z, ae, L, ve, G, T, K;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function C() {
      {
        if (te === 0) {
          Z = console.log, ae = console.info, L = console.warn, ve = console.error, G = console.group, T = console.groupCollapsed, K = console.groupEnd;
          var P = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: P,
            log: P,
            warn: P,
            error: P,
            group: P,
            groupCollapsed: P,
            groupEnd: P
          });
        }
        te++;
      }
    }
    function R() {
      {
        if (te--, te === 0) {
          var P = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, P, {
              value: Z
            }),
            info: W({}, P, {
              value: ae
            }),
            warn: W({}, P, {
              value: L
            }),
            error: W({}, P, {
              value: ve
            }),
            group: W({}, P, {
              value: G
            }),
            groupCollapsed: W({}, P, {
              value: T
            }),
            groupEnd: W({}, P, {
              value: K
            })
          });
        }
        te < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = _.ReactCurrentDispatcher, B;
    function X(P, J, ue) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (Be) {
            var be = Be.stack.trim().match(/\n( *(at )?)/);
            B = be && be[1] || "";
          }
        return `
` + B + P;
      }
    }
    var pe = !1, ie;
    {
      var N = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new N();
    }
    function A(P, J) {
      if (!P || pe)
        return "";
      {
        var ue = ie.get(P);
        if (ue !== void 0)
          return ue;
      }
      var be;
      pe = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = q.current, q.current = null, C();
      try {
        if (J) {
          var Ve = function() {
            throw Error();
          };
          if (Object.defineProperty(Ve.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ve, []);
            } catch (ft) {
              be = ft;
            }
            Reflect.construct(P, [], Ve);
          } else {
            try {
              Ve.call();
            } catch (ft) {
              be = ft;
            }
            P.call(Ve.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            be = ft;
          }
          P();
        }
      } catch (ft) {
        if (ft && be && typeof ft.stack == "string") {
          for (var Te = ft.stack.split(`
`), lt = be.stack.split(`
`), Je = Te.length - 1, Qe = lt.length - 1; Je >= 1 && Qe >= 0 && Te[Je] !== lt[Qe]; )
            Qe--;
          for (; Je >= 1 && Qe >= 0; Je--, Qe--)
            if (Te[Je] !== lt[Qe]) {
              if (Je !== 1 || Qe !== 1)
                do
                  if (Je--, Qe--, Qe < 0 || Te[Je] !== lt[Qe]) {
                    var xt = `
` + Te[Je].replace(" at new ", " at ");
                    return P.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", P.displayName)), typeof P == "function" && ie.set(P, xt), xt;
                  }
                while (Je >= 1 && Qe >= 0);
              break;
            }
        }
      } finally {
        pe = !1, q.current = Ke, R(), Error.prepareStackTrace = Be;
      }
      var Tr = P ? P.displayName || P.name : "", br = Tr ? X(Tr) : "";
      return typeof P == "function" && ie.set(P, br), br;
    }
    function H(P, J, ue) {
      return A(P, !1);
    }
    function Y(P) {
      var J = P.prototype;
      return !!(J && J.isReactComponent);
    }
    function ce(P, J, ue) {
      if (P == null)
        return "";
      if (typeof P == "function")
        return A(P, Y(P));
      if (typeof P == "string")
        return X(P);
      switch (P) {
        case l:
          return X("Suspense");
        case u:
          return X("SuspenseList");
      }
      if (typeof P == "object")
        switch (P.$$typeof) {
          case c:
            return H(P.render);
          case p:
            return ce(P.type, J, ue);
          case m: {
            var be = P, Be = be._payload, Ke = be._init;
            try {
              return ce(Ke(Be), J, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, He = {}, st = _.ReactDebugCurrentFrame;
    function Ge(P) {
      if (P) {
        var J = P._owner, ue = ce(P.type, P._source, J ? J.type : null);
        st.setExtraStackFrame(ue);
      } else
        st.setExtraStackFrame(null);
    }
    function j(P, J, ue, be, Be) {
      {
        var Ke = Function.call.bind(ye);
        for (var Ve in P)
          if (Ke(P, Ve)) {
            var Te = void 0;
            try {
              if (typeof P[Ve] != "function") {
                var lt = Error((be || "React class") + ": " + ue + " type `" + Ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof P[Ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw lt.name = "Invariant Violation", lt;
              }
              Te = P[Ve](J, Ve, be, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Je) {
              Te = Je;
            }
            Te && !(Te instanceof Error) && (Ge(Be), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", be || "React class", ue, Ve, typeof Te), Ge(null)), Te instanceof Error && !(Te.message in He) && (He[Te.message] = !0, Ge(Be), f("Failed %s type: %s", ue, Te.message), Ge(null));
          }
      }
    }
    var D = Array.isArray;
    function U(P) {
      return D(P);
    }
    function re(P) {
      {
        var J = typeof Symbol == "function" && Symbol.toStringTag, ue = J && P[Symbol.toStringTag] || P.constructor.name || "Object";
        return ue;
      }
    }
    function ne(P) {
      try {
        return Q(P), !1;
      } catch {
        return !0;
      }
    }
    function Q(P) {
      return "" + P;
    }
    function he(P) {
      if (ne(P))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", re(P)), Q(P);
    }
    var Ae = _.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nt, Bt;
    function Ot(P) {
      if (ye.call(P, "ref")) {
        var J = Object.getOwnPropertyDescriptor(P, "ref").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return P.ref !== void 0;
    }
    function Zo(P) {
      if (ye.call(P, "key")) {
        var J = Object.getOwnPropertyDescriptor(P, "key").get;
        if (J && J.isReactWarning)
          return !1;
      }
      return P.key !== void 0;
    }
    function vn(P, J) {
      typeof P.ref == "string" && Ae.current;
    }
    function yn(P, J) {
      {
        var ue = function() {
          nt || (nt = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ue.isReactWarning = !0, Object.defineProperty(P, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function Yo(P, J) {
      {
        var ue = function() {
          Bt || (Bt = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", J));
        };
        ue.isReactWarning = !0, Object.defineProperty(P, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var Un = function(P, J, ue, be, Be, Ke, Ve) {
      var Te = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: P,
        key: J,
        ref: ue,
        props: Ve,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return Te._store = {}, Object.defineProperty(Te._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Te, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: be
      }), Object.defineProperty(Te, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(Te.props), Object.freeze(Te)), Te;
    };
    function Jo(P, J, ue, be, Be) {
      {
        var Ke, Ve = {}, Te = null, lt = null;
        ue !== void 0 && (he(ue), Te = "" + ue), Zo(J) && (he(J.key), Te = "" + J.key), Ot(J) && (lt = J.ref, vn(J, Be));
        for (Ke in J)
          ye.call(J, Ke) && !ze.hasOwnProperty(Ke) && (Ve[Ke] = J[Ke]);
        if (P && P.defaultProps) {
          var Je = P.defaultProps;
          for (Ke in Je)
            Ve[Ke] === void 0 && (Ve[Ke] = Je[Ke]);
        }
        if (Te || lt) {
          var Qe = typeof P == "function" ? P.displayName || P.name || "Unknown" : P;
          Te && yn(Ve, Qe), lt && Yo(Ve, Qe);
        }
        return Un(P, Te, lt, Be, be, Ae.current, Ve);
      }
    }
    var Nr = _.ReactCurrentOwner, Xi = _.ReactDebugCurrentFrame;
    function Ar(P) {
      if (P) {
        var J = P._owner, ue = ce(P.type, P._source, J ? J.type : null);
        Xi.setExtraStackFrame(ue);
      } else
        Xi.setExtraStackFrame(null);
    }
    var Xo;
    Xo = !1;
    function Qo(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function Qi() {
      {
        if (Nr.current) {
          var P = F(Nr.current.type);
          if (P)
            return `

Check the render method of \`` + P + "`.";
        }
        return "";
      }
    }
    function Gh(P) {
      return "";
    }
    var ec = {};
    function Kh(P) {
      {
        var J = Qi();
        if (!J) {
          var ue = typeof P == "string" ? P : P.displayName || P.name;
          ue && (J = `

Check the top-level render call using <` + ue + ">.");
        }
        return J;
      }
    }
    function tc(P, J) {
      {
        if (!P._store || P._store.validated || P.key != null)
          return;
        P._store.validated = !0;
        var ue = Kh(J);
        if (ec[ue])
          return;
        ec[ue] = !0;
        var be = "";
        P && P._owner && P._owner !== Nr.current && (be = " It was passed a child from " + F(P._owner.type) + "."), Ar(P), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, be), Ar(null);
      }
    }
    function rc(P, J) {
      {
        if (typeof P != "object")
          return;
        if (U(P))
          for (var ue = 0; ue < P.length; ue++) {
            var be = P[ue];
            Qo(be) && tc(be, J);
          }
        else if (Qo(P))
          P._store && (P._store.validated = !0);
        else if (P) {
          var Be = h(P);
          if (typeof Be == "function" && Be !== P.entries)
            for (var Ke = Be.call(P), Ve; !(Ve = Ke.next()).done; )
              Qo(Ve.value) && tc(Ve.value, J);
        }
      }
    }
    function Zh(P) {
      {
        var J = P.type;
        if (J == null || typeof J == "string")
          return;
        var ue;
        if (typeof J == "function")
          ue = J.propTypes;
        else if (typeof J == "object" && (J.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        J.$$typeof === p))
          ue = J.propTypes;
        else
          return;
        if (ue) {
          var be = F(J);
          j(ue, P.props, "prop", be, P);
        } else if (J.PropTypes !== void 0 && !Xo) {
          Xo = !0;
          var Be = F(J);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof J.getDefaultProps == "function" && !J.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yh(P) {
      {
        for (var J = Object.keys(P.props), ue = 0; ue < J.length; ue++) {
          var be = J[ue];
          if (be !== "children" && be !== "key") {
            Ar(P), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", be), Ar(null);
            break;
          }
        }
        P.ref !== null && (Ar(P), f("Invalid attribute `ref` supplied to `React.Fragment`."), Ar(null));
      }
    }
    var nc = {};
    function sc(P, J, ue, be, Be, Ke) {
      {
        var Ve = z(P);
        if (!Ve) {
          var Te = "";
          (P === void 0 || typeof P == "object" && P !== null && Object.keys(P).length === 0) && (Te += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var lt = Gh();
          lt ? Te += lt : Te += Qi();
          var Je;
          P === null ? Je = "null" : U(P) ? Je = "array" : P !== void 0 && P.$$typeof === t ? (Je = "<" + (F(P.type) || "Unknown") + " />", Te = " Did you accidentally export a JSX literal instead of a component?") : Je = typeof P, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Je, Te);
        }
        var Qe = Jo(P, J, ue, Be, Ke);
        if (Qe == null)
          return Qe;
        if (Ve) {
          var xt = J.children;
          if (xt !== void 0)
            if (be)
              if (U(xt)) {
                for (var Tr = 0; Tr < xt.length; Tr++)
                  rc(xt[Tr], P);
                Object.freeze && Object.freeze(xt);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rc(xt, P);
        }
        if (ye.call(J, "key")) {
          var br = F(P), ft = Object.keys(J).filter(function(rp) {
            return rp !== "key";
          }), ea = ft.length > 0 ? "{key: someKey, " + ft.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!nc[br + ea]) {
            var tp = ft.length > 0 ? "{" + ft.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ea, br, tp, br), nc[br + ea] = !0;
          }
        }
        return P === n ? Yh(Qe) : Zh(Qe), Qe;
      }
    }
    function Jh(P, J, ue) {
      return sc(P, J, ue, !0);
    }
    function Xh(P, J, ue) {
      return sc(P, J, ue, !1);
    }
    var Qh = Xh, ep = Jh;
    _n.Fragment = n, _n.jsx = Qh, _n.jsxs = ep;
  })()), _n;
}
var cc;
function dp() {
  return cc || (cc = 1, process.env.NODE_ENV === "production" ? Bn.exports = lp() : Bn.exports = up()), Bn.exports;
}
var d = dp(), Dn = (e) => e.type === "checkbox", $r = (e) => e instanceof Date, mt = (e) => e == null;
const ed = (e) => typeof e == "object";
var tt = (e) => !mt(e) && !Array.isArray(e) && ed(e) && !$r(e), td = (e) => tt(e) && e.target ? Dn(e.target) ? e.target.checked : e.target.value : e, fp = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, rd = (e, t) => e.has(fp(t)), mp = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return tt(t) && t.hasOwnProperty("isPrototypeOf");
}, pi = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ye(e) {
  let t;
  const r = Array.isArray(e), n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(pi && (e instanceof Blob || n)) && (r || tt(e)))
    if (t = r ? [] : Object.create(Object.getPrototypeOf(e)), !r && !mp(e))
      t = e;
    else
      for (const s in e)
        e.hasOwnProperty(s) && (t[s] = Ye(e[s]));
  else
    return e;
  return t;
}
var Eo = (e) => /^\w*$/.test(e), Ze = (e) => e === void 0, Co = (e) => Array.isArray(e) ? e.filter(Boolean) : [], gi = (e) => Co(e.replace(/["|']|\]/g, "").split(/\.|\[/)), oe = (e, t, r) => {
  if (!t || !tt(e))
    return r;
  const n = (Eo(t) ? [t] : gi(t)).reduce((s, o) => mt(s) ? s : s[o], e);
  return Ze(n) || n === e ? Ze(e[t]) ? r : e[t] : n;
}, vt = (e) => typeof e == "boolean", qe = (e, t, r) => {
  let n = -1;
  const s = Eo(t) ? [t] : gi(t), o = s.length, a = o - 1;
  for (; ++n < o; ) {
    const i = s[n];
    let c = r;
    if (n !== a) {
      const l = e[i];
      c = tt(l) || Array.isArray(l) ? l : isNaN(+s[n + 1]) ? {} : [];
    }
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    e[i] = c, e = e[i];
  }
};
const ro = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, wt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Wt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, vi = se.createContext(null);
vi.displayName = "HookFormContext";
const ct = () => se.useContext(vi), hp = (e) => {
  const { children: t, ...r } = e;
  return se.createElement(vi.Provider, { value: r }, t);
};
var nd = (e, t, r, n = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(s, o, {
      get: () => {
        const a = o;
        return t._proxyFormState[a] !== wt.all && (t._proxyFormState[a] = !n || wt.all), r && (r[a] = !0), e[a];
      }
    });
  return s;
};
const ko = typeof window < "u" ? se.useLayoutEffect : se.useEffect;
function sd(e) {
  const t = ct(), { control: r = t.control, disabled: n, name: s, exact: o } = e || {}, [a, i] = se.useState(r._formState), c = se.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return ko(() => r._subscribe({
    name: s,
    formState: c.current,
    exact: o,
    callback: (l) => {
      !n && i({
        ...r._formState,
        ...l
      });
    }
  }), [s, n, o]), se.useEffect(() => {
    c.current.isValid && r._setValid(!0);
  }, [r]), se.useMemo(() => nd(a, r, c.current, !1), [a, r]);
}
var bt = (e) => typeof e == "string", Fa = (e, t, r, n, s) => bt(e) ? (n && t.watch.add(e), oe(r, e, s)) : Array.isArray(e) ? e.map((o) => (n && t.watch.add(o), oe(r, o))) : (n && (t.watchAll = !0), r), La = (e) => mt(e) || !ed(e);
function kt(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (La(e) || La(t))
    return Object.is(e, t);
  if ($r(e) && $r(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), s = Object.keys(t);
  if (n.length !== s.length)
    return !1;
  if (r.has(e) || r.has(t))
    return !0;
  r.add(e), r.add(t);
  for (const o of n) {
    const a = e[o];
    if (!s.includes(o))
      return !1;
    if (o !== "ref") {
      const i = t[o];
      if ($r(a) && $r(i) || tt(a) && tt(i) || Array.isArray(a) && Array.isArray(i) ? !kt(a, i, r) : !Object.is(a, i))
        return !1;
    }
  }
  return !0;
}
function jn(e) {
  const t = ct(), { control: r = t.control, name: n, defaultValue: s, disabled: o, exact: a, compute: i } = e || {}, c = se.useRef(s), l = se.useRef(i), u = se.useRef(void 0), p = se.useRef(r), m = se.useRef(n);
  l.current = i;
  const [v, x] = se.useState(() => {
    const w = r._getWatch(n, c.current);
    return l.current ? l.current(w) : w;
  }), y = se.useCallback((w) => {
    const g = Fa(n, r._names, w || r._formValues, !1, c.current);
    return l.current ? l.current(g) : g;
  }, [r._formValues, r._names, n]), h = se.useCallback((w) => {
    if (!o) {
      const g = Fa(n, r._names, w || r._formValues, !1, c.current);
      if (l.current) {
        const S = l.current(g);
        kt(S, u.current) || (x(S), u.current = S);
      } else
        x(g);
    }
  }, [r._formValues, r._names, o, n]);
  ko(() => ((p.current !== r || !kt(m.current, n)) && (p.current = r, m.current = n, h()), r._subscribe({
    name: n,
    formState: {
      values: !0
    },
    exact: a,
    callback: (w) => {
      h(w.values);
    }
  })), [r, a, n, h]), se.useEffect(() => r._removeUnmounted());
  const _ = p.current !== r, f = m.current, b = se.useMemo(() => {
    if (o)
      return null;
    const w = !_ && !kt(f, n);
    return _ || w ? y() : null;
  }, [o, _, n, f, y]);
  return b !== null ? b : v;
}
function pp(e) {
  const t = ct(), { name: r, disabled: n, control: s = t.control, shouldUnregister: o, defaultValue: a } = e, i = rd(s._names.array, r), c = se.useMemo(() => oe(s._formValues, r, oe(s._defaultValues, r, a)), [s, r, a]), l = jn({
    control: s,
    name: r,
    defaultValue: c,
    exact: !0
  }), u = sd({
    control: s,
    name: r,
    exact: !0
  }), p = se.useRef(e), m = se.useRef(void 0), v = se.useRef(s.register(r, {
    ...e.rules,
    value: l,
    ...vt(e.disabled) ? { disabled: e.disabled } : {}
  }));
  p.current = e;
  const x = se.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!oe(u.errors, r)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!oe(u.dirtyFields, r)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!oe(u.touchedFields, r)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!oe(u.validatingFields, r)
    },
    error: {
      enumerable: !0,
      get: () => oe(u.errors, r)
    }
  }), [u, r]), y = se.useCallback((b) => v.current.onChange({
    target: {
      value: td(b),
      name: r
    },
    type: ro.CHANGE
  }), [r]), h = se.useCallback(() => v.current.onBlur({
    target: {
      value: oe(s._formValues, r),
      name: r
    },
    type: ro.BLUR
  }), [r, s._formValues]), _ = se.useCallback((b) => {
    const w = oe(s._fields, r);
    w && b && (w._f.ref = {
      focus: () => b.focus && b.focus(),
      select: () => b.select && b.select(),
      setCustomValidity: (g) => b.setCustomValidity(g),
      reportValidity: () => b.reportValidity()
    });
  }, [s._fields, r]), f = se.useMemo(() => ({
    name: r,
    value: l,
    ...vt(n) || u.disabled ? { disabled: u.disabled || n } : {},
    onChange: y,
    onBlur: h,
    ref: _
  }), [r, n, u.disabled, y, h, _, l]);
  return se.useEffect(() => {
    const b = s._options.shouldUnregister || o, w = m.current;
    w && w !== r && !i && s.unregister(w), s.register(r, {
      ...p.current.rules,
      ...vt(p.current.disabled) ? { disabled: p.current.disabled } : {}
    });
    const g = (S, E) => {
      const k = oe(s._fields, S);
      k && k._f && (k._f.mount = E);
    };
    if (g(r, !0), b) {
      const S = Ye(oe(s._options.defaultValues, r, p.current.defaultValue));
      qe(s._defaultValues, r, S), Ze(oe(s._formValues, r)) && qe(s._formValues, r, S);
    }
    return !i && s.register(r), m.current = r, () => {
      (i ? b && !s._state.action : b) ? s.unregister(r) : g(r, !1);
    };
  }, [r, s, i, o]), se.useEffect(() => {
    s._setDisabledField({
      disabled: n,
      name: r
    });
  }, [n, r, s]), se.useMemo(() => ({
    field: f,
    formState: u,
    fieldState: x
  }), [f, u, x]);
}
const ir = (e) => e.render(pp(e));
var yi = (e, t, r, n, s) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: s || !0
  }
} : {}, ht = (e) => Array.isArray(e) ? e : [e], lc = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const o of e)
        o.next && o.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((o) => o !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
function od(e, t) {
  const r = {};
  for (const n in e)
    if (e.hasOwnProperty(n)) {
      const s = e[n], o = t[n];
      if (s && tt(s) && o) {
        const a = od(s, o);
        tt(a) && (r[n] = a);
      } else e[n] && (r[n] = o);
    }
  return r;
}
var at = (e) => tt(e) && !Object.keys(e).length, bi = (e) => e.type === "file", jt = (e) => typeof e == "function", no = (e) => {
  if (!pi)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, ad = (e) => e.type === "select-multiple", _i = (e) => e.type === "radio", gp = (e) => _i(e) || Dn(e), ta = (e) => no(e) && e.isConnected;
function vp(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = Ze(e) ? n++ : e[t[n++]];
  return e;
}
function yp(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Ze(e[t]))
      return !1;
  return !0;
}
function Xe(e, t) {
  const r = Array.isArray(t) ? t : Eo(t) ? [t] : gi(t), n = r.length === 1 ? e : vp(e, r), s = r.length - 1, o = r[s];
  return n && delete n[o], s !== 0 && (tt(n) && at(n) || Array.isArray(n) && yp(n)) && Xe(e, r.slice(0, -1)), e;
}
var bp = (e) => {
  for (const t in e)
    if (jt(e[t]))
      return !0;
  return !1;
};
function id(e) {
  return Array.isArray(e) || tt(e) && !bp(e);
}
function za(e, t = {}) {
  for (const r in e) {
    const n = e[r];
    id(n) ? (t[r] = Array.isArray(n) ? [] : {}, za(n, t[r])) : Ze(n) || (t[r] = !0);
  }
  return t;
}
function Br(e, t, r) {
  r || (r = za(t));
  for (const n in e) {
    const s = e[n];
    if (id(s))
      Ze(t) || La(r[n]) ? r[n] = za(s, Array.isArray(s) ? [] : {}) : Br(s, mt(t) ? {} : t[n], r[n]);
    else {
      const o = t[n];
      r[n] = !kt(s, o);
    }
  }
  return r;
}
const uc = {
  value: !1,
  isValid: !1
}, dc = { value: !0, isValid: !0 };
var cd = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Ze(e[0].attributes.value) ? Ze(e[0].value) || e[0].value === "" ? dc : { value: e[0].value, isValid: !0 } : dc
    ) : uc;
  }
  return uc;
}, ld = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => Ze(e) ? e : t ? e === "" ? NaN : e && +e : r && bt(e) ? new Date(e) : n ? n(e) : e;
const fc = {
  isValid: !1,
  value: null
};
var ud = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, fc) : fc;
function mc(e) {
  const t = e.ref;
  return bi(t) ? t.files : _i(t) ? ud(e.refs).value : ad(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Dn(t) ? cd(e.refs).value : ld(Ze(t.value) ? e.ref.value : t.value, e);
}
var _p = (e, t, r, n) => {
  const s = {};
  for (const o of e) {
    const a = oe(t, o);
    a && qe(s, o, a._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: n
  };
}, so = (e) => e instanceof RegExp, xn = (e) => Ze(e) ? e : so(e) ? e.source : tt(e) ? so(e.value) ? e.value.source : e.value : e, Hr = (e) => ({
  isOnSubmit: !e || e === wt.onSubmit,
  isOnBlur: e === wt.onBlur,
  isOnChange: e === wt.onChange,
  isOnAll: e === wt.all,
  isOnTouch: e === wt.onTouched
});
const hc = "AsyncFunction";
var xp = (e) => !!e && !!e.validate && !!(jt(e.validate) && e.validate.constructor.name === hc || tt(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === hc)), wp = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), qa = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Zr = (e, t, r, n) => {
  for (const s of r || Object.keys(e)) {
    const o = oe(e, s);
    if (o) {
      const { _f: a, ...i } = o;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], s) && !n)
          return !0;
        if (a.ref && t(a.ref, a.name) && !n)
          return !0;
        if (Zr(i, t))
          break;
      } else if (tt(i) && Zr(i, t))
        break;
    }
  }
};
function pc(e, t, r) {
  const n = oe(e, r);
  if (n || Eo(r))
    return {
      error: n,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const o = s.join("."), a = oe(t, o), i = oe(e, o);
    if (a && !Array.isArray(a) && r !== o)
      return { name: r };
    if (i && i.type)
      return {
        name: o,
        error: i
      };
    if (i && i.root && i.root.type)
      return {
        name: `${o}.root`,
        error: i.root
      };
    s.pop();
  }
  return {
    name: r
  };
}
var Sp = (e, t, r, n) => {
  r(e);
  const { name: s, ...o } = e;
  return at(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((a) => t[a] === (!n || wt.all));
}, $p = (e, t, r) => !e || !t || e === t || ht(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n))), Ep = (e, t, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(t || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, Cp = (e, t) => !Co(oe(e, t)).length && Xe(e, t), dd = (e, t, r) => {
  const n = ht(oe(e, r));
  return qe(n, "root", t[r]), qe(e, r, n), e;
};
function gc(e, t, r = "validate") {
  if (bt(e) || Array.isArray(e) && e.every(bt) || vt(e) && !e)
    return {
      type: r,
      message: bt(e) ? e : "",
      ref: t
    };
}
var Or = (e) => tt(e) && !so(e) ? e : {
  value: e,
  message: ""
}, Ua = async (e, t, r, n, s, o) => {
  const { ref: a, refs: i, required: c, maxLength: l, minLength: u, min: p, max: m, pattern: v, validate: x, name: y, valueAsNumber: h, mount: _ } = e._f, f = oe(r, y);
  if (!_ || t.has(y))
    return {};
  const b = i ? i[0] : a, w = (V) => {
    s && b.reportValidity && (b.setCustomValidity(vt(V) ? "" : V || ""), b.reportValidity());
  }, g = {}, S = _i(a), E = Dn(a), k = S || E, I = (h || bi(a)) && Ze(a.value) && Ze(f) || no(a) && a.value === "" || f === "" || Array.isArray(f) && !f.length, z = yi.bind(null, y, n, g), M = (V, F, W, te = Wt.maxLength, Z = Wt.minLength) => {
    const ae = V ? F : W;
    g[y] = {
      type: V ? te : Z,
      message: ae,
      ref: a,
      ...z(V ? te : Z, ae)
    };
  };
  if (o ? !Array.isArray(f) || !f.length : c && (!k && (I || mt(f)) || vt(f) && !f || E && !cd(i).isValid || S && !ud(i).isValid)) {
    const { value: V, message: F } = bt(c) ? { value: !!c, message: c } : Or(c);
    if (V && (g[y] = {
      type: Wt.required,
      message: F,
      ref: b,
      ...z(Wt.required, F)
    }, !n))
      return w(F), g;
  }
  if (!I && (!mt(p) || !mt(m))) {
    let V, F;
    const W = Or(m), te = Or(p);
    if (!mt(f) && !isNaN(f)) {
      const Z = a.valueAsNumber || f && +f;
      mt(W.value) || (V = Z > W.value), mt(te.value) || (F = Z < te.value);
    } else {
      const Z = a.valueAsDate || new Date(f), ae = (G) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + G), L = a.type == "time", ve = a.type == "week";
      bt(W.value) && f && (V = L ? ae(f) > ae(W.value) : ve ? f > W.value : Z > new Date(W.value)), bt(te.value) && f && (F = L ? ae(f) < ae(te.value) : ve ? f < te.value : Z < new Date(te.value));
    }
    if ((V || F) && (M(!!V, W.message, te.message, Wt.max, Wt.min), !n))
      return w(g[y].message), g;
  }
  if ((l || u) && !I && (bt(f) || o && Array.isArray(f))) {
    const V = Or(l), F = Or(u), W = !mt(V.value) && f.length > +V.value, te = !mt(F.value) && f.length < +F.value;
    if ((W || te) && (M(W, V.message, F.message), !n))
      return w(g[y].message), g;
  }
  if (v && !I && bt(f)) {
    const { value: V, message: F } = Or(v);
    if (so(V) && !f.match(V) && (g[y] = {
      type: Wt.pattern,
      message: F,
      ref: a,
      ...z(Wt.pattern, F)
    }, !n))
      return w(F), g;
  }
  if (x) {
    if (jt(x)) {
      const V = await x(f, r), F = gc(V, b);
      if (F && (g[y] = {
        ...F,
        ...z(Wt.validate, F.message)
      }, !n))
        return w(F.message), g;
    } else if (tt(x)) {
      let V = {};
      for (const F in x) {
        if (!at(V) && !n)
          break;
        const W = gc(await x[F](f, r), b, F);
        W && (V = {
          ...W,
          ...z(F, W.message)
        }, w(W.message), n && (g[y] = V));
      }
      if (!at(V) && (g[y] = {
        ref: b,
        ...V
      }, !n))
        return g;
    }
  }
  return w(!0), g;
};
const kp = {
  mode: wt.onSubmit,
  reValidateMode: wt.onChange,
  shouldFocusError: !0
};
function jp(e = {}) {
  let t = {
    ...kp,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: jt(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, n = {}, s = tt(t.defaultValues) || tt(t.values) ? Ye(t.defaultValues || t.values) || {} : {}, o = t.shouldUnregister ? {} : Ye(s), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, i = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, l = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  };
  let p = {
    ...u
  };
  const m = {
    array: lc(),
    state: lc()
  }, v = t.criteriaMode === wt.all, x = (j) => (D) => {
    clearTimeout(l), l = setTimeout(j, D);
  }, y = async (j) => {
    if (!t.disabled && (u.isValid || p.isValid || j)) {
      const D = t.resolver ? at((await E()).errors) : await I(n, !0);
      D !== r.isValid && m.state.next({
        isValid: D
      });
    }
  }, h = (j, D) => {
    !t.disabled && (u.isValidating || u.validatingFields || p.isValidating || p.validatingFields) && ((j || Array.from(i.mount)).forEach((U) => {
      U && (D ? qe(r.validatingFields, U, D) : Xe(r.validatingFields, U));
    }), m.state.next({
      validatingFields: r.validatingFields,
      isValidating: !at(r.validatingFields)
    }));
  }, _ = (j, D = [], U, re, ne = !0, Q = !0) => {
    if (re && U && !t.disabled) {
      if (a.action = !0, Q && Array.isArray(oe(n, j))) {
        const he = U(oe(n, j), re.argA, re.argB);
        ne && qe(n, j, he);
      }
      if (Q && Array.isArray(oe(r.errors, j))) {
        const he = U(oe(r.errors, j), re.argA, re.argB);
        ne && qe(r.errors, j, he), Cp(r.errors, j);
      }
      if ((u.touchedFields || p.touchedFields) && Q && Array.isArray(oe(r.touchedFields, j))) {
        const he = U(oe(r.touchedFields, j), re.argA, re.argB);
        ne && qe(r.touchedFields, j, he);
      }
      (u.dirtyFields || p.dirtyFields) && (r.dirtyFields = Br(s, o)), m.state.next({
        name: j,
        isDirty: M(j, D),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      qe(o, j, D);
  }, f = (j, D) => {
    qe(r.errors, j, D), m.state.next({
      errors: r.errors
    });
  }, b = (j) => {
    r.errors = j, m.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, w = (j, D, U, re) => {
    const ne = oe(n, j);
    if (ne) {
      const Q = oe(o, j, Ze(U) ? oe(s, j) : U);
      Ze(Q) || re && re.defaultChecked || D ? qe(o, j, D ? Q : mc(ne._f)) : W(j, Q), a.mount && !a.action && y();
    }
  }, g = (j, D, U, re, ne) => {
    let Q = !1, he = !1;
    const Ae = {
      name: j
    };
    if (!t.disabled) {
      if (!U || re) {
        (u.isDirty || p.isDirty) && (he = r.isDirty, r.isDirty = Ae.isDirty = M(), Q = he !== Ae.isDirty);
        const ze = kt(oe(s, j), D);
        he = !!oe(r.dirtyFields, j), ze ? Xe(r.dirtyFields, j) : qe(r.dirtyFields, j, !0), Ae.dirtyFields = r.dirtyFields, Q = Q || (u.dirtyFields || p.dirtyFields) && he !== !ze;
      }
      if (U) {
        const ze = oe(r.touchedFields, j);
        ze || (qe(r.touchedFields, j, U), Ae.touchedFields = r.touchedFields, Q = Q || (u.touchedFields || p.touchedFields) && ze !== U);
      }
      Q && ne && m.state.next(Ae);
    }
    return Q ? Ae : {};
  }, S = (j, D, U, re) => {
    const ne = oe(r.errors, j), Q = (u.isValid || p.isValid) && vt(D) && r.isValid !== D;
    if (t.delayError && U ? (c = x(() => f(j, U)), c(t.delayError)) : (clearTimeout(l), c = null, U ? qe(r.errors, j, U) : Xe(r.errors, j)), (U ? !kt(ne, U) : ne) || !at(re) || Q) {
      const he = {
        ...re,
        ...Q && vt(D) ? { isValid: D } : {},
        errors: r.errors,
        name: j
      };
      r = {
        ...r,
        ...he
      }, m.state.next(he);
    }
  }, E = async (j) => {
    h(j, !0);
    const D = await t.resolver(o, t.context, _p(j || i.mount, n, t.criteriaMode, t.shouldUseNativeValidation));
    return h(j), D;
  }, k = async (j) => {
    const { errors: D } = await E(j);
    if (j)
      for (const U of j) {
        const re = oe(D, U);
        re ? qe(r.errors, U, re) : Xe(r.errors, U);
      }
    else
      r.errors = D;
    return D;
  }, I = async (j, D, U = {
    valid: !0
  }) => {
    for (const re in j) {
      const ne = j[re];
      if (ne) {
        const { _f: Q, ...he } = ne;
        if (Q) {
          const Ae = i.array.has(Q.name), ze = ne._f && xp(ne._f);
          ze && u.validatingFields && h([Q.name], !0);
          const nt = await Ua(ne, i.disabled, o, v, t.shouldUseNativeValidation && !D, Ae);
          if (ze && u.validatingFields && h([Q.name]), nt[Q.name] && (U.valid = !1, D))
            break;
          !D && (oe(nt, Q.name) ? Ae ? dd(r.errors, nt, Q.name) : qe(r.errors, Q.name, nt[Q.name]) : Xe(r.errors, Q.name));
        }
        !at(he) && await I(he, D, U);
      }
    }
    return U.valid;
  }, z = () => {
    for (const j of i.unMount) {
      const D = oe(n, j);
      D && (D._f.refs ? D._f.refs.every((U) => !ta(U)) : !ta(D._f.ref)) && B(j);
    }
    i.unMount = /* @__PURE__ */ new Set();
  }, M = (j, D) => !t.disabled && (j && D && qe(o, j, D), !kt(G(), s)), V = (j, D, U) => Fa(j, i, {
    ...a.mount ? o : Ze(D) ? s : bt(j) ? { [j]: D } : D
  }, U, D), F = (j) => Co(oe(a.mount ? o : s, j, t.shouldUnregister ? oe(s, j, []) : [])), W = (j, D, U = {}) => {
    const re = oe(n, j);
    let ne = D;
    if (re) {
      const Q = re._f;
      Q && (!Q.disabled && qe(o, j, ld(D, Q)), ne = no(Q.ref) && mt(D) ? "" : D, ad(Q.ref) ? [...Q.ref.options].forEach((he) => he.selected = ne.includes(he.value)) : Q.refs ? Dn(Q.ref) ? Q.refs.forEach((he) => {
        (!he.defaultChecked || !he.disabled) && (Array.isArray(ne) ? he.checked = !!ne.find((Ae) => Ae === he.value) : he.checked = ne === he.value || !!ne);
      }) : Q.refs.forEach((he) => he.checked = he.value === ne) : bi(Q.ref) ? Q.ref.value = "" : (Q.ref.value = ne, Q.ref.type || m.state.next({
        name: j,
        values: Ye(o)
      })));
    }
    (U.shouldDirty || U.shouldTouch) && g(j, ne, U.shouldTouch, U.shouldDirty, !0), U.shouldValidate && ve(j);
  }, te = (j, D, U) => {
    for (const re in D) {
      if (!D.hasOwnProperty(re))
        return;
      const ne = D[re], Q = j + "." + re, he = oe(n, Q);
      (i.array.has(j) || tt(ne) || he && !he._f) && !$r(ne) ? te(Q, ne, U) : W(Q, ne, U);
    }
  }, Z = (j, D, U = {}) => {
    const re = oe(n, j), ne = i.array.has(j), Q = Ye(D);
    qe(o, j, Q), ne ? (m.array.next({
      name: j,
      values: Ye(o)
    }), (u.isDirty || u.dirtyFields || p.isDirty || p.dirtyFields) && U.shouldDirty && m.state.next({
      name: j,
      dirtyFields: Br(s, o),
      isDirty: M(j, Q)
    })) : re && !re._f && !mt(Q) ? te(j, Q, U) : W(j, Q, U), qa(j, i) && m.state.next({ ...r, name: j }), m.state.next({
      name: a.mount ? j : void 0,
      values: Ye(o)
    });
  }, ae = async (j) => {
    a.mount = !0;
    const D = j.target;
    let U = D.name, re = !0;
    const ne = oe(n, U), Q = (ze) => {
      re = Number.isNaN(ze) || $r(ze) && isNaN(ze.getTime()) || kt(ze, oe(o, U, ze));
    }, he = Hr(t.mode), Ae = Hr(t.reValidateMode);
    if (ne) {
      let ze, nt;
      const Bt = D.type ? mc(ne._f) : td(j), Ot = j.type === ro.BLUR || j.type === ro.FOCUS_OUT, Zo = !wp(ne._f) && !t.resolver && !oe(r.errors, U) && !ne._f.deps || Ep(Ot, oe(r.touchedFields, U), r.isSubmitted, Ae, he), vn = qa(U, i, Ot);
      qe(o, U, Bt), Ot ? (!D || !D.readOnly) && (ne._f.onBlur && ne._f.onBlur(j), c && c(0)) : ne._f.onChange && ne._f.onChange(j);
      const yn = g(U, Bt, Ot), Yo = !at(yn) || vn;
      if (!Ot && m.state.next({
        name: U,
        type: j.type,
        values: Ye(o)
      }), Zo)
        return (u.isValid || p.isValid) && (t.mode === "onBlur" ? Ot && y() : Ot || y()), Yo && m.state.next({ name: U, ...vn ? {} : yn });
      if (!Ot && vn && m.state.next({ ...r }), t.resolver) {
        const { errors: Un } = await E([U]);
        if (Q(Bt), re) {
          const Jo = pc(r.errors, n, U), Nr = pc(Un, n, Jo.name || U);
          ze = Nr.error, U = Nr.name, nt = at(Un);
        }
      } else
        h([U], !0), ze = (await Ua(ne, i.disabled, o, v, t.shouldUseNativeValidation))[U], h([U]), Q(Bt), re && (ze ? nt = !1 : (u.isValid || p.isValid) && (nt = await I(n, !0)));
      re && (ne._f.deps && (!Array.isArray(ne._f.deps) || ne._f.deps.length > 0) && ve(ne._f.deps), S(U, nt, ze, yn));
    }
  }, L = (j, D) => {
    if (oe(r.errors, D) && j.focus)
      return j.focus(), 1;
  }, ve = async (j, D = {}) => {
    let U, re;
    const ne = ht(j);
    if (t.resolver) {
      const Q = await k(Ze(j) ? j : ne);
      U = at(Q), re = j ? !ne.some((he) => oe(Q, he)) : U;
    } else j ? (re = (await Promise.all(ne.map(async (Q) => {
      const he = oe(n, Q);
      return await I(he && he._f ? { [Q]: he } : he);
    }))).every(Boolean), !(!re && !r.isValid) && y()) : re = U = await I(n);
    return m.state.next({
      ...!bt(j) || (u.isValid || p.isValid) && U !== r.isValid ? {} : { name: j },
      ...t.resolver || !j ? { isValid: U } : {},
      errors: r.errors
    }), D.shouldFocus && !re && Zr(n, L, j ? ne : i.mount), re;
  }, G = (j, D) => {
    let U = {
      ...a.mount ? o : s
    };
    return D && (U = od(D.dirtyFields ? r.dirtyFields : r.touchedFields, U)), Ze(j) ? U : bt(j) ? oe(U, j) : j.map((re) => oe(U, re));
  }, T = (j, D) => ({
    invalid: !!oe((D || r).errors, j),
    isDirty: !!oe((D || r).dirtyFields, j),
    error: oe((D || r).errors, j),
    isValidating: !!oe(r.validatingFields, j),
    isTouched: !!oe((D || r).touchedFields, j)
  }), K = (j) => {
    j && ht(j).forEach((D) => Xe(r.errors, D)), m.state.next({
      errors: j ? r.errors : {}
    });
  }, O = (j, D, U) => {
    const re = (oe(n, j, { _f: {} })._f || {}).ref, ne = oe(r.errors, j) || {}, { ref: Q, message: he, type: Ae, ...ze } = ne;
    qe(r.errors, j, {
      ...ze,
      ...D,
      ref: re
    }), m.state.next({
      name: j,
      errors: r.errors,
      isValid: !1
    }), U && U.shouldFocus && re && re.focus && re.focus();
  }, C = (j, D) => jt(j) ? m.state.subscribe({
    next: (U) => "values" in U && j(V(void 0, D), U)
  }) : V(j, D, !0), R = (j) => m.state.subscribe({
    next: (D) => {
      $p(j.name, D.name, j.exact) && Sp(D, j.formState || u, He, j.reRenderRoot) && j.callback({
        values: { ...o },
        ...r,
        ...D,
        defaultValues: s
      });
    }
  }).unsubscribe, q = (j) => (a.mount = !0, p = {
    ...p,
    ...j.formState
  }, R({
    ...j,
    formState: p
  })), B = (j, D = {}) => {
    for (const U of j ? ht(j) : i.mount)
      i.mount.delete(U), i.array.delete(U), D.keepValue || (Xe(n, U), Xe(o, U)), !D.keepError && Xe(r.errors, U), !D.keepDirty && Xe(r.dirtyFields, U), !D.keepTouched && Xe(r.touchedFields, U), !D.keepIsValidating && Xe(r.validatingFields, U), !t.shouldUnregister && !D.keepDefaultValue && Xe(s, U);
    m.state.next({
      values: Ye(o)
    }), m.state.next({
      ...r,
      ...D.keepDirty ? { isDirty: M() } : {}
    }), !D.keepIsValid && y();
  }, X = ({ disabled: j, name: D }) => {
    (vt(j) && a.mount || j || i.disabled.has(D)) && (j ? i.disabled.add(D) : i.disabled.delete(D));
  }, pe = (j, D = {}) => {
    let U = oe(n, j);
    const re = vt(D.disabled) || vt(t.disabled);
    return qe(n, j, {
      ...U || {},
      _f: {
        ...U && U._f ? U._f : { ref: { name: j } },
        name: j,
        mount: !0,
        ...D
      }
    }), i.mount.add(j), U ? X({
      disabled: vt(D.disabled) ? D.disabled : t.disabled,
      name: j
    }) : w(j, !0, D.value), {
      ...re ? { disabled: D.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!D.required,
        min: xn(D.min),
        max: xn(D.max),
        minLength: xn(D.minLength),
        maxLength: xn(D.maxLength),
        pattern: xn(D.pattern)
      } : {},
      name: j,
      onChange: ae,
      onBlur: ae,
      ref: (ne) => {
        if (ne) {
          pe(j, D), U = oe(n, j);
          const Q = Ze(ne.value) && ne.querySelectorAll && ne.querySelectorAll("input,select,textarea")[0] || ne, he = gp(Q), Ae = U._f.refs || [];
          if (he ? Ae.find((ze) => ze === Q) : Q === U._f.ref)
            return;
          qe(n, j, {
            _f: {
              ...U._f,
              ...he ? {
                refs: [
                  ...Ae.filter(ta),
                  Q,
                  ...Array.isArray(oe(s, j)) ? [{}] : []
                ],
                ref: { type: Q.type, name: j }
              } : { ref: Q }
            }
          }), w(j, !1, void 0, Q);
        } else
          U = oe(n, j, {}), U._f && (U._f.mount = !1), (t.shouldUnregister || D.shouldUnregister) && !(rd(i.array, j) && a.action) && i.unMount.add(j);
      }
    };
  }, ie = () => t.shouldFocusError && Zr(n, L, i.mount), N = (j) => {
    vt(j) && (m.state.next({ disabled: j }), Zr(n, (D, U) => {
      const re = oe(n, U);
      re && (D.disabled = re._f.disabled || j, Array.isArray(re._f.refs) && re._f.refs.forEach((ne) => {
        ne.disabled = re._f.disabled || j;
      }));
    }, 0, !1));
  }, A = (j, D) => async (U) => {
    let re;
    U && (U.preventDefault && U.preventDefault(), U.persist && U.persist());
    let ne = Ye(o);
    if (m.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: Q, values: he } = await E();
      r.errors = Q, ne = Ye(he);
    } else
      await I(n);
    if (i.disabled.size)
      for (const Q of i.disabled)
        Xe(ne, Q);
    if (Xe(r.errors, "root"), at(r.errors)) {
      m.state.next({
        errors: {}
      });
      try {
        await j(ne, U);
      } catch (Q) {
        re = Q;
      }
    } else
      D && await D({ ...r.errors }, U), ie(), setTimeout(ie);
    if (m.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: at(r.errors) && !re,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), re)
      throw re;
  }, H = (j, D = {}) => {
    oe(n, j) && (Ze(D.defaultValue) ? Z(j, Ye(oe(s, j))) : (Z(j, D.defaultValue), qe(s, j, Ye(D.defaultValue))), D.keepTouched || Xe(r.touchedFields, j), D.keepDirty || (Xe(r.dirtyFields, j), r.isDirty = D.defaultValue ? M(j, Ye(oe(s, j))) : M()), D.keepError || (Xe(r.errors, j), u.isValid && y()), m.state.next({ ...r }));
  }, Y = (j, D = {}) => {
    const U = j ? Ye(j) : s, re = Ye(U), ne = at(j), Q = ne ? s : re;
    if (D.keepDefaultValues || (s = U), !D.keepValues) {
      if (D.keepDirtyValues) {
        const he = /* @__PURE__ */ new Set([
          ...i.mount,
          ...Object.keys(Br(s, o))
        ]);
        for (const Ae of Array.from(he))
          oe(r.dirtyFields, Ae) ? qe(Q, Ae, oe(o, Ae)) : Z(Ae, oe(Q, Ae));
      } else {
        if (pi && Ze(j))
          for (const he of i.mount) {
            const Ae = oe(n, he);
            if (Ae && Ae._f) {
              const ze = Array.isArray(Ae._f.refs) ? Ae._f.refs[0] : Ae._f.ref;
              if (no(ze)) {
                const nt = ze.closest("form");
                if (nt) {
                  nt.reset();
                  break;
                }
              }
            }
          }
        if (D.keepFieldsRef)
          for (const he of i.mount)
            Z(he, oe(Q, he));
        else
          n = {};
      }
      o = t.shouldUnregister ? D.keepDefaultValues ? Ye(s) : {} : Ye(Q), m.array.next({
        values: { ...Q }
      }), m.state.next({
        values: { ...Q }
      });
    }
    i = {
      mount: D.keepDirtyValues ? i.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !u.isValid || !!D.keepIsValid || !!D.keepDirtyValues || !t.shouldUnregister && !at(Q), a.watch = !!t.shouldUnregister, m.state.next({
      submitCount: D.keepSubmitCount ? r.submitCount : 0,
      isDirty: ne ? !1 : D.keepDirty ? r.isDirty : !!(D.keepDefaultValues && !kt(j, s)),
      isSubmitted: D.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: ne ? {} : D.keepDirtyValues ? D.keepDefaultValues && o ? Br(s, o) : r.dirtyFields : D.keepDefaultValues && j ? Br(s, j) : D.keepDirty ? r.dirtyFields : {},
      touchedFields: D.keepTouched ? r.touchedFields : {},
      errors: D.keepErrors ? r.errors : {},
      isSubmitSuccessful: D.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: s
    });
  }, ce = (j, D) => Y(jt(j) ? j(o) : j, D), ye = (j, D = {}) => {
    const U = oe(n, j), re = U && U._f;
    if (re) {
      const ne = re.refs ? re.refs[0] : re.ref;
      ne.focus && (ne.focus(), D.shouldSelect && jt(ne.select) && ne.select());
    }
  }, He = (j) => {
    r = {
      ...r,
      ...j
    };
  }, Ge = {
    control: {
      register: pe,
      unregister: B,
      getFieldState: T,
      handleSubmit: A,
      setError: O,
      _subscribe: R,
      _runSchema: E,
      _focusError: ie,
      _getWatch: V,
      _getDirty: M,
      _setValid: y,
      _setFieldArray: _,
      _setDisabledField: X,
      _setErrors: b,
      _getFieldArray: F,
      _reset: Y,
      _resetDefaultValues: () => jt(t.defaultValues) && t.defaultValues().then((j) => {
        ce(j, t.resetOptions), m.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: z,
      _disableForm: N,
      _subjects: m,
      _proxyFormState: u,
      get _fields() {
        return n;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return a;
      },
      set _state(j) {
        a = j;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return i;
      },
      set _names(j) {
        i = j;
      },
      get _formState() {
        return r;
      },
      get _options() {
        return t;
      },
      set _options(j) {
        t = {
          ...t,
          ...j
        };
      }
    },
    subscribe: q,
    trigger: ve,
    register: pe,
    handleSubmit: A,
    watch: C,
    setValue: Z,
    getValues: G,
    reset: ce,
    resetField: H,
    clearErrors: K,
    unregister: B,
    setError: O,
    setFocus: ye,
    getFieldState: T
  };
  return {
    ...Ge,
    formControl: Ge
  };
}
var rr = () => {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const r = (Math.random() * 16 + e) % 16 | 0;
    return (t == "x" ? r : r & 3 | 8).toString(16);
  });
}, ra = (e, t, r = {}) => r.shouldFocus || Ze(r.shouldFocus) ? r.focusName || `${e}.${Ze(r.focusIndex) ? t : r.focusIndex}.` : "", na = (e, t) => [
  ...e,
  ...ht(t)
], sa = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function oa(e, t, r) {
  return [
    ...e.slice(0, t),
    ...ht(r),
    ...e.slice(t)
  ];
}
var aa = (e, t, r) => Array.isArray(e) ? (Ze(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(t, 1)[0]), e) : [], ia = (e, t) => [
  ...ht(t),
  ...ht(e)
];
function Rp(e, t) {
  let r = 0;
  const n = [...e];
  for (const s of t)
    n.splice(s - r, 1), r++;
  return Co(n).length ? n : [];
}
var ca = (e, t) => Ze(t) ? [] : Rp(e, ht(t).sort((r, n) => r - n)), la = (e, t, r) => {
  [e[t], e[r]] = [e[r], e[t]];
}, vc = (e, t, r) => (e[t] = r, e);
function fd(e) {
  const t = ct(), { control: r = t.control, name: n, keyName: s = "id", shouldUnregister: o, rules: a } = e, [i, c] = se.useState(r._getFieldArray(n)), l = se.useRef(r._getFieldArray(n).map(rr)), u = se.useRef(!1);
  r._names.array.add(n), se.useMemo(() => a && i.length >= 0 && r.register(n, a), [r, n, i.length, a]), ko(() => r._subjects.array.subscribe({
    next: ({ values: w, name: g }) => {
      if (g === n || !g) {
        const S = oe(w, n);
        Array.isArray(S) && (c(S), l.current = S.map(rr));
      }
    }
  }).unsubscribe, [r, n]);
  const p = se.useCallback((w) => {
    u.current = !0, r._setFieldArray(n, w);
  }, [r, n]), m = (w, g) => {
    const S = ht(Ye(w)), E = na(r._getFieldArray(n), S);
    r._names.focus = ra(n, E.length - 1, g), l.current = na(l.current, S.map(rr)), p(E), c(E), r._setFieldArray(n, E, na, {
      argA: sa(w)
    });
  }, v = (w, g) => {
    const S = ht(Ye(w)), E = ia(r._getFieldArray(n), S);
    r._names.focus = ra(n, 0, g), l.current = ia(l.current, S.map(rr)), p(E), c(E), r._setFieldArray(n, E, ia, {
      argA: sa(w)
    });
  }, x = (w) => {
    const g = ca(r._getFieldArray(n), w);
    l.current = ca(l.current, w), p(g), c(g), !Array.isArray(oe(r._fields, n)) && qe(r._fields, n, void 0), r._setFieldArray(n, g, ca, {
      argA: w
    });
  }, y = (w, g, S) => {
    const E = ht(Ye(g)), k = oa(r._getFieldArray(n), w, E);
    r._names.focus = ra(n, w, S), l.current = oa(l.current, w, E.map(rr)), p(k), c(k), r._setFieldArray(n, k, oa, {
      argA: w,
      argB: sa(g)
    });
  }, h = (w, g) => {
    const S = r._getFieldArray(n);
    la(S, w, g), la(l.current, w, g), p(S), c(S), r._setFieldArray(n, S, la, {
      argA: w,
      argB: g
    }, !1);
  }, _ = (w, g) => {
    const S = r._getFieldArray(n);
    aa(S, w, g), aa(l.current, w, g), p(S), c(S), r._setFieldArray(n, S, aa, {
      argA: w,
      argB: g
    }, !1);
  }, f = (w, g) => {
    const S = Ye(g), E = vc(r._getFieldArray(n), w, S);
    l.current = [...E].map((k, I) => !k || I === w ? rr() : l.current[I]), p(E), c([...E]), r._setFieldArray(n, E, vc, {
      argA: w,
      argB: S
    }, !0, !1);
  }, b = (w) => {
    const g = ht(Ye(w));
    l.current = g.map(rr), p([...g]), c([...g]), r._setFieldArray(n, [...g], (S) => S, {}, !0, !1);
  };
  return se.useEffect(() => {
    if (r._state.action = !1, qa(n, r._names) && r._subjects.state.next({
      ...r._formState
    }), u.current && (!Hr(r._options.mode).isOnSubmit || r._formState.isSubmitted) && !Hr(r._options.reValidateMode).isOnSubmit)
      if (r._options.resolver)
        r._runSchema([n]).then((w) => {
          const g = oe(w.errors, n), S = oe(r._formState.errors, n);
          (S ? !g && S.type || g && (S.type !== g.type || S.message !== g.message) : g && g.type) && (g ? qe(r._formState.errors, n, g) : Xe(r._formState.errors, n), r._subjects.state.next({
            errors: r._formState.errors
          }));
        });
      else {
        const w = oe(r._fields, n);
        w && w._f && !(Hr(r._options.reValidateMode).isOnSubmit && Hr(r._options.mode).isOnSubmit) && Ua(w, r._names.disabled, r._formValues, r._options.criteriaMode === wt.all, r._options.shouldUseNativeValidation, !0).then((g) => !at(g) && r._subjects.state.next({
          errors: dd(r._formState.errors, g, n)
        }));
      }
    r._subjects.state.next({
      name: n,
      values: Ye(r._formValues)
    }), r._names.focus && Zr(r._fields, (w, g) => {
      if (r._names.focus && g.startsWith(r._names.focus) && w.focus)
        return w.focus(), 1;
    }), r._names.focus = "", r._setValid(), u.current = !1;
  }, [i, n, r]), se.useEffect(() => (!oe(r._formValues, n) && r._setFieldArray(n), () => {
    const w = (g, S) => {
      const E = oe(r._fields, g);
      E && E._f && (E._f.mount = S);
    };
    r._options.shouldUnregister || o ? r.unregister(n) : w(n, !1);
  }), [n, r, s, o]), {
    swap: se.useCallback(h, [p, n, r]),
    move: se.useCallback(_, [p, n, r]),
    prepend: se.useCallback(v, [p, n, r]),
    append: se.useCallback(m, [p, n, r]),
    remove: se.useCallback(x, [p, n, r]),
    insert: se.useCallback(y, [p, n, r]),
    update: se.useCallback(f, [p, n, r]),
    replace: se.useCallback(b, [p, n, r]),
    fields: se.useMemo(() => i.map((w, g) => ({
      ...w,
      [s]: l.current[g] || rr()
    })), [i, s])
  };
}
function Pp(e = {}) {
  const t = se.useRef(void 0), r = se.useRef(void 0), [n, s] = se.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: jt(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    isReady: !1,
    defaultValues: jt(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!t.current)
    if (e.formControl)
      t.current = {
        ...e.formControl,
        formState: n
      }, e.defaultValues && !jt(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: a, ...i } = jp(e);
      t.current = {
        ...i,
        formState: n
      };
    }
  const o = t.current.control;
  return o._options = e, ko(() => {
    const a = o._subscribe({
      formState: o._proxyFormState,
      callback: () => s({ ...o._formState }),
      reRenderRoot: !0
    });
    return s((i) => ({
      ...i,
      isReady: !0
    })), o._formState.isReady = !0, a;
  }, [o]), se.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), se.useEffect(() => {
    e.mode && (o._options.mode = e.mode), e.reValidateMode && (o._options.reValidateMode = e.reValidateMode);
  }, [o, e.mode, e.reValidateMode]), se.useEffect(() => {
    e.errors && (o._setErrors(e.errors), o._focusError());
  }, [o, e.errors]), se.useEffect(() => {
    e.shouldUnregister && o._subjects.state.next({
      values: o._getWatch()
    });
  }, [o, e.shouldUnregister]), se.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== n.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, n.isDirty]), se.useEffect(() => {
    var a;
    e.values && !kt(e.values, r.current) ? (o._reset(e.values, {
      keepFieldsRef: !0,
      ...o._options.resetOptions
    }), !((a = o._options.resetOptions) === null || a === void 0) && a.keepIsValid || o._setValid(), r.current = e.values, s((i) => ({ ...i }))) : o._resetDefaultValues();
  }, [o, e.values]), se.useEffect(() => {
    o._state.mount || (o._setValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), t.current.formState = nd(n, o), t.current;
}
const Np = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Rn = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += Np[r[e] & 63];
  return t;
};
function yc(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Se(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function Ap(e, t) {
  const r = $.createContext(t), n = (o) => {
    const { children: a, ...i } = o, c = $.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ d.jsx(r.Provider, { value: c, children: a });
  };
  n.displayName = e + "Provider";
  function s(o) {
    const a = $.useContext(r);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return [n, s];
}
function qt(e, t = []) {
  let r = [];
  function n(o, a) {
    const i = $.createContext(a), c = r.length;
    r = [...r, a];
    const l = (p) => {
      var _;
      const { scope: m, children: v, ...x } = p, y = ((_ = m == null ? void 0 : m[e]) == null ? void 0 : _[c]) || i, h = $.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ d.jsx(y.Provider, { value: h, children: v });
    };
    l.displayName = o + "Provider";
    function u(p, m) {
      var y;
      const v = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[c]) || i, x = $.useContext(v);
      if (x) return x;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${o}\``);
    }
    return [l, u];
  }
  const s = () => {
    const o = r.map((a) => $.createContext(a));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || o;
      return $.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return s.scopeName = e, [n, Tp(s, ...t)];
}
function Tp(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(o) {
      const a = n.reduce((i, { useScope: c, scopeName: l }) => {
        const p = c(o)[`__scope${l}`];
        return { ...i, ...p };
      }, {});
      return $.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function bc(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function an(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((s) => {
      const o = bc(s, t);
      return !r && typeof o == "function" && (r = !0), o;
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const o = n[s];
          typeof o == "function" ? o() : bc(e[s], null);
        }
      };
  };
}
function Ue(...e) {
  return $.useCallback(an(...e), e);
}
// @__NO_SIDE_EFFECTS__
function _c(e) {
  const t = /* @__PURE__ */ Op(e), r = $.forwardRef((n, s) => {
    const { children: o, ...a } = n, i = $.Children.toArray(o), c = i.find(Dp);
    if (c) {
      const l = c.props.children, u = i.map((p) => p === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: o });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Op(e) {
  const t = $.forwardRef((r, n) => {
    const { children: s, ...o } = r;
    if ($.isValidElement(s)) {
      const a = Vp(s), i = Mp(o, s.props);
      return s.type !== $.Fragment && (i.ref = n ? an(n, a) : a), $.cloneElement(s, i);
    }
    return $.Children.count(s) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ip = Symbol("radix.slottable");
function Dp(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ip;
}
function Mp(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? s && o ? r[n] = (...i) => {
      const c = o(...i);
      return s(...i), c;
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...o } : n === "className" && (r[n] = [s, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Vp(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function md(e) {
  const t = e + "CollectionProvider", [r, n] = qt(t), [s, o] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (y) => {
    const { scope: h, children: _ } = y, f = se.useRef(null), b = se.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(s, { scope: h, itemMap: b, collectionRef: f, children: _ });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ _c(i), l = se.forwardRef(
    (y, h) => {
      const { scope: _, children: f } = y, b = o(i, _), w = Ue(h, b.collectionRef);
      return /* @__PURE__ */ d.jsx(c, { ref: w, children: f });
    }
  );
  l.displayName = i;
  const u = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ _c(u), v = se.forwardRef(
    (y, h) => {
      const { scope: _, children: f, ...b } = y, w = se.useRef(null), g = Ue(h, w), S = o(u, _);
      return se.useEffect(() => (S.itemMap.set(w, { ref: w, ...b }), () => void S.itemMap.delete(w))), /* @__PURE__ */ d.jsx(m, { [p]: "", ref: g, children: f });
    }
  );
  v.displayName = u;
  function x(y) {
    const h = o(e + "CollectionConsumer", y);
    return se.useCallback(() => {
      const f = h.collectionRef.current;
      if (!f) return [];
      const b = Array.from(f.querySelectorAll(`[${p}]`));
      return Array.from(h.itemMap.values()).sort(
        (S, E) => b.indexOf(S.ref.current) - b.indexOf(E.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: v },
    x,
    n
  ];
}
var Fp = $.createContext(void 0);
function xi(e) {
  const t = $.useContext(Fp);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function Lp(e) {
  const t = /* @__PURE__ */ zp(e), r = $.forwardRef((n, s) => {
    const { children: o, ...a } = n, i = $.Children.toArray(o), c = i.find(Up);
    if (c) {
      const l = c.props.children, u = i.map((p) => p === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: o });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function zp(e) {
  const t = $.forwardRef((r, n) => {
    const { children: s, ...o } = r;
    if ($.isValidElement(s)) {
      const a = Wp(s), i = Bp(o, s.props);
      return s.type !== $.Fragment && (i.ref = n ? an(n, a) : a), $.cloneElement(s, i);
    }
    return $.Children.count(s) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qp = Symbol("radix.slottable");
function Up(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qp;
}
function Bp(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? s && o ? r[n] = (...i) => {
      const c = o(...i);
      return s(...i), c;
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...o } : n === "className" && (r[n] = [s, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Wp(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Hp = [
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
  "ul"
], De = Hp.reduce((e, t) => {
  const r = /* @__PURE__ */ Lp(`Primitive.${t}`), n = $.forwardRef((s, o) => {
    const { asChild: a, ...i } = s, c = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Gp(e, t) {
  e && $o.flushSync(() => e.dispatchEvent(t));
}
function fr(e) {
  const t = $.useRef(e);
  return $.useEffect(() => {
    t.current = e;
  }), $.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Kp(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = fr(e);
  $.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Zp = "DismissableLayer", Ba = "dismissableLayer.update", Yp = "dismissableLayer.pointerDownOutside", Jp = "dismissableLayer.focusOutside", xc, hd = $.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), jo = $.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: s,
      onFocusOutside: o,
      onInteractOutside: a,
      onDismiss: i,
      ...c
    } = e, l = $.useContext(hd), [u, p] = $.useState(null), m = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = $.useState({}), x = Ue(t, (E) => p(E)), y = Array.from(l.layers), [h] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), _ = y.indexOf(h), f = u ? y.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, w = f >= _, g = eg((E) => {
      const k = E.target, I = [...l.branches].some((z) => z.contains(k));
      !w || I || (s == null || s(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, m), S = tg((E) => {
      const k = E.target;
      [...l.branches].some((z) => z.contains(k)) || (o == null || o(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, m);
    return Kp((E) => {
      f === l.layers.size - 1 && (n == null || n(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
    }, m), $.useEffect(() => {
      if (u)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (xc = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), wc(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = xc);
        };
    }, [u, m, r, l]), $.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), wc());
    }, [u, l]), $.useEffect(() => {
      const E = () => v({});
      return document.addEventListener(Ba, E), () => document.removeEventListener(Ba, E);
    }, []), /* @__PURE__ */ d.jsx(
      De.div,
      {
        ...c,
        ref: x,
        style: {
          pointerEvents: b ? w ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Se(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: Se(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: Se(
          e.onPointerDownCapture,
          g.onPointerDownCapture
        )
      }
    );
  }
);
jo.displayName = Zp;
var Xp = "DismissableLayerBranch", Qp = $.forwardRef((e, t) => {
  const r = $.useContext(hd), n = $.useRef(null), s = Ue(t, n);
  return $.useEffect(() => {
    const o = n.current;
    if (o)
      return r.branches.add(o), () => {
        r.branches.delete(o);
      };
  }, [r.branches]), /* @__PURE__ */ d.jsx(De.div, { ...e, ref: s });
});
Qp.displayName = Xp;
function eg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = fr(e), n = $.useRef(!1), s = $.useRef(() => {
  });
  return $.useEffect(() => {
    const o = (i) => {
      if (i.target && !n.current) {
        let c = function() {
          pd(
            Yp,
            r,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = c, t.addEventListener("click", s.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", s.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", o), t.removeEventListener("click", s.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function tg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = fr(e), n = $.useRef(!1);
  return $.useEffect(() => {
    const s = (o) => {
      o.target && !n.current && pd(Jp, r, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function wc() {
  const e = new CustomEvent(Ba);
  document.dispatchEvent(e);
}
function pd(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && s.addEventListener(e, t, { once: !0 }), n ? Gp(s, o) : s.dispatchEvent(o);
}
var ua = 0;
function gd() {
  $.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Sc()), document.body.insertAdjacentElement("beforeend", e[1] ?? Sc()), ua++, () => {
      ua === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ua--;
    };
  }, []);
}
function Sc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var da = "focusScope.autoFocusOnMount", fa = "focusScope.autoFocusOnUnmount", $c = { bubbles: !1, cancelable: !0 }, rg = "FocusScope", wi = $.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: o,
    ...a
  } = e, [i, c] = $.useState(null), l = fr(s), u = fr(o), p = $.useRef(null), m = Ue(t, (y) => c(y)), v = $.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  $.useEffect(() => {
    if (n) {
      let y = function(b) {
        if (v.paused || !i) return;
        const w = b.target;
        i.contains(w) ? p.current = w : or(p.current, { select: !0 });
      }, h = function(b) {
        if (v.paused || !i) return;
        const w = b.relatedTarget;
        w !== null && (i.contains(w) || or(p.current, { select: !0 }));
      }, _ = function(b) {
        if (document.activeElement === document.body)
          for (const g of b)
            g.removedNodes.length > 0 && or(i);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", h);
      const f = new MutationObserver(_);
      return i && f.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", h), f.disconnect();
      };
    }
  }, [n, i, v.paused]), $.useEffect(() => {
    if (i) {
      Cc.add(v);
      const y = document.activeElement;
      if (!i.contains(y)) {
        const _ = new CustomEvent(da, $c);
        i.addEventListener(da, l), i.dispatchEvent(_), _.defaultPrevented || (ng(cg(vd(i)), { select: !0 }), document.activeElement === y && or(i));
      }
      return () => {
        i.removeEventListener(da, l), setTimeout(() => {
          const _ = new CustomEvent(fa, $c);
          i.addEventListener(fa, u), i.dispatchEvent(_), _.defaultPrevented || or(y ?? document.body, { select: !0 }), i.removeEventListener(fa, u), Cc.remove(v);
        }, 0);
      };
    }
  }, [i, l, u, v]);
  const x = $.useCallback(
    (y) => {
      if (!r && !n || v.paused) return;
      const h = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, _ = document.activeElement;
      if (h && _) {
        const f = y.currentTarget, [b, w] = sg(f);
        b && w ? !y.shiftKey && _ === w ? (y.preventDefault(), r && or(b, { select: !0 })) : y.shiftKey && _ === b && (y.preventDefault(), r && or(w, { select: !0 })) : _ === f && y.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ d.jsx(De.div, { tabIndex: -1, ...a, ref: m, onKeyDown: x });
});
wi.displayName = rg;
function ng(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (or(n, { select: t }), document.activeElement !== r) return;
}
function sg(e) {
  const t = vd(e), r = Ec(t, e), n = Ec(t.reverse(), e);
  return [r, n];
}
function vd(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const s = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Ec(e, t) {
  for (const r of e)
    if (!og(r, { upTo: t })) return r;
}
function og(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ag(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function or(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && ag(e) && t && e.select();
  }
}
var Cc = ig();
function ig() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = kc(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = kc(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function kc(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function cg(e) {
  return e.filter((t) => t.tagName !== "A");
}
var it = globalThis != null && globalThis.document ? $.useLayoutEffect : () => {
}, lg = $[" useId ".trim().toString()] || (() => {
}), ug = 0;
function cr(e) {
  const [t, r] = $.useState(lg());
  return it(() => {
    r((n) => n ?? String(ug++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const dg = ["top", "right", "bottom", "left"], mr = Math.min, yt = Math.max, oo = Math.round, Wn = Math.floor, Mt = (e) => ({
  x: e,
  y: e
}), fg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mg = {
  start: "end",
  end: "start"
};
function Wa(e, t, r) {
  return yt(e, mr(t, r));
}
function Jt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xt(e) {
  return e.split("-")[0];
}
function cn(e) {
  return e.split("-")[1];
}
function Si(e) {
  return e === "x" ? "y" : "x";
}
function $i(e) {
  return e === "y" ? "height" : "width";
}
const hg = /* @__PURE__ */ new Set(["top", "bottom"]);
function Dt(e) {
  return hg.has(Xt(e)) ? "y" : "x";
}
function Ei(e) {
  return Si(Dt(e));
}
function pg(e, t, r) {
  r === void 0 && (r = !1);
  const n = cn(e), s = Ei(e), o = $i(s);
  let a = s === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (a = ao(a)), [a, ao(a)];
}
function gg(e) {
  const t = ao(e);
  return [Ha(e), t, Ha(t)];
}
function Ha(e) {
  return e.replace(/start|end/g, (t) => mg[t]);
}
const jc = ["left", "right"], Rc = ["right", "left"], vg = ["top", "bottom"], yg = ["bottom", "top"];
function bg(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? Rc : jc : t ? jc : Rc;
    case "left":
    case "right":
      return t ? vg : yg;
    default:
      return [];
  }
}
function _g(e, t, r, n) {
  const s = cn(e);
  let o = bg(Xt(e), r === "start", n);
  return s && (o = o.map((a) => a + "-" + s), t && (o = o.concat(o.map(Ha)))), o;
}
function ao(e) {
  return e.replace(/left|right|bottom|top/g, (t) => fg[t]);
}
function xg(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function yd(e) {
  return typeof e != "number" ? xg(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function io(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: s
  } = e;
  return {
    width: n,
    height: s,
    top: r,
    left: t,
    right: t + n,
    bottom: r + s,
    x: t,
    y: r
  };
}
function Pc(e, t, r) {
  let {
    reference: n,
    floating: s
  } = e;
  const o = Dt(t), a = Ei(t), i = $i(a), c = Xt(t), l = o === "y", u = n.x + n.width / 2 - s.width / 2, p = n.y + n.height / 2 - s.height / 2, m = n[i] / 2 - s[i] / 2;
  let v;
  switch (c) {
    case "top":
      v = {
        x: u,
        y: n.y - s.height
      };
      break;
    case "bottom":
      v = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      v = {
        x: n.x - s.width,
        y: p
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (cn(t)) {
    case "start":
      v[a] -= m * (r && l ? -1 : 1);
      break;
    case "end":
      v[a] += m * (r && l ? -1 : 1);
      break;
  }
  return v;
}
const wg = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: s = "absolute",
    middleware: o = [],
    platform: a
  } = r, i = o.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let l = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: u,
    y: p
  } = Pc(l, n, c), m = n, v = {}, x = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: h,
      fn: _
    } = i[y], {
      x: f,
      y: b,
      data: w,
      reset: g
    } = await _({
      x: u,
      y: p,
      initialPlacement: n,
      placement: m,
      strategy: s,
      middlewareData: v,
      rects: l,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = f ?? u, p = b ?? p, v = {
      ...v,
      [h]: {
        ...v[h],
        ...w
      }
    }, g && x <= 50 && (x++, typeof g == "object" && (g.placement && (m = g.placement), g.rects && (l = g.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : g.rects), {
      x: u,
      y: p
    } = Pc(l, m, c)), y = -1);
  }
  return {
    x: u,
    y: p,
    placement: m,
    strategy: s,
    middlewareData: v
  };
};
async function Pn(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: s,
    platform: o,
    rects: a,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: v = 0
  } = Jt(t, e), x = yd(v), h = i[m ? p === "floating" ? "reference" : "floating" : p], _ = io(await o.getClippingRect({
    element: (r = await (o.isElement == null ? void 0 : o.isElement(h))) == null || r ? h : h.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), f = p === "floating" ? {
    x: n,
    y: s,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), w = await (o.isElement == null ? void 0 : o.isElement(b)) ? await (o.getScale == null ? void 0 : o.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, g = io(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: f,
    offsetParent: b,
    strategy: c
  }) : f);
  return {
    top: (_.top - g.top + x.top) / w.y,
    bottom: (g.bottom - _.bottom + x.bottom) / w.y,
    left: (_.left - g.left + x.left) / w.x,
    right: (g.right - _.right + x.right) / w.x
  };
}
const Sg = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: s,
      rects: o,
      platform: a,
      elements: i,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Jt(e, t) || {};
    if (l == null)
      return {};
    const p = yd(u), m = {
      x: r,
      y: n
    }, v = Ei(s), x = $i(v), y = await a.getDimensions(l), h = v === "y", _ = h ? "top" : "left", f = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", w = o.reference[x] + o.reference[v] - m[v] - o.floating[x], g = m[v] - o.reference[v], S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let E = S ? S[b] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(S))) && (E = i.floating[b] || o.floating[x]);
    const k = w / 2 - g / 2, I = E / 2 - y[x] / 2 - 1, z = mr(p[_], I), M = mr(p[f], I), V = z, F = E - y[x] - M, W = E / 2 - y[x] / 2 + k, te = Wa(V, W, F), Z = !c.arrow && cn(s) != null && W !== te && o.reference[x] / 2 - (W < V ? z : M) - y[x] / 2 < 0, ae = Z ? W < V ? W - V : W - F : 0;
    return {
      [v]: m[v] + ae,
      data: {
        [v]: te,
        centerOffset: W - te - ae,
        ...Z && {
          alignmentOffset: ae
        }
      },
      reset: Z
    };
  }
}), $g = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: s,
        middlewareData: o,
        rects: a,
        initialPlacement: i,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: y = !0,
        ...h
      } = Jt(e, t);
      if ((r = o.arrow) != null && r.alignmentOffset)
        return {};
      const _ = Xt(s), f = Dt(i), b = Xt(i) === i, w = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), g = m || (b || !y ? [ao(i)] : gg(i)), S = x !== "none";
      !m && S && g.push(..._g(i, y, x, w));
      const E = [i, ...g], k = await Pn(t, h), I = [];
      let z = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (u && I.push(k[_]), p) {
        const W = pg(s, a, w);
        I.push(k[W[0]], k[W[1]]);
      }
      if (z = [...z, {
        placement: s,
        overflows: I
      }], !I.every((W) => W <= 0)) {
        var M, V;
        const W = (((M = o.flip) == null ? void 0 : M.index) || 0) + 1, te = E[W];
        if (te && (!(p === "alignment" ? f !== Dt(te) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((L) => Dt(L.placement) === f ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: W,
              overflows: z
            },
            reset: {
              placement: te
            }
          };
        let Z = (V = z.filter((ae) => ae.overflows[0] <= 0).sort((ae, L) => ae.overflows[1] - L.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!Z)
          switch (v) {
            case "bestFit": {
              var F;
              const ae = (F = z.filter((L) => {
                if (S) {
                  const ve = Dt(L.placement);
                  return ve === f || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ve === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((ve) => ve > 0).reduce((ve, G) => ve + G, 0)]).sort((L, ve) => L[1] - ve[1])[0]) == null ? void 0 : F[0];
              ae && (Z = ae);
              break;
            }
            case "initialPlacement":
              Z = i;
              break;
          }
        if (s !== Z)
          return {
            reset: {
              placement: Z
            }
          };
      }
      return {};
    }
  };
};
function Nc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ac(e) {
  return dg.some((t) => e[t] >= 0);
}
const Eg = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...s
      } = Jt(e, t);
      switch (n) {
        case "referenceHidden": {
          const o = await Pn(t, {
            ...s,
            elementContext: "reference"
          }), a = Nc(o, r.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Ac(a)
            }
          };
        }
        case "escaped": {
          const o = await Pn(t, {
            ...s,
            altBoundary: !0
          }), a = Nc(o, r.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Ac(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, bd = /* @__PURE__ */ new Set(["left", "top"]);
async function Cg(e, t) {
  const {
    placement: r,
    platform: n,
    elements: s
  } = e, o = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)), a = Xt(r), i = cn(r), c = Dt(r) === "y", l = bd.has(a) ? -1 : 1, u = o && c ? -1 : 1, p = Jt(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
    alignmentAxis: x
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof x == "number" && (v = i === "end" ? x * -1 : x), c ? {
    x: v * u,
    y: m * l
  } : {
    x: m * l,
    y: v * u
  };
}
const kg = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: s,
        y: o,
        placement: a,
        middlewareData: i
      } = t, c = await Cg(t, e);
      return a === ((r = i.offset) == null ? void 0 : r.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: s + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, jg = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: s
      } = t, {
        mainAxis: o = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (h) => {
            let {
              x: _,
              y: f
            } = h;
            return {
              x: _,
              y: f
            };
          }
        },
        ...c
      } = Jt(e, t), l = {
        x: r,
        y: n
      }, u = await Pn(t, c), p = Dt(Xt(s)), m = Si(p);
      let v = l[m], x = l[p];
      if (o) {
        const h = m === "y" ? "top" : "left", _ = m === "y" ? "bottom" : "right", f = v + u[h], b = v - u[_];
        v = Wa(f, v, b);
      }
      if (a) {
        const h = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", f = x + u[h], b = x - u[_];
        x = Wa(f, x, b);
      }
      const y = i.fn({
        ...t,
        [m]: v,
        [p]: x
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - n,
          enabled: {
            [m]: o,
            [p]: a
          }
        }
      };
    }
  };
}, Rg = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: s,
        rects: o,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Jt(e, t), u = {
        x: r,
        y: n
      }, p = Dt(s), m = Si(p);
      let v = u[m], x = u[p];
      const y = Jt(i, t), h = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (c) {
        const b = m === "y" ? "height" : "width", w = o.reference[m] - o.floating[b] + h.mainAxis, g = o.reference[m] + o.reference[b] - h.mainAxis;
        v < w ? v = w : v > g && (v = g);
      }
      if (l) {
        var _, f;
        const b = m === "y" ? "width" : "height", w = bd.has(Xt(s)), g = o.reference[p] - o.floating[b] + (w && ((_ = a.offset) == null ? void 0 : _[p]) || 0) + (w ? 0 : h.crossAxis), S = o.reference[p] + o.reference[b] + (w ? 0 : ((f = a.offset) == null ? void 0 : f[p]) || 0) - (w ? h.crossAxis : 0);
        x < g ? x = g : x > S && (x = S);
      }
      return {
        [m]: v,
        [p]: x
      };
    }
  };
}, Pg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: s,
        rects: o,
        platform: a,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...l
      } = Jt(e, t), u = await Pn(t, l), p = Xt(s), m = cn(s), v = Dt(s) === "y", {
        width: x,
        height: y
      } = o.floating;
      let h, _;
      p === "top" || p === "bottom" ? (h = p, _ = m === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (_ = p, h = m === "end" ? "top" : "bottom");
      const f = y - u.top - u.bottom, b = x - u.left - u.right, w = mr(y - u[h], f), g = mr(x - u[_], b), S = !t.middlewareData.shift;
      let E = w, k = g;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (k = b), (n = t.middlewareData.shift) != null && n.enabled.y && (E = f), S && !m) {
        const z = yt(u.left, 0), M = yt(u.right, 0), V = yt(u.top, 0), F = yt(u.bottom, 0);
        v ? k = x - 2 * (z !== 0 || M !== 0 ? z + M : yt(u.left, u.right)) : E = y - 2 * (V !== 0 || F !== 0 ? V + F : yt(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: k,
        availableHeight: E
      });
      const I = await a.getDimensions(i.floating);
      return x !== I.width || y !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ro() {
  return typeof window < "u";
}
function ln(e) {
  return _d(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function _t(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ut(e) {
  var t;
  return (t = (_d(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _d(e) {
  return Ro() ? e instanceof Node || e instanceof _t(e).Node : !1;
}
function Rt(e) {
  return Ro() ? e instanceof Element || e instanceof _t(e).Element : !1;
}
function Ft(e) {
  return Ro() ? e instanceof HTMLElement || e instanceof _t(e).HTMLElement : !1;
}
function Tc(e) {
  return !Ro() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof _t(e).ShadowRoot;
}
const Ng = /* @__PURE__ */ new Set(["inline", "contents"]);
function Mn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: s
  } = Pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !Ng.has(s);
}
const Ag = /* @__PURE__ */ new Set(["table", "td", "th"]);
function Tg(e) {
  return Ag.has(ln(e));
}
const Og = [":popover-open", ":modal"];
function Po(e) {
  return Og.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Ig = ["transform", "translate", "scale", "rotate", "perspective"], Dg = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Mg = ["paint", "layout", "strict", "content"];
function Ci(e) {
  const t = ki(), r = Rt(e) ? Pt(e) : e;
  return Ig.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || Dg.some((n) => (r.willChange || "").includes(n)) || Mg.some((n) => (r.contain || "").includes(n));
}
function Vg(e) {
  let t = hr(e);
  for (; Ft(t) && !Qr(t); ) {
    if (Ci(t))
      return t;
    if (Po(t))
      return null;
    t = hr(t);
  }
  return null;
}
function ki() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Fg = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Qr(e) {
  return Fg.has(ln(e));
}
function Pt(e) {
  return _t(e).getComputedStyle(e);
}
function No(e) {
  return Rt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function hr(e) {
  if (ln(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tc(e) && e.host || // Fallback.
    Ut(e)
  );
  return Tc(t) ? t.host : t;
}
function xd(e) {
  const t = hr(e);
  return Qr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ft(t) && Mn(t) ? t : xd(t);
}
function Nn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const s = xd(e), o = s === ((n = e.ownerDocument) == null ? void 0 : n.body), a = _t(s);
  if (o) {
    const i = Ga(a);
    return t.concat(a, a.visualViewport || [], Mn(s) ? s : [], i && r ? Nn(i) : []);
  }
  return t.concat(s, Nn(s, [], r));
}
function Ga(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function wd(e) {
  const t = Pt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const s = Ft(e), o = s ? e.offsetWidth : r, a = s ? e.offsetHeight : n, i = oo(r) !== o || oo(n) !== a;
  return i && (r = o, n = a), {
    width: r,
    height: n,
    $: i
  };
}
function ji(e) {
  return Rt(e) ? e : e.contextElement;
}
function Yr(e) {
  const t = ji(e);
  if (!Ft(t))
    return Mt(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: s,
    $: o
  } = wd(t);
  let a = (o ? oo(r.width) : r.width) / n, i = (o ? oo(r.height) : r.height) / s;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const Lg = /* @__PURE__ */ Mt(0);
function Sd(e) {
  const t = _t(e);
  return !ki() || !t.visualViewport ? Lg : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function zg(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== _t(e) ? !1 : t;
}
function Er(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const s = e.getBoundingClientRect(), o = ji(e);
  let a = Mt(1);
  t && (n ? Rt(n) && (a = Yr(n)) : a = Yr(e));
  const i = zg(o, r, n) ? Sd(o) : Mt(0);
  let c = (s.left + i.x) / a.x, l = (s.top + i.y) / a.y, u = s.width / a.x, p = s.height / a.y;
  if (o) {
    const m = _t(o), v = n && Rt(n) ? _t(n) : n;
    let x = m, y = Ga(x);
    for (; y && n && v !== x; ) {
      const h = Yr(y), _ = y.getBoundingClientRect(), f = Pt(y), b = _.left + (y.clientLeft + parseFloat(f.paddingLeft)) * h.x, w = _.top + (y.clientTop + parseFloat(f.paddingTop)) * h.y;
      c *= h.x, l *= h.y, u *= h.x, p *= h.y, c += b, l += w, x = _t(y), y = Ga(x);
    }
  }
  return io({
    width: u,
    height: p,
    x: c,
    y: l
  });
}
function Ao(e, t) {
  const r = No(e).scrollLeft;
  return t ? t.left + r : Er(Ut(e)).left + r;
}
function $d(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - Ao(e, r), s = r.top + t.scrollTop;
  return {
    x: n,
    y: s
  };
}
function qg(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: s
  } = e;
  const o = s === "fixed", a = Ut(n), i = t ? Po(t.floating) : !1;
  if (n === a || i && o)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Mt(1);
  const u = Mt(0), p = Ft(n);
  if ((p || !p && !o) && ((ln(n) !== "body" || Mn(a)) && (c = No(n)), Ft(n))) {
    const v = Er(n);
    l = Yr(n), u.x = v.x + n.clientLeft, u.y = v.y + n.clientTop;
  }
  const m = a && !p && !o ? $d(a, c) : Mt(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + u.x + m.x,
    y: r.y * l.y - c.scrollTop * l.y + u.y + m.y
  };
}
function Ug(e) {
  return Array.from(e.getClientRects());
}
function Bg(e) {
  const t = Ut(e), r = No(e), n = e.ownerDocument.body, s = yt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = yt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + Ao(e);
  const i = -r.scrollTop;
  return Pt(n).direction === "rtl" && (a += yt(t.clientWidth, n.clientWidth) - s), {
    width: s,
    height: o,
    x: a,
    y: i
  };
}
const Oc = 25;
function Wg(e, t) {
  const r = _t(e), n = Ut(e), s = r.visualViewport;
  let o = n.clientWidth, a = n.clientHeight, i = 0, c = 0;
  if (s) {
    o = s.width, a = s.height;
    const u = ki();
    (!u || u && t === "fixed") && (i = s.offsetLeft, c = s.offsetTop);
  }
  const l = Ao(n);
  if (l <= 0) {
    const u = n.ownerDocument, p = u.body, m = getComputedStyle(p), v = u.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, x = Math.abs(n.clientWidth - p.clientWidth - v);
    x <= Oc && (o -= x);
  } else l <= Oc && (o += l);
  return {
    width: o,
    height: a,
    x: i,
    y: c
  };
}
const Hg = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Gg(e, t) {
  const r = Er(e, !0, t === "fixed"), n = r.top + e.clientTop, s = r.left + e.clientLeft, o = Ft(e) ? Yr(e) : Mt(1), a = e.clientWidth * o.x, i = e.clientHeight * o.y, c = s * o.x, l = n * o.y;
  return {
    width: a,
    height: i,
    x: c,
    y: l
  };
}
function Ic(e, t, r) {
  let n;
  if (t === "viewport")
    n = Wg(e, r);
  else if (t === "document")
    n = Bg(Ut(e));
  else if (Rt(t))
    n = Gg(t, r);
  else {
    const s = Sd(e);
    n = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return io(n);
}
function Ed(e, t) {
  const r = hr(e);
  return r === t || !Rt(r) || Qr(r) ? !1 : Pt(r).position === "fixed" || Ed(r, t);
}
function Kg(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = Nn(e, [], !1).filter((i) => Rt(i) && ln(i) !== "body"), s = null;
  const o = Pt(e).position === "fixed";
  let a = o ? hr(e) : e;
  for (; Rt(a) && !Qr(a); ) {
    const i = Pt(a), c = Ci(a);
    !c && i.position === "fixed" && (s = null), (o ? !c && !s : !c && i.position === "static" && !!s && Hg.has(s.position) || Mn(a) && !c && Ed(e, a)) ? n = n.filter((u) => u !== a) : s = i, a = hr(a);
  }
  return t.set(e, n), n;
}
function Zg(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: s
  } = e;
  const a = [...r === "clippingAncestors" ? Po(t) ? [] : Kg(t, this._c) : [].concat(r), n], i = a[0], c = a.reduce((l, u) => {
    const p = Ic(t, u, s);
    return l.top = yt(p.top, l.top), l.right = mr(p.right, l.right), l.bottom = mr(p.bottom, l.bottom), l.left = yt(p.left, l.left), l;
  }, Ic(t, i, s));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Yg(e) {
  const {
    width: t,
    height: r
  } = wd(e);
  return {
    width: t,
    height: r
  };
}
function Jg(e, t, r) {
  const n = Ft(t), s = Ut(t), o = r === "fixed", a = Er(e, !0, o, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Mt(0);
  function l() {
    c.x = Ao(s);
  }
  if (n || !n && !o)
    if ((ln(t) !== "body" || Mn(s)) && (i = No(t)), n) {
      const v = Er(t, !0, o, t);
      c.x = v.x + t.clientLeft, c.y = v.y + t.clientTop;
    } else s && l();
  o && !n && s && l();
  const u = s && !n && !o ? $d(s, i) : Mt(0), p = a.left + i.scrollLeft - c.x - u.x, m = a.top + i.scrollTop - c.y - u.y;
  return {
    x: p,
    y: m,
    width: a.width,
    height: a.height
  };
}
function ma(e) {
  return Pt(e).position === "static";
}
function Dc(e, t) {
  if (!Ft(e) || Pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Ut(e) === r && (r = r.ownerDocument.body), r;
}
function Cd(e, t) {
  const r = _t(e);
  if (Po(e))
    return r;
  if (!Ft(e)) {
    let s = hr(e);
    for (; s && !Qr(s); ) {
      if (Rt(s) && !ma(s))
        return s;
      s = hr(s);
    }
    return r;
  }
  let n = Dc(e, t);
  for (; n && Tg(n) && ma(n); )
    n = Dc(n, t);
  return n && Qr(n) && ma(n) && !Ci(n) ? r : n || Vg(e) || r;
}
const Xg = async function(e) {
  const t = this.getOffsetParent || Cd, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Jg(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Qg(e) {
  return Pt(e).direction === "rtl";
}
const ev = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qg,
  getDocumentElement: Ut,
  getClippingRect: Zg,
  getOffsetParent: Cd,
  getElementRects: Xg,
  getClientRects: Ug,
  getDimensions: Yg,
  getScale: Yr,
  isElement: Rt,
  isRTL: Qg
};
function kd(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function tv(e, t) {
  let r = null, n;
  const s = Ut(e);
  function o() {
    var i;
    clearTimeout(n), (i = r) == null || i.disconnect(), r = null;
  }
  function a(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), o();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: p,
      width: m,
      height: v
    } = l;
    if (i || t(), !m || !v)
      return;
    const x = Wn(p), y = Wn(s.clientWidth - (u + m)), h = Wn(s.clientHeight - (p + v)), _ = Wn(u), b = {
      rootMargin: -x + "px " + -y + "px " + -h + "px " + -_ + "px",
      threshold: yt(0, mr(1, c)) || 1
    };
    let w = !0;
    function g(S) {
      const E = S[0].intersectionRatio;
      if (E !== c) {
        if (!w)
          return a();
        E ? a(!1, E) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !kd(l, e.getBoundingClientRect()) && a(), w = !1;
    }
    try {
      r = new IntersectionObserver(g, {
        ...b,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(g, b);
    }
    r.observe(e);
  }
  return a(!0), o;
}
function rv(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = ji(e), u = s || o ? [...l ? Nn(l) : [], ...Nn(t)] : [];
  u.forEach((_) => {
    s && _.addEventListener("scroll", r, {
      passive: !0
    }), o && _.addEventListener("resize", r);
  });
  const p = l && i ? tv(l, r) : null;
  let m = -1, v = null;
  a && (v = new ResizeObserver((_) => {
    let [f] = _;
    f && f.target === l && v && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var b;
      (b = v) == null || b.observe(t);
    })), r();
  }), l && !c && v.observe(l), v.observe(t));
  let x, y = c ? Er(e) : null;
  c && h();
  function h() {
    const _ = Er(e);
    y && !kd(y, _) && r(), y = _, x = requestAnimationFrame(h);
  }
  return r(), () => {
    var _;
    u.forEach((f) => {
      s && f.removeEventListener("scroll", r), o && f.removeEventListener("resize", r);
    }), p == null || p(), (_ = v) == null || _.disconnect(), v = null, c && cancelAnimationFrame(x);
  };
}
const nv = kg, sv = jg, ov = $g, av = Pg, iv = Eg, Mc = Sg, cv = Rg, lv = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), s = {
    platform: ev,
    ...r
  }, o = {
    ...s.platform,
    _c: n
  };
  return wg(e, t, {
    ...s,
    platform: o
  });
};
var uv = typeof document < "u", dv = function() {
}, Qs = uv ? np : dv;
function co(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!co(e[n], t[n]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const o = s[n];
      if (!(o === "_owner" && e.$$typeof) && !co(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function jd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Vc(e, t) {
  const r = jd(e);
  return Math.round(t * r) / r;
}
function ha(e) {
  const t = $.useRef(e);
  return Qs(() => {
    t.current = e;
  }), t;
}
function fv(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: s,
    elements: {
      reference: o,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, p] = $.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, v] = $.useState(n);
  co(m, n) || v(n);
  const [x, y] = $.useState(null), [h, _] = $.useState(null), f = $.useCallback((L) => {
    L !== S.current && (S.current = L, y(L));
  }, []), b = $.useCallback((L) => {
    L !== E.current && (E.current = L, _(L));
  }, []), w = o || x, g = a || h, S = $.useRef(null), E = $.useRef(null), k = $.useRef(u), I = c != null, z = ha(c), M = ha(s), V = ha(l), F = $.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const L = {
      placement: t,
      strategy: r,
      middleware: m
    };
    M.current && (L.platform = M.current), lv(S.current, E.current, L).then((ve) => {
      const G = {
        ...ve,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      W.current && !co(k.current, G) && (k.current = G, $o.flushSync(() => {
        p(G);
      }));
    });
  }, [m, t, r, M, V]);
  Qs(() => {
    l === !1 && k.current.isPositioned && (k.current.isPositioned = !1, p((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [l]);
  const W = $.useRef(!1);
  Qs(() => (W.current = !0, () => {
    W.current = !1;
  }), []), Qs(() => {
    if (w && (S.current = w), g && (E.current = g), w && g) {
      if (z.current)
        return z.current(w, g, F);
      F();
    }
  }, [w, g, F, z, I]);
  const te = $.useMemo(() => ({
    reference: S,
    floating: E,
    setReference: f,
    setFloating: b
  }), [f, b]), Z = $.useMemo(() => ({
    reference: w,
    floating: g
  }), [w, g]), ae = $.useMemo(() => {
    const L = {
      position: r,
      left: 0,
      top: 0
    };
    if (!Z.floating)
      return L;
    const ve = Vc(Z.floating, u.x), G = Vc(Z.floating, u.y);
    return i ? {
      ...L,
      transform: "translate(" + ve + "px, " + G + "px)",
      ...jd(Z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: ve,
      top: G
    };
  }, [r, i, Z.floating, u.x, u.y]);
  return $.useMemo(() => ({
    ...u,
    update: F,
    refs: te,
    elements: Z,
    floatingStyles: ae
  }), [u, F, te, Z, ae]);
}
const mv = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: s
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? Mc({
        element: n.current,
        padding: s
      }).fn(r) : {} : n ? Mc({
        element: n,
        padding: s
      }).fn(r) : {};
    }
  };
}, hv = (e, t) => ({
  ...nv(e),
  options: [e, t]
}), pv = (e, t) => ({
  ...sv(e),
  options: [e, t]
}), gv = (e, t) => ({
  ...cv(e),
  options: [e, t]
}), vv = (e, t) => ({
  ...ov(e),
  options: [e, t]
}), yv = (e, t) => ({
  ...av(e),
  options: [e, t]
}), bv = (e, t) => ({
  ...iv(e),
  options: [e, t]
}), _v = (e, t) => ({
  ...mv(e),
  options: [e, t]
});
var xv = "Arrow", Rd = $.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: s = 5, ...o } = e;
  return /* @__PURE__ */ d.jsx(
    De.svg,
    {
      ...o,
      ref: t,
      width: n,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Rd.displayName = xv;
var wv = Rd;
function Ri(e) {
  const [t, r] = $.useState(void 0);
  return it(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const o = s[0];
        let a, i;
        if ("borderBoxSize" in o) {
          const c = o.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          a = l.inlineSize, i = l.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        r({ width: a, height: i });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var Pi = "Popper", [Pd, To] = qt(Pi), [Sv, Nd] = Pd(Pi), Ad = (e) => {
  const { __scopePopper: t, children: r } = e, [n, s] = $.useState(null);
  return /* @__PURE__ */ d.jsx(Sv, { scope: t, anchor: n, onAnchorChange: s, children: r });
};
Ad.displayName = Pi;
var Td = "PopperAnchor", Od = $.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...s } = e, o = Nd(Td, r), a = $.useRef(null), i = Ue(t, a), c = $.useRef(null);
    return $.useEffect(() => {
      const l = c.current;
      c.current = (n == null ? void 0 : n.current) || a.current, l !== c.current && o.onAnchorChange(c.current);
    }), n ? null : /* @__PURE__ */ d.jsx(De.div, { ...s, ref: i });
  }
);
Od.displayName = Td;
var Ni = "PopperContent", [$v, Ev] = Pd(Ni), Id = $.forwardRef(
  (e, t) => {
    var B, X, pe, ie, N, A;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: s = 0,
      align: o = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: x,
      ...y
    } = e, h = Nd(Ni, r), [_, f] = $.useState(null), b = Ue(t, (H) => f(H)), [w, g] = $.useState(null), S = Ri(w), E = (S == null ? void 0 : S.width) ?? 0, k = (S == null ? void 0 : S.height) ?? 0, I = n + (o !== "center" ? "-" + o : ""), z = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, M = Array.isArray(l) ? l : [l], V = M.length > 0, F = {
      padding: z,
      boundary: M.filter(kv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: W, floatingStyles: te, placement: Z, isPositioned: ae, middlewareData: L } = fv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...H) => rv(...H, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: h.anchor
      },
      middleware: [
        hv({ mainAxis: s + k, alignmentAxis: a }),
        c && pv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? gv() : void 0,
          ...F
        }),
        c && vv({ ...F }),
        yv({
          ...F,
          apply: ({ elements: H, rects: Y, availableWidth: ce, availableHeight: ye }) => {
            const { width: He, height: st } = Y.reference, Ge = H.floating.style;
            Ge.setProperty("--radix-popper-available-width", `${ce}px`), Ge.setProperty("--radix-popper-available-height", `${ye}px`), Ge.setProperty("--radix-popper-anchor-width", `${He}px`), Ge.setProperty("--radix-popper-anchor-height", `${st}px`);
          }
        }),
        w && _v({ element: w, padding: i }),
        jv({ arrowWidth: E, arrowHeight: k }),
        m && bv({ strategy: "referenceHidden", ...F })
      ]
    }), [ve, G] = Vd(Z), T = fr(x);
    it(() => {
      ae && (T == null || T());
    }, [ae, T]);
    const K = (B = L.arrow) == null ? void 0 : B.x, O = (X = L.arrow) == null ? void 0 : X.y, C = ((pe = L.arrow) == null ? void 0 : pe.centerOffset) !== 0, [R, q] = $.useState();
    return it(() => {
      _ && q(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...te,
          transform: ae ? te.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: R,
          "--radix-popper-transform-origin": [
            (ie = L.transformOrigin) == null ? void 0 : ie.x,
            (N = L.transformOrigin) == null ? void 0 : N.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((A = L.hide) == null ? void 0 : A.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          $v,
          {
            scope: r,
            placedSide: ve,
            onArrowChange: g,
            arrowX: K,
            arrowY: O,
            shouldHideArrow: C,
            children: /* @__PURE__ */ d.jsx(
              De.div,
              {
                "data-side": ve,
                "data-align": G,
                ...y,
                ref: b,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: ae ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Id.displayName = Ni;
var Dd = "PopperArrow", Cv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Md = $.forwardRef(function(t, r) {
  const { __scopePopper: n, ...s } = t, o = Ev(Dd, n), a = Cv[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d.jsx(
      "span",
      {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o.placedSide],
          visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ d.jsx(
          wv,
          {
            ...s,
            ref: r,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Md.displayName = Dd;
function kv(e) {
  return e !== null;
}
var jv = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var h, _, f;
    const { placement: r, rects: n, middlewareData: s } = t, a = ((h = s.arrow) == null ? void 0 : h.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, u] = Vd(r), p = { start: "0%", center: "50%", end: "100%" }[u], m = (((_ = s.arrow) == null ? void 0 : _.x) ?? 0) + i / 2, v = (((f = s.arrow) == null ? void 0 : f.y) ?? 0) + c / 2;
    let x = "", y = "";
    return l === "bottom" ? (x = a ? p : `${m}px`, y = `${-c}px`) : l === "top" ? (x = a ? p : `${m}px`, y = `${n.floating.height + c}px`) : l === "right" ? (x = `${-c}px`, y = a ? p : `${v}px`) : l === "left" && (x = `${n.floating.width + c}px`, y = a ? p : `${v}px`), { data: { x, y } };
  }
});
function Vd(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var Fd = Ad, Ld = Od, zd = Id, qd = Md, Rv = "Portal", Oo = $.forwardRef((e, t) => {
  var i;
  const { container: r, ...n } = e, [s, o] = $.useState(!1);
  it(() => o(!0), []);
  const a = r || s && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? cp.createPortal(/* @__PURE__ */ d.jsx(De.div, { ...n, ref: t }), a) : null;
});
Oo.displayName = Rv;
// @__NO_SIDE_EFFECTS__
function Pv(e) {
  const t = /* @__PURE__ */ Nv(e), r = $.forwardRef((n, s) => {
    const { children: o, ...a } = n, i = $.Children.toArray(o), c = i.find(Tv);
    if (c) {
      const l = c.props.children, u = i.map((p) => p === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: o });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Nv(e) {
  const t = $.forwardRef((r, n) => {
    const { children: s, ...o } = r;
    if ($.isValidElement(s)) {
      const a = Iv(s), i = Ov(o, s.props);
      return s.type !== $.Fragment && (i.ref = n ? an(n, a) : a), $.cloneElement(s, i);
    }
    return $.Children.count(s) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Av = Symbol("radix.slottable");
function Tv(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Av;
}
function Ov(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? s && o ? r[n] = (...i) => {
      const c = o(...i);
      return s(...i), c;
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...o } : n === "className" && (r[n] = [s, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Iv(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Dv = $[" useInsertionEffect ".trim().toString()] || it;
function Cr({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [s, o, a] = Mv({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, c = i ? e : s;
  {
    const u = $.useRef(e !== void 0);
    $.useEffect(() => {
      const p = u.current;
      p !== i && console.warn(
        `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = i;
    }, [i, n]);
  }
  const l = $.useCallback(
    (u) => {
      var p;
      if (i) {
        const m = Vv(u) ? u(e) : u;
        m !== e && ((p = a.current) == null || p.call(a, m));
      } else
        o(u);
    },
    [i, e, o, a]
  );
  return [c, l];
}
function Mv({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = $.useState(e), s = $.useRef(r), o = $.useRef(t);
  return Dv(() => {
    o.current = t;
  }, [t]), $.useEffect(() => {
    var a;
    s.current !== r && ((a = o.current) == null || a.call(o, r), s.current = r);
  }, [r, s]), [r, n, o];
}
function Vv(e) {
  return typeof e == "function";
}
function Ai(e) {
  const t = $.useRef({ value: e, previous: e });
  return $.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ud = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Fv = "VisuallyHidden", Bd = $.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    De.span,
    {
      ...e,
      ref: t,
      style: { ...Ud, ...e.style }
    }
  )
);
Bd.displayName = Fv;
var Lv = Bd, zv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ir = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Gn = {}, pa = 0, Wd = function(e) {
  return e && (e.host || Wd(e.parentNode));
}, qv = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Wd(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Uv = function(e, t, r, n) {
  var s = qv(t, Array.isArray(e) ? e : [e]);
  Gn[r] || (Gn[r] = /* @__PURE__ */ new WeakMap());
  var o = Gn[r], a = [], i = /* @__PURE__ */ new Set(), c = new Set(s), l = function(p) {
    !p || i.has(p) || (i.add(p), l(p.parentNode));
  };
  s.forEach(l);
  var u = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (i.has(m))
        u(m);
      else
        try {
          var v = m.getAttribute(n), x = v !== null && v !== "false", y = (Ir.get(m) || 0) + 1, h = (o.get(m) || 0) + 1;
          Ir.set(m, y), o.set(m, h), a.push(m), y === 1 && x && Hn.set(m, !0), h === 1 && m.setAttribute(r, "true"), x || m.setAttribute(n, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", m, _);
        }
    });
  };
  return u(t), i.clear(), pa++, function() {
    a.forEach(function(p) {
      var m = Ir.get(p) - 1, v = o.get(p) - 1;
      Ir.set(p, m), o.set(p, v), m || (Hn.has(p) || p.removeAttribute(n), Hn.delete(p)), v || p.removeAttribute(r);
    }), pa--, pa || (Ir = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), Gn = {});
  };
}, Hd = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), s = zv(e);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live], script"))), Uv(n, s, r, "aria-hidden")) : function() {
    return null;
  };
}, It = function() {
  return It = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, It.apply(this, arguments);
};
function Gd(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}
function Bv(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, s = t.length, o; n < s; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var eo = "right-scroll-bar-position", to = "width-before-scroll-bar", Wv = "with-scroll-bars-hidden", Hv = "--removed-body-scroll-bar-size";
function ga(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Gv(e, t) {
  var r = Kr(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var s = r.value;
          s !== n && (r.value = n, r.callback(n, s));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Kv = typeof window < "u" ? $.useLayoutEffect : $.useEffect, Fc = /* @__PURE__ */ new WeakMap();
function Zv(e, t) {
  var r = Gv(null, function(n) {
    return e.forEach(function(s) {
      return ga(s, n);
    });
  });
  return Kv(function() {
    var n = Fc.get(r);
    if (n) {
      var s = new Set(n), o = new Set(e), a = r.current;
      s.forEach(function(i) {
        o.has(i) || ga(i, null);
      }), o.forEach(function(i) {
        s.has(i) || ga(i, a);
      });
    }
    Fc.set(r, e);
  }, [e]), r;
}
function Yv(e) {
  return e;
}
function Jv(e, t) {
  t === void 0 && (t = Yv);
  var r = [], n = !1, s = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(o) {
      var a = t(o, n);
      return r.push(a), function() {
        r = r.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(o);
      }
      r = {
        push: function(i) {
          return o(i);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(o) {
      n = !0;
      var a = [];
      if (r.length) {
        var i = r;
        r = [], i.forEach(o), a = r;
      }
      var c = function() {
        var u = a;
        a = [], u.forEach(o);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(u) {
          a.push(u), l();
        },
        filter: function(u) {
          return a = a.filter(u), r;
        }
      };
    }
  };
  return s;
}
function Xv(e) {
  e === void 0 && (e = {});
  var t = Jv(null);
  return t.options = It({ async: !0, ssr: !1 }, e), t;
}
var Kd = function(e) {
  var t = e.sideCar, r = Gd(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return $.createElement(n, It({}, r));
};
Kd.isSideCarExport = !0;
function Qv(e, t) {
  return e.useMedium(t), Kd;
}
var Zd = Xv(), va = function() {
}, Io = $.forwardRef(function(e, t) {
  var r = $.useRef(null), n = $.useState({
    onScrollCapture: va,
    onWheelCapture: va,
    onTouchMoveCapture: va
  }), s = n[0], o = n[1], a = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, p = e.shards, m = e.sideCar, v = e.noRelative, x = e.noIsolation, y = e.inert, h = e.allowPinchZoom, _ = e.as, f = _ === void 0 ? "div" : _, b = e.gapMode, w = Gd(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), g = m, S = Zv([r, t]), E = It(It({}, w), s);
  return $.createElement(
    $.Fragment,
    null,
    u && $.createElement(g, { sideCar: Zd, removeScrollBar: l, shards: p, noRelative: v, noIsolation: x, inert: y, setCallbacks: o, allowPinchZoom: !!h, lockRef: r, gapMode: b }),
    a ? $.cloneElement($.Children.only(i), It(It({}, E), { ref: S })) : $.createElement(f, It({}, E, { className: c, ref: S }), i)
  );
});
Io.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Io.classNames = {
  fullWidth: to,
  zeroRight: eo
};
var ey = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ty() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ey();
  return t && e.setAttribute("nonce", t), e;
}
function ry(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ny(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var sy = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = ty()) && (ry(t, r), ny(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, oy = function() {
  var e = sy();
  return function(t, r) {
    $.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Yd = function() {
  var e = oy(), t = function(r) {
    var n = r.styles, s = r.dynamic;
    return e(n, s), null;
  };
  return t;
}, ay = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ya = function(e) {
  return parseInt(e || "", 10) || 0;
}, iy = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ya(r), ya(n), ya(s)];
}, cy = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ay;
  var t = iy(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, ly = Yd(), Jr = "data-scroll-locked", uy = function(e, t, r, n) {
  var s = e.left, o = e.top, a = e.right, i = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Wv, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(i, "px ").concat(n, `;
  }
  body[`).concat(Jr, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(i, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(eo, ` {
    right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(to, ` {
    margin-right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(eo, " .").concat(eo, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(to, " .").concat(to, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Jr, `] {
    `).concat(Hv, ": ").concat(i, `px;
  }
`);
}, Lc = function() {
  var e = parseInt(document.body.getAttribute(Jr) || "0", 10);
  return isFinite(e) ? e : 0;
}, dy = function() {
  $.useEffect(function() {
    return document.body.setAttribute(Jr, (Lc() + 1).toString()), function() {
      var e = Lc() - 1;
      e <= 0 ? document.body.removeAttribute(Jr) : document.body.setAttribute(Jr, e.toString());
    };
  }, []);
}, fy = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, s = n === void 0 ? "margin" : n;
  dy();
  var o = $.useMemo(function() {
    return cy(s);
  }, [s]);
  return $.createElement(ly, { styles: uy(o, !t, s, r ? "" : "!important") });
}, Ka = !1;
if (typeof window < "u")
  try {
    var Kn = Object.defineProperty({}, "passive", {
      get: function() {
        return Ka = !0, !0;
      }
    });
    window.addEventListener("test", Kn, Kn), window.removeEventListener("test", Kn, Kn);
  } catch {
    Ka = !1;
  }
var Dr = Ka ? { passive: !1 } : !1, my = function(e) {
  return e.tagName === "TEXTAREA";
}, Jd = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !my(e) && r[t] === "visible")
  );
}, hy = function(e) {
  return Jd(e, "overflowY");
}, py = function(e) {
  return Jd(e, "overflowX");
}, zc = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var s = Xd(e, n);
    if (s) {
      var o = Qd(e, n), a = o[1], i = o[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, gy = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, vy = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Xd = function(e, t) {
  return e === "v" ? hy(t) : py(t);
}, Qd = function(e, t) {
  return e === "v" ? gy(t) : vy(t);
}, yy = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, by = function(e, t, r, n, s) {
  var o = yy(e, window.getComputedStyle(t).direction), a = o * n, i = r.target, c = t.contains(i), l = !1, u = a > 0, p = 0, m = 0;
  do {
    if (!i)
      break;
    var v = Qd(e, i), x = v[0], y = v[1], h = v[2], _ = y - h - o * x;
    (x || _) && Xd(e, i) && (p += _, m += x);
    var f = i.parentNode;
    i = f && f.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? f.host : f;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && Math.abs(p) < 1 || !u && Math.abs(m) < 1) && (l = !0), l;
}, Zn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, qc = function(e) {
  return [e.deltaX, e.deltaY];
}, Uc = function(e) {
  return e && "current" in e ? e.current : e;
}, _y = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, xy = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, wy = 0, Mr = [];
function Sy(e) {
  var t = $.useRef([]), r = $.useRef([0, 0]), n = $.useRef(), s = $.useState(wy++)[0], o = $.useState(Yd)[0], a = $.useRef(e);
  $.useEffect(function() {
    a.current = e;
  }, [e]), $.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var y = Bv([e.lockRef.current], (e.shards || []).map(Uc), !0).filter(Boolean);
      return y.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), y.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = $.useCallback(function(y, h) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !a.current.allowPinchZoom;
    var _ = Zn(y), f = r.current, b = "deltaX" in y ? y.deltaX : f[0] - _[0], w = "deltaY" in y ? y.deltaY : f[1] - _[1], g, S = y.target, E = Math.abs(b) > Math.abs(w) ? "h" : "v";
    if ("touches" in y && E === "h" && S.type === "range")
      return !1;
    var k = zc(E, S);
    if (!k)
      return !0;
    if (k ? g = E : (g = E === "v" ? "h" : "v", k = zc(E, S)), !k)
      return !1;
    if (!n.current && "changedTouches" in y && (b || w) && (n.current = g), !g)
      return !0;
    var I = n.current || g;
    return by(I, h, y, I === "h" ? b : w);
  }, []), c = $.useCallback(function(y) {
    var h = y;
    if (!(!Mr.length || Mr[Mr.length - 1] !== o)) {
      var _ = "deltaY" in h ? qc(h) : Zn(h), f = t.current.filter(function(g) {
        return g.name === h.type && (g.target === h.target || h.target === g.shadowParent) && _y(g.delta, _);
      })[0];
      if (f && f.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!f) {
        var b = (a.current.shards || []).map(Uc).filter(Boolean).filter(function(g) {
          return g.contains(h.target);
        }), w = b.length > 0 ? i(h, b[0]) : !a.current.noIsolation;
        w && h.cancelable && h.preventDefault();
      }
    }
  }, []), l = $.useCallback(function(y, h, _, f) {
    var b = { name: y, delta: h, target: _, should: f, shadowParent: $y(_) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(w) {
        return w !== b;
      });
    }, 1);
  }, []), u = $.useCallback(function(y) {
    r.current = Zn(y), n.current = void 0;
  }, []), p = $.useCallback(function(y) {
    l(y.type, qc(y), y.target, i(y, e.lockRef.current));
  }, []), m = $.useCallback(function(y) {
    l(y.type, Zn(y), y.target, i(y, e.lockRef.current));
  }, []);
  $.useEffect(function() {
    return Mr.push(o), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, Dr), document.addEventListener("touchmove", c, Dr), document.addEventListener("touchstart", u, Dr), function() {
      Mr = Mr.filter(function(y) {
        return y !== o;
      }), document.removeEventListener("wheel", c, Dr), document.removeEventListener("touchmove", c, Dr), document.removeEventListener("touchstart", u, Dr);
    };
  }, []);
  var v = e.removeScrollBar, x = e.inert;
  return $.createElement(
    $.Fragment,
    null,
    x ? $.createElement(o, { styles: xy(s) }) : null,
    v ? $.createElement(fy, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function $y(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Ey = Qv(Zd, Sy);
var Ti = $.forwardRef(function(e, t) {
  return $.createElement(Io, It({}, e, { ref: t, sideCar: Ey }));
});
Ti.classNames = Io.classNames;
var Cy = [" ", "Enter", "ArrowUp", "ArrowDown"], ky = [" ", "Enter"], kr = "Select", [Do, Mo, jy] = md(kr), [un] = qt(kr, [
  jy,
  To
]), Vo = To(), [Ry, gr] = un(kr), [Py, Ny] = un(kr), ef = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: s,
    onOpenChange: o,
    value: a,
    defaultValue: i,
    onValueChange: c,
    dir: l,
    name: u,
    autoComplete: p,
    disabled: m,
    required: v,
    form: x
  } = e, y = Vo(t), [h, _] = $.useState(null), [f, b] = $.useState(null), [w, g] = $.useState(!1), S = xi(l), [E, k] = Cr({
    prop: n,
    defaultProp: s ?? !1,
    onChange: o,
    caller: kr
  }), [I, z] = Cr({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: kr
  }), M = $.useRef(null), V = h ? x || !!h.closest("form") : !0, [F, W] = $.useState(/* @__PURE__ */ new Set()), te = Array.from(F).map((Z) => Z.props.value).join(";");
  return /* @__PURE__ */ d.jsx(Fd, { ...y, children: /* @__PURE__ */ d.jsxs(
    Ry,
    {
      required: v,
      scope: t,
      trigger: h,
      onTriggerChange: _,
      valueNode: f,
      onValueNodeChange: b,
      valueNodeHasChildren: w,
      onValueNodeHasChildrenChange: g,
      contentId: cr(),
      value: I,
      onValueChange: z,
      open: E,
      onOpenChange: k,
      dir: S,
      triggerPointerDownPosRef: M,
      disabled: m,
      children: [
        /* @__PURE__ */ d.jsx(Do.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          Py,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: $.useCallback((Z) => {
              W((ae) => new Set(ae).add(Z));
            }, []),
            onNativeOptionRemove: $.useCallback((Z) => {
              W((ae) => {
                const L = new Set(ae);
                return L.delete(Z), L;
              });
            }, []),
            children: r
          }
        ) }),
        V ? /* @__PURE__ */ d.jsxs(
          Sf,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: u,
            autoComplete: p,
            value: I,
            onChange: (Z) => z(Z.target.value),
            disabled: m,
            form: x,
            children: [
              I === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(F)
            ]
          },
          te
        ) : null
      ]
    }
  ) });
};
ef.displayName = kr;
var tf = "SelectTrigger", rf = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...s } = e, o = Vo(r), a = gr(tf, r), i = a.disabled || n, c = Ue(t, a.onTriggerChange), l = Mo(r), u = $.useRef("touch"), [p, m, v] = Ef((y) => {
      const h = l().filter((b) => !b.disabled), _ = h.find((b) => b.value === a.value), f = Cf(h, y, _);
      f !== void 0 && a.onValueChange(f.value);
    }), x = (y) => {
      i || (a.onOpenChange(!0), v()), y && (a.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(Ld, { asChild: !0, ...o, children: /* @__PURE__ */ d.jsx(
      De.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": $f(a.value) ? "" : void 0,
        ...s,
        ref: c,
        onClick: Se(s.onClick, (y) => {
          y.currentTarget.focus(), u.current !== "mouse" && x(y);
        }),
        onPointerDown: Se(s.onPointerDown, (y) => {
          u.current = y.pointerType;
          const h = y.target;
          h.hasPointerCapture(y.pointerId) && h.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (x(y), y.preventDefault());
        }),
        onKeyDown: Se(s.onKeyDown, (y) => {
          const h = p.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && m(y.key), !(h && y.key === " ") && Cy.includes(y.key) && (x(), y.preventDefault());
        })
      }
    ) });
  }
);
rf.displayName = tf;
var nf = "SelectValue", sf = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: s, children: o, placeholder: a = "", ...i } = e, c = gr(nf, r), { onValueNodeHasChildrenChange: l } = c, u = o !== void 0, p = Ue(t, c.onValueNodeChange);
    return it(() => {
      l(u);
    }, [l, u]), /* @__PURE__ */ d.jsx(
      De.span,
      {
        ...i,
        ref: p,
        style: { pointerEvents: "none" },
        children: $f(c.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: a }) : o
      }
    );
  }
);
sf.displayName = nf;
var Ay = "SelectIcon", of = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...s } = e;
    return /* @__PURE__ */ d.jsx(De.span, { "aria-hidden": !0, ...s, ref: t, children: n || "▼" });
  }
);
of.displayName = Ay;
var Ty = "SelectPortal", af = (e) => /* @__PURE__ */ d.jsx(Oo, { asChild: !0, ...e });
af.displayName = Ty;
var jr = "SelectContent", cf = $.forwardRef(
  (e, t) => {
    const r = gr(jr, e.__scopeSelect), [n, s] = $.useState();
    if (it(() => {
      s(new DocumentFragment());
    }, []), !r.open) {
      const o = n;
      return o ? $o.createPortal(
        /* @__PURE__ */ d.jsx(lf, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(Do.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        o
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(uf, { ...e, ref: t });
  }
);
cf.displayName = jr;
var Et = 10, [lf, vr] = un(jr), Oy = "SelectContentImpl", Iy = /* @__PURE__ */ Pv("SelectContent.RemoveScroll"), uf = $.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: s,
      onEscapeKeyDown: o,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: y,
      avoidCollisions: h,
      //
      ..._
    } = e, f = gr(jr, r), [b, w] = $.useState(null), [g, S] = $.useState(null), E = Ue(t, (B) => w(B)), [k, I] = $.useState(null), [z, M] = $.useState(
      null
    ), V = Mo(r), [F, W] = $.useState(!1), te = $.useRef(!1);
    $.useEffect(() => {
      if (b) return Hd(b);
    }, [b]), gd();
    const Z = $.useCallback(
      (B) => {
        const [X, ...pe] = V().map((A) => A.ref.current), [ie] = pe.slice(-1), N = document.activeElement;
        for (const A of B)
          if (A === N || (A == null || A.scrollIntoView({ block: "nearest" }), A === X && g && (g.scrollTop = 0), A === ie && g && (g.scrollTop = g.scrollHeight), A == null || A.focus(), document.activeElement !== N)) return;
      },
      [V, g]
    ), ae = $.useCallback(
      () => Z([k, b]),
      [Z, k, b]
    );
    $.useEffect(() => {
      F && ae();
    }, [F, ae]);
    const { onOpenChange: L, triggerPointerDownPosRef: ve } = f;
    $.useEffect(() => {
      if (b) {
        let B = { x: 0, y: 0 };
        const X = (ie) => {
          var N, A;
          B = {
            x: Math.abs(Math.round(ie.pageX) - (((N = ve.current) == null ? void 0 : N.x) ?? 0)),
            y: Math.abs(Math.round(ie.pageY) - (((A = ve.current) == null ? void 0 : A.y) ?? 0))
          };
        }, pe = (ie) => {
          B.x <= 10 && B.y <= 10 ? ie.preventDefault() : b.contains(ie.target) || L(!1), document.removeEventListener("pointermove", X), ve.current = null;
        };
        return ve.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", pe, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", pe, { capture: !0 });
        };
      }
    }, [b, L, ve]), $.useEffect(() => {
      const B = () => L(!1);
      return window.addEventListener("blur", B), window.addEventListener("resize", B), () => {
        window.removeEventListener("blur", B), window.removeEventListener("resize", B);
      };
    }, [L]);
    const [G, T] = Ef((B) => {
      const X = V().filter((N) => !N.disabled), pe = X.find((N) => N.ref.current === document.activeElement), ie = Cf(X, B, pe);
      ie && setTimeout(() => ie.ref.current.focus());
    }), K = $.useCallback(
      (B, X, pe) => {
        const ie = !te.current && !pe;
        (f.value !== void 0 && f.value === X || ie) && (I(B), ie && (te.current = !0));
      },
      [f.value]
    ), O = $.useCallback(() => b == null ? void 0 : b.focus(), [b]), C = $.useCallback(
      (B, X, pe) => {
        const ie = !te.current && !pe;
        (f.value !== void 0 && f.value === X || ie) && M(B);
      },
      [f.value]
    ), R = n === "popper" ? Za : df, q = R === Za ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: v,
      sticky: x,
      hideWhenDetached: y,
      avoidCollisions: h
    } : {};
    return /* @__PURE__ */ d.jsx(
      lf,
      {
        scope: r,
        content: b,
        viewport: g,
        onViewportChange: S,
        itemRefCallback: K,
        selectedItem: k,
        onItemLeave: O,
        itemTextRefCallback: C,
        focusSelectedItem: ae,
        selectedItemText: z,
        position: n,
        isPositioned: F,
        searchRef: G,
        children: /* @__PURE__ */ d.jsx(Ti, { as: Iy, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          wi,
          {
            asChild: !0,
            trapped: f.open,
            onMountAutoFocus: (B) => {
              B.preventDefault();
            },
            onUnmountAutoFocus: Se(s, (B) => {
              var X;
              (X = f.trigger) == null || X.focus({ preventScroll: !0 }), B.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              jo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: o,
                onPointerDownOutside: a,
                onFocusOutside: (B) => B.preventDefault(),
                onDismiss: () => f.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  R,
                  {
                    role: "listbox",
                    id: f.contentId,
                    "data-state": f.open ? "open" : "closed",
                    dir: f.dir,
                    onContextMenu: (B) => B.preventDefault(),
                    ..._,
                    ...q,
                    onPlaced: () => W(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: Se(_.onKeyDown, (B) => {
                      const X = B.ctrlKey || B.altKey || B.metaKey;
                      if (B.key === "Tab" && B.preventDefault(), !X && B.key.length === 1 && T(B.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(B.key)) {
                        let ie = V().filter((N) => !N.disabled).map((N) => N.ref.current);
                        if (["ArrowUp", "End"].includes(B.key) && (ie = ie.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(B.key)) {
                          const N = B.target, A = ie.indexOf(N);
                          ie = ie.slice(A + 1);
                        }
                        setTimeout(() => Z(ie)), B.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
uf.displayName = Oy;
var Dy = "SelectItemAlignedPosition", df = $.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...s } = e, o = gr(jr, r), a = vr(jr, r), [i, c] = $.useState(null), [l, u] = $.useState(null), p = Ue(t, (E) => u(E)), m = Mo(r), v = $.useRef(!1), x = $.useRef(!0), { viewport: y, selectedItem: h, selectedItemText: _, focusSelectedItem: f } = a, b = $.useCallback(() => {
    if (o.trigger && o.valueNode && i && l && y && h && _) {
      const E = o.trigger.getBoundingClientRect(), k = l.getBoundingClientRect(), I = o.valueNode.getBoundingClientRect(), z = _.getBoundingClientRect();
      if (o.dir !== "rtl") {
        const N = z.left - k.left, A = I.left - N, H = E.left - A, Y = E.width + H, ce = Math.max(Y, k.width), ye = window.innerWidth - Et, He = yc(A, [
          Et,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Et, ye - ce)
        ]);
        i.style.minWidth = Y + "px", i.style.left = He + "px";
      } else {
        const N = k.right - z.right, A = window.innerWidth - I.right - N, H = window.innerWidth - E.right - A, Y = E.width + H, ce = Math.max(Y, k.width), ye = window.innerWidth - Et, He = yc(A, [
          Et,
          Math.max(Et, ye - ce)
        ]);
        i.style.minWidth = Y + "px", i.style.right = He + "px";
      }
      const M = m(), V = window.innerHeight - Et * 2, F = y.scrollHeight, W = window.getComputedStyle(l), te = parseInt(W.borderTopWidth, 10), Z = parseInt(W.paddingTop, 10), ae = parseInt(W.borderBottomWidth, 10), L = parseInt(W.paddingBottom, 10), ve = te + Z + F + L + ae, G = Math.min(h.offsetHeight * 5, ve), T = window.getComputedStyle(y), K = parseInt(T.paddingTop, 10), O = parseInt(T.paddingBottom, 10), C = E.top + E.height / 2 - Et, R = V - C, q = h.offsetHeight / 2, B = h.offsetTop + q, X = te + Z + B, pe = ve - X;
      if (X <= C) {
        const N = M.length > 0 && h === M[M.length - 1].ref.current;
        i.style.bottom = "0px";
        const A = l.clientHeight - y.offsetTop - y.offsetHeight, H = Math.max(
          R,
          q + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (N ? O : 0) + A + ae
        ), Y = X + H;
        i.style.height = Y + "px";
      } else {
        const N = M.length > 0 && h === M[0].ref.current;
        i.style.top = "0px";
        const H = Math.max(
          C,
          te + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (N ? K : 0) + q
        ) + pe;
        i.style.height = H + "px", y.scrollTop = X - C + y.offsetTop;
      }
      i.style.margin = `${Et}px 0`, i.style.minHeight = G + "px", i.style.maxHeight = V + "px", n == null || n(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    m,
    o.trigger,
    o.valueNode,
    i,
    l,
    y,
    h,
    _,
    o.dir,
    n
  ]);
  it(() => b(), [b]);
  const [w, g] = $.useState();
  it(() => {
    l && g(window.getComputedStyle(l).zIndex);
  }, [l]);
  const S = $.useCallback(
    (E) => {
      E && x.current === !0 && (b(), f == null || f(), x.current = !1);
    },
    [b, f]
  );
  return /* @__PURE__ */ d.jsx(
    Vy,
    {
      scope: r,
      contentWrapper: i,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: S,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: w
          },
          children: /* @__PURE__ */ d.jsx(
            De.div,
            {
              ...s,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...s.style
              }
            }
          )
        }
      )
    }
  );
});
df.displayName = Dy;
var My = "SelectPopperPosition", Za = $.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: s = Et,
    ...o
  } = e, a = Vo(r);
  return /* @__PURE__ */ d.jsx(
    zd,
    {
      ...a,
      ...o,
      ref: t,
      align: n,
      collisionPadding: s,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...o.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Za.displayName = My;
var [Vy, Oi] = un(jr, {}), Ya = "SelectViewport", ff = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...s } = e, o = vr(Ya, r), a = Oi(Ya, r), i = Ue(t, o.onViewportChange), c = $.useRef(0);
    return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ d.jsx(Do.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(
        De.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...s,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...s.style
          },
          onScroll: Se(s.onScroll, (l) => {
            const u = l.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = a;
            if (m != null && m.current && p) {
              const v = Math.abs(c.current - u.scrollTop);
              if (v > 0) {
                const x = window.innerHeight - Et * 2, y = parseFloat(p.style.minHeight), h = parseFloat(p.style.height), _ = Math.max(y, h);
                if (_ < x) {
                  const f = _ + v, b = Math.min(x, f), w = f - b;
                  p.style.height = b + "px", p.style.bottom === "0px" && (u.scrollTop = w > 0 ? w : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
ff.displayName = Ya;
var mf = "SelectGroup", [Fy, Ly] = un(mf), zy = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = cr();
    return /* @__PURE__ */ d.jsx(Fy, { scope: r, id: s, children: /* @__PURE__ */ d.jsx(De.div, { role: "group", "aria-labelledby": s, ...n, ref: t }) });
  }
);
zy.displayName = mf;
var hf = "SelectLabel", qy = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = Ly(hf, r);
    return /* @__PURE__ */ d.jsx(De.div, { id: s.id, ...n, ref: t });
  }
);
qy.displayName = hf;
var lo = "SelectItem", [Uy, pf] = un(lo), gf = $.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: s = !1,
      textValue: o,
      ...a
    } = e, i = gr(lo, r), c = vr(lo, r), l = i.value === n, [u, p] = $.useState(o ?? ""), [m, v] = $.useState(!1), x = Ue(
      t,
      (f) => {
        var b;
        return (b = c.itemRefCallback) == null ? void 0 : b.call(c, f, n, s);
      }
    ), y = cr(), h = $.useRef("touch"), _ = () => {
      s || (i.onValueChange(n), i.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      Uy,
      {
        scope: r,
        value: n,
        disabled: s,
        textId: y,
        isSelected: l,
        onItemTextChange: $.useCallback((f) => {
          p((b) => b || ((f == null ? void 0 : f.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          Do.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: s,
            textValue: u,
            children: /* @__PURE__ */ d.jsx(
              De.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": l && m,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": s || void 0,
                "data-disabled": s ? "" : void 0,
                tabIndex: s ? void 0 : -1,
                ...a,
                ref: x,
                onFocus: Se(a.onFocus, () => v(!0)),
                onBlur: Se(a.onBlur, () => v(!1)),
                onClick: Se(a.onClick, () => {
                  h.current !== "mouse" && _();
                }),
                onPointerUp: Se(a.onPointerUp, () => {
                  h.current === "mouse" && _();
                }),
                onPointerDown: Se(a.onPointerDown, (f) => {
                  h.current = f.pointerType;
                }),
                onPointerMove: Se(a.onPointerMove, (f) => {
                  var b;
                  h.current = f.pointerType, s ? (b = c.onItemLeave) == null || b.call(c) : h.current === "mouse" && f.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Se(a.onPointerLeave, (f) => {
                  var b;
                  f.currentTarget === document.activeElement && ((b = c.onItemLeave) == null || b.call(c));
                }),
                onKeyDown: Se(a.onKeyDown, (f) => {
                  var w;
                  ((w = c.searchRef) == null ? void 0 : w.current) !== "" && f.key === " " || (ky.includes(f.key) && _(), f.key === " " && f.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
gf.displayName = lo;
var Cn = "SelectItemText", vf = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: s, ...o } = e, a = gr(Cn, r), i = vr(Cn, r), c = pf(Cn, r), l = Ny(Cn, r), [u, p] = $.useState(null), m = Ue(
      t,
      (_) => p(_),
      c.onItemTextChange,
      (_) => {
        var f;
        return (f = i.itemTextRefCallback) == null ? void 0 : f.call(i, _, c.value, c.disabled);
      }
    ), v = u == null ? void 0 : u.textContent, x = $.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: c.value, disabled: c.disabled, children: v }, c.value),
      [c.disabled, c.value, v]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: h } = l;
    return it(() => (y(x), () => h(x)), [y, h, x]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(De.span, { id: c.textId, ...o, ref: m }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? $o.createPortal(o.children, a.valueNode) : null
    ] });
  }
);
vf.displayName = Cn;
var yf = "SelectItemIndicator", bf = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return pf(yf, r).isSelected ? /* @__PURE__ */ d.jsx(De.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
bf.displayName = yf;
var Ja = "SelectScrollUpButton", _f = $.forwardRef((e, t) => {
  const r = vr(Ja, e.__scopeSelect), n = Oi(Ja, e.__scopeSelect), [s, o] = $.useState(!1), a = Ue(t, n.onScrollButtonChange);
  return it(() => {
    if (r.viewport && r.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        o(l);
      };
      const c = r.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ d.jsx(
    wf,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = r;
        i && c && (i.scrollTop = i.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
_f.displayName = Ja;
var Xa = "SelectScrollDownButton", xf = $.forwardRef((e, t) => {
  const r = vr(Xa, e.__scopeSelect), n = Oi(Xa, e.__scopeSelect), [s, o] = $.useState(!1), a = Ue(t, n.onScrollButtonChange);
  return it(() => {
    if (r.viewport && r.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < l;
        o(u);
      };
      const c = r.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [r.viewport, r.isPositioned]), s ? /* @__PURE__ */ d.jsx(
    wf,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = r;
        i && c && (i.scrollTop = i.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
xf.displayName = Xa;
var wf = $.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...s } = e, o = vr("SelectScrollButton", r), a = $.useRef(null), i = Mo(r), c = $.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return $.useEffect(() => () => c(), [c]), it(() => {
    var u;
    const l = i().find((p) => p.ref.current === document.activeElement);
    (u = l == null ? void 0 : l.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ d.jsx(
    De.div,
    {
      "aria-hidden": !0,
      ...s,
      ref: t,
      style: { flexShrink: 0, ...s.style },
      onPointerDown: Se(s.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerMove: Se(s.onPointerMove, () => {
        var l;
        (l = o.onItemLeave) == null || l.call(o), a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerLeave: Se(s.onPointerLeave, () => {
        c();
      })
    }
  );
}), By = "SelectSeparator", Wy = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(De.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
Wy.displayName = By;
var Qa = "SelectArrow", Hy = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, s = Vo(r), o = gr(Qa, r), a = vr(Qa, r);
    return o.open && a.position === "popper" ? /* @__PURE__ */ d.jsx(qd, { ...s, ...n, ref: t }) : null;
  }
);
Hy.displayName = Qa;
var Gy = "SelectBubbleInput", Sf = $.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const s = $.useRef(null), o = Ue(n, s), a = Ai(t);
    return $.useEffect(() => {
      const i = s.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== t && u) {
        const p = new Event("change", { bubbles: !0 });
        u.call(i, t), i.dispatchEvent(p);
      }
    }, [a, t]), /* @__PURE__ */ d.jsx(
      De.select,
      {
        ...r,
        style: { ...Ud, ...r.style },
        ref: o,
        defaultValue: t
      }
    );
  }
);
Sf.displayName = Gy;
function $f(e) {
  return e === "" || e === void 0;
}
function Ef(e) {
  const t = fr(e), r = $.useRef(""), n = $.useRef(0), s = $.useCallback(
    (a) => {
      const i = r.current + a;
      t(i), (function c(l) {
        r.current = l, window.clearTimeout(n.current), l !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      })(i);
    },
    [t]
  ), o = $.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return $.useEffect(() => () => window.clearTimeout(n.current), []), [r, s, o];
}
function Cf(e, t, r) {
  const s = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, o = r ? e.indexOf(r) : -1;
  let a = Ky(e, Math.max(o, 0));
  s.length === 1 && (a = a.filter((l) => l !== r));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(s.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function Ky(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Zy = ef, Yy = rf, Jy = sf, Xy = of, Qy = af, eb = cf, tb = ff, rb = gf, nb = vf, sb = bf, ob = _f, ab = xf;
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ib = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), cb = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), Bc = (e) => {
  const t = cb(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, kf = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), lb = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ub = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const db = Ju(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: s = "",
    children: o,
    iconNode: a,
    ...i
  }, c) => Va(
    "svg",
    {
      ref: c,
      ...ub,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: kf("lucide", s),
      ...!o && !lb(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...a.map(([l, u]) => Va(l, u)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = (e, t) => {
  const r = Ju(
    ({ className: n, ...s }, o) => Va(db, {
      ref: o,
      iconNode: t,
      className: kf(
        `lucide-${ib(Bc(e))}`,
        `lucide-${e}`,
        n
      ),
      ...s
    })
  );
  return r.displayName = Bc(e), r;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fb = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], jf = er("check", fb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mb = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Rf = er("chevron-down", mb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hb = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], pb = er("chevron-up", hb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
], Pf = er("circle-plus", gb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vb = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], yb = er("circle", vb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bb = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Nf = er("settings", bb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _b = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
], xb = er("trash-2", _b);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wb = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Af = er("triangle-alert", wb);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sb = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Tf = er("x", Sb);
function Of(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = Of(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function If() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = Of(e)) && (n && (n += " "), n += t);
  return n;
}
const $b = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n];
  for (let n = 0; n < t.length; n++)
    r[e.length + n] = t[n];
  return r;
}, Eb = (e, t) => ({
  classGroupId: e,
  validator: t
}), Df = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), uo = "-", Wc = [], Cb = "arbitrary..", kb = (e) => {
  const t = Rb(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return jb(a);
      const i = a.split(uo), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return Mf(i, c, t);
    },
    getConflictingClassGroupIds: (a, i) => {
      if (i) {
        const c = n[a], l = r[a];
        return c ? l ? $b(l, c) : c : l || Wc;
      }
      return r[a] || Wc;
    }
  };
}, Mf = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const s = e[t], o = r.nextPart.get(s);
  if (o) {
    const l = Mf(e, t + 1, o);
    if (l) return l;
  }
  const a = r.validators;
  if (a === null)
    return;
  const i = t === 0 ? e.join(uo) : e.slice(t).join(uo), c = a.length;
  for (let l = 0; l < c; l++) {
    const u = a[l];
    if (u.validator(i))
      return u.classGroupId;
  }
}, jb = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? Cb + n : void 0;
})(), Rb = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return Pb(r, t);
}, Pb = (e, t) => {
  const r = Df();
  for (const n in e) {
    const s = e[n];
    Ii(s, r, n, t);
  }
  return r;
}, Ii = (e, t, r, n) => {
  const s = e.length;
  for (let o = 0; o < s; o++) {
    const a = e[o];
    Nb(a, t, r, n);
  }
}, Nb = (e, t, r, n) => {
  if (typeof e == "string") {
    Ab(e, t, r);
    return;
  }
  if (typeof e == "function") {
    Tb(e, t, r, n);
    return;
  }
  Ob(e, t, r, n);
}, Ab = (e, t, r) => {
  const n = e === "" ? t : Vf(t, e);
  n.classGroupId = r;
}, Tb = (e, t, r, n) => {
  if (Ib(e)) {
    Ii(e(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Eb(r, e));
}, Ob = (e, t, r, n) => {
  const s = Object.entries(e), o = s.length;
  for (let a = 0; a < o; a++) {
    const [i, c] = s[a];
    Ii(c, Vf(t, i), r, n);
  }
}, Vf = (e, t) => {
  let r = e;
  const n = t.split(uo), s = n.length;
  for (let o = 0; o < s; o++) {
    const a = n[o];
    let i = r.nextPart.get(a);
    i || (i = Df(), r.nextPart.set(a, i)), r = i;
  }
  return r;
}, Ib = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Db = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const s = (o, a) => {
    r[o] = a, t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(o) {
      let a = r[o];
      if (a !== void 0)
        return a;
      if ((a = n[o]) !== void 0)
        return s(o, a), a;
    },
    set(o, a) {
      o in r ? r[o] = a : s(o, a);
    }
  };
}, ei = "!", Hc = ":", Mb = [], Gc = (e, t, r, n, s) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: s
}), Vb = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (s) => {
    const o = [];
    let a = 0, i = 0, c = 0, l;
    const u = s.length;
    for (let y = 0; y < u; y++) {
      const h = s[y];
      if (a === 0 && i === 0) {
        if (h === Hc) {
          o.push(s.slice(c, y)), c = y + 1;
          continue;
        }
        if (h === "/") {
          l = y;
          continue;
        }
      }
      h === "[" ? a++ : h === "]" ? a-- : h === "(" ? i++ : h === ")" && i--;
    }
    const p = o.length === 0 ? s : s.slice(c);
    let m = p, v = !1;
    p.endsWith(ei) ? (m = p.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(ei) && (m = p.slice(1), v = !0)
    );
    const x = l && l > c ? l - c : void 0;
    return Gc(o, v, m, x);
  };
  if (t) {
    const s = t + Hc, o = n;
    n = (a) => a.startsWith(s) ? o(a.slice(s.length)) : Gc(Mb, !1, a, void 0, !0);
  }
  if (r) {
    const s = n;
    n = (o) => r({
      className: o,
      parseClassName: s
    });
  }
  return n;
}, Fb = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, n) => {
    t.set(r, 1e6 + n);
  }), (r) => {
    const n = [];
    let s = [];
    for (let o = 0; o < r.length; o++) {
      const a = r[o], i = a[0] === "[", c = t.has(a);
      i || c ? (s.length > 0 && (s.sort(), n.push(...s), s = []), n.push(a)) : s.push(a);
    }
    return s.length > 0 && (s.sort(), n.push(...s)), n;
  };
}, Lb = (e) => ({
  cache: Db(e.cacheSize),
  parseClassName: Vb(e),
  sortModifiers: Fb(e),
  ...kb(e)
}), zb = /\s+/, qb = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s,
    sortModifiers: o
  } = t, a = [], i = e.trim().split(zb);
  let c = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: v,
      baseClassName: x,
      maybePostfixModifierPosition: y
    } = r(u);
    if (p) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let h = !!y, _ = n(h ? x.substring(0, y) : x);
    if (!_) {
      if (!h) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (_ = n(x), !_) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      h = !1;
    }
    const f = m.length === 0 ? "" : m.length === 1 ? m[0] : o(m).join(":"), b = v ? f + ei : f, w = b + _;
    if (a.indexOf(w) > -1)
      continue;
    a.push(w);
    const g = s(_, h);
    for (let S = 0; S < g.length; ++S) {
      const E = g[S];
      a.push(b + E);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Ub = (...e) => {
  let t = 0, r, n, s = "";
  for (; t < e.length; )
    (r = e[t++]) && (n = Ff(r)) && (s && (s += " "), s += n);
  return s;
}, Ff = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ff(e[n])) && (r && (r += " "), r += t);
  return r;
}, Bb = (e, ...t) => {
  let r, n, s, o;
  const a = (c) => {
    const l = t.reduce((u, p) => p(u), e());
    return r = Lb(l), n = r.cache.get, s = r.cache.set, o = i, i(c);
  }, i = (c) => {
    const l = n(c);
    if (l)
      return l;
    const u = qb(c, r);
    return s(c, u), u;
  };
  return o = a, (...c) => o(Ub(...c));
}, Wb = [], rt = (e) => {
  const t = (r) => r[e] || Wb;
  return t.isThemeGetter = !0, t;
}, Lf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, zf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Hb = /^\d+\/\d+$/, Gb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Yb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Jb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Vr = (e) => Hb.test(e), Re = (e) => !!e && !Number.isNaN(Number(e)), nr = (e) => !!e && Number.isInteger(Number(e)), ba = (e) => e.endsWith("%") && Re(e.slice(0, -1)), Ht = (e) => Gb.test(e), Xb = () => !0, Qb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Kb.test(e) && !Zb.test(e)
), qf = () => !1, e_ = (e) => Yb.test(e), t_ = (e) => Jb.test(e), r_ = (e) => !de(e) && !fe(e), n_ = (e) => dn(e, Wf, qf), de = (e) => Lf.test(e), _r = (e) => dn(e, Hf, Qb), _a = (e) => dn(e, c_, Re), Kc = (e) => dn(e, Uf, qf), s_ = (e) => dn(e, Bf, t_), Yn = (e) => dn(e, Gf, e_), fe = (e) => zf.test(e), wn = (e) => fn(e, Hf), o_ = (e) => fn(e, l_), Zc = (e) => fn(e, Uf), a_ = (e) => fn(e, Wf), i_ = (e) => fn(e, Bf), Jn = (e) => fn(e, Gf, !0), dn = (e, t, r) => {
  const n = Lf.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, fn = (e, t, r = !1) => {
  const n = zf.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Uf = (e) => e === "position" || e === "percentage", Bf = (e) => e === "image" || e === "url", Wf = (e) => e === "length" || e === "size" || e === "bg-size", Hf = (e) => e === "length", c_ = (e) => e === "number", l_ = (e) => e === "family-name", Gf = (e) => e === "shadow", u_ = () => {
  const e = rt("color"), t = rt("font"), r = rt("text"), n = rt("font-weight"), s = rt("tracking"), o = rt("leading"), a = rt("breakpoint"), i = rt("container"), c = rt("spacing"), l = rt("radius"), u = rt("shadow"), p = rt("inset-shadow"), m = rt("text-shadow"), v = rt("drop-shadow"), x = rt("blur"), y = rt("perspective"), h = rt("aspect"), _ = rt("ease"), f = rt("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], w = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], g = () => [...w(), fe, de], S = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], k = () => [fe, de, c], I = () => [Vr, "full", "auto", ...k()], z = () => [nr, "none", "subgrid", fe, de], M = () => ["auto", {
    span: ["full", nr, fe, de]
  }, nr, fe, de], V = () => [nr, "auto", fe, de], F = () => ["auto", "min", "max", "fr", fe, de], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], te = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Z = () => ["auto", ...k()], ae = () => [Vr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], L = () => [e, fe, de], ve = () => [...w(), Zc, Kc, {
    position: [fe, de]
  }], G = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], T = () => ["auto", "cover", "contain", a_, n_, {
    size: [fe, de]
  }], K = () => [ba, wn, _r], O = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    fe,
    de
  ], C = () => ["", Re, wn, _r], R = () => ["solid", "dashed", "dotted", "double"], q = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => [Re, ba, Zc, Kc], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    fe,
    de
  ], pe = () => ["none", Re, fe, de], ie = () => ["none", Re, fe, de], N = () => [Re, fe, de], A = () => [Vr, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ht],
      breakpoint: [Ht],
      color: [Xb],
      container: [Ht],
      "drop-shadow": [Ht],
      ease: ["in", "out", "in-out"],
      font: [r_],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ht],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ht],
      shadow: [Ht],
      spacing: ["px", Re],
      text: [Ht],
      "text-shadow": [Ht],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Vr, de, fe, h]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Re, de, fe, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: g()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [nr, "auto", fe, de]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Vr, "full", "auto", i, ...k()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [Re, Vr, "auto", "initial", "none", de]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Re, fe, de]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Re, fe, de]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [nr, "first", "last", "none", fe, de]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": z()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: M()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": z()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: M()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": F()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": F()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: k()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": k()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": k()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...W(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...te(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...te()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...W()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...te(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": W()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...te(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...te()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: k()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: k()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: k()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: k()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: k()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: k()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: k()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: k()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: k()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Z()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Z()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Z()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Z()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Z()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Z()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Z()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Z()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Z()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": k()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": k()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: ae()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...ae()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...ae()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...ae()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...ae()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...ae()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...ae()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, wn, _r]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, fe, _a]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ba, de]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [o_, de, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, fe, de]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Re, "none", fe, _a]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          o,
          ...k()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", fe, de]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", fe, de]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...R(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Re, "from-font", "auto", fe, _r]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Re, "auto", fe, de]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", fe, de]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", fe, de]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ve()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: G()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: T()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, nr, fe, de],
          radial: ["", fe, de],
          conic: [nr, fe, de]
        }, i_, s_]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: K()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: K()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: K()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: O()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": O()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": O()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": O()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": O()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": O()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": O()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": O()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": O()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": O()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": O()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": O()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": O()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": O()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": O()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: C()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": C()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": C()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": C()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": C()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": C()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": C()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": C()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": C()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": C()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": C()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...R(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...R(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...R(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Re, fe, de]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Re, wn, _r]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: L()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          u,
          Jn,
          Yn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, Jn, Yn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: C()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Re, _r]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": C()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": L()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Jn, Yn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Re, fe, de]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...q(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": q()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [Re]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": B()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": B()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": B()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": B()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": B()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": B()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": B()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": B()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": B()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": B()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": B()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": B()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": B()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": B()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
      }],
      "mask-image-radial": [{
        "mask-radial": [fe, de]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": B()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": B()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": w()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Re]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": B()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": B()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": L()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ve()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: G()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: T()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", fe, de]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          fe,
          de
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: X()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Re, fe, de]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Re, fe, de]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          v,
          Jn,
          Yn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": L()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Re, fe, de]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Re, fe, de]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Re, fe, de]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Re, fe, de]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Re, fe, de]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          fe,
          de
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": X()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Re, fe, de]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Re, fe, de]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Re, fe, de]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Re, fe, de]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Re, fe, de]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Re, fe, de]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Re, fe, de]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Re, fe, de]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": k()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": k()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": k()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", fe, de]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [Re, "initial", fe, de]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, fe, de]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Re, fe, de]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", f, fe, de]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [y, fe, de]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": g()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: pe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": pe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": pe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": pe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ie()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ie()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ie()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ie()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: N()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": N()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": N()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [fe, de, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: g()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: A()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": A()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": A()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": A()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: L()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: L()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", fe, de]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", fe, de]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Re, wn, _r, _a]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
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
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, d_ = /* @__PURE__ */ Bb(u_);
function $e(...e) {
  return d_(If(e));
}
function mn({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Zy, { "data-slot": "select", ...e });
}
function hn({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Jy, { "data-slot": "select-value", ...e });
}
function pn({
  className: e,
  size: t = "default",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(
    Yy,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: $e(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ d.jsx(Xy, { asChild: !0, children: /* @__PURE__ */ d.jsx(Rf, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function gn({
  className: e,
  children: t,
  position: r = "popper",
  ...n
}) {
  return /* @__PURE__ */ d.jsx(Qy, { children: /* @__PURE__ */ d.jsxs(
    eb,
    {
      "data-slot": "select-content",
      className: $e(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      ...n,
      children: [
        /* @__PURE__ */ d.jsx(f_, {}),
        /* @__PURE__ */ d.jsx(
          tb,
          {
            className: $e(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ d.jsx(m_, {})
      ]
    }
  ) });
}
function Lt({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    rb,
    {
      "data-slot": "select-item",
      className: $e(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(sb, { children: /* @__PURE__ */ d.jsx(jf, { className: "size-4" }) }) }),
        /* @__PURE__ */ d.jsx(nb, { children: t })
      ]
    }
  );
}
function f_({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    ob,
    {
      "data-slot": "select-scroll-up-button",
      className: $e(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(pb, { className: "size-4" })
    }
  );
}
function m_({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    ab,
    {
      "data-slot": "select-scroll-down-button",
      className: $e(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(Rf, { className: "size-4" })
    }
  );
}
const Fe = se.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ d.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: $e(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...r
    }
  )
);
Fe.displayName = "Input";
var h_ = Symbol.for("react.lazy"), fo = $[" use ".trim().toString()];
function p_(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Kf(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === h_ && "_payload" in e && p_(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Di(e) {
  const t = /* @__PURE__ */ g_(e), r = $.forwardRef((n, s) => {
    let { children: o, ...a } = n;
    Kf(o) && typeof fo == "function" && (o = fo(o._payload));
    const i = $.Children.toArray(o), c = i.find(y_);
    if (c) {
      const l = c.props.children, u = i.map((p) => p === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: o });
  });
  return r.displayName = `${e}.Slot`, r;
}
var Mi = /* @__PURE__ */ Di("Slot");
// @__NO_SIDE_EFFECTS__
function g_(e) {
  const t = $.forwardRef((r, n) => {
    let { children: s, ...o } = r;
    if (Kf(s) && typeof fo == "function" && (s = fo(s._payload)), $.isValidElement(s)) {
      const a = __(s), i = b_(o, s.props);
      return s.type !== $.Fragment && (i.ref = n ? an(n, a) : a), $.cloneElement(s, i);
    }
    return $.Children.count(s) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var v_ = Symbol("radix.slottable");
function y_(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === v_;
}
function b_(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? s && o ? r[n] = (...i) => {
      const c = o(...i);
      return s(...i), c;
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...o } : n === "className" && (r[n] = [s, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function __(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const Yc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Jc = If, Zf = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Jc(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: o } = t, a = Object.keys(s).map((l) => {
    const u = r == null ? void 0 : r[l], p = o == null ? void 0 : o[l];
    if (u === null) return null;
    const m = Yc(u) || Yc(p);
    return s[l][m];
  }), i = r && Object.entries(r).reduce((l, u) => {
    let [p, m] = u;
    return m === void 0 || (l[p] = m), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, u) => {
    let { class: p, className: m, ...v } = u;
    return Object.entries(v).every((x) => {
      let [y, h] = x;
      return Array.isArray(h) ? h.includes({
        ...o,
        ...i
      }[y]) : {
        ...o,
        ...i
      }[y] === h;
    }) ? [
      ...l,
      p,
      m
    ] : l;
  }, []);
  return Jc(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Vi = Zf(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), lr = se.forwardRef(({ className: e, variant: t, size: r, asChild: n = !1, ...s }, o) => {
  const a = n ? Mi : "button";
  return /* @__PURE__ */ d.jsx(
    a,
    {
      "data-slot": "button",
      ref: o,
      className: $e(Vi({ variant: t, size: r, className: e })),
      ...s
    }
  );
});
function x_(e, t) {
  return $.useReducer((r, n) => t[r][n] ?? r, e);
}
var yr = (e) => {
  const { present: t, children: r } = e, n = w_(t), s = typeof r == "function" ? r({ present: n.isPresent }) : $.Children.only(r), o = Ue(n.ref, S_(s));
  return typeof r == "function" || n.isPresent ? $.cloneElement(s, { ref: o }) : null;
};
yr.displayName = "Presence";
function w_(e) {
  const [t, r] = $.useState(), n = $.useRef(null), s = $.useRef(e), o = $.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = x_(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return $.useEffect(() => {
    const l = Xn(n.current);
    o.current = i === "mounted" ? l : "none";
  }, [i]), it(() => {
    const l = n.current, u = s.current;
    if (u !== e) {
      const m = o.current, v = Xn(l);
      e ? c("MOUNT") : v === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && m !== v ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, c]), it(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, p = (v) => {
        const y = Xn(n.current).includes(CSS.escape(v.animationName));
        if (v.target === t && y && (c("ANIMATION_END"), !s.current)) {
          const h = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = h);
          });
        }
      }, m = (v) => {
        v.target === t && (o.current = Xn(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: $.useCallback((l) => {
      n.current = l ? getComputedStyle(l) : null, r(l);
    }, [])
  };
}
function Xn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function S_(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var $_ = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function E_(e) {
  const t = ({ children: r }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = $_, t;
}
var [Fo] = qt("Tooltip", [
  To
]), Lo = To(), Yf = "TooltipProvider", C_ = 700, ti = "tooltip.open", [k_, Fi] = Fo(Yf), Jf = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = C_,
    skipDelayDuration: n = 300,
    disableHoverableContent: s = !1,
    children: o
  } = e, a = $.useRef(!0), i = $.useRef(!1), c = $.useRef(0);
  return $.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ d.jsx(
    k_,
    {
      scope: t,
      isOpenDelayedRef: a,
      delayDuration: r,
      onOpen: $.useCallback(() => {
        window.clearTimeout(c.current), a.current = !1;
      }, []),
      onClose: $.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => a.current = !0,
          n
        );
      }, [n]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: $.useCallback((l) => {
        i.current = l;
      }, []),
      disableHoverableContent: s,
      children: o
    }
  );
};
Jf.displayName = Yf;
var An = "Tooltip", [j_, Vn] = Fo(An), Xf = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: s,
    onOpenChange: o,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = Fi(An, e.__scopeTooltip), l = Lo(t), [u, p] = $.useState(null), m = cr(), v = $.useRef(0), x = a ?? c.disableHoverableContent, y = i ?? c.delayDuration, h = $.useRef(!1), [_, f] = Cr({
    prop: n,
    defaultProp: s ?? !1,
    onChange: (E) => {
      E ? (c.onOpen(), document.dispatchEvent(new CustomEvent(ti))) : c.onClose(), o == null || o(E);
    },
    caller: An
  }), b = $.useMemo(() => _ ? h.current ? "delayed-open" : "instant-open" : "closed", [_]), w = $.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, h.current = !1, f(!0);
  }, [f]), g = $.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, f(!1);
  }, [f]), S = $.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      h.current = !0, f(!0), v.current = 0;
    }, y);
  }, [y, f]);
  return $.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ d.jsx(Fd, { ...l, children: /* @__PURE__ */ d.jsx(
    j_,
    {
      scope: t,
      contentId: m,
      open: _,
      stateAttribute: b,
      trigger: u,
      onTriggerChange: p,
      onTriggerEnter: $.useCallback(() => {
        c.isOpenDelayedRef.current ? S() : w();
      }, [c.isOpenDelayedRef, S, w]),
      onTriggerLeave: $.useCallback(() => {
        x ? g() : (window.clearTimeout(v.current), v.current = 0);
      }, [g, x]),
      onOpen: w,
      onClose: g,
      disableHoverableContent: x,
      children: r
    }
  ) });
};
Xf.displayName = An;
var ri = "TooltipTrigger", Qf = $.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, s = Vn(ri, r), o = Fi(ri, r), a = Lo(r), i = $.useRef(null), c = Ue(t, i, s.onTriggerChange), l = $.useRef(!1), u = $.useRef(!1), p = $.useCallback(() => l.current = !1, []);
    return $.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ d.jsx(Ld, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      De.button,
      {
        "aria-describedby": s.open ? s.contentId : void 0,
        "data-state": s.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: Se(e.onPointerMove, (m) => {
          m.pointerType !== "touch" && !u.current && !o.isPointerInTransitRef.current && (s.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: Se(e.onPointerLeave, () => {
          s.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: Se(e.onPointerDown, () => {
          s.open && s.onClose(), l.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: Se(e.onFocus, () => {
          l.current || s.onOpen();
        }),
        onBlur: Se(e.onBlur, s.onClose),
        onClick: Se(e.onClick, s.onClose)
      }
    ) });
  }
);
Qf.displayName = ri;
var Li = "TooltipPortal", [R_, P_] = Fo(Li, {
  forceMount: void 0
}), em = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: s } = e, o = Vn(Li, t);
  return /* @__PURE__ */ d.jsx(R_, { scope: t, forceMount: r, children: /* @__PURE__ */ d.jsx(yr, { present: r || o.open, children: /* @__PURE__ */ d.jsx(Oo, { asChild: !0, container: s, children: n }) }) });
};
em.displayName = Li;
var en = "TooltipContent", tm = $.forwardRef(
  (e, t) => {
    const r = P_(en, e.__scopeTooltip), { forceMount: n = r.forceMount, side: s = "top", ...o } = e, a = Vn(en, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(yr, { present: n || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ d.jsx(rm, { side: s, ...o, ref: t }) : /* @__PURE__ */ d.jsx(N_, { side: s, ...o, ref: t }) });
  }
), N_ = $.forwardRef((e, t) => {
  const r = Vn(en, e.__scopeTooltip), n = Fi(en, e.__scopeTooltip), s = $.useRef(null), o = Ue(t, s), [a, i] = $.useState(null), { trigger: c, onClose: l } = r, u = s.current, { onPointerInTransitChange: p } = n, m = $.useCallback(() => {
    i(null), p(!1);
  }, [p]), v = $.useCallback(
    (x, y) => {
      const h = x.currentTarget, _ = { x: x.clientX, y: x.clientY }, f = I_(_, h.getBoundingClientRect()), b = D_(_, f), w = M_(y.getBoundingClientRect()), g = F_([...b, ...w]);
      i(g), p(!0);
    },
    [p]
  );
  return $.useEffect(() => () => m(), [m]), $.useEffect(() => {
    if (c && u) {
      const x = (h) => v(h, u), y = (h) => v(h, c);
      return c.addEventListener("pointerleave", x), u.addEventListener("pointerleave", y), () => {
        c.removeEventListener("pointerleave", x), u.removeEventListener("pointerleave", y);
      };
    }
  }, [c, u, v, m]), $.useEffect(() => {
    if (a) {
      const x = (y) => {
        const h = y.target, _ = { x: y.clientX, y: y.clientY }, f = (c == null ? void 0 : c.contains(h)) || (u == null ? void 0 : u.contains(h)), b = !V_(_, a);
        f ? m() : b && (m(), l());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [c, u, a, l, m]), /* @__PURE__ */ d.jsx(rm, { ...e, ref: o });
}), [A_, T_] = Fo(An, { isInside: !1 }), O_ = /* @__PURE__ */ E_("TooltipContent"), rm = $.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": s,
      onEscapeKeyDown: o,
      onPointerDownOutside: a,
      ...i
    } = e, c = Vn(en, r), l = Lo(r), { onClose: u } = c;
    return $.useEffect(() => (document.addEventListener(ti, u), () => document.removeEventListener(ti, u)), [u]), $.useEffect(() => {
      if (c.trigger) {
        const p = (m) => {
          const v = m.target;
          v != null && v.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ d.jsx(
      jo,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: a,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ d.jsxs(
          zd,
          {
            "data-state": c.stateAttribute,
            ...l,
            ...i,
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ d.jsx(O_, { children: n }),
              /* @__PURE__ */ d.jsx(A_, { scope: r, isInside: !0, children: /* @__PURE__ */ d.jsx(Lv, { id: c.contentId, role: "tooltip", children: s || n }) })
            ]
          }
        )
      }
    );
  }
);
tm.displayName = en;
var nm = "TooltipArrow", sm = $.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, s = Lo(r);
    return T_(
      nm,
      r
    ).isInside ? null : /* @__PURE__ */ d.jsx(qd, { ...s, ...n, ref: t });
  }
);
sm.displayName = nm;
function I_(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), s = Math.abs(t.right - e.x), o = Math.abs(t.left - e.x);
  switch (Math.min(r, n, s, o)) {
    case o:
      return "left";
    case s:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function D_(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      n.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return n;
}
function M_(e) {
  const { top: t, right: r, bottom: n, left: s } = e;
  return [
    { x: s, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: s, y: n }
  ];
}
function V_(e, t) {
  const { x: r, y: n } = e;
  let s = !1;
  for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
    const i = t[o], c = t[a], l = i.x, u = i.y, p = c.x, m = c.y;
    u > n != m > n && r < (p - l) * (n - u) / (m - u) + l && (s = !s);
  }
  return s;
}
function F_(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), L_(t);
}
function L_(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1], a = t[t.length - 2];
      if ((o.x - a.x) * (s.y - a.y) >= (o.y - a.y) * (s.x - a.x)) t.pop();
      else break;
    }
    t.push(s);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const s = e[n];
    for (; r.length >= 2; ) {
      const o = r[r.length - 1], a = r[r.length - 2];
      if ((o.x - a.x) * (s.y - a.y) >= (o.y - a.y) * (s.x - a.x)) r.pop();
      else break;
    }
    r.push(s);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var z_ = Jf, q_ = Xf, U_ = Qf, B_ = em, W_ = tm, H_ = sm;
function G_({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    z_,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function om({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(G_, { children: /* @__PURE__ */ d.jsx(q_, { "data-slot": "tooltip", ...e }) });
}
function am({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(U_, { "data-slot": "tooltip-trigger", ...e });
}
function im({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(B_, { children: /* @__PURE__ */ d.jsxs(
    W_,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: $e(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ d.jsx(H_, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const K_ = ({
  theme: e,
  readOnly: t,
  rootType: r,
  onAddField: n,
  onOpenSettings: s
}) => {
  const { control: o } = ct();
  return /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ d.jsx(Fe, { value: "root", disabled: !0, className: "w-40" }),
    /* @__PURE__ */ d.jsxs(mn, { disabled: !0, value: r, children: [
      /* @__PURE__ */ d.jsx(pn, { className: "w-40", children: /* @__PURE__ */ d.jsx(hn, {}) }),
      /* @__PURE__ */ d.jsx(
        gn,
        {
          className: `${e} max-h-52 bg-background text-foreground border-input`,
          children: /* @__PURE__ */ d.jsx(Lt, { value: r, children: r })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      ir,
      {
        control: o,
        name: "root.title",
        render: ({ field: a }) => /* @__PURE__ */ d.jsx(
          Fe,
          {
            placeholder: "Title",
            disabled: t,
            className: "flex-1",
            ...a
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      ir,
      {
        control: o,
        name: "root.description",
        render: ({ field: a }) => /* @__PURE__ */ d.jsx(
          Fe,
          {
            placeholder: "Description",
            disabled: t,
            className: "flex-1",
            ...a
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsxs(om, { children: [
      /* @__PURE__ */ d.jsx(am, { asChild: !0, children: /* @__PURE__ */ d.jsx(lr, { disabled: !0, size: "icon", children: /* @__PURE__ */ d.jsx(Af, {}) }) }),
      /* @__PURE__ */ d.jsx(im, { children: /* @__PURE__ */ d.jsx("p", { children: "Required" }) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "border-l-2 border-input" }),
    /* @__PURE__ */ d.jsx(
      lr,
      {
        size: "icon",
        variant: "ghost",
        "data-testid": "root-settings-button",
        onClick: () => s("root"),
        children: /* @__PURE__ */ d.jsx(Nf, { className: "text-blue-500" })
      }
    ),
    r === "object" && /* @__PURE__ */ d.jsx(
      lr,
      {
        size: "icon",
        variant: "ghost",
        "data-testid": "root-add-button",
        disabled: t,
        onClick: n,
        children: /* @__PURE__ */ d.jsx(Pf, { className: "text-green-500" })
      }
    ),
    /* @__PURE__ */ d.jsx("div", {})
  ] });
}, Qn = {
  form: { width: "full", height: "md" },
  output: { position: "bottom", showJson: !0, width: "full", height: "md" },
  settings: { width: "md" },
  spacing: "md"
}, Xc = {
  sm: "max-h-[300px]",
  md: "max-h-[500px]",
  lg: "max-h-[800px]",
  full: "max-h-full"
}, Z_ = {
  sm: 300,
  md: 500,
  lg: 800,
  full: void 0
}, xa = {
  sm: "w-full max-w-[600px]",
  md: "w-full max-w-[800px]",
  lg: "w-full max-w-[1200px]",
  full: "w-full"
}, Y_ = {
  sm: "sm:max-w-[500px]",
  md: "sm:max-w-[700px]",
  lg: "sm:max-w-[1000px]",
  full: "w-full sm:max-w-full"
}, J_ = {
  top: "flex-col-reverse",
  bottom: "flex-col",
  left: "flex-row-reverse",
  right: "flex-row"
}, Qc = { sm: "gap-2", md: "gap-4", lg: "gap-6" }, X_ = [
  "string",
  "integer",
  "number",
  "boolean",
  "object",
  "array"
], Q_ = ["int-32", "int-64"], e0 = ["float", "double", "big-decimal"], t0 = [
  "date",
  "date-time",
  "local-date-time",
  "time",
  "duration",
  "email",
  "hostname",
  "ipv4",
  "ipv6",
  "password",
  "html",
  "json",
  "json-path",
  "uri",
  "uri-refrence",
  "uri-template",
  "relative-json-pointer",
  "json-pointer",
  "regex",
  "uuid"
];
// @__NO_SIDE_EFFECTS__
function r0(e) {
  const t = /* @__PURE__ */ n0(e), r = $.forwardRef((n, s) => {
    const { children: o, ...a } = n, i = $.Children.toArray(o), c = i.find(o0);
    if (c) {
      const l = c.props.children, u = i.map((p) => p === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: s, children: o });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function n0(e) {
  const t = $.forwardRef((r, n) => {
    const { children: s, ...o } = r;
    if ($.isValidElement(s)) {
      const a = i0(s), i = a0(o, s.props);
      return s.type !== $.Fragment && (i.ref = n ? an(n, a) : a), $.cloneElement(s, i);
    }
    return $.Children.count(s) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var s0 = Symbol("radix.slottable");
function o0(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === s0;
}
function a0(e, t) {
  const r = { ...t };
  for (const n in t) {
    const s = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? s && o ? r[n] = (...i) => {
      const c = o(...i);
      return s(...i), c;
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...o } : n === "className" && (r[n] = [s, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function i0(e) {
  var n, s;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var zo = "Dialog", [cm, lm] = qt(zo), [c0, Nt] = cm(zo), um = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: s,
    onOpenChange: o,
    modal: a = !0
  } = e, i = $.useRef(null), c = $.useRef(null), [l, u] = Cr({
    prop: n,
    defaultProp: s ?? !1,
    onChange: o,
    caller: zo
  });
  return /* @__PURE__ */ d.jsx(
    c0,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: cr(),
      titleId: cr(),
      descriptionId: cr(),
      open: l,
      onOpenChange: u,
      onOpenToggle: $.useCallback(() => u((p) => !p), [u]),
      modal: a,
      children: r
    }
  );
};
um.displayName = zo;
var dm = "DialogTrigger", fm = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, s = Nt(dm, r), o = Ue(t, s.triggerRef);
    return /* @__PURE__ */ d.jsx(
      De.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Ui(s.open),
        ...n,
        ref: o,
        onClick: Se(e.onClick, s.onOpenToggle)
      }
    );
  }
);
fm.displayName = dm;
var zi = "DialogPortal", [l0, mm] = cm(zi, {
  forceMount: void 0
}), hm = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: s } = e, o = Nt(zi, t);
  return /* @__PURE__ */ d.jsx(l0, { scope: t, forceMount: r, children: $.Children.map(n, (a) => /* @__PURE__ */ d.jsx(yr, { present: r || o.open, children: /* @__PURE__ */ d.jsx(Oo, { asChild: !0, container: s, children: a }) })) });
};
hm.displayName = zi;
var mo = "DialogOverlay", pm = $.forwardRef(
  (e, t) => {
    const r = mm(mo, e.__scopeDialog), { forceMount: n = r.forceMount, ...s } = e, o = Nt(mo, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ d.jsx(yr, { present: n || o.open, children: /* @__PURE__ */ d.jsx(d0, { ...s, ref: t }) }) : null;
  }
);
pm.displayName = mo;
var u0 = /* @__PURE__ */ r0("DialogOverlay.RemoveScroll"), d0 = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, s = Nt(mo, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(Ti, { as: u0, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ d.jsx(
        De.div,
        {
          "data-state": Ui(s.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Rr = "DialogContent", gm = $.forwardRef(
  (e, t) => {
    const r = mm(Rr, e.__scopeDialog), { forceMount: n = r.forceMount, ...s } = e, o = Nt(Rr, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(yr, { present: n || o.open, children: o.modal ? /* @__PURE__ */ d.jsx(f0, { ...s, ref: t }) : /* @__PURE__ */ d.jsx(m0, { ...s, ref: t }) });
  }
);
gm.displayName = Rr;
var f0 = $.forwardRef(
  (e, t) => {
    const r = Nt(Rr, e.__scopeDialog), n = $.useRef(null), s = Ue(t, r.contentRef, n);
    return $.useEffect(() => {
      const o = n.current;
      if (o) return Hd(o);
    }, []), /* @__PURE__ */ d.jsx(
      vm,
      {
        ...e,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Se(e.onCloseAutoFocus, (o) => {
          var a;
          o.preventDefault(), (a = r.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Se(e.onPointerDownOutside, (o) => {
          const a = o.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && o.preventDefault();
        }),
        onFocusOutside: Se(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), m0 = $.forwardRef(
  (e, t) => {
    const r = Nt(Rr, e.__scopeDialog), n = $.useRef(!1), s = $.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      vm,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, o), o.defaultPrevented || (n.current || (i = r.triggerRef.current) == null || i.focus(), o.preventDefault()), n.current = !1, s.current = !1;
        },
        onInteractOutside: (o) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, o), o.defaultPrevented || (n.current = !0, o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const a = o.target;
          ((l = r.triggerRef.current) == null ? void 0 : l.contains(a)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && s.current && o.preventDefault();
        }
      }
    );
  }
), vm = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: s, onCloseAutoFocus: o, ...a } = e, i = Nt(Rr, r), c = $.useRef(null), l = Ue(t, c);
    return gd(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        wi,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: s,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ d.jsx(
            jo,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Ui(i.open),
              ...a,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(p0, { titleId: i.titleId }),
        /* @__PURE__ */ d.jsx(v0, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), qi = "DialogTitle", ym = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, s = Nt(qi, r);
    return /* @__PURE__ */ d.jsx(De.h2, { id: s.titleId, ...n, ref: t });
  }
);
ym.displayName = qi;
var bm = "DialogDescription", _m = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, s = Nt(bm, r);
    return /* @__PURE__ */ d.jsx(De.p, { id: s.descriptionId, ...n, ref: t });
  }
);
_m.displayName = bm;
var xm = "DialogClose", wm = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, s = Nt(xm, r);
    return /* @__PURE__ */ d.jsx(
      De.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: Se(e.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
wm.displayName = xm;
function Ui(e) {
  return e ? "open" : "closed";
}
var Sm = "DialogTitleWarning", [h0, $m] = Ap(Sm, {
  contentName: Rr,
  titleName: qi,
  docsSlug: "dialog"
}), p0 = ({ titleId: e }) => {
  const t = $m(Sm), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return $.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, g0 = "DialogDescriptionWarning", v0 = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${$m(g0).contentName}}.`;
  return $.useEffect(() => {
    var o;
    const s = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && s && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Em = um, y0 = fm, Cm = hm, km = pm, jm = gm, Rm = ym, b0 = _m, Bi = wm, _0 = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function x0(e) {
  const t = ({ children: r }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = _0, t;
}
var Pm = "AlertDialog", [w0] = qt(Pm, [
  lm
]), tr = lm(), Nm = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = tr(t);
  return /* @__PURE__ */ d.jsx(Em, { ...n, ...r, modal: !0 });
};
Nm.displayName = Pm;
var S0 = "AlertDialogTrigger", Am = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, s = tr(r);
    return /* @__PURE__ */ d.jsx(y0, { ...s, ...n, ref: t });
  }
);
Am.displayName = S0;
var $0 = "AlertDialogPortal", Tm = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = tr(t);
  return /* @__PURE__ */ d.jsx(Cm, { ...n, ...r });
};
Tm.displayName = $0;
var E0 = "AlertDialogOverlay", Om = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, s = tr(r);
    return /* @__PURE__ */ d.jsx(km, { ...s, ...n, ref: t });
  }
);
Om.displayName = E0;
var Xr = "AlertDialogContent", [C0, k0] = w0(Xr), j0 = /* @__PURE__ */ x0("AlertDialogContent"), Im = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, children: n, ...s } = e, o = tr(r), a = $.useRef(null), i = Ue(t, a), c = $.useRef(null);
    return /* @__PURE__ */ d.jsx(
      h0,
      {
        contentName: Xr,
        titleName: Dm,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ d.jsx(C0, { scope: r, cancelRef: c, children: /* @__PURE__ */ d.jsxs(
          jm,
          {
            role: "alertdialog",
            ...o,
            ...s,
            ref: i,
            onOpenAutoFocus: Se(s.onOpenAutoFocus, (l) => {
              var u;
              l.preventDefault(), (u = c.current) == null || u.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (l) => l.preventDefault(),
            onInteractOutside: (l) => l.preventDefault(),
            children: [
              /* @__PURE__ */ d.jsx(j0, { children: n }),
              /* @__PURE__ */ d.jsx(P0, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
Im.displayName = Xr;
var Dm = "AlertDialogTitle", Mm = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, s = tr(r);
    return /* @__PURE__ */ d.jsx(Rm, { ...s, ...n, ref: t });
  }
);
Mm.displayName = Dm;
var Vm = "AlertDialogDescription", Fm = $.forwardRef((e, t) => {
  const { __scopeAlertDialog: r, ...n } = e, s = tr(r);
  return /* @__PURE__ */ d.jsx(b0, { ...s, ...n, ref: t });
});
Fm.displayName = Vm;
var R0 = "AlertDialogAction", Lm = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, s = tr(r);
    return /* @__PURE__ */ d.jsx(Bi, { ...s, ...n, ref: t });
  }
);
Lm.displayName = R0;
var zm = "AlertDialogCancel", qm = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, { cancelRef: s } = k0(zm, r), o = tr(r), a = Ue(t, s);
    return /* @__PURE__ */ d.jsx(Bi, { ...o, ...n, ref: a });
  }
);
qm.displayName = zm;
var P0 = ({ contentRef: e }) => {
  const t = `\`${Xr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Xr}\` by passing a \`${Vm}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Xr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return $.useEffect(() => {
    var n;
    document.getElementById(
      (n = e.current) == null ? void 0 : n.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, N0 = Nm, A0 = Am, T0 = Tm, O0 = Om, I0 = Im, D0 = Lm, M0 = qm, V0 = Mm, F0 = Fm;
function L0({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(N0, { "data-slot": "alert-dialog", ...e });
}
function z0({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(A0, { "data-slot": "alert-dialog-trigger", ...e });
}
function q0({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(T0, { "data-slot": "alert-dialog-portal", ...e });
}
function U0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    O0,
    {
      "data-slot": "alert-dialog-overlay",
      className: $e(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function B0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsxs(q0, { children: [
    /* @__PURE__ */ d.jsx(U0, {}),
    /* @__PURE__ */ d.jsx(
      I0,
      {
        "data-slot": "alert-dialog-content",
        className: $e(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function W0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: $e("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function H0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: $e(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function G0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    V0,
    {
      "data-slot": "alert-dialog-title",
      className: $e("text-lg font-semibold", e),
      ...t
    }
  );
}
function K0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    F0,
    {
      "data-slot": "alert-dialog-description",
      className: $e("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function Z0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    D0,
    {
      className: $e(Vi(), e),
      ...t
    }
  );
}
function Y0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    M0,
    {
      className: $e(Vi({ variant: "outline" }), e),
      ...t
    }
  );
}
const J0 = ({
  theme: e,
  readOnly: t,
  control: r,
  fieldPath: n,
  isSimpleType: s,
  isRootLevel: o,
  onRemove: a,
  onOpenSettings: i,
  onTypeChange: c
}) => {
  const l = jn({
    control: r,
    name: `${n}.key`
  });
  return /* @__PURE__ */ d.jsxs("div", { className: "p-2 flex gap-2", "data-testid": "field", children: [
    s && /* @__PURE__ */ d.jsx(
      ir,
      {
        control: r,
        name: `${n}.key`,
        render: ({ field: u }) => /* @__PURE__ */ d.jsx(
          Fe,
          {
            placeholder: "field_name",
            disabled: t,
            className: "w-40",
            ...u
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      ir,
      {
        control: r,
        name: `${n}.schema.type`,
        render: ({ field: u }) => /* @__PURE__ */ d.jsxs(
          mn,
          {
            disabled: t,
            onValueChange: (p) => {
              u.onChange(p), c(p);
            },
            value: u.value,
            children: [
              /* @__PURE__ */ d.jsx(pn, { className: "w-40", children: /* @__PURE__ */ d.jsx(hn, {}) }),
              /* @__PURE__ */ d.jsx(
                gn,
                {
                  className: `${e} max-h-52 bg-background text-foreground border-input`,
                  children: X_.map((p) => /* @__PURE__ */ d.jsx(Lt, { value: p, children: p }, p))
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      ir,
      {
        control: r,
        name: `${n}.schema.title`,
        render: ({ field: u }) => /* @__PURE__ */ d.jsx(
          Fe,
          {
            placeholder: "Title",
            disabled: t,
            className: "flex-1",
            ...u
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      ir,
      {
        control: r,
        name: `${n}.schema.description`,
        render: ({ field: u }) => /* @__PURE__ */ d.jsx(
          Fe,
          {
            placeholder: "Description",
            disabled: t,
            className: "flex-1",
            ...u
          }
        )
      }
    ),
    s && /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ d.jsx(
        ir,
        {
          control: r,
          name: `${n}.isRequired`,
          render: ({ field: u }) => /* @__PURE__ */ d.jsxs(om, { children: [
            /* @__PURE__ */ d.jsx(am, { asChild: !0, children: /* @__PURE__ */ d.jsx(
              lr,
              {
                "data-testid": "required",
                disabled: t,
                size: "icon",
                variant: u.value ? "default" : "outline",
                onClick: () => {
                  u.onChange(!u.value);
                },
                children: /* @__PURE__ */ d.jsx(Af, {})
              }
            ) }),
            /* @__PURE__ */ d.jsx(im, { children: /* @__PURE__ */ d.jsx("p", { children: "Required" }) })
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx("div", { className: "border-l-2 border-input" })
    ] }),
    /* @__PURE__ */ d.jsx(
      lr,
      {
        size: "icon",
        variant: "ghost",
        onClick: () => i(`${n}.schema`),
        children: /* @__PURE__ */ d.jsx(Nf, { className: "text-blue-500" })
      }
    ),
    o && /* @__PURE__ */ d.jsxs(L0, { children: [
      /* @__PURE__ */ d.jsx(z0, { asChild: !0, children: /* @__PURE__ */ d.jsx(
        lr,
        {
          size: "icon",
          variant: "ghost",
          "data-testid": "delete-button",
          disabled: t,
          children: /* @__PURE__ */ d.jsx(xb, { className: "text-red-500" })
        }
      ) }),
      /* @__PURE__ */ d.jsxs(B0, { className: $e("border-input", e), children: [
        /* @__PURE__ */ d.jsxs(W0, { children: [
          /* @__PURE__ */ d.jsx(G0, { className: "text-foreground", children: "Are you absolutely sure?" }),
          /* @__PURE__ */ d.jsxs(K0, { children: [
            "This action cannot be undone. This will permanently delete field",
            " ",
            l,
            "."
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs(H0, { children: [
          /* @__PURE__ */ d.jsx(Y0, { className: "text-foreground", children: "Cancel" }),
          /* @__PURE__ */ d.jsx(Z0, { onClick: a, children: "Delete" })
        ] })
      ] })
    ] })
  ] });
}, ho = ({
  theme: e,
  readOnly: t,
  fieldPath: r,
  onRemove: n,
  onOpenSettings: s,
  isSimpleType: o = !0,
  isRootLevel: a = !1
}) => {
  const { control: i, setValue: c } = ct(), l = jn({ control: i, name: `${r}.schema.type` }), { fields: u, append: p, remove: m } = fd({
    control: i,
    name: `${r}.schema.properties`
  }), v = () => {
    const y = Rn(6);
    p({
      id: y,
      key: `field_${y}`,
      isRequired: !1,
      schema: { type: "string" }
    });
  }, x = (y) => {
    let h = {};
    y === "object" ? h = { type: "object", properties: [], additionalProperties: !0 } : y === "array" ? h = { type: "array" } : h = { type: y }, c(`${r}.schema`, h);
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx(
      J0,
      {
        theme: e,
        readOnly: t,
        control: i,
        fieldPath: r,
        isSimpleType: o,
        isRootLevel: a,
        onRemove: n,
        onOpenSettings: s,
        onTypeChange: x
      }
    ),
    l === "object" && /* @__PURE__ */ d.jsxs("div", { className: "ml-2 pl-2 border-l-2 border-input", children: [
      u.map((y, h) => /* @__PURE__ */ d.jsx(
        ho,
        {
          readOnly: t,
          theme: e,
          fieldPath: `${r}.schema.properties.${h}`,
          onRemove: () => m(h),
          onOpenSettings: s,
          isRootLevel: !0
        },
        y.id
      )),
      /* @__PURE__ */ d.jsxs(
        lr,
        {
          disabled: t,
          size: "sm",
          variant: "outline",
          onClick: v,
          className: "ml-2 mt-2 mb-4 flex gap-2 text-green-500",
          children: [
            /* @__PURE__ */ d.jsx(Pf, {}),
            " Add Field"
          ]
        }
      )
    ] }),
    l === "array" && /* @__PURE__ */ d.jsx(
      "div",
      {
        className: "ml-2 pl-2 border-l-2 border-input mr-11",
        "data-testid": "field-array",
        children: /* @__PURE__ */ d.jsx(
          ho,
          {
            theme: e,
            readOnly: t,
            fieldPath: `${r}.schema.items`,
            onRemove: () => {
            },
            onOpenSettings: s,
            isSimpleType: !1
          }
        )
      }
    )
  ] }, `${r}-${l}`);
};
function X0({
  theme: e,
  readOnly: t,
  fields: r,
  onRemove: n,
  onOpenSettings: s
}) {
  return /* @__PURE__ */ d.jsx("div", { className: "pl-2 border-l-2 border-input", children: r.map((o, a) => /* @__PURE__ */ d.jsx(
    ho,
    {
      readOnly: t,
      theme: e,
      fieldPath: `properties.${a}`,
      onRemove: () => n(a),
      onOpenSettings: s,
      isRootLevel: !0
    },
    o.fieldId
  )) });
}
var Q0 = [
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
  "ul"
], ex = Q0.reduce((e, t) => {
  const r = /* @__PURE__ */ Di(`Primitive.${t}`), n = $.forwardRef((s, o) => {
    const { asChild: a, ...i } = s, c = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {}), tx = "Label", Um = $.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  ex.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var s;
      r.target.closest("button, input, select, textarea") || ((s = e.onMouseDown) == null || s.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
Um.displayName = tx;
var rx = Um;
function nx({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    rx,
    {
      "data-slot": "label",
      className: $e(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const Bm = Xu(
  {}
), Oe = ({
  ...e
}) => /* @__PURE__ */ d.jsx(Bm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d.jsx(ir, { ...e }) }), Wi = () => {
  const e = oc(Bm), t = oc(Wm), { getFieldState: r } = ct(), n = sd({ name: e.name }), s = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: o } = t;
  return {
    id: o,
    name: e.name,
    formItemId: `${o}-form-item`,
    formDescriptionId: `${o}-form-item-description`,
    formMessageId: `${o}-form-item-message`,
    ...s
  };
}, Wm = Xu(
  {}
);
function Ee({ className: e, ...t }) {
  const r = sp();
  return /* @__PURE__ */ d.jsx(Wm.Provider, { value: { id: r }, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "form-item",
      className: $e("grid gap-2", e),
      ...t
    }
  ) });
}
function Ce({
  className: e,
  ...t
}) {
  const { error: r, formItemId: n } = Wi();
  return /* @__PURE__ */ d.jsx(
    nx,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: $e("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function Pe({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: s } = Wi();
  return /* @__PURE__ */ d.jsx(
    Mi,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": t ? `${n} ${s}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function Ne({ className: e, ...t }) {
  const { error: r, formMessageId: n } = Wi(), s = r ? String((r == null ? void 0 : r.message) ?? "") : t.children;
  return s ? /* @__PURE__ */ d.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: $e("text-destructive text-sm", e),
      ...t,
      children: s
    }
  ) : null;
}
var qo = "Checkbox", [sx] = qt(qo), [ox, Hi] = sx(qo);
function ax(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: s,
    disabled: o,
    form: a,
    name: i,
    onCheckedChange: c,
    required: l,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [m, v] = Cr({
    prop: r,
    defaultProp: s ?? !1,
    onChange: c,
    caller: qo
  }), [x, y] = $.useState(null), [h, _] = $.useState(null), f = $.useRef(!1), b = x ? !!a || !!x.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), w = {
    checked: m,
    disabled: o,
    setChecked: v,
    control: x,
    setControl: y,
    name: i,
    form: a,
    value: u,
    hasConsumerStoppedPropagationRef: f,
    required: l,
    defaultChecked: ur(s) ? !1 : s,
    isFormControl: b,
    bubbleInput: h,
    setBubbleInput: _
  };
  return /* @__PURE__ */ d.jsx(
    ox,
    {
      scope: t,
      ...w,
      children: ix(p) ? p(w) : n
    }
  );
}
var Hm = "CheckboxTrigger", Gm = $.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, s) => {
    const {
      control: o,
      value: a,
      disabled: i,
      checked: c,
      required: l,
      setControl: u,
      setChecked: p,
      hasConsumerStoppedPropagationRef: m,
      isFormControl: v,
      bubbleInput: x
    } = Hi(Hm, e), y = Ue(s, u), h = $.useRef(c);
    return $.useEffect(() => {
      const _ = o == null ? void 0 : o.form;
      if (_) {
        const f = () => p(h.current);
        return _.addEventListener("reset", f), () => _.removeEventListener("reset", f);
      }
    }, [o, p]), /* @__PURE__ */ d.jsx(
      De.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": ur(c) ? "mixed" : c,
        "aria-required": l,
        "data-state": Qm(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...n,
        ref: y,
        onKeyDown: Se(t, (_) => {
          _.key === "Enter" && _.preventDefault();
        }),
        onClick: Se(r, (_) => {
          p((f) => ur(f) ? !0 : !f), x && v && (m.current = _.isPropagationStopped(), m.current || _.stopPropagation());
        })
      }
    );
  }
);
Gm.displayName = Hm;
var Km = $.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: s,
      defaultChecked: o,
      required: a,
      disabled: i,
      value: c,
      onCheckedChange: l,
      form: u,
      ...p
    } = e;
    return /* @__PURE__ */ d.jsx(
      ax,
      {
        __scopeCheckbox: r,
        checked: s,
        defaultChecked: o,
        disabled: i,
        required: a,
        onCheckedChange: l,
        name: n,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: m }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            Gm,
            {
              ...p,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          m && /* @__PURE__ */ d.jsx(
            Xm,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
Km.displayName = qo;
var Zm = "CheckboxIndicator", Ym = $.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...s } = e, o = Hi(Zm, r);
    return /* @__PURE__ */ d.jsx(
      yr,
      {
        present: n || ur(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          De.span,
          {
            "data-state": Qm(o.checked),
            "data-disabled": o.disabled ? "" : void 0,
            ...s,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Ym.displayName = Zm;
var Jm = "CheckboxBubbleInput", Xm = $.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: s,
      checked: o,
      defaultChecked: a,
      required: i,
      disabled: c,
      name: l,
      value: u,
      form: p,
      bubbleInput: m,
      setBubbleInput: v
    } = Hi(Jm, e), x = Ue(r, v), y = Ai(o), h = Ri(n);
    $.useEffect(() => {
      const f = m;
      if (!f) return;
      const b = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, S = !s.current;
      if (y !== o && g) {
        const E = new Event("click", { bubbles: S });
        f.indeterminate = ur(o), g.call(f, ur(o) ? !1 : o), f.dispatchEvent(E);
      }
    }, [m, y, o, s]);
    const _ = $.useRef(ur(o) ? !1 : o);
    return /* @__PURE__ */ d.jsx(
      De.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? _.current,
        required: i,
        disabled: c,
        name: l,
        value: u,
        form: p,
        ...t,
        tabIndex: -1,
        ref: x,
        style: {
          ...t.style,
          ...h,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Xm.displayName = Jm;
function ix(e) {
  return typeof e == "function";
}
function ur(e) {
  return e === "indeterminate";
}
function Qm(e) {
  return ur(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Uo({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Km,
    {
      "data-slot": "checkbox",
      className: $e(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(
        Ym,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ d.jsx(jf, { className: "size-3.5" })
        }
      )
    }
  );
}
const cx = Zf(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function eh({
  className: e,
  variant: t,
  asChild: r = !1,
  ...n
}) {
  const s = r ? Mi : "span";
  return /* @__PURE__ */ d.jsx(
    s,
    {
      "data-slot": "badge",
      className: $e(cx({ variant: t }), e),
      ...n
    }
  );
}
const lx = /[\n#?=&\t,./-]+/, ux = /^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g, dx = se.createContext(null), Fn = se.forwardRef(
  ({
    children: e,
    value: t,
    onValueChange: r,
    placeholder: n,
    maxItems: s,
    minItems: o,
    className: a,
    disabled: i = !1,
    dir: c,
    ...l
  }, u) => {
    const [p, m] = se.useState(-1), [v, x] = se.useState(""), [y, h] = se.useState(i), [_, f] = se.useState(i), [b, w] = se.useState(!1), [g, S] = se.useState(""), E = o ?? 0, k = s ?? 1 / 0, I = se.useCallback(
      (Z) => {
        !t.includes(Z) && t.length < k && r([...t, Z]);
      },
      [t]
    ), z = se.useCallback(
      (Z) => {
        t.includes(Z) && t.length > E && r(t.filter((ae) => ae !== Z));
      },
      [t]
    ), M = se.useCallback(
      (Z) => {
        Z.preventDefault();
        const ae = Z.clipboardData.getData("text").split(lx), L = [...t];
        ae.forEach((ve) => {
          const G = ve.replaceAll(ux, "").trim();
          G.length > 0 && !L.includes(G) && L.length < k && L.push(G);
        }), r(L), x("");
      },
      [t]
    ), V = se.useCallback(
      (Z) => {
        const ae = Z.currentTarget, L = ae.value.substring(
          ae.selectionStart ?? 0,
          ae.selectionEnd ?? 0
        );
        S(L), w(L === v);
      },
      [v]
    );
    se.useEffect(() => {
      (() => {
        i == !1 && (t.length - 1 >= E ? f(!1) : f(!0), t.length + 1 <= k ? h(!1) : h(!0));
      })();
    }, [t]);
    const F = se.useCallback(
      async (Z) => {
        Z.stopPropagation();
        const ae = () => {
          const T = p + 1 > t.length - 1 ? -1 : p + 1;
          m(T);
        }, L = () => {
          const T = p - 1 < 0 ? t.length - 1 : p - 1;
          m(T);
        }, ve = () => {
          const T = p - 1 <= 0 ? t.length - 1 === 0 ? -1 : 0 : p - 1;
          m(T);
        }, G = Z.currentTarget;
        switch (Z.key) {
          case "ArrowLeft":
            c === "rtl" ? t.length > 0 && p !== -1 && ae() : t.length > 0 && G.selectionStart === 0 && L();
            break;
          case "ArrowRight":
            c === "rtl" ? t.length > 0 && G.selectionStart === 0 && L() : t.length > 0 && p !== -1 && ae();
            break;
          case "Backspace":
          case "Delete":
            t.length > 0 && (p !== -1 && p < t.length ? (z(t[p]), ve()) : G.selectionStart === 0 && (g === v || b) && z(t[t.length - 1]));
            break;
          case "Escape":
            const T = p === -1 ? t.length - 1 : -1;
            m(T);
            break;
          case "Enter":
            v.trim() !== "" && (Z.preventDefault(), I(v), x(""));
            break;
        }
      },
      [p, t, v, z]
    ), W = se.useCallback((Z) => {
      Z.preventDefault(), Z.stopPropagation();
    }, []), te = se.useCallback(
      (Z) => {
        x(Z.currentTarget.value);
      },
      []
    );
    return /* @__PURE__ */ d.jsx(
      dx.Provider,
      {
        value: {
          value: t,
          onValueChange: r,
          inputValue: v,
          setInputValue: x,
          activeIndex: p,
          setActiveIndex: m
        },
        children: /* @__PURE__ */ d.jsxs(
          "div",
          {
            ...l,
            ref: u,
            dir: c,
            className: $e(
              "flex items-center flex-wrap gap-1 rounded-lg bg-background overflow-hidden",
              {
                "focus-within:ring-ring": p === -1
              },
              a
            ),
            children: [
              t.map((Z, ae) => /* @__PURE__ */ d.jsxs(
                eh,
                {
                  tabIndex: p !== -1 ? 0 : p,
                  "aria-disabled": _,
                  "data-active": p === ae,
                  className: $e(
                    "relative px-1 rounded flex items-center gap-1 data-[active='true']:ring-2 data-[active='true']:ring-muted-foreground truncate aria-disabled:opacity-50 aria-disabled:cursor-not-allowed"
                  ),
                  variant: "secondary",
                  children: [
                    /* @__PURE__ */ d.jsx("span", { className: "text-xs", children: Z }),
                    /* @__PURE__ */ d.jsxs(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${Z} option`,
                        "aria-roledescription": "button to remove option",
                        disabled: _,
                        onMouseDown: W,
                        onClick: () => z(Z),
                        className: "disabled:cursor-not-allowed",
                        children: [
                          /* @__PURE__ */ d.jsxs("span", { className: "sr-only", children: [
                            "Remove ",
                            Z,
                            " option"
                          ] }),
                          /* @__PURE__ */ d.jsx(Tf, { className: "h-4 w-4 hover:stroke-destructive" })
                        ]
                      }
                    )
                  ]
                },
                Z
              )),
              /* @__PURE__ */ d.jsx(
                Fe,
                {
                  tabIndex: 0,
                  "aria-label": "input tag",
                  disabled: y,
                  onKeyDown: F,
                  onPaste: M,
                  value: v,
                  onSelect: V,
                  onChange: p === -1 ? te : void 0,
                  placeholder: n,
                  onClick: () => m(-1),
                  className: $e(
                    "border border-input h-9 min-w-fit flex-1 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground px-2",
                    p !== -1 && "caret-transparent"
                  )
                }
              )
            ]
          }
        )
      }
    );
  }
);
Fn.displayName = "TagsInput";
const fx = ({
  theme: e,
  basePath: t,
  readOnly: r
}) => {
  const { control: n, watch: s } = ct(), o = s(`${t}.enumEnabled`);
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.default`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Default Value" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Fe,
            {
              type: "number",
              disabled: r,
              ...a,
              onChange: (i) => a.onChange(
                i.target.value === "" ? null : Number(i.target.value)
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.minimum`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Minimum Value" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.maximum`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Maximum Value" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.exclusiveMin`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Exclusive Minimum" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.exclusiveMax`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Exclusive Maximum" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.multipleOf`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Multiple Of" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Fe,
            {
              type: "number",
              disabled: r,
              ...a,
              onChange: (i) => a.onChange(
                i.target.value === "" ? null : Number(i.target.value)
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.format`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Format" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsxs(
            mn,
            {
              onValueChange: a.onChange,
              defaultValue: a.value,
              disabled: r,
              children: [
                /* @__PURE__ */ d.jsx(pn, { children: /* @__PURE__ */ d.jsx(hn, { placeholder: "Choose data type" }) }),
                /* @__PURE__ */ d.jsxs(
                  gn,
                  {
                    className: `${e} max-h-48 bg-background text-foreground border-input`,
                    children: [
                      /* @__PURE__ */ d.jsx(Lt, { value: "none", children: "none" }),
                      e0.map((i) => /* @__PURE__ */ d.jsx(Lt, { value: i, children: i }, i))
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.enumEnabled`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "p-4 flex border border-input rounded-md", children: [
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Uo,
            {
              disabled: r,
              ...a,
              checked: a.value,
              onCheckedChange: a.onChange
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ce, { className: "ml-2", children: "Enable Enum" }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    o && /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.enumInput`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Enum Values" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Fn,
            {
              disabled: r,
              value: a.value || [],
              onValueChange: a.onChange,
              placeholder: "Enter your enums"
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    )
  ] });
}, mx = ({
  theme: e,
  basePath: t,
  readOnly: r
}) => {
  const { control: n, watch: s } = ct(), o = s(`${t}.enumEnabled`);
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.default`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Default Value" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(Fe, { disabled: r, ...a }) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.minLength`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Minimum Length" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.maxLength`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Maximum Length" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.pattern`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Pattern (Regular Expression)" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(Fe, { disabled: r, ...a }) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.format`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Format" }),
          /* @__PURE__ */ d.jsxs(
            mn,
            {
              onValueChange: a.onChange,
              defaultValue: a.value,
              disabled: r,
              children: [
                /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(pn, { children: /* @__PURE__ */ d.jsx(hn, { placeholder: "Choose data type" }) }) }),
                /* @__PURE__ */ d.jsxs(
                  gn,
                  {
                    className: `${e} max-h-48 bg-background text-foreground border-input`,
                    children: [
                      /* @__PURE__ */ d.jsx(Lt, { value: "none", children: "none" }),
                      t0.map((i) => /* @__PURE__ */ d.jsx(Lt, { value: i, children: i }, i))
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.enumEnabled`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "p-4 flex border border-input rounded-md", children: [
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Uo,
            {
              disabled: r,
              ...a,
              checked: a.value,
              onCheckedChange: a.onChange
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ce, { className: "ml-2", children: "Enable Enum" }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    o && /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.enumInput`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Enum Values" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Fn,
            {
              disabled: r,
              value: a.value || [],
              onValueChange: a.onChange,
              placeholder: "Enter your enums"
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    )
  ] });
}, hx = ({
  theme: e,
  basePath: t,
  readOnly: r
}) => {
  const { control: n } = ct();
  return /* @__PURE__ */ d.jsx("form", { children: /* @__PURE__ */ d.jsx(
    Oe,
    {
      control: n,
      name: `${t}.default`,
      render: ({ field: s }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex gap-2", children: [
        /* @__PURE__ */ d.jsx(Ce, { children: "Default Value" }),
        /* @__PURE__ */ d.jsxs(
          mn,
          {
            onValueChange: s.onChange,
            defaultValue: s.value,
            disabled: r,
            children: [
              /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(pn, { children: /* @__PURE__ */ d.jsx(hn, { placeholder: "False" }) }) }),
              /* @__PURE__ */ d.jsxs(
                gn,
                {
                  className: `${e} max-h-48 bg-background text-foreground border-input`,
                  children: [
                    /* @__PURE__ */ d.jsx(Lt, { value: "true", "data-testid": "true", children: "True" }),
                    /* @__PURE__ */ d.jsx(Lt, { value: "false", children: "False" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ d.jsx(Ne, {})
      ] })
    }
  ) });
}, px = ({ basePath: e, readOnly: t }) => {
  const { control: r } = ct();
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: r,
          name: `${e}.minItems`,
          render: ({ field: n }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Minimum Items" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: t,
                ...n,
                value: n.value ?? "",
                onChange: (s) => n.onChange(
                  s.target.value === "" ? null : Number(s.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: r,
          name: `${e}.maxItems`,
          render: ({ field: n }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Maximum Items" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: t,
                ...n,
                value: n.value ?? "",
                onChange: (s) => n.onChange(
                  s.target.value === "" ? null : Number(s.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: r,
          name: `${e}.minContains`,
          render: ({ field: n }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Minimum Contains" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: t,
                ...n,
                value: n.value ?? "",
                onChange: (s) => n.onChange(
                  s.target.value === "" ? null : Number(s.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: r,
          name: `${e}.maxContains`,
          render: ({ field: n }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Maximum Contains" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: t,
                ...n,
                value: n.value ?? "",
                onChange: (s) => n.onChange(
                  s.target.value === "" ? null : Number(s.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: r,
        name: `${e}.uniqueItems`,
        render: ({ field: n }) => /* @__PURE__ */ d.jsxs(Ee, { className: "p-4 flex border border-input rounded-md", children: [
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Uo,
            {
              checked: n.value,
              onCheckedChange: n.onChange,
              disabled: t
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ce, { className: "ml-2", children: "Unique Items" }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    )
  ] });
}, gx = ({
  theme: e,
  basePath: t,
  readOnly: r
}) => {
  const { control: n, watch: s } = ct(), o = s(`${t}.enumEnabled`);
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.default`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Default Value" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Fe,
            {
              type: "number",
              disabled: r,
              ...a,
              onChange: (i) => a.onChange(
                i.target.value === "" ? null : Number(i.target.value)
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.minimum`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Minimum Value" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.maximum`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Maximum Value" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.exclusiveMin`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Exclusive Minimum" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: n,
          name: `${t}.exclusiveMax`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Exclusive Maximum" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.multipleOf`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Multiple Of" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Fe,
            {
              type: "number",
              disabled: r,
              ...a,
              onChange: (i) => a.onChange(
                i.target.value === "" ? null : Number(i.target.value)
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.format`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Format" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsxs(
            mn,
            {
              onValueChange: a.onChange,
              defaultValue: a.value,
              disabled: r,
              children: [
                /* @__PURE__ */ d.jsx(pn, { children: /* @__PURE__ */ d.jsx(hn, { placeholder: "Choose data type" }) }),
                /* @__PURE__ */ d.jsxs(
                  gn,
                  {
                    className: `${e} max-h-48 bg-background text-foreground border-input`,
                    children: [
                      /* @__PURE__ */ d.jsx(Lt, { value: "none", children: "none" }),
                      Q_.map((i) => /* @__PURE__ */ d.jsx(Lt, { value: i, children: i }, i))
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.enumEnabled`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { className: "p-4 flex border border-input rounded-md", children: [
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Uo,
            {
              disabled: r,
              ...a,
              checked: a.value,
              onCheckedChange: a.onChange,
              defaultValue: 0
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ce, { className: "ml-2", children: "Enable Enum" }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    o && /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: n,
        name: `${t}.enumInput`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Enum Values" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Fn,
            {
              disabled: r,
              value: a.value || [],
              onValueChange: a.onChange,
              placeholder: "Enter your enums"
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    )
  ] });
};
var es = { exports: {} }, wa = {}, Gt = {}, xr = {}, Sa = {}, $a = {}, Ea = {}, el;
function po() {
  return el || (el = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
      constructor(f) {
        if (super(), !e.IDENTIFIER.test(f))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = f;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    e.Name = r;
    class n extends t {
      constructor(f) {
        super(), this._items = typeof f == "string" ? [f] : f;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const f = this._items[0];
        return f === "" || f === '""';
      }
      get str() {
        var f;
        return (f = this._str) !== null && f !== void 0 ? f : this._str = this._items.reduce((b, w) => `${b}${w}`, "");
      }
      get names() {
        var f;
        return (f = this._names) !== null && f !== void 0 ? f : this._names = this._items.reduce((b, w) => (w instanceof r && (b[w.str] = (b[w.str] || 0) + 1), b), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function s(_, ...f) {
      const b = [_[0]];
      let w = 0;
      for (; w < f.length; )
        i(b, f[w]), b.push(_[++w]);
      return new n(b);
    }
    e._ = s;
    const o = new n("+");
    function a(_, ...f) {
      const b = [v(_[0])];
      let w = 0;
      for (; w < f.length; )
        b.push(o), i(b, f[w]), b.push(o, v(_[++w]));
      return c(b), new n(b);
    }
    e.str = a;
    function i(_, f) {
      f instanceof n ? _.push(...f._items) : f instanceof r ? _.push(f) : _.push(p(f));
    }
    e.addCodeArg = i;
    function c(_) {
      let f = 1;
      for (; f < _.length - 1; ) {
        if (_[f] === o) {
          const b = l(_[f - 1], _[f + 1]);
          if (b !== void 0) {
            _.splice(f - 1, 3, b);
            continue;
          }
          _[f++] = "+";
        }
        f++;
      }
    }
    function l(_, f) {
      if (f === '""')
        return _;
      if (_ === '""')
        return f;
      if (typeof _ == "string")
        return f instanceof r || _[_.length - 1] !== '"' ? void 0 : typeof f != "string" ? `${_.slice(0, -1)}${f}"` : f[0] === '"' ? _.slice(0, -1) + f.slice(1) : void 0;
      if (typeof f == "string" && f[0] === '"' && !(_ instanceof r))
        return `"${_}${f.slice(1)}`;
    }
    function u(_, f) {
      return f.emptyStr() ? _ : _.emptyStr() ? f : a`${_}${f}`;
    }
    e.strConcat = u;
    function p(_) {
      return typeof _ == "number" || typeof _ == "boolean" || _ === null ? _ : v(Array.isArray(_) ? _.join(",") : _);
    }
    function m(_) {
      return new n(v(_));
    }
    e.stringify = m;
    function v(_) {
      return JSON.stringify(_).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
    function x(_) {
      return typeof _ == "string" && e.IDENTIFIER.test(_) ? new n(`.${_}`) : s`[${_}]`;
    }
    e.getProperty = x;
    function y(_) {
      if (typeof _ == "string" && e.IDENTIFIER.test(_))
        return new n(`${_}`);
      throw new Error(`CodeGen: invalid export name: ${_}, use explicit $id name mapping`);
    }
    e.getEsmExportName = y;
    function h(_) {
      return new n(_.toString());
    }
    e.regexpCode = h;
  })(Ea)), Ea;
}
var Ca = {}, tl;
function rl() {
  return tl || (tl = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = po();
    class r extends Error {
      constructor(l) {
        super(`CodeGen: "code" for ${l} not defined`), this.value = l.value;
      }
    }
    var n;
    (function(c) {
      c[c.Started = 0] = "Started", c[c.Completed = 1] = "Completed";
    })(n || (e.UsedValueState = n = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class s {
      constructor({ prefixes: l, parent: u } = {}) {
        this._names = {}, this._prefixes = l, this._parent = u;
      }
      toName(l) {
        return l instanceof t.Name ? l : this.name(l);
      }
      name(l) {
        return new t.Name(this._newName(l));
      }
      _newName(l) {
        const u = this._names[l] || this._nameGroup(l);
        return `${l}${u.index++}`;
      }
      _nameGroup(l) {
        var u, p;
        if (!((p = (u = this._parent) === null || u === void 0 ? void 0 : u._prefixes) === null || p === void 0) && p.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = s;
    class o extends t.Name {
      constructor(l, u) {
        super(u), this.prefix = l;
      }
      setValue(l, { property: u, itemIndex: p }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(u)}[${p}]`;
      }
    }
    e.ValueScopeName = o;
    const a = (0, t._)`\n`;
    class i extends s {
      constructor(l) {
        super(l), this._values = {}, this._scope = l.scope, this.opts = { ...l, _n: l.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new o(l, this._newName(l));
      }
      value(l, u) {
        var p;
        if (u.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const m = this.toName(l), { prefix: v } = m, x = (p = u.key) !== null && p !== void 0 ? p : u.ref;
        let y = this._values[v];
        if (y) {
          const f = y.get(x);
          if (f)
            return f;
        } else
          y = this._values[v] = /* @__PURE__ */ new Map();
        y.set(x, m);
        const h = this._scope[v] || (this._scope[v] = []), _ = h.length;
        return h[_] = u.ref, m.setValue(u, { property: v, itemIndex: _ }), m;
      }
      getValue(l, u) {
        const p = this._values[l];
        if (p)
          return p.get(u);
      }
      scopeRefs(l, u = this._values) {
        return this._reduceValues(u, (p) => {
          if (p.scopePath === void 0)
            throw new Error(`CodeGen: name "${p}" has no value`);
          return (0, t._)`${l}${p.scopePath}`;
        });
      }
      scopeCode(l = this._values, u, p) {
        return this._reduceValues(l, (m) => {
          if (m.value === void 0)
            throw new Error(`CodeGen: name "${m}" has no value`);
          return m.value.code;
        }, u, p);
      }
      _reduceValues(l, u, p = {}, m) {
        let v = t.nil;
        for (const x in l) {
          const y = l[x];
          if (!y)
            continue;
          const h = p[x] = p[x] || /* @__PURE__ */ new Map();
          y.forEach((_) => {
            if (h.has(_))
              return;
            h.set(_, n.Started);
            let f = u(_);
            if (f) {
              const b = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              v = (0, t._)`${v}${b} ${_} = ${f};${this.opts._n}`;
            } else if (f = m == null ? void 0 : m(_))
              v = (0, t._)`${v}${f}${this.opts._n}`;
            else
              throw new r(_);
            h.set(_, n.Completed);
          });
        }
        return v;
      }
    }
    e.ValueScope = i;
  })(Ca)), Ca;
}
var nl;
function we() {
  return nl || (nl = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = po(), r = rl();
    var n = po();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return n._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return n.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return n.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return n.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return n.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return n.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return n.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return n.Name;
    } });
    var s = rl();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return s.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return s.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return s.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return s.varKinds;
    } }), e.operators = {
      GT: new t._Code(">"),
      GTE: new t._Code(">="),
      LT: new t._Code("<"),
      LTE: new t._Code("<="),
      EQ: new t._Code("==="),
      NEQ: new t._Code("!=="),
      NOT: new t._Code("!"),
      OR: new t._Code("||"),
      AND: new t._Code("&&"),
      ADD: new t._Code("+")
    };
    class o {
      optimizeNodes() {
        return this;
      }
      optimizeNames(C, R) {
        return this;
      }
    }
    class a extends o {
      constructor(C, R, q) {
        super(), this.varKind = C, this.name = R, this.rhs = q;
      }
      render({ es5: C, _n: R }) {
        const q = C ? r.varKinds.var : this.varKind, B = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${q} ${this.name}${B};` + R;
      }
      optimizeNames(C, R) {
        if (C[this.name.str])
          return this.rhs && (this.rhs = W(this.rhs, C, R)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends o {
      constructor(C, R, q) {
        super(), this.lhs = C, this.rhs = R, this.sideEffects = q;
      }
      render({ _n: C }) {
        return `${this.lhs} = ${this.rhs};` + C;
      }
      optimizeNames(C, R) {
        if (!(this.lhs instanceof t.Name && !C[this.lhs.str] && !this.sideEffects))
          return this.rhs = W(this.rhs, C, R), this;
      }
      get names() {
        const C = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return F(C, this.rhs);
      }
    }
    class c extends i {
      constructor(C, R, q, B) {
        super(C, q, B), this.op = R;
      }
      render({ _n: C }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + C;
      }
    }
    class l extends o {
      constructor(C) {
        super(), this.label = C, this.names = {};
      }
      render({ _n: C }) {
        return `${this.label}:` + C;
      }
    }
    class u extends o {
      constructor(C) {
        super(), this.label = C, this.names = {};
      }
      render({ _n: C }) {
        return `break${this.label ? ` ${this.label}` : ""};` + C;
      }
    }
    class p extends o {
      constructor(C) {
        super(), this.error = C;
      }
      render({ _n: C }) {
        return `throw ${this.error};` + C;
      }
      get names() {
        return this.error.names;
      }
    }
    class m extends o {
      constructor(C) {
        super(), this.code = C;
      }
      render({ _n: C }) {
        return `${this.code};` + C;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(C, R) {
        return this.code = W(this.code, C, R), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class v extends o {
      constructor(C = []) {
        super(), this.nodes = C;
      }
      render(C) {
        return this.nodes.reduce((R, q) => R + q.render(C), "");
      }
      optimizeNodes() {
        const { nodes: C } = this;
        let R = C.length;
        for (; R--; ) {
          const q = C[R].optimizeNodes();
          Array.isArray(q) ? C.splice(R, 1, ...q) : q ? C[R] = q : C.splice(R, 1);
        }
        return C.length > 0 ? this : void 0;
      }
      optimizeNames(C, R) {
        const { nodes: q } = this;
        let B = q.length;
        for (; B--; ) {
          const X = q[B];
          X.optimizeNames(C, R) || (te(C, X.names), q.splice(B, 1));
        }
        return q.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((C, R) => V(C, R.names), {});
      }
    }
    class x extends v {
      render(C) {
        return "{" + C._n + super.render(C) + "}" + C._n;
      }
    }
    class y extends v {
    }
    class h extends x {
    }
    h.kind = "else";
    class _ extends x {
      constructor(C, R) {
        super(R), this.condition = C;
      }
      render(C) {
        let R = `if(${this.condition})` + super.render(C);
        return this.else && (R += "else " + this.else.render(C)), R;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const C = this.condition;
        if (C === !0)
          return this.nodes;
        let R = this.else;
        if (R) {
          const q = R.optimizeNodes();
          R = this.else = Array.isArray(q) ? new h(q) : q;
        }
        if (R)
          return C === !1 ? R instanceof _ ? R : R.nodes : this.nodes.length ? this : new _(Z(C), R instanceof _ ? [R] : R.nodes);
        if (!(C === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(C, R) {
        var q;
        if (this.else = (q = this.else) === null || q === void 0 ? void 0 : q.optimizeNames(C, R), !!(super.optimizeNames(C, R) || this.else))
          return this.condition = W(this.condition, C, R), this;
      }
      get names() {
        const C = super.names;
        return F(C, this.condition), this.else && V(C, this.else.names), C;
      }
    }
    _.kind = "if";
    class f extends x {
    }
    f.kind = "for";
    class b extends f {
      constructor(C) {
        super(), this.iteration = C;
      }
      render(C) {
        return `for(${this.iteration})` + super.render(C);
      }
      optimizeNames(C, R) {
        if (super.optimizeNames(C, R))
          return this.iteration = W(this.iteration, C, R), this;
      }
      get names() {
        return V(super.names, this.iteration.names);
      }
    }
    class w extends f {
      constructor(C, R, q, B) {
        super(), this.varKind = C, this.name = R, this.from = q, this.to = B;
      }
      render(C) {
        const R = C.es5 ? r.varKinds.var : this.varKind, { name: q, from: B, to: X } = this;
        return `for(${R} ${q}=${B}; ${q}<${X}; ${q}++)` + super.render(C);
      }
      get names() {
        const C = F(super.names, this.from);
        return F(C, this.to);
      }
    }
    class g extends f {
      constructor(C, R, q, B) {
        super(), this.loop = C, this.varKind = R, this.name = q, this.iterable = B;
      }
      render(C) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(C);
      }
      optimizeNames(C, R) {
        if (super.optimizeNames(C, R))
          return this.iterable = W(this.iterable, C, R), this;
      }
      get names() {
        return V(super.names, this.iterable.names);
      }
    }
    class S extends x {
      constructor(C, R, q) {
        super(), this.name = C, this.args = R, this.async = q;
      }
      render(C) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(C);
      }
    }
    S.kind = "func";
    class E extends v {
      render(C) {
        return "return " + super.render(C);
      }
    }
    E.kind = "return";
    class k extends x {
      render(C) {
        let R = "try" + super.render(C);
        return this.catch && (R += this.catch.render(C)), this.finally && (R += this.finally.render(C)), R;
      }
      optimizeNodes() {
        var C, R;
        return super.optimizeNodes(), (C = this.catch) === null || C === void 0 || C.optimizeNodes(), (R = this.finally) === null || R === void 0 || R.optimizeNodes(), this;
      }
      optimizeNames(C, R) {
        var q, B;
        return super.optimizeNames(C, R), (q = this.catch) === null || q === void 0 || q.optimizeNames(C, R), (B = this.finally) === null || B === void 0 || B.optimizeNames(C, R), this;
      }
      get names() {
        const C = super.names;
        return this.catch && V(C, this.catch.names), this.finally && V(C, this.finally.names), C;
      }
    }
    class I extends x {
      constructor(C) {
        super(), this.error = C;
      }
      render(C) {
        return `catch(${this.error})` + super.render(C);
      }
    }
    I.kind = "catch";
    class z extends x {
      render(C) {
        return "finally" + super.render(C);
      }
    }
    z.kind = "finally";
    class M {
      constructor(C, R = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...R, _n: R.lines ? `
` : "" }, this._extScope = C, this._scope = new r.Scope({ parent: C }), this._nodes = [new y()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(C) {
        return this._scope.name(C);
      }
      // reserves unique name in the external scope
      scopeName(C) {
        return this._extScope.name(C);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(C, R) {
        const q = this._extScope.value(C, R);
        return (this._values[q.prefix] || (this._values[q.prefix] = /* @__PURE__ */ new Set())).add(q), q;
      }
      getScopeValue(C, R) {
        return this._extScope.getValue(C, R);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(C) {
        return this._extScope.scopeRefs(C, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(C, R, q, B) {
        const X = this._scope.toName(R);
        return q !== void 0 && B && (this._constants[X.str] = q), this._leafNode(new a(C, X, q)), X;
      }
      // `const` declaration (`var` in es5 mode)
      const(C, R, q) {
        return this._def(r.varKinds.const, C, R, q);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(C, R, q) {
        return this._def(r.varKinds.let, C, R, q);
      }
      // `var` declaration with optional assignment
      var(C, R, q) {
        return this._def(r.varKinds.var, C, R, q);
      }
      // assignment code
      assign(C, R, q) {
        return this._leafNode(new i(C, R, q));
      }
      // `+=` code
      add(C, R) {
        return this._leafNode(new c(C, e.operators.ADD, R));
      }
      // appends passed SafeExpr to code or executes Block
      code(C) {
        return typeof C == "function" ? C() : C !== t.nil && this._leafNode(new m(C)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...C) {
        const R = ["{"];
        for (const [q, B] of C)
          R.length > 1 && R.push(","), R.push(q), (q !== B || this.opts.es5) && (R.push(":"), (0, t.addCodeArg)(R, B));
        return R.push("}"), new t._Code(R);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(C, R, q) {
        if (this._blockNode(new _(C)), R && q)
          this.code(R).else().code(q).endIf();
        else if (R)
          this.code(R).endIf();
        else if (q)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(C) {
        return this._elseNode(new _(C));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(_, h);
      }
      _for(C, R) {
        return this._blockNode(C), R && this.code(R).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(C, R) {
        return this._for(new b(C), R);
      }
      // `for` statement for a range of values
      forRange(C, R, q, B, X = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const pe = this._scope.toName(C);
        return this._for(new w(X, pe, R, q), () => B(pe));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(C, R, q, B = r.varKinds.const) {
        const X = this._scope.toName(C);
        if (this.opts.es5) {
          const pe = R instanceof t.Name ? R : this.var("_arr", R);
          return this.forRange("_i", 0, (0, t._)`${pe}.length`, (ie) => {
            this.var(X, (0, t._)`${pe}[${ie}]`), q(X);
          });
        }
        return this._for(new g("of", B, X, R), () => q(X));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(C, R, q, B = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(C, (0, t._)`Object.keys(${R})`, q);
        const X = this._scope.toName(C);
        return this._for(new g("in", B, X, R), () => q(X));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(f);
      }
      // `label` statement
      label(C) {
        return this._leafNode(new l(C));
      }
      // `break` statement
      break(C) {
        return this._leafNode(new u(C));
      }
      // `return` statement
      return(C) {
        const R = new E();
        if (this._blockNode(R), this.code(C), R.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(E);
      }
      // `try` statement
      try(C, R, q) {
        if (!R && !q)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const B = new k();
        if (this._blockNode(B), this.code(C), R) {
          const X = this.name("e");
          this._currNode = B.catch = new I(X), R(X);
        }
        return q && (this._currNode = B.finally = new z(), this.code(q)), this._endBlockNode(I, z);
      }
      // `throw` statement
      throw(C) {
        return this._leafNode(new p(C));
      }
      // start self-balancing block
      block(C, R) {
        return this._blockStarts.push(this._nodes.length), C && this.code(C).endBlock(R), this;
      }
      // end the current self-balancing block
      endBlock(C) {
        const R = this._blockStarts.pop();
        if (R === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const q = this._nodes.length - R;
        if (q < 0 || C !== void 0 && q !== C)
          throw new Error(`CodeGen: wrong number of nodes: ${q} vs ${C} expected`);
        return this._nodes.length = R, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(C, R = t.nil, q, B) {
        return this._blockNode(new S(C, R, q)), B && this.code(B).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(S);
      }
      optimize(C = 1) {
        for (; C-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(C) {
        return this._currNode.nodes.push(C), this;
      }
      _blockNode(C) {
        this._currNode.nodes.push(C), this._nodes.push(C);
      }
      _endBlockNode(C, R) {
        const q = this._currNode;
        if (q instanceof C || R && q instanceof R)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${R ? `${C.kind}/${R.kind}` : C.kind}"`);
      }
      _elseNode(C) {
        const R = this._currNode;
        if (!(R instanceof _))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = R.else = C, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const C = this._nodes;
        return C[C.length - 1];
      }
      set _currNode(C) {
        const R = this._nodes;
        R[R.length - 1] = C;
      }
    }
    e.CodeGen = M;
    function V(O, C) {
      for (const R in C)
        O[R] = (O[R] || 0) + (C[R] || 0);
      return O;
    }
    function F(O, C) {
      return C instanceof t._CodeOrName ? V(O, C.names) : O;
    }
    function W(O, C, R) {
      if (O instanceof t.Name)
        return q(O);
      if (!B(O))
        return O;
      return new t._Code(O._items.reduce((X, pe) => (pe instanceof t.Name && (pe = q(pe)), pe instanceof t._Code ? X.push(...pe._items) : X.push(pe), X), []));
      function q(X) {
        const pe = R[X.str];
        return pe === void 0 || C[X.str] !== 1 ? X : (delete C[X.str], pe);
      }
      function B(X) {
        return X instanceof t._Code && X._items.some((pe) => pe instanceof t.Name && C[pe.str] === 1 && R[pe.str] !== void 0);
      }
    }
    function te(O, C) {
      for (const R in C)
        O[R] = (O[R] || 0) - (C[R] || 0);
    }
    function Z(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, t._)`!${K(O)}`;
    }
    e.not = Z;
    const ae = T(e.operators.AND);
    function L(...O) {
      return O.reduce(ae);
    }
    e.and = L;
    const ve = T(e.operators.OR);
    function G(...O) {
      return O.reduce(ve);
    }
    e.or = G;
    function T(O) {
      return (C, R) => C === t.nil ? R : R === t.nil ? C : (0, t._)`${K(C)} ${O} ${K(R)}`;
    }
    function K(O) {
      return O instanceof t.Name ? O : (0, t._)`(${O})`;
    }
  })($a)), $a;
}
var je = {}, sl;
function Ie() {
  if (sl) return je;
  sl = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.checkStrictMode = je.getErrorPath = je.Type = je.useFunc = je.setEvaluated = je.evaluatedPropsToName = je.mergeEvaluated = je.eachItem = je.unescapeJsonPointer = je.escapeJsonPointer = je.escapeFragment = je.unescapeFragment = je.schemaRefOrVal = je.schemaHasRulesButRef = je.schemaHasRules = je.checkUnknownRules = je.alwaysValidSchema = je.toHash = void 0;
  const e = we(), t = po();
  function r(g) {
    const S = {};
    for (const E of g)
      S[E] = !0;
    return S;
  }
  je.toHash = r;
  function n(g, S) {
    return typeof S == "boolean" ? S : Object.keys(S).length === 0 ? !0 : (s(g, S), !o(S, g.self.RULES.all));
  }
  je.alwaysValidSchema = n;
  function s(g, S = g.schema) {
    const { opts: E, self: k } = g;
    if (!E.strictSchema || typeof S == "boolean")
      return;
    const I = k.RULES.keywords;
    for (const z in S)
      I[z] || w(g, `unknown keyword: "${z}"`);
  }
  je.checkUnknownRules = s;
  function o(g, S) {
    if (typeof g == "boolean")
      return !g;
    for (const E in g)
      if (S[E])
        return !0;
    return !1;
  }
  je.schemaHasRules = o;
  function a(g, S) {
    if (typeof g == "boolean")
      return !g;
    for (const E in g)
      if (E !== "$ref" && S.all[E])
        return !0;
    return !1;
  }
  je.schemaHasRulesButRef = a;
  function i({ topSchemaRef: g, schemaPath: S }, E, k, I) {
    if (!I) {
      if (typeof E == "number" || typeof E == "boolean")
        return E;
      if (typeof E == "string")
        return (0, e._)`${E}`;
    }
    return (0, e._)`${g}${S}${(0, e.getProperty)(k)}`;
  }
  je.schemaRefOrVal = i;
  function c(g) {
    return p(decodeURIComponent(g));
  }
  je.unescapeFragment = c;
  function l(g) {
    return encodeURIComponent(u(g));
  }
  je.escapeFragment = l;
  function u(g) {
    return typeof g == "number" ? `${g}` : g.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  je.escapeJsonPointer = u;
  function p(g) {
    return g.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  je.unescapeJsonPointer = p;
  function m(g, S) {
    if (Array.isArray(g))
      for (const E of g)
        S(E);
    else
      S(g);
  }
  je.eachItem = m;
  function v({ mergeNames: g, mergeToName: S, mergeValues: E, resultToName: k }) {
    return (I, z, M, V) => {
      const F = M === void 0 ? z : M instanceof e.Name ? (z instanceof e.Name ? g(I, z, M) : S(I, z, M), M) : z instanceof e.Name ? (S(I, M, z), z) : E(z, M);
      return V === e.Name && !(F instanceof e.Name) ? k(I, F) : F;
    };
  }
  je.mergeEvaluated = {
    props: v({
      mergeNames: (g, S, E) => g.if((0, e._)`${E} !== true && ${S} !== undefined`, () => {
        g.if((0, e._)`${S} === true`, () => g.assign(E, !0), () => g.assign(E, (0, e._)`${E} || {}`).code((0, e._)`Object.assign(${E}, ${S})`));
      }),
      mergeToName: (g, S, E) => g.if((0, e._)`${E} !== true`, () => {
        S === !0 ? g.assign(E, !0) : (g.assign(E, (0, e._)`${E} || {}`), y(g, E, S));
      }),
      mergeValues: (g, S) => g === !0 ? !0 : { ...g, ...S },
      resultToName: x
    }),
    items: v({
      mergeNames: (g, S, E) => g.if((0, e._)`${E} !== true && ${S} !== undefined`, () => g.assign(E, (0, e._)`${S} === true ? true : ${E} > ${S} ? ${E} : ${S}`)),
      mergeToName: (g, S, E) => g.if((0, e._)`${E} !== true`, () => g.assign(E, S === !0 ? !0 : (0, e._)`${E} > ${S} ? ${E} : ${S}`)),
      mergeValues: (g, S) => g === !0 ? !0 : Math.max(g, S),
      resultToName: (g, S) => g.var("items", S)
    })
  };
  function x(g, S) {
    if (S === !0)
      return g.var("props", !0);
    const E = g.var("props", (0, e._)`{}`);
    return S !== void 0 && y(g, E, S), E;
  }
  je.evaluatedPropsToName = x;
  function y(g, S, E) {
    Object.keys(E).forEach((k) => g.assign((0, e._)`${S}${(0, e.getProperty)(k)}`, !0));
  }
  je.setEvaluated = y;
  const h = {};
  function _(g, S) {
    return g.scopeValue("func", {
      ref: S,
      code: h[S.code] || (h[S.code] = new t._Code(S.code))
    });
  }
  je.useFunc = _;
  var f;
  (function(g) {
    g[g.Num = 0] = "Num", g[g.Str = 1] = "Str";
  })(f || (je.Type = f = {}));
  function b(g, S, E) {
    if (g instanceof e.Name) {
      const k = S === f.Num;
      return E ? k ? (0, e._)`"[" + ${g} + "]"` : (0, e._)`"['" + ${g} + "']"` : k ? (0, e._)`"/" + ${g}` : (0, e._)`"/" + ${g}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return E ? (0, e.getProperty)(g).toString() : "/" + u(g);
  }
  je.getErrorPath = b;
  function w(g, S, E = g.opts.strictSchema) {
    if (E) {
      if (S = `strict mode: ${S}`, E === !0)
        throw new Error(S);
      g.self.logger.warn(S);
    }
  }
  return je.checkStrictMode = w, je;
}
var ts = {}, ol;
function At() {
  if (ol) return ts;
  ol = 1, Object.defineProperty(ts, "__esModule", { value: !0 });
  const e = we(), t = {
    // validation function arguments
    data: new e.Name("data"),
    // data passed to validation function
    // args passed from referencing schema
    valCxt: new e.Name("valCxt"),
    // validation/data context - should not be used directly, it is destructured to the names below
    instancePath: new e.Name("instancePath"),
    parentData: new e.Name("parentData"),
    parentDataProperty: new e.Name("parentDataProperty"),
    rootData: new e.Name("rootData"),
    // root data - same as the data passed to the first/top validation function
    dynamicAnchors: new e.Name("dynamicAnchors"),
    // used to support recursiveRef and dynamicRef
    // function scoped variables
    vErrors: new e.Name("vErrors"),
    // null or array of validation errors
    errors: new e.Name("errors"),
    // counter of validation errors
    this: new e.Name("this"),
    // "globals"
    self: new e.Name("self"),
    scope: new e.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new e.Name("json"),
    jsonPos: new e.Name("jsonPos"),
    jsonLen: new e.Name("jsonLen"),
    jsonPart: new e.Name("jsonPart")
  };
  return ts.default = t, ts;
}
var al;
function Bo() {
  return al || (al = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = we(), r = Ie(), n = At();
    e.keywordError = {
      message: ({ keyword: h }) => (0, t.str)`must pass "${h}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: h, schemaType: _ }) => _ ? (0, t.str)`"${h}" keyword must be ${_} ($data)` : (0, t.str)`"${h}" keyword is invalid ($data)`
    };
    function s(h, _ = e.keywordError, f, b) {
      const { it: w } = h, { gen: g, compositeRule: S, allErrors: E } = w, k = p(h, _, f);
      b ?? (S || E) ? c(g, k) : l(w, (0, t._)`[${k}]`);
    }
    e.reportError = s;
    function o(h, _ = e.keywordError, f) {
      const { it: b } = h, { gen: w, compositeRule: g, allErrors: S } = b, E = p(h, _, f);
      c(w, E), g || S || l(b, n.default.vErrors);
    }
    e.reportExtraError = o;
    function a(h, _) {
      h.assign(n.default.errors, _), h.if((0, t._)`${n.default.vErrors} !== null`, () => h.if(_, () => h.assign((0, t._)`${n.default.vErrors}.length`, _), () => h.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: h, keyword: _, schemaValue: f, data: b, errsCount: w, it: g }) {
      if (w === void 0)
        throw new Error("ajv implementation error");
      const S = h.name("err");
      h.forRange("i", w, n.default.errors, (E) => {
        h.const(S, (0, t._)`${n.default.vErrors}[${E}]`), h.if((0, t._)`${S}.instancePath === undefined`, () => h.assign((0, t._)`${S}.instancePath`, (0, t.strConcat)(n.default.instancePath, g.errorPath))), h.assign((0, t._)`${S}.schemaPath`, (0, t.str)`${g.errSchemaPath}/${_}`), g.opts.verbose && (h.assign((0, t._)`${S}.schema`, f), h.assign((0, t._)`${S}.data`, b));
      });
    }
    e.extendErrors = i;
    function c(h, _) {
      const f = h.const("err", _);
      h.if((0, t._)`${n.default.vErrors} === null`, () => h.assign(n.default.vErrors, (0, t._)`[${f}]`), (0, t._)`${n.default.vErrors}.push(${f})`), h.code((0, t._)`${n.default.errors}++`);
    }
    function l(h, _) {
      const { gen: f, validateName: b, schemaEnv: w } = h;
      w.$async ? f.throw((0, t._)`new ${h.ValidationError}(${_})`) : (f.assign((0, t._)`${b}.errors`, _), f.return(!1));
    }
    const u = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function p(h, _, f) {
      const { createErrors: b } = h.it;
      return b === !1 ? (0, t._)`{}` : m(h, _, f);
    }
    function m(h, _, f = {}) {
      const { gen: b, it: w } = h, g = [
        v(w, f),
        x(h, f)
      ];
      return y(h, _, g), b.object(...g);
    }
    function v({ errorPath: h }, { instancePath: _ }) {
      const f = _ ? (0, t.str)`${h}${(0, r.getErrorPath)(_, r.Type.Str)}` : h;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, f)];
    }
    function x({ keyword: h, it: { errSchemaPath: _ } }, { schemaPath: f, parentSchema: b }) {
      let w = b ? _ : (0, t.str)`${_}/${h}`;
      return f && (w = (0, t.str)`${w}${(0, r.getErrorPath)(f, r.Type.Str)}`), [u.schemaPath, w];
    }
    function y(h, { params: _, message: f }, b) {
      const { keyword: w, data: g, schemaValue: S, it: E } = h, { opts: k, propertyName: I, topSchemaRef: z, schemaPath: M } = E;
      b.push([u.keyword, w], [u.params, typeof _ == "function" ? _(h) : _ || (0, t._)`{}`]), k.messages && b.push([u.message, typeof f == "function" ? f(h) : f]), k.verbose && b.push([u.schema, S], [u.parentSchema, (0, t._)`${z}${M}`], [n.default.data, g]), I && b.push([u.propertyName, I]);
    }
  })(Sa)), Sa;
}
var il;
function vx() {
  if (il) return xr;
  il = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.boolOrEmptySchema = xr.topBoolOrEmptySchema = void 0;
  const e = Bo(), t = we(), r = At(), n = {
    message: "boolean schema is false"
  };
  function s(i) {
    const { gen: c, schema: l, validateName: u } = i;
    l === !1 ? a(i, !1) : typeof l == "object" && l.$async === !0 ? c.return(r.default.data) : (c.assign((0, t._)`${u}.errors`, null), c.return(!0));
  }
  xr.topBoolOrEmptySchema = s;
  function o(i, c) {
    const { gen: l, schema: u } = i;
    u === !1 ? (l.var(c, !1), a(i)) : l.var(c, !0);
  }
  xr.boolOrEmptySchema = o;
  function a(i, c) {
    const { gen: l, data: u } = i, p = {
      gen: l,
      keyword: "false schema",
      data: u,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: i
    };
    (0, e.reportError)(p, n, void 0, c);
  }
  return xr;
}
var ot = {}, wr = {}, cl;
function th() {
  if (cl) return wr;
  cl = 1, Object.defineProperty(wr, "__esModule", { value: !0 }), wr.getRules = wr.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(s) {
    return typeof s == "string" && t.has(s);
  }
  wr.isJSONType = r;
  function n() {
    const s = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...s, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, s.number, s.string, s.array, s.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return wr.getRules = n, wr;
}
var Kt = {}, ll;
function rh() {
  if (ll) return Kt;
  ll = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.shouldUseRule = Kt.shouldUseGroup = Kt.schemaHasRulesForType = void 0;
  function e({ schema: n, self: s }, o) {
    const a = s.RULES.types[o];
    return a && a !== !0 && t(n, a);
  }
  Kt.schemaHasRulesForType = e;
  function t(n, s) {
    return s.rules.some((o) => r(n, o));
  }
  Kt.shouldUseGroup = t;
  function r(n, s) {
    var o;
    return n[s.keyword] !== void 0 || ((o = s.definition.implements) === null || o === void 0 ? void 0 : o.some((a) => n[a] !== void 0));
  }
  return Kt.shouldUseRule = r, Kt;
}
var ul;
function go() {
  if (ul) return ot;
  ul = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.reportTypeError = ot.checkDataTypes = ot.checkDataType = ot.coerceAndCheckDataType = ot.getJSONTypes = ot.getSchemaTypes = ot.DataType = void 0;
  const e = th(), t = rh(), r = Bo(), n = we(), s = Ie();
  var o;
  (function(f) {
    f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
  })(o || (ot.DataType = o = {}));
  function a(f) {
    const b = i(f.type);
    if (b.includes("null")) {
      if (f.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!b.length && f.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      f.nullable === !0 && b.push("null");
    }
    return b;
  }
  ot.getSchemaTypes = a;
  function i(f) {
    const b = Array.isArray(f) ? f : f ? [f] : [];
    if (b.every(e.isJSONType))
      return b;
    throw new Error("type must be JSONType or JSONType[]: " + b.join(","));
  }
  ot.getJSONTypes = i;
  function c(f, b) {
    const { gen: w, data: g, opts: S } = f, E = u(b, S.coerceTypes), k = b.length > 0 && !(E.length === 0 && b.length === 1 && (0, t.schemaHasRulesForType)(f, b[0]));
    if (k) {
      const I = x(b, g, S.strictNumbers, o.Wrong);
      w.if(I, () => {
        E.length ? p(f, b, E) : h(f);
      });
    }
    return k;
  }
  ot.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function u(f, b) {
    return b ? f.filter((w) => l.has(w) || b === "array" && w === "array") : [];
  }
  function p(f, b, w) {
    const { gen: g, data: S, opts: E } = f, k = g.let("dataType", (0, n._)`typeof ${S}`), I = g.let("coerced", (0, n._)`undefined`);
    E.coerceTypes === "array" && g.if((0, n._)`${k} == 'object' && Array.isArray(${S}) && ${S}.length == 1`, () => g.assign(S, (0, n._)`${S}[0]`).assign(k, (0, n._)`typeof ${S}`).if(x(b, S, E.strictNumbers), () => g.assign(I, S))), g.if((0, n._)`${I} !== undefined`);
    for (const M of w)
      (l.has(M) || M === "array" && E.coerceTypes === "array") && z(M);
    g.else(), h(f), g.endIf(), g.if((0, n._)`${I} !== undefined`, () => {
      g.assign(S, I), m(f, I);
    });
    function z(M) {
      switch (M) {
        case "string":
          g.elseIf((0, n._)`${k} == "number" || ${k} == "boolean"`).assign(I, (0, n._)`"" + ${S}`).elseIf((0, n._)`${S} === null`).assign(I, (0, n._)`""`);
          return;
        case "number":
          g.elseIf((0, n._)`${k} == "boolean" || ${S} === null
              || (${k} == "string" && ${S} && ${S} == +${S})`).assign(I, (0, n._)`+${S}`);
          return;
        case "integer":
          g.elseIf((0, n._)`${k} === "boolean" || ${S} === null
              || (${k} === "string" && ${S} && ${S} == +${S} && !(${S} % 1))`).assign(I, (0, n._)`+${S}`);
          return;
        case "boolean":
          g.elseIf((0, n._)`${S} === "false" || ${S} === 0 || ${S} === null`).assign(I, !1).elseIf((0, n._)`${S} === "true" || ${S} === 1`).assign(I, !0);
          return;
        case "null":
          g.elseIf((0, n._)`${S} === "" || ${S} === 0 || ${S} === false`), g.assign(I, null);
          return;
        case "array":
          g.elseIf((0, n._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${S} === null`).assign(I, (0, n._)`[${S}]`);
      }
    }
  }
  function m({ gen: f, parentData: b, parentDataProperty: w }, g) {
    f.if((0, n._)`${b} !== undefined`, () => f.assign((0, n._)`${b}[${w}]`, g));
  }
  function v(f, b, w, g = o.Correct) {
    const S = g === o.Correct ? n.operators.EQ : n.operators.NEQ;
    let E;
    switch (f) {
      case "null":
        return (0, n._)`${b} ${S} null`;
      case "array":
        E = (0, n._)`Array.isArray(${b})`;
        break;
      case "object":
        E = (0, n._)`${b} && typeof ${b} == "object" && !Array.isArray(${b})`;
        break;
      case "integer":
        E = k((0, n._)`!(${b} % 1) && !isNaN(${b})`);
        break;
      case "number":
        E = k();
        break;
      default:
        return (0, n._)`typeof ${b} ${S} ${f}`;
    }
    return g === o.Correct ? E : (0, n.not)(E);
    function k(I = n.nil) {
      return (0, n.and)((0, n._)`typeof ${b} == "number"`, I, w ? (0, n._)`isFinite(${b})` : n.nil);
    }
  }
  ot.checkDataType = v;
  function x(f, b, w, g) {
    if (f.length === 1)
      return v(f[0], b, w, g);
    let S;
    const E = (0, s.toHash)(f);
    if (E.array && E.object) {
      const k = (0, n._)`typeof ${b} != "object"`;
      S = E.null ? k : (0, n._)`!${b} || ${k}`, delete E.null, delete E.array, delete E.object;
    } else
      S = n.nil;
    E.number && delete E.integer;
    for (const k in E)
      S = (0, n.and)(S, v(k, b, w, g));
    return S;
  }
  ot.checkDataTypes = x;
  const y = {
    message: ({ schema: f }) => `must be ${f}`,
    params: ({ schema: f, schemaValue: b }) => typeof f == "string" ? (0, n._)`{type: ${f}}` : (0, n._)`{type: ${b}}`
  };
  function h(f) {
    const b = _(f);
    (0, r.reportError)(b, y);
  }
  ot.reportTypeError = h;
  function _(f) {
    const { gen: b, data: w, schema: g } = f, S = (0, s.schemaRefOrVal)(f, g, "type");
    return {
      gen: b,
      keyword: "type",
      data: w,
      schema: g.type,
      schemaCode: S,
      schemaValue: S,
      parentSchema: g,
      params: {},
      it: f
    };
  }
  return ot;
}
var Sn = {}, dl;
function yx() {
  if (dl) return Sn;
  dl = 1, Object.defineProperty(Sn, "__esModule", { value: !0 }), Sn.assignDefaults = void 0;
  const e = we(), t = Ie();
  function r(s, o) {
    const { properties: a, items: i } = s.schema;
    if (o === "object" && a)
      for (const c in a)
        n(s, c, a[c].default);
    else o === "array" && Array.isArray(i) && i.forEach((c, l) => n(s, l, c.default));
  }
  Sn.assignDefaults = r;
  function n(s, o, a) {
    const { gen: i, compositeRule: c, data: l, opts: u } = s;
    if (a === void 0)
      return;
    const p = (0, e._)`${l}${(0, e.getProperty)(o)}`;
    if (c) {
      (0, t.checkStrictMode)(s, `default is ignored for: ${p}`);
      return;
    }
    let m = (0, e._)`${p} === undefined`;
    u.useDefaults === "empty" && (m = (0, e._)`${m} || ${p} === null || ${p} === ""`), i.if(m, (0, e._)`${p} = ${(0, e.stringify)(a)}`);
  }
  return Sn;
}
var $t = {}, We = {}, fl;
function Tt() {
  if (fl) return We;
  fl = 1, Object.defineProperty(We, "__esModule", { value: !0 }), We.validateUnion = We.validateArray = We.usePattern = We.callValidateCode = We.schemaProperties = We.allSchemaProperties = We.noPropertyInData = We.propertyInData = We.isOwnProperty = We.hasPropFunc = We.reportMissingProp = We.checkMissingProp = We.checkReportMissingProp = void 0;
  const e = we(), t = Ie(), r = At(), n = Ie();
  function s(f, b) {
    const { gen: w, data: g, it: S } = f;
    w.if(u(w, g, b, S.opts.ownProperties), () => {
      f.setParams({ missingProperty: (0, e._)`${b}` }, !0), f.error();
    });
  }
  We.checkReportMissingProp = s;
  function o({ gen: f, data: b, it: { opts: w } }, g, S) {
    return (0, e.or)(...g.map((E) => (0, e.and)(u(f, b, E, w.ownProperties), (0, e._)`${S} = ${E}`)));
  }
  We.checkMissingProp = o;
  function a(f, b) {
    f.setParams({ missingProperty: b }, !0), f.error();
  }
  We.reportMissingProp = a;
  function i(f) {
    return f.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  We.hasPropFunc = i;
  function c(f, b, w) {
    return (0, e._)`${i(f)}.call(${b}, ${w})`;
  }
  We.isOwnProperty = c;
  function l(f, b, w, g) {
    const S = (0, e._)`${b}${(0, e.getProperty)(w)} !== undefined`;
    return g ? (0, e._)`${S} && ${c(f, b, w)}` : S;
  }
  We.propertyInData = l;
  function u(f, b, w, g) {
    const S = (0, e._)`${b}${(0, e.getProperty)(w)} === undefined`;
    return g ? (0, e.or)(S, (0, e.not)(c(f, b, w))) : S;
  }
  We.noPropertyInData = u;
  function p(f) {
    return f ? Object.keys(f).filter((b) => b !== "__proto__") : [];
  }
  We.allSchemaProperties = p;
  function m(f, b) {
    return p(b).filter((w) => !(0, t.alwaysValidSchema)(f, b[w]));
  }
  We.schemaProperties = m;
  function v({ schemaCode: f, data: b, it: { gen: w, topSchemaRef: g, schemaPath: S, errorPath: E }, it: k }, I, z, M) {
    const V = M ? (0, e._)`${f}, ${b}, ${g}${S}` : b, F = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, E)],
      [r.default.parentData, k.parentData],
      [r.default.parentDataProperty, k.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    k.opts.dynamicRef && F.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const W = (0, e._)`${V}, ${w.object(...F)}`;
    return z !== e.nil ? (0, e._)`${I}.call(${z}, ${W})` : (0, e._)`${I}(${W})`;
  }
  We.callValidateCode = v;
  const x = (0, e._)`new RegExp`;
  function y({ gen: f, it: { opts: b } }, w) {
    const g = b.unicodeRegExp ? "u" : "", { regExp: S } = b.code, E = S(w, g);
    return f.scopeValue("pattern", {
      key: E.toString(),
      ref: E,
      code: (0, e._)`${S.code === "new RegExp" ? x : (0, n.useFunc)(f, S)}(${w}, ${g})`
    });
  }
  We.usePattern = y;
  function h(f) {
    const { gen: b, data: w, keyword: g, it: S } = f, E = b.name("valid");
    if (S.allErrors) {
      const I = b.let("valid", !0);
      return k(() => b.assign(I, !1)), I;
    }
    return b.var(E, !0), k(() => b.break()), E;
    function k(I) {
      const z = b.const("len", (0, e._)`${w}.length`);
      b.forRange("i", 0, z, (M) => {
        f.subschema({
          keyword: g,
          dataProp: M,
          dataPropType: t.Type.Num
        }, E), b.if((0, e.not)(E), I);
      });
    }
  }
  We.validateArray = h;
  function _(f) {
    const { gen: b, schema: w, keyword: g, it: S } = f;
    if (!Array.isArray(w))
      throw new Error("ajv implementation error");
    if (w.some((z) => (0, t.alwaysValidSchema)(S, z)) && !S.opts.unevaluated)
      return;
    const k = b.let("valid", !1), I = b.name("_valid");
    b.block(() => w.forEach((z, M) => {
      const V = f.subschema({
        keyword: g,
        schemaProp: M,
        compositeRule: !0
      }, I);
      b.assign(k, (0, e._)`${k} || ${I}`), f.mergeValidEvaluated(V, I) || b.if((0, e.not)(k));
    })), f.result(k, () => f.reset(), () => f.error(!0));
  }
  return We.validateUnion = _, We;
}
var ml;
function bx() {
  if (ml) return $t;
  ml = 1, Object.defineProperty($t, "__esModule", { value: !0 }), $t.validateKeywordUsage = $t.validSchemaType = $t.funcKeywordCode = $t.macroKeywordCode = void 0;
  const e = we(), t = At(), r = Tt(), n = Bo();
  function s(m, v) {
    const { gen: x, keyword: y, schema: h, parentSchema: _, it: f } = m, b = v.macro.call(f.self, h, _, f), w = l(x, y, b);
    f.opts.validateSchema !== !1 && f.self.validateSchema(b, !0);
    const g = x.name("valid");
    m.subschema({
      schema: b,
      schemaPath: e.nil,
      errSchemaPath: `${f.errSchemaPath}/${y}`,
      topSchemaRef: w,
      compositeRule: !0
    }, g), m.pass(g, () => m.error(!0));
  }
  $t.macroKeywordCode = s;
  function o(m, v) {
    var x;
    const { gen: y, keyword: h, schema: _, parentSchema: f, $data: b, it: w } = m;
    c(w, v);
    const g = !b && v.compile ? v.compile.call(w.self, _, f, w) : v.validate, S = l(y, h, g), E = y.let("valid");
    m.block$data(E, k), m.ok((x = v.valid) !== null && x !== void 0 ? x : E);
    function k() {
      if (v.errors === !1)
        M(), v.modifying && a(m), V(() => m.error());
      else {
        const F = v.async ? I() : z();
        v.modifying && a(m), V(() => i(m, F));
      }
    }
    function I() {
      const F = y.let("ruleErrs", null);
      return y.try(() => M((0, e._)`await `), (W) => y.assign(E, !1).if((0, e._)`${W} instanceof ${w.ValidationError}`, () => y.assign(F, (0, e._)`${W}.errors`), () => y.throw(W))), F;
    }
    function z() {
      const F = (0, e._)`${S}.errors`;
      return y.assign(F, null), M(e.nil), F;
    }
    function M(F = v.async ? (0, e._)`await ` : e.nil) {
      const W = w.opts.passContext ? t.default.this : t.default.self, te = !("compile" in v && !b || v.schema === !1);
      y.assign(E, (0, e._)`${F}${(0, r.callValidateCode)(m, S, W, te)}`, v.modifying);
    }
    function V(F) {
      var W;
      y.if((0, e.not)((W = v.valid) !== null && W !== void 0 ? W : E), F);
    }
  }
  $t.funcKeywordCode = o;
  function a(m) {
    const { gen: v, data: x, it: y } = m;
    v.if(y.parentData, () => v.assign(x, (0, e._)`${y.parentData}[${y.parentDataProperty}]`));
  }
  function i(m, v) {
    const { gen: x } = m;
    x.if((0, e._)`Array.isArray(${v})`, () => {
      x.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)(m);
    }, () => m.error());
  }
  function c({ schemaEnv: m }, v) {
    if (v.async && !m.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(m, v, x) {
    if (x === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return m.scopeValue("keyword", typeof x == "function" ? { ref: x } : { ref: x, code: (0, e.stringify)(x) });
  }
  function u(m, v, x = !1) {
    return !v.length || v.some((y) => y === "array" ? Array.isArray(m) : y === "object" ? m && typeof m == "object" && !Array.isArray(m) : typeof m == y || x && typeof m > "u");
  }
  $t.validSchemaType = u;
  function p({ schema: m, opts: v, self: x, errSchemaPath: y }, h, _) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(_) : h.keyword !== _)
      throw new Error("ajv implementation error");
    const f = h.dependencies;
    if (f != null && f.some((b) => !Object.prototype.hasOwnProperty.call(m, b)))
      throw new Error(`parent schema must have dependencies of ${_}: ${f.join(",")}`);
    if (h.validateSchema && !h.validateSchema(m[_])) {
      const w = `keyword "${_}" value is invalid at path "${y}": ` + x.errorsText(h.validateSchema.errors);
      if (v.validateSchema === "log")
        x.logger.error(w);
      else
        throw new Error(w);
    }
  }
  return $t.validateKeywordUsage = p, $t;
}
var Zt = {}, hl;
function _x() {
  if (hl) return Zt;
  hl = 1, Object.defineProperty(Zt, "__esModule", { value: !0 }), Zt.extendSubschemaMode = Zt.extendSubschemaData = Zt.getSubschema = void 0;
  const e = we(), t = Ie();
  function r(o, { keyword: a, schemaProp: i, schema: c, schemaPath: l, errSchemaPath: u, topSchemaRef: p }) {
    if (a !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const m = o.schema[a];
      return i === void 0 ? {
        schema: m,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${o.errSchemaPath}/${a}`
      } : {
        schema: m[i],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${o.errSchemaPath}/${a}/${(0, t.escapeFragment)(i)}`
      };
    }
    if (c !== void 0) {
      if (l === void 0 || u === void 0 || p === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: l,
        topSchemaRef: p,
        errSchemaPath: u
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Zt.getSubschema = r;
  function n(o, a, { dataProp: i, dataPropType: c, data: l, dataTypes: u, propertyName: p }) {
    if (l !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: m } = a;
    if (i !== void 0) {
      const { errorPath: x, dataPathArr: y, opts: h } = a, _ = m.let("data", (0, e._)`${a.data}${(0, e.getProperty)(i)}`, !0);
      v(_), o.errorPath = (0, e.str)`${x}${(0, t.getErrorPath)(i, c, h.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${i}`, o.dataPathArr = [...y, o.parentDataProperty];
    }
    if (l !== void 0) {
      const x = l instanceof e.Name ? l : m.let("data", l, !0);
      v(x), p !== void 0 && (o.propertyName = p);
    }
    u && (o.dataTypes = u);
    function v(x) {
      o.data = x, o.dataLevel = a.dataLevel + 1, o.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), o.parentData = a.data, o.dataNames = [...a.dataNames, x];
    }
  }
  Zt.extendSubschemaData = n;
  function s(o, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: c, createErrors: l, allErrors: u }) {
    c !== void 0 && (o.compositeRule = c), l !== void 0 && (o.createErrors = l), u !== void 0 && (o.allErrors = u), o.jtdDiscriminator = a, o.jtdMetadata = i;
  }
  return Zt.extendSubschemaMode = s, Zt;
}
var ut = {}, ka, pl;
function nh() {
  return pl || (pl = 1, ka = function e(t, r) {
    if (t === r) return !0;
    if (t && r && typeof t == "object" && typeof r == "object") {
      if (t.constructor !== r.constructor) return !1;
      var n, s, o;
      if (Array.isArray(t)) {
        if (n = t.length, n != r.length) return !1;
        for (s = n; s-- !== 0; )
          if (!e(t[s], r[s])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if (o = Object.keys(t), n = o.length, n !== Object.keys(r).length) return !1;
      for (s = n; s-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, o[s])) return !1;
      for (s = n; s-- !== 0; ) {
        var a = o[s];
        if (!e(t[a], r[a])) return !1;
      }
      return !0;
    }
    return t !== t && r !== r;
  }), ka;
}
var ja = { exports: {} }, gl;
function xx() {
  if (gl) return ja.exports;
  gl = 1;
  var e = ja.exports = function(n, s, o) {
    typeof s == "function" && (o = s, s = {}), o = s.cb || o;
    var a = typeof o == "function" ? o : o.pre || function() {
    }, i = o.post || function() {
    };
    t(s, a, i, n, "", n);
  };
  e.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  }, e.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, e.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  }, e.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function t(n, s, o, a, i, c, l, u, p, m) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      s(a, i, c, l, u, p, m);
      for (var v in a) {
        var x = a[v];
        if (Array.isArray(x)) {
          if (v in e.arrayKeywords)
            for (var y = 0; y < x.length; y++)
              t(n, s, o, x[y], i + "/" + v + "/" + y, c, i, v, a, y);
        } else if (v in e.propsKeywords) {
          if (x && typeof x == "object")
            for (var h in x)
              t(n, s, o, x[h], i + "/" + v + "/" + r(h), c, i, v, a, h);
        } else (v in e.keywords || n.allKeys && !(v in e.skipKeywords)) && t(n, s, o, x, i + "/" + v, c, i, v, a);
      }
      o(a, i, c, l, u, p, m);
    }
  }
  function r(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ja.exports;
}
var vl;
function Wo() {
  if (vl) return ut;
  vl = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.getSchemaRefs = ut.resolveUrl = ut.normalizeId = ut._getFullPath = ut.getFullPath = ut.inlineRef = void 0;
  const e = Ie(), t = nh(), r = xx(), n = /* @__PURE__ */ new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function s(y, h = !0) {
    return typeof y == "boolean" ? !0 : h === !0 ? !a(y) : h ? i(y) <= h : !1;
  }
  ut.inlineRef = s;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(y) {
    for (const h in y) {
      if (o.has(h))
        return !0;
      const _ = y[h];
      if (Array.isArray(_) && _.some(a) || typeof _ == "object" && a(_))
        return !0;
    }
    return !1;
  }
  function i(y) {
    let h = 0;
    for (const _ in y) {
      if (_ === "$ref")
        return 1 / 0;
      if (h++, !n.has(_) && (typeof y[_] == "object" && (0, e.eachItem)(y[_], (f) => h += i(f)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function c(y, h = "", _) {
    _ !== !1 && (h = p(h));
    const f = y.parse(h);
    return l(y, f);
  }
  ut.getFullPath = c;
  function l(y, h) {
    return y.serialize(h).split("#")[0] + "#";
  }
  ut._getFullPath = l;
  const u = /#\/?$/;
  function p(y) {
    return y ? y.replace(u, "") : "";
  }
  ut.normalizeId = p;
  function m(y, h, _) {
    return _ = p(_), y.resolve(h, _);
  }
  ut.resolveUrl = m;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function x(y, h) {
    if (typeof y == "boolean")
      return {};
    const { schemaId: _, uriResolver: f } = this.opts, b = p(y[_] || h), w = { "": b }, g = c(f, b, !1), S = {}, E = /* @__PURE__ */ new Set();
    return r(y, { allKeys: !0 }, (z, M, V, F) => {
      if (F === void 0)
        return;
      const W = g + M;
      let te = w[F];
      typeof z[_] == "string" && (te = Z.call(this, z[_])), ae.call(this, z.$anchor), ae.call(this, z.$dynamicAnchor), w[M] = te;
      function Z(L) {
        const ve = this.opts.uriResolver.resolve;
        if (L = p(te ? ve(te, L) : L), E.has(L))
          throw I(L);
        E.add(L);
        let G = this.refs[L];
        return typeof G == "string" && (G = this.refs[G]), typeof G == "object" ? k(z, G.schema, L) : L !== p(W) && (L[0] === "#" ? (k(z, S[L], L), S[L] = z) : this.refs[L] = W), L;
      }
      function ae(L) {
        if (typeof L == "string") {
          if (!v.test(L))
            throw new Error(`invalid anchor "${L}"`);
          Z.call(this, `#${L}`);
        }
      }
    }), S;
    function k(z, M, V) {
      if (M !== void 0 && !t(z, M))
        throw I(V);
    }
    function I(z) {
      return new Error(`reference "${z}" resolves to more than one schema`);
    }
  }
  return ut.getSchemaRefs = x, ut;
}
var yl;
function Ln() {
  if (yl) return Gt;
  yl = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.getData = Gt.KeywordCxt = Gt.validateFunctionCode = void 0;
  const e = vx(), t = go(), r = rh(), n = go(), s = yx(), o = bx(), a = _x(), i = we(), c = At(), l = Wo(), u = Ie(), p = Bo();
  function m(N) {
    if (g(N) && (E(N), w(N))) {
      h(N);
      return;
    }
    v(N, () => (0, e.topBoolOrEmptySchema)(N));
  }
  Gt.validateFunctionCode = m;
  function v({ gen: N, validateName: A, schema: H, schemaEnv: Y, opts: ce }, ye) {
    ce.code.es5 ? N.func(A, (0, i._)`${c.default.data}, ${c.default.valCxt}`, Y.$async, () => {
      N.code((0, i._)`"use strict"; ${f(H, ce)}`), y(N, ce), N.code(ye);
    }) : N.func(A, (0, i._)`${c.default.data}, ${x(ce)}`, Y.$async, () => N.code(f(H, ce)).code(ye));
  }
  function x(N) {
    return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${N.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function y(N, A) {
    N.if(c.default.valCxt, () => {
      N.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), N.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), N.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), N.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), A.dynamicRef && N.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      N.var(c.default.instancePath, (0, i._)`""`), N.var(c.default.parentData, (0, i._)`undefined`), N.var(c.default.parentDataProperty, (0, i._)`undefined`), N.var(c.default.rootData, c.default.data), A.dynamicRef && N.var(c.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function h(N) {
    const { schema: A, opts: H, gen: Y } = N;
    v(N, () => {
      H.$comment && A.$comment && F(N), z(N), Y.let(c.default.vErrors, null), Y.let(c.default.errors, 0), H.unevaluated && _(N), k(N), W(N);
    });
  }
  function _(N) {
    const { gen: A, validateName: H } = N;
    N.evaluated = A.const("evaluated", (0, i._)`${H}.evaluated`), A.if((0, i._)`${N.evaluated}.dynamicProps`, () => A.assign((0, i._)`${N.evaluated}.props`, (0, i._)`undefined`)), A.if((0, i._)`${N.evaluated}.dynamicItems`, () => A.assign((0, i._)`${N.evaluated}.items`, (0, i._)`undefined`));
  }
  function f(N, A) {
    const H = typeof N == "object" && N[A.schemaId];
    return H && (A.code.source || A.code.process) ? (0, i._)`/*# sourceURL=${H} */` : i.nil;
  }
  function b(N, A) {
    if (g(N) && (E(N), w(N))) {
      S(N, A);
      return;
    }
    (0, e.boolOrEmptySchema)(N, A);
  }
  function w({ schema: N, self: A }) {
    if (typeof N == "boolean")
      return !N;
    for (const H in N)
      if (A.RULES.all[H])
        return !0;
    return !1;
  }
  function g(N) {
    return typeof N.schema != "boolean";
  }
  function S(N, A) {
    const { schema: H, gen: Y, opts: ce } = N;
    ce.$comment && H.$comment && F(N), M(N), V(N);
    const ye = Y.const("_errs", c.default.errors);
    k(N, ye), Y.var(A, (0, i._)`${ye} === ${c.default.errors}`);
  }
  function E(N) {
    (0, u.checkUnknownRules)(N), I(N);
  }
  function k(N, A) {
    if (N.opts.jtd)
      return Z(N, [], !1, A);
    const H = (0, t.getSchemaTypes)(N.schema), Y = (0, t.coerceAndCheckDataType)(N, H);
    Z(N, H, !Y, A);
  }
  function I(N) {
    const { schema: A, errSchemaPath: H, opts: Y, self: ce } = N;
    A.$ref && Y.ignoreKeywordsWithRef && (0, u.schemaHasRulesButRef)(A, ce.RULES) && ce.logger.warn(`$ref: keywords ignored in schema at path "${H}"`);
  }
  function z(N) {
    const { schema: A, opts: H } = N;
    A.default !== void 0 && H.useDefaults && H.strictSchema && (0, u.checkStrictMode)(N, "default is ignored in the schema root");
  }
  function M(N) {
    const A = N.schema[N.opts.schemaId];
    A && (N.baseId = (0, l.resolveUrl)(N.opts.uriResolver, N.baseId, A));
  }
  function V(N) {
    if (N.schema.$async && !N.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function F({ gen: N, schemaEnv: A, schema: H, errSchemaPath: Y, opts: ce }) {
    const ye = H.$comment;
    if (ce.$comment === !0)
      N.code((0, i._)`${c.default.self}.logger.log(${ye})`);
    else if (typeof ce.$comment == "function") {
      const He = (0, i.str)`${Y}/$comment`, st = N.scopeValue("root", { ref: A.root });
      N.code((0, i._)`${c.default.self}.opts.$comment(${ye}, ${He}, ${st}.schema)`);
    }
  }
  function W(N) {
    const { gen: A, schemaEnv: H, validateName: Y, ValidationError: ce, opts: ye } = N;
    H.$async ? A.if((0, i._)`${c.default.errors} === 0`, () => A.return(c.default.data), () => A.throw((0, i._)`new ${ce}(${c.default.vErrors})`)) : (A.assign((0, i._)`${Y}.errors`, c.default.vErrors), ye.unevaluated && te(N), A.return((0, i._)`${c.default.errors} === 0`));
  }
  function te({ gen: N, evaluated: A, props: H, items: Y }) {
    H instanceof i.Name && N.assign((0, i._)`${A}.props`, H), Y instanceof i.Name && N.assign((0, i._)`${A}.items`, Y);
  }
  function Z(N, A, H, Y) {
    const { gen: ce, schema: ye, data: He, allErrors: st, opts: Ge, self: j } = N, { RULES: D } = j;
    if (ye.$ref && (Ge.ignoreKeywordsWithRef || !(0, u.schemaHasRulesButRef)(ye, D))) {
      ce.block(() => B(N, "$ref", D.all.$ref.definition));
      return;
    }
    Ge.jtd || L(N, A), ce.block(() => {
      for (const re of D.rules)
        U(re);
      U(D.post);
    });
    function U(re) {
      (0, r.shouldUseGroup)(ye, re) && (re.type ? (ce.if((0, n.checkDataType)(re.type, He, Ge.strictNumbers)), ae(N, re), A.length === 1 && A[0] === re.type && H && (ce.else(), (0, n.reportTypeError)(N)), ce.endIf()) : ae(N, re), st || ce.if((0, i._)`${c.default.errors} === ${Y || 0}`));
    }
  }
  function ae(N, A) {
    const { gen: H, schema: Y, opts: { useDefaults: ce } } = N;
    ce && (0, s.assignDefaults)(N, A.type), H.block(() => {
      for (const ye of A.rules)
        (0, r.shouldUseRule)(Y, ye) && B(N, ye.keyword, ye.definition, A.type);
    });
  }
  function L(N, A) {
    N.schemaEnv.meta || !N.opts.strictTypes || (ve(N, A), N.opts.allowUnionTypes || G(N, A), T(N, N.dataTypes));
  }
  function ve(N, A) {
    if (A.length) {
      if (!N.dataTypes.length) {
        N.dataTypes = A;
        return;
      }
      A.forEach((H) => {
        O(N.dataTypes, H) || R(N, `type "${H}" not allowed by context "${N.dataTypes.join(",")}"`);
      }), C(N, A);
    }
  }
  function G(N, A) {
    A.length > 1 && !(A.length === 2 && A.includes("null")) && R(N, "use allowUnionTypes to allow union type keyword");
  }
  function T(N, A) {
    const H = N.self.RULES.all;
    for (const Y in H) {
      const ce = H[Y];
      if (typeof ce == "object" && (0, r.shouldUseRule)(N.schema, ce)) {
        const { type: ye } = ce.definition;
        ye.length && !ye.some((He) => K(A, He)) && R(N, `missing type "${ye.join(",")}" for keyword "${Y}"`);
      }
    }
  }
  function K(N, A) {
    return N.includes(A) || A === "number" && N.includes("integer");
  }
  function O(N, A) {
    return N.includes(A) || A === "integer" && N.includes("number");
  }
  function C(N, A) {
    const H = [];
    for (const Y of N.dataTypes)
      O(A, Y) ? H.push(Y) : A.includes("integer") && Y === "number" && H.push("integer");
    N.dataTypes = H;
  }
  function R(N, A) {
    const H = N.schemaEnv.baseId + N.errSchemaPath;
    A += ` at "${H}" (strictTypes)`, (0, u.checkStrictMode)(N, A, N.opts.strictTypes);
  }
  class q {
    constructor(A, H, Y) {
      if ((0, o.validateKeywordUsage)(A, H, Y), this.gen = A.gen, this.allErrors = A.allErrors, this.keyword = Y, this.data = A.data, this.schema = A.schema[Y], this.$data = H.$data && A.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, u.schemaRefOrVal)(A, this.schema, Y, this.$data), this.schemaType = H.schemaType, this.parentSchema = A.schema, this.params = {}, this.it = A, this.def = H, this.$data)
        this.schemaCode = A.gen.const("vSchema", ie(this.$data, A));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, H.schemaType, H.allowUndefined))
        throw new Error(`${Y} value must be ${JSON.stringify(H.schemaType)}`);
      ("code" in H ? H.trackErrors : H.errors !== !1) && (this.errsCount = A.gen.const("_errs", c.default.errors));
    }
    result(A, H, Y) {
      this.failResult((0, i.not)(A), H, Y);
    }
    failResult(A, H, Y) {
      this.gen.if(A), Y ? Y() : this.error(), H ? (this.gen.else(), H(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(A, H) {
      this.failResult((0, i.not)(A), void 0, H);
    }
    fail(A) {
      if (A === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(A), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(A) {
      if (!this.$data)
        return this.fail(A);
      const { schemaCode: H } = this;
      this.fail((0, i._)`${H} !== undefined && (${(0, i.or)(this.invalid$data(), A)})`);
    }
    error(A, H, Y) {
      if (H) {
        this.setParams(H), this._error(A, Y), this.setParams({});
        return;
      }
      this._error(A, Y);
    }
    _error(A, H) {
      (A ? p.reportExtraError : p.reportError)(this, this.def.error, H);
    }
    $dataError() {
      (0, p.reportError)(this, this.def.$dataError || p.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, p.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(A) {
      this.allErrors || this.gen.if(A);
    }
    setParams(A, H) {
      H ? Object.assign(this.params, A) : this.params = A;
    }
    block$data(A, H, Y = i.nil) {
      this.gen.block(() => {
        this.check$data(A, Y), H();
      });
    }
    check$data(A = i.nil, H = i.nil) {
      if (!this.$data)
        return;
      const { gen: Y, schemaCode: ce, schemaType: ye, def: He } = this;
      Y.if((0, i.or)((0, i._)`${ce} === undefined`, H)), A !== i.nil && Y.assign(A, !0), (ye.length || He.validateSchema) && (Y.elseIf(this.invalid$data()), this.$dataError(), A !== i.nil && Y.assign(A, !1)), Y.else();
    }
    invalid$data() {
      const { gen: A, schemaCode: H, schemaType: Y, def: ce, it: ye } = this;
      return (0, i.or)(He(), st());
      function He() {
        if (Y.length) {
          if (!(H instanceof i.Name))
            throw new Error("ajv implementation error");
          const Ge = Array.isArray(Y) ? Y : [Y];
          return (0, i._)`${(0, n.checkDataTypes)(Ge, H, ye.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function st() {
        if (ce.validateSchema) {
          const Ge = A.scopeValue("validate$data", { ref: ce.validateSchema });
          return (0, i._)`!${Ge}(${H})`;
        }
        return i.nil;
      }
    }
    subschema(A, H) {
      const Y = (0, a.getSubschema)(this.it, A);
      (0, a.extendSubschemaData)(Y, this.it, A), (0, a.extendSubschemaMode)(Y, A);
      const ce = { ...this.it, ...Y, items: void 0, props: void 0 };
      return b(ce, H), ce;
    }
    mergeEvaluated(A, H) {
      const { it: Y, gen: ce } = this;
      Y.opts.unevaluated && (Y.props !== !0 && A.props !== void 0 && (Y.props = u.mergeEvaluated.props(ce, A.props, Y.props, H)), Y.items !== !0 && A.items !== void 0 && (Y.items = u.mergeEvaluated.items(ce, A.items, Y.items, H)));
    }
    mergeValidEvaluated(A, H) {
      const { it: Y, gen: ce } = this;
      if (Y.opts.unevaluated && (Y.props !== !0 || Y.items !== !0))
        return ce.if(H, () => this.mergeEvaluated(A, i.Name)), !0;
    }
  }
  Gt.KeywordCxt = q;
  function B(N, A, H, Y) {
    const ce = new q(N, H, A);
    "code" in H ? H.code(ce, Y) : ce.$data && H.validate ? (0, o.funcKeywordCode)(ce, H) : "macro" in H ? (0, o.macroKeywordCode)(ce, H) : (H.compile || H.validate) && (0, o.funcKeywordCode)(ce, H);
  }
  const X = /^\/(?:[^~]|~0|~1)*$/, pe = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ie(N, { dataLevel: A, dataNames: H, dataPathArr: Y }) {
    let ce, ye;
    if (N === "")
      return c.default.rootData;
    if (N[0] === "/") {
      if (!X.test(N))
        throw new Error(`Invalid JSON-pointer: ${N}`);
      ce = N, ye = c.default.rootData;
    } else {
      const j = pe.exec(N);
      if (!j)
        throw new Error(`Invalid JSON-pointer: ${N}`);
      const D = +j[1];
      if (ce = j[2], ce === "#") {
        if (D >= A)
          throw new Error(Ge("property/index", D));
        return Y[A - D];
      }
      if (D > A)
        throw new Error(Ge("data", D));
      if (ye = H[A - D], !ce)
        return ye;
    }
    let He = ye;
    const st = ce.split("/");
    for (const j of st)
      j && (ye = (0, i._)`${ye}${(0, i.getProperty)((0, u.unescapeJsonPointer)(j))}`, He = (0, i._)`${He} && ${ye}`);
    return He;
    function Ge(j, D) {
      return `Cannot access ${j} ${D} levels up, current level is ${A}`;
    }
  }
  return Gt.getData = ie, Gt;
}
var rs = {}, bl;
function Ho() {
  if (bl) return rs;
  bl = 1, Object.defineProperty(rs, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return rs.default = e, rs;
}
var ns = {}, _l;
function zn() {
  if (_l) return ns;
  _l = 1, Object.defineProperty(ns, "__esModule", { value: !0 });
  const e = Wo();
  class t extends Error {
    constructor(n, s, o, a) {
      super(a || `can't resolve reference ${o} from id ${s}`), this.missingRef = (0, e.resolveUrl)(n, s, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(n, this.missingRef));
    }
  }
  return ns.default = t, ns;
}
var pt = {}, xl;
function Go() {
  if (xl) return pt;
  xl = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.resolveSchema = pt.getCompilingSchema = pt.resolveRef = pt.compileSchema = pt.SchemaEnv = void 0;
  const e = we(), t = Ho(), r = At(), n = Wo(), s = Ie(), o = Ln();
  class a {
    constructor(_) {
      var f;
      this.refs = {}, this.dynamicAnchors = {};
      let b;
      typeof _.schema == "object" && (b = _.schema), this.schema = _.schema, this.schemaId = _.schemaId, this.root = _.root || this, this.baseId = (f = _.baseId) !== null && f !== void 0 ? f : (0, n.normalizeId)(b == null ? void 0 : b[_.schemaId || "$id"]), this.schemaPath = _.schemaPath, this.localRefs = _.localRefs, this.meta = _.meta, this.$async = b == null ? void 0 : b.$async, this.refs = {};
    }
  }
  pt.SchemaEnv = a;
  function i(h) {
    const _ = u.call(this, h);
    if (_)
      return _;
    const f = (0, n.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: b, lines: w } = this.opts.code, { ownProperties: g } = this.opts, S = new e.CodeGen(this.scope, { es5: b, lines: w, ownProperties: g });
    let E;
    h.$async && (E = S.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const k = S.scopeName("validate");
    h.validateName = k;
    const I = {
      gen: S,
      allErrors: this.opts.allErrors,
      data: r.default.data,
      parentData: r.default.parentData,
      parentDataProperty: r.default.parentDataProperty,
      dataNames: [r.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: S.scopeValue("schema", this.opts.code.source === !0 ? { ref: h.schema, code: (0, e.stringify)(h.schema) } : { ref: h.schema }),
      validateName: k,
      ValidationError: E,
      schema: h.schema,
      schemaEnv: h,
      rootId: f,
      baseId: h.baseId || f,
      schemaPath: e.nil,
      errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let z;
    try {
      this._compilations.add(h), (0, o.validateFunctionCode)(I), S.optimize(this.opts.code.optimize);
      const M = S.toString();
      z = `${S.scopeRefs(r.default.scope)}return ${M}`, this.opts.code.process && (z = this.opts.code.process(z, h));
      const F = new Function(`${r.default.self}`, `${r.default.scope}`, z)(this, this.scope.get());
      if (this.scope.value(k, { ref: F }), F.errors = null, F.schema = h.schema, F.schemaEnv = h, h.$async && (F.$async = !0), this.opts.code.source === !0 && (F.source = { validateName: k, validateCode: M, scopeValues: S._values }), this.opts.unevaluated) {
        const { props: W, items: te } = I;
        F.evaluated = {
          props: W instanceof e.Name ? void 0 : W,
          items: te instanceof e.Name ? void 0 : te,
          dynamicProps: W instanceof e.Name,
          dynamicItems: te instanceof e.Name
        }, F.source && (F.source.evaluated = (0, e.stringify)(F.evaluated));
      }
      return h.validate = F, h;
    } catch (M) {
      throw delete h.validate, delete h.validateName, z && this.logger.error("Error compiling schema, function code:", z), M;
    } finally {
      this._compilations.delete(h);
    }
  }
  pt.compileSchema = i;
  function c(h, _, f) {
    var b;
    f = (0, n.resolveUrl)(this.opts.uriResolver, _, f);
    const w = h.refs[f];
    if (w)
      return w;
    let g = m.call(this, h, f);
    if (g === void 0) {
      const S = (b = h.localRefs) === null || b === void 0 ? void 0 : b[f], { schemaId: E } = this.opts;
      S && (g = new a({ schema: S, schemaId: E, root: h, baseId: _ }));
    }
    if (g !== void 0)
      return h.refs[f] = l.call(this, g);
  }
  pt.resolveRef = c;
  function l(h) {
    return (0, n.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : i.call(this, h);
  }
  function u(h) {
    for (const _ of this._compilations)
      if (p(_, h))
        return _;
  }
  pt.getCompilingSchema = u;
  function p(h, _) {
    return h.schema === _.schema && h.root === _.root && h.baseId === _.baseId;
  }
  function m(h, _) {
    let f;
    for (; typeof (f = this.refs[_]) == "string"; )
      _ = f;
    return f || this.schemas[_] || v.call(this, h, _);
  }
  function v(h, _) {
    const f = this.opts.uriResolver.parse(_), b = (0, n._getFullPath)(this.opts.uriResolver, f);
    let w = (0, n.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && b === w)
      return y.call(this, f, h);
    const g = (0, n.normalizeId)(b), S = this.refs[g] || this.schemas[g];
    if (typeof S == "string") {
      const E = v.call(this, h, S);
      return typeof (E == null ? void 0 : E.schema) != "object" ? void 0 : y.call(this, f, E);
    }
    if (typeof (S == null ? void 0 : S.schema) == "object") {
      if (S.validate || i.call(this, S), g === (0, n.normalizeId)(_)) {
        const { schema: E } = S, { schemaId: k } = this.opts, I = E[k];
        return I && (w = (0, n.resolveUrl)(this.opts.uriResolver, w, I)), new a({ schema: E, schemaId: k, root: h, baseId: w });
      }
      return y.call(this, f, S);
    }
  }
  pt.resolveSchema = v;
  const x = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function y(h, { baseId: _, schema: f, root: b }) {
    var w;
    if (((w = h.fragment) === null || w === void 0 ? void 0 : w[0]) !== "/")
      return;
    for (const E of h.fragment.slice(1).split("/")) {
      if (typeof f == "boolean")
        return;
      const k = f[(0, s.unescapeFragment)(E)];
      if (k === void 0)
        return;
      f = k;
      const I = typeof f == "object" && f[this.opts.schemaId];
      !x.has(E) && I && (_ = (0, n.resolveUrl)(this.opts.uriResolver, _, I));
    }
    let g;
    if (typeof f != "boolean" && f.$ref && !(0, s.schemaHasRulesButRef)(f, this.RULES)) {
      const E = (0, n.resolveUrl)(this.opts.uriResolver, _, f.$ref);
      g = v.call(this, b, E);
    }
    const { schemaId: S } = this.opts;
    if (g = g || new a({ schema: f, schemaId: S, root: b, baseId: _ }), g.schema !== g.root.schema)
      return g;
  }
  return pt;
}
const wx = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Sx = "Meta-schema for $data reference (JSON AnySchema extension proposal)", $x = "object", Ex = ["$data"], Cx = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, kx = !1, jx = {
  $id: wx,
  description: Sx,
  type: $x,
  required: Ex,
  properties: Cx,
  additionalProperties: kx
};
var ss = {}, $n = { exports: {} }, Ra, wl;
function sh() {
  if (wl) return Ra;
  wl = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function r(m) {
    let v = "", x = 0, y = 0;
    for (y = 0; y < m.length; y++)
      if (x = m[y].charCodeAt(0), x !== 48) {
        if (!(x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102))
          return "";
        v += m[y];
        break;
      }
    for (y += 1; y < m.length; y++) {
      if (x = m[y].charCodeAt(0), !(x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102))
        return "";
      v += m[y];
    }
    return v;
  }
  const n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function s(m) {
    return m.length = 0, !0;
  }
  function o(m, v, x) {
    if (m.length) {
      const y = r(m);
      if (y !== "")
        v.push(y);
      else
        return x.error = !0, !1;
      m.length = 0;
    }
    return !0;
  }
  function a(m) {
    let v = 0;
    const x = { error: !1, address: "", zone: "" }, y = [], h = [];
    let _ = !1, f = !1, b = o;
    for (let w = 0; w < m.length; w++) {
      const g = m[w];
      if (!(g === "[" || g === "]"))
        if (g === ":") {
          if (_ === !0 && (f = !0), !b(h, y, x))
            break;
          if (++v > 7) {
            x.error = !0;
            break;
          }
          w > 0 && m[w - 1] === ":" && (_ = !0), y.push(":");
          continue;
        } else if (g === "%") {
          if (!b(h, y, x))
            break;
          b = s;
        } else {
          h.push(g);
          continue;
        }
    }
    return h.length && (b === s ? x.zone = h.join("") : f ? y.push(h.join("")) : y.push(r(h))), x.address = y.join(""), x;
  }
  function i(m) {
    if (c(m, ":") < 2)
      return { host: m, isIPV6: !1 };
    const v = a(m);
    if (v.error)
      return { host: m, isIPV6: !1 };
    {
      let x = v.address, y = v.address;
      return v.zone && (x += "%" + v.zone, y += "%25" + v.zone), { host: x, isIPV6: !0, escapedHost: y };
    }
  }
  function c(m, v) {
    let x = 0;
    for (let y = 0; y < m.length; y++)
      m[y] === v && x++;
    return x;
  }
  function l(m) {
    let v = m;
    const x = [];
    let y = -1, h = 0;
    for (; h = v.length; ) {
      if (h === 1) {
        if (v === ".")
          break;
        if (v === "/") {
          x.push("/");
          break;
        } else {
          x.push(v);
          break;
        }
      } else if (h === 2) {
        if (v[0] === ".") {
          if (v[1] === ".")
            break;
          if (v[1] === "/") {
            v = v.slice(2);
            continue;
          }
        } else if (v[0] === "/" && (v[1] === "." || v[1] === "/")) {
          x.push("/");
          break;
        }
      } else if (h === 3 && v === "/..") {
        x.length !== 0 && x.pop(), x.push("/");
        break;
      }
      if (v[0] === ".") {
        if (v[1] === ".") {
          if (v[2] === "/") {
            v = v.slice(3);
            continue;
          }
        } else if (v[1] === "/") {
          v = v.slice(2);
          continue;
        }
      } else if (v[0] === "/" && v[1] === ".") {
        if (v[2] === "/") {
          v = v.slice(2);
          continue;
        } else if (v[2] === "." && v[3] === "/") {
          v = v.slice(3), x.length !== 0 && x.pop();
          continue;
        }
      }
      if ((y = v.indexOf("/", 1)) === -1) {
        x.push(v);
        break;
      } else
        x.push(v.slice(0, y)), v = v.slice(y);
    }
    return x.join("");
  }
  function u(m, v) {
    const x = v !== !0 ? escape : unescape;
    return m.scheme !== void 0 && (m.scheme = x(m.scheme)), m.userinfo !== void 0 && (m.userinfo = x(m.userinfo)), m.host !== void 0 && (m.host = x(m.host)), m.path !== void 0 && (m.path = x(m.path)), m.query !== void 0 && (m.query = x(m.query)), m.fragment !== void 0 && (m.fragment = x(m.fragment)), m;
  }
  function p(m) {
    const v = [];
    if (m.userinfo !== void 0 && (v.push(m.userinfo), v.push("@")), m.host !== void 0) {
      let x = unescape(m.host);
      if (!t(x)) {
        const y = i(x);
        y.isIPV6 === !0 ? x = `[${y.escapedHost}]` : x = m.host;
      }
      v.push(x);
    }
    return (typeof m.port == "number" || typeof m.port == "string") && (v.push(":"), v.push(String(m.port))), v.length ? v.join("") : void 0;
  }
  return Ra = {
    nonSimpleDomain: n,
    recomposeAuthority: p,
    normalizeComponentEncoding: u,
    removeDotSegments: l,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: i,
    stringArrayToHexStripped: r
  }, Ra;
}
var Pa, Sl;
function Rx() {
  if (Sl) return Pa;
  Sl = 1;
  const { isUUID: e } = sh(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, r = (
    /** @type {const} */
    [
      "http",
      "https",
      "ws",
      "wss",
      "urn",
      "urn:uuid"
    ]
  );
  function n(g) {
    return r.indexOf(
      /** @type {*} */
      g
    ) !== -1;
  }
  function s(g) {
    return g.secure === !0 ? !0 : g.secure === !1 ? !1 : g.scheme ? g.scheme.length === 3 && (g.scheme[0] === "w" || g.scheme[0] === "W") && (g.scheme[1] === "s" || g.scheme[1] === "S") && (g.scheme[2] === "s" || g.scheme[2] === "S") : !1;
  }
  function o(g) {
    return g.host || (g.error = g.error || "HTTP URIs must have a host."), g;
  }
  function a(g) {
    const S = String(g.scheme).toLowerCase() === "https";
    return (g.port === (S ? 443 : 80) || g.port === "") && (g.port = void 0), g.path || (g.path = "/"), g;
  }
  function i(g) {
    return g.secure = s(g), g.resourceName = (g.path || "/") + (g.query ? "?" + g.query : ""), g.path = void 0, g.query = void 0, g;
  }
  function c(g) {
    if ((g.port === (s(g) ? 443 : 80) || g.port === "") && (g.port = void 0), typeof g.secure == "boolean" && (g.scheme = g.secure ? "wss" : "ws", g.secure = void 0), g.resourceName) {
      const [S, E] = g.resourceName.split("?");
      g.path = S && S !== "/" ? S : void 0, g.query = E, g.resourceName = void 0;
    }
    return g.fragment = void 0, g;
  }
  function l(g, S) {
    if (!g.path)
      return g.error = "URN can not be parsed", g;
    const E = g.path.match(t);
    if (E) {
      const k = S.scheme || g.scheme || "urn";
      g.nid = E[1].toLowerCase(), g.nss = E[2];
      const I = `${k}:${S.nid || g.nid}`, z = w(I);
      g.path = void 0, z && (g = z.parse(g, S));
    } else
      g.error = g.error || "URN can not be parsed.";
    return g;
  }
  function u(g, S) {
    if (g.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const E = S.scheme || g.scheme || "urn", k = g.nid.toLowerCase(), I = `${E}:${S.nid || k}`, z = w(I);
    z && (g = z.serialize(g, S));
    const M = g, V = g.nss;
    return M.path = `${k || S.nid}:${V}`, S.skipEscape = !0, M;
  }
  function p(g, S) {
    const E = g;
    return E.uuid = E.nss, E.nss = void 0, !S.tolerant && (!E.uuid || !e(E.uuid)) && (E.error = E.error || "UUID is not valid."), E;
  }
  function m(g) {
    const S = g;
    return S.nss = (g.uuid || "").toLowerCase(), S;
  }
  const v = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: o,
      serialize: a
    }
  ), x = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: v.domainHost,
      parse: o,
      serialize: a
    }
  ), y = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: i,
      serialize: c
    }
  ), h = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: y.domainHost,
      parse: y.parse,
      serialize: y.serialize
    }
  ), b = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: v,
      https: x,
      ws: y,
      wss: h,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: l,
          serialize: u,
          skipNormalize: !0
        }
      ),
      "urn:uuid": (
        /** @type {SchemeHandler} */
        {
          scheme: "urn:uuid",
          parse: p,
          serialize: m,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(b, null);
  function w(g) {
    return g && (b[
      /** @type {SchemeName} */
      g
    ] || b[
      /** @type {SchemeName} */
      g.toLowerCase()
    ]) || void 0;
  }
  return Pa = {
    wsIsSecure: s,
    SCHEMES: b,
    isValidSchemeName: n,
    getSchemeHandler: w
  }, Pa;
}
var $l;
function Px() {
  if ($l) return $n.exports;
  $l = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: r, normalizeComponentEncoding: n, isIPv4: s, nonSimpleDomain: o } = sh(), { SCHEMES: a, getSchemeHandler: i } = Rx();
  function c(h, _) {
    return typeof h == "string" ? h = /** @type {T} */
    m(x(h, _), _) : typeof h == "object" && (h = /** @type {T} */
    x(m(h, _), _)), h;
  }
  function l(h, _, f) {
    const b = f ? Object.assign({ scheme: "null" }, f) : { scheme: "null" }, w = u(x(h, b), x(_, b), b, !0);
    return b.skipEscape = !0, m(w, b);
  }
  function u(h, _, f, b) {
    const w = {};
    return b || (h = x(m(h, f), f), _ = x(m(_, f), f)), f = f || {}, !f.tolerant && _.scheme ? (w.scheme = _.scheme, w.userinfo = _.userinfo, w.host = _.host, w.port = _.port, w.path = t(_.path || ""), w.query = _.query) : (_.userinfo !== void 0 || _.host !== void 0 || _.port !== void 0 ? (w.userinfo = _.userinfo, w.host = _.host, w.port = _.port, w.path = t(_.path || ""), w.query = _.query) : (_.path ? (_.path[0] === "/" ? w.path = t(_.path) : ((h.userinfo !== void 0 || h.host !== void 0 || h.port !== void 0) && !h.path ? w.path = "/" + _.path : h.path ? w.path = h.path.slice(0, h.path.lastIndexOf("/") + 1) + _.path : w.path = _.path, w.path = t(w.path)), w.query = _.query) : (w.path = h.path, _.query !== void 0 ? w.query = _.query : w.query = h.query), w.userinfo = h.userinfo, w.host = h.host, w.port = h.port), w.scheme = h.scheme), w.fragment = _.fragment, w;
  }
  function p(h, _, f) {
    return typeof h == "string" ? (h = unescape(h), h = m(n(x(h, f), !0), { ...f, skipEscape: !0 })) : typeof h == "object" && (h = m(n(h, !0), { ...f, skipEscape: !0 })), typeof _ == "string" ? (_ = unescape(_), _ = m(n(x(_, f), !0), { ...f, skipEscape: !0 })) : typeof _ == "object" && (_ = m(n(_, !0), { ...f, skipEscape: !0 })), h.toLowerCase() === _.toLowerCase();
  }
  function m(h, _) {
    const f = {
      host: h.host,
      scheme: h.scheme,
      userinfo: h.userinfo,
      port: h.port,
      path: h.path,
      query: h.query,
      nid: h.nid,
      nss: h.nss,
      uuid: h.uuid,
      fragment: h.fragment,
      reference: h.reference,
      resourceName: h.resourceName,
      secure: h.secure,
      error: ""
    }, b = Object.assign({}, _), w = [], g = i(b.scheme || f.scheme);
    g && g.serialize && g.serialize(f, b), f.path !== void 0 && (b.skipEscape ? f.path = unescape(f.path) : (f.path = escape(f.path), f.scheme !== void 0 && (f.path = f.path.split("%3A").join(":")))), b.reference !== "suffix" && f.scheme && w.push(f.scheme, ":");
    const S = r(f);
    if (S !== void 0 && (b.reference !== "suffix" && w.push("//"), w.push(S), f.path && f.path[0] !== "/" && w.push("/")), f.path !== void 0) {
      let E = f.path;
      !b.absolutePath && (!g || !g.absolutePath) && (E = t(E)), S === void 0 && E[0] === "/" && E[1] === "/" && (E = "/%2F" + E.slice(2)), w.push(E);
    }
    return f.query !== void 0 && w.push("?", f.query), f.fragment !== void 0 && w.push("#", f.fragment), w.join("");
  }
  const v = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function x(h, _) {
    const f = Object.assign({}, _), b = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let w = !1;
    f.reference === "suffix" && (f.scheme ? h = f.scheme + ":" + h : h = "//" + h);
    const g = h.match(v);
    if (g) {
      if (b.scheme = g[1], b.userinfo = g[3], b.host = g[4], b.port = parseInt(g[5], 10), b.path = g[6] || "", b.query = g[7], b.fragment = g[8], isNaN(b.port) && (b.port = g[5]), b.host)
        if (s(b.host) === !1) {
          const k = e(b.host);
          b.host = k.host.toLowerCase(), w = k.isIPV6;
        } else
          w = !0;
      b.scheme === void 0 && b.userinfo === void 0 && b.host === void 0 && b.port === void 0 && b.query === void 0 && !b.path ? b.reference = "same-document" : b.scheme === void 0 ? b.reference = "relative" : b.fragment === void 0 ? b.reference = "absolute" : b.reference = "uri", f.reference && f.reference !== "suffix" && f.reference !== b.reference && (b.error = b.error || "URI is not a " + f.reference + " reference.");
      const S = i(f.scheme || b.scheme);
      if (!f.unicodeSupport && (!S || !S.unicodeSupport) && b.host && (f.domainHost || S && S.domainHost) && w === !1 && o(b.host))
        try {
          b.host = URL.domainToASCII(b.host.toLowerCase());
        } catch (E) {
          b.error = b.error || "Host's domain name can not be converted to ASCII: " + E;
        }
      (!S || S && !S.skipNormalize) && (h.indexOf("%") !== -1 && (b.scheme !== void 0 && (b.scheme = unescape(b.scheme)), b.host !== void 0 && (b.host = unescape(b.host))), b.path && (b.path = escape(unescape(b.path))), b.fragment && (b.fragment = encodeURI(decodeURIComponent(b.fragment)))), S && S.parse && S.parse(b, f);
    } else
      b.error = b.error || "URI can not be parsed.";
    return b;
  }
  const y = {
    SCHEMES: a,
    normalize: c,
    resolve: l,
    resolveComponent: u,
    equal: p,
    serialize: m,
    parse: x
  };
  return $n.exports = y, $n.exports.default = y, $n.exports.fastUri = y, $n.exports;
}
var El;
function Nx() {
  if (El) return ss;
  El = 1, Object.defineProperty(ss, "__esModule", { value: !0 });
  const e = Px();
  return e.code = 'require("ajv/dist/runtime/uri").default', ss.default = e, ss;
}
var Cl;
function oh() {
  return Cl || (Cl = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = Ln();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var r = we();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return r._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return r.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return r.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return r.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return r.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return r.CodeGen;
    } });
    const n = Ho(), s = zn(), o = th(), a = Go(), i = we(), c = Wo(), l = go(), u = Ie(), p = jx, m = Nx(), v = (G, T) => new RegExp(G, T);
    v.code = "new RegExp";
    const x = ["removeAdditional", "useDefaults", "coerceTypes"], y = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), h = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, _ = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, f = 200;
    function b(G) {
      var T, K, O, C, R, q, B, X, pe, ie, N, A, H, Y, ce, ye, He, st, Ge, j, D, U, re, ne, Q;
      const he = G.strict, Ae = (T = G.code) === null || T === void 0 ? void 0 : T.optimize, ze = Ae === !0 || Ae === void 0 ? 1 : Ae || 0, nt = (O = (K = G.code) === null || K === void 0 ? void 0 : K.regExp) !== null && O !== void 0 ? O : v, Bt = (C = G.uriResolver) !== null && C !== void 0 ? C : m.default;
      return {
        strictSchema: (q = (R = G.strictSchema) !== null && R !== void 0 ? R : he) !== null && q !== void 0 ? q : !0,
        strictNumbers: (X = (B = G.strictNumbers) !== null && B !== void 0 ? B : he) !== null && X !== void 0 ? X : !0,
        strictTypes: (ie = (pe = G.strictTypes) !== null && pe !== void 0 ? pe : he) !== null && ie !== void 0 ? ie : "log",
        strictTuples: (A = (N = G.strictTuples) !== null && N !== void 0 ? N : he) !== null && A !== void 0 ? A : "log",
        strictRequired: (Y = (H = G.strictRequired) !== null && H !== void 0 ? H : he) !== null && Y !== void 0 ? Y : !1,
        code: G.code ? { ...G.code, optimize: ze, regExp: nt } : { optimize: ze, regExp: nt },
        loopRequired: (ce = G.loopRequired) !== null && ce !== void 0 ? ce : f,
        loopEnum: (ye = G.loopEnum) !== null && ye !== void 0 ? ye : f,
        meta: (He = G.meta) !== null && He !== void 0 ? He : !0,
        messages: (st = G.messages) !== null && st !== void 0 ? st : !0,
        inlineRefs: (Ge = G.inlineRefs) !== null && Ge !== void 0 ? Ge : !0,
        schemaId: (j = G.schemaId) !== null && j !== void 0 ? j : "$id",
        addUsedSchema: (D = G.addUsedSchema) !== null && D !== void 0 ? D : !0,
        validateSchema: (U = G.validateSchema) !== null && U !== void 0 ? U : !0,
        validateFormats: (re = G.validateFormats) !== null && re !== void 0 ? re : !0,
        unicodeRegExp: (ne = G.unicodeRegExp) !== null && ne !== void 0 ? ne : !0,
        int32range: (Q = G.int32range) !== null && Q !== void 0 ? Q : !0,
        uriResolver: Bt
      };
    }
    class w {
      constructor(T = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), T = this.opts = { ...T, ...b(T) };
        const { es5: K, lines: O } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: y, es5: K, lines: O }), this.logger = V(T.logger);
        const C = T.validateFormats;
        T.validateFormats = !1, this.RULES = (0, o.getRules)(), g.call(this, h, T, "NOT SUPPORTED"), g.call(this, _, T, "DEPRECATED", "warn"), this._metaOpts = z.call(this), T.formats && k.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), T.keywords && I.call(this, T.keywords), typeof T.meta == "object" && this.addMetaSchema(T.meta), E.call(this), T.validateFormats = C;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: T, meta: K, schemaId: O } = this.opts;
        let C = p;
        O === "id" && (C = { ...p }, C.id = C.$id, delete C.$id), K && T && this.addMetaSchema(C, C[O], !1);
      }
      defaultMeta() {
        const { meta: T, schemaId: K } = this.opts;
        return this.opts.defaultMeta = typeof T == "object" ? T[K] || T : void 0;
      }
      validate(T, K) {
        let O;
        if (typeof T == "string") {
          if (O = this.getSchema(T), !O)
            throw new Error(`no schema with key or ref "${T}"`);
        } else
          O = this.compile(T);
        const C = O(K);
        return "$async" in O || (this.errors = O.errors), C;
      }
      compile(T, K) {
        const O = this._addSchema(T, K);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(T, K) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return C.call(this, T, K);
        async function C(ie, N) {
          await R.call(this, ie.$schema);
          const A = this._addSchema(ie, N);
          return A.validate || q.call(this, A);
        }
        async function R(ie) {
          ie && !this.getSchema(ie) && await C.call(this, { $ref: ie }, !0);
        }
        async function q(ie) {
          try {
            return this._compileSchemaEnv(ie);
          } catch (N) {
            if (!(N instanceof s.default))
              throw N;
            return B.call(this, N), await X.call(this, N.missingSchema), q.call(this, ie);
          }
        }
        function B({ missingSchema: ie, missingRef: N }) {
          if (this.refs[ie])
            throw new Error(`AnySchema ${ie} is loaded but ${N} cannot be resolved`);
        }
        async function X(ie) {
          const N = await pe.call(this, ie);
          this.refs[ie] || await R.call(this, N.$schema), this.refs[ie] || this.addSchema(N, ie, K);
        }
        async function pe(ie) {
          const N = this._loading[ie];
          if (N)
            return N;
          try {
            return await (this._loading[ie] = O(ie));
          } finally {
            delete this._loading[ie];
          }
        }
      }
      // Adds schema to the instance
      addSchema(T, K, O, C = this.opts.validateSchema) {
        if (Array.isArray(T)) {
          for (const q of T)
            this.addSchema(q, void 0, O, C);
          return this;
        }
        let R;
        if (typeof T == "object") {
          const { schemaId: q } = this.opts;
          if (R = T[q], R !== void 0 && typeof R != "string")
            throw new Error(`schema ${q} must be string`);
        }
        return K = (0, c.normalizeId)(K || R), this._checkUnique(K), this.schemas[K] = this._addSchema(T, O, K, C, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(T, K, O = this.opts.validateSchema) {
        return this.addSchema(T, K, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(T, K) {
        if (typeof T == "boolean")
          return !0;
        let O;
        if (O = T.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const C = this.validate(O, T);
        if (!C && K) {
          const R = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(R);
          else
            throw new Error(R);
        }
        return C;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(T) {
        let K;
        for (; typeof (K = S.call(this, T)) == "string"; )
          T = K;
        if (K === void 0) {
          const { schemaId: O } = this.opts, C = new a.SchemaEnv({ schema: {}, schemaId: O });
          if (K = a.resolveSchema.call(this, C, T), !K)
            return;
          this.refs[T] = K;
        }
        return K.validate || this._compileSchemaEnv(K);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(T) {
        if (T instanceof RegExp)
          return this._removeAllSchemas(this.schemas, T), this._removeAllSchemas(this.refs, T), this;
        switch (typeof T) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const K = S.call(this, T);
            return typeof K == "object" && this._cache.delete(K.schema), delete this.schemas[T], delete this.refs[T], this;
          }
          case "object": {
            const K = T;
            this._cache.delete(K);
            let O = T[this.opts.schemaId];
            return O && (O = (0, c.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(T) {
        for (const K of T)
          this.addKeyword(K);
        return this;
      }
      addKeyword(T, K) {
        let O;
        if (typeof T == "string")
          O = T, typeof K == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), K.keyword = O);
        else if (typeof T == "object" && K === void 0) {
          if (K = T, O = K.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (W.call(this, O, K), !K)
          return (0, u.eachItem)(O, (R) => te.call(this, R)), this;
        ae.call(this, K);
        const C = {
          ...K,
          type: (0, l.getJSONTypes)(K.type),
          schemaType: (0, l.getJSONTypes)(K.schemaType)
        };
        return (0, u.eachItem)(O, C.type.length === 0 ? (R) => te.call(this, R, C) : (R) => C.type.forEach((q) => te.call(this, R, C, q))), this;
      }
      getKeyword(T) {
        const K = this.RULES.all[T];
        return typeof K == "object" ? K.definition : !!K;
      }
      // Remove keyword
      removeKeyword(T) {
        const { RULES: K } = this;
        delete K.keywords[T], delete K.all[T];
        for (const O of K.rules) {
          const C = O.rules.findIndex((R) => R.keyword === T);
          C >= 0 && O.rules.splice(C, 1);
        }
        return this;
      }
      // Add format
      addFormat(T, K) {
        return typeof K == "string" && (K = new RegExp(K)), this.formats[T] = K, this;
      }
      errorsText(T = this.errors, { separator: K = ", ", dataVar: O = "data" } = {}) {
        return !T || T.length === 0 ? "No errors" : T.map((C) => `${O}${C.instancePath} ${C.message}`).reduce((C, R) => C + K + R);
      }
      $dataMetaSchema(T, K) {
        const O = this.RULES.all;
        T = JSON.parse(JSON.stringify(T));
        for (const C of K) {
          const R = C.split("/").slice(1);
          let q = T;
          for (const B of R)
            q = q[B];
          for (const B in O) {
            const X = O[B];
            if (typeof X != "object")
              continue;
            const { $data: pe } = X.definition, ie = q[B];
            pe && ie && (q[B] = ve(ie));
          }
        }
        return T;
      }
      _removeAllSchemas(T, K) {
        for (const O in T) {
          const C = T[O];
          (!K || K.test(O)) && (typeof C == "string" ? delete T[O] : C && !C.meta && (this._cache.delete(C.schema), delete T[O]));
        }
      }
      _addSchema(T, K, O, C = this.opts.validateSchema, R = this.opts.addUsedSchema) {
        let q;
        const { schemaId: B } = this.opts;
        if (typeof T == "object")
          q = T[B];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof T != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let X = this._cache.get(T);
        if (X !== void 0)
          return X;
        O = (0, c.normalizeId)(q || O);
        const pe = c.getSchemaRefs.call(this, T, O);
        return X = new a.SchemaEnv({ schema: T, schemaId: B, meta: K, baseId: O, localRefs: pe }), this._cache.set(X.schema, X), R && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = X), C && this.validateSchema(T, !0), X;
      }
      _checkUnique(T) {
        if (this.schemas[T] || this.refs[T])
          throw new Error(`schema with key or id "${T}" already exists`);
      }
      _compileSchemaEnv(T) {
        if (T.meta ? this._compileMetaSchema(T) : a.compileSchema.call(this, T), !T.validate)
          throw new Error("ajv implementation error");
        return T.validate;
      }
      _compileMetaSchema(T) {
        const K = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, T);
        } finally {
          this.opts = K;
        }
      }
    }
    w.ValidationError = n.default, w.MissingRefError = s.default, e.default = w;
    function g(G, T, K, O = "error") {
      for (const C in G) {
        const R = C;
        R in T && this.logger[O](`${K}: option ${C}. ${G[R]}`);
      }
    }
    function S(G) {
      return G = (0, c.normalizeId)(G), this.schemas[G] || this.refs[G];
    }
    function E() {
      const G = this.opts.schemas;
      if (G)
        if (Array.isArray(G))
          this.addSchema(G);
        else
          for (const T in G)
            this.addSchema(G[T], T);
    }
    function k() {
      for (const G in this.opts.formats) {
        const T = this.opts.formats[G];
        T && this.addFormat(G, T);
      }
    }
    function I(G) {
      if (Array.isArray(G)) {
        this.addVocabulary(G);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const T in G) {
        const K = G[T];
        K.keyword || (K.keyword = T), this.addKeyword(K);
      }
    }
    function z() {
      const G = { ...this.opts };
      for (const T of x)
        delete G[T];
      return G;
    }
    const M = { log() {
    }, warn() {
    }, error() {
    } };
    function V(G) {
      if (G === !1)
        return M;
      if (G === void 0)
        return console;
      if (G.log && G.warn && G.error)
        return G;
      throw new Error("logger must implement log, warn and error methods");
    }
    const F = /^[a-z_$][a-z0-9_$:-]*$/i;
    function W(G, T) {
      const { RULES: K } = this;
      if ((0, u.eachItem)(G, (O) => {
        if (K.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!F.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!T && T.$data && !("code" in T || "validate" in T))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function te(G, T, K) {
      var O;
      const C = T == null ? void 0 : T.post;
      if (K && C)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: R } = this;
      let q = C ? R.post : R.rules.find(({ type: X }) => X === K);
      if (q || (q = { type: K, rules: [] }, R.rules.push(q)), R.keywords[G] = !0, !T)
        return;
      const B = {
        keyword: G,
        definition: {
          ...T,
          type: (0, l.getJSONTypes)(T.type),
          schemaType: (0, l.getJSONTypes)(T.schemaType)
        }
      };
      T.before ? Z.call(this, q, B, T.before) : q.rules.push(B), R.all[G] = B, (O = T.implements) === null || O === void 0 || O.forEach((X) => this.addKeyword(X));
    }
    function Z(G, T, K) {
      const O = G.rules.findIndex((C) => C.keyword === K);
      O >= 0 ? G.rules.splice(O, 0, T) : (G.rules.push(T), this.logger.warn(`rule ${K} is not defined`));
    }
    function ae(G) {
      let { metaSchema: T } = G;
      T !== void 0 && (G.$data && this.opts.$data && (T = ve(T)), G.validateSchema = this.compile(T, !0));
    }
    const L = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ve(G) {
      return { anyOf: [G, L] };
    }
  })(wa)), wa;
}
var os = {}, as = {}, is = {}, kl;
function Ax() {
  if (kl) return is;
  kl = 1, Object.defineProperty(is, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return is.default = e, is;
}
var sr = {}, jl;
function Gi() {
  if (jl) return sr;
  jl = 1, Object.defineProperty(sr, "__esModule", { value: !0 }), sr.callRef = sr.getValidate = void 0;
  const e = zn(), t = Tt(), r = we(), n = At(), s = Go(), o = Ie(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: u, schema: p, it: m } = l, { baseId: v, schemaEnv: x, validateName: y, opts: h, self: _ } = m, { root: f } = x;
      if ((p === "#" || p === "#/") && v === f.baseId)
        return w();
      const b = s.resolveRef.call(_, f, v, p);
      if (b === void 0)
        throw new e.default(m.opts.uriResolver, v, p);
      if (b instanceof s.SchemaEnv)
        return g(b);
      return S(b);
      function w() {
        if (x === f)
          return c(l, y, x, x.$async);
        const E = u.scopeValue("root", { ref: f });
        return c(l, (0, r._)`${E}.validate`, f, f.$async);
      }
      function g(E) {
        const k = i(l, E);
        c(l, k, E, E.$async);
      }
      function S(E) {
        const k = u.scopeValue("schema", h.code.source === !0 ? { ref: E, code: (0, r.stringify)(E) } : { ref: E }), I = u.name("valid"), z = l.subschema({
          schema: E,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: k,
          errSchemaPath: p
        }, I);
        l.mergeEvaluated(z), l.ok(I);
      }
    }
  };
  function i(l, u) {
    const { gen: p } = l;
    return u.validate ? p.scopeValue("validate", { ref: u.validate }) : (0, r._)`${p.scopeValue("wrapper", { ref: u })}.validate`;
  }
  sr.getValidate = i;
  function c(l, u, p, m) {
    const { gen: v, it: x } = l, { allErrors: y, schemaEnv: h, opts: _ } = x, f = _.passContext ? n.default.this : r.nil;
    m ? b() : w();
    function b() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const E = v.let("valid");
      v.try(() => {
        v.code((0, r._)`await ${(0, t.callValidateCode)(l, u, f)}`), S(u), y || v.assign(E, !0);
      }, (k) => {
        v.if((0, r._)`!(${k} instanceof ${x.ValidationError})`, () => v.throw(k)), g(k), y || v.assign(E, !1);
      }), l.ok(E);
    }
    function w() {
      l.result((0, t.callValidateCode)(l, u, f), () => S(u), () => g(u));
    }
    function g(E) {
      const k = (0, r._)`${E}.errors`;
      v.assign(n.default.vErrors, (0, r._)`${n.default.vErrors} === null ? ${k} : ${n.default.vErrors}.concat(${k})`), v.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function S(E) {
      var k;
      if (!x.opts.unevaluated)
        return;
      const I = (k = p == null ? void 0 : p.validate) === null || k === void 0 ? void 0 : k.evaluated;
      if (x.props !== !0)
        if (I && !I.dynamicProps)
          I.props !== void 0 && (x.props = o.mergeEvaluated.props(v, I.props, x.props));
        else {
          const z = v.var("props", (0, r._)`${E}.evaluated.props`);
          x.props = o.mergeEvaluated.props(v, z, x.props, r.Name);
        }
      if (x.items !== !0)
        if (I && !I.dynamicItems)
          I.items !== void 0 && (x.items = o.mergeEvaluated.items(v, I.items, x.items));
        else {
          const z = v.var("items", (0, r._)`${E}.evaluated.items`);
          x.items = o.mergeEvaluated.items(v, z, x.items, r.Name);
        }
    }
  }
  return sr.callRef = c, sr.default = a, sr;
}
var Rl;
function ah() {
  if (Rl) return as;
  Rl = 1, Object.defineProperty(as, "__esModule", { value: !0 });
  const e = Ax(), t = Gi(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return as.default = r, as;
}
var cs = {}, ls = {}, Pl;
function Tx() {
  if (Pl) return ls;
  Pl = 1, Object.defineProperty(ls, "__esModule", { value: !0 });
  const e = we(), t = e.operators, r = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, n = {
    message: ({ keyword: o, schemaCode: a }) => (0, e.str)`must be ${r[o].okStr} ${a}`,
    params: ({ keyword: o, schemaCode: a }) => (0, e._)`{comparison: ${r[o].okStr}, limit: ${a}}`
  }, s = {
    keyword: Object.keys(r),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: n,
    code(o) {
      const { keyword: a, data: i, schemaCode: c } = o;
      o.fail$data((0, e._)`${i} ${r[a].fail} ${c} || isNaN(${i})`);
    }
  };
  return ls.default = s, ls;
}
var us = {}, Nl;
function Ox() {
  if (Nl) return us;
  Nl = 1, Object.defineProperty(us, "__esModule", { value: !0 });
  const e = we(), r = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must be multiple of ${n}`,
      params: ({ schemaCode: n }) => (0, e._)`{multipleOf: ${n}}`
    },
    code(n) {
      const { gen: s, data: o, schemaCode: a, it: i } = n, c = i.opts.multipleOfPrecision, l = s.let("res"), u = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
      n.fail$data((0, e._)`(${a} === 0 || (${l} = ${o}/${a}, ${u}))`);
    }
  };
  return us.default = r, us;
}
var ds = {}, fs = {}, Al;
function Ix() {
  if (Al) return fs;
  Al = 1, Object.defineProperty(fs, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let n = 0, s = 0, o;
    for (; s < r; )
      n++, o = t.charCodeAt(s++), o >= 55296 && o <= 56319 && s < r && (o = t.charCodeAt(s), (o & 64512) === 56320 && s++);
    return n;
  }
  return fs.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', fs;
}
var Tl;
function Dx() {
  if (Tl) return ds;
  Tl = 1, Object.defineProperty(ds, "__esModule", { value: !0 });
  const e = we(), t = Ie(), r = Ix(), s = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: a }) {
        const i = o === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${a} characters`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: a, data: i, schemaCode: c, it: l } = o, u = a === "maxLength" ? e.operators.GT : e.operators.LT, p = l.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(o.gen, r.default)}(${i})`;
      o.fail$data((0, e._)`${p} ${u} ${c}`);
    }
  };
  return ds.default = s, ds;
}
var ms = {}, Ol;
function Mx() {
  if (Ol) return ms;
  Ol = 1, Object.defineProperty(ms, "__esModule", { value: !0 });
  const e = Tt(), t = we(), n = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, t.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, t._)`{pattern: ${s}}`
    },
    code(s) {
      const { data: o, $data: a, schema: i, schemaCode: c, it: l } = s, u = l.opts.unicodeRegExp ? "u" : "", p = a ? (0, t._)`(new RegExp(${c}, ${u}))` : (0, e.usePattern)(s, i);
      s.fail$data((0, t._)`!${p}.test(${o})`);
    }
  };
  return ms.default = n, ms;
}
var hs = {}, Il;
function Vx() {
  if (Il) return hs;
  Il = 1, Object.defineProperty(hs, "__esModule", { value: !0 });
  const e = we(), r = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: s }) {
        const o = n === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${s} properties`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: s, data: o, schemaCode: a } = n, i = s === "maxProperties" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`Object.keys(${o}).length ${i} ${a}`);
    }
  };
  return hs.default = r, hs;
}
var ps = {}, Dl;
function Fx() {
  if (Dl) return ps;
  Dl = 1, Object.defineProperty(ps, "__esModule", { value: !0 });
  const e = Tt(), t = we(), r = Ie(), s = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, t.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, t._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: a, schema: i, schemaCode: c, data: l, $data: u, it: p } = o, { opts: m } = p;
      if (!u && i.length === 0)
        return;
      const v = i.length >= m.loopRequired;
      if (p.allErrors ? x() : y(), m.strictRequired) {
        const f = o.parentSchema.properties, { definedProperties: b } = o.it;
        for (const w of i)
          if ((f == null ? void 0 : f[w]) === void 0 && !b.has(w)) {
            const g = p.schemaEnv.baseId + p.errSchemaPath, S = `required property "${w}" is not defined at "${g}" (strictRequired)`;
            (0, r.checkStrictMode)(p, S, p.opts.strictRequired);
          }
      }
      function x() {
        if (v || u)
          o.block$data(t.nil, h);
        else
          for (const f of i)
            (0, e.checkReportMissingProp)(o, f);
      }
      function y() {
        const f = a.let("missing");
        if (v || u) {
          const b = a.let("valid", !0);
          o.block$data(b, () => _(f, b)), o.ok(b);
        } else
          a.if((0, e.checkMissingProp)(o, i, f)), (0, e.reportMissingProp)(o, f), a.else();
      }
      function h() {
        a.forOf("prop", c, (f) => {
          o.setParams({ missingProperty: f }), a.if((0, e.noPropertyInData)(a, l, f, m.ownProperties), () => o.error());
        });
      }
      function _(f, b) {
        o.setParams({ missingProperty: f }), a.forOf(f, c, () => {
          a.assign(b, (0, e.propertyInData)(a, l, f, m.ownProperties)), a.if((0, t.not)(b), () => {
            o.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return ps.default = s, ps;
}
var gs = {}, Ml;
function Lx() {
  if (Ml) return gs;
  Ml = 1, Object.defineProperty(gs, "__esModule", { value: !0 });
  const e = we(), r = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: s }) {
        const o = n === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${s} items`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: s, data: o, schemaCode: a } = n, i = s === "maxItems" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`${o}.length ${i} ${a}`);
    }
  };
  return gs.default = r, gs;
}
var vs = {}, ys = {}, Vl;
function Ki() {
  if (Vl) return ys;
  Vl = 1, Object.defineProperty(ys, "__esModule", { value: !0 });
  const e = nh();
  return e.code = 'require("ajv/dist/runtime/equal").default', ys.default = e, ys;
}
var Fl;
function zx() {
  if (Fl) return vs;
  Fl = 1, Object.defineProperty(vs, "__esModule", { value: !0 });
  const e = go(), t = we(), r = Ie(), n = Ki(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${a} are identical)`,
      params: ({ params: { i: a, j: i } }) => (0, t._)`{i: ${a}, j: ${i}}`
    },
    code(a) {
      const { gen: i, data: c, $data: l, schema: u, parentSchema: p, schemaCode: m, it: v } = a;
      if (!l && !u)
        return;
      const x = i.let("valid"), y = p.items ? (0, e.getSchemaTypes)(p.items) : [];
      a.block$data(x, h, (0, t._)`${m} === false`), a.ok(x);
      function h() {
        const w = i.let("i", (0, t._)`${c}.length`), g = i.let("j");
        a.setParams({ i: w, j: g }), i.assign(x, !0), i.if((0, t._)`${w} > 1`, () => (_() ? f : b)(w, g));
      }
      function _() {
        return y.length > 0 && !y.some((w) => w === "object" || w === "array");
      }
      function f(w, g) {
        const S = i.name("item"), E = (0, e.checkDataTypes)(y, S, v.opts.strictNumbers, e.DataType.Wrong), k = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${w}--;`, () => {
          i.let(S, (0, t._)`${c}[${w}]`), i.if(E, (0, t._)`continue`), y.length > 1 && i.if((0, t._)`typeof ${S} == "string"`, (0, t._)`${S} += "_"`), i.if((0, t._)`typeof ${k}[${S}] == "number"`, () => {
            i.assign(g, (0, t._)`${k}[${S}]`), a.error(), i.assign(x, !1).break();
          }).code((0, t._)`${k}[${S}] = ${w}`);
        });
      }
      function b(w, g) {
        const S = (0, r.useFunc)(i, n.default), E = i.name("outer");
        i.label(E).for((0, t._)`;${w}--;`, () => i.for((0, t._)`${g} = ${w}; ${g}--;`, () => i.if((0, t._)`${S}(${c}[${w}], ${c}[${g}])`, () => {
          a.error(), i.assign(x, !1).break(E);
        })));
      }
    }
  };
  return vs.default = o, vs;
}
var bs = {}, Ll;
function qx() {
  if (Ll) return bs;
  Ll = 1, Object.defineProperty(bs, "__esModule", { value: !0 });
  const e = we(), t = Ie(), r = Ki(), s = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: a, data: i, $data: c, schemaCode: l, schema: u } = o;
      c || u && typeof u == "object" ? o.fail$data((0, e._)`!${(0, t.useFunc)(a, r.default)}(${i}, ${l})`) : o.fail((0, e._)`${u} !== ${i}`);
    }
  };
  return bs.default = s, bs;
}
var _s = {}, zl;
function Ux() {
  if (zl) return _s;
  zl = 1, Object.defineProperty(_s, "__esModule", { value: !0 });
  const e = we(), t = Ie(), r = Ki(), s = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: a, data: i, $data: c, schema: l, schemaCode: u, it: p } = o;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const m = l.length >= p.opts.loopEnum;
      let v;
      const x = () => v ?? (v = (0, t.useFunc)(a, r.default));
      let y;
      if (m || c)
        y = a.let("valid"), o.block$data(y, h);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const f = a.const("vSchema", u);
        y = (0, e.or)(...l.map((b, w) => _(f, w)));
      }
      o.pass(y);
      function h() {
        a.assign(y, !1), a.forOf("v", u, (f) => a.if((0, e._)`${x()}(${i}, ${f})`, () => a.assign(y, !0).break()));
      }
      function _(f, b) {
        const w = l[b];
        return typeof w == "object" && w !== null ? (0, e._)`${x()}(${i}, ${f}[${b}])` : (0, e._)`${i} === ${w}`;
      }
    }
  };
  return _s.default = s, _s;
}
var ql;
function ih() {
  if (ql) return cs;
  ql = 1, Object.defineProperty(cs, "__esModule", { value: !0 });
  const e = Tx(), t = Ox(), r = Dx(), n = Mx(), s = Vx(), o = Fx(), a = Lx(), i = zx(), c = qx(), l = Ux(), u = [
    // number
    e.default,
    t.default,
    // string
    r.default,
    n.default,
    // object
    s.default,
    o.default,
    // array
    a.default,
    i.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    l.default
  ];
  return cs.default = u, cs;
}
var xs = {}, Fr = {}, Ul;
function ch() {
  if (Ul) return Fr;
  Ul = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.validateAdditionalItems = void 0;
  const e = we(), t = Ie(), n = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: a, it: i } = o, { items: c } = a;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(i, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      s(o, c);
    }
  };
  function s(o, a) {
    const { gen: i, schema: c, data: l, keyword: u, it: p } = o;
    p.items = !0;
    const m = i.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      o.setParams({ len: a.length }), o.pass((0, e._)`${m} <= ${a.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(p, c)) {
      const x = i.var("valid", (0, e._)`${m} <= ${a.length}`);
      i.if((0, e.not)(x), () => v(x)), o.ok(x);
    }
    function v(x) {
      i.forRange("i", a.length, m, (y) => {
        o.subschema({ keyword: u, dataProp: y, dataPropType: t.Type.Num }, x), p.allErrors || i.if((0, e.not)(x), () => i.break());
      });
    }
  }
  return Fr.validateAdditionalItems = s, Fr.default = n, Fr;
}
var ws = {}, Lr = {}, Bl;
function lh() {
  if (Bl) return Lr;
  Bl = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.validateTuple = void 0;
  const e = we(), t = Ie(), r = Tt(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(o) {
      const { schema: a, it: i } = o;
      if (Array.isArray(a))
        return s(o, "additionalItems", a);
      i.items = !0, !(0, t.alwaysValidSchema)(i, a) && o.ok((0, r.validateArray)(o));
    }
  };
  function s(o, a, i = o.schema) {
    const { gen: c, parentSchema: l, data: u, keyword: p, it: m } = o;
    y(l), m.opts.unevaluated && i.length && m.items !== !0 && (m.items = t.mergeEvaluated.items(c, i.length, m.items));
    const v = c.name("valid"), x = c.const("len", (0, e._)`${u}.length`);
    i.forEach((h, _) => {
      (0, t.alwaysValidSchema)(m, h) || (c.if((0, e._)`${x} > ${_}`, () => o.subschema({
        keyword: p,
        schemaProp: _,
        dataProp: _
      }, v)), o.ok(v));
    });
    function y(h) {
      const { opts: _, errSchemaPath: f } = m, b = i.length, w = b === h.minItems && (b === h.maxItems || h[a] === !1);
      if (_.strictTuples && !w) {
        const g = `"${p}" is ${b}-tuple, but minItems or maxItems/${a} are not specified or different at path "${f}"`;
        (0, t.checkStrictMode)(m, g, _.strictTuples);
      }
    }
  }
  return Lr.validateTuple = s, Lr.default = n, Lr;
}
var Wl;
function Bx() {
  if (Wl) return ws;
  Wl = 1, Object.defineProperty(ws, "__esModule", { value: !0 });
  const e = lh(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return ws.default = t, ws;
}
var Ss = {}, Hl;
function Wx() {
  if (Hl) return Ss;
  Hl = 1, Object.defineProperty(Ss, "__esModule", { value: !0 });
  const e = we(), t = Ie(), r = Tt(), n = ch(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: i, parentSchema: c, it: l } = a, { prefixItems: u } = c;
      l.items = !0, !(0, t.alwaysValidSchema)(l, i) && (u ? (0, n.validateAdditionalItems)(a, u) : a.ok((0, r.validateArray)(a)));
    }
  };
  return Ss.default = o, Ss;
}
var $s = {}, Gl;
function Hx() {
  if (Gl) return $s;
  Gl = 1, Object.defineProperty($s, "__esModule", { value: !0 });
  const e = we(), t = Ie(), n = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: s, max: o } }) => o === void 0 ? (0, e.str)`must contain at least ${s} valid item(s)` : (0, e.str)`must contain at least ${s} and no more than ${o} valid item(s)`,
      params: ({ params: { min: s, max: o } }) => o === void 0 ? (0, e._)`{minContains: ${s}}` : (0, e._)`{minContains: ${s}, maxContains: ${o}}`
    },
    code(s) {
      const { gen: o, schema: a, parentSchema: i, data: c, it: l } = s;
      let u, p;
      const { minContains: m, maxContains: v } = i;
      l.opts.next ? (u = m === void 0 ? 1 : m, p = v) : u = 1;
      const x = o.const("len", (0, e._)`${c}.length`);
      if (s.setParams({ min: u, max: p }), p === void 0 && u === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (p !== void 0 && u > p) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), s.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, a)) {
        let b = (0, e._)`${x} >= ${u}`;
        p !== void 0 && (b = (0, e._)`${b} && ${x} <= ${p}`), s.pass(b);
        return;
      }
      l.items = !0;
      const y = o.name("valid");
      p === void 0 && u === 1 ? _(y, () => o.if(y, () => o.break())) : u === 0 ? (o.let(y, !0), p !== void 0 && o.if((0, e._)`${c}.length > 0`, h)) : (o.let(y, !1), h()), s.result(y, () => s.reset());
      function h() {
        const b = o.name("_valid"), w = o.let("count", 0);
        _(b, () => o.if(b, () => f(w)));
      }
      function _(b, w) {
        o.forRange("i", 0, x, (g) => {
          s.subschema({
            keyword: "contains",
            dataProp: g,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, b), w();
        });
      }
      function f(b) {
        o.code((0, e._)`${b}++`), p === void 0 ? o.if((0, e._)`${b} >= ${u}`, () => o.assign(y, !0).break()) : (o.if((0, e._)`${b} > ${p}`, () => o.assign(y, !1).break()), u === 1 ? o.assign(y, !0) : o.if((0, e._)`${b} >= ${u}`, () => o.assign(y, !0)));
      }
    }
  };
  return $s.default = n, $s;
}
var Na = {}, Kl;
function Zi() {
  return Kl || (Kl = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = we(), r = Ie(), n = Tt();
    e.error = {
      message: ({ params: { property: c, depsCount: l, deps: u } }) => {
        const p = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${p} ${u} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: l, deps: u, missingProperty: p } }) => (0, t._)`{property: ${c},
    missingProperty: ${p},
    depsCount: ${l},
    deps: ${u}}`
      // TODO change to reference
    };
    const s = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [l, u] = o(c);
        a(c, l), i(c, u);
      }
    };
    function o({ schema: c }) {
      const l = {}, u = {};
      for (const p in c) {
        if (p === "__proto__")
          continue;
        const m = Array.isArray(c[p]) ? l : u;
        m[p] = c[p];
      }
      return [l, u];
    }
    function a(c, l = c.schema) {
      const { gen: u, data: p, it: m } = c;
      if (Object.keys(l).length === 0)
        return;
      const v = u.let("missing");
      for (const x in l) {
        const y = l[x];
        if (y.length === 0)
          continue;
        const h = (0, n.propertyInData)(u, p, x, m.opts.ownProperties);
        c.setParams({
          property: x,
          depsCount: y.length,
          deps: y.join(", ")
        }), m.allErrors ? u.if(h, () => {
          for (const _ of y)
            (0, n.checkReportMissingProp)(c, _);
        }) : (u.if((0, t._)`${h} && (${(0, n.checkMissingProp)(c, y, v)})`), (0, n.reportMissingProp)(c, v), u.else());
      }
    }
    e.validatePropertyDeps = a;
    function i(c, l = c.schema) {
      const { gen: u, data: p, keyword: m, it: v } = c, x = u.name("valid");
      for (const y in l)
        (0, r.alwaysValidSchema)(v, l[y]) || (u.if(
          (0, n.propertyInData)(u, p, y, v.opts.ownProperties),
          () => {
            const h = c.subschema({ keyword: m, schemaProp: y }, x);
            c.mergeValidEvaluated(h, x);
          },
          () => u.var(x, !0)
          // TODO var
        ), c.ok(x));
    }
    e.validateSchemaDeps = i, e.default = s;
  })(Na)), Na;
}
var Es = {}, Zl;
function Gx() {
  if (Zl) return Es;
  Zl = 1, Object.defineProperty(Es, "__esModule", { value: !0 });
  const e = we(), t = Ie(), n = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: s }) => (0, e._)`{propertyName: ${s.propertyName}}`
    },
    code(s) {
      const { gen: o, schema: a, data: i, it: c } = s;
      if ((0, t.alwaysValidSchema)(c, a))
        return;
      const l = o.name("valid");
      o.forIn("key", i, (u) => {
        s.setParams({ propertyName: u }), s.subschema({
          keyword: "propertyNames",
          data: u,
          dataTypes: ["string"],
          propertyName: u,
          compositeRule: !0
        }, l), o.if((0, e.not)(l), () => {
          s.error(!0), c.allErrors || o.break();
        });
      }), s.ok(l);
    }
  };
  return Es.default = n, Es;
}
var Cs = {}, Yl;
function uh() {
  if (Yl) return Cs;
  Yl = 1, Object.defineProperty(Cs, "__esModule", { value: !0 });
  const e = Tt(), t = we(), r = At(), n = Ie(), o = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: a }) => (0, t._)`{additionalProperty: ${a.additionalProperty}}`
    },
    code(a) {
      const { gen: i, schema: c, parentSchema: l, data: u, errsCount: p, it: m } = a;
      if (!p)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: x } = m;
      if (m.props = !0, x.removeAdditional !== "all" && (0, n.alwaysValidSchema)(m, c))
        return;
      const y = (0, e.allSchemaProperties)(l.properties), h = (0, e.allSchemaProperties)(l.patternProperties);
      _(), a.ok((0, t._)`${p} === ${r.default.errors}`);
      function _() {
        i.forIn("key", u, (S) => {
          !y.length && !h.length ? w(S) : i.if(f(S), () => w(S));
        });
      }
      function f(S) {
        let E;
        if (y.length > 8) {
          const k = (0, n.schemaRefOrVal)(m, l.properties, "properties");
          E = (0, e.isOwnProperty)(i, k, S);
        } else y.length ? E = (0, t.or)(...y.map((k) => (0, t._)`${S} === ${k}`)) : E = t.nil;
        return h.length && (E = (0, t.or)(E, ...h.map((k) => (0, t._)`${(0, e.usePattern)(a, k)}.test(${S})`))), (0, t.not)(E);
      }
      function b(S) {
        i.code((0, t._)`delete ${u}[${S}]`);
      }
      function w(S) {
        if (x.removeAdditional === "all" || x.removeAdditional && c === !1) {
          b(S);
          return;
        }
        if (c === !1) {
          a.setParams({ additionalProperty: S }), a.error(), v || i.break();
          return;
        }
        if (typeof c == "object" && !(0, n.alwaysValidSchema)(m, c)) {
          const E = i.name("valid");
          x.removeAdditional === "failing" ? (g(S, E, !1), i.if((0, t.not)(E), () => {
            a.reset(), b(S);
          })) : (g(S, E), v || i.if((0, t.not)(E), () => i.break()));
        }
      }
      function g(S, E, k) {
        const I = {
          keyword: "additionalProperties",
          dataProp: S,
          dataPropType: n.Type.Str
        };
        k === !1 && Object.assign(I, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(I, E);
      }
    }
  };
  return Cs.default = o, Cs;
}
var ks = {}, Jl;
function Kx() {
  if (Jl) return ks;
  Jl = 1, Object.defineProperty(ks, "__esModule", { value: !0 });
  const e = Ln(), t = Tt(), r = Ie(), n = uh(), s = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: a, schema: i, parentSchema: c, data: l, it: u } = o;
      u.opts.removeAdditional === "all" && c.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(u, n.default, "additionalProperties"));
      const p = (0, t.allSchemaProperties)(i);
      for (const h of p)
        u.definedProperties.add(h);
      u.opts.unevaluated && p.length && u.props !== !0 && (u.props = r.mergeEvaluated.props(a, (0, r.toHash)(p), u.props));
      const m = p.filter((h) => !(0, r.alwaysValidSchema)(u, i[h]));
      if (m.length === 0)
        return;
      const v = a.name("valid");
      for (const h of m)
        x(h) ? y(h) : (a.if((0, t.propertyInData)(a, l, h, u.opts.ownProperties)), y(h), u.allErrors || a.else().var(v, !0), a.endIf()), o.it.definedProperties.add(h), o.ok(v);
      function x(h) {
        return u.opts.useDefaults && !u.compositeRule && i[h].default !== void 0;
      }
      function y(h) {
        o.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, v);
      }
    }
  };
  return ks.default = s, ks;
}
var js = {}, Xl;
function Zx() {
  if (Xl) return js;
  Xl = 1, Object.defineProperty(js, "__esModule", { value: !0 });
  const e = Tt(), t = we(), r = Ie(), n = Ie(), s = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: a, schema: i, data: c, parentSchema: l, it: u } = o, { opts: p } = u, m = (0, e.allSchemaProperties)(i), v = m.filter((w) => (0, r.alwaysValidSchema)(u, i[w]));
      if (m.length === 0 || v.length === m.length && (!u.opts.unevaluated || u.props === !0))
        return;
      const x = p.strictSchema && !p.allowMatchingProperties && l.properties, y = a.name("valid");
      u.props !== !0 && !(u.props instanceof t.Name) && (u.props = (0, n.evaluatedPropsToName)(a, u.props));
      const { props: h } = u;
      _();
      function _() {
        for (const w of m)
          x && f(w), u.allErrors ? b(w) : (a.var(y, !0), b(w), a.if(y));
      }
      function f(w) {
        for (const g in x)
          new RegExp(w).test(g) && (0, r.checkStrictMode)(u, `property ${g} matches pattern ${w} (use allowMatchingProperties)`);
      }
      function b(w) {
        a.forIn("key", c, (g) => {
          a.if((0, t._)`${(0, e.usePattern)(o, w)}.test(${g})`, () => {
            const S = v.includes(w);
            S || o.subschema({
              keyword: "patternProperties",
              schemaProp: w,
              dataProp: g,
              dataPropType: n.Type.Str
            }, y), u.opts.unevaluated && h !== !0 ? a.assign((0, t._)`${h}[${g}]`, !0) : !S && !u.allErrors && a.if((0, t.not)(y), () => a.break());
          });
        });
      }
    }
  };
  return js.default = s, js;
}
var Rs = {}, Ql;
function Yx() {
  if (Ql) return Rs;
  Ql = 1, Object.defineProperty(Rs, "__esModule", { value: !0 });
  const e = Ie(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(r) {
      const { gen: n, schema: s, it: o } = r;
      if ((0, e.alwaysValidSchema)(o, s)) {
        r.fail();
        return;
      }
      const a = n.name("valid");
      r.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, a), r.failResult(a, () => r.reset(), () => r.error());
    },
    error: { message: "must NOT be valid" }
  };
  return Rs.default = t, Rs;
}
var Ps = {}, eu;
function Jx() {
  if (eu) return Ps;
  eu = 1, Object.defineProperty(Ps, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: Tt().validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Ps.default = t, Ps;
}
var Ns = {}, tu;
function Xx() {
  if (tu) return Ns;
  tu = 1, Object.defineProperty(Ns, "__esModule", { value: !0 });
  const e = we(), t = Ie(), n = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: s }) => (0, e._)`{passingSchemas: ${s.passing}}`
    },
    code(s) {
      const { gen: o, schema: a, parentSchema: i, it: c } = s;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && i.discriminator)
        return;
      const l = a, u = o.let("valid", !1), p = o.let("passing", null), m = o.name("_valid");
      s.setParams({ passing: p }), o.block(v), s.result(u, () => s.reset(), () => s.error(!0));
      function v() {
        l.forEach((x, y) => {
          let h;
          (0, t.alwaysValidSchema)(c, x) ? o.var(m, !0) : h = s.subschema({
            keyword: "oneOf",
            schemaProp: y,
            compositeRule: !0
          }, m), y > 0 && o.if((0, e._)`${m} && ${u}`).assign(u, !1).assign(p, (0, e._)`[${p}, ${y}]`).else(), o.if(m, () => {
            o.assign(u, !0), o.assign(p, y), h && s.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return Ns.default = n, Ns;
}
var As = {}, ru;
function Qx() {
  if (ru) return As;
  ru = 1, Object.defineProperty(As, "__esModule", { value: !0 });
  const e = Ie(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(r) {
      const { gen: n, schema: s, it: o } = r;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      const a = n.name("valid");
      s.forEach((i, c) => {
        if ((0, e.alwaysValidSchema)(o, i))
          return;
        const l = r.subschema({ keyword: "allOf", schemaProp: c }, a);
        r.ok(a), r.mergeEvaluated(l);
      });
    }
  };
  return As.default = t, As;
}
var Ts = {}, nu;
function ew() {
  if (nu) return Ts;
  nu = 1, Object.defineProperty(Ts, "__esModule", { value: !0 });
  const e = we(), t = Ie(), n = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: a, parentSchema: i, it: c } = o;
      i.then === void 0 && i.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const l = s(c, "then"), u = s(c, "else");
      if (!l && !u)
        return;
      const p = a.let("valid", !0), m = a.name("_valid");
      if (v(), o.reset(), l && u) {
        const y = a.let("ifClause");
        o.setParams({ ifClause: y }), a.if(m, x("then", y), x("else", y));
      } else l ? a.if(m, x("then")) : a.if((0, e.not)(m), x("else"));
      o.pass(p, () => o.error(!0));
      function v() {
        const y = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, m);
        o.mergeEvaluated(y);
      }
      function x(y, h) {
        return () => {
          const _ = o.subschema({ keyword: y }, m);
          a.assign(p, m), o.mergeValidEvaluated(_, p), h ? a.assign(h, (0, e._)`${y}`) : o.setParams({ ifClause: y });
        };
      }
    }
  };
  function s(o, a) {
    const i = o.schema[a];
    return i !== void 0 && !(0, t.alwaysValidSchema)(o, i);
  }
  return Ts.default = n, Ts;
}
var Os = {}, su;
function tw() {
  if (su) return Os;
  su = 1, Object.defineProperty(Os, "__esModule", { value: !0 });
  const e = Ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: n, it: s }) {
      n.if === void 0 && (0, e.checkStrictMode)(s, `"${r}" without "if" is ignored`);
    }
  };
  return Os.default = t, Os;
}
var ou;
function dh() {
  if (ou) return xs;
  ou = 1, Object.defineProperty(xs, "__esModule", { value: !0 });
  const e = ch(), t = Bx(), r = lh(), n = Wx(), s = Hx(), o = Zi(), a = Gx(), i = uh(), c = Kx(), l = Zx(), u = Yx(), p = Jx(), m = Xx(), v = Qx(), x = ew(), y = tw();
  function h(_ = !1) {
    const f = [
      // any
      u.default,
      p.default,
      m.default,
      v.default,
      x.default,
      y.default,
      // object
      a.default,
      i.default,
      o.default,
      c.default,
      l.default
    ];
    return _ ? f.push(t.default, n.default) : f.push(e.default, r.default), f.push(s.default), f;
  }
  return xs.default = h, xs;
}
var Is = {}, zr = {}, au;
function fh() {
  if (au) return zr;
  au = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.dynamicAnchor = void 0;
  const e = we(), t = At(), r = Go(), n = Gi(), s = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (i) => o(i, i.schema)
  };
  function o(i, c) {
    const { gen: l, it: u } = i;
    u.schemaEnv.root.dynamicAnchors[c] = !0;
    const p = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, m = u.errSchemaPath === "#" ? u.validateName : a(i);
    l.if((0, e._)`!${p}`, () => l.assign(p, m));
  }
  zr.dynamicAnchor = o;
  function a(i) {
    const { schemaEnv: c, schema: l, self: u } = i.it, { root: p, baseId: m, localRefs: v, meta: x } = c.root, { schemaId: y } = u.opts, h = new r.SchemaEnv({ schema: l, schemaId: y, root: p, baseId: m, localRefs: v, meta: x });
    return r.compileSchema.call(u, h), (0, n.getValidate)(i, h);
  }
  return zr.default = s, zr;
}
var qr = {}, iu;
function mh() {
  if (iu) return qr;
  iu = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.dynamicRef = void 0;
  const e = we(), t = At(), r = Gi(), n = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (o) => s(o, o.schema)
  };
  function s(o, a) {
    const { gen: i, keyword: c, it: l } = o;
    if (a[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const u = a.slice(1);
    if (l.allErrors)
      p();
    else {
      const v = i.let("valid", !1);
      p(v), o.ok(v);
    }
    function p(v) {
      if (l.schemaEnv.root.dynamicAnchors[u]) {
        const x = i.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(u)}`);
        i.if(x, m(x, v), m(l.validateName, v));
      } else
        m(l.validateName, v)();
    }
    function m(v, x) {
      return x ? () => i.block(() => {
        (0, r.callRef)(o, v), i.let(x, !0);
      }) : () => (0, r.callRef)(o, v);
    }
  }
  return qr.dynamicRef = s, qr.default = n, qr;
}
var Ds = {}, cu;
function rw() {
  if (cu) return Ds;
  cu = 1, Object.defineProperty(Ds, "__esModule", { value: !0 });
  const e = fh(), t = Ie(), r = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(n) {
      n.schema ? (0, e.dynamicAnchor)(n, "") : (0, t.checkStrictMode)(n.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ds.default = r, Ds;
}
var Ms = {}, lu;
function nw() {
  if (lu) return Ms;
  lu = 1, Object.defineProperty(Ms, "__esModule", { value: !0 });
  const e = mh(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (r) => (0, e.dynamicRef)(r, r.schema)
  };
  return Ms.default = t, Ms;
}
var uu;
function sw() {
  if (uu) return Is;
  uu = 1, Object.defineProperty(Is, "__esModule", { value: !0 });
  const e = fh(), t = mh(), r = rw(), n = nw(), s = [e.default, t.default, r.default, n.default];
  return Is.default = s, Is;
}
var Vs = {}, Fs = {}, du;
function ow() {
  if (du) return Fs;
  du = 1, Object.defineProperty(Fs, "__esModule", { value: !0 });
  const e = Zi(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (r) => (0, e.validatePropertyDeps)(r)
  };
  return Fs.default = t, Fs;
}
var Ls = {}, fu;
function aw() {
  if (fu) return Ls;
  fu = 1, Object.defineProperty(Ls, "__esModule", { value: !0 });
  const e = Zi(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (r) => (0, e.validateSchemaDeps)(r)
  };
  return Ls.default = t, Ls;
}
var zs = {}, mu;
function iw() {
  if (mu) return zs;
  mu = 1, Object.defineProperty(zs, "__esModule", { value: !0 });
  const e = Ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: r, parentSchema: n, it: s }) {
      n.contains === void 0 && (0, e.checkStrictMode)(s, `"${r}" without "contains" is ignored`);
    }
  };
  return zs.default = t, zs;
}
var hu;
function cw() {
  if (hu) return Vs;
  hu = 1, Object.defineProperty(Vs, "__esModule", { value: !0 });
  const e = ow(), t = aw(), r = iw(), n = [e.default, t.default, r.default];
  return Vs.default = n, Vs;
}
var qs = {}, Us = {}, pu;
function lw() {
  if (pu) return Us;
  pu = 1, Object.defineProperty(Us, "__esModule", { value: !0 });
  const e = we(), t = Ie(), r = At(), s = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: o }) => (0, e._)`{unevaluatedProperty: ${o.unevaluatedProperty}}`
    },
    code(o) {
      const { gen: a, schema: i, data: c, errsCount: l, it: u } = o;
      if (!l)
        throw new Error("ajv implementation error");
      const { allErrors: p, props: m } = u;
      m instanceof e.Name ? a.if((0, e._)`${m} !== true`, () => a.forIn("key", c, (h) => a.if(x(m, h), () => v(h)))) : m !== !0 && a.forIn("key", c, (h) => m === void 0 ? v(h) : a.if(y(m, h), () => v(h))), u.props = !0, o.ok((0, e._)`${l} === ${r.default.errors}`);
      function v(h) {
        if (i === !1) {
          o.setParams({ unevaluatedProperty: h }), o.error(), p || a.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(u, i)) {
          const _ = a.name("valid");
          o.subschema({
            keyword: "unevaluatedProperties",
            dataProp: h,
            dataPropType: t.Type.Str
          }, _), p || a.if((0, e.not)(_), () => a.break());
        }
      }
      function x(h, _) {
        return (0, e._)`!${h} || !${h}[${_}]`;
      }
      function y(h, _) {
        const f = [];
        for (const b in h)
          h[b] === !0 && f.push((0, e._)`${_} !== ${b}`);
        return (0, e.and)(...f);
      }
    }
  };
  return Us.default = s, Us;
}
var Bs = {}, gu;
function uw() {
  if (gu) return Bs;
  gu = 1, Object.defineProperty(Bs, "__esModule", { value: !0 });
  const e = we(), t = Ie(), n = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { gen: o, schema: a, data: i, it: c } = s, l = c.items || 0;
      if (l === !0)
        return;
      const u = o.const("len", (0, e._)`${i}.length`);
      if (a === !1)
        s.setParams({ len: l }), s.fail((0, e._)`${u} > ${l}`);
      else if (typeof a == "object" && !(0, t.alwaysValidSchema)(c, a)) {
        const m = o.var("valid", (0, e._)`${u} <= ${l}`);
        o.if((0, e.not)(m), () => p(m, l)), s.ok(m);
      }
      c.items = !0;
      function p(m, v) {
        o.forRange("i", v, u, (x) => {
          s.subschema({ keyword: "unevaluatedItems", dataProp: x, dataPropType: t.Type.Num }, m), c.allErrors || o.if((0, e.not)(m), () => o.break());
        });
      }
    }
  };
  return Bs.default = n, Bs;
}
var vu;
function dw() {
  if (vu) return qs;
  vu = 1, Object.defineProperty(qs, "__esModule", { value: !0 });
  const e = lw(), t = uw(), r = [e.default, t.default];
  return qs.default = r, qs;
}
var Ws = {}, Hs = {}, yu;
function fw() {
  if (yu) return Hs;
  yu = 1, Object.defineProperty(Hs, "__esModule", { value: !0 });
  const e = we(), r = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
      params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`
    },
    code(n, s) {
      const { gen: o, data: a, $data: i, schema: c, schemaCode: l, it: u } = n, { opts: p, errSchemaPath: m, schemaEnv: v, self: x } = u;
      if (!p.validateFormats)
        return;
      i ? y() : h();
      function y() {
        const _ = o.scopeValue("formats", {
          ref: x.formats,
          code: p.code.formats
        }), f = o.const("fDef", (0, e._)`${_}[${l}]`), b = o.let("fType"), w = o.let("format");
        o.if((0, e._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`, () => o.assign(b, (0, e._)`${f}.type || "string"`).assign(w, (0, e._)`${f}.validate`), () => o.assign(b, (0, e._)`"string"`).assign(w, f)), n.fail$data((0, e.or)(g(), S()));
        function g() {
          return p.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${w}`;
        }
        function S() {
          const E = v.$async ? (0, e._)`(${f}.async ? await ${w}(${a}) : ${w}(${a}))` : (0, e._)`${w}(${a})`, k = (0, e._)`(typeof ${w} == "function" ? ${E} : ${w}.test(${a}))`;
          return (0, e._)`${w} && ${w} !== true && ${b} === ${s} && !${k}`;
        }
      }
      function h() {
        const _ = x.formats[c];
        if (!_) {
          g();
          return;
        }
        if (_ === !0)
          return;
        const [f, b, w] = S(_);
        f === s && n.pass(E());
        function g() {
          if (p.strictSchema === !1) {
            x.logger.warn(k());
            return;
          }
          throw new Error(k());
          function k() {
            return `unknown format "${c}" ignored in schema at path "${m}"`;
          }
        }
        function S(k) {
          const I = k instanceof RegExp ? (0, e.regexpCode)(k) : p.code.formats ? (0, e._)`${p.code.formats}${(0, e.getProperty)(c)}` : void 0, z = o.scopeValue("formats", { key: c, ref: k, code: I });
          return typeof k == "object" && !(k instanceof RegExp) ? [k.type || "string", k.validate, (0, e._)`${z}.validate`] : ["string", k, z];
        }
        function E() {
          if (typeof _ == "object" && !(_ instanceof RegExp) && _.async) {
            if (!v.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${w}(${a})`;
          }
          return typeof b == "function" ? (0, e._)`${w}(${a})` : (0, e._)`${w}.test(${a})`;
        }
      }
    }
  };
  return Hs.default = r, Hs;
}
var bu;
function hh() {
  if (bu) return Ws;
  bu = 1, Object.defineProperty(Ws, "__esModule", { value: !0 });
  const t = [fw().default];
  return Ws.default = t, Ws;
}
var Sr = {}, _u;
function ph() {
  return _u || (_u = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.contentVocabulary = Sr.metadataVocabulary = void 0, Sr.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Sr.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Sr;
}
var xu;
function mw() {
  if (xu) return os;
  xu = 1, Object.defineProperty(os, "__esModule", { value: !0 });
  const e = ah(), t = ih(), r = dh(), n = sw(), s = cw(), o = dw(), a = hh(), i = ph(), c = [
    n.default,
    e.default,
    t.default,
    (0, r.default)(!0),
    a.default,
    i.metadataVocabulary,
    i.contentVocabulary,
    s.default,
    o.default
  ];
  return os.default = c, os;
}
var Gs = {}, En = {}, wu;
function hw() {
  if (wu) return En;
  wu = 1, Object.defineProperty(En, "__esModule", { value: !0 }), En.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (En.DiscrError = e = {})), En;
}
var Su;
function gh() {
  if (Su) return Gs;
  Su = 1, Object.defineProperty(Gs, "__esModule", { value: !0 });
  const e = we(), t = hw(), r = Go(), n = zn(), s = Ie(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: c, tagName: l } }) => (0, e._)`{error: ${i}, tag: ${l}, tagValue: ${c}}`
    },
    code(i) {
      const { gen: c, data: l, schema: u, parentSchema: p, it: m } = i, { oneOf: v } = p;
      if (!m.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const x = u.propertyName;
      if (typeof x != "string")
        throw new Error("discriminator: requires propertyName");
      if (u.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
        throw new Error("discriminator: requires oneOf keyword");
      const y = c.let("valid", !1), h = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(x)}`);
      c.if((0, e._)`typeof ${h} == "string"`, () => _(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: x })), i.ok(y);
      function _() {
        const w = b();
        c.if(!1);
        for (const g in w)
          c.elseIf((0, e._)`${h} === ${g}`), c.assign(y, f(w[g]));
        c.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: x }), c.endIf();
      }
      function f(w) {
        const g = c.name("valid"), S = i.subschema({ keyword: "oneOf", schemaProp: w }, g);
        return i.mergeEvaluated(S, e.Name), g;
      }
      function b() {
        var w;
        const g = {}, S = k(p);
        let E = !0;
        for (let M = 0; M < v.length; M++) {
          let V = v[M];
          if (V != null && V.$ref && !(0, s.schemaHasRulesButRef)(V, m.self.RULES)) {
            const W = V.$ref;
            if (V = r.resolveRef.call(m.self, m.schemaEnv.root, m.baseId, W), V instanceof r.SchemaEnv && (V = V.schema), V === void 0)
              throw new n.default(m.opts.uriResolver, m.baseId, W);
          }
          const F = (w = V == null ? void 0 : V.properties) === null || w === void 0 ? void 0 : w[x];
          if (typeof F != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${x}"`);
          E = E && (S || k(V)), I(F, M);
        }
        if (!E)
          throw new Error(`discriminator: "${x}" must be required`);
        return g;
        function k({ required: M }) {
          return Array.isArray(M) && M.includes(x);
        }
        function I(M, V) {
          if (M.const)
            z(M.const, V);
          else if (M.enum)
            for (const F of M.enum)
              z(F, V);
          else
            throw new Error(`discriminator: "properties/${x}" must have "const" or "enum"`);
        }
        function z(M, V) {
          if (typeof M != "string" || M in g)
            throw new Error(`discriminator: "${x}" values must be unique strings`);
          g[M] = V;
        }
      }
    }
  };
  return Gs.default = a, Gs;
}
var Ks = {};
const pw = "https://json-schema.org/draft/2020-12/schema", gw = "https://json-schema.org/draft/2020-12/schema", vw = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, yw = "meta", bw = "Core and Validation specifications meta-schema", _w = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], xw = ["object", "boolean"], ww = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Sw = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, $w = {
  $schema: pw,
  $id: gw,
  $vocabulary: vw,
  $dynamicAnchor: yw,
  title: bw,
  allOf: _w,
  type: xw,
  $comment: ww,
  properties: Sw
}, Ew = "https://json-schema.org/draft/2020-12/schema", Cw = "https://json-schema.org/draft/2020-12/meta/applicator", kw = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, jw = "meta", Rw = "Applicator vocabulary meta-schema", Pw = ["object", "boolean"], Nw = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Aw = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Tw = {
  $schema: Ew,
  $id: Cw,
  $vocabulary: kw,
  $dynamicAnchor: jw,
  title: Rw,
  type: Pw,
  properties: Nw,
  $defs: Aw
}, Ow = "https://json-schema.org/draft/2020-12/schema", Iw = "https://json-schema.org/draft/2020-12/meta/unevaluated", Dw = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Mw = "meta", Vw = "Unevaluated applicator vocabulary meta-schema", Fw = ["object", "boolean"], Lw = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, zw = {
  $schema: Ow,
  $id: Iw,
  $vocabulary: Dw,
  $dynamicAnchor: Mw,
  title: Vw,
  type: Fw,
  properties: Lw
}, qw = "https://json-schema.org/draft/2020-12/schema", Uw = "https://json-schema.org/draft/2020-12/meta/content", Bw = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ww = "meta", Hw = "Content vocabulary meta-schema", Gw = ["object", "boolean"], Kw = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Zw = {
  $schema: qw,
  $id: Uw,
  $vocabulary: Bw,
  $dynamicAnchor: Ww,
  title: Hw,
  type: Gw,
  properties: Kw
}, Yw = "https://json-schema.org/draft/2020-12/schema", Jw = "https://json-schema.org/draft/2020-12/meta/core", Xw = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Qw = "meta", eS = "Core vocabulary meta-schema", tS = ["object", "boolean"], rS = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, nS = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, sS = {
  $schema: Yw,
  $id: Jw,
  $vocabulary: Xw,
  $dynamicAnchor: Qw,
  title: eS,
  type: tS,
  properties: rS,
  $defs: nS
}, oS = "https://json-schema.org/draft/2020-12/schema", aS = "https://json-schema.org/draft/2020-12/meta/format-annotation", iS = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, cS = "meta", lS = "Format vocabulary meta-schema for annotation results", uS = ["object", "boolean"], dS = { format: { type: "string" } }, fS = {
  $schema: oS,
  $id: aS,
  $vocabulary: iS,
  $dynamicAnchor: cS,
  title: lS,
  type: uS,
  properties: dS
}, mS = "https://json-schema.org/draft/2020-12/schema", hS = "https://json-schema.org/draft/2020-12/meta/meta-data", pS = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, gS = "meta", vS = "Meta-data vocabulary meta-schema", yS = ["object", "boolean"], bS = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, _S = {
  $schema: mS,
  $id: hS,
  $vocabulary: pS,
  $dynamicAnchor: gS,
  title: vS,
  type: yS,
  properties: bS
}, xS = "https://json-schema.org/draft/2020-12/schema", wS = "https://json-schema.org/draft/2020-12/meta/validation", SS = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, $S = "meta", ES = "Validation vocabulary meta-schema", CS = ["object", "boolean"], kS = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, jS = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, RS = {
  $schema: xS,
  $id: wS,
  $vocabulary: SS,
  $dynamicAnchor: $S,
  title: ES,
  type: CS,
  properties: kS,
  $defs: jS
};
var $u;
function PS() {
  if ($u) return Ks;
  $u = 1, Object.defineProperty(Ks, "__esModule", { value: !0 });
  const e = $w, t = Tw, r = zw, n = Zw, s = sS, o = fS, a = _S, i = RS, c = ["/properties"];
  function l(u) {
    return [
      e,
      t,
      r,
      n,
      s,
      p(this, o),
      a,
      p(this, i)
    ].forEach((m) => this.addMetaSchema(m, void 0, !1)), this;
    function p(m, v) {
      return u ? m.$dataMetaSchema(v, c) : v;
    }
  }
  return Ks.default = l, Ks;
}
var Eu;
function NS() {
  return Eu || (Eu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const r = oh(), n = mw(), s = gh(), o = PS(), a = "https://json-schema.org/draft/2020-12/schema";
    class i extends r.default {
      constructor(v = {}) {
        super({
          ...v,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(s.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: v, meta: x } = this.opts;
        x && (o.default.call(this, v), this.refs["http://json-schema.org/schema"] = a);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv2020 = i, e.exports = t = i, e.exports.Ajv2020 = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
    var c = Ln();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var l = we();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return l._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return l.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return l.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return l.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return l.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return l.CodeGen;
    } });
    var u = Ho();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return u.default;
    } });
    var p = zn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return p.default;
    } });
  })(es, es.exports)), es.exports;
}
var AS = NS();
const TS = /* @__PURE__ */ Qu(AS);
var Zs = { exports: {} }, Aa = {}, Cu;
function OS() {
  return Cu || (Cu = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(M, V) {
      return { validate: M, compare: V };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(o, a),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), l),
      "date-time": t(m(!0), v),
      "iso-time": t(c(), u),
      "iso-date-time": t(m(), x),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: _,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex: z,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      byte: b,
      // signed 32 bit integer
      int32: { type: "number", validate: S },
      // signed 64 bit integer
      int64: { type: "number", validate: E },
      // C-type float
      float: { type: "number", validate: k },
      // C-type double
      double: { type: "number", validate: k },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, a),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, l),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, v),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, u),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, x),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function r(M) {
      return M % 4 === 0 && (M % 100 !== 0 || M % 400 === 0);
    }
    const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, s = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function o(M) {
      const V = n.exec(M);
      if (!V)
        return !1;
      const F = +V[1], W = +V[2], te = +V[3];
      return W >= 1 && W <= 12 && te >= 1 && te <= (W === 2 && r(F) ? 29 : s[W]);
    }
    function a(M, V) {
      if (M && V)
        return M > V ? 1 : M < V ? -1 : 0;
    }
    const i = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(M) {
      return function(F) {
        const W = i.exec(F);
        if (!W)
          return !1;
        const te = +W[1], Z = +W[2], ae = +W[3], L = W[4], ve = W[5] === "-" ? -1 : 1, G = +(W[6] || 0), T = +(W[7] || 0);
        if (G > 23 || T > 59 || M && !L)
          return !1;
        if (te <= 23 && Z <= 59 && ae < 60)
          return !0;
        const K = Z - T * ve, O = te - G * ve - (K < 0 ? 1 : 0);
        return (O === 23 || O === -1) && (K === 59 || K === -1) && ae < 61;
      };
    }
    function l(M, V) {
      if (!(M && V))
        return;
      const F = (/* @__PURE__ */ new Date("2020-01-01T" + M)).valueOf(), W = (/* @__PURE__ */ new Date("2020-01-01T" + V)).valueOf();
      if (F && W)
        return F - W;
    }
    function u(M, V) {
      if (!(M && V))
        return;
      const F = i.exec(M), W = i.exec(V);
      if (F && W)
        return M = F[1] + F[2] + F[3], V = W[1] + W[2] + W[3], M > V ? 1 : M < V ? -1 : 0;
    }
    const p = /t|\s/i;
    function m(M) {
      const V = c(M);
      return function(W) {
        const te = W.split(p);
        return te.length === 2 && o(te[0]) && V(te[1]);
      };
    }
    function v(M, V) {
      if (!(M && V))
        return;
      const F = new Date(M).valueOf(), W = new Date(V).valueOf();
      if (F && W)
        return F - W;
    }
    function x(M, V) {
      if (!(M && V))
        return;
      const [F, W] = M.split(p), [te, Z] = V.split(p), ae = a(F, te);
      if (ae !== void 0)
        return ae || l(W, Z);
    }
    const y = /\/|:/, h = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function _(M) {
      return y.test(M) && h.test(M);
    }
    const f = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function b(M) {
      return f.lastIndex = 0, f.test(M);
    }
    const w = -2147483648, g = 2 ** 31 - 1;
    function S(M) {
      return Number.isInteger(M) && M <= g && M >= w;
    }
    function E(M) {
      return Number.isInteger(M);
    }
    function k() {
      return !0;
    }
    const I = /[^\\]\\Z/;
    function z(M) {
      if (I.test(M))
        return !1;
      try {
        return new RegExp(M), !0;
      } catch {
        return !1;
      }
    }
  })(Aa)), Aa;
}
var Ta = {}, Ys = { exports: {} }, Js = {}, ku;
function IS() {
  if (ku) return Js;
  ku = 1, Object.defineProperty(Js, "__esModule", { value: !0 });
  const e = ah(), t = ih(), r = dh(), n = hh(), s = ph(), o = [
    e.default,
    t.default,
    (0, r.default)(),
    n.default,
    s.metadataVocabulary,
    s.contentVocabulary
  ];
  return Js.default = o, Js;
}
const DS = "http://json-schema.org/draft-07/schema#", MS = "http://json-schema.org/draft-07/schema#", VS = "Core schema meta-schema", FS = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, LS = ["object", "boolean"], zS = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, qS = {
  $schema: DS,
  $id: MS,
  title: VS,
  definitions: FS,
  type: LS,
  properties: zS,
  default: !0
};
var ju;
function US() {
  return ju || (ju = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = oh(), n = IS(), s = gh(), o = qS, a = ["/properties"], i = "http://json-schema.org/draft-07/schema";
    class c extends r.default {
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((x) => this.addVocabulary(x)), this.opts.discriminator && this.addKeyword(s.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const x = this.opts.$data ? this.$dataMetaSchema(o, a) : o;
        this.addMetaSchema(x, i, !1), this.refs["http://json-schema.org/schema"] = i;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var l = Ln();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var u = we();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return u._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return u.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return u.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return u.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return u.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return u.CodeGen;
    } });
    var p = Ho();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var m = zn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return m.default;
    } });
  })(Ys, Ys.exports)), Ys.exports;
}
var Ru;
function BS() {
  return Ru || (Ru = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = US(), r = we(), n = r.operators, s = {
      formatMaximum: { okStr: "<=", ok: n.LTE, fail: n.GT },
      formatMinimum: { okStr: ">=", ok: n.GTE, fail: n.LT },
      formatExclusiveMaximum: { okStr: "<", ok: n.LT, fail: n.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: n.GT, fail: n.LTE }
    }, o = {
      message: ({ keyword: i, schemaCode: c }) => (0, r.str)`should be ${s[i].okStr} ${c}`,
      params: ({ keyword: i, schemaCode: c }) => (0, r._)`{comparison: ${s[i].okStr}, limit: ${c}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(s),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: o,
      code(i) {
        const { gen: c, data: l, schemaCode: u, keyword: p, it: m } = i, { opts: v, self: x } = m;
        if (!v.validateFormats)
          return;
        const y = new t.KeywordCxt(m, x.RULES.all.format.definition, "format");
        y.$data ? h() : _();
        function h() {
          const b = c.scopeValue("formats", {
            ref: x.formats,
            code: v.code.formats
          }), w = c.const("fmt", (0, r._)`${b}[${y.schemaCode}]`);
          i.fail$data((0, r.or)((0, r._)`typeof ${w} != "object"`, (0, r._)`${w} instanceof RegExp`, (0, r._)`typeof ${w}.compare != "function"`, f(w)));
        }
        function _() {
          const b = y.schema, w = x.formats[b];
          if (!w || w === !0)
            return;
          if (typeof w != "object" || w instanceof RegExp || typeof w.compare != "function")
            throw new Error(`"${p}": format "${b}" does not define "compare" function`);
          const g = c.scopeValue("formats", {
            key: b,
            ref: w,
            code: v.code.formats ? (0, r._)`${v.code.formats}${(0, r.getProperty)(b)}` : void 0
          });
          i.fail$data(f(g));
        }
        function f(b) {
          return (0, r._)`${b}.compare(${l}, ${u}) ${s[p].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const a = (i) => (i.addKeyword(e.formatLimitDefinition), i);
    e.default = a;
  })(Ta)), Ta;
}
var Pu;
function WS() {
  return Pu || (Pu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = OS(), n = BS(), s = we(), o = new s.Name("fullFormats"), a = new s.Name("fastFormats"), i = (l, u = { keywords: !0 }) => {
      if (Array.isArray(u))
        return c(l, u, r.fullFormats, o), l;
      const [p, m] = u.mode === "fast" ? [r.fastFormats, a] : [r.fullFormats, o], v = u.formats || r.formatNames;
      return c(l, v, p, m), u.keywords && (0, n.default)(l), l;
    };
    i.get = (l, u = "full") => {
      const m = (u === "fast" ? r.fastFormats : r.fullFormats)[l];
      if (!m)
        throw new Error(`Unknown format "${l}"`);
      return m;
    };
    function c(l, u, p, m) {
      var v, x;
      (v = (x = l.opts.code).formats) !== null && v !== void 0 || (x.formats = (0, s._)`require("ajv-formats/dist/formats").${m}`);
      for (const y of u)
        l.addFormat(y, p[y]);
    }
    e.exports = t = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
  })(Zs, Zs.exports)), Zs.exports;
}
var HS = WS();
const GS = /* @__PURE__ */ Qu(HS), KS = "https://json-schema.org/draft/2020-12/schema", ni = new TS();
GS(ni);
function vh(e) {
  return ni.validate(KS, e) ? null : ni.errors || [];
}
function ZS({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: $e(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ...t
    }
  );
}
var Oa = "rovingFocusGroup.onEntryFocus", YS = { bubbles: !1, cancelable: !0 }, qn = "RovingFocusGroup", [si, yh, JS] = md(qn), [XS, bh] = qt(
  qn,
  [JS]
), [QS, e$] = XS(qn), _h = $.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(si.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(si.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(t$, { ...e, ref: t }) }) })
);
_h.displayName = qn;
var t$ = $.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: s = !1,
    dir: o,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...p
  } = e, m = $.useRef(null), v = Ue(t, m), x = xi(o), [y, h] = Cr({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: qn
  }), [_, f] = $.useState(!1), b = fr(l), w = yh(r), g = $.useRef(!1), [S, E] = $.useState(0);
  return $.useEffect(() => {
    const k = m.current;
    if (k)
      return k.addEventListener(Oa, b), () => k.removeEventListener(Oa, b);
  }, [b]), /* @__PURE__ */ d.jsx(
    QS,
    {
      scope: r,
      orientation: n,
      dir: x,
      loop: s,
      currentTabStopId: y,
      onItemFocus: $.useCallback(
        (k) => h(k),
        [h]
      ),
      onItemShiftTab: $.useCallback(() => f(!0), []),
      onFocusableItemAdd: $.useCallback(
        () => E((k) => k + 1),
        []
      ),
      onFocusableItemRemove: $.useCallback(
        () => E((k) => k - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        De.div,
        {
          tabIndex: _ || S === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: Se(e.onMouseDown, () => {
            g.current = !0;
          }),
          onFocus: Se(e.onFocus, (k) => {
            const I = !g.current;
            if (k.target === k.currentTarget && I && !_) {
              const z = new CustomEvent(Oa, YS);
              if (k.currentTarget.dispatchEvent(z), !z.defaultPrevented) {
                const M = w().filter((Z) => Z.focusable), V = M.find((Z) => Z.active), F = M.find((Z) => Z.id === y), te = [V, F, ...M].filter(
                  Boolean
                ).map((Z) => Z.ref.current);
                Sh(te, u);
              }
            }
            g.current = !1;
          }),
          onBlur: Se(e.onBlur, () => f(!1))
        }
      )
    }
  );
}), xh = "RovingFocusGroupItem", wh = $.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: s = !1,
      tabStopId: o,
      children: a,
      ...i
    } = e, c = cr(), l = o || c, u = e$(xh, r), p = u.currentTabStopId === l, m = yh(r), { onFocusableItemAdd: v, onFocusableItemRemove: x, currentTabStopId: y } = u;
    return $.useEffect(() => {
      if (n)
        return v(), () => x();
    }, [n, v, x]), /* @__PURE__ */ d.jsx(
      si.ItemSlot,
      {
        scope: r,
        id: l,
        focusable: n,
        active: s,
        children: /* @__PURE__ */ d.jsx(
          De.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: Se(e.onMouseDown, (h) => {
              n ? u.onItemFocus(l) : h.preventDefault();
            }),
            onFocus: Se(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: Se(e.onKeyDown, (h) => {
              if (h.key === "Tab" && h.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const _ = s$(h, u.orientation, u.dir);
              if (_ !== void 0) {
                if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                h.preventDefault();
                let b = m().filter((w) => w.focusable).map((w) => w.ref.current);
                if (_ === "last") b.reverse();
                else if (_ === "prev" || _ === "next") {
                  _ === "prev" && b.reverse();
                  const w = b.indexOf(h.currentTarget);
                  b = u.loop ? o$(b, w + 1) : b.slice(w + 1);
                }
                setTimeout(() => Sh(b));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: p, hasTabStop: y != null }) : a
          }
        )
      }
    );
  }
);
wh.displayName = xh;
var r$ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function n$(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function s$(e, t, r) {
  const n = n$(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return r$[n];
}
function Sh(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function o$(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var a$ = _h, i$ = wh, Yi = "Radio", [c$, $h] = qt(Yi), [l$, u$] = c$(Yi), Eh = $.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: s = !1,
      required: o,
      disabled: a,
      value: i = "on",
      onCheck: c,
      form: l,
      ...u
    } = e, [p, m] = $.useState(null), v = Ue(t, (h) => m(h)), x = $.useRef(!1), y = p ? l || !!p.closest("form") : !0;
    return /* @__PURE__ */ d.jsxs(l$, { scope: r, checked: s, disabled: a, children: [
      /* @__PURE__ */ d.jsx(
        De.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": s,
          "data-state": Rh(s),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...u,
          ref: v,
          onClick: Se(e.onClick, (h) => {
            s || c == null || c(), y && (x.current = h.isPropagationStopped(), x.current || h.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ d.jsx(
        jh,
        {
          control: p,
          bubbles: !x.current,
          name: n,
          value: i,
          checked: s,
          required: o,
          disabled: a,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Eh.displayName = Yi;
var Ch = "RadioIndicator", kh = $.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...s } = e, o = u$(Ch, r);
    return /* @__PURE__ */ d.jsx(yr, { present: n || o.checked, children: /* @__PURE__ */ d.jsx(
      De.span,
      {
        "data-state": Rh(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...s,
        ref: t
      }
    ) });
  }
);
kh.displayName = Ch;
var d$ = "RadioBubbleInput", jh = $.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...s
  }, o) => {
    const a = $.useRef(null), i = Ue(a, o), c = Ai(r), l = Ri(t);
    return $.useEffect(() => {
      const u = a.current;
      if (!u) return;
      const p = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (c !== r && v) {
        const x = new Event("click", { bubbles: n });
        v.call(u, r), u.dispatchEvent(x);
      }
    }, [c, r, n]), /* @__PURE__ */ d.jsx(
      De.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...s,
        tabIndex: -1,
        ref: i,
        style: {
          ...s.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
jh.displayName = d$;
function Rh(e) {
  return e ? "checked" : "unchecked";
}
var f$ = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Ko = "RadioGroup", [m$] = qt(Ko, [
  bh,
  $h
]), Ph = bh(), Nh = $h(), [h$, p$] = m$(Ko), Ah = $.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: s,
      value: o,
      required: a = !1,
      disabled: i = !1,
      orientation: c,
      dir: l,
      loop: u = !0,
      onValueChange: p,
      ...m
    } = e, v = Ph(r), x = xi(l), [y, h] = Cr({
      prop: o,
      defaultProp: s ?? null,
      onChange: p,
      caller: Ko
    });
    return /* @__PURE__ */ d.jsx(
      h$,
      {
        scope: r,
        name: n,
        required: a,
        disabled: i,
        value: y,
        onValueChange: h,
        children: /* @__PURE__ */ d.jsx(
          a$,
          {
            asChild: !0,
            ...v,
            orientation: c,
            dir: x,
            loop: u,
            children: /* @__PURE__ */ d.jsx(
              De.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
                dir: x,
                ...m,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Ah.displayName = Ko;
var Th = "RadioGroupItem", Oh = $.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...s } = e, o = p$(Th, r), a = o.disabled || n, i = Ph(r), c = Nh(r), l = $.useRef(null), u = Ue(t, l), p = o.value === s.value, m = $.useRef(!1);
    return $.useEffect(() => {
      const v = (y) => {
        f$.includes(y.key) && (m.current = !0);
      }, x = () => m.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", x), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", x);
      };
    }, []), /* @__PURE__ */ d.jsx(
      i$,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: p,
        children: /* @__PURE__ */ d.jsx(
          Eh,
          {
            disabled: a,
            required: o.required,
            checked: p,
            ...c,
            ...s,
            name: o.name,
            ref: u,
            onCheck: () => o.onValueChange(s.value),
            onKeyDown: Se((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: Se(s.onFocus, () => {
              var v;
              m.current && ((v = l.current) == null || v.click());
            })
          }
        )
      }
    );
  }
);
Oh.displayName = Th;
var g$ = "RadioGroupIndicator", Ih = $.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, s = Nh(r);
    return /* @__PURE__ */ d.jsx(kh, { ...s, ...n, ref: t });
  }
);
Ih.displayName = g$;
var v$ = Ah, y$ = Oh, b$ = Ih;
function _$({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    v$,
    {
      "data-slot": "radio-group",
      className: $e("grid gap-3", e),
      ...t
    }
  );
}
function Ia({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    y$,
    {
      "data-slot": "radio-group-item",
      className: $e(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(
        b$,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ d.jsx(yb, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const x$ = ({ basePath: e, readOnly: t }) => {
  const { control: r, setValue: n, getValues: s } = ct(), [o, a] = Kr(
    JSON.stringify(s(`${e}.additionalProperties`), null, 2)
  ), [i, c] = Kr(null);
  jn({
    control: r,
    name: `${e}.isModifiable`
  });
  const l = jn({
    control: r,
    name: `${e}.additionalProperties`
  });
  Ur(() => {
    c(null), a(JSON.stringify(l, null, 2));
  }, [l]);
  let u;
  typeof l == "boolean" ? u = l ? "true" : "false" : typeof l == "object" && l !== null ? u = "schema" : u = "true";
  const p = (m) => {
    const v = `${e}.additionalProperties`;
    if (m === "true")
      n(v, !0);
    else if (m === "false")
      n(v, !1);
    else {
      const x = { type: "string" };
      n(v, x), a(JSON.stringify(x, null, 2));
    }
  };
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: r,
          name: `${e}.minProperties`,
          render: ({ field: m }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Minimum Properties" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: t,
                value: m.value ?? "",
                onChange: (v) => m.onChange(
                  v.target.value === "" ? null : Number(v.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        Oe,
        {
          control: r,
          name: `${e}.maxProperties`,
          render: ({ field: m }) => /* @__PURE__ */ d.jsxs(Ee, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(Ce, { children: "Maximum Properties" }),
            /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
              Fe,
              {
                type: "number",
                disabled: t,
                value: m.value ?? "",
                onChange: (v) => m.onChange(
                  v.target.value === "" ? null : Number(v.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ne, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ d.jsx(Ce, { children: "Additional Properties" }),
      /* @__PURE__ */ d.jsxs(
        _$,
        {
          value: u,
          onValueChange: p,
          className: "flex space-x-4 pt-2",
          disabled: t,
          children: [
            /* @__PURE__ */ d.jsxs(Ee, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ d.jsx(Ia, { value: "true", id: "ap-true" }),
              /* @__PURE__ */ d.jsx(Ce, { htmlFor: "ap-true", className: "font-normal", children: "Allow (true)" })
            ] }),
            /* @__PURE__ */ d.jsxs(Ee, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ d.jsx(Ia, { value: "false", id: "ap-false" }),
              /* @__PURE__ */ d.jsx(Ce, { htmlFor: "ap-false", className: "font-normal", children: "Disallow (false)" })
            ] }),
            /* @__PURE__ */ d.jsxs(Ee, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ d.jsx(Ia, { value: "schema", id: "ap-schema" }),
              /* @__PURE__ */ d.jsx(Ce, { htmlFor: "ap-schema", className: "font-normal", children: "Specify Schema" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ d.jsx(Ne, {})
    ] }),
    u === "schema" && /* @__PURE__ */ d.jsxs(Ee, { children: [
      /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
        ZS,
        {
          "data-testid": "schema-textarea",
          rows: 6,
          disabled: t,
          className: "font-mono",
          value: o,
          onChange: (m) => {
            const v = m.target.value;
            a(v);
            try {
              const x = JSON.parse(v), y = vh(x);
              if (y) {
                const h = y.map(
                  (_) => `${_.instancePath} - ${_.message}`
                );
                c(h);
              } else
                n(`${e}.additionalProperties`, x);
            } catch {
              c(["Invalid schema structure."]);
            }
          }
        }
      ) }),
      i && i.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 text-sm font-medium text-destructive", children: i.map((m, v) => /* @__PURE__ */ d.jsx("p", { children: m }, v)) })
    ] }),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: r,
        name: `${e}."x-modifiable"`,
        render: ({ field: m }) => /* @__PURE__ */ d.jsxs(Ee, { className: "mt-2", children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "Modifiable Properties" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Fn,
            {
              disabled: t,
              value: m.value || [],
              onValueChange: m.onChange,
              placeholder: "Enter your modifiable properties"
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    )
  ] });
}, w$ = ({ basePath: e, readOnly: t }) => {
  const { control: r } = ct();
  return /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: r,
        name: `${e}["$schema"]`,
        render: ({ field: n }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "$schema" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(
            Fe,
            {
              placeholder: "e.g., http://json-schema.org/draft/2020-12/schema",
              disabled: t,
              ...n,
              value: n.value ?? "http://json-schema.org/draft/2020-12/schema"
            }
          ) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      Oe,
      {
        control: r,
        name: `${e}["$id"]`,
        render: ({ field: n }) => /* @__PURE__ */ d.jsxs(Ee, { children: [
          /* @__PURE__ */ d.jsx(Ce, { children: "$id" }),
          /* @__PURE__ */ d.jsx(Pe, { children: /* @__PURE__ */ d.jsx(Fe, { disabled: t, ...n, value: n.value ?? "" }) }),
          /* @__PURE__ */ d.jsx(Ne, {})
        ] })
      }
    )
  ] });
};
var S$ = [
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
  "ul"
], $$ = S$.reduce((e, t) => {
  const r = /* @__PURE__ */ Di(`Primitive.${t}`), n = $.forwardRef((s, o) => {
    const { asChild: a, ...i } = s, c = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {}), E$ = "Separator", Nu = "horizontal", C$ = ["horizontal", "vertical"], Dh = $.forwardRef((e, t) => {
  const { decorative: r, orientation: n = Nu, ...s } = e, o = k$(n) ? n : Nu, i = r ? { role: "none" } : { "aria-orientation": o === "vertical" ? o : void 0, role: "separator" };
  return /* @__PURE__ */ d.jsx(
    $$.div,
    {
      "data-orientation": o,
      ...i,
      ...s,
      ref: t
    }
  );
});
Dh.displayName = E$;
function k$(e) {
  return C$.includes(e);
}
var j$ = Dh;
function R$({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    j$,
    {
      "data-slot": "separator",
      decorative: r,
      orientation: t,
      className: $e(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...n
    }
  );
}
const P$ = ({ theme: e, basePath: t, readOnly: r }) => {
  const { watch: n } = ct(), s = n(`${t}.type`), o = () => {
    switch (s) {
      case "number":
        return /* @__PURE__ */ d.jsx(
          fx,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "integer":
        return /* @__PURE__ */ d.jsx(
          gx,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "string":
        return /* @__PURE__ */ d.jsx(
          mx,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "boolean":
        return /* @__PURE__ */ d.jsx(
          hx,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "array":
        return /* @__PURE__ */ d.jsx(
          px,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "object":
        return /* @__PURE__ */ d.jsx(
          x$,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      default:
        return /* @__PURE__ */ d.jsx(d.Fragment, { children: `Settings for type ${s} are not yet implemented.` });
    }
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    t === "root" && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(w$, { theme: e, basePath: t, readOnly: r }),
      /* @__PURE__ */ d.jsx(R$, { className: "my-4" })
    ] }),
    o()
  ] });
};
function N$({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Em, { "data-slot": "dialog", ...e });
}
function A$({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Cm, { "data-slot": "dialog-portal", ...e });
}
function T$({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    km,
    {
      "data-slot": "dialog-overlay",
      className: $e(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function O$({
  className: e,
  children: t,
  showCloseButton: r = !0,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(A$, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ d.jsx(T$, {}),
    /* @__PURE__ */ d.jsxs(
      jm,
      {
        "data-slot": "dialog-content",
        className: $e(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          r && /* @__PURE__ */ d.jsxs(
            Bi,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ d.jsx(Tf, {}),
                /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function I$({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: $e("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function D$({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Rm,
    {
      "data-slot": "dialog-title",
      className: $e("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
const M$ = ({
  theme: e,
  readOnly: t,
  className: r,
  isOpen: n,
  fieldPath: s,
  onClose: o
}) => {
  const { getValues: a } = ct(), i = s ? a(s) : null;
  return /* @__PURE__ */ d.jsx(N$, { open: n, onOpenChange: (c) => !c && o(), children: /* @__PURE__ */ d.jsxs(
    O$,
    {
      className: $e(
        "bg-background text-foreground border-input",
        e,
        r
      ),
      children: [
        /* @__PURE__ */ d.jsx(I$, { children: /* @__PURE__ */ d.jsxs(D$, { className: "capitalize", children: [
          i == null ? void 0 : i.type,
          " Schema Settings"
        ] }) }),
        s && /* @__PURE__ */ d.jsx(P$, { basePath: s, theme: e, readOnly: t }),
        /* @__PURE__ */ d.jsx(lr, { onClick: o, variant: "default", children: "Close" })
      ]
    }
  ) });
}, Au = (e, t, r) => {
  if (e && "reportValidity" in e) {
    const n = oe(r, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, oi = (e, t) => {
  for (const r in t.fields) {
    const n = t.fields[r];
    n && n.ref && "reportValidity" in n.ref ? Au(n.ref, r, e) : n && n.refs && n.refs.forEach((s) => Au(s, r, e));
  }
}, Tu = (e, t) => {
  t.shouldUseNativeValidation && oi(e, t);
  const r = {};
  for (const n in e) {
    const s = oe(t.fields, n), o = Object.assign(e[n] || {}, { ref: s && s.ref });
    if (V$(t.names || Object.keys(e), n)) {
      const a = Object.assign({}, oe(r, n));
      qe(a, "root", o), qe(r, n, a);
    } else qe(r, n, o);
  }
  return r;
}, V$ = (e, t) => {
  const r = Ou(t);
  return e.some((n) => Ou(n).match(`^${r}\\.\\d+`));
};
function Ou(e) {
  return e.replace(/\]|\[/g, "");
}
function Mh(e, t, r) {
  function n(i, c) {
    var l;
    Object.defineProperty(i, "_zod", {
      value: i._zod ?? {},
      enumerable: !1
    }), (l = i._zod).traits ?? (l.traits = /* @__PURE__ */ new Set()), i._zod.traits.add(e), t(i, c);
    for (const u in a.prototype)
      u in i || Object.defineProperty(i, u, { value: a.prototype[u].bind(i) });
    i._zod.constr = a, i._zod.def = c;
  }
  const s = (r == null ? void 0 : r.Parent) ?? Object;
  class o extends s {
  }
  Object.defineProperty(o, "name", { value: e });
  function a(i) {
    var c;
    const l = r != null && r.Parent ? new o() : this;
    n(l, i), (c = l._zod).deferred ?? (c.deferred = []);
    for (const u of l._zod.deferred)
      u();
    return l;
  }
  return Object.defineProperty(a, "init", { value: n }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (i) => {
      var c, l;
      return r != null && r.Parent && i instanceof r.Parent ? !0 : (l = (c = i == null ? void 0 : i._zod) == null ? void 0 : c.traits) == null ? void 0 : l.has(e);
    }
  }), Object.defineProperty(a, "name", { value: e }), a;
}
class F$ extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
const L$ = {};
function Vh(e) {
  return L$;
}
function z$(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
const Fh = Error.captureStackTrace ? Error.captureStackTrace : (...e) => {
};
function Xs(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function Lh(e, t, r) {
  var s, o, a, i, c, l;
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const u = Xs((a = (o = (s = e.inst) == null ? void 0 : s._zod.def) == null ? void 0 : o.error) == null ? void 0 : a.call(o, e)) ?? Xs((i = t == null ? void 0 : t.error) == null ? void 0 : i.call(t, e)) ?? Xs((c = r.customError) == null ? void 0 : c.call(r, e)) ?? Xs((l = r.localeError) == null ? void 0 : l.call(r, e)) ?? "Invalid input";
    n.message = u;
  }
  return delete n.inst, delete n.continue, t != null && t.reportInput || delete n.input, n;
}
const zh = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), Object.defineProperty(e, "message", {
    get() {
      return JSON.stringify(t, z$, 2);
    },
    enumerable: !0
    // configurable: false,
  }), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, q$ = Mh("$ZodError", zh), qh = Mh("$ZodError", zh, { Parent: Error }), U$ = (e) => (t, r, n, s) => {
  const o = n ? Object.assign(n, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, o);
  if (a instanceof Promise)
    throw new F$();
  if (a.issues.length) {
    const i = new ((s == null ? void 0 : s.Err) ?? e)(a.issues.map((c) => Lh(c, o, Vh())));
    throw Fh(i, s == null ? void 0 : s.callee), i;
  }
  return a.value;
}, B$ = /* @__PURE__ */ U$(qh), W$ = (e) => async (t, r, n, s) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, o);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new ((s == null ? void 0 : s.Err) ?? e)(a.issues.map((c) => Lh(c, o, Vh())));
    throw Fh(i, s == null ? void 0 : s.callee), i;
  }
  return a.value;
}, H$ = /* @__PURE__ */ W$(qh);
function Iu(e, t) {
  try {
    var r = e();
  } catch (n) {
    return t(n);
  }
  return r && r.then ? r.then(void 0, t) : r;
}
function G$(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0], s = n.code, o = n.message, a = n.path.join(".");
    if (!r[a]) if ("unionErrors" in n) {
      var i = n.unionErrors[0].errors[0];
      r[a] = { message: i.message, type: i.code };
    } else r[a] = { message: o, type: s };
    if ("unionErrors" in n && n.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(p) {
        return e.push(p);
      });
    }), t) {
      var c = r[a].types, l = c && c[n.code];
      r[a] = yi(a, t, r, s, l ? [].concat(l, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}
function K$(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0], s = n.code, o = n.message, a = n.path.join(".");
    if (!r[a]) if (n.code === "invalid_union" && n.errors.length > 0) {
      var i = n.errors[0][0];
      r[a] = { message: i.message, type: i.code };
    } else r[a] = { message: o, type: s };
    if (n.code === "invalid_union" && n.errors.forEach(function(u) {
      return u.forEach(function(p) {
        return e.push(p);
      });
    }), t) {
      var c = r[a].types, l = c && c[n.code];
      r[a] = yi(a, t, r, s, l ? [].concat(l, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}
function Z$(e, t, r) {
  if (r === void 0 && (r = {}), (function(n) {
    return "_def" in n && typeof n._def == "object" && "typeName" in n._def;
  })(e)) return function(n, s, o) {
    try {
      return Promise.resolve(Iu(function() {
        return Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](n, t)).then(function(a) {
          return o.shouldUseNativeValidation && oi({}, o), { errors: {}, values: r.raw ? Object.assign({}, n) : a };
        });
      }, function(a) {
        if ((function(i) {
          return Array.isArray(i == null ? void 0 : i.issues);
        })(a)) return { values: {}, errors: Tu(G$(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
  if ((function(n) {
    return "_zod" in n && typeof n._zod == "object";
  })(e)) return function(n, s, o) {
    try {
      return Promise.resolve(Iu(function() {
        return Promise.resolve((r.mode === "sync" ? B$ : H$)(e, n, t)).then(function(a) {
          return o.shouldUseNativeValidation && oi({}, o), { errors: {}, values: r.raw ? Object.assign({}, n) : a };
        });
      }, function(a) {
        if ((function(i) {
          return i instanceof q$;
        })(a)) return { values: {}, errors: Tu(K$(a.issues, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
var Le;
(function(e) {
  e.assertEqual = (s) => {
  };
  function t(s) {
  }
  e.assertIs = t;
  function r(s) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (s) => {
    const o = {};
    for (const a of s)
      o[a] = a;
    return o;
  }, e.getValidEnumValues = (s) => {
    const o = e.objectKeys(s).filter((i) => typeof s[s[i]] != "number"), a = {};
    for (const i of o)
      a[i] = s[i];
    return e.objectValues(a);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(o) {
    return s[o];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const o = [];
    for (const a in s)
      Object.prototype.hasOwnProperty.call(s, a) && o.push(a);
    return o;
  }, e.find = (s, o) => {
    for (const a of s)
      if (o(a))
        return a;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
  function n(s, o = " | ") {
    return s.map((a) => typeof a == "string" ? `'${a}'` : a).join(o);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (s, o) => typeof o == "bigint" ? o.toString() : o;
})(Le || (Le = {}));
var Du;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Du || (Du = {}));
const me = Le.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), ar = (e) => {
  switch (typeof e) {
    case "undefined":
      return me.undefined;
    case "string":
      return me.string;
    case "number":
      return Number.isNaN(e) ? me.nan : me.number;
    case "boolean":
      return me.boolean;
    case "function":
      return me.function;
    case "bigint":
      return me.bigint;
    case "symbol":
      return me.symbol;
    case "object":
      return Array.isArray(e) ? me.array : e === null ? me.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? me.promise : typeof Map < "u" && e instanceof Map ? me.map : typeof Set < "u" && e instanceof Set ? me.set : typeof Date < "u" && e instanceof Date ? me.date : me.object;
    default:
      return me.unknown;
  }
}, ee = Le.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class Qt extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
  }
  format(t) {
    const r = t || function(o) {
      return o.message;
    }, n = { _errors: [] }, s = (o) => {
      for (const a of o.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(s);
        else if (a.code === "invalid_return_type")
          s(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          s(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(r(a));
        else {
          let i = n, c = 0;
          for (; c < a.path.length; ) {
            const l = a.path[c];
            c === a.path.length - 1 ? (i[l] = i[l] || { _errors: [] }, i[l]._errors.push(r(a))) : i[l] = i[l] || { _errors: [] }, i = i[l], c++;
          }
        }
    };
    return s(this), n;
  }
  static assert(t) {
    if (!(t instanceof Qt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Le.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const o = s.path[0];
        r[o] = r[o] || [], r[o].push(t(s));
      } else
        n.push(t(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Qt.create = (e) => new Qt(e);
const ai = (e, t) => {
  let r;
  switch (e.code) {
    case ee.invalid_type:
      e.received === me.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ee.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, Le.jsonStringifyReplacer)}`;
      break;
    case ee.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Le.joinValues(e.keys, ", ")}`;
      break;
    case ee.invalid_union:
      r = "Invalid input";
      break;
    case ee.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Le.joinValues(e.options)}`;
      break;
    case ee.invalid_enum_value:
      r = `Invalid enum value. Expected ${Le.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ee.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case ee.invalid_return_type:
      r = "Invalid function return type";
      break;
    case ee.invalid_date:
      r = "Invalid date";
      break;
    case ee.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : Le.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case ee.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "bigint" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case ee.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case ee.custom:
      r = "Invalid input";
      break;
    case ee.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case ee.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ee.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, Le.assertNever(e);
  }
  return { message: r };
};
let Y$ = ai;
function J$() {
  return Y$;
}
const X$ = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: s } = e, o = [...r, ...s.path || []], a = {
    ...s,
    path: o
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: o,
      message: s.message
    };
  let i = "";
  const c = n.filter((l) => !!l).slice().reverse();
  for (const l of c)
    i = l(a, { data: t, defaultError: i }).message;
  return {
    ...s,
    path: o,
    message: i
  };
};
function le(e, t) {
  const r = J$(), n = X$({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      // contextual error map is first priority
      e.schemaErrorMap,
      // then schema-bound map if available
      r,
      // then global override map
      r === ai ? void 0 : ai
      // then global default map
    ].filter((s) => !!s)
  });
  e.common.issues.push(n);
}
class dt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return xe;
      s.status === "dirty" && t.dirty(), n.push(s.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const s of r) {
      const o = await s.key, a = await s.value;
      n.push({
        key: o,
        value: a
      });
    }
    return dt.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: o, value: a } = s;
      if (o.status === "aborted" || a.status === "aborted")
        return xe;
      o.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof a.value < "u" || s.alwaysSet) && (n[o.value] = a.value);
    }
    return { status: t.value, value: n };
  }
}
const xe = Object.freeze({
  status: "aborted"
}), kn = (e) => ({ status: "dirty", value: e }), St = (e) => ({ status: "valid", value: e }), Mu = (e) => e.status === "aborted", Vu = (e) => e.status === "dirty", tn = (e) => e.status === "valid", vo = (e) => typeof Promise < "u" && e instanceof Promise;
var ge;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(ge || (ge = {}));
class zt {
  constructor(t, r, n, s) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Fu = (e, t) => {
  if (tn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new Qt(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ke(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (a, i) => {
    const { message: c } = e;
    return a.code === "invalid_enum_value" ? { message: c ?? i.defaultError } : typeof i.data > "u" ? { message: c ?? n ?? i.defaultError } : a.code !== "invalid_type" ? { message: i.defaultError } : { message: c ?? r ?? i.defaultError };
  }, description: s };
}
class Me {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return ar(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: ar(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new dt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: ar(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (vo(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    const n = {
      common: {
        issues: [],
        async: (r == null ? void 0 : r.async) ?? !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ar(t)
    }, s = this._parseSync({ data: t, path: n.path, parent: n });
    return Fu(n, s);
  }
  "~validate"(t) {
    var n, s;
    const r = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ar(t)
    };
    if (!this["~standard"].async)
      try {
        const o = this._parseSync({ data: t, path: [], parent: r });
        return tn(o) ? {
          value: o.value
        } : {
          issues: r.common.issues
        };
      } catch (o) {
        (s = (n = o == null ? void 0 : o.message) == null ? void 0 : n.toLowerCase()) != null && s.includes("encountered") && (this["~standard"].async = !0), r.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: t, path: [], parent: r }).then((o) => tn(o) ? {
      value: o.value
    } : {
      issues: r.common.issues
    });
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: ar(t)
    }, s = this._parse({ data: t, path: n.path, parent: n }), o = await (vo(s) ? s : Promise.resolve(s));
    return Fu(n, o);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, o) => {
      const a = t(s), i = () => o.addIssue({
        code: ee.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((c) => c ? !0 : (i(), !1)) : a ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(t) {
    return new sn({
      schema: this,
      typeName: _e.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (r) => this["~validate"](r)
    };
  }
  optional() {
    return dr.create(this, this._def);
  }
  nullable() {
    return on.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Vt.create(this);
  }
  promise() {
    return wo.create(this, this._def);
  }
  or(t) {
    return bo.create([this, t], this._def);
  }
  and(t) {
    return _o.create(this, t, this._def);
  }
  transform(t) {
    return new sn({
      ...ke(this._def),
      schema: this,
      typeName: _e.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new di({
      ...ke(this._def),
      innerType: this,
      defaultValue: r,
      typeName: _e.ZodDefault
    });
  }
  brand() {
    return new xE({
      typeName: _e.ZodBranded,
      type: this,
      ...ke(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new fi({
      ...ke(this._def),
      innerType: this,
      catchValue: r,
      typeName: _e.ZodCatch
    });
  }
  describe(t) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Ji.create(this, t);
  }
  readonly() {
    return mi.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Q$ = /^c[^\s-]{8,}$/i, eE = /^[0-9a-z]+$/, tE = /^[0-9A-HJKMNP-TV-Z]{26}$/i, rE = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, nE = /^[a-z0-9_-]{21}$/i, sE = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, oE = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, aE = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, iE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Da;
const cE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, lE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, uE = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, dE = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, fE = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, mE = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Uh = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", hE = new RegExp(`^${Uh}$`);
function Bh(e) {
  let t = "[0-5]\\d";
  e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`);
  const r = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
}
function pE(e) {
  return new RegExp(`^${Bh(e)}$`);
}
function gE(e) {
  let t = `${Uh}T${Bh(e)}`;
  const r = [];
  return r.push(e.local ? "Z?" : "Z"), e.offset && r.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${r.join("|")})`, new RegExp(`^${t}$`);
}
function vE(e, t) {
  return !!((t === "v4" || !t) && cE.test(e) || (t === "v6" || !t) && uE.test(e));
}
function yE(e, t) {
  if (!sE.test(e))
    return !1;
  try {
    const [r] = e.split(".");
    if (!r)
      return !1;
    const n = r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "="), s = JSON.parse(atob(n));
    return !(typeof s != "object" || s === null || "typ" in s && (s == null ? void 0 : s.typ) !== "JWT" || !s.alg || t && s.alg !== t);
  } catch {
    return !1;
  }
}
function bE(e, t) {
  return !!((t === "v4" || !t) && lE.test(e) || (t === "v6" || !t) && dE.test(e));
}
class Yt extends Me {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== me.string) {
      const o = this._getOrReturnCtx(t);
      return le(o, {
        code: ee.invalid_type,
        expected: me.string,
        received: o.parsedType
      }), xe;
    }
    const n = new dt();
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (s = this._getOrReturnCtx(t, s), le(s, {
          code: ee.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (s = this._getOrReturnCtx(t, s), le(s, {
          code: ee.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value, i = t.data.length < o.value;
        (a || i) && (s = this._getOrReturnCtx(t, s), a ? le(s, {
          code: ee.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : i && le(s, {
          code: ee.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), n.dirty());
      } else if (o.kind === "email")
        aE.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
          validation: "email",
          code: ee.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "emoji")
        Da || (Da = new RegExp(iE, "u")), Da.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
          validation: "emoji",
          code: ee.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "uuid")
        rE.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
          validation: "uuid",
          code: ee.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "nanoid")
        nE.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
          validation: "nanoid",
          code: ee.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid")
        Q$.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
          validation: "cuid",
          code: ee.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid2")
        eE.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
          validation: "cuid2",
          code: ee.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "ulid")
        tE.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
          validation: "ulid",
          code: ee.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), le(s, {
            validation: "url",
            code: ee.invalid_string,
            message: o.message
          }), n.dirty();
        }
      else o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
        validation: "regex",
        code: ee.invalid_string,
        message: o.message
      }), n.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (s = this._getOrReturnCtx(t, s), le(s, {
        code: ee.invalid_string,
        validation: { includes: o.value, position: o.position },
        message: o.message
      }), n.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (s = this._getOrReturnCtx(t, s), le(s, {
        code: ee.invalid_string,
        validation: { startsWith: o.value },
        message: o.message
      }), n.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (s = this._getOrReturnCtx(t, s), le(s, {
        code: ee.invalid_string,
        validation: { endsWith: o.value },
        message: o.message
      }), n.dirty()) : o.kind === "datetime" ? gE(o).test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
        code: ee.invalid_string,
        validation: "datetime",
        message: o.message
      }), n.dirty()) : o.kind === "date" ? hE.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
        code: ee.invalid_string,
        validation: "date",
        message: o.message
      }), n.dirty()) : o.kind === "time" ? pE(o).test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
        code: ee.invalid_string,
        validation: "time",
        message: o.message
      }), n.dirty()) : o.kind === "duration" ? oE.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
        validation: "duration",
        code: ee.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "ip" ? vE(t.data, o.version) || (s = this._getOrReturnCtx(t, s), le(s, {
        validation: "ip",
        code: ee.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "jwt" ? yE(t.data, o.alg) || (s = this._getOrReturnCtx(t, s), le(s, {
        validation: "jwt",
        code: ee.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "cidr" ? bE(t.data, o.version) || (s = this._getOrReturnCtx(t, s), le(s, {
        validation: "cidr",
        code: ee.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "base64" ? fE.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
        validation: "base64",
        code: ee.invalid_string,
        message: o.message
      }), n.dirty()) : o.kind === "base64url" ? mE.test(t.data) || (s = this._getOrReturnCtx(t, s), le(s, {
        validation: "base64url",
        code: ee.invalid_string,
        message: o.message
      }), n.dirty()) : Le.assertNever(o);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: ee.invalid_string,
      ...ge.errToObj(n)
    });
  }
  _addCheck(t) {
    return new Yt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...ge.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...ge.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...ge.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...ge.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...ge.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...ge.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...ge.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...ge.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...ge.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({
      kind: "base64url",
      ...ge.errToObj(t)
    });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...ge.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...ge.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...ge.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (t == null ? void 0 : t.offset) ?? !1,
      local: (t == null ? void 0 : t.local) ?? !1,
      ...ge.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...ge.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...ge.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...ge.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...ge.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...ge.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...ge.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...ge.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...ge.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...ge.errToObj(r)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(t) {
    return this.min(1, ge.errToObj(t));
  }
  trim() {
    return new Yt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Yt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Yt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Yt.create = (e) => new Yt({
  checks: [],
  typeName: _e.ZodString,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ke(e)
});
function _E(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, o = Number.parseInt(e.toFixed(s).replace(".", "")), a = Number.parseInt(t.toFixed(s).replace(".", ""));
  return o % a / 10 ** s;
}
class rn extends Me {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== me.number) {
      const o = this._getOrReturnCtx(t);
      return le(o, {
        code: ee.invalid_type,
        expected: me.number,
        received: o.parsedType
      }), xe;
    }
    let n;
    const s = new dt();
    for (const o of this._def.checks)
      o.kind === "int" ? Le.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), le(n, {
        code: ee.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), s.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), le(n, {
        code: ee.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), le(n, {
        code: ee.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? _E(t.data, o.value) !== 0 && (n = this._getOrReturnCtx(t, n), le(n, {
        code: ee.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), le(n, {
        code: ee.not_finite,
        message: o.message
      }), s.dirty()) : Le.assertNever(o);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, ge.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, ge.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, ge.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, ge.toString(r));
  }
  setLimit(t, r, n, s) {
    return new rn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: ge.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new rn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: ge.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: ge.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: ge.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: ge.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: ge.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ge.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: ge.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: ge.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: ge.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Le.isInteger(t.value));
  }
  get isFinite() {
    let t = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
rn.create = (e) => new rn({
  checks: [],
  typeName: _e.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ke(e)
});
class Tn extends Me {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== me.bigint)
      return this._getInvalidInput(t);
    let n;
    const s = new dt();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), le(n, {
        code: ee.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), le(n, {
        code: ee.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), le(n, {
        code: ee.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : Le.assertNever(o);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const r = this._getOrReturnCtx(t);
    return le(r, {
      code: ee.invalid_type,
      expected: me.bigint,
      received: r.parsedType
    }), xe;
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, ge.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, ge.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, ge.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, ge.toString(r));
  }
  setLimit(t, r, n, s) {
    return new Tn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: ge.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Tn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: ge.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: ge.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: ge.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: ge.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: ge.toString(r)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Tn.create = (e) => new Tn({
  checks: [],
  typeName: _e.ZodBigInt,
  coerce: (e == null ? void 0 : e.coerce) ?? !1,
  ...ke(e)
});
class ii extends Me {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== me.boolean) {
      const n = this._getOrReturnCtx(t);
      return le(n, {
        code: ee.invalid_type,
        expected: me.boolean,
        received: n.parsedType
      }), xe;
    }
    return St(t.data);
  }
}
ii.create = (e) => new ii({
  typeName: _e.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ke(e)
});
class yo extends Me {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== me.date) {
      const o = this._getOrReturnCtx(t);
      return le(o, {
        code: ee.invalid_type,
        expected: me.date,
        received: o.parsedType
      }), xe;
    }
    if (Number.isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return le(o, {
        code: ee.invalid_date
      }), xe;
    }
    const n = new dt();
    let s;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (s = this._getOrReturnCtx(t, s), le(s, {
        code: ee.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), n.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (s = this._getOrReturnCtx(t, s), le(s, {
        code: ee.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), n.dirty()) : Le.assertNever(o);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new yo({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: ge.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: ge.toString(r)
    });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
yo.create = (e) => new yo({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: _e.ZodDate,
  ...ke(e)
});
class Lu extends Me {
  _parse(t) {
    if (this._getType(t) !== me.symbol) {
      const n = this._getOrReturnCtx(t);
      return le(n, {
        code: ee.invalid_type,
        expected: me.symbol,
        received: n.parsedType
      }), xe;
    }
    return St(t.data);
  }
}
Lu.create = (e) => new Lu({
  typeName: _e.ZodSymbol,
  ...ke(e)
});
class zu extends Me {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const n = this._getOrReturnCtx(t);
      return le(n, {
        code: ee.invalid_type,
        expected: me.undefined,
        received: n.parsedType
      }), xe;
    }
    return St(t.data);
  }
}
zu.create = (e) => new zu({
  typeName: _e.ZodUndefined,
  ...ke(e)
});
class qu extends Me {
  _parse(t) {
    if (this._getType(t) !== me.null) {
      const n = this._getOrReturnCtx(t);
      return le(n, {
        code: ee.invalid_type,
        expected: me.null,
        received: n.parsedType
      }), xe;
    }
    return St(t.data);
  }
}
qu.create = (e) => new qu({
  typeName: _e.ZodNull,
  ...ke(e)
});
class ci extends Me {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return St(t.data);
  }
}
ci.create = (e) => new ci({
  typeName: _e.ZodAny,
  ...ke(e)
});
class Uu extends Me {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return St(t.data);
  }
}
Uu.create = (e) => new Uu({
  typeName: _e.ZodUnknown,
  ...ke(e)
});
class pr extends Me {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return le(r, {
      code: ee.invalid_type,
      expected: me.never,
      received: r.parsedType
    }), xe;
  }
}
pr.create = (e) => new pr({
  typeName: _e.ZodNever,
  ...ke(e)
});
class Bu extends Me {
  _parse(t) {
    if (this._getType(t) !== me.undefined) {
      const n = this._getOrReturnCtx(t);
      return le(n, {
        code: ee.invalid_type,
        expected: me.void,
        received: n.parsedType
      }), xe;
    }
    return St(t.data);
  }
}
Bu.create = (e) => new Bu({
  typeName: _e.ZodVoid,
  ...ke(e)
});
class Vt extends Me {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== me.array)
      return le(r, {
        code: ee.invalid_type,
        expected: me.array,
        received: r.parsedType
      }), xe;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, i = r.data.length < s.exactLength.value;
      (a || i) && (le(r, {
        code: a ? ee.too_big : ee.too_small,
        minimum: i ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (le(r, {
      code: ee.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (le(r, {
      code: ee.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, i) => s.type._parseAsync(new zt(r, a, r.path, i)))).then((a) => dt.mergeArray(n, a));
    const o = [...r.data].map((a, i) => s.type._parseSync(new zt(r, a, r.path, i)));
    return dt.mergeArray(n, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new Vt({
      ...this._def,
      minLength: { value: t, message: ge.toString(r) }
    });
  }
  max(t, r) {
    return new Vt({
      ...this._def,
      maxLength: { value: t, message: ge.toString(r) }
    });
  }
  length(t, r) {
    return new Vt({
      ...this._def,
      exactLength: { value: t, message: ge.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Vt.create = (e, t) => new Vt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: _e.ZodArray,
  ...ke(t)
});
function Wr(e) {
  if (e instanceof et) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = dr.create(Wr(n));
    }
    return new et({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof Vt ? new Vt({
    ...e._def,
    type: Wr(e.element)
  }) : e instanceof dr ? dr.create(Wr(e.unwrap())) : e instanceof on ? on.create(Wr(e.unwrap())) : e instanceof Pr ? Pr.create(e.items.map((t) => Wr(t))) : e;
}
class et extends Me {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = Le.objectKeys(t);
    return this._cached = { shape: t, keys: r }, this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== me.object) {
      const l = this._getOrReturnCtx(t);
      return le(l, {
        code: ee.invalid_type,
        expected: me.object,
        received: l.parsedType
      }), xe;
    }
    const { status: n, ctx: s } = this._processInputParams(t), { shape: o, keys: a } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof pr && this._def.unknownKeys === "strip"))
      for (const l in s.data)
        a.includes(l) || i.push(l);
    const c = [];
    for (const l of a) {
      const u = o[l], p = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new zt(s, p, s.path, l)),
        alwaysSet: l in s.data
      });
    }
    if (this._def.catchall instanceof pr) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && (le(s, {
          code: ee.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (l !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of i) {
        const p = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new zt(s, p, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const p = await u.key, m = await u.value;
        l.push({
          key: p,
          value: m,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => dt.mergeObjectSync(n, l)) : dt.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return ge.errToObj, new et({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var o, a;
          const s = ((a = (o = this._def).errorMap) == null ? void 0 : a.call(o, r, n).message) ?? n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: ge.errToObj(t).message ?? s
          } : {
            message: s
          };
        }
      } : {}
    });
  }
  strip() {
    return new et({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new et({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new et({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new et({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: _e.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new et({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    for (const n of Le.objectKeys(t))
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    return new et({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    for (const n of Le.objectKeys(this.shape))
      t[n] || (r[n] = this.shape[n]);
    return new et({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Wr(this);
  }
  partial(t) {
    const r = {};
    for (const n of Le.objectKeys(this.shape)) {
      const s = this.shape[n];
      t && !t[n] ? r[n] = s : r[n] = s.optional();
    }
    return new et({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    for (const n of Le.objectKeys(this.shape))
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let o = this.shape[n];
        for (; o instanceof dr; )
          o = o._def.innerType;
        r[n] = o;
      }
    return new et({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Wh(Le.objectKeys(this.shape));
  }
}
et.create = (e, t) => new et({
  shape: () => e,
  unknownKeys: "strip",
  catchall: pr.create(),
  typeName: _e.ZodObject,
  ...ke(t)
});
et.strictCreate = (e, t) => new et({
  shape: () => e,
  unknownKeys: "strict",
  catchall: pr.create(),
  typeName: _e.ZodObject,
  ...ke(t)
});
et.lazycreate = (e, t) => new et({
  shape: e,
  unknownKeys: "strip",
  catchall: pr.create(),
  typeName: _e.ZodObject,
  ...ke(t)
});
class bo extends Me {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function s(o) {
      for (const i of o)
        if (i.result.status === "valid")
          return i.result;
      for (const i of o)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((i) => new Qt(i.ctx.common.issues));
      return le(r, {
        code: ee.invalid_union,
        unionErrors: a
      }), xe;
    }
    if (r.common.async)
      return Promise.all(n.map(async (o) => {
        const a = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await o._parseAsync({
            data: r.data,
            path: r.path,
            parent: a
          }),
          ctx: a
        };
      })).then(s);
    {
      let o;
      const a = [];
      for (const c of n) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !o && (o = { result: u, ctx: l }), l.common.issues.length && a.push(l.common.issues);
      }
      if (o)
        return r.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((c) => new Qt(c));
      return le(r, {
        code: ee.invalid_union,
        unionErrors: i
      }), xe;
    }
  }
  get options() {
    return this._def.options;
  }
}
bo.create = (e, t) => new bo({
  options: e,
  typeName: _e.ZodUnion,
  ...ke(t)
});
function li(e, t) {
  const r = ar(e), n = ar(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === me.object && n === me.object) {
    const s = Le.objectKeys(t), o = Le.objectKeys(e).filter((i) => s.indexOf(i) !== -1), a = { ...e, ...t };
    for (const i of o) {
      const c = li(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      a[i] = c.data;
    }
    return { valid: !0, data: a };
  } else if (r === me.array && n === me.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const a = e[o], i = t[o], c = li(a, i);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else return r === me.date && n === me.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class _o extends Me {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (o, a) => {
      if (Mu(o) || Mu(a))
        return xe;
      const i = li(o.value, a.value);
      return i.valid ? ((Vu(o) || Vu(a)) && r.dirty(), { status: r.value, value: i.data }) : (le(n, {
        code: ee.invalid_intersection_types
      }), xe);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([o, a]) => s(o, a)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
_o.create = (e, t, r) => new _o({
  left: e,
  right: t,
  typeName: _e.ZodIntersection,
  ...ke(r)
});
class Pr extends Me {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.array)
      return le(n, {
        code: ee.invalid_type,
        expected: me.array,
        received: n.parsedType
      }), xe;
    if (n.data.length < this._def.items.length)
      return le(n, {
        code: ee.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), xe;
    !this._def.rest && n.data.length > this._def.items.length && (le(n, {
      code: ee.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const o = [...n.data].map((a, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new zt(n, a, n.path, i)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(o).then((a) => dt.mergeArray(r, a)) : dt.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Pr({
      ...this._def,
      rest: t
    });
  }
}
Pr.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Pr({
    items: e,
    typeName: _e.ZodTuple,
    rest: null,
    ...ke(t)
  });
};
class xo extends Me {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.object)
      return le(n, {
        code: ee.invalid_type,
        expected: me.object,
        received: n.parsedType
      }), xe;
    const s = [], o = this._def.keyType, a = this._def.valueType;
    for (const i in n.data)
      s.push({
        key: o._parse(new zt(n, i, n.path, i)),
        value: a._parse(new zt(n, n.data[i], n.path, i)),
        alwaysSet: i in n.data
      });
    return n.common.async ? dt.mergeObjectAsync(r, s) : dt.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof Me ? new xo({
      keyType: t,
      valueType: r,
      typeName: _e.ZodRecord,
      ...ke(n)
    }) : new xo({
      keyType: Yt.create(),
      valueType: t,
      typeName: _e.ZodRecord,
      ...ke(r)
    });
  }
}
class Wu extends Me {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.map)
      return le(n, {
        code: ee.invalid_type,
        expected: me.map,
        received: n.parsedType
      }), xe;
    const s = this._def.keyType, o = this._def.valueType, a = [...n.data.entries()].map(([i, c], l) => ({
      key: s._parse(new zt(n, i, n.path, [l, "key"])),
      value: o._parse(new zt(n, c, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return xe;
          (l.status === "dirty" || u.status === "dirty") && r.dirty(), i.set(l.value, u.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of a) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return xe;
        (l.status === "dirty" || u.status === "dirty") && r.dirty(), i.set(l.value, u.value);
      }
      return { status: r.value, value: i };
    }
  }
}
Wu.create = (e, t, r) => new Wu({
  valueType: t,
  keyType: e,
  typeName: _e.ZodMap,
  ...ke(r)
});
class On extends Me {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== me.set)
      return le(n, {
        code: ee.invalid_type,
        expected: me.set,
        received: n.parsedType
      }), xe;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (le(n, {
      code: ee.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (le(n, {
      code: ee.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const o = this._def.valueType;
    function a(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return xe;
        u.status === "dirty" && r.dirty(), l.add(u.value);
      }
      return { status: r.value, value: l };
    }
    const i = [...n.data.values()].map((c, l) => o._parse(new zt(n, c, n.path, l)));
    return n.common.async ? Promise.all(i).then((c) => a(c)) : a(i);
  }
  min(t, r) {
    return new On({
      ...this._def,
      minSize: { value: t, message: ge.toString(r) }
    });
  }
  max(t, r) {
    return new On({
      ...this._def,
      maxSize: { value: t, message: ge.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
On.create = (e, t) => new On({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: _e.ZodSet,
  ...ke(t)
});
class ui extends Me {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
ui.create = (e, t) => new ui({
  getter: e,
  typeName: _e.ZodLazy,
  ...ke(t)
});
class Hu extends Me {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return le(r, {
        received: r.data,
        code: ee.invalid_literal,
        expected: this._def.value
      }), xe;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Hu.create = (e, t) => new Hu({
  value: e,
  typeName: _e.ZodLiteral,
  ...ke(t)
});
function Wh(e, t) {
  return new nn({
    values: e,
    typeName: _e.ZodEnum,
    ...ke(t)
  });
}
class nn extends Me {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return le(r, {
        expected: Le.joinValues(n),
        received: r.parsedType,
        code: ee.invalid_type
      }), xe;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data)) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return le(r, {
        received: r.data,
        code: ee.invalid_enum_value,
        options: n
      }), xe;
    }
    return St(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  extract(t, r = this._def) {
    return nn.create(t, {
      ...this._def,
      ...r
    });
  }
  exclude(t, r = this._def) {
    return nn.create(this.options.filter((n) => !t.includes(n)), {
      ...this._def,
      ...r
    });
  }
}
nn.create = Wh;
class Gu extends Me {
  _parse(t) {
    const r = Le.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== me.string && n.parsedType !== me.number) {
      const s = Le.objectValues(r);
      return le(n, {
        expected: Le.joinValues(s),
        received: n.parsedType,
        code: ee.invalid_type
      }), xe;
    }
    if (this._cache || (this._cache = new Set(Le.getValidEnumValues(this._def.values))), !this._cache.has(t.data)) {
      const s = Le.objectValues(r);
      return le(n, {
        received: n.data,
        code: ee.invalid_enum_value,
        options: s
      }), xe;
    }
    return St(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Gu.create = (e, t) => new Gu({
  values: e,
  typeName: _e.ZodNativeEnum,
  ...ke(t)
});
class wo extends Me {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== me.promise && r.common.async === !1)
      return le(r, {
        code: ee.invalid_type,
        expected: me.promise,
        received: r.parsedType
      }), xe;
    const n = r.parsedType === me.promise ? r.data : Promise.resolve(r.data);
    return St(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
wo.create = (e, t) => new wo({
  type: e,
  typeName: _e.ZodPromise,
  ...ke(t)
});
class sn extends Me {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === _e.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = this._def.effect || null, o = {
      addIssue: (a) => {
        le(n, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (o.addIssue = o.addIssue.bind(o), s.type === "preprocess") {
      const a = s.transform(n.data, o);
      if (n.common.async)
        return Promise.resolve(a).then(async (i) => {
          if (r.value === "aborted")
            return xe;
          const c = await this._def.schema._parseAsync({
            data: i,
            path: n.path,
            parent: n
          });
          return c.status === "aborted" ? xe : c.status === "dirty" || r.value === "dirty" ? kn(c.value) : c;
        });
      {
        if (r.value === "aborted")
          return xe;
        const i = this._def.schema._parseSync({
          data: a,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? xe : i.status === "dirty" || r.value === "dirty" ? kn(i.value) : i;
      }
    }
    if (s.type === "refinement") {
      const a = (i) => {
        const c = s.refinement(i, o);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? xe : (i.status === "dirty" && r.dirty(), a(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? xe : (i.status === "dirty" && r.dirty(), a(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!tn(a))
          return xe;
        const i = s.transform(a.value, o);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => tn(a) ? Promise.resolve(s.transform(a.value, o)).then((i) => ({
          status: r.value,
          value: i
        })) : xe);
    Le.assertNever(s);
  }
}
sn.create = (e, t, r) => new sn({
  schema: e,
  typeName: _e.ZodEffects,
  effect: t,
  ...ke(r)
});
sn.createWithPreprocess = (e, t, r) => new sn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: _e.ZodEffects,
  ...ke(r)
});
class dr extends Me {
  _parse(t) {
    return this._getType(t) === me.undefined ? St(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
dr.create = (e, t) => new dr({
  innerType: e,
  typeName: _e.ZodOptional,
  ...ke(t)
});
class on extends Me {
  _parse(t) {
    return this._getType(t) === me.null ? St(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
on.create = (e, t) => new on({
  innerType: e,
  typeName: _e.ZodNullable,
  ...ke(t)
});
class di extends Me {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === me.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
di.create = (e, t) => new di({
  innerType: e,
  typeName: _e.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ke(t)
});
class fi extends Me {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return vo(s) ? s.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Qt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new Qt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
fi.create = (e, t) => new fi({
  innerType: e,
  typeName: _e.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ke(t)
});
class Ku extends Me {
  _parse(t) {
    if (this._getType(t) !== me.nan) {
      const n = this._getOrReturnCtx(t);
      return le(n, {
        code: ee.invalid_type,
        expected: me.nan,
        received: n.parsedType
      }), xe;
    }
    return { status: "valid", value: t.data };
  }
}
Ku.create = (e) => new Ku({
  typeName: _e.ZodNaN,
  ...ke(e)
});
class xE extends Me {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Ji extends Me {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? xe : o.status === "dirty" ? (r.dirty(), kn(o.value)) : this._def.out._parseAsync({
          data: o.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? xe : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(t, r) {
    return new Ji({
      in: t,
      out: r,
      typeName: _e.ZodPipeline
    });
  }
}
class mi extends Me {
  _parse(t) {
    const r = this._def.innerType._parse(t), n = (s) => (tn(s) && (s.value = Object.freeze(s.value)), s);
    return vo(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
mi.create = (e, t) => new mi({
  innerType: e,
  typeName: _e.ZodReadonly,
  ...ke(t)
});
var _e;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(_e || (_e = {}));
const Ct = Yt.create, gt = rn.create, So = ii.create, Zu = ci.create;
pr.create;
const In = Vt.create, hi = et.create, Yu = bo.create;
_o.create;
Pr.create;
const wE = xo.create, Ma = ui.create, SE = nn.create;
wo.create;
dr.create;
on.create;
const $E = hi({
  type: SE(["string", "number", "integer", "boolean", "object", "array"]).optional(),
  title: Ct().optional(),
  description: Ct().optional(),
  default: Zu().optional(),
  minimum: gt().optional(),
  maximum: gt().optional(),
  exclusiveMin: gt().optional(),
  exclusiveMax: gt().optional(),
  multipleOf: gt().optional(),
  minLength: gt().optional(),
  maxLength: gt().optional(),
  minContains: gt().optional(),
  maxContains: gt().optional(),
  minProperties: gt().optional(),
  maxProperties: gt().optional(),
  isModifiable: So().optional(),
  "x-modifiable": In(Ct()).optional(),
  pattern: Ct().optional(),
  format: Ct().optional(),
  minItems: gt().optional(),
  maxItems: gt().optional(),
  uniqueItems: So().optional(),
  enum: In(Zu()).optional(),
  $id: Ct().optional(),
  $schema: Ct().optional()
}), Gr = $E.extend({
  properties: Ma(() => wE(Ct(), Gr)).optional(),
  items: Ma(() => Yu([Gr, In(Gr)])).optional(),
  required: In(Ct()).optional(),
  additionalProperties: Ma(() => Yu([So(), Gr])).optional()
}), EE = hi({
  root: Gr,
  properties: In(
    hi({
      id: Ct(),
      key: Ct().min(1),
      isRequired: So(),
      schema: Gr
    })
  )
}), CE = (e) => {
  const t = (o) => {
    const a = { ...o };
    if (Array.isArray(a.properties)) {
      const i = {}, c = [];
      a.properties.forEach((l) => {
        l.key && (i[l.key] = t(l.schema), l.isRequired && c.push(l.key));
      }), a.properties = i, c.length > 0 && (a.required = c);
    }
    return typeof a.items == "object" && a.items !== null && !Array.isArray(a.items) ? a.items = t(a.items) : Array.isArray(a.items) && (a.items = a.items.map(
      (i) => t(i)
    )), a;
  }, r = { ...t(e.root) }, n = {}, s = [];
  return e.properties.forEach((o) => {
    o.key && (n[o.key] = t(o.schema), o.isRequired && s.push(o.key));
  }), Object.keys(n).length > 0 && (r.properties = n), s.length > 0 && (r.required = s), r;
}, kE = (e) => {
  const t = (i) => {
    const c = { ...i };
    if (typeof c.properties == "object" && !Array.isArray(c.properties)) {
      const l = [];
      Object.keys(c.properties).forEach((u) => {
        var m;
        const p = c.properties[u];
        l.push({
          id: Rn(6),
          key: u,
          isRequired: ((m = c.required) == null ? void 0 : m.includes(u)) || !1,
          schema: t(p)
        });
      }), c.properties = l;
    }
    return typeof c.items == "object" && c.items !== null && !Array.isArray(c.items) ? c.items = t(c.items) : Array.isArray(c.items) && (c.items = c.items.map(
      (l) => t(l)
    )), c;
  }, { properties: r, required: n, ...s } = e, a = t({ properties: r, required: n });
  return {
    root: { ...s, ...a.root },
    properties: a.properties || []
  };
}, jE = ({
  rootType: e = "object",
  defaultValue: t
}) => {
  const r = Rn(6), n = Pp({
    resolver: Z$(EE),
    defaultValues: t ? kE(t) : {
      root: {
        type: e,
        $schema: "http://json-schema.org/draft/2020-12/schema",
        ...e === "object" && { additionalProperties: !0 },
        ...e === "array" && { items: { type: "string" } }
      },
      properties: e === "object" ? [
        {
          id: r,
          key: `field_${r}`,
          isRequired: !1,
          schema: { type: "number" }
        }
      ] : []
    }
  }), s = n.watch(), o = op(
    () => CE(s),
    [s]
  );
  return {
    methods: n,
    jsonSchema: o
  };
}, RE = ({
  textAreaRef: e,
  triggerAutoSize: t,
  maxHeight: r = Number.MAX_SAFE_INTEGER,
  minHeight: n = 0
}) => {
  const [s, o] = $.useState(!0);
  $.useEffect(() => {
    const i = e.current;
    if (i) {
      s && (i.style.minHeight = `${n + 6}px`, r > n && (i.style.maxHeight = `${r}px`), o(!1)), i.style.height = `${n + 6}px`;
      const c = i.scrollHeight;
      c > r ? i.style.height = `${r}px` : i.style.height = `${c + 6}px`;
    }
  }, [e.current, t]);
}, Hh = $.forwardRef(
  ({
    maxHeight: e = Number.MAX_SAFE_INTEGER,
    minHeight: t = 52,
    className: r,
    onChange: n,
    value: s,
    ...o
  }, a) => {
    const i = $.useRef(null), [c, l] = $.useState("");
    return RE({
      textAreaRef: i,
      triggerAutoSize: c,
      maxHeight: e,
      minHeight: t
    }), ap(a, () => ({
      textArea: i.current,
      focus: () => {
        var u;
        return (u = i == null ? void 0 : i.current) == null ? void 0 : u.focus();
      },
      maxHeight: e,
      minHeight: t
    })), $.useEffect(() => {
      l(s);
    }, [o == null ? void 0 : o.defaultValue, s]), /* @__PURE__ */ d.jsx(
      "textarea",
      {
        ...o,
        value: s,
        ref: i,
        className: $e(
          "flex w-full rounded-md border border-input bg-transparent dark:bg-input/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          r
        ),
        onChange: (u) => {
          l(u.target.value), n == null || n(u);
        }
      }
    );
  }
);
Hh.displayName = "AutosizeTextarea";
const AE = ({
  rootType: e = "object",
  readOnly: t = !1,
  theme: r = "light",
  styles: n,
  onChange: s,
  defaultValue: o
}) => {
  const { methods: a, jsonSchema: i } = jE({ rootType: e, defaultValue: o }), { setError: c, clearErrors: l, watch: u } = a, p = u("properties"), [m, v] = Kr(null);
  Ur(() => {
    s && s(i);
  }, [i, s]), Ur(() => {
    const I = vh(i);
    JSON.stringify(I) !== JSON.stringify(m) && v(I);
  }, [i, m]), Ur(() => {
    l(), m && m.forEach((I) => {
      const z = I.instancePath.split("/").filter(Boolean);
      if (z[0] === "properties" && z.length >= 3) {
        const M = (p == null ? void 0 : p.findIndex((V) => V.key === z[1])) ?? -1;
        M !== -1 && c(
          `properties.${M}.schema.${z[2]}`,
          {
            type: "ajv",
            message: I.message
          }
        );
      } else z.length > 0 && c(`root.${z[0]}`, {
        type: "ajv",
        message: I.message
      });
    });
  }, [m, p, c, l]), Ur(() => {
    if (!o) {
      const I = Rn(6), z = {
        root: {
          type: e,
          $schema: "http://json-schema.org/draft/2020-12/schema",
          ...e === "object" && { additionalProperties: !0 },
          ...e === "array" && { items: { type: "string" } }
        },
        properties: e === "object" ? [
          {
            id: I,
            key: `field_${I}`,
            isRequired: !1,
            schema: { type: "number" }
          }
        ] : []
      };
      a.reset(z);
    }
  }, [e, a, o]);
  const { fields: x, append: y, remove: h } = fd({
    control: a.control,
    name: "properties",
    keyName: "fieldId"
  }), _ = () => {
    const I = Rn(6);
    y({
      id: I,
      key: `field_${I}`,
      isRequired: !1,
      schema: { type: "string" }
    });
  }, [f, b] = Kr({ isOpen: !1, fieldPath: null }), w = (I) => {
    b({ isOpen: !0, fieldPath: I });
  }, g = {
    ...Qn,
    ...n,
    output: { ...Qn.output, ...n == null ? void 0 : n.output },
    form: { ...Qn.form, ...n == null ? void 0 : n.form },
    settings: { ...Qn.settings, ...n == null ? void 0 : n.settings }
  }, S = ip(null), [E, k] = Kr("overflow-hidden");
  return Ur(() => {
    var z;
    const I = (z = S.current) == null ? void 0 : z.textArea;
    I && (I.scrollHeight > I.clientHeight ? k("overflow-y-auto") : k("overflow-hidden"));
  }, [i]), /* @__PURE__ */ d.jsxs(hp, { ...a, children: [
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: $e(
          "bg-background text-foreground flex flex-col",
          r,
          Qc[g.spacing]
        ),
        children: /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: $e(
              "bg-background text-foreground flex",
              r,
              J_[g.output.position],
              Qc[g.spacing]
            ),
            children: [
              /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: $e(
                    "p-4 pr-2 flex flex-col gap-2 border border-input rounded-lg overflow-y-auto",
                    xa[g.form.width],
                    Xc[g.form.height]
                  ),
                  children: [
                    /* @__PURE__ */ d.jsx(
                      K_,
                      {
                        theme: r,
                        readOnly: t,
                        rootType: e,
                        onAddField: _,
                        onOpenSettings: w
                      }
                    ),
                    e === "object" && /* @__PURE__ */ d.jsx(
                      X0,
                      {
                        theme: r,
                        readOnly: t,
                        fields: x,
                        onRemove: h,
                        onOpenSettings: w
                      }
                    ),
                    e === "array" && /* @__PURE__ */ d.jsx("div", { className: "ml-2 pl-2 border-l-2 border-input", children: /* @__PURE__ */ d.jsx(
                      ho,
                      {
                        theme: r,
                        readOnly: t,
                        fieldPath: "root.items",
                        onRemove: () => {
                        },
                        onOpenSettings: w,
                        isSimpleType: !1,
                        isRootLevel: !1
                      }
                    ) })
                  ]
                }
              ),
              m ? /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: $e(
                    "p-6 bg-background text-foreground border border-input rounded-lg overflow-y-auto overflow-x-auto",
                    xa[g.output.width],
                    Xc[g.output.height]
                  ),
                  children: [
                    /* @__PURE__ */ d.jsx("p", { className: "text-lg", children: "JSON Schema Errors" }),
                    /* @__PURE__ */ d.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: `The generated JSON Schema has ${m == null ? void 0 : m.length}
                    ${(m == null ? void 0 : m.length) > 1 ? "errors." : "error."}` }),
                    /* @__PURE__ */ d.jsx("ul", { className: "mt-4 flex flex-col gap-2", children: m == null ? void 0 : m.map((I, z) => /* @__PURE__ */ d.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ d.jsxs(eh, { variant: "destructive", className: "font-mono", children: [
                        "root",
                        I.instancePath
                      ] }),
                      /* @__PURE__ */ d.jsx("span", { children: I.message })
                    ] }, z)) })
                  ]
                }
              ) : g.output.showJson && /* @__PURE__ */ d.jsx(
                Hh,
                {
                  ref: S,
                  readOnly: !0,
                  maxHeight: Z_[g.output.height],
                  value: JSON.stringify(i, null, 2),
                  className: $e(
                    "font-mono",
                    xa[g.output.width],
                    E
                  )
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      M$,
      {
        theme: r,
        readOnly: t,
        isOpen: f.isOpen,
        fieldPath: f.fieldPath,
        className: Y_[g.settings.width],
        onClose: () => b({ isOpen: !1, fieldPath: null })
      }
    )
  ] });
};
export {
  AE as JsonSchemaEditor
};
