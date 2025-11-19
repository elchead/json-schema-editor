import * as $ from "react";
import te, { useLayoutEffect as Lp, useState as kr, forwardRef as Ru, createElement as ma, createContext as Pu, useId as qp, useContext as Pi, useEffect as _r, useMemo as Up, useImperativeHandle as Zp, useRef as Bp } from "react";
import * as Ko from "react-dom";
import Wp from "react-dom";
function Au(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hn = { exports: {} }, Wr = {};
var Ai;
function Hp() {
  if (Ai) return Wr;
  Ai = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      s = {};
      for (var i in o)
        i !== "key" && (s[i] = o[i]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return Wr.Fragment = t, Wr.jsx = r, Wr.jsxs = r, Wr;
}
var Hr = {};
var Ni;
function Gp() {
  return Ni || (Ni = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === D ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case m:
          return "Fragment";
        case f:
          return "Profiler";
        case _:
          return "StrictMode";
        case E:
          return "Suspense";
        case S:
          return "SuspenseList";
        case q:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case y:
            return "Portal";
          case x:
            return j.displayName || "Context";
          case b:
            return (j._context.displayName || "Context") + ".Consumer";
          case g:
            var M = j.render;
            return j = j.displayName, j || (j = M.displayName || M.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case C:
            return M = j.displayName || null, M !== null ? M : e(j.type) || "Memo";
          case I:
            M = j._payload, j = j._init;
            try {
              return e(j(M));
            } catch {
            }
        }
      return null;
    }
    function t(j) {
      return "" + j;
    }
    function r(j) {
      try {
        t(j);
        var M = !1;
      } catch {
        M = !0;
      }
      if (M) {
        M = console;
        var N = M.error, k = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return N.call(
          M,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          k
        ), t(j);
      }
    }
    function n(j) {
      if (j === m) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === I)
        return "<...>";
      try {
        var M = e(j);
        return M ? "<" + M + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var j = F.A;
      return j === null ? null : j.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(j) {
      if (U.call(j, "key")) {
        var M = Object.getOwnPropertyDescriptor(j, "key").get;
        if (M && M.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function i(j, M) {
      function N() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          M
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: N,
        configurable: !0
      });
    }
    function c() {
      var j = e(this.type);
      return oe[j] || (oe[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function l(j, M, N, k, R, L) {
      var z = N.ref;
      return j = {
        $$typeof: w,
        type: j,
        key: M,
        props: N,
        _owner: k
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(j, "ref", { enumerable: !1, value: null }), j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(j, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(j, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function u(j, M, N, k, R, L) {
      var z = M.children;
      if (z !== void 0)
        if (k)
          if (B(z)) {
            for (k = 0; k < z.length; k++)
              h(z[k]);
            Object.freeze && Object.freeze(z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(z);
      if (U.call(M, "key")) {
        z = e(j);
        var Y = Object.keys(M).filter(function(se) {
          return se !== "key";
        });
        k = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", W[z + k] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          k,
          z,
          Y,
          z
        ), W[z + k] = !0);
      }
      if (z = null, N !== void 0 && (r(N), z = "" + N), a(M) && (r(M.key), z = "" + M.key), "key" in M) {
        N = {};
        for (var le in M)
          le !== "key" && (N[le] = M[le]);
      } else N = M;
      return z && i(
        N,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), l(
        j,
        z,
        N,
        o(),
        R,
        L
      );
    }
    function h(j) {
      p(j) ? j._store && (j._store.validated = 1) : typeof j == "object" && j !== null && j.$$typeof === I && (j._payload.status === "fulfilled" ? p(j._payload.value) && j._payload.value._store && (j._payload.value._store.validated = 1) : j._store && (j._store.validated = 1));
    }
    function p(j) {
      return typeof j == "object" && j !== null && j.$$typeof === w;
    }
    var v = te, w = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), F = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, B = Array.isArray, Q = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var K, oe = {}, V = v.react_stack_bottom_frame.bind(
      v,
      s
    )(), fe = Q(n(s)), W = {};
    Hr.Fragment = m, Hr.jsx = function(j, M, N) {
      var k = 1e4 > F.recentlyCreatedOwnerStacks++;
      return u(
        j,
        M,
        N,
        !1,
        k ? Error("react-stack-top-frame") : V,
        k ? Q(n(j)) : fe
      );
    }, Hr.jsxs = function(j, M, N) {
      var k = 1e4 > F.recentlyCreatedOwnerStacks++;
      return u(
        j,
        M,
        N,
        !0,
        k ? Error("react-stack-top-frame") : V,
        k ? Q(n(j)) : fe
      );
    };
  })()), Hr;
}
var Ti;
function Kp() {
  return Ti || (Ti = 1, process.env.NODE_ENV === "production" ? hn.exports = Hp() : hn.exports = Gp()), hn.exports;
}
var d = Kp(), an = (e) => e.type === "checkbox", rr = (e) => e instanceof Date, Ye = (e) => e == null;
const Nu = (e) => typeof e == "object";
var Le = (e) => !Ye(e) && !Array.isArray(e) && Nu(e) && !rr(e), Tu = (e) => Le(e) && e.target ? an(e.target) ? e.target.checked : e.target.value : e, Yp = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Iu = (e, t) => e.has(Yp(t)), Jp = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Le(t) && t.hasOwnProperty("isPrototypeOf");
}, Va = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Ie(e) {
  let t;
  const r = Array.isArray(e), n = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (!(Va && (e instanceof Blob || n)) && (r || Le(e)))
    if (t = r ? [] : Object.create(Object.getPrototypeOf(e)), !r && !Jp(e))
      t = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (t[o] = Ie(e[o]));
  else
    return e;
  return t;
}
var Yo = (e) => /^\w*$/.test(e), Te = (e) => e === void 0, Jo = (e) => Array.isArray(e) ? e.filter(Boolean) : [], La = (e) => Jo(e.replace(/["|']|\]/g, "").split(/\.|\[/)), ee = (e, t, r) => {
  if (!t || !Le(e))
    return r;
  const n = (Yo(t) ? [t] : La(t)).reduce((o, s) => Ye(o) ? o : o[s], e);
  return Te(n) || n === e ? Te(e[t]) ? r : e[t] : n;
}, tt = (e) => typeof e == "boolean", Ce = (e, t, r) => {
  let n = -1;
  const o = Yo(t) ? [t] : La(t), s = o.length, a = s - 1;
  for (; ++n < s; ) {
    const i = o[n];
    let c = r;
    if (n !== a) {
      const l = e[i];
      c = Le(l) || Array.isArray(l) ? l : isNaN(+o[n + 1]) ? {} : [];
    }
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return;
    e[i] = c, e = e[i];
  }
};
const Ao = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, at = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, St = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, qa = te.createContext(null);
qa.displayName = "HookFormContext";
const He = () => te.useContext(qa), Xp = (e) => {
  const { children: t, ...r } = e;
  return te.createElement(qa.Provider, { value: r }, t);
};
var Ou = (e, t, r, n = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(o, s, {
      get: () => {
        const a = s;
        return t._proxyFormState[a] !== at.all && (t._proxyFormState[a] = !n || at.all), r && (r[a] = !0), e[a];
      }
    });
  return o;
};
const Xo = typeof window < "u" ? te.useLayoutEffect : te.useEffect;
function Du(e) {
  const t = He(), { control: r = t.control, disabled: n, name: o, exact: s } = e || {}, [a, i] = te.useState(r._formState), c = te.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  });
  return Xo(() => r._subscribe({
    name: o,
    formState: c.current,
    exact: s,
    callback: (l) => {
      !n && i({
        ...r._formState,
        ...l
      });
    }
  }), [o, n, s]), te.useEffect(() => {
    c.current.isValid && r._setValid(!0);
  }, [r]), te.useMemo(() => Ou(a, r, c.current, !1), [a, r]);
}
var nt = (e) => typeof e == "string", pa = (e, t, r, n, o) => nt(e) ? (n && t.watch.add(e), ee(r, e, o)) : Array.isArray(e) ? e.map((s) => (n && t.watch.add(s), ee(r, s))) : (n && (t.watchAll = !0), r), ha = (e) => Ye(e) || !Nu(e);
function dt(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (ha(e) || ha(t))
    return Object.is(e, t);
  if (rr(e) && rr(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length)
    return !1;
  if (r.has(e) || r.has(t))
    return !0;
  r.add(e), r.add(t);
  for (const s of n) {
    const a = e[s];
    if (!o.includes(s))
      return !1;
    if (s !== "ref") {
      const i = t[s];
      if (rr(a) && rr(i) || Le(a) && Le(i) || Array.isArray(a) && Array.isArray(i) ? !dt(a, i, r) : !Object.is(a, i))
        return !1;
    }
  }
  return !0;
}
function en(e) {
  const t = He(), { control: r = t.control, name: n, defaultValue: o, disabled: s, exact: a, compute: i } = e || {}, c = te.useRef(o), l = te.useRef(i), u = te.useRef(void 0), h = te.useRef(r), p = te.useRef(n);
  l.current = i;
  const [v, w] = te.useState(() => {
    const x = r._getWatch(n, c.current);
    return l.current ? l.current(x) : x;
  }), y = te.useCallback((x) => {
    const g = pa(n, r._names, x || r._formValues, !1, c.current);
    return l.current ? l.current(g) : g;
  }, [r._formValues, r._names, n]), m = te.useCallback((x) => {
    if (!s) {
      const g = pa(n, r._names, x || r._formValues, !1, c.current);
      if (l.current) {
        const E = l.current(g);
        dt(E, u.current) || (w(E), u.current = E);
      } else
        w(g);
    }
  }, [r._formValues, r._names, s, n]);
  Xo(() => ((h.current !== r || !dt(p.current, n)) && (h.current = r, p.current = n, m()), r._subscribe({
    name: n,
    formState: {
      values: !0
    },
    exact: a,
    callback: (x) => {
      m(x.values);
    }
  })), [r, a, n, m]), te.useEffect(() => r._removeUnmounted());
  const _ = h.current !== r, f = p.current, b = te.useMemo(() => {
    if (s)
      return null;
    const x = !_ && !dt(f, n);
    return _ || x ? y() : null;
  }, [s, _, n, f, y]);
  return b !== null ? b : v;
}
function Qp(e) {
  const t = He(), { name: r, disabled: n, control: o = t.control, shouldUnregister: s, defaultValue: a } = e, i = Iu(o._names.array, r), c = te.useMemo(() => ee(o._formValues, r, ee(o._defaultValues, r, a)), [o, r, a]), l = en({
    control: o,
    name: r,
    defaultValue: c,
    exact: !0
  }), u = Du({
    control: o,
    name: r,
    exact: !0
  }), h = te.useRef(e), p = te.useRef(void 0), v = te.useRef(o.register(r, {
    ...e.rules,
    value: l,
    ...tt(e.disabled) ? { disabled: e.disabled } : {}
  }));
  h.current = e;
  const w = te.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!ee(u.errors, r)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!ee(u.dirtyFields, r)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!ee(u.touchedFields, r)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!ee(u.validatingFields, r)
    },
    error: {
      enumerable: !0,
      get: () => ee(u.errors, r)
    }
  }), [u, r]), y = te.useCallback((b) => v.current.onChange({
    target: {
      value: Tu(b),
      name: r
    },
    type: Ao.CHANGE
  }), [r]), m = te.useCallback(() => v.current.onBlur({
    target: {
      value: ee(o._formValues, r),
      name: r
    },
    type: Ao.BLUR
  }), [r, o._formValues]), _ = te.useCallback((b) => {
    const x = ee(o._fields, r);
    x && b && (x._f.ref = {
      focus: () => b.focus && b.focus(),
      select: () => b.select && b.select(),
      setCustomValidity: (g) => b.setCustomValidity(g),
      reportValidity: () => b.reportValidity()
    });
  }, [o._fields, r]), f = te.useMemo(() => ({
    name: r,
    value: l,
    ...tt(n) || u.disabled ? { disabled: u.disabled || n } : {},
    onChange: y,
    onBlur: m,
    ref: _
  }), [r, n, u.disabled, y, m, _, l]);
  return te.useEffect(() => {
    const b = o._options.shouldUnregister || s, x = p.current;
    x && x !== r && !i && o.unregister(x), o.register(r, {
      ...h.current.rules,
      ...tt(h.current.disabled) ? { disabled: h.current.disabled } : {}
    });
    const g = (E, S) => {
      const C = ee(o._fields, E);
      C && C._f && (C._f.mount = S);
    };
    if (g(r, !0), b) {
      const E = Ie(ee(o._options.defaultValues, r, h.current.defaultValue));
      Ce(o._defaultValues, r, E), Te(ee(o._formValues, r)) && Ce(o._formValues, r, E);
    }
    return !i && o.register(r), p.current = r, () => {
      (i ? b && !o._state.action : b) ? o.unregister(r) : g(r, !1);
    };
  }, [r, o, i, s]), te.useEffect(() => {
    o._setDisabledField({
      disabled: n,
      name: r
    });
  }, [n, r, o]), te.useMemo(() => ({
    field: f,
    formState: u,
    fieldState: w
  }), [f, u, w]);
}
const Ft = (e) => e.render(Qp(e));
var Ua = (e, t, r, n, o) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: o || !0
  }
} : {}, Je = (e) => Array.isArray(e) ? e : [e], Ii = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const s of e)
        s.next && s.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((s) => s !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
};
function Mu(e, t) {
  const r = {};
  for (const n in e)
    if (e.hasOwnProperty(n)) {
      const o = e[n], s = t[n];
      if (o && Le(o) && s) {
        const a = Mu(o, s);
        Le(a) && (r[n] = a);
      } else e[n] && (r[n] = s);
    }
  return r;
}
var Be = (e) => Le(e) && !Object.keys(e).length, Za = (e) => e.type === "file", ft = (e) => typeof e == "function", No = (e) => {
  if (!Va)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, zu = (e) => e.type === "select-multiple", Ba = (e) => e.type === "radio", eh = (e) => Ba(e) || an(e), Rs = (e) => No(e) && e.isConnected;
function th(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = Te(e) ? n++ : e[t[n++]];
  return e;
}
function rh(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Te(e[t]))
      return !1;
  return !0;
}
function Ve(e, t) {
  const r = Array.isArray(t) ? t : Yo(t) ? [t] : La(t), n = r.length === 1 ? e : th(e, r), o = r.length - 1, s = r[o];
  return n && delete n[s], o !== 0 && (Le(n) && Be(n) || Array.isArray(n) && rh(n)) && Ve(e, r.slice(0, -1)), e;
}
var nh = (e) => {
  for (const t in e)
    if (ft(e[t]))
      return !0;
  return !1;
};
function Fu(e) {
  return Array.isArray(e) || Le(e) && !nh(e);
}
function ga(e, t = {}) {
  for (const r in e) {
    const n = e[r];
    Fu(n) ? (t[r] = Array.isArray(n) ? [] : {}, ga(n, t[r])) : Te(n) || (t[r] = !0);
  }
  return t;
}
function wr(e, t, r) {
  r || (r = ga(t));
  for (const n in e) {
    const o = e[n];
    if (Fu(o))
      Te(t) || ha(r[n]) ? r[n] = ga(o, Array.isArray(o) ? [] : {}) : wr(o, Ye(t) ? {} : t[n], r[n]);
    else {
      const s = t[n];
      r[n] = !dt(o, s);
    }
  }
  return r;
}
const Oi = {
  value: !1,
  isValid: !1
}, Di = { value: !0, isValid: !0 };
var Vu = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Te(e[0].attributes.value) ? Te(e[0].value) || e[0].value === "" ? Di : { value: e[0].value, isValid: !0 } : Di
    ) : Oi;
  }
  return Oi;
}, Lu = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => Te(e) ? e : t ? e === "" ? NaN : e && +e : r && nt(e) ? new Date(e) : n ? n(e) : e;
const Mi = {
  isValid: !1,
  value: null
};
var qu = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Mi) : Mi;
function zi(e) {
  const t = e.ref;
  return Za(t) ? t.files : Ba(t) ? qu(e.refs).value : zu(t) ? [...t.selectedOptions].map(({ value: r }) => r) : an(t) ? Vu(e.refs).value : Lu(Te(t.value) ? e.ref.value : t.value, e);
}
var oh = (e, t, r, n) => {
  const o = {};
  for (const s of e) {
    const a = ee(t, s);
    a && Ce(o, s, a._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: n
  };
}, To = (e) => e instanceof RegExp, Gr = (e) => Te(e) ? e : To(e) ? e.source : Le(e) ? To(e.value) ? e.value.source : e.value : e, xr = (e) => ({
  isOnSubmit: !e || e === at.onSubmit,
  isOnBlur: e === at.onBlur,
  isOnChange: e === at.onChange,
  isOnAll: e === at.all,
  isOnTouch: e === at.onTouched
});
const Fi = "AsyncFunction";
var sh = (e) => !!e && !!e.validate && !!(ft(e.validate) && e.validate.constructor.name === Fi || Le(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Fi)), ah = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), va = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const jr = (e, t, r, n) => {
  for (const o of r || Object.keys(e)) {
    const s = ee(e, o);
    if (s) {
      const { _f: a, ...i } = s;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], o) && !n)
          return !0;
        if (a.ref && t(a.ref, a.name) && !n)
          return !0;
        if (jr(i, t))
          break;
      } else if (Le(i) && jr(i, t))
        break;
    }
  }
};
function Vi(e, t, r) {
  const n = ee(e, r);
  if (n || Yo(r))
    return {
      error: n,
      name: r
    };
  const o = r.split(".");
  for (; o.length; ) {
    const s = o.join("."), a = ee(t, s), i = ee(e, s);
    if (a && !Array.isArray(a) && r !== s)
      return { name: r };
    if (i && i.type)
      return {
        name: s,
        error: i
      };
    if (i && i.root && i.root.type)
      return {
        name: `${s}.root`,
        error: i.root
      };
    o.pop();
  }
  return {
    name: r
  };
}
var ih = (e, t, r, n) => {
  r(e);
  const { name: o, ...s } = e;
  return Be(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((a) => t[a] === (!n || at.all));
}, ch = (e, t, r) => !e || !t || e === t || Je(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n))), lh = (e, t, r, n, o) => o.isOnAll ? !1 : !r && o.isOnTouch ? !(t || e) : (r ? n.isOnBlur : o.isOnBlur) ? !e : (r ? n.isOnChange : o.isOnChange) ? e : !0, uh = (e, t) => !Jo(ee(e, t)).length && Ve(e, t), Uu = (e, t, r) => {
  const n = Je(ee(e, r));
  return Ce(n, "root", t[r]), Ce(e, r, n), e;
};
function Li(e, t, r = "validate") {
  if (nt(e) || Array.isArray(e) && e.every(nt) || tt(e) && !e)
    return {
      type: r,
      message: nt(e) ? e : "",
      ref: t
    };
}
var dr = (e) => Le(e) && !To(e) ? e : {
  value: e,
  message: ""
}, ya = async (e, t, r, n, o, s) => {
  const { ref: a, refs: i, required: c, maxLength: l, minLength: u, min: h, max: p, pattern: v, validate: w, name: y, valueAsNumber: m, mount: _ } = e._f, f = ee(r, y);
  if (!_ || t.has(y))
    return {};
  const b = i ? i[0] : a, x = (F) => {
    o && b.reportValidity && (b.setCustomValidity(tt(F) ? "" : F || ""), b.reportValidity());
  }, g = {}, E = Ba(a), S = an(a), C = E || S, I = (m || Za(a)) && Te(a.value) && Te(f) || No(a) && a.value === "" || f === "" || Array.isArray(f) && !f.length, q = Ua.bind(null, y, n, g), D = (F, U, B, Q = St.maxLength, K = St.minLength) => {
    const oe = F ? U : B;
    g[y] = {
      type: F ? Q : K,
      message: oe,
      ref: a,
      ...q(F ? Q : K, oe)
    };
  };
  if (s ? !Array.isArray(f) || !f.length : c && (!C && (I || Ye(f)) || tt(f) && !f || S && !Vu(i).isValid || E && !qu(i).isValid)) {
    const { value: F, message: U } = nt(c) ? { value: !!c, message: c } : dr(c);
    if (F && (g[y] = {
      type: St.required,
      message: U,
      ref: b,
      ...q(St.required, U)
    }, !n))
      return x(U), g;
  }
  if (!I && (!Ye(h) || !Ye(p))) {
    let F, U;
    const B = dr(p), Q = dr(h);
    if (!Ye(f) && !isNaN(f)) {
      const K = a.valueAsNumber || f && +f;
      Ye(B.value) || (F = K > B.value), Ye(Q.value) || (U = K < Q.value);
    } else {
      const K = a.valueAsDate || new Date(f), oe = (W) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + W), V = a.type == "time", fe = a.type == "week";
      nt(B.value) && f && (F = V ? oe(f) > oe(B.value) : fe ? f > B.value : K > new Date(B.value)), nt(Q.value) && f && (U = V ? oe(f) < oe(Q.value) : fe ? f < Q.value : K < new Date(Q.value));
    }
    if ((F || U) && (D(!!F, B.message, Q.message, St.max, St.min), !n))
      return x(g[y].message), g;
  }
  if ((l || u) && !I && (nt(f) || s && Array.isArray(f))) {
    const F = dr(l), U = dr(u), B = !Ye(F.value) && f.length > +F.value, Q = !Ye(U.value) && f.length < +U.value;
    if ((B || Q) && (D(B, F.message, U.message), !n))
      return x(g[y].message), g;
  }
  if (v && !I && nt(f)) {
    const { value: F, message: U } = dr(v);
    if (To(F) && !f.match(F) && (g[y] = {
      type: St.pattern,
      message: U,
      ref: a,
      ...q(St.pattern, U)
    }, !n))
      return x(U), g;
  }
  if (w) {
    if (ft(w)) {
      const F = await w(f, r), U = Li(F, b);
      if (U && (g[y] = {
        ...U,
        ...q(St.validate, U.message)
      }, !n))
        return x(U.message), g;
    } else if (Le(w)) {
      let F = {};
      for (const U in w) {
        if (!Be(F) && !n)
          break;
        const B = Li(await w[U](f, r), b, U);
        B && (F = {
          ...B,
          ...q(U, B.message)
        }, x(B.message), n && (g[y] = F));
      }
      if (!Be(F) && (g[y] = {
        ref: b,
        ...F
      }, !n))
        return g;
    }
  }
  return x(!0), g;
};
const dh = {
  mode: at.onSubmit,
  reValidateMode: at.onChange,
  shouldFocusError: !0
};
function fh(e = {}) {
  let t = {
    ...dh,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isLoading: ft(t.defaultValues),
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
  }, n = {}, o = Le(t.defaultValues) || Le(t.values) ? Ie(t.defaultValues || t.values) || {} : {}, s = t.shouldUnregister ? {} : Ie(o), a = {
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
  let h = {
    ...u
  };
  const p = {
    array: Ii(),
    state: Ii()
  }, v = t.criteriaMode === at.all, w = (P) => (O) => {
    clearTimeout(l), l = setTimeout(P, O);
  }, y = async (P) => {
    if (!t.disabled && (u.isValid || h.isValid || P)) {
      const O = t.resolver ? Be((await S()).errors) : await I(n, !0);
      O !== r.isValid && p.state.next({
        isValid: O
      });
    }
  }, m = (P, O) => {
    !t.disabled && (u.isValidating || u.validatingFields || h.isValidating || h.validatingFields) && ((P || Array.from(i.mount)).forEach((Z) => {
      Z && (O ? Ce(r.validatingFields, Z, O) : Ve(r.validatingFields, Z));
    }), p.state.next({
      validatingFields: r.validatingFields,
      isValidating: !Be(r.validatingFields)
    }));
  }, _ = (P, O = [], Z, re, ne = !0, X = !0) => {
    if (re && Z && !t.disabled) {
      if (a.action = !0, X && Array.isArray(ee(n, P))) {
        const ue = Z(ee(n, P), re.argA, re.argB);
        ne && Ce(n, P, ue);
      }
      if (X && Array.isArray(ee(r.errors, P))) {
        const ue = Z(ee(r.errors, P), re.argA, re.argB);
        ne && Ce(r.errors, P, ue), uh(r.errors, P);
      }
      if ((u.touchedFields || h.touchedFields) && X && Array.isArray(ee(r.touchedFields, P))) {
        const ue = Z(ee(r.touchedFields, P), re.argA, re.argB);
        ne && Ce(r.touchedFields, P, ue);
      }
      (u.dirtyFields || h.dirtyFields) && (r.dirtyFields = wr(o, s)), p.state.next({
        name: P,
        isDirty: D(P, O),
        dirtyFields: r.dirtyFields,
        errors: r.errors,
        isValid: r.isValid
      });
    } else
      Ce(s, P, O);
  }, f = (P, O) => {
    Ce(r.errors, P, O), p.state.next({
      errors: r.errors
    });
  }, b = (P) => {
    r.errors = P, p.state.next({
      errors: r.errors,
      isValid: !1
    });
  }, x = (P, O, Z, re) => {
    const ne = ee(n, P);
    if (ne) {
      const X = ee(s, P, Te(Z) ? ee(o, P) : Z);
      Te(X) || re && re.defaultChecked || O ? Ce(s, P, O ? X : zi(ne._f)) : B(P, X), a.mount && !a.action && y();
    }
  }, g = (P, O, Z, re, ne) => {
    let X = !1, ue = !1;
    const ke = {
      name: P
    };
    if (!t.disabled) {
      if (!Z || re) {
        (u.isDirty || h.isDirty) && (ue = r.isDirty, r.isDirty = ke.isDirty = D(), X = ue !== ke.isDirty);
        const Ae = dt(ee(o, P), O);
        ue = !!ee(r.dirtyFields, P), Ae ? Ve(r.dirtyFields, P) : Ce(r.dirtyFields, P, !0), ke.dirtyFields = r.dirtyFields, X = X || (u.dirtyFields || h.dirtyFields) && ue !== !Ae;
      }
      if (Z) {
        const Ae = ee(r.touchedFields, P);
        Ae || (Ce(r.touchedFields, P, Z), ke.touchedFields = r.touchedFields, X = X || (u.touchedFields || h.touchedFields) && Ae !== Z);
      }
      X && ne && p.state.next(ke);
    }
    return X ? ke : {};
  }, E = (P, O, Z, re) => {
    const ne = ee(r.errors, P), X = (u.isValid || h.isValid) && tt(O) && r.isValid !== O;
    if (t.delayError && Z ? (c = w(() => f(P, Z)), c(t.delayError)) : (clearTimeout(l), c = null, Z ? Ce(r.errors, P, Z) : Ve(r.errors, P)), (Z ? !dt(ne, Z) : ne) || !Be(re) || X) {
      const ue = {
        ...re,
        ...X && tt(O) ? { isValid: O } : {},
        errors: r.errors,
        name: P
      };
      r = {
        ...r,
        ...ue
      }, p.state.next(ue);
    }
  }, S = async (P) => {
    m(P, !0);
    const O = await t.resolver(s, t.context, oh(P || i.mount, n, t.criteriaMode, t.shouldUseNativeValidation));
    return m(P), O;
  }, C = async (P) => {
    const { errors: O } = await S(P);
    if (P)
      for (const Z of P) {
        const re = ee(O, Z);
        re ? Ce(r.errors, Z, re) : Ve(r.errors, Z);
      }
    else
      r.errors = O;
    return O;
  }, I = async (P, O, Z = {
    valid: !0
  }) => {
    for (const re in P) {
      const ne = P[re];
      if (ne) {
        const { _f: X, ...ue } = ne;
        if (X) {
          const ke = i.array.has(X.name), Ae = ne._f && sh(ne._f);
          Ae && u.validatingFields && m([X.name], !0);
          const Ge = await ya(ne, i.disabled, s, v, t.shouldUseNativeValidation && !O, ke);
          if (Ae && u.validatingFields && m([X.name]), Ge[X.name] && (Z.valid = !1, O))
            break;
          !O && (ee(Ge, X.name) ? ke ? Uu(r.errors, Ge, X.name) : Ce(r.errors, X.name, Ge[X.name]) : Ve(r.errors, X.name));
        }
        !Be(ue) && await I(ue, O, Z);
      }
    }
    return Z.valid;
  }, q = () => {
    for (const P of i.unMount) {
      const O = ee(n, P);
      O && (O._f.refs ? O._f.refs.every((Z) => !Rs(Z)) : !Rs(O._f.ref)) && z(P);
    }
    i.unMount = /* @__PURE__ */ new Set();
  }, D = (P, O) => !t.disabled && (P && O && Ce(s, P, O), !dt(W(), o)), F = (P, O, Z) => pa(P, i, {
    ...a.mount ? s : Te(O) ? o : nt(P) ? { [P]: O } : O
  }, Z, O), U = (P) => Jo(ee(a.mount ? s : o, P, t.shouldUnregister ? ee(o, P, []) : [])), B = (P, O, Z = {}) => {
    const re = ee(n, P);
    let ne = O;
    if (re) {
      const X = re._f;
      X && (!X.disabled && Ce(s, P, Lu(O, X)), ne = No(X.ref) && Ye(O) ? "" : O, zu(X.ref) ? [...X.ref.options].forEach((ue) => ue.selected = ne.includes(ue.value)) : X.refs ? an(X.ref) ? X.refs.forEach((ue) => {
        (!ue.defaultChecked || !ue.disabled) && (Array.isArray(ne) ? ue.checked = !!ne.find((ke) => ke === ue.value) : ue.checked = ne === ue.value || !!ne);
      }) : X.refs.forEach((ue) => ue.checked = ue.value === ne) : Za(X.ref) ? X.ref.value = "" : (X.ref.value = ne, X.ref.type || p.state.next({
        name: P,
        values: Ie(s)
      })));
    }
    (Z.shouldDirty || Z.shouldTouch) && g(P, ne, Z.shouldTouch, Z.shouldDirty, !0), Z.shouldValidate && fe(P);
  }, Q = (P, O, Z) => {
    for (const re in O) {
      if (!O.hasOwnProperty(re))
        return;
      const ne = O[re], X = P + "." + re, ue = ee(n, X);
      (i.array.has(P) || Le(ne) || ue && !ue._f) && !rr(ne) ? Q(X, ne, Z) : B(X, ne, Z);
    }
  }, K = (P, O, Z = {}) => {
    const re = ee(n, P), ne = i.array.has(P), X = Ie(O);
    Ce(s, P, X), ne ? (p.array.next({
      name: P,
      values: Ie(s)
    }), (u.isDirty || u.dirtyFields || h.isDirty || h.dirtyFields) && Z.shouldDirty && p.state.next({
      name: P,
      dirtyFields: wr(o, s),
      isDirty: D(P, X)
    })) : re && !re._f && !Ye(X) ? Q(P, X, Z) : B(P, X, Z), va(P, i) && p.state.next({ ...r, name: P }), p.state.next({
      name: a.mount ? P : void 0,
      values: Ie(s)
    });
  }, oe = async (P) => {
    a.mount = !0;
    const O = P.target;
    let Z = O.name, re = !0;
    const ne = ee(n, Z), X = (Ae) => {
      re = Number.isNaN(Ae) || rr(Ae) && isNaN(Ae.getTime()) || dt(Ae, ee(s, Z, Ae));
    }, ue = xr(t.mode), ke = xr(t.reValidateMode);
    if (ne) {
      let Ae, Ge;
      const ur = O.type ? zi(ne._f) : Tu(P), It = P.type === Ao.BLUR || P.type === Ao.FOCUS_OUT, zp = !ah(ne._f) && !t.resolver && !ee(r.errors, Z) && !ne._f.deps || lh(It, ee(r.touchedFields, Z), r.isSubmitted, ke, ue), js = va(Z, i, It);
      Ce(s, Z, ur), It ? (!O || !O.readOnly) && (ne._f.onBlur && ne._f.onBlur(P), c && c(0)) : ne._f.onChange && ne._f.onChange(P);
      const Cs = g(Z, ur, It), Fp = !Be(Cs) || js;
      if (!It && p.state.next({
        name: Z,
        type: P.type,
        values: Ie(s)
      }), zp)
        return (u.isValid || h.isValid) && (t.mode === "onBlur" ? It && y() : It || y()), Fp && p.state.next({ name: Z, ...js ? {} : Cs });
      if (!It && js && p.state.next({ ...r }), t.resolver) {
        const { errors: Ci } = await S([Z]);
        if (X(ur), re) {
          const Vp = Vi(r.errors, n, Z), Ri = Vi(Ci, n, Vp.name || Z);
          Ae = Ri.error, Z = Ri.name, Ge = Be(Ci);
        }
      } else
        m([Z], !0), Ae = (await ya(ne, i.disabled, s, v, t.shouldUseNativeValidation))[Z], m([Z]), X(ur), re && (Ae ? Ge = !1 : (u.isValid || h.isValid) && (Ge = await I(n, !0)));
      re && (ne._f.deps && (!Array.isArray(ne._f.deps) || ne._f.deps.length > 0) && fe(ne._f.deps), E(Z, Ge, Ae, Cs));
    }
  }, V = (P, O) => {
    if (ee(r.errors, O) && P.focus)
      return P.focus(), 1;
  }, fe = async (P, O = {}) => {
    let Z, re;
    const ne = Je(P);
    if (t.resolver) {
      const X = await C(Te(P) ? P : ne);
      Z = Be(X), re = P ? !ne.some((ue) => ee(X, ue)) : Z;
    } else P ? (re = (await Promise.all(ne.map(async (X) => {
      const ue = ee(n, X);
      return await I(ue && ue._f ? { [X]: ue } : ue);
    }))).every(Boolean), !(!re && !r.isValid) && y()) : re = Z = await I(n);
    return p.state.next({
      ...!nt(P) || (u.isValid || h.isValid) && Z !== r.isValid ? {} : { name: P },
      ...t.resolver || !P ? { isValid: Z } : {},
      errors: r.errors
    }), O.shouldFocus && !re && jr(n, V, P ? ne : i.mount), re;
  }, W = (P, O) => {
    let Z = {
      ...a.mount ? s : o
    };
    return O && (Z = Mu(O.dirtyFields ? r.dirtyFields : r.touchedFields, Z)), Te(P) ? Z : nt(P) ? ee(Z, P) : P.map((re) => ee(Z, re));
  }, j = (P, O) => ({
    invalid: !!ee((O || r).errors, P),
    isDirty: !!ee((O || r).dirtyFields, P),
    error: ee((O || r).errors, P),
    isValidating: !!ee(r.validatingFields, P),
    isTouched: !!ee((O || r).touchedFields, P)
  }), M = (P) => {
    P && Je(P).forEach((O) => Ve(r.errors, O)), p.state.next({
      errors: P ? r.errors : {}
    });
  }, N = (P, O, Z) => {
    const re = (ee(n, P, { _f: {} })._f || {}).ref, ne = ee(r.errors, P) || {}, { ref: X, message: ue, type: ke, ...Ae } = ne;
    Ce(r.errors, P, {
      ...Ae,
      ...O,
      ref: re
    }), p.state.next({
      name: P,
      errors: r.errors,
      isValid: !1
    }), Z && Z.shouldFocus && re && re.focus && re.focus();
  }, k = (P, O) => ft(P) ? p.state.subscribe({
    next: (Z) => "values" in Z && P(F(void 0, O), Z)
  }) : F(P, O, !0), R = (P) => p.state.subscribe({
    next: (O) => {
      ch(P.name, O.name, P.exact) && ih(O, P.formState || u, Me, P.reRenderRoot) && P.callback({
        values: { ...s },
        ...r,
        ...O,
        defaultValues: o
      });
    }
  }).unsubscribe, L = (P) => (a.mount = !0, h = {
    ...h,
    ...P.formState
  }, R({
    ...P,
    formState: h
  })), z = (P, O = {}) => {
    for (const Z of P ? Je(P) : i.mount)
      i.mount.delete(Z), i.array.delete(Z), O.keepValue || (Ve(n, Z), Ve(s, Z)), !O.keepError && Ve(r.errors, Z), !O.keepDirty && Ve(r.dirtyFields, Z), !O.keepTouched && Ve(r.touchedFields, Z), !O.keepIsValidating && Ve(r.validatingFields, Z), !t.shouldUnregister && !O.keepDefaultValue && Ve(o, Z);
    p.state.next({
      values: Ie(s)
    }), p.state.next({
      ...r,
      ...O.keepDirty ? { isDirty: D() } : {}
    }), !O.keepIsValid && y();
  }, Y = ({ disabled: P, name: O }) => {
    (tt(P) && a.mount || P || i.disabled.has(O)) && (P ? i.disabled.add(O) : i.disabled.delete(O));
  }, le = (P, O = {}) => {
    let Z = ee(n, P);
    const re = tt(O.disabled) || tt(t.disabled);
    return Ce(n, P, {
      ...Z || {},
      _f: {
        ...Z && Z._f ? Z._f : { ref: { name: P } },
        name: P,
        mount: !0,
        ...O
      }
    }), i.mount.add(P), Z ? Y({
      disabled: tt(O.disabled) ? O.disabled : t.disabled,
      name: P
    }) : x(P, !0, O.value), {
      ...re ? { disabled: O.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!O.required,
        min: Gr(O.min),
        max: Gr(O.max),
        minLength: Gr(O.minLength),
        maxLength: Gr(O.maxLength),
        pattern: Gr(O.pattern)
      } : {},
      name: P,
      onChange: oe,
      onBlur: oe,
      ref: (ne) => {
        if (ne) {
          le(P, O), Z = ee(n, P);
          const X = Te(ne.value) && ne.querySelectorAll && ne.querySelectorAll("input,select,textarea")[0] || ne, ue = eh(X), ke = Z._f.refs || [];
          if (ue ? ke.find((Ae) => Ae === X) : X === Z._f.ref)
            return;
          Ce(n, P, {
            _f: {
              ...Z._f,
              ...ue ? {
                refs: [
                  ...ke.filter(Rs),
                  X,
                  ...Array.isArray(ee(o, P)) ? [{}] : []
                ],
                ref: { type: X.type, name: P }
              } : { ref: X }
            }
          }), x(P, !1, void 0, X);
        } else
          Z = ee(n, P, {}), Z._f && (Z._f.mount = !1), (t.shouldUnregister || O.shouldUnregister) && !(Iu(i.array, P) && a.action) && i.unMount.add(P);
      }
    };
  }, se = () => t.shouldFocusError && jr(n, V, i.mount), A = (P) => {
    tt(P) && (p.state.next({ disabled: P }), jr(n, (O, Z) => {
      const re = ee(n, Z);
      re && (O.disabled = re._f.disabled || P, Array.isArray(re._f.refs) && re._f.refs.forEach((ne) => {
        ne.disabled = re._f.disabled || P;
      }));
    }, 0, !1));
  }, T = (P, O) => async (Z) => {
    let re;
    Z && (Z.preventDefault && Z.preventDefault(), Z.persist && Z.persist());
    let ne = Ie(s);
    if (p.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: X, values: ue } = await S();
      r.errors = X, ne = Ie(ue);
    } else
      await I(n);
    if (i.disabled.size)
      for (const X of i.disabled)
        Ve(ne, X);
    if (Ve(r.errors, "root"), Be(r.errors)) {
      p.state.next({
        errors: {}
      });
      try {
        await P(ne, Z);
      } catch (X) {
        re = X;
      }
    } else
      O && await O({ ...r.errors }, Z), se(), setTimeout(se);
    if (p.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Be(r.errors) && !re,
      submitCount: r.submitCount + 1,
      errors: r.errors
    }), re)
      throw re;
  }, H = (P, O = {}) => {
    ee(n, P) && (Te(O.defaultValue) ? K(P, Ie(ee(o, P))) : (K(P, O.defaultValue), Ce(o, P, Ie(O.defaultValue))), O.keepTouched || Ve(r.touchedFields, P), O.keepDirty || (Ve(r.dirtyFields, P), r.isDirty = O.defaultValue ? D(P, Ie(ee(o, P))) : D()), O.keepError || (Ve(r.errors, P), u.isValid && y()), p.state.next({ ...r }));
  }, J = (P, O = {}) => {
    const Z = P ? Ie(P) : o, re = Ie(Z), ne = Be(P), X = ne ? o : re;
    if (O.keepDefaultValues || (o = Z), !O.keepValues) {
      if (O.keepDirtyValues) {
        const ue = /* @__PURE__ */ new Set([
          ...i.mount,
          ...Object.keys(wr(o, s))
        ]);
        for (const ke of Array.from(ue))
          ee(r.dirtyFields, ke) ? Ce(X, ke, ee(s, ke)) : K(ke, ee(X, ke));
      } else {
        if (Va && Te(P))
          for (const ue of i.mount) {
            const ke = ee(n, ue);
            if (ke && ke._f) {
              const Ae = Array.isArray(ke._f.refs) ? ke._f.refs[0] : ke._f.ref;
              if (No(Ae)) {
                const Ge = Ae.closest("form");
                if (Ge) {
                  Ge.reset();
                  break;
                }
              }
            }
          }
        if (O.keepFieldsRef)
          for (const ue of i.mount)
            K(ue, ee(X, ue));
        else
          n = {};
      }
      s = t.shouldUnregister ? O.keepDefaultValues ? Ie(o) : {} : Ie(X), p.array.next({
        values: { ...X }
      }), p.state.next({
        values: { ...X }
      });
    }
    i = {
      mount: O.keepDirtyValues ? i.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !u.isValid || !!O.keepIsValid || !!O.keepDirtyValues || !t.shouldUnregister && !Be(X), a.watch = !!t.shouldUnregister, p.state.next({
      submitCount: O.keepSubmitCount ? r.submitCount : 0,
      isDirty: ne ? !1 : O.keepDirty ? r.isDirty : !!(O.keepDefaultValues && !dt(P, o)),
      isSubmitted: O.keepIsSubmitted ? r.isSubmitted : !1,
      dirtyFields: ne ? {} : O.keepDirtyValues ? O.keepDefaultValues && s ? wr(o, s) : r.dirtyFields : O.keepDefaultValues && P ? wr(o, P) : O.keepDirty ? r.dirtyFields : {},
      touchedFields: O.keepTouched ? r.touchedFields : {},
      errors: O.keepErrors ? r.errors : {},
      isSubmitSuccessful: O.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
      isSubmitting: !1,
      defaultValues: o
    });
  }, ae = (P, O) => J(ft(P) ? P(s) : P, O), me = (P, O = {}) => {
    const Z = ee(n, P), re = Z && Z._f;
    if (re) {
      const ne = re.refs ? re.refs[0] : re.ref;
      ne.focus && (ne.focus(), O.shouldSelect && ft(ne.select) && ne.select());
    }
  }, Me = (P) => {
    r = {
      ...r,
      ...P
    };
  }, Ue = {
    control: {
      register: le,
      unregister: z,
      getFieldState: j,
      handleSubmit: T,
      setError: N,
      _subscribe: R,
      _runSchema: S,
      _focusError: se,
      _getWatch: F,
      _getDirty: D,
      _setValid: y,
      _setFieldArray: _,
      _setDisabledField: Y,
      _setErrors: b,
      _getFieldArray: U,
      _reset: J,
      _resetDefaultValues: () => ft(t.defaultValues) && t.defaultValues().then((P) => {
        ae(P, t.resetOptions), p.state.next({
          isLoading: !1
        });
      }),
      _removeUnmounted: q,
      _disableForm: A,
      _subjects: p,
      _proxyFormState: u,
      get _fields() {
        return n;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return a;
      },
      set _state(P) {
        a = P;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return i;
      },
      set _names(P) {
        i = P;
      },
      get _formState() {
        return r;
      },
      get _options() {
        return t;
      },
      set _options(P) {
        t = {
          ...t,
          ...P
        };
      }
    },
    subscribe: L,
    trigger: fe,
    register: le,
    handleSubmit: T,
    watch: k,
    setValue: K,
    getValues: W,
    reset: ae,
    resetField: H,
    clearErrors: M,
    unregister: z,
    setError: N,
    setFocus: me,
    getFieldState: j
  };
  return {
    ...Ue,
    formControl: Ue
  };
}
var Ot = () => {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  const e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
    const r = (Math.random() * 16 + e) % 16 | 0;
    return (t == "x" ? r : r & 3 | 8).toString(16);
  });
}, Ps = (e, t, r = {}) => r.shouldFocus || Te(r.shouldFocus) ? r.focusName || `${e}.${Te(r.focusIndex) ? t : r.focusIndex}.` : "", As = (e, t) => [
  ...e,
  ...Je(t)
], Ns = (e) => Array.isArray(e) ? e.map(() => {
}) : void 0;
function Ts(e, t, r) {
  return [
    ...e.slice(0, t),
    ...Je(r),
    ...e.slice(t)
  ];
}
var Is = (e, t, r) => Array.isArray(e) ? (Te(e[r]) && (e[r] = void 0), e.splice(r, 0, e.splice(t, 1)[0]), e) : [], Os = (e, t) => [
  ...Je(t),
  ...Je(e)
];
function mh(e, t) {
  let r = 0;
  const n = [...e];
  for (const o of t)
    n.splice(o - r, 1), r++;
  return Jo(n).length ? n : [];
}
var Ds = (e, t) => Te(t) ? [] : mh(e, Je(t).sort((r, n) => r - n)), Ms = (e, t, r) => {
  [e[t], e[r]] = [e[r], e[t]];
}, qi = (e, t, r) => (e[t] = r, e);
function Zu(e) {
  const t = He(), { control: r = t.control, name: n, keyName: o = "id", shouldUnregister: s, rules: a } = e, [i, c] = te.useState(r._getFieldArray(n)), l = te.useRef(r._getFieldArray(n).map(Ot)), u = te.useRef(!1);
  r._names.array.add(n), te.useMemo(() => a && i.length >= 0 && r.register(n, a), [r, n, i.length, a]), Xo(() => r._subjects.array.subscribe({
    next: ({ values: x, name: g }) => {
      if (g === n || !g) {
        const E = ee(x, n);
        Array.isArray(E) && (c(E), l.current = E.map(Ot));
      }
    }
  }).unsubscribe, [r, n]);
  const h = te.useCallback((x) => {
    u.current = !0, r._setFieldArray(n, x);
  }, [r, n]), p = (x, g) => {
    const E = Je(Ie(x)), S = As(r._getFieldArray(n), E);
    r._names.focus = Ps(n, S.length - 1, g), l.current = As(l.current, E.map(Ot)), h(S), c(S), r._setFieldArray(n, S, As, {
      argA: Ns(x)
    });
  }, v = (x, g) => {
    const E = Je(Ie(x)), S = Os(r._getFieldArray(n), E);
    r._names.focus = Ps(n, 0, g), l.current = Os(l.current, E.map(Ot)), h(S), c(S), r._setFieldArray(n, S, Os, {
      argA: Ns(x)
    });
  }, w = (x) => {
    const g = Ds(r._getFieldArray(n), x);
    l.current = Ds(l.current, x), h(g), c(g), !Array.isArray(ee(r._fields, n)) && Ce(r._fields, n, void 0), r._setFieldArray(n, g, Ds, {
      argA: x
    });
  }, y = (x, g, E) => {
    const S = Je(Ie(g)), C = Ts(r._getFieldArray(n), x, S);
    r._names.focus = Ps(n, x, E), l.current = Ts(l.current, x, S.map(Ot)), h(C), c(C), r._setFieldArray(n, C, Ts, {
      argA: x,
      argB: Ns(g)
    });
  }, m = (x, g) => {
    const E = r._getFieldArray(n);
    Ms(E, x, g), Ms(l.current, x, g), h(E), c(E), r._setFieldArray(n, E, Ms, {
      argA: x,
      argB: g
    }, !1);
  }, _ = (x, g) => {
    const E = r._getFieldArray(n);
    Is(E, x, g), Is(l.current, x, g), h(E), c(E), r._setFieldArray(n, E, Is, {
      argA: x,
      argB: g
    }, !1);
  }, f = (x, g) => {
    const E = Ie(g), S = qi(r._getFieldArray(n), x, E);
    l.current = [...S].map((C, I) => !C || I === x ? Ot() : l.current[I]), h(S), c([...S]), r._setFieldArray(n, S, qi, {
      argA: x,
      argB: E
    }, !0, !1);
  }, b = (x) => {
    const g = Je(Ie(x));
    l.current = g.map(Ot), h([...g]), c([...g]), r._setFieldArray(n, [...g], (E) => E, {}, !0, !1);
  };
  return te.useEffect(() => {
    if (r._state.action = !1, va(n, r._names) && r._subjects.state.next({
      ...r._formState
    }), u.current && (!xr(r._options.mode).isOnSubmit || r._formState.isSubmitted) && !xr(r._options.reValidateMode).isOnSubmit)
      if (r._options.resolver)
        r._runSchema([n]).then((x) => {
          const g = ee(x.errors, n), E = ee(r._formState.errors, n);
          (E ? !g && E.type || g && (E.type !== g.type || E.message !== g.message) : g && g.type) && (g ? Ce(r._formState.errors, n, g) : Ve(r._formState.errors, n), r._subjects.state.next({
            errors: r._formState.errors
          }));
        });
      else {
        const x = ee(r._fields, n);
        x && x._f && !(xr(r._options.reValidateMode).isOnSubmit && xr(r._options.mode).isOnSubmit) && ya(x, r._names.disabled, r._formValues, r._options.criteriaMode === at.all, r._options.shouldUseNativeValidation, !0).then((g) => !Be(g) && r._subjects.state.next({
          errors: Uu(r._formState.errors, g, n)
        }));
      }
    r._subjects.state.next({
      name: n,
      values: Ie(r._formValues)
    }), r._names.focus && jr(r._fields, (x, g) => {
      if (r._names.focus && g.startsWith(r._names.focus) && x.focus)
        return x.focus(), 1;
    }), r._names.focus = "", r._setValid(), u.current = !1;
  }, [i, n, r]), te.useEffect(() => (!ee(r._formValues, n) && r._setFieldArray(n), () => {
    const x = (g, E) => {
      const S = ee(r._fields, g);
      S && S._f && (S._f.mount = E);
    };
    r._options.shouldUnregister || s ? r.unregister(n) : x(n, !1);
  }), [n, r, o, s]), {
    swap: te.useCallback(m, [h, n, r]),
    move: te.useCallback(_, [h, n, r]),
    prepend: te.useCallback(v, [h, n, r]),
    append: te.useCallback(p, [h, n, r]),
    remove: te.useCallback(w, [h, n, r]),
    insert: te.useCallback(y, [h, n, r]),
    update: te.useCallback(f, [h, n, r]),
    replace: te.useCallback(b, [h, n, r]),
    fields: te.useMemo(() => i.map((x, g) => ({
      ...x,
      [o]: l.current[g] || Ot()
    })), [i, o])
  };
}
function ph(e = {}) {
  const t = te.useRef(void 0), r = te.useRef(void 0), [n, o] = te.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: ft(e.defaultValues),
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
    defaultValues: ft(e.defaultValues) ? void 0 : e.defaultValues
  });
  if (!t.current)
    if (e.formControl)
      t.current = {
        ...e.formControl,
        formState: n
      }, e.defaultValues && !ft(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
    else {
      const { formControl: a, ...i } = fh(e);
      t.current = {
        ...i,
        formState: n
      };
    }
  const s = t.current.control;
  return s._options = e, Xo(() => {
    const a = s._subscribe({
      formState: s._proxyFormState,
      callback: () => o({ ...s._formState }),
      reRenderRoot: !0
    });
    return o((i) => ({
      ...i,
      isReady: !0
    })), s._formState.isReady = !0, a;
  }, [s]), te.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), te.useEffect(() => {
    e.mode && (s._options.mode = e.mode), e.reValidateMode && (s._options.reValidateMode = e.reValidateMode);
  }, [s, e.mode, e.reValidateMode]), te.useEffect(() => {
    e.errors && (s._setErrors(e.errors), s._focusError());
  }, [s, e.errors]), te.useEffect(() => {
    e.shouldUnregister && s._subjects.state.next({
      values: s._getWatch()
    });
  }, [s, e.shouldUnregister]), te.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const a = s._getDirty();
      a !== n.isDirty && s._subjects.state.next({
        isDirty: a
      });
    }
  }, [s, n.isDirty]), te.useEffect(() => {
    var a;
    e.values && !dt(e.values, r.current) ? (s._reset(e.values, {
      keepFieldsRef: !0,
      ...s._options.resetOptions
    }), !((a = s._options.resetOptions) === null || a === void 0) && a.keepIsValid || s._setValid(), r.current = e.values, o((i) => ({ ...i }))) : s._resetDefaultValues();
  }, [s, e.values]), te.useEffect(() => {
    s._state.mount || (s._setValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), t.current.formState = Ou(n, s), t.current;
}
const hh = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let tn = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += hh[r[e] & 63];
  return t;
};
function Ui(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function he(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function gh(e, t) {
  const r = $.createContext(t), n = (s) => {
    const { children: a, ...i } = s, c = $.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ d.jsx(r.Provider, { value: c, children: a });
  };
  n.displayName = e + "Provider";
  function o(s) {
    const a = $.useContext(r);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function $t(e, t = []) {
  let r = [];
  function n(s, a) {
    const i = $.createContext(a), c = r.length;
    r = [...r, a];
    const l = (h) => {
      const { scope: p, children: v, ...w } = h, y = p?.[e]?.[c] || i, m = $.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ d.jsx(y.Provider, { value: m, children: v });
    };
    l.displayName = s + "Provider";
    function u(h, p) {
      const v = p?.[e]?.[c] || i, w = $.useContext(v);
      if (w) return w;
      if (a !== void 0) return a;
      throw new Error(`\`${h}\` must be used within \`${s}\``);
    }
    return [l, u];
  }
  const o = () => {
    const s = r.map((a) => $.createContext(a));
    return function(i) {
      const c = i?.[e] || s;
      return $.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [n, vh(o, ...t)];
}
function vh(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = n.reduce((i, { useScope: c, scopeName: l }) => {
        const h = c(s)[`__scope${l}`];
        return { ...i, ...h };
      }, {});
      return $.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Zi(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Dr(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = Zi(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : Zi(e[o], null);
        }
      };
  };
}
function Pe(...e) {
  return $.useCallback(Dr(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Bi(e) {
  const t = /* @__PURE__ */ yh(e), r = $.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = $.Children.toArray(s), c = i.find(_h);
    if (c) {
      const l = c.props.children, u = i.map((h) => h === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : h);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function yh(e) {
  const t = $.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if ($.isValidElement(o)) {
      const a = xh(o), i = wh(s, o.props);
      return o.type !== $.Fragment && (i.ref = n ? Dr(n, a) : a), $.cloneElement(o, i);
    }
    return $.Children.count(o) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var bh = Symbol("radix.slottable");
function _h(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === bh;
}
function wh(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function xh(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Bu(e) {
  const t = e + "CollectionProvider", [r, n] = $t(t), [o, s] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (y) => {
    const { scope: m, children: _ } = y, f = te.useRef(null), b = te.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d.jsx(o, { scope: m, itemMap: b, collectionRef: f, children: _ });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ Bi(i), l = te.forwardRef(
    (y, m) => {
      const { scope: _, children: f } = y, b = s(i, _), x = Pe(m, b.collectionRef);
      return /* @__PURE__ */ d.jsx(c, { ref: x, children: f });
    }
  );
  l.displayName = i;
  const u = e + "CollectionItemSlot", h = "data-radix-collection-item", p = /* @__PURE__ */ Bi(u), v = te.forwardRef(
    (y, m) => {
      const { scope: _, children: f, ...b } = y, x = te.useRef(null), g = Pe(m, x), E = s(u, _);
      return te.useEffect(() => (E.itemMap.set(x, { ref: x, ...b }), () => void E.itemMap.delete(x))), /* @__PURE__ */ d.jsx(p, { [h]: "", ref: g, children: f });
    }
  );
  v.displayName = u;
  function w(y) {
    const m = s(e + "CollectionConsumer", y);
    return te.useCallback(() => {
      const f = m.collectionRef.current;
      if (!f) return [];
      const b = Array.from(f.querySelectorAll(`[${h}]`));
      return Array.from(m.itemMap.values()).sort(
        (E, S) => b.indexOf(E.ref.current) - b.indexOf(S.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: v },
    w,
    n
  ];
}
var $h = $.createContext(void 0);
function Wa(e) {
  const t = $.useContext($h);
  return e || t || "ltr";
}
// @__NO_SIDE_EFFECTS__
function Eh(e) {
  const t = /* @__PURE__ */ Sh(e), r = $.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = $.Children.toArray(s), c = i.find(jh);
    if (c) {
      const l = c.props.children, u = i.map((h) => h === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : h);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Sh(e) {
  const t = $.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if ($.isValidElement(o)) {
      const a = Rh(o), i = Ch(s, o.props);
      return o.type !== $.Fragment && (i.ref = n ? Dr(n, a) : a), $.cloneElement(o, i);
    }
    return $.Children.count(o) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var kh = Symbol("radix.slottable");
function jh(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === kh;
}
function Ch(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Rh(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Ph = [
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
], Se = Ph.reduce((e, t) => {
  const r = /* @__PURE__ */ Eh(`Primitive.${t}`), n = $.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Ah(e, t) {
  e && Ko.flushSync(() => e.dispatchEvent(t));
}
function Ut(e) {
  const t = $.useRef(e);
  return $.useEffect(() => {
    t.current = e;
  }), $.useMemo(() => (...r) => t.current?.(...r), []);
}
function Nh(e, t = globalThis?.document) {
  const r = Ut(e);
  $.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Th = "DismissableLayer", ba = "dismissableLayer.update", Ih = "dismissableLayer.pointerDownOutside", Oh = "dismissableLayer.focusOutside", Wi, Wu = $.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Qo = $.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...c
    } = e, l = $.useContext(Wu), [u, h] = $.useState(null), p = u?.ownerDocument ?? globalThis?.document, [, v] = $.useState({}), w = Pe(t, (S) => h(S)), y = Array.from(l.layers), [m] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), _ = y.indexOf(m), f = u ? y.indexOf(u) : -1, b = l.layersWithOutsidePointerEventsDisabled.size > 0, x = f >= _, g = zh((S) => {
      const C = S.target, I = [...l.branches].some((q) => q.contains(C));
      !x || I || (o?.(S), a?.(S), S.defaultPrevented || i?.());
    }, p), E = Fh((S) => {
      const C = S.target;
      [...l.branches].some((q) => q.contains(C)) || (s?.(S), a?.(S), S.defaultPrevented || i?.());
    }, p);
    return Nh((S) => {
      f === l.layers.size - 1 && (n?.(S), !S.defaultPrevented && i && (S.preventDefault(), i()));
    }, p), $.useEffect(() => {
      if (u)
        return r && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Wi = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Hi(), () => {
          r && l.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Wi);
        };
    }, [u, p, r, l]), $.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Hi());
    }, [u, l]), $.useEffect(() => {
      const S = () => v({});
      return document.addEventListener(ba, S), () => document.removeEventListener(ba, S);
    }, []), /* @__PURE__ */ d.jsx(
      Se.div,
      {
        ...c,
        ref: w,
        style: {
          pointerEvents: b ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: he(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: he(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: he(
          e.onPointerDownCapture,
          g.onPointerDownCapture
        )
      }
    );
  }
);
Qo.displayName = Th;
var Dh = "DismissableLayerBranch", Mh = $.forwardRef((e, t) => {
  const r = $.useContext(Wu), n = $.useRef(null), o = Pe(t, n);
  return $.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ d.jsx(Se.div, { ...e, ref: o });
});
Mh.displayName = Dh;
function zh(e, t = globalThis?.document) {
  const r = Ut(e), n = $.useRef(!1), o = $.useRef(() => {
  });
  return $.useEffect(() => {
    const s = (i) => {
      if (i.target && !n.current) {
        let c = function() {
          Hu(
            Ih,
            r,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Fh(e, t = globalThis?.document) {
  const r = Ut(e), n = $.useRef(!1);
  return $.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && Hu(Oh, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Hi() {
  const e = new CustomEvent(ba);
  document.dispatchEvent(e);
}
function Hu(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? Ah(o, s) : o.dispatchEvent(s);
}
var zs = 0;
function Gu() {
  $.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Gi()), document.body.insertAdjacentElement("beforeend", e[1] ?? Gi()), zs++, () => {
      zs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), zs--;
    };
  }, []);
}
function Gi() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Fs = "focusScope.autoFocusOnMount", Vs = "focusScope.autoFocusOnUnmount", Ki = { bubbles: !1, cancelable: !0 }, Vh = "FocusScope", Ha = $.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = $.useState(null), l = Ut(o), u = Ut(s), h = $.useRef(null), p = Pe(t, (y) => c(y)), v = $.useRef({
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
        const x = b.target;
        i.contains(x) ? h.current = x : zt(h.current, { select: !0 });
      }, m = function(b) {
        if (v.paused || !i) return;
        const x = b.relatedTarget;
        x !== null && (i.contains(x) || zt(h.current, { select: !0 }));
      }, _ = function(b) {
        if (document.activeElement === document.body)
          for (const g of b)
            g.removedNodes.length > 0 && zt(i);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", m);
      const f = new MutationObserver(_);
      return i && f.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", m), f.disconnect();
      };
    }
  }, [n, i, v.paused]), $.useEffect(() => {
    if (i) {
      Ji.add(v);
      const y = document.activeElement;
      if (!i.contains(y)) {
        const _ = new CustomEvent(Fs, Ki);
        i.addEventListener(Fs, l), i.dispatchEvent(_), _.defaultPrevented || (Lh(Wh(Ku(i)), { select: !0 }), document.activeElement === y && zt(i));
      }
      return () => {
        i.removeEventListener(Fs, l), setTimeout(() => {
          const _ = new CustomEvent(Vs, Ki);
          i.addEventListener(Vs, u), i.dispatchEvent(_), _.defaultPrevented || zt(y ?? document.body, { select: !0 }), i.removeEventListener(Vs, u), Ji.remove(v);
        }, 0);
      };
    }
  }, [i, l, u, v]);
  const w = $.useCallback(
    (y) => {
      if (!r && !n || v.paused) return;
      const m = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, _ = document.activeElement;
      if (m && _) {
        const f = y.currentTarget, [b, x] = qh(f);
        b && x ? !y.shiftKey && _ === x ? (y.preventDefault(), r && zt(b, { select: !0 })) : y.shiftKey && _ === b && (y.preventDefault(), r && zt(x, { select: !0 })) : _ === f && y.preventDefault();
      }
    },
    [r, n, v.paused]
  );
  return /* @__PURE__ */ d.jsx(Se.div, { tabIndex: -1, ...a, ref: p, onKeyDown: w });
});
Ha.displayName = Vh;
function Lh(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (zt(n, { select: t }), document.activeElement !== r) return;
}
function qh(e) {
  const t = Ku(e), r = Yi(t, e), n = Yi(t.reverse(), e);
  return [r, n];
}
function Ku(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function Yi(e, t) {
  for (const r of e)
    if (!Uh(r, { upTo: t })) return r;
}
function Uh(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Zh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function zt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Zh(e) && t && e.select();
  }
}
var Ji = Bh();
function Bh() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && r?.pause(), e = Xi(e, t), e.unshift(t);
    },
    remove(t) {
      e = Xi(e, t), e[0]?.resume();
    }
  };
}
function Xi(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Wh(e) {
  return e.filter((t) => t.tagName !== "A");
}
var We = globalThis?.document ? $.useLayoutEffect : () => {
}, Hh = $[" useId ".trim().toString()] || (() => {
}), Gh = 0;
function Vt(e) {
  const [t, r] = $.useState(Hh());
  return We(() => {
    r((n) => n ?? String(Gh++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Kh = ["top", "right", "bottom", "left"], Zt = Math.min, rt = Math.max, Io = Math.round, gn = Math.floor, _t = (e) => ({
  x: e,
  y: e
}), Yh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Jh = {
  start: "end",
  end: "start"
};
function _a(e, t, r) {
  return rt(e, Zt(t, r));
}
function Pt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function At(e) {
  return e.split("-")[0];
}
function Mr(e) {
  return e.split("-")[1];
}
function Ga(e) {
  return e === "x" ? "y" : "x";
}
function Ka(e) {
  return e === "y" ? "height" : "width";
}
const Xh = /* @__PURE__ */ new Set(["top", "bottom"]);
function bt(e) {
  return Xh.has(At(e)) ? "y" : "x";
}
function Ya(e) {
  return Ga(bt(e));
}
function Qh(e, t, r) {
  r === void 0 && (r = !1);
  const n = Mr(e), o = Ya(e), s = Ka(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = Oo(a)), [a, Oo(a)];
}
function eg(e) {
  const t = Oo(e);
  return [wa(e), t, wa(t)];
}
function wa(e) {
  return e.replace(/start|end/g, (t) => Jh[t]);
}
const Qi = ["left", "right"], ec = ["right", "left"], tg = ["top", "bottom"], rg = ["bottom", "top"];
function ng(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? ec : Qi : t ? Qi : ec;
    case "left":
    case "right":
      return t ? tg : rg;
    default:
      return [];
  }
}
function og(e, t, r, n) {
  const o = Mr(e);
  let s = ng(At(e), r === "start", n);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(wa)))), s;
}
function Oo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Yh[t]);
}
function sg(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Yu(e) {
  return typeof e != "number" ? sg(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Do(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function tc(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = bt(t), a = Ya(t), i = Ka(a), c = At(t), l = s === "y", u = n.x + n.width / 2 - o.width / 2, h = n.y + n.height / 2 - o.height / 2, p = n[i] / 2 - o[i] / 2;
  let v;
  switch (c) {
    case "top":
      v = {
        x: u,
        y: n.y - o.height
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
        y: h
      };
      break;
    case "left":
      v = {
        x: n.x - o.width,
        y: h
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (Mr(t)) {
    case "start":
      v[a] -= p * (r && l ? -1 : 1);
      break;
    case "end":
      v[a] += p * (r && l ? -1 : 1);
      break;
  }
  return v;
}
const ag = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = r, i = s.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let l = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: h
  } = tc(l, n, c), p = n, v = {}, w = 0;
  for (let y = 0; y < i.length; y++) {
    const {
      name: m,
      fn: _
    } = i[y], {
      x: f,
      y: b,
      data: x,
      reset: g
    } = await _({
      x: u,
      y: h,
      initialPlacement: n,
      placement: p,
      strategy: o,
      middlewareData: v,
      rects: l,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = f ?? u, h = b ?? h, v = {
      ...v,
      [m]: {
        ...v[m],
        ...x
      }
    }, g && w <= 50 && (w++, typeof g == "object" && (g.placement && (p = g.placement), g.rects && (l = g.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : g.rects), {
      x: u,
      y: h
    } = tc(l, p, c)), y = -1);
  }
  return {
    x: u,
    y: h,
    placement: p,
    strategy: o,
    middlewareData: v
  };
};
async function rn(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: v = 0
  } = Pt(t, e), w = Yu(v), m = i[p ? h === "floating" ? "reference" : "floating" : h], _ = Do(await s.getClippingRect({
    element: (r = await (s.isElement == null ? void 0 : s.isElement(m))) == null || r ? m : m.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), f = h === "floating" ? {
    x: n,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), x = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, g = Do(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: f,
    offsetParent: b,
    strategy: c
  }) : f);
  return {
    top: (_.top - g.top + w.top) / x.y,
    bottom: (g.bottom - _.bottom + w.bottom) / x.y,
    left: (_.left - g.left + w.left) / x.x,
    right: (g.right - _.right + w.right) / x.x
  };
}
const ig = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Pt(e, t) || {};
    if (l == null)
      return {};
    const h = Yu(u), p = {
      x: r,
      y: n
    }, v = Ya(o), w = Ka(v), y = await a.getDimensions(l), m = v === "y", _ = m ? "top" : "left", f = m ? "bottom" : "right", b = m ? "clientHeight" : "clientWidth", x = s.reference[w] + s.reference[v] - p[v] - s.floating[w], g = p[v] - s.reference[v], E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let S = E ? E[b] : 0;
    (!S || !await (a.isElement == null ? void 0 : a.isElement(E))) && (S = i.floating[b] || s.floating[w]);
    const C = x / 2 - g / 2, I = S / 2 - y[w] / 2 - 1, q = Zt(h[_], I), D = Zt(h[f], I), F = q, U = S - y[w] - D, B = S / 2 - y[w] / 2 + C, Q = _a(F, B, U), K = !c.arrow && Mr(o) != null && B !== Q && s.reference[w] / 2 - (B < F ? q : D) - y[w] / 2 < 0, oe = K ? B < F ? B - F : B - U : 0;
    return {
      [v]: p[v] + oe,
      data: {
        [v]: Q,
        centerOffset: B - Q - oe,
        ...K && {
          alignmentOffset: oe
        }
      },
      reset: K
    };
  }
}), cg = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: p,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: y = !0,
        ...m
      } = Pt(e, t);
      if ((r = s.arrow) != null && r.alignmentOffset)
        return {};
      const _ = At(o), f = bt(i), b = At(i) === i, x = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), g = p || (b || !y ? [Oo(i)] : eg(i)), E = w !== "none";
      !p && E && g.push(...og(i, y, w, x));
      const S = [i, ...g], C = await rn(t, m), I = [];
      let q = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && I.push(C[_]), h) {
        const B = Qh(o, a, x);
        I.push(C[B[0]], C[B[1]]);
      }
      if (q = [...q, {
        placement: o,
        overflows: I
      }], !I.every((B) => B <= 0)) {
        var D, F;
        const B = (((D = s.flip) == null ? void 0 : D.index) || 0) + 1, Q = S[B];
        if (Q && (!(h === "alignment" ? f !== bt(Q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        q.every((V) => bt(V.placement) === f ? V.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: q
            },
            reset: {
              placement: Q
            }
          };
        let K = (F = q.filter((oe) => oe.overflows[0] <= 0).sort((oe, V) => oe.overflows[1] - V.overflows[1])[0]) == null ? void 0 : F.placement;
        if (!K)
          switch (v) {
            case "bestFit": {
              var U;
              const oe = (U = q.filter((V) => {
                if (E) {
                  const fe = bt(V.placement);
                  return fe === f || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  fe === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((fe) => fe > 0).reduce((fe, W) => fe + W, 0)]).sort((V, fe) => V[1] - fe[1])[0]) == null ? void 0 : U[0];
              oe && (K = oe);
              break;
            }
            case "initialPlacement":
              K = i;
              break;
          }
        if (o !== K)
          return {
            reset: {
              placement: K
            }
          };
      }
      return {};
    }
  };
};
function rc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function nc(e) {
  return Kh.some((t) => e[t] >= 0);
}
const lg = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...o
      } = Pt(e, t);
      switch (n) {
        case "referenceHidden": {
          const s = await rn(t, {
            ...o,
            elementContext: "reference"
          }), a = rc(s, r.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: nc(a)
            }
          };
        }
        case "escaped": {
          const s = await rn(t, {
            ...o,
            altBoundary: !0
          }), a = rc(s, r.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: nc(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ju = /* @__PURE__ */ new Set(["left", "top"]);
async function ug(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = At(r), i = Mr(r), c = bt(r) === "y", l = Ju.has(a) ? -1 : 1, u = s && c ? -1 : 1, h = Pt(t, e);
  let {
    mainAxis: p,
    crossAxis: v,
    alignmentAxis: w
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return i && typeof w == "number" && (v = i === "end" ? w * -1 : w), c ? {
    x: v * u,
    y: p * l
  } : {
    x: p * l,
    y: v * u
  };
}
const dg = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = t, c = await ug(t, e);
      return a === ((r = i.offset) == null ? void 0 : r.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, fg = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: i = {
          fn: (m) => {
            let {
              x: _,
              y: f
            } = m;
            return {
              x: _,
              y: f
            };
          }
        },
        ...c
      } = Pt(e, t), l = {
        x: r,
        y: n
      }, u = await rn(t, c), h = bt(At(o)), p = Ga(h);
      let v = l[p], w = l[h];
      if (s) {
        const m = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", f = v + u[m], b = v - u[_];
        v = _a(f, v, b);
      }
      if (a) {
        const m = h === "y" ? "top" : "left", _ = h === "y" ? "bottom" : "right", f = w + u[m], b = w - u[_];
        w = _a(f, w, b);
      }
      const y = i.fn({
        ...t,
        [p]: v,
        [h]: w
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - n,
          enabled: {
            [p]: s,
            [h]: a
          }
        }
      };
    }
  };
}, mg = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Pt(e, t), u = {
        x: r,
        y: n
      }, h = bt(o), p = Ga(h);
      let v = u[p], w = u[h];
      const y = Pt(i, t), m = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (c) {
        const b = p === "y" ? "height" : "width", x = s.reference[p] - s.floating[b] + m.mainAxis, g = s.reference[p] + s.reference[b] - m.mainAxis;
        v < x ? v = x : v > g && (v = g);
      }
      if (l) {
        var _, f;
        const b = p === "y" ? "width" : "height", x = Ju.has(At(o)), g = s.reference[h] - s.floating[b] + (x && ((_ = a.offset) == null ? void 0 : _[h]) || 0) + (x ? 0 : m.crossAxis), E = s.reference[h] + s.reference[b] + (x ? 0 : ((f = a.offset) == null ? void 0 : f[h]) || 0) - (x ? m.crossAxis : 0);
        w < g ? w = g : w > E && (w = E);
      }
      return {
        [p]: v,
        [h]: w
      };
    }
  };
}, pg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...l
      } = Pt(e, t), u = await rn(t, l), h = At(o), p = Mr(o), v = bt(o) === "y", {
        width: w,
        height: y
      } = s.floating;
      let m, _;
      h === "top" || h === "bottom" ? (m = h, _ = p === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (_ = h, m = p === "end" ? "top" : "bottom");
      const f = y - u.top - u.bottom, b = w - u.left - u.right, x = Zt(y - u[m], f), g = Zt(w - u[_], b), E = !t.middlewareData.shift;
      let S = x, C = g;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (C = b), (n = t.middlewareData.shift) != null && n.enabled.y && (S = f), E && !p) {
        const q = rt(u.left, 0), D = rt(u.right, 0), F = rt(u.top, 0), U = rt(u.bottom, 0);
        v ? C = w - 2 * (q !== 0 || D !== 0 ? q + D : rt(u.left, u.right)) : S = y - 2 * (F !== 0 || U !== 0 ? F + U : rt(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: C,
        availableHeight: S
      });
      const I = await a.getDimensions(i.floating);
      return w !== I.width || y !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function es() {
  return typeof window < "u";
}
function zr(e) {
  return Xu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ot(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Et(e) {
  var t;
  return (t = (Xu(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Xu(e) {
  return es() ? e instanceof Node || e instanceof ot(e).Node : !1;
}
function mt(e) {
  return es() ? e instanceof Element || e instanceof ot(e).Element : !1;
}
function wt(e) {
  return es() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1;
}
function oc(e) {
  return !es() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot;
}
const hg = /* @__PURE__ */ new Set(["inline", "contents"]);
function cn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !hg.has(o);
}
const gg = /* @__PURE__ */ new Set(["table", "td", "th"]);
function vg(e) {
  return gg.has(zr(e));
}
const yg = [":popover-open", ":modal"];
function ts(e) {
  return yg.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const bg = ["transform", "translate", "scale", "rotate", "perspective"], _g = ["transform", "translate", "scale", "rotate", "perspective", "filter"], wg = ["paint", "layout", "strict", "content"];
function Ja(e) {
  const t = Xa(), r = mt(e) ? pt(e) : e;
  return bg.some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || _g.some((n) => (r.willChange || "").includes(n)) || wg.some((n) => (r.contain || "").includes(n));
}
function xg(e) {
  let t = Bt(e);
  for (; wt(t) && !Nr(t); ) {
    if (Ja(t))
      return t;
    if (ts(t))
      return null;
    t = Bt(t);
  }
  return null;
}
function Xa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const $g = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Nr(e) {
  return $g.has(zr(e));
}
function pt(e) {
  return ot(e).getComputedStyle(e);
}
function rs(e) {
  return mt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Bt(e) {
  if (zr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    oc(e) && e.host || // Fallback.
    Et(e)
  );
  return oc(t) ? t.host : t;
}
function Qu(e) {
  const t = Bt(e);
  return Nr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : wt(t) && cn(t) ? t : Qu(t);
}
function nn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Qu(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ot(o);
  if (s) {
    const i = xa(a);
    return t.concat(a, a.visualViewport || [], cn(o) ? o : [], i && r ? nn(i) : []);
  }
  return t.concat(o, nn(o, [], r));
}
function xa(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ed(e) {
  const t = pt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = wt(e), s = o ? e.offsetWidth : r, a = o ? e.offsetHeight : n, i = Io(r) !== s || Io(n) !== a;
  return i && (r = s, n = a), {
    width: r,
    height: n,
    $: i
  };
}
function Qa(e) {
  return mt(e) ? e : e.contextElement;
}
function Cr(e) {
  const t = Qa(e);
  if (!wt(t))
    return _t(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = ed(t);
  let a = (s ? Io(r.width) : r.width) / n, i = (s ? Io(r.height) : r.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const Eg = /* @__PURE__ */ _t(0);
function td(e) {
  const t = ot(e);
  return !Xa() || !t.visualViewport ? Eg : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Sg(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== ot(e) ? !1 : t;
}
function nr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = Qa(e);
  let a = _t(1);
  t && (n ? mt(n) && (a = Cr(n)) : a = Cr(e));
  const i = Sg(s, r, n) ? td(s) : _t(0);
  let c = (o.left + i.x) / a.x, l = (o.top + i.y) / a.y, u = o.width / a.x, h = o.height / a.y;
  if (s) {
    const p = ot(s), v = n && mt(n) ? ot(n) : n;
    let w = p, y = xa(w);
    for (; y && n && v !== w; ) {
      const m = Cr(y), _ = y.getBoundingClientRect(), f = pt(y), b = _.left + (y.clientLeft + parseFloat(f.paddingLeft)) * m.x, x = _.top + (y.clientTop + parseFloat(f.paddingTop)) * m.y;
      c *= m.x, l *= m.y, u *= m.x, h *= m.y, c += b, l += x, w = ot(y), y = xa(w);
    }
  }
  return Do({
    width: u,
    height: h,
    x: c,
    y: l
  });
}
function ns(e, t) {
  const r = rs(e).scrollLeft;
  return t ? t.left + r : nr(Et(e)).left + r;
}
function rd(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - ns(e, r), o = r.top + t.scrollTop;
  return {
    x: n,
    y: o
  };
}
function kg(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", a = Et(n), i = t ? ts(t.floating) : !1;
  if (n === a || i && s)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = _t(1);
  const u = _t(0), h = wt(n);
  if ((h || !h && !s) && ((zr(n) !== "body" || cn(a)) && (c = rs(n)), wt(n))) {
    const v = nr(n);
    l = Cr(n), u.x = v.x + n.clientLeft, u.y = v.y + n.clientTop;
  }
  const p = a && !h && !s ? rd(a, c) : _t(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - c.scrollLeft * l.x + u.x + p.x,
    y: r.y * l.y - c.scrollTop * l.y + u.y + p.y
  };
}
function jg(e) {
  return Array.from(e.getClientRects());
}
function Cg(e) {
  const t = Et(e), r = rs(e), n = e.ownerDocument.body, o = rt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = rt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + ns(e);
  const i = -r.scrollTop;
  return pt(n).direction === "rtl" && (a += rt(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const sc = 25;
function Rg(e, t) {
  const r = ot(e), n = Et(e), o = r.visualViewport;
  let s = n.clientWidth, a = n.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const u = Xa();
    (!u || u && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = ns(n);
  if (l <= 0) {
    const u = n.ownerDocument, h = u.body, p = getComputedStyle(h), v = u.compatMode === "CSS1Compat" && parseFloat(p.marginLeft) + parseFloat(p.marginRight) || 0, w = Math.abs(n.clientWidth - h.clientWidth - v);
    w <= sc && (s -= w);
  } else l <= sc && (s += l);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
const Pg = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Ag(e, t) {
  const r = nr(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, s = wt(e) ? Cr(e) : _t(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, l = n * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: l
  };
}
function ac(e, t, r) {
  let n;
  if (t === "viewport")
    n = Rg(e, r);
  else if (t === "document")
    n = Cg(Et(e));
  else if (mt(t))
    n = Ag(t, r);
  else {
    const o = td(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Do(n);
}
function nd(e, t) {
  const r = Bt(e);
  return r === t || !mt(r) || Nr(r) ? !1 : pt(r).position === "fixed" || nd(r, t);
}
function Ng(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = nn(e, [], !1).filter((i) => mt(i) && zr(i) !== "body"), o = null;
  const s = pt(e).position === "fixed";
  let a = s ? Bt(e) : e;
  for (; mt(a) && !Nr(a); ) {
    const i = pt(a), c = Ja(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && Pg.has(o.position) || cn(a) && !c && nd(e, a)) ? n = n.filter((u) => u !== a) : o = i, a = Bt(a);
  }
  return t.set(e, n), n;
}
function Tg(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const a = [...r === "clippingAncestors" ? ts(t) ? [] : Ng(t, this._c) : [].concat(r), n], i = a[0], c = a.reduce((l, u) => {
    const h = ac(t, u, o);
    return l.top = rt(h.top, l.top), l.right = Zt(h.right, l.right), l.bottom = Zt(h.bottom, l.bottom), l.left = rt(h.left, l.left), l;
  }, ac(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function Ig(e) {
  const {
    width: t,
    height: r
  } = ed(e);
  return {
    width: t,
    height: r
  };
}
function Og(e, t, r) {
  const n = wt(t), o = Et(t), s = r === "fixed", a = nr(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = _t(0);
  function l() {
    c.x = ns(o);
  }
  if (n || !n && !s)
    if ((zr(t) !== "body" || cn(o)) && (i = rs(t)), n) {
      const v = nr(t, !0, s, t);
      c.x = v.x + t.clientLeft, c.y = v.y + t.clientTop;
    } else o && l();
  s && !n && o && l();
  const u = o && !n && !s ? rd(o, i) : _t(0), h = a.left + i.scrollLeft - c.x - u.x, p = a.top + i.scrollTop - c.y - u.y;
  return {
    x: h,
    y: p,
    width: a.width,
    height: a.height
  };
}
function Ls(e) {
  return pt(e).position === "static";
}
function ic(e, t) {
  if (!wt(e) || pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Et(e) === r && (r = r.ownerDocument.body), r;
}
function od(e, t) {
  const r = ot(e);
  if (ts(e))
    return r;
  if (!wt(e)) {
    let o = Bt(e);
    for (; o && !Nr(o); ) {
      if (mt(o) && !Ls(o))
        return o;
      o = Bt(o);
    }
    return r;
  }
  let n = ic(e, t);
  for (; n && vg(n) && Ls(n); )
    n = ic(n, t);
  return n && Nr(n) && Ls(n) && !Ja(n) ? r : n || xg(e) || r;
}
const Dg = async function(e) {
  const t = this.getOffsetParent || od, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: Og(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Mg(e) {
  return pt(e).direction === "rtl";
}
const zg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: kg,
  getDocumentElement: Et,
  getClippingRect: Tg,
  getOffsetParent: od,
  getElementRects: Dg,
  getClientRects: jg,
  getDimensions: Ig,
  getScale: Cr,
  isElement: mt,
  isRTL: Mg
};
function sd(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Fg(e, t) {
  let r = null, n;
  const o = Et(e);
  function s() {
    var i;
    clearTimeout(n), (i = r) == null || i.disconnect(), r = null;
  }
  function a(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), s();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: h,
      width: p,
      height: v
    } = l;
    if (i || t(), !p || !v)
      return;
    const w = gn(h), y = gn(o.clientWidth - (u + p)), m = gn(o.clientHeight - (h + v)), _ = gn(u), b = {
      rootMargin: -w + "px " + -y + "px " + -m + "px " + -_ + "px",
      threshold: rt(0, Zt(1, c)) || 1
    };
    let x = !0;
    function g(E) {
      const S = E[0].intersectionRatio;
      if (S !== c) {
        if (!x)
          return a();
        S ? a(!1, S) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      S === 1 && !sd(l, e.getBoundingClientRect()) && a(), x = !1;
    }
    try {
      r = new IntersectionObserver(g, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(g, b);
    }
    r.observe(e);
  }
  return a(!0), s;
}
function Vg(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, l = Qa(e), u = o || s ? [...l ? nn(l) : [], ...nn(t)] : [];
  u.forEach((_) => {
    o && _.addEventListener("scroll", r, {
      passive: !0
    }), s && _.addEventListener("resize", r);
  });
  const h = l && i ? Fg(l, r) : null;
  let p = -1, v = null;
  a && (v = new ResizeObserver((_) => {
    let [f] = _;
    f && f.target === l && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var b;
      (b = v) == null || b.observe(t);
    })), r();
  }), l && !c && v.observe(l), v.observe(t));
  let w, y = c ? nr(e) : null;
  c && m();
  function m() {
    const _ = nr(e);
    y && !sd(y, _) && r(), y = _, w = requestAnimationFrame(m);
  }
  return r(), () => {
    var _;
    u.forEach((f) => {
      o && f.removeEventListener("scroll", r), s && f.removeEventListener("resize", r);
    }), h?.(), (_ = v) == null || _.disconnect(), v = null, c && cancelAnimationFrame(w);
  };
}
const Lg = dg, qg = fg, Ug = cg, Zg = pg, Bg = lg, cc = ig, Wg = mg, Hg = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: zg,
    ...r
  }, s = {
    ...o.platform,
    _c: n
  };
  return ag(e, t, {
    ...o,
    platform: s
  });
};
var Gg = typeof document < "u", Kg = function() {
}, Co = Gg ? Lp : Kg;
function Mo(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Mo(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const s = o[n];
      if (!(s === "_owner" && e.$$typeof) && !Mo(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ad(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lc(e, t) {
  const r = ad(e);
  return Math.round(t * r) / r;
}
function qs(e) {
  const t = $.useRef(e);
  return Co(() => {
    t.current = e;
  }), t;
}
function Yg(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, h] = $.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, v] = $.useState(n);
  Mo(p, n) || v(n);
  const [w, y] = $.useState(null), [m, _] = $.useState(null), f = $.useCallback((V) => {
    V !== E.current && (E.current = V, y(V));
  }, []), b = $.useCallback((V) => {
    V !== S.current && (S.current = V, _(V));
  }, []), x = s || w, g = a || m, E = $.useRef(null), S = $.useRef(null), C = $.useRef(u), I = c != null, q = qs(c), D = qs(o), F = qs(l), U = $.useCallback(() => {
    if (!E.current || !S.current)
      return;
    const V = {
      placement: t,
      strategy: r,
      middleware: p
    };
    D.current && (V.platform = D.current), Hg(E.current, S.current, V).then((fe) => {
      const W = {
        ...fe,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: F.current !== !1
      };
      B.current && !Mo(C.current, W) && (C.current = W, Ko.flushSync(() => {
        h(W);
      }));
    });
  }, [p, t, r, D, F]);
  Co(() => {
    l === !1 && C.current.isPositioned && (C.current.isPositioned = !1, h((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [l]);
  const B = $.useRef(!1);
  Co(() => (B.current = !0, () => {
    B.current = !1;
  }), []), Co(() => {
    if (x && (E.current = x), g && (S.current = g), x && g) {
      if (q.current)
        return q.current(x, g, U);
      U();
    }
  }, [x, g, U, q, I]);
  const Q = $.useMemo(() => ({
    reference: E,
    floating: S,
    setReference: f,
    setFloating: b
  }), [f, b]), K = $.useMemo(() => ({
    reference: x,
    floating: g
  }), [x, g]), oe = $.useMemo(() => {
    const V = {
      position: r,
      left: 0,
      top: 0
    };
    if (!K.floating)
      return V;
    const fe = lc(K.floating, u.x), W = lc(K.floating, u.y);
    return i ? {
      ...V,
      transform: "translate(" + fe + "px, " + W + "px)",
      ...ad(K.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: fe,
      top: W
    };
  }, [r, i, K.floating, u.x, u.y]);
  return $.useMemo(() => ({
    ...u,
    update: U,
    refs: Q,
    elements: K,
    floatingStyles: oe
  }), [u, U, Q, K, oe]);
}
const Jg = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? cc({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? cc({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, Xg = (e, t) => ({
  ...Lg(e),
  options: [e, t]
}), Qg = (e, t) => ({
  ...qg(e),
  options: [e, t]
}), ev = (e, t) => ({
  ...Wg(e),
  options: [e, t]
}), tv = (e, t) => ({
  ...Ug(e),
  options: [e, t]
}), rv = (e, t) => ({
  ...Zg(e),
  options: [e, t]
}), nv = (e, t) => ({
  ...Bg(e),
  options: [e, t]
}), ov = (e, t) => ({
  ...Jg(e),
  options: [e, t]
});
var sv = "Arrow", id = $.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ d.jsx(
    Se.svg,
    {
      ...s,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ d.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
id.displayName = sv;
var av = id;
function ei(e) {
  const [t, r] = $.useState(void 0);
  return We(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
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
var ti = "Popper", [cd, os] = $t(ti), [iv, ld] = cd(ti), ud = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = $.useState(null);
  return /* @__PURE__ */ d.jsx(iv, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
ud.displayName = ti;
var dd = "PopperAnchor", fd = $.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, s = ld(dd, r), a = $.useRef(null), i = Pe(t, a), c = $.useRef(null);
    return $.useEffect(() => {
      const l = c.current;
      c.current = n?.current || a.current, l !== c.current && s.onAnchorChange(c.current);
    }), n ? null : /* @__PURE__ */ d.jsx(Se.div, { ...o, ref: i });
  }
);
fd.displayName = dd;
var ri = "PopperContent", [cv, lv] = cd(ri), md = $.forwardRef(
  (e, t) => {
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: h = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: w,
      ...y
    } = e, m = ld(ri, r), [_, f] = $.useState(null), b = Pe(t, (z) => f(z)), [x, g] = $.useState(null), E = ei(x), S = E?.width ?? 0, C = E?.height ?? 0, I = n + (s !== "center" ? "-" + s : ""), q = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, D = Array.isArray(l) ? l : [l], F = D.length > 0, U = {
      padding: q,
      boundary: D.filter(dv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: F
    }, { refs: B, floatingStyles: Q, placement: K, isPositioned: oe, middlewareData: V } = Yg({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...z) => Vg(...z, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: m.anchor
      },
      middleware: [
        Xg({ mainAxis: o + C, alignmentAxis: a }),
        c && Qg({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? ev() : void 0,
          ...U
        }),
        c && tv({ ...U }),
        rv({
          ...U,
          apply: ({ elements: z, rects: Y, availableWidth: le, availableHeight: se }) => {
            const { width: A, height: T } = Y.reference, H = z.floating.style;
            H.setProperty("--radix-popper-available-width", `${le}px`), H.setProperty("--radix-popper-available-height", `${se}px`), H.setProperty("--radix-popper-anchor-width", `${A}px`), H.setProperty("--radix-popper-anchor-height", `${T}px`);
          }
        }),
        x && ov({ element: x, padding: i }),
        fv({ arrowWidth: S, arrowHeight: C }),
        p && nv({ strategy: "referenceHidden", ...U })
      ]
    }), [fe, W] = gd(K), j = Ut(w);
    We(() => {
      oe && j?.();
    }, [oe, j]);
    const M = V.arrow?.x, N = V.arrow?.y, k = V.arrow?.centerOffset !== 0, [R, L] = $.useState();
    return We(() => {
      _ && L(window.getComputedStyle(_).zIndex);
    }, [_]), /* @__PURE__ */ d.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: oe ? Q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: R,
          "--radix-popper-transform-origin": [
            V.transformOrigin?.x,
            V.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...V.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d.jsx(
          cv,
          {
            scope: r,
            placedSide: fe,
            onArrowChange: g,
            arrowX: M,
            arrowY: N,
            shouldHideArrow: k,
            children: /* @__PURE__ */ d.jsx(
              Se.div,
              {
                "data-side": fe,
                "data-align": W,
                ...y,
                ref: b,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: oe ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
md.displayName = ri;
var pd = "PopperArrow", uv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, hd = $.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, s = lv(pd, n), a = uv[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ d.jsx(
          av,
          {
            ...o,
            ref: r,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
hd.displayName = pd;
function dv(e) {
  return e !== null;
}
var fv = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: r, rects: n, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, u] = gd(r), h = { start: "0%", center: "50%", end: "100%" }[u], p = (o.arrow?.x ?? 0) + i / 2, v = (o.arrow?.y ?? 0) + c / 2;
    let w = "", y = "";
    return l === "bottom" ? (w = a ? h : `${p}px`, y = `${-c}px`) : l === "top" ? (w = a ? h : `${p}px`, y = `${n.floating.height + c}px`) : l === "right" ? (w = `${-c}px`, y = a ? h : `${v}px`) : l === "left" && (w = `${n.floating.width + c}px`, y = a ? h : `${v}px`), { data: { x: w, y } };
  }
});
function gd(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var vd = ud, yd = fd, bd = md, _d = hd, mv = "Portal", ss = $.forwardRef((e, t) => {
  const { container: r, ...n } = e, [o, s] = $.useState(!1);
  We(() => s(!0), []);
  const a = r || o && globalThis?.document?.body;
  return a ? Wp.createPortal(/* @__PURE__ */ d.jsx(Se.div, { ...n, ref: t }), a) : null;
});
ss.displayName = mv;
// @__NO_SIDE_EFFECTS__
function pv(e) {
  const t = /* @__PURE__ */ hv(e), r = $.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = $.Children.toArray(s), c = i.find(vv);
    if (c) {
      const l = c.props.children, u = i.map((h) => h === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : h);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function hv(e) {
  const t = $.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if ($.isValidElement(o)) {
      const a = bv(o), i = yv(s, o.props);
      return o.type !== $.Fragment && (i.ref = n ? Dr(n, a) : a), $.cloneElement(o, i);
    }
    return $.Children.count(o) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var gv = Symbol("radix.slottable");
function vv(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gv;
}
function yv(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function bv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var _v = $[" useInsertionEffect ".trim().toString()] || We;
function or({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, a] = wv({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, c = i ? e : o;
  {
    const u = $.useRef(e !== void 0);
    $.useEffect(() => {
      const h = u.current;
      h !== i && console.warn(
        `${n} is changing from ${h ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = i;
    }, [i, n]);
  }
  const l = $.useCallback(
    (u) => {
      if (i) {
        const h = xv(u) ? u(e) : u;
        h !== e && a.current?.(h);
      } else
        s(u);
    },
    [i, e, s, a]
  );
  return [c, l];
}
function wv({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = $.useState(e), o = $.useRef(r), s = $.useRef(t);
  return _v(() => {
    s.current = t;
  }, [t]), $.useEffect(() => {
    o.current !== r && (s.current?.(r), o.current = r);
  }, [r, o]), [r, n, s];
}
function xv(e) {
  return typeof e == "function";
}
function ni(e) {
  const t = $.useRef({ value: e, previous: e });
  return $.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var wd = Object.freeze({
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
}), $v = "VisuallyHidden", xd = $.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(
    Se.span,
    {
      ...e,
      ref: t,
      style: { ...wd, ...e.style }
    }
  )
);
xd.displayName = $v;
var Ev = xd, Sv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, fr = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), yn = {}, Us = 0, $d = function(e) {
  return e && (e.host || $d(e.parentNode));
}, kv = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = $d(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, jv = function(e, t, r, n) {
  var o = kv(t, Array.isArray(e) ? e : [e]);
  yn[r] || (yn[r] = /* @__PURE__ */ new WeakMap());
  var s = yn[r], a = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(h) {
    !h || i.has(h) || (i.add(h), l(h.parentNode));
  };
  o.forEach(l);
  var u = function(h) {
    !h || c.has(h) || Array.prototype.forEach.call(h.children, function(p) {
      if (i.has(p))
        u(p);
      else
        try {
          var v = p.getAttribute(n), w = v !== null && v !== "false", y = (fr.get(p) || 0) + 1, m = (s.get(p) || 0) + 1;
          fr.set(p, y), s.set(p, m), a.push(p), y === 1 && w && vn.set(p, !0), m === 1 && p.setAttribute(r, "true"), w || p.setAttribute(n, "true");
        } catch (_) {
          console.error("aria-hidden: cannot operate on ", p, _);
        }
    });
  };
  return u(t), i.clear(), Us++, function() {
    a.forEach(function(h) {
      var p = fr.get(h) - 1, v = s.get(h) - 1;
      fr.set(h, p), s.set(h, v), p || (vn.has(h) || h.removeAttribute(n), vn.delete(h)), v || h.removeAttribute(r);
    }), Us--, Us || (fr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), yn = {});
  };
}, Ed = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Sv(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), jv(n, o, r, "aria-hidden")) : function() {
    return null;
  };
}, yt = function() {
  return yt = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, yt.apply(this, arguments);
};
function Sd(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Cv(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Ro = "right-scroll-bar-position", Po = "width-before-scroll-bar", Rv = "with-scroll-bars-hidden", Pv = "--removed-body-scroll-bar-size";
function Zs(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Av(e, t) {
  var r = kr(function() {
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
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Nv = typeof window < "u" ? $.useLayoutEffect : $.useEffect, uc = /* @__PURE__ */ new WeakMap();
function Tv(e, t) {
  var r = Av(null, function(n) {
    return e.forEach(function(o) {
      return Zs(o, n);
    });
  });
  return Nv(function() {
    var n = uc.get(r);
    if (n) {
      var o = new Set(n), s = new Set(e), a = r.current;
      o.forEach(function(i) {
        s.has(i) || Zs(i, null);
      }), s.forEach(function(i) {
        o.has(i) || Zs(i, a);
      });
    }
    uc.set(r, e);
  }, [e]), r;
}
function Iv(e) {
  return e;
}
function Ov(e, t) {
  t === void 0 && (t = Iv);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, n);
      return r.push(a), function() {
        r = r.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(s);
      }
      r = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var a = [];
      if (r.length) {
        var i = r;
        r = [], i.forEach(s), a = r;
      }
      var c = function() {
        var u = a;
        a = [], u.forEach(s);
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
  return o;
}
function Dv(e) {
  e === void 0 && (e = {});
  var t = Ov(null);
  return t.options = yt({ async: !0, ssr: !1 }, e), t;
}
var kd = function(e) {
  var t = e.sideCar, r = Sd(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return $.createElement(n, yt({}, r));
};
kd.isSideCarExport = !0;
function Mv(e, t) {
  return e.useMedium(t), kd;
}
var jd = Dv(), Bs = function() {
}, as = $.forwardRef(function(e, t) {
  var r = $.useRef(null), n = $.useState({
    onScrollCapture: Bs,
    onWheelCapture: Bs,
    onTouchMoveCapture: Bs
  }), o = n[0], s = n[1], a = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, h = e.shards, p = e.sideCar, v = e.noRelative, w = e.noIsolation, y = e.inert, m = e.allowPinchZoom, _ = e.as, f = _ === void 0 ? "div" : _, b = e.gapMode, x = Sd(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), g = p, E = Tv([r, t]), S = yt(yt({}, x), o);
  return $.createElement(
    $.Fragment,
    null,
    u && $.createElement(g, { sideCar: jd, removeScrollBar: l, shards: h, noRelative: v, noIsolation: w, inert: y, setCallbacks: s, allowPinchZoom: !!m, lockRef: r, gapMode: b }),
    a ? $.cloneElement($.Children.only(i), yt(yt({}, S), { ref: E })) : $.createElement(f, yt({}, S, { className: c, ref: E }), i)
  );
});
as.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
as.classNames = {
  fullWidth: Po,
  zeroRight: Ro
};
var zv = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Fv() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = zv();
  return t && e.setAttribute("nonce", t), e;
}
function Vv(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Lv(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var qv = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Fv()) && (Vv(t, r), Lv(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Uv = function() {
  var e = qv();
  return function(t, r) {
    $.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Cd = function() {
  var e = Uv(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, Zv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ws = function(e) {
  return parseInt(e || "", 10) || 0;
}, Bv = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ws(r), Ws(n), Ws(o)];
}, Wv = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Zv;
  var t = Bv(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Hv = Cd(), Rr = "data-scroll-locked", Gv = function(e, t, r, n) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Rv, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(i, "px ").concat(n, `;
  }
  body[`).concat(Rr, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(i, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ro, ` {
    right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(Po, ` {
    margin-right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(Ro, " .").concat(Ro, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Po, " .").concat(Po, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Rr, `] {
    `).concat(Pv, ": ").concat(i, `px;
  }
`);
}, dc = function() {
  var e = parseInt(document.body.getAttribute(Rr) || "0", 10);
  return isFinite(e) ? e : 0;
}, Kv = function() {
  $.useEffect(function() {
    return document.body.setAttribute(Rr, (dc() + 1).toString()), function() {
      var e = dc() - 1;
      e <= 0 ? document.body.removeAttribute(Rr) : document.body.setAttribute(Rr, e.toString());
    };
  }, []);
}, Yv = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  Kv();
  var s = $.useMemo(function() {
    return Wv(o);
  }, [o]);
  return $.createElement(Hv, { styles: Gv(s, !t, o, r ? "" : "!important") });
}, $a = !1;
if (typeof window < "u")
  try {
    var bn = Object.defineProperty({}, "passive", {
      get: function() {
        return $a = !0, !0;
      }
    });
    window.addEventListener("test", bn, bn), window.removeEventListener("test", bn, bn);
  } catch {
    $a = !1;
  }
var mr = $a ? { passive: !1 } : !1, Jv = function(e) {
  return e.tagName === "TEXTAREA";
}, Rd = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Jv(e) && r[t] === "visible")
  );
}, Xv = function(e) {
  return Rd(e, "overflowY");
}, Qv = function(e) {
  return Rd(e, "overflowX");
}, fc = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = Pd(e, n);
    if (o) {
      var s = Ad(e, n), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, ey = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, ty = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Pd = function(e, t) {
  return e === "v" ? Xv(t) : Qv(t);
}, Ad = function(e, t) {
  return e === "v" ? ey(t) : ty(t);
}, ry = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ny = function(e, t, r, n, o) {
  var s = ry(e, window.getComputedStyle(t).direction), a = s * n, i = r.target, c = t.contains(i), l = !1, u = a > 0, h = 0, p = 0;
  do {
    if (!i)
      break;
    var v = Ad(e, i), w = v[0], y = v[1], m = v[2], _ = y - m - s * w;
    (w || _) && Pd(e, i) && (h += _, p += w);
    var f = i.parentNode;
    i = f && f.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? f.host : f;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && Math.abs(h) < 1 || !u && Math.abs(p) < 1) && (l = !0), l;
}, _n = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, mc = function(e) {
  return [e.deltaX, e.deltaY];
}, pc = function(e) {
  return e && "current" in e ? e.current : e;
}, oy = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, sy = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ay = 0, pr = [];
function iy(e) {
  var t = $.useRef([]), r = $.useRef([0, 0]), n = $.useRef(), o = $.useState(ay++)[0], s = $.useState(Cd)[0], a = $.useRef(e);
  $.useEffect(function() {
    a.current = e;
  }, [e]), $.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var y = Cv([e.lockRef.current], (e.shards || []).map(pc), !0).filter(Boolean);
      return y.forEach(function(m) {
        return m.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), y.forEach(function(m) {
          return m.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = $.useCallback(function(y, m) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !a.current.allowPinchZoom;
    var _ = _n(y), f = r.current, b = "deltaX" in y ? y.deltaX : f[0] - _[0], x = "deltaY" in y ? y.deltaY : f[1] - _[1], g, E = y.target, S = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in y && S === "h" && E.type === "range")
      return !1;
    var C = fc(S, E);
    if (!C)
      return !0;
    if (C ? g = S : (g = S === "v" ? "h" : "v", C = fc(S, E)), !C)
      return !1;
    if (!n.current && "changedTouches" in y && (b || x) && (n.current = g), !g)
      return !0;
    var I = n.current || g;
    return ny(I, m, y, I === "h" ? b : x);
  }, []), c = $.useCallback(function(y) {
    var m = y;
    if (!(!pr.length || pr[pr.length - 1] !== s)) {
      var _ = "deltaY" in m ? mc(m) : _n(m), f = t.current.filter(function(g) {
        return g.name === m.type && (g.target === m.target || m.target === g.shadowParent) && oy(g.delta, _);
      })[0];
      if (f && f.should) {
        m.cancelable && m.preventDefault();
        return;
      }
      if (!f) {
        var b = (a.current.shards || []).map(pc).filter(Boolean).filter(function(g) {
          return g.contains(m.target);
        }), x = b.length > 0 ? i(m, b[0]) : !a.current.noIsolation;
        x && m.cancelable && m.preventDefault();
      }
    }
  }, []), l = $.useCallback(function(y, m, _, f) {
    var b = { name: y, delta: m, target: _, should: f, shadowParent: cy(_) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), u = $.useCallback(function(y) {
    r.current = _n(y), n.current = void 0;
  }, []), h = $.useCallback(function(y) {
    l(y.type, mc(y), y.target, i(y, e.lockRef.current));
  }, []), p = $.useCallback(function(y) {
    l(y.type, _n(y), y.target, i(y, e.lockRef.current));
  }, []);
  $.useEffect(function() {
    return pr.push(s), e.setCallbacks({
      onScrollCapture: h,
      onWheelCapture: h,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, mr), document.addEventListener("touchmove", c, mr), document.addEventListener("touchstart", u, mr), function() {
      pr = pr.filter(function(y) {
        return y !== s;
      }), document.removeEventListener("wheel", c, mr), document.removeEventListener("touchmove", c, mr), document.removeEventListener("touchstart", u, mr);
    };
  }, []);
  var v = e.removeScrollBar, w = e.inert;
  return $.createElement(
    $.Fragment,
    null,
    w ? $.createElement(s, { styles: sy(o) }) : null,
    v ? $.createElement(Yv, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function cy(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const ly = Mv(jd, iy);
var oi = $.forwardRef(function(e, t) {
  return $.createElement(as, yt({}, e, { ref: t, sideCar: ly }));
});
oi.classNames = as.classNames;
var uy = [" ", "Enter", "ArrowUp", "ArrowDown"], dy = [" ", "Enter"], sr = "Select", [is, cs, fy] = Bu(sr), [Fr] = $t(sr, [
  fy,
  os
]), ls = os(), [my, Gt] = Fr(sr), [py, hy] = Fr(sr), Nd = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: c,
    dir: l,
    name: u,
    autoComplete: h,
    disabled: p,
    required: v,
    form: w
  } = e, y = ls(t), [m, _] = $.useState(null), [f, b] = $.useState(null), [x, g] = $.useState(!1), E = Wa(l), [S, C] = or({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: sr
  }), [I, q] = or({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: sr
  }), D = $.useRef(null), F = m ? w || !!m.closest("form") : !0, [U, B] = $.useState(/* @__PURE__ */ new Set()), Q = Array.from(U).map((K) => K.props.value).join(";");
  return /* @__PURE__ */ d.jsx(vd, { ...y, children: /* @__PURE__ */ d.jsxs(
    my,
    {
      required: v,
      scope: t,
      trigger: m,
      onTriggerChange: _,
      valueNode: f,
      onValueNodeChange: b,
      valueNodeHasChildren: x,
      onValueNodeHasChildrenChange: g,
      contentId: Vt(),
      value: I,
      onValueChange: q,
      open: S,
      onOpenChange: C,
      dir: E,
      triggerPointerDownPosRef: D,
      disabled: p,
      children: [
        /* @__PURE__ */ d.jsx(is.Provider, { scope: t, children: /* @__PURE__ */ d.jsx(
          py,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: $.useCallback((K) => {
              B((oe) => new Set(oe).add(K));
            }, []),
            onNativeOptionRemove: $.useCallback((K) => {
              B((oe) => {
                const V = new Set(oe);
                return V.delete(K), V;
              });
            }, []),
            children: r
          }
        ) }),
        F ? /* @__PURE__ */ d.jsxs(
          ef,
          {
            "aria-hidden": !0,
            required: v,
            tabIndex: -1,
            name: u,
            autoComplete: h,
            value: I,
            onChange: (K) => q(K.target.value),
            disabled: p,
            form: w,
            children: [
              I === void 0 ? /* @__PURE__ */ d.jsx("option", { value: "" }) : null,
              Array.from(U)
            ]
          },
          Q
        ) : null
      ]
    }
  ) });
};
Nd.displayName = sr;
var Td = "SelectTrigger", Id = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, s = ls(r), a = Gt(Td, r), i = a.disabled || n, c = Pe(t, a.onTriggerChange), l = cs(r), u = $.useRef("touch"), [h, p, v] = rf((y) => {
      const m = l().filter((b) => !b.disabled), _ = m.find((b) => b.value === a.value), f = nf(m, y, _);
      f !== void 0 && a.onValueChange(f.value);
    }), w = (y) => {
      i || (a.onOpenChange(!0), v()), y && (a.triggerPointerDownPosRef.current = {
        x: Math.round(y.pageX),
        y: Math.round(y.pageY)
      });
    };
    return /* @__PURE__ */ d.jsx(yd, { asChild: !0, ...s, children: /* @__PURE__ */ d.jsx(
      Se.button,
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
        "data-placeholder": tf(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: he(o.onClick, (y) => {
          y.currentTarget.focus(), u.current !== "mouse" && w(y);
        }),
        onPointerDown: he(o.onPointerDown, (y) => {
          u.current = y.pointerType;
          const m = y.target;
          m.hasPointerCapture(y.pointerId) && m.releasePointerCapture(y.pointerId), y.button === 0 && y.ctrlKey === !1 && y.pointerType === "mouse" && (w(y), y.preventDefault());
        }),
        onKeyDown: he(o.onKeyDown, (y) => {
          const m = h.current !== "";
          !(y.ctrlKey || y.altKey || y.metaKey) && y.key.length === 1 && p(y.key), !(m && y.key === " ") && uy.includes(y.key) && (w(), y.preventDefault());
        })
      }
    ) });
  }
);
Id.displayName = Td;
var Od = "SelectValue", Dd = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: s, placeholder: a = "", ...i } = e, c = Gt(Od, r), { onValueNodeHasChildrenChange: l } = c, u = s !== void 0, h = Pe(t, c.onValueNodeChange);
    return We(() => {
      l(u);
    }, [l, u]), /* @__PURE__ */ d.jsx(
      Se.span,
      {
        ...i,
        ref: h,
        style: { pointerEvents: "none" },
        children: tf(c.value) ? /* @__PURE__ */ d.jsx(d.Fragment, { children: a }) : s
      }
    );
  }
);
Dd.displayName = Od;
var gy = "SelectIcon", Md = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ d.jsx(Se.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
Md.displayName = gy;
var vy = "SelectPortal", zd = (e) => /* @__PURE__ */ d.jsx(ss, { asChild: !0, ...e });
zd.displayName = vy;
var ar = "SelectContent", Fd = $.forwardRef(
  (e, t) => {
    const r = Gt(ar, e.__scopeSelect), [n, o] = $.useState();
    if (We(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const s = n;
      return s ? Ko.createPortal(
        /* @__PURE__ */ d.jsx(Vd, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx(is.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d.jsx("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ d.jsx(Ld, { ...e, ref: t });
  }
);
Fd.displayName = ar;
var lt = 10, [Vd, Kt] = Fr(ar), yy = "SelectContentImpl", by = /* @__PURE__ */ pv("SelectContent.RemoveScroll"), Ld = $.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: h,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: m,
      //
      ..._
    } = e, f = Gt(ar, r), [b, x] = $.useState(null), [g, E] = $.useState(null), S = Pe(t, (z) => x(z)), [C, I] = $.useState(null), [q, D] = $.useState(
      null
    ), F = cs(r), [U, B] = $.useState(!1), Q = $.useRef(!1);
    $.useEffect(() => {
      if (b) return Ed(b);
    }, [b]), Gu();
    const K = $.useCallback(
      (z) => {
        const [Y, ...le] = F().map((T) => T.ref.current), [se] = le.slice(-1), A = document.activeElement;
        for (const T of z)
          if (T === A || (T?.scrollIntoView({ block: "nearest" }), T === Y && g && (g.scrollTop = 0), T === se && g && (g.scrollTop = g.scrollHeight), T?.focus(), document.activeElement !== A)) return;
      },
      [F, g]
    ), oe = $.useCallback(
      () => K([C, b]),
      [K, C, b]
    );
    $.useEffect(() => {
      U && oe();
    }, [U, oe]);
    const { onOpenChange: V, triggerPointerDownPosRef: fe } = f;
    $.useEffect(() => {
      if (b) {
        let z = { x: 0, y: 0 };
        const Y = (se) => {
          z = {
            x: Math.abs(Math.round(se.pageX) - (fe.current?.x ?? 0)),
            y: Math.abs(Math.round(se.pageY) - (fe.current?.y ?? 0))
          };
        }, le = (se) => {
          z.x <= 10 && z.y <= 10 ? se.preventDefault() : b.contains(se.target) || V(!1), document.removeEventListener("pointermove", Y), fe.current = null;
        };
        return fe.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", le, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", le, { capture: !0 });
        };
      }
    }, [b, V, fe]), $.useEffect(() => {
      const z = () => V(!1);
      return window.addEventListener("blur", z), window.addEventListener("resize", z), () => {
        window.removeEventListener("blur", z), window.removeEventListener("resize", z);
      };
    }, [V]);
    const [W, j] = rf((z) => {
      const Y = F().filter((A) => !A.disabled), le = Y.find((A) => A.ref.current === document.activeElement), se = nf(Y, z, le);
      se && setTimeout(() => se.ref.current.focus());
    }), M = $.useCallback(
      (z, Y, le) => {
        const se = !Q.current && !le;
        (f.value !== void 0 && f.value === Y || se) && (I(z), se && (Q.current = !0));
      },
      [f.value]
    ), N = $.useCallback(() => b?.focus(), [b]), k = $.useCallback(
      (z, Y, le) => {
        const se = !Q.current && !le;
        (f.value !== void 0 && f.value === Y || se) && D(z);
      },
      [f.value]
    ), R = n === "popper" ? Ea : qd, L = R === Ea ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: h,
      collisionBoundary: p,
      collisionPadding: v,
      sticky: w,
      hideWhenDetached: y,
      avoidCollisions: m
    } : {};
    return /* @__PURE__ */ d.jsx(
      Vd,
      {
        scope: r,
        content: b,
        viewport: g,
        onViewportChange: E,
        itemRefCallback: M,
        selectedItem: C,
        onItemLeave: N,
        itemTextRefCallback: k,
        focusSelectedItem: oe,
        selectedItemText: q,
        position: n,
        isPositioned: U,
        searchRef: W,
        children: /* @__PURE__ */ d.jsx(oi, { as: by, allowPinchZoom: !0, children: /* @__PURE__ */ d.jsx(
          Ha,
          {
            asChild: !0,
            trapped: f.open,
            onMountAutoFocus: (z) => {
              z.preventDefault();
            },
            onUnmountAutoFocus: he(o, (z) => {
              f.trigger?.focus({ preventScroll: !0 }), z.preventDefault();
            }),
            children: /* @__PURE__ */ d.jsx(
              Qo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (z) => z.preventDefault(),
                onDismiss: () => f.onOpenChange(!1),
                children: /* @__PURE__ */ d.jsx(
                  R,
                  {
                    role: "listbox",
                    id: f.contentId,
                    "data-state": f.open ? "open" : "closed",
                    dir: f.dir,
                    onContextMenu: (z) => z.preventDefault(),
                    ..._,
                    ...L,
                    onPlaced: () => B(!0),
                    ref: S,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ..._.style
                    },
                    onKeyDown: he(_.onKeyDown, (z) => {
                      const Y = z.ctrlKey || z.altKey || z.metaKey;
                      if (z.key === "Tab" && z.preventDefault(), !Y && z.key.length === 1 && j(z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key)) {
                        let se = F().filter((A) => !A.disabled).map((A) => A.ref.current);
                        if (["ArrowUp", "End"].includes(z.key) && (se = se.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(z.key)) {
                          const A = z.target, T = se.indexOf(A);
                          se = se.slice(T + 1);
                        }
                        setTimeout(() => K(se)), z.preventDefault();
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
Ld.displayName = yy;
var _y = "SelectItemAlignedPosition", qd = $.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, s = Gt(ar, r), a = Kt(ar, r), [i, c] = $.useState(null), [l, u] = $.useState(null), h = Pe(t, (S) => u(S)), p = cs(r), v = $.useRef(!1), w = $.useRef(!0), { viewport: y, selectedItem: m, selectedItemText: _, focusSelectedItem: f } = a, b = $.useCallback(() => {
    if (s.trigger && s.valueNode && i && l && y && m && _) {
      const S = s.trigger.getBoundingClientRect(), C = l.getBoundingClientRect(), I = s.valueNode.getBoundingClientRect(), q = _.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const A = q.left - C.left, T = I.left - A, H = S.left - T, J = S.width + H, ae = Math.max(J, C.width), me = window.innerWidth - lt, Me = Ui(T, [
          lt,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(lt, me - ae)
        ]);
        i.style.minWidth = J + "px", i.style.left = Me + "px";
      } else {
        const A = C.right - q.right, T = window.innerWidth - I.right - A, H = window.innerWidth - S.right - T, J = S.width + H, ae = Math.max(J, C.width), me = window.innerWidth - lt, Me = Ui(T, [
          lt,
          Math.max(lt, me - ae)
        ]);
        i.style.minWidth = J + "px", i.style.right = Me + "px";
      }
      const D = p(), F = window.innerHeight - lt * 2, U = y.scrollHeight, B = window.getComputedStyle(l), Q = parseInt(B.borderTopWidth, 10), K = parseInt(B.paddingTop, 10), oe = parseInt(B.borderBottomWidth, 10), V = parseInt(B.paddingBottom, 10), fe = Q + K + U + V + oe, W = Math.min(m.offsetHeight * 5, fe), j = window.getComputedStyle(y), M = parseInt(j.paddingTop, 10), N = parseInt(j.paddingBottom, 10), k = S.top + S.height / 2 - lt, R = F - k, L = m.offsetHeight / 2, z = m.offsetTop + L, Y = Q + K + z, le = fe - Y;
      if (Y <= k) {
        const A = D.length > 0 && m === D[D.length - 1].ref.current;
        i.style.bottom = "0px";
        const T = l.clientHeight - y.offsetTop - y.offsetHeight, H = Math.max(
          R,
          L + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (A ? N : 0) + T + oe
        ), J = Y + H;
        i.style.height = J + "px";
      } else {
        const A = D.length > 0 && m === D[0].ref.current;
        i.style.top = "0px";
        const H = Math.max(
          k,
          Q + y.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (A ? M : 0) + L
        ) + le;
        i.style.height = H + "px", y.scrollTop = Y - k + y.offsetTop;
      }
      i.style.margin = `${lt}px 0`, i.style.minHeight = W + "px", i.style.maxHeight = F + "px", n?.(), requestAnimationFrame(() => v.current = !0);
    }
  }, [
    p,
    s.trigger,
    s.valueNode,
    i,
    l,
    y,
    m,
    _,
    s.dir,
    n
  ]);
  We(() => b(), [b]);
  const [x, g] = $.useState();
  We(() => {
    l && g(window.getComputedStyle(l).zIndex);
  }, [l]);
  const E = $.useCallback(
    (S) => {
      S && w.current === !0 && (b(), f?.(), w.current = !1);
    },
    [b, f]
  );
  return /* @__PURE__ */ d.jsx(
    xy,
    {
      scope: r,
      contentWrapper: i,
      shouldExpandOnScrollRef: v,
      onScrollButtonChange: E,
      children: /* @__PURE__ */ d.jsx(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: x
          },
          children: /* @__PURE__ */ d.jsx(
            Se.div,
            {
              ...o,
              ref: h,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
qd.displayName = _y;
var wy = "SelectPopperPosition", Ea = $.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = lt,
    ...s
  } = e, a = ls(r);
  return /* @__PURE__ */ d.jsx(
    bd,
    {
      ...a,
      ...s,
      ref: t,
      align: n,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ea.displayName = wy;
var [xy, si] = Fr(ar, {}), Sa = "SelectViewport", Ud = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, s = Kt(Sa, r), a = si(Sa, r), i = Pe(t, s.onViewportChange), c = $.useRef(0);
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
      /* @__PURE__ */ d.jsx(is.Slot, { scope: r, children: /* @__PURE__ */ d.jsx(
        Se.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
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
            ...o.style
          },
          onScroll: he(o.onScroll, (l) => {
            const u = l.currentTarget, { contentWrapper: h, shouldExpandOnScrollRef: p } = a;
            if (p?.current && h) {
              const v = Math.abs(c.current - u.scrollTop);
              if (v > 0) {
                const w = window.innerHeight - lt * 2, y = parseFloat(h.style.minHeight), m = parseFloat(h.style.height), _ = Math.max(y, m);
                if (_ < w) {
                  const f = _ + v, b = Math.min(w, f), x = f - b;
                  h.style.height = b + "px", h.style.bottom === "0px" && (u.scrollTop = x > 0 ? x : 0, h.style.justifyContent = "flex-end");
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
Ud.displayName = Sa;
var Zd = "SelectGroup", [$y, Ey] = Fr(Zd), Sy = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Vt();
    return /* @__PURE__ */ d.jsx($y, { scope: r, id: o, children: /* @__PURE__ */ d.jsx(Se.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
Sy.displayName = Zd;
var Bd = "SelectLabel", ky = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Ey(Bd, r);
    return /* @__PURE__ */ d.jsx(Se.div, { id: o.id, ...n, ref: t });
  }
);
ky.displayName = Bd;
var zo = "SelectItem", [jy, Wd] = Fr(zo), Hd = $.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = Gt(zo, r), c = Kt(zo, r), l = i.value === n, [u, h] = $.useState(s ?? ""), [p, v] = $.useState(!1), w = Pe(
      t,
      (f) => c.itemRefCallback?.(f, n, o)
    ), y = Vt(), m = $.useRef("touch"), _ = () => {
      o || (i.onValueChange(n), i.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d.jsx(
      jy,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: y,
        isSelected: l,
        onItemTextChange: $.useCallback((f) => {
          h((b) => b || (f?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d.jsx(
          is.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ d.jsx(
              Se.div,
              {
                role: "option",
                "aria-labelledby": y,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": l && p,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: w,
                onFocus: he(a.onFocus, () => v(!0)),
                onBlur: he(a.onBlur, () => v(!1)),
                onClick: he(a.onClick, () => {
                  m.current !== "mouse" && _();
                }),
                onPointerUp: he(a.onPointerUp, () => {
                  m.current === "mouse" && _();
                }),
                onPointerDown: he(a.onPointerDown, (f) => {
                  m.current = f.pointerType;
                }),
                onPointerMove: he(a.onPointerMove, (f) => {
                  m.current = f.pointerType, o ? c.onItemLeave?.() : m.current === "mouse" && f.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: he(a.onPointerLeave, (f) => {
                  f.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: he(a.onKeyDown, (f) => {
                  c.searchRef?.current !== "" && f.key === " " || (dy.includes(f.key) && _(), f.key === " " && f.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Hd.displayName = zo;
var Qr = "SelectItemText", Gd = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...s } = e, a = Gt(Qr, r), i = Kt(Qr, r), c = Wd(Qr, r), l = hy(Qr, r), [u, h] = $.useState(null), p = Pe(
      t,
      (_) => h(_),
      c.onItemTextChange,
      (_) => i.itemTextRefCallback?.(_, c.value, c.disabled)
    ), v = u?.textContent, w = $.useMemo(
      () => /* @__PURE__ */ d.jsx("option", { value: c.value, disabled: c.disabled, children: v }, c.value),
      [c.disabled, c.value, v]
    ), { onNativeOptionAdd: y, onNativeOptionRemove: m } = l;
    return We(() => (y(w), () => m(w)), [y, m, w]), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(Se.span, { id: c.textId, ...s, ref: p }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Ko.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Gd.displayName = Qr;
var Kd = "SelectItemIndicator", Yd = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return Wd(Kd, r).isSelected ? /* @__PURE__ */ d.jsx(Se.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
Yd.displayName = Kd;
var ka = "SelectScrollUpButton", Jd = $.forwardRef((e, t) => {
  const r = Kt(ka, e.__scopeSelect), n = si(ka, e.__scopeSelect), [o, s] = $.useState(!1), a = Pe(t, n.onScrollButtonChange);
  return We(() => {
    if (r.viewport && r.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        s(l);
      };
      const c = r.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    Qd,
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
Jd.displayName = ka;
var ja = "SelectScrollDownButton", Xd = $.forwardRef((e, t) => {
  const r = Kt(ja, e.__scopeSelect), n = si(ja, e.__scopeSelect), [o, s] = $.useState(!1), a = Pe(t, n.onScrollButtonChange);
  return We(() => {
    if (r.viewport && r.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < l;
        s(u);
      };
      const c = r.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ d.jsx(
    Qd,
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
Xd.displayName = ja;
var Qd = $.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, s = Kt("SelectScrollButton", r), a = $.useRef(null), i = cs(r), c = $.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return $.useEffect(() => () => c(), [c]), We(() => {
    i().find((u) => u.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ d.jsx(
    Se.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: he(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerMove: he(o.onPointerMove, () => {
        s.onItemLeave?.(), a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerLeave: he(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), Cy = "SelectSeparator", Ry = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ d.jsx(Se.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
Ry.displayName = Cy;
var Ca = "SelectArrow", Py = $.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ls(r), s = Gt(Ca, r), a = Kt(Ca, r);
    return s.open && a.position === "popper" ? /* @__PURE__ */ d.jsx(_d, { ...o, ...n, ref: t }) : null;
  }
);
Py.displayName = Ca;
var Ay = "SelectBubbleInput", ef = $.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = $.useRef(null), s = Pe(n, o), a = ni(t);
    return $.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== t && u) {
        const h = new Event("change", { bubbles: !0 });
        u.call(i, t), i.dispatchEvent(h);
      }
    }, [a, t]), /* @__PURE__ */ d.jsx(
      Se.select,
      {
        ...r,
        style: { ...wd, ...r.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
ef.displayName = Ay;
function tf(e) {
  return e === "" || e === void 0;
}
function rf(e) {
  const t = Ut(e), r = $.useRef(""), n = $.useRef(0), o = $.useCallback(
    (a) => {
      const i = r.current + a;
      t(i), (function c(l) {
        r.current = l, window.clearTimeout(n.current), l !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      })(i);
    },
    [t]
  ), s = $.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return $.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s];
}
function nf(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = r ? e.indexOf(r) : -1;
  let a = Ny(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== r));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function Ny(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Ty = Nd, Iy = Id, Oy = Dd, Dy = Md, My = zd, zy = Fd, Fy = Ud, Vy = Hd, Ly = Gd, qy = Yd, Uy = Jd, Zy = Xd;
const By = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Wy = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), hc = (e) => {
  const t = Wy(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, of = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Hy = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Gy = {
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
const Ky = Ru(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: s,
    iconNode: a,
    ...i
  }, c) => ma(
    "svg",
    {
      ref: c,
      ...Gy,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: of("lucide", o),
      ...!s && !Hy(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...a.map(([l, u]) => ma(l, u)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const Nt = (e, t) => {
  const r = Ru(
    ({ className: n, ...o }, s) => ma(Ky, {
      ref: s,
      iconNode: t,
      className: of(
        `lucide-${By(hc(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = hc(e), r;
};
const Yy = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], sf = Nt("check", Yy);
const Jy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], af = Nt("chevron-down", Jy);
const Xy = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], Qy = Nt("chevron-up", Xy);
const eb = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
], cf = Nt("circle-plus", eb);
const tb = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], rb = Nt("circle", tb);
const nb = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], lf = Nt("settings", nb);
const ob = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], sb = Nt("trash-2", ob);
const ab = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], uf = Nt("triangle-alert", ab);
const ib = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], df = Nt("x", ib);
function ff(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ff(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function mf() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ff(e)) && (n && (n += " "), n += t);
  return n;
}
const cb = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n];
  for (let n = 0; n < t.length; n++)
    r[e.length + n] = t[n];
  return r;
}, lb = (e, t) => ({
  classGroupId: e,
  validator: t
}), pf = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Fo = "-", gc = [], ub = "arbitrary..", db = (e) => {
  const t = mb(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return fb(a);
      const i = a.split(Fo), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return hf(i, c, t);
    },
    getConflictingClassGroupIds: (a, i) => {
      if (i) {
        const c = n[a], l = r[a];
        return c ? l ? cb(l, c) : c : l || gc;
      }
      return r[a] || gc;
    }
  };
}, hf = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const o = e[t], s = r.nextPart.get(o);
  if (s) {
    const l = hf(e, t + 1, s);
    if (l) return l;
  }
  const a = r.validators;
  if (a === null)
    return;
  const i = t === 0 ? e.join(Fo) : e.slice(t).join(Fo), c = a.length;
  for (let l = 0; l < c; l++) {
    const u = a[l];
    if (u.validator(i))
      return u.classGroupId;
  }
}, fb = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? ub + n : void 0;
})(), mb = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return pb(r, t);
}, pb = (e, t) => {
  const r = pf();
  for (const n in e) {
    const o = e[n];
    ai(o, r, n, t);
  }
  return r;
}, ai = (e, t, r, n) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const a = e[s];
    hb(a, t, r, n);
  }
}, hb = (e, t, r, n) => {
  if (typeof e == "string") {
    gb(e, t, r);
    return;
  }
  if (typeof e == "function") {
    vb(e, t, r, n);
    return;
  }
  yb(e, t, r, n);
}, gb = (e, t, r) => {
  const n = e === "" ? t : gf(t, e);
  n.classGroupId = r;
}, vb = (e, t, r, n) => {
  if (bb(e)) {
    ai(e(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(lb(r, e));
}, yb = (e, t, r, n) => {
  const o = Object.entries(e), s = o.length;
  for (let a = 0; a < s; a++) {
    const [i, c] = o[a];
    ai(c, gf(t, i), r, n);
  }
}, gf = (e, t) => {
  let r = e;
  const n = t.split(Fo), o = n.length;
  for (let s = 0; s < o; s++) {
    const a = n[s];
    let i = r.nextPart.get(a);
    i || (i = pf(), r.nextPart.set(a, i)), r = i;
  }
  return r;
}, bb = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, _b = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const o = (s, a) => {
    r[s] = a, t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let a = r[s];
      if (a !== void 0)
        return a;
      if ((a = n[s]) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      s in r ? r[s] = a : o(s, a);
    }
  };
}, Ra = "!", vc = ":", wb = [], yc = (e, t, r, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: o
}), xb = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, l;
    const u = o.length;
    for (let y = 0; y < u; y++) {
      const m = o[y];
      if (a === 0 && i === 0) {
        if (m === vc) {
          s.push(o.slice(c, y)), c = y + 1;
          continue;
        }
        if (m === "/") {
          l = y;
          continue;
        }
      }
      m === "[" ? a++ : m === "]" ? a-- : m === "(" ? i++ : m === ")" && i--;
    }
    const h = s.length === 0 ? o : o.slice(c);
    let p = h, v = !1;
    h.endsWith(Ra) ? (p = h.slice(0, -1), v = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      h.startsWith(Ra) && (p = h.slice(1), v = !0)
    );
    const w = l && l > c ? l - c : void 0;
    return yc(s, v, p, w);
  };
  if (t) {
    const o = t + vc, s = n;
    n = (a) => a.startsWith(o) ? s(a.slice(o.length)) : yc(wb, !1, a, void 0, !0);
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, $b = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, n) => {
    t.set(r, 1e6 + n);
  }), (r) => {
    const n = [];
    let o = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s], i = a[0] === "[", c = t.has(a);
      i || c ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), n.push(...o)), n;
  };
}, Eb = (e) => ({
  cache: _b(e.cacheSize),
  parseClassName: xb(e),
  sortModifiers: $b(e),
  ...db(e)
}), Sb = /\s+/, kb = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(Sb);
  let c = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      isExternal: h,
      modifiers: p,
      hasImportantModifier: v,
      baseClassName: w,
      maybePostfixModifierPosition: y
    } = r(u);
    if (h) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let m = !!y, _ = n(m ? w.substring(0, y) : w);
    if (!_) {
      if (!m) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (_ = n(w), !_) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      m = !1;
    }
    const f = p.length === 0 ? "" : p.length === 1 ? p[0] : s(p).join(":"), b = v ? f + Ra : f, x = b + _;
    if (a.indexOf(x) > -1)
      continue;
    a.push(x);
    const g = o(_, m);
    for (let E = 0; E < g.length; ++E) {
      const S = g[E];
      a.push(b + S);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
}, jb = (...e) => {
  let t = 0, r, n, o = "";
  for (; t < e.length; )
    (r = e[t++]) && (n = vf(r)) && (o && (o += " "), o += n);
  return o;
}, vf = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = vf(e[n])) && (r && (r += " "), r += t);
  return r;
}, Cb = (e, ...t) => {
  let r, n, o, s;
  const a = (c) => {
    const l = t.reduce((u, h) => h(u), e());
    return r = Eb(l), n = r.cache.get, o = r.cache.set, s = i, i(c);
  }, i = (c) => {
    const l = n(c);
    if (l)
      return l;
    const u = kb(c, r);
    return o(c, u), u;
  };
  return s = a, (...c) => s(jb(...c));
}, Rb = [], qe = (e) => {
  const t = (r) => r[e] || Rb;
  return t.isThemeGetter = !0, t;
}, yf = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, bf = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Pb = /^\d+\/\d+$/, Ab = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Nb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ib = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ob = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, hr = (e) => Pb.test(e), _e = (e) => !!e && !Number.isNaN(Number(e)), Dt = (e) => !!e && Number.isInteger(Number(e)), Hs = (e) => e.endsWith("%") && _e(e.slice(0, -1)), kt = (e) => Ab.test(e), Db = () => !0, Mb = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Nb.test(e) && !Tb.test(e)
), _f = () => !1, zb = (e) => Ib.test(e), Fb = (e) => Ob.test(e), Vb = (e) => !ie(e) && !ce(e), Lb = (e) => Vr(e, $f, _f), ie = (e) => yf.test(e), Xt = (e) => Vr(e, Ef, Mb), Gs = (e) => Vr(e, Wb, _e), bc = (e) => Vr(e, wf, _f), qb = (e) => Vr(e, xf, Fb), wn = (e) => Vr(e, Sf, zb), ce = (e) => bf.test(e), Kr = (e) => Lr(e, Ef), Ub = (e) => Lr(e, Hb), _c = (e) => Lr(e, wf), Zb = (e) => Lr(e, $f), Bb = (e) => Lr(e, xf), xn = (e) => Lr(e, Sf, !0), Vr = (e, t, r) => {
  const n = yf.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, Lr = (e, t, r = !1) => {
  const n = bf.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, wf = (e) => e === "position" || e === "percentage", xf = (e) => e === "image" || e === "url", $f = (e) => e === "length" || e === "size" || e === "bg-size", Ef = (e) => e === "length", Wb = (e) => e === "number", Hb = (e) => e === "family-name", Sf = (e) => e === "shadow", Gb = () => {
  const e = qe("color"), t = qe("font"), r = qe("text"), n = qe("font-weight"), o = qe("tracking"), s = qe("leading"), a = qe("breakpoint"), i = qe("container"), c = qe("spacing"), l = qe("radius"), u = qe("shadow"), h = qe("inset-shadow"), p = qe("text-shadow"), v = qe("drop-shadow"), w = qe("blur"), y = qe("perspective"), m = qe("aspect"), _ = qe("ease"), f = qe("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
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
  ], g = () => [...x(), ce, ie], E = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], C = () => [ce, ie, c], I = () => [hr, "full", "auto", ...C()], q = () => [Dt, "none", "subgrid", ce, ie], D = () => ["auto", {
    span: ["full", Dt, ce, ie]
  }, Dt, ce, ie], F = () => [Dt, "auto", ce, ie], U = () => ["auto", "min", "max", "fr", ce, ie], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], K = () => ["auto", ...C()], oe = () => [hr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], V = () => [e, ce, ie], fe = () => [...x(), _c, bc, {
    position: [ce, ie]
  }], W = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], j = () => ["auto", "cover", "contain", Zb, Lb, {
    size: [ce, ie]
  }], M = () => [Hs, Kr, Xt], N = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    ce,
    ie
  ], k = () => ["", _e, Kr, Xt], R = () => ["solid", "dashed", "dotted", "double"], L = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => [_e, Hs, _c, bc], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    ce,
    ie
  ], le = () => ["none", _e, ce, ie], se = () => ["none", _e, ce, ie], A = () => [_e, ce, ie], T = () => [hr, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [kt],
      breakpoint: [kt],
      color: [Db],
      container: [kt],
      "drop-shadow": [kt],
      ease: ["in", "out", "in-out"],
      font: [Vb],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [kt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [kt],
      shadow: [kt],
      spacing: ["px", _e],
      text: [kt],
      "text-shadow": [kt],
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
        aspect: ["auto", "square", hr, ie, ce, m]
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
        columns: [_e, ie, ce, i]
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
        overflow: E()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": E()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": E()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
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
        z: [Dt, "auto", ce, ie]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [hr, "full", "auto", i, ...C()]
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
        flex: [_e, hr, "auto", "initial", "none", ie]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", _e, ce, ie]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", _e, ce, ie]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Dt, "first", "last", "none", ce, ie]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": q()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: D()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": q()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: D()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": U()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": U()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...B(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...B()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": B()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: C()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: K()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: K()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: K()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: K()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: K()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: K()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: K()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: K()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: K()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": C()
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
        "space-y": C()
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
        size: oe()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...oe()]
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
          ...oe()
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
          ...oe()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...oe()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...oe()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...oe()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, Kr, Xt]
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
        font: [n, ce, Gs]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Hs, ie]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ub, ie, t]
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
        tracking: [o, ce, ie]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [_e, "none", ce, Gs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce, ie]
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
        list: ["disc", "decimal", "none", ce, ie]
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
        placeholder: V()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: V()
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
        decoration: [_e, "from-font", "auto", ce, Xt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: V()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [_e, "auto", ce, ie]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce, ie]
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
        content: ["none", ce, ie]
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
        bg: fe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: W()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: j()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Dt, ce, ie],
          radial: ["", ce, ie],
          conic: [Dt, ce, ie]
        }, Bb, qb]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: V()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: M()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: V()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: V()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: V()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: N()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": N()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": N()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": N()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": N()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": N()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": N()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": N()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": N()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": N()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": N()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": N()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": N()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": N()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": N()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: k()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": k()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": k()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": k()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": k()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": k()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": k()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": k()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": k()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": k()
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
        "divide-y": k()
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
        border: V()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": V()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": V()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": V()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": V()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": V()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": V()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": V()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": V()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: V()
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
        "outline-offset": [_e, ce, ie]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", _e, Kr, Xt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: V()
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
          xn,
          wn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: V()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", h, xn, wn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": V()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: k()
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
        ring: V()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [_e, Xt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": V()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": k()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": V()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", p, xn, wn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": V()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_e, ce, ie]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...L(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": L()
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
        "mask-linear": [_e]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": V()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": V()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": V()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": V()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": V()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": V()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": V()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": V()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": V()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": V()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": V()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": V()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": V()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": V()
      }],
      "mask-image-radial": [{
        "mask-radial": [ce, ie]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": z()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": V()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": V()
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
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [_e]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": z()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": V()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": V()
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
        mask: fe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: W()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: j()
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
        mask: ["none", ce, ie]
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
          ce,
          ie
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Y()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [_e, ce, ie]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [_e, ce, ie]
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
          xn,
          wn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": V()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", _e, ce, ie]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [_e, ce, ie]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", _e, ce, ie]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_e, ce, ie]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", _e, ce, ie]
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
          ce,
          ie
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Y()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [_e, ce, ie]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [_e, ce, ie]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", _e, ce, ie]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [_e, ce, ie]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", _e, ce, ie]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_e, ce, ie]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_e, ce, ie]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", _e, ce, ie]
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
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ce, ie]
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
        duration: [_e, "initial", ce, ie]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _, ce, ie]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [_e, ce, ie]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", f, ce, ie]
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
        perspective: [y, ce, ie]
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
        rotate: le()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": le()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": le()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": le()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: se()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": se()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": se()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": se()
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
        skew: A()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": A()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": A()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ce, ie, "", "none", "gpu", "cpu"]
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
        translate: T()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": T()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": T()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": T()
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
        accent: V()
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
        caret: V()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce, ie]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", ce, ie]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...V()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [_e, Kr, Xt, Gs]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...V()]
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
}, Kb = /* @__PURE__ */ Cb(Gb);
function ge(...e) {
  return Kb(mf(e));
}
function qr({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Ty, { "data-slot": "select", ...e });
}
function Ur({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(Oy, { "data-slot": "select-value", ...e });
}
function Zr({
  className: e,
  size: t = "default",
  children: r,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(
    Iy,
    {
      "data-slot": "select-trigger",
      "data-size": t,
      className: ge(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ d.jsx(Dy, { asChild: !0, children: /* @__PURE__ */ d.jsx(af, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function Br({
  className: e,
  children: t,
  position: r = "popper",
  ...n
}) {
  return /* @__PURE__ */ d.jsx(My, { children: /* @__PURE__ */ d.jsxs(
    zy,
    {
      "data-slot": "select-content",
      className: ge(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: r,
      ...n,
      children: [
        /* @__PURE__ */ d.jsx(Yb, {}),
        /* @__PURE__ */ d.jsx(
          Fy,
          {
            className: ge(
              "p-1",
              r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ d.jsx(Jb, {})
      ]
    }
  ) });
}
function xt({
  className: e,
  children: t,
  ...r
}) {
  return /* @__PURE__ */ d.jsxs(
    Vy,
    {
      "data-slot": "select-item",
      className: ge(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...r,
      children: [
        /* @__PURE__ */ d.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ d.jsx(qy, { children: /* @__PURE__ */ d.jsx(sf, { className: "size-4" }) }) }),
        /* @__PURE__ */ d.jsx(Ly, { children: t })
      ]
    }
  );
}
function Yb({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Uy,
    {
      "data-slot": "select-scroll-up-button",
      className: ge(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(Qy, { className: "size-4" })
    }
  );
}
function Jb({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    Zy,
    {
      "data-slot": "select-scroll-down-button",
      className: ge(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(af, { className: "size-4" })
    }
  );
}
const je = te.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ d.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: ge(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...r
    }
  )
);
je.displayName = "Input";
var Xb = Symbol.for("react.lazy"), Vo = $[" use ".trim().toString()];
function Qb(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function kf(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Xb && "_payload" in e && Qb(e._payload);
}
// @__NO_SIDE_EFFECTS__
function ii(e) {
  const t = /* @__PURE__ */ e_(e), r = $.forwardRef((n, o) => {
    let { children: s, ...a } = n;
    kf(s) && typeof Vo == "function" && (s = Vo(s._payload));
    const i = $.Children.toArray(s), c = i.find(r_);
    if (c) {
      const l = c.props.children, u = i.map((h) => h === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : h);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var ci = /* @__PURE__ */ ii("Slot");
// @__NO_SIDE_EFFECTS__
function e_(e) {
  const t = $.forwardRef((r, n) => {
    let { children: o, ...s } = r;
    if (kf(o) && typeof Vo == "function" && (o = Vo(o._payload)), $.isValidElement(o)) {
      const a = o_(o), i = n_(s, o.props);
      return o.type !== $.Fragment && (i.ref = n ? Dr(n, a) : a), $.cloneElement(o, i);
    }
    return $.Children.count(o) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var t_ = Symbol("radix.slottable");
function r_(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === t_;
}
function n_(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function o_(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const wc = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, xc = mf, jf = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return xc(e, r?.class, r?.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((l) => {
    const u = r?.[l], h = s?.[l];
    if (u === null) return null;
    const p = wc(u) || wc(h);
    return o[l][p];
  }), i = r && Object.entries(r).reduce((l, u) => {
    let [h, p] = u;
    return p === void 0 || (l[h] = p), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, u) => {
    let { class: h, className: p, ...v } = u;
    return Object.entries(v).every((w) => {
      let [y, m] = w;
      return Array.isArray(m) ? m.includes({
        ...s,
        ...i
      }[y]) : {
        ...s,
        ...i
      }[y] === m;
    }) ? [
      ...l,
      h,
      p
    ] : l;
  }, []);
  return xc(e, a, c, r?.class, r?.className);
}, li = jf(
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
), Lt = te.forwardRef(({ className: e, variant: t, size: r, asChild: n = !1, ...o }, s) => {
  const a = n ? ci : "button";
  return /* @__PURE__ */ d.jsx(
    a,
    {
      "data-slot": "button",
      ref: s,
      className: ge(li({ variant: t, size: r, className: e })),
      ...o
    }
  );
});
function s_(e, t) {
  return $.useReducer((r, n) => t[r][n] ?? r, e);
}
var Yt = (e) => {
  const { present: t, children: r } = e, n = a_(t), o = typeof r == "function" ? r({ present: n.isPresent }) : $.Children.only(r), s = Pe(n.ref, i_(o));
  return typeof r == "function" || n.isPresent ? $.cloneElement(o, { ref: s }) : null;
};
Yt.displayName = "Presence";
function a_(e) {
  const [t, r] = $.useState(), n = $.useRef(null), o = $.useRef(e), s = $.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = s_(a, {
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
    const l = $n(n.current);
    s.current = i === "mounted" ? l : "none";
  }, [i]), We(() => {
    const l = n.current, u = o.current;
    if (u !== e) {
      const p = s.current, v = $n(l);
      e ? c("MOUNT") : v === "none" || l?.display === "none" ? c("UNMOUNT") : c(u && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), We(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, h = (v) => {
        const y = $n(n.current).includes(CSS.escape(v.animationName));
        if (v.target === t && y && (c("ANIMATION_END"), !o.current)) {
          const m = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = m);
          });
        }
      }, p = (v) => {
        v.target === t && (s.current = $n(n.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", h), t.addEventListener("animationend", h), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", h), t.removeEventListener("animationend", h);
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
function $n(e) {
  return e?.animationName || "none";
}
function i_(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var c_ = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function l_(e) {
  const t = ({ children: r }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = c_, t;
}
var [us] = $t("Tooltip", [
  os
]), ds = os(), Cf = "TooltipProvider", u_ = 700, Pa = "tooltip.open", [d_, ui] = us(Cf), Rf = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = u_,
    skipDelayDuration: n = 300,
    disableHoverableContent: o = !1,
    children: s
  } = e, a = $.useRef(!0), i = $.useRef(!1), c = $.useRef(0);
  return $.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ d.jsx(
    d_,
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
      disableHoverableContent: o,
      children: s
    }
  );
};
Rf.displayName = Cf;
var on = "Tooltip", [f_, ln] = us(on), Pf = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    disableHoverableContent: a,
    delayDuration: i
  } = e, c = ui(on, e.__scopeTooltip), l = ds(t), [u, h] = $.useState(null), p = Vt(), v = $.useRef(0), w = a ?? c.disableHoverableContent, y = i ?? c.delayDuration, m = $.useRef(!1), [_, f] = or({
    prop: n,
    defaultProp: o ?? !1,
    onChange: (S) => {
      S ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Pa))) : c.onClose(), s?.(S);
    },
    caller: on
  }), b = $.useMemo(() => _ ? m.current ? "delayed-open" : "instant-open" : "closed", [_]), x = $.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, m.current = !1, f(!0);
  }, [f]), g = $.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, f(!1);
  }, [f]), E = $.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      m.current = !0, f(!0), v.current = 0;
    }, y);
  }, [y, f]);
  return $.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ d.jsx(vd, { ...l, children: /* @__PURE__ */ d.jsx(
    f_,
    {
      scope: t,
      contentId: p,
      open: _,
      stateAttribute: b,
      trigger: u,
      onTriggerChange: h,
      onTriggerEnter: $.useCallback(() => {
        c.isOpenDelayedRef.current ? E() : x();
      }, [c.isOpenDelayedRef, E, x]),
      onTriggerLeave: $.useCallback(() => {
        w ? g() : (window.clearTimeout(v.current), v.current = 0);
      }, [g, w]),
      onOpen: x,
      onClose: g,
      disableHoverableContent: w,
      children: r
    }
  ) });
};
Pf.displayName = on;
var Aa = "TooltipTrigger", Af = $.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = ln(Aa, r), s = ui(Aa, r), a = ds(r), i = $.useRef(null), c = Pe(t, i, o.onTriggerChange), l = $.useRef(!1), u = $.useRef(!1), h = $.useCallback(() => l.current = !1, []);
    return $.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ d.jsx(yd, { asChild: !0, ...a, children: /* @__PURE__ */ d.jsx(
      Se.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...n,
        ref: c,
        onPointerMove: he(e.onPointerMove, (p) => {
          p.pointerType !== "touch" && !u.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: he(e.onPointerLeave, () => {
          o.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: he(e.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: he(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: he(e.onBlur, o.onClose),
        onClick: he(e.onClick, o.onClose)
      }
    ) });
  }
);
Af.displayName = Aa;
var di = "TooltipPortal", [m_, p_] = us(di, {
  forceMount: void 0
}), Nf = (e) => {
  const { __scopeTooltip: t, forceMount: r, children: n, container: o } = e, s = ln(di, t);
  return /* @__PURE__ */ d.jsx(m_, { scope: t, forceMount: r, children: /* @__PURE__ */ d.jsx(Yt, { present: r || s.open, children: /* @__PURE__ */ d.jsx(ss, { asChild: !0, container: o, children: n }) }) });
};
Nf.displayName = di;
var Tr = "TooltipContent", Tf = $.forwardRef(
  (e, t) => {
    const r = p_(Tr, e.__scopeTooltip), { forceMount: n = r.forceMount, side: o = "top", ...s } = e, a = ln(Tr, e.__scopeTooltip);
    return /* @__PURE__ */ d.jsx(Yt, { present: n || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ d.jsx(If, { side: o, ...s, ref: t }) : /* @__PURE__ */ d.jsx(h_, { side: o, ...s, ref: t }) });
  }
), h_ = $.forwardRef((e, t) => {
  const r = ln(Tr, e.__scopeTooltip), n = ui(Tr, e.__scopeTooltip), o = $.useRef(null), s = Pe(t, o), [a, i] = $.useState(null), { trigger: c, onClose: l } = r, u = o.current, { onPointerInTransitChange: h } = n, p = $.useCallback(() => {
    i(null), h(!1);
  }, [h]), v = $.useCallback(
    (w, y) => {
      const m = w.currentTarget, _ = { x: w.clientX, y: w.clientY }, f = b_(_, m.getBoundingClientRect()), b = __(_, f), x = w_(y.getBoundingClientRect()), g = $_([...b, ...x]);
      i(g), h(!0);
    },
    [h]
  );
  return $.useEffect(() => () => p(), [p]), $.useEffect(() => {
    if (c && u) {
      const w = (m) => v(m, u), y = (m) => v(m, c);
      return c.addEventListener("pointerleave", w), u.addEventListener("pointerleave", y), () => {
        c.removeEventListener("pointerleave", w), u.removeEventListener("pointerleave", y);
      };
    }
  }, [c, u, v, p]), $.useEffect(() => {
    if (a) {
      const w = (y) => {
        const m = y.target, _ = { x: y.clientX, y: y.clientY }, f = c?.contains(m) || u?.contains(m), b = !x_(_, a);
        f ? p() : b && (p(), l());
      };
      return document.addEventListener("pointermove", w), () => document.removeEventListener("pointermove", w);
    }
  }, [c, u, a, l, p]), /* @__PURE__ */ d.jsx(If, { ...e, ref: s });
}), [g_, v_] = us(on, { isInside: !1 }), y_ = /* @__PURE__ */ l_("TooltipContent"), If = $.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      ...i
    } = e, c = ln(Tr, r), l = ds(r), { onClose: u } = c;
    return $.useEffect(() => (document.addEventListener(Pa, u), () => document.removeEventListener(Pa, u)), [u]), $.useEffect(() => {
      if (c.trigger) {
        const h = (p) => {
          p.target?.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ d.jsx(
      Qo,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ d.jsxs(
          bd,
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
              /* @__PURE__ */ d.jsx(y_, { children: n }),
              /* @__PURE__ */ d.jsx(g_, { scope: r, isInside: !0, children: /* @__PURE__ */ d.jsx(Ev, { id: c.contentId, role: "tooltip", children: o || n }) })
            ]
          }
        )
      }
    );
  }
);
Tf.displayName = Tr;
var Of = "TooltipArrow", Df = $.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, o = ds(r);
    return v_(
      Of,
      r
    ).isInside ? null : /* @__PURE__ */ d.jsx(_d, { ...o, ...n, ref: t });
  }
);
Df.displayName = Of;
function b_(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(r, n, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function __(e, t, r = 5) {
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
function w_(e) {
  const { top: t, right: r, bottom: n, left: o } = e;
  return [
    { x: o, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: o, y: n }
  ];
}
function x_(e, t) {
  const { x: r, y: n } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const i = t[s], c = t[a], l = i.x, u = i.y, h = c.x, p = c.y;
    u > n != p > n && r < (h - l) * (n - u) / (p - u) + l && (o = !o);
  }
  return o;
}
function $_(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), E_(t);
}
function E_(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], a = t[t.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const o = e[n];
    for (; r.length >= 2; ) {
      const s = r[r.length - 1], a = r[r.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) r.pop();
      else break;
    }
    r.push(o);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var S_ = Rf, k_ = Pf, j_ = Af, C_ = Nf, R_ = Tf, P_ = Df;
function A_({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    S_,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function Mf({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(A_, { children: /* @__PURE__ */ d.jsx(k_, { "data-slot": "tooltip", ...e }) });
}
function zf({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(j_, { "data-slot": "tooltip-trigger", ...e });
}
function Ff({
  className: e,
  sideOffset: t = 0,
  children: r,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(C_, { children: /* @__PURE__ */ d.jsxs(
    R_,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: ge(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        e
      ),
      ...n,
      children: [
        r,
        /* @__PURE__ */ d.jsx(P_, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
const N_ = ({
  theme: e,
  readOnly: t,
  rootType: r,
  onAddField: n,
  onOpenSettings: o
}) => {
  const { control: s } = He();
  return /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ d.jsx(je, { value: "root", disabled: !0, className: "w-40" }),
    /* @__PURE__ */ d.jsxs(qr, { disabled: !0, value: r, children: [
      /* @__PURE__ */ d.jsx(Zr, { className: "w-40", children: /* @__PURE__ */ d.jsx(Ur, {}) }),
      /* @__PURE__ */ d.jsx(
        Br,
        {
          className: `${e} max-h-52 bg-background text-foreground border-input`,
          children: /* @__PURE__ */ d.jsx(xt, { value: r, children: r })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      Ft,
      {
        control: s,
        name: "root.title",
        render: ({ field: a }) => /* @__PURE__ */ d.jsx(
          je,
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
      Ft,
      {
        control: s,
        name: "root.description",
        render: ({ field: a }) => /* @__PURE__ */ d.jsx(
          je,
          {
            placeholder: "Description",
            disabled: t,
            className: "flex-1",
            ...a
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsxs(Mf, { children: [
      /* @__PURE__ */ d.jsx(zf, { asChild: !0, children: /* @__PURE__ */ d.jsx(Lt, { disabled: !0, size: "icon", children: /* @__PURE__ */ d.jsx(uf, {}) }) }),
      /* @__PURE__ */ d.jsx(Ff, { children: /* @__PURE__ */ d.jsx("p", { children: "Required" }) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "border-l-2 border-input" }),
    /* @__PURE__ */ d.jsx(
      Lt,
      {
        size: "icon",
        variant: "ghost",
        "data-testid": "root-settings-button",
        onClick: () => o("root"),
        children: /* @__PURE__ */ d.jsx(lf, { className: "text-blue-500" })
      }
    ),
    r === "object" && /* @__PURE__ */ d.jsx(
      Lt,
      {
        size: "icon",
        variant: "ghost",
        "data-testid": "root-add-button",
        disabled: t,
        onClick: n,
        children: /* @__PURE__ */ d.jsx(cf, { className: "text-green-500" })
      }
    ),
    /* @__PURE__ */ d.jsx("div", {})
  ] });
}, En = {
  form: { width: "full", height: "md" },
  output: { position: "bottom", showJson: !0, width: "full", height: "md" },
  settings: { width: "md" },
  spacing: "md"
}, $c = {
  sm: "max-h-[300px]",
  md: "max-h-[500px]",
  lg: "max-h-[800px]",
  full: "max-h-full"
}, T_ = {
  sm: 300,
  md: 500,
  lg: 800,
  full: void 0
}, Ks = {
  sm: "w-full max-w-[600px]",
  md: "w-full max-w-[800px]",
  lg: "w-full max-w-[1200px]",
  full: "w-full"
}, I_ = {
  sm: "sm:max-w-[500px]",
  md: "sm:max-w-[700px]",
  lg: "sm:max-w-[1000px]",
  full: "w-full sm:max-w-full"
}, O_ = {
  top: "flex-col-reverse",
  bottom: "flex-col",
  left: "flex-row-reverse",
  right: "flex-row"
}, Ec = { sm: "gap-2", md: "gap-4", lg: "gap-6" }, D_ = [
  "string",
  "integer",
  "number",
  "boolean",
  "object",
  "array"
], M_ = ["int-32", "int-64"], z_ = ["float", "double", "big-decimal"], F_ = [
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
function V_(e) {
  const t = /* @__PURE__ */ L_(e), r = $.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = $.Children.toArray(s), c = i.find(U_);
    if (c) {
      const l = c.props.children, u = i.map((h) => h === c ? $.Children.count(l) > 1 ? $.Children.only(null) : $.isValidElement(l) ? l.props.children : null : h);
      return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: $.isValidElement(l) ? $.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ d.jsx(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function L_(e) {
  const t = $.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if ($.isValidElement(o)) {
      const a = B_(o), i = Z_(s, o.props);
      return o.type !== $.Fragment && (i.ref = n ? Dr(n, a) : a), $.cloneElement(o, i);
    }
    return $.Children.count(o) > 1 ? $.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var q_ = Symbol("radix.slottable");
function U_(e) {
  return $.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === q_;
}
function Z_(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function B_(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var fs = "Dialog", [Vf, Lf] = $t(fs), [W_, ht] = Vf(fs), qf = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = $.useRef(null), c = $.useRef(null), [l, u] = or({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: fs
  });
  return /* @__PURE__ */ d.jsx(
    W_,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: Vt(),
      titleId: Vt(),
      descriptionId: Vt(),
      open: l,
      onOpenChange: u,
      onOpenToggle: $.useCallback(() => u((h) => !h), [u]),
      modal: a,
      children: r
    }
  );
};
qf.displayName = fs;
var Uf = "DialogTrigger", Zf = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ht(Uf, r), s = Pe(t, o.triggerRef);
    return /* @__PURE__ */ d.jsx(
      Se.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": pi(o.open),
        ...n,
        ref: s,
        onClick: he(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Zf.displayName = Uf;
var fi = "DialogPortal", [H_, Bf] = Vf(fi, {
  forceMount: void 0
}), Wf = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, s = ht(fi, t);
  return /* @__PURE__ */ d.jsx(H_, { scope: t, forceMount: r, children: $.Children.map(n, (a) => /* @__PURE__ */ d.jsx(Yt, { present: r || s.open, children: /* @__PURE__ */ d.jsx(ss, { asChild: !0, container: o, children: a }) })) });
};
Wf.displayName = fi;
var Lo = "DialogOverlay", Hf = $.forwardRef(
  (e, t) => {
    const r = Bf(Lo, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = ht(Lo, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ d.jsx(Yt, { present: n || s.open, children: /* @__PURE__ */ d.jsx(K_, { ...o, ref: t }) }) : null;
  }
);
Hf.displayName = Lo;
var G_ = /* @__PURE__ */ V_("DialogOverlay.RemoveScroll"), K_ = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ht(Lo, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d.jsx(oi, { as: G_, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d.jsx(
        Se.div,
        {
          "data-state": pi(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), ir = "DialogContent", Gf = $.forwardRef(
  (e, t) => {
    const r = Bf(ir, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = ht(ir, e.__scopeDialog);
    return /* @__PURE__ */ d.jsx(Yt, { present: n || s.open, children: s.modal ? /* @__PURE__ */ d.jsx(Y_, { ...o, ref: t }) : /* @__PURE__ */ d.jsx(J_, { ...o, ref: t }) });
  }
);
Gf.displayName = ir;
var Y_ = $.forwardRef(
  (e, t) => {
    const r = ht(ir, e.__scopeDialog), n = $.useRef(null), o = Pe(t, r.contentRef, n);
    return $.useEffect(() => {
      const s = n.current;
      if (s) return Ed(s);
    }, []), /* @__PURE__ */ d.jsx(
      Kf,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: he(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), r.triggerRef.current?.focus();
        }),
        onPointerDownOutside: he(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: he(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), J_ = $.forwardRef(
  (e, t) => {
    const r = ht(ir, e.__scopeDialog), n = $.useRef(!1), o = $.useRef(!1);
    return /* @__PURE__ */ d.jsx(
      Kf,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (n.current || r.triggerRef.current?.focus(), s.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          r.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Kf = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = ht(ir, r), c = $.useRef(null), l = Pe(t, c);
    return Gu(), /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(
        Ha,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ d.jsx(
            Qo,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": pi(i.open),
              ...a,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsx(Q_, { titleId: i.titleId }),
        /* @__PURE__ */ d.jsx(t0, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), mi = "DialogTitle", Yf = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ht(mi, r);
    return /* @__PURE__ */ d.jsx(Se.h2, { id: o.titleId, ...n, ref: t });
  }
);
Yf.displayName = mi;
var Jf = "DialogDescription", Xf = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ht(Jf, r);
    return /* @__PURE__ */ d.jsx(Se.p, { id: o.descriptionId, ...n, ref: t });
  }
);
Xf.displayName = Jf;
var Qf = "DialogClose", em = $.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = ht(Qf, r);
    return /* @__PURE__ */ d.jsx(
      Se.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: he(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
em.displayName = Qf;
function pi(e) {
  return e ? "open" : "closed";
}
var tm = "DialogTitleWarning", [X_, rm] = gh(tm, {
  contentName: ir,
  titleName: mi,
  docsSlug: "dialog"
}), Q_ = ({ titleId: e }) => {
  const t = rm(tm), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return $.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, e0 = "DialogDescriptionWarning", t0 = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${rm(e0).contentName}}.`;
  return $.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, nm = qf, r0 = Zf, om = Wf, sm = Hf, am = Gf, im = Yf, n0 = Xf, hi = em, o0 = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function s0(e) {
  const t = ({ children: r }) => /* @__PURE__ */ d.jsx(d.Fragment, { children: r });
  return t.displayName = `${e}.Slottable`, t.__radixId = o0, t;
}
var cm = "AlertDialog", [a0] = $t(cm, [
  Lf
]), Tt = Lf(), lm = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = Tt(t);
  return /* @__PURE__ */ d.jsx(nm, { ...n, ...r, modal: !0 });
};
lm.displayName = cm;
var i0 = "AlertDialogTrigger", um = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Tt(r);
    return /* @__PURE__ */ d.jsx(r0, { ...o, ...n, ref: t });
  }
);
um.displayName = i0;
var c0 = "AlertDialogPortal", dm = (e) => {
  const { __scopeAlertDialog: t, ...r } = e, n = Tt(t);
  return /* @__PURE__ */ d.jsx(om, { ...n, ...r });
};
dm.displayName = c0;
var l0 = "AlertDialogOverlay", fm = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Tt(r);
    return /* @__PURE__ */ d.jsx(sm, { ...o, ...n, ref: t });
  }
);
fm.displayName = l0;
var Pr = "AlertDialogContent", [u0, d0] = a0(Pr), f0 = /* @__PURE__ */ s0("AlertDialogContent"), mm = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, children: n, ...o } = e, s = Tt(r), a = $.useRef(null), i = Pe(t, a), c = $.useRef(null);
    return /* @__PURE__ */ d.jsx(
      X_,
      {
        contentName: Pr,
        titleName: pm,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ d.jsx(u0, { scope: r, cancelRef: c, children: /* @__PURE__ */ d.jsxs(
          am,
          {
            role: "alertdialog",
            ...s,
            ...o,
            ref: i,
            onOpenAutoFocus: he(o.onOpenAutoFocus, (l) => {
              l.preventDefault(), c.current?.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (l) => l.preventDefault(),
            onInteractOutside: (l) => l.preventDefault(),
            children: [
              /* @__PURE__ */ d.jsx(f0, { children: n }),
              /* @__PURE__ */ d.jsx(p0, { contentRef: a })
            ]
          }
        ) })
      }
    );
  }
);
mm.displayName = Pr;
var pm = "AlertDialogTitle", hm = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Tt(r);
    return /* @__PURE__ */ d.jsx(im, { ...o, ...n, ref: t });
  }
);
hm.displayName = pm;
var gm = "AlertDialogDescription", vm = $.forwardRef((e, t) => {
  const { __scopeAlertDialog: r, ...n } = e, o = Tt(r);
  return /* @__PURE__ */ d.jsx(n0, { ...o, ...n, ref: t });
});
vm.displayName = gm;
var m0 = "AlertDialogAction", ym = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, o = Tt(r);
    return /* @__PURE__ */ d.jsx(hi, { ...o, ...n, ref: t });
  }
);
ym.displayName = m0;
var bm = "AlertDialogCancel", _m = $.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: r, ...n } = e, { cancelRef: o } = d0(bm, r), s = Tt(r), a = Pe(t, o);
    return /* @__PURE__ */ d.jsx(hi, { ...s, ...n, ref: a });
  }
);
_m.displayName = bm;
var p0 = ({ contentRef: e }) => {
  const t = `\`${Pr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Pr}\` by passing a \`${gm}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Pr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return $.useEffect(() => {
    document.getElementById(
      e.current?.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, h0 = lm, g0 = um, v0 = dm, y0 = fm, b0 = mm, _0 = ym, w0 = _m, x0 = hm, $0 = vm;
function E0({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(h0, { "data-slot": "alert-dialog", ...e });
}
function S0({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(g0, { "data-slot": "alert-dialog-trigger", ...e });
}
function k0({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(v0, { "data-slot": "alert-dialog-portal", ...e });
}
function j0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    y0,
    {
      "data-slot": "alert-dialog-overlay",
      className: ge(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function C0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsxs(k0, { children: [
    /* @__PURE__ */ d.jsx(j0, {}),
    /* @__PURE__ */ d.jsx(
      b0,
      {
        "data-slot": "alert-dialog-content",
        className: ge(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...t
      }
    )
  ] });
}
function R0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: ge("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function P0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: ge(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        e
      ),
      ...t
    }
  );
}
function A0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    x0,
    {
      "data-slot": "alert-dialog-title",
      className: ge("text-lg font-semibold", e),
      ...t
    }
  );
}
function N0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    $0,
    {
      "data-slot": "alert-dialog-description",
      className: ge("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function T0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    _0,
    {
      className: ge(li(), e),
      ...t
    }
  );
}
function I0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    w0,
    {
      className: ge(li({ variant: "outline" }), e),
      ...t
    }
  );
}
const O0 = ({
  theme: e,
  readOnly: t,
  control: r,
  fieldPath: n,
  isSimpleType: o,
  isRootLevel: s,
  onRemove: a,
  onOpenSettings: i,
  onTypeChange: c
}) => {
  const l = en({
    control: r,
    name: `${n}.key`
  });
  return /* @__PURE__ */ d.jsxs("div", { className: "p-2 flex gap-2", "data-testid": "field", children: [
    o && /* @__PURE__ */ d.jsx(
      Ft,
      {
        control: r,
        name: `${n}.key`,
        render: ({ field: u }) => /* @__PURE__ */ d.jsx(
          je,
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
      Ft,
      {
        control: r,
        name: `${n}.schema.type`,
        render: ({ field: u }) => /* @__PURE__ */ d.jsxs(
          qr,
          {
            disabled: t,
            onValueChange: (h) => {
              u.onChange(h), c(h);
            },
            value: u.value,
            children: [
              /* @__PURE__ */ d.jsx(Zr, { className: "w-40", children: /* @__PURE__ */ d.jsx(Ur, {}) }),
              /* @__PURE__ */ d.jsx(
                Br,
                {
                  className: `${e} max-h-52 bg-background text-foreground border-input`,
                  children: D_.map((h) => /* @__PURE__ */ d.jsx(xt, { value: h, children: h }, h))
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      Ft,
      {
        control: r,
        name: `${n}.schema.title`,
        render: ({ field: u }) => /* @__PURE__ */ d.jsx(
          je,
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
      Ft,
      {
        control: r,
        name: `${n}.schema.description`,
        render: ({ field: u }) => /* @__PURE__ */ d.jsx(
          je,
          {
            placeholder: "Description",
            disabled: t,
            className: "flex-1",
            ...u
          }
        )
      }
    ),
    o && /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ d.jsx(
        Ft,
        {
          control: r,
          name: `${n}.isRequired`,
          render: ({ field: u }) => /* @__PURE__ */ d.jsxs(Mf, { children: [
            /* @__PURE__ */ d.jsx(zf, { asChild: !0, children: /* @__PURE__ */ d.jsx(
              Lt,
              {
                "data-testid": "required",
                disabled: t,
                size: "icon",
                variant: u.value ? "default" : "outline",
                onClick: () => {
                  u.onChange(!u.value);
                },
                children: /* @__PURE__ */ d.jsx(uf, {})
              }
            ) }),
            /* @__PURE__ */ d.jsx(Ff, { children: /* @__PURE__ */ d.jsx("p", { children: "Required" }) })
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx("div", { className: "border-l-2 border-input" })
    ] }),
    /* @__PURE__ */ d.jsx(
      Lt,
      {
        size: "icon",
        variant: "ghost",
        onClick: () => i(`${n}.schema`),
        children: /* @__PURE__ */ d.jsx(lf, { className: "text-blue-500" })
      }
    ),
    s && /* @__PURE__ */ d.jsxs(E0, { children: [
      /* @__PURE__ */ d.jsx(S0, { asChild: !0, children: /* @__PURE__ */ d.jsx(
        Lt,
        {
          size: "icon",
          variant: "ghost",
          "data-testid": "delete-button",
          disabled: t,
          children: /* @__PURE__ */ d.jsx(sb, { className: "text-red-500" })
        }
      ) }),
      /* @__PURE__ */ d.jsxs(C0, { className: ge("border-input", e), children: [
        /* @__PURE__ */ d.jsxs(R0, { children: [
          /* @__PURE__ */ d.jsx(A0, { className: "text-foreground", children: "Are you absolutely sure?" }),
          /* @__PURE__ */ d.jsxs(N0, { children: [
            "This action cannot be undone. This will permanently delete field",
            " ",
            l,
            "."
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs(P0, { children: [
          /* @__PURE__ */ d.jsx(I0, { className: "text-foreground", children: "Cancel" }),
          /* @__PURE__ */ d.jsx(T0, { onClick: a, children: "Delete" })
        ] })
      ] })
    ] })
  ] });
}, qo = ({
  theme: e,
  readOnly: t,
  fieldPath: r,
  onRemove: n,
  onOpenSettings: o,
  isSimpleType: s = !0,
  isRootLevel: a = !1
}) => {
  const { control: i, setValue: c } = He(), l = en({ control: i, name: `${r}.schema.type` }), { fields: u, append: h, remove: p } = Zu({
    control: i,
    name: `${r}.schema.properties`
  }), v = () => {
    const y = tn(6);
    h({
      id: y,
      key: `field_${y}`,
      isRequired: !1,
      schema: { type: "string" }
    });
  }, w = (y) => {
    let m = {};
    y === "object" ? m = { type: "object", properties: [], additionalProperties: !0 } : y === "array" ? m = { type: "array" } : m = { type: y }, c(`${r}.schema`, m);
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx(
      O0,
      {
        theme: e,
        readOnly: t,
        control: i,
        fieldPath: r,
        isSimpleType: s,
        isRootLevel: a,
        onRemove: n,
        onOpenSettings: o,
        onTypeChange: w
      }
    ),
    l === "object" && /* @__PURE__ */ d.jsxs("div", { className: "ml-2 pl-2 border-l-2 border-input", children: [
      u.map((y, m) => /* @__PURE__ */ d.jsx(
        qo,
        {
          readOnly: t,
          theme: e,
          fieldPath: `${r}.schema.properties.${m}`,
          onRemove: () => p(m),
          onOpenSettings: o,
          isRootLevel: !0
        },
        y.id
      )),
      /* @__PURE__ */ d.jsxs(
        Lt,
        {
          disabled: t,
          size: "sm",
          variant: "outline",
          onClick: v,
          className: "ml-2 mt-2 mb-4 flex gap-2 text-green-500",
          children: [
            /* @__PURE__ */ d.jsx(cf, {}),
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
          qo,
          {
            theme: e,
            readOnly: t,
            fieldPath: `${r}.schema.items`,
            onRemove: () => {
            },
            onOpenSettings: o,
            isSimpleType: !1
          }
        )
      }
    )
  ] }, `${r}-${l}`);
};
function D0({
  theme: e,
  readOnly: t,
  fields: r,
  onRemove: n,
  onOpenSettings: o
}) {
  return /* @__PURE__ */ d.jsx("div", { className: "pl-2 border-l-2 border-input", children: r.map((s, a) => /* @__PURE__ */ d.jsx(
    qo,
    {
      readOnly: t,
      theme: e,
      fieldPath: `properties.${a}`,
      onRemove: () => n(a),
      onOpenSettings: o,
      isRootLevel: !0
    },
    s.fieldId
  )) });
}
var M0 = [
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
], z0 = M0.reduce((e, t) => {
  const r = /* @__PURE__ */ ii(`Primitive.${t}`), n = $.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {}), F0 = "Label", wm = $.forwardRef((e, t) => /* @__PURE__ */ d.jsx(
  z0.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      r.target.closest("button, input, select, textarea") || (e.onMouseDown?.(r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
wm.displayName = F0;
var V0 = wm;
function L0({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    V0,
    {
      "data-slot": "label",
      className: ge(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const xm = Pu(
  {}
), $e = ({
  ...e
}) => /* @__PURE__ */ d.jsx(xm.Provider, { value: { name: e.name }, children: /* @__PURE__ */ d.jsx(Ft, { ...e }) }), gi = () => {
  const e = Pi(xm), t = Pi($m), { getFieldState: r } = He(), n = Du({ name: e.name }), o = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: s } = t;
  return {
    id: s,
    name: e.name,
    formItemId: `${s}-form-item`,
    formDescriptionId: `${s}-form-item-description`,
    formMessageId: `${s}-form-item-message`,
    ...o
  };
}, $m = Pu(
  {}
);
function ve({ className: e, ...t }) {
  const r = qp();
  return /* @__PURE__ */ d.jsx($m.Provider, { value: { id: r }, children: /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "form-item",
      className: ge("grid gap-2", e),
      ...t
    }
  ) });
}
function ye({
  className: e,
  ...t
}) {
  const { error: r, formItemId: n } = gi();
  return /* @__PURE__ */ d.jsx(
    L0,
    {
      "data-slot": "form-label",
      "data-error": !!r,
      className: ge("data-[error=true]:text-destructive", e),
      htmlFor: n,
      ...t
    }
  );
}
function we({ ...e }) {
  const { error: t, formItemId: r, formDescriptionId: n, formMessageId: o } = gi();
  return /* @__PURE__ */ d.jsx(
    ci,
    {
      "data-slot": "form-control",
      id: r,
      "aria-describedby": t ? `${n} ${o}` : `${n}`,
      "aria-invalid": !!t,
      ...e
    }
  );
}
function xe({ className: e, ...t }) {
  const { error: r, formMessageId: n } = gi(), o = r ? String(r?.message ?? "") : t.children;
  return o ? /* @__PURE__ */ d.jsx(
    "p",
    {
      "data-slot": "form-message",
      id: n,
      className: ge("text-destructive text-sm", e),
      ...t,
      children: o
    }
  ) : null;
}
var ms = "Checkbox", [q0] = $t(ms), [U0, vi] = q0(ms);
function Z0(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: s,
    form: a,
    name: i,
    onCheckedChange: c,
    required: l,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: h
  } = e, [p, v] = or({
    prop: r,
    defaultProp: o ?? !1,
    onChange: c,
    caller: ms
  }), [w, y] = $.useState(null), [m, _] = $.useState(null), f = $.useRef(!1), b = w ? !!a || !!w.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), x = {
    checked: p,
    disabled: s,
    setChecked: v,
    control: w,
    setControl: y,
    name: i,
    form: a,
    value: u,
    hasConsumerStoppedPropagationRef: f,
    required: l,
    defaultChecked: qt(o) ? !1 : o,
    isFormControl: b,
    bubbleInput: m,
    setBubbleInput: _
  };
  return /* @__PURE__ */ d.jsx(
    U0,
    {
      scope: t,
      ...x,
      children: B0(h) ? h(x) : n
    }
  );
}
var Em = "CheckboxTrigger", Sm = $.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: s,
      value: a,
      disabled: i,
      checked: c,
      required: l,
      setControl: u,
      setChecked: h,
      hasConsumerStoppedPropagationRef: p,
      isFormControl: v,
      bubbleInput: w
    } = vi(Em, e), y = Pe(o, u), m = $.useRef(c);
    return $.useEffect(() => {
      const _ = s?.form;
      if (_) {
        const f = () => h(m.current);
        return _.addEventListener("reset", f), () => _.removeEventListener("reset", f);
      }
    }, [s, h]), /* @__PURE__ */ d.jsx(
      Se.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": qt(c) ? "mixed" : c,
        "aria-required": l,
        "data-state": Am(c),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: a,
        ...n,
        ref: y,
        onKeyDown: he(t, (_) => {
          _.key === "Enter" && _.preventDefault();
        }),
        onClick: he(r, (_) => {
          h((f) => qt(f) ? !0 : !f), w && v && (p.current = _.isPropagationStopped(), p.current || _.stopPropagation());
        })
      }
    );
  }
);
Sm.displayName = Em;
var km = $.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: c,
      onCheckedChange: l,
      form: u,
      ...h
    } = e;
    return /* @__PURE__ */ d.jsx(
      Z0,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: s,
        disabled: i,
        required: a,
        onCheckedChange: l,
        name: n,
        form: u,
        value: c,
        internal_do_not_use_render: ({ isFormControl: p }) => /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
          /* @__PURE__ */ d.jsx(
            Sm,
            {
              ...h,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          p && /* @__PURE__ */ d.jsx(
            Pm,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
km.displayName = ms;
var jm = "CheckboxIndicator", Cm = $.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, s = vi(jm, r);
    return /* @__PURE__ */ d.jsx(
      Yt,
      {
        present: n || qt(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ d.jsx(
          Se.span,
          {
            "data-state": Am(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Cm.displayName = jm;
var Rm = "CheckboxBubbleInput", Pm = $.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: a,
      required: i,
      disabled: c,
      name: l,
      value: u,
      form: h,
      bubbleInput: p,
      setBubbleInput: v
    } = vi(Rm, e), w = Pe(r, v), y = ni(s), m = ei(n);
    $.useEffect(() => {
      const f = p;
      if (!f) return;
      const b = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, E = !o.current;
      if (y !== s && g) {
        const S = new Event("click", { bubbles: E });
        f.indeterminate = qt(s), g.call(f, qt(s) ? !1 : s), f.dispatchEvent(S);
      }
    }, [p, y, s, o]);
    const _ = $.useRef(qt(s) ? !1 : s);
    return /* @__PURE__ */ d.jsx(
      Se.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: a ?? _.current,
        required: i,
        disabled: c,
        name: l,
        value: u,
        form: h,
        ...t,
        tabIndex: -1,
        ref: w,
        style: {
          ...t.style,
          ...m,
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
Pm.displayName = Rm;
function B0(e) {
  return typeof e == "function";
}
function qt(e) {
  return e === "indeterminate";
}
function Am(e) {
  return qt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ps({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    km,
    {
      "data-slot": "checkbox",
      className: ge(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(
        Cm,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ d.jsx(sf, { className: "size-3.5" })
        }
      )
    }
  );
}
const W0 = jf(
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
function Nm({
  className: e,
  variant: t,
  asChild: r = !1,
  ...n
}) {
  const o = r ? ci : "span";
  return /* @__PURE__ */ d.jsx(
    o,
    {
      "data-slot": "badge",
      className: ge(W0({ variant: t }), e),
      ...n
    }
  );
}
const H0 = /[\n#?=&\t,./-]+/, G0 = /^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g, K0 = te.createContext(null), un = te.forwardRef(
  ({
    children: e,
    value: t,
    onValueChange: r,
    placeholder: n,
    maxItems: o,
    minItems: s,
    className: a,
    disabled: i = !1,
    dir: c,
    ...l
  }, u) => {
    const [h, p] = te.useState(-1), [v, w] = te.useState(""), [y, m] = te.useState(i), [_, f] = te.useState(i), [b, x] = te.useState(!1), [g, E] = te.useState(""), S = s ?? 0, C = o ?? 1 / 0, I = te.useCallback(
      (K) => {
        !t.includes(K) && t.length < C && r([...t, K]);
      },
      [t]
    ), q = te.useCallback(
      (K) => {
        t.includes(K) && t.length > S && r(t.filter((oe) => oe !== K));
      },
      [t]
    ), D = te.useCallback(
      (K) => {
        K.preventDefault();
        const oe = K.clipboardData.getData("text").split(H0), V = [...t];
        oe.forEach((fe) => {
          const W = fe.replaceAll(G0, "").trim();
          W.length > 0 && !V.includes(W) && V.length < C && V.push(W);
        }), r(V), w("");
      },
      [t]
    ), F = te.useCallback(
      (K) => {
        const oe = K.currentTarget, V = oe.value.substring(
          oe.selectionStart ?? 0,
          oe.selectionEnd ?? 0
        );
        E(V), x(V === v);
      },
      [v]
    );
    te.useEffect(() => {
      (() => {
        i == !1 && (t.length - 1 >= S ? f(!1) : f(!0), t.length + 1 <= C ? m(!1) : m(!0));
      })();
    }, [t]);
    const U = te.useCallback(
      async (K) => {
        K.stopPropagation();
        const oe = () => {
          const j = h + 1 > t.length - 1 ? -1 : h + 1;
          p(j);
        }, V = () => {
          const j = h - 1 < 0 ? t.length - 1 : h - 1;
          p(j);
        }, fe = () => {
          const j = h - 1 <= 0 ? t.length - 1 === 0 ? -1 : 0 : h - 1;
          p(j);
        }, W = K.currentTarget;
        switch (K.key) {
          case "ArrowLeft":
            c === "rtl" ? t.length > 0 && h !== -1 && oe() : t.length > 0 && W.selectionStart === 0 && V();
            break;
          case "ArrowRight":
            c === "rtl" ? t.length > 0 && W.selectionStart === 0 && V() : t.length > 0 && h !== -1 && oe();
            break;
          case "Backspace":
          case "Delete":
            t.length > 0 && (h !== -1 && h < t.length ? (q(t[h]), fe()) : W.selectionStart === 0 && (g === v || b) && q(t[t.length - 1]));
            break;
          case "Escape":
            const j = h === -1 ? t.length - 1 : -1;
            p(j);
            break;
          case "Enter":
            v.trim() !== "" && (K.preventDefault(), I(v), w(""));
            break;
        }
      },
      [h, t, v, q]
    ), B = te.useCallback((K) => {
      K.preventDefault(), K.stopPropagation();
    }, []), Q = te.useCallback(
      (K) => {
        w(K.currentTarget.value);
      },
      []
    );
    return /* @__PURE__ */ d.jsx(
      K0.Provider,
      {
        value: {
          value: t,
          onValueChange: r,
          inputValue: v,
          setInputValue: w,
          activeIndex: h,
          setActiveIndex: p
        },
        children: /* @__PURE__ */ d.jsxs(
          "div",
          {
            ...l,
            ref: u,
            dir: c,
            className: ge(
              "flex items-center flex-wrap gap-1 rounded-lg bg-background overflow-hidden",
              {
                "focus-within:ring-ring": h === -1
              },
              a
            ),
            children: [
              t.map((K, oe) => /* @__PURE__ */ d.jsxs(
                Nm,
                {
                  tabIndex: h !== -1 ? 0 : h,
                  "aria-disabled": _,
                  "data-active": h === oe,
                  className: ge(
                    "relative px-1 rounded flex items-center gap-1 data-[active='true']:ring-2 data-[active='true']:ring-muted-foreground truncate aria-disabled:opacity-50 aria-disabled:cursor-not-allowed"
                  ),
                  variant: "secondary",
                  children: [
                    /* @__PURE__ */ d.jsx("span", { className: "text-xs", children: K }),
                    /* @__PURE__ */ d.jsxs(
                      "button",
                      {
                        type: "button",
                        "aria-label": `Remove ${K} option`,
                        "aria-roledescription": "button to remove option",
                        disabled: _,
                        onMouseDown: B,
                        onClick: () => q(K),
                        className: "disabled:cursor-not-allowed",
                        children: [
                          /* @__PURE__ */ d.jsxs("span", { className: "sr-only", children: [
                            "Remove ",
                            K,
                            " option"
                          ] }),
                          /* @__PURE__ */ d.jsx(df, { className: "h-4 w-4 hover:stroke-destructive" })
                        ]
                      }
                    )
                  ]
                },
                K
              )),
              /* @__PURE__ */ d.jsx(
                je,
                {
                  tabIndex: 0,
                  "aria-label": "input tag",
                  disabled: y,
                  onKeyDown: U,
                  onPaste: D,
                  value: v,
                  onSelect: F,
                  onChange: h === -1 ? Q : void 0,
                  placeholder: n,
                  onClick: () => p(-1),
                  className: ge(
                    "border border-input h-9 min-w-fit flex-1 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground px-2",
                    h !== -1 && "caret-transparent"
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
un.displayName = "TagsInput";
const Y0 = ({
  theme: e,
  basePath: t,
  readOnly: r
}) => {
  const { control: n, watch: o } = He(), s = o(`${t}.enumEnabled`);
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.default`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Default Value" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            je,
            {
              type: "number",
              disabled: r,
              ...a,
              onChange: (i) => a.onChange(
                i.target.value === "" ? null : Number(i.target.value)
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.minimum`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Minimum Value" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.maximum`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Maximum Value" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.exclusiveMin`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Exclusive Minimum" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.exclusiveMax`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Exclusive Maximum" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.multipleOf`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Multiple Of" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            je,
            {
              type: "number",
              disabled: r,
              ...a,
              onChange: (i) => a.onChange(
                i.target.value === "" ? null : Number(i.target.value)
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.format`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Format" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsxs(
            qr,
            {
              onValueChange: a.onChange,
              defaultValue: a.value,
              disabled: r,
              children: [
                /* @__PURE__ */ d.jsx(Zr, { children: /* @__PURE__ */ d.jsx(Ur, { placeholder: "Choose data type" }) }),
                /* @__PURE__ */ d.jsxs(
                  Br,
                  {
                    className: `${e} max-h-48 bg-background text-foreground border-input`,
                    children: [
                      /* @__PURE__ */ d.jsx(xt, { value: "none", children: "none" }),
                      z_.map((i) => /* @__PURE__ */ d.jsx(xt, { value: i, children: i }, i))
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.enumEnabled`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "p-4 flex border border-input rounded-md", children: [
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            ps,
            {
              disabled: r,
              ...a,
              checked: a.value,
              onCheckedChange: a.onChange
            }
          ) }),
          /* @__PURE__ */ d.jsx(ye, { className: "ml-2", children: "Enable Enum" }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    s && /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.enumInput`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Enum Values" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            un,
            {
              disabled: r,
              value: a.value || [],
              onValueChange: a.onChange,
              placeholder: "Enter your enums"
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    )
  ] });
}, J0 = ({
  theme: e,
  basePath: t,
  readOnly: r
}) => {
  const { control: n, watch: o } = He(), s = o(`${t}.enumEnabled`);
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.default`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Default Value" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(je, { disabled: r, ...a }) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.minLength`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Minimum Length" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.maxLength`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Maximum Length" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.pattern`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Pattern (Regular Expression)" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(je, { disabled: r, ...a }) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.format`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Format" }),
          /* @__PURE__ */ d.jsxs(
            qr,
            {
              onValueChange: a.onChange,
              defaultValue: a.value,
              disabled: r,
              children: [
                /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(Zr, { children: /* @__PURE__ */ d.jsx(Ur, { placeholder: "Choose data type" }) }) }),
                /* @__PURE__ */ d.jsxs(
                  Br,
                  {
                    className: `${e} max-h-48 bg-background text-foreground border-input`,
                    children: [
                      /* @__PURE__ */ d.jsx(xt, { value: "none", children: "none" }),
                      F_.map((i) => /* @__PURE__ */ d.jsx(xt, { value: i, children: i }, i))
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.enumEnabled`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "p-4 flex border border-input rounded-md", children: [
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            ps,
            {
              disabled: r,
              ...a,
              checked: a.value,
              onCheckedChange: a.onChange
            }
          ) }),
          /* @__PURE__ */ d.jsx(ye, { className: "ml-2", children: "Enable Enum" }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    s && /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.enumInput`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Enum Values" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            un,
            {
              disabled: r,
              value: a.value || [],
              onValueChange: a.onChange,
              placeholder: "Enter your enums"
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    )
  ] });
}, X0 = ({
  theme: e,
  basePath: t,
  readOnly: r
}) => {
  const { control: n } = He();
  return /* @__PURE__ */ d.jsx("form", { children: /* @__PURE__ */ d.jsx(
    $e,
    {
      control: n,
      name: `${t}.default`,
      render: ({ field: o }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex gap-2", children: [
        /* @__PURE__ */ d.jsx(ye, { children: "Default Value" }),
        /* @__PURE__ */ d.jsxs(
          qr,
          {
            onValueChange: o.onChange,
            defaultValue: o.value,
            disabled: r,
            children: [
              /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(Zr, { children: /* @__PURE__ */ d.jsx(Ur, { placeholder: "False" }) }) }),
              /* @__PURE__ */ d.jsxs(
                Br,
                {
                  className: `${e} max-h-48 bg-background text-foreground border-input`,
                  children: [
                    /* @__PURE__ */ d.jsx(xt, { value: "true", "data-testid": "true", children: "True" }),
                    /* @__PURE__ */ d.jsx(xt, { value: "false", children: "False" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ d.jsx(xe, {})
      ] })
    }
  ) });
}, Q0 = ({ basePath: e, readOnly: t }) => {
  const { control: r } = He();
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: r,
          name: `${e}.minItems`,
          render: ({ field: n }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Minimum Items" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: t,
                ...n,
                value: n.value ?? "",
                onChange: (o) => n.onChange(
                  o.target.value === "" ? null : Number(o.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: r,
          name: `${e}.maxItems`,
          render: ({ field: n }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Maximum Items" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: t,
                ...n,
                value: n.value ?? "",
                onChange: (o) => n.onChange(
                  o.target.value === "" ? null : Number(o.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: r,
          name: `${e}.minContains`,
          render: ({ field: n }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Minimum Contains" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: t,
                ...n,
                value: n.value ?? "",
                onChange: (o) => n.onChange(
                  o.target.value === "" ? null : Number(o.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: r,
          name: `${e}.maxContains`,
          render: ({ field: n }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Maximum Contains" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: t,
                ...n,
                value: n.value ?? "",
                onChange: (o) => n.onChange(
                  o.target.value === "" ? null : Number(o.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: r,
        name: `${e}.uniqueItems`,
        render: ({ field: n }) => /* @__PURE__ */ d.jsxs(ve, { className: "p-4 flex border border-input rounded-md", children: [
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            ps,
            {
              checked: n.value,
              onCheckedChange: n.onChange,
              disabled: t
            }
          ) }),
          /* @__PURE__ */ d.jsx(ye, { className: "ml-2", children: "Unique Items" }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    )
  ] });
}, ew = ({
  theme: e,
  basePath: t,
  readOnly: r
}) => {
  const { control: n, watch: o } = He(), s = o(`${t}.enumEnabled`);
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.default`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Default Value" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            je,
            {
              type: "number",
              disabled: r,
              ...a,
              onChange: (i) => a.onChange(
                i.target.value === "" ? null : Number(i.target.value)
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.minimum`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Minimum Value" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.maximum`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Maximum Value" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.exclusiveMin`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Exclusive Minimum" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: n,
          name: `${t}.exclusiveMax`,
          render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Exclusive Maximum" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: r,
                ...a,
                onChange: (i) => a.onChange(
                  i.target.value === "" ? null : Number(i.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.multipleOf`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Multiple Of" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            je,
            {
              type: "number",
              disabled: r,
              ...a,
              onChange: (i) => a.onChange(
                i.target.value === "" ? null : Number(i.target.value)
              )
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.format`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Format" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsxs(
            qr,
            {
              onValueChange: a.onChange,
              defaultValue: a.value,
              disabled: r,
              children: [
                /* @__PURE__ */ d.jsx(Zr, { children: /* @__PURE__ */ d.jsx(Ur, { placeholder: "Choose data type" }) }),
                /* @__PURE__ */ d.jsxs(
                  Br,
                  {
                    className: `${e} max-h-48 bg-background text-foreground border-input`,
                    children: [
                      /* @__PURE__ */ d.jsx(xt, { value: "none", children: "none" }),
                      M_.map((i) => /* @__PURE__ */ d.jsx(xt, { value: i, children: i }, i))
                    ]
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.enumEnabled`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { className: "p-4 flex border border-input rounded-md", children: [
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            ps,
            {
              disabled: r,
              ...a,
              checked: a.value,
              onCheckedChange: a.onChange,
              defaultValue: 0
            }
          ) }),
          /* @__PURE__ */ d.jsx(ye, { className: "ml-2", children: "Enable Enum" }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    s && /* @__PURE__ */ d.jsx(
      $e,
      {
        control: n,
        name: `${t}.enumInput`,
        render: ({ field: a }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Enum Values" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            un,
            {
              disabled: r,
              value: a.value || [],
              onValueChange: a.onChange,
              placeholder: "Enter your enums"
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    )
  ] });
};
var Sn = { exports: {} }, Ys = {}, jt = {}, Qt = {}, Js = {}, Xs = {}, Qs = {}, Sc;
function Uo() {
  return Sc || (Sc = 1, (function(e) {
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
        return (f = this._str) !== null && f !== void 0 ? f : this._str = this._items.reduce((b, x) => `${b}${x}`, "");
      }
      get names() {
        var f;
        return (f = this._names) !== null && f !== void 0 ? f : this._names = this._items.reduce((b, x) => (x instanceof r && (b[x.str] = (b[x.str] || 0) + 1), b), {});
      }
    }
    e._Code = n, e.nil = new n("");
    function o(_, ...f) {
      const b = [_[0]];
      let x = 0;
      for (; x < f.length; )
        i(b, f[x]), b.push(_[++x]);
      return new n(b);
    }
    e._ = o;
    const s = new n("+");
    function a(_, ...f) {
      const b = [v(_[0])];
      let x = 0;
      for (; x < f.length; )
        b.push(s), i(b, f[x]), b.push(s, v(_[++x]));
      return c(b), new n(b);
    }
    e.str = a;
    function i(_, f) {
      f instanceof n ? _.push(...f._items) : f instanceof r ? _.push(f) : _.push(h(f));
    }
    e.addCodeArg = i;
    function c(_) {
      let f = 1;
      for (; f < _.length - 1; ) {
        if (_[f] === s) {
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
    function h(_) {
      return typeof _ == "number" || typeof _ == "boolean" || _ === null ? _ : v(Array.isArray(_) ? _.join(",") : _);
    }
    function p(_) {
      return new n(v(_));
    }
    e.stringify = p;
    function v(_) {
      return JSON.stringify(_).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = v;
    function w(_) {
      return typeof _ == "string" && e.IDENTIFIER.test(_) ? new n(`.${_}`) : o`[${_}]`;
    }
    e.getProperty = w;
    function y(_) {
      if (typeof _ == "string" && e.IDENTIFIER.test(_))
        return new n(`${_}`);
      throw new Error(`CodeGen: invalid export name: ${_}, use explicit $id name mapping`);
    }
    e.getEsmExportName = y;
    function m(_) {
      return new n(_.toString());
    }
    e.regexpCode = m;
  })(Qs)), Qs;
}
var ea = {}, kc;
function jc() {
  return kc || (kc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = Uo();
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
    class o {
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
        var u, h;
        if (!((h = (u = this._parent) === null || u === void 0 ? void 0 : u._prefixes) === null || h === void 0) && h.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = o;
    class s extends t.Name {
      constructor(l, u) {
        super(u), this.prefix = l;
      }
      setValue(l, { property: u, itemIndex: h }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(u)}[${h}]`;
      }
    }
    e.ValueScopeName = s;
    const a = (0, t._)`\n`;
    class i extends o {
      constructor(l) {
        super(l), this._values = {}, this._scope = l.scope, this.opts = { ...l, _n: l.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new s(l, this._newName(l));
      }
      value(l, u) {
        var h;
        if (u.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const p = this.toName(l), { prefix: v } = p, w = (h = u.key) !== null && h !== void 0 ? h : u.ref;
        let y = this._values[v];
        if (y) {
          const f = y.get(w);
          if (f)
            return f;
        } else
          y = this._values[v] = /* @__PURE__ */ new Map();
        y.set(w, p);
        const m = this._scope[v] || (this._scope[v] = []), _ = m.length;
        return m[_] = u.ref, p.setValue(u, { property: v, itemIndex: _ }), p;
      }
      getValue(l, u) {
        const h = this._values[l];
        if (h)
          return h.get(u);
      }
      scopeRefs(l, u = this._values) {
        return this._reduceValues(u, (h) => {
          if (h.scopePath === void 0)
            throw new Error(`CodeGen: name "${h}" has no value`);
          return (0, t._)`${l}${h.scopePath}`;
        });
      }
      scopeCode(l = this._values, u, h) {
        return this._reduceValues(l, (p) => {
          if (p.value === void 0)
            throw new Error(`CodeGen: name "${p}" has no value`);
          return p.value.code;
        }, u, h);
      }
      _reduceValues(l, u, h = {}, p) {
        let v = t.nil;
        for (const w in l) {
          const y = l[w];
          if (!y)
            continue;
          const m = h[w] = h[w] || /* @__PURE__ */ new Map();
          y.forEach((_) => {
            if (m.has(_))
              return;
            m.set(_, n.Started);
            let f = u(_);
            if (f) {
              const b = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              v = (0, t._)`${v}${b} ${_} = ${f};${this.opts._n}`;
            } else if (f = p?.(_))
              v = (0, t._)`${v}${f}${this.opts._n}`;
            else
              throw new r(_);
            m.set(_, n.Completed);
          });
        }
        return v;
      }
    }
    e.ValueScope = i;
  })(ea)), ea;
}
var Cc;
function pe() {
  return Cc || (Cc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = Uo(), r = jc();
    var n = Uo();
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
    var o = jc();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return o.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return o.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return o.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return o.varKinds;
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
    class s {
      optimizeNodes() {
        return this;
      }
      optimizeNames(k, R) {
        return this;
      }
    }
    class a extends s {
      constructor(k, R, L) {
        super(), this.varKind = k, this.name = R, this.rhs = L;
      }
      render({ es5: k, _n: R }) {
        const L = k ? r.varKinds.var : this.varKind, z = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${L} ${this.name}${z};` + R;
      }
      optimizeNames(k, R) {
        if (k[this.name.str])
          return this.rhs && (this.rhs = B(this.rhs, k, R)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class i extends s {
      constructor(k, R, L) {
        super(), this.lhs = k, this.rhs = R, this.sideEffects = L;
      }
      render({ _n: k }) {
        return `${this.lhs} = ${this.rhs};` + k;
      }
      optimizeNames(k, R) {
        if (!(this.lhs instanceof t.Name && !k[this.lhs.str] && !this.sideEffects))
          return this.rhs = B(this.rhs, k, R), this;
      }
      get names() {
        const k = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return U(k, this.rhs);
      }
    }
    class c extends i {
      constructor(k, R, L, z) {
        super(k, L, z), this.op = R;
      }
      render({ _n: k }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + k;
      }
    }
    class l extends s {
      constructor(k) {
        super(), this.label = k, this.names = {};
      }
      render({ _n: k }) {
        return `${this.label}:` + k;
      }
    }
    class u extends s {
      constructor(k) {
        super(), this.label = k, this.names = {};
      }
      render({ _n: k }) {
        return `break${this.label ? ` ${this.label}` : ""};` + k;
      }
    }
    class h extends s {
      constructor(k) {
        super(), this.error = k;
      }
      render({ _n: k }) {
        return `throw ${this.error};` + k;
      }
      get names() {
        return this.error.names;
      }
    }
    class p extends s {
      constructor(k) {
        super(), this.code = k;
      }
      render({ _n: k }) {
        return `${this.code};` + k;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(k, R) {
        return this.code = B(this.code, k, R), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class v extends s {
      constructor(k = []) {
        super(), this.nodes = k;
      }
      render(k) {
        return this.nodes.reduce((R, L) => R + L.render(k), "");
      }
      optimizeNodes() {
        const { nodes: k } = this;
        let R = k.length;
        for (; R--; ) {
          const L = k[R].optimizeNodes();
          Array.isArray(L) ? k.splice(R, 1, ...L) : L ? k[R] = L : k.splice(R, 1);
        }
        return k.length > 0 ? this : void 0;
      }
      optimizeNames(k, R) {
        const { nodes: L } = this;
        let z = L.length;
        for (; z--; ) {
          const Y = L[z];
          Y.optimizeNames(k, R) || (Q(k, Y.names), L.splice(z, 1));
        }
        return L.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((k, R) => F(k, R.names), {});
      }
    }
    class w extends v {
      render(k) {
        return "{" + k._n + super.render(k) + "}" + k._n;
      }
    }
    class y extends v {
    }
    class m extends w {
    }
    m.kind = "else";
    class _ extends w {
      constructor(k, R) {
        super(R), this.condition = k;
      }
      render(k) {
        let R = `if(${this.condition})` + super.render(k);
        return this.else && (R += "else " + this.else.render(k)), R;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const k = this.condition;
        if (k === !0)
          return this.nodes;
        let R = this.else;
        if (R) {
          const L = R.optimizeNodes();
          R = this.else = Array.isArray(L) ? new m(L) : L;
        }
        if (R)
          return k === !1 ? R instanceof _ ? R : R.nodes : this.nodes.length ? this : new _(K(k), R instanceof _ ? [R] : R.nodes);
        if (!(k === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(k, R) {
        var L;
        if (this.else = (L = this.else) === null || L === void 0 ? void 0 : L.optimizeNames(k, R), !!(super.optimizeNames(k, R) || this.else))
          return this.condition = B(this.condition, k, R), this;
      }
      get names() {
        const k = super.names;
        return U(k, this.condition), this.else && F(k, this.else.names), k;
      }
    }
    _.kind = "if";
    class f extends w {
    }
    f.kind = "for";
    class b extends f {
      constructor(k) {
        super(), this.iteration = k;
      }
      render(k) {
        return `for(${this.iteration})` + super.render(k);
      }
      optimizeNames(k, R) {
        if (super.optimizeNames(k, R))
          return this.iteration = B(this.iteration, k, R), this;
      }
      get names() {
        return F(super.names, this.iteration.names);
      }
    }
    class x extends f {
      constructor(k, R, L, z) {
        super(), this.varKind = k, this.name = R, this.from = L, this.to = z;
      }
      render(k) {
        const R = k.es5 ? r.varKinds.var : this.varKind, { name: L, from: z, to: Y } = this;
        return `for(${R} ${L}=${z}; ${L}<${Y}; ${L}++)` + super.render(k);
      }
      get names() {
        const k = U(super.names, this.from);
        return U(k, this.to);
      }
    }
    class g extends f {
      constructor(k, R, L, z) {
        super(), this.loop = k, this.varKind = R, this.name = L, this.iterable = z;
      }
      render(k) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(k);
      }
      optimizeNames(k, R) {
        if (super.optimizeNames(k, R))
          return this.iterable = B(this.iterable, k, R), this;
      }
      get names() {
        return F(super.names, this.iterable.names);
      }
    }
    class E extends w {
      constructor(k, R, L) {
        super(), this.name = k, this.args = R, this.async = L;
      }
      render(k) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(k);
      }
    }
    E.kind = "func";
    class S extends v {
      render(k) {
        return "return " + super.render(k);
      }
    }
    S.kind = "return";
    class C extends w {
      render(k) {
        let R = "try" + super.render(k);
        return this.catch && (R += this.catch.render(k)), this.finally && (R += this.finally.render(k)), R;
      }
      optimizeNodes() {
        var k, R;
        return super.optimizeNodes(), (k = this.catch) === null || k === void 0 || k.optimizeNodes(), (R = this.finally) === null || R === void 0 || R.optimizeNodes(), this;
      }
      optimizeNames(k, R) {
        var L, z;
        return super.optimizeNames(k, R), (L = this.catch) === null || L === void 0 || L.optimizeNames(k, R), (z = this.finally) === null || z === void 0 || z.optimizeNames(k, R), this;
      }
      get names() {
        const k = super.names;
        return this.catch && F(k, this.catch.names), this.finally && F(k, this.finally.names), k;
      }
    }
    class I extends w {
      constructor(k) {
        super(), this.error = k;
      }
      render(k) {
        return `catch(${this.error})` + super.render(k);
      }
    }
    I.kind = "catch";
    class q extends w {
      render(k) {
        return "finally" + super.render(k);
      }
    }
    q.kind = "finally";
    class D {
      constructor(k, R = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...R, _n: R.lines ? `
` : "" }, this._extScope = k, this._scope = new r.Scope({ parent: k }), this._nodes = [new y()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(k) {
        return this._scope.name(k);
      }
      // reserves unique name in the external scope
      scopeName(k) {
        return this._extScope.name(k);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(k, R) {
        const L = this._extScope.value(k, R);
        return (this._values[L.prefix] || (this._values[L.prefix] = /* @__PURE__ */ new Set())).add(L), L;
      }
      getScopeValue(k, R) {
        return this._extScope.getValue(k, R);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(k) {
        return this._extScope.scopeRefs(k, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(k, R, L, z) {
        const Y = this._scope.toName(R);
        return L !== void 0 && z && (this._constants[Y.str] = L), this._leafNode(new a(k, Y, L)), Y;
      }
      // `const` declaration (`var` in es5 mode)
      const(k, R, L) {
        return this._def(r.varKinds.const, k, R, L);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(k, R, L) {
        return this._def(r.varKinds.let, k, R, L);
      }
      // `var` declaration with optional assignment
      var(k, R, L) {
        return this._def(r.varKinds.var, k, R, L);
      }
      // assignment code
      assign(k, R, L) {
        return this._leafNode(new i(k, R, L));
      }
      // `+=` code
      add(k, R) {
        return this._leafNode(new c(k, e.operators.ADD, R));
      }
      // appends passed SafeExpr to code or executes Block
      code(k) {
        return typeof k == "function" ? k() : k !== t.nil && this._leafNode(new p(k)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...k) {
        const R = ["{"];
        for (const [L, z] of k)
          R.length > 1 && R.push(","), R.push(L), (L !== z || this.opts.es5) && (R.push(":"), (0, t.addCodeArg)(R, z));
        return R.push("}"), new t._Code(R);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(k, R, L) {
        if (this._blockNode(new _(k)), R && L)
          this.code(R).else().code(L).endIf();
        else if (R)
          this.code(R).endIf();
        else if (L)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(k) {
        return this._elseNode(new _(k));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new m());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(_, m);
      }
      _for(k, R) {
        return this._blockNode(k), R && this.code(R).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(k, R) {
        return this._for(new b(k), R);
      }
      // `for` statement for a range of values
      forRange(k, R, L, z, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const le = this._scope.toName(k);
        return this._for(new x(Y, le, R, L), () => z(le));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(k, R, L, z = r.varKinds.const) {
        const Y = this._scope.toName(k);
        if (this.opts.es5) {
          const le = R instanceof t.Name ? R : this.var("_arr", R);
          return this.forRange("_i", 0, (0, t._)`${le}.length`, (se) => {
            this.var(Y, (0, t._)`${le}[${se}]`), L(Y);
          });
        }
        return this._for(new g("of", z, Y, R), () => L(Y));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(k, R, L, z = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(k, (0, t._)`Object.keys(${R})`, L);
        const Y = this._scope.toName(k);
        return this._for(new g("in", z, Y, R), () => L(Y));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(f);
      }
      // `label` statement
      label(k) {
        return this._leafNode(new l(k));
      }
      // `break` statement
      break(k) {
        return this._leafNode(new u(k));
      }
      // `return` statement
      return(k) {
        const R = new S();
        if (this._blockNode(R), this.code(k), R.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(S);
      }
      // `try` statement
      try(k, R, L) {
        if (!R && !L)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const z = new C();
        if (this._blockNode(z), this.code(k), R) {
          const Y = this.name("e");
          this._currNode = z.catch = new I(Y), R(Y);
        }
        return L && (this._currNode = z.finally = new q(), this.code(L)), this._endBlockNode(I, q);
      }
      // `throw` statement
      throw(k) {
        return this._leafNode(new h(k));
      }
      // start self-balancing block
      block(k, R) {
        return this._blockStarts.push(this._nodes.length), k && this.code(k).endBlock(R), this;
      }
      // end the current self-balancing block
      endBlock(k) {
        const R = this._blockStarts.pop();
        if (R === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const L = this._nodes.length - R;
        if (L < 0 || k !== void 0 && L !== k)
          throw new Error(`CodeGen: wrong number of nodes: ${L} vs ${k} expected`);
        return this._nodes.length = R, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(k, R = t.nil, L, z) {
        return this._blockNode(new E(k, R, L)), z && this.code(z).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(E);
      }
      optimize(k = 1) {
        for (; k-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(k) {
        return this._currNode.nodes.push(k), this;
      }
      _blockNode(k) {
        this._currNode.nodes.push(k), this._nodes.push(k);
      }
      _endBlockNode(k, R) {
        const L = this._currNode;
        if (L instanceof k || R && L instanceof R)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${R ? `${k.kind}/${R.kind}` : k.kind}"`);
      }
      _elseNode(k) {
        const R = this._currNode;
        if (!(R instanceof _))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = R.else = k, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const k = this._nodes;
        return k[k.length - 1];
      }
      set _currNode(k) {
        const R = this._nodes;
        R[R.length - 1] = k;
      }
    }
    e.CodeGen = D;
    function F(N, k) {
      for (const R in k)
        N[R] = (N[R] || 0) + (k[R] || 0);
      return N;
    }
    function U(N, k) {
      return k instanceof t._CodeOrName ? F(N, k.names) : N;
    }
    function B(N, k, R) {
      if (N instanceof t.Name)
        return L(N);
      if (!z(N))
        return N;
      return new t._Code(N._items.reduce((Y, le) => (le instanceof t.Name && (le = L(le)), le instanceof t._Code ? Y.push(...le._items) : Y.push(le), Y), []));
      function L(Y) {
        const le = R[Y.str];
        return le === void 0 || k[Y.str] !== 1 ? Y : (delete k[Y.str], le);
      }
      function z(Y) {
        return Y instanceof t._Code && Y._items.some((le) => le instanceof t.Name && k[le.str] === 1 && R[le.str] !== void 0);
      }
    }
    function Q(N, k) {
      for (const R in k)
        N[R] = (N[R] || 0) - (k[R] || 0);
    }
    function K(N) {
      return typeof N == "boolean" || typeof N == "number" || N === null ? !N : (0, t._)`!${M(N)}`;
    }
    e.not = K;
    const oe = j(e.operators.AND);
    function V(...N) {
      return N.reduce(oe);
    }
    e.and = V;
    const fe = j(e.operators.OR);
    function W(...N) {
      return N.reduce(fe);
    }
    e.or = W;
    function j(N) {
      return (k, R) => k === t.nil ? R : R === t.nil ? k : (0, t._)`${M(k)} ${N} ${M(R)}`;
    }
    function M(N) {
      return N instanceof t.Name ? N : (0, t._)`(${N})`;
    }
  })(Xs)), Xs;
}
var be = {}, Rc;
function Ee() {
  if (Rc) return be;
  Rc = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.checkStrictMode = be.getErrorPath = be.Type = be.useFunc = be.setEvaluated = be.evaluatedPropsToName = be.mergeEvaluated = be.eachItem = be.unescapeJsonPointer = be.escapeJsonPointer = be.escapeFragment = be.unescapeFragment = be.schemaRefOrVal = be.schemaHasRulesButRef = be.schemaHasRules = be.checkUnknownRules = be.alwaysValidSchema = be.toHash = void 0;
  const e = pe(), t = Uo();
  function r(g) {
    const E = {};
    for (const S of g)
      E[S] = !0;
    return E;
  }
  be.toHash = r;
  function n(g, E) {
    return typeof E == "boolean" ? E : Object.keys(E).length === 0 ? !0 : (o(g, E), !s(E, g.self.RULES.all));
  }
  be.alwaysValidSchema = n;
  function o(g, E = g.schema) {
    const { opts: S, self: C } = g;
    if (!S.strictSchema || typeof E == "boolean")
      return;
    const I = C.RULES.keywords;
    for (const q in E)
      I[q] || x(g, `unknown keyword: "${q}"`);
  }
  be.checkUnknownRules = o;
  function s(g, E) {
    if (typeof g == "boolean")
      return !g;
    for (const S in g)
      if (E[S])
        return !0;
    return !1;
  }
  be.schemaHasRules = s;
  function a(g, E) {
    if (typeof g == "boolean")
      return !g;
    for (const S in g)
      if (S !== "$ref" && E.all[S])
        return !0;
    return !1;
  }
  be.schemaHasRulesButRef = a;
  function i({ topSchemaRef: g, schemaPath: E }, S, C, I) {
    if (!I) {
      if (typeof S == "number" || typeof S == "boolean")
        return S;
      if (typeof S == "string")
        return (0, e._)`${S}`;
    }
    return (0, e._)`${g}${E}${(0, e.getProperty)(C)}`;
  }
  be.schemaRefOrVal = i;
  function c(g) {
    return h(decodeURIComponent(g));
  }
  be.unescapeFragment = c;
  function l(g) {
    return encodeURIComponent(u(g));
  }
  be.escapeFragment = l;
  function u(g) {
    return typeof g == "number" ? `${g}` : g.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  be.escapeJsonPointer = u;
  function h(g) {
    return g.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  be.unescapeJsonPointer = h;
  function p(g, E) {
    if (Array.isArray(g))
      for (const S of g)
        E(S);
    else
      E(g);
  }
  be.eachItem = p;
  function v({ mergeNames: g, mergeToName: E, mergeValues: S, resultToName: C }) {
    return (I, q, D, F) => {
      const U = D === void 0 ? q : D instanceof e.Name ? (q instanceof e.Name ? g(I, q, D) : E(I, q, D), D) : q instanceof e.Name ? (E(I, D, q), q) : S(q, D);
      return F === e.Name && !(U instanceof e.Name) ? C(I, U) : U;
    };
  }
  be.mergeEvaluated = {
    props: v({
      mergeNames: (g, E, S) => g.if((0, e._)`${S} !== true && ${E} !== undefined`, () => {
        g.if((0, e._)`${E} === true`, () => g.assign(S, !0), () => g.assign(S, (0, e._)`${S} || {}`).code((0, e._)`Object.assign(${S}, ${E})`));
      }),
      mergeToName: (g, E, S) => g.if((0, e._)`${S} !== true`, () => {
        E === !0 ? g.assign(S, !0) : (g.assign(S, (0, e._)`${S} || {}`), y(g, S, E));
      }),
      mergeValues: (g, E) => g === !0 ? !0 : { ...g, ...E },
      resultToName: w
    }),
    items: v({
      mergeNames: (g, E, S) => g.if((0, e._)`${S} !== true && ${E} !== undefined`, () => g.assign(S, (0, e._)`${E} === true ? true : ${S} > ${E} ? ${S} : ${E}`)),
      mergeToName: (g, E, S) => g.if((0, e._)`${S} !== true`, () => g.assign(S, E === !0 ? !0 : (0, e._)`${S} > ${E} ? ${S} : ${E}`)),
      mergeValues: (g, E) => g === !0 ? !0 : Math.max(g, E),
      resultToName: (g, E) => g.var("items", E)
    })
  };
  function w(g, E) {
    if (E === !0)
      return g.var("props", !0);
    const S = g.var("props", (0, e._)`{}`);
    return E !== void 0 && y(g, S, E), S;
  }
  be.evaluatedPropsToName = w;
  function y(g, E, S) {
    Object.keys(S).forEach((C) => g.assign((0, e._)`${E}${(0, e.getProperty)(C)}`, !0));
  }
  be.setEvaluated = y;
  const m = {};
  function _(g, E) {
    return g.scopeValue("func", {
      ref: E,
      code: m[E.code] || (m[E.code] = new t._Code(E.code))
    });
  }
  be.useFunc = _;
  var f;
  (function(g) {
    g[g.Num = 0] = "Num", g[g.Str = 1] = "Str";
  })(f || (be.Type = f = {}));
  function b(g, E, S) {
    if (g instanceof e.Name) {
      const C = E === f.Num;
      return S ? C ? (0, e._)`"[" + ${g} + "]"` : (0, e._)`"['" + ${g} + "']"` : C ? (0, e._)`"/" + ${g}` : (0, e._)`"/" + ${g}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return S ? (0, e.getProperty)(g).toString() : "/" + u(g);
  }
  be.getErrorPath = b;
  function x(g, E, S = g.opts.strictSchema) {
    if (S) {
      if (E = `strict mode: ${E}`, S === !0)
        throw new Error(E);
      g.self.logger.warn(E);
    }
  }
  return be.checkStrictMode = x, be;
}
var kn = {}, Pc;
function gt() {
  if (Pc) return kn;
  Pc = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = pe(), t = {
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
  return kn.default = t, kn;
}
var Ac;
function hs() {
  return Ac || (Ac = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = pe(), r = Ee(), n = gt();
    e.keywordError = {
      message: ({ keyword: m }) => (0, t.str)`must pass "${m}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: m, schemaType: _ }) => _ ? (0, t.str)`"${m}" keyword must be ${_} ($data)` : (0, t.str)`"${m}" keyword is invalid ($data)`
    };
    function o(m, _ = e.keywordError, f, b) {
      const { it: x } = m, { gen: g, compositeRule: E, allErrors: S } = x, C = h(m, _, f);
      b ?? (E || S) ? c(g, C) : l(x, (0, t._)`[${C}]`);
    }
    e.reportError = o;
    function s(m, _ = e.keywordError, f) {
      const { it: b } = m, { gen: x, compositeRule: g, allErrors: E } = b, S = h(m, _, f);
      c(x, S), g || E || l(b, n.default.vErrors);
    }
    e.reportExtraError = s;
    function a(m, _) {
      m.assign(n.default.errors, _), m.if((0, t._)`${n.default.vErrors} !== null`, () => m.if(_, () => m.assign((0, t._)`${n.default.vErrors}.length`, _), () => m.assign(n.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function i({ gen: m, keyword: _, schemaValue: f, data: b, errsCount: x, it: g }) {
      if (x === void 0)
        throw new Error("ajv implementation error");
      const E = m.name("err");
      m.forRange("i", x, n.default.errors, (S) => {
        m.const(E, (0, t._)`${n.default.vErrors}[${S}]`), m.if((0, t._)`${E}.instancePath === undefined`, () => m.assign((0, t._)`${E}.instancePath`, (0, t.strConcat)(n.default.instancePath, g.errorPath))), m.assign((0, t._)`${E}.schemaPath`, (0, t.str)`${g.errSchemaPath}/${_}`), g.opts.verbose && (m.assign((0, t._)`${E}.schema`, f), m.assign((0, t._)`${E}.data`, b));
      });
    }
    e.extendErrors = i;
    function c(m, _) {
      const f = m.const("err", _);
      m.if((0, t._)`${n.default.vErrors} === null`, () => m.assign(n.default.vErrors, (0, t._)`[${f}]`), (0, t._)`${n.default.vErrors}.push(${f})`), m.code((0, t._)`${n.default.errors}++`);
    }
    function l(m, _) {
      const { gen: f, validateName: b, schemaEnv: x } = m;
      x.$async ? f.throw((0, t._)`new ${m.ValidationError}(${_})`) : (f.assign((0, t._)`${b}.errors`, _), f.return(!1));
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
    function h(m, _, f) {
      const { createErrors: b } = m.it;
      return b === !1 ? (0, t._)`{}` : p(m, _, f);
    }
    function p(m, _, f = {}) {
      const { gen: b, it: x } = m, g = [
        v(x, f),
        w(m, f)
      ];
      return y(m, _, g), b.object(...g);
    }
    function v({ errorPath: m }, { instancePath: _ }) {
      const f = _ ? (0, t.str)`${m}${(0, r.getErrorPath)(_, r.Type.Str)}` : m;
      return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, f)];
    }
    function w({ keyword: m, it: { errSchemaPath: _ } }, { schemaPath: f, parentSchema: b }) {
      let x = b ? _ : (0, t.str)`${_}/${m}`;
      return f && (x = (0, t.str)`${x}${(0, r.getErrorPath)(f, r.Type.Str)}`), [u.schemaPath, x];
    }
    function y(m, { params: _, message: f }, b) {
      const { keyword: x, data: g, schemaValue: E, it: S } = m, { opts: C, propertyName: I, topSchemaRef: q, schemaPath: D } = S;
      b.push([u.keyword, x], [u.params, typeof _ == "function" ? _(m) : _ || (0, t._)`{}`]), C.messages && b.push([u.message, typeof f == "function" ? f(m) : f]), C.verbose && b.push([u.schema, E], [u.parentSchema, (0, t._)`${q}${D}`], [n.default.data, g]), I && b.push([u.propertyName, I]);
    }
  })(Js)), Js;
}
var Nc;
function tw() {
  if (Nc) return Qt;
  Nc = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.boolOrEmptySchema = Qt.topBoolOrEmptySchema = void 0;
  const e = hs(), t = pe(), r = gt(), n = {
    message: "boolean schema is false"
  };
  function o(i) {
    const { gen: c, schema: l, validateName: u } = i;
    l === !1 ? a(i, !1) : typeof l == "object" && l.$async === !0 ? c.return(r.default.data) : (c.assign((0, t._)`${u}.errors`, null), c.return(!0));
  }
  Qt.topBoolOrEmptySchema = o;
  function s(i, c) {
    const { gen: l, schema: u } = i;
    u === !1 ? (l.var(c, !1), a(i)) : l.var(c, !0);
  }
  Qt.boolOrEmptySchema = s;
  function a(i, c) {
    const { gen: l, data: u } = i, h = {
      gen: l,
      keyword: "false schema",
      data: u,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: i
    };
    (0, e.reportError)(h, n, void 0, c);
  }
  return Qt;
}
var Ze = {}, er = {}, Tc;
function Tm() {
  if (Tc) return er;
  Tc = 1, Object.defineProperty(er, "__esModule", { value: !0 }), er.getRules = er.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(o) {
    return typeof o == "string" && t.has(o);
  }
  er.isJSONType = r;
  function n() {
    const o = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...o, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, o.number, o.string, o.array, o.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return er.getRules = n, er;
}
var Ct = {}, Ic;
function Im() {
  if (Ic) return Ct;
  Ic = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.shouldUseRule = Ct.shouldUseGroup = Ct.schemaHasRulesForType = void 0;
  function e({ schema: n, self: o }, s) {
    const a = o.RULES.types[s];
    return a && a !== !0 && t(n, a);
  }
  Ct.schemaHasRulesForType = e;
  function t(n, o) {
    return o.rules.some((s) => r(n, s));
  }
  Ct.shouldUseGroup = t;
  function r(n, o) {
    var s;
    return n[o.keyword] !== void 0 || ((s = o.definition.implements) === null || s === void 0 ? void 0 : s.some((a) => n[a] !== void 0));
  }
  return Ct.shouldUseRule = r, Ct;
}
var Oc;
function Zo() {
  if (Oc) return Ze;
  Oc = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.reportTypeError = Ze.checkDataTypes = Ze.checkDataType = Ze.coerceAndCheckDataType = Ze.getJSONTypes = Ze.getSchemaTypes = Ze.DataType = void 0;
  const e = Tm(), t = Im(), r = hs(), n = pe(), o = Ee();
  var s;
  (function(f) {
    f[f.Correct = 0] = "Correct", f[f.Wrong = 1] = "Wrong";
  })(s || (Ze.DataType = s = {}));
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
  Ze.getSchemaTypes = a;
  function i(f) {
    const b = Array.isArray(f) ? f : f ? [f] : [];
    if (b.every(e.isJSONType))
      return b;
    throw new Error("type must be JSONType or JSONType[]: " + b.join(","));
  }
  Ze.getJSONTypes = i;
  function c(f, b) {
    const { gen: x, data: g, opts: E } = f, S = u(b, E.coerceTypes), C = b.length > 0 && !(S.length === 0 && b.length === 1 && (0, t.schemaHasRulesForType)(f, b[0]));
    if (C) {
      const I = w(b, g, E.strictNumbers, s.Wrong);
      x.if(I, () => {
        S.length ? h(f, b, S) : m(f);
      });
    }
    return C;
  }
  Ze.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function u(f, b) {
    return b ? f.filter((x) => l.has(x) || b === "array" && x === "array") : [];
  }
  function h(f, b, x) {
    const { gen: g, data: E, opts: S } = f, C = g.let("dataType", (0, n._)`typeof ${E}`), I = g.let("coerced", (0, n._)`undefined`);
    S.coerceTypes === "array" && g.if((0, n._)`${C} == 'object' && Array.isArray(${E}) && ${E}.length == 1`, () => g.assign(E, (0, n._)`${E}[0]`).assign(C, (0, n._)`typeof ${E}`).if(w(b, E, S.strictNumbers), () => g.assign(I, E))), g.if((0, n._)`${I} !== undefined`);
    for (const D of x)
      (l.has(D) || D === "array" && S.coerceTypes === "array") && q(D);
    g.else(), m(f), g.endIf(), g.if((0, n._)`${I} !== undefined`, () => {
      g.assign(E, I), p(f, I);
    });
    function q(D) {
      switch (D) {
        case "string":
          g.elseIf((0, n._)`${C} == "number" || ${C} == "boolean"`).assign(I, (0, n._)`"" + ${E}`).elseIf((0, n._)`${E} === null`).assign(I, (0, n._)`""`);
          return;
        case "number":
          g.elseIf((0, n._)`${C} == "boolean" || ${E} === null
              || (${C} == "string" && ${E} && ${E} == +${E})`).assign(I, (0, n._)`+${E}`);
          return;
        case "integer":
          g.elseIf((0, n._)`${C} === "boolean" || ${E} === null
              || (${C} === "string" && ${E} && ${E} == +${E} && !(${E} % 1))`).assign(I, (0, n._)`+${E}`);
          return;
        case "boolean":
          g.elseIf((0, n._)`${E} === "false" || ${E} === 0 || ${E} === null`).assign(I, !1).elseIf((0, n._)`${E} === "true" || ${E} === 1`).assign(I, !0);
          return;
        case "null":
          g.elseIf((0, n._)`${E} === "" || ${E} === 0 || ${E} === false`), g.assign(I, null);
          return;
        case "array":
          g.elseIf((0, n._)`${C} === "string" || ${C} === "number"
              || ${C} === "boolean" || ${E} === null`).assign(I, (0, n._)`[${E}]`);
      }
    }
  }
  function p({ gen: f, parentData: b, parentDataProperty: x }, g) {
    f.if((0, n._)`${b} !== undefined`, () => f.assign((0, n._)`${b}[${x}]`, g));
  }
  function v(f, b, x, g = s.Correct) {
    const E = g === s.Correct ? n.operators.EQ : n.operators.NEQ;
    let S;
    switch (f) {
      case "null":
        return (0, n._)`${b} ${E} null`;
      case "array":
        S = (0, n._)`Array.isArray(${b})`;
        break;
      case "object":
        S = (0, n._)`${b} && typeof ${b} == "object" && !Array.isArray(${b})`;
        break;
      case "integer":
        S = C((0, n._)`!(${b} % 1) && !isNaN(${b})`);
        break;
      case "number":
        S = C();
        break;
      default:
        return (0, n._)`typeof ${b} ${E} ${f}`;
    }
    return g === s.Correct ? S : (0, n.not)(S);
    function C(I = n.nil) {
      return (0, n.and)((0, n._)`typeof ${b} == "number"`, I, x ? (0, n._)`isFinite(${b})` : n.nil);
    }
  }
  Ze.checkDataType = v;
  function w(f, b, x, g) {
    if (f.length === 1)
      return v(f[0], b, x, g);
    let E;
    const S = (0, o.toHash)(f);
    if (S.array && S.object) {
      const C = (0, n._)`typeof ${b} != "object"`;
      E = S.null ? C : (0, n._)`!${b} || ${C}`, delete S.null, delete S.array, delete S.object;
    } else
      E = n.nil;
    S.number && delete S.integer;
    for (const C in S)
      E = (0, n.and)(E, v(C, b, x, g));
    return E;
  }
  Ze.checkDataTypes = w;
  const y = {
    message: ({ schema: f }) => `must be ${f}`,
    params: ({ schema: f, schemaValue: b }) => typeof f == "string" ? (0, n._)`{type: ${f}}` : (0, n._)`{type: ${b}}`
  };
  function m(f) {
    const b = _(f);
    (0, r.reportError)(b, y);
  }
  Ze.reportTypeError = m;
  function _(f) {
    const { gen: b, data: x, schema: g } = f, E = (0, o.schemaRefOrVal)(f, g, "type");
    return {
      gen: b,
      keyword: "type",
      data: x,
      schema: g.type,
      schemaCode: E,
      schemaValue: E,
      parentSchema: g,
      params: {},
      it: f
    };
  }
  return Ze;
}
var Yr = {}, Dc;
function rw() {
  if (Dc) return Yr;
  Dc = 1, Object.defineProperty(Yr, "__esModule", { value: !0 }), Yr.assignDefaults = void 0;
  const e = pe(), t = Ee();
  function r(o, s) {
    const { properties: a, items: i } = o.schema;
    if (s === "object" && a)
      for (const c in a)
        n(o, c, a[c].default);
    else s === "array" && Array.isArray(i) && i.forEach((c, l) => n(o, l, c.default));
  }
  Yr.assignDefaults = r;
  function n(o, s, a) {
    const { gen: i, compositeRule: c, data: l, opts: u } = o;
    if (a === void 0)
      return;
    const h = (0, e._)`${l}${(0, e.getProperty)(s)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${h}`);
      return;
    }
    let p = (0, e._)`${h} === undefined`;
    u.useDefaults === "empty" && (p = (0, e._)`${p} || ${h} === null || ${h} === ""`), i.if(p, (0, e._)`${h} = ${(0, e.stringify)(a)}`);
  }
  return Yr;
}
var ct = {}, Ne = {}, Mc;
function vt() {
  if (Mc) return Ne;
  Mc = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.validateUnion = Ne.validateArray = Ne.usePattern = Ne.callValidateCode = Ne.schemaProperties = Ne.allSchemaProperties = Ne.noPropertyInData = Ne.propertyInData = Ne.isOwnProperty = Ne.hasPropFunc = Ne.reportMissingProp = Ne.checkMissingProp = Ne.checkReportMissingProp = void 0;
  const e = pe(), t = Ee(), r = gt(), n = Ee();
  function o(f, b) {
    const { gen: x, data: g, it: E } = f;
    x.if(u(x, g, b, E.opts.ownProperties), () => {
      f.setParams({ missingProperty: (0, e._)`${b}` }, !0), f.error();
    });
  }
  Ne.checkReportMissingProp = o;
  function s({ gen: f, data: b, it: { opts: x } }, g, E) {
    return (0, e.or)(...g.map((S) => (0, e.and)(u(f, b, S, x.ownProperties), (0, e._)`${E} = ${S}`)));
  }
  Ne.checkMissingProp = s;
  function a(f, b) {
    f.setParams({ missingProperty: b }, !0), f.error();
  }
  Ne.reportMissingProp = a;
  function i(f) {
    return f.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  Ne.hasPropFunc = i;
  function c(f, b, x) {
    return (0, e._)`${i(f)}.call(${b}, ${x})`;
  }
  Ne.isOwnProperty = c;
  function l(f, b, x, g) {
    const E = (0, e._)`${b}${(0, e.getProperty)(x)} !== undefined`;
    return g ? (0, e._)`${E} && ${c(f, b, x)}` : E;
  }
  Ne.propertyInData = l;
  function u(f, b, x, g) {
    const E = (0, e._)`${b}${(0, e.getProperty)(x)} === undefined`;
    return g ? (0, e.or)(E, (0, e.not)(c(f, b, x))) : E;
  }
  Ne.noPropertyInData = u;
  function h(f) {
    return f ? Object.keys(f).filter((b) => b !== "__proto__") : [];
  }
  Ne.allSchemaProperties = h;
  function p(f, b) {
    return h(b).filter((x) => !(0, t.alwaysValidSchema)(f, b[x]));
  }
  Ne.schemaProperties = p;
  function v({ schemaCode: f, data: b, it: { gen: x, topSchemaRef: g, schemaPath: E, errorPath: S }, it: C }, I, q, D) {
    const F = D ? (0, e._)`${f}, ${b}, ${g}${E}` : b, U = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, S)],
      [r.default.parentData, C.parentData],
      [r.default.parentDataProperty, C.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    C.opts.dynamicRef && U.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const B = (0, e._)`${F}, ${x.object(...U)}`;
    return q !== e.nil ? (0, e._)`${I}.call(${q}, ${B})` : (0, e._)`${I}(${B})`;
  }
  Ne.callValidateCode = v;
  const w = (0, e._)`new RegExp`;
  function y({ gen: f, it: { opts: b } }, x) {
    const g = b.unicodeRegExp ? "u" : "", { regExp: E } = b.code, S = E(x, g);
    return f.scopeValue("pattern", {
      key: S.toString(),
      ref: S,
      code: (0, e._)`${E.code === "new RegExp" ? w : (0, n.useFunc)(f, E)}(${x}, ${g})`
    });
  }
  Ne.usePattern = y;
  function m(f) {
    const { gen: b, data: x, keyword: g, it: E } = f, S = b.name("valid");
    if (E.allErrors) {
      const I = b.let("valid", !0);
      return C(() => b.assign(I, !1)), I;
    }
    return b.var(S, !0), C(() => b.break()), S;
    function C(I) {
      const q = b.const("len", (0, e._)`${x}.length`);
      b.forRange("i", 0, q, (D) => {
        f.subschema({
          keyword: g,
          dataProp: D,
          dataPropType: t.Type.Num
        }, S), b.if((0, e.not)(S), I);
      });
    }
  }
  Ne.validateArray = m;
  function _(f) {
    const { gen: b, schema: x, keyword: g, it: E } = f;
    if (!Array.isArray(x))
      throw new Error("ajv implementation error");
    if (x.some((q) => (0, t.alwaysValidSchema)(E, q)) && !E.opts.unevaluated)
      return;
    const C = b.let("valid", !1), I = b.name("_valid");
    b.block(() => x.forEach((q, D) => {
      const F = f.subschema({
        keyword: g,
        schemaProp: D,
        compositeRule: !0
      }, I);
      b.assign(C, (0, e._)`${C} || ${I}`), f.mergeValidEvaluated(F, I) || b.if((0, e.not)(C));
    })), f.result(C, () => f.reset(), () => f.error(!0));
  }
  return Ne.validateUnion = _, Ne;
}
var zc;
function nw() {
  if (zc) return ct;
  zc = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.validateKeywordUsage = ct.validSchemaType = ct.funcKeywordCode = ct.macroKeywordCode = void 0;
  const e = pe(), t = gt(), r = vt(), n = hs();
  function o(p, v) {
    const { gen: w, keyword: y, schema: m, parentSchema: _, it: f } = p, b = v.macro.call(f.self, m, _, f), x = l(w, y, b);
    f.opts.validateSchema !== !1 && f.self.validateSchema(b, !0);
    const g = w.name("valid");
    p.subschema({
      schema: b,
      schemaPath: e.nil,
      errSchemaPath: `${f.errSchemaPath}/${y}`,
      topSchemaRef: x,
      compositeRule: !0
    }, g), p.pass(g, () => p.error(!0));
  }
  ct.macroKeywordCode = o;
  function s(p, v) {
    var w;
    const { gen: y, keyword: m, schema: _, parentSchema: f, $data: b, it: x } = p;
    c(x, v);
    const g = !b && v.compile ? v.compile.call(x.self, _, f, x) : v.validate, E = l(y, m, g), S = y.let("valid");
    p.block$data(S, C), p.ok((w = v.valid) !== null && w !== void 0 ? w : S);
    function C() {
      if (v.errors === !1)
        D(), v.modifying && a(p), F(() => p.error());
      else {
        const U = v.async ? I() : q();
        v.modifying && a(p), F(() => i(p, U));
      }
    }
    function I() {
      const U = y.let("ruleErrs", null);
      return y.try(() => D((0, e._)`await `), (B) => y.assign(S, !1).if((0, e._)`${B} instanceof ${x.ValidationError}`, () => y.assign(U, (0, e._)`${B}.errors`), () => y.throw(B))), U;
    }
    function q() {
      const U = (0, e._)`${E}.errors`;
      return y.assign(U, null), D(e.nil), U;
    }
    function D(U = v.async ? (0, e._)`await ` : e.nil) {
      const B = x.opts.passContext ? t.default.this : t.default.self, Q = !("compile" in v && !b || v.schema === !1);
      y.assign(S, (0, e._)`${U}${(0, r.callValidateCode)(p, E, B, Q)}`, v.modifying);
    }
    function F(U) {
      var B;
      y.if((0, e.not)((B = v.valid) !== null && B !== void 0 ? B : S), U);
    }
  }
  ct.funcKeywordCode = s;
  function a(p) {
    const { gen: v, data: w, it: y } = p;
    v.if(y.parentData, () => v.assign(w, (0, e._)`${y.parentData}[${y.parentDataProperty}]`));
  }
  function i(p, v) {
    const { gen: w } = p;
    w.if((0, e._)`Array.isArray(${v})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${v} : ${t.default.vErrors}.concat(${v})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, n.extendErrors)(p);
    }, () => p.error());
  }
  function c({ schemaEnv: p }, v) {
    if (v.async && !p.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(p, v, w) {
    if (w === void 0)
      throw new Error(`keyword "${v}" failed to compile`);
    return p.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function u(p, v, w = !1) {
    return !v.length || v.some((y) => y === "array" ? Array.isArray(p) : y === "object" ? p && typeof p == "object" && !Array.isArray(p) : typeof p == y || w && typeof p > "u");
  }
  ct.validSchemaType = u;
  function h({ schema: p, opts: v, self: w, errSchemaPath: y }, m, _) {
    if (Array.isArray(m.keyword) ? !m.keyword.includes(_) : m.keyword !== _)
      throw new Error("ajv implementation error");
    const f = m.dependencies;
    if (f?.some((b) => !Object.prototype.hasOwnProperty.call(p, b)))
      throw new Error(`parent schema must have dependencies of ${_}: ${f.join(",")}`);
    if (m.validateSchema && !m.validateSchema(p[_])) {
      const x = `keyword "${_}" value is invalid at path "${y}": ` + w.errorsText(m.validateSchema.errors);
      if (v.validateSchema === "log")
        w.logger.error(x);
      else
        throw new Error(x);
    }
  }
  return ct.validateKeywordUsage = h, ct;
}
var Rt = {}, Fc;
function ow() {
  if (Fc) return Rt;
  Fc = 1, Object.defineProperty(Rt, "__esModule", { value: !0 }), Rt.extendSubschemaMode = Rt.extendSubschemaData = Rt.getSubschema = void 0;
  const e = pe(), t = Ee();
  function r(s, { keyword: a, schemaProp: i, schema: c, schemaPath: l, errSchemaPath: u, topSchemaRef: h }) {
    if (a !== void 0 && c !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const p = s.schema[a];
      return i === void 0 ? {
        schema: p,
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}`
      } : {
        schema: p[i],
        schemaPath: (0, e._)`${s.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(i)}`,
        errSchemaPath: `${s.errSchemaPath}/${a}/${(0, t.escapeFragment)(i)}`
      };
    }
    if (c !== void 0) {
      if (l === void 0 || u === void 0 || h === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: l,
        topSchemaRef: h,
        errSchemaPath: u
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Rt.getSubschema = r;
  function n(s, a, { dataProp: i, dataPropType: c, data: l, dataTypes: u, propertyName: h }) {
    if (l !== void 0 && i !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: p } = a;
    if (i !== void 0) {
      const { errorPath: w, dataPathArr: y, opts: m } = a, _ = p.let("data", (0, e._)`${a.data}${(0, e.getProperty)(i)}`, !0);
      v(_), s.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(i, c, m.jsPropertySyntax)}`, s.parentDataProperty = (0, e._)`${i}`, s.dataPathArr = [...y, s.parentDataProperty];
    }
    if (l !== void 0) {
      const w = l instanceof e.Name ? l : p.let("data", l, !0);
      v(w), h !== void 0 && (s.propertyName = h);
    }
    u && (s.dataTypes = u);
    function v(w) {
      s.data = w, s.dataLevel = a.dataLevel + 1, s.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), s.parentData = a.data, s.dataNames = [...a.dataNames, w];
    }
  }
  Rt.extendSubschemaData = n;
  function o(s, { jtdDiscriminator: a, jtdMetadata: i, compositeRule: c, createErrors: l, allErrors: u }) {
    c !== void 0 && (s.compositeRule = c), l !== void 0 && (s.createErrors = l), u !== void 0 && (s.allErrors = u), s.jtdDiscriminator = a, s.jtdMetadata = i;
  }
  return Rt.extendSubschemaMode = o, Rt;
}
var Ke = {}, ta, Vc;
function Om() {
  return Vc || (Vc = 1, ta = function e(t, r) {
    if (t === r) return !0;
    if (t && r && typeof t == "object" && typeof r == "object") {
      if (t.constructor !== r.constructor) return !1;
      var n, o, s;
      if (Array.isArray(t)) {
        if (n = t.length, n != r.length) return !1;
        for (o = n; o-- !== 0; )
          if (!e(t[o], r[o])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if (s = Object.keys(t), n = s.length, n !== Object.keys(r).length) return !1;
      for (o = n; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, s[o])) return !1;
      for (o = n; o-- !== 0; ) {
        var a = s[o];
        if (!e(t[a], r[a])) return !1;
      }
      return !0;
    }
    return t !== t && r !== r;
  }), ta;
}
var ra = { exports: {} }, Lc;
function sw() {
  if (Lc) return ra.exports;
  Lc = 1;
  var e = ra.exports = function(n, o, s) {
    typeof o == "function" && (s = o, o = {}), s = o.cb || s;
    var a = typeof s == "function" ? s : s.pre || function() {
    }, i = s.post || function() {
    };
    t(o, a, i, n, "", n);
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
  function t(n, o, s, a, i, c, l, u, h, p) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      o(a, i, c, l, u, h, p);
      for (var v in a) {
        var w = a[v];
        if (Array.isArray(w)) {
          if (v in e.arrayKeywords)
            for (var y = 0; y < w.length; y++)
              t(n, o, s, w[y], i + "/" + v + "/" + y, c, i, v, a, y);
        } else if (v in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var m in w)
              t(n, o, s, w[m], i + "/" + v + "/" + r(m), c, i, v, a, m);
        } else (v in e.keywords || n.allKeys && !(v in e.skipKeywords)) && t(n, o, s, w, i + "/" + v, c, i, v, a);
      }
      s(a, i, c, l, u, h, p);
    }
  }
  function r(n) {
    return n.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return ra.exports;
}
var qc;
function gs() {
  if (qc) return Ke;
  qc = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.getSchemaRefs = Ke.resolveUrl = Ke.normalizeId = Ke._getFullPath = Ke.getFullPath = Ke.inlineRef = void 0;
  const e = Ee(), t = Om(), r = sw(), n = /* @__PURE__ */ new Set([
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
  function o(y, m = !0) {
    return typeof y == "boolean" ? !0 : m === !0 ? !a(y) : m ? i(y) <= m : !1;
  }
  Ke.inlineRef = o;
  const s = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(y) {
    for (const m in y) {
      if (s.has(m))
        return !0;
      const _ = y[m];
      if (Array.isArray(_) && _.some(a) || typeof _ == "object" && a(_))
        return !0;
    }
    return !1;
  }
  function i(y) {
    let m = 0;
    for (const _ in y) {
      if (_ === "$ref")
        return 1 / 0;
      if (m++, !n.has(_) && (typeof y[_] == "object" && (0, e.eachItem)(y[_], (f) => m += i(f)), m === 1 / 0))
        return 1 / 0;
    }
    return m;
  }
  function c(y, m = "", _) {
    _ !== !1 && (m = h(m));
    const f = y.parse(m);
    return l(y, f);
  }
  Ke.getFullPath = c;
  function l(y, m) {
    return y.serialize(m).split("#")[0] + "#";
  }
  Ke._getFullPath = l;
  const u = /#\/?$/;
  function h(y) {
    return y ? y.replace(u, "") : "";
  }
  Ke.normalizeId = h;
  function p(y, m, _) {
    return _ = h(_), y.resolve(m, _);
  }
  Ke.resolveUrl = p;
  const v = /^[a-z_][-a-z0-9._]*$/i;
  function w(y, m) {
    if (typeof y == "boolean")
      return {};
    const { schemaId: _, uriResolver: f } = this.opts, b = h(y[_] || m), x = { "": b }, g = c(f, b, !1), E = {}, S = /* @__PURE__ */ new Set();
    return r(y, { allKeys: !0 }, (q, D, F, U) => {
      if (U === void 0)
        return;
      const B = g + D;
      let Q = x[U];
      typeof q[_] == "string" && (Q = K.call(this, q[_])), oe.call(this, q.$anchor), oe.call(this, q.$dynamicAnchor), x[D] = Q;
      function K(V) {
        const fe = this.opts.uriResolver.resolve;
        if (V = h(Q ? fe(Q, V) : V), S.has(V))
          throw I(V);
        S.add(V);
        let W = this.refs[V];
        return typeof W == "string" && (W = this.refs[W]), typeof W == "object" ? C(q, W.schema, V) : V !== h(B) && (V[0] === "#" ? (C(q, E[V], V), E[V] = q) : this.refs[V] = B), V;
      }
      function oe(V) {
        if (typeof V == "string") {
          if (!v.test(V))
            throw new Error(`invalid anchor "${V}"`);
          K.call(this, `#${V}`);
        }
      }
    }), E;
    function C(q, D, F) {
      if (D !== void 0 && !t(q, D))
        throw I(F);
    }
    function I(q) {
      return new Error(`reference "${q}" resolves to more than one schema`);
    }
  }
  return Ke.getSchemaRefs = w, Ke;
}
var Uc;
function dn() {
  if (Uc) return jt;
  Uc = 1, Object.defineProperty(jt, "__esModule", { value: !0 }), jt.getData = jt.KeywordCxt = jt.validateFunctionCode = void 0;
  const e = tw(), t = Zo(), r = Im(), n = Zo(), o = rw(), s = nw(), a = ow(), i = pe(), c = gt(), l = gs(), u = Ee(), h = hs();
  function p(A) {
    if (g(A) && (S(A), x(A))) {
      m(A);
      return;
    }
    v(A, () => (0, e.topBoolOrEmptySchema)(A));
  }
  jt.validateFunctionCode = p;
  function v({ gen: A, validateName: T, schema: H, schemaEnv: J, opts: ae }, me) {
    ae.code.es5 ? A.func(T, (0, i._)`${c.default.data}, ${c.default.valCxt}`, J.$async, () => {
      A.code((0, i._)`"use strict"; ${f(H, ae)}`), y(A, ae), A.code(me);
    }) : A.func(T, (0, i._)`${c.default.data}, ${w(ae)}`, J.$async, () => A.code(f(H, ae)).code(me));
  }
  function w(A) {
    return (0, i._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${A.dynamicRef ? (0, i._)`, ${c.default.dynamicAnchors}={}` : i.nil}}={}`;
  }
  function y(A, T) {
    A.if(c.default.valCxt, () => {
      A.var(c.default.instancePath, (0, i._)`${c.default.valCxt}.${c.default.instancePath}`), A.var(c.default.parentData, (0, i._)`${c.default.valCxt}.${c.default.parentData}`), A.var(c.default.parentDataProperty, (0, i._)`${c.default.valCxt}.${c.default.parentDataProperty}`), A.var(c.default.rootData, (0, i._)`${c.default.valCxt}.${c.default.rootData}`), T.dynamicRef && A.var(c.default.dynamicAnchors, (0, i._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      A.var(c.default.instancePath, (0, i._)`""`), A.var(c.default.parentData, (0, i._)`undefined`), A.var(c.default.parentDataProperty, (0, i._)`undefined`), A.var(c.default.rootData, c.default.data), T.dynamicRef && A.var(c.default.dynamicAnchors, (0, i._)`{}`);
    });
  }
  function m(A) {
    const { schema: T, opts: H, gen: J } = A;
    v(A, () => {
      H.$comment && T.$comment && U(A), q(A), J.let(c.default.vErrors, null), J.let(c.default.errors, 0), H.unevaluated && _(A), C(A), B(A);
    });
  }
  function _(A) {
    const { gen: T, validateName: H } = A;
    A.evaluated = T.const("evaluated", (0, i._)`${H}.evaluated`), T.if((0, i._)`${A.evaluated}.dynamicProps`, () => T.assign((0, i._)`${A.evaluated}.props`, (0, i._)`undefined`)), T.if((0, i._)`${A.evaluated}.dynamicItems`, () => T.assign((0, i._)`${A.evaluated}.items`, (0, i._)`undefined`));
  }
  function f(A, T) {
    const H = typeof A == "object" && A[T.schemaId];
    return H && (T.code.source || T.code.process) ? (0, i._)`/*# sourceURL=${H} */` : i.nil;
  }
  function b(A, T) {
    if (g(A) && (S(A), x(A))) {
      E(A, T);
      return;
    }
    (0, e.boolOrEmptySchema)(A, T);
  }
  function x({ schema: A, self: T }) {
    if (typeof A == "boolean")
      return !A;
    for (const H in A)
      if (T.RULES.all[H])
        return !0;
    return !1;
  }
  function g(A) {
    return typeof A.schema != "boolean";
  }
  function E(A, T) {
    const { schema: H, gen: J, opts: ae } = A;
    ae.$comment && H.$comment && U(A), D(A), F(A);
    const me = J.const("_errs", c.default.errors);
    C(A, me), J.var(T, (0, i._)`${me} === ${c.default.errors}`);
  }
  function S(A) {
    (0, u.checkUnknownRules)(A), I(A);
  }
  function C(A, T) {
    if (A.opts.jtd)
      return K(A, [], !1, T);
    const H = (0, t.getSchemaTypes)(A.schema), J = (0, t.coerceAndCheckDataType)(A, H);
    K(A, H, !J, T);
  }
  function I(A) {
    const { schema: T, errSchemaPath: H, opts: J, self: ae } = A;
    T.$ref && J.ignoreKeywordsWithRef && (0, u.schemaHasRulesButRef)(T, ae.RULES) && ae.logger.warn(`$ref: keywords ignored in schema at path "${H}"`);
  }
  function q(A) {
    const { schema: T, opts: H } = A;
    T.default !== void 0 && H.useDefaults && H.strictSchema && (0, u.checkStrictMode)(A, "default is ignored in the schema root");
  }
  function D(A) {
    const T = A.schema[A.opts.schemaId];
    T && (A.baseId = (0, l.resolveUrl)(A.opts.uriResolver, A.baseId, T));
  }
  function F(A) {
    if (A.schema.$async && !A.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function U({ gen: A, schemaEnv: T, schema: H, errSchemaPath: J, opts: ae }) {
    const me = H.$comment;
    if (ae.$comment === !0)
      A.code((0, i._)`${c.default.self}.logger.log(${me})`);
    else if (typeof ae.$comment == "function") {
      const Me = (0, i.str)`${J}/$comment`, st = A.scopeValue("root", { ref: T.root });
      A.code((0, i._)`${c.default.self}.opts.$comment(${me}, ${Me}, ${st}.schema)`);
    }
  }
  function B(A) {
    const { gen: T, schemaEnv: H, validateName: J, ValidationError: ae, opts: me } = A;
    H.$async ? T.if((0, i._)`${c.default.errors} === 0`, () => T.return(c.default.data), () => T.throw((0, i._)`new ${ae}(${c.default.vErrors})`)) : (T.assign((0, i._)`${J}.errors`, c.default.vErrors), me.unevaluated && Q(A), T.return((0, i._)`${c.default.errors} === 0`));
  }
  function Q({ gen: A, evaluated: T, props: H, items: J }) {
    H instanceof i.Name && A.assign((0, i._)`${T}.props`, H), J instanceof i.Name && A.assign((0, i._)`${T}.items`, J);
  }
  function K(A, T, H, J) {
    const { gen: ae, schema: me, data: Me, allErrors: st, opts: Ue, self: P } = A, { RULES: O } = P;
    if (me.$ref && (Ue.ignoreKeywordsWithRef || !(0, u.schemaHasRulesButRef)(me, O))) {
      ae.block(() => z(A, "$ref", O.all.$ref.definition));
      return;
    }
    Ue.jtd || V(A, T), ae.block(() => {
      for (const re of O.rules)
        Z(re);
      Z(O.post);
    });
    function Z(re) {
      (0, r.shouldUseGroup)(me, re) && (re.type ? (ae.if((0, n.checkDataType)(re.type, Me, Ue.strictNumbers)), oe(A, re), T.length === 1 && T[0] === re.type && H && (ae.else(), (0, n.reportTypeError)(A)), ae.endIf()) : oe(A, re), st || ae.if((0, i._)`${c.default.errors} === ${J || 0}`));
    }
  }
  function oe(A, T) {
    const { gen: H, schema: J, opts: { useDefaults: ae } } = A;
    ae && (0, o.assignDefaults)(A, T.type), H.block(() => {
      for (const me of T.rules)
        (0, r.shouldUseRule)(J, me) && z(A, me.keyword, me.definition, T.type);
    });
  }
  function V(A, T) {
    A.schemaEnv.meta || !A.opts.strictTypes || (fe(A, T), A.opts.allowUnionTypes || W(A, T), j(A, A.dataTypes));
  }
  function fe(A, T) {
    if (T.length) {
      if (!A.dataTypes.length) {
        A.dataTypes = T;
        return;
      }
      T.forEach((H) => {
        N(A.dataTypes, H) || R(A, `type "${H}" not allowed by context "${A.dataTypes.join(",")}"`);
      }), k(A, T);
    }
  }
  function W(A, T) {
    T.length > 1 && !(T.length === 2 && T.includes("null")) && R(A, "use allowUnionTypes to allow union type keyword");
  }
  function j(A, T) {
    const H = A.self.RULES.all;
    for (const J in H) {
      const ae = H[J];
      if (typeof ae == "object" && (0, r.shouldUseRule)(A.schema, ae)) {
        const { type: me } = ae.definition;
        me.length && !me.some((Me) => M(T, Me)) && R(A, `missing type "${me.join(",")}" for keyword "${J}"`);
      }
    }
  }
  function M(A, T) {
    return A.includes(T) || T === "number" && A.includes("integer");
  }
  function N(A, T) {
    return A.includes(T) || T === "integer" && A.includes("number");
  }
  function k(A, T) {
    const H = [];
    for (const J of A.dataTypes)
      N(T, J) ? H.push(J) : T.includes("integer") && J === "number" && H.push("integer");
    A.dataTypes = H;
  }
  function R(A, T) {
    const H = A.schemaEnv.baseId + A.errSchemaPath;
    T += ` at "${H}" (strictTypes)`, (0, u.checkStrictMode)(A, T, A.opts.strictTypes);
  }
  class L {
    constructor(T, H, J) {
      if ((0, s.validateKeywordUsage)(T, H, J), this.gen = T.gen, this.allErrors = T.allErrors, this.keyword = J, this.data = T.data, this.schema = T.schema[J], this.$data = H.$data && T.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, u.schemaRefOrVal)(T, this.schema, J, this.$data), this.schemaType = H.schemaType, this.parentSchema = T.schema, this.params = {}, this.it = T, this.def = H, this.$data)
        this.schemaCode = T.gen.const("vSchema", se(this.$data, T));
      else if (this.schemaCode = this.schemaValue, !(0, s.validSchemaType)(this.schema, H.schemaType, H.allowUndefined))
        throw new Error(`${J} value must be ${JSON.stringify(H.schemaType)}`);
      ("code" in H ? H.trackErrors : H.errors !== !1) && (this.errsCount = T.gen.const("_errs", c.default.errors));
    }
    result(T, H, J) {
      this.failResult((0, i.not)(T), H, J);
    }
    failResult(T, H, J) {
      this.gen.if(T), J ? J() : this.error(), H ? (this.gen.else(), H(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(T, H) {
      this.failResult((0, i.not)(T), void 0, H);
    }
    fail(T) {
      if (T === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(T), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(T) {
      if (!this.$data)
        return this.fail(T);
      const { schemaCode: H } = this;
      this.fail((0, i._)`${H} !== undefined && (${(0, i.or)(this.invalid$data(), T)})`);
    }
    error(T, H, J) {
      if (H) {
        this.setParams(H), this._error(T, J), this.setParams({});
        return;
      }
      this._error(T, J);
    }
    _error(T, H) {
      (T ? h.reportExtraError : h.reportError)(this, this.def.error, H);
    }
    $dataError() {
      (0, h.reportError)(this, this.def.$dataError || h.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, h.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(T) {
      this.allErrors || this.gen.if(T);
    }
    setParams(T, H) {
      H ? Object.assign(this.params, T) : this.params = T;
    }
    block$data(T, H, J = i.nil) {
      this.gen.block(() => {
        this.check$data(T, J), H();
      });
    }
    check$data(T = i.nil, H = i.nil) {
      if (!this.$data)
        return;
      const { gen: J, schemaCode: ae, schemaType: me, def: Me } = this;
      J.if((0, i.or)((0, i._)`${ae} === undefined`, H)), T !== i.nil && J.assign(T, !0), (me.length || Me.validateSchema) && (J.elseIf(this.invalid$data()), this.$dataError(), T !== i.nil && J.assign(T, !1)), J.else();
    }
    invalid$data() {
      const { gen: T, schemaCode: H, schemaType: J, def: ae, it: me } = this;
      return (0, i.or)(Me(), st());
      function Me() {
        if (J.length) {
          if (!(H instanceof i.Name))
            throw new Error("ajv implementation error");
          const Ue = Array.isArray(J) ? J : [J];
          return (0, i._)`${(0, n.checkDataTypes)(Ue, H, me.opts.strictNumbers, n.DataType.Wrong)}`;
        }
        return i.nil;
      }
      function st() {
        if (ae.validateSchema) {
          const Ue = T.scopeValue("validate$data", { ref: ae.validateSchema });
          return (0, i._)`!${Ue}(${H})`;
        }
        return i.nil;
      }
    }
    subschema(T, H) {
      const J = (0, a.getSubschema)(this.it, T);
      (0, a.extendSubschemaData)(J, this.it, T), (0, a.extendSubschemaMode)(J, T);
      const ae = { ...this.it, ...J, items: void 0, props: void 0 };
      return b(ae, H), ae;
    }
    mergeEvaluated(T, H) {
      const { it: J, gen: ae } = this;
      J.opts.unevaluated && (J.props !== !0 && T.props !== void 0 && (J.props = u.mergeEvaluated.props(ae, T.props, J.props, H)), J.items !== !0 && T.items !== void 0 && (J.items = u.mergeEvaluated.items(ae, T.items, J.items, H)));
    }
    mergeValidEvaluated(T, H) {
      const { it: J, gen: ae } = this;
      if (J.opts.unevaluated && (J.props !== !0 || J.items !== !0))
        return ae.if(H, () => this.mergeEvaluated(T, i.Name)), !0;
    }
  }
  jt.KeywordCxt = L;
  function z(A, T, H, J) {
    const ae = new L(A, H, T);
    "code" in H ? H.code(ae, J) : ae.$data && H.validate ? (0, s.funcKeywordCode)(ae, H) : "macro" in H ? (0, s.macroKeywordCode)(ae, H) : (H.compile || H.validate) && (0, s.funcKeywordCode)(ae, H);
  }
  const Y = /^\/(?:[^~]|~0|~1)*$/, le = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function se(A, { dataLevel: T, dataNames: H, dataPathArr: J }) {
    let ae, me;
    if (A === "")
      return c.default.rootData;
    if (A[0] === "/") {
      if (!Y.test(A))
        throw new Error(`Invalid JSON-pointer: ${A}`);
      ae = A, me = c.default.rootData;
    } else {
      const P = le.exec(A);
      if (!P)
        throw new Error(`Invalid JSON-pointer: ${A}`);
      const O = +P[1];
      if (ae = P[2], ae === "#") {
        if (O >= T)
          throw new Error(Ue("property/index", O));
        return J[T - O];
      }
      if (O > T)
        throw new Error(Ue("data", O));
      if (me = H[T - O], !ae)
        return me;
    }
    let Me = me;
    const st = ae.split("/");
    for (const P of st)
      P && (me = (0, i._)`${me}${(0, i.getProperty)((0, u.unescapeJsonPointer)(P))}`, Me = (0, i._)`${Me} && ${me}`);
    return Me;
    function Ue(P, O) {
      return `Cannot access ${P} ${O} levels up, current level is ${T}`;
    }
  }
  return jt.getData = se, jt;
}
var jn = {}, Zc;
function vs() {
  if (Zc) return jn;
  Zc = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return jn.default = e, jn;
}
var Cn = {}, Bc;
function fn() {
  if (Bc) return Cn;
  Bc = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = gs();
  class t extends Error {
    constructor(n, o, s, a) {
      super(a || `can't resolve reference ${s} from id ${o}`), this.missingRef = (0, e.resolveUrl)(n, o, s), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(n, this.missingRef));
    }
  }
  return Cn.default = t, Cn;
}
var Qe = {}, Wc;
function ys() {
  if (Wc) return Qe;
  Wc = 1, Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.resolveSchema = Qe.getCompilingSchema = Qe.resolveRef = Qe.compileSchema = Qe.SchemaEnv = void 0;
  const e = pe(), t = vs(), r = gt(), n = gs(), o = Ee(), s = dn();
  class a {
    constructor(_) {
      var f;
      this.refs = {}, this.dynamicAnchors = {};
      let b;
      typeof _.schema == "object" && (b = _.schema), this.schema = _.schema, this.schemaId = _.schemaId, this.root = _.root || this, this.baseId = (f = _.baseId) !== null && f !== void 0 ? f : (0, n.normalizeId)(b?.[_.schemaId || "$id"]), this.schemaPath = _.schemaPath, this.localRefs = _.localRefs, this.meta = _.meta, this.$async = b?.$async, this.refs = {};
    }
  }
  Qe.SchemaEnv = a;
  function i(m) {
    const _ = u.call(this, m);
    if (_)
      return _;
    const f = (0, n.getFullPath)(this.opts.uriResolver, m.root.baseId), { es5: b, lines: x } = this.opts.code, { ownProperties: g } = this.opts, E = new e.CodeGen(this.scope, { es5: b, lines: x, ownProperties: g });
    let S;
    m.$async && (S = E.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const C = E.scopeName("validate");
    m.validateName = C;
    const I = {
      gen: E,
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
      topSchemaRef: E.scopeValue("schema", this.opts.code.source === !0 ? { ref: m.schema, code: (0, e.stringify)(m.schema) } : { ref: m.schema }),
      validateName: C,
      ValidationError: S,
      schema: m.schema,
      schemaEnv: m,
      rootId: f,
      baseId: m.baseId || f,
      schemaPath: e.nil,
      errSchemaPath: m.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let q;
    try {
      this._compilations.add(m), (0, s.validateFunctionCode)(I), E.optimize(this.opts.code.optimize);
      const D = E.toString();
      q = `${E.scopeRefs(r.default.scope)}return ${D}`, this.opts.code.process && (q = this.opts.code.process(q, m));
      const U = new Function(`${r.default.self}`, `${r.default.scope}`, q)(this, this.scope.get());
      if (this.scope.value(C, { ref: U }), U.errors = null, U.schema = m.schema, U.schemaEnv = m, m.$async && (U.$async = !0), this.opts.code.source === !0 && (U.source = { validateName: C, validateCode: D, scopeValues: E._values }), this.opts.unevaluated) {
        const { props: B, items: Q } = I;
        U.evaluated = {
          props: B instanceof e.Name ? void 0 : B,
          items: Q instanceof e.Name ? void 0 : Q,
          dynamicProps: B instanceof e.Name,
          dynamicItems: Q instanceof e.Name
        }, U.source && (U.source.evaluated = (0, e.stringify)(U.evaluated));
      }
      return m.validate = U, m;
    } catch (D) {
      throw delete m.validate, delete m.validateName, q && this.logger.error("Error compiling schema, function code:", q), D;
    } finally {
      this._compilations.delete(m);
    }
  }
  Qe.compileSchema = i;
  function c(m, _, f) {
    var b;
    f = (0, n.resolveUrl)(this.opts.uriResolver, _, f);
    const x = m.refs[f];
    if (x)
      return x;
    let g = p.call(this, m, f);
    if (g === void 0) {
      const E = (b = m.localRefs) === null || b === void 0 ? void 0 : b[f], { schemaId: S } = this.opts;
      E && (g = new a({ schema: E, schemaId: S, root: m, baseId: _ }));
    }
    if (g !== void 0)
      return m.refs[f] = l.call(this, g);
  }
  Qe.resolveRef = c;
  function l(m) {
    return (0, n.inlineRef)(m.schema, this.opts.inlineRefs) ? m.schema : m.validate ? m : i.call(this, m);
  }
  function u(m) {
    for (const _ of this._compilations)
      if (h(_, m))
        return _;
  }
  Qe.getCompilingSchema = u;
  function h(m, _) {
    return m.schema === _.schema && m.root === _.root && m.baseId === _.baseId;
  }
  function p(m, _) {
    let f;
    for (; typeof (f = this.refs[_]) == "string"; )
      _ = f;
    return f || this.schemas[_] || v.call(this, m, _);
  }
  function v(m, _) {
    const f = this.opts.uriResolver.parse(_), b = (0, n._getFullPath)(this.opts.uriResolver, f);
    let x = (0, n.getFullPath)(this.opts.uriResolver, m.baseId, void 0);
    if (Object.keys(m.schema).length > 0 && b === x)
      return y.call(this, f, m);
    const g = (0, n.normalizeId)(b), E = this.refs[g] || this.schemas[g];
    if (typeof E == "string") {
      const S = v.call(this, m, E);
      return typeof S?.schema != "object" ? void 0 : y.call(this, f, S);
    }
    if (typeof E?.schema == "object") {
      if (E.validate || i.call(this, E), g === (0, n.normalizeId)(_)) {
        const { schema: S } = E, { schemaId: C } = this.opts, I = S[C];
        return I && (x = (0, n.resolveUrl)(this.opts.uriResolver, x, I)), new a({ schema: S, schemaId: C, root: m, baseId: x });
      }
      return y.call(this, f, E);
    }
  }
  Qe.resolveSchema = v;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function y(m, { baseId: _, schema: f, root: b }) {
    var x;
    if (((x = m.fragment) === null || x === void 0 ? void 0 : x[0]) !== "/")
      return;
    for (const S of m.fragment.slice(1).split("/")) {
      if (typeof f == "boolean")
        return;
      const C = f[(0, o.unescapeFragment)(S)];
      if (C === void 0)
        return;
      f = C;
      const I = typeof f == "object" && f[this.opts.schemaId];
      !w.has(S) && I && (_ = (0, n.resolveUrl)(this.opts.uriResolver, _, I));
    }
    let g;
    if (typeof f != "boolean" && f.$ref && !(0, o.schemaHasRulesButRef)(f, this.RULES)) {
      const S = (0, n.resolveUrl)(this.opts.uriResolver, _, f.$ref);
      g = v.call(this, b, S);
    }
    const { schemaId: E } = this.opts;
    if (g = g || new a({ schema: f, schemaId: E, root: b, baseId: _ }), g.schema !== g.root.schema)
      return g;
  }
  return Qe;
}
const aw = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", iw = "Meta-schema for $data reference (JSON AnySchema extension proposal)", cw = "object", lw = ["$data"], uw = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, dw = !1, fw = {
  $id: aw,
  description: iw,
  type: cw,
  required: lw,
  properties: uw,
  additionalProperties: dw
};
var Rn = {}, Jr = { exports: {} }, na, Hc;
function Dm() {
  if (Hc) return na;
  Hc = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function r(p) {
    let v = "", w = 0, y = 0;
    for (y = 0; y < p.length; y++)
      if (w = p[y].charCodeAt(0), w !== 48) {
        if (!(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
          return "";
        v += p[y];
        break;
      }
    for (y += 1; y < p.length; y++) {
      if (w = p[y].charCodeAt(0), !(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
        return "";
      v += p[y];
    }
    return v;
  }
  const n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o(p) {
    return p.length = 0, !0;
  }
  function s(p, v, w) {
    if (p.length) {
      const y = r(p);
      if (y !== "")
        v.push(y);
      else
        return w.error = !0, !1;
      p.length = 0;
    }
    return !0;
  }
  function a(p) {
    let v = 0;
    const w = { error: !1, address: "", zone: "" }, y = [], m = [];
    let _ = !1, f = !1, b = s;
    for (let x = 0; x < p.length; x++) {
      const g = p[x];
      if (!(g === "[" || g === "]"))
        if (g === ":") {
          if (_ === !0 && (f = !0), !b(m, y, w))
            break;
          if (++v > 7) {
            w.error = !0;
            break;
          }
          x > 0 && p[x - 1] === ":" && (_ = !0), y.push(":");
          continue;
        } else if (g === "%") {
          if (!b(m, y, w))
            break;
          b = o;
        } else {
          m.push(g);
          continue;
        }
    }
    return m.length && (b === o ? w.zone = m.join("") : f ? y.push(m.join("")) : y.push(r(m))), w.address = y.join(""), w;
  }
  function i(p) {
    if (c(p, ":") < 2)
      return { host: p, isIPV6: !1 };
    const v = a(p);
    if (v.error)
      return { host: p, isIPV6: !1 };
    {
      let w = v.address, y = v.address;
      return v.zone && (w += "%" + v.zone, y += "%25" + v.zone), { host: w, isIPV6: !0, escapedHost: y };
    }
  }
  function c(p, v) {
    let w = 0;
    for (let y = 0; y < p.length; y++)
      p[y] === v && w++;
    return w;
  }
  function l(p) {
    let v = p;
    const w = [];
    let y = -1, m = 0;
    for (; m = v.length; ) {
      if (m === 1) {
        if (v === ".")
          break;
        if (v === "/") {
          w.push("/");
          break;
        } else {
          w.push(v);
          break;
        }
      } else if (m === 2) {
        if (v[0] === ".") {
          if (v[1] === ".")
            break;
          if (v[1] === "/") {
            v = v.slice(2);
            continue;
          }
        } else if (v[0] === "/" && (v[1] === "." || v[1] === "/")) {
          w.push("/");
          break;
        }
      } else if (m === 3 && v === "/..") {
        w.length !== 0 && w.pop(), w.push("/");
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
          v = v.slice(3), w.length !== 0 && w.pop();
          continue;
        }
      }
      if ((y = v.indexOf("/", 1)) === -1) {
        w.push(v);
        break;
      } else
        w.push(v.slice(0, y)), v = v.slice(y);
    }
    return w.join("");
  }
  function u(p, v) {
    const w = v !== !0 ? escape : unescape;
    return p.scheme !== void 0 && (p.scheme = w(p.scheme)), p.userinfo !== void 0 && (p.userinfo = w(p.userinfo)), p.host !== void 0 && (p.host = w(p.host)), p.path !== void 0 && (p.path = w(p.path)), p.query !== void 0 && (p.query = w(p.query)), p.fragment !== void 0 && (p.fragment = w(p.fragment)), p;
  }
  function h(p) {
    const v = [];
    if (p.userinfo !== void 0 && (v.push(p.userinfo), v.push("@")), p.host !== void 0) {
      let w = unescape(p.host);
      if (!t(w)) {
        const y = i(w);
        y.isIPV6 === !0 ? w = `[${y.escapedHost}]` : w = p.host;
      }
      v.push(w);
    }
    return (typeof p.port == "number" || typeof p.port == "string") && (v.push(":"), v.push(String(p.port))), v.length ? v.join("") : void 0;
  }
  return na = {
    nonSimpleDomain: n,
    recomposeAuthority: h,
    normalizeComponentEncoding: u,
    removeDotSegments: l,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: i,
    stringArrayToHexStripped: r
  }, na;
}
var oa, Gc;
function mw() {
  if (Gc) return oa;
  Gc = 1;
  const { isUUID: e } = Dm(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, r = (
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
  function o(g) {
    return g.secure === !0 ? !0 : g.secure === !1 ? !1 : g.scheme ? g.scheme.length === 3 && (g.scheme[0] === "w" || g.scheme[0] === "W") && (g.scheme[1] === "s" || g.scheme[1] === "S") && (g.scheme[2] === "s" || g.scheme[2] === "S") : !1;
  }
  function s(g) {
    return g.host || (g.error = g.error || "HTTP URIs must have a host."), g;
  }
  function a(g) {
    const E = String(g.scheme).toLowerCase() === "https";
    return (g.port === (E ? 443 : 80) || g.port === "") && (g.port = void 0), g.path || (g.path = "/"), g;
  }
  function i(g) {
    return g.secure = o(g), g.resourceName = (g.path || "/") + (g.query ? "?" + g.query : ""), g.path = void 0, g.query = void 0, g;
  }
  function c(g) {
    if ((g.port === (o(g) ? 443 : 80) || g.port === "") && (g.port = void 0), typeof g.secure == "boolean" && (g.scheme = g.secure ? "wss" : "ws", g.secure = void 0), g.resourceName) {
      const [E, S] = g.resourceName.split("?");
      g.path = E && E !== "/" ? E : void 0, g.query = S, g.resourceName = void 0;
    }
    return g.fragment = void 0, g;
  }
  function l(g, E) {
    if (!g.path)
      return g.error = "URN can not be parsed", g;
    const S = g.path.match(t);
    if (S) {
      const C = E.scheme || g.scheme || "urn";
      g.nid = S[1].toLowerCase(), g.nss = S[2];
      const I = `${C}:${E.nid || g.nid}`, q = x(I);
      g.path = void 0, q && (g = q.parse(g, E));
    } else
      g.error = g.error || "URN can not be parsed.";
    return g;
  }
  function u(g, E) {
    if (g.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const S = E.scheme || g.scheme || "urn", C = g.nid.toLowerCase(), I = `${S}:${E.nid || C}`, q = x(I);
    q && (g = q.serialize(g, E));
    const D = g, F = g.nss;
    return D.path = `${C || E.nid}:${F}`, E.skipEscape = !0, D;
  }
  function h(g, E) {
    const S = g;
    return S.uuid = S.nss, S.nss = void 0, !E.tolerant && (!S.uuid || !e(S.uuid)) && (S.error = S.error || "UUID is not valid."), S;
  }
  function p(g) {
    const E = g;
    return E.nss = (g.uuid || "").toLowerCase(), E;
  }
  const v = (
    /** @type {SchemeHandler} */
    {
      scheme: "http",
      domainHost: !0,
      parse: s,
      serialize: a
    }
  ), w = (
    /** @type {SchemeHandler} */
    {
      scheme: "https",
      domainHost: v.domainHost,
      parse: s,
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
  ), m = (
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
      https: w,
      ws: y,
      wss: m,
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
          parse: h,
          serialize: p,
          skipNormalize: !0
        }
      )
    }
  );
  Object.setPrototypeOf(b, null);
  function x(g) {
    return g && (b[
      /** @type {SchemeName} */
      g
    ] || b[
      /** @type {SchemeName} */
      g.toLowerCase()
    ]) || void 0;
  }
  return oa = {
    wsIsSecure: o,
    SCHEMES: b,
    isValidSchemeName: n,
    getSchemeHandler: x
  }, oa;
}
var Kc;
function pw() {
  if (Kc) return Jr.exports;
  Kc = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: r, normalizeComponentEncoding: n, isIPv4: o, nonSimpleDomain: s } = Dm(), { SCHEMES: a, getSchemeHandler: i } = mw();
  function c(m, _) {
    return typeof m == "string" ? m = /** @type {T} */
    p(w(m, _), _) : typeof m == "object" && (m = /** @type {T} */
    w(p(m, _), _)), m;
  }
  function l(m, _, f) {
    const b = f ? Object.assign({ scheme: "null" }, f) : { scheme: "null" }, x = u(w(m, b), w(_, b), b, !0);
    return b.skipEscape = !0, p(x, b);
  }
  function u(m, _, f, b) {
    const x = {};
    return b || (m = w(p(m, f), f), _ = w(p(_, f), f)), f = f || {}, !f.tolerant && _.scheme ? (x.scheme = _.scheme, x.userinfo = _.userinfo, x.host = _.host, x.port = _.port, x.path = t(_.path || ""), x.query = _.query) : (_.userinfo !== void 0 || _.host !== void 0 || _.port !== void 0 ? (x.userinfo = _.userinfo, x.host = _.host, x.port = _.port, x.path = t(_.path || ""), x.query = _.query) : (_.path ? (_.path[0] === "/" ? x.path = t(_.path) : ((m.userinfo !== void 0 || m.host !== void 0 || m.port !== void 0) && !m.path ? x.path = "/" + _.path : m.path ? x.path = m.path.slice(0, m.path.lastIndexOf("/") + 1) + _.path : x.path = _.path, x.path = t(x.path)), x.query = _.query) : (x.path = m.path, _.query !== void 0 ? x.query = _.query : x.query = m.query), x.userinfo = m.userinfo, x.host = m.host, x.port = m.port), x.scheme = m.scheme), x.fragment = _.fragment, x;
  }
  function h(m, _, f) {
    return typeof m == "string" ? (m = unescape(m), m = p(n(w(m, f), !0), { ...f, skipEscape: !0 })) : typeof m == "object" && (m = p(n(m, !0), { ...f, skipEscape: !0 })), typeof _ == "string" ? (_ = unescape(_), _ = p(n(w(_, f), !0), { ...f, skipEscape: !0 })) : typeof _ == "object" && (_ = p(n(_, !0), { ...f, skipEscape: !0 })), m.toLowerCase() === _.toLowerCase();
  }
  function p(m, _) {
    const f = {
      host: m.host,
      scheme: m.scheme,
      userinfo: m.userinfo,
      port: m.port,
      path: m.path,
      query: m.query,
      nid: m.nid,
      nss: m.nss,
      uuid: m.uuid,
      fragment: m.fragment,
      reference: m.reference,
      resourceName: m.resourceName,
      secure: m.secure,
      error: ""
    }, b = Object.assign({}, _), x = [], g = i(b.scheme || f.scheme);
    g && g.serialize && g.serialize(f, b), f.path !== void 0 && (b.skipEscape ? f.path = unescape(f.path) : (f.path = escape(f.path), f.scheme !== void 0 && (f.path = f.path.split("%3A").join(":")))), b.reference !== "suffix" && f.scheme && x.push(f.scheme, ":");
    const E = r(f);
    if (E !== void 0 && (b.reference !== "suffix" && x.push("//"), x.push(E), f.path && f.path[0] !== "/" && x.push("/")), f.path !== void 0) {
      let S = f.path;
      !b.absolutePath && (!g || !g.absolutePath) && (S = t(S)), E === void 0 && S[0] === "/" && S[1] === "/" && (S = "/%2F" + S.slice(2)), x.push(S);
    }
    return f.query !== void 0 && x.push("?", f.query), f.fragment !== void 0 && x.push("#", f.fragment), x.join("");
  }
  const v = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function w(m, _) {
    const f = Object.assign({}, _), b = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let x = !1;
    f.reference === "suffix" && (f.scheme ? m = f.scheme + ":" + m : m = "//" + m);
    const g = m.match(v);
    if (g) {
      if (b.scheme = g[1], b.userinfo = g[3], b.host = g[4], b.port = parseInt(g[5], 10), b.path = g[6] || "", b.query = g[7], b.fragment = g[8], isNaN(b.port) && (b.port = g[5]), b.host)
        if (o(b.host) === !1) {
          const C = e(b.host);
          b.host = C.host.toLowerCase(), x = C.isIPV6;
        } else
          x = !0;
      b.scheme === void 0 && b.userinfo === void 0 && b.host === void 0 && b.port === void 0 && b.query === void 0 && !b.path ? b.reference = "same-document" : b.scheme === void 0 ? b.reference = "relative" : b.fragment === void 0 ? b.reference = "absolute" : b.reference = "uri", f.reference && f.reference !== "suffix" && f.reference !== b.reference && (b.error = b.error || "URI is not a " + f.reference + " reference.");
      const E = i(f.scheme || b.scheme);
      if (!f.unicodeSupport && (!E || !E.unicodeSupport) && b.host && (f.domainHost || E && E.domainHost) && x === !1 && s(b.host))
        try {
          b.host = URL.domainToASCII(b.host.toLowerCase());
        } catch (S) {
          b.error = b.error || "Host's domain name can not be converted to ASCII: " + S;
        }
      (!E || E && !E.skipNormalize) && (m.indexOf("%") !== -1 && (b.scheme !== void 0 && (b.scheme = unescape(b.scheme)), b.host !== void 0 && (b.host = unescape(b.host))), b.path && (b.path = escape(unescape(b.path))), b.fragment && (b.fragment = encodeURI(decodeURIComponent(b.fragment)))), E && E.parse && E.parse(b, f);
    } else
      b.error = b.error || "URI can not be parsed.";
    return b;
  }
  const y = {
    SCHEMES: a,
    normalize: c,
    resolve: l,
    resolveComponent: u,
    equal: h,
    serialize: p,
    parse: w
  };
  return Jr.exports = y, Jr.exports.default = y, Jr.exports.fastUri = y, Jr.exports;
}
var Yc;
function hw() {
  if (Yc) return Rn;
  Yc = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = pw();
  return e.code = 'require("ajv/dist/runtime/uri").default', Rn.default = e, Rn;
}
var Jc;
function Mm() {
  return Jc || (Jc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = dn();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var r = pe();
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
    const n = vs(), o = fn(), s = Tm(), a = ys(), i = pe(), c = gs(), l = Zo(), u = Ee(), h = fw, p = hw(), v = (W, j) => new RegExp(W, j);
    v.code = "new RegExp";
    const w = ["removeAdditional", "useDefaults", "coerceTypes"], y = /* @__PURE__ */ new Set([
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
    ]), m = {
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
    function b(W) {
      var j, M, N, k, R, L, z, Y, le, se, A, T, H, J, ae, me, Me, st, Ue, P, O, Z, re, ne, X;
      const ue = W.strict, ke = (j = W.code) === null || j === void 0 ? void 0 : j.optimize, Ae = ke === !0 || ke === void 0 ? 1 : ke || 0, Ge = (N = (M = W.code) === null || M === void 0 ? void 0 : M.regExp) !== null && N !== void 0 ? N : v, ur = (k = W.uriResolver) !== null && k !== void 0 ? k : p.default;
      return {
        strictSchema: (L = (R = W.strictSchema) !== null && R !== void 0 ? R : ue) !== null && L !== void 0 ? L : !0,
        strictNumbers: (Y = (z = W.strictNumbers) !== null && z !== void 0 ? z : ue) !== null && Y !== void 0 ? Y : !0,
        strictTypes: (se = (le = W.strictTypes) !== null && le !== void 0 ? le : ue) !== null && se !== void 0 ? se : "log",
        strictTuples: (T = (A = W.strictTuples) !== null && A !== void 0 ? A : ue) !== null && T !== void 0 ? T : "log",
        strictRequired: (J = (H = W.strictRequired) !== null && H !== void 0 ? H : ue) !== null && J !== void 0 ? J : !1,
        code: W.code ? { ...W.code, optimize: Ae, regExp: Ge } : { optimize: Ae, regExp: Ge },
        loopRequired: (ae = W.loopRequired) !== null && ae !== void 0 ? ae : f,
        loopEnum: (me = W.loopEnum) !== null && me !== void 0 ? me : f,
        meta: (Me = W.meta) !== null && Me !== void 0 ? Me : !0,
        messages: (st = W.messages) !== null && st !== void 0 ? st : !0,
        inlineRefs: (Ue = W.inlineRefs) !== null && Ue !== void 0 ? Ue : !0,
        schemaId: (P = W.schemaId) !== null && P !== void 0 ? P : "$id",
        addUsedSchema: (O = W.addUsedSchema) !== null && O !== void 0 ? O : !0,
        validateSchema: (Z = W.validateSchema) !== null && Z !== void 0 ? Z : !0,
        validateFormats: (re = W.validateFormats) !== null && re !== void 0 ? re : !0,
        unicodeRegExp: (ne = W.unicodeRegExp) !== null && ne !== void 0 ? ne : !0,
        int32range: (X = W.int32range) !== null && X !== void 0 ? X : !0,
        uriResolver: ur
      };
    }
    class x {
      constructor(j = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), j = this.opts = { ...j, ...b(j) };
        const { es5: M, lines: N } = this.opts.code;
        this.scope = new i.ValueScope({ scope: {}, prefixes: y, es5: M, lines: N }), this.logger = F(j.logger);
        const k = j.validateFormats;
        j.validateFormats = !1, this.RULES = (0, s.getRules)(), g.call(this, m, j, "NOT SUPPORTED"), g.call(this, _, j, "DEPRECATED", "warn"), this._metaOpts = q.call(this), j.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), j.keywords && I.call(this, j.keywords), typeof j.meta == "object" && this.addMetaSchema(j.meta), S.call(this), j.validateFormats = k;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: j, meta: M, schemaId: N } = this.opts;
        let k = h;
        N === "id" && (k = { ...h }, k.id = k.$id, delete k.$id), M && j && this.addMetaSchema(k, k[N], !1);
      }
      defaultMeta() {
        const { meta: j, schemaId: M } = this.opts;
        return this.opts.defaultMeta = typeof j == "object" ? j[M] || j : void 0;
      }
      validate(j, M) {
        let N;
        if (typeof j == "string") {
          if (N = this.getSchema(j), !N)
            throw new Error(`no schema with key or ref "${j}"`);
        } else
          N = this.compile(j);
        const k = N(M);
        return "$async" in N || (this.errors = N.errors), k;
      }
      compile(j, M) {
        const N = this._addSchema(j, M);
        return N.validate || this._compileSchemaEnv(N);
      }
      compileAsync(j, M) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: N } = this.opts;
        return k.call(this, j, M);
        async function k(se, A) {
          await R.call(this, se.$schema);
          const T = this._addSchema(se, A);
          return T.validate || L.call(this, T);
        }
        async function R(se) {
          se && !this.getSchema(se) && await k.call(this, { $ref: se }, !0);
        }
        async function L(se) {
          try {
            return this._compileSchemaEnv(se);
          } catch (A) {
            if (!(A instanceof o.default))
              throw A;
            return z.call(this, A), await Y.call(this, A.missingSchema), L.call(this, se);
          }
        }
        function z({ missingSchema: se, missingRef: A }) {
          if (this.refs[se])
            throw new Error(`AnySchema ${se} is loaded but ${A} cannot be resolved`);
        }
        async function Y(se) {
          const A = await le.call(this, se);
          this.refs[se] || await R.call(this, A.$schema), this.refs[se] || this.addSchema(A, se, M);
        }
        async function le(se) {
          const A = this._loading[se];
          if (A)
            return A;
          try {
            return await (this._loading[se] = N(se));
          } finally {
            delete this._loading[se];
          }
        }
      }
      // Adds schema to the instance
      addSchema(j, M, N, k = this.opts.validateSchema) {
        if (Array.isArray(j)) {
          for (const L of j)
            this.addSchema(L, void 0, N, k);
          return this;
        }
        let R;
        if (typeof j == "object") {
          const { schemaId: L } = this.opts;
          if (R = j[L], R !== void 0 && typeof R != "string")
            throw new Error(`schema ${L} must be string`);
        }
        return M = (0, c.normalizeId)(M || R), this._checkUnique(M), this.schemas[M] = this._addSchema(j, N, M, k, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(j, M, N = this.opts.validateSchema) {
        return this.addSchema(j, M, !0, N), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(j, M) {
        if (typeof j == "boolean")
          return !0;
        let N;
        if (N = j.$schema, N !== void 0 && typeof N != "string")
          throw new Error("$schema must be a string");
        if (N = N || this.opts.defaultMeta || this.defaultMeta(), !N)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const k = this.validate(N, j);
        if (!k && M) {
          const R = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(R);
          else
            throw new Error(R);
        }
        return k;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(j) {
        let M;
        for (; typeof (M = E.call(this, j)) == "string"; )
          j = M;
        if (M === void 0) {
          const { schemaId: N } = this.opts, k = new a.SchemaEnv({ schema: {}, schemaId: N });
          if (M = a.resolveSchema.call(this, k, j), !M)
            return;
          this.refs[j] = M;
        }
        return M.validate || this._compileSchemaEnv(M);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(j) {
        if (j instanceof RegExp)
          return this._removeAllSchemas(this.schemas, j), this._removeAllSchemas(this.refs, j), this;
        switch (typeof j) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const M = E.call(this, j);
            return typeof M == "object" && this._cache.delete(M.schema), delete this.schemas[j], delete this.refs[j], this;
          }
          case "object": {
            const M = j;
            this._cache.delete(M);
            let N = j[this.opts.schemaId];
            return N && (N = (0, c.normalizeId)(N), delete this.schemas[N], delete this.refs[N]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(j) {
        for (const M of j)
          this.addKeyword(M);
        return this;
      }
      addKeyword(j, M) {
        let N;
        if (typeof j == "string")
          N = j, typeof M == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), M.keyword = N);
        else if (typeof j == "object" && M === void 0) {
          if (M = j, N = M.keyword, Array.isArray(N) && !N.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (B.call(this, N, M), !M)
          return (0, u.eachItem)(N, (R) => Q.call(this, R)), this;
        oe.call(this, M);
        const k = {
          ...M,
          type: (0, l.getJSONTypes)(M.type),
          schemaType: (0, l.getJSONTypes)(M.schemaType)
        };
        return (0, u.eachItem)(N, k.type.length === 0 ? (R) => Q.call(this, R, k) : (R) => k.type.forEach((L) => Q.call(this, R, k, L))), this;
      }
      getKeyword(j) {
        const M = this.RULES.all[j];
        return typeof M == "object" ? M.definition : !!M;
      }
      // Remove keyword
      removeKeyword(j) {
        const { RULES: M } = this;
        delete M.keywords[j], delete M.all[j];
        for (const N of M.rules) {
          const k = N.rules.findIndex((R) => R.keyword === j);
          k >= 0 && N.rules.splice(k, 1);
        }
        return this;
      }
      // Add format
      addFormat(j, M) {
        return typeof M == "string" && (M = new RegExp(M)), this.formats[j] = M, this;
      }
      errorsText(j = this.errors, { separator: M = ", ", dataVar: N = "data" } = {}) {
        return !j || j.length === 0 ? "No errors" : j.map((k) => `${N}${k.instancePath} ${k.message}`).reduce((k, R) => k + M + R);
      }
      $dataMetaSchema(j, M) {
        const N = this.RULES.all;
        j = JSON.parse(JSON.stringify(j));
        for (const k of M) {
          const R = k.split("/").slice(1);
          let L = j;
          for (const z of R)
            L = L[z];
          for (const z in N) {
            const Y = N[z];
            if (typeof Y != "object")
              continue;
            const { $data: le } = Y.definition, se = L[z];
            le && se && (L[z] = fe(se));
          }
        }
        return j;
      }
      _removeAllSchemas(j, M) {
        for (const N in j) {
          const k = j[N];
          (!M || M.test(N)) && (typeof k == "string" ? delete j[N] : k && !k.meta && (this._cache.delete(k.schema), delete j[N]));
        }
      }
      _addSchema(j, M, N, k = this.opts.validateSchema, R = this.opts.addUsedSchema) {
        let L;
        const { schemaId: z } = this.opts;
        if (typeof j == "object")
          L = j[z];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof j != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let Y = this._cache.get(j);
        if (Y !== void 0)
          return Y;
        N = (0, c.normalizeId)(L || N);
        const le = c.getSchemaRefs.call(this, j, N);
        return Y = new a.SchemaEnv({ schema: j, schemaId: z, meta: M, baseId: N, localRefs: le }), this._cache.set(Y.schema, Y), R && !N.startsWith("#") && (N && this._checkUnique(N), this.refs[N] = Y), k && this.validateSchema(j, !0), Y;
      }
      _checkUnique(j) {
        if (this.schemas[j] || this.refs[j])
          throw new Error(`schema with key or id "${j}" already exists`);
      }
      _compileSchemaEnv(j) {
        if (j.meta ? this._compileMetaSchema(j) : a.compileSchema.call(this, j), !j.validate)
          throw new Error("ajv implementation error");
        return j.validate;
      }
      _compileMetaSchema(j) {
        const M = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, j);
        } finally {
          this.opts = M;
        }
      }
    }
    x.ValidationError = n.default, x.MissingRefError = o.default, e.default = x;
    function g(W, j, M, N = "error") {
      for (const k in W) {
        const R = k;
        R in j && this.logger[N](`${M}: option ${k}. ${W[R]}`);
      }
    }
    function E(W) {
      return W = (0, c.normalizeId)(W), this.schemas[W] || this.refs[W];
    }
    function S() {
      const W = this.opts.schemas;
      if (W)
        if (Array.isArray(W))
          this.addSchema(W);
        else
          for (const j in W)
            this.addSchema(W[j], j);
    }
    function C() {
      for (const W in this.opts.formats) {
        const j = this.opts.formats[W];
        j && this.addFormat(W, j);
      }
    }
    function I(W) {
      if (Array.isArray(W)) {
        this.addVocabulary(W);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const j in W) {
        const M = W[j];
        M.keyword || (M.keyword = j), this.addKeyword(M);
      }
    }
    function q() {
      const W = { ...this.opts };
      for (const j of w)
        delete W[j];
      return W;
    }
    const D = { log() {
    }, warn() {
    }, error() {
    } };
    function F(W) {
      if (W === !1)
        return D;
      if (W === void 0)
        return console;
      if (W.log && W.warn && W.error)
        return W;
      throw new Error("logger must implement log, warn and error methods");
    }
    const U = /^[a-z_$][a-z0-9_$:-]*$/i;
    function B(W, j) {
      const { RULES: M } = this;
      if ((0, u.eachItem)(W, (N) => {
        if (M.keywords[N])
          throw new Error(`Keyword ${N} is already defined`);
        if (!U.test(N))
          throw new Error(`Keyword ${N} has invalid name`);
      }), !!j && j.$data && !("code" in j || "validate" in j))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Q(W, j, M) {
      var N;
      const k = j?.post;
      if (M && k)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: R } = this;
      let L = k ? R.post : R.rules.find(({ type: Y }) => Y === M);
      if (L || (L = { type: M, rules: [] }, R.rules.push(L)), R.keywords[W] = !0, !j)
        return;
      const z = {
        keyword: W,
        definition: {
          ...j,
          type: (0, l.getJSONTypes)(j.type),
          schemaType: (0, l.getJSONTypes)(j.schemaType)
        }
      };
      j.before ? K.call(this, L, z, j.before) : L.rules.push(z), R.all[W] = z, (N = j.implements) === null || N === void 0 || N.forEach((Y) => this.addKeyword(Y));
    }
    function K(W, j, M) {
      const N = W.rules.findIndex((k) => k.keyword === M);
      N >= 0 ? W.rules.splice(N, 0, j) : (W.rules.push(j), this.logger.warn(`rule ${M} is not defined`));
    }
    function oe(W) {
      let { metaSchema: j } = W;
      j !== void 0 && (W.$data && this.opts.$data && (j = fe(j)), W.validateSchema = this.compile(j, !0));
    }
    const V = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function fe(W) {
      return { anyOf: [W, V] };
    }
  })(Ys)), Ys;
}
var Pn = {}, An = {}, Nn = {}, Xc;
function gw() {
  if (Xc) return Nn;
  Xc = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Nn.default = e, Nn;
}
var Mt = {}, Qc;
function yi() {
  if (Qc) return Mt;
  Qc = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.callRef = Mt.getValidate = void 0;
  const e = fn(), t = vt(), r = pe(), n = gt(), o = ys(), s = Ee(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: u, schema: h, it: p } = l, { baseId: v, schemaEnv: w, validateName: y, opts: m, self: _ } = p, { root: f } = w;
      if ((h === "#" || h === "#/") && v === f.baseId)
        return x();
      const b = o.resolveRef.call(_, f, v, h);
      if (b === void 0)
        throw new e.default(p.opts.uriResolver, v, h);
      if (b instanceof o.SchemaEnv)
        return g(b);
      return E(b);
      function x() {
        if (w === f)
          return c(l, y, w, w.$async);
        const S = u.scopeValue("root", { ref: f });
        return c(l, (0, r._)`${S}.validate`, f, f.$async);
      }
      function g(S) {
        const C = i(l, S);
        c(l, C, S, S.$async);
      }
      function E(S) {
        const C = u.scopeValue("schema", m.code.source === !0 ? { ref: S, code: (0, r.stringify)(S) } : { ref: S }), I = u.name("valid"), q = l.subschema({
          schema: S,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: C,
          errSchemaPath: h
        }, I);
        l.mergeEvaluated(q), l.ok(I);
      }
    }
  };
  function i(l, u) {
    const { gen: h } = l;
    return u.validate ? h.scopeValue("validate", { ref: u.validate }) : (0, r._)`${h.scopeValue("wrapper", { ref: u })}.validate`;
  }
  Mt.getValidate = i;
  function c(l, u, h, p) {
    const { gen: v, it: w } = l, { allErrors: y, schemaEnv: m, opts: _ } = w, f = _.passContext ? n.default.this : r.nil;
    p ? b() : x();
    function b() {
      if (!m.$async)
        throw new Error("async schema referenced by sync schema");
      const S = v.let("valid");
      v.try(() => {
        v.code((0, r._)`await ${(0, t.callValidateCode)(l, u, f)}`), E(u), y || v.assign(S, !0);
      }, (C) => {
        v.if((0, r._)`!(${C} instanceof ${w.ValidationError})`, () => v.throw(C)), g(C), y || v.assign(S, !1);
      }), l.ok(S);
    }
    function x() {
      l.result((0, t.callValidateCode)(l, u, f), () => E(u), () => g(u));
    }
    function g(S) {
      const C = (0, r._)`${S}.errors`;
      v.assign(n.default.vErrors, (0, r._)`${n.default.vErrors} === null ? ${C} : ${n.default.vErrors}.concat(${C})`), v.assign(n.default.errors, (0, r._)`${n.default.vErrors}.length`);
    }
    function E(S) {
      var C;
      if (!w.opts.unevaluated)
        return;
      const I = (C = h?.validate) === null || C === void 0 ? void 0 : C.evaluated;
      if (w.props !== !0)
        if (I && !I.dynamicProps)
          I.props !== void 0 && (w.props = s.mergeEvaluated.props(v, I.props, w.props));
        else {
          const q = v.var("props", (0, r._)`${S}.evaluated.props`);
          w.props = s.mergeEvaluated.props(v, q, w.props, r.Name);
        }
      if (w.items !== !0)
        if (I && !I.dynamicItems)
          I.items !== void 0 && (w.items = s.mergeEvaluated.items(v, I.items, w.items));
        else {
          const q = v.var("items", (0, r._)`${S}.evaluated.items`);
          w.items = s.mergeEvaluated.items(v, q, w.items, r.Name);
        }
    }
  }
  return Mt.callRef = c, Mt.default = a, Mt;
}
var el;
function zm() {
  if (el) return An;
  el = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = gw(), t = yi(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return An.default = r, An;
}
var Tn = {}, In = {}, tl;
function vw() {
  if (tl) return In;
  tl = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  const e = pe(), t = e.operators, r = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, n = {
    message: ({ keyword: s, schemaCode: a }) => (0, e.str)`must be ${r[s].okStr} ${a}`,
    params: ({ keyword: s, schemaCode: a }) => (0, e._)`{comparison: ${r[s].okStr}, limit: ${a}}`
  }, o = {
    keyword: Object.keys(r),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: n,
    code(s) {
      const { keyword: a, data: i, schemaCode: c } = s;
      s.fail$data((0, e._)`${i} ${r[a].fail} ${c} || isNaN(${i})`);
    }
  };
  return In.default = o, In;
}
var On = {}, rl;
function yw() {
  if (rl) return On;
  rl = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = pe(), r = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must be multiple of ${n}`,
      params: ({ schemaCode: n }) => (0, e._)`{multipleOf: ${n}}`
    },
    code(n) {
      const { gen: o, data: s, schemaCode: a, it: i } = n, c = i.opts.multipleOfPrecision, l = o.let("res"), u = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
      n.fail$data((0, e._)`(${a} === 0 || (${l} = ${s}/${a}, ${u}))`);
    }
  };
  return On.default = r, On;
}
var Dn = {}, Mn = {}, nl;
function bw() {
  if (nl) return Mn;
  nl = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let n = 0, o = 0, s;
    for (; o < r; )
      n++, s = t.charCodeAt(o++), s >= 55296 && s <= 56319 && o < r && (s = t.charCodeAt(o), (s & 64512) === 56320 && o++);
    return n;
  }
  return Mn.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Mn;
}
var ol;
function _w() {
  if (ol) return Dn;
  ol = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), r = bw(), o = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: s, schemaCode: a }) {
        const i = s === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${i} than ${a} characters`;
      },
      params: ({ schemaCode: s }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { keyword: a, data: i, schemaCode: c, it: l } = s, u = a === "maxLength" ? e.operators.GT : e.operators.LT, h = l.opts.unicode === !1 ? (0, e._)`${i}.length` : (0, e._)`${(0, t.useFunc)(s.gen, r.default)}(${i})`;
      s.fail$data((0, e._)`${h} ${u} ${c}`);
    }
  };
  return Dn.default = o, Dn;
}
var zn = {}, sl;
function ww() {
  if (sl) return zn;
  sl = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = vt(), t = pe(), n = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: o }) => (0, t.str)`must match pattern "${o}"`,
      params: ({ schemaCode: o }) => (0, t._)`{pattern: ${o}}`
    },
    code(o) {
      const { data: s, $data: a, schema: i, schemaCode: c, it: l } = o, u = l.opts.unicodeRegExp ? "u" : "", h = a ? (0, t._)`(new RegExp(${c}, ${u}))` : (0, e.usePattern)(o, i);
      o.fail$data((0, t._)`!${h}.test(${s})`);
    }
  };
  return zn.default = n, zn;
}
var Fn = {}, al;
function xw() {
  if (al) return Fn;
  al = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = pe(), r = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: o }) {
        const s = n === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${o} properties`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: o, data: s, schemaCode: a } = n, i = o === "maxProperties" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`Object.keys(${s}).length ${i} ${a}`);
    }
  };
  return Fn.default = r, Fn;
}
var Vn = {}, il;
function $w() {
  if (il) return Vn;
  il = 1, Object.defineProperty(Vn, "__esModule", { value: !0 });
  const e = vt(), t = pe(), r = Ee(), o = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: s } }) => (0, t.str)`must have required property '${s}'`,
      params: ({ params: { missingProperty: s } }) => (0, t._)`{missingProperty: ${s}}`
    },
    code(s) {
      const { gen: a, schema: i, schemaCode: c, data: l, $data: u, it: h } = s, { opts: p } = h;
      if (!u && i.length === 0)
        return;
      const v = i.length >= p.loopRequired;
      if (h.allErrors ? w() : y(), p.strictRequired) {
        const f = s.parentSchema.properties, { definedProperties: b } = s.it;
        for (const x of i)
          if (f?.[x] === void 0 && !b.has(x)) {
            const g = h.schemaEnv.baseId + h.errSchemaPath, E = `required property "${x}" is not defined at "${g}" (strictRequired)`;
            (0, r.checkStrictMode)(h, E, h.opts.strictRequired);
          }
      }
      function w() {
        if (v || u)
          s.block$data(t.nil, m);
        else
          for (const f of i)
            (0, e.checkReportMissingProp)(s, f);
      }
      function y() {
        const f = a.let("missing");
        if (v || u) {
          const b = a.let("valid", !0);
          s.block$data(b, () => _(f, b)), s.ok(b);
        } else
          a.if((0, e.checkMissingProp)(s, i, f)), (0, e.reportMissingProp)(s, f), a.else();
      }
      function m() {
        a.forOf("prop", c, (f) => {
          s.setParams({ missingProperty: f }), a.if((0, e.noPropertyInData)(a, l, f, p.ownProperties), () => s.error());
        });
      }
      function _(f, b) {
        s.setParams({ missingProperty: f }), a.forOf(f, c, () => {
          a.assign(b, (0, e.propertyInData)(a, l, f, p.ownProperties)), a.if((0, t.not)(b), () => {
            s.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return Vn.default = o, Vn;
}
var Ln = {}, cl;
function Ew() {
  if (cl) return Ln;
  cl = 1, Object.defineProperty(Ln, "__esModule", { value: !0 });
  const e = pe(), r = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: o }) {
        const s = n === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${s} than ${o} items`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: o, data: s, schemaCode: a } = n, i = o === "maxItems" ? e.operators.GT : e.operators.LT;
      n.fail$data((0, e._)`${s}.length ${i} ${a}`);
    }
  };
  return Ln.default = r, Ln;
}
var qn = {}, Un = {}, ll;
function bi() {
  if (ll) return Un;
  ll = 1, Object.defineProperty(Un, "__esModule", { value: !0 });
  const e = Om();
  return e.code = 'require("ajv/dist/runtime/equal").default', Un.default = e, Un;
}
var ul;
function Sw() {
  if (ul) return qn;
  ul = 1, Object.defineProperty(qn, "__esModule", { value: !0 });
  const e = Zo(), t = pe(), r = Ee(), n = bi(), s = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: i } }) => (0, t.str)`must NOT have duplicate items (items ## ${i} and ${a} are identical)`,
      params: ({ params: { i: a, j: i } }) => (0, t._)`{i: ${a}, j: ${i}}`
    },
    code(a) {
      const { gen: i, data: c, $data: l, schema: u, parentSchema: h, schemaCode: p, it: v } = a;
      if (!l && !u)
        return;
      const w = i.let("valid"), y = h.items ? (0, e.getSchemaTypes)(h.items) : [];
      a.block$data(w, m, (0, t._)`${p} === false`), a.ok(w);
      function m() {
        const x = i.let("i", (0, t._)`${c}.length`), g = i.let("j");
        a.setParams({ i: x, j: g }), i.assign(w, !0), i.if((0, t._)`${x} > 1`, () => (_() ? f : b)(x, g));
      }
      function _() {
        return y.length > 0 && !y.some((x) => x === "object" || x === "array");
      }
      function f(x, g) {
        const E = i.name("item"), S = (0, e.checkDataTypes)(y, E, v.opts.strictNumbers, e.DataType.Wrong), C = i.const("indices", (0, t._)`{}`);
        i.for((0, t._)`;${x}--;`, () => {
          i.let(E, (0, t._)`${c}[${x}]`), i.if(S, (0, t._)`continue`), y.length > 1 && i.if((0, t._)`typeof ${E} == "string"`, (0, t._)`${E} += "_"`), i.if((0, t._)`typeof ${C}[${E}] == "number"`, () => {
            i.assign(g, (0, t._)`${C}[${E}]`), a.error(), i.assign(w, !1).break();
          }).code((0, t._)`${C}[${E}] = ${x}`);
        });
      }
      function b(x, g) {
        const E = (0, r.useFunc)(i, n.default), S = i.name("outer");
        i.label(S).for((0, t._)`;${x}--;`, () => i.for((0, t._)`${g} = ${x}; ${g}--;`, () => i.if((0, t._)`${E}(${c}[${x}], ${c}[${g}])`, () => {
          a.error(), i.assign(w, !1).break(S);
        })));
      }
    }
  };
  return qn.default = s, qn;
}
var Zn = {}, dl;
function kw() {
  if (dl) return Zn;
  dl = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), r = bi(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValue: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schemaCode: l, schema: u } = s;
      c || u && typeof u == "object" ? s.fail$data((0, e._)`!${(0, t.useFunc)(a, r.default)}(${i}, ${l})`) : s.fail((0, e._)`${u} !== ${i}`);
    }
  };
  return Zn.default = o, Zn;
}
var Bn = {}, fl;
function jw() {
  if (fl) return Bn;
  fl = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), r = bi(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: s }) => (0, e._)`{allowedValues: ${s}}`
    },
    code(s) {
      const { gen: a, data: i, $data: c, schema: l, schemaCode: u, it: h } = s;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const p = l.length >= h.opts.loopEnum;
      let v;
      const w = () => v ?? (v = (0, t.useFunc)(a, r.default));
      let y;
      if (p || c)
        y = a.let("valid"), s.block$data(y, m);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const f = a.const("vSchema", u);
        y = (0, e.or)(...l.map((b, x) => _(f, x)));
      }
      s.pass(y);
      function m() {
        a.assign(y, !1), a.forOf("v", u, (f) => a.if((0, e._)`${w()}(${i}, ${f})`, () => a.assign(y, !0).break()));
      }
      function _(f, b) {
        const x = l[b];
        return typeof x == "object" && x !== null ? (0, e._)`${w()}(${i}, ${f}[${b}])` : (0, e._)`${i} === ${x}`;
      }
    }
  };
  return Bn.default = o, Bn;
}
var ml;
function Fm() {
  if (ml) return Tn;
  ml = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = vw(), t = yw(), r = _w(), n = ww(), o = xw(), s = $w(), a = Ew(), i = Sw(), c = kw(), l = jw(), u = [
    // number
    e.default,
    t.default,
    // string
    r.default,
    n.default,
    // object
    o.default,
    s.default,
    // array
    a.default,
    i.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    c.default,
    l.default
  ];
  return Tn.default = u, Tn;
}
var Wn = {}, gr = {}, pl;
function Vm() {
  if (pl) return gr;
  pl = 1, Object.defineProperty(gr, "__esModule", { value: !0 }), gr.validateAdditionalItems = void 0;
  const e = pe(), t = Ee(), n = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { parentSchema: a, it: i } = s, { items: c } = a;
      if (!Array.isArray(c)) {
        (0, t.checkStrictMode)(i, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      o(s, c);
    }
  };
  function o(s, a) {
    const { gen: i, schema: c, data: l, keyword: u, it: h } = s;
    h.items = !0;
    const p = i.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      s.setParams({ len: a.length }), s.pass((0, e._)`${p} <= ${a.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(h, c)) {
      const w = i.var("valid", (0, e._)`${p} <= ${a.length}`);
      i.if((0, e.not)(w), () => v(w)), s.ok(w);
    }
    function v(w) {
      i.forRange("i", a.length, p, (y) => {
        s.subschema({ keyword: u, dataProp: y, dataPropType: t.Type.Num }, w), h.allErrors || i.if((0, e.not)(w), () => i.break());
      });
    }
  }
  return gr.validateAdditionalItems = o, gr.default = n, gr;
}
var Hn = {}, vr = {}, hl;
function Lm() {
  if (hl) return vr;
  hl = 1, Object.defineProperty(vr, "__esModule", { value: !0 }), vr.validateTuple = void 0;
  const e = pe(), t = Ee(), r = vt(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(s) {
      const { schema: a, it: i } = s;
      if (Array.isArray(a))
        return o(s, "additionalItems", a);
      i.items = !0, !(0, t.alwaysValidSchema)(i, a) && s.ok((0, r.validateArray)(s));
    }
  };
  function o(s, a, i = s.schema) {
    const { gen: c, parentSchema: l, data: u, keyword: h, it: p } = s;
    y(l), p.opts.unevaluated && i.length && p.items !== !0 && (p.items = t.mergeEvaluated.items(c, i.length, p.items));
    const v = c.name("valid"), w = c.const("len", (0, e._)`${u}.length`);
    i.forEach((m, _) => {
      (0, t.alwaysValidSchema)(p, m) || (c.if((0, e._)`${w} > ${_}`, () => s.subschema({
        keyword: h,
        schemaProp: _,
        dataProp: _
      }, v)), s.ok(v));
    });
    function y(m) {
      const { opts: _, errSchemaPath: f } = p, b = i.length, x = b === m.minItems && (b === m.maxItems || m[a] === !1);
      if (_.strictTuples && !x) {
        const g = `"${h}" is ${b}-tuple, but minItems or maxItems/${a} are not specified or different at path "${f}"`;
        (0, t.checkStrictMode)(p, g, _.strictTuples);
      }
    }
  }
  return vr.validateTuple = o, vr.default = n, vr;
}
var gl;
function Cw() {
  if (gl) return Hn;
  gl = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = Lm(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return Hn.default = t, Hn;
}
var Gn = {}, vl;
function Rw() {
  if (vl) return Gn;
  vl = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), r = vt(), n = Vm(), s = {
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
  return Gn.default = s, Gn;
}
var Kn = {}, yl;
function Pw() {
  if (yl) return Kn;
  yl = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), n = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: o, max: s } }) => s === void 0 ? (0, e.str)`must contain at least ${o} valid item(s)` : (0, e.str)`must contain at least ${o} and no more than ${s} valid item(s)`,
      params: ({ params: { min: o, max: s } }) => s === void 0 ? (0, e._)`{minContains: ${o}}` : (0, e._)`{minContains: ${o}, maxContains: ${s}}`
    },
    code(o) {
      const { gen: s, schema: a, parentSchema: i, data: c, it: l } = o;
      let u, h;
      const { minContains: p, maxContains: v } = i;
      l.opts.next ? (u = p === void 0 ? 1 : p, h = v) : u = 1;
      const w = s.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: u, max: h }), h === void 0 && u === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (h !== void 0 && u > h) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, a)) {
        let b = (0, e._)`${w} >= ${u}`;
        h !== void 0 && (b = (0, e._)`${b} && ${w} <= ${h}`), o.pass(b);
        return;
      }
      l.items = !0;
      const y = s.name("valid");
      h === void 0 && u === 1 ? _(y, () => s.if(y, () => s.break())) : u === 0 ? (s.let(y, !0), h !== void 0 && s.if((0, e._)`${c}.length > 0`, m)) : (s.let(y, !1), m()), o.result(y, () => o.reset());
      function m() {
        const b = s.name("_valid"), x = s.let("count", 0);
        _(b, () => s.if(b, () => f(x)));
      }
      function _(b, x) {
        s.forRange("i", 0, w, (g) => {
          o.subschema({
            keyword: "contains",
            dataProp: g,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, b), x();
        });
      }
      function f(b) {
        s.code((0, e._)`${b}++`), h === void 0 ? s.if((0, e._)`${b} >= ${u}`, () => s.assign(y, !0).break()) : (s.if((0, e._)`${b} > ${h}`, () => s.assign(y, !1).break()), u === 1 ? s.assign(y, !0) : s.if((0, e._)`${b} >= ${u}`, () => s.assign(y, !0)));
      }
    }
  };
  return Kn.default = n, Kn;
}
var sa = {}, bl;
function _i() {
  return bl || (bl = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = pe(), r = Ee(), n = vt();
    e.error = {
      message: ({ params: { property: c, depsCount: l, deps: u } }) => {
        const h = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${h} ${u} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: l, deps: u, missingProperty: h } }) => (0, t._)`{property: ${c},
    missingProperty: ${h},
    depsCount: ${l},
    deps: ${u}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [l, u] = s(c);
        a(c, l), i(c, u);
      }
    };
    function s({ schema: c }) {
      const l = {}, u = {};
      for (const h in c) {
        if (h === "__proto__")
          continue;
        const p = Array.isArray(c[h]) ? l : u;
        p[h] = c[h];
      }
      return [l, u];
    }
    function a(c, l = c.schema) {
      const { gen: u, data: h, it: p } = c;
      if (Object.keys(l).length === 0)
        return;
      const v = u.let("missing");
      for (const w in l) {
        const y = l[w];
        if (y.length === 0)
          continue;
        const m = (0, n.propertyInData)(u, h, w, p.opts.ownProperties);
        c.setParams({
          property: w,
          depsCount: y.length,
          deps: y.join(", ")
        }), p.allErrors ? u.if(m, () => {
          for (const _ of y)
            (0, n.checkReportMissingProp)(c, _);
        }) : (u.if((0, t._)`${m} && (${(0, n.checkMissingProp)(c, y, v)})`), (0, n.reportMissingProp)(c, v), u.else());
      }
    }
    e.validatePropertyDeps = a;
    function i(c, l = c.schema) {
      const { gen: u, data: h, keyword: p, it: v } = c, w = u.name("valid");
      for (const y in l)
        (0, r.alwaysValidSchema)(v, l[y]) || (u.if(
          (0, n.propertyInData)(u, h, y, v.opts.ownProperties),
          () => {
            const m = c.subschema({ keyword: p, schemaProp: y }, w);
            c.mergeValidEvaluated(m, w);
          },
          () => u.var(w, !0)
          // TODO var
        ), c.ok(w));
    }
    e.validateSchemaDeps = i, e.default = o;
  })(sa)), sa;
}
var Yn = {}, _l;
function Aw() {
  if (_l) return Yn;
  _l = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), n = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: o }) => (0, e._)`{propertyName: ${o.propertyName}}`
    },
    code(o) {
      const { gen: s, schema: a, data: i, it: c } = o;
      if ((0, t.alwaysValidSchema)(c, a))
        return;
      const l = s.name("valid");
      s.forIn("key", i, (u) => {
        o.setParams({ propertyName: u }), o.subschema({
          keyword: "propertyNames",
          data: u,
          dataTypes: ["string"],
          propertyName: u,
          compositeRule: !0
        }, l), s.if((0, e.not)(l), () => {
          o.error(!0), c.allErrors || s.break();
        });
      }), o.ok(l);
    }
  };
  return Yn.default = n, Yn;
}
var Jn = {}, wl;
function qm() {
  if (wl) return Jn;
  wl = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = vt(), t = pe(), r = gt(), n = Ee(), s = {
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
      const { gen: i, schema: c, parentSchema: l, data: u, errsCount: h, it: p } = a;
      if (!h)
        throw new Error("ajv implementation error");
      const { allErrors: v, opts: w } = p;
      if (p.props = !0, w.removeAdditional !== "all" && (0, n.alwaysValidSchema)(p, c))
        return;
      const y = (0, e.allSchemaProperties)(l.properties), m = (0, e.allSchemaProperties)(l.patternProperties);
      _(), a.ok((0, t._)`${h} === ${r.default.errors}`);
      function _() {
        i.forIn("key", u, (E) => {
          !y.length && !m.length ? x(E) : i.if(f(E), () => x(E));
        });
      }
      function f(E) {
        let S;
        if (y.length > 8) {
          const C = (0, n.schemaRefOrVal)(p, l.properties, "properties");
          S = (0, e.isOwnProperty)(i, C, E);
        } else y.length ? S = (0, t.or)(...y.map((C) => (0, t._)`${E} === ${C}`)) : S = t.nil;
        return m.length && (S = (0, t.or)(S, ...m.map((C) => (0, t._)`${(0, e.usePattern)(a, C)}.test(${E})`))), (0, t.not)(S);
      }
      function b(E) {
        i.code((0, t._)`delete ${u}[${E}]`);
      }
      function x(E) {
        if (w.removeAdditional === "all" || w.removeAdditional && c === !1) {
          b(E);
          return;
        }
        if (c === !1) {
          a.setParams({ additionalProperty: E }), a.error(), v || i.break();
          return;
        }
        if (typeof c == "object" && !(0, n.alwaysValidSchema)(p, c)) {
          const S = i.name("valid");
          w.removeAdditional === "failing" ? (g(E, S, !1), i.if((0, t.not)(S), () => {
            a.reset(), b(E);
          })) : (g(E, S), v || i.if((0, t.not)(S), () => i.break()));
        }
      }
      function g(E, S, C) {
        const I = {
          keyword: "additionalProperties",
          dataProp: E,
          dataPropType: n.Type.Str
        };
        C === !1 && Object.assign(I, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(I, S);
      }
    }
  };
  return Jn.default = s, Jn;
}
var Xn = {}, xl;
function Nw() {
  if (xl) return Xn;
  xl = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = dn(), t = vt(), r = Ee(), n = qm(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, parentSchema: c, data: l, it: u } = s;
      u.opts.removeAdditional === "all" && c.additionalProperties === void 0 && n.default.code(new e.KeywordCxt(u, n.default, "additionalProperties"));
      const h = (0, t.allSchemaProperties)(i);
      for (const m of h)
        u.definedProperties.add(m);
      u.opts.unevaluated && h.length && u.props !== !0 && (u.props = r.mergeEvaluated.props(a, (0, r.toHash)(h), u.props));
      const p = h.filter((m) => !(0, r.alwaysValidSchema)(u, i[m]));
      if (p.length === 0)
        return;
      const v = a.name("valid");
      for (const m of p)
        w(m) ? y(m) : (a.if((0, t.propertyInData)(a, l, m, u.opts.ownProperties)), y(m), u.allErrors || a.else().var(v, !0), a.endIf()), s.it.definedProperties.add(m), s.ok(v);
      function w(m) {
        return u.opts.useDefaults && !u.compositeRule && i[m].default !== void 0;
      }
      function y(m) {
        s.subschema({
          keyword: "properties",
          schemaProp: m,
          dataProp: m
        }, v);
      }
    }
  };
  return Xn.default = o, Xn;
}
var Qn = {}, $l;
function Tw() {
  if ($l) return Qn;
  $l = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = vt(), t = pe(), r = Ee(), n = Ee(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(s) {
      const { gen: a, schema: i, data: c, parentSchema: l, it: u } = s, { opts: h } = u, p = (0, e.allSchemaProperties)(i), v = p.filter((x) => (0, r.alwaysValidSchema)(u, i[x]));
      if (p.length === 0 || v.length === p.length && (!u.opts.unevaluated || u.props === !0))
        return;
      const w = h.strictSchema && !h.allowMatchingProperties && l.properties, y = a.name("valid");
      u.props !== !0 && !(u.props instanceof t.Name) && (u.props = (0, n.evaluatedPropsToName)(a, u.props));
      const { props: m } = u;
      _();
      function _() {
        for (const x of p)
          w && f(x), u.allErrors ? b(x) : (a.var(y, !0), b(x), a.if(y));
      }
      function f(x) {
        for (const g in w)
          new RegExp(x).test(g) && (0, r.checkStrictMode)(u, `property ${g} matches pattern ${x} (use allowMatchingProperties)`);
      }
      function b(x) {
        a.forIn("key", c, (g) => {
          a.if((0, t._)`${(0, e.usePattern)(s, x)}.test(${g})`, () => {
            const E = v.includes(x);
            E || s.subschema({
              keyword: "patternProperties",
              schemaProp: x,
              dataProp: g,
              dataPropType: n.Type.Str
            }, y), u.opts.unevaluated && m !== !0 ? a.assign((0, t._)`${m}[${g}]`, !0) : !E && !u.allErrors && a.if((0, t.not)(y), () => a.break());
          });
        });
      }
    }
  };
  return Qn.default = o, Qn;
}
var eo = {}, El;
function Iw() {
  if (El) return eo;
  El = 1, Object.defineProperty(eo, "__esModule", { value: !0 });
  const e = Ee(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(r) {
      const { gen: n, schema: o, it: s } = r;
      if ((0, e.alwaysValidSchema)(s, o)) {
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
  return eo.default = t, eo;
}
var to = {}, Sl;
function Ow() {
  if (Sl) return to;
  Sl = 1, Object.defineProperty(to, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: vt().validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return to.default = t, to;
}
var ro = {}, kl;
function Dw() {
  if (kl) return ro;
  kl = 1, Object.defineProperty(ro, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), n = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: o }) => (0, e._)`{passingSchemas: ${o.passing}}`
    },
    code(o) {
      const { gen: s, schema: a, parentSchema: i, it: c } = o;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (c.opts.discriminator && i.discriminator)
        return;
      const l = a, u = s.let("valid", !1), h = s.let("passing", null), p = s.name("_valid");
      o.setParams({ passing: h }), s.block(v), o.result(u, () => o.reset(), () => o.error(!0));
      function v() {
        l.forEach((w, y) => {
          let m;
          (0, t.alwaysValidSchema)(c, w) ? s.var(p, !0) : m = o.subschema({
            keyword: "oneOf",
            schemaProp: y,
            compositeRule: !0
          }, p), y > 0 && s.if((0, e._)`${p} && ${u}`).assign(u, !1).assign(h, (0, e._)`[${h}, ${y}]`).else(), s.if(p, () => {
            s.assign(u, !0), s.assign(h, y), m && o.mergeEvaluated(m, e.Name);
          });
        });
      }
    }
  };
  return ro.default = n, ro;
}
var no = {}, jl;
function Mw() {
  if (jl) return no;
  jl = 1, Object.defineProperty(no, "__esModule", { value: !0 });
  const e = Ee(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(r) {
      const { gen: n, schema: o, it: s } = r;
      if (!Array.isArray(o))
        throw new Error("ajv implementation error");
      const a = n.name("valid");
      o.forEach((i, c) => {
        if ((0, e.alwaysValidSchema)(s, i))
          return;
        const l = r.subschema({ keyword: "allOf", schemaProp: c }, a);
        r.ok(a), r.mergeEvaluated(l);
      });
    }
  };
  return no.default = t, no;
}
var oo = {}, Cl;
function zw() {
  if (Cl) return oo;
  Cl = 1, Object.defineProperty(oo, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), n = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: s }) => (0, e.str)`must match "${s.ifClause}" schema`,
      params: ({ params: s }) => (0, e._)`{failingKeyword: ${s.ifClause}}`
    },
    code(s) {
      const { gen: a, parentSchema: i, it: c } = s;
      i.then === void 0 && i.else === void 0 && (0, t.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
      const l = o(c, "then"), u = o(c, "else");
      if (!l && !u)
        return;
      const h = a.let("valid", !0), p = a.name("_valid");
      if (v(), s.reset(), l && u) {
        const y = a.let("ifClause");
        s.setParams({ ifClause: y }), a.if(p, w("then", y), w("else", y));
      } else l ? a.if(p, w("then")) : a.if((0, e.not)(p), w("else"));
      s.pass(h, () => s.error(!0));
      function v() {
        const y = s.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, p);
        s.mergeEvaluated(y);
      }
      function w(y, m) {
        return () => {
          const _ = s.subschema({ keyword: y }, p);
          a.assign(h, p), s.mergeValidEvaluated(_, h), m ? a.assign(m, (0, e._)`${y}`) : s.setParams({ ifClause: y });
        };
      }
    }
  };
  function o(s, a) {
    const i = s.schema[a];
    return i !== void 0 && !(0, t.alwaysValidSchema)(s, i);
  }
  return oo.default = n, oo;
}
var so = {}, Rl;
function Fw() {
  if (Rl) return so;
  Rl = 1, Object.defineProperty(so, "__esModule", { value: !0 });
  const e = Ee(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: n, it: o }) {
      n.if === void 0 && (0, e.checkStrictMode)(o, `"${r}" without "if" is ignored`);
    }
  };
  return so.default = t, so;
}
var Pl;
function Um() {
  if (Pl) return Wn;
  Pl = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = Vm(), t = Cw(), r = Lm(), n = Rw(), o = Pw(), s = _i(), a = Aw(), i = qm(), c = Nw(), l = Tw(), u = Iw(), h = Ow(), p = Dw(), v = Mw(), w = zw(), y = Fw();
  function m(_ = !1) {
    const f = [
      // any
      u.default,
      h.default,
      p.default,
      v.default,
      w.default,
      y.default,
      // object
      a.default,
      i.default,
      s.default,
      c.default,
      l.default
    ];
    return _ ? f.push(t.default, n.default) : f.push(e.default, r.default), f.push(o.default), f;
  }
  return Wn.default = m, Wn;
}
var ao = {}, yr = {}, Al;
function Zm() {
  if (Al) return yr;
  Al = 1, Object.defineProperty(yr, "__esModule", { value: !0 }), yr.dynamicAnchor = void 0;
  const e = pe(), t = gt(), r = ys(), n = yi(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (i) => s(i, i.schema)
  };
  function s(i, c) {
    const { gen: l, it: u } = i;
    u.schemaEnv.root.dynamicAnchors[c] = !0;
    const h = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, p = u.errSchemaPath === "#" ? u.validateName : a(i);
    l.if((0, e._)`!${h}`, () => l.assign(h, p));
  }
  yr.dynamicAnchor = s;
  function a(i) {
    const { schemaEnv: c, schema: l, self: u } = i.it, { root: h, baseId: p, localRefs: v, meta: w } = c.root, { schemaId: y } = u.opts, m = new r.SchemaEnv({ schema: l, schemaId: y, root: h, baseId: p, localRefs: v, meta: w });
    return r.compileSchema.call(u, m), (0, n.getValidate)(i, m);
  }
  return yr.default = o, yr;
}
var br = {}, Nl;
function Bm() {
  if (Nl) return br;
  Nl = 1, Object.defineProperty(br, "__esModule", { value: !0 }), br.dynamicRef = void 0;
  const e = pe(), t = gt(), r = yi(), n = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (s) => o(s, s.schema)
  };
  function o(s, a) {
    const { gen: i, keyword: c, it: l } = s;
    if (a[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const u = a.slice(1);
    if (l.allErrors)
      h();
    else {
      const v = i.let("valid", !1);
      h(v), s.ok(v);
    }
    function h(v) {
      if (l.schemaEnv.root.dynamicAnchors[u]) {
        const w = i.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(u)}`);
        i.if(w, p(w, v), p(l.validateName, v));
      } else
        p(l.validateName, v)();
    }
    function p(v, w) {
      return w ? () => i.block(() => {
        (0, r.callRef)(s, v), i.let(w, !0);
      }) : () => (0, r.callRef)(s, v);
    }
  }
  return br.dynamicRef = o, br.default = n, br;
}
var io = {}, Tl;
function Vw() {
  if (Tl) return io;
  Tl = 1, Object.defineProperty(io, "__esModule", { value: !0 });
  const e = Zm(), t = Ee(), r = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(n) {
      n.schema ? (0, e.dynamicAnchor)(n, "") : (0, t.checkStrictMode)(n.it, "$recursiveAnchor: false is ignored");
    }
  };
  return io.default = r, io;
}
var co = {}, Il;
function Lw() {
  if (Il) return co;
  Il = 1, Object.defineProperty(co, "__esModule", { value: !0 });
  const e = Bm(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (r) => (0, e.dynamicRef)(r, r.schema)
  };
  return co.default = t, co;
}
var Ol;
function qw() {
  if (Ol) return ao;
  Ol = 1, Object.defineProperty(ao, "__esModule", { value: !0 });
  const e = Zm(), t = Bm(), r = Vw(), n = Lw(), o = [e.default, t.default, r.default, n.default];
  return ao.default = o, ao;
}
var lo = {}, uo = {}, Dl;
function Uw() {
  if (Dl) return uo;
  Dl = 1, Object.defineProperty(uo, "__esModule", { value: !0 });
  const e = _i(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (r) => (0, e.validatePropertyDeps)(r)
  };
  return uo.default = t, uo;
}
var fo = {}, Ml;
function Zw() {
  if (Ml) return fo;
  Ml = 1, Object.defineProperty(fo, "__esModule", { value: !0 });
  const e = _i(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (r) => (0, e.validateSchemaDeps)(r)
  };
  return fo.default = t, fo;
}
var mo = {}, zl;
function Bw() {
  if (zl) return mo;
  zl = 1, Object.defineProperty(mo, "__esModule", { value: !0 });
  const e = Ee(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: r, parentSchema: n, it: o }) {
      n.contains === void 0 && (0, e.checkStrictMode)(o, `"${r}" without "contains" is ignored`);
    }
  };
  return mo.default = t, mo;
}
var Fl;
function Ww() {
  if (Fl) return lo;
  Fl = 1, Object.defineProperty(lo, "__esModule", { value: !0 });
  const e = Uw(), t = Zw(), r = Bw(), n = [e.default, t.default, r.default];
  return lo.default = n, lo;
}
var po = {}, ho = {}, Vl;
function Hw() {
  if (Vl) return ho;
  Vl = 1, Object.defineProperty(ho, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), r = gt(), o = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: s }) => (0, e._)`{unevaluatedProperty: ${s.unevaluatedProperty}}`
    },
    code(s) {
      const { gen: a, schema: i, data: c, errsCount: l, it: u } = s;
      if (!l)
        throw new Error("ajv implementation error");
      const { allErrors: h, props: p } = u;
      p instanceof e.Name ? a.if((0, e._)`${p} !== true`, () => a.forIn("key", c, (m) => a.if(w(p, m), () => v(m)))) : p !== !0 && a.forIn("key", c, (m) => p === void 0 ? v(m) : a.if(y(p, m), () => v(m))), u.props = !0, s.ok((0, e._)`${l} === ${r.default.errors}`);
      function v(m) {
        if (i === !1) {
          s.setParams({ unevaluatedProperty: m }), s.error(), h || a.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(u, i)) {
          const _ = a.name("valid");
          s.subschema({
            keyword: "unevaluatedProperties",
            dataProp: m,
            dataPropType: t.Type.Str
          }, _), h || a.if((0, e.not)(_), () => a.break());
        }
      }
      function w(m, _) {
        return (0, e._)`!${m} || !${m}[${_}]`;
      }
      function y(m, _) {
        const f = [];
        for (const b in m)
          m[b] === !0 && f.push((0, e._)`${_} !== ${b}`);
        return (0, e.and)(...f);
      }
    }
  };
  return ho.default = o, ho;
}
var go = {}, Ll;
function Gw() {
  if (Ll) return go;
  Ll = 1, Object.defineProperty(go, "__esModule", { value: !0 });
  const e = pe(), t = Ee(), n = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: s, schema: a, data: i, it: c } = o, l = c.items || 0;
      if (l === !0)
        return;
      const u = s.const("len", (0, e._)`${i}.length`);
      if (a === !1)
        o.setParams({ len: l }), o.fail((0, e._)`${u} > ${l}`);
      else if (typeof a == "object" && !(0, t.alwaysValidSchema)(c, a)) {
        const p = s.var("valid", (0, e._)`${u} <= ${l}`);
        s.if((0, e.not)(p), () => h(p, l)), o.ok(p);
      }
      c.items = !0;
      function h(p, v) {
        s.forRange("i", v, u, (w) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, p), c.allErrors || s.if((0, e.not)(p), () => s.break());
        });
      }
    }
  };
  return go.default = n, go;
}
var ql;
function Kw() {
  if (ql) return po;
  ql = 1, Object.defineProperty(po, "__esModule", { value: !0 });
  const e = Hw(), t = Gw(), r = [e.default, t.default];
  return po.default = r, po;
}
var vo = {}, yo = {}, Ul;
function Yw() {
  if (Ul) return yo;
  Ul = 1, Object.defineProperty(yo, "__esModule", { value: !0 });
  const e = pe(), r = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: n }) => (0, e.str)`must match format "${n}"`,
      params: ({ schemaCode: n }) => (0, e._)`{format: ${n}}`
    },
    code(n, o) {
      const { gen: s, data: a, $data: i, schema: c, schemaCode: l, it: u } = n, { opts: h, errSchemaPath: p, schemaEnv: v, self: w } = u;
      if (!h.validateFormats)
        return;
      i ? y() : m();
      function y() {
        const _ = s.scopeValue("formats", {
          ref: w.formats,
          code: h.code.formats
        }), f = s.const("fDef", (0, e._)`${_}[${l}]`), b = s.let("fType"), x = s.let("format");
        s.if((0, e._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`, () => s.assign(b, (0, e._)`${f}.type || "string"`).assign(x, (0, e._)`${f}.validate`), () => s.assign(b, (0, e._)`"string"`).assign(x, f)), n.fail$data((0, e.or)(g(), E()));
        function g() {
          return h.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${x}`;
        }
        function E() {
          const S = v.$async ? (0, e._)`(${f}.async ? await ${x}(${a}) : ${x}(${a}))` : (0, e._)`${x}(${a})`, C = (0, e._)`(typeof ${x} == "function" ? ${S} : ${x}.test(${a}))`;
          return (0, e._)`${x} && ${x} !== true && ${b} === ${o} && !${C}`;
        }
      }
      function m() {
        const _ = w.formats[c];
        if (!_) {
          g();
          return;
        }
        if (_ === !0)
          return;
        const [f, b, x] = E(_);
        f === o && n.pass(S());
        function g() {
          if (h.strictSchema === !1) {
            w.logger.warn(C());
            return;
          }
          throw new Error(C());
          function C() {
            return `unknown format "${c}" ignored in schema at path "${p}"`;
          }
        }
        function E(C) {
          const I = C instanceof RegExp ? (0, e.regexpCode)(C) : h.code.formats ? (0, e._)`${h.code.formats}${(0, e.getProperty)(c)}` : void 0, q = s.scopeValue("formats", { key: c, ref: C, code: I });
          return typeof C == "object" && !(C instanceof RegExp) ? [C.type || "string", C.validate, (0, e._)`${q}.validate`] : ["string", C, q];
        }
        function S() {
          if (typeof _ == "object" && !(_ instanceof RegExp) && _.async) {
            if (!v.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${x}(${a})`;
          }
          return typeof b == "function" ? (0, e._)`${x}(${a})` : (0, e._)`${x}.test(${a})`;
        }
      }
    }
  };
  return yo.default = r, yo;
}
var Zl;
function Wm() {
  if (Zl) return vo;
  Zl = 1, Object.defineProperty(vo, "__esModule", { value: !0 });
  const t = [Yw().default];
  return vo.default = t, vo;
}
var tr = {}, Bl;
function Hm() {
  return Bl || (Bl = 1, Object.defineProperty(tr, "__esModule", { value: !0 }), tr.contentVocabulary = tr.metadataVocabulary = void 0, tr.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], tr.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), tr;
}
var Wl;
function Jw() {
  if (Wl) return Pn;
  Wl = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = zm(), t = Fm(), r = Um(), n = qw(), o = Ww(), s = Kw(), a = Wm(), i = Hm(), c = [
    n.default,
    e.default,
    t.default,
    (0, r.default)(!0),
    a.default,
    i.metadataVocabulary,
    i.contentVocabulary,
    o.default,
    s.default
  ];
  return Pn.default = c, Pn;
}
var bo = {}, Xr = {}, Hl;
function Xw() {
  if (Hl) return Xr;
  Hl = 1, Object.defineProperty(Xr, "__esModule", { value: !0 }), Xr.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Xr.DiscrError = e = {})), Xr;
}
var Gl;
function Gm() {
  if (Gl) return bo;
  Gl = 1, Object.defineProperty(bo, "__esModule", { value: !0 });
  const e = pe(), t = Xw(), r = ys(), n = fn(), o = Ee(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: i, tagName: c } }) => i === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: i, tag: c, tagName: l } }) => (0, e._)`{error: ${i}, tag: ${l}, tagValue: ${c}}`
    },
    code(i) {
      const { gen: c, data: l, schema: u, parentSchema: h, it: p } = i, { oneOf: v } = h;
      if (!p.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = u.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (u.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!v)
        throw new Error("discriminator: requires oneOf keyword");
      const y = c.let("valid", !1), m = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(w)}`);
      c.if((0, e._)`typeof ${m} == "string"`, () => _(), () => i.error(!1, { discrError: t.DiscrError.Tag, tag: m, tagName: w })), i.ok(y);
      function _() {
        const x = b();
        c.if(!1);
        for (const g in x)
          c.elseIf((0, e._)`${m} === ${g}`), c.assign(y, f(x[g]));
        c.else(), i.error(!1, { discrError: t.DiscrError.Mapping, tag: m, tagName: w }), c.endIf();
      }
      function f(x) {
        const g = c.name("valid"), E = i.subschema({ keyword: "oneOf", schemaProp: x }, g);
        return i.mergeEvaluated(E, e.Name), g;
      }
      function b() {
        var x;
        const g = {}, E = C(h);
        let S = !0;
        for (let D = 0; D < v.length; D++) {
          let F = v[D];
          if (F?.$ref && !(0, o.schemaHasRulesButRef)(F, p.self.RULES)) {
            const B = F.$ref;
            if (F = r.resolveRef.call(p.self, p.schemaEnv.root, p.baseId, B), F instanceof r.SchemaEnv && (F = F.schema), F === void 0)
              throw new n.default(p.opts.uriResolver, p.baseId, B);
          }
          const U = (x = F?.properties) === null || x === void 0 ? void 0 : x[w];
          if (typeof U != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          S = S && (E || C(F)), I(U, D);
        }
        if (!S)
          throw new Error(`discriminator: "${w}" must be required`);
        return g;
        function C({ required: D }) {
          return Array.isArray(D) && D.includes(w);
        }
        function I(D, F) {
          if (D.const)
            q(D.const, F);
          else if (D.enum)
            for (const U of D.enum)
              q(U, F);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function q(D, F) {
          if (typeof D != "string" || D in g)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          g[D] = F;
        }
      }
    }
  };
  return bo.default = a, bo;
}
var _o = {};
const Qw = "https://json-schema.org/draft/2020-12/schema", ex = "https://json-schema.org/draft/2020-12/schema", tx = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, rx = "meta", nx = "Core and Validation specifications meta-schema", ox = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], sx = ["object", "boolean"], ax = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", ix = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, cx = {
  $schema: Qw,
  $id: ex,
  $vocabulary: tx,
  $dynamicAnchor: rx,
  title: nx,
  allOf: ox,
  type: sx,
  $comment: ax,
  properties: ix
}, lx = "https://json-schema.org/draft/2020-12/schema", ux = "https://json-schema.org/draft/2020-12/meta/applicator", dx = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, fx = "meta", mx = "Applicator vocabulary meta-schema", px = ["object", "boolean"], hx = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, gx = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, vx = {
  $schema: lx,
  $id: ux,
  $vocabulary: dx,
  $dynamicAnchor: fx,
  title: mx,
  type: px,
  properties: hx,
  $defs: gx
}, yx = "https://json-schema.org/draft/2020-12/schema", bx = "https://json-schema.org/draft/2020-12/meta/unevaluated", _x = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, wx = "meta", xx = "Unevaluated applicator vocabulary meta-schema", $x = ["object", "boolean"], Ex = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, Sx = {
  $schema: yx,
  $id: bx,
  $vocabulary: _x,
  $dynamicAnchor: wx,
  title: xx,
  type: $x,
  properties: Ex
}, kx = "https://json-schema.org/draft/2020-12/schema", jx = "https://json-schema.org/draft/2020-12/meta/content", Cx = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Rx = "meta", Px = "Content vocabulary meta-schema", Ax = ["object", "boolean"], Nx = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, Tx = {
  $schema: kx,
  $id: jx,
  $vocabulary: Cx,
  $dynamicAnchor: Rx,
  title: Px,
  type: Ax,
  properties: Nx
}, Ix = "https://json-schema.org/draft/2020-12/schema", Ox = "https://json-schema.org/draft/2020-12/meta/core", Dx = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Mx = "meta", zx = "Core vocabulary meta-schema", Fx = ["object", "boolean"], Vx = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Lx = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, qx = {
  $schema: Ix,
  $id: Ox,
  $vocabulary: Dx,
  $dynamicAnchor: Mx,
  title: zx,
  type: Fx,
  properties: Vx,
  $defs: Lx
}, Ux = "https://json-schema.org/draft/2020-12/schema", Zx = "https://json-schema.org/draft/2020-12/meta/format-annotation", Bx = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Wx = "meta", Hx = "Format vocabulary meta-schema for annotation results", Gx = ["object", "boolean"], Kx = { format: { type: "string" } }, Yx = {
  $schema: Ux,
  $id: Zx,
  $vocabulary: Bx,
  $dynamicAnchor: Wx,
  title: Hx,
  type: Gx,
  properties: Kx
}, Jx = "https://json-schema.org/draft/2020-12/schema", Xx = "https://json-schema.org/draft/2020-12/meta/meta-data", Qx = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, e$ = "meta", t$ = "Meta-data vocabulary meta-schema", r$ = ["object", "boolean"], n$ = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, o$ = {
  $schema: Jx,
  $id: Xx,
  $vocabulary: Qx,
  $dynamicAnchor: e$,
  title: t$,
  type: r$,
  properties: n$
}, s$ = "https://json-schema.org/draft/2020-12/schema", a$ = "https://json-schema.org/draft/2020-12/meta/validation", i$ = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, c$ = "meta", l$ = "Validation vocabulary meta-schema", u$ = ["object", "boolean"], d$ = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, f$ = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, m$ = {
  $schema: s$,
  $id: a$,
  $vocabulary: i$,
  $dynamicAnchor: c$,
  title: l$,
  type: u$,
  properties: d$,
  $defs: f$
};
var Kl;
function p$() {
  if (Kl) return _o;
  Kl = 1, Object.defineProperty(_o, "__esModule", { value: !0 });
  const e = cx, t = vx, r = Sx, n = Tx, o = qx, s = Yx, a = o$, i = m$, c = ["/properties"];
  function l(u) {
    return [
      e,
      t,
      r,
      n,
      o,
      h(this, s),
      a,
      h(this, i)
    ].forEach((p) => this.addMetaSchema(p, void 0, !1)), this;
    function h(p, v) {
      return u ? p.$dataMetaSchema(v, c) : v;
    }
  }
  return _o.default = l, _o;
}
var Yl;
function h$() {
  return Yl || (Yl = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const r = Mm(), n = Jw(), o = Gm(), s = p$(), a = "https://json-schema.org/draft/2020-12/schema";
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
        super._addVocabularies(), n.default.forEach((v) => this.addVocabulary(v)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: v, meta: w } = this.opts;
        w && (s.default.call(this, v), this.refs["http://json-schema.org/schema"] = a);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(a) ? a : void 0);
      }
    }
    t.Ajv2020 = i, e.exports = t = i, e.exports.Ajv2020 = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
    var c = dn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var l = pe();
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
    var u = vs();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return u.default;
    } });
    var h = fn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return h.default;
    } });
  })(Sn, Sn.exports)), Sn.exports;
}
var g$ = h$();
const v$ = /* @__PURE__ */ Au(g$);
var wo = { exports: {} }, aa = {}, Jl;
function y$() {
  return Jl || (Jl = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(D, F) {
      return { validate: D, compare: F };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(s, a),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), l),
      "date-time": t(p(!0), v),
      "iso-time": t(c(), u),
      "iso-date-time": t(p(), w),
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
      regex: q,
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
      int32: { type: "number", validate: E },
      // signed 64 bit integer
      int64: { type: "number", validate: S },
      // C-type float
      float: { type: "number", validate: C },
      // C-type double
      double: { type: "number", validate: C },
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
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, w),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function r(D) {
      return D % 4 === 0 && (D % 100 !== 0 || D % 400 === 0);
    }
    const n = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function s(D) {
      const F = n.exec(D);
      if (!F)
        return !1;
      const U = +F[1], B = +F[2], Q = +F[3];
      return B >= 1 && B <= 12 && Q >= 1 && Q <= (B === 2 && r(U) ? 29 : o[B]);
    }
    function a(D, F) {
      if (D && F)
        return D > F ? 1 : D < F ? -1 : 0;
    }
    const i = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(D) {
      return function(U) {
        const B = i.exec(U);
        if (!B)
          return !1;
        const Q = +B[1], K = +B[2], oe = +B[3], V = B[4], fe = B[5] === "-" ? -1 : 1, W = +(B[6] || 0), j = +(B[7] || 0);
        if (W > 23 || j > 59 || D && !V)
          return !1;
        if (Q <= 23 && K <= 59 && oe < 60)
          return !0;
        const M = K - j * fe, N = Q - W * fe - (M < 0 ? 1 : 0);
        return (N === 23 || N === -1) && (M === 59 || M === -1) && oe < 61;
      };
    }
    function l(D, F) {
      if (!(D && F))
        return;
      const U = (/* @__PURE__ */ new Date("2020-01-01T" + D)).valueOf(), B = (/* @__PURE__ */ new Date("2020-01-01T" + F)).valueOf();
      if (U && B)
        return U - B;
    }
    function u(D, F) {
      if (!(D && F))
        return;
      const U = i.exec(D), B = i.exec(F);
      if (U && B)
        return D = U[1] + U[2] + U[3], F = B[1] + B[2] + B[3], D > F ? 1 : D < F ? -1 : 0;
    }
    const h = /t|\s/i;
    function p(D) {
      const F = c(D);
      return function(B) {
        const Q = B.split(h);
        return Q.length === 2 && s(Q[0]) && F(Q[1]);
      };
    }
    function v(D, F) {
      if (!(D && F))
        return;
      const U = new Date(D).valueOf(), B = new Date(F).valueOf();
      if (U && B)
        return U - B;
    }
    function w(D, F) {
      if (!(D && F))
        return;
      const [U, B] = D.split(h), [Q, K] = F.split(h), oe = a(U, Q);
      if (oe !== void 0)
        return oe || l(B, K);
    }
    const y = /\/|:/, m = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function _(D) {
      return y.test(D) && m.test(D);
    }
    const f = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function b(D) {
      return f.lastIndex = 0, f.test(D);
    }
    const x = -2147483648, g = 2 ** 31 - 1;
    function E(D) {
      return Number.isInteger(D) && D <= g && D >= x;
    }
    function S(D) {
      return Number.isInteger(D);
    }
    function C() {
      return !0;
    }
    const I = /[^\\]\\Z/;
    function q(D) {
      if (I.test(D))
        return !1;
      try {
        return new RegExp(D), !0;
      } catch {
        return !1;
      }
    }
  })(aa)), aa;
}
var ia = {}, xo = { exports: {} }, $o = {}, Xl;
function b$() {
  if (Xl) return $o;
  Xl = 1, Object.defineProperty($o, "__esModule", { value: !0 });
  const e = zm(), t = Fm(), r = Um(), n = Wm(), o = Hm(), s = [
    e.default,
    t.default,
    (0, r.default)(),
    n.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return $o.default = s, $o;
}
const _$ = "http://json-schema.org/draft-07/schema#", w$ = "http://json-schema.org/draft-07/schema#", x$ = "Core schema meta-schema", $$ = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, E$ = ["object", "boolean"], S$ = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, k$ = {
  $schema: _$,
  $id: w$,
  title: x$,
  definitions: $$,
  type: E$,
  properties: S$,
  default: !0
};
var Ql;
function j$() {
  return Ql || (Ql = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = Mm(), n = b$(), o = Gm(), s = k$, a = ["/properties"], i = "http://json-schema.org/draft-07/schema";
    class c extends r.default {
      _addVocabularies() {
        super._addVocabularies(), n.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(o.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const w = this.opts.$data ? this.$dataMetaSchema(s, a) : s;
        this.addMetaSchema(w, i, !1), this.refs["http://json-schema.org/schema"] = i;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0);
      }
    }
    t.Ajv = c, e.exports = t = c, e.exports.Ajv = c, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = c;
    var l = dn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var u = pe();
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
    var h = vs();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var p = fn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return p.default;
    } });
  })(xo, xo.exports)), xo.exports;
}
var eu;
function C$() {
  return eu || (eu = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = j$(), r = pe(), n = r.operators, o = {
      formatMaximum: { okStr: "<=", ok: n.LTE, fail: n.GT },
      formatMinimum: { okStr: ">=", ok: n.GTE, fail: n.LT },
      formatExclusiveMaximum: { okStr: "<", ok: n.LT, fail: n.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: n.GT, fail: n.LTE }
    }, s = {
      message: ({ keyword: i, schemaCode: c }) => (0, r.str)`should be ${o[i].okStr} ${c}`,
      params: ({ keyword: i, schemaCode: c }) => (0, r._)`{comparison: ${o[i].okStr}, limit: ${c}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(o),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: s,
      code(i) {
        const { gen: c, data: l, schemaCode: u, keyword: h, it: p } = i, { opts: v, self: w } = p;
        if (!v.validateFormats)
          return;
        const y = new t.KeywordCxt(p, w.RULES.all.format.definition, "format");
        y.$data ? m() : _();
        function m() {
          const b = c.scopeValue("formats", {
            ref: w.formats,
            code: v.code.formats
          }), x = c.const("fmt", (0, r._)`${b}[${y.schemaCode}]`);
          i.fail$data((0, r.or)((0, r._)`typeof ${x} != "object"`, (0, r._)`${x} instanceof RegExp`, (0, r._)`typeof ${x}.compare != "function"`, f(x)));
        }
        function _() {
          const b = y.schema, x = w.formats[b];
          if (!x || x === !0)
            return;
          if (typeof x != "object" || x instanceof RegExp || typeof x.compare != "function")
            throw new Error(`"${h}": format "${b}" does not define "compare" function`);
          const g = c.scopeValue("formats", {
            key: b,
            ref: x,
            code: v.code.formats ? (0, r._)`${v.code.formats}${(0, r.getProperty)(b)}` : void 0
          });
          i.fail$data(f(g));
        }
        function f(b) {
          return (0, r._)`${b}.compare(${l}, ${u}) ${o[h].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const a = (i) => (i.addKeyword(e.formatLimitDefinition), i);
    e.default = a;
  })(ia)), ia;
}
var tu;
function R$() {
  return tu || (tu = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const r = y$(), n = C$(), o = pe(), s = new o.Name("fullFormats"), a = new o.Name("fastFormats"), i = (l, u = { keywords: !0 }) => {
      if (Array.isArray(u))
        return c(l, u, r.fullFormats, s), l;
      const [h, p] = u.mode === "fast" ? [r.fastFormats, a] : [r.fullFormats, s], v = u.formats || r.formatNames;
      return c(l, v, h, p), u.keywords && (0, n.default)(l), l;
    };
    i.get = (l, u = "full") => {
      const p = (u === "fast" ? r.fastFormats : r.fullFormats)[l];
      if (!p)
        throw new Error(`Unknown format "${l}"`);
      return p;
    };
    function c(l, u, h, p) {
      var v, w;
      (v = (w = l.opts.code).formats) !== null && v !== void 0 || (w.formats = (0, o._)`require("ajv-formats/dist/formats").${p}`);
      for (const y of u)
        l.addFormat(y, h[y]);
    }
    e.exports = t = i, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
  })(wo, wo.exports)), wo.exports;
}
var P$ = R$();
const A$ = /* @__PURE__ */ Au(P$), N$ = "https://json-schema.org/draft/2020-12/schema", Na = new v$();
A$(Na);
function Km(e) {
  return Na.validate(N$, e) ? null : Na.errors || [];
}
function T$({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: ge(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ...t
    }
  );
}
var ca = "rovingFocusGroup.onEntryFocus", I$ = { bubbles: !1, cancelable: !0 }, mn = "RovingFocusGroup", [Ta, Ym, O$] = Bu(mn), [D$, Jm] = $t(
  mn,
  [O$]
), [M$, z$] = D$(mn), Xm = $.forwardRef(
  (e, t) => /* @__PURE__ */ d.jsx(Ta.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(Ta.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d.jsx(F$, { ...e, ref: t }) }) })
);
Xm.displayName = mn;
var F$ = $.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...h
  } = e, p = $.useRef(null), v = Pe(t, p), w = Wa(s), [y, m] = or({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: mn
  }), [_, f] = $.useState(!1), b = Ut(l), x = Ym(r), g = $.useRef(!1), [E, S] = $.useState(0);
  return $.useEffect(() => {
    const C = p.current;
    if (C)
      return C.addEventListener(ca, b), () => C.removeEventListener(ca, b);
  }, [b]), /* @__PURE__ */ d.jsx(
    M$,
    {
      scope: r,
      orientation: n,
      dir: w,
      loop: o,
      currentTabStopId: y,
      onItemFocus: $.useCallback(
        (C) => m(C),
        [m]
      ),
      onItemShiftTab: $.useCallback(() => f(!0), []),
      onFocusableItemAdd: $.useCallback(
        () => S((C) => C + 1),
        []
      ),
      onFocusableItemRemove: $.useCallback(
        () => S((C) => C - 1),
        []
      ),
      children: /* @__PURE__ */ d.jsx(
        Se.div,
        {
          tabIndex: _ || E === 0 ? -1 : 0,
          "data-orientation": n,
          ...h,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: he(e.onMouseDown, () => {
            g.current = !0;
          }),
          onFocus: he(e.onFocus, (C) => {
            const I = !g.current;
            if (C.target === C.currentTarget && I && !_) {
              const q = new CustomEvent(ca, I$);
              if (C.currentTarget.dispatchEvent(q), !q.defaultPrevented) {
                const D = x().filter((K) => K.focusable), F = D.find((K) => K.active), U = D.find((K) => K.id === y), Q = [F, U, ...D].filter(
                  Boolean
                ).map((K) => K.ref.current);
                tp(Q, u);
              }
            }
            g.current = !1;
          }),
          onBlur: he(e.onBlur, () => f(!1))
        }
      )
    }
  );
}), Qm = "RovingFocusGroupItem", ep = $.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = Vt(), l = s || c, u = z$(Qm, r), h = u.currentTabStopId === l, p = Ym(r), { onFocusableItemAdd: v, onFocusableItemRemove: w, currentTabStopId: y } = u;
    return $.useEffect(() => {
      if (n)
        return v(), () => w();
    }, [n, v, w]), /* @__PURE__ */ d.jsx(
      Ta.ItemSlot,
      {
        scope: r,
        id: l,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ d.jsx(
          Se.span,
          {
            tabIndex: h ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: he(e.onMouseDown, (m) => {
              n ? u.onItemFocus(l) : m.preventDefault();
            }),
            onFocus: he(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: he(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const _ = q$(m, u.orientation, u.dir);
              if (_ !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let b = p().filter((x) => x.focusable).map((x) => x.ref.current);
                if (_ === "last") b.reverse();
                else if (_ === "prev" || _ === "next") {
                  _ === "prev" && b.reverse();
                  const x = b.indexOf(m.currentTarget);
                  b = u.loop ? U$(b, x + 1) : b.slice(x + 1);
                }
                setTimeout(() => tp(b));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: h, hasTabStop: y != null }) : a
          }
        )
      }
    );
  }
);
ep.displayName = Qm;
var V$ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function L$(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function q$(e, t, r) {
  const n = L$(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return V$[n];
}
function tp(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function U$(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Z$ = Xm, B$ = ep, wi = "Radio", [W$, rp] = $t(wi), [H$, G$] = W$(wi), np = $.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: s,
      disabled: a,
      value: i = "on",
      onCheck: c,
      form: l,
      ...u
    } = e, [h, p] = $.useState(null), v = Pe(t, (m) => p(m)), w = $.useRef(!1), y = h ? l || !!h.closest("form") : !0;
    return /* @__PURE__ */ d.jsxs(H$, { scope: r, checked: o, disabled: a, children: [
      /* @__PURE__ */ d.jsx(
        Se.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": ip(o),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: i,
          ...u,
          ref: v,
          onClick: he(e.onClick, (m) => {
            o || c?.(), y && (w.current = m.isPropagationStopped(), w.current || m.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ d.jsx(
        ap,
        {
          control: h,
          bubbles: !w.current,
          name: n,
          value: i,
          checked: o,
          required: s,
          disabled: a,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
np.displayName = wi;
var op = "RadioIndicator", sp = $.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, s = G$(op, r);
    return /* @__PURE__ */ d.jsx(Yt, { present: n || s.checked, children: /* @__PURE__ */ d.jsx(
      Se.span,
      {
        "data-state": ip(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
sp.displayName = op;
var K$ = "RadioBubbleInput", ap = $.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, s) => {
    const a = $.useRef(null), i = Pe(a, s), c = ni(r), l = ei(t);
    return $.useEffect(() => {
      const u = a.current;
      if (!u) return;
      const h = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(
        h,
        "checked"
      ).set;
      if (c !== r && v) {
        const w = new Event("click", { bubbles: n });
        v.call(u, r), u.dispatchEvent(w);
      }
    }, [c, r, n]), /* @__PURE__ */ d.jsx(
      Se.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: i,
        style: {
          ...o.style,
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
ap.displayName = K$;
function ip(e) {
  return e ? "checked" : "unchecked";
}
var Y$ = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], bs = "RadioGroup", [J$] = $t(bs, [
  Jm,
  rp
]), cp = Jm(), lp = rp(), [X$, Q$] = J$(bs), up = $.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: s,
      required: a = !1,
      disabled: i = !1,
      orientation: c,
      dir: l,
      loop: u = !0,
      onValueChange: h,
      ...p
    } = e, v = cp(r), w = Wa(l), [y, m] = or({
      prop: s,
      defaultProp: o ?? null,
      onChange: h,
      caller: bs
    });
    return /* @__PURE__ */ d.jsx(
      X$,
      {
        scope: r,
        name: n,
        required: a,
        disabled: i,
        value: y,
        onValueChange: m,
        children: /* @__PURE__ */ d.jsx(
          Z$,
          {
            asChild: !0,
            ...v,
            orientation: c,
            dir: w,
            loop: u,
            children: /* @__PURE__ */ d.jsx(
              Se.div,
              {
                role: "radiogroup",
                "aria-required": a,
                "aria-orientation": c,
                "data-disabled": i ? "" : void 0,
                dir: w,
                ...p,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
up.displayName = bs;
var dp = "RadioGroupItem", fp = $.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, s = Q$(dp, r), a = s.disabled || n, i = cp(r), c = lp(r), l = $.useRef(null), u = Pe(t, l), h = s.value === o.value, p = $.useRef(!1);
    return $.useEffect(() => {
      const v = (y) => {
        Y$.includes(y.key) && (p.current = !0);
      }, w = () => p.current = !1;
      return document.addEventListener("keydown", v), document.addEventListener("keyup", w), () => {
        document.removeEventListener("keydown", v), document.removeEventListener("keyup", w);
      };
    }, []), /* @__PURE__ */ d.jsx(
      B$,
      {
        asChild: !0,
        ...i,
        focusable: !a,
        active: h,
        children: /* @__PURE__ */ d.jsx(
          np,
          {
            disabled: a,
            required: s.required,
            checked: h,
            ...c,
            ...o,
            name: s.name,
            ref: u,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: he((v) => {
              v.key === "Enter" && v.preventDefault();
            }),
            onFocus: he(o.onFocus, () => {
              p.current && l.current?.click();
            })
          }
        )
      }
    );
  }
);
fp.displayName = dp;
var eE = "RadioGroupIndicator", mp = $.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = lp(r);
    return /* @__PURE__ */ d.jsx(sp, { ...o, ...n, ref: t });
  }
);
mp.displayName = eE;
var tE = up, rE = fp, nE = mp;
function oE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    tE,
    {
      "data-slot": "radio-group",
      className: ge("grid gap-3", e),
      ...t
    }
  );
}
function la({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    rE,
    {
      "data-slot": "radio-group-item",
      className: ge(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ d.jsx(
        nE,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ d.jsx(rb, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
const sE = ({ basePath: e, readOnly: t }) => {
  const { control: r, setValue: n, getValues: o } = He(), [s, a] = kr(
    JSON.stringify(o(`${e}.additionalProperties`), null, 2)
  ), [i, c] = kr(null);
  en({
    control: r,
    name: `${e}.isModifiable`
  });
  const l = en({
    control: r,
    name: `${e}.additionalProperties`
  });
  _r(() => {
    c(null), a(JSON.stringify(l, null, 2));
  }, [l]);
  let u;
  typeof l == "boolean" ? u = l ? "true" : "false" : typeof l == "object" && l !== null ? u = "schema" : u = "true";
  const h = (p) => {
    const v = `${e}.additionalProperties`;
    if (p === "true")
      n(v, !0);
    else if (p === "false")
      n(v, !1);
    else {
      const w = { type: "string" };
      n(v, w), a(JSON.stringify(w, null, 2));
    }
  };
  return /* @__PURE__ */ d.jsxs("form", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex gap-4 items-start", children: [
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: r,
          name: `${e}.minProperties`,
          render: ({ field: p }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Minimum Properties" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: t,
                value: p.value ?? "",
                onChange: (v) => p.onChange(
                  v.target.value === "" ? null : Number(v.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      ),
      /* @__PURE__ */ d.jsx(
        $e,
        {
          control: r,
          name: `${e}.maxProperties`,
          render: ({ field: p }) => /* @__PURE__ */ d.jsxs(ve, { className: "flex-1", children: [
            /* @__PURE__ */ d.jsx(ye, { children: "Maximum Properties" }),
            /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
              je,
              {
                type: "number",
                disabled: t,
                value: p.value ?? "",
                onChange: (v) => p.onChange(
                  v.target.value === "" ? null : Number(v.target.value)
                )
              }
            ) }),
            /* @__PURE__ */ d.jsx(xe, {})
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ d.jsx(ye, { children: "Additional Properties" }),
      /* @__PURE__ */ d.jsxs(
        oE,
        {
          value: u,
          onValueChange: h,
          className: "flex space-x-4 pt-2",
          disabled: t,
          children: [
            /* @__PURE__ */ d.jsxs(ve, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ d.jsx(la, { value: "true", id: "ap-true" }),
              /* @__PURE__ */ d.jsx(ye, { htmlFor: "ap-true", className: "font-normal", children: "Allow (true)" })
            ] }),
            /* @__PURE__ */ d.jsxs(ve, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ d.jsx(la, { value: "false", id: "ap-false" }),
              /* @__PURE__ */ d.jsx(ye, { htmlFor: "ap-false", className: "font-normal", children: "Disallow (false)" })
            ] }),
            /* @__PURE__ */ d.jsxs(ve, { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ d.jsx(la, { value: "schema", id: "ap-schema" }),
              /* @__PURE__ */ d.jsx(ye, { htmlFor: "ap-schema", className: "font-normal", children: "Specify Schema" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ d.jsx(xe, {})
    ] }),
    u === "schema" && /* @__PURE__ */ d.jsxs(ve, { children: [
      /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
        T$,
        {
          "data-testid": "schema-textarea",
          rows: 6,
          disabled: t,
          className: "font-mono",
          value: s,
          onChange: (p) => {
            const v = p.target.value;
            a(v);
            try {
              const w = JSON.parse(v), y = Km(w);
              if (y) {
                const m = y.map(
                  (_) => `${_.instancePath} - ${_.message}`
                );
                c(m);
              } else
                n(`${e}.additionalProperties`, w);
            } catch {
              c(["Invalid schema structure."]);
            }
          }
        }
      ) }),
      i && i.length > 0 && /* @__PURE__ */ d.jsx("div", { className: "mt-2 text-sm font-medium text-destructive", children: i.map((p, v) => /* @__PURE__ */ d.jsx("p", { children: p }, v)) })
    ] }),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: r,
        name: `${e}."x-modifiable"`,
        render: ({ field: p }) => /* @__PURE__ */ d.jsxs(ve, { className: "mt-2", children: [
          /* @__PURE__ */ d.jsx(ye, { children: "Modifiable Properties" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            un,
            {
              disabled: t,
              value: p.value || [],
              onValueChange: p.onChange,
              placeholder: "Enter your modifiable properties"
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    )
  ] });
}, aE = ({ basePath: e, readOnly: t }) => {
  const { control: r } = He();
  return /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: r,
        name: `${e}["$schema"]`,
        render: ({ field: n }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "$schema" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(
            je,
            {
              placeholder: "e.g., http://json-schema.org/draft/2020-12/schema",
              disabled: t,
              ...n,
              value: n.value ?? "http://json-schema.org/draft/2020-12/schema"
            }
          ) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    ),
    /* @__PURE__ */ d.jsx(
      $e,
      {
        control: r,
        name: `${e}["$id"]`,
        render: ({ field: n }) => /* @__PURE__ */ d.jsxs(ve, { children: [
          /* @__PURE__ */ d.jsx(ye, { children: "$id" }),
          /* @__PURE__ */ d.jsx(we, { children: /* @__PURE__ */ d.jsx(je, { disabled: t, ...n, value: n.value ?? "" }) }),
          /* @__PURE__ */ d.jsx(xe, {})
        ] })
      }
    )
  ] });
};
var iE = [
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
], cE = iE.reduce((e, t) => {
  const r = /* @__PURE__ */ ii(`Primitive.${t}`), n = $.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d.jsx(c, { ...i, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {}), lE = "Separator", ru = "horizontal", uE = ["horizontal", "vertical"], pp = $.forwardRef((e, t) => {
  const { decorative: r, orientation: n = ru, ...o } = e, s = dE(n) ? n : ru, i = r ? { role: "none" } : { "aria-orientation": s === "vertical" ? s : void 0, role: "separator" };
  return /* @__PURE__ */ d.jsx(
    cE.div,
    {
      "data-orientation": s,
      ...i,
      ...o,
      ref: t
    }
  );
});
pp.displayName = lE;
function dE(e) {
  return uE.includes(e);
}
var fE = pp;
function mE({
  className: e,
  orientation: t = "horizontal",
  decorative: r = !0,
  ...n
}) {
  return /* @__PURE__ */ d.jsx(
    fE,
    {
      "data-slot": "separator",
      decorative: r,
      orientation: t,
      className: ge(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        e
      ),
      ...n
    }
  );
}
const pE = ({ theme: e, basePath: t, readOnly: r }) => {
  const { watch: n } = He(), o = n(`${t}.type`), s = () => {
    switch (o) {
      case "number":
        return /* @__PURE__ */ d.jsx(
          Y0,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "integer":
        return /* @__PURE__ */ d.jsx(
          ew,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "string":
        return /* @__PURE__ */ d.jsx(
          J0,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "boolean":
        return /* @__PURE__ */ d.jsx(
          X0,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "array":
        return /* @__PURE__ */ d.jsx(
          Q0,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      case "object":
        return /* @__PURE__ */ d.jsx(
          sE,
          {
            theme: e,
            basePath: t,
            readOnly: r
          }
        );
      default:
        return /* @__PURE__ */ d.jsx(d.Fragment, { children: `Settings for type ${o} are not yet implemented.` });
    }
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    t === "root" && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
      /* @__PURE__ */ d.jsx(aE, { theme: e, basePath: t, readOnly: r }),
      /* @__PURE__ */ d.jsx(mE, { className: "my-4" })
    ] }),
    s()
  ] });
};
function hE({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(nm, { "data-slot": "dialog", ...e });
}
function gE({
  ...e
}) {
  return /* @__PURE__ */ d.jsx(om, { "data-slot": "dialog-portal", ...e });
}
function vE({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    sm,
    {
      "data-slot": "dialog-overlay",
      className: ge(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function yE({
  className: e,
  children: t,
  showCloseButton: r = !0,
  ...n
}) {
  return /* @__PURE__ */ d.jsxs(gE, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ d.jsx(vE, {}),
    /* @__PURE__ */ d.jsxs(
      am,
      {
        "data-slot": "dialog-content",
        className: ge(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          e
        ),
        ...n,
        children: [
          t,
          r && /* @__PURE__ */ d.jsxs(
            hi,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ d.jsx(df, {}),
                /* @__PURE__ */ d.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function bE({ className: e, ...t }) {
  return /* @__PURE__ */ d.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: ge("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function _E({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ d.jsx(
    im,
    {
      "data-slot": "dialog-title",
      className: ge("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
const wE = ({
  theme: e,
  readOnly: t,
  className: r,
  isOpen: n,
  fieldPath: o,
  onClose: s
}) => {
  const { getValues: a } = He(), i = o ? a(o) : null;
  return /* @__PURE__ */ d.jsx(hE, { open: n, onOpenChange: (c) => !c && s(), children: /* @__PURE__ */ d.jsxs(
    yE,
    {
      className: ge(
        "bg-background text-foreground border-input",
        e,
        r
      ),
      children: [
        /* @__PURE__ */ d.jsx(bE, { children: /* @__PURE__ */ d.jsxs(_E, { className: "capitalize", children: [
          i?.type,
          " Schema Settings"
        ] }) }),
        o && /* @__PURE__ */ d.jsx(pE, { basePath: o, theme: e, readOnly: t }),
        /* @__PURE__ */ d.jsx(Lt, { onClick: s, variant: "default", children: "Close" })
      ]
    }
  ) });
}, nu = (e, t, r) => {
  if (e && "reportValidity" in e) {
    const n = ee(r, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, Ia = (e, t) => {
  for (const r in t.fields) {
    const n = t.fields[r];
    n && n.ref && "reportValidity" in n.ref ? nu(n.ref, r, e) : n && n.refs && n.refs.forEach((o) => nu(o, r, e));
  }
}, ou = (e, t) => {
  t.shouldUseNativeValidation && Ia(e, t);
  const r = {};
  for (const n in e) {
    const o = ee(t.fields, n), s = Object.assign(e[n] || {}, { ref: o && o.ref });
    if (xE(t.names || Object.keys(e), n)) {
      const a = Object.assign({}, ee(r, n));
      Ce(a, "root", s), Ce(r, n, a);
    } else Ce(r, n, s);
  }
  return r;
}, xE = (e, t) => {
  const r = su(t);
  return e.some((n) => su(n).match(`^${r}\\.\\d+`));
};
function su(e) {
  return e.replace(/\]|\[/g, "");
}
function G(e, t, r) {
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
  const o = r?.Parent ?? Object;
  class s extends o {
  }
  Object.defineProperty(s, "name", { value: e });
  function a(i) {
    var c;
    const l = r?.Parent ? new s() : this;
    n(l, i), (c = l._zod).deferred ?? (c.deferred = []);
    for (const u of l._zod.deferred)
      u();
    return l;
  }
  return Object.defineProperty(a, "init", { value: n }), Object.defineProperty(a, Symbol.hasInstance, {
    value: (i) => r?.Parent && i instanceof r.Parent ? !0 : i?._zod?.traits?.has(e)
  }), Object.defineProperty(a, "name", { value: e }), a;
}
class Ar extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class hp extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const gp = {};
function Wt(e) {
  return gp;
}
function $E(e) {
  const t = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, o]) => t.indexOf(+n) === -1).map(([n, o]) => o);
}
function Oa(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function xi(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function $i(e) {
  return e == null;
}
function Ei(e) {
  const t = e.startsWith("^") ? 1 : 0, r = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, r);
}
function EE(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = t.toString();
  let o = (n.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(n)) {
    const c = n.match(/\d?e-(\d?)/);
    c?.[1] && (o = Number.parseInt(c[1]));
  }
  const s = r > o ? r : o, a = Number.parseInt(e.toFixed(s).replace(".", "")), i = Number.parseInt(t.toFixed(s).replace(".", ""));
  return a % i / 10 ** s;
}
const au = Symbol("evaluating");
function Re(e, t, r) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== au)
        return n === void 0 && (n = au, n = r()), n;
    },
    set(o) {
      Object.defineProperty(e, t, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function cr(e, t, r) {
  Object.defineProperty(e, t, {
    value: r,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function lr(...e) {
  const t = {};
  for (const r of e) {
    const n = Object.getOwnPropertyDescriptors(r);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function iu(e) {
  return JSON.stringify(e);
}
const vp = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Bo(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const SE = xi(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Ir(e) {
  if (Bo(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(Bo(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1);
}
function yp(e) {
  return Ir(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const kE = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function _s(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Jt(e, t, r) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || r?.parent) && (n._zod.parent = e), n;
}
function de(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function jE(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const CE = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function RE(e, t) {
  const r = e._zod.def, n = lr(e._zod.def, {
    get shape() {
      const o = {};
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && (o[s] = r.shape[s]);
      }
      return cr(this, "shape", o), o;
    },
    checks: []
  });
  return Jt(e, n);
}
function PE(e, t) {
  const r = e._zod.def, n = lr(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape };
      for (const s in t) {
        if (!(s in r.shape))
          throw new Error(`Unrecognized key: "${s}"`);
        t[s] && delete o[s];
      }
      return cr(this, "shape", o), o;
    },
    checks: []
  });
  return Jt(e, n);
}
function AE(e, t) {
  if (!Ir(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const r = e._zod.def.checks;
  if (r && r.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = lr(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return cr(this, "shape", s), s;
    },
    checks: []
  });
  return Jt(e, o);
}
function NE(e, t) {
  if (!Ir(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const r = {
    ...e._zod.def,
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return cr(this, "shape", n), n;
    },
    checks: e._zod.def.checks
  };
  return Jt(e, r);
}
function TE(e, t) {
  const r = lr(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return cr(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Jt(e, r);
}
function IE(e, t, r) {
  const n = lr(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, s = { ...o };
      if (r)
        for (const a in r) {
          if (!(a in o))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (s[a] = e ? new e({
            type: "optional",
            innerType: o[a]
          }) : o[a]);
        }
      else
        for (const a in o)
          s[a] = e ? new e({
            type: "optional",
            innerType: o[a]
          }) : o[a];
      return cr(this, "shape", s), s;
    },
    checks: []
  });
  return Jt(t, n);
}
function OE(e, t, r) {
  const n = lr(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, s = { ...o };
      if (r)
        for (const a in r) {
          if (!(a in s))
            throw new Error(`Unrecognized key: "${a}"`);
          r[a] && (s[a] = new e({
            type: "nonoptional",
            innerType: o[a]
          }));
        }
      else
        for (const a in o)
          s[a] = new e({
            type: "nonoptional",
            innerType: o[a]
          });
      return cr(this, "shape", s), s;
    },
    checks: []
  });
  return Jt(t, n);
}
function $r(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let r = t; r < e.issues.length; r++)
    if (e.issues[r]?.continue !== !0)
      return !0;
  return !1;
}
function Er(e, t) {
  return t.map((r) => {
    var n;
    return (n = r).path ?? (n.path = []), r.path.unshift(e), r;
  });
}
function Eo(e) {
  return typeof e == "string" ? e : e?.message;
}
function Ht(e, t, r) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const o = Eo(e.inst?._zod.def?.error?.(e)) ?? Eo(t?.error?.(e)) ?? Eo(r.customError?.(e)) ?? Eo(r.localeError?.(e)) ?? "Invalid input";
    n.message = o;
  }
  return delete n.inst, delete n.continue, t?.reportInput || delete n.input, n;
}
function Si(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function sn(...e) {
  const [t, r, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: r,
    inst: n
  } : { ...t };
}
const bp = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Oa, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, ki = G("$ZodError", bp), ws = G("$ZodError", bp, { Parent: Error });
function DE(e, t = (r) => r.message) {
  const r = {}, n = [];
  for (const o of e.issues)
    o.path.length > 0 ? (r[o.path[0]] = r[o.path[0]] || [], r[o.path[0]].push(t(o))) : n.push(t(o));
  return { formErrors: n, fieldErrors: r };
}
function ME(e, t = (r) => r.message) {
  const r = { _errors: [] }, n = (o) => {
    for (const s of o.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((a) => n({ issues: a }));
      else if (s.code === "invalid_key")
        n({ issues: s.issues });
      else if (s.code === "invalid_element")
        n({ issues: s.issues });
      else if (s.path.length === 0)
        r._errors.push(t(s));
      else {
        let a = r, i = 0;
        for (; i < s.path.length; ) {
          const c = s.path[i];
          i === s.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(t(s))) : a[c] = a[c] || { _errors: [] }, a = a[c], i++;
        }
      }
  };
  return n(e), r;
}
const xs = (e) => (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !1 }) : { async: !1 }, a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise)
    throw new Ar();
  if (a.issues.length) {
    const i = new (o?.Err ?? e)(a.issues.map((c) => Ht(c, s, Wt())));
    throw vp(i, o?.callee), i;
  }
  return a.value;
}, zE = /* @__PURE__ */ xs(ws), $s = (e) => async (t, r, n, o) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: r, issues: [] }, s);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    const i = new (o?.Err ?? e)(a.issues.map((c) => Ht(c, s, Wt())));
    throw vp(i, o?.callee), i;
  }
  return a.value;
}, FE = /* @__PURE__ */ $s(ws), Es = (e) => (t, r, n) => {
  const o = n ? { ...n, async: !1 } : { async: !1 }, s = t._zod.run({ value: r, issues: [] }, o);
  if (s instanceof Promise)
    throw new Ar();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? ki)(s.issues.map((a) => Ht(a, o, Wt())))
  } : { success: !0, data: s.value };
}, VE = /* @__PURE__ */ Es(ws), Ss = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: r, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((a) => Ht(a, o, Wt())))
  } : { success: !0, data: s.value };
}, LE = /* @__PURE__ */ Ss(ws), qE = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return xs(e)(t, r, o);
}, UE = (e) => (t, r, n) => xs(e)(t, r, n), ZE = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return $s(e)(t, r, o);
}, BE = (e) => async (t, r, n) => $s(e)(t, r, n), WE = (e) => (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Es(e)(t, r, o);
}, HE = (e) => (t, r, n) => Es(e)(t, r, n), GE = (e) => async (t, r, n) => {
  const o = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Ss(e)(t, r, o);
}, KE = (e) => async (t, r, n) => Ss(e)(t, r, n), YE = /^[cC][^\s-]{8,}$/, JE = /^[0-9a-z]+$/, XE = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, QE = /^[0-9a-vA-V]{20}$/, eS = /^[A-Za-z0-9]{27}$/, tS = /^[a-zA-Z0-9_-]{21}$/, rS = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, nS = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, cu = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, oS = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, sS = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function aS() {
  return new RegExp(sS, "u");
}
const iS = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, cS = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, lS = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, uS = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, dS = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, _p = /^[A-Za-z0-9_-]*$/, fS = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, mS = /^\+(?:[0-9]){6,14}[0-9]$/, wp = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", pS = /* @__PURE__ */ new RegExp(`^${wp}$`);
function xp(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function hS(e) {
  return new RegExp(`^${xp(e)}$`);
}
function gS(e) {
  const t = xp({ precision: e.precision }), r = ["Z"];
  e.local && r.push(""), e.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const n = `${t}(?:${r.join("|")})`;
  return new RegExp(`^${wp}T(?:${n})$`);
}
const vS = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, yS = /^-?\d+$/, bS = /^-?\d+(?:\.\d+)?/, _S = /^(?:true|false)$/i, wS = /^[^A-Z]*$/, xS = /^[^a-z]*$/, Xe = /* @__PURE__ */ G("$ZodCheck", (e, t) => {
  var r;
  e._zod ?? (e._zod = {}), e._zod.def = t, (r = e._zod).onattach ?? (r.onattach = []);
}), $p = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Ep = /* @__PURE__ */ G("$ZodCheckLessThan", (e, t) => {
  Xe.init(e, t);
  const r = $p[typeof t.value];
  e._zod.onattach.push((n) => {
    const o = n._zod.bag, s = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < s && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value <= t.value : n.value < t.value) || n.issues.push({
      origin: r,
      code: "too_big",
      maximum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), Sp = /* @__PURE__ */ G("$ZodCheckGreaterThan", (e, t) => {
  Xe.init(e, t);
  const r = $p[typeof t.value];
  e._zod.onattach.push((n) => {
    const o = n._zod.bag, s = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > s && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (n) => {
    (t.inclusive ? n.value >= t.value : n.value > t.value) || n.issues.push({
      origin: r,
      code: "too_small",
      minimum: t.value,
      input: n.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), $S = /* @__PURE__ */ G("$ZodCheckMultipleOf", (e, t) => {
  Xe.init(e, t), e._zod.onattach.push((r) => {
    var n;
    (n = r._zod.bag).multipleOf ?? (n.multipleOf = t.value);
  }), e._zod.check = (r) => {
    if (typeof r.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof r.value == "bigint" ? r.value % t.value === BigInt(0) : EE(r.value, t.value) === 0) || r.issues.push({
      origin: typeof r.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ES = /* @__PURE__ */ G("$ZodCheckNumberFormat", (e, t) => {
  Xe.init(e, t), t.format = t.format || "float64";
  const r = t.format?.includes("int"), n = r ? "int" : "number", [o, s] = CE[t.format];
  e._zod.onattach.push((a) => {
    const i = a._zod.bag;
    i.format = t.format, i.minimum = o, i.maximum = s, r && (i.pattern = yS);
  }), e._zod.check = (a) => {
    const i = a.value;
    if (r) {
      if (!Number.isInteger(i)) {
        a.issues.push({
          expected: n,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: i,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(i)) {
        i > 0 ? a.issues.push({
          input: i,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          continue: !t.abort
        }) : a.issues.push({
          input: i,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: n,
          continue: !t.abort
        });
        return;
      }
    }
    i < o && a.issues.push({
      origin: "number",
      input: i,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), i > s && a.issues.push({
      origin: "number",
      input: i,
      code: "too_big",
      maximum: s,
      inst: e
    });
  };
}), SS = /* @__PURE__ */ G("$ZodCheckMaxLength", (e, t) => {
  var r;
  Xe.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !$i(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length <= t.maximum)
      return;
    const a = Si(o);
    n.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), kS = /* @__PURE__ */ G("$ZodCheckMinLength", (e, t) => {
  var r;
  Xe.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !$i(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const o = n.value;
    if (o.length >= t.minimum)
      return;
    const a = Si(o);
    n.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), jS = /* @__PURE__ */ G("$ZodCheckLengthEquals", (e, t) => {
  var r;
  Xe.init(e, t), (r = e._zod.def).when ?? (r.when = (n) => {
    const o = n.value;
    return !$i(o) && o.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (n) => {
    const o = n.value, s = o.length;
    if (s === t.length)
      return;
    const a = Si(o), i = s > t.length;
    n.issues.push({
      origin: a,
      ...i ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ks = /* @__PURE__ */ G("$ZodCheckStringFormat", (e, t) => {
  var r, n;
  Xe.init(e, t), e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
  }), t.pattern ? (r = e._zod).check ?? (r.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: o.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (n = e._zod).check ?? (n.check = () => {
  });
}), CS = /* @__PURE__ */ G("$ZodCheckRegex", (e, t) => {
  ks.init(e, t), e._zod.check = (r) => {
    t.pattern.lastIndex = 0, !t.pattern.test(r.value) && r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: r.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), RS = /* @__PURE__ */ G("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = wS), ks.init(e, t);
}), PS = /* @__PURE__ */ G("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = xS), ks.init(e, t);
}), AS = /* @__PURE__ */ G("$ZodCheckIncludes", (e, t) => {
  Xe.init(e, t);
  const r = _s(t.includes), n = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${r}` : r);
  t.pattern = n, e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(n);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), NS = /* @__PURE__ */ G("$ZodCheckStartsWith", (e, t) => {
  Xe.init(e, t);
  const r = new RegExp(`^${_s(t.prefix)}.*`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.startsWith(t.prefix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), TS = /* @__PURE__ */ G("$ZodCheckEndsWith", (e, t) => {
  Xe.init(e, t);
  const r = new RegExp(`.*${_s(t.suffix)}$`);
  t.pattern ?? (t.pattern = r), e._zod.onattach.push((n) => {
    const o = n._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(r);
  }), e._zod.check = (n) => {
    n.value.endsWith(t.suffix) || n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), IS = /* @__PURE__ */ G("$ZodCheckOverwrite", (e, t) => {
  Xe.init(e, t), e._zod.check = (r) => {
    r.value = t.tx(r.value);
  };
});
class OS {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const n = t.split(`
`).filter((a) => a), o = Math.min(...n.map((a) => a.length - a.trimStart().length)), s = n.map((a) => a.slice(o)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of s)
      this.content.push(a);
  }
  compile() {
    const t = Function, r = this?.args, o = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(...r, o.join(`
`));
  }
}
const DS = {
  major: 4,
  minor: 1,
  patch: 12
}, Oe = /* @__PURE__ */ G("$ZodType", (e, t) => {
  var r;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = DS;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const o of n)
    for (const s of o._zod.onattach)
      s(e);
  if (n.length === 0)
    (r = e._zod).deferred ?? (r.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (a, i, c) => {
      let l = $r(a), u;
      for (const h of i) {
        if (h._zod.def.when) {
          if (!h._zod.def.when(a))
            continue;
        } else if (l)
          continue;
        const p = a.issues.length, v = h._zod.check(a);
        if (v instanceof Promise && c?.async === !1)
          throw new Ar();
        if (u || v instanceof Promise)
          u = (u ?? Promise.resolve()).then(async () => {
            await v, a.issues.length !== p && (l || (l = $r(a, p)));
          });
        else {
          if (a.issues.length === p)
            continue;
          l || (l = $r(a, p));
        }
      }
      return u ? u.then(() => a) : a;
    }, s = (a, i, c) => {
      if ($r(a))
        return a.aborted = !0, a;
      const l = o(i, n, c);
      if (l instanceof Promise) {
        if (c.async === !1)
          throw new Ar();
        return l.then((u) => e._zod.parse(u, c));
      }
      return e._zod.parse(l, c);
    };
    e._zod.run = (a, i) => {
      if (i.skipChecks)
        return e._zod.parse(a, i);
      if (i.direction === "backward") {
        const l = e._zod.parse({ value: a.value, issues: [] }, { ...i, skipChecks: !0 });
        return l instanceof Promise ? l.then((u) => s(u, a, i)) : s(l, a, i);
      }
      const c = e._zod.parse(a, i);
      if (c instanceof Promise) {
        if (i.async === !1)
          throw new Ar();
        return c.then((l) => o(l, n, i));
      }
      return o(c, n, i);
    };
  }
  e["~standard"] = {
    validate: (o) => {
      try {
        const s = VE(e, o);
        return s.success ? { value: s.data } : { issues: s.error?.issues };
      } catch {
        return LE(e, o).then((a) => a.success ? { value: a.data } : { issues: a.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), ji = /* @__PURE__ */ G("$ZodString", (e, t) => {
  Oe.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? vS(e._zod.bag), e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = String(r.value);
      } catch {
      }
    return typeof r.value == "string" || r.issues.push({
      expected: "string",
      code: "invalid_type",
      input: r.value,
      inst: e
    }), r;
  };
}), De = /* @__PURE__ */ G("$ZodStringFormat", (e, t) => {
  ks.init(e, t), ji.init(e, t);
}), MS = /* @__PURE__ */ G("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = nS), De.init(e, t);
}), zS = /* @__PURE__ */ G("$ZodUUID", (e, t) => {
  if (t.version) {
    const n = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (n === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = cu(n));
  } else
    t.pattern ?? (t.pattern = cu());
  De.init(e, t);
}), FS = /* @__PURE__ */ G("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = oS), De.init(e, t);
}), VS = /* @__PURE__ */ G("$ZodURL", (e, t) => {
  De.init(e, t), e._zod.check = (r) => {
    try {
      const n = r.value.trim(), o = new URL(n);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: fS.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || r.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: r.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? r.value = o.href : r.value = n;
      return;
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "url",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), LS = /* @__PURE__ */ G("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = aS()), De.init(e, t);
}), qS = /* @__PURE__ */ G("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = tS), De.init(e, t);
}), US = /* @__PURE__ */ G("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = YE), De.init(e, t);
}), ZS = /* @__PURE__ */ G("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = JE), De.init(e, t);
}), BS = /* @__PURE__ */ G("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = XE), De.init(e, t);
}), WS = /* @__PURE__ */ G("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = QE), De.init(e, t);
}), HS = /* @__PURE__ */ G("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = eS), De.init(e, t);
}), GS = /* @__PURE__ */ G("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = gS(t)), De.init(e, t);
}), KS = /* @__PURE__ */ G("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = pS), De.init(e, t);
}), YS = /* @__PURE__ */ G("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = hS(t)), De.init(e, t);
}), JS = /* @__PURE__ */ G("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = rS), De.init(e, t);
}), XS = /* @__PURE__ */ G("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = iS), De.init(e, t), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.format = "ipv4";
  });
}), QS = /* @__PURE__ */ G("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = cS), De.init(e, t), e._zod.onattach.push((r) => {
    const n = r._zod.bag;
    n.format = "ipv6";
  }), e._zod.check = (r) => {
    try {
      new URL(`http://[${r.value}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ek = /* @__PURE__ */ G("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = lS), De.init(e, t);
}), tk = /* @__PURE__ */ G("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = uS), De.init(e, t), e._zod.check = (r) => {
    const n = r.value.split("/");
    try {
      if (n.length !== 2)
        throw new Error();
      const [o, s] = n;
      if (!s)
        throw new Error();
      const a = Number(s);
      if (`${a}` !== s)
        throw new Error();
      if (a < 0 || a > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      r.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function kp(e) {
  if (e === "")
    return !0;
  if (e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const rk = /* @__PURE__ */ G("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = dS), De.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64";
  }), e._zod.check = (r) => {
    kp(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function nk(e) {
  if (!_p.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (n) => n === "-" ? "+" : "/"), r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return kp(r);
}
const ok = /* @__PURE__ */ G("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = _p), De.init(e, t), e._zod.onattach.push((r) => {
    r._zod.bag.contentEncoding = "base64url";
  }), e._zod.check = (r) => {
    nk(r.value) || r.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), sk = /* @__PURE__ */ G("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = mS), De.init(e, t);
});
function ak(e, t = null) {
  try {
    const r = e.split(".");
    if (r.length !== 3)
      return !1;
    const [n] = r;
    if (!n)
      return !1;
    const o = JSON.parse(atob(n));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return !1;
  }
}
const ik = /* @__PURE__ */ G("$ZodJWT", (e, t) => {
  De.init(e, t), e._zod.check = (r) => {
    ak(r.value, t.alg) || r.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), jp = /* @__PURE__ */ G("$ZodNumber", (e, t) => {
  Oe.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? bS, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = Number(r.value);
      } catch {
      }
    const o = r.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return r;
    const s = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return r.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...s ? { received: s } : {}
    }), r;
  };
}), ck = /* @__PURE__ */ G("$ZodNumber", (e, t) => {
  ES.init(e, t), jp.init(e, t);
}), lk = /* @__PURE__ */ G("$ZodBoolean", (e, t) => {
  Oe.init(e, t), e._zod.pattern = _S, e._zod.parse = (r, n) => {
    if (t.coerce)
      try {
        r.value = !!r.value;
      } catch {
      }
    const o = r.value;
    return typeof o == "boolean" || r.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: o,
      inst: e
    }), r;
  };
}), uk = /* @__PURE__ */ G("$ZodAny", (e, t) => {
  Oe.init(e, t), e._zod.parse = (r) => r;
}), dk = /* @__PURE__ */ G("$ZodUnknown", (e, t) => {
  Oe.init(e, t), e._zod.parse = (r) => r;
}), fk = /* @__PURE__ */ G("$ZodNever", (e, t) => {
  Oe.init(e, t), e._zod.parse = (r, n) => (r.issues.push({
    expected: "never",
    code: "invalid_type",
    input: r.value,
    inst: e
  }), r);
});
function lu(e, t, r) {
  e.issues.length && t.issues.push(...Er(r, e.issues)), t.value[r] = e.value;
}
const mk = /* @__PURE__ */ G("$ZodArray", (e, t) => {
  Oe.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value;
    if (!Array.isArray(o))
      return r.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), r;
    r.value = Array(o.length);
    const s = [];
    for (let a = 0; a < o.length; a++) {
      const i = o[a], c = t.element._zod.run({
        value: i,
        issues: []
      }, n);
      c instanceof Promise ? s.push(c.then((l) => lu(l, r, a))) : lu(c, r, a);
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
});
function Wo(e, t, r, n) {
  e.issues.length && t.issues.push(...Er(r, e.issues)), e.value === void 0 ? r in n && (t.value[r] = void 0) : t.value[r] = e.value;
}
function Cp(e) {
  const t = Object.keys(e.shape);
  for (const n of t)
    if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  const r = jE(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(r)
  };
}
function Rp(e, t, r, n, o, s) {
  const a = [], i = o.keySet, c = o.catchall._zod, l = c.def.type;
  for (const u of Object.keys(t)) {
    if (i.has(u))
      continue;
    if (l === "never") {
      a.push(u);
      continue;
    }
    const h = c.run({ value: t[u], issues: [] }, n);
    h instanceof Promise ? e.push(h.then((p) => Wo(p, r, u, t))) : Wo(h, r, u, t);
  }
  return a.length && r.issues.push({
    code: "unrecognized_keys",
    keys: a,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => r) : r;
}
const pk = /* @__PURE__ */ G("$ZodObject", (e, t) => {
  if (Oe.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const i = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const c = { ...i };
        return Object.defineProperty(t, "shape", {
          value: c
        }), c;
      }
    });
  }
  const n = xi(() => Cp(t));
  Re(e._zod, "propValues", () => {
    const i = t.shape, c = {};
    for (const l in i) {
      const u = i[l]._zod;
      if (u.values) {
        c[l] ?? (c[l] = /* @__PURE__ */ new Set());
        for (const h of u.values)
          c[l].add(h);
      }
    }
    return c;
  });
  const o = Bo, s = t.catchall;
  let a;
  e._zod.parse = (i, c) => {
    a ?? (a = n.value);
    const l = i.value;
    if (!o(l))
      return i.issues.push({
        expected: "object",
        code: "invalid_type",
        input: l,
        inst: e
      }), i;
    i.value = {};
    const u = [], h = a.shape;
    for (const p of a.keys) {
      const w = h[p]._zod.run({ value: l[p], issues: [] }, c);
      w instanceof Promise ? u.push(w.then((y) => Wo(y, i, p, l))) : Wo(w, i, p, l);
    }
    return s ? Rp(u, l, i, c, n.value, e) : u.length ? Promise.all(u).then(() => i) : i;
  };
}), hk = /* @__PURE__ */ G("$ZodObjectJIT", (e, t) => {
  pk.init(e, t);
  const r = e._zod.parse, n = xi(() => Cp(t)), o = (p) => {
    const v = new OS(["shape", "payload", "ctx"]), w = n.value, y = (b) => {
      const x = iu(b);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const m = /* @__PURE__ */ Object.create(null);
    let _ = 0;
    for (const b of w.keys)
      m[b] = `key_${_++}`;
    v.write("const newResult = {};");
    for (const b of w.keys) {
      const x = m[b], g = iu(b);
      v.write(`const ${x} = ${y(b)};`), v.write(`
        if (${x}.issues.length) {
          payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${g}, ...iss.path] : [${g}]
          })));
        }
        
        
        if (${x}.value === undefined) {
          if (${g} in input) {
            newResult[${g}] = undefined;
          }
        } else {
          newResult[${g}] = ${x}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const f = v.compile();
    return (b, x) => f(p, b, x);
  };
  let s;
  const a = Bo, i = !gp.jitless, l = i && SE.value, u = t.catchall;
  let h;
  e._zod.parse = (p, v) => {
    h ?? (h = n.value);
    const w = p.value;
    return a(w) ? i && l && v?.async === !1 && v.jitless !== !0 ? (s || (s = o(t.shape)), p = s(p, v), u ? Rp([], w, p, v, h, e) : p) : r(p, v) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: w,
      inst: e
    }), p);
  };
});
function uu(e, t, r, n) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const o = e.filter((s) => !$r(s));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: r,
    errors: e.map((s) => s.issues.map((a) => Ht(a, n, Wt())))
  }), t);
}
const gk = /* @__PURE__ */ G("$ZodUnion", (e, t) => {
  Oe.init(e, t), Re(e._zod, "optin", () => t.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), Re(e._zod, "optout", () => t.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), Re(e._zod, "values", () => {
    if (t.options.every((o) => o._zod.values))
      return new Set(t.options.flatMap((o) => Array.from(o._zod.values)));
  }), Re(e._zod, "pattern", () => {
    if (t.options.every((o) => o._zod.pattern)) {
      const o = t.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => Ei(s.source)).join("|")})$`);
    }
  });
  const r = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (o, s) => {
    if (r)
      return n(o, s);
    let a = !1;
    const i = [];
    for (const c of t.options) {
      const l = c._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (l instanceof Promise)
        i.push(l), a = !0;
      else {
        if (l.issues.length === 0)
          return l;
        i.push(l);
      }
    }
    return a ? Promise.all(i).then((c) => uu(c, o, e, s)) : uu(i, o, e, s);
  };
}), vk = /* @__PURE__ */ G("$ZodIntersection", (e, t) => {
  Oe.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value, s = t.left._zod.run({ value: o, issues: [] }, n), a = t.right._zod.run({ value: o, issues: [] }, n);
    return s instanceof Promise || a instanceof Promise ? Promise.all([s, a]).then(([c, l]) => du(r, c, l)) : du(r, s, a);
  };
});
function Da(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Ir(e) && Ir(t)) {
    const r = Object.keys(t), n = Object.keys(e).filter((s) => r.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of n) {
      const a = Da(e[s], t[s]);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...a.mergeErrorPath]
        };
      o[s] = a.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const r = [];
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = t[n], a = Da(o, s);
      if (!a.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...a.mergeErrorPath]
        };
      r.push(a.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function du(e, t, r) {
  if (t.issues.length && e.issues.push(...t.issues), r.issues.length && e.issues.push(...r.issues), $r(e))
    return e;
  const n = Da(t.value, r.value);
  if (!n.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(n.mergeErrorPath)}`);
  return e.value = n.data, e;
}
const yk = /* @__PURE__ */ G("$ZodRecord", (e, t) => {
  Oe.init(e, t), e._zod.parse = (r, n) => {
    const o = r.value;
    if (!Ir(o))
      return r.issues.push({
        expected: "record",
        code: "invalid_type",
        input: o,
        inst: e
      }), r;
    const s = [];
    if (t.keyType._zod.values) {
      const a = t.keyType._zod.values;
      r.value = {};
      for (const c of a)
        if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
          const l = t.valueType._zod.run({ value: o[c], issues: [] }, n);
          l instanceof Promise ? s.push(l.then((u) => {
            u.issues.length && r.issues.push(...Er(c, u.issues)), r.value[c] = u.value;
          })) : (l.issues.length && r.issues.push(...Er(c, l.issues)), r.value[c] = l.value);
        }
      let i;
      for (const c in o)
        a.has(c) || (i = i ?? [], i.push(c));
      i && i.length > 0 && r.issues.push({
        code: "unrecognized_keys",
        input: o,
        inst: e,
        keys: i
      });
    } else {
      r.value = {};
      for (const a of Reflect.ownKeys(o)) {
        if (a === "__proto__")
          continue;
        const i = t.keyType._zod.run({ value: a, issues: [] }, n);
        if (i instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (i.issues.length) {
          r.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: i.issues.map((l) => Ht(l, n, Wt())),
            input: a,
            path: [a],
            inst: e
          }), r.value[i.value] = i.value;
          continue;
        }
        const c = t.valueType._zod.run({ value: o[a], issues: [] }, n);
        c instanceof Promise ? s.push(c.then((l) => {
          l.issues.length && r.issues.push(...Er(a, l.issues)), r.value[i.value] = l.value;
        })) : (c.issues.length && r.issues.push(...Er(a, c.issues)), r.value[i.value] = c.value);
      }
    }
    return s.length ? Promise.all(s).then(() => r) : r;
  };
}), bk = /* @__PURE__ */ G("$ZodEnum", (e, t) => {
  Oe.init(e, t);
  const r = $E(t.entries), n = new Set(r);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${r.filter((o) => kE.has(typeof o)).map((o) => typeof o == "string" ? _s(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const a = o.value;
    return n.has(a) || o.issues.push({
      code: "invalid_value",
      values: r,
      input: a,
      inst: e
    }), o;
  };
}), _k = /* @__PURE__ */ G("$ZodTransform", (e, t) => {
  Oe.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new hp(e.constructor.name);
    const o = t.transform(r.value, r);
    if (n.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((a) => (r.value = a, r));
    if (o instanceof Promise)
      throw new Ar();
    return r.value = o, r;
  };
});
function fu(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const wk = /* @__PURE__ */ G("$ZodOptional", (e, t) => {
  Oe.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Re(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), Re(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Ei(r.source)})?$`) : void 0;
  }), e._zod.parse = (r, n) => {
    if (t.innerType._zod.optin === "optional") {
      const o = t.innerType._zod.run(r, n);
      return o instanceof Promise ? o.then((s) => fu(s, r.value)) : fu(o, r.value);
    }
    return r.value === void 0 ? r : t.innerType._zod.run(r, n);
  };
}), xk = /* @__PURE__ */ G("$ZodNullable", (e, t) => {
  Oe.init(e, t), Re(e._zod, "optin", () => t.innerType._zod.optin), Re(e._zod, "optout", () => t.innerType._zod.optout), Re(e._zod, "pattern", () => {
    const r = t.innerType._zod.pattern;
    return r ? new RegExp(`^(${Ei(r.source)}|null)$`) : void 0;
  }), Re(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (r, n) => r.value === null ? r : t.innerType._zod.run(r, n);
}), $k = /* @__PURE__ */ G("$ZodDefault", (e, t) => {
  Oe.init(e, t), e._zod.optin = "optional", Re(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    if (r.value === void 0)
      return r.value = t.defaultValue, r;
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => mu(s, t)) : mu(o, t);
  };
});
function mu(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Ek = /* @__PURE__ */ G("$ZodPrefault", (e, t) => {
  Oe.init(e, t), e._zod.optin = "optional", Re(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => (n.direction === "backward" || r.value === void 0 && (r.value = t.defaultValue), t.innerType._zod.run(r, n));
}), Sk = /* @__PURE__ */ G("$ZodNonOptional", (e, t) => {
  Oe.init(e, t), Re(e._zod, "values", () => {
    const r = t.innerType._zod.values;
    return r ? new Set([...r].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (r, n) => {
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => pu(s, e)) : pu(o, e);
  };
});
function pu(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const kk = /* @__PURE__ */ G("$ZodCatch", (e, t) => {
  Oe.init(e, t), Re(e._zod, "optin", () => t.innerType._zod.optin), Re(e._zod, "optout", () => t.innerType._zod.optout), Re(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => (r.value = s.value, s.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: s.issues.map((a) => Ht(a, n, Wt()))
      },
      input: r.value
    }), r.issues = []), r)) : (r.value = o.value, o.issues.length && (r.value = t.catchValue({
      ...r,
      error: {
        issues: o.issues.map((s) => Ht(s, n, Wt()))
      },
      input: r.value
    }), r.issues = []), r);
  };
}), jk = /* @__PURE__ */ G("$ZodPipe", (e, t) => {
  Oe.init(e, t), Re(e._zod, "values", () => t.in._zod.values), Re(e._zod, "optin", () => t.in._zod.optin), Re(e._zod, "optout", () => t.out._zod.optout), Re(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (r, n) => {
    if (n.direction === "backward") {
      const s = t.out._zod.run(r, n);
      return s instanceof Promise ? s.then((a) => So(a, t.in, n)) : So(s, t.in, n);
    }
    const o = t.in._zod.run(r, n);
    return o instanceof Promise ? o.then((s) => So(s, t.out, n)) : So(o, t.out, n);
  };
});
function So(e, t, r) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, r);
}
const Ck = /* @__PURE__ */ G("$ZodReadonly", (e, t) => {
  Oe.init(e, t), Re(e._zod, "propValues", () => t.innerType._zod.propValues), Re(e._zod, "values", () => t.innerType._zod.values), Re(e._zod, "optin", () => t.innerType._zod.optin), Re(e._zod, "optout", () => t.innerType._zod.optout), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(r, n);
    const o = t.innerType._zod.run(r, n);
    return o instanceof Promise ? o.then(hu) : hu(o);
  };
});
function hu(e) {
  return e.value = Object.freeze(e.value), e;
}
const Rk = /* @__PURE__ */ G("$ZodLazy", (e, t) => {
  Oe.init(e, t), Re(e._zod, "innerType", () => t.getter()), Re(e._zod, "pattern", () => e._zod.innerType._zod.pattern), Re(e._zod, "propValues", () => e._zod.innerType._zod.propValues), Re(e._zod, "optin", () => e._zod.innerType._zod.optin ?? void 0), Re(e._zod, "optout", () => e._zod.innerType._zod.optout ?? void 0), e._zod.parse = (r, n) => e._zod.innerType._zod.run(r, n);
}), Pk = /* @__PURE__ */ G("$ZodCustom", (e, t) => {
  Xe.init(e, t), Oe.init(e, t), e._zod.parse = (r, n) => r, e._zod.check = (r) => {
    const n = r.value, o = t.fn(n);
    if (o instanceof Promise)
      return o.then((s) => gu(s, r, n, e));
    gu(o, r, n, e);
  };
});
function gu(e, t, r, n) {
  if (!e) {
    const o = {
      code: "custom",
      input: r,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (o.params = n._zod.def.params), t.issues.push(sn(o));
  }
}
class Ak {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...r) {
    const n = r[0];
    if (this._map.set(t, n), n && typeof n == "object" && "id" in n) {
      if (this._idmap.has(n.id))
        throw new Error(`ID ${n.id} already exists in the registry`);
      this._idmap.set(n.id, t);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const r = this._map.get(t);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(t), this;
  }
  get(t) {
    const r = t._zod.parent;
    if (r) {
      const n = { ...this.get(r) ?? {} };
      delete n.id;
      const o = { ...n, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Nk() {
  return new Ak();
}
const ko = /* @__PURE__ */ Nk();
function Tk(e, t) {
  return new e({
    type: "string",
    ...de(t)
  });
}
function Ik(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function vu(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Ok(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Dk(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...de(t)
  });
}
function Mk(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...de(t)
  });
}
function zk(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...de(t)
  });
}
function Fk(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Vk(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Lk(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function qk(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Uk(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Zk(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Bk(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Wk(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Hk(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Gk(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Kk(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Yk(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Jk(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Xk(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function Qk(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function ej(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...de(t)
  });
}
function tj(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...de(t)
  });
}
function rj(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...de(t)
  });
}
function nj(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...de(t)
  });
}
function oj(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...de(t)
  });
}
function sj(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...de(t)
  });
}
function aj(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...de(t)
  });
}
function ij(e, t) {
  return new e({
    type: "boolean",
    ...de(t)
  });
}
function cj(e) {
  return new e({
    type: "any"
  });
}
function lj(e) {
  return new e({
    type: "unknown"
  });
}
function uj(e, t) {
  return new e({
    type: "never",
    ...de(t)
  });
}
function yu(e, t) {
  return new Ep({
    check: "less_than",
    ...de(t),
    value: e,
    inclusive: !1
  });
}
function ua(e, t) {
  return new Ep({
    check: "less_than",
    ...de(t),
    value: e,
    inclusive: !0
  });
}
function bu(e, t) {
  return new Sp({
    check: "greater_than",
    ...de(t),
    value: e,
    inclusive: !1
  });
}
function da(e, t) {
  return new Sp({
    check: "greater_than",
    ...de(t),
    value: e,
    inclusive: !0
  });
}
function _u(e, t) {
  return new $S({
    check: "multiple_of",
    ...de(t),
    value: e
  });
}
function Pp(e, t) {
  return new SS({
    check: "max_length",
    ...de(t),
    maximum: e
  });
}
function Ho(e, t) {
  return new kS({
    check: "min_length",
    ...de(t),
    minimum: e
  });
}
function Ap(e, t) {
  return new jS({
    check: "length_equals",
    ...de(t),
    length: e
  });
}
function dj(e, t) {
  return new CS({
    check: "string_format",
    format: "regex",
    ...de(t),
    pattern: e
  });
}
function fj(e) {
  return new RS({
    check: "string_format",
    format: "lowercase",
    ...de(e)
  });
}
function mj(e) {
  return new PS({
    check: "string_format",
    format: "uppercase",
    ...de(e)
  });
}
function pj(e, t) {
  return new AS({
    check: "string_format",
    format: "includes",
    ...de(t),
    includes: e
  });
}
function hj(e, t) {
  return new NS({
    check: "string_format",
    format: "starts_with",
    ...de(t),
    prefix: e
  });
}
function gj(e, t) {
  return new TS({
    check: "string_format",
    format: "ends_with",
    ...de(t),
    suffix: e
  });
}
function pn(e) {
  return new IS({
    check: "overwrite",
    tx: e
  });
}
function vj(e) {
  return pn((t) => t.normalize(e));
}
function yj() {
  return pn((e) => e.trim());
}
function bj() {
  return pn((e) => e.toLowerCase());
}
function _j() {
  return pn((e) => e.toUpperCase());
}
function wj(e, t, r) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...de(r)
  });
}
function xj(e, t, r) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...de(r)
  });
}
function $j(e) {
  const t = Ej((r) => (r.addIssue = (n) => {
    if (typeof n == "string")
      r.issues.push(sn(n, r.value, t._zod.def));
    else {
      const o = n;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = r.value), o.inst ?? (o.inst = t), o.continue ?? (o.continue = !t._zod.def.abort), r.issues.push(sn(o));
    }
  }, e(r.value, r)));
  return t;
}
function Ej(e, t) {
  const r = new Xe({
    check: "custom",
    ...de(t)
  });
  return r._zod.check = e, r;
}
function wu(e, t) {
  try {
    var r = e();
  } catch (n) {
    return t(n);
  }
  return r && r.then ? r.then(void 0, t) : r;
}
function Sj(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0], o = n.code, s = n.message, a = n.path.join(".");
    if (!r[a]) if ("unionErrors" in n) {
      var i = n.unionErrors[0].errors[0];
      r[a] = { message: i.message, type: i.code };
    } else r[a] = { message: s, type: o };
    if ("unionErrors" in n && n.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(h) {
        return e.push(h);
      });
    }), t) {
      var c = r[a].types, l = c && c[n.code];
      r[a] = Ua(a, t, r, o, l ? [].concat(l, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}
function kj(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0], o = n.code, s = n.message, a = n.path.join(".");
    if (!r[a]) if (n.code === "invalid_union" && n.errors.length > 0) {
      var i = n.errors[0][0];
      r[a] = { message: i.message, type: i.code };
    } else r[a] = { message: s, type: o };
    if (n.code === "invalid_union" && n.errors.forEach(function(u) {
      return u.forEach(function(h) {
        return e.push(h);
      });
    }), t) {
      var c = r[a].types, l = c && c[n.code];
      r[a] = Ua(a, t, r, o, l ? [].concat(l, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}
function jj(e, t, r) {
  if (r === void 0 && (r = {}), (function(n) {
    return "_def" in n && typeof n._def == "object" && "typeName" in n._def;
  })(e)) return function(n, o, s) {
    try {
      return Promise.resolve(wu(function() {
        return Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](n, t)).then(function(a) {
          return s.shouldUseNativeValidation && Ia({}, s), { errors: {}, values: r.raw ? Object.assign({}, n) : a };
        });
      }, function(a) {
        if ((function(i) {
          return Array.isArray(i?.issues);
        })(a)) return { values: {}, errors: ou(Sj(a.errors, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
  if ((function(n) {
    return "_zod" in n && typeof n._zod == "object";
  })(e)) return function(n, o, s) {
    try {
      return Promise.resolve(wu(function() {
        return Promise.resolve((r.mode === "sync" ? zE : FE)(e, n, t)).then(function(a) {
          return s.shouldUseNativeValidation && Ia({}, s), { errors: {}, values: r.raw ? Object.assign({}, n) : a };
        });
      }, function(a) {
        if ((function(i) {
          return i instanceof ki;
        })(a)) return { values: {}, errors: ou(kj(a.issues, !s.shouldUseNativeValidation && s.criteriaMode === "all"), s) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
  throw new Error("Invalid input: not a Zod schema");
}
const Cj = /* @__PURE__ */ G("ZodISODateTime", (e, t) => {
  GS.init(e, t), Fe.init(e, t);
});
function Rj(e) {
  return tj(Cj, e);
}
const Pj = /* @__PURE__ */ G("ZodISODate", (e, t) => {
  KS.init(e, t), Fe.init(e, t);
});
function Aj(e) {
  return rj(Pj, e);
}
const Nj = /* @__PURE__ */ G("ZodISOTime", (e, t) => {
  YS.init(e, t), Fe.init(e, t);
});
function Tj(e) {
  return nj(Nj, e);
}
const Ij = /* @__PURE__ */ G("ZodISODuration", (e, t) => {
  JS.init(e, t), Fe.init(e, t);
});
function Oj(e) {
  return oj(Ij, e);
}
const Dj = (e, t) => {
  ki.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (r) => ME(e, r)
      // enumerable: false,
    },
    flatten: {
      value: (r) => DE(e, r)
      // enumerable: false,
    },
    addIssue: {
      value: (r) => {
        e.issues.push(r), e.message = JSON.stringify(e.issues, Oa, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (r) => {
        e.issues.push(...r), e.message = JSON.stringify(e.issues, Oa, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, it = G("ZodError", Dj, {
  Parent: Error
}), Mj = /* @__PURE__ */ xs(it), zj = /* @__PURE__ */ $s(it), Fj = /* @__PURE__ */ Es(it), Vj = /* @__PURE__ */ Ss(it), Lj = /* @__PURE__ */ qE(it), qj = /* @__PURE__ */ UE(it), Uj = /* @__PURE__ */ ZE(it), Zj = /* @__PURE__ */ BE(it), Bj = /* @__PURE__ */ WE(it), Wj = /* @__PURE__ */ HE(it), Hj = /* @__PURE__ */ GE(it), Gj = /* @__PURE__ */ KE(it), ze = /* @__PURE__ */ G("ZodType", (e, t) => (Oe.init(e, t), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...r) => e.clone(lr(t, {
  checks: [
    ...t.checks ?? [],
    ...r.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
})), e.clone = (r, n) => Jt(e, r, n), e.brand = () => e, e.register = ((r, n) => (r.add(e, n), e)), e.parse = (r, n) => Mj(e, r, n, { callee: e.parse }), e.safeParse = (r, n) => Fj(e, r, n), e.parseAsync = async (r, n) => zj(e, r, n, { callee: e.parseAsync }), e.safeParseAsync = async (r, n) => Vj(e, r, n), e.spa = e.safeParseAsync, e.encode = (r, n) => Lj(e, r, n), e.decode = (r, n) => qj(e, r, n), e.encodeAsync = async (r, n) => Uj(e, r, n), e.decodeAsync = async (r, n) => Zj(e, r, n), e.safeEncode = (r, n) => Bj(e, r, n), e.safeDecode = (r, n) => Wj(e, r, n), e.safeEncodeAsync = async (r, n) => Hj(e, r, n), e.safeDecodeAsync = async (r, n) => Gj(e, r, n), e.refine = (r, n) => e.check(LC(r, n)), e.superRefine = (r) => e.check(qC(r)), e.overwrite = (r) => e.check(pn(r)), e.optional = () => ku(e), e.nullable = () => ju(e), e.nullish = () => ku(ju(e)), e.nonoptional = (r) => TC(e, r), e.array = () => Or(e), e.or = (r) => za([e, r]), e.and = (r) => $C(e, r), e.transform = (r) => Cu(e, jC(r)), e.default = (r) => PC(e, r), e.prefault = (r) => NC(e, r), e.catch = (r) => OC(e, r), e.pipe = (r) => Cu(e, r), e.readonly = () => zC(e), e.describe = (r) => {
  const n = e.clone();
  return ko.add(n, { description: r }), n;
}, Object.defineProperty(e, "description", {
  get() {
    return ko.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...r) => {
  if (r.length === 0)
    return ko.get(e);
  const n = e.clone();
  return ko.add(n, r[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e)), Np = /* @__PURE__ */ G("_ZodString", (e, t) => {
  ji.init(e, t), ze.init(e, t);
  const r = e._zod.bag;
  e.format = r.format ?? null, e.minLength = r.minimum ?? null, e.maxLength = r.maximum ?? null, e.regex = (...n) => e.check(dj(...n)), e.includes = (...n) => e.check(pj(...n)), e.startsWith = (...n) => e.check(hj(...n)), e.endsWith = (...n) => e.check(gj(...n)), e.min = (...n) => e.check(Ho(...n)), e.max = (...n) => e.check(Pp(...n)), e.length = (...n) => e.check(Ap(...n)), e.nonempty = (...n) => e.check(Ho(1, ...n)), e.lowercase = (n) => e.check(fj(n)), e.uppercase = (n) => e.check(mj(n)), e.trim = () => e.check(yj()), e.normalize = (...n) => e.check(vj(...n)), e.toLowerCase = () => e.check(bj()), e.toUpperCase = () => e.check(_j());
}), Kj = /* @__PURE__ */ G("ZodString", (e, t) => {
  ji.init(e, t), Np.init(e, t), e.email = (r) => e.check(Ik(Yj, r)), e.url = (r) => e.check(Fk(Jj, r)), e.jwt = (r) => e.check(ej(fC, r)), e.emoji = (r) => e.check(Vk(Xj, r)), e.guid = (r) => e.check(vu(xu, r)), e.uuid = (r) => e.check(Ok(jo, r)), e.uuidv4 = (r) => e.check(Dk(jo, r)), e.uuidv6 = (r) => e.check(Mk(jo, r)), e.uuidv7 = (r) => e.check(zk(jo, r)), e.nanoid = (r) => e.check(Lk(Qj, r)), e.guid = (r) => e.check(vu(xu, r)), e.cuid = (r) => e.check(qk(eC, r)), e.cuid2 = (r) => e.check(Uk(tC, r)), e.ulid = (r) => e.check(Zk(rC, r)), e.base64 = (r) => e.check(Jk(lC, r)), e.base64url = (r) => e.check(Xk(uC, r)), e.xid = (r) => e.check(Bk(nC, r)), e.ksuid = (r) => e.check(Wk(oC, r)), e.ipv4 = (r) => e.check(Hk(sC, r)), e.ipv6 = (r) => e.check(Gk(aC, r)), e.cidrv4 = (r) => e.check(Kk(iC, r)), e.cidrv6 = (r) => e.check(Yk(cC, r)), e.e164 = (r) => e.check(Qk(dC, r)), e.datetime = (r) => e.check(Rj(r)), e.date = (r) => e.check(Aj(r)), e.time = (r) => e.check(Tj(r)), e.duration = (r) => e.check(Oj(r));
});
function ut(e) {
  return Tk(Kj, e);
}
const Fe = /* @__PURE__ */ G("ZodStringFormat", (e, t) => {
  De.init(e, t), Np.init(e, t);
}), Yj = /* @__PURE__ */ G("ZodEmail", (e, t) => {
  FS.init(e, t), Fe.init(e, t);
}), xu = /* @__PURE__ */ G("ZodGUID", (e, t) => {
  MS.init(e, t), Fe.init(e, t);
}), jo = /* @__PURE__ */ G("ZodUUID", (e, t) => {
  zS.init(e, t), Fe.init(e, t);
}), Jj = /* @__PURE__ */ G("ZodURL", (e, t) => {
  VS.init(e, t), Fe.init(e, t);
}), Xj = /* @__PURE__ */ G("ZodEmoji", (e, t) => {
  LS.init(e, t), Fe.init(e, t);
}), Qj = /* @__PURE__ */ G("ZodNanoID", (e, t) => {
  qS.init(e, t), Fe.init(e, t);
}), eC = /* @__PURE__ */ G("ZodCUID", (e, t) => {
  US.init(e, t), Fe.init(e, t);
}), tC = /* @__PURE__ */ G("ZodCUID2", (e, t) => {
  ZS.init(e, t), Fe.init(e, t);
}), rC = /* @__PURE__ */ G("ZodULID", (e, t) => {
  BS.init(e, t), Fe.init(e, t);
}), nC = /* @__PURE__ */ G("ZodXID", (e, t) => {
  WS.init(e, t), Fe.init(e, t);
}), oC = /* @__PURE__ */ G("ZodKSUID", (e, t) => {
  HS.init(e, t), Fe.init(e, t);
}), sC = /* @__PURE__ */ G("ZodIPv4", (e, t) => {
  XS.init(e, t), Fe.init(e, t);
}), aC = /* @__PURE__ */ G("ZodIPv6", (e, t) => {
  QS.init(e, t), Fe.init(e, t);
}), iC = /* @__PURE__ */ G("ZodCIDRv4", (e, t) => {
  ek.init(e, t), Fe.init(e, t);
}), cC = /* @__PURE__ */ G("ZodCIDRv6", (e, t) => {
  tk.init(e, t), Fe.init(e, t);
}), lC = /* @__PURE__ */ G("ZodBase64", (e, t) => {
  rk.init(e, t), Fe.init(e, t);
}), uC = /* @__PURE__ */ G("ZodBase64URL", (e, t) => {
  ok.init(e, t), Fe.init(e, t);
}), dC = /* @__PURE__ */ G("ZodE164", (e, t) => {
  sk.init(e, t), Fe.init(e, t);
}), fC = /* @__PURE__ */ G("ZodJWT", (e, t) => {
  ik.init(e, t), Fe.init(e, t);
}), Tp = /* @__PURE__ */ G("ZodNumber", (e, t) => {
  jp.init(e, t), ze.init(e, t), e.gt = (n, o) => e.check(bu(n, o)), e.gte = (n, o) => e.check(da(n, o)), e.min = (n, o) => e.check(da(n, o)), e.lt = (n, o) => e.check(yu(n, o)), e.lte = (n, o) => e.check(ua(n, o)), e.max = (n, o) => e.check(ua(n, o)), e.int = (n) => e.check($u(n)), e.safe = (n) => e.check($u(n)), e.positive = (n) => e.check(bu(0, n)), e.nonnegative = (n) => e.check(da(0, n)), e.negative = (n) => e.check(yu(0, n)), e.nonpositive = (n) => e.check(ua(0, n)), e.multipleOf = (n, o) => e.check(_u(n, o)), e.step = (n, o) => e.check(_u(n, o)), e.finite = () => e;
  const r = e._zod.bag;
  e.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5), e.isFinite = !0, e.format = r.format ?? null;
});
function et(e) {
  return sj(Tp, e);
}
const mC = /* @__PURE__ */ G("ZodNumberFormat", (e, t) => {
  ck.init(e, t), Tp.init(e, t);
});
function $u(e) {
  return aj(mC, e);
}
const pC = /* @__PURE__ */ G("ZodBoolean", (e, t) => {
  lk.init(e, t), ze.init(e, t);
});
function Go(e) {
  return ij(pC, e);
}
const hC = /* @__PURE__ */ G("ZodAny", (e, t) => {
  uk.init(e, t), ze.init(e, t);
});
function Eu() {
  return cj(hC);
}
const gC = /* @__PURE__ */ G("ZodUnknown", (e, t) => {
  dk.init(e, t), ze.init(e, t);
});
function Su() {
  return lj(gC);
}
const vC = /* @__PURE__ */ G("ZodNever", (e, t) => {
  fk.init(e, t), ze.init(e, t);
});
function yC(e) {
  return uj(vC, e);
}
const bC = /* @__PURE__ */ G("ZodArray", (e, t) => {
  mk.init(e, t), ze.init(e, t), e.element = t.element, e.min = (r, n) => e.check(Ho(r, n)), e.nonempty = (r) => e.check(Ho(1, r)), e.max = (r, n) => e.check(Pp(r, n)), e.length = (r, n) => e.check(Ap(r, n)), e.unwrap = () => e.element;
});
function Or(e, t) {
  return wj(bC, e, t);
}
const _C = /* @__PURE__ */ G("ZodObject", (e, t) => {
  hk.init(e, t), ze.init(e, t), Re(e, "shape", () => t.shape), e.keyof = () => Ip(Object.keys(e._zod.def.shape)), e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: Su() }), e.loose = () => e.clone({ ...e._zod.def, catchall: Su() }), e.strict = () => e.clone({ ...e._zod.def, catchall: yC() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (r) => AE(e, r), e.safeExtend = (r) => NE(e, r), e.merge = (r) => TE(e, r), e.pick = (r) => RE(e, r), e.omit = (r) => PE(e, r), e.partial = (...r) => IE(Op, e, r[0]), e.required = (...r) => OE(Dp, e, r[0]);
});
function Ma(e, t) {
  const r = {
    type: "object",
    shape: e ?? {},
    ...de(t)
  };
  return new _C(r);
}
const wC = /* @__PURE__ */ G("ZodUnion", (e, t) => {
  gk.init(e, t), ze.init(e, t), e.options = t.options;
});
function za(e, t) {
  return new wC({
    type: "union",
    options: e,
    ...de(t)
  });
}
const xC = /* @__PURE__ */ G("ZodIntersection", (e, t) => {
  vk.init(e, t), ze.init(e, t);
});
function $C(e, t) {
  return new xC({
    type: "intersection",
    left: e,
    right: t
  });
}
const EC = /* @__PURE__ */ G("ZodRecord", (e, t) => {
  yk.init(e, t), ze.init(e, t), e.keyType = t.keyType, e.valueType = t.valueType;
});
function SC(e, t, r) {
  return new EC({
    type: "record",
    keyType: e,
    valueType: t,
    ...de(r)
  });
}
const Fa = /* @__PURE__ */ G("ZodEnum", (e, t) => {
  bk.init(e, t), ze.init(e, t), e.enum = t.entries, e.options = Object.values(t.entries);
  const r = new Set(Object.keys(t.entries));
  e.extract = (n, o) => {
    const s = {};
    for (const a of n)
      if (r.has(a))
        s[a] = t.entries[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Fa({
      ...t,
      checks: [],
      ...de(o),
      entries: s
    });
  }, e.exclude = (n, o) => {
    const s = { ...t.entries };
    for (const a of n)
      if (r.has(a))
        delete s[a];
      else
        throw new Error(`Key ${a} not found in enum`);
    return new Fa({
      ...t,
      checks: [],
      ...de(o),
      entries: s
    });
  };
});
function Ip(e, t) {
  const r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Fa({
    type: "enum",
    entries: r,
    ...de(t)
  });
}
const kC = /* @__PURE__ */ G("ZodTransform", (e, t) => {
  _k.init(e, t), ze.init(e, t), e._zod.parse = (r, n) => {
    if (n.direction === "backward")
      throw new hp(e.constructor.name);
    r.addIssue = (s) => {
      if (typeof s == "string")
        r.issues.push(sn(s, r.value, t));
      else {
        const a = s;
        a.fatal && (a.continue = !1), a.code ?? (a.code = "custom"), a.input ?? (a.input = r.value), a.inst ?? (a.inst = e), r.issues.push(sn(a));
      }
    };
    const o = t.transform(r.value, r);
    return o instanceof Promise ? o.then((s) => (r.value = s, r)) : (r.value = o, r);
  };
});
function jC(e) {
  return new kC({
    type: "transform",
    transform: e
  });
}
const Op = /* @__PURE__ */ G("ZodOptional", (e, t) => {
  wk.init(e, t), ze.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ku(e) {
  return new Op({
    type: "optional",
    innerType: e
  });
}
const CC = /* @__PURE__ */ G("ZodNullable", (e, t) => {
  xk.init(e, t), ze.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function ju(e) {
  return new CC({
    type: "nullable",
    innerType: e
  });
}
const RC = /* @__PURE__ */ G("ZodDefault", (e, t) => {
  $k.init(e, t), ze.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function PC(e, t) {
  return new RC({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : yp(t);
    }
  });
}
const AC = /* @__PURE__ */ G("ZodPrefault", (e, t) => {
  Ek.init(e, t), ze.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function NC(e, t) {
  return new AC({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : yp(t);
    }
  });
}
const Dp = /* @__PURE__ */ G("ZodNonOptional", (e, t) => {
  Sk.init(e, t), ze.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function TC(e, t) {
  return new Dp({
    type: "nonoptional",
    innerType: e,
    ...de(t)
  });
}
const IC = /* @__PURE__ */ G("ZodCatch", (e, t) => {
  kk.init(e, t), ze.init(e, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function OC(e, t) {
  return new IC({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const DC = /* @__PURE__ */ G("ZodPipe", (e, t) => {
  jk.init(e, t), ze.init(e, t), e.in = t.in, e.out = t.out;
});
function Cu(e, t) {
  return new DC({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const MC = /* @__PURE__ */ G("ZodReadonly", (e, t) => {
  Ck.init(e, t), ze.init(e, t), e.unwrap = () => e._zod.def.innerType;
});
function zC(e) {
  return new MC({
    type: "readonly",
    innerType: e
  });
}
const FC = /* @__PURE__ */ G("ZodLazy", (e, t) => {
  Rk.init(e, t), ze.init(e, t), e.unwrap = () => e._zod.def.getter();
});
function fa(e) {
  return new FC({
    type: "lazy",
    getter: e
  });
}
const VC = /* @__PURE__ */ G("ZodCustom", (e, t) => {
  Pk.init(e, t), ze.init(e, t);
});
function LC(e, t = {}) {
  return xj(VC, e, t);
}
function qC(e) {
  return $j(e);
}
const UC = Ma({
  type: Ip(["string", "number", "integer", "boolean", "object", "array"]).optional(),
  title: ut().optional(),
  description: ut().optional(),
  default: Eu().optional(),
  minimum: et().optional(),
  maximum: et().optional(),
  exclusiveMin: et().optional(),
  exclusiveMax: et().optional(),
  multipleOf: et().optional(),
  minLength: et().optional(),
  maxLength: et().optional(),
  minContains: et().optional(),
  maxContains: et().optional(),
  minProperties: et().optional(),
  maxProperties: et().optional(),
  isModifiable: Go().optional(),
  "x-modifiable": Or(ut()).optional(),
  pattern: ut().optional(),
  format: ut().optional(),
  minItems: et().optional(),
  maxItems: et().optional(),
  uniqueItems: Go().optional(),
  enum: Or(Eu()).optional(),
  $id: ut().optional(),
  $schema: ut().optional()
}), Sr = UC.extend({
  properties: fa(() => SC(ut(), Sr)).optional(),
  items: fa(() => za([Sr, Or(Sr)])).optional(),
  required: Or(ut()).optional(),
  additionalProperties: fa(() => za([Go(), Sr])).optional()
}), ZC = Ma({
  root: Sr,
  properties: Or(
    Ma({
      id: ut(),
      key: ut().min(1),
      isRequired: Go(),
      schema: Sr
    })
  )
}), BC = (e) => {
  const t = (s) => {
    const a = { ...s };
    if (Array.isArray(a.properties)) {
      const i = {}, c = [];
      a.properties.forEach((l) => {
        l.key && (i[l.key] = t(l.schema), l.isRequired && c.push(l.key));
      }), a.properties = i, c.length > 0 && (a.required = c);
    }
    return typeof a.items == "object" && a.items !== null && !Array.isArray(a.items) ? a.items = t(a.items) : Array.isArray(a.items) && (a.items = a.items.map(
      (i) => t(i)
    )), a;
  }, r = { ...t(e.root) }, n = {}, o = [];
  return e.properties.forEach((s) => {
    s.key && (n[s.key] = t(s.schema), s.isRequired && o.push(s.key));
  }), Object.keys(n).length > 0 && (r.properties = n), o.length > 0 && (r.required = o), r;
}, WC = (e) => {
  const t = (i) => {
    const c = { ...i };
    if (typeof c.properties == "object" && !Array.isArray(c.properties)) {
      const l = [];
      Object.keys(c.properties).forEach((u) => {
        const h = c.properties[u];
        l.push({
          id: tn(6),
          key: u,
          isRequired: c.required?.includes(u) || !1,
          schema: t(h)
        });
      }), c.properties = l;
    }
    return typeof c.items == "object" && c.items !== null && !Array.isArray(c.items) ? c.items = t(c.items) : Array.isArray(c.items) && (c.items = c.items.map(
      (l) => t(l)
    )), c;
  }, { properties: r, required: n, ...o } = e, a = t({ properties: r, required: n });
  return {
    root: { ...o, ...a.root },
    properties: a.properties || []
  };
}, HC = ({
  rootType: e = "object",
  defaultValue: t
}) => {
  const r = tn(6), n = ph({
    resolver: jj(ZC),
    defaultValues: t ? WC(t) : {
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
  }), o = n.watch(), s = Up(
    () => BC(o),
    [o]
  );
  return {
    methods: n,
    jsonSchema: s
  };
}, GC = ({
  textAreaRef: e,
  triggerAutoSize: t,
  maxHeight: r = Number.MAX_SAFE_INTEGER,
  minHeight: n = 0
}) => {
  const [o, s] = $.useState(!0);
  $.useEffect(() => {
    const i = e.current;
    if (i) {
      o && (i.style.minHeight = `${n + 6}px`, r > n && (i.style.maxHeight = `${r}px`), s(!1)), i.style.height = `${n + 6}px`;
      const c = i.scrollHeight;
      c > r ? i.style.height = `${r}px` : i.style.height = `${c + 6}px`;
    }
  }, [e.current, t]);
}, Mp = $.forwardRef(
  ({
    maxHeight: e = Number.MAX_SAFE_INTEGER,
    minHeight: t = 52,
    className: r,
    onChange: n,
    value: o,
    ...s
  }, a) => {
    const i = $.useRef(null), [c, l] = $.useState("");
    return GC({
      textAreaRef: i,
      triggerAutoSize: c,
      maxHeight: e,
      minHeight: t
    }), Zp(a, () => ({
      textArea: i.current,
      focus: () => i?.current?.focus(),
      maxHeight: e,
      minHeight: t
    })), $.useEffect(() => {
      l(o);
    }, [s?.defaultValue, o]), /* @__PURE__ */ d.jsx(
      "textarea",
      {
        ...s,
        value: o,
        ref: i,
        className: ge(
          "flex w-full rounded-md border border-input bg-transparent dark:bg-input/30 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          r
        ),
        onChange: (u) => {
          l(u.target.value), n?.(u);
        }
      }
    );
  }
);
Mp.displayName = "AutosizeTextarea";
const JC = ({
  rootType: e = "object",
  readOnly: t = !1,
  theme: r = "light",
  styles: n,
  onChange: o,
  defaultValue: s
}) => {
  const { methods: a, jsonSchema: i } = HC({ rootType: e, defaultValue: s }), { setError: c, clearErrors: l, watch: u } = a, h = u("properties"), [p, v] = kr(null);
  _r(() => {
    o && o(i);
  }, [i, o]), _r(() => {
    const I = Km(i);
    JSON.stringify(I) !== JSON.stringify(p) && v(I);
  }, [i, p]), _r(() => {
    l(), p && p.forEach((I) => {
      const q = I.instancePath.split("/").filter(Boolean);
      if (q[0] === "properties" && q.length >= 3) {
        const D = h?.findIndex((F) => F.key === q[1]) ?? -1;
        D !== -1 && c(
          `properties.${D}.schema.${q[2]}`,
          {
            type: "ajv",
            message: I.message
          }
        );
      } else q.length > 0 && c(`root.${q[0]}`, {
        type: "ajv",
        message: I.message
      });
    });
  }, [p, h, c, l]), _r(() => {
    if (!s) {
      const I = tn(6), q = {
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
      a.reset(q);
    }
  }, [e, a, s]);
  const { fields: w, append: y, remove: m } = Zu({
    control: a.control,
    name: "properties",
    keyName: "fieldId"
  }), _ = () => {
    const I = tn(6);
    y({
      id: I,
      key: `field_${I}`,
      isRequired: !1,
      schema: { type: "string" }
    });
  }, [f, b] = kr({ isOpen: !1, fieldPath: null }), x = (I) => {
    b({ isOpen: !0, fieldPath: I });
  }, g = {
    ...En,
    ...n,
    output: { ...En.output, ...n?.output },
    form: { ...En.form, ...n?.form },
    settings: { ...En.settings, ...n?.settings }
  }, E = Bp(null), [S, C] = kr("overflow-hidden");
  return _r(() => {
    const I = E.current?.textArea;
    I && (I.scrollHeight > I.clientHeight ? C("overflow-y-auto") : C("overflow-hidden"));
  }, [i]), /* @__PURE__ */ d.jsxs(Xp, { ...a, children: [
    /* @__PURE__ */ d.jsx(
      "div",
      {
        className: ge(
          "bg-background text-foreground flex flex-col",
          r,
          Ec[g.spacing]
        ),
        children: /* @__PURE__ */ d.jsxs(
          "div",
          {
            className: ge(
              "bg-background text-foreground flex",
              r,
              O_[g.output.position],
              Ec[g.spacing]
            ),
            children: [
              /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: ge(
                    "p-4 pr-2 flex flex-col gap-2 border border-input rounded-lg overflow-y-auto",
                    Ks[g.form.width],
                    $c[g.form.height]
                  ),
                  children: [
                    /* @__PURE__ */ d.jsx(
                      N_,
                      {
                        theme: r,
                        readOnly: t,
                        rootType: e,
                        onAddField: _,
                        onOpenSettings: x
                      }
                    ),
                    e === "object" && /* @__PURE__ */ d.jsx(
                      D0,
                      {
                        theme: r,
                        readOnly: t,
                        fields: w,
                        onRemove: m,
                        onOpenSettings: x
                      }
                    ),
                    e === "array" && /* @__PURE__ */ d.jsx("div", { className: "ml-2 pl-2 border-l-2 border-input", children: /* @__PURE__ */ d.jsx(
                      qo,
                      {
                        theme: r,
                        readOnly: t,
                        fieldPath: "root.items",
                        onRemove: () => {
                        },
                        onOpenSettings: x,
                        isSimpleType: !1,
                        isRootLevel: !1
                      }
                    ) })
                  ]
                }
              ),
              p ? /* @__PURE__ */ d.jsxs(
                "div",
                {
                  className: ge(
                    "p-6 bg-background text-foreground border border-input rounded-lg overflow-y-auto overflow-x-auto",
                    Ks[g.output.width],
                    $c[g.output.height]
                  ),
                  children: [
                    /* @__PURE__ */ d.jsx("p", { className: "text-lg", children: "JSON Schema Errors" }),
                    /* @__PURE__ */ d.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: `The generated JSON Schema has ${p?.length}
                    ${p?.length > 1 ? "errors." : "error."}` }),
                    /* @__PURE__ */ d.jsx("ul", { className: "mt-4 flex flex-col gap-2", children: p?.map((I, q) => /* @__PURE__ */ d.jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ d.jsxs(Nm, { variant: "destructive", className: "font-mono", children: [
                        "root",
                        I.instancePath
                      ] }),
                      /* @__PURE__ */ d.jsx("span", { children: I.message })
                    ] }, q)) })
                  ]
                }
              ) : g.output.showJson && /* @__PURE__ */ d.jsx(
                Mp,
                {
                  ref: E,
                  readOnly: !0,
                  maxHeight: T_[g.output.height],
                  value: JSON.stringify(i, null, 2),
                  className: ge(
                    "font-mono",
                    Ks[g.output.width],
                    S
                  )
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ d.jsx(
      wE,
      {
        theme: r,
        readOnly: t,
        isOpen: f.isOpen,
        fieldPath: f.fieldPath,
        className: I_[g.settings.width],
        onClose: () => b({ isOpen: !1, fieldPath: null })
      }
    )
  ] });
};
export {
  JC as JsonSchemaEditor
};
