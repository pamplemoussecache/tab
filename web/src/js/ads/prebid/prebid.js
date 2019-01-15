/* eslint-disable */
/* prebid.js v1.30.0
Updated : 2019-01-15 */
!(function(u) {
  var s = window.pbjsChunk
  window.pbjsChunk = function(e, t, n) {
    for (var r, i, o, a = 0, d = []; a < e.length; a++)
      (i = e[a]), c[i] && d.push(c[i][0]), (c[i] = 0)
    for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r])
    for (s && s(e, t, n); d.length; ) d.shift()()
    if (n) for (a = 0; a < n.length; a++) o = f((f.s = n[a]))
    return o
  }
  var n = {},
    c = { 182: 0 }
  function f(e) {
    if (n[e]) return n[e].exports
    var t = (n[e] = { i: e, l: !1, exports: {} })
    return u[e].call(t.exports, t, t.exports, f), (t.l = !0), t.exports
  }
  ;(f.m = u),
    (f.c = n),
    (f.d = function(e, t, n) {
      f.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        })
    }),
    (f.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return f.d(t, 'a', t), t
    }),
    (f.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (f.p = ''),
    (f.oe = function(e) {
      throw (console.error(e), e)
    }),
    f((f.s = 608))
})({
  0: function(e, a, t) {
    'use strict'
    Object.defineProperty(a, '__esModule', { value: !0 }),
      (a.getLatestHighestCpmBid = a.getOldestHighestCpmBid = a.getHighestCpm = void 0)
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      d =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }
    ;(a.getAdUnitSizes = function(e) {
      if (!e) return
      var t = []
      if (
        e.mediaTypes &&
        e.mediaTypes.banner &&
        Array.isArray(e.mediaTypes.banner.sizes)
      ) {
        var n = e.mediaTypes.banner.sizes
        Array.isArray(n[0]) ? (t = n) : t.push(n)
      } else
        Array.isArray(e.sizes) &&
          (Array.isArray(e.sizes[0]) ? (t = e.sizes) : t.push(e.sizes))
      return t
    }),
      (a.parseSizesInput = function(e) {
        var t = []
        if ('string' == typeof e) {
          var n = e.split(','),
            r = /^(\d)+x(\d)+$/i
          if (n) for (var i in n) _(n, i) && n[i].match(r) && t.push(n[i])
        } else if ('object' === (void 0 === e ? 'undefined' : d(e))) {
          var o = e.length
          if (0 < o)
            if (2 === o && 'number' == typeof e[0] && 'number' == typeof e[1])
              t.push(S(e))
            else for (var a = 0; a < o; a++) t.push(S(e[a]))
        }
        return t
      }),
      (a.parseGPTSingleSizeArray = S),
      (a.uniques = C),
      (a.flatten = w),
      (a.getBidRequest = function(n, e) {
        var r = void 0
        return (
          e.some(function(e) {
            var t = (0, o.default)(e.bids, function(t) {
              return ['bidId', 'adId', 'bid_id'].some(function(e) {
                return t[e] === n
              })
            })
            return t && (r = t), t
          }),
          r
        )
      }),
      (a.getKeys = O),
      (a.getValue = R),
      (a.getBidderCodes = function() {
        return (0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : pbjs.adUnits
        )
          .map(function(e) {
            return e.bids
              .map(function(e) {
                return e.bidder
              })
              .reduce(w, [])
          })
          .reduce(w)
          .filter(C)
      }),
      (a.isGptPubadsDefined = function() {
        if (
          window.googletag &&
          a.isFn(window.googletag.pubads) &&
          a.isFn(window.googletag.pubads().getSlots)
        )
          return !0
      }),
      (a.shuffle = function(e) {
        var t = e.length
        for (; 0 < t; ) {
          var n = Math.floor(Math.random() * t),
            r = e[--t]
          ;(e[t] = e[n]), (e[n] = r)
        }
        return e
      }),
      (a.adUnitsFilter = function(e, t) {
        return (0, u.default)(e, t && t.adUnitCode)
      }),
      (a.isSrcdocSupported = function(e) {
        return (
          e.defaultView &&
          e.defaultView.frameElement &&
          'srcdoc' in e.defaultView.frameElement &&
          !/firefox/i.test(navigator.userAgent)
        )
      }),
      (a.deepClone = function(e) {
        return (0, i.default)(e)
      }),
      (a.inIframe = function() {
        try {
          return a.getWindowSelf() !== a.getWindowTop()
        } catch (e) {
          return !0
        }
      }),
      (a.isSafariBrowser = function() {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      }),
      (a.replaceAuctionPrice = function(e, t) {
        if (!e) return
        return e.replace(/\$\{AUCTION_PRICE\}/g, t)
      }),
      (a.timestamp = function() {
        return new Date().getTime()
      }),
      (a.checkCookieSupport = function() {
        if (window.navigator.cookieEnabled || document.cookie.length) return !0
      }),
      (a.cookiesAreEnabled = function() {
        if (a.checkCookieSupport()) return !0
        return (
          (window.document.cookie = 'prebid.cookieTest'),
          -1 != window.document.cookie.indexOf('prebid.cookieTest')
        )
      }),
      (a.delayExecution = function(e, t) {
        if (t < 1)
          throw new Error(
            'numRequiredCalls must be a positive number. Got ' + t
          )
        var n = 0
        return function() {
          ++n === t && e.apply(null, arguments)
        }
      }),
      (a.groupBy = function(e, n) {
        return e.reduce(function(e, t) {
          return (e[t[n]] = e[t[n]] || []).push(t), e
        }, {})
      }),
      (a.deepAccess = function(e, t) {
        if (!e) return
        t = String(t).split('.')
        for (var n = 0; n < t.length; n++) if (void 0 === (e = e[t[n]])) return
        return e
      }),
      (a.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
        return e
          ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;</script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' +
              e +
              '"></script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'
          : ''
      }),
      (a.getDefinedParams = function(n, e) {
        return e
          .filter(function(e) {
            return n[e]
          })
          .reduce(function(e, t) {
            return r(
              e,
              (function(e, t, n) {
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n)
                return e
              })({}, t, n[t])
            )
          }, {})
      }),
      (a.isValidMediaTypes = function(e) {
        var t = ['banner', 'native', 'video']
        if (
          !Object.keys(e).every(function(e) {
            return (0, u.default)(t, e)
          })
        )
          return !1
        if (e.video && e.video.context)
          return (0, u.default)(['instream', 'outstream'], e.video.context)
        return !0
      }),
      (a.getBidderRequest = function(e, t, n) {
        return (
          (0, o.default)(e, function(e) {
            return (
              0 <
              e.bids.filter(function(e) {
                return e.bidder === t && e.adUnitCode === n
              }).length
            )
          }) || { start: null, auctionId: null }
        )
      }),
      (a.getUserConfiguredParams = function(e, t, n) {
        return e
          .filter(function(e) {
            return e.code === t
          })
          .map(function(e) {
            return e.bids
          })
          .reduce(w, [])
          .filter(function(e) {
            return e.bidder === n
          })
          .map(function(e) {
            return e.params || {}
          })
      }),
      (a.getOrigin = function() {
        return window.location.origin
          ? window.location.origin
          : window.location.protocol +
              '//' +
              window.location.hostname +
              (window.location.port ? ':' + window.location.port : '')
      }),
      (a.getDNT = function() {
        return (
          '1' === navigator.doNotTrack ||
          '1' === window.doNotTrack ||
          '1' === navigator.msDoNotTrack ||
          'yes' === navigator.doNotTrack
        )
      }),
      (a.isAdUnitCodeMatchingSlot = function(t) {
        return function(e) {
          return N(t, e)
        }
      }),
      (a.isSlotMatchingAdUnitCode = function(t) {
        return function(e) {
          return N(e, t)
        }
      }),
      (a.unsupportedBidderMessage = function(e, t) {
        var n = Object.keys(e.mediaTypes || { banner: 'banner' }).join(', ')
        return (
          '\n    ' +
          e.code +
          ' is a ' +
          n +
          " ad unit\n    containing bidders that don't support " +
          n +
          ': ' +
          t +
          ".\n    This bidder won't fetch demand.\n  "
        )
      }),
      (a.deletePropertyFromObject = function(e, t) {
        var n = r({}, e)
        return delete n[t], n
      }),
      (a.removeRequestId = function(e) {
        return a.deletePropertyFromObject(e, 'requestId')
      }),
      (a.isInteger = function(e) {
        return Number.isInteger
          ? Number.isInteger(e)
          : 'number' == typeof e && isFinite(e) && Math.floor(e) === e
      }),
      (a.convertCamelToUnderscore = function(e) {
        return e
          .replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
            return '_' + t.toLowerCase()
          })
          .replace(/^_/, '')
      }),
      (a.transformBidderParamKeywords = function(e) {
        var r =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : 'keywords',
          i = []
        return (
          a._each(e, function(e, t) {
            if (a.isArray(e)) {
              var n = []
              a._each(e, function(e) {
                ;(e = a.getValueString(r + '.' + t, e)) && n.push(e)
              }),
                (e = n)
            } else {
              if (((e = a.getValueString(r + '.' + t, e)), !a.isStr(e))) return
              e = [e]
            }
            i.push({ key: t, value: e })
          }),
          i
        )
      }),
      (a.convertTypes = function(r, i) {
        return (
          Object.keys(r).forEach(function(e) {
            var t, n
            i[e] &&
              (a.isFn(r[e])
                ? (i[e] = r[e](i[e]))
                : (i[e] = ((t = r[e]),
                  (n = i[e]),
                  'string' === t
                    ? n && n.toString()
                    : 'number' === t
                    ? Number(n)
                    : n)),
              isNaN(i[e]) && delete i.key)
          }),
          i
        )
      })
    var n = t(3),
      i = s(t(67)),
      o = s(t(10)),
      u = s(t(7))
    t(11)
    function s(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var c = t(4),
      f = !1,
      l = Object.prototype.toString,
      g = Boolean(window.console),
      p = Boolean(g && window.console.log),
      v = Boolean(g && window.console.info),
      y = Boolean(g && window.console.warn),
      m = Boolean(g && window.console.error)
    a.replaceTokenInString = function(i, e, o) {
      return (
        a._each(e, function(e, t) {
          e = void 0 === e ? '' : e
          var n = o + t.toUpperCase() + o,
            r = new RegExp(n, 'g')
          i = i.replace(r, e)
        }),
        i
      )
    }
    var b,
      h = ((b = 0),
      function() {
        return ++b
      })
    function E() {
      return (
        h() +
        Math.random()
          .toString(16)
          .substr(2)
      )
    }
    function S(e) {
      if (a.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]))
        return e[0] + 'x' + e[1]
    }
    function A(e, t) {
      return (
        (e = [].slice.call(e)),
        t && e.unshift(t),
        e.unshift(
          'display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;'
        ),
        e.unshift('%cPrebid'),
        e
      )
    }
    ;(a.getUniqueIdentifierStr = E),
      (a.generateUUID = function e(t) {
        return t
          ? (
              t ^
              ((window && window.crypto && window.crypto.getRandomValues
                ? crypto.getRandomValues(new Uint8Array(1))[0] % 16
                : 16 * Math.random()) >>
                (t / 4))
            ).toString(16)
          : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
      }),
      (a.getBidIdParameter = function(e, t) {
        return t && t[e] ? t[e] : ''
      }),
      (a.tryAppendQueryString = function(e, t, n) {
        return n ? e + (t + '=') + encodeURIComponent(n) + '&' : e
      }),
      (a.parseQueryStringParameters = function(e) {
        var t = ''
        for (var n in e)
          e.hasOwnProperty(n) && (t += n + '=' + encodeURIComponent(e[n]) + '&')
        return t
      }),
      (a.transformAdServerTargetingObj = function(t) {
        return t && 0 < Object.getOwnPropertyNames(t).length
          ? O(t)
              .map(function(e) {
                return e + '=' + encodeURIComponent(R(t, e))
              })
              .join('&')
          : ''
      }),
      (a.getTopWindowLocation = function() {
        return a.getWindowLocation()
      }),
      (a.getTopFrameReferrer = function() {
        try {
          window.top.location.toString()
          for (
            var e = '', t = void 0;
            (t = t ? t.parent : window).document &&
              t.document.referrer &&
              (e = t.document.referrer),
              t !== window.top;

          );
          return e
        } catch (e) {
          return window.document.referrer
        }
      }),
      (a.getAncestorOrigins = function() {}),
      (a.getWindowTop = function() {
        return window.top
      }),
      (a.getWindowSelf = function() {
        return window.self
      }),
      (a.getWindowLocation = function() {
        return window.location
      }),
      (a.getTopWindowUrl = function() {
        var t = void 0
        try {
          t = a.getTopWindowLocation().href
        } catch (e) {
          t = ''
        }
        return t
      }),
      (a.getTopWindowReferrer = function() {
        try {
          return window.top.document.referrer
        } catch (e) {
          return document.referrer
        }
      }),
      (a.logMessage = function() {
        T() && p && console.log.apply(console, A(arguments, 'MESSAGE:'))
      }),
      (a.logInfo = function() {
        T() && v && console.info.apply(console, A(arguments, 'INFO:'))
      }),
      (a.logWarn = function() {
        T() && y && console.warn.apply(console, A(arguments, 'WARNING:'))
      }),
      (a.logError = function() {
        T() && m && console.error.apply(console, A(arguments, 'ERROR:'))
      }),
      (a.hasConsoleLogger = function() {
        return p
      })
    var T = function() {
      if (!1 === n.config.getConfig('debug') && !1 === f) {
        var e = 'TRUE' === I(c.DEBUG_MODE).toUpperCase()
        n.config.setConfig({ debug: e }), (f = !0)
      }
      return !!n.config.getConfig('debug')
    }
    ;(a.debugTurnedOn = T),
      (a.createInvisibleIframe = function() {
        var e = document.createElement('iframe')
        return (
          (e.id = E()),
          (e.height = 0),
          (e.width = 0),
          (e.border = '0px'),
          (e.hspace = '0'),
          (e.vspace = '0'),
          (e.marginWidth = '0'),
          (e.marginHeight = '0'),
          (e.style.border = '0'),
          (e.scrolling = 'no'),
          (e.frameBorder = '0'),
          (e.src = 'about:blank'),
          (e.style.display = 'none'),
          e
        )
      })
    var I = function(e) {
      var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(
        window.location.search
      )
      return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '))
    }
    ;(a.getParameterByName = I),
      (a.hasValidBidRequest = function(e, n, t) {
        var r = !1
        function i(e, t) {
          t === n[o] && (r = !0)
        }
        for (var o = 0; o < n.length; o++)
          if (((r = !1), a._each(e, i), !r))
            return (
              a.logError(
                'Params are missing for bid request. One of these required paramaters are missing: ' +
                  n,
                t
              ),
              !1
            )
        return !0
      }),
      (a.addEventHandler = function(e, t, n) {
        e.addEventListener
          ? e.addEventListener(t, n, !0)
          : e.attachEvent && e.attachEvent('on' + t, n)
      }),
      (a.isA = function(e, t) {
        return l.call(e) === '[object ' + t + ']'
      }),
      (a.isFn = function(e) {
        return a.isA(e, 'Function')
      }),
      (a.isStr = function(e) {
        return a.isA(e, 'String')
      }),
      (a.isArray = function(e) {
        return a.isA(e, 'Array')
      }),
      (a.isNumber = function(e) {
        return a.isA(e, 'Number')
      }),
      (a.isPlainObject = function(e) {
        return a.isA(e, 'Object')
      }),
      (a.isBoolean = function(e) {
        return a.isA(e, 'Boolean')
      }),
      (a.isEmpty = function(e) {
        if (!e) return !0
        if (a.isArray(e) || a.isStr(e)) return !(0 < e.length)
        for (var t in e) if (hasOwnProperty.call(e, t)) return !1
        return !0
      }),
      (a.isEmptyStr = function(e) {
        return a.isStr(e) && (!e || 0 === e.length)
      }),
      (a._each = function(e, t) {
        if (!a.isEmpty(e)) {
          if (a.isFn(e.forEach)) return e.forEach(t, this)
          var n = 0,
            r = e.length
          if (0 < r) for (; n < r; n++) t(e[n], n, e)
          else for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
        }
      }),
      (a.contains = function(e, t) {
        if (a.isEmpty(e)) return !1
        if (a.isFn(e.indexOf)) return -1 !== e.indexOf(t)
        for (var n = e.length; n--; ) if (e[n] === t) return !0
        return !1
      }),
      (a.indexOf = (function() {
        if (Array.prototype.indexOf) return Array.prototype.indexOf
      })()),
      (a._map = function(n, r) {
        if (a.isEmpty(n)) return []
        if (a.isFn(n.map)) return n.map(r)
        var i = []
        return (
          a._each(n, function(e, t) {
            i.push(r(e, t, n))
          }),
          i
        )
      })
    var _ = function(e, t) {
      return e.hasOwnProperty
        ? e.hasOwnProperty(t)
        : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
    }
    function C(e, t, n) {
      return n.indexOf(e) === t
    }
    function w(e, t) {
      return e.concat(t)
    }
    function O(e) {
      return Object.keys(e)
    }
    function R(e, t) {
      return e[t]
    }
    ;(a.insertElement = function(e, t, n) {
      t = t || document
      var r = void 0
      r = n ? t.getElementsByTagName(n) : t.getElementsByTagName('head')
      try {
        ;(r = r.length ? r : t.getElementsByTagName('body')).length &&
          (r = r[0]).insertBefore(e, r.firstChild)
      } catch (e) {}
    }),
      (a.triggerPixel = function(e) {
        new Image().src = e
      }),
      (a.callBurl = function(e) {
        var t = e.source,
          n = e.burl
        t === c.S2S.SRC && n && a.triggerPixel(n)
      }),
      (a.insertHtmlIntoIframe = function(e) {
        if (e) {
          var t = document.createElement('iframe')
          ;(t.id = a.getUniqueIdentifierStr()),
            (t.width = 0),
            (t.height = 0),
            (t.hspace = '0'),
            (t.vspace = '0'),
            (t.marginWidth = '0'),
            (t.marginHeight = '0'),
            (t.style.display = 'none'),
            (t.style.height = '0px'),
            (t.style.width = '0px'),
            (t.scrolling = 'no'),
            (t.frameBorder = '0'),
            (t.allowtransparency = 'true'),
            a.insertElement(t, document, 'body'),
            t.contentWindow.document.open(),
            t.contentWindow.document.write(e),
            t.contentWindow.document.close()
        }
      }),
      (a.insertUserSyncIframe = function(e) {
        var t = a.createTrackPixelIframeHtml(
            e,
            !1,
            'allow-scripts allow-same-origin'
          ),
          n = document.createElement('div')
        n.innerHTML = t
        var r = n.firstChild
        a.insertElement(r)
      }),
      (a.createTrackPixelHtml = function(e) {
        if (!e) return ''
        var t =
          '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">'
        return (t += '<img src="' + encodeURI(e) + '"></div>')
      }),
      (a.createTrackPixelIframeHtml = function(e) {
        var t =
            !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
          n =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : ''
        return e
          ? (t && (e = encodeURI(e)),
            n && (n = 'sandbox="' + n + '"'),
            '<iframe ' +
              n +
              ' id="' +
              a.getUniqueIdentifierStr() +
              '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' +
              e +
              '">\n    </iframe>')
          : ''
      }),
      (a.getIframeDocument = function(e) {
        if (e) {
          var t = void 0
          try {
            t = e.contentWindow
              ? e.contentWindow.document
              : e.contentDocument.document
              ? e.contentDocument.document
              : e.contentDocument
          } catch (e) {
            a.logError('Cannot get iframe document', e)
          }
          return t
        }
      }),
      (a.getValueString = function(e, t, n) {
        return null == t
          ? n
          : a.isStr(t)
          ? t
          : a.isNumber(t)
          ? t.toString()
          : void a.logWarn(
              'Unsuported type for param: ' + e + ' required type: String'
            )
      })
    ;(a.getHighestCpm = B('timeToRespond', function(e, t) {
      return t < e
    })),
      (a.getOldestHighestCpmBid = B('responseTimestamp', function(e, t) {
        return t < e
      })),
      (a.getLatestHighestCpmBid = B('responseTimestamp', function(e, t) {
        return e < t
      }))
    function B(n, r) {
      return function(e, t) {
        return e.cpm === t.cpm ? (r(e[n], t[n]) ? t : e) : e.cpm < t.cpm ? t : e
      }
    }
    var N = function(e, t) {
      return e.getAdUnitPath() === t || e.getSlotElementId() === t
    }
  },
  1: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var c = function(e, t) {
        if (Array.isArray(e)) return e
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0
            try {
              for (
                var a, d = e[Symbol.iterator]();
                !(r = (a = d.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              ;(i = !0), (o = e)
            } finally {
              try {
                !r && d.return && d.return()
              } finally {
                if (i) throw o
              }
            }
            return n
          })(e, t)
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        )
      },
      p =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            },
      v =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }
    ;(t.registerBidder = function(t) {
      var n = Array.isArray(t.supportedMediaTypes)
        ? { supportedMediaTypes: t.supportedMediaTypes }
        : void 0
      function r(e) {
        var t = g(e)
        i.default.registerBidAdapter(t, e.code, n)
      }
      r(t),
        Array.isArray(t.aliases) &&
          t.aliases.forEach(function(e) {
            ;(i.default.aliasRegistry[e] = t.code), r(v({}, t, { code: e }))
          })
    }),
      (t.newBidder = g),
      (t.isValid = E)
    var r = f(n(27)),
      i = f(n(8)),
      o = n(3),
      y = f(n(16)),
      a = n(18),
      d = n(17),
      u = n(41),
      m = f(n(4)),
      b = f(n(9)),
      s = f(n(7)),
      h = n(0)
    function f(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var l = ['requestId', 'cpm', 'ttl', 'creativeId', 'netRevenue', 'currency']
    function g(f) {
      return v(new r.default(f.code), {
        getSpec: function() {
          return Object.freeze(f)
        },
        registerSyncs: l,
        callBids: function(o, a, t, n) {
          if (Array.isArray(o.bids)) {
            var d = {},
              u = [],
              e = o.bids.filter(g)
            if (0 !== e.length) {
              var s = {}
              e.forEach(function(e) {
                ;(s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
              })
              var r = f.buildRequests(e, o)
              if (r && 0 !== r.length) {
                Array.isArray(r) || (r = [r])
                var c = (0, h.delayExecution)(i, r.length)
                r.forEach(function(i) {
                  switch (i.method) {
                    case 'GET':
                      n(
                        '' +
                          i.url +
                          (function(e) {
                            if (e)
                              return (
                                '?' +
                                ('object' ===
                                (void 0 === e ? 'undefined' : p(e))
                                  ? (0, h.parseQueryStringParameters)(e)
                                  : e)
                              )
                            return ''
                          })(i.data),
                        { success: e, error: t },
                        void 0,
                        v({ method: 'GET', withCredentials: !0 }, i.options)
                      )
                      break
                    case 'POST':
                      n(
                        i.url,
                        { success: e, error: t },
                        'string' == typeof i.data
                          ? i.data
                          : JSON.stringify(i.data),
                        v(
                          {
                            method: 'POST',
                            contentType: 'text/plain',
                            withCredentials: !0,
                          },
                          i.options
                        )
                      )
                      break
                    default:
                      ;(0, h.logWarn)(
                        'Skipping invalid request from ' +
                          f.code +
                          '. Request type ' +
                          i.type +
                          ' must be GET or POST'
                      ),
                        c()
                  }
                  function e(e, t) {
                    try {
                      e = JSON.parse(e)
                    } catch (e) {}
                    ;(e = {
                      body: e,
                      headers: { get: t.getResponseHeader.bind(t) },
                    }),
                      u.push(e)
                    var n = void 0
                    try {
                      n = f.interpretResponse(e, i)
                    } catch (e) {
                      return (
                        (0, h.logError)(
                          'Bidder ' +
                            f.code +
                            " failed to interpret the server's response. Continuing without bids",
                          null,
                          e
                        ),
                        void c()
                      )
                    }
                    function r(e) {
                      var t,
                        n,
                        r = s[e.requestId]
                      if (r) {
                        var i = v(
                          y.default.createBid(m.default.STATUS.GOOD, r),
                          e
                        )
                        ;(t = r.adUnitCode),
                          (n = i),
                          (d[t] = !0),
                          E(t, n, [o]) && a(t, n)
                      } else (0, h.logWarn)('Bidder ' + f.code + ' made bid for unknown request ID: ' + e.requestId + '. Ignoring.')
                    }
                    n && (n.forEach ? n.forEach(r) : r(n)), c(n)
                  }
                  function t(e) {
                    ;(0, h.logError)(
                      'Server call for ' +
                        f.code +
                        ' failed: ' +
                        e +
                        '. Continuing without bids.'
                    ),
                      c()
                  }
                })
              } else i()
            } else i()
          }
          function i(e) {
            t(),
              b.default.emit(m.default.EVENTS.BIDDER_DONE, o),
              l(u, o.gdprConsent)
          }
        },
      })
      function l(e, t) {
        if (f.getUserSyncs) {
          var n = o.config.getConfig('userSync.filterSettings'),
            r = f.getUserSyncs(
              {
                iframeEnabled: !!(
                  o.config.getConfig('userSync.iframeEnabled') ||
                  (n && (n.iframe || n.all))
                ),
                pixelEnabled: !!(
                  o.config.getConfig('userSync.pixelEnabled') ||
                  (n && (n.image || n.all))
                ),
              },
              e,
              t
            )
          r &&
            (Array.isArray(r) || (r = [r]),
            r.forEach(function(e) {
              a.userSync.registerSync(e.type, f.code, e.url)
            }))
        }
      }
      function g(e) {
        return (
          !!f.isBidRequestValid(e) ||
          ((0, h.logWarn)(
            'Invalid bid sent to bidder ' + f.code + ': ' + JSON.stringify(e)
          ),
          !1)
        )
      }
    }
    function E(e, t, n) {
      function r(e) {
        return 'Invalid bid from ' + t.bidderCode + '. Ignoring bid: ' + e
      }
      return e
        ? t
          ? ((i = Object.keys(t)),
            l.every(function(e) {
              return (
                (0, s.default)(i, e) && !(0, s.default)([void 0, null], t[e])
              )
            })
              ? 'native' !== t.mediaType || (0, d.nativeBidIsValid)(t, n)
                ? 'video' !== t.mediaType || (0, u.isValidVideoBid)(t, n)
                  ? !(
                      'banner' === t.mediaType &&
                      !(function(e, t, n) {
                        if (
                          (t.width || 0 === t.width) &&
                          (t.height || 0 === t.height)
                        )
                          return !0
                        var r = (0, h.getBidderRequest)(n, t.bidderCode, e),
                          i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                          o = (0, h.parseSizesInput)(i)
                        if (1 !== o.length) return !1
                        var a = o[0].split('x'),
                          d = c(a, 2),
                          u = d[0],
                          s = d[1]
                        return (t.width = u), (t.height = s), !0
                      })(e, t, n)
                    ) ||
                    ((0, h.logError)(
                      r('Banner bids require a width and height')
                    ),
                    !1)
                  : ((0, h.logError)(
                      r(
                        'Video bid does not have required vastUrl or renderer property'
                      )
                    ),
                    !1)
                : ((0, h.logError)(
                    r('Native bid missing some required properties.')
                  ),
                  !1)
              : ((0, h.logError)(
                  r(
                    'Bidder ' +
                      t.bidderCode +
                      ' is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.'
                  )
                ),
                !1))
          : ((0, h.logWarn)(
              'Some adapter tried to add an undefined bid for ' + e + '.'
            ),
            !1)
        : ((0, h.logWarn)('No adUnitCode was supplied to addBidResponse.'), !1)
      var i
    }
  },
  10: function(e, t, n) {
    n(47), (e.exports = n(13).Array.find)
  },
  11: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var a = function(e, t) {
      if (Array.isArray(e)) return e
      if (Symbol.iterator in Object(e))
        return (function(e, t) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0
          try {
            for (
              var a, d = e[Symbol.iterator]();
              !(r = (a = d.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            ;(i = !0), (o = e)
          } finally {
            try {
              !r && d.return && d.return()
            } finally {
              if (i) throw o
            }
          }
          return n
        })(e, t)
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      )
    }
    function i(e) {
      return e
        ? e
            .replace(/^\?/, '')
            .split('&')
            .reduce(function(e, t) {
              var n = t.split('='),
                r = a(n, 2),
                i = r[0],
                o = r[1]
              return (
                /\[\]$/.test(i)
                  ? ((e[(i = i.replace('[]', ''))] = e[i] || []), e[i].push(o))
                  : (e[i] = o || ''),
                e
              )
            }, {})
        : {}
    }
    function r(e) {
      return Object.keys(e)
        .map(function(t) {
          return Array.isArray(e[t])
            ? e[t]
                .map(function(e) {
                  return t + '[]=' + e
                })
                .join('&')
            : t + '=' + e[t]
        })
        .join('&')
    }
    ;(t.parseQS = i),
      (t.formatQS = r),
      (t.parse = function(e, t) {
        var n = document.createElement('a')
        t && 'noDecodeWholeURL' in t && t.noDecodeWholeURL
          ? (n.href = e)
          : (n.href = decodeURIComponent(e))
        var r = t && 'decodeSearchAsString' in t && t.decodeSearchAsString
        return {
          href: n.href,
          protocol: (n.protocol || '').replace(/:$/, ''),
          hostname: n.hostname,
          port: +n.port,
          pathname: n.pathname.replace(/^(?!\/)/, '/'),
          search: r ? n.search : i(n.search || ''),
          hash: (n.hash || '').replace(/^#/, ''),
          host: n.host || window.location.host,
        }
      }),
      (t.format = function(e) {
        return (
          (e.protocol || 'http') +
          '://' +
          (e.host || e.hostname + (e.port ? ':' + e.port : '')) +
          (e.pathname || '') +
          (e.search ? '?' + r(e.search || '') : '') +
          (e.hash ? '#' + e.hash : '')
        )
      })
  },
  117: function(e, t, n) {
    'use strict'
    var r = n(14),
      i = n(34)(6),
      o = 'findIndex',
      a = !0
    o in [] &&
      Array(1)[o](function() {
        a = !1
      }),
      r(r.P + r.F * a, 'Array', {
        findIndex: function(e) {
          return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
        },
      }),
      n(26)(o)
  },
  12: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.Renderer = r),
      (t.isRendererRequired = function(e) {
        return !(!e || !e.url)
      }),
      (t.executeRenderer = function(e, t) {
        e.render(t)
      })
    var d = n(28),
      u = (function(e) {
        {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
          return (t.default = e), t
        }
      })(n(0))
    function r(e) {
      var t = this,
        n = e.url,
        r = e.config,
        i = e.id,
        o = e.callback,
        a = e.loaded
      ;(this.url = n),
        (this.config = r),
        (this.handlers = {}),
        (this.id = i),
        (this.loaded = a),
        (this.cmd = []),
        (this.push = function(e) {
          'function' == typeof e
            ? t.loaded
              ? e.call()
              : t.cmd.push(e)
            : u.logError(
                'Commands given to Renderer.push must be wrapped in a function'
              )
        }),
        (this.callback =
          o ||
          function() {
            ;(t.loaded = !0), t.process()
          }),
        (0, d.loadScript)(n, this.callback, !0)
    }
    ;(r.install = function(e) {
      return new r({
        url: e.url,
        config: e.config,
        id: e.id,
        callback: e.callback,
        loaded: e.loaded,
      })
    }),
      (r.prototype.getConfig = function() {
        return this.config
      }),
      (r.prototype.setRender = function(e) {
        this.render = e
      }),
      (r.prototype.setEventHandlers = function(e) {
        this.handlers = e
      }),
      (r.prototype.handleVideoEvent = function(e) {
        var t = e.id,
          n = e.eventName
        'function' == typeof this.handlers[n] && this.handlers[n](),
          u.logMessage('Prebid Renderer event for id ' + t + ' type ' + n)
      }),
      (r.prototype.process = function() {
        for (; 0 < this.cmd.length; )
          try {
            this.cmd.shift().call()
          } catch (e) {
            u.logError('Error processing Renderer command: ', e)
          }
      })
  },
  13: function(e, t) {
    var n = (e.exports = { version: '2.6.2' })
    'number' == typeof __e && (__e = n)
  },
  14: function(e, t, n) {
    var v = n(19),
      y = n(13),
      m = n(32),
      b = n(49),
      h = n(56),
      E = 'prototype',
      S = function(e, t, n) {
        var r,
          i,
          o,
          a = e & S.F,
          d = e & S.G,
          u = e & S.S,
          s = e & S.P,
          c = e & S.B,
          f = e & S.W,
          l = d ? y : y[t] || (y[t] = {}),
          g = l[E],
          p = d ? v : u ? v[t] : (v[t] || {})[E]
        for (r in (d && (n = t), n))
          ((i = !a && p && void 0 !== p[r]) && h(l, r)) ||
            ((o = i ? p[r] : n[r]),
            (l[r] =
              d && 'function' != typeof p[r]
                ? n[r]
                : c && i
                ? m(o, v)
                : f && p[r] == o
                ? (function(r) {
                    var e = function(e, t, n) {
                      if (this instanceof r) {
                        switch (arguments.length) {
                          case 0:
                            return new r()
                          case 1:
                            return new r(e)
                          case 2:
                            return new r(e, t)
                        }
                        return new r(e, t, n)
                      }
                      return r.apply(this, arguments)
                    }
                    return (e[E] = r[E]), e
                  })(o)
                : s && 'function' == typeof o
                ? m(Function.call, o)
                : o),
            s &&
              (((l.virtual || (l.virtual = {}))[r] = o),
              e & S.R && g && !g[r] && b(g, r, o)))
      }
    ;(S.F = 1),
      (S.G = 2),
      (S.S = 4),
      (S.P = 8),
      (S.B = 16),
      (S.W = 32),
      (S.U = 64),
      (S.R = 128),
      (e.exports = S)
  },
  15: function(e, t) {
    e.exports = function(e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e
    }
  },
  16: function(e, t, n) {
    'use strict'
    var o = n(0)
    function r(e, t) {
      var n = (t && t.bidId) || o.getUniqueIdentifierStr(),
        r = (t && t.src) || 'client',
        i = e || 0
      ;(this.bidderCode = (t && t.bidder) || ''),
        (this.width = 0),
        (this.height = 0),
        (this.statusMessage = (function() {
          switch (i) {
            case 0:
              return 'Pending'
            case 1:
              return 'Bid available'
            case 2:
              return 'Bid returned empty or error response'
            case 3:
              return 'Bid timed out'
          }
        })()),
        (this.adId = n),
        (this.mediaType = 'banner'),
        (this.source = r),
        (this.getStatusCode = function() {
          return i
        }),
        (this.getSize = function() {
          return this.width + 'x' + this.height
        })
    }
    t.createBid = function(e, t) {
      return new r(e, t)
    }
  },
  17: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.nativeAdapters = void 0)
    var o =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e
          }
        : function(e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          }
    ;(t.processNativeAdUnitParams = function(e) {
      if (
        e &&
        e.type &&
        ((t = e.type),
        (t && (0, d.default)(Object.keys(c), t)) ||
          ((0, a.logError)(t + ' nativeParam is not supported'), 0))
      )
        return c[e.type]
      var t
      return e
    }),
      (t.nativeBidIsValid = function(t, e) {
        var n = (0, a.getBidRequest)(t.adId, e)
        if (!n) return !1
        if (!(0, a.deepAccess)(t, 'native.clickUrl')) return !1
        if (
          (0, a.deepAccess)(t, 'native.image') &&
          (!(0, a.deepAccess)(t, 'native.image.height') ||
            !(0, a.deepAccess)(t, 'native.image.width'))
        )
          return !1
        if (
          (0, a.deepAccess)(t, 'native.icon') &&
          (!(0, a.deepAccess)(t, 'native.icon.height') ||
            !(0, a.deepAccess)(t, 'native.icon.width'))
        )
          return !1
        var r = n.nativeParams
        if (!r) return !0
        var i = Object.keys(r).filter(function(e) {
            return r[e].required
          }),
          o = Object.keys(t.native).filter(function(e) {
            return t.native[e]
          })
        return i.every(function(e) {
          return (0, d.default)(o, e)
        })
      }),
      (t.fireNativeTrackers = function(e, t) {
        var n = void 0
        'click' === e.action
          ? (n = t.native && t.native.clickTrackers)
          : ((n = t.native && t.native.impressionTrackers),
            t.native &&
              t.native.javascriptTrackers &&
              (0, a.insertHtmlIntoIframe)(t.native.javascriptTrackers))
        ;(n || []).forEach(a.triggerPixel)
      }),
      (t.getNativeTargeting = function(r) {
        var i = {}
        return (
          Object.keys(r.native).forEach(function(e) {
            var t = u.NATIVE_KEYS[e],
              n = r.native[e]
            'object' === (void 0 === n ? 'undefined' : o(n)) &&
              n.url &&
              (n = n.url),
              t && n && (i[t] = n)
          }),
          i
        )
      })
    var r,
      a = n(0),
      i = n(7),
      d = (r = i) && r.__esModule ? r : { default: r }
    var u = n(4),
      s = (t.nativeAdapters = []),
      c = ((t.NATIVE_TARGETING_KEYS = Object.keys(u.NATIVE_KEYS).map(function(
        e
      ) {
        return u.NATIVE_KEYS[e]
      })),
      {
        image: {
          image: { required: !0 },
          title: { required: !0 },
          sponsoredBy: { required: !0 },
          clickUrl: { required: !0 },
          body: { required: !1 },
          icon: { required: !1 },
        },
      })
    t.nativeAdUnit = function(e) {
      var t = 'native' === e.mediaType,
        n = (0, a.deepAccess)(e, 'mediaTypes.native')
      return t || n
    }
    var f = (t.nativeBidder = function(e) {
      return (0, d.default)(s, e.bidder)
    })
    t.hasNonNativeBidder = function(e) {
      return e.bids.filter(function(e) {
        return !f(e)
      }).length
    }
  },
  18: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.userSync = void 0)
    var i = function(e, t) {
        if (Array.isArray(e)) return e
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0
            try {
              for (
                var a, d = e[Symbol.iterator]();
                !(r = (a = d.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              ;(i = !0), (o = e)
            } finally {
              try {
                !r && d.return && d.return()
              } finally {
                if (i) throw o
              }
            }
            return n
          })(e, t)
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        )
      },
      s =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }
    t.newUserSync = a
    var r,
      c = (function(e) {
        {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
          return (t.default = e), t
        }
      })(n(0)),
      f = n(3),
      o = n(7),
      l = (r = o) && r.__esModule ? r : { default: r }
    function a(e) {
      var t = {},
        o = { image: [], iframe: [] },
        n = !1,
        a = {},
        d = { image: !1, iframe: !1 },
        u = e.config
      function r() {
        if (u.syncEnabled && e.browserSupportsCookies && !n) {
          try {
            !(function() {
              if (!u.pixelEnabled && !d.image) return
              c.shuffle(o.image).forEach(function(e) {
                var t = i(e, 2),
                  n = t[0],
                  r = t[1]
                c.logMessage('Invoking image pixel user sync for bidder: ' + n),
                  c.triggerPixel(r)
              })
            })(),
              (function() {
                if (!u.iframeEnabled && !d.iframe) return
                c.shuffle(o.iframe).forEach(function(e) {
                  var t = i(e, 2),
                    n = t[0],
                    r = t[1]
                  c.logMessage('Invoking iframe user sync for bidder: ' + n),
                    c.insertUserSyncIframe(r)
                })
              })()
          } catch (e) {
            return c.logError('Error firing user syncs', e)
          }
          ;(o = { image: [], iframe: [] }), (n = !0)
        }
      }
      return (
        f.config.getConfig('userSync', function(e) {
          u = s(u, e.userSync)
        }),
        (t.registerSync = function(e, t, n) {
          if (!u.syncEnabled || !c.isArray(o[e]))
            return c.logWarn('User sync type "' + e + '" not supported')
          if (!t) return c.logWarn('Bidder is required for registering sync')
          if (Number(a[t]) >= u.syncsPerBidder)
            return c.logWarn('Number of user syncs exceeded for "' + t + '"')
          if (u.filterSettings) {
            if (
              (function(e, t) {
                var n = u.filterSettings
                if (
                  (function(e, t) {
                    if (e.all && e[t])
                      return (
                        c.logWarn(
                          'Detected presence of the "filterSettings.all" and "filterSettings.' +
                            t +
                            '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'
                        ),
                        !1
                      )
                    var n = e.all ? e.all : e[t],
                      r = e.all ? 'all' : t
                    if (!n) return !1
                    var i = n.filter,
                      o = n.bidders
                    if (i && 'include' !== i && 'exclude' !== i)
                      return (
                        c.logWarn(
                          'UserSync "filterSettings.' +
                            r +
                            '.filter" setting \'' +
                            i +
                            "' is not a valid option; use either 'include' or 'exclude'."
                        ),
                        !1
                      )
                    return (
                      !!(
                        '*' === o ||
                        (Array.isArray(o) &&
                          0 < o.length &&
                          o.every(function(e) {
                            return c.isStr(e) && '*' !== e
                          }))
                      ) ||
                      (c.logWarn(
                        'Detected an invalid setup in userSync "filterSettings.' +
                          r +
                          ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."
                      ),
                      !1)
                    )
                  })(n, e)
                ) {
                  d[e] = !0
                  var r = n.all ? n.all : n[e],
                    i = '*' === r.bidders ? [t] : r.bidders,
                    o = r.filter || 'include',
                    a = {
                      include: function(e, t) {
                        return !(0, l.default)(e, t)
                      },
                      exclude: function(e, t) {
                        return (0, l.default)(e, t)
                      },
                    }
                  return a[o](i, t)
                }
                return !1
              })(e, t)
            )
              return c.logWarn(
                "Bidder '" +
                  t +
                  "' is not permitted to register their userSync " +
                  e +
                  ' pixels as per filterSettings config.'
              )
          } else if (
            u.enabledBidders &&
            u.enabledBidders.length &&
            u.enabledBidders.indexOf(t) < 0
          )
            return c.logWarn(
              'Bidder "' +
                t +
                '" not permitted to register their userSync pixels.'
            )
          var r, i
          o[e].push([t, n]),
            (r = a)[(i = t)] ? (r[i] += 1) : (r[i] = 1),
            (a = r)
        }),
        (t.syncUsers = function() {
          var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0
          if (e) return setTimeout(r, Number(e))
          r()
        }),
        (t.triggerUserSyncs = function() {
          u.enableOverride && t.syncUsers()
        }),
        t
      )
    }
    f.config.setDefaults({
      userSync: {
        syncEnabled: !0,
        pixelEnabled: !0,
        syncsPerBidder: 5,
        syncDelay: 3e3,
      },
    })
    var d = !c.isSafariBrowser() && c.cookiesAreEnabled()
    t.userSync = a({
      config: f.config.getConfig('userSync'),
      browserSupportsCookies: d,
    })
  },
  19: function(e, t) {
    var n = (e.exports =
      'undefined' != typeof window && window.Math == Math
        ? window
        : 'undefined' != typeof self && self.Math == Math
        ? self
        : Function('return this')())
    'number' == typeof __g && (__g = n)
  },
  2: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    ;(t.NATIVE = 'native'), (t.VIDEO = 'video'), (t.BANNER = 'banner')
  },
  20: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var a =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      u =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }
    t.createHook = function(r, i, e) {
      var d = [{ fn: i, priority: 0 }],
        o = {
          sync: function() {
            for (
              var t = this, e = arguments.length, n = Array(e), r = 0;
              r < e;
              r++
            )
              n[r] = arguments[r]
            d.forEach(function(e) {
              e.fn.apply(t, n)
            })
          },
          asyncSeries: function() {
            for (
              var o = this, e = arguments.length, t = Array(e), n = 0;
              n < e;
              n++
            )
              t[n] = arguments[n]
            var a = 0
            return d[a].fn.apply(
              this,
              t.concat(function e() {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                  n[r] = arguments[r]
                var i = d[++a]
                if (
                  'object' === (void 0 === i ? 'undefined' : u(i)) &&
                  'function' == typeof i.fn
                )
                  return i.fn.apply(o, n.concat(e))
              })
            )
          },
        }
      if (!o[r]) throw 'invalid hook type'
      var t = {
        addHook: function(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10
          'function' == typeof e &&
            (d.push({ fn: e, priority: t }),
            d.sort(function(e, t) {
              return t.priority - e.priority
            }))
        },
        removeHook: function(t) {
          d = d.filter(function(e) {
            return e.fn === i || e.fn !== t
          })
        },
        hasHook: function(t) {
          return d.some(function(e) {
            return e.fn === t
          })
        },
      }
      'string' == typeof e && (s[e] = t)
      return a(function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        return 1 !== d.length || d[0].fn !== i
          ? o[r].apply(this, t)
          : i.apply(this, t)
      }, t)
    }
    var s = (t.hooks = {})
  },
  21: function(e, t, n) {
    n(117), (e.exports = n(13).Array.findIndex)
  },
  22: function(e, t, n) {
    e.exports = !n(33)(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7
          },
        }).a
      )
    })
  },
  225: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.store = function(e, t) {
        var n = { puts: e.map(a) }
        ;(0, i.ajax)(
          o.config.getConfig('cache.url'),
          ((r = t),
          {
            success: function(e) {
              var t = void 0
              try {
                t = JSON.parse(e).responses
              } catch (e) {
                return void r(e, [])
              }
              t
                ? r(null, t)
                : r(
                    new Error(
                      "The cache server didn't respond with a responses property."
                    ),
                    []
                  )
            },
            error: function(e, t) {
              r(
                new Error(
                  'Error storing video ad in the cache: ' +
                    e +
                    ': ' +
                    JSON.stringify(t)
                ),
                []
              )
            },
          }),
          JSON.stringify(n),
          { contentType: 'text/plain', withCredentials: !0 }
        )
        var r
      }),
      (t.getCacheUrl = function(e) {
        return o.config.getConfig('cache.url') + '?uuid=' + e
      })
    var i = n(6),
      o = n(3)
    function a(e) {
      var t, n
      return {
        type: 'xml',
        value: e.vastXml
          ? e.vastXml
          : ((t = e.vastUrl),
            (n = e.vastImpUrl),
            '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' +
              t +
              ']]></VASTAdTagURI>\n        <Impression>' +
              (n ? '<![CDATA[' + n + ']]>' : '') +
              '</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>'),
        ttlseconds: Number(e.ttl),
      }
    }
  },
  23: function(e, t) {
    var n = {}.toString
    e.exports = function(e) {
      return n.call(e).slice(8, -1)
    }
  },
  24: function(e, t) {
    e.exports = function(e) {
      if (null == e) throw TypeError("Can't call method on  " + e)
      return e
    }
  },
  25: function(e, t, n) {
    var r = n(60)('wks'),
      i = n(62),
      o = n(19).Symbol,
      a = 'function' == typeof o
    ;(e.exports = function(e) {
      return r[e] || (r[e] = (a && o[e]) || (a ? o : i)('Symbol.' + e))
    }).store = r
  },
  26: function(e, t) {
    e.exports = function() {}
  },
  27: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        var t = e
        return {
          callBids: function() {},
          setBidderCode: function(e) {
            t = e
          },
          getBidderCode: function() {
            return t
          },
        }
      })
  },
  28: function(e, t, n) {
    'use strict'
    var r,
      i = n(7),
      o = (r = i) && r.__esModule ? r : { default: r },
      a = (function(e) {
        {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
          return (t.default = e), t
        }
      })(n(0))
    var d = {},
      u = ['criteo']
    function s(e, t) {
      var n = document.createElement('script')
      ;(n.type = 'text/javascript'),
        (n.async = !0),
        t &&
          'function' == typeof t &&
          (n.readyState
            ? (n.onreadystatechange = function() {
                ;('loaded' !== n.readyState && 'complete' !== n.readyState) ||
                  ((n.onreadystatechange = null), t())
              })
            : (n.onload = function() {
                t()
              })),
        (n.src = e)
      var r = document.getElementsByTagName('head')
      ;(r = r.length ? r : document.getElementsByTagName('body')).length &&
        (r = r[0]).insertBefore(n, r.firstChild)
    }
    ;(t.loadExternalScript = function(e, t) {
      if (t && e)
        if ((0, o.default)(u, t)) {
          if (!d[e]) {
            a.logWarn('module ' + t + ' is loading external JavaScript')
            var n = document.createElement('script')
            ;(n.type = 'text/javascript'),
              (n.async = !0),
              (n.src = e),
              a.insertElement(n),
              (d[e] = !0)
          }
        } else
          a.logError(t + ' not whitelisted for loading external JavaScript')
      else a.logError('cannot load external script without url and moduleCode')
    }),
      (t.loadScript = function(t, e, n) {
        t
          ? n
            ? d[t]
              ? e &&
                'function' == typeof e &&
                (d[t].loaded ? e() : d[t].callbacks.push(e))
              : ((d[t] = { loaded: !1, callbacks: [] }),
                e && 'function' == typeof e && d[t].callbacks.push(e),
                s(t, function() {
                  d[t].loaded = !0
                  try {
                    for (var e = 0; e < d[t].callbacks.length; e++)
                      d[t].callbacks[e]()
                  } catch (e) {
                    a.logError(
                      'Error executing callback',
                      'adloader.js:loadScript',
                      e
                    )
                  }
                }))
            : s(t, e)
          : a.logError(
              'Error attempting to request empty URL',
              'adloader.js:loadScript'
            )
      })
  },
  29: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.auctionManager = void 0),
      (t.newAuctionManager = u)
    var r,
      i = n(0),
      s = n(44),
      o = n(10),
      a = (r = o) && r.__esModule ? r : { default: r }
    var d = n(4)
    function u() {
      var u = [],
        r = {}
      return (
        (r.addWinningBid = function(t) {
          var e = (0, a.default)(u, function(e) {
            return e.getAuctionId() === t.auctionId
          })
          e
            ? e.addWinningBid(t)
            : utils.logWarn('Auction not found when adding winning bid')
        }),
        (r.getAllWinningBids = function() {
          return u
            .map(function(e) {
              return e.getWinningBids()
            })
            .reduce(i.flatten, [])
        }),
        (r.getBidsRequested = function() {
          return u
            .map(function(e) {
              return e.getBidRequests()
            })
            .reduce(i.flatten, [])
        }),
        (r.getBidsReceived = function() {
          return u
            .map(function(e) {
              if (e.getAuctionStatus() === s.AUCTION_COMPLETED)
                return e.getBidsReceived()
            })
            .reduce(i.flatten, [])
            .filter(function(e) {
              return e
            })
        }),
        (r.getAdUnits = function() {
          return u
            .map(function(e) {
              return e.getAdUnits()
            })
            .reduce(i.flatten, [])
        }),
        (r.getAdUnitCodes = function() {
          return u
            .map(function(e) {
              return e.getAdUnitCodes()
            })
            .reduce(i.flatten, [])
            .filter(i.uniques)
        }),
        (r.createAuction = function(e) {
          var t,
            n = e.adUnits,
            r = e.adUnitCodes,
            i = e.callback,
            o = e.cbTimeout,
            a = e.labels,
            d = (0, s.newAuction)({
              adUnits: n,
              adUnitCodes: r,
              callback: i,
              cbTimeout: o,
              labels: a,
            })
          return (t = d), u.push(t), d
        }),
        (r.findBidByAdId = function(t) {
          return (0, a.default)(
            u
              .map(function(e) {
                return e.getBidsReceived()
              })
              .reduce(i.flatten, []),
            function(e) {
              return e.adId === t
            }
          )
        }),
        (r.getStandardBidderAdServerTargeting = function() {
          return (0, s.getStandardBidderSettings)()[
            d.JSON_MAPPING.ADSERVER_TARGETING
          ]
        }),
        (r.setStatusForBids = function(e, t) {
          var n = r.findBidByAdId(e)
          n && (n.status = t)
        }),
        r
      )
    }
    t.auctionManager = u()
  },
  3: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.config = t.RANDOM = void 0)
    var u =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      s =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }
    t.newConfig = d
    var r = n(31),
      c = o(n(10)),
      f = o(n(7)),
      i = n(20)
    function o(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var l = n(0),
      g = !1,
      p = 3e3,
      v = window.location.origin,
      y = !0,
      m = !1,
      b = 200,
      a = (t.RANDOM = 'random'),
      h = {}
    ;(h[a] = !0), (h.fixed = !0)
    var E = a,
      S = {
        LOW: 'low',
        MEDIUM: 'medium',
        HIGH: 'high',
        AUTO: 'auto',
        DENSE: 'dense',
        CUSTOM: 'custom',
      },
      A = '*'
    function d() {
      var o = [],
        a = void 0,
        d = void 0
      function e() {
        function i(t) {
          return (0, c.default)(Object.keys(S), function(e) {
            return t === S[e]
          })
        }
        function o(e) {
          if (!e)
            return (
              l.logError(
                'Prebid Error: no value passed to `setPriceGranularity()`'
              ),
              !1
            )
          if ('string' == typeof e)
            i(e) ||
              l.logWarn(
                'Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.'
              )
          else if (
            'object' === (void 0 === e ? 'undefined' : s(e)) &&
            !(0, r.isValidPriceConfig)(e)
          )
            return (
              l.logError(
                'Invalid custom price value passed to `setPriceGranularity()`'
              ),
              !1
            )
          return !0
        }
        ;(a = {}),
          (d = {
            _debug: g,
            get debug() {
              return this._debug
            },
            set debug(e) {
              this._debug = e
            },
            _bidderTimeout: p,
            get bidderTimeout() {
              return this._bidderTimeout
            },
            set bidderTimeout(e) {
              this._bidderTimeout = e
            },
            _publisherDomain: v,
            get publisherDomain() {
              return this._publisherDomain
            },
            set publisherDomain(e) {
              this._publisherDomain = e
            },
            _priceGranularity: S.MEDIUM,
            set priceGranularity(e) {
              o(e) &&
                ('string' == typeof e
                  ? (this._priceGranularity = i(e) ? e : S.MEDIUM)
                  : 'object' === (void 0 === e ? 'undefined' : s(e)) &&
                    ((this._customPriceBucket = e),
                    (this._priceGranularity = S.CUSTOM),
                    l.logMessage('Using custom price granularity')))
            },
            get priceGranularity() {
              return this._priceGranularity
            },
            _customPriceBucket: {},
            get customPriceBucket() {
              return this._customPriceBucket
            },
            _mediaTypePriceGranularity: {},
            get mediaTypePriceGranularity() {
              return this._mediaTypePriceGranularity
            },
            set mediaTypePriceGranularity(n) {
              var r = this
              this._mediaTypePriceGranularity = Object.keys(n).reduce(function(
                e,
                t
              ) {
                return (
                  o(n[t])
                    ? 'string' == typeof n
                      ? (e[t] = i(n[t]) ? n[t] : r._priceGranularity)
                      : 'object' === (void 0 === n ? 'undefined' : s(n)) &&
                        ((e[t] = n[t]),
                        l.logMessage('Using custom price granularity for ' + t))
                    : l.logWarn(
                        'Invalid price granularity for media type: ' + t
                      ),
                  e
                )
              },
              {})
            },
            _sendAllBids: y,
            get enableSendAllBids() {
              return this._sendAllBids
            },
            set enableSendAllBids(e) {
              this._sendAllBids = e
            },
            _bidderSequence: E,
            get bidderSequence() {
              return this._bidderSequence
            },
            set bidderSequence(e) {
              h[e]
                ? (this._bidderSequence = e)
                : l.logWarn(
                    'Invalid order: ' + e + '. Bidder Sequence was not set.'
                  )
            },
            _timoutBuffer: b,
            get timeoutBuffer() {
              return this._timoutBuffer
            },
            set timeoutBuffer(e) {
              this._timoutBuffer = e
            },
            _disableAjaxTimeout: m,
            get disableAjaxTimeout() {
              return this._disableAjaxTimeout
            },
            set disableAjaxTimeout(e) {
              this._disableAjaxTimeout = e
            },
          })
      }
      var t = (0, i.createHook)('asyncSeries', function(n) {
        if ('object' === (void 0 === n ? 'undefined' : s(n))) {
          var i,
            t,
            e = Object.keys(n),
            r = {}
          e.forEach(function(e) {
            var t = n[e]
            'object' === s(a[e]) &&
              'object' === (void 0 === t ? 'undefined' : s(t)) &&
              (t = u({}, a[e], t)),
              (r[e] = d[e] = t)
          }),
            (i = r),
            (t = Object.keys(i)),
            o
              .filter(function(e) {
                return (0, f.default)(t, e.topic)
              })
              .forEach(function(e) {
                var t, n, r
                e.callback(
                  ((t = {}),
                  (n = e.topic),
                  (r = i[e.topic]),
                  n in t
                    ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[n] = r),
                  t)
                )
              }),
            o
              .filter(function(e) {
                return e.topic === A
              })
              .forEach(function(e) {
                return e.callback(i)
              })
        } else l.logError('setConfig options must be an object')
      })
      return (
        e(),
        {
          getConfig: function() {
            if (
              arguments.length <= 1 &&
              'function' !=
                typeof (arguments.length <= 0 ? void 0 : arguments[0])
            ) {
              var e = arguments.length <= 0 ? void 0 : arguments[0]
              return e ? l.deepAccess(d, e) : d
            }
            return function(e, t) {
              var n = t
              return (
                'string' != typeof e && ((n = e), (e = A)),
                'function' == typeof n
                  ? (o.push({ topic: e, callback: n }),
                    function() {
                      o.splice(o.indexOf(t), 1)
                    })
                  : void l.logError('listener must be a function')
              )
            }.apply(void 0, arguments)
          },
          setConfig: t,
          setDefaults: function(e) {
            'object' === (void 0 === a ? 'undefined' : s(a))
              ? (u(a, e), u(d, e))
              : l.logError('defaults must be an object')
          },
          resetConfig: e,
        }
      )
    }
    t.config = d()
  },
  30: function(vr, wr) {
    var xr
    xr = (function() {
      return this
    })()
    try {
      xr = xr || Function('return this')() || eval('this')
    } catch (e) {
      'object' == typeof window && (xr = window)
    }
    vr.exports = xr
  },
  31: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.isValidPriceConfig = t.getPriceBucketString = void 0)
    var r,
      i = n(10),
      v = (r = i) && r.__esModule ? r : { default: r }
    var o = n(0),
      y = 2,
      a = { buckets: [{ min: 0, max: 5, increment: 0.5 }] },
      d = { buckets: [{ min: 0, max: 20, increment: 0.1 }] },
      u = { buckets: [{ min: 0, max: 20, increment: 0.01 }] },
      s = {
        buckets: [
          { min: 0, max: 3, increment: 0.01 },
          { min: 3, max: 8, increment: 0.05 },
          { min: 8, max: 20, increment: 0.5 },
        ],
      },
      c = {
        buckets: [
          { min: 0, max: 5, increment: 0.05 },
          { min: 5, max: 10, increment: 0.1 },
          { min: 10, max: 20, increment: 0.5 },
        ],
      }
    function f(n, e, r) {
      var i = ''
      if (!m(e)) return i
      var t,
        o,
        a,
        d,
        u,
        s,
        c,
        f,
        l,
        g = e.buckets.reduce(
          function(e, t) {
            return e.max > t.max ? e : t
          },
          { max: 0 }
        ),
        p = (0, v.default)(e.buckets, function(e) {
          if (n > g.max * r) {
            var t = e.precision
            void 0 === t && (t = y), (i = (e.max * r).toFixed(t))
          } else if (n <= e.max * r && n >= e.min * r) return e
        })
      return (
        p &&
          ((t = n),
          (a = r),
          (d = void 0 !== (o = p).precision ? o.precision : y),
          (u = o.increment * a),
          (s = o.min * a),
          (c = Math.pow(10, d + 2)),
          (f = (t * c - s * c) / (u * c)),
          (l = Math.floor(f) * u + s),
          (i = (l = Number(l.toFixed(10))).toFixed(d))),
        i
      )
    }
    function m(e) {
      if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1
      var t = !0
      return (
        e.buckets.forEach(function(e) {
          ;(void 0 !== e.min && e.max && e.increment) || (t = !1)
        }),
        t
      )
    }
    ;(t.getPriceBucketString = function(e, t) {
      var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
        r = parseFloat(e)
      return (
        isNaN(r) && (r = ''),
        {
          low: '' === r ? '' : f(e, a, n),
          med: '' === r ? '' : f(e, d, n),
          high: '' === r ? '' : f(e, u, n),
          auto: '' === r ? '' : f(e, c, n),
          dense: '' === r ? '' : f(e, s, n),
          custom: '' === r ? '' : f(e, t, n),
        }
      )
    }),
      (t.isValidPriceConfig = m)
  },
  32: function(e, t, n) {
    var o = n(48)
    e.exports = function(r, i, e) {
      if ((o(r), void 0 === i)) return r
      switch (e) {
        case 1:
          return function(e) {
            return r.call(i, e)
          }
        case 2:
          return function(e, t) {
            return r.call(i, e, t)
          }
        case 3:
          return function(e, t, n) {
            return r.call(i, e, t, n)
          }
      }
      return function() {
        return r.apply(i, arguments)
      }
    }
  },
  33: function(e, t) {
    e.exports = function(e) {
      try {
        return !!e()
      } catch (e) {
        return !0
      }
    }
  },
  34: function(e, t, n) {
    var h = n(32),
      E = n(35),
      S = n(57),
      A = n(36),
      r = n(58)
    e.exports = function(f, e) {
      var l = 1 == f,
        g = 2 == f,
        p = 3 == f,
        v = 4 == f,
        y = 6 == f,
        m = 5 == f || y,
        b = e || r
      return function(e, t, n) {
        for (
          var r,
            i,
            o = S(e),
            a = E(o),
            d = h(t, n, 3),
            u = A(a.length),
            s = 0,
            c = l ? b(e, u) : g ? b(e, 0) : void 0;
          s < u;
          s++
        )
          if ((m || s in a) && ((i = d((r = a[s]), s, o)), f))
            if (l) c[s] = i
            else if (i)
              switch (f) {
                case 3:
                  return !0
                case 5:
                  return r
                case 6:
                  return s
                case 2:
                  c.push(r)
              }
            else if (v) return !1
        return y ? -1 : p || v ? v : c
      }
    }
  },
  35: function(e, t, n) {
    var r = n(23)
    e.exports = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return 'String' == r(e) ? e.split('') : Object(e)
        }
  },
  36: function(e, t, n) {
    var r = n(37),
      i = Math.min
    e.exports = function(e) {
      return 0 < e ? i(r(e), 9007199254740991) : 0
    }
  },
  37: function(e, t) {
    var n = Math.ceil,
      r = Math.floor
    e.exports = function(e) {
      return isNaN((e = +e)) ? 0 : (0 < e ? r : n)(e)
    }
  },
  38: function(e, t, n) {
    var r = n(23)
    e.exports =
      Array.isArray ||
      function(e) {
        return 'Array' == r(e)
      }
  },
  39: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 })
    var r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e
          }
        : function(e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          }
    ;(t.setSizeConfig = d),
      (t.getLabels = function(e, t) {
        if (e.labelAll)
          return { labelAll: !0, labels: e.labelAll, activeLabels: t }
        return { labelAll: !1, labels: e.labelAny, activeLabels: t }
      }),
      (t.sizeSupported = function(e) {
        var t = y(
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v
        )
        return !t.shouldFilter || !!t.sizesSupported[e]
      }),
      (t.resolveStatus = function() {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.labels,
          n = void 0 === t ? [] : t,
          r = e.labelAll,
          i = void 0 !== r && r,
          o = e.activeLabels,
          a = void 0 === o ? [] : o,
          d = arguments[1],
          u = arguments[2],
          s = y(
            3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : v
          )
        d = (0, g.isPlainObject)(d) ? (0, g.deepClone)(d) : {}
        u &&
          (d.banner
            ? d.banner.sizes || (d.banner.sizes = u)
            : (d.banner = { sizes: u }))
        var c = (0, g.deepAccess)(d, 'banner.sizes')
        s.shouldFilter &&
          c &&
          (d.banner.sizes = c.filter(function(e) {
            return s.sizesSupported[e]
          }))
        var f = Object.keys(d),
          l = {
            active:
              1 < f.length ||
              (1 === f.length && 'banner' !== f[0]) ||
              ('banner' === f[0] &&
                0 < (0, g.deepAccess)(d, 'banner.sizes.length') &&
                (0 === n.length ||
                  (!i &&
                    (n.some(function(e) {
                      return s.labels[e]
                    }) ||
                      n.some(function(e) {
                        return (0, p.default)(a, e)
                      }))) ||
                  (i &&
                    n.reduce(function(e, t) {
                      return e ? s.labels[t] || (0, p.default)(a, t) : e
                    }, !0)))),
            mediaTypes: d,
          }
        c &&
          c.length !== d.banner.sizes.length &&
          (l.filterResults = { before: c, after: d.banner.sizes })
        return l
      })
    var i,
      o = n(3),
      g = n(0),
      a = n(7),
      p = (i = a) && i.__esModule ? i : { default: i }
    var v = []
    function d(e) {
      v = e
    }
    function y(e) {
      return e.reduce(
        function(n, e) {
          return (
            'object' === (void 0 === e ? 'undefined' : r(e)) &&
            'string' == typeof e.mediaQuery
              ? matchMedia(e.mediaQuery).matches &&
                (Array.isArray(e.sizesSupported) && (n.shouldFilter = !0),
                ['labels', 'sizesSupported'].forEach(function(t) {
                  return (e[t] || []).forEach(function(e) {
                    return (n[t][e] = !0)
                  })
                }))
              : (0, g.logWarn)(
                  'sizeConfig rule missing required property "mediaQuery"'
                ),
            n
          )
        },
        { labels: {}, sizesSupported: {}, shouldFilter: !1 }
      )
    }
    o.config.getConfig('sizeConfig', function(e) {
      return d(e.sizeConfig)
    })
  },
  4: function(e, t) {
    e.exports = {
      JSON_MAPPING: {
        PL_CODE: 'code',
        PL_SIZE: 'sizes',
        PL_BIDS: 'bids',
        BD_BIDDER: 'bidder',
        BD_ID: 'paramsd',
        BD_PL_ID: 'placementId',
        ADSERVER_TARGETING: 'adserverTargeting',
        BD_SETTING_STANDARD: 'standard',
      },
      REPO_AND_VERSION: 'prebid_prebid_1.30.0',
      DEBUG_MODE: 'pbjs_debug',
      STATUS: { GOOD: 1, NO_BID: 2 },
      CB: {
        TYPE: {
          ALL_BIDS_BACK: 'allRequestedBidsBack',
          AD_UNIT_BIDS_BACK: 'adUnitBidsBack',
          BID_WON: 'bidWon',
          REQUEST_BIDS: 'requestBids',
        },
      },
      EVENTS: {
        AUCTION_INIT: 'auctionInit',
        AUCTION_END: 'auctionEnd',
        BID_ADJUSTMENT: 'bidAdjustment',
        BID_TIMEOUT: 'bidTimeout',
        BID_REQUESTED: 'bidRequested',
        BID_RESPONSE: 'bidResponse',
        BID_WON: 'bidWon',
        BIDDER_DONE: 'bidderDone',
        SET_TARGETING: 'setTargeting',
        REQUEST_BIDS: 'requestBids',
        ADD_AD_UNITS: 'addAdUnits',
        AD_RENDER_FAILED: 'adRenderFailed',
      },
      AD_RENDER_FAILED_REASON: {
        PREVENT_WRITING_ON_MAIN_DOCUMENT: 'preventWritingOnMainDocuemnt',
        NO_AD: 'noAd',
        EXCEPTION: 'exception',
        CANNOT_FIND_AD: 'cannotFindAd',
        MISSING_DOC_OR_ADID: 'missingDocOrAdid',
      },
      EVENT_ID_PATHS: { bidWon: 'adUnitCode' },
      GRANULARITY_OPTIONS: {
        LOW: 'low',
        MEDIUM: 'medium',
        HIGH: 'high',
        AUTO: 'auto',
        DENSE: 'dense',
        CUSTOM: 'custom',
      },
      TARGETING_KEYS: {
        BIDDER: 'hb_bidder',
        AD_ID: 'hb_adid',
        PRICE_BUCKET: 'hb_pb',
        SIZE: 'hb_size',
        DEAL: 'hb_deal',
        SOURCE: 'hb_source',
        FORMAT: 'hb_format',
      },
      NATIVE_KEYS: {
        title: 'hb_native_title',
        body: 'hb_native_body',
        sponsoredBy: 'hb_native_brand',
        image: 'hb_native_image',
        icon: 'hb_native_icon',
        clickUrl: 'hb_native_linkurl',
        cta: 'hb_native_cta',
      },
      S2S: {
        SRC: 's2s',
        DEFAULT_ENDPOINT: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        SYNCED_BIDDERS_KEY: 'pbjsSyncs',
      },
    }
  },
  40: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.adunitCounter = void 0)
    var r = n(0),
      i = {}
    var o = {
      incrementCounter: function(e) {
        return (
          (i[e] = i[e] || {}),
          (i[e].counter = (0, r.deepAccess)(i, e + '.counter') + 1 || 1),
          i[e].counter
        )
      },
      getCounter: function(e) {
        return (0, r.deepAccess)(i, e + '.counter') || 0
      },
    }
    t.adunitCounter = o
  },
  41: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = t.OUTSTREAM = void 0),
      (t.isValidVideoBid = function(e, t) {
        var n = (0, o.getBidRequest)(e.adId, t),
          r = n && (0, o.deepAccess)(n, 'mediaTypes.video'),
          i = r && (0, o.deepAccess)(r, 'context')
        if (!n || (r && i !== s))
          return a.config.getConfig('cache.url') || !e.vastXml || e.vastUrl
            ? !(!e.vastUrl && !e.vastXml)
            : ((0, o.logError)(
                '\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '
              ),
              !1)
        return i !== s || !(!e.renderer && !n.renderer)
      })
    var r,
      i = n(8),
      o = n(0),
      a = n(3),
      d = n(7),
      u = (r = d) && r.__esModule ? r : { default: r }
    var s = (t.OUTSTREAM = 'outstream'),
      c = ((t.videoAdUnit = function(e) {
        var t = 'video' === e.mediaType,
          n = (0, o.deepAccess)(e, 'mediaTypes.video')
        return t || n
      }),
      (t.videoBidder = function(e) {
        return (0, u.default)(i.videoAdapters, e.bidder)
      }))
    t.hasNonVideoBidder = function(e) {
      return e.bids.filter(function(e) {
        return !c(e)
      }).length
    }
  },
  42: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getGlobal = function() {
        return window.pbjs
      }),
      (window.pbjs = window.pbjs || {}),
      (window.pbjs.cmd = window.pbjs.cmd || []),
      (window.pbjs.que = window.pbjs.que || [])
  },
  43: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.targeting = t.isBidNotExpired = t.TARGETING_KEYS = t.RENDERED = t.BID_TARGETING_SET = void 0)
    var h =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }
    ;(t.getHighestCpmBidsFromBidPool = N), (t.newTargeting = f)
    var r,
      E = n(0),
      S = n(3),
      A = n(17),
      i = n(29),
      a = n(39),
      o = n(7),
      T = (r = o) && r.__esModule ? r : { default: r }
    function I(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
        return n
      }
      return Array.from(e)
    }
    function _(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      )
    }
    var C = n(0),
      w = n(4),
      O = [],
      d = (t.BID_TARGETING_SET = 'targetingSet'),
      u = (t.RENDERED = 'rendered'),
      R = 20,
      B = (t.TARGETING_KEYS = Object.keys(w.TARGETING_KEYS).map(function(e) {
        return w.TARGETING_KEYS[e]
      })),
      s = ((t.isBidNotExpired = function(e) {
        return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0, E.timestamp)()
      }),
      function(e) {
        return (
          e && ((e.status && !(0, T.default)([d, u], e.status)) || !e.status)
        )
      })
    function N(e, n) {
      var r = [],
        i = (0, E.groupBy)(e, 'adUnitCode')
      return (
        Object.keys(i).forEach(function(e) {
          var t = (0, E.groupBy)(i[e], 'bidderCode')
          Object.keys(t).forEach(function(e) {
            return r.push(t[e].reduce(n, c()))
          })
        }),
        r
      )
    }
    function c(e) {
      return { adUnitCode: e, cpm: 0, adserverTargeting: {}, timeToRespond: 0 }
    }
    function f(n) {
      var g = {}
      function p(e) {
        return 'string' == typeof e
          ? [e]
          : C.isArray(e)
          ? e
          : n.getAdUnitCodes() || []
      }
      function v() {
        return N(
          n
            .getBidsReceived()
            .filter(function(e) {
              return (
                'banner' !== e.mediaType ||
                (0, a.sizeSupported)([e.width, e.height])
              )
            })
            .filter(s)
            .filter(t.isBidNotExpired),
          E.getOldestHighestCpmBid
        )
      }
      function y() {
        return n
          .getStandardBidderAdServerTargeting()
          .map(function(e) {
            return e.key
          })
          .concat(B)
          .filter(E.uniques)
      }
      function m(r, i, e, t) {
        return (
          Object.keys(i.adserverTargeting)
            .filter(o())
            .forEach(function(e) {
              var t, n
              r.length &&
                r
                  .filter(
                    ((n = e),
                    function(e) {
                      return (
                        e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                      )
                    })
                  )
                  .forEach(
                    ((t = e),
                    function(e) {
                      C.isArray(e.adserverTargeting[t]) ||
                        (e.adserverTargeting[t] = [e.adserverTargeting[t]]),
                        (e.adserverTargeting[t] = e.adserverTargeting[t]
                          .concat(i.adserverTargeting[t])
                          .filter(E.uniques)),
                        delete i.adserverTargeting[t]
                    })
                  )
            }),
          r.push(i),
          r
        )
      }
      function o() {
        var t = y()
        return function(e) {
          return -1 === t.indexOf(e)
        }
      }
      function b(t) {
        return _(
          {},
          t.adUnitCode,
          Object.keys(t.adserverTargeting)
            .filter(o())
            .map(function(e) {
              return _({}, e.substring(0, R), [t.adserverTargeting[e]])
            })
        )
      }
      return (
        (g.resetPresetTargeting = function(e) {
          if ((0, E.isGptPubadsDefined)()) {
            var t = p(e),
              r = n.getAdUnits().filter(function(e) {
                return (0, T.default)(t, e.code)
              })
            window.googletag
              .pubads()
              .getSlots()
              .forEach(function(n) {
                O.forEach(function(t) {
                  r.forEach(function(e) {
                    ;(e.code !== n.getAdUnitPath() &&
                      e.code !== n.getSlotElementId()) ||
                      n.setTargeting(t, null)
                  })
                })
              })
          }
        }),
        (g.getAllTargeting = function(e) {
          var r,
            t,
            i,
            n,
            o,
            a,
            d,
            u,
            s,
            c =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : v(),
            f = p(e),
            l = ((a = f),
            (d = c),
            (u = g.getWinningBids(a, d)),
            (s = y()),
            (u = u.map(function(o) {
              return _(
                {},
                o.adUnitCode,
                Object.keys(o.adserverTargeting)
                  .filter(function(e) {
                    return (
                      void 0 === o.sendStandardTargeting ||
                      o.sendStandardTargeting ||
                      -1 === s.indexOf(e)
                    )
                  })
                  .reduce(function(e, t) {
                    var n = [o.adserverTargeting[t]],
                      r = _({}, t.substring(0, R), n)
                    if (t !== w.TARGETING_KEYS.DEAL) return [].concat(I(e), [r])
                    var i = _({}, (t + '_' + o.bidderCode).substring(0, R), n)
                    return [].concat(I(e), [r, i])
                  }, [])
              )
            })))
              .concat(
                ((n = f),
                (o = c),
                o
                  .filter(function(e) {
                    return (0, T.default)(n, e.adUnitCode)
                  })
                  .map(function(e) {
                    return h({}, e)
                  })
                  .reduce(m, [])
                  .map(b)
                  .filter(function(e) {
                    return e
                  }))
              )
              .concat(
                S.config.getConfig('enableSendAllBids')
                  ? ((r = f),
                    (t = c),
                    (i = B.concat(A.NATIVE_TARGETING_KEYS)),
                    N(t, E.getHighestCpm)
                      .map(function(t) {
                        if (
                          t.adserverTargeting &&
                          r &&
                          ((C.isArray(r) && (0, T.default)(r, t.adUnitCode)) ||
                            ('string' == typeof r && t.adUnitCode === r))
                        )
                          return _(
                            {},
                            t.adUnitCode,
                            ((n = t),
                            i
                              .filter(function(e) {
                                return void 0 !== t.adserverTargeting[e]
                              })
                              .map(function(e) {
                                return _(
                                  {},
                                  (e + '_' + n.bidderCode).substring(0, R),
                                  [n.adserverTargeting[e]]
                                )
                              }))
                          )
                        var n
                      })
                      .filter(function(e) {
                        return e
                      }))
                  : []
              )
          return (
            l.map(function(t) {
              Object.keys(t).map(function(e) {
                t[e].map(function(e) {
                  ;-1 === O.indexOf(Object.keys(e)[0]) &&
                    (O = Object.keys(e).concat(O))
                })
              })
            }),
            (l = l
              .map(function(e) {
                return _(
                  {},
                  Object.keys(e)[0],
                  e[Object.keys(e)[0]]
                    .map(function(e) {
                      return _(
                        {},
                        Object.keys(e)[0],
                        e[Object.keys(e)[0]].join(', ')
                      )
                    })
                    .reduce(function(e, t) {
                      return h(t, e)
                    }, {})
                )
              })
              .reduce(function(e, t) {
                var n = Object.keys(t)[0]
                return (e[n] = h({}, e[n], t[n])), e
              }, {})),
            f.forEach(function(e) {
              l[e] || (l[e] = {})
            }),
            l
          )
        }),
        (g.setTargetingForGPT = function(i, e) {
          window.googletag
            .pubads()
            .getSlots()
            .forEach(function(r) {
              Object.keys(i)
                .filter(e ? e(r) : (0, E.isAdUnitCodeMatchingSlot)(r))
                .forEach(function(n) {
                  return Object.keys(i[n]).forEach(function(t) {
                    var e = i[n][t].split(',')
                    ;(e = 1 < e.length ? [e] : e)
                      .map(function(e) {
                        return (
                          C.logMessage(
                            'Attempting to set key value for slot: ' +
                              r.getSlotElementId() +
                              ' key: ' +
                              t +
                              ' value: ' +
                              e
                          ),
                          e
                        )
                      })
                      .forEach(function(e) {
                        r.setTargeting(t, e)
                      })
                  })
                })
            })
        }),
        (g.getWinningBids = function(e) {
          var n =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : v(),
            t = p(e)
          return n
            .filter(function(e) {
              return (0, T.default)(t, e.adUnitCode)
            })
            .filter(function(e) {
              return 0 < e.cpm
            })
            .map(function(e) {
              return e.adUnitCode
            })
            .filter(E.uniques)
            .map(function(t) {
              return n
                .filter(function(e) {
                  return e.adUnitCode === t ? e : null
                })
                .reduce(E.getHighestCpm, c(t))
            })
        }),
        (g.setTargetingForAst = function() {
          var r = g.getAllTargeting()
          Object.keys(r).forEach(function(n) {
            return Object.keys(r[n]).forEach(function(e) {
              if (
                (C.logMessage(
                  'Attempting to set targeting for targetId: ' +
                    n +
                    ' key: ' +
                    e +
                    ' value: ' +
                    r[n][e]
                ),
                C.isStr(r[n][e]) || C.isArray(r[n][e]))
              ) {
                var t = {}
                e.search(/pt[0-9]/) < 0
                  ? (t[e.toUpperCase()] = r[n][e])
                  : (t[e] = r[n][e]),
                  window.apntag.setKeywords(n, t)
              }
            })
          })
        }),
        (g.isApntagDefined = function() {
          if (window.apntag && C.isFn(window.apntag.setKeywords)) return !0
        }),
        g
      )
    }
    t.targeting = f(i.auctionManager)
  },
  44: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0)
    var m =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            },
      b =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }
    ;(t.newAuction = function(e) {
      var f = e.adUnits,
        t = e.adUnitCodes,
        n = e.callback,
        r = e.cbTimeout,
        i = e.labels,
        s = f,
        c = i,
        l = t,
        g = [],
        p = [],
        v = void 0,
        y = void 0,
        m = R.generateUUID(),
        b = void 0,
        h = n,
        E = void 0,
        S = r,
        o = []
      function A() {
        return {
          auctionId: m,
          timestamp: v,
          auctionEnd: y,
          auctionStatus: b,
          adUnits: s,
          adUnitCodes: l,
          labels: c,
          bidderRequests: g,
          bidsReceived: p,
          winningBids: o,
          timeout: S,
        }
      }
      function T(e, t) {
        if ((t && clearTimeout(E), null != h)) {
          var n = []
          e &&
            (R.logMessage('Auction ' + m + ' timedOut'),
            (d = p),
            (u = (a = g)
              .filter(function(e) {
                return !e.doneCbCallCount
              })
              .map(function(e) {
                return e.bidderCode
              })
              .filter(_.uniques)),
            (s = d
              .map(function(e) {
                return e.bidder
              })
              .filter(_.uniques)),
            (c = u.filter(function(e) {
              return !(0, w.default)(s, e)
            })),
            (n = a
              .map(function(e) {
                return (e.bids || []).filter(function(e) {
                  return (0, w.default)(c, e.bidder)
                })
              })
              .reduce(_.flatten, [])
              .map(function(e) {
                return {
                  bidId: e.bidId,
                  bidder: e.bidder,
                  adUnitCode: e.adUnitCode,
                  auctionId: e.auctionId,
                }
              })).length && N.emit(U.EVENTS.BID_TIMEOUT, n))
          try {
            ;(b = P), (y = Date.now()), N.emit(U.EVENTS.AUCTION_END, A())
            var r = l,
              i = p.filter(_.adUnitsFilter.bind(this, r)).reduce(F, {})
            h.apply(pbjs, [i, e])
          } catch (e) {
            R.logError('Error executing bidsBackHandler', null, e)
          } finally {
            n.length && B.callTimedOutBidders(f, n, S)
            var o = C.config.getConfig('userSync') || {}
            o.enableOverride || O(o.syncDelay)
          }
          h = null
        }
        var a, d, u, s, c
      }
      function I(e) {
        R.logInfo('Bids Received for Auction with id: ' + m, p),
          (b = P),
          T(!1, !0)
      }
      return {
        addBidReceived: function(e) {
          p = p.concat(e)
        },
        executeCallback: T,
        callBids: function() {
          var i = this
          ;(b = D), (v = Date.now())
          var o = B.makeBidRequests(s, v, m, S, c)
          R.logInfo('Bids Requested for Auction with id: ' + m, o),
            o.forEach(function(e) {
              var t
              ;(t = e), (g = g.concat(t))
            })
          var a = {}
          if (o.length < 1)
            R.logWarn('No valid bid requests returned for auction'), I()
          else {
            var e = {
              bidRequests: o,
              run: function() {
                var e, t
                ;(e = T.bind(null, !0)),
                  (t = setTimeout(e, S)),
                  (E = t),
                  (b = j),
                  N.emit(U.EVENTS.AUCTION_INIT, A())
                var n = W(I, i),
                  r = { auctionAddBidResponse: n.addBidResponse }
                B.callBids(
                  s,
                  o,
                  q.bind(r),
                  n.adapterDone,
                  {
                    request: function(e, t) {
                      u(k, t),
                        u(a, e),
                        M[e] || (M[e] = { SRA: !0, origin: t }),
                        1 < a[e] && (M[e].SRA = !1)
                    },
                    done: function(e) {
                      k[e]--, G[0] && d(G[0]) && G.shift()
                    },
                  },
                  S
                )
              },
            }
            d(e) ||
              (R.logWarn('queueing auction due to limited endpoint capacity'),
              G.push(e))
          }
          function d(e) {
            var r = !0,
              i = C.config.getConfig('maxRequestsPerOrigin') || x
            return (
              e.bidRequests.some(function(e) {
                var t = 1,
                  n =
                    void 0 !== e.src && e.src === U.S2S.SRC
                      ? 's2s'
                      : e.bidderCode
                return (
                  M[n] &&
                    (!1 === M[n].SRA && (t = Math.min(e.bids.length, i)),
                    k[M[n].origin] + t > i && (r = !1)),
                  !r
                )
              }),
              r && e.run(),
              r
            )
          }
          function u(e, t) {
            void 0 === e[t] ? (e[t] = 1) : e[t]++
          }
        },
        addWinningBid: function(e) {
          ;(o = o.concat(e)), B.callBidWonBidder(e.bidder, e, f)
        },
        getWinningBids: function() {
          return o
        },
        getTimeout: function() {
          return S
        },
        getAuctionId: function() {
          return m
        },
        getAuctionStatus: function() {
          return b
        },
        getAdUnits: function() {
          return s
        },
        getAdUnitCodes: function() {
          return l
        },
        getBidRequests: function() {
          return g
        },
        getBidsReceived: function() {
          return p
        },
      }
    }),
      (t.auctionCallbacks = W),
      (t.getStandardBidderSettings = d),
      (t.getKeyValueTargetingPairs = V),
      (t.adjustBids = s)
    var _ = n(0),
      h = n(31),
      i = n(17),
      E = n(225),
      S = n(12),
      C = n(3),
      r = n(18),
      o = n(20),
      A = a(n(10)),
      w = a(n(7)),
      T = n(41)
    function a(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var O = r.userSync.syncUsers,
      R = n(0),
      B = n(8),
      N = n(9),
      U = n(4),
      D = (t.AUCTION_STARTED = 'started'),
      j = (t.AUCTION_IN_PROGRESS = 'inProgress'),
      P = (t.AUCTION_COMPLETED = 'completed')
    N.on(U.EVENTS.BID_ADJUSTMENT, function(e) {
      s(e)
    })
    var x = 4,
      k = {},
      M = {},
      G = []
    var q = (t.addBidResponse = (0, o.createHook)(
      'asyncSeries',
      function(e, t) {
        this.auctionAddBidResponse(e, t)
      },
      'addBidResponse'
    ))
    function W(e, p) {
      var v = 0,
        t = !1,
        n = (0, _.delayExecution)(function() {
          t = !0
        }, p.getBidRequests().length)
      function y() {
        v--, t && 0 === v && e()
      }
      return {
        addBidResponse: function(e, t) {
          v++
          var n = p.getBidRequests(),
            r = p.getAuctionId(),
            i = (0, _.getBidderRequest)(n, t.bidderCode, e),
            o = (function(e) {
              var t = e.adUnitCode,
                n = e.bid,
                r = e.bidRequest,
                i = e.auctionId,
                o = r.start,
                a = b({}, n, {
                  auctionId: i,
                  responseTimestamp: (0, _.timestamp)(),
                  requestTimestamp: o,
                  cpm: parseFloat(n.cpm) || 0,
                  bidder: n.bidderCode,
                  adUnitCode: t,
                })
              ;(a.timeToRespond = a.responseTimestamp - a.requestTimestamp),
                N.emit(U.EVENTS.BID_ADJUSTMENT, a)
              var d =
                  r.bids &&
                  (0, A.default)(r.bids, function(e) {
                    return e.adUnitCode == t
                  }),
                u = d && d.renderer
              u &&
                u.url &&
                ((a.renderer = S.Renderer.install({ url: u.url })),
                a.renderer.setRender(u.render))
              var s,
                c = C.config.getConfig(
                  'mediaTypePriceGranularity.' + n.mediaType
                ),
                f = (0, h.getPriceBucketString)(
                  a.cpm,
                  'object' === (void 0 === c ? 'undefined' : m(c))
                    ? c
                    : C.config.getConfig('customPriceBucket'),
                  C.config.getConfig('currency.granularityMultiplier')
                )
              return (
                (a.pbLg = f.low),
                (a.pbMg = f.med),
                (a.pbHg = f.high),
                (a.pbAg = f.auto),
                (a.pbDg = f.dense),
                (a.pbCg = f.custom),
                a.bidderCode &&
                  (0 < a.cpm || a.dealId) &&
                  (s = V(a.bidderCode, a)),
                (a.adserverTargeting = b(a.adserverTargeting || {}, s)),
                a
              )
            })({ adUnitCode: e, bid: t, bidRequest: i, auctionId: r })
          'video' === o.mediaType
            ? ((a = p),
              (d = o),
              (u = i),
              (s = y),
              (c = !0),
              (f = (0, _.getBidRequest)(d.adId, [u])),
              (l = f && (0, _.deepAccess)(f, 'mediaTypes.video')),
              (g = l && (0, _.deepAccess)(l, 'context')),
              C.config.getConfig('cache.url') &&
                g !== T.OUTSTREAM &&
                (d.videoCacheKey
                  ? d.vastUrl ||
                    (R.logError(
                      'videoCacheKey specified but not required vastUrl for video bid'
                    ),
                    (c = !1))
                  : ((c = !1),
                    (0, E.store)([d], function(e, t) {
                      e
                        ? (R.logWarn(
                            'Failed to save to the video cache: ' +
                              e +
                              '. Video bid must be discarded.'
                          ),
                          I(a, d))
                        : ((d.videoCacheKey = t[0].uuid),
                          d.vastUrl ||
                            (d.vastUrl = (0, E.getCacheUrl)(d.videoCacheKey)),
                          z(a, d),
                          s())
                    }))),
              c && (z(a, d), s()))
            : (z(p, o), y())
          var a, d, u, s, c, f, l, g
        },
        adapterDone: function() {
          n(), t && 0 === v && e()
        },
      }
    }
    function I(e, t) {
      t.timeToRespond > e.getTimeout() + C.config.getConfig('timeoutBuffer') &&
        e.executeCallback(!0)
    }
    function z(e, t) {
      N.emit(U.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), I(e, t)
    }
    function d(e) {
      var t = C.config.getConfig('mediaTypePriceGranularity.' + e),
        n =
          'string' == typeof e && t
            ? 'string' == typeof t
              ? t
              : 'custom'
            : C.config.getConfig('priceGranularity'),
        r = pbjs.bidderSettings
      return (
        r[U.JSON_MAPPING.BD_SETTING_STANDARD] ||
          (r[U.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
        r[U.JSON_MAPPING.BD_SETTING_STANDARD][
          U.JSON_MAPPING.ADSERVER_TARGETING
        ] ||
          (r[U.JSON_MAPPING.BD_SETTING_STANDARD][
            U.JSON_MAPPING.ADSERVER_TARGETING
          ] = [
            {
              key: U.TARGETING_KEYS.BIDDER,
              val: function(e) {
                return e.bidderCode
              },
            },
            {
              key: U.TARGETING_KEYS.AD_ID,
              val: function(e) {
                return e.adId
              },
            },
            {
              key: U.TARGETING_KEYS.PRICE_BUCKET,
              val: function(e) {
                return n === U.GRANULARITY_OPTIONS.AUTO
                  ? e.pbAg
                  : n === U.GRANULARITY_OPTIONS.DENSE
                  ? e.pbDg
                  : n === U.GRANULARITY_OPTIONS.LOW
                  ? e.pbLg
                  : n === U.GRANULARITY_OPTIONS.MEDIUM
                  ? e.pbMg
                  : n === U.GRANULARITY_OPTIONS.HIGH
                  ? e.pbHg
                  : n === U.GRANULARITY_OPTIONS.CUSTOM
                  ? e.pbCg
                  : void 0
              },
            },
            {
              key: U.TARGETING_KEYS.SIZE,
              val: function(e) {
                return e.size
              },
            },
            {
              key: U.TARGETING_KEYS.DEAL,
              val: function(e) {
                return e.dealId
              },
            },
            {
              key: U.TARGETING_KEYS.SOURCE,
              val: function(e) {
                return e.source
              },
            },
            {
              key: U.TARGETING_KEYS.FORMAT,
              val: function(e) {
                return e.mediaType
              },
            },
          ]),
        r[U.JSON_MAPPING.BD_SETTING_STANDARD]
      )
    }
    function V(e, t) {
      if (!t) return {}
      var n = {},
        r = pbjs.bidderSettings
      r &&
        (u(n, d(t.mediaType), t),
        e &&
          r[e] &&
          r[e][U.JSON_MAPPING.ADSERVER_TARGETING] &&
          (u(n, r[e], t),
          (t.sendStandardTargeting = r[e].sendStandardTargeting)))
      return t.native && (n = b({}, n, (0, i.getNativeTargeting)(t))), n
    }
    function u(r, i, o) {
      var e = i[U.JSON_MAPPING.ADSERVER_TARGETING]
      return (
        (o.size = o.getSize()),
        R._each(e, function(e) {
          var t = e.key,
            n = e.val
          if (
            (r[t] && R.logWarn('The key: ' + t + ' is getting ovewritten'),
            R.isFn(n))
          )
            try {
              n = n(o)
            } catch (e) {
              R.logError('bidmanager', 'ERROR', e)
            }
          ;((void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) &&
            t !== U.TARGETING_KEYS.DEAL) ||
          (!R.isEmptyStr(n) && null != n)
            ? (r[t] = n)
            : R.logInfo(
                "suppressing empty key '" + t + "' from adserver targeting"
              )
        }),
        r
      )
    }
    function s(e) {
      var t = e.bidderCode,
        n = e.cpm,
        r = void 0
      if (
        pbjs.bidderSettings &&
        (t &&
        pbjs.bidderSettings[t] &&
        'function' == typeof pbjs.bidderSettings[t].bidCpmAdjustment
          ? (r = pbjs.bidderSettings[t].bidCpmAdjustment)
          : pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD] &&
            'function' ==
              typeof pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD]
                .bidCpmAdjustment &&
            (r =
              pbjs.bidderSettings[U.JSON_MAPPING.BD_SETTING_STANDARD]
                .bidCpmAdjustment),
        r)
      )
        try {
          n = r(e.cpm, b({}, e))
        } catch (e) {
          R.logError('Error during bid adjustment', 'bidmanager.js', e)
        }
      0 <= n && (e.cpm = n)
    }
    function F(e, t) {
      return (
        e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }),
        e[t.adUnitCode].bids.push(t),
        e
      )
    }
  },
  47: function(e, t, n) {
    'use strict'
    var r = n(14),
      i = n(34)(5),
      o = 'find',
      a = !0
    o in [] &&
      Array(1)[o](function() {
        a = !1
      }),
      r(r.P + r.F * a, 'Array', {
        find: function(e) {
          return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
        },
      }),
      n(26)(o)
  },
  48: function(e, t) {
    e.exports = function(e) {
      if ('function' != typeof e) throw TypeError(e + ' is not a function!')
      return e
    }
  },
  49: function(e, t, n) {
    var r = n(50),
      i = n(55)
    e.exports = n(22)
      ? function(e, t, n) {
          return r.f(e, t, i(1, n))
        }
      : function(e, t, n) {
          return (e[t] = n), e
        }
  },
  50: function(e, t, n) {
    var r = n(51),
      i = n(52),
      o = n(54),
      a = Object.defineProperty
    t.f = n(22)
      ? Object.defineProperty
      : function(e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return a(e, t, n)
            } catch (e) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported!')
          return 'value' in n && (e[t] = n.value), e
        }
  },
  51: function(e, t, n) {
    var r = n(15)
    e.exports = function(e) {
      if (!r(e)) throw TypeError(e + ' is not an object!')
      return e
    }
  },
  52: function(e, t, n) {
    e.exports =
      !n(22) &&
      !n(33)(function() {
        return (
          7 !=
          Object.defineProperty(n(53)('div'), 'a', {
            get: function() {
              return 7
            },
          }).a
        )
      })
  },
  53: function(e, t, n) {
    var r = n(15),
      i = n(19).document,
      o = r(i) && r(i.createElement)
    e.exports = function(e) {
      return o ? i.createElement(e) : {}
    }
  },
  54: function(e, t, n) {
    var i = n(15)
    e.exports = function(e, t) {
      if (!i(e)) return e
      var n, r
      if (t && 'function' == typeof (n = e.toString) && !i((r = n.call(e))))
        return r
      if ('function' == typeof (n = e.valueOf) && !i((r = n.call(e)))) return r
      if (!t && 'function' == typeof (n = e.toString) && !i((r = n.call(e))))
        return r
      throw TypeError("Can't convert object to primitive value")
    }
  },
  55: function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      }
    }
  },
  56: function(e, t) {
    var n = {}.hasOwnProperty
    e.exports = function(e, t) {
      return n.call(e, t)
    }
  },
  57: function(e, t, n) {
    var r = n(24)
    e.exports = function(e) {
      return Object(r(e))
    }
  },
  58: function(e, t, n) {
    var r = n(59)
    e.exports = function(e, t) {
      return new (r(e))(t)
    }
  },
  59: function(e, t, n) {
    var r = n(15),
      i = n(38),
      o = n(25)('species')
    e.exports = function(e) {
      var t
      return (
        i(e) &&
          ('function' != typeof (t = e.constructor) ||
            (t !== Array && !i(t.prototype)) ||
            (t = void 0),
          r(t) && null === (t = t[o]) && (t = void 0)),
        void 0 === t ? Array : t
      )
    }
  },
  6: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.ajax = void 0)
    var l =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      g =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            }
    t.ajaxBuilder = r
    var p = n(11),
      v = n(3),
      y = n(0),
      m = 4
    t.ajax = r()
    function r() {
      var s =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        c = e.request,
        f = e.done
      return function(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}
        try {
          var i = void 0,
            o = r.method || (n ? 'POST' : 'GET'),
            a = document.createElement('a')
          a.href = e
          var d =
            'object' === (void 0 === t ? 'undefined' : g(t)) && null !== t
              ? t
              : {
                  success: function() {
                    y.logMessage('xhr success')
                  },
                  error: function(e) {
                    y.logError('xhr error', null, e)
                  },
                }
          if (
            ('function' == typeof t && (d.success = t),
            ((i = new window.XMLHttpRequest()).onreadystatechange = function() {
              if (i.readyState === m) {
                'function' == typeof f && f(a.origin)
                var e = i.status
                ;(200 <= e && e < 300) || 304 === e
                  ? d.success(i.responseText, i)
                  : d.error(i.statusText, i)
              }
            }),
            v.config.getConfig('disableAjaxTimeout') ||
              (i.ontimeout = function() {
                y.logError('  xhr timeout after ', i.timeout, 'ms')
              }),
            'GET' === o && n)
          ) {
            var u = (0, p.parse)(e, r)
            l(u.search, n), (e = (0, p.format)(u))
          }
          i.open(o, e, !0),
            v.config.getConfig('disableAjaxTimeout') || (i.timeout = s),
            r.withCredentials && (i.withCredentials = !0),
            y._each(r.customHeaders, function(e, t) {
              i.setRequestHeader(t, e)
            }),
            r.preflight &&
              i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
            i.setRequestHeader('Content-Type', r.contentType || 'text/plain'),
            'function' == typeof c && c(a.origin),
            'POST' === o && n ? i.send(n) : i.send()
        } catch (e) {
          y.logError('xhr construction', e)
        }
      }
    }
  },
  60: function(e, t, n) {
    var r = n(13),
      i = n(19),
      o = '__core-js_shared__',
      a = i[o] || (i[o] = {})
    ;(e.exports = function(e, t) {
      return a[e] || (a[e] = void 0 !== t ? t : {})
    })('versions', []).push({
      version: r.version,
      mode: n(61) ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
    })
  },
  608: function(e, t, n) {
    e.exports = n(609)
  },
  609: function(e, t, n) {
    'use strict'
    var r,
      i =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            },
      o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      a = n(42),
      d = n(0),
      u = n(610),
      s = n(18),
      c = n(28),
      f = n(3),
      l = n(29),
      g = n(43),
      p = n(20),
      v = n(611),
      y = n(7),
      m = (r = y) && r.__esModule ? r : { default: r },
      b = n(40),
      h = n(12)
    var E = (0, a.getGlobal)(),
      S = n(4),
      A = n(0),
      T = n(8),
      I = n(16),
      _ = n(9),
      C = s.userSync.triggerUserSyncs,
      w = S.EVENTS,
      O = w.ADD_AD_UNITS,
      R = w.BID_WON,
      B = w.REQUEST_BIDS,
      N = w.SET_TARGETING,
      U = w.AD_RENDER_FAILED,
      D = S.AD_RENDER_FAILED_REASON,
      j = D.PREVENT_WRITING_ON_MAIN_DOCUMENT,
      P = D.NO_AD,
      x = D.EXCEPTION,
      k = D.CANNOT_FIND_AD,
      M = D.MISSING_DOC_OR_ADID,
      G = {
        bidWon: function(e) {
          var t = l.auctionManager
            .getBidsRequested()
            .map(function(e) {
              return e.bids.map(function(e) {
                return e.adUnitCode
              })
            })
            .reduce(d.flatten)
            .filter(d.uniques)
          return (
            !!A.contains(t, e) ||
            void A.logError('The "' + e + '" placement is not defined.')
          )
        },
      }
    function q(e, t, n) {
      e.defaultView &&
        e.defaultView.frameElement &&
        ((e.defaultView.frameElement.width = t),
        (e.defaultView.frameElement.height = n))
    }
    function W(e, t, n) {
      var r = {}
      ;(r.reason = e),
        (r.message = t),
        n && (r.bid = n),
        A.logError(t),
        _.emit(U, r)
    }
    function z(e) {
      e.forEach(function(e) {
        if (void 0 === e.called)
          try {
            e.call(), (e.called = !0)
          } catch (e) {
            A.logError('Error processing command :', 'prebid.js', e)
          }
      })
    }
    ;(0, v.sessionLoader)(),
      (E.bidderSettings = E.bidderSettings || {}),
      (E.libLoaded = !0),
      (E.version = 'v1.30.0'),
      A.logInfo('Prebid.js v1.30.0 loaded'),
      (E.adUnits = E.adUnits || []),
      (E.triggerUserSyncs = C),
      (E.getAdserverTargetingForAdUnitCodeStr = function(e) {
        if (
          (A.logInfo(
            'Invoking pbjs.getAdserverTargetingForAdUnitCodeStr',
            arguments
          ),
          e)
        ) {
          var t = E.getAdserverTargetingForAdUnitCode(e)
          return A.transformAdServerTargetingObj(t)
        }
        A.logMessage(
          'Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode'
        )
      }),
      (E.getAdserverTargetingForAdUnitCode = function(e) {
        return E.getAdserverTargeting(e)[e]
      }),
      (E.getAdserverTargeting = function(e) {
        return (
          A.logInfo('Invoking pbjs.getAdserverTargeting', arguments),
          g.targeting.getAllTargeting(e)
        )
      }),
      (E.getBidResponses = function() {
        A.logInfo('Invoking pbjs.getBidResponses', arguments)
        var e = l.auctionManager
            .getBidsReceived()
            .filter(
              d.adUnitsFilter.bind(this, l.auctionManager.getAdUnitCodes())
            ),
          n = e && e.length && e[e.length - 1].auctionId
        return e
          .map(function(e) {
            return e.adUnitCode
          })
          .filter(d.uniques)
          .map(function(t) {
            return e.filter(function(e) {
              return e.auctionId === n && e.adUnitCode === t
            })
          })
          .filter(function(e) {
            return e && e[0] && e[0].adUnitCode
          })
          .map(function(e) {
            return (
              (t = {}),
              (n = e[0].adUnitCode),
              (r = { bids: e.map(d.removeRequestId) }),
              n in t
                ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = r),
              t
            )
            var t, n, r
          })
          .reduce(function(e, t) {
            return o(e, t)
          }, {})
      }),
      (E.getBidResponsesForAdUnitCode = function(t) {
        return {
          bids: l.auctionManager
            .getBidsReceived()
            .filter(function(e) {
              return e.adUnitCode === t
            })
            .map(d.removeRequestId),
        }
      }),
      (E.setTargetingForGPTAsync = function(e, t) {
        if (
          (A.logInfo('Invoking pbjs.setTargetingForGPTAsync', arguments),
          (0, d.isGptPubadsDefined)())
        ) {
          var n = g.targeting.getAllTargeting(e)
          g.targeting.resetPresetTargeting(e),
            g.targeting.setTargetingForGPT(n, t),
            Object.keys(n).forEach(function(t) {
              Object.keys(n[t]).forEach(function(e) {
                'hb_adid' === e &&
                  l.auctionManager.setStatusForBids(
                    n[t][e],
                    g.BID_TARGETING_SET
                  )
              })
            }),
            _.emit(N, n)
        } else A.logError('window.googletag is not defined on the page')
      }),
      (E.setTargetingForAst = function() {
        A.logInfo('Invoking pbjs.setTargetingForAn', arguments),
          g.targeting.isApntagDefined()
            ? (g.targeting.setTargetingForAst(),
              _.emit(N, g.targeting.getAllTargeting()))
            : A.logError('window.apntag is not defined on the page')
      }),
      (E.renderAd = function(e, t) {
        if (
          (A.logInfo('Invoking pbjs.renderAd', arguments),
          A.logMessage('Calling renderAd with adId :' + t),
          e && t)
        )
          try {
            var n = l.auctionManager.findBidByAdId(t)
            if (n) {
              ;(n.status = g.RENDERED),
                (n.ad = A.replaceAuctionPrice(n.ad, n.cpm)),
                (n.adUrl = A.replaceAuctionPrice(n.adUrl, n.cpm)),
                l.auctionManager.addWinningBid(n),
                _.emit(R, n)
              var r = n.height,
                i = n.width,
                o = n.ad,
                a = n.mediaType,
                d = n.adUrl,
                u = n.renderer,
                s = document.createComment(
                  'Creative ' +
                    n.creativeId +
                    ' served by ' +
                    n.bidder +
                    ' Prebid.js Header Bidding'
                )
              if ((A.insertElement(s, e, 'body'), (0, h.isRendererRequired)(u)))
                (0, h.executeRenderer)(u, n)
              else if ((e === document && !A.inIframe()) || 'video' === a) {
                W(
                  j,
                  'Error trying to write ad. Ad render call ad id ' +
                    t +
                    ' was prevented from writing to the main document.',
                  n
                )
              } else if (o) e.write(o), e.close(), q(e, i, r), A.callBurl(n)
              else if (d) {
                var c = A.createInvisibleIframe()
                ;(c.height = r),
                  (c.width = i),
                  (c.style.display = 'inline'),
                  (c.style.overflow = 'hidden'),
                  (c.src = d),
                  A.insertElement(c, e, 'body'),
                  q(e, i, r),
                  A.callBurl(n)
              } else {
                W(
                  P,
                  'Error trying to write ad. No ad for bid response id: ' + t,
                  n
                )
              }
            } else {
              W(
                k,
                'Error trying to write ad. Cannot find ad by given id : ' + t
              )
            }
          } catch (e) {
            var f =
              'Error trying to write ad Id :' + t + ' to the page:' + e.message
            W(x, f)
          }
        else
          W(
            M,
            'Error trying to write ad Id :' +
              t +
              ' to the page. Missing document or adId'
          )
      }),
      (E.removeAdUnit = function(e) {
        if ((A.logInfo('Invoking pbjs.removeAdUnit', arguments), e))
          for (var t = 0; t < E.adUnits.length; t++)
            E.adUnits[t].code === e && E.adUnits.splice(t, 1)
      }),
      (E.requestBids = (0, p.createHook)('asyncSeries', function() {
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.bidsBackHandler,
          n = e.timeout,
          r = e.adUnits,
          i = e.adUnitCodes,
          o = e.labels
        _.emit(B)
        var a = n || f.config.getConfig('bidderTimeout')
        if (
          ((r = r || E.adUnits),
          A.logInfo('Invoking pbjs.requestBids', arguments),
          i && i.length
            ? (r = r.filter(function(e) {
                return (0, m.default)(i, e.code)
              }))
            : (i =
                r &&
                r.map(function(e) {
                  return e.code
                })),
          r.forEach(function(i) {
            var o = Object.keys(i.mediaTypes || { banner: 'banner' }),
              e = i.bids.map(function(e) {
                return e.bidder
              }),
              a = T.bidderRegistry,
              t = f.config.getConfig('s2sConfig'),
              n = t && t.bidders,
              r = n
                ? e.filter(function(e) {
                    return !(0, m.default)(n, e)
                  })
                : e
            i.transactionId || (i.transactionId = A.generateUUID()),
              r.forEach(function(t) {
                var e = a[t],
                  n = e && e.getSpec && e.getSpec(),
                  r = (n && n.supportedMediaTypes) || ['banner']
                o.some(function(e) {
                  return (0, m.default)(r, e)
                }) ||
                  (A.logWarn(A.unsupportedBidderMessage(i, t)),
                  (i.bids = i.bids.filter(function(e) {
                    return e.bidder !== t
                  })))
              }),
              b.adunitCounter.incrementCounter(i.code)
          }),
          r && 0 !== r.length)
        ) {
          var d = l.auctionManager.createAuction({
            adUnits: r,
            adUnitCodes: i,
            callback: t,
            cbTimeout: a,
            labels: o,
          })
          return d.callBids(), d
        }
        if (
          (A.logMessage('No adUnits configured. No bids requested.'),
          'function' == typeof t)
        )
          try {
            t()
          } catch (e) {
            A.logError('Error executing bidsBackHandler', null, e)
          }
      })),
      (E.addAdUnits = function(e) {
        A.logInfo('Invoking pbjs.addAdUnits', arguments),
          A.isArray(e)
            ? E.adUnits.push.apply(E.adUnits, e)
            : 'object' === (void 0 === e ? 'undefined' : i(e)) &&
              E.adUnits.push(e),
          _.emit(O)
      }),
      (E.onEvent = function(e, t, n) {
        A.logInfo('Invoking pbjs.onEvent', arguments),
          A.isFn(t)
            ? !n || G[e].call(null, n)
              ? _.on(e, t, n)
              : A.logError(
                  'The id provided is not valid for event "' +
                    e +
                    '" and no handler was set.'
                )
            : A.logError(
                'The event handler provided is not a function and was not set on event "' +
                  e +
                  '".'
              )
      }),
      (E.offEvent = function(e, t, n) {
        A.logInfo('Invoking pbjs.offEvent', arguments),
          (n && !G[e].call(null, n)) || _.off(e, t, n)
      }),
      (E.registerBidAdapter = function(e, t) {
        A.logInfo('Invoking pbjs.registerBidAdapter', arguments)
        try {
          T.registerBidAdapter(e(), t)
        } catch (e) {
          A.logError('Error registering bidder adapter : ' + e.message)
        }
      }),
      (E.registerAnalyticsAdapter = function(e) {
        A.logInfo('Invoking pbjs.registerAnalyticsAdapter', arguments)
        try {
          T.registerAnalyticsAdapter(e)
        } catch (e) {
          A.logError('Error registering analytics adapter : ' + e.message)
        }
      }),
      (E.createBid = function(e) {
        return A.logInfo('Invoking pbjs.createBid', arguments), I.createBid(e)
      }),
      (E.loadScript = function(e, t, n) {
        A.logInfo('Invoking pbjs.loadScript', arguments),
          (0, c.loadScript)(e, t, n)
      }),
      (E.enableAnalytics = function(e) {
        e && !A.isEmpty(e)
          ? (A.logInfo('Invoking pbjs.enableAnalytics for: ', e),
            T.enableAnalytics(e))
          : A.logError('pbjs.enableAnalytics should be called with option {}')
      }),
      (E.aliasBidder = function(e, t) {
        A.logInfo('Invoking pbjs.aliasBidder', arguments),
          e && t
            ? T.aliasBidAdapter(e, t)
            : A.logError(
                'bidderCode and alias must be passed as arguments',
                'pbjs.aliasBidder'
              )
      }),
      (E.getAllWinningBids = function() {
        return l.auctionManager.getAllWinningBids().map(d.removeRequestId)
      }),
      (E.getAllPrebidWinningBids = function() {
        return l.auctionManager
          .getBidsReceived()
          .filter(function(e) {
            return e.status === g.BID_TARGETING_SET
          })
          .map(d.removeRequestId)
      }),
      (E.getHighestCpmBids = function(e) {
        var t = (0, g.getHighestCpmBidsFromBidPool)(
          l.auctionManager.getBidsReceived(),
          d.getLatestHighestCpmBid
        )
        return g.targeting.getWinningBids(e, t).map(d.removeRequestId)
      }),
      (E.markWinningBidAsUsed = function(t) {
        var e = []
        t.adUnitCode && t.adId
          ? (e = l.auctionManager.getBidsReceived().filter(function(e) {
              return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }))
          : t.adUnitCode
          ? (e = g.targeting.getWinningBids(t.adUnitCode))
          : t.adId
          ? (e = l.auctionManager.getBidsReceived().filter(function(e) {
              return e.adId === t.adId
            }))
          : A.logWarn(
              "Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."
            ),
          0 < e.length && (e[0].status = g.RENDERED)
      }),
      (E.getConfig = f.config.getConfig),
      (E.setConfig = f.config.setConfig),
      E.que.push(function() {
        return (0, u.listenMessagesFromCreative)()
      }),
      (E.cmd.push = function(e) {
        if ('function' == typeof e)
          try {
            e.call()
          } catch (e) {
            A.logError('Error processing command :', e.message, e.stack)
          }
        else
          A.logError(
            'Commands written into pbjs.cmd.push must be wrapped in a function'
          )
      }),
      (E.que.push = E.cmd.push),
      (E.processQueue = function() {
        z(E.que), z(E.cmd)
      })
  },
  61: function(e, t) {
    e.exports = !0
  },
  610: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.listenMessagesFromCreative = function() {
        addEventListener('message', o, !1)
      })
    var m = i(n(9)),
      b = n(17),
      r = n(4),
      h = n(0),
      E = n(29),
      S = i(n(10)),
      A = n(12)
    function i(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var T = r.EVENTS.BID_WON
    function o(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        d,
        u,
        s,
        c,
        f,
        l,
        g,
        p = e.message ? 'message' : 'data',
        v = {}
      try {
        v = JSON.parse(e[p])
      } catch (e) {
        return
      }
      if (v && v.adId) {
        var y = (0, S.default)(E.auctionManager.getBidsReceived(), function(e) {
          return e.adId === v.adId
        })
        'Prebid Request' === v.message &&
          ((t = y),
          (n = v.adServerDomain),
          (r = e.source),
          (i = t.adId),
          (o = t.ad),
          (a = t.adUrl),
          (d = t.width),
          (u = t.height),
          (s = t.renderer),
          (0, A.isRendererRequired)(s)
            ? (0, A.executeRenderer)(s, t)
            : i &&
              ((f = (c = t).adUnitCode),
              (l = c.width),
              (g = c.height),
              ['div', 'iframe'].forEach(function(e) {
                var t,
                  n = ((t = e),
                  document
                    .getElementById(
                      (0, S.default)(
                        window.googletag
                          .pubads()
                          .getSlots()
                          .filter((0, h.isSlotMatchingAdUnitCode)(f)),
                        function(e) {
                          return e
                        }
                      ).getSlotElementId()
                    )
                    .querySelector(t)).style
                ;(n.width = l + 'px'), (n.height = g + 'px')
              }),
              r.postMessage(
                JSON.stringify({
                  message: 'Prebid Response',
                  ad: o,
                  adUrl: a,
                  adId: i,
                  width: d,
                  height: u,
                }),
                n
              )),
          E.auctionManager.addWinningBid(y),
          m.default.emit(T, y)),
          'Prebid Native' === v.message &&
            ((0, b.fireNativeTrackers)(v, y),
            E.auctionManager.addWinningBid(y),
            m.default.emit(T, y))
      }
    }
  },
  611: function(e, n, t) {
    'use strict'
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.boundHook = void 0)
    var o =
      Object.assign ||
      function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }
    ;(n.disableOverrides = f),
      (n.addBidResponseHook = l),
      (n.getConfig = g),
      (n.sessionLoader = function(e) {
        var t = void 0
        try {
          ;(e = e || window.sessionStorage), (t = JSON.parse(e.getItem(d)))
        } catch (e) {}
        t && c(t, !0)
      })
    var r = t(3),
      a = t(0),
      i = t(44),
      d = 'pbjs:debugging',
      u = (n.boundHook = void 0)
    function s(e) {
      ;(0, a.logMessage)('DEBUG: ' + e)
    }
    function c(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
      r.config.setConfig({ debug: !0 }),
        s('bidder overrides enabled' + (t ? ' from session' : '')),
        u && i.addBidResponse.removeHook(u),
        (n.boundHook = u = l.bind(null, e)),
        i.addBidResponse.addHook(u, 5)
    }
    function f() {
      u && (i.addBidResponse.removeHook(u), s('bidder overrides disabled'))
    }
    function l(e, r, i, t) {
      if (Array.isArray(e.bidders) && -1 === e.bidders.indexOf(i.bidderCode))
        return (
          (n =
            "bidder '" +
            i.bidderCode +
            "' excluded from auction by bidder overrides"),
          void (0, a.logWarn)('DEBUG: ' + n)
        )
      var n
      Array.isArray(e.bids) &&
        e.bids.forEach(function(n) {
          ;(n.bidder && n.bidder !== i.bidderCode) ||
            (n.adUnitCode && n.adUnitCode !== r) ||
            ((i = o({}, i)),
            Object.keys(n)
              .filter(function(e) {
                return -1 === ['bidder', 'adUnitCode'].indexOf(e)
              })
              .forEach(function(e) {
                var t = n[e]
                s(
                  "bidder overrides changed '" +
                    r +
                    '/' +
                    i.bidderCode +
                    "' bid." +
                    e +
                    " from '" +
                    i[e] +
                    "' to '" +
                    t +
                    "'"
                ),
                  (i[e] = t)
              }))
        }),
        t(r, i)
    }
    function g(e) {
      if (e.enabled) {
        try {
          window.sessionStorage.setItem(d, JSON.stringify(e))
        } catch (e) {}
        c(e)
      } else {
        f()
        try {
          window.sessionStorage.removeItem(d)
        } catch (e) {}
      }
    }
    r.config.getConfig('debugging', function(e) {
      return g(e.debugging)
    })
  },
  62: function(e, t) {
    var n = 0,
      r = Math.random()
    e.exports = function(e) {
      return 'Symbol('.concat(
        void 0 === e ? '' : e,
        ')_',
        (++n + r).toString(36)
      )
    }
  },
  63: function(e, t, n) {
    'use strict'
    var r = n(14),
      i = n(64)(!0)
    r(r.P, 'Array', {
      includes: function(e) {
        return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
      },
    }),
      n(26)('includes')
  },
  64: function(e, t, n) {
    var u = n(65),
      s = n(36),
      c = n(66)
    e.exports = function(d) {
      return function(e, t, n) {
        var r,
          i = u(e),
          o = s(i.length),
          a = c(n, o)
        if (d && t != t) {
          for (; a < o; ) if ((r = i[a++]) != r) return !0
        } else
          for (; a < o; a++) if ((d || a in i) && i[a] === t) return d || a || 0
        return !d && -1
      }
    }
  },
  65: function(e, t, n) {
    var r = n(35),
      i = n(24)
    e.exports = function(e) {
      return r(i(e))
    }
  },
  66: function(e, t, n) {
    var r = n(37),
      i = Math.max,
      o = Math.min
    e.exports = function(e, t) {
      return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
    }
  },
  67: function(e, t) {
    e.exports = function e(t) {
      var n = Array.isArray(t) ? [] : {}
      for (var r in t) {
        var i = t[r]
        n[r] = i && 'object' == typeof i ? e(i) : i
      }
      return n
    }
  },
  68: function(e, t, n) {
    'use strict'
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.getRefererInfo = void 0),
      (t.detectReferer = r)
    n(0)
    function r(e) {
      return function() {
        return {
          numIframes: 0,
          reachedTop: !0,
          referer: e.location.href,
          stack: [e.location.href],
        }
      }
    }
    t.getRefererInfo = r(window)
  },
  7: function(e, t, n) {
    n(63), (e.exports = n(13).Array.includes)
  },
  8: function(e, h, t) {
    'use strict'
    var b = function(e, t) {
        if (Array.isArray(e)) return e
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0
            try {
              for (
                var a, d = e[Symbol.iterator]();
                !(r = (a = d.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              ;(i = !0), (o = e)
            } finally {
              try {
                !r && d.return && d.return()
              } finally {
                if (i) throw o
              }
            }
            return n
          })(e, t)
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        )
      },
      g =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      E = t(0),
      p = t(39),
      v = t(17),
      c = t(1),
      S = t(6),
      A = t(3),
      T = n(t(7)),
      I = n(t(10)),
      y = t(40),
      _ = t(68)
    function n(e) {
      return e && e.__esModule ? e : { default: e }
    }
    var C = t(0),
      w = t(4),
      O = t(9),
      R = void 0,
      B = {}
    ;(h.bidderRegistry = B), (h.aliasRegistry = {})
    var N = {}
    A.config.getConfig('s2sConfig', function(e) {
      N = e.s2sConfig
    })
    var r = {}
    function U(e) {
      var i = e.bidderCode,
        s = e.auctionId,
        c = e.bidderRequestId,
        t = e.adUnits,
        f = e.labels,
        l = e.src
      return t
        .reduce(function(e, d) {
          var t = (0, p.resolveStatus)(
              (0, p.getLabels)(d, f),
              d.mediaTypes,
              d.sizes
            ),
            n = t.active,
            u = t.mediaTypes,
            r = t.filterResults
          return (
            n
              ? r &&
                C.logInfo(
                  'Size mapping filtered adUnit "' +
                    d.code +
                    '" banner sizes from ',
                  r.before,
                  'to ',
                  r.after
                )
              : C.logInfo('Size mapping disabled adUnit "' + d.code + '"'),
            n &&
              e.push(
                d.bids
                  .filter(function(e) {
                    return e.bidder === i
                  })
                  .reduce(function(e, t) {
                    var n =
                      d.nativeParams || C.deepAccess(d, 'mediaTypes.native')
                    n &&
                      (t = g({}, t, {
                        nativeParams: (0, v.processNativeAdUnitParams)(n),
                      })),
                      (t = g(
                        {},
                        t,
                        (0, E.getDefinedParams)(d, ['mediaType', 'renderer'])
                      ))
                    var r = (0, p.resolveStatus)((0, p.getLabels)(t, f), u),
                      i = r.active,
                      o = r.mediaTypes,
                      a = r.filterResults
                    return (
                      i
                        ? a &&
                          C.logInfo(
                            'Size mapping filtered adUnit "' +
                              d.code +
                              '" bidder "' +
                              t.bidder +
                              '" banner sizes from ',
                            a.before,
                            'to ',
                            a.after
                          )
                        : C.logInfo(
                            'Size mapping deactivated adUnit "' +
                              d.code +
                              '" bidder "' +
                              t.bidder +
                              '"'
                          ),
                      C.isValidMediaTypes(o)
                        ? (t = g({}, t, { mediaTypes: o }))
                        : C.logError(
                            'mediaTypes is not correctly configured for adunit ' +
                              d.code
                          ),
                      i &&
                        e.push(
                          g({}, t, {
                            adUnitCode: d.code,
                            transactionId: d.transactionId,
                            sizes: C.deepAccess(o, 'banner.sizes') || [],
                            bidId: t.bid_id || C.getUniqueIdentifierStr(),
                            bidderRequestId: c,
                            auctionId: s,
                            src: l,
                            bidRequestsCount: y.adunitCounter.getCounter(
                              d.code
                            ),
                          })
                        ),
                      e
                    )
                  }, [])
              ),
            e
          )
        }, [])
        .reduce(E.flatten, [])
        .filter(function(e) {
          return '' !== e
        })
    }
    function D() {
      return N && N.enabled && N.testing && R
    }
    function i(t, n, e) {
      try {
        var r = B[t].getSpec()
        r &&
          r[n] &&
          'function' == typeof r[n] &&
          (C.logInfo('Invoking ' + t + '.' + n), r[n](e))
      } catch (e) {
        C.logWarn('Error calling ' + n + ' of ' + t)
      }
    }
    ;(h.gdprDataHandler = {
      consentData: null,
      setConsentData: function(e) {
        this.consentData = e
      },
      getConsentData: function() {
        return this.consentData
      },
    }),
      (h.makeBidRequests = function(e, i, o, a, d) {
        var u = []
        e = h.checkBidRequestSizes(e)
        var t = (0, E.getBidderCodes)(e)
        A.config.getConfig('bidderSequence') === A.RANDOM &&
          (t = (0, E.shuffle)(t))
        var n,
          r,
          s,
          c = (0, _.getRefererInfo)(),
          f = t,
          l = []
        if (N.enabled) {
          D() && (l = R.getSourceBidderMap(e)[R.CLIENT])
          var g = N.bidders
          f = t.filter(function(e) {
            return !(0, T.default)(g, e) || (0, T.default)(l, e)
          })
          var p = ((n = e),
            (r = N.bidders),
            (s = C.deepClone(n)).forEach(function(e) {
              e.bids = e.bids
                .filter(function(e) {
                  return (
                    (0, T.default)(r, e.bidder) &&
                    (!D() || e.finalSource !== R.CLIENT)
                  )
                })
                .map(function(e) {
                  return (e.bid_id = C.getUniqueIdentifierStr()), e
                })
            }),
            (s = s.filter(function(e) {
              return 0 !== e.bids.length
            }))),
            v = C.generateUUID()
          g.forEach(function(e) {
            var t = C.getUniqueIdentifierStr(),
              n = {
                bidderCode: e,
                auctionId: o,
                bidderRequestId: t,
                tid: v,
                bids: U({
                  bidderCode: e,
                  auctionId: o,
                  bidderRequestId: t,
                  adUnits: C.deepClone(p),
                  labels: d,
                  src: w.S2S.SRC,
                }),
                auctionStart: i,
                timeout: N.timeout,
                src: w.S2S.SRC,
                refererInfo: c,
              }
            0 !== n.bids.length && u.push(n)
          }),
            p.forEach(function(e) {
              var t = e.bids.filter(function(t) {
                return (0, I.default)(u, function(e) {
                  return (0, I.default)(e.bids, function(e) {
                    return e.bidId === t.bid_id
                  })
                })
              })
              e.bids = t
            }),
            u.forEach(function(e) {
              e.adUnitsS2SCopy = p.filter(function(e) {
                return 0 < e.bids.length
              })
            })
        }
        var y,
          m,
          b = ((y = e),
          (m = C.deepClone(y)).forEach(function(e) {
            e.bids = e.bids.filter(function(e) {
              return !D() || e.finalSource !== R.SERVER
            })
          }),
          (m = m.filter(function(e) {
            return 0 !== e.bids.length
          })))
        return (
          f.forEach(function(e) {
            var t = C.getUniqueIdentifierStr(),
              n = {
                bidderCode: e,
                auctionId: o,
                bidderRequestId: t,
                bids: U({
                  bidderCode: e,
                  auctionId: o,
                  bidderRequestId: t,
                  adUnits: C.deepClone(b),
                  labels: d,
                  src: 'client',
                }),
                auctionStart: i,
                timeout: a,
                refererInfo: c,
              },
              r = B[e]
            r ||
              C.logError(
                'Trying to make a request for bidder that does not exist: ' + e
              ),
              r && n.bids && 0 !== n.bids.length && u.push(n)
          }),
          h.gdprDataHandler.getConsentData() &&
            u.forEach(function(e) {
              e.gdprConsent = h.gdprDataHandler.getConsentData()
            }),
          u
        )
      }),
      (h.checkBidRequestSizes = function(e) {
        function d(e) {
          return (
            Array.isArray(e) &&
            2 === e.length &&
            C.isInteger(e[0]) &&
            C.isInteger(e[1])
          )
        }
        return (
          e.forEach(function(e) {
            var t = e.mediaTypes,
              n = C.getAdUnitSizes(e)
            if (t && t.banner) {
              var r = t.banner
              r.sizes
                ? ((r.sizes = n), (e.sizes = n))
                : (C.logError(
                    'Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request.'
                  ),
                  delete e.mediaTypes.banner)
            } else e.sizes && (C.logWarn('Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes).'), (e.sizes = n))
            if (t && t.video) {
              var i = t.video
              if (i.playerSize)
                if (
                  Array.isArray(i.playerSize) &&
                  1 === i.playerSize.length &&
                  i.playerSize.every(d)
                )
                  e.sizes = i.playerSize
                else if (d(i.playerSize)) {
                  var o = []
                  o.push(i.playerSize),
                    C.logInfo(
                      'Transforming video.playerSize from ' +
                        i.playerSize +
                        ' to ' +
                        o +
                        " so it's in the proper format."
                    ),
                    (e.sizes = i.playerSize = o)
                } else
                  C.logError(
                    'Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.'
                  ),
                    delete e.mediaTypes.video.playerSize
            }
            if (t && t.native) {
              var a = t.native
              a.image &&
                a.image.sizes &&
                !Array.isArray(a.image.sizes) &&
                (C.logError(
                  'Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.'
                ),
                delete e.mediaTypes.native.image.sizes),
                a.image &&
                  a.image.aspect_ratios &&
                  !Array.isArray(a.image.aspect_ratios) &&
                  (C.logError(
                    'Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.'
                  ),
                  delete e.mediaTypes.native.image.aspect_ratios),
                a.icon &&
                  a.icon.sizes &&
                  !Array.isArray(a.icon.sizes) &&
                  (C.logError(
                    'Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.'
                  ),
                  delete e.mediaTypes.native.icon.sizes)
            }
          }),
          e
        )
      }),
      (h.callBids = function(e, t, r, i, o, a) {
        if (t.length) {
          var n = t.reduce(
              function(e, t) {
                return (
                  e[Number(void 0 !== t.src && t.src === w.S2S.SRC)].push(t), e
                )
              },
              [[], []]
            ),
            d = b(n, 2),
            u = d[0],
            s = d[1]
          if (s.length) {
            var c = (0, S.ajaxBuilder)(
                a,
                o
                  ? { request: o.request.bind(null, 's2s'), done: o.done }
                  : void 0
              ),
              f = N.bidders,
              l = B[N.adapter],
              g = s[0].tid,
              p = s[0].adUnitsS2SCopy
            if (l) {
              var v = { tid: g, ad_units: p }
              if (v.ad_units.length) {
                var y = s.map(function(e) {
                    return (e.start = (0, E.timestamp)()), i
                  }),
                  m = v.ad_units.reduce(function(e, t) {
                    return e.concat(
                      (t.bids || []).reduce(function(e, t) {
                        return e.concat(t.bidder)
                      }, [])
                    )
                  }, [])
                C.logMessage(
                  'CALLING S2S HEADER BIDDERS ==== ' +
                    f
                      .filter(function(e) {
                        return (0, T.default)(m, e)
                      })
                      .join(',')
                ),
                  s.forEach(function(e) {
                    O.emit(w.EVENTS.BID_REQUESTED, e)
                  }),
                  l.callBids(
                    v,
                    s,
                    r,
                    function() {
                      return y.forEach(function(e) {
                        return e()
                      })
                    },
                    c
                  )
              }
            }
          }
          u.forEach(function(e) {
            e.start = (0, E.timestamp)()
            var t = B[e.bidderCode]
            C.logMessage('CALLING BIDDER ======= ' + e.bidderCode),
              O.emit(w.EVENTS.BID_REQUESTED, e)
            var n = ((e.doneCbCallCount = 0), S.ajaxBuilder)(
              a,
              o
                ? { request: o.request.bind(null, e.bidderCode), done: o.done }
                : void 0
            )
            t.callBids(e, r, i, n)
          })
        } else
          C.logWarn(
            'callBids executed with no bidRequests.  Were they filtered by labels or sizing?'
          )
      }),
      (h.videoAdapters = []),
      (h.registerBidAdapter = function(e, t) {
        var n = (2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : {}
          ).supportedMediaTypes,
          r = void 0 === n ? [] : n
        e && t
          ? 'function' == typeof e.callBids
            ? ((B[t] = e),
              (0, T.default)(r, 'video') && h.videoAdapters.push(t),
              (0, T.default)(r, 'native') && v.nativeAdapters.push(t))
            : C.logError(
                'Bidder adaptor error for bidder code: ' +
                  t +
                  'bidder must implement a callBids() function'
              )
          : C.logError('bidAdaptor or bidderCode not specified')
      }),
      (h.aliasBidAdapter = function(t, e) {
        var n, r
        if (void 0 === B[e]) {
          var i = B[t]
          if (void 0 === i) {
            var o = A.config.getConfig('s2sConfig'),
              a = o && o.bidders
            a && (0, T.default)(a, e)
              ? (h.aliasRegistry[e] = t)
              : C.logError(
                  'bidderCode "' + t + '" is not an existing bidder.',
                  'adaptermanager.aliasBidAdapter'
                )
          } else
            try {
              var d = void 0,
                u = ((n = t),
                (r = []),
                (0, T.default)(h.videoAdapters, n) && r.push('video'),
                (0, T.default)(v.nativeAdapters, n) && r.push('native'),
                r)
              if (i.constructor.prototype != Object.prototype)
                (d = new i.constructor()).setBidderCode(e)
              else {
                var s = i.getSpec()
                ;(d = (0, c.newBidder)(g({}, s, { code: e }))),
                  (h.aliasRegistry[e] = t)
              }
              this.registerBidAdapter(d, e, { supportedMediaTypes: u })
            } catch (e) {
              C.logError(
                t + ' bidder does not currently support aliasing.',
                'adaptermanager.aliasBidAdapter'
              )
            }
        } else
          C.logMessage('alias name "' + e + '" has been already specified.')
      }),
      (h.registerAnalyticsAdapter = function(e) {
        var t = e.adapter,
          n = e.code
        t && n
          ? 'function' == typeof t.enableAnalytics
            ? ((t.code = n), (r[n] = t))
            : C.logError(
                'Prebid Error: Analytics adaptor error for analytics "' +
                  n +
                  '"\n        analytics adapter must implement an enableAnalytics() function'
              )
          : C.logError(
              'Prebid Error: analyticsAdapter or analyticsCode not specified'
            )
      }),
      (h.enableAnalytics = function(e) {
        C.isArray(e) || (e = [e]),
          C._each(e, function(e) {
            var t = r[e.provider]
            t
              ? t.enableAnalytics(e)
              : C.logError(
                  'Prebid Error: no analytics adapter found in registry for\n        ' +
                    e.provider +
                    '.'
                )
          })
      }),
      (h.getBidAdapter = function(e) {
        return B[e]
      }),
      (h.setS2STestingModule = function(e) {
        R = e
      }),
      (h.callTimedOutBidders = function(t, n, r) {
        ;(n = n.map(function(e) {
          return (
            (e.params = C.getUserConfiguredParams(t, e.adUnitCode, e.bidder)),
            (e.timeout = r),
            e
          )
        })),
          (n = C.groupBy(n, 'bidder')),
          Object.keys(n).forEach(function(e) {
            i(e, 'onTimeout', n[e])
          })
      }),
      (h.callBidWonBidder = function(e, t, n) {
        ;(t.params = C.getUserConfiguredParams(n, t.adUnitCode, t.bidder)),
          i(e, 'onBidWon', t)
      })
  },
  9: function(e, t, n) {
    'use strict'
    var d,
      r,
      i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        },
      u = n(0),
      o = n(4),
      a = Array.prototype.slice,
      s = Array.prototype.push,
      c = u._map(o.EVENTS, function(e) {
        return e
      }),
      f = o.EVENT_ID_PATHS,
      l = []
    e.exports = ((d = {}),
    ((r = {}).on = function(e, t, n) {
      if (((i = e), u.contains(c, i))) {
        var r = d[e] || { que: [] }
        n ? ((r[n] = r[n] || { que: [] }), r[n].que.push(t)) : r.que.push(t),
          (d[e] = r)
      } else u.logError('Wrong event name : ' + e + ' Valid event names :' + c)
      var i
    }),
    (r.emit = function(e) {
      !(function(e, t) {
        u.logMessage('Emitting event for: ' + e)
        var n = t[0] || {},
          r = n[f[e]],
          i = d[e] || { que: [] },
          o = u._map(i, function(e, t) {
            return t
          }),
          a = []
        l.push({ eventType: e, args: n, id: r }),
          r && u.contains(o, r) && s.apply(a, i[r].que),
          s.apply(a, i.que),
          u._each(a, function(e) {
            if (e)
              try {
                e.apply(null, t)
              } catch (e) {
                u.logError('Error executing handler:', 'events.js', e)
              }
          })
      })(e, a.call(arguments, 1))
    }),
    (r.off = function(e, n, r) {
      var i = d[e]
      u.isEmpty(i) ||
        (u.isEmpty(i.que) && u.isEmpty(i[r])) ||
        (r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que))) ||
        (r
          ? u._each(i[r].que, function(e) {
              var t = i[r].que
              e === n && t.splice(u.indexOf.call(t, e), 1)
            })
          : u._each(i.que, function(e) {
              var t = i.que
              e === n && t.splice(u.indexOf.call(t, e), 1)
            }),
        (d[e] = i))
    }),
    (r.get = function() {
      return d
    }),
    (r.getEvents = function() {
      var n = []
      return (
        u._each(l, function(e) {
          var t = i({}, e)
          n.push(t)
        }),
        n
      )
    }),
    r)
  },
})
pbjsChunk(
  [149],
  {
    145: function(e, r, t) {
      t(146), (e.exports = t(147))
    },
    146: function(e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.spec = void 0)
      var n =
          Object.assign ||
          function(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r]
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          },
        i = u(
          [
            '//',
            '/pubapi/3.0/',
            '/',
            '/',
            '/',
            '/ADTECH;v=2;cmd=bid;cors=yes;alias=',
            ';misc=',
            ';',
            '',
          ],
          [
            '//',
            '/pubapi/3.0/',
            '/',
            '/',
            '/',
            '/ADTECH;v=2;cmd=bid;cors=yes;alias=',
            ';misc=',
            ';',
            '',
          ]
        ),
        a = u(['//', '/bidRequest?'], ['//', '/bidRequest?']),
        o = u(
          ['dcn=', '&pos=', '&cmd=bid', ''],
          ['dcn=', '&pos=', '&cmd=bid', '']
        ),
        s = (function(e) {
          {
            if (e && e.__esModule) return e
            var r = {}
            if (null != e)
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
            return (r.default = e), r
          }
        })(t(0)),
        d = t(1),
        c = t(2)
      function u(e, r) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
        )
      }
      var p = { AOL: 'aol', ONEMOBILE: 'onemobile', ONEDISPLAY: 'onedisplay' },
        l = { GET: 'display-get' },
        m = { GET: 'mobile-get', POST: 'mobile-post' },
        f = { TAG: 'iframe', TYPE: 'iframe' },
        b = { TAG: 'img', TYPE: 'image' },
        v = E(
          i,
          'host',
          'network',
          'placement',
          'pageid',
          'sizeid',
          'alias',
          'misc',
          'dynamicParams'
        ),
        h = E(a, 'host'),
        g = E(o, 'dcn', 'pos', 'dynamicParams'),
        O = {
          us: 'adserver-us.adtech.advertising.com',
          eu: 'adserver-eu.adtech.advertising.com',
          as: 'adserver-as.adtech.advertising.com',
        },
        y = 1
      function E(o) {
        for (
          var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1;
          r < e;
          r++
        )
          t[r - 1] = arguments[r]
        return function() {
          for (var e = arguments.length, i = Array(e), r = 0; r < e; r++)
            i[r] = arguments[r]
          var n = i[i.length - 1] || {},
            a = [o[0]]
          return (
            t.forEach(function(e, r) {
              var t = s.isInteger(e) ? i[e] : n[e]
              a.push(t, o[r + 1])
            }),
            a.join('')
          )
        }
      }
      function P(e) {
        return e === p.AOL || e === p.ONEMOBILE
      }
      function T(e) {
        if (P(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
          var r = e.params.imp[0]
          return (
            r.id &&
            r.tagid &&
            ((r.banner && r.banner.w && r.banner.h) ||
              (r.video &&
                r.video.mimes &&
                r.video.minduration &&
                r.video.maxduration))
          )
        }
      }
      function I(e) {
        return P(e.bidder) && e.params.dcn && e.params.pos
      }
      function R(e) {
        return (
          ((r = e.bidder) === p.AOL || r === p.ONEDISPLAY) &&
          e.params.placement &&
          e.params.network
        )
        var r
      }
      var S = (r.spec = {
        code: p.AOL,
        aliases: [p.ONEMOBILE, p.ONEDISPLAY],
        supportedMediaTypes: [c.BANNER],
        isBidRequestValid: function(e) {
          return R(e) || (I((r = e)) || T(r))
          var r
        },
        buildRequests: function(e, r) {
          var i = this,
            n = r ? r.gdprConsent : null
          return e.map(function(e) {
            var r,
              t = I((r = e)) ? m.GET : T(r) ? m.POST : R(r) ? l.GET : void 0
            if (t) return i.formatBidRequest(t, e, n)
          })
        },
        interpretResponse: function(e, r) {
          var t = e.body
          if (t) {
            var i = this._parseBidResponse(t, r)
            if (i) return i
          } else s.logError('Empty bid response', r.bidderCode, t)
        },
        getUserSyncs: function(e, r) {
          var t = !s.isEmpty(r) && r[0].body
          return t && t.ext && t.ext.pixels
            ? this.parsePixelItems(t.ext.pixels)
            : []
        },
        formatBidRequest: function(e, r, t) {
          var i = void 0
          switch (e) {
            case l.GET:
              i = {
                url: this.buildMarketplaceUrl(r, t),
                method: 'GET',
                ttl: 60,
              }
              break
            case m.GET:
              i = {
                url: this.buildOneMobileGetUrl(r, t),
                method: 'GET',
                ttl: 3600,
              }
              break
            case m.POST:
              i = {
                url: this.buildOneMobileBaseUrl(r),
                method: 'POST',
                ttl: 3600,
                data: this.buildOpenRtbRequestData(r, t),
                options: {
                  contentType: 'application/json',
                  customHeaders: { 'x-openrtb-version': '2.2' },
                },
              }
          }
          return (
            (i.bidderCode = r.bidder),
            (i.bidId = r.bidId),
            (i.userSyncOn = r.params.userSyncOn),
            i
          )
        },
        buildMarketplaceUrl: function(e, r) {
          var t = e.params,
            i = t.server,
            n = t.region || 'us',
            a = void 0
          return (
            O.hasOwnProperty(n) ||
              (s.logWarn("Unknown region '" + n + "' for AOL bidder."),
              (n = 'us')),
            (a = i || O[n]),
            (t.region = n),
            v({
              host: a,
              network: t.network,
              placement: parseInt(t.placement),
              pageid: t.pageId || 0,
              sizeid: t.sizeId || 0,
              alias: t.alias || s.getUniqueIdentifierStr(),
              misc: new Date().getTime(),
              dynamicParams: this.formatMarketplaceDynamicParams(t, r),
            })
          )
        },
        buildOneMobileGetUrl: function(e, r) {
          var t = e.params,
            i = t.dcn,
            n = t.pos,
            a = t.ext,
            o = this.buildOneMobileBaseUrl(e)
          if (i && n) {
            var s = this.formatOneMobileDynamicParams(a, r)
            o += g({ dcn: i, pos: n, dynamicParams: s })
          }
          return o
        },
        buildOneMobileBaseUrl: function(e) {
          return h({ host: e.params.host || 'hb.nexage.com' })
        },
        formatMarketplaceDynamicParams: function() {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = arguments[1],
            t = {}
          e.bidFloor && (t.bidfloor = e.bidFloor),
            n(t, this.formatKeyValues(e.keyValues)),
            n(t, this.formatConsentData(r))
          var i = ''
          return (
            s._each(t, function(e, r) {
              i += r + '=' + encodeURIComponent(e) + ';'
            }),
            i
          )
        },
        formatOneMobileDynamicParams: function() {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = arguments[1]
          this.isSecureProtocol() && (e.secure = y),
            n(e, this.formatConsentData(r))
          var t = ''
          return (
            s._each(e, function(e, r) {
              t += '&' + r + '=' + encodeURIComponent(e)
            }),
            t
          )
        },
        buildOpenRtbRequestData: function(e, r) {
          var t = { id: e.params.id, imp: e.params.imp }
          return (
            this.isConsentRequired(r) &&
              ((t.regs = { ext: { gdpr: y } }),
              r.consentString &&
                (t.user = { ext: { consent: r.consentString } })),
            t
          )
        },
        isConsentRequired: function(e) {
          return !(!e || !e.gdprApplies)
        },
        formatKeyValues: function(e) {
          var t = {}
          return (
            s._each(e, function(e, r) {
              t['kv' + r] = e
            }),
            t
          )
        },
        formatConsentData: function(e) {
          var r = {}
          return (
            this.isConsentRequired(e) &&
              ((r.gdpr = y),
              e.consentString && (r.euconsent = e.consentString)),
            r
          )
        },
        parsePixelItems: function(e) {
          var i = /\w*(?=\s)/,
            n = /src=("|')(.*?)\1/,
            a = []
          if (e) {
            var r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi)
            r &&
              r.forEach(function(e) {
                var r = e.match(i)[0],
                  t = e.match(n)[2]
                r &&
                  r &&
                  a.push({ type: r === b.TAG ? b.TYPE : f.TYPE, url: t })
              })
          }
          return a
        },
        _parseBidResponse: function(e, r) {
          var t = void 0
          try {
            t = e.seatbid[0].bid[0]
          } catch (e) {
            return
          }
          var i = void 0
          if (t.ext && t.ext.encp) i = t.ext.encp
          else if (null === (i = t.price) || isNaN(i))
            return void s.logError('Invalid price in bid response', p.AOL, bid)
          return {
            bidderCode: r.bidderCode,
            requestId: r.bidId,
            ad: t.adm,
            cpm: i,
            width: t.w,
            height: t.h,
            creativeId: t.crid || 0,
            pubapiId: e.id,
            currency: e.cur || 'USD',
            dealId: t.dealid,
            netRevenue: !0,
            ttl: r.ttl,
          }
        },
        isOneMobileBidder: P,
        isSecureProtocol: function() {
          return 'https:' === document.location.protocol
        },
      })
      ;(0, d.registerBidder)(S)
    },
    147: function(e, r) {},
  },
  [145]
)
pbjsChunk(
  [1],
  {
    192: function(n, t, e) {
      n.exports = e(193)
    },
    193: function(n, t, e) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.staticConsentData = t.allowAuction = t.consentTimeout = t.userCMP = void 0),
        (t.requestBidsHook = w),
        (t.resetConsentData = function() {
          ;(v = void 0), a.gdprDataHandler.setConsentData(null)
        }),
        (t.setConfig = x)
      var u = (function(n) {
          {
            if (n && n.__esModule) return n
            var t = {}
            if (null != n)
              for (var e in n)
                Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e])
            return (t.default = n), t
          }
        })(e(0)),
        o = e(3),
        a = e(8),
        i = s(e(7)),
        l = s(e(194))
      function s(n) {
        return n && n.__esModule ? n : { default: n }
      }
      var r = 'iab',
        c = 1e4,
        d = !0,
        f = (t.userCMP = void 0),
        g = (t.consentTimeout = void 0),
        p = (t.allowAuction = void 0),
        m = (t.staticConsentData = void 0),
        v = void 0,
        C = {
          iab: function(n, t, s) {
            var e = (function() {
                var t = {}
                function e() {
                  t.getConsentData && t.getVendorConsents && n(t, s)
                }
                return {
                  consentDataCallback: function(n) {
                    ;(t.getConsentData = n), e()
                  },
                  vendorConsentsCallback: function(n) {
                    ;(t.getVendorConsents = n), e()
                  },
                }
              })(),
              r = {},
              o = void 0
            try {
              o = window.__cmp || u.getWindowTop().__cmp
            } catch (n) {}
            if (u.isFn(o))
              o('getConsentData', null, e.consentDataCallback),
                o('getVendorConsents', null, e.vendorConsentsCallback)
            else if (
              window.$sf &&
              window.$sf.ext &&
              'function' == typeof window.$sf.ext.cmp
            )
              c('getConsentData', e.consentDataCallback),
                c('getVendorConsents', e.vendorConsentsCallback)
            else {
              for (var a = window, i = void 0; !i; ) {
                try {
                  a.frames.__cmpLocator && (i = a)
                } catch (n) {}
                if (a === window.top) break
                a = a.parent
              }
              if (!i) return t('CMP not found.', s)
              d('getConsentData', i, e.consentDataCallback),
                d('getVendorConsents', i, e.vendorConsentsCallback)
            }
            function c(o, a) {
              var n = s.adUnits,
                t = 1,
                e = 1
              if (Array.isArray(n) && 0 < n.length) {
                var i = u.getAdUnitSizes(n[0])
                ;(t = i[0][0]), (e = i[0][1])
              }
              window.$sf.ext.register(t, e, function(n, t) {
                if ('cmpReturn' === n) {
                  var e =
                    'getConsentData' === o
                      ? t.vendorConsentData
                      : t.vendorConsents
                  a(e)
                }
              }),
                window.$sf.ext.cmp(o)
            }
            function d(n, i, t) {
              function e(n) {
                var t =
                  'string' == typeof n.data &&
                  (0, l.default)(n.data, 'cmpReturn')
                    ? JSON.parse(n.data)
                    : n.data
                if (t.__cmpReturn && t.__cmpReturn.callId) {
                  var e = t.__cmpReturn
                  void 0 !== r[e.callId] &&
                    (r[e.callId](e.returnValue, e.success), delete r[e.callId])
                }
              }
              ;(window.__cmp = function(n, t, e) {
                var o = Math.random() + '',
                  a = { __cmpCall: { command: n, parameter: t, callId: o } }
                ;(r[o] = e), i.postMessage(a, '*')
              }),
                window.addEventListener('message', e, !1),
                window.__cmp(n, null, function(n) {
                  window.removeEventListener('message', e, !1), t(n)
                })
            }
          },
          static: function(n, t, e) {
            n(m, e)
          },
        }
      function w(n, t) {
        var e = {
          context: this,
          args: arguments,
          nextFn: t,
          adUnits: n.adUnits || pbjs.adUnits,
          bidsBackHandler: n.bidsBackHandler,
          haveExited: !1,
          timer: null,
        }
        return v
          ? y(null, e)
          : (0, i.default)(Object.keys(C), f)
          ? (C[f].call(this, b, D, e),
            void (
              e.haveExited ||
              (0 === g
                ? b(void 0, e)
                : (e.timer = setTimeout(
                    function(n) {
                      D('CMP workflow exceeded timeout threshold.', n)
                    }.bind(null, e),
                    g
                  )))
            ))
          : (u.logWarn(
              'CMP framework (' +
                f +
                ') is not a supported framework.  Aborting consentManagement module and resuming auction.'
            ),
            e.nextFn.apply(e.context, e.args))
      }
      function b(n, t) {
        var e = n && n.getConsentData && n.getConsentData.gdprApplies
        'boolean' == typeof e &&
        (!0 !== e ||
          (u.isStr(n.getConsentData.consentData) &&
            u.isPlainObject(n.getVendorConsents) &&
            1 < Object.keys(n.getVendorConsents).length))
          ? (clearTimeout(t.timer), h(n), y(null, t))
          : D('CMP returned unexpected value during lookup process.', t, n)
      }
      function D(n, t, e) {
        clearTimeout(t.timer), p && h(void 0), y(n, t, e)
      }
      function h(n) {
        ;(v = {
          consentString: n ? n.getConsentData.consentData : void 0,
          vendorData: n ? n.getVendorConsents : void 0,
          gdprApplies: n ? n.getConsentData.gdprApplies : void 0,
        }),
          a.gdprDataHandler.setConsentData(v)
      }
      function y(n, t, e) {
        if (!1 === t.haveExited) {
          t.haveExited = !0
          var o = t.context,
            a = t.args,
            i = t.nextFn
          n
            ? p
              ? (u.logWarn(
                  n +
                    ' Resuming auction without consent data as per consentManagement config.',
                  e
                ),
                i.apply(o, a))
              : (u.logError(
                  n + ' Canceling auction as per consentManagement config.',
                  e
                ),
                'function' == typeof t.bidsBackHandler
                  ? t.bidsBackHandler()
                  : u.logError('Error executing bidsBackHandler'))
            : i.apply(o, a)
        }
      }
      function x(n) {
        u.isStr(n.cmpApi)
          ? (t.userCMP = f = n.cmpApi)
          : ((t.userCMP = f = r),
            u.logInfo(
              'consentManagement config did not specify cmp.  Using system default setting (' +
                r +
                ').'
            )),
          u.isNumber(n.timeout)
            ? (t.consentTimeout = g = n.timeout)
            : ((t.consentTimeout = g = c),
              u.logInfo(
                'consentManagement config did not specify timeout.  Using system default setting (' +
                  c +
                  ').'
              )),
          'boolean' == typeof n.allowAuctionWithoutConsent
            ? (t.allowAuction = p = n.allowAuctionWithoutConsent)
            : ((t.allowAuction = p = d),
              u.logInfo(
                'consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (' +
                  d +
                  ').'
              )),
          u.logInfo('consentManagement module has been activated...'),
          'static' === f &&
            (u.isPlainObject(n.consentData)
              ? ((t.staticConsentData = m = n.consentData),
                (t.consentTimeout = g = 0))
              : u.logError(
                  "consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters."
                )),
          pbjs.requestBids.addHook(w, 50)
      }
      o.config.getConfig('consentManagement', function(n) {
        return x(n.consentManagement)
      })
    },
    194: function(n, t, e) {
      e(195), (n.exports = e(13).String.includes)
    },
    195: function(n, t, e) {
      'use strict'
      var o = e(14),
        a = e(196),
        i = 'includes'
      o(o.P + o.F * e(198)(i), 'String', {
        includes: function(n) {
          return !!~a(this, n, i).indexOf(
            n,
            1 < arguments.length ? arguments[1] : void 0
          )
        },
      })
    },
    196: function(n, t, e) {
      var o = e(197),
        a = e(24)
      n.exports = function(n, t, e) {
        if (o(t)) throw TypeError('String#' + e + " doesn't accept regex!")
        return String(a(n))
      }
    },
    197: function(n, t, e) {
      var o = e(15),
        a = e(23),
        i = e(25)('match')
      n.exports = function(n) {
        var t
        return o(n) && (void 0 !== (t = n[i]) ? !!t : 'RegExp' == a(n))
      }
    },
    198: function(n, t, e) {
      var o = e(25)('match')
      n.exports = function(t) {
        var e = /./
        try {
          '/./'[t](e)
        } catch (n) {
          try {
            return (e[o] = !1), !'/./'[t](e)
          } catch (n) {}
        }
        return !0
      }
    },
  },
  [192]
)
pbjsChunk(
  [123],
  {
    242: function(e, t, i) {
      i(243), (e.exports = i(244))
    },
    243: function(e, t, i) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.spec = void 0)
      var l = (function(e) {
          {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e)
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            return (t.default = e), t
          }
        })(i(0)),
        r = i(1),
        n = i(2),
        g = i(3)
      var d = (t.spec = {
        code: 'emx_digital',
        supportedMediaTypes: [n.BANNER],
        isBidRequestValid: function(e) {
          return !!e.params.tagid
        },
        buildRequests: function(e, t) {
          var i = l.getTopWindowLocation(),
            r = i.host,
            n = i.href,
            d = i.protocol,
            o = {},
            a = [],
            s = t.auctionId,
            p = g.config.getConfig('bidderTimeout'),
            u = Date.now(),
            c = location.protocol + '//hb.emxdgt.com?t=' + p + '&ts=' + u
          return (
            l._each(e, function(e) {
              var t = String(l.getBidIdParameter('tagid', e.params)),
                i = l.getBidIdParameter('bidfloor', e.params) || 0,
                r = {
                  id: e.bidId,
                  tid: e.transactionId,
                  tagid: t,
                  secure: 'https:' === d ? 1 : 0,
                  banner: {
                    format: e.sizes.map(function(e) {
                      return { w: e[0], h: e[1] }
                    }),
                    w: e.sizes[0][0],
                    h: e.sizes[0][1],
                  },
                }
              0 < i && (r.bidfloor = i), a.push(r)
            }),
            (o = { id: s, imp: a, site: { domain: r, page: n } }),
            t.gdprConsent &&
              (o.regs = {
                ext: { gdpr: !0 === t.gdprConsent.gdprApplies ? 1 : 0 },
              }),
            t.gdprConsent &&
              t.gdprConsent.gdprApplies &&
              (o.user = { ext: { consent: t.gdprConsent.consentString } }),
            {
              method: 'POST',
              url: c,
              data: JSON.stringify(o),
              options: { withCredentials: !0 },
            }
          )
        },
        interpretResponse: function(e) {
          var t = [],
            i = e.body || {}
          return (
            i.seatbid &&
              0 < i.seatbid.length &&
              i.seatbid[0].bid &&
              i.seatbid.forEach(function(e) {
                ;(e = e.bid[0]),
                  t.push({
                    requestId: e.id,
                    cpm: e.price,
                    width: e.w,
                    height: e.h,
                    creativeId: e.crid || e.id,
                    dealId: e.dealid || null,
                    currency: 'USD',
                    netRevenue: !0,
                    mediaType: n.BANNER,
                    ad: decodeURIComponent(e.adm),
                    ttl: e.ttl,
                  })
              }),
            t
          )
        },
        getUserSyncs: function(e) {
          var t = []
          return (
            e.iframeEnabled &&
              t.push({
                type: 'iframe',
                url: '//biddr.brealtime.com/check.html',
              }),
            e.pixelEnabled &&
              t.push({ type: 'image', url: '//edba.brealtime.com/' }),
            t
          )
        },
      })
      ;(0, r.registerBidder)(d)
    },
    244: function(e, t) {},
  },
  [242]
)
pbjsChunk(
  [78],
  {
    389: function(e, r, t) {
      t(390), (e.exports = t(391))
    },
    390: function(e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.spec = void 0)
      var o = function(e, r) {
        if (Array.isArray(e)) return e
        if (Symbol.iterator in Object(e))
          return (function(e, r) {
            var t = [],
              n = !0,
              i = !1,
              a = void 0
            try {
              for (
                var s, o = e[Symbol.iterator]();
                !(n = (s = o.next()).done) &&
                (t.push(s.value), !r || t.length !== r);
                n = !0
              );
            } catch (e) {
              ;(i = !0), (a = e)
            } finally {
              try {
                !n && o.return && o.return()
              } finally {
                if (i) throw a
              }
            }
            return t
          })(e, r)
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        )
      }
      r.resetBoPixel = function() {
        f = !0
      }
      var d = t(3),
        n = t(1),
        c = (function(e) {
          {
            if (e && e.__esModule) return e
            var r = {}
            if (null != e)
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
            return (r.default = e), r
          }
        })(t(0)),
        u = t(18),
        p = t(2),
        m = t(11)
      var i = [p.BANNER, p.VIDEO],
        l = 'openx',
        a = 'hb_pb',
        s = '2.1.5',
        f = !0
      var h = (r.spec = {
        code: l,
        supportedMediaTypes: i,
        isBidRequestValid: function(e) {
          return c.deepAccess(e, 'mediaTypes.banner') && e.params.delDomain
            ? !!e.params.unit ||
                0 < c.deepAccess(e, 'mediaTypes.banner.sizes.length')
            : !(!e.params.unit || !e.params.delDomain)
        },
        buildRequests: function(e, a) {
          if (0 === e.length) return []
          var s = [],
            r = e.reduce(
              function(e, r) {
                var t
                return (
                  (t = r),
                  c.deepAccess(t, 'mediaTypes.video') || t.mediaType === p.VIDEO
                    ? e[0].push(r)
                    : e[1].push(r),
                  e
                )
              },
              [[], []]
            ),
            t = o(r, 2),
            n = t[0],
            i = t[1]
          return (
            0 < i.length &&
              s.push(
                (function(e, r) {
                  var t = [],
                    n = !1,
                    i = b(e, r),
                    a = c._map(e, function(e) {
                      return e.params.unit
                    })
                  ;(i.aus = c
                    ._map(e, function(e) {
                      return c.parseSizesInput(e.sizes).join(',')
                    })
                    .join('|')),
                    (i.divIds = c
                      ._map(e, function(e) {
                        return encodeURIComponent(e.adUnitCode)
                      })
                      .join(',')),
                    a.some(function(e) {
                      return e
                    }) && (i.auid = a.join(','))
                  e.some(function(e) {
                    return e.params.doNotTrack
                  }) && (i.ns = 1)
                  e.some(function(e) {
                    return e.params.coppa
                  }) && (i.tfcd = 1)
                  e.forEach(function(i) {
                    if (i.params.customParams) {
                      var e = c._map(
                          Object.keys(i.params.customParams),
                          function(e) {
                            return (
                              (r = e),
                              (t = i.params.customParams),
                              (n = t[r]),
                              c.isArray(n) && (n = n.join(',')),
                              (r.toLowerCase() + '=' + n.toLowerCase())
                                .replace('+', '.')
                                .replace('/', '_')
                            )
                            var r, t, n
                          }
                        ),
                        r = window.btoa(e.join('&'))
                      ;(n = !0), t.push(r)
                    } else t.push('')
                  }),
                    n && (i.tps = t.join(','))
                  var s = [],
                    o = !1
                  e.forEach(function(e) {
                    e.params.customFloor
                      ? (s.push(1e3 * e.params.customFloor), (o = !0))
                      : s.push(0)
                  }),
                    o && (i.aumfs = s.join(','))
                  return {
                    method: 'GET',
                    url: '//' + e[0].params.delDomain + '/w/1.0/arj',
                    data: i,
                    payload: { bids: e, startTime: new Date() },
                  }
                })(i, a)
              ),
            0 < n.length &&
              n.forEach(function(e) {
                var r, t, n, i
                s.push(
                  ((t = a),
                  (n = '//' + (r = e).params.delDomain + '/v/1.0/avjp'),
                  (i = (function(e, r) {
                    var t = b([e], r),
                      n = c.deepAccess(e, 'params.video') || {},
                      i = c.deepAccess(e, 'mediaTypes.video.context'),
                      a = c.deepAccess(e, 'mediaTypes.video.playerSize'),
                      s = void 0,
                      o = void 0
                    c.isArray(e.sizes) &&
                    2 === e.sizes.length &&
                    !c.isArray(e.sizes[0])
                      ? ((s = parseInt(e.sizes[0], 10)),
                        (o = parseInt(e.sizes[1], 10)))
                      : c.isArray(e.sizes) &&
                        c.isArray(e.sizes[0]) &&
                        2 === e.sizes[0].length
                      ? ((s = parseInt(e.sizes[0][0], 10)),
                        (o = parseInt(e.sizes[0][1], 10)))
                      : c.isArray(a) &&
                        2 === a.length &&
                        ((s = parseInt(a[0], 10)), (o = parseInt(a[1], 10)))
                    Object.keys(n).forEach(function(e) {
                      'openrtb' === e
                        ? ((n[e].w = s || n[e].w),
                          (n[e].v = o || n[e].v),
                          (t[e] = JSON.stringify(n[e])))
                        : e in t || 'url' === e || (t[e] = n[e])
                    }),
                      (t.auid = e.params.unit),
                      (t.vwd = s || n.vwd),
                      (t.vht = o || n.vht),
                      'outstream' === i && (t.vos = '101')
                    n.mimes && (t.vmimes = n.mimes)
                    return t
                  })(r, t)),
                  {
                    method: 'GET',
                    url: n,
                    data: i,
                    payload: { bid: r, startTime: new Date() },
                  })
                )
              }),
            s
          )
        },
        interpretResponse: function(e, r) {
          var t = e.body
          return (/avjp$/.test(r.url) ? p.VIDEO : p.BANNER) === p.VIDEO
            ? (function(e, r) {
                var t = r.bid,
                  n = r.startTime,
                  i = []
                if (void 0 !== e && '' !== e.vastUrl && '' !== e.pub_rev) {
                  var a = (0, m.parse)(e.vastUrl).search || {},
                    s = {}
                  ;(s.requestId = t.bidId),
                    (s.bidderCode = l),
                    (s.ttl = 300),
                    (s.netRevenue = !0),
                    (s.currency = e.currency),
                    (s.cpm = Number(e.pub_rev) / 1e3),
                    (s.width = e.width),
                    (s.height = e.height),
                    (s.creativeId = e.adid),
                    (s.vastUrl = e.vastUrl),
                    (s.mediaType = p.VIDEO),
                    (e.ph = a.ph),
                    (e.colo = a.colo),
                    (e.ts = a.ts),
                    i.push(s),
                    g(p.VIDEO, e, n)
                }
                return i
              })(t, r.payload)
            : (function(e, r) {
                for (
                  var t = r.bids, n = r.startTime, i = e.ads.ad, a = [], s = 0;
                  s < i.length;
                  s++
                ) {
                  var o = i[s],
                    d = parseInt(o.idx, 10),
                    c = {}
                  if (((c.requestId = t[d].bidId), o.pub_rev)) {
                    c.cpm = Number(o.pub_rev) / 1e3
                    var u = o.creative[0]
                    u && ((c.width = u.width), (c.height = u.height)),
                      (c.creativeId = u.id),
                      (c.ad = o.html),
                      o.deal_id && (c.dealId = o.deal_id),
                      (c.ttl = 300),
                      (c.netRevenue = !0),
                      (c.currency = o.currency),
                      o.tbd && (c.tbd = o.tbd),
                      (c.ts = o.ts),
                      a.push(c),
                      g(p.BANNER, o, n)
                  }
                }
                return a
              })(t, r.payload)
        },
        getUserSyncs: function(e, r) {
          if (e.iframeEnabled)
            return [
              {
                type: 'iframe',
                url:
                  c.deepAccess(r, '0.body.ads.pixels') ||
                  c.deepAccess(r, '0.body.pixels') ||
                  '//u.openx.net/w/1.0/pd',
              },
            ]
        },
        transformBidParams: function(e, r) {
          return c.convertTypes({ unit: 'string', customFloor: 'number' }, e)
        },
      })
      function v(r) {
        for (var e in r) r.hasOwnProperty(e) && (r[e] || delete r[e])
        return c
          ._map(Object.keys(r), function(e) {
            return e + '=' + r[e]
          })
          .join('&')
      }
      function b(e, r) {
        var t = c.inIframe(),
          n = void 0
        if (
          ((n = {
            ju: d.config.getConfig('pageUrl') || c.getTopWindowUrl(),
            jr: c.getTopWindowReferrer(),
            ch: document.charSet || document.characterSet,
            res: screen.width + 'x' + screen.height + 'x' + screen.colorDepth,
            ifr: t,
            tz: new Date().getTimezoneOffset(),
            tws: (function(e) {
              var r = void 0,
                t = void 0,
                n = window,
                i = document,
                a = i.documentElement,
                s = void 0
              if (e) {
                try {
                  ;(n = window.top), (i = window.top.document)
                } catch (e) {
                  return
                }
                ;(a = i.documentElement),
                  (s = i.body),
                  (r = n.innerWidth || a.clientWidth || s.clientWidth),
                  (t = n.innerHeight || a.clientHeight || s.clientHeight)
              } else
                (a = i.documentElement),
                  (r = n.innerWidth || a.clientWidth),
                  (t = n.innerHeight || a.clientHeight)
              return r + 'x' + t
            })(t),
            be: 1,
            bc: e[0].params.bc || a + '_' + s,
            dddid: c
              ._map(e, function(e) {
                return e.transactionId
              })
              .join(','),
            nocache: new Date().getTime(),
          }),
          c.deepAccess(r, 'gdprConsent'))
        ) {
          var i = r.gdprConsent
          void 0 !== i.consentString && (n.gdpr_consent = i.consentString),
            void 0 !== i.gdprApplies && (n.gdpr = i.gdprApplies ? 1 : 0),
            'iab' === d.config.getConfig('consentManagement.cmpApi') &&
              (n.x_gdpr_f = 1)
        }
        return (
          e[0].crumbs && e[0].crumbs.pubcid && (n.pubcid = e[0].crumbs.pubcid),
          n
        )
      }
      function g(e, r, t) {
        if (f) {
          f = !1
          var n = d.config.getConfig('bidderTimeout'),
            i = void 0
          window.PREBID_TIMEOUT && (n = Math.min(window.PREBID_TIMEOUT, n))
          var a = {
            bd: +new Date() - t,
            bp: r.pub_rev,
            br: '0',
            bs: c.getTopWindowLocation().hostname,
            bt: n,
            ts: r.ts,
          }
          if (((a.br = a.bt < a.bd ? 't' : 'p'), e === p.VIDEO)) {
            var s = (0, m.parse)(r.colo)
            ;(a.ph = r.ph), (i = '//' + s.hostname + '/w/1.0/bo?' + v(a))
          } else {
            var o = c
              .deepAccess(r, 'creative.0.tracking.impression')
              .match(/([^?]+\/)ri\?/)
            o && 1 < o.length && (i = o[1] + 'bo?' + v(a))
          }
          i && u.userSync.registerSync('image', l, i)
        }
      }
      ;(0, n.registerBidder)(h)
    },
    391: function(e, r) {},
  },
  [389]
)
pbjsChunk(
  [62],
  {
    439: function(e, t, n) {
      n(440), (e.exports = n(441))
    },
    440: function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.spec = void 0)
      var o = (function(e) {
          {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            return (t.default = e), t
          }
        })(n(0)),
        r = n(1)
      var s = {
          TITLE_LEN: 100,
          DESCR_LEN: 200,
          SPONSORED_BY_LEN: 50,
          IMG_MIN: 150,
          ICON_MIN: 50,
        },
        a = (t.spec = {
          code: 'pulsepoint',
          aliases: ['pulseLite', 'pulsepointLite'],
          supportedMediaTypes: ['banner', 'native'],
          isBidRequestValid: function(e) {
            return !!(e && e.params && e.params.cp && e.params.ct)
          },
          buildRequests: function(e, t) {
            var n,
              r,
              a,
              i,
              u = {
                id: e[0].bidderRequestId,
                imp: e.map(function(e) {
                  return {
                    id: (t = e).bidId,
                    banner: ((n = t),
                    (r = (function(e) {
                      if (e.params.cf) {
                        var t = e.params.cf.toUpperCase().split('X'),
                          n = parseInt(e.params.cw || t[0], 10),
                          r = parseInt(e.params.ch || t[1], 10)
                        return [n, r]
                      }
                      return [1, 1]
                    })(n)),
                    n.nativeParams ? null : { w: r[0], h: r[1] }),
                    native: (function(e) {
                      if (e.nativeParams) {
                        var t = []
                        return (
                          c(
                            t,
                            ((n = t.length + 1),
                            (r = e.nativeParams.title),
                            (a = s.TITLE_LEN),
                            r
                              ? {
                                  id: n,
                                  required: r.required ? 1 : 0,
                                  title: { len: r.len || a },
                                }
                              : null)
                          ),
                          c(
                            t,
                            d(t.length + 1, e.nativeParams.body, 2, s.DESCR_LEN)
                          ),
                          c(
                            t,
                            d(
                              t.length + 1,
                              e.nativeParams.sponsoredBy,
                              1,
                              s.SPONSORED_BY_LEN
                            )
                          ),
                          c(
                            t,
                            p(
                              t.length + 1,
                              e.nativeParams.icon,
                              1,
                              s.ICON_MIN,
                              s.ICON_MIN
                            )
                          ),
                          c(
                            t,
                            p(
                              t.length + 1,
                              e.nativeParams.image,
                              3,
                              s.IMG_MIN,
                              s.IMG_MIN
                            )
                          ),
                          { request: JSON.stringify({ assets: t }), ver: '1.1' }
                        )
                      }
                      var n, r, a
                      return null
                    })(t),
                    tagid: t.params.ct.toString(),
                  }
                  var t, n, r
                }),
                site: ((n = e),
                (r = n && 0 < n.length ? n[0].params.cp : '0'),
                n[0].params.app
                  ? null
                  : {
                      publisher: { id: r.toString() },
                      ref: (function() {
                        try {
                          return window.top.document.referrer
                        } catch (e) {
                          return document.referrer
                        }
                      })(),
                      page: o.getTopWindowLocation().href,
                    }),
                app: (function(e) {
                  var t = e && 0 < e.length ? e[0].params.cp : '0',
                    n = e[0].params.app
                  if (n)
                    return {
                      publisher: { id: t.toString() },
                      bundle: n.bundle,
                      storeurl: n.storeUrl,
                      domain: n.domain,
                    }
                  return null
                })(e),
                device: {
                  ua: navigator.userAgent,
                  language:
                    navigator.language ||
                    navigator.browserLanguage ||
                    navigator.userLanguage ||
                    navigator.systemLanguage,
                },
              }
            return (
              (i = u),
              (a = t) &&
                a.gdprConsent &&
                ((i.regs = {
                  ext: { gdpr: a.gdprConsent.gdprApplies ? 1 : 0 },
                }),
                (i.user = { ext: { consent: a.gdprConsent.consentString } })),
              {
                method: 'POST',
                url: '//bid.contextweb.com/header/ortb',
                data: JSON.stringify(u),
              }
            )
          },
          interpretResponse: function(e, t) {
            return (function(e, t) {
              var a = {},
                i = {}
              ;(t = t.body),
                l(e.data).imp.forEach(function(e) {
                  a[e.id] = e
                }),
                t &&
                  t.seatbid.forEach(function(e) {
                    return e.bid.forEach(function(e) {
                      i[e.impid] = e
                    })
                  })
              var u = []
              return (
                Object.keys(a).forEach(function(e) {
                  if (i[e]) {
                    var t = {
                      requestId: e,
                      cpm: i[e].price,
                      creative_id: e,
                      creativeId: e,
                      adId: e,
                      ttl: 20,
                      netRevenue: !0,
                      currency: 'USD',
                    }
                    a[e].native
                      ? ((t.native = (function(e, t) {
                          if (e.native) {
                            var n = l(t.adm),
                              r = {}
                            if (n && n.native && n.native.assets)
                              return (
                                n.native.assets.forEach(function(e) {
                                  ;(r.title = e.title ? e.title.text : r.title),
                                    (r.body =
                                      e.data && 2 === e.data.type
                                        ? e.data.value
                                        : r.body),
                                    (r.sponsoredBy =
                                      e.data && 1 === e.data.type
                                        ? e.data.value
                                        : r.sponsoredBy),
                                    (r.image =
                                      e.img && 3 === e.img.type
                                        ? e.img.url
                                        : r.image),
                                    (r.icon =
                                      e.img && 1 === e.img.type
                                        ? e.img.url
                                        : r.icon)
                                }),
                                n.native.link &&
                                  (r.clickUrl = encodeURIComponent(
                                    n.native.link.url
                                  )),
                                (r.impressionTrackers = n.native.imptrackers),
                                r
                              )
                          }
                          return null
                        })(a[e], i[e])),
                        (t.mediaType = 'native'))
                      : ((t.ad = i[e].adm),
                        (t.width = a[e].banner.w),
                        (t.height = a[e].banner.h)),
                      (n = t),
                      (r = i[e]) &&
                        r.ext &&
                        ((n.ttl = r.ext.ttl || n.ttl),
                        (n.currency = r.ext.currency || n.currency),
                        (n.netRevenue =
                          null != r.ext.netRevenue
                            ? r.ext.netRevenue
                            : n.netRevenue)),
                      u.push(t)
                  }
                  var n, r
                }),
                u
              )
            })(t, e)
          },
          getUserSyncs: function(e) {
            return e.iframeEnabled
              ? [{ type: 'iframe', url: '//bh.contextweb.com/visitormatch' }]
              : e.pixelEnabled
              ? [
                  {
                    type: 'image',
                    url: '//bh.contextweb.com/visitormatch/prebid',
                  },
                ]
              : void 0
          },
          transformBidParams: function(e, t) {
            return o.convertTypes(
              { cf: 'string', cp: 'number', ct: 'number' },
              e
            )
          },
        })
      function c(e, t) {
        t && e.push(t)
      }
      function p(e, t, n, r, a) {
        return t
          ? {
              id: e,
              required: t.required ? 1 : 0,
              img: { type: n, wmin: t.wmin || r, hmin: t.hmin || a },
            }
          : null
      }
      function d(e, t, n, r) {
        return t
          ? {
              id: e,
              required: t.required ? 1 : 0,
              data: { type: n, len: t.len || r },
            }
          : null
      }
      function l(e) {
        try {
          if (e) return JSON.parse(e)
        } catch (e) {
          o.logError('pulsepointLite.safeParse', 'ERROR', e)
        }
        return null
      }
      ;(0, r.registerBidder)(a)
    },
    441: function(e, t) {},
  },
  [439]
)
pbjsChunk(
  [56],
  {
    460: function(e, t, n) {
      n(461), (e.exports = n(462))
    },
    461: function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.spec = void 0)
      var u =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              },
        o = n(1),
        r = n(2)
      var i = (t.spec = new function() {
        function S(e, t) {
          for (var n = 0; n < t.length; n++)
            if (t[n].params && t[n].params[e]) return t[n].params[e]
        }
        ;(this.code = 'rhythmone'),
          (this.supportedMediaTypes = [r.VIDEO, r.BANNER]),
          (this.isBidRequestValid = function(e) {
            return !0
          }),
          (this.getUserSyncs = function(e, t, n) {
            var o = [],
              r = []
            for (var i in C) o.push(i), r.push(S('placementId', [C[i]]))
            var s = {
                doc_version: 1,
                doc_type: 'Prebid Audit',
                placement_id: r
                  .join(',')
                  .replace(/[,]+/g, ',')
                  .replace(/^,|,$/g, ''),
              },
              a =
                'undefined' != typeof window
                  ? window
                  : { document: { location: { href: '' } } },
              p = []
            ;(s.ancestor_origins = a.document.location.hostname),
              (s.popped = null !== a.opener ? 1 : 0),
              (s.framed = a.top === a ? 0 : 1)
            try {
              s.url = a.top.document.location.href.toString()
            } catch (e) {
              s.url = a.document.location.href.toString()
            }
            try {
              ;(s.prebid_version = '1.30.0'),
                (s.prebid_timeout = config.getConfig('bidderTimeout'))
            } catch (e) {}
            for (var d in ((s.response_ms = Date.now() - c),
            (s.placement_codes = o.join(',')),
            (s.bidder_version = j),
            n &&
              ((s.gdpr_consent = n.consentString),
              (s.gdpr = 'boolean' != typeof n.gdprApplies || n.gdprApplies)),
            s))
              p.push(
                encodeURIComponent(d) +
                  '=' +
                  encodeURIComponent(
                    'object' === u(s[d]) ? JSON.stringify(s[d]) : s[d]
                  )
              )
            if ((p.sort(), e.pixelEnabled))
              return [
                {
                  type: 'image',
                  url: '//hbevents.1rx.io/audit?' + p.join('&'),
                },
              ]
          })
        var C = {},
          d = this,
          j = '1.0.1.0',
          c = Date.now()
        ;(this.buildRequests = function(f, v) {
          var m = S('placementId', f)
          if (void 0 === m || f.length < 1) return []
          ;(c = Date.now()), (C = {})
          var g = [],
            b = 'undefined' != typeof window ? window : {}
          function y(e, t, n) {
            t instanceof Array && (t = t.join(n || ',')),
              void 0 !== t &&
                g.push(encodeURIComponent(e) + '=' + encodeURIComponent(t))
          }
          function w(e, t) {
            try {
              return e()
            } catch (e) {}
            return t
          }
          return (
            y(
              'domain',
              w(function() {
                return b.document.location.hostname
              }, '')
            ),
            y(
              'url',
              w(function() {
                var t
                try {
                  t = b.top.document.location.href.toString()
                } catch (e) {
                  t = b.document.location.href.toString()
                }
                return t
              }, '')
            ),
            [
              {
                method: 'GET',
                url: (function() {
                  var e =
                      S('endpoint', f) ||
                      '//tag.1rx.io/rmp/{placementId}/0/{path}?z={zone}',
                    t = S('zone', f) || '1r',
                    n = S('path', f) || 'mvo'
                  ;(e = (e = (e = e.replace(/\{placementId\}/i, m)).replace(
                    /\{zone\}/i,
                    t
                  )).replace(/\{path\}/i, n)),
                    y(
                      'title',
                      w(function() {
                        return b.top.document.title
                      }, '')
                    ),
                    y('dsh', b.screen ? b.screen.height : ''),
                    y('dsw', b.screen ? b.screen.width : ''),
                    y('tz', new Date().getTimezoneOffset()),
                    y(
                      'dtype',
                      /(ios|ipod|ipad|iphone|android)/i.test(
                        b.navigator.userAgent
                      )
                        ? 1
                        : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(
                            b.navigator.userAgent
                          )
                        ? 3
                        : 2
                    ),
                    y(
                      'flash',
                      w(function() {
                        var e = b.navigator,
                          t = e.plugins,
                          n = e.mimeTypes,
                          o = 'application/x-shockwave-flash',
                          r = b.ActiveXObject
                        if (
                          t &&
                          t['Shockwave Flash'] &&
                          n &&
                          n[o] &&
                          n[o].enabledPlugin
                        )
                          return 1
                        if (r)
                          try {
                            if (
                              new b.ActiveXObject(
                                'ShockwaveFlash.ShockwaveFlash'
                              )
                            )
                              return 1
                          } catch (e) {}
                        return 0
                      }, 0)
                    )
                  var o = [],
                    r = [],
                    i = [],
                    s = [],
                    a = 0,
                    p = [],
                    d = /(^v|(\.0)+$)/gi
                  for (
                    y(
                      'hbv',
                      b.pbjs.version.replace(d, '') + ',' + j.replace(d, '')
                    );
                    a < f.length;
                    a++
                  ) {
                    var c = [],
                      u = [],
                      l = f[a].params || {}
                    ;(C[f[a].adUnitCode || f[a].placementCode] = f[a]),
                      0 < f[a].sizes.length &&
                        'number' == typeof f[a].sizes[0] &&
                        (f[a].sizes = [f[a].sizes])
                    for (var h = 0; h < f[a].sizes.length; h++)
                      u.push(f[a].sizes[h][0]), c.push(f[a].sizes[h][1])
                    p.push(f[a].adUnitCode || f[a].placementCode),
                      o.push(c.join('|')),
                      r.push(u.join('|')),
                      s.push(
                        f[a].mediaTypes && f[a].mediaTypes.video ? 'v' : 'd'
                      ),
                      i.push(l.floor || 0)
                  }
                  return (
                    y('imp', p),
                    y('w', r),
                    y('h', o),
                    y('floor', i),
                    y('t', s),
                    v &&
                      v.gdprConsent &&
                      (y('gdpr_consent', v.gdprConsent.consentString),
                      y(
                        'gdpr',
                        'boolean' != typeof v.gdprConsent.gdprApplies ||
                          v.gdprConsent.gdprApplies
                      )),
                    (e += '&' + g.join('&') + '&')
                  )
                })(),
              },
            ]
          )
        }),
          (this.interpretResponse = function(e) {
            var t = e.body || [],
              n = [],
              o = 0
            if (t.seatbid) {
              var r = []
              for (o = 0; o < t.seatbid.length; o++)
                for (var i = 0; i < t.seatbid[o].bid.length; i++)
                  r.push(t.seatbid[o].bid[i])
              t = r
            }
            for (o = 0; o < t.length; o++) {
              var s = t[o],
                a = C[s.impid],
                p = {
                  requestId: a.bidId,
                  bidderCode: d.code,
                  cpm: parseFloat(s.price),
                  width: s.w,
                  height: s.h,
                  creativeId: s.crid,
                  currency: 'USD',
                  netRevenue: !0,
                  ttl: 1e3,
                }
              a.mediaTypes && a.mediaTypes.video
                ? ((p.vastUrl = s.nurl), (p.mediaType = 'video'), (p.ttl = 1e4))
                : (p.ad = s.adm),
                n.push(p)
            }
            return n
          })
      }())
      ;(0, o.registerBidder)(i)
    },
    462: function(e, t) {},
  },
  [460]
)
pbjsChunk(
  [40],
  {
    512: function(e, r, t) {
      t(513), (e.exports = t(514))
    },
    513: function(e, r, t) {
      'use strict'
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r._isInbounds = r.spec = void 0)
      var h = function(e, r) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e))
            return (function(e, r) {
              var t = [],
                n = !0,
                i = !1,
                s = void 0
              try {
                for (
                  var o, a = e[Symbol.iterator]();
                  !(n = (o = a.next()).done) &&
                  (t.push(o.value), !r || t.length !== r);
                  n = !0
                );
              } catch (e) {
                ;(i = !0), (s = e)
              } finally {
                try {
                  !n && a.return && a.return()
                } finally {
                  if (i) throw s
                }
              }
              return t
            })(e, r)
          throw new TypeError(
            'Invalid attempt to destructure non-iterable instance'
          )
        },
        s =
          Object.assign ||
          function(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r]
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            return e
          }
      r._getPlatform = v
      var n,
        i = t(1),
        y = t(0),
        o = t(2),
        a = t(10),
        _ = (n = a) && n.__esModule ? n : { default: n },
        d = t(3)
      function u(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        )
      }
      var c = (0, y.generateUUID)(),
        p = (r.spec = {
          code: 'sonobi',
          supportedMediaTypes: [o.BANNER, o.VIDEO],
          isBidRequestValid: function(e) {
            return !(
              !e.params ||
              (!e.params.ad_unit && !e.params.placement_id) ||
              (!e.params.sizes && !e.sizes)
            )
          },
          buildRequests: function(e, r) {
            var t = e.map(function(e) {
                var r = (function(e) {
                  if (e.params.ad_unit) return e.params.ad_unit
                  return e.params.placement_id
                })(e)
                return /^[\/]?[\d]+[[\/].+[\/]?]?$/.test(r)
                  ? u(
                      {},
                      (r = '/' === r.charAt(0) ? r : '/' + r) + '|' + e.bidId,
                      '' + l(e) + f(e)
                    )
                  : /^[0-9a-fA-F]{20}$/.test(r) && 20 === r.length
                  ? u({}, e.bidId, r + '|' + l(e) + f(e))
                  : void (0, y.logError)(
                      'The ad unit code or Sonobi Placement id for slot ' +
                        e.bidId +
                        ' is invalid'
                    )
              }),
              n = {}
            t.forEach(function(e) {
              s(n, e)
            })
            var i = {
              key_maker: JSON.stringify(n),
              ref: (0, y.getTopWindowLocation)().href,
              s: (0, y.generateUUID)(),
              pv: c,
              vp: v(),
              lib_name: 'prebid',
              lib_v: '1.30.0',
              us: 0,
            }
            return (
              d.config.getConfig('userSync') &&
                d.config.getConfig('userSync').syncsPerBidder &&
                (i.us = d.config.getConfig('userSync').syncsPerBidder),
              e[0].params.hfa && (i.hfa = e[0].params.hfa),
              e[0].params.referrer && (i.ref = e[0].params.referrer),
              r &&
                r.gdprConsent &&
                ((i.gdpr = r.gdprConsent.gdprApplies ? 'true' : 'false'),
                r.gdprConsent.consentString &&
                  (i.consent_string = r.gdprConsent.consentString)),
              (0, y.isEmpty)(n)
                ? null
                : {
                    method: 'GET',
                    url: 'https://apex.go.sonobi.com/trinity.json',
                    withCredentials: !0,
                    data: i,
                    bidderRequests: e,
                  }
            )
          },
          interpretResponse: function(e, r) {
            var v = r.bidderRequests,
              m = e.body,
              g = []
            return (
              0 === Object.keys(m.slots).length ||
                Object.keys(m.slots).forEach(function(e) {
                  var r = e.split('|').slice(-1)[0],
                    t = (0, _.default)(v, function(e) {
                      return e.bidId === r
                    }),
                    n = (0, y.deepAccess)(t, 'mediaTypes.video'),
                    i = t.mediaType || (n ? 'video' : null),
                    s = I(i),
                    o = m.slots[e]
                  if (o.sbi_aid && o.sbi_mouse && o.sbi_size) {
                    var a = o.sbi_size.split('x'),
                      d = h(a, 2),
                      u = d[0],
                      c = void 0 === u ? 1 : u,
                      p = d[1],
                      l = void 0 === p ? 1 : p,
                      f = {
                        requestId: r,
                        cpm: Number(o.sbi_mouse),
                        width: Number(c),
                        height: Number(l),
                        ad: s(m.sbi_dc, o.sbi_aid),
                        ttl: 500,
                        creativeId: o.sbi_crid || o.sbi_aid,
                        aid: o.sbi_aid,
                        netRevenue: !0,
                        currency: 'USD',
                      }
                    o.sbi_dozer && (f.dealId = o.sbi_dozer)
                    var b = o.sbi_ct
                    !b ||
                      ('video' !== b && 'outstream' !== b) ||
                      ((f.mediaType = 'video'),
                      (f.vastUrl = s(m.sbi_dc, o.sbi_aid)),
                      delete f.ad,
                      delete f.width,
                      delete f.height),
                      g.push(f)
                  }
                }),
              g
            )
          },
          getUserSyncs: function(e, r) {
            var t = []
            try {
              e.pixelEnabled &&
                r[0].body.sbi_px.forEach(function(e) {
                  t.push({ type: e.type, url: e.url })
                })
            } catch (e) {}
            return t
          },
        })
      function l(e) {
        return e.params.sizes
          ? (0, y.parseSizesInput)(e.params.sizes).join(',')
          : (0, y.parseSizesInput)(e.sizes).join(',')
      }
      function f(e) {
        return e.params.floor ? '|f=' + e.params.floor : ''
      }
      var I = function(t) {
        return function(e, r) {
          return 'video' === t
            ? 'https://' +
                e +
                'apex.go.sonobi.com/vast.xml?vid=' +
                r +
                '&ref=' +
                encodeURIComponent((0, y.getTopWindowLocation)().href)
            : '<script type="text/javascript" src="' +
                ('https://' +
                  e +
                  'apex.go.sonobi.com/sbi.js?aid=' +
                  r +
                  '&as=null&ref=' +
                  encodeURIComponent((0, y.getTopWindowLocation)().href)) +
                '"></script>'
        }
      }
      var b = (r._isInbounds = function() {
        var t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : window
        return function() {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            r =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : Number.MAX_SAFE_INTEGER
          return t.innerWidth >= e && t.innerWidth < r
        }
      })
      function v() {
        var e =
            0 < arguments.length && void 0 !== arguments[0]
              ? arguments[0]
              : window,
          r = b(e),
          t = 992,
          n = 768
        return r(0, 768) ? 'mobile' : r(n, t) ? 'tablet' : 'desktop'
      }
      ;(0, i.registerBidder)(p)
    },
    514: function(e, r) {},
  },
  [512]
)
pbjsChunk(
  [38],
  {
    518: function(e, t, r) {
      r(519), (e.exports = r(520))
    },
    519: function(e, t, r) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.spec = void 0)
      var o = (function(e) {
          {
            if (e && e.__esModule) return e
            var t = {}
            if (null != e)
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            return (t.default = e), t
          }
        })(r(0)),
        i = r(1),
        a = r(2),
        s = r(4)
      var n = (t.spec = {
        code: 'sovrn',
        supportedMediaTypes: [a.BANNER],
        isBidRequestValid: function(e) {
          return !(
            !e.params.tagid ||
            isNaN(parseFloat(e.params.tagid)) ||
            !isFinite(e.params.tagid)
          )
        },
        buildRequests: function(e, t) {
          var r = o.getTopWindowLocation(),
            i = [],
            n = void 0
          o._each(e, function(e) {
            ;(n = n || o.getBidIdParameter('iv', e.params)),
              i.push({
                id: e.bidId,
                banner: { w: 1, h: 1 },
                tagid: String(o.getBidIdParameter('tagid', e.params)),
                bidfloor: o.getBidIdParameter('bidfloor', e.params),
              })
          })
          var a = {
            id: o.getUniqueIdentifierStr(),
            imp: i,
            site: {
              domain: r.host,
              page: r.host + r.pathname + r.search + r.hash,
            },
          }
          t &&
            t.gdprConsent &&
            ((a.regs = { ext: { gdpr: +t.gdprConsent.gdprApplies } }),
            (a.user = { ext: { consent: t.gdprConsent.consentString } }))
          var d = '//ap.lijit.com/rtb/bid?src=' + s.REPO_AND_VERSION
          return (
            n && (d += '&iv=' + n),
            {
              method: 'POST',
              url: d,
              data: JSON.stringify(a),
              options: { contentType: 'text/plain' },
            }
          )
        },
        interpretResponse: function(e) {
          var t = e.body,
            r = t.id,
            i = t.seatbid,
            n = []
          return (
            r &&
              i &&
              0 < i.length &&
              i[0].bid &&
              0 < i[0].bid.length &&
              i[0].bid.map(function(e) {
                n.push({
                  requestId: e.impid,
                  cpm: parseFloat(e.price),
                  width: parseInt(e.w),
                  height: parseInt(e.h),
                  creativeId: e.crid || e.id,
                  dealId: e.dealid || null,
                  currency: 'USD',
                  netRevenue: !0,
                  mediaType: a.BANNER,
                  ad: decodeURIComponent(e.adm + '<img src="' + e.nurl + '">'),
                  ttl: 60,
                })
              }),
            n
          )
        },
        getUserSyncs: function(e, t, r) {
          if (t && 0 !== t.length && e.iframeEnabled) {
            var i = t
                .filter(function(e) {
                  return e.body && e.body.ext && e.body.ext.iid
                })
                .map(function(e) {
                  return e.body.ext.iid
                }),
              n = ''
            if (
              (r &&
                r.gdprApplies &&
                'string' == typeof r.consentString &&
                (n = r.consentString),
              i[0])
            )
              return [
                {
                  type: 'iframe',
                  url:
                    '//ap.lijit.com/beacon?informer=' +
                    i[0] +
                    '&gdpr_consent=' +
                    n,
                },
              ]
          }
          return []
        },
      })
      ;(0, i.registerBidder)(n)
    },
    520: function(e, t) {},
  },
  [518]
)
pbjs.processQueue()
