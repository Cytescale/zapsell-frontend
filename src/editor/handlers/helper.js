!(function (t, e) {
   'object' == typeof exports && 'object' == typeof module
      ? (module.exports = e(require('draft-js'), require('immutable')))
      : 'function' == typeof define && define.amd
      ? define(['draft-js', 'immutable'], e)
      : 'object' == typeof exports
      ? (exports.draftjsUtils = e(require('draft-js'), require('immutable')))
      : (t.draftjsUtils = e(t['draft-js'], t.immutable))
})(window, function (n, r) {
   return (
      (u = {}),
      (o.m = i =
         [
            function (t, e) {
               t.exports = n
            },
            function (t, e) {
               t.exports = r
            },
            function (t, e, n) {
               t.exports = n(3)
            },
            function (t, e, n) {
               'use strict'
               n.r(e)
               var C = n(0),
                  i = n(1)
               function m(t) {
                  var e = t.getSelection(),
                     n = t.getCurrentContent(),
                     r = e.getStartKey(),
                     o = e.getEndKey(),
                     i = n.getBlockMap()
                  return i
                     .toSeq()
                     .skipUntil(function (t, e) {
                        return e === r
                     })
                     .takeUntil(function (t, e) {
                        return e === o
                     })
                     .concat([[o, i.get(o)]])
               }
               function a(t) {
                  return m(t).toList()
               }
               function f(t) {
                  if (t) return a(t).get(0)
               }
               function r(t) {
                  if (t) {
                     var n = f(t),
                        e = t
                           .getCurrentContent()
                           .getBlockMap()
                           .toSeq()
                           .toList(),
                        r = 0
                     if (
                        (e.forEach(function (t, e) {
                           t.get('key') === n.get('key') && (r = e - 1)
                        }),
                        -1 < r)
                     )
                        return e.get(r)
                  }
               }
               function o(t) {
                  return t
                     ? t.getCurrentContent().getBlockMap().toList()
                     : new i.List()
               }
               function u(t) {
                  var e = a(t)
                  if (
                     !e.some(function (t) {
                        return t.type !== e.get(0).type
                     })
                  )
                     return e.get(0).type
               }
               function c(t) {
                  var e = C.RichUtils.tryToRemoveBlockStyle(t)
                  return e ? C.EditorState.push(t, e, 'change-block-type') : t
               }
               function l(t) {
                  var e = '',
                     n = t.getSelection(),
                     r = n.getAnchorOffset(),
                     o = n.getFocusOffset(),
                     i = a(t)
                  if (0 < i.size) {
                     if (n.getIsBackward()) {
                        var u = r
                        ;(r = o), (o = u)
                     }
                     for (var c = 0; c < i.size; c += 1) {
                        var f = 0 === c ? r : 0,
                           l = c === i.size - 1 ? o : i.get(c).getText().length
                        e += i.get(c).getText().slice(f, l)
                     }
                  }
                  return e
               }
               function s(t) {
                  var e = t.getCurrentContent(),
                     n = t.getSelection(),
                     r = C.Modifier.removeRange(e, n, 'forward'),
                     o = r.getSelectionAfter(),
                     i = r.getBlockForKey(o.getStartKey())
                  return (
                     (r = C.Modifier.insertText(
                        r,
                        o,
                        '\n',
                        i.getInlineStyleAt(o.getStartOffset()),
                        null,
                     )),
                     C.EditorState.push(t, r, 'insert-fragment')
                  )
               }
               function g(t) {
                  var e = C.Modifier.splitBlock(
                     t.getCurrentContent(),
                     t.getSelection(),
                  )
                  return c(C.EditorState.push(t, e, 'split-block'))
               }
               function d(t) {
                  var e = t.getCurrentContent().getBlockMap().toList(),
                     n = t.getSelection().merge({
                        anchorKey: e.first().get('key'),
                        anchorOffset: 0,
                        focusKey: e.last().get('key'),
                        focusOffset: e.last().getLength(),
                     }),
                     r = C.Modifier.removeRange(
                        t.getCurrentContent(),
                        n,
                        'forward',
                     )
                  return C.EditorState.push(t, r, 'remove-range')
               }
               function S(t, e) {
                  var n = C.Modifier.setBlockData(
                     t.getCurrentContent(),
                     t.getSelection(),
                     e,
                  )
                  return C.EditorState.push(t, n, 'change-block-data')
               }
               function p(t) {
                  var r = new i.Map({}),
                     e = a(t)
                  if (e && 0 < e.size)
                     for (
                        var n = function (t) {
                              var n = e.get(t).getData()
                              if (!n || 0 === n.size)
                                 return (r = r.clear()), 'break'
                              if (0 === t) r = n
                              else if (
                                 (r.forEach(function (t, e) {
                                    ;(n.get(e) && n.get(e) === t) ||
                                       (r = r.delete(e))
                                 }),
                                 0 === r.size)
                              )
                                 return (r = r.clear()), 'break'
                           },
                           o = 0;
                        o < e.size;
                        o += 1
                     ) {
                        if ('break' === n(o)) break
                     }
                  return r
               }
               var y = Object(i.Map)({ code: { element: 'pre' } }),
                  v = C.DefaultDraftBlockRenderMap.merge(y)
               function b(t) {
                  if (t) {
                     var e = t.getType()
                     return (
                        'unordered-list-item' === e || 'ordered-list-item' === e
                     )
                  }
                  return !1
               }
               function h(t, e, n) {
                  var r,
                     o = t.getSelection()
                  r = o.getIsBackward() ? o.getFocusKey() : o.getAnchorKey()
                  var i = t.getCurrentContent(),
                     u = i.getBlockForKey(r),
                     c = u.getType()
                  if ('unordered-list-item' !== c && 'ordered-list-item' !== c)
                     return t
                  var f = i.getBlockBefore(r)
                  if (!f) return t
                  if (f.getType() !== c) return t
                  var l = u.getDepth()
                  if (1 === e && l === n) return t
                  var a,
                     s,
                     g,
                     d,
                     S,
                     p,
                     y,
                     v = Math.min(f.getDepth() + 1, n),
                     b =
                        ((s = e),
                        (g = v),
                        (d = (a = t).getSelection()),
                        (S = a.getCurrentContent()),
                        (p = S.getBlockMap()),
                        (y = m(a).map(function (t) {
                           var e = t.getDepth() + s
                           return (
                              (e = Math.max(0, Math.min(e, g))),
                              t.set('depth', e)
                           )
                        })),
                        (p = p.merge(y)),
                        S.merge({
                           blockMap: p,
                           selectionBefore: d,
                           selectionAfter: d,
                        }))
                  return C.EditorState.push(t, b, 'adjust-depth')
               }
               function O(t, e) {
                  var n
                  return 13 === (n = e).which &&
                     (n.getModifierState('Shift') ||
                        n.getModifierState('Alt') ||
                        n.getModifierState('Control'))
                     ? t.getSelection().isCollapsed()
                        ? C.RichUtils.insertSoftNewline(t)
                        : s(t)
                     : (function (t) {
                          var e = t.getSelection()
                          if (e.isCollapsed()) {
                             var n = t.getCurrentContent(),
                                r = e.getStartKey(),
                                o = n.getBlockForKey(r)
                             if (
                                !b(o) &&
                                'unstyled' !== o.getType() &&
                                o.getLength() === e.getStartOffset()
                             )
                                return g(t)
                             if (b(o) && 0 === o.getLength()) {
                                var i = o.getDepth()
                                if (0 === i) return c(t)
                                if (0 < i) return h(t, -1, i)
                             }
                          }
                       })(t)
               }
               function k(e, t) {
                  var n = Object.keys(e)
                  if (Object.getOwnPropertySymbols) {
                     var r = Object.getOwnPropertySymbols(e)
                     t &&
                        (r = r.filter(function (t) {
                           return Object.getOwnPropertyDescriptor(
                              e,
                              t,
                           ).enumerable
                        })),
                        n.push.apply(n, r)
                  }
                  return n
               }
               function E(t, e, n) {
                  return (
                     e in t
                        ? Object.defineProperty(t, e, {
                             value: n,
                             enumerable: !0,
                             configurable: !0,
                             writable: !0,
                          })
                        : (t[e] = n),
                     t
                  )
               }
               function I(t) {
                  return (I =
                     'function' == typeof Symbol &&
                     'symbol' == typeof Symbol.iterator
                        ? function (t) {
                             return typeof t
                          }
                        : function (t) {
                             return t &&
                                'function' == typeof Symbol &&
                                t.constructor === Symbol &&
                                t !== Symbol.prototype
                                ? 'symbol'
                                : typeof t
                          })(t)
               }
               function R(t) {
                  var e = t.getSelection()
                  if (e.isCollapsed()) {
                     var n = {},
                        r = t.getCurrentInlineStyle().toList().toJS()
                     if (r)
                        return (
                           [
                              'BOLD',
                              'ITALIC',
                              'UNDERLINE',
                              'STRIKETHROUGH',
                              'CODE',
                              'SUPERSCRIPT',
                              'SUBSCRIPT',
                           ].forEach(function (t) {
                              n[t] = 0 <= r.indexOf(t)
                           }),
                           n
                        )
                  }
                  var u = e.getStartOffset(),
                     c = e.getEndOffset(),
                     f = a(t)
                  if (0 < f.size) {
                     var o = (function () {
                        for (
                           var n = {
                                 BOLD: !0,
                                 ITALIC: !0,
                                 UNDERLINE: !0,
                                 STRIKETHROUGH: !0,
                                 CODE: !0,
                                 SUPERSCRIPT: !0,
                                 SUBSCRIPT: !0,
                              },
                              r = 0;
                           r < f.size;
                           r += 1
                        ) {
                           var t = 0 === r ? u : 0,
                              e =
                                 r === f.size - 1
                                    ? c
                                    : f.get(r).getText().length
                           t === e && 0 === t
                              ? ((t = 1), (e = 2))
                              : t === e && --t
                           for (
                              var o = function (t) {
                                    var e = f.get(r).getInlineStyleAt(t)
                                    ;[
                                       'BOLD',
                                       'ITALIC',
                                       'UNDERLINE',
                                       'STRIKETHROUGH',
                                       'CODE',
                                       'SUPERSCRIPT',
                                       'SUBSCRIPT',
                                    ].forEach(function (t) {
                                       n[t] = n[t] && e.get(t) === t
                                    })
                                 },
                                 i = t;
                              i < e;
                              i += 1
                           )
                              o(i)
                        }
                        return { v: n }
                     })()
                     if ('object' === I(o)) return o.v
                  }
                  return {}
               }
               function B(t) {
                  var e,
                     n = t.getSelection(),
                     r = n.getStartOffset(),
                     o = n.getEndOffset()
                  r === o && 0 === r ? (o = 1) : r === o && --r
                  for (var i = f(t), u = r; u < o; u += 1) {
                     var c = i.getEntityAt(u)
                     if (!c) {
                        e = void 0
                        break
                     }
                     if (u === r) e = c
                     else if (e !== c) {
                        e = void 0
                        break
                     }
                  }
                  return e
               }
               function T(t, e) {
                  var n,
                     r = f(t)
                  return (
                     r.findEntityRanges(
                        function (t) {
                           return t.get('entity') === e
                        },
                        function (t, e) {
                           n = {
                              start: t,
                              end: e,
                              text: r.get('text').slice(t, e),
                           }
                        },
                     ),
                     n
                  )
               }
               function P(t, e, n) {
                  x[t][''.concat(t.toLowerCase(), '-').concat(n)] = E(
                     {},
                     ''.concat(e),
                     n,
                  )
               }
               function j() {
                  return (function (e) {
                     for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}
                        t % 2
                           ? k(Object(n), !0).forEach(function (t) {
                                E(e, t, n[t])
                             })
                           : Object.getOwnPropertyDescriptors
                           ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n),
                             )
                           : k(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                   e,
                                   t,
                                   Object.getOwnPropertyDescriptor(n, t),
                                )
                             })
                     }
                     return e
                  })(
                     {},
                     x.color,
                     {},
                     x.bgcolor,
                     {},
                     x.fontSize,
                     {},
                     x.fontFamily,
                     {
                        CODE: x.CODE,
                        SUPERSCRIPT: x.SUPERSCRIPT,
                        SUBSCRIPT: x.SUBSCRIPT,
                     },
                  )
               }
               var x = {
                  color: {},
                  bgcolor: {},
                  fontSize: {},
                  fontFamily: {},
                  CODE: {
                     fontFamily: 'monospace',
                     wordWrap: 'break-word',
                     background: '#f1f1f1',
                     borderRadius: 3,
                     padding: '1px 3px',
                  },
                  SUPERSCRIPT: {
                     fontSize: 11,
                     position: 'relative',
                     top: -8,
                     display: 'inline-flex',
                  },
                  SUBSCRIPT: {
                     fontSize: 11,
                     position: 'relative',
                     bottom: -8,
                     display: 'inline-flex',
                  },
               }
               function M(t, e, n) {
                  var r = t.getSelection(),
                     o = Object.keys(x[e]).reduce(function (t, e) {
                        return C.Modifier.removeInlineStyle(t, r, e)
                     }, t.getCurrentContent()),
                     i = C.EditorState.push(t, o, 'changeinline-style'),
                     u = t.getCurrentInlineStyle()
                  if (
                     (r.isCollapsed() &&
                        (i = u.reduce(function (t, e) {
                           return C.RichUtils.toggleInlineStyle(t, e)
                        }, i)),
                     'SUPERSCRIPT' === e || 'SUBSCRIPT' == e)
                  )
                     u.has(n) || (i = C.RichUtils.toggleInlineStyle(i, n))
                  else {
                     var c = 'bgcolor' === e ? 'backgroundColor' : e
                     u.has(''.concat(c, '-').concat(n)) ||
                        ((i = C.RichUtils.toggleInlineStyle(
                           i,
                           ''.concat(e.toLowerCase(), '-').concat(n),
                        )),
                        P(e, c, n))
                  }
                  return i
               }
               function L(t) {
                  t &&
                     t
                        .getCurrentContent()
                        .getBlockMap()
                        .map(function (t) {
                           return t.get('characterList')
                        })
                        .toList()
                        .flatten()
                        .forEach(function (t) {
                           t && 0 === t.indexOf('color-')
                              ? P('color', 'color', t.substr(6))
                              : t && 0 === t.indexOf('bgcolor-')
                              ? P('bgcolor', 'backgroundColor', t.substr(8))
                              : t && 0 === t.indexOf('fontsize-')
                              ? P('fontSize', 'fontSize', +t.substr(9))
                              : t &&
                                0 === t.indexOf('fontfamily-') &&
                                P('fontFamily', 'fontFamily', t.substr(11))
                        })
               }
               function U(t, e, n) {
                  var r = t
                     .getInlineStyleAt(n)
                     .toList()
                     .filter(function (t) {
                        return t.startsWith(e.toLowerCase())
                     })
                  if (r && 0 < r.size) return r.get(0)
               }
               function w(r, l) {
                  if (r && l && 0 < l.length) {
                     var t = (function () {
                        var t = r.getSelection(),
                           i = {}
                        if (t.isCollapsed())
                           return (
                              l.forEach(function (t) {
                                 i[t] = (function (t, e) {
                                    var n = t
                                       .getCurrentInlineStyle()
                                       .toList()
                                       .filter(function (t) {
                                          return t.startsWith(e.toLowerCase())
                                       })
                                    if (n && 0 < n.size) return n.get(0)
                                 })(r, t)
                              }),
                              { v: i }
                           )
                        var u = t.getStartOffset(),
                           c = t.getEndOffset(),
                           f = a(r)
                        if (0 < f.size) {
                           for (
                              var e = function (n) {
                                    var t = 0 === n ? u : 0,
                                       e =
                                          n === f.size - 1
                                             ? c
                                             : f.get(n).getText().length
                                    t === e && 0 === t
                                       ? ((t = 1), (e = 2))
                                       : t === e && --t
                                    for (
                                       var r = function (e) {
                                             e === t
                                                ? l.forEach(function (t) {
                                                     i[t] = U(f.get(n), t, e)
                                                  })
                                                : l.forEach(function (t) {
                                                     i[t] &&
                                                        i[t] !==
                                                           U(f.get(n), t, e) &&
                                                        (i[t] = void 0)
                                                  })
                                          },
                                          o = t;
                                       o < e;
                                       o += 1
                                    )
                                       r(o)
                                 },
                                 n = 0;
                              n < f.size;
                              n += 1
                           )
                              e(n)
                           return { v: i }
                        }
                     })()
                     if ('object' === I(t)) return t.v
                  }
                  return {}
               }
               function D(e) {
                  var t = e.getCurrentInlineStyle(),
                     n = e.getCurrentContent()
                  return (
                     t.forEach(function (t) {
                        n = C.Modifier.removeInlineStyle(n, e.getSelection(), t)
                     }),
                     C.EditorState.push(e, n, 'change-inline-style')
                  )
               }
               n.d(e, 'isListBlock', function () {
                  return b
               }),
                  n.d(e, 'changeDepth', function () {
                     return h
                  }),
                  n.d(e, 'handleNewLine', function () {
                     return O
                  }),
                  n.d(e, 'getEntityRange', function () {
                     return T
                  }),
                  n.d(e, 'getCustomStyleMap', function () {
                     return j
                  }),
                  n.d(e, 'toggleCustomInlineStyle', function () {
                     return M
                  }),
                  n.d(e, 'getSelectionEntity', function () {
                     return B
                  }),
                  n.d(e, 'extractInlineStyle', function () {
                     return L
                  }),
                  n.d(e, 'removeAllInlineStyles', function () {
                     return D
                  }),
                  n.d(e, 'getSelectionInlineStyle', function () {
                     return R
                  }),
                  n.d(e, 'getSelectionCustomInlineStyle', function () {
                     return w
                  }),
                  n.d(e, 'getSelectedBlocksMap', function () {
                     return m
                  }),
                  n.d(e, 'getSelectedBlocksList', function () {
                     return a
                  }),
                  n.d(e, 'getSelectedBlock', function () {
                     return f
                  }),
                  n.d(e, 'getBlockBeforeSelectedBlock', function () {
                     return r
                  }),
                  n.d(e, 'getAllBlocks', function () {
                     return o
                  }),
                  n.d(e, 'getSelectedBlocksType', function () {
                     return u
                  }),
                  n.d(e, 'removeSelectedBlocksStyle', function () {
                     return c
                  }),
                  n.d(e, 'getSelectionText', function () {
                     return l
                  }),
                  n.d(e, 'addLineBreakRemovingSelection', function () {
                     return s
                  }),
                  n.d(e, 'insertNewUnstyledBlock', function () {
                     return g
                  }),
                  n.d(e, 'clearEditorContent', function () {
                     return d
                  }),
                  n.d(e, 'setBlockData', function () {
                     return S
                  }),
                  n.d(e, 'getSelectedBlocksMetadata', function () {
                     return p
                  }),
                  n.d(e, 'blockRenderMap', function () {
                     return v
                  })
            },
         ]),
      (o.c = u),
      (o.d = function (t, e, n) {
         o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
      }),
      (o.r = function (t) {
         'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (o.t = function (e, t) {
         if ((1 & t && (e = o(e)), 8 & t)) return e
         if (4 & t && 'object' == typeof e && e && e.__esModule) return e
         var n = Object.create(null)
         if (
            (o.r(n),
            Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
            2 & t && 'string' != typeof e)
         )
            for (var r in e)
               o.d(
                  n,
                  r,
                  function (t) {
                     return e[t]
                  }.bind(null, r),
               )
         return n
      }),
      (o.n = function (t) {
         var e =
            t && t.__esModule
               ? function () {
                    return t.default
                 }
               : function () {
                    return t
                 }
         return o.d(e, 'a', e), e
      }),
      (o.o = function (t, e) {
         return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (o.p = ''),
      o((o.s = 2))
   )
   function o(t) {
      if (u[t]) return u[t].exports
      var e = (u[t] = { i: t, l: !1, exports: {} })
      return i[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports
   }
   var i, u
})