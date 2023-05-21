function ready(e) {
    "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(e, 0) : document.addEventListener("DOMContentLoaded", e)
}
function requiredConsentsGiven() {
    return $(".js-consents-form").find(":checkbox[required]").length === $(".js-consents-form").find(":checkbox[required]:checked").length ? $(".js-consents-form").closest("form").find("#submit").prop("disabled", !1) : $(".js-consents-form").closest("form").find("#submit").prop("disabled", !0)
}
function createPagedownImageDialog(e, t, n) {
    doc = window.document,
    title = "Select image",
    inputLabel = "Image",
    inputPlaceholder = "",
    inputHelp = "",
    dialog = doc.createElement("div"),
    dialog.className = "modal fade",
    dialog.style.display = "none",
    dialog.id = "imageDialog";
    var i = doc.createElement("div");
    i.className = "modal-dialog",
    dialog.appendChild(i);
    var r = doc.createElement("div");
    r.className = "modal-content",
    i.appendChild(r);
    var o = doc.createElement("div");
    o.className = "modal-header",
    o.innerHTML = '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <h3 class="modal-title">' + title + "</h3>",
    r.appendChild(o);
    var s = doc.createElement("div");
    s.className = "modal-body",
    r.appendChild(s);
    var a = doc.createElement("div");
    a.className = "modal-footer",
    r.appendChild(a);
    var l = doc.createElement("form");
    l.onsubmit = function() {
        return close(!1)
    }
    ,
    s.appendChild(l);
    var c = doc.createElement("div");
    c.className = "form-group",
    l.appendChild(c);
    var u = doc.createElement("label");
    u.htmlFor = "url-" + (new Date).getTime(),
    u.innerHTML = inputLabel,
    c.appendChild(u),
    input = doc.createElement("select"),
    input.className = "form-control",
    c.appendChild(input);
    var d = doc.createElement("span");
    d.className = "help-block",
    d.innerHTML = inputHelp || "",
    c.appendChild(d);
    var h = doc.createElement("button");
    h.className = "btn btn-primary",
    h.type = "button",
    $(h).attr("data-dismiss", "modal"),
    h.onclick = function() {
        t($(input).val())
    }
    ,
    h.innerHTML = "OK";
    var f = doc.createElement("button");
    for (var p in f.className = "btn btn-default",
    f.type = "button",
    $(f).attr("data-dismiss", "modal"),
    f.innerHTML = "Cancel",
    a.appendChild(h),
    a.appendChild(f),
    dropzone = e.querySelector(".xui-mdupload-zone").dropzone,
    upload_id = e.dataset.uploadId,
    input = dialog.querySelector("select"),
    dropzone.getAcceptedFiles().reverse().forEach((function(e) {
        var t = doc.createElement("option");
        t.value = "upload://" + upload_id + "/" + xui.upload.sanitize(e.name),
        t.appendChild(document.createTextNode(e.name + " (new)")),
        input.appendChild(t)
    }
    )),
    n) {
        var m = doc.createElement("option");
        m.value = p,
        m.appendChild(document.createTextNode(n[p])),
        input.appendChild(m)
    }
    return dialog
}
function _possibleConstructorReturn(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function __guard__(e, t) {
    return null != e ? t(e) : void 0
}
function __guardMethod__(e, t, n) {
    return null != e && "function" == typeof e[t] ? n(e, t) : void 0
}
function initSelect2VideoStreams() {
    $("select.js-video-stream").select2({
        allowClear: !0,
        placeholder: $(this).parent().data("placeholder"),
        ajax: {
            url: "/streams",
            data: function(e) {
                return {
                    q: e.term
                }
            },
            processResults: function(e) {
                return {
                    results: e
                }
            },
            dataType: "json",
            delay: 500
        }
    }),
    $("select.js-video-stream").on("select2:open", (function() {
        setTimeout((function(e) {
            var t = e.data("select2").dropdown.$search || e.data("select2").selection.$search;
            t.val(e.data("stream-prefix")),
            t.trigger("input")
        }
        ), 0, $(this))
    }
    ))
}
function copyTextToClipboard(e) {
    textArea = document.createElement("textarea"),
    textArea.style.position = "fixed",
    textArea.style.top = 0,
    textArea.style.left = 0,
    textArea.style.width = "2em",
    textArea.style.height = "2em",
    textArea.style.padding = 0,
    textArea.style.border = "none",
    textArea.style.outline = "none",
    textArea.style.boxShadow = "none",
    textArea.style.background = "transparent",
    textArea.value = e,
    document.body.appendChild(textArea),
    textArea.select();
    try {
        document.execCommand("copy")
    } catch (e) {
        console.log("Oops, unable to copy")
    }
    return document.body.removeChild(textArea)
}
function flow_component_dates(e) {
    var t;
    t = $(e).find(".flow-component").css("left").indexOf("px") > -1 ? parseInt($($(e).find(".flow-component")).css("left").replace("px", "")) : 0,
    e.append('<div class="js-date" style="position: absolute; padding-right: 5px; font-size: 10px; right: ' + (15 - t) + "px; border-right: 2px solid " + e.children().first().css("background-color") + '">' + e.data("deadline") + "</div>"),
    e.append('<div class="js-date" style="position: absolute; padding-left: 5px; font-size: 10px; top: -14px; left: ' + (2 + t) + "px; border-left: 2px solid " + e.children().first().css("background-color") + '">' + e.data("unlock") + "</div>")
}
function build_assessment_flow(e, t) {
    $(".pa-flow").length && $.each(e, (function(e, n) {
        $(n).parent().css("left", -15 * e + "px"),
        $(n).parent().css("z-index", 1e3 - e),
        $(n).parent().css("margin-top", t + "px"),
        0 != e ? $(n).css("padding-left", "25px") : $(n).css("padding-left", "10px"),
        $(n).siblings().each((function(e, t) {
            $(t).remove()
        }
        )),
        flow_component_dates($(n).parent())
    }
    ))
}
function humanFileSize(e, t) {
    var n = t ? 1e3 : 1024;
    if (e < n)
        return e + " B";
    var i = t ? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
      , r = -1;
    do {
        e /= n,
        ++r
    } while (e >= n);
    return e.toFixed(1) + " " + i[r]
}
function register_deletion_handler(e, t, n) {
    $(e).submit((function(i) {
        return i.preventDefault(),
        xuiSwal.fire({
            title: $(this).data("confirm-title"),
            text: $(this).data("confirm-text"),
            icon: "warning",
            confirmButtonText: I18n.t("peer_assessment.files.confirm_button"),
            cancelButtonText: I18n.t("global.cancel")
        }).then((function(i) {
            i.value && ($("#submission_form_submit_button").prop("disabled", !0).addClass("disabled"),
            $(e).find("button").prop("disabled", !0),
            $.post($(e).attr("action"), $(e).serialize(), (function(i) {
                i.success && $($(e).parents()[1]).remove(),
                $(e).find("button").prop("disabled", !1),
                $("#submission_form_submit_button").prop("disabled", !1).removeClass("disabled"),
                n && t.removeFile(n)
            }
            ), "json"))
        }
        )),
        !1
    }
    ))
}
function submit_form_force_events(e) {
    var t = e.ownerDocument.createElement("input");
    t.style.display = "none",
    t.type = "submit",
    e.appendChild(t).click(),
    e.removeChild(t)
}
function draw_result(e, t, n) {
    var i = document.getElementById(e).getContext("2d")
      , r = 200
      , o = 200
      , s = {
        x: r / 2,
        y: o / 2
    }
      , a = t
      , l = 0
      , c = Math.random() * Math.PI * 2
      , u = function() {
        (c += 0) >= 2 * Math.PI && (c -= 2 * Math.PI),
        Math.abs(l - a) < .001 && (l = a),
        l != a && (l += (a - l) / 50),
        i.clearRect(0, 0, r, o),
        i.save(),
        i.translate(s.x, s.y),
        i.font = "2em OpenSansRegular",
        i.textAlign = "center",
        i.textBaseline = "middle",
        i.fillText(n, 0, 0),
        i.lineWidth = 20,
        i.beginPath();
        var e = i.createLinearGradient(0, 0, 0, o);
        e.addColorStop(0, "#9dc420"),
        e.addColorStop(1, "#5e7725"),
        i.strokeStyle = e,
        i.stroke(),
        i.beginPath(),
        i.arc(0, 0, 70, c, 2 * Math.PI * l + c, !1),
        (e = i.createLinearGradient(0, 0, 0, o)).addColorStop(0, "#9dc420"),
        e.addColorStop(1, "#5e7725"),
        i.strokeStyle = e,
        i.stroke(),
        i.restore(),
        requestAnimFrame(u)
    };
    u()
}
function generateUUID() {
    var e = window.crypto || window.msCrypto;
    if (e && e.getRandomValues) {
        var t = new Uint8Array(16);
        return e.getRandomValues(t),
        t[6] = 15 & t[6] | 64,
        t[8] = 63 & t[8] | 128,
        _hexMap[t[0]] + _hexMap[t[1]] + _hexMap[t[2]] + _hexMap[t[3]] + "-" + _hexMap[t[4]] + _hexMap[t[5]] + "-" + _hexMap[t[6]] + _hexMap[t[7]] + "-" + _hexMap[t[8]] + _hexMap[t[9]] + "-" + _hexMap[t[10]] + _hexMap[t[11]] + _hexMap[t[12]] + _hexMap[t[13]] + _hexMap[t[14]] + _hexMap[t[15]]
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
        var t = 16 * Math.random() | 0;
        return ("x" === e ? t : 3 & t | 8).toString(16)
    }
    ))
}
function getClientID() {
    return "undefined" != typeof Storage ? (null == localStorage.getItem("client_id") && localStorage.setItem("client_id", generateUUID()),
    localStorage.getItem("client_id")) : null
}
var Markdown;
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = oe.type(e);
        return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t, n) {
        if (oe.isFunction(t))
            return oe.grep(e, (function(e, i) {
                return !!t.call(e, i, e) !== n
            }
            ));
        if (t.nodeType)
            return oe.grep(e, (function(e) {
                return e === t !== n
            }
            ));
        if ("string" == typeof t) {
            if (me.test(t))
                return oe.filter(t, e, n);
            t = oe.filter(t, e)
        }
        return oe.grep(e, (function(e) {
            return J.call(t, e) > -1 !== n
        }
        ))
    }
    function r(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = {};
        return oe.each(e.match(_e) || [], (function(e, n) {
            t[n] = !0
        }
        )),
        t
    }
    function s() {
        X.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s),
        oe.ready()
    }
    function a() {
        this.expando = oe.expando + a.uid++
    }
    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Te, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Se.test(n) ? oe.parseJSON(n) : n)
                } catch (e) {}
                Ce.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function c(e, t, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return oe.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (oe.cssNumber[t] ? "" : "px"), u = (oe.cssNumber[t] || "px" !== c && +l) && De.exec(oe.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3],
            n = n || [],
            u = +l || 1;
            do {
                u /= o = o || ".5",
                oe.style(e, t, u + c)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (u = +u || +l || 0,
        r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = r)),
        r
    }
    function u(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }
    function d(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            $e.set(e[n], "globalEval", !t || $e.get(t[n], "globalEval"))
    }
    function h(e, t, n, i, r) {
        for (var o, s, a, l, c, h, f = t.createDocumentFragment(), p = [], m = 0, g = e.length; m < g; m++)
            if ((o = e[m]) || 0 === o)
                if ("object" === oe.type(o))
                    oe.merge(p, o.nodeType ? [o] : o);
                else if (je.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                    a = (Pe.exec(o) || ["", ""])[1].toLowerCase(),
                    l = Le[a] || Le._default,
                    s.innerHTML = l[1] + oe.htmlPrefilter(o) + l[2],
                    h = l[0]; h--; )
                        s = s.lastChild;
                    oe.merge(p, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
        m = 0; o = p[m++]; )
            if (i && oe.inArray(o, i) > -1)
                r && r.push(o);
            else if (c = oe.contains(o.ownerDocument, o),
            s = u(f.appendChild(o), "script"),
            c && d(s),
            n)
                for (h = 0; o = s[h++]; )
                    Oe.test(o.type || "") && n.push(o);
        return f
    }
    function f() {
        return !0
    }
    function p() {
        return !1
    }
    function m() {
        try {
            return X.activeElement
        } catch (e) {}
    }
    function g(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            t)
                g(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = p;
        else if (!r)
            return e;
        return 1 === o && (s = r,
        r = function(e) {
            return oe().off(e),
            s.apply(this, arguments)
        }
        ,
        r.guid = s.guid || (s.guid = oe.guid++)),
        e.each((function() {
            oe.event.add(this, t, r, i, n)
        }
        ))
    }
    function v(e, t) {
        return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function b(e) {
        var t = Ue.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function w(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if ($e.hasData(e) && (o = $e.access(e),
            s = $e.set(t, o),
            c = o.events))
                for (r in delete s.handle,
                s.events = {},
                c)
                    for (n = 0,
                    i = c[r].length; n < i; n++)
                        oe.event.add(t, r, c[r][n]);
            Ce.hasData(e) && (a = Ce.access(e),
            l = oe.extend({}, a),
            Ce.set(t, l))
        }
    }
    function _(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ie.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function x(e, t, n, i) {
        t = Z.apply([], t);
        var r, o, s, a, l, c, d = 0, f = e.length, p = f - 1, m = t[0], g = oe.isFunction(m);
        if (g || f > 1 && "string" == typeof m && !ie.checkClone && He.test(m))
            return e.each((function(r) {
                var o = e.eq(r);
                g && (t[0] = m.call(this, r, o.html())),
                x(o, t, n, i)
            }
            ));
        if (f && (o = (r = h(t, e[0].ownerDocument, !1, e, i)).firstChild,
        1 === r.childNodes.length && (r = o),
        o || i)) {
            for (a = (s = oe.map(u(r, "script"), y)).length; d < f; d++)
                l = r,
                d !== p && (l = oe.clone(l, !0, !0),
                a && oe.merge(s, u(l, "script"))),
                n.call(e[d], l, d);
            if (a)
                for (c = s[s.length - 1].ownerDocument,
                oe.map(s, b),
                d = 0; d < a; d++)
                    l = s[d],
                    Oe.test(l.type || "") && !$e.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(Ye, "")))
        }
        return e
    }
    function k(e, t, n) {
        for (var i, r = t ? oe.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || oe.cleanData(u(i)),
            i.parentNode && (n && oe.contains(i.ownerDocument, i) && d(u(i, "script")),
            i.parentNode.removeChild(i));
        return e
    }
    function $(e, t) {
        var n = oe(t.createElement(e)).appendTo(t.body)
          , i = oe.css(n[0], "display");
        return n.detach(),
        i
    }
    function C(e) {
        var t = X
          , n = Be[e];
        return n || ("none" !== (n = $(e, t)) && n || ((t = (We = (We || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),
        t.close(),
        n = $(e, t),
        We.detach()),
        Be[e] = n),
        n
    }
    function S(e, t, n) {
        var i, r, o, s, a = e.style;
        return "" !== (s = (n = n || Xe(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)),
        n && !ie.pixelMarginRight() && Ve.test(s) && Ge.test(t) && (i = a.width,
        r = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = o),
        void 0 !== s ? s + "" : s
    }
    function T(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function E(e) {
        if (e in nt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; )
            if ((e = tt[n] + t)in nt)
                return e
    }
    function D(e, t, n) {
        var i = De.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function A(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
            "margin" === n && (s += oe.css(e, n + Ae[o], !0, r)),
            i ? ("content" === n && (s -= oe.css(e, "padding" + Ae[o], !0, r)),
            "margin" !== n && (s -= oe.css(e, "border" + Ae[o] + "Width", !0, r))) : (s += oe.css(e, "padding" + Ae[o], !0, r),
            "padding" !== n && (s += oe.css(e, "border" + Ae[o] + "Width", !0, r)));
        return s
    }
    function M(e, t, n) {
        var i = !0
          , r = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Xe(e)
          , s = "border-box" === oe.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = S(e, t, o)) < 0 || null == r) && (r = e.style[t]),
            Ve.test(r))
                return r;
            i = s && (ie.boxSizingReliable() || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + A(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }
    function I(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++)
            (i = e[s]).style && (o[s] = $e.get(i, "olddisplay"),
            n = i.style.display,
            t ? (o[s] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && Me(i) && (o[s] = $e.access(i, "olddisplay", C(i.nodeName)))) : (r = Me(i),
            "none" === n && r || $e.set(i, "olddisplay", r ? n : oe.css(i, "display"))));
        for (s = 0; s < a; s++)
            (i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function P(e, t, n, i, r) {
        return new P.prototype.init(e,t,n,i,r)
    }
    function O() {
        return e.setTimeout((function() {
            it = void 0
        }
        )),
        it = oe.now()
    }
    function L(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = Ae[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function j(e, t, n) {
        for (var i, r = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function N(e, t, n) {
        var i, r, o, s, a, l, c, u = this, d = {}, h = e.style, f = e.nodeType && Me(e), p = $e.get(e, "fxshow");
        for (i in n.queue || (null == (a = oe._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        u.always((function() {
            u.always((function() {
                a.unqueued--,
                oe.queue(e, "fx").length || a.empty.fire()
            }
            ))
        }
        ))),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
        "inline" === ("none" === (c = oe.css(e, "display")) ? $e.get(e, "olddisplay") || C(e.nodeName) : c) && "none" === oe.css(e, "float") && (h.display = "inline-block")),
        n.overflow && (h.overflow = "hidden",
        u.always((function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        }
        ))),
        t)
            if (r = t[i],
            ot.exec(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (f ? "hide" : "show")) {
                    if ("show" !== r || !p || void 0 === p[i])
                        continue;
                    f = !0
                }
                d[i] = p && p[i] || oe.style(e, i)
            } else
                c = void 0;
        if (oe.isEmptyObject(d))
            "inline" === ("none" === c ? C(e.nodeName) : c) && (h.display = c);
        else
            for (i in p ? "hidden"in p && (f = p.hidden) : p = $e.access(e, "fxshow", {}),
            o && (p.hidden = !f),
            f ? oe(e).show() : u.done((function() {
                oe(e).hide()
            }
            )),
            u.done((function() {
                var t;
                for (t in $e.remove(e, "fxshow"),
                d)
                    oe.style(e, t, d[t])
            }
            )),
            d)
                s = j(f ? p[i] : 0, i, u),
                i in p || (p[i] = s.start,
                f && (s.end = s.start,
                s.start = "width" === i || "height" === i ? 1 : 0))
    }
    function F(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (r = t[i = oe.camelCase(n)],
            o = e[n],
            oe.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            (s = oe.cssHooks[i]) && "expand"in s)
                for (n in o = s.expand(o),
                delete e[i],
                o)
                    n in e || (e[n] = o[n],
                    t[n] = r);
            else
                t[i] = r
    }
    function z(e, t, n) {
        var i, r, o = 0, s = z.prefilters.length, a = oe.Deferred().always((function() {
            delete l.elem
        }
        )), l = function() {
            if (r)
                return !1;
            for (var t = it || O(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++)
                c.tweens[o].run(i);
            return a.notifyWith(e, [c, i, n]),
            i < 1 && s ? n : (a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: oe.extend({}, t),
            opts: oe.extend(!0, {
                specialEasing: {},
                easing: oe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: it || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (F(u, c.opts.specialEasing); o < s; o++)
            if (i = z.prefilters[o].call(c, e, u, c.opts))
                return oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i)),
                i;
        return oe.map(u, j, c),
        oe.isFunction(c.opts.start) && c.opts.start.call(e, c),
        oe.fx.timer(oe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function R(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(_e) || [];
            if (oe.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function H(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0,
            oe.each(e[a] || [], (function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                r(c),
                !1)
            }
            )),
            l
        }
        var o = {}
          , s = e === Ct;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function U(e, t) {
        var n, i, r = oe.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && oe.extend(!0, e, i),
        e
    }
    function Y(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        if (o)
            return o !== l[0] && l.unshift(o),
            n[o]
    }
    function W(e, t, n, i) {
        var r, o, s, a, l, c = {}, u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters)
                c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = u.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (!(s = c[l + " " + o] || c["* " + o]))
                        for (r in c)
                            if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0],
                                u.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && e.throws)
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function B(e, t, n, i) {
        var r;
        if (oe.isArray(t))
            oe.each(t, (function(t, r) {
                n || Dt.test(e) ? i(e, r) : B(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            }
            ));
        else if (n || "object" !== oe.type(t))
            i(e, t);
        else
            for (r in t)
                B(e + "[" + r + "]", t[r], n, i)
    }
    function G(e) {
        return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var V = []
      , X = e.document
      , Q = V.slice
      , Z = V.concat
      , K = V.push
      , J = V.indexOf
      , ee = {}
      , te = ee.toString
      , ne = ee.hasOwnProperty
      , ie = {}
      , re = "2.2.4"
      , oe = function(e, t) {
        return new oe.fn.init(e,t)
    }
      , se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , ae = /^-ms-/
      , le = /-([\da-z])/gi
      , ce = function(e, t) {
        return t.toUpperCase()
    };
    oe.fn = oe.prototype = {
        jquery: re,
        constructor: oe,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = oe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return oe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(oe.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: V.sort,
        splice: V.splice
    },
    oe.extend = oe.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || oe.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    s !== (i = e[t]) && (c && i && (oe.isPlainObject(i) || (r = oe.isArray(i))) ? (r ? (r = !1,
                    o = n && oe.isArray(n) ? n : []) : o = n && oe.isPlainObject(n) ? n : {},
                    s[t] = oe.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }
    ,
    oe.extend({
        expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === oe.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e))
                return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (t in e)
                ;
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = oe.trim(e)) && (1 === e.indexOf("use strict") ? ((t = X.createElement("script")).text = e,
            X.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(ae, "ms-").replace(le, ce)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; r < i && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? oe.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : J.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, i) {
            var r, o, s = 0, a = [];
            if (n(e))
                for (r = e.length; s < r; s++)
                    null != (o = t(e[s], s, i)) && a.push(o);
            else
                for (s in e)
                    null != (o = t(e[s], s, i)) && a.push(o);
            return Z.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            oe.isFunction(e))
                return i = Q.call(arguments, 2),
                r = function() {
                    return e.apply(t || this, i.concat(Q.call(arguments)))
                }
                ,
                r.guid = e.guid = e.guid || oe.guid++,
                r
        },
        now: Date.now,
        support: ie
    }),
    "function" == typeof Symbol && (oe.fn[Symbol.iterator] = V[Symbol.iterator]),
    oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var ue = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, c, d, f, p = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!i && ((t ? t.ownerDocument || t : q) !== I && M(t),
            t = t || I,
            O)) {
                if (11 !== m && (c = ve.exec(e)))
                    if (r = c[1]) {
                        if (9 === m) {
                            if (!(s = t.getElementById(r)))
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (p && (s = p.getElementById(r)) && F(t, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (c[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = c[3]) && _.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (_.qsa && !W[e + " "] && (!L || !L.test(e))) {
                    if (1 !== m)
                        p = t,
                        f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = z),
                        o = (d = C(e)).length,
                        l = he.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                            d[o] = l + " " + h(d[o]);
                        f = d.join(","),
                        p = ye.test(e) && u(t.parentNode) || t
                    }
                    if (f)
                        try {
                            return K.apply(n, p.querySelectorAll(f)),
                            n
                        } catch (e) {} finally {
                            a === z && t.removeAttribute("id")
                        }
                }
            }
            return T(e.replace(ae, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[z] = !0,
            e
        }
        function r(e) {
            var t = I.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                x.attrHandle[n[i]] = t
        }
        function s(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i((function(t) {
                return t = +t,
                i((function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; )
                        n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                }
                ))
            }
            ))
        }
        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function d() {}
        function h(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function f(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = H++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var a, l, c, u = [R, o];
                if (s) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || r) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r) {
                            if ((a = (l = (c = t[z] || (t[z] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && a[0] === R && a[1] === o)
                                return u[2] = a[2];
                            if (l[i] = u,
                            u[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++)
                t(e, n[r], i);
            return i
        }
        function g(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (o = e[a]) && (n && !n(o, i, r) || (s.push(o),
                c && t.push(a)));
            return s
        }
        function v(e, t, n, r, o, s) {
            return r && !r[z] && (r = v(r)),
            o && !o[z] && (o = v(o, s)),
            i((function(i, s, a, l) {
                var c, u, d, h = [], f = [], p = s.length, v = i || m(t || "*", a.nodeType ? [a] : a, []), y = !e || !i && t ? v : g(v, h, e, a, l), b = n ? o || (i ? e : p || r) ? [] : s : y;
                if (n && n(y, b, a, l),
                r)
                    for (c = g(b, f),
                    r(c, [], a, l),
                    u = c.length; u--; )
                        (d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [],
                            u = b.length; u--; )
                                (d = b[u]) && c.push(y[u] = d);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--; )
                            (d = b[u]) && (c = o ? ee(i, d) : h[u]) > -1 && (i[c] = !(s[c] = d))
                    }
                } else
                    b = g(b === s ? b.splice(p, b.length) : b),
                    o ? o(null, s, b, l) : K.apply(s, b)
            }
            ))
        }
        function y(e) {
            for (var t, n, i, r = e.length, o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = f((function(e) {
                return e === t
            }
            ), s, !0), c = f((function(e) {
                return ee(t, e) > -1
            }
            ), s, !0), u = [function(e, n, i) {
                var r = !o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null,
                r
            }
            ]; a < r; a++)
                if (n = x.relative[e[a].type])
                    u = [f(p(u), n)];
                else {
                    if ((n = x.filter[e[a].type].apply(null, e[a].matches))[z]) {
                        for (i = ++a; i < r && !x.relative[e[i].type]; i++)
                            ;
                        return v(a > 1 && p(u), a > 1 && h(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && h(e))
                    }
                    u.push(n)
                }
            return p(u)
        }
        function b(e, n) {
            var r = n.length > 0
              , o = e.length > 0
              , s = function(i, s, a, l, c) {
                var u, d, h, f = 0, p = "0", m = i && [], v = [], y = E, b = i || o && x.find.TAG("*", c), w = R += null == y ? 1 : Math.random() || .1, _ = b.length;
                for (c && (E = s === I || s || c); p !== _ && null != (u = b[p]); p++) {
                    if (o && u) {
                        for (d = 0,
                        s || u.ownerDocument === I || (M(u),
                        a = !O); h = e[d++]; )
                            if (h(u, s || I, a)) {
                                l.push(u);
                                break
                            }
                        c && (R = w)
                    }
                    r && ((u = !h && u) && f--,
                    i && m.push(u))
                }
                if (f += p,
                r && p !== f) {
                    for (d = 0; h = n[d++]; )
                        h(m, v, s, a);
                    if (i) {
                        if (f > 0)
                            for (; p--; )
                                m[p] || v[p] || (v[p] = Q.call(l));
                        v = g(v)
                    }
                    K.apply(l, v),
                    c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return c && (R = w,
                E = y),
                m
            };
            return r ? i(s) : s
        }
        var w, _, x, k, $, C, S, T, E, D, A, M, I, P, O, L, j, N, F, z = "sizzle" + 1 * new Date, q = e.document, R = 0, H = 0, U = n(), Y = n(), W = n(), B = function(e, t) {
            return e === t && (A = !0),
            0
        }, G = 1 << 31, V = {}.hasOwnProperty, X = [], Q = X.pop, Z = X.push, K = X.push, J = X.slice, ee = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)", se = new RegExp(ne + "+","g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(oe), he = new RegExp("^" + ie + "$"), fe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + re),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), _e = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, xe = function() {
            M()
        };
        try {
            K.apply(X = J.call(q.childNodes), q.childNodes),
            X[q.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: X.length ? function(e, t) {
                    Z.apply(e, J.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (w in _ = t.support = {},
        $ = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        M = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : q;
            return i !== I && 9 === i.nodeType && i.documentElement ? (P = (I = i).documentElement,
            O = !$(I),
            (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)),
            _.attributes = r((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            _.getElementsByTagName = r((function(e) {
                return e.appendChild(I.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            _.getElementsByClassName = ge.test(I.getElementsByClassName),
            _.getById = r((function(e) {
                return P.appendChild(e).id = z,
                !I.getElementsByName || !I.getElementsByName(z).length
            }
            )),
            _.getById ? (x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            x.filter.ID = function(e) {
                var t = e.replace(we, _e);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(e) {
                var t = e.replace(we, _e);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            x.find.TAG = _.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            x.find.CLASS = _.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && O)
                    return t.getElementsByClassName(e)
            }
            ,
            j = [],
            L = [],
            (_.qsa = ge.test(I.querySelectorAll)) && (r((function(e) {
                P.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + z + "-]").length || L.push("~="),
                e.querySelectorAll(":checked").length || L.push(":checked"),
                e.querySelectorAll("a#" + z + "+*").length || L.push(".#.+[+~]")
            }
            )),
            r((function(e) {
                var t = I.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                L.push(",.*:")
            }
            ))),
            (_.matchesSelector = ge.test(N = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r((function(e) {
                _.disconnectedMatch = N.call(e, "div"),
                N.call(e, "[s!='']:x"),
                j.push("!=", oe)
            }
            )),
            L = L.length && new RegExp(L.join("|")),
            j = j.length && new RegExp(j.join("|")),
            t = ge.test(P.compareDocumentPosition),
            F = t || ge.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            B = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === q && F(q, e) ? -1 : t === I || t.ownerDocument === q && F(q, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], l = [t];
                if (!r || !o)
                    return e === I ? -1 : t === I ? 1 : r ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                if (r === o)
                    return s(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; a[i] === l[i]; )
                    i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0
            }
            ,
            I) : I
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== I && M(e),
            n = n.replace(ue, "='$1']"),
            _.matchesSelector && O && !W[n + " "] && (!j || !j.test(n)) && (!L || !L.test(n)))
                try {
                    var i = N.call(e, n);
                    if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return t(n, I, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== I && M(e),
            F(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== I && M(e);
            var n = x.attrHandle[t.toLowerCase()]
              , i = n && V.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : _.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (A = !_.detectDuplicates,
            D = !_.sortStable && e.slice(0),
            e.sort(B),
            A) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return D = null,
            e
        }
        ,
        k = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += k(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += k(t);
            return n
        }
        ,
        x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, _e),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(we, _e),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, _e).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = U[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, d, h, f, p, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (h = t; h = h[m]; )
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                            return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild],
                            s && y) {
                                for (b = (f = (c = (u = (d = (h = g)[z] || (h[z] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === R && c[1]) && c[2],
                                h = f && g.childNodes[f]; h = ++f && h && h[m] || (b = f = 0) || p.pop(); )
                                    if (1 === h.nodeType && ++b && h === t) {
                                        u[e] = [R, f, b];
                                        break
                                    }
                            } else if (y && (b = f = (c = (u = (d = (h = t)[z] || (h[z] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === R && c[1]),
                            !1 === b)
                                for (; (h = ++f && h && h[m] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[z] || (h[z] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [R, b]),
                                h !== t)); )
                                    ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[z] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? i((function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--; )
                            e[i = ee(e, r[s])] = !(t[i] = r[s])
                    }
                    )) : function(e) {
                        return o(e, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i((function(e) {
                    var t = []
                      , n = []
                      , r = S(e.replace(ae, "$1"));
                    return r[z] ? i((function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }
                    )) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }
                )),
                has: i((function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }
                )),
                contains: i((function(e) {
                    return e = e.replace(we, _e),
                    function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: i((function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(we, _e).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c((function() {
                    return [0]
                }
                )),
                last: c((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: c((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: c((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: c((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: c((function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }
                )),
                gt: c((function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                }
                ))
            }
        },
        x.pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            x.pseudos[w] = l(w);
        return d.prototype = x.filters = x.pseudos,
        x.setFilters = new d,
        C = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, c, u = Y[e + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = x.preFilter; a; ) {
                for (s in i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                l.push(o = [])),
                i = !1,
                (r = ce.exec(a)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }),
                a = a.slice(i.length)),
                x.filter)
                    !(r = fe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: s,
                        matches: r
                    }),
                    a = a.slice(i.length));
                if (!i)
                    break
            }
            return n ? a.length : a ? t.error(e) : Y(e, l).slice(0)
        }
        ,
        S = t.compile = function(e, t) {
            var n, i = [], r = [], o = W[e + " "];
            if (!o) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    (o = y(t[n]))[z] ? i.push(o) : r.push(o);
                (o = W(e, b(r, i))).selector = e
            }
            return o
        }
        ,
        T = t.select = function(e, t, n, i) {
            var r, o, s, a, l, c = "function" == typeof e && e, d = !i && C(e = c.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === t.nodeType && O && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(we, _e), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r],
                !x.relative[a = s.type]); )
                    if ((l = x.find[a]) && (i = l(s.matches[0].replace(we, _e), ye.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        !(e = i.length && h(o)))
                            return K.apply(n, i),
                            n;
                        break
                    }
            }
            return (c || S(e, d))(i, t, !O, n, !t || ye.test(e) && u(t.parentNode) || t),
            n
        }
        ,
        _.sortStable = z.split("").sort(B).join("") === z,
        _.detectDuplicates = !!A,
        M(),
        _.sortDetached = r((function(e) {
            return 1 & e.compareDocumentPosition(I.createElement("div"))
        }
        )),
        r((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || o("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        _.attributes && r((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || o("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        r((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || o(te, (function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        )),
        t
    }(e);
    oe.find = ue,
    oe.expr = ue.selectors,
    oe.expr[":"] = oe.expr.pseudos,
    oe.uniqueSort = oe.unique = ue.uniqueSort,
    oe.text = ue.getText,
    oe.isXMLDoc = ue.isXML,
    oe.contains = ue.contains;
    var de = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && oe(e).is(n))
                    break;
                i.push(e)
            }
        return i
    }
      , he = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , fe = oe.expr.match.needsContext
      , pe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , me = /^.[^:#\[\.,]*$/;
    oe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    oe.fn.extend({
        find: function(e) {
            var t, n = this.length, i = [], r = this;
            if ("string" != typeof e)
                return this.pushStack(oe(e).filter((function() {
                    for (t = 0; t < n; t++)
                        if (oe.contains(r[t], this))
                            return !0
                }
                )));
            for (t = 0; t < n; t++)
                oe.find(e, r[t], i);
            return (i = this.pushStack(n > 1 ? oe.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e,
            i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && fe.test(e) ? oe(e) : e || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (oe.fn.init = function(e, t, n) {
        var i, r;
        if (!e)
            return this;
        if (n = n || ge,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof oe ? t[0] : t,
                oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : X, !0)),
                pe.test(i[1]) && oe.isPlainObject(t))
                    for (i in t)
                        oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (r = X.getElementById(i[2])) && r.parentNode && (this.length = 1,
            this[0] = r),
            this.context = X,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        oe.makeArray(e, this))
    }
    ).prototype = oe.fn,
    ge = oe(X);
    var ye = /^(?:parents|prev(?:Until|All))/
      , be = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    oe.fn.extend({
        has: function(e) {
            var t = oe(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (oe.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = fe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? J.call(oe(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    oe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return de(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return de(e, "nextSibling")
        },
        prevAll: function(e) {
            return de(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function(e) {
            return he((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return he(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || oe.merge([], e.childNodes)
        }
    }, (function(e, t) {
        oe.fn[e] = function(n, i) {
            var r = oe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = oe.filter(i, r)),
            this.length > 1 && (be[e] || oe.uniqueSort(r),
            ye.test(e) && r.reverse()),
            this.pushStack(r)
        }
    }
    ));
    var we, _e = /\S+/g;
    oe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : oe.extend({}, e);
        var t, n, i, r, s = [], a = [], l = -1, c = function() {
            for (r = e.once,
            i = t = !0; a.length; l = -1)
                for (n = a.shift(); ++l < s.length; )
                    !1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            r && (s = n ? [] : "")
        }, u = {
            add: function() {
                return s && (n && !t && (l = s.length - 1,
                a.push(n)),
                function t(n) {
                    oe.each(n, (function(n, i) {
                        oe.isFunction(i) ? e.unique && u.has(i) || s.push(i) : i && i.length && "string" !== oe.type(i) && t(i)
                    }
                    ))
                }(arguments),
                n && !t && c()),
                this
            },
            remove: function() {
                return oe.each(arguments, (function(e, t) {
                    for (var n; (n = oe.inArray(t, s, n)) > -1; )
                        s.splice(n, 1),
                        n <= l && l--
                }
                )),
                this
            },
            has: function(e) {
                return e ? oe.inArray(e, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return r = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return r = a = [],
                n || (s = n = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, n) {
                return r || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || c()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return u
    }
    ,
    oe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return oe.Deferred((function(n) {
                        oe.each(t, (function(t, o) {
                            var s = oe.isFunction(e[t]) && e[t];
                            r[o[1]]((function() {
                                var e = s && s.apply(this, arguments);
                                e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? oe.extend(e, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            oe.each(t, (function(e, o) {
                var s = o[2]
                  , a = o[3];
                i[o[1]] = s.add,
                a && s.add((function() {
                    n = a
                }
                ), t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = s.fireWith
            }
            )),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0, o = Q.call(arguments), s = o.length, a = 1 !== s || e && oe.isFunction(e.promise) ? s : 0, l = 1 === a ? e : oe.Deferred(), c = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? Q.call(arguments) : r,
                    i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1)
                for (t = new Array(s),
                n = new Array(s),
                i = new Array(s); r < s; r++)
                    o[r] && oe.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o),
            l.promise()
        }
    }),
    oe.fn.ready = function(e) {
        return oe.ready.promise().done(e),
        this
    }
    ,
    oe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? oe.readyWait++ : oe.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --oe.readyWait : oe.isReady) || (oe.isReady = !0,
            !0 !== e && --oe.readyWait > 0 || (we.resolveWith(X, [oe]),
            oe.fn.triggerHandler && (oe(X).triggerHandler("ready"),
            oe(X).off("ready"))))
        }
    }),
    oe.ready.promise = function(t) {
        return we || (we = oe.Deferred(),
        "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? e.setTimeout(oe.ready) : (X.addEventListener("DOMContentLoaded", s),
        e.addEventListener("load", s))),
        we.promise(t)
    }
    ,
    oe.ready.promise();
    var xe = function(e, t, n, i, r, o, s) {
        var a = 0
          , l = e.length
          , c = null == n;
        if ("object" === oe.type(n))
            for (a in r = !0,
            n)
                xe(e, t, a, n[a], !0, o, s);
        else if (void 0 !== i && (r = !0,
        oe.isFunction(i) || (s = !0),
        c && (s ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(oe(e), n)
        }
        )),
        t))
            for (; a < l; a++)
                t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
      , ke = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    a.uid = 1,
    a.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!ke(e))
                return {};
            var t = e[this.expando];
            return t || (t = {},
            ke(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t)
                r[t] = n;
            else
                for (i in t)
                    r[i] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, oe.camelCase(t)) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t)
                    this.register(e);
                else {
                    oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (r = oe.camelCase(t),
                    i = t in o ? [t, r] : (i = r)in o ? [i] : i.match(_e) || []),
                    n = i.length;
                    for (; n--; )
                        delete o[i[n]]
                }
                (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !oe.isEmptyObject(t)
        }
    };
    var $e = new a
      , Ce = new a
      , Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Te = /[A-Z]/g;
    oe.extend({
        hasData: function(e) {
            return Ce.hasData(e) || $e.hasData(e)
        },
        data: function(e, t, n) {
            return Ce.access(e, t, n)
        },
        removeData: function(e, t) {
            Ce.remove(e, t)
        },
        _data: function(e, t, n) {
            return $e.access(e, t, n)
        },
        _removeData: function(e, t) {
            $e.remove(e, t)
        }
    }),
    oe.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = Ce.get(o),
                1 === o.nodeType && !$e.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = oe.camelCase(i.slice(5)),
                        l(o, i, r[i]));
                    $e.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each((function() {
                Ce.set(this, e)
            }
            )) : xe(this, (function(t) {
                var n, i;
                if (o && void 0 === t)
                    return void 0 !== (n = Ce.get(o, e) || Ce.get(o, e.replace(Te, "-$&").toLowerCase())) ? n : (i = oe.camelCase(e),
                    void 0 !== (n = Ce.get(o, i)) || void 0 !== (n = l(o, i, void 0)) ? n : void 0);
                i = oe.camelCase(e),
                this.each((function() {
                    var n = Ce.get(this, i);
                    Ce.set(this, i, t),
                    e.indexOf("-") > -1 && void 0 !== n && Ce.set(this, e, t)
                }
                ))
            }
            ), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                Ce.remove(this, e)
            }
            ))
        }
    }),
    oe.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = $e.get(e, t),
                n && (!i || oe.isArray(n) ? i = $e.access(e, t, oe.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = oe.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = oe._queueHooks(e, t)
              , s = function() {
                oe.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return $e.get(e, n) || $e.access(e, n, {
                empty: oe.Callbacks("once memory").add((function() {
                    $e.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    oe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = oe.queue(this, e, t);
                oe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                oe.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = oe.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = $e.get(o[s], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(t)
        }
    });
    var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , De = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$","i")
      , Ae = ["Top", "Right", "Bottom", "Left"]
      , Me = function(e, t) {
        return e = t || e,
        "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
    }
      , Ie = /^(?:checkbox|radio)$/i
      , Pe = /<([\w:-]+)/
      , Oe = /^$|\/(?:java|ecma)script/i
      , Le = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Le.optgroup = Le.option,
    Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead,
    Le.th = Le.td;
    var je = /<|&#?\w+;/;
    !function() {
        var e = X.createDocumentFragment().appendChild(X.createElement("div"))
          , t = X.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ne = /^key/
      , Fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ze = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, h, f, p, m, g = $e.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler,
                r = o.selector),
                n.guid || (n.guid = oe.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) || (s = g.handle = function(t) {
                    return void 0 !== oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(_e) || [""]).length; c--; )
                    f = m = (a = ze.exec(t[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    f && (d = oe.event.special[f] || {},
                    f = (r ? d.delegateType : d.bindType) || f,
                    d = oe.event.special[f] || {},
                    u = oe.extend({
                        type: f,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && oe.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o),
                    (h = l[f]) || ((h = l[f] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)),
                    d.add && (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    r ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                    oe.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, h, f, p, m, g = $e.hasData(e) && $e.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(_e) || [""]).length; c--; )
                    if (f = m = (a = ze.exec(t[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    f) {
                        for (d = oe.event.special[f] || {},
                        h = l[f = (i ? d.delegateType : d.bindType) || f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = h.length; o--; )
                            u = h[o],
                            !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1),
                            u.selector && h.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || oe.removeEvent(e, f, g.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            oe.event.remove(e, f + t[c], n, i, !0);
                oe.isEmptyObject(l) && $e.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = oe.event.fix(e);
            var t, n, i, r, o, s = [], a = Q.call(arguments), l = ($e.get(this, "events") || {})[e.type] || [], c = oe.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (s = oe.event.handlers.call(this, e, l),
                t = 0; (r = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                        e.data = o.data,
                        void 0 !== (i = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (e.result = i) && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [],
                        n = 0; n < a; n++)
                            void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? oe(r, this).index(l) > -1 : oe.find(r, this, null, [l]).length),
                            i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (i = (n = e.target.ownerDocument || X).documentElement,
                r = n.body,
                e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[oe.expando])
                return e;
            var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Fe.test(r) ? this.mouseHooks : Ne.test(r) ? this.keyHooks : {}),
            i = s.props ? this.props.concat(s.props) : this.props,
            e = new oe.Event(o),
            t = i.length; t--; )
                e[n = i[t]] = o[n];
            return e.target || (e.target = X),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== m() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === m() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && oe.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return oe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    oe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    oe.Event = function(e, t) {
        if (!(this instanceof oe.Event))
            return new oe.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? f : p) : this.type = e,
        t && oe.extend(this, t),
        this.timeStamp = e && e.timeStamp || oe.now(),
        this[oe.expando] = !0
    }
    ,
    oe.Event.prototype = {
        constructor: oe.Event,
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    oe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        oe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || oe.contains(i, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    oe.fn.extend({
        on: function(e, t, n, i) {
            return g(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return g(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = p),
            this.each((function() {
                oe.event.remove(this, e, n, t)
            }
            ))
        }
    });
    var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , Re = /<script|<style|<link/i
      , He = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ue = /^true\/(.*)/
      , Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
        htmlPrefilter: function(e) {
            return e.replace(qe, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), l = oe.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e)))
                for (s = u(a),
                i = 0,
                r = (o = u(e)).length; i < r; i++)
                    _(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || u(e),
                    s = s || u(a),
                    i = 0,
                    r = o.length; i < r; i++)
                        w(o[i], s[i]);
                else
                    w(e, a);
            return (s = u(a, "script")).length > 0 && d(s, !l && u(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, i, r = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (ke(n)) {
                    if (t = n[$e.expando]) {
                        if (t.events)
                            for (i in t.events)
                                r[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
                        n[$e.expando] = void 0
                    }
                    n[Ce.expando] && (n[Ce.expando] = void 0)
                }
        }
    }),
    oe.fn.extend({
        domManip: x,
        detach: function(e) {
            return k(this, e, !0)
        },
        remove: function(e) {
            return k(this, e)
        },
        text: function(e) {
            return xe(this, (function(e) {
                return void 0 === e ? oe.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return x(this, arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || v(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return x(this, arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return x(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return x(this, arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (oe.cleanData(u(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return oe.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return xe(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Re.test(e) && !Le[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = oe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (oe.cleanData(u(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return x(this, arguments, (function(t) {
                var n = this.parentNode;
                oe.inArray(this, e) < 0 && (oe.cleanData(u(this)),
                n && n.replaceChild(t, this))
            }
            ), e)
        }
    }),
    oe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        oe.fn[e] = function(e) {
            for (var n, i = [], r = oe(e), o = r.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                oe(r[s])[t](n),
                K.apply(i, n.get());
            return this.pushStack(i)
        }
    }
    ));
    var We, Be = {
        HTML: "block",
        BODY: "block"
    }, Ge = /^margin/, Ve = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$","i"), Xe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }, Qe = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        for (o in r = n.apply(e, i || []),
        t)
            e.style[o] = s[o];
        return r
    }, Ze = X.documentElement;
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            a.innerHTML = "",
            Ze.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top,
            o = "2px" === t.marginLeft,
            i = "4px" === t.width,
            a.style.marginRight = "50%",
            r = "4px" === t.marginRight,
            Ze.removeChild(s)
        }
        var n, i, r, o, s = X.createElement("div"), a = X.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        ie.clearCloneStyle = "content-box" === a.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(a),
        oe.extend(ie, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == i && t(),
                i
            },
            pixelMarginRight: function() {
                return null == i && t(),
                r
            },
            reliableMarginLeft: function() {
                return null == i && t(),
                o
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(X.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                Ze.appendChild(s),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Ze.removeChild(s),
                a.removeChild(n),
                t
            }
        }))
    }();
    var Ke = /^(none|table(?!-c[ea]).+)/
      , Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , et = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , tt = ["Webkit", "O", "Moz", "ms"]
      , nt = X.createElement("div").style;
    oe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = S(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = oe.camelCase(t), l = e.style;
                if (t = oe.cssProps[a] || (oe.cssProps[a] = E(a) || a),
                s = oe.cssHooks[t] || oe.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                "string" === (o = typeof n) && (r = De.exec(n)) && r[1] && (n = c(e, t, r),
                o = "number"),
                null != n && n == n && ("number" === o && (n += r && r[3] || (oe.cssNumber[a] ? "" : "px")),
                ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = oe.camelCase(t);
            return t = oe.cssProps[a] || (oe.cssProps[a] = E(a) || a),
            (s = oe.cssHooks[t] || oe.cssHooks[a]) && "get"in s && (r = s.get(e, !0, n)),
            void 0 === r && (r = S(e, t, i)),
            "normal" === r && t in et && (r = et[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }),
    oe.each(["height", "width"], (function(e, t) {
        oe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return Ke.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Qe(e, Je, (function() {
                        return M(e, t, i)
                    }
                    )) : M(e, t, i)
            },
            set: function(e, n, i) {
                var r, o = i && Xe(e), s = i && A(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                return s && (r = De.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n,
                n = oe.css(e, t)),
                D(e, n, s)
            }
        }
    }
    )),
    oe.cssHooks.marginLeft = T(ie.reliableMarginLeft, (function(e, t) {
        if (t)
            return (parseFloat(S(e, "marginLeft")) || e.getBoundingClientRect().left - Qe(e, {
                marginLeft: 0
            }, (function() {
                return e.getBoundingClientRect().left
            }
            ))) + "px"
    }
    )),
    oe.cssHooks.marginRight = T(ie.reliableMarginRight, (function(e, t) {
        if (t)
            return Qe(e, {
                display: "inline-block"
            }, S, [e, "marginRight"])
    }
    )),
    oe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        oe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + Ae[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        Ge.test(e) || (oe.cssHooks[e + t].set = D)
    }
    )),
    oe.fn.extend({
        css: function(e, t) {
            return xe(this, (function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (oe.isArray(t)) {
                    for (i = Xe(e),
                    r = t.length; s < r; s++)
                        o[t[s]] = oe.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
            }
            ), e, t, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                Me(this) ? oe(this).show() : oe(this).hide()
            }
            ))
        }
    }),
    oe.Tween = P,
    P.prototype = {
        constructor: P,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || oe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (oe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : P.propHooks._default.set(this),
            this
        }
    },
    P.prototype.init.prototype = P.prototype,
    P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    oe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    oe.fx = P.prototype.init,
    oe.fx.step = {};
    var it, rt, ot = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
    oe.Animation = oe.extend(z, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return c(n.elem, e, De.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            oe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(_e);
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                z.tweeners[n] = z.tweeners[n] || [],
                z.tweeners[n].unshift(t)
        },
        prefilters: [N],
        prefilter: function(e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }),
    oe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? oe.extend({}, e) : {
            complete: n || !n && t || oe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !oe.isFunction(t) && t
        };
        return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            oe.isFunction(i.old) && i.old.call(this),
            i.queue && oe.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    oe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Me).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = oe.isEmptyObject(e)
              , o = oe.speed(t, n, i)
              , s = function() {
                var t = z(this, oe.extend({}, e), o);
                (r || $e.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = oe.timers
                  , s = $e.get(this);
                if (r)
                    s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s)
                        s[r] && s[r].stop && st.test(r) && i(s[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || oe.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, n = $e.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = oe.timers, s = i ? i.length : 0;
                for (n.finish = !0,
                oe.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < s; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            }
            ))
        }
    }),
    oe.each(["toggle", "show", "hide"], (function(e, t) {
        var n = oe.fn[t];
        oe.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, i, r)
        }
    }
    )),
    oe.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        oe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }
    )),
    oe.timers = [],
    oe.fx.tick = function() {
        var e, t = 0, n = oe.timers;
        for (it = oe.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || oe.fx.stop(),
        it = void 0
    }
    ,
    oe.fx.timer = function(e) {
        oe.timers.push(e),
        e() ? oe.fx.start() : oe.timers.pop()
    }
    ,
    oe.fx.interval = 13,
    oe.fx.start = function() {
        rt || (rt = e.setInterval(oe.fx.tick, oe.fx.interval))
    }
    ,
    oe.fx.stop = function() {
        e.clearInterval(rt),
        rt = null
    }
    ,
    oe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    oe.fn.delay = function(t, n) {
        return t = oe.fx && oe.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, (function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        }
        ))
    }
    ,
    function() {
        var e = X.createElement("input")
          , t = X.createElement("select")
          , n = t.appendChild(X.createElement("option"));
        e.type = "checkbox",
        ie.checkOn = "" !== e.value,
        ie.optSelected = n.selected,
        t.disabled = !0,
        ie.optDisabled = !n.disabled,
        (e = X.createElement("input")).value = "t",
        e.type = "radio",
        ie.radioValue = "t" === e.value
    }();
    var at, lt = oe.expr.attrHandle;
    oe.fn.extend({
        attr: function(e, t) {
            return xe(this, oe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                oe.removeAttr(this, e)
            }
            ))
        }
    }),
    oe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? oe.prop(e, t, n) : (1 === o && oe.isXMLDoc(e) || (t = t.toLowerCase(),
                r = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? at : void 0)),
                void 0 !== n ? null === n ? void oe.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = oe.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ie.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(_e);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    i = oe.propFix[n] || n,
                    oe.expr.match.bool.test(n) && (e[i] = !1),
                    e.removeAttribute(n)
        }
    }),
    at = {
        set: function(e, t, n) {
            return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    oe.each(oe.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = lt[t] || oe.find.attr;
        lt[t] = function(e, t, i) {
            var r, o;
            return i || (o = lt[t],
            lt[t] = r,
            r = null != n(e, t, i) ? t.toLowerCase() : null,
            lt[t] = o),
            r
        }
    }
    ));
    var ct = /^(?:input|select|textarea|button)$/i
      , ut = /^(?:a|area)$/i;
    oe.fn.extend({
        prop: function(e, t) {
            return xe(this, oe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[oe.propFix[e] || e]
            }
            ))
        }
    }),
    oe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && oe.isXMLDoc(e) || (t = oe.propFix[t] || t,
                r = oe.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = oe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ie.optSelected || (oe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        oe.propFix[this.toLowerCase()] = this
    }
    ));
    var dt = /[\t\r\n\f]/g;
    oe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (oe.isFunction(e))
                return this.each((function(t) {
                    oe(this).addClass(e.call(this, t, q(this)))
                }
                ));
            if ("string" == typeof e && e)
                for (t = e.match(_e) || []; n = this[l++]; )
                    if (r = q(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++]; )
                            i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = oe.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (oe.isFunction(e))
                return this.each((function(t) {
                    oe(this).removeClass(e.call(this, t, q(this)))
                }
                ));
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(_e) || []; n = this[l++]; )
                    if (r = q(n),
                    i = 1 === n.nodeType && (" " + r + " ").replace(dt, " ")) {
                        for (s = 0; o = t[s++]; )
                            for (; i.indexOf(" " + o + " ") > -1; )
                                i = i.replace(" " + o + " ", " ");
                        r !== (a = oe.trim(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each((function(n) {
                oe(this).toggleClass(e.call(this, n, q(this), t), t)
            }
            )) : this.each((function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0,
                    r = oe(this),
                    o = e.match(_e) || []; t = o[i++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = q(this)) && $e.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : $e.get(this, "__className__") || ""))
            }
            ))
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + q(n) + " ").replace(dt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var ht = /\r/g
      , ft = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = oe.isFunction(e),
            this.each((function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, oe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : oe.isArray(r) && (r = oe.map(r, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            }
            ))) : r ? (t = oe.valHooks[r.type] || oe.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ht, "") : null == n ? "" : n : void 0
        }
    }),
    oe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = oe.find.attr(e, "value");
                    return null != t ? t : oe.trim(oe.text(e)).replace(ft, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (((n = i[l]).selected || l === r) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = oe(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = oe.makeArray(t), s = r.length; s--; )
                        ((i = r[s]).selected = oe.inArray(oe.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    oe.each(["radio", "checkbox"], (function() {
        oe.valHooks[this] = {
            set: function(e, t) {
                if (oe.isArray(t))
                    return e.checked = oe.inArray(oe(e).val(), t) > -1
            }
        },
        ie.checkOn || (oe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    ));
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, l, c, u, d, h = [i || X], f = ne.call(t, "type") ? t.type : t, p = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || X,
            3 !== i.nodeType && 8 !== i.nodeType && !pt.test(f + oe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."),
            f = p.shift(),
            p.sort()),
            c = f.indexOf(":") < 0 && "on" + f,
            (t = t[oe.expando] ? t : new oe.Event(f,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
            t.namespace = p.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : oe.makeArray(n, [t]),
            d = oe.event.special[f] || {},
            r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !oe.isWindow(i)) {
                    for (l = d.delegateType || f,
                    pt.test(l + f) || (s = s.parentNode); s; s = s.parentNode)
                        h.push(s),
                        a = s;
                    a === (i.ownerDocument || X) && h.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? l : d.bindType || f,
                    (u = ($e.get(s, "events") || {})[t.type] && $e.get(s, "handle")) && u.apply(s, n),
                    (u = c && s[c]) && u.apply && ke(s) && (t.result = u.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = f,
                r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !ke(i) || c && oe.isFunction(i[f]) && !oe.isWindow(i) && ((a = i[c]) && (i[c] = null),
                oe.event.triggered = f,
                i[f](),
                oe.event.triggered = void 0,
                a && (i[c] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var i = oe.extend(new oe.Event, n, {
                type: e,
                isSimulated: !0
            });
            oe.event.trigger(i, null, t)
        }
    }),
    oe.fn.extend({
        trigger: function(e, t) {
            return this.each((function() {
                oe.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return oe.event.trigger(e, t, n, !0)
        }
    }),
    oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
        oe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    )),
    oe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    ie.focusin = "onfocusin"in e,
    ie.focusin || oe.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            oe.event.simulate(t, e.target, oe.event.fix(e))
        };
        oe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = $e.access(i, t);
                r || i.addEventListener(e, n, !0),
                $e.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = $e.access(i, t) - 1;
                r ? $e.access(i, t, r) : (i.removeEventListener(e, n, !0),
                $e.remove(i, t))
            }
        }
    }
    ));
    var mt = e.location
      , gt = oe.now()
      , vt = /\?/;
    oe.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    oe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t),
        n
    }
    ;
    var yt = /#.*$/
      , bt = /([?&])_=[^&]*/
      , wt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , _t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , xt = /^(?:GET|HEAD)$/
      , kt = /^\/\//
      , $t = {}
      , Ct = {}
      , St = "*/".concat("*")
      , Tt = X.createElement("a");
    Tt.href = mt.href,
    oe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: _t.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": St,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": oe.parseJSON,
                "text xml": oe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? U(U(e, oe.ajaxSettings), t) : U(oe.ajaxSettings, e)
        },
        ajaxPrefilter: R($t),
        ajaxTransport: R(Ct),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var c, d, y, b, _, k = n;
                2 !== w && (w = 2,
                l && e.clearTimeout(l),
                r = void 0,
                s = a || "",
                x.readyState = t > 0 ? 4 : 0,
                c = t >= 200 && t < 300 || 304 === t,
                i && (b = Y(h, x, i)),
                b = W(h, b, x, c),
                c ? (h.ifModified && ((_ = x.getResponseHeader("Last-Modified")) && (oe.lastModified[o] = _),
                (_ = x.getResponseHeader("etag")) && (oe.etag[o] = _)),
                204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state,
                d = b.data,
                c = !(y = b.error))) : (y = k,
                !t && k || (k = "error",
                t < 0 && (t = 0))),
                x.status = t,
                x.statusText = (n || k) + "",
                c ? m.resolveWith(f, [d, k, x]) : m.rejectWith(f, [x, k, y]),
                x.statusCode(v),
                v = void 0,
                u && p.trigger(c ? "ajaxSuccess" : "ajaxError", [x, h, c ? d : y]),
                g.fireWith(f, [x, k]),
                u && (p.trigger("ajaxComplete", [x, h]),
                --oe.active || oe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, o, s, a, l, c, u, d, h = oe.ajaxSetup({}, n), f = h.context || h, p = h.context && (f.nodeType || f.jquery) ? oe(f) : oe.event, m = oe.Deferred(), g = oe.Callbacks("once memory"), v = h.statusCode || {}, y = {}, b = {}, w = 0, _ = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!a)
                            for (a = {}; t = wt.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? s : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = b[n] = b[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (w < 2)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || _;
                    return r && r.abort(t),
                    i(0, t),
                    this
                }
            };
            if (m.promise(x).complete = g.add,
            x.success = x.done,
            x.error = x.fail,
            h.url = ((t || h.url || mt.href) + "").replace(yt, "").replace(kt, mt.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = oe.trim(h.dataType || "*").toLowerCase().match(_e) || [""],
            null == h.crossDomain) {
                c = X.createElement("a");
                try {
                    c.href = h.url,
                    c.href = c.href,
                    h.crossDomain = Tt.protocol + "//" + Tt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = oe.param(h.data, h.traditional)),
            H($t, h, n, x),
            2 === w)
                return x;
            for (d in (u = oe.event && h.global) && 0 == oe.active++ && oe.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !xt.test(h.type),
            o = h.url,
            h.hasContent || (h.data && (o = h.url += (vt.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (h.url = bt.test(o) ? o.replace(bt, "$1_=" + gt++) : o + (vt.test(o) ? "&" : "?") + "_=" + gt++)),
            h.ifModified && (oe.lastModified[o] && x.setRequestHeader("If-Modified-Since", oe.lastModified[o]),
            oe.etag[o] && x.setRequestHeader("If-None-Match", oe.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && x.setRequestHeader("Content-Type", h.contentType),
            x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + St + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                x.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(f, x, h) || 2 === w))
                return x.abort();
            for (d in _ = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                x[d](h[d]);
            if (r = H(Ct, h, n, x)) {
                if (x.readyState = 1,
                u && p.trigger("ajaxSend", [x, h]),
                2 === w)
                    return x;
                h.async && h.timeout > 0 && (l = e.setTimeout((function() {
                    x.abort("timeout")
                }
                ), h.timeout));
                try {
                    w = 1,
                    r.send(y, i)
                } catch (e) {
                    if (!(w < 2))
                        throw e;
                    i(-1, e)
                }
            } else
                i(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return oe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return oe.get(e, void 0, t, "script")
        }
    }),
    oe.each(["get", "post"], (function(e, t) {
        oe[t] = function(e, n, i, r) {
            return oe.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            oe.ajax(oe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, oe.isPlainObject(e) && e))
        }
    }
    )),
    oe._evalUrl = function(e) {
        return oe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    oe.fn.extend({
        wrapAll: function(e) {
            var t;
            return oe.isFunction(e) ? this.each((function(t) {
                oe(this).wrapAll(e.call(this, t))
            }
            )) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this)
        },
        wrapInner: function(e) {
            return oe.isFunction(e) ? this.each((function(t) {
                oe(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = oe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = oe.isFunction(e);
            return this.each((function(n) {
                oe(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function() {
            return this.parent().each((function() {
                oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
            }
            )).end()
        }
    }),
    oe.expr.filters.hidden = function(e) {
        return !oe.expr.filters.visible(e)
    }
    ,
    oe.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    }
    ;
    var Et = /%20/g
      , Dt = /\[\]$/
      , At = /\r?\n/g
      , Mt = /^(?:submit|button|image|reset|file)$/i
      , It = /^(?:input|select|textarea|keygen)/i;
    oe.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = oe.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional),
        oe.isArray(e) || e.jquery && !oe.isPlainObject(e))
            oe.each(e, (function() {
                r(this.name, this.value)
            }
            ));
        else
            for (n in e)
                B(n, e[n], t, r);
        return i.join("&").replace(Et, "+")
    }
    ,
    oe.fn.extend({
        serialize: function() {
            return oe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = oe.prop(this, "elements");
                return e ? oe.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !oe(this).is(":disabled") && It.test(this.nodeName) && !Mt.test(e) && (this.checked || !Ie.test(e))
            }
            )).map((function(e, t) {
                var n = oe(this).val();
                return null == n ? null : oe.isArray(n) ? oe.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }
            )).get()
        }
    }),
    oe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Pt = {
        0: 200,
        1223: 204
    }
      , Ot = oe.ajaxSettings.xhr();
    ie.cors = !!Ot && "withCredentials"in Ot,
    ie.ajax = Ot = !!Ot,
    oe.ajaxTransport((function(t) {
        var n, i;
        if (ie.cors || Ot && !t.crossDomain)
            return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r)
                        a.setRequestHeader(s, r[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Pt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout((function() {
                            n && i()
                        }
                        ))
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }
    )),
    oe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return oe.globalEval(e),
                e
            }
        }
    }),
    oe.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    oe.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(i, r) {
                    t = oe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && r("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    X.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var Lt = []
      , jt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Lt.pop() || oe.expando + "_" + gt++;
            return this[e] = !0,
            e
        }
    }),
    oe.ajaxPrefilter("json jsonp", (function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (jt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(jt, "$1" + r) : !1 !== t.jsonp && (t.url += (vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return s || oe.error(r + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[r],
            e[r] = function() {
                s = arguments
            }
            ,
            i.always((function() {
                void 0 === o ? oe(e).removeProp(r) : e[r] = o,
                t[r] && (t.jsonpCallback = n.jsonpCallback,
                Lt.push(r)),
                s && oe.isFunction(o) && o(s[0]),
                s = o = void 0
            }
            )),
            "script"
    }
    )),
    oe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || X;
        var i = pe.exec(e)
          , r = !n && [];
        return i ? [t.createElement(i[1])] : (i = h([e], t, r),
        r && r.length && oe(r).remove(),
        oe.merge([], i.childNodes))
    }
    ;
    var Nt = oe.fn.load;
    oe.fn.load = function(e, t, n) {
        if ("string" != typeof e && Nt)
            return Nt.apply(this, arguments);
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = oe.trim(e.slice(a)),
        e = e.slice(0, a)),
        oe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        s.length > 0 && oe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments,
            s.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
        }
        )).always(n && function(e, t) {
            s.each((function() {
                n.apply(this, o || [e.responseText, t, e])
            }
            ))
        }
        ),
        this
    }
    ,
    oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        oe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    oe.expr.filters.animated = function(e) {
        return oe.grep(oe.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ,
    oe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = oe.css(e, "position"), u = oe(e), d = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            o = oe.css(e, "top"),
            l = oe.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top,
            r = i.left) : (s = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + r),
            "using"in t ? t.using.call(e, d) : u.css(d)
        }
    },
    oe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    oe.offset.setOffset(this, e, t)
                }
                ));
            var t, n, i = this[0], r = {
                top: 0,
                left: 0
            }, o = i && i.ownerDocument;
            return o ? (t = o.documentElement,
            oe.contains(t, i) ? (r = i.getBoundingClientRect(),
            n = G(o),
            {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                oe.nodeName(e[0], "html") || (i = e.offset()),
                i.top += oe.css(e[0], "borderTopWidth", !0),
                i.left += oe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - i.top - oe.css(n, "marginTop", !0),
                    left: t.left - i.left - oe.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent; e && "static" === oe.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ze
            }
            ))
        }
    }),
    oe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(e, t) {
        var n = "pageYOffset" === t;
        oe.fn[e] = function(i) {
            return xe(this, (function(e, i, r) {
                var o = G(e);
                if (void 0 === r)
                    return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }
            ), e, i, arguments.length)
        }
    }
    )),
    oe.each(["top", "left"], (function(e, t) {
        oe.cssHooks[t] = T(ie.pixelPosition, (function(e, n) {
            if (n)
                return n = S(e, t),
                Ve.test(n) ? oe(e).position()[t] + "px" : n
        }
        ))
    }
    )),
    oe.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        oe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, i) {
            oe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === r ? "margin" : "border");
                return xe(this, (function(t, n, i) {
                    var r;
                    return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? oe.css(t, n, s) : oe.style(t, n, i, s)
                }
                ), t, o ? i : void 0, o, null)
            }
        }
        ))
    }
    )),
    oe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    oe.fn.andSelf = oe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return oe
    }
    ));
    var Ft = e.jQuery
      , zt = e.$;
    return oe.noConflict = function(t) {
        return e.$ === oe && (e.$ = zt),
        t && e.jQuery === oe && (e.jQuery = Ft),
        oe
    }
    ,
    t || (e.jQuery = e.$ = oe),
    oe
}
)),
function() {
    "use strict";
    function e(e) {
        return "function" == typeof e || "object" == typeof e && null !== e
    }
    function t(e) {
        return "function" == typeof e
    }
    function n(e) {
        U = e
    }
    function i(e) {
        G = e
    }
    function r() {
        return function() {
            process.nextTick(c)
        }
    }
    function o() {
        return function() {
            H(c)
        }
    }
    function s() {
        var e = 0
          , t = new Q(c)
          , n = document.createTextNode("");
        return t.observe(n, {
            characterData: !0
        }),
        function() {
            n.data = e = ++e % 2
        }
    }
    function a() {
        var e = new MessageChannel;
        return e.port1.onmessage = c,
        function() {
            e.port2.postMessage(0)
        }
    }
    function l() {
        return function() {
            setTimeout(c, 1)
        }
    }
    function c() {
        for (var e = 0; e < B; e += 2) {
            (0,
            J[e])(J[e + 1]),
            J[e] = void 0,
            J[e + 1] = void 0
        }
        B = 0
    }
    function u() {
        try {
            var e = require("vertx");
            return H = e.runOnLoop || e.runOnContext,
            o()
        } catch (e) {
            return l()
        }
    }
    function d(e, t) {
        var n = this
          , i = new this.constructor(f);
        void 0 === i[ne] && I(i);
        var r = n._state;
        if (r) {
            var o = arguments[r - 1];
            G((function() {
                D(r, i, o, n._result)
            }
            ))
        } else
            C(n, i, e, t);
        return i
    }
    function h(e) {
        var t = this;
        if (e && "object" == typeof e && e.constructor === t)
            return e;
        var n = new t(f);
        return _(n, e),
        n
    }
    function f() {}
    function p() {
        return new TypeError("You cannot resolve a promise with itself")
    }
    function m() {
        return new TypeError("A promises callback cannot return that same promise.")
    }
    function g(e) {
        try {
            return e.then
        } catch (e) {
            return se.error = e,
            se
        }
    }
    function v(e, t, n, i) {
        try {
            e.call(t, n, i)
        } catch (e) {
            return e
        }
    }
    function y(e, t, n) {
        G((function(e) {
            var i = !1
              , r = v(n, t, (function(n) {
                i || (i = !0,
                t !== n ? _(e, n) : k(e, n))
            }
            ), (function(t) {
                i || (i = !0,
                $(e, t))
            }
            ), "Settle: " + (e._label || " unknown promise"));
            !i && r && (i = !0,
            $(e, r))
        }
        ), e)
    }
    function b(e, t) {
        t._state === re ? k(e, t._result) : t._state === oe ? $(e, t._result) : C(t, void 0, (function(t) {
            _(e, t)
        }
        ), (function(t) {
            $(e, t)
        }
        ))
    }
    function w(e, n, i) {
        n.constructor === e.constructor && i === ee && constructor.resolve === te ? b(e, n) : i === se ? $(e, se.error) : void 0 === i ? k(e, n) : t(i) ? y(e, n, i) : k(e, n)
    }
    function _(t, n) {
        t === n ? $(t, p()) : e(n) ? w(t, n, g(n)) : k(t, n)
    }
    function x(e) {
        e._onerror && e._onerror(e._result),
        S(e)
    }
    function k(e, t) {
        e._state === ie && (e._result = t,
        e._state = re,
        0 !== e._subscribers.length && G(S, e))
    }
    function $(e, t) {
        e._state === ie && (e._state = oe,
        e._result = t,
        G(x, e))
    }
    function C(e, t, n, i) {
        var r = e._subscribers
          , o = r.length;
        e._onerror = null,
        r[o] = t,
        r[o + re] = n,
        r[o + oe] = i,
        0 === o && e._state && G(S, e)
    }
    function S(e) {
        var t = e._subscribers
          , n = e._state;
        if (0 !== t.length) {
            for (var i, r, o = e._result, s = 0; s < t.length; s += 3)
                i = t[s],
                r = t[s + n],
                i ? D(n, i, r, o) : r(o);
            e._subscribers.length = 0
        }
    }
    function T() {
        this.error = null
    }
    function E(e, t) {
        try {
            return e(t)
        } catch (e) {
            return ae.error = e,
            ae
        }
    }
    function D(e, n, i, r) {
        var o, s, a, l, c = t(i);
        if (c) {
            if ((o = E(i, r)) === ae ? (l = !0,
            s = o.error,
            o = null) : a = !0,
            n === o)
                return void $(n, m())
        } else
            o = r,
            a = !0;
        n._state !== ie || (c && a ? _(n, o) : l ? $(n, s) : e === re ? k(n, o) : e === oe && $(n, o))
    }
    function A(e, t) {
        try {
            t((function(t) {
                _(e, t)
            }
            ), (function(t) {
                $(e, t)
            }
            ))
        } catch (t) {
            $(e, t)
        }
    }
    function M() {
        return le++
    }
    function I(e) {
        e[ne] = le++,
        e._state = void 0,
        e._result = void 0,
        e._subscribers = []
    }
    function P(e) {
        return new fe(this,e).promise
    }
    function O(e) {
        var t = this;
        return W(e) ? new t((function(n, i) {
            for (var r = e.length, o = 0; o < r; o++)
                t.resolve(e[o]).then(n, i)
        }
        )) : new t((function(e, t) {
            t(new TypeError("You must pass an array to race."))
        }
        ))
    }
    function L(e) {
        var t = new this(f);
        return $(t, e),
        t
    }
    function j() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }
    function N() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }
    function F(e) {
        this[ne] = M(),
        this._result = this._state = void 0,
        this._subscribers = [],
        f !== e && ("function" != typeof e && j(),
        this instanceof F ? A(this, e) : N())
    }
    function z(e, t) {
        this._instanceConstructor = e,
        this.promise = new e(f),
        this.promise[ne] || I(this.promise),
        Array.isArray(t) ? (this._input = t,
        this.length = t.length,
        this._remaining = t.length,
        this._result = new Array(this.length),
        0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0,
        this._enumerate(),
        0 === this._remaining && k(this.promise, this._result))) : $(this.promise, q())
    }
    function q() {
        return new Error("Array Methods must be provided an Array")
    }
    function R() {
        var e;
        if ("undefined" != typeof global)
            e = global;
        else if ("undefined" != typeof self)
            e = self;
        else
            try {
                e = Function("return this")()
            } catch (e) {
                throw new Error("polyfill failed because global object is unavailable in this environment")
            }
        var t = e.Promise;
        t && "[object Promise]" === Object.prototype.toString.call(t.resolve()) && !t.cast || (e.Promise = he)
    }
    var H, U, Y, W = Array.isArray ? Array.isArray : function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    , B = 0, G = function(e, t) {
        J[B] = e,
        J[B + 1] = t,
        2 === (B += 2) && (U ? U(c) : Y())
    }, V = "undefined" != typeof window ? window : void 0, X = V || {}, Q = X.MutationObserver || X.WebKitMutationObserver, Z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), K = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, J = new Array(1e3);
    Y = Z ? r() : Q ? s() : K ? a() : void 0 === V && "function" == typeof require ? u() : l();
    var ee = d
      , te = h
      , ne = Math.random().toString(36).substring(16)
      , ie = void 0
      , re = 1
      , oe = 2
      , se = new T
      , ae = new T
      , le = 0
      , ce = P
      , ue = O
      , de = L
      , he = F;
    F.all = ce,
    F.race = ue,
    F.resolve = te,
    F.reject = de,
    F._setScheduler = n,
    F._setAsap = i,
    F._asap = G,
    F.prototype = {
        constructor: F,
        then: ee,
        catch: function(e) {
            return this.then(null, e)
        }
    };
    var fe = z;
    z.prototype._enumerate = function() {
        for (var e = this.length, t = this._input, n = 0; this._state === ie && n < e; n++)
            this._eachEntry(t[n], n)
    }
    ,
    z.prototype._eachEntry = function(e, t) {
        var n = this._instanceConstructor
          , i = n.resolve;
        if (i === te) {
            var r = g(e);
            if (r === ee && e._state !== ie)
                this._settledAt(e._state, t, e._result);
            else if ("function" != typeof r)
                this._remaining--,
                this._result[t] = e;
            else if (n === he) {
                var o = new n(f);
                w(o, e, r),
                this._willSettleAt(o, t)
            } else
                this._willSettleAt(new n((function(t) {
                    t(e)
                }
                )), t)
        } else
            this._willSettleAt(i(e), t)
    }
    ,
    z.prototype._settledAt = function(e, t, n) {
        var i = this.promise;
        i._state === ie && (this._remaining--,
        e === oe ? $(i, n) : this._result[t] = n),
        0 === this._remaining && k(i, this._result)
    }
    ,
    z.prototype._willSettleAt = function(e, t) {
        var n = this;
        C(e, void 0, (function(e) {
            n._settledAt(re, t, e)
        }
        ), (function(e) {
            n._settledAt(oe, t, e)
        }
        ))
    }
    ;
    var pe = R
      , me = {
        Promise: he,
        polyfill: pe
    };
    "function" == typeof define && define.amd ? define((function() {
        return me
    }
    )) : "undefined" != typeof module && module.exports ? module.exports = me : void 0 !== this && (this.ES6Promise = me),
    pe()
}
.call(this),
Array.from || (Array.from = function() {
    var e = Object.prototype.toString
      , t = function(t) {
        return "function" == typeof t || "[object Function]" === e.call(t)
    }
      , n = function(e) {
        var t = Number(e);
        return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
    }
      , i = Math.pow(2, 53) - 1
      , r = function(e) {
        var t = n(e);
        return Math.min(Math.max(t, 0), i)
    };
    return function(e) {
        var n = this
          , i = Object(e);
        if (null == e)
            throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var o, s = arguments.length > 1 ? arguments[1] : void 0;
        if (void 0 !== s) {
            if (!t(s))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (o = arguments[2])
        }
        for (var a, l = r(i.length), c = t(n) ? Object(new n(l)) : new Array(l), u = 0; u < l; )
            a = i[u],
            c[u] = s ? void 0 === o ? s(a, u) : s.call(o, a, u) : a,
            u += 1;
        return c.length = l,
        c
    }
}()),
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
function() {
    window.savePreference = function(e, t) {
        return void 0 !== gon.user_id ? $.ajax("/preferences", {
            type: "PUT",
            dataType: "text",
            data: {
                name: e,
                value: t
            }
        }) : Promise.reject("Cannot save preferences because the user is not defined.")
    }
}
.call(this),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && "object" == typeof module.exports ? e(require("jquery")) : e(jQuery)
}((function(e) {
    function t() {
        var t = o.settings;
        if (t.autoDispose && !e.contains(document.documentElement, this))
            return e(this).timeago("dispose"),
            this;
        var s = n(this);
        return isNaN(s.datetime) || (0 === t.cutoff || Math.abs(r(s.datetime)) < t.cutoff ? e(this).text(i(s.datetime, e(this).attr("lang") ? e(this).attr("lang") : o.settings.lang)) : e(this).attr("title").length > 0 && e(this).text(e(this).attr("title"))),
        this
    }
    function n(t) {
        if (!(t = e(t)).data("timeago")) {
            t.data("timeago", {
                datetime: o.datetime(t)
            });
            var n = e.trim(t.text());
            o.settings.localeTitle ? t.attr("title", t.data("timeago").datetime.toLocaleString()) : !(n.length > 0) || o.isTime(t) && t.attr("title") || t.attr("title", n)
        }
        return t.data("timeago")
    }
    function i(e, t) {
        return o.inWords(r(e), t)
    }
    function r(e) {
        return (new Date).getTime() - e.getTime()
    }
    e.timeago = function(t) {
        return t instanceof Date ? i(t) : i("string" == typeof t ? e.timeago.parse(t) : "number" == typeof t ? new Date(t) : e.timeago.datetime(t))
    }
    ;
    var o = e.timeago;
    e.extend(e.timeago, {
        settings: {
            refreshMillis: 6e4,
            allowPast: !0,
            allowFuture: !1,
            localeTitle: !1,
            cutoff: 0,
            autoDispose: !0,
            lang: "en",
            strings: {
                en: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    inPast: "any moment now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                }
            }
        },
        inWords: function(t, n) {
            function i(n, i) {
                var o = e.isFunction(n) ? n(i, t) : n
                  , s = r.numbers && r.numbers[i] || i;
                return o.replace(/%d/i, s)
            }
            if (!this.settings.allowPast && !this.settings.allowFuture)
                throw "timeago allowPast and allowFuture settings can not both be set to false.";
            var r = this.settings.strings[n] || this.settings.strings[this.settings.lang] || this.settings.strings.en
              , o = r.prefixAgo
              , s = r.suffixAgo;
            if (this.settings.allowFuture && t < 0 && (o = r.prefixFromNow,
            s = r.suffixFromNow),
            !this.settings.allowPast && t >= 0)
                return r.inPast;
            var a = Math.abs(t) / 1e3
              , l = a / 60
              , c = l / 60
              , u = c / 24
              , d = u / 365
              , h = a < 45 && i(r.seconds, Math.round(a)) || a < 90 && i(r.minute, 1) || l < 45 && i(r.minutes, Math.round(l)) || l < 90 && i(r.hour, 1) || c < 24 && i(r.hours, Math.round(c)) || c < 42 && i(r.day, 1) || u < 30 && i(r.days, Math.round(u)) || u < 45 && i(r.month, 1) || u < 365 && i(r.months, Math.round(u / 30)) || d < 1.5 && i(r.year, 1) || i(r.years, Math.round(d))
              , f = r.wordSeparator || "";
            return void 0 === r.wordSeparator && (f = " "),
            e.trim([o, h, s].join(f))
        },
        parse: function(t) {
            var n = e.trim(t);
            return n = (n = (n = (n = (n = n.replace(/\.\d+/, "")).replace(/-/, "/").replace(/-/, "/")).replace(/T/, " ").replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")).replace(/([\+\-]\d\d)$/, " $100"),
            new Date(n)
        },
        datetime: function(t) {
            var n = o.isTime(t) ? e(t).attr("datetime") : e(t).attr("title");
            return o.parse(n)
        },
        isTime: function(t) {
            return "time" === e(t).get(0).tagName.toLowerCase()
        }
    });
    var s = {
        init: function() {
            s.dispose.call(this);
            var n = e.proxy(t, this);
            n();
            var i = o.settings;
            i.refreshMillis > 0 && (this._timeagoInterval = setInterval(n, i.refreshMillis))
        },
        update: function(n) {
            var i = n instanceof Date ? n : o.parse(n);
            e(this).data("timeago", {
                datetime: i
            }),
            o.settings.localeTitle && e(this).attr("title", i.toLocaleString()),
            t.apply(this)
        },
        updateFromDOM: function() {
            e(this).data("timeago", {
                datetime: o.parse(o.isTime(this) ? e(this).attr("datetime") : e(this).attr("title"))
            }),
            t.apply(this)
        },
        dispose: function() {
            this._timeagoInterval && (window.clearInterval(this._timeagoInterval),
            this._timeagoInterval = null)
        }
    };
    e.fn.timeago = function(e, t) {
        var n = e ? s[e] : s.init;
        if (!n)
            throw new Error("Unknown function name '" + e + "' for timeago");
        return this.each((function() {
            n.call(this, t)
        }
        )),
        this
    }
    ,
    document.createElement("abbr"),
    document.createElement("time")
}
)),
function(e) {
    var t = function() {
        e("time[data-time-ago]").timeago()
    };
    e(t),
    e(document).on("turbolinks:load page:load ajax:success", t)
}(jQuery),
function(e, t) {
    "use strict";
    var n;
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i),
            !1 !== r.result
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && !1 !== e.data("remote")
        },
        handleRemote: function(i) {
            var r, o, s, a, l, c;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null,
                l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType,
                i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"),
                    o = i.data("ujs:submit-button-formaction") || i.attr("action"),
                    s = e(i[0]).serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (s.push(u),
                    i.data("ujs:submit-button", null)),
                    i.data("ujs:submit-button-formmethod", null),
                    i.data("ujs:submit-button-formaction", null)
                } else
                    i.is(n.inputChangeSelector) ? (r = i.data("method"),
                    o = i.data("url"),
                    s = i.serialize(),
                    i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get",
                    o = i.data("url"),
                    s = i.serialize(),
                    i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"),
                    o = n.href(i),
                    s = i.data("params") || null);
                return c = {
                    type: r || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function(e, r) {
                        if (r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script),
                        !n.fire(i, "ajax:beforeSend", [e, r]))
                            return !1;
                        i.trigger("ajax:send", e)
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                },
                a && (c.xhrFields = {
                    withCredentials: a
                }),
                o && (c.url = o),
                n.ajax(c)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e,
                n.href = n.href,
                !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (e) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i)
              , o = i.data("method")
              , s = i.attr("target")
              , a = n.csrfToken()
              , l = n.csrfParam()
              , c = e('<form method="post" action="' + r + '"></form>')
              , u = '<input name="_method" value="' + o + '" type="hidden" />';
            l === t || a === t || n.isCrossDomain(r) || (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
            s && c.attr("target", s),
            c.hide().append(u).appendTo("body"),
            c.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each((function() {
                n.disableFormElement(e(this))
            }
            ))
        },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val",
            (i = e.data("disable-with")) !== t && (e.data("ujs:enable-with", e[n]()),
            e[n](i)),
            e.prop("disabled", !0),
            e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each((function() {
                n.enableFormElement(e(this))
            }
            ))
        },
        enableFormElement: function(e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.prop("disabled", !1),
            e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"), r = !1;
            if (!i)
                return !0;
            if (n.fire(e, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (e) {
                    (console.error || console.log).call(console, e.stack || e)
                }
                t = n.fire(e, "confirm:complete", [r])
            }
            return r && t
        },
        blankInputs: function(t, n, i) {
            var r, o, s, a = e(), l = n || "input,textarea", c = t.find(l), u = {};
            return c.each((function() {
                (r = e(this)).is("input[type=radio]") ? (s = r.attr("name"),
                u[s] || (0 === t.find('input[type=radio]:checked[name="' + s + '"]').length && (o = t.find('input[type=radio][name="' + s + '"]'),
                a = a.add(o)),
                u[s] = s)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (a = a.add(r))
            }
            )),
            !!a.length && a
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
        },
        disableElement: function(e) {
            var i = e.data("disable-with");
            i !== t && (e.data("ujs:enable-with", e.html()),
            e.html(i)),
            e.bind("click.railsDisable", (function(e) {
                return n.stopEverything(e)
            }
            )),
            e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.unbind("click.railsDisable"),
            e.removeData("ujs:disabled")
        }
    },
    n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter((function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }
    )),
    e(window).on("pageshow.rails", (function() {
        e(e.rails.enableSelector).each((function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }
        )),
        e(e.rails.linkDisableSelector).each((function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        }
        ))
    }
    )),
    i.on("ajax:complete", n.linkDisableSelector, (function() {
        n.enableElement(e(this))
    }
    )),
    i.on("ajax:complete", n.buttonDisableSelector, (function() {
        n.enableFormElement(e(this))
    }
    )),
    i.on("click.rails", n.linkClickSelector, (function(t) {
        var i = e(this)
          , r = i.data("method")
          , o = i.data("params")
          , s = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i))
            return n.stopEverything(t);
        if (!s && i.is(n.linkDisableSelector) && n.disableElement(i),
        n.isRemote(i)) {
            if (s && (!r || "GET" === r) && !o)
                return !0;
            var a = n.handleRemote(i);
            return !1 === a ? n.enableElement(i) : a.fail((function() {
                n.enableElement(i)
            }
            )),
            !1
        }
        return r ? (n.handleMethod(i),
        !1) : void 0
    }
    )),
    i.on("click.rails", n.buttonClickSelector, (function(t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i))
            return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return !1 === r ? n.enableFormElement(i) : r.fail((function() {
            n.enableFormElement(i)
        }
        )),
        !1
    }
    )),
    i.on("change.rails", n.inputChangeSelector, (function(t) {
        var i = e(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i),
        !1) : n.stopEverything(t)
    }
    )),
    i.on("submit.rails", n.formSubmitSelector, (function(i) {
        var r, o, s = e(this), a = n.isRemote(s);
        if (!n.allowAction(s))
            return n.stopEverything(i);
        if (s.attr("novalidate") === t)
            if (s.data("ujs:formnovalidate-button") === t) {
                if ((r = n.blankInputs(s, n.requiredInputSelector, !1)) && n.fire(s, "ajax:aborted:required", [r]))
                    return n.stopEverything(i)
            } else
                s.data("ujs:formnovalidate-button", t);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout((function() {
                    n.disableFormElements(s)
                }
                ), 13);
                var l = n.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout((function() {
                    n.enableFormElements(s)
                }
                ), 13),
                l
            }
            return n.handleRemote(s),
            !1
        }
        setTimeout((function() {
            n.disableFormElements(s)
        }
        ), 13)
    }
    )),
    i.on("click.rails", n.formInputClickSelector, (function(t) {
        var i = e(this);
        if (!n.allowAction(i))
            return n.stopEverything(t);
        var r = i.attr("name")
          , o = r ? {
            name: r,
            value: i.val()
        } : null
          , s = i.closest("form");
        0 === s.length && (s = e("#" + i.attr("form"))),
        s.data("ujs:submit-button", o),
        s.data("ujs:formnovalidate-button", i.attr("formnovalidate")),
        s.data("ujs:submit-button-formaction", i.attr("formaction")),
        s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }
    )),
    i.on("ajax:send.rails", n.formSubmitSelector, (function(t) {
        this === t.target && n.disableFormElements(e(this))
    }
    )),
    i.on("ajax:complete.rails", n.formSubmitSelector, (function(t) {
        this === t.target && n.enableFormElements(e(this))
    }
    )),
    e((function() {
        n.refreshCSRFTokens()
    }
    )))
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}((function(e) {
    function t(e) {
        return a.raw ? e : encodeURIComponent(e)
    }
    function n(e) {
        return a.raw ? e : decodeURIComponent(e)
    }
    function i(e) {
        return t(a.json ? JSON.stringify(e) : String(e))
    }
    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(s, " ")),
            a.json ? JSON.parse(e) : e
        } catch (e) {}
    }
    function o(t, n) {
        var i = a.raw ? t : r(t);
        return e.isFunction(n) ? n(i) : i
    }
    var s = /\+/g
      , a = e.cookie = function(r, s, l) {
        if (void 0 !== s && !e.isFunction(s)) {
            if ("number" == typeof (l = e.extend({}, a.defaults, l)).expires) {
                var c = l.expires
                  , u = l.expires = new Date;
                u.setTime(+u + 864e5 * c)
            }
            return document.cookie = [t(r), "=", i(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
        }
        for (var d = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], f = 0, p = h.length; f < p; f++) {
            var m = h[f].split("=")
              , g = n(m.shift())
              , v = m.join("=");
            if (r && r === g) {
                d = o(v, s);
                break
            }
            r || void 0 === (v = o(v)) || (d[g] = v)
        }
        return d
    }
    ;
    a.defaults = {},
    e.removeCookie = function(t, n) {
        return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })),
        !e.cookie(t))
    }
}
)),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    "use strict";
    function t(t) {
        return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }
    function n(t) {
        return e.isFunction(t) || e.isPlainObject(t) ? t : {
            top: t,
            left: t
        }
    }
    var i = e.scrollTo = function(t, n, i) {
        return e(window).scrollTo(t, n, i)
    }
    ;
    return i.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    },
    e.fn.scrollTo = function(r, o, s) {
        "object" == typeof o && (s = o,
        o = 0),
        "function" == typeof s && (s = {
            onAfter: s
        }),
        "max" === r && (r = 9e9),
        s = e.extend({}, i.defaults, s),
        o = o || s.duration;
        var a = s.queue && s.axis.length > 1;
        return a && (o /= 2),
        s.offset = n(s.offset),
        s.over = n(s.over),
        this.each((function() {
            function l(t) {
                var n = e.extend({}, s, {
                    queue: !0,
                    duration: o,
                    complete: t && function() {
                        t.call(d, f, s)
                    }
                });
                h.animate(p, n)
            }
            if (null !== r) {
                var c, u = t(this), d = u ? this.contentWindow || window : this, h = e(d), f = r, p = {};
                switch (typeof f) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                        f = n(f);
                        break
                    }
                    if (!(f = u ? e(f) : e(f, d)).length)
                        return;
                case "object":
                    (f.is || f.style) && (c = (f = e(f)).offset())
                }
                var m = e.isFunction(s.offset) && s.offset(d, f) || s.offset;
                e.each(s.axis.split(""), (function(e, t) {
                    var n = "x" === t ? "Left" : "Top"
                      , r = n.toLowerCase()
                      , o = "scroll" + n
                      , g = h[o]()
                      , v = i.max(d, t);
                    if (c)
                        p[o] = c[r] + (u ? 0 : g - h.offset()[r]),
                        s.margin && (p[o] -= parseInt(f.css("margin" + n), 10) || 0,
                        p[o] -= parseInt(f.css("border" + n + "Width"), 10) || 0),
                        p[o] += m[r] || 0,
                        s.over[r] && (p[o] += f["x" === t ? "width" : "height"]() * s.over[r]);
                    else {
                        var y = f[r];
                        p[o] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y
                    }
                    s.limit && /^\d+$/.test(p[o]) && (p[o] = p[o] <= 0 ? 0 : Math.min(p[o], v)),
                    !e && s.axis.length > 1 && (g === p[o] ? p = {} : a && (l(s.onAfterFirst),
                    p = {}))
                }
                )),
                l(s.onAfter)
            }
        }
        ))
    }
    ,
    i.max = function(n, i) {
        var r = "x" === i ? "Width" : "Height"
          , o = "scroll" + r;
        if (!t(n))
            return n[o] - e(n)[r.toLowerCase()]();
        var s = "client" + r
          , a = n.ownerDocument || n.document
          , l = a.documentElement
          , c = a.body;
        return Math.max(l[o], c[o]) - Math.min(l[s], c[s])
    }
    ,
    e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = {
        get: function(t) {
            return e(t.elem)[t.prop]()
        },
        set: function(t) {
            var n = this.get(t);
            if (t.options.interrupt && t._last && t._last !== n)
                return e(t.elem).stop();
            var i = Math.round(t.now);
            n !== i && (e(t.elem)[t.prop](i),
            t._last = this.get(t))
        }
    },
    i
}
)),
function(e, t, n) {
    "use strict";
    function i(t, m, g) {
        function j(n) {
            var i = Ie.length;
            if ($e.old = e.extend({}, $e),
            xe = be ? 0 : we[ve.horizontal ? "width" : "height"](),
            Te = Ce[ve.horizontal ? "width" : "height"](),
            ke = be ? t : _e[ve.horizontal ? "outerWidth" : "outerHeight"](),
            Ie.length = 0,
            $e.start = 0,
            $e.end = P(ke - xe, 0),
            Ue) {
                Oe.length,
                Pe = _e.children(ve.itemSelector),
                Oe.length = 0;
                var r, o = c(_e, ve.horizontal ? "paddingLeft" : "paddingTop"), s = c(_e, ve.horizontal ? "paddingRight" : "paddingBottom"), a = "border-box" === e(Pe).css("boxSizing"), l = "none" !== Pe.css("float"), d = 0, h = Pe.length - 1;
                ke = 0,
                Pe.each((function(t, n) {
                    var i = e(n)
                      , a = n.getBoundingClientRect()
                      , u = I(ve.horizontal ? a.width || a.right - a.left : a.height || a.bottom - a.top)
                      , f = c(i, ve.horizontal ? "marginLeft" : "marginTop")
                      , p = c(i, ve.horizontal ? "marginRight" : "marginBottom")
                      , m = u + f + p
                      , g = !f || !p
                      , v = {};
                    v.el = n,
                    v.size = g ? u : m,
                    v.half = v.size / 2,
                    v.start = ke + (g ? f : 0),
                    v.center = v.start - I(xe / 2 - v.size / 2),
                    v.end = v.start - xe + v.size,
                    t || (ke += o),
                    ke += m,
                    ve.horizontal || l || p && f && t > 0 && (ke -= O(f, p)),
                    t === h && (v.end += s,
                    ke += s,
                    d = g ? p : 0),
                    Oe.push(v),
                    r = v
                }
                )),
                _e[0].style[ve.horizontal ? "width" : "height"] = (a ? ke : ke - o - s) + "px",
                ke -= d,
                Oe.length ? ($e.start = Oe[0][Re ? "center" : "start"],
                $e.end = Re ? r.center : xe < ke ? r.end : $e.start) : $e.start = $e.end = 0
            }
            if ($e.center = I($e.end / 2 + $e.start / 2),
            G(),
            Se.length && Te > 0 && (ve.dynamicHandle ? (Ee = u(Ee = $e.start === $e.end ? Te : I(Te * xe / ke), ve.minHandleSize, Te),
            Se[0].style[ve.horizontal ? "width" : "height"] = Ee + "px") : Ee = Se[ve.horizontal ? "outerWidth" : "outerHeight"](),
            De.end = Te - Ee,
            rt || z()),
            !be && xe > 0) {
                var f = $e.start
                  , p = "";
                if (Ue)
                    e.each(Oe, (function(e, t) {
                        Re ? Ie.push(t.center) : t.start + t.size > f && f <= $e.end && (f = t.start,
                        Ie.push(f),
                        (f += xe) > $e.end && f < $e.end + xe && Ie.push($e.end))
                    }
                    ));
                else
                    for (; f - xe < $e.end; )
                        Ie.push(f),
                        f += xe;
                if (Ae[0] && i !== Ie.length) {
                    for (var m = 0; m < Ie.length; m++)
                        p += ve.pageBuilder.call(ye, m);
                    (Me = Ae.html(p).children()).eq(Le.activePage).addClass(ve.activeClass)
                }
            }
            if (Le.slideeSize = ke,
            Le.frameSize = xe,
            Le.sbSize = Te,
            Le.handleSize = Ee,
            Ue) {
                n && null != ve.startAt && (W(ve.startAt),
                ye[He ? "toCenter" : "toStart"](ve.startAt));
                var g = Oe[Le.activeItem];
                N(He && g ? g.center : u($e.dest, $e.start, $e.end))
            } else
                n ? null != ve.startAt && N(ve.startAt, 1) : N(u($e.dest, $e.start, $e.end));
            pe("load")
        }
        function N(e, t, n) {
            if (Ue && nt.released && !n) {
                var i = B(e)
                  , r = e > $e.start && e < $e.end;
                He ? (r && (e = Oe[i.centerItem].center),
                Re && ve.activateMiddle && W(i.centerItem)) : r && (e = Oe[i.firstItem].start)
            }
            nt.init && nt.slidee && ve.elasticBounds ? e > $e.end ? e = $e.end + (e - $e.end) / 6 : e < $e.start && (e = $e.start + (e - $e.start) / 6) : e = u(e, $e.start, $e.end),
            et.start = +new Date,
            et.time = 0,
            et.from = $e.cur,
            et.to = e,
            et.delta = e - $e.cur,
            et.tweesing = nt.tweese || nt.init && !nt.slidee,
            et.immediate = !et.tweesing && (t || nt.init && nt.slidee || !ve.speed),
            nt.tweese = 0,
            e !== $e.dest && ($e.dest = e,
            pe("change"),
            rt || F()),
            Z(),
            G(),
            V(),
            q()
        }
        function F() {
            if (ye.initialized) {
                if (!rt)
                    return rt = b(F),
                    void (nt.released && pe("moveStart"));
                et.immediate ? $e.cur = et.to : et.tweesing ? (et.tweeseDelta = et.to - $e.cur,
                D(et.tweeseDelta) < .1 ? $e.cur = et.to : $e.cur += et.tweeseDelta * (nt.released ? ve.swingSpeed : ve.syncSpeed)) : (et.time = O(+new Date - et.start, ve.speed),
                $e.cur = et.from + et.delta * e.easing[ve.easing](et.time / ve.speed, et.time, 0, 1, ve.speed)),
                et.to === $e.cur ? ($e.cur = et.to,
                nt.tweese = rt = 0) : rt = b(F),
                pe("move"),
                be || (h ? _e[0].style[h] = f + (ve.horizontal ? "translateX" : "translateY") + "(" + -$e.cur + "px)" : _e[0].style[ve.horizontal ? "left" : "top"] = -I($e.cur) + "px"),
                !rt && nt.released && pe("moveEnd"),
                z()
            }
        }
        function z() {
            Se.length && (De.cur = $e.start === $e.end ? 0 : ((nt.init && !nt.slidee ? $e.dest : $e.cur) - $e.start) / ($e.end - $e.start) * De.end,
            De.cur = u(I(De.cur), De.start, De.end),
            Je.hPos !== De.cur && (Je.hPos = De.cur,
            h ? Se[0].style[h] = f + (ve.horizontal ? "translateX" : "translateY") + "(" + De.cur + "px)" : Se[0].style[ve.horizontal ? "left" : "top"] = De.cur + "px"))
        }
        function q() {
            Me[0] && Je.page !== Le.activePage && (Je.page = Le.activePage,
            Me.removeClass(ve.activeClass).eq(Le.activePage).addClass(ve.activeClass),
            pe("activePage", Je.page))
        }
        function R() {
            tt.speed && $e.cur !== (tt.speed > 0 ? $e.end : $e.start) || ye.stop(),
            at = nt.init ? b(R) : 0,
            tt.now = +new Date,
            tt.pos = $e.cur + (tt.now - tt.lastTime) / 1e3 * tt.speed,
            N(nt.init ? tt.pos : I(tt.pos)),
            nt.init || $e.cur !== $e.dest || pe("moveEnd"),
            tt.lastTime = tt.now
        }
        function H(e, t, i) {
            if ("boolean" === r(t) && (i = t,
            t = n),
            t === n)
                N($e[e], i);
            else {
                if (He && "center" !== e)
                    return;
                var o = ye.getPos(t);
                o && N(o[e], i, !He)
            }
        }
        function U(e) {
            return null != e ? l(e) ? e >= 0 && e < Oe.length ? e : -1 : Pe.index(e) : -1
        }
        function Y(e) {
            return U(l(e) && e < 0 ? e + Oe.length : e)
        }
        function W(e, t) {
            var n = U(e);
            return !(!Ue || n < 0) && ((Je.active !== n || t) && (Pe.eq(Le.activeItem).removeClass(ve.activeClass),
            Pe.eq(n).addClass(ve.activeClass),
            Je.active = Le.activeItem = n,
            V(),
            pe("active", n)),
            n)
        }
        function B(e) {
            e = u(l(e) ? e : $e.dest, $e.start, $e.end);
            var t = {}
              , n = Re ? 0 : xe / 2;
            if (!be)
                for (var i = 0, r = Ie.length; i < r; i++) {
                    if (e >= $e.end || i === Ie.length - 1) {
                        t.activePage = Ie.length - 1;
                        break
                    }
                    if (e <= Ie[i] + n) {
                        t.activePage = i;
                        break
                    }
                }
            if (Ue) {
                for (var o = !1, s = !1, a = !1, c = 0, d = Oe.length; c < d; c++)
                    if (!1 === o && e <= Oe[c].start + Oe[c].half && (o = c),
                    !1 === a && e <= Oe[c].center + Oe[c].half && (a = c),
                    c === d - 1 || e <= Oe[c].end + Oe[c].half) {
                        s = c;
                        break
                    }
                t.firstItem = l(o) ? o : 0,
                t.centerItem = l(a) ? a : t.firstItem,
                t.lastItem = l(s) ? s : t.centerItem
            }
            return t
        }
        function G(t) {
            e.extend(Le, B(t))
        }
        function V() {
            var e = $e.dest <= $e.start
              , t = $e.dest >= $e.end
              , n = (e ? 1 : 0) | (t ? 2 : 0);
            if (Je.slideePosState !== n && (Je.slideePosState = n,
            Qe.is("button,input") && Qe.prop("disabled", e),
            Ze.is("button,input") && Ze.prop("disabled", t),
            Qe.add(Ge)[e ? "addClass" : "removeClass"](ve.disabledClass),
            Ze.add(Be)[t ? "addClass" : "removeClass"](ve.disabledClass)),
            Je.fwdbwdState !== n && nt.released && (Je.fwdbwdState = n,
            Ge.is("button,input") && Ge.prop("disabled", e),
            Be.is("button,input") && Be.prop("disabled", t)),
            Ue && null != Le.activeItem) {
                var i = 0 === Le.activeItem
                  , r = Le.activeItem >= Oe.length - 1
                  , o = (i ? 1 : 0) | (r ? 2 : 0);
                Je.itemsButtonState !== o && (Je.itemsButtonState = o,
                Ve.is("button,input") && Ve.prop("disabled", i),
                Xe.is("button,input") && Xe.prop("disabled", r),
                Ve[i ? "addClass" : "removeClass"](ve.disabledClass),
                Xe[r ? "addClass" : "removeClass"](ve.disabledClass))
            }
        }
        function X(e, t, n) {
            if (e = Y(e),
            t = Y(t),
            e > -1 && t > -1 && e !== t && (!n || t !== e - 1) && (n || t !== e + 1)) {
                Pe.eq(e)[n ? "insertAfter" : "insertBefore"](Oe[t].el);
                var i = e < t ? e : n ? t : t - 1
                  , r = e > t ? e : n ? t + 1 : t
                  , o = e > t;
                null != Le.activeItem && (e === Le.activeItem ? Je.active = Le.activeItem = n ? o ? t + 1 : t : o ? t : t - 1 : Le.activeItem > i && Le.activeItem < r && (Je.active = Le.activeItem += o ? 1 : -1)),
                j()
            }
        }
        function Q(e, t) {
            for (var n = 0, i = Ke[e].length; n < i; n++)
                if (Ke[e][n] === t)
                    return n;
            return -1
        }
        function Z() {
            nt.released && !ye.isPaused && ye.resume()
        }
        function K(e) {
            return I(u(e, De.start, De.end) / De.end * ($e.end - $e.start)) + $e.start
        }
        function J() {
            nt.history[0] = nt.history[1],
            nt.history[1] = nt.history[2],
            nt.history[2] = nt.history[3],
            nt.history[3] = nt.delta
        }
        function ee(e) {
            nt.released = 0,
            nt.source = e,
            nt.slidee = "slidee" === e
        }
        function te(t) {
            var n = "touchstart" === t.type
              , i = t.data.source
              , r = "slidee" === i;
            nt.init || !n && re(t.target) || ("handle" !== i || ve.dragHandle && De.start !== De.end) && (r && !(n ? ve.touchDragging : ve.mouseDragging && t.which < 2) || (n || o(t),
            ee(i),
            nt.init = 0,
            nt.$source = e(t.target),
            nt.touch = n,
            nt.pointer = n ? t.originalEvent.touches[0] : t,
            nt.initX = nt.pointer.pageX,
            nt.initY = nt.pointer.pageY,
            nt.initPos = r ? $e.cur : De.cur,
            nt.start = +new Date,
            nt.time = 0,
            nt.path = 0,
            nt.delta = 0,
            nt.locked = 0,
            nt.history = [0, 0, 0, 0],
            nt.pathToLock = r ? n ? 30 : 10 : 0,
            w.on(n ? k : x, ne),
            ye.pause(1),
            (r ? _e : Se).addClass(ve.draggedClass),
            pe("moveStart"),
            r && (ot = setInterval(J, 10))))
        }
        function ne(e) {
            if (nt.released = "mouseup" === e.type || "touchend" === e.type,
            nt.pointer = nt.touch ? e.originalEvent[nt.released ? "changedTouches" : "touches"][0] : e,
            nt.pathX = nt.pointer.pageX - nt.initX,
            nt.pathY = nt.pointer.pageY - nt.initY,
            nt.path = A(M(nt.pathX, 2) + M(nt.pathY, 2)),
            nt.delta = ve.horizontal ? nt.pathX : nt.pathY,
            nt.released || !(nt.path < 1)) {
                if (!nt.init) {
                    if (nt.path < ve.dragThreshold)
                        return nt.released ? ie() : n;
                    if (!(ve.horizontal ? D(nt.pathX) > D(nt.pathY) : D(nt.pathX) < D(nt.pathY)))
                        return ie();
                    nt.init = 1
                }
                o(e),
                !nt.locked && nt.path > nt.pathToLock && nt.slidee && (nt.locked = 1,
                nt.$source.on(C, s)),
                nt.released && (ie(),
                ve.releaseSwing && nt.slidee && (nt.swing = (nt.delta - nt.history[0]) / 40 * 300,
                nt.delta += nt.swing,
                nt.tweese = D(nt.swing) > 10)),
                N(nt.slidee ? I(nt.initPos - nt.delta) : K(nt.initPos + nt.delta))
            }
        }
        function ie() {
            clearInterval(ot),
            nt.released = !0,
            w.off(nt.touch ? k : x, ne),
            (nt.slidee ? _e : Se).removeClass(ve.draggedClass),
            setTimeout((function() {
                nt.$source.off(C, s)
            }
            )),
            $e.cur === $e.dest && nt.init && pe("moveEnd"),
            ye.resume(1),
            nt.init = 0
        }
        function re(t) {
            return ~e.inArray(t.nodeName, T) || e(t).is(ve.interactive)
        }
        function oe() {
            ye.stop(),
            w.off("mouseup", oe)
        }
        function se(e) {
            switch (o(e),
            this) {
            case Be[0]:
            case Ge[0]:
                ye.moveBy(Be.is(this) ? ve.moveBy : -ve.moveBy),
                w.on("mouseup", oe);
                break;
            case Ve[0]:
                ye.prev();
                break;
            case Xe[0]:
                ye.next();
                break;
            case Qe[0]:
                ye.prevPage();
                break;
            case Ze[0]:
                ye.nextPage()
            }
        }
        function ae(e) {
            return it.curDelta = (ve.horizontal ? e.deltaY || e.deltaX : e.deltaY) || -e.wheelDelta,
            it.curDelta /= 1 === e.deltaMode ? 3 : 100,
            Ue ? (p = +new Date,
            it.last < p - it.resetTime && (it.delta = 0),
            it.last = p,
            it.delta += it.curDelta,
            D(it.delta) < 1 ? it.finalDelta = 0 : (it.finalDelta = I(it.delta / 1),
            it.delta %= 1),
            it.finalDelta) : it.curDelta
        }
        function le(e) {
            e.originalEvent[v] = ye;
            var t = +new Date;
            if (L + ve.scrollHijack > t && Ye[0] !== document && Ye[0] !== window)
                L = t;
            else if (ve.scrollBy && $e.start !== $e.end) {
                var n = ae(e.originalEvent);
                (ve.scrollTrap || n > 0 && $e.dest < $e.end || n < 0 && $e.dest > $e.start) && o(e, 1),
                ye.slideBy(ve.scrollBy * n)
            }
        }
        function ce(e) {
            ve.clickBar && e.target === Ce[0] && (o(e),
            N(K((ve.horizontal ? e.pageX - Ce.offset().left : e.pageY - Ce.offset().top) - Ee / 2)))
        }
        function ue(e) {
            if (ve.keyboardNavBy)
                switch (e.which) {
                case ve.horizontal ? 37 : 38:
                    o(e),
                    ye["pages" === ve.keyboardNavBy ? "prevPage" : "prev"]();
                    break;
                case ve.horizontal ? 39 : 40:
                    o(e),
                    ye["pages" === ve.keyboardNavBy ? "nextPage" : "next"]()
                }
        }
        function de(e) {
            re(this) ? e.originalEvent[v + "ignore"] = !0 : this.parentNode !== _e[0] || e.originalEvent[v + "ignore"] || ye.activate(this)
        }
        function he() {
            this.parentNode === Ae[0] && ye.activatePage(Me.index(this))
        }
        function fe(e) {
            ve.pauseOnHover && ye["mouseenter" === e.type ? "pause" : "resume"](2)
        }
        function pe(e, t) {
            if (Ke[e]) {
                for (ge = Ke[e].length,
                E.length = 0,
                me = 0; me < ge; me++)
                    E.push(Ke[e][me]);
                for (me = 0; me < ge; me++)
                    E[me].call(ye, e, t)
            }
        }
        if (!(this instanceof i))
            return new i(t,m,g);
        var me, ge, ve = e.extend({}, i.defaults, m), ye = this, be = l(t), we = e(t), _e = ve.slidee ? e(ve.slidee).eq(0) : we.children().eq(0), xe = 0, ke = 0, $e = {
            start: 0,
            center: 0,
            end: 0,
            cur: 0,
            dest: 0
        }, Ce = e(ve.scrollBar).eq(0), Se = Ce.children().eq(0), Te = 0, Ee = 0, De = {
            start: 0,
            end: 0,
            cur: 0
        }, Ae = e(ve.pagesBar), Me = 0, Ie = [], Pe = 0, Oe = [], Le = {
            firstItem: 0,
            lastItem: 0,
            centerItem: 0,
            activeItem: null,
            activePage: 0
        }, je = new d(we[0]), Ne = new d(_e[0]), Fe = new d(Ce[0]), ze = new d(Se[0]), qe = "basic" === ve.itemNav, Re = "forceCentered" === ve.itemNav, He = "centered" === ve.itemNav || Re, Ue = !be && (qe || He || Re), Ye = ve.scrollSource ? e(ve.scrollSource) : we, We = ve.dragSource ? e(ve.dragSource) : we, Be = e(ve.forward), Ge = e(ve.backward), Ve = e(ve.prev), Xe = e(ve.next), Qe = e(ve.prevPage), Ze = e(ve.nextPage), Ke = {}, Je = {}, et = {}, tt = {}, nt = {
            released: 1
        }, it = {
            last: 0,
            delta: 0,
            resetTime: 200
        }, rt = 0, ot = 0, st = 0, at = 0;
        be || (t = we[0]),
        ye.initialized = 0,
        ye.frame = t,
        ye.slidee = _e[0],
        ye.pos = $e,
        ye.rel = Le,
        ye.items = Oe,
        ye.pages = Ie,
        ye.isPaused = 0,
        ye.options = ve,
        ye.dragging = nt,
        ye.reload = function() {
            j()
        }
        ,
        ye.getPos = function(e) {
            if (Ue) {
                var t = U(e);
                return -1 !== t && Oe[t]
            }
            var n = _e.find(e).eq(0);
            if (n[0]) {
                var i = ve.horizontal ? n.offset().left - _e.offset().left : n.offset().top - _e.offset().top
                  , r = n[ve.horizontal ? "outerWidth" : "outerHeight"]();
                return {
                    start: i,
                    center: i - xe / 2 + r / 2,
                    end: i - xe + r,
                    size: r
                }
            }
            return !1
        }
        ,
        ye.moveBy = function(e) {
            tt.speed = e,
            !nt.init && tt.speed && $e.cur !== (tt.speed > 0 ? $e.end : $e.start) && (tt.lastTime = +new Date,
            tt.startPos = $e.cur,
            ee("button"),
            nt.init = 1,
            pe("moveStart"),
            y(at),
            R())
        }
        ,
        ye.stop = function() {
            "button" === nt.source && (nt.init = 0,
            nt.released = 1)
        }
        ,
        ye.prev = function() {
            ye.activate(null == Le.activeItem ? 0 : Le.activeItem - 1)
        }
        ,
        ye.next = function() {
            ye.activate(null == Le.activeItem ? 0 : Le.activeItem + 1)
        }
        ,
        ye.prevPage = function() {
            ye.activatePage(Le.activePage - 1)
        }
        ,
        ye.nextPage = function() {
            ye.activatePage(Le.activePage + 1)
        }
        ,
        ye.slideBy = function(e, t) {
            e && (Ue ? ye[He ? "toCenter" : "toStart"](u((He ? Le.centerItem : Le.firstItem) + ve.scrollBy * e, 0, Oe.length)) : N($e.dest + e, t))
        }
        ,
        ye.slideTo = function(e, t) {
            N(e, t)
        }
        ,
        ye.toStart = function(e, t) {
            H("start", e, t)
        }
        ,
        ye.toEnd = function(e, t) {
            H("end", e, t)
        }
        ,
        ye.toCenter = function(e, t) {
            H("center", e, t)
        }
        ,
        ye.getIndex = U,
        ye.activate = function(e, t) {
            var n = W(e);
            ve.smart && !1 !== n && (He ? ye.toCenter(n, t) : n >= Le.lastItem ? ye.toStart(n, t) : n <= Le.firstItem ? ye.toEnd(n, t) : Z())
        }
        ,
        ye.activatePage = function(e, t) {
            l(e) && N(Ie[u(e, 0, Ie.length - 1)], t)
        }
        ,
        ye.resume = function(e) {
            ve.cycleBy && ve.cycleInterval && ("items" !== ve.cycleBy || Oe[0] && null != Le.activeItem) && !(e < ye.isPaused) && (ye.isPaused = 0,
            st ? st = clearTimeout(st) : pe("resume"),
            st = setTimeout((function() {
                switch (pe("cycle"),
                ve.cycleBy) {
                case "items":
                    ye.activate(Le.activeItem >= Oe.length - 1 ? 0 : Le.activeItem + 1);
                    break;
                case "pages":
                    ye.activatePage(Le.activePage >= Ie.length - 1 ? 0 : Le.activePage + 1)
                }
            }
            ), ve.cycleInterval))
        }
        ,
        ye.pause = function(e) {
            e < ye.isPaused || (ye.isPaused = e || 100,
            st && (st = clearTimeout(st),
            pe("pause")))
        }
        ,
        ye.toggle = function() {
            ye[st ? "pause" : "resume"]()
        }
        ,
        ye.set = function(t, n) {
            e.isPlainObject(t) ? e.extend(ve, t) : ve.hasOwnProperty(t) && (ve[t] = n)
        }
        ,
        ye.add = function(t, n) {
            var i = e(t);
            Ue ? (null == n || !Oe[0] || n >= Oe.length ? i.appendTo(_e) : Oe.length && i.insertBefore(Oe[n].el),
            null != Le.activeItem && n <= Le.activeItem && (Je.active = Le.activeItem += i.length)) : _e.append(i),
            j()
        }
        ,
        ye.remove = function(t) {
            if (Ue) {
                var n = Y(t);
                if (n > -1) {
                    Pe.eq(n).remove();
                    var i = n === Le.activeItem;
                    null != Le.activeItem && n < Le.activeItem && (Je.active = --Le.activeItem),
                    j(),
                    i && (Je.active = null,
                    ye.activate(Le.activeItem))
                }
            } else
                e(t).remove(),
                j()
        }
        ,
        ye.moveAfter = function(e, t) {
            X(e, t, 1)
        }
        ,
        ye.moveBefore = function(e, t) {
            X(e, t)
        }
        ,
        ye.on = function(e, t) {
            if ("object" === r(e))
                for (var n in e)
                    e.hasOwnProperty(n) && ye.on(n, e[n]);
            else if ("function" === r(t))
                for (var i = e.split(" "), o = 0, s = i.length; o < s; o++)
                    Ke[i[o]] = Ke[i[o]] || [],
                    -1 === Q(i[o], t) && Ke[i[o]].push(t);
            else if ("array" === r(t))
                for (var a = 0, l = t.length; a < l; a++)
                    ye.on(e, t[a])
        }
        ,
        ye.one = function(e, t) {
            function n() {
                t.apply(ye, arguments),
                ye.off(e, n)
            }
            ye.on(e, n)
        }
        ,
        ye.off = function(e, t) {
            if (t instanceof Array)
                for (var n = 0, i = t.length; n < i; n++)
                    ye.off(e, t[n]);
            else
                for (var r = e.split(" "), o = 0, s = r.length; o < s; o++)
                    if (Ke[r[o]] = Ke[r[o]] || [],
                    null == t)
                        Ke[r[o]].length = 0;
                    else {
                        var a = Q(r[o], t);
                        -1 !== a && Ke[r[o]].splice(a, 1)
                    }
        }
        ,
        ye.destroy = function() {
            return i.removeInstance(t),
            Ye.add(Se).add(Ce).add(Ae).add(Be).add(Ge).add(Ve).add(Xe).add(Qe).add(Ze).off("." + v),
            w.off("keydown", ue),
            Ve.add(Xe).add(Qe).add(Ze).removeClass(ve.disabledClass),
            Pe && null != Le.activeItem && Pe.eq(Le.activeItem).removeClass(ve.activeClass),
            Ae.empty(),
            be || (we.off("." + v),
            je.restore(),
            Ne.restore(),
            Fe.restore(),
            ze.restore(),
            e.removeData(t, v)),
            Oe.length = Ie.length = 0,
            Je = {},
            ye.initialized = 0,
            ye
        }
        ,
        ye.init = function() {
            if (!ye.initialized) {
                if (i.getInstance(t))
                    throw new Error("There is already a Sly instance on this element");
                i.storeInstance(t, ye),
                ye.on(g);
                var e = ["overflow", "position"]
                  , n = ["position", "webkitTransform", "msTransform", "transform", "left", "top", "width", "height"];
                je.save.apply(je, e),
                Fe.save.apply(Fe, e),
                Ne.save.apply(Ne, n),
                ze.save.apply(ze, n);
                var r = Se;
                return be || (r = r.add(_e),
                we.css("overflow", "hidden"),
                h || "static" !== we.css("position") || we.css("position", "relative")),
                h ? f && r.css(h, f) : ("static" === Ce.css("position") && Ce.css("position", "relative"),
                r.css({
                    position: "absolute"
                })),
                ve.forward && Be.on(S, se),
                ve.backward && Ge.on(S, se),
                ve.prev && Ve.on(C, se),
                ve.next && Xe.on(C, se),
                ve.prevPage && Qe.on(C, se),
                ve.nextPage && Ze.on(C, se),
                Ye.on($, le),
                Ce[0] && Ce.on(C, ce),
                Ue && ve.activateOn && we.on(ve.activateOn + "." + v, "*", de),
                Ae[0] && ve.activatePageOn && Ae.on(ve.activatePageOn + "." + v, "*", he),
                We.on(_, {
                    source: "slidee"
                }, te),
                Se && Se.on(_, {
                    source: "handle"
                }, te),
                w.on("keydown", ue),
                be || (we.on("mouseenter." + v + " mouseleave." + v, fe),
                we.on("scroll." + v, a)),
                ye.initialized = 1,
                j(!0),
                ve.cycleBy && !be && ye[ve.startPaused ? "pause" : "resume"](),
                ye
            }
        }
    }
    function r(e) {
        return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof e
    }
    function o(e, t) {
        e.preventDefault(),
        t && e.stopPropagation()
    }
    function s(t) {
        o(t, 1),
        e(this).off(t.type, s)
    }
    function a() {
        this.scrollLeft = 0,
        this.scrollTop = 0
    }
    function l(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    function c(e, t) {
        return 0 | I(String(e.css(t)).replace(/[^\-0-9.]/g, ""))
    }
    function u(e, t, n) {
        return e < t ? t : e > n ? n : e
    }
    function d(e) {
        var t = {
            style: {},
            save: function() {
                if (e && e.nodeType) {
                    for (var n = 0; n < arguments.length; n++)
                        t.style[arguments[n]] = e.style[arguments[n]];
                    return t
                }
            },
            restore: function() {
                if (e && e.nodeType) {
                    for (var n in t.style)
                        t.style.hasOwnProperty(n) && (e.style[n] = t.style[n]);
                    return t
                }
            }
        };
        return t
    }
    var h, f, p, m = "sly", g = "Sly", v = m, y = t.cancelAnimationFrame || t.cancelRequestAnimationFrame, b = t.requestAnimationFrame, w = e(document), _ = "touchstart." + v + " mousedown." + v, x = "mousemove." + v + " mouseup." + v, k = "touchmove." + v + " touchend." + v, $ = (document.implementation.hasFeature("Event.wheel", "3.0") ? "wheel." : "mousewheel.") + v, C = "click." + v, S = "mousedown." + v, T = ["INPUT", "SELECT", "BUTTON", "TEXTAREA"], E = [], D = Math.abs, A = Math.sqrt, M = Math.pow, I = Math.round, P = Math.max, O = Math.min, L = 0;
    w.on($, (function(e) {
        var t = e.originalEvent[v]
          , n = +new Date;
        (!t || t.options.scrollHijack < n - L) && (L = n)
    }
    )),
    i.getInstance = function(t) {
        return e.data(t, v)
    }
    ,
    i.storeInstance = function(t, n) {
        return e.data(t, v, n)
    }
    ,
    i.removeInstance = function(t) {
        return e.removeData(t, v)
    }
    ,
    function(e) {
        function t(e) {
            var t = (new Date).getTime()
              , i = Math.max(0, 16 - (t - n))
              , r = setTimeout(e, i);
            return n = t,
            r
        }
        b = e.requestAnimationFrame || e.webkitRequestAnimationFrame || t;
        var n = (new Date).getTime()
          , i = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.clearTimeout;
        y = function(t) {
            i.call(e, t)
        }
    }(window),
    function() {
        function e(e) {
            for (var i = 0, r = t.length; i < r; i++) {
                var o = t[i] ? t[i] + e.charAt(0).toUpperCase() + e.slice(1) : e;
                if (null != n.style[o])
                    return o
            }
        }
        var t = ["", "Webkit", "Moz", "ms", "O"]
          , n = document.createElement("div");
        h = e("transform"),
        f = e("perspective") ? "translateZ(0) " : ""
    }(),
    t[g] = i,
    e.fn[m] = function(t, n) {
        var o, s;
        return e.isPlainObject(t) || ("string" !== r(t) && !1 !== t || (o = !1 === t ? "destroy" : t,
        s = Array.prototype.slice.call(arguments, 1)),
        t = {}),
        this.each((function(e, r) {
            var a = i.getInstance(r);
            a || o ? a && o && a[o] && a[o].apply(a, s) : a = new i(r,t,n).init()
        }
        ))
    }
    ,
    i.defaults = {
        slidee: null,
        horizontal: !1,
        itemNav: null,
        itemSelector: null,
        smart: !1,
        activateOn: null,
        activateMiddle: !1,
        scrollSource: null,
        scrollBy: 0,
        scrollHijack: 300,
        scrollTrap: !1,
        dragSource: null,
        mouseDragging: !1,
        touchDragging: !1,
        releaseSwing: !1,
        swingSpeed: .2,
        elasticBounds: !1,
        dragThreshold: 3,
        interactive: null,
        scrollBar: null,
        dragHandle: !1,
        dynamicHandle: !1,
        minHandleSize: 50,
        clickBar: !1,
        syncSpeed: .5,
        pagesBar: null,
        activatePageOn: null,
        pageBuilder: function(e) {
            return "<li>" + (e + 1) + "</li>"
        },
        forward: null,
        backward: null,
        prev: null,
        next: null,
        prevPage: null,
        nextPage: null,
        cycleBy: null,
        cycleInterval: 5e3,
        pauseOnHover: !1,
        startPaused: !1,
        moveBy: 300,
        speed: 0,
        easing: "swing",
        startAt: null,
        keyboardNavBy: null,
        draggedClass: "dragged",
        activeClass: "active",
        disabledClass: "disabled"
    }
}(jQuery, window),
jQuery.fn.extend({
    jCountdown: function() {
        var e = function(e) {
            this._target = e,
            this._width = 50,
            this._height = 64,
            this._frame = 1,
            this._totalFrames = 15,
            this._fps = 24,
            this._intervalId = -1,
            this._value = 0,
            this.stop = function() {
                clearInterval(this._intervalId)
            }
            ,
            this.update = function(e) {
                if (e) {
                    this.frame(1),
                    this.stop();
                    var t = this;
                    this._intervalId = setInterval((function() {
                        t.frame() == t.totalFrames() ? (clearInterval(t._intervalId),
                        t.onFinish()) : t.frame(t.frame() + 1)
                    }
                    ), Math.ceil(1e3 / this.fps()))
                } else
                    this.frame(this.totalFrames())
            }
            ,
            this.value = function(e, t) {
                if (null == e)
                    return this._value;
                this._value = e,
                this.update(t)
            }
            ,
            this.onFinish = function() {}
            ,
            this.destroy = function() {
                this.stop(),
                this._target = null
            }
            ,
            this.width = function(e) {
                if (null == e)
                    return this._width;
                this._width = e
            }
            ,
            this.height = function(e) {
                if (null == e)
                    return this._height;
                this._height = e
            }
            ,
            this.frame = function(e) {
                if (null == e)
                    return this._frame;
                this._frame = e;
                var t = -(9 - this.value()) * this.width()
                  , n = -(this.frame() - 1) * this.height();
                this._target.children(".text").css("background-position", t + "px " + n + "px")
            }
            ,
            this.totalFrames = function(e) {
                if (null == e)
                    return this._totalFrames;
                this._totalFrames = e
            }
            ,
            this.fps = function(e) {
                if (null == e)
                    return this._fps;
                this._fps = e
            }
            ,
            this.update(!1)
        }
          , t = function() {
            this._days = [],
            this._hours = [],
            this._minutes = [],
            this._seconds = [],
            this._tickId = -1,
            this._tickDelay = 500,
            this._timeTarget = 0,
            this._time = null,
            this._started_at = (new Date).getTime(),
            this._runtime = 0,
            this.checkTime = function(e) {
                if (this._runtime = (new Date).getTime() - this._started_at,
                this._started_at + this._runtime > this._timeTarget) {
                    for (var t = 0; t < this._days.length; t++)
                        this._days[t].value(0);
                    for (t = 0; t < this._hours.length; t++)
                        this._hours[t].value(0);
                    for (t = 0; t < this._minutes.length; t++)
                        this._minutes[t].value(0);
                    for (t = 0; t < this._seconds.length; t++)
                        this._seconds[t].value(0);
                    return this.stop(),
                    this.onFinish(),
                    !0
                }
                var n = this.timeFormat(this._timeTarget - this._started_at - this._runtime, this._days.length, this._hours.length, this._minutes.length, this._seconds.length).split("");
                if (!isNaN(this._time)) {
                    for (t = 0; t < this._days.length; t++) {
                        (i = parseInt(n.shift(), 10)) != this._days[t].value() && this._days[t].value(i, e)
                    }
                    for (t = 0; t < this._hours.length; t++) {
                        (i = parseInt(n.shift(), 10)) != this._hours[t].value() && this._hours[t].value(i, e)
                    }
                    for (t = 0; t < this._minutes.length; t++) {
                        (i = parseInt(n.shift(), 10)) != this._minutes[t].value() && this._minutes[t].value(i, e)
                    }
                    for (t = 0; t < this._seconds.length; t++) {
                        var i;
                        (i = parseInt(n.shift(), 10)) != this._seconds[t].value() && this._seconds[t].value(i, e)
                    }
                }
                return !1
            }
            ,
            this.textFormat = function(e, t, n) {
                for (e = e.toString(); e.length < t; )
                    e = n + e;
                return e.length > t && (e = e.substr(e.length - t, t)),
                e
            }
            ,
            this.timeFormat = function(e, t, n, i, r) {
                var o = Math.floor(e / 1e3)
                  , s = o % 60
                  , a = Math.floor(o % 3600 / 60)
                  , l = Math.floor(o % 86400 / 3600)
                  , c = Math.floor(o / 86400);
                return this.textFormat(c, t, "0") + this.textFormat(l, n, "0") + this.textFormat(a, i, "0") + this.textFormat(s, r, "0")
            }
            ,
            this.start = function() {
                this.stop();
                for (var e = 0; e < this._days.length; e++)
                    this._days[e].update();
                for (e = 0; e < this._hours.length; e++)
                    this._hours[e].update();
                for (e = 0; e < this._minutes.length; e++)
                    this._minutes[e].update();
                for (e = 0; e < this._seconds.length; e++)
                    this._seconds[e].update();
                if (!this.checkTime(!1)) {
                    var t = this;
                    this._tickId = setInterval((function() {
                        t.checkTime(!0)
                    }
                    ), this._tickDelay)
                }
            }
            ,
            this.stop = function() {
                for (var e = 0; e < this._days.length; e++)
                    this._days[e].stop();
                for (e = 0; e < this._hours.length; e++)
                    this._hours[e].stop();
                for (e = 0; e < this._minutes.length; e++)
                    this._minutes[e].stop();
                for (e = 0; e < this._seconds.length; e++)
                    this._seconds[e].stop();
                clearInterval(this._tickId)
            }
            ,
            this.onFinish = function() {}
            ,
            this.destroy = function() {
                for (var e = 0; e < this._days.length; e++)
                    this._days[e].destroy();
                for (e = 0; e < this._hours.length; e++)
                    this._hours[e].destroy();
                for (e = 0; e < this._minutes.length; e++)
                    this._minutes[e].destroy();
                for (e = 0; e < this._seconds.length; e++)
                    this._seconds[e].destroy();
                this._days = [],
                this._hours = [],
                this._minutes = [],
                this._seconds = [],
                this.stop()
            }
            ,
            this.items = function(e, t, n, i) {
                this._days = e,
                this._hours = t,
                this._minutes = n,
                this._seconds = i
            }
            ,
            this.timeTarget = function(e) {
                if (null == e)
                    return this._timeTarget;
                this._timeTarget = e + this._started_at
            }
        }
          , n = function() {
            return c.data("countdown")
        }
          , i = function() {
            if (null == n()) {
                var e = new t;
                return c.data("countdown", e),
                n()
            }
        }
          , r = function() {
            null != n() && (n().destroy(),
            c.removeData("countdown"))
        }
          , o = function(t) {
            u = i();
            var n = 1e3 * t.timeTarget
              , r = "string" == typeof t.style ? t.style.toLowerCase() : "";
            switch (r) {
            case "flip":
            case "slide":
            case "crystal":
            case "metal":
                break;
            default:
                r = "flip"
            }
            var o = "string" == typeof t.color ? t.color.toLowerCase() : "";
            switch (o) {
            case "black":
            case "white":
                break;
            default:
                o = "black"
            }
            var s = parseInt(t.width, 10);
            s >= 10 || (s = 0);
            var a = parseInt(t.textGroupSpace, 10);
            a >= 0 || (a = 15);
            var l = parseInt(t.textSpace, 10);
            l > 0 || (l = 0);
            var d = 0 != t.reflection
              , h = parseFloat(t.reflectionOpacity);
            h > 0 ? h > 100 && (h = 100) : h = 10;
            var f = parseInt(t.reflectionBlur, 10);
            f > 0 ? f > 10 && (f = 10) : f = 0;
            var p = parseInt(t.dayTextNumber, 10) > 2 ? parseInt(t.dayTextNumber, 10) : 2
              , m = 2
              , g = 2
              , v = 2
              , y = 0 != t.displayDay
              , b = 0 != t.displayHour
              , w = 0 != t.displayMinute
              , _ = 0 != t.displaySecond
              , x = 0 != t.displayLabel
              , k = "function" == typeof t.onFinish ? t.onFinish : function() {}
              , $ = ""
              , C = "";
            if ($ += '<div class="jCountdown">',
            y) {
                $ += '<div class="group day' + (b || w || _ ? "" : " lastItem") + '">';
                for (var S = 0; S < p; S++)
                    $ += '<div class="container' + (C = " item" + (S + 1)) + (S == p - 1 ? " lastItem" : "") + '">',
                    "slide" != r && "crystal" != r && "metal" != r || ($ += '<div class="cover"></div>'),
                    $ += '<div class="text"></div>',
                    $ += "</div>";
                x && ($ += '<div class="countdown_label"></div>'),
                $ += "</div>"
            }
            if (b) {
                $ += '<div class="group hour' + (w || _ ? "" : " lastItem") + '">';
                for (S = 0; S < m; S++)
                    $ += '<div class="container' + (C = " item" + (S + 1)) + (S == m - 1 ? " lastItem" : "") + '">',
                    "slide" != r && "crystal" != r && "metal" != r || ($ += '<div class="cover"></div>'),
                    $ += '<div class="text"></div>',
                    $ += "</div>";
                x && ($ += '<div class="countdown_label"></div>'),
                $ += "</div>"
            }
            if (w) {
                $ += '<div class="group minute' + (_ ? "" : " lastItem") + '">';
                for (S = 0; S < g; S++)
                    $ += '<div class="container' + (C = " item" + (S + 1)) + (S == g - 1 ? " lastItem" : "") + '">',
                    "slide" != r && "crystal" != r && "metal" != r || ($ += '<div class="cover"></div>'),
                    $ += '<div class="text"></div>',
                    $ += "</div>";
                x && ($ += '<div class="countdown_label"></div>'),
                $ += "</div>"
            }
            if (_) {
                $ += '<div class="group second lastItem">';
                for (S = 0; S < v; S++)
                    $ += '<div class="container' + (C = " item" + (S + 1)) + (S == v - 1 ? " lastItem" : "") + '">',
                    "slide" != r && "crystal" != r && "metal" != r || ($ += '<div class="cover"></div>'),
                    $ += '<div class="text"></div>',
                    $ += "</div>";
                x && ($ += '<div class="countdown_label"></div>'),
                $ += "</div>"
            }
            $ += "</div>",
            c.html($);
            var T = c.children(".jCountdown");
            T.addClass(r),
            T.addClass(o),
            T.children(".group").css("margin-right", a + "px"),
            T.children(".group.lastItem").css("margin-right", "0px"),
            T.children(".group").children(".container").css("margin-right", l + "px"),
            T.children(".group").children(".container.lastItem").css("margin-right", "0px"),
            d && (reflectionObject = T.clone(),
            reflectionObject.addClass("reflection"),
            x && reflectionObject.addClass("displayLabel"),
            100 != h && reflectionObject.css("opacity", h / 100),
            0 != f && reflectionObject.addClass("blur" + f),
            T = T.add(reflectionObject));
            var E = jQuery('<div class="jCountdownContainer"></div>');
            if (E.append(T),
            c.append(E),
            0 != s) {
                var D = jQuery('<div class="jCountdownScale"></div>');
                D.append(T),
                E.append(D);
                var A = D.width()
                  , M = D.height()
                  , I = s / A
                  , P = -(1 - I) * A / 2
                  , O = -(1 - I) * M / 2
                  , L = "scale(" + I + ")";
                E.width(A * I),
                E.height(M * I),
                D.css("transform", L).css("-moz-transform", L).css("-webkit-transform", L).css("-o-transform", L).css("-ms-transform", L),
                D.css("left", P).css("top", O)
            }
            var j = ""
              , N = 0
              , F = []
              , z = []
              , q = []
              , R = [];
            C = function() {}
            ;
            switch (r) {
            case "flip":
                C = e;
                break;
            case "slide":
                C = Slide;
                break;
            case "crystal":
                C = Crystal;
                break;
            case "metal":
                C = Metal
            }
            for (N = 1,
            j = ".group.day>.container.item"; T.find(j + N).length; )
                F.push(new C(T.find(j + N))),
                N++;
            for (N = 1,
            j = ".group.hour>.container.item"; T.find(j + N).length; )
                z.push(new C(T.find(j + N))),
                N++;
            for (N = 1,
            j = ".group.minute>.container.item"; T.find(j + N).length; )
                q.push(new C(T.find(j + N))),
                N++;
            for (N = 1,
            j = ".group.second>.container.item"; T.find(j + N).length; )
                R.push(new C(T.find(j + N))),
                N++;
            u.items(F, z, q, R),
            u.timeTarget(n),
            u.onFinish = k,
            u.start()
        }
          , s = function() {
            r(),
            c.children().remove()
        }
          , a = function() {
            u.start()
        }
          , l = function() {
            u.stop()
        };
        if (arguments.length > 0) {
            var c = this
              , u = n();
            if (1 == arguments.length && "object" == typeof arguments[0])
                null != u && s(),
                o(arguments[0]);
            else if ("string" == typeof arguments[0] && null != u)
                switch (arguments[0]) {
                case "stop":
                    l();
                    break;
                case "start":
                    a();
                    break;
                case "destroy":
                    s()
                }
        }
        return this
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, (function() {
    "use strict";
    function e() {
        return Ti.apply(null, arguments)
    }
    function t(e) {
        Ti = e
    }
    function n(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function i(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function r(e) {
        if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e)
            if (e.hasOwnProperty(t))
                return !1;
        return !0
    }
    function o(e) {
        return void 0 === e
    }
    function s(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function a(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function l(e, t) {
        var n, i = [];
        for (n = 0; n < e.length; ++n)
            i.push(t(e[n], n));
        return i
    }
    function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function u(e, t) {
        for (var n in t)
            c(t, n) && (e[n] = t[n]);
        return c(t, "toString") && (e.toString = t.toString),
        c(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function d(e, t, n, i) {
        return $t(e, t, n, i, !0).utc()
    }
    function h() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }
    function f(e) {
        return null == e._pf && (e._pf = h()),
        e._pf
    }
    function p(e) {
        if (null == e._isValid) {
            var t = f(e)
              , n = Ei.call(t.parsedDateParts, (function(e) {
                return null != e
            }
            ))
              , i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
                return i;
            e._isValid = i
        }
        return e._isValid
    }
    function m(e) {
        var t = d(NaN);
        return null != e ? u(f(t), e) : f(t).userInvalidated = !0,
        t
    }
    function g(e, t) {
        var n, i, r;
        if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        o(t._i) || (e._i = t._i),
        o(t._f) || (e._f = t._f),
        o(t._l) || (e._l = t._l),
        o(t._strict) || (e._strict = t._strict),
        o(t._tzm) || (e._tzm = t._tzm),
        o(t._isUTC) || (e._isUTC = t._isUTC),
        o(t._offset) || (e._offset = t._offset),
        o(t._pf) || (e._pf = f(t)),
        o(t._locale) || (e._locale = t._locale),
        Ai.length > 0)
            for (n = 0; n < Ai.length; n++)
                o(r = t[i = Ai[n]]) || (e[i] = r);
        return e
    }
    function v(t) {
        g(this, t),
        this._d = new Date(null != t._d ? t._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === Mi && (Mi = !0,
        e.updateOffset(this),
        Mi = !1)
    }
    function y(e) {
        return e instanceof v || null != e && null != e._isAMomentObject
    }
    function b(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function w(e) {
        var t = +e
          , n = 0;
        return 0 !== t && isFinite(t) && (n = b(t)),
        n
    }
    function _(e, t, n) {
        var i, r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0;
        for (i = 0; i < r; i++)
            (n && e[i] !== t[i] || !n && w(e[i]) !== w(t[i])) && s++;
        return s + o
    }
    function x(t) {
        !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }
    function k(t, n) {
        var i = !0;
        return u((function() {
            if (null != e.deprecationHandler && e.deprecationHandler(null, t),
            i) {
                for (var r, o = [], s = 0; s < arguments.length; s++) {
                    if (r = "",
                    "object" == typeof arguments[s]) {
                        for (var a in r += "\n[" + s + "] ",
                        arguments[0])
                            r += a + ": " + arguments[0][a] + ", ";
                        r = r.slice(0, -2)
                    } else
                        r = arguments[s];
                    o.push(r)
                }
                x(t + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack),
                i = !1
            }
            return n.apply(this, arguments)
        }
        ), n)
    }
    function $(t, n) {
        null != e.deprecationHandler && e.deprecationHandler(t, n),
        Ii[t] || (x(n),
        Ii[t] = !0)
    }
    function C(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function S(e) {
        var t, n;
        for (n in e)
            C(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    function T(e, t) {
        var n, r = u({}, e);
        for (n in t)
            c(t, n) && (i(e[n]) && i(t[n]) ? (r[n] = {},
            u(r[n], e[n]),
            u(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
        for (n in e)
            c(e, n) && !c(t, n) && i(e[n]) && (r[n] = u({}, r[n]));
        return r
    }
    function E(e) {
        null != e && this.set(e)
    }
    function D(e, t, n) {
        var i = this._calendar[e] || this._calendar.sameElse;
        return C(i) ? i.call(t, n) : i
    }
    function A(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, (function(e) {
            return e.slice(1)
        }
        )),
        this._longDateFormat[e])
    }
    function M() {
        return this._invalidDate
    }
    function I(e) {
        return this._ordinal.replace("%d", e)
    }
    function P(e, t, n, i) {
        var r = this._relativeTime[n];
        return C(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
    }
    function O(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return C(n) ? n(t) : n.replace(/%s/i, t)
    }
    function L(e, t) {
        var n = e.toLowerCase();
        zi[n] = zi[n + "s"] = zi[t] = e
    }
    function j(e) {
        return "string" == typeof e ? zi[e] || zi[e.toLowerCase()] : void 0
    }
    function N(e) {
        var t, n, i = {};
        for (n in e)
            c(e, n) && (t = j(n)) && (i[t] = e[n]);
        return i
    }
    function F(e, t) {
        qi[e] = t
    }
    function z(e) {
        var t = [];
        for (var n in e)
            t.push({
                unit: n,
                priority: qi[n]
            });
        return t.sort((function(e, t) {
            return e.priority - t.priority
        }
        )),
        t
    }
    function q(e, t, n) {
        var i = "" + Math.abs(e)
          , r = t - i.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
    }
    function R(e, t, n, i) {
        var r = i;
        "string" == typeof i && (r = function() {
            return this[i]()
        }
        ),
        e && (Yi[e] = r),
        t && (Yi[t[0]] = function() {
            return q(r.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (Yi[n] = function() {
            return this.localeData().ordinal(r.apply(this, arguments), e)
        }
        )
    }
    function H(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function U(e) {
        var t, n, i = e.match(Ri);
        for (t = 0,
        n = i.length; t < n; t++)
            Yi[i[t]] ? i[t] = Yi[i[t]] : i[t] = H(i[t]);
        return function(t) {
            var r, o = "";
            for (r = 0; r < n; r++)
                o += C(i[r]) ? i[r].call(t, e) : i[r];
            return o
        }
    }
    function Y(e, t) {
        return e.isValid() ? (t = W(t, e.localeData()),
        Ui[t] = Ui[t] || U(t),
        Ui[t](e)) : e.localeData().invalidDate()
    }
    function W(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var i = 5;
        for (Hi.lastIndex = 0; i >= 0 && Hi.test(e); )
            e = e.replace(Hi, n),
            Hi.lastIndex = 0,
            i -= 1;
        return e
    }
    function B(e, t, n) {
        lr[e] = C(t) ? t : function(e) {
            return e && n ? n : t
        }
    }
    function G(e, t) {
        return c(lr, e) ? lr[e](t._strict, t._locale) : new RegExp(V(e))
    }
    function V(e) {
        return X(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, i, r) {
            return t || n || i || r
        }
        )))
    }
    function X(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function Q(e, t) {
        var n, i = t;
        for ("string" == typeof e && (e = [e]),
        s(t) && (i = function(e, n) {
            n[t] = w(e)
        }
        ),
        n = 0; n < e.length; n++)
            cr[e[n]] = i
    }
    function Z(e, t) {
        Q(e, (function(e, n, i, r) {
            i._w = i._w || {},
            t(e, i._w, i, r)
        }
        ))
    }
    function K(e, t, n) {
        null != t && c(cr, e) && cr[e](t, n._a, n, e)
    }
    function J(e) {
        return ee(e) ? 366 : 365
    }
    function ee(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    function te() {
        return ee(this.year())
    }
    function ne(t, n) {
        return function(i) {
            return null != i ? (re(this, t, i),
            e.updateOffset(this, n),
            this) : ie(this, t)
        }
    }
    function ie(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }
    function re(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && ee(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), le(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }
    function oe(e) {
        return C(this[e = j(e)]) ? this[e]() : this
    }
    function se(e, t) {
        if ("object" == typeof e)
            for (var n = z(e = N(e)), i = 0; i < n.length; i++)
                this[n[i].unit](e[n[i].unit]);
        else if (C(this[e = j(e)]))
            return this[e](t);
        return this
    }
    function ae(e, t) {
        return (e % t + t) % t
    }
    function le(e, t) {
        if (isNaN(e) || isNaN(t))
            return NaN;
        var n = ae(t, 12);
        return e += (t - n) / 12,
        1 === n ? ee(e) ? 29 : 28 : 31 - n % 7 % 2
    }
    function ce(e, t) {
        return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || _r).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
    }
    function ue(e, t) {
        return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[_r.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    function de(e, t, n) {
        var i, r, o, s = e.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            i = 0; i < 12; ++i)
                o = d([2e3, i]),
                this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(),
                this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
        return n ? "MMM" === t ? -1 !== (r = br.call(this._shortMonthsParse, s)) ? r : null : -1 !== (r = br.call(this._longMonthsParse, s)) ? r : null : "MMM" === t ? -1 !== (r = br.call(this._shortMonthsParse, s)) || -1 !== (r = br.call(this._longMonthsParse, s)) ? r : null : -1 !== (r = br.call(this._longMonthsParse, s)) || -1 !== (r = br.call(this._shortMonthsParse, s)) ? r : null
    }
    function he(e, t, n) {
        var i, r, o;
        if (this._monthsParseExact)
            return de.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        i = 0; i < 12; i++) {
            if (r = d([2e3, i]),
            n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$","i")),
            n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
            this._monthsParse[i] = new RegExp(o.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[i].test(e))
                return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e))
                return i;
            if (!n && this._monthsParse[i].test(e))
                return i
        }
    }
    function fe(e, t) {
        var n;
        if (!e.isValid())
            return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = w(t);
            else if (!s(t = e.localeData().monthsParse(t)))
                return e;
        return n = Math.min(e.date(), le(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
    }
    function pe(t) {
        return null != t ? (fe(this, t),
        e.updateOffset(this, !0),
        this) : ie(this, "Month")
    }
    function me() {
        return le(this.year(), this.month())
    }
    function ge(e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || ye.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = $r),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    function ve(e) {
        return this._monthsParseExact ? (c(this, "_monthsRegex") || ye.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Cr),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    function ye() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, i = [], r = [], o = [];
        for (t = 0; t < 12; t++)
            n = d([2e3, t]),
            i.push(this.monthsShort(n, "")),
            r.push(this.months(n, "")),
            o.push(this.months(n, "")),
            o.push(this.monthsShort(n, ""));
        for (i.sort(e),
        r.sort(e),
        o.sort(e),
        t = 0; t < 12; t++)
            i[t] = X(i[t]),
            r[t] = X(r[t]);
        for (t = 0; t < 24; t++)
            o[t] = X(o[t]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")","i")
    }
    function be(e, t, n, i, r, o, s) {
        var a = new Date(e,t,n,i,r,o,s);
        return e < 100 && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e),
        a
    }
    function we(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
        t
    }
    function _e(e, t, n) {
        var i = 7 + t - n;
        return -((7 + we(e, 0, i).getUTCDay() - t) % 7) + i - 1
    }
    function xe(e, t, n, i, r) {
        var o, s, a = 1 + 7 * (t - 1) + (7 + n - i) % 7 + _e(e, i, r);
        return a <= 0 ? s = J(o = e - 1) + a : a > J(e) ? (o = e + 1,
        s = a - J(e)) : (o = e,
        s = a),
        {
            year: o,
            dayOfYear: s
        }
    }
    function ke(e, t, n) {
        var i, r, o = _e(e.year(), t, n), s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
        return s < 1 ? i = s + $e(r = e.year() - 1, t, n) : s > $e(e.year(), t, n) ? (i = s - $e(e.year(), t, n),
        r = e.year() + 1) : (r = e.year(),
        i = s),
        {
            week: i,
            year: r
        }
    }
    function $e(e, t, n) {
        var i = _e(e, t, n)
          , r = _e(e + 1, t, n);
        return (J(e) - i + r) / 7
    }
    function Ce(e) {
        return ke(e, this._week.dow, this._week.doy).week
    }
    function Se() {
        return this._week.dow
    }
    function Te() {
        return this._week.doy
    }
    function Ee(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    function De(e) {
        var t = ke(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    function Ae(e, t) {
        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
    }
    function Me(e, t) {
        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
    }
    function Ie(e, t) {
        return e ? n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone
    }
    function Pe(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    function Oe(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    function Le(e, t, n) {
        var i, r, o, s = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            i = 0; i < 7; ++i)
                o = d([2e3, 1]).day(i),
                this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(),
                this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(),
                this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
        return n ? "dddd" === t ? -1 !== (r = br.call(this._weekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = br.call(this._shortWeekdaysParse, s)) ? r : null : -1 !== (r = br.call(this._minWeekdaysParse, s)) ? r : null : "dddd" === t ? -1 !== (r = br.call(this._weekdaysParse, s)) || -1 !== (r = br.call(this._shortWeekdaysParse, s)) || -1 !== (r = br.call(this._minWeekdaysParse, s)) ? r : null : "ddd" === t ? -1 !== (r = br.call(this._shortWeekdaysParse, s)) || -1 !== (r = br.call(this._weekdaysParse, s)) || -1 !== (r = br.call(this._minWeekdaysParse, s)) ? r : null : -1 !== (r = br.call(this._minWeekdaysParse, s)) || -1 !== (r = br.call(this._weekdaysParse, s)) || -1 !== (r = br.call(this._shortWeekdaysParse, s)) ? r : null
    }
    function je(e, t, n) {
        var i, r, o;
        if (this._weekdaysParseExact)
            return Le.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        i = 0; i < 7; i++) {
            if (r = d([2e3, 1]).day(i),
            n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$","i"),
            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$","i"),
            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$","i")),
            this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""),
            this._weekdaysParse[i] = new RegExp(o.replace(".", ""),"i")),
            n && "dddd" === t && this._fullWeekdaysParse[i].test(e))
                return i;
            if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e))
                return i;
            if (n && "dd" === t && this._minWeekdaysParse[i].test(e))
                return i;
            if (!n && this._weekdaysParse[i].test(e))
                return i
        }
    }
    function Ne(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = Ae(e, this.localeData()),
        this.add(e - t, "d")) : t
    }
    function Fe(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }
    function ze(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            var t = Me(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
    }
    function qe(e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Ue.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ar),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    function Re(e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Ue.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Mr),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    function He(e) {
        return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Ue.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ir),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    function Ue() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, i, r, o, s = [], a = [], l = [], c = [];
        for (t = 0; t < 7; t++)
            n = d([2e3, 1]).day(t),
            i = this.weekdaysMin(n, ""),
            r = this.weekdaysShort(n, ""),
            o = this.weekdays(n, ""),
            s.push(i),
            a.push(r),
            l.push(o),
            c.push(i),
            c.push(r),
            c.push(o);
        for (s.sort(e),
        a.sort(e),
        l.sort(e),
        c.sort(e),
        t = 0; t < 7; t++)
            a[t] = X(a[t]),
            l[t] = X(l[t]),
            c[t] = X(c[t]);
        this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
    }
    function Ye() {
        return this.hours() % 12 || 12
    }
    function We() {
        return this.hours() || 24
    }
    function Be(e, t) {
        R(e, 0, 0, (function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        }
        ))
    }
    function Ge(e, t) {
        return t._meridiemParse
    }
    function Ve(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    function Xe(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    function Qe(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function Ze(e) {
        for (var t, n, i, r, o = 0; o < e.length; ) {
            for (t = (r = Qe(e[o]).split("-")).length,
            n = (n = Qe(e[o + 1])) ? n.split("-") : null; t > 0; ) {
                if (i = Ke(r.slice(0, t).join("-")))
                    return i;
                if (n && n.length >= t && _(r, n, !0) >= t - 1)
                    break;
                t--
            }
            o++
        }
        return null
    }
    function Ke(e) {
        var t = null;
        if (!Nr[e] && "undefined" != typeof module && module && module.exports)
            try {
                t = Pr._abbr,
                require("./locale/" + e),
                Je(t)
            } catch (e) {}
        return Nr[e]
    }
    function Je(e, t) {
        var n;
        return e && (n = o(t) ? nt(e) : et(e, t)) && (Pr = n),
        Pr._abbr
    }
    function et(e, t) {
        if (null !== t) {
            var n = jr;
            if (t.abbr = e,
            null != Nr[e])
                $("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                n = Nr[e]._config;
            else if (null != t.parentLocale) {
                if (null == Nr[t.parentLocale])
                    return Fr[t.parentLocale] || (Fr[t.parentLocale] = []),
                    Fr[t.parentLocale].push({
                        name: e,
                        config: t
                    }),
                    null;
                n = Nr[t.parentLocale]._config
            }
            return Nr[e] = new E(T(n, t)),
            Fr[e] && Fr[e].forEach((function(e) {
                et(e.name, e.config)
            }
            )),
            Je(e),
            Nr[e]
        }
        return delete Nr[e],
        null
    }
    function tt(e, t) {
        if (null != t) {
            var n, i, r = jr;
            null != (i = Ke(e)) && (r = i._config),
            (n = new E(t = T(r, t))).parentLocale = Nr[e],
            Nr[e] = n,
            Je(e)
        } else
            null != Nr[e] && (null != Nr[e].parentLocale ? Nr[e] = Nr[e].parentLocale : null != Nr[e] && delete Nr[e]);
        return Nr[e]
    }
    function nt(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return Pr;
        if (!n(e)) {
            if (t = Ke(e))
                return t;
            e = [e]
        }
        return Ze(e)
    }
    function it() {
        return Di(Nr)
    }
    function rt(e) {
        var t, n = e._a;
        return n && -2 === f(e).overflow && (t = n[dr] < 0 || n[dr] > 11 ? dr : n[hr] < 1 || n[hr] > le(n[ur], n[dr]) ? hr : n[fr] < 0 || n[fr] > 24 || 24 === n[fr] && (0 !== n[pr] || 0 !== n[mr] || 0 !== n[gr]) ? fr : n[pr] < 0 || n[pr] > 59 ? pr : n[mr] < 0 || n[mr] > 59 ? mr : n[gr] < 0 || n[gr] > 999 ? gr : -1,
        f(e)._overflowDayOfYear && (t < ur || t > hr) && (t = hr),
        f(e)._overflowWeeks && -1 === t && (t = vr),
        f(e)._overflowWeekday && -1 === t && (t = yr),
        f(e).overflow = t),
        e
    }
    function ot(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function st(t) {
        var n = new Date(e.now());
        return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
    }
    function at(e) {
        var t, n, i, r, o, s = [];
        if (!e._d) {
            for (i = st(e),
            e._w && null == e._a[hr] && null == e._a[dr] && lt(e),
            null != e._dayOfYear && (o = ot(e._a[ur], i[ur]),
            (e._dayOfYear > J(o) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0),
            n = we(o, 0, e._dayOfYear),
            e._a[dr] = n.getUTCMonth(),
            e._a[hr] = n.getUTCDate()),
            t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = s[t] = i[t];
            for (; t < 7; t++)
                e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[fr] && 0 === e._a[pr] && 0 === e._a[mr] && 0 === e._a[gr] && (e._nextDay = !0,
            e._a[fr] = 0),
            e._d = (e._useUTC ? we : be).apply(null, s),
            r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[fr] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== r && (f(e).weekdayMismatch = !0)
        }
    }
    function lt(e) {
        var t, n, i, r, o, s, a, l;
        if (null != (t = e._w).GG || null != t.W || null != t.E)
            o = 1,
            s = 4,
            n = ot(t.GG, e._a[ur], ke(Ct(), 1, 4).year),
            i = ot(t.W, 1),
            ((r = ot(t.E, 1)) < 1 || r > 7) && (l = !0);
        else {
            o = e._locale._week.dow,
            s = e._locale._week.doy;
            var c = ke(Ct(), o, s);
            n = ot(t.gg, e._a[ur], c.year),
            i = ot(t.w, c.week),
            null != t.d ? ((r = t.d) < 0 || r > 6) && (l = !0) : null != t.e ? (r = t.e + o,
            (t.e < 0 || t.e > 6) && (l = !0)) : r = o
        }
        i < 1 || i > $e(n, o, s) ? f(e)._overflowWeeks = !0 : null != l ? f(e)._overflowWeekday = !0 : (a = xe(n, i, r, o, s),
        e._a[ur] = a.year,
        e._dayOfYear = a.dayOfYear)
    }
    function ct(e) {
        var t, n, i, r, o, s, a = e._i, l = zr.exec(a) || qr.exec(a);
        if (l) {
            for (f(e).iso = !0,
            t = 0,
            n = Hr.length; t < n; t++)
                if (Hr[t][1].exec(l[1])) {
                    r = Hr[t][0],
                    i = !1 !== Hr[t][2];
                    break
                }
            if (null == r)
                return void (e._isValid = !1);
            if (l[3]) {
                for (t = 0,
                n = Ur.length; t < n; t++)
                    if (Ur[t][1].exec(l[3])) {
                        o = (l[2] || " ") + Ur[t][0];
                        break
                    }
                if (null == o)
                    return void (e._isValid = !1)
            }
            if (!i && null != o)
                return void (e._isValid = !1);
            if (l[4]) {
                if (!Rr.exec(l[4]))
                    return void (e._isValid = !1);
                s = "Z"
            }
            e._f = r + (o || "") + (s || ""),
            vt(e)
        } else
            e._isValid = !1
    }
    function ut(e, t, n, i, r, o) {
        var s = [dt(e), kr.indexOf(t), parseInt(n, 10), parseInt(i, 10), parseInt(r, 10)];
        return o && s.push(parseInt(o, 10)),
        s
    }
    function dt(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
    }
    function ht(e) {
        return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim()
    }
    function ft(e, t, n) {
        if (e && Er.indexOf(e) !== new Date(t[0],t[1],t[2]).getDay())
            return f(n).weekdayMismatch = !0,
            n._isValid = !1,
            !1;
        return !0
    }
    function pt(e, t, n) {
        if (e)
            return Br[e];
        if (t)
            return 0;
        var i = parseInt(n, 10)
          , r = i % 100;
        return 60 * ((i - r) / 100) + r
    }
    function mt(e) {
        var t = Wr.exec(ht(e._i));
        if (t) {
            var n = ut(t[4], t[3], t[2], t[5], t[6], t[7]);
            if (!ft(t[1], n, e))
                return;
            e._a = n,
            e._tzm = pt(t[8], t[9], t[10]),
            e._d = we.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            f(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function gt(t) {
        var n = Yr.exec(t._i);
        null === n ? (ct(t),
        !1 === t._isValid && (delete t._isValid,
        mt(t),
        !1 === t._isValid && (delete t._isValid,
        e.createFromInputFallback(t)))) : t._d = new Date(+n[1])
    }
    function vt(t) {
        if (t._f !== e.ISO_8601)
            if (t._f !== e.RFC_2822) {
                t._a = [],
                f(t).empty = !0;
                var n, i, r, o, s, a = "" + t._i, l = a.length, c = 0;
                for (r = W(t._f, t._locale).match(Ri) || [],
                n = 0; n < r.length; n++)
                    o = r[n],
                    (i = (a.match(G(o, t)) || [])[0]) && ((s = a.substr(0, a.indexOf(i))).length > 0 && f(t).unusedInput.push(s),
                    a = a.slice(a.indexOf(i) + i.length),
                    c += i.length),
                    Yi[o] ? (i ? f(t).empty = !1 : f(t).unusedTokens.push(o),
                    K(o, i, t)) : t._strict && !i && f(t).unusedTokens.push(o);
                f(t).charsLeftOver = l - c,
                a.length > 0 && f(t).unusedInput.push(a),
                t._a[fr] <= 12 && !0 === f(t).bigHour && t._a[fr] > 0 && (f(t).bigHour = void 0),
                f(t).parsedDateParts = t._a.slice(0),
                f(t).meridiem = t._meridiem,
                t._a[fr] = yt(t._locale, t._a[fr], t._meridiem),
                at(t),
                rt(t)
            } else
                mt(t);
        else
            ct(t)
    }
    function yt(e, t, n) {
        var i;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((i = e.isPM(n)) && t < 12 && (t += 12),
        i || 12 !== t || (t = 0),
        t) : t
    }
    function bt(e) {
        var t, n, i, r, o;
        if (0 === e._f.length)
            return f(e).invalidFormat = !0,
            void (e._d = new Date(NaN));
        for (r = 0; r < e._f.length; r++)
            o = 0,
            t = g({}, e),
            null != e._useUTC && (t._useUTC = e._useUTC),
            t._f = e._f[r],
            vt(t),
            p(t) && (o += f(t).charsLeftOver,
            o += 10 * f(t).unusedTokens.length,
            f(t).score = o,
            (null == i || o < i) && (i = o,
            n = t));
        u(e, n || t)
    }
    function wt(e) {
        if (!e._d) {
            var t = N(e._i);
            e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                return e && parseInt(e, 10)
            }
            )),
            at(e)
        }
    }
    function _t(e) {
        var t = new v(rt(xt(e)));
        return t._nextDay && (t.add(1, "d"),
        t._nextDay = void 0),
        t
    }
    function xt(e) {
        var t = e._i
          , i = e._f;
        return e._locale = e._locale || nt(e._l),
        null === t || void 0 === i && "" === t ? m({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
        y(t) ? new v(rt(t)) : (a(t) ? e._d = t : n(i) ? bt(e) : i ? vt(e) : kt(e),
        p(e) || (e._d = null),
        e))
    }
    function kt(t) {
        var r = t._i;
        o(r) ? t._d = new Date(e.now()) : a(r) ? t._d = new Date(r.valueOf()) : "string" == typeof r ? gt(t) : n(r) ? (t._a = l(r.slice(0), (function(e) {
            return parseInt(e, 10)
        }
        )),
        at(t)) : i(r) ? wt(t) : s(r) ? t._d = new Date(r) : e.createFromInputFallback(t)
    }
    function $t(e, t, o, s, a) {
        var l = {};
        return !0 !== o && !1 !== o || (s = o,
        o = void 0),
        (i(e) && r(e) || n(e) && 0 === e.length) && (e = void 0),
        l._isAMomentObject = !0,
        l._useUTC = l._isUTC = a,
        l._l = o,
        l._i = e,
        l._f = t,
        l._strict = s,
        _t(l)
    }
    function Ct(e, t, n, i) {
        return $t(e, t, n, i, !1)
    }
    function St(e, t) {
        var i, r;
        if (1 === t.length && n(t[0]) && (t = t[0]),
        !t.length)
            return Ct();
        for (i = t[0],
        r = 1; r < t.length; ++r)
            t[r].isValid() && !t[r][e](i) || (i = t[r]);
        return i
    }
    function Tt() {
        return St("isBefore", [].slice.call(arguments, 0))
    }
    function Et() {
        return St("isAfter", [].slice.call(arguments, 0))
    }
    function Dt(e) {
        for (var t in e)
            if (-1 === br.call(Qr, t) || null != e[t] && isNaN(e[t]))
                return !1;
        for (var n = !1, i = 0; i < Qr.length; ++i)
            if (e[Qr[i]]) {
                if (n)
                    return !1;
                parseFloat(e[Qr[i]]) !== w(e[Qr[i]]) && (n = !0)
            }
        return !0
    }
    function At() {
        return this._isValid
    }
    function Mt() {
        return Qt(NaN)
    }
    function It(e) {
        var t = N(e)
          , n = t.year || 0
          , i = t.quarter || 0
          , r = t.month || 0
          , o = t.week || 0
          , s = t.day || 0
          , a = t.hour || 0
          , l = t.minute || 0
          , c = t.second || 0
          , u = t.millisecond || 0;
        this._isValid = Dt(t),
        this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * a * 60 * 60,
        this._days = +s + 7 * o,
        this._months = +r + 3 * i + 12 * n,
        this._data = {},
        this._locale = nt(),
        this._bubble()
    }
    function Pt(e) {
        return e instanceof It
    }
    function Ot(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Lt(e, t) {
        R(e, 0, 0, (function() {
            var e = this.utcOffset()
              , n = "+";
            return e < 0 && (e = -e,
            n = "-"),
            n + q(~~(e / 60), 2) + t + q(~~e % 60, 2)
        }
        ))
    }
    function jt(e, t) {
        var n = (t || "").match(e);
        if (null === n)
            return null;
        var i = ((n[n.length - 1] || []) + "").match(Zr) || ["-", 0, 0]
          , r = 60 * i[1] + w(i[2]);
        return 0 === r ? 0 : "+" === i[0] ? r : -r
    }
    function Nt(t, n) {
        var i, r;
        return n._isUTC ? (i = n.clone(),
        r = (y(t) || a(t) ? t.valueOf() : Ct(t).valueOf()) - i.valueOf(),
        i._d.setTime(i._d.valueOf() + r),
        e.updateOffset(i, !1),
        i) : Ct(t).local()
    }
    function Ft(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function zt(t, n, i) {
        var r, o = this._offset || 0;
        if (!this.isValid())
            return null != t ? this : NaN;
        if (null != t) {
            if ("string" == typeof t) {
                if (null === (t = jt(or, t)))
                    return this
            } else
                Math.abs(t) < 16 && !i && (t *= 60);
            return !this._isUTC && n && (r = Ft(this)),
            this._offset = t,
            this._isUTC = !0,
            null != r && this.add(r, "m"),
            o !== t && (!n || this._changeInProgress ? tn(this, Qt(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            e.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        }
        return this._isUTC ? o : Ft(this)
    }
    function qt(e, t) {
        return null != e ? ("string" != typeof e && (e = -e),
        this.utcOffset(e, t),
        this) : -this.utcOffset()
    }
    function Rt(e) {
        return this.utcOffset(0, e)
    }
    function Ht(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(Ft(this), "m")),
        this
    }
    function Ut() {
        if (null != this._tzm)
            this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = jt(rr, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    function Yt(e) {
        return !!this.isValid() && (e = e ? Ct(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    function Wt() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function Bt() {
        if (!o(this._isDSTShifted))
            return this._isDSTShifted;
        var e = {};
        if (g(e, this),
        (e = xt(e))._a) {
            var t = e._isUTC ? d(e._a) : Ct(e._a);
            this._isDSTShifted = this.isValid() && _(e._a, t.toArray()) > 0
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted
    }
    function Gt() {
        return !!this.isValid() && !this._isUTC
    }
    function Vt() {
        return !!this.isValid() && this._isUTC
    }
    function Xt() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    function Qt(e, t) {
        var n, i, r, o = e, a = null;
        return Pt(e) ? o = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : s(e) ? (o = {},
        t ? o[t] = e : o.milliseconds = e) : (a = Kr.exec(e)) ? (n = "-" === a[1] ? -1 : 1,
        o = {
            y: 0,
            d: w(a[hr]) * n,
            h: w(a[fr]) * n,
            m: w(a[pr]) * n,
            s: w(a[mr]) * n,
            ms: w(Ot(1e3 * a[gr])) * n
        }) : (a = Jr.exec(e)) ? (n = "-" === a[1] ? -1 : (a[1],
        1),
        o = {
            y: Zt(a[2], n),
            M: Zt(a[3], n),
            w: Zt(a[4], n),
            d: Zt(a[5], n),
            h: Zt(a[6], n),
            m: Zt(a[7], n),
            s: Zt(a[8], n)
        }) : null == o ? o = {} : "object" == typeof o && ("from"in o || "to"in o) && (r = Jt(Ct(o.from), Ct(o.to)),
        (o = {}).ms = r.milliseconds,
        o.M = r.months),
        i = new It(o),
        Pt(e) && c(e, "_locale") && (i._locale = e._locale),
        i
    }
    function Zt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function Kt(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function Jt(e, t) {
        var n;
        return e.isValid() && t.isValid() ? (t = Nt(t, e),
        e.isBefore(t) ? n = Kt(e, t) : ((n = Kt(t, e)).milliseconds = -n.milliseconds,
        n.months = -n.months),
        n) : {
            milliseconds: 0,
            months: 0
        }
    }
    function en(e, t) {
        return function(n, i) {
            var r;
            return null === i || isNaN(+i) || ($(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            r = n,
            n = i,
            i = r),
            tn(this, Qt(n = "string" == typeof n ? +n : n, i), e),
            this
        }
    }
    function tn(t, n, i, r) {
        var o = n._milliseconds
          , s = Ot(n._days)
          , a = Ot(n._months);
        t.isValid() && (r = null == r || r,
        a && fe(t, ie(t, "Month") + a * i),
        s && re(t, "Date", ie(t, "Date") + s * i),
        o && t._d.setTime(t._d.valueOf() + o * i),
        r && e.updateOffset(t, s || a))
    }
    function nn(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    function rn(t, n) {
        var i = t || Ct()
          , r = Nt(i, this).startOf("day")
          , o = e.calendarFormat(this, r) || "sameElse"
          , s = n && (C(n[o]) ? n[o].call(this, i) : n[o]);
        return this.format(s || this.localeData().calendar(o, this, Ct(i)))
    }
    function on() {
        return new v(this)
    }
    function sn(e, t) {
        var n = y(e) ? e : Ct(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = j(o(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }
    function an(e, t) {
        var n = y(e) ? e : Ct(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = j(o(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }
    function ln(e, t, n, i) {
        return ("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    }
    function cn(e, t) {
        var n, i = y(e) ? e : Ct(e);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = j(t || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(),
        this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }
    function un(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    function dn(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    function hn(e, t, n) {
        var i, r, o;
        if (!this.isValid())
            return NaN;
        if (!(i = Nt(e, this)).isValid())
            return NaN;
        switch (r = 6e4 * (i.utcOffset() - this.utcOffset()),
        t = j(t)) {
        case "year":
            o = fn(this, i) / 12;
            break;
        case "month":
            o = fn(this, i);
            break;
        case "quarter":
            o = fn(this, i) / 3;
            break;
        case "second":
            o = (this - i) / 1e3;
            break;
        case "minute":
            o = (this - i) / 6e4;
            break;
        case "hour":
            o = (this - i) / 36e5;
            break;
        case "day":
            o = (this - i - r) / 864e5;
            break;
        case "week":
            o = (this - i - r) / 6048e5;
            break;
        default:
            o = this - i
        }
        return n ? o : b(o)
    }
    function fn(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month())
          , i = e.clone().add(n, "months");
        return -(n + (t - i < 0 ? (t - i) / (i - e.clone().add(n - 1, "months")) : (t - i) / (e.clone().add(n + 1, "months") - i))) || 0
    }
    function pn() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function mn(e) {
        if (!this.isValid())
            return null;
        var t = !0 !== e
          , n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? Y(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : C(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this._d.valueOf()).toISOString().replace("Z", Y(n, "Z")) : Y(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    function gn() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e = "moment"
          , t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        t = "Z");
        var n = "[" + e + '("]'
          , i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
          , r = "-MM-DD[T]HH:mm:ss.SSS"
          , o = t + '[")]';
        return this.format(n + i + r + o)
    }
    function vn(t) {
        t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
        var n = Y(this, t);
        return this.localeData().postformat(n)
    }
    function yn(e, t) {
        return this.isValid() && (y(e) && e.isValid() || Ct(e).isValid()) ? Qt({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function bn(e) {
        return this.from(Ct(), e)
    }
    function wn(e, t) {
        return this.isValid() && (y(e) && e.isValid() || Ct(e).isValid()) ? Qt({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function _n(e) {
        return this.to(Ct(), e)
    }
    function xn(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = nt(e)) && (this._locale = t),
        this)
    }
    function kn() {
        return this._locale
    }
    function $n(e) {
        switch (e = j(e)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    function Cn(e) {
        return void 0 === (e = j(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"),
        this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
    }
    function Sn() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    function Tn() {
        return Math.floor(this.valueOf() / 1e3)
    }
    function En() {
        return new Date(this.valueOf())
    }
    function Dn() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    function An() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }
    function Mn() {
        return this.isValid() ? this.toISOString() : null
    }
    function In() {
        return p(this)
    }
    function Pn() {
        return u({}, f(this))
    }
    function On() {
        return f(this).overflow
    }
    function Ln() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    function jn(e, t) {
        R(0, [e, e.length], 0, t)
    }
    function Nn(e) {
        return Rn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    function Fn(e) {
        return Rn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    function zn() {
        return $e(this.year(), 1, 4)
    }
    function qn() {
        var e = this.localeData()._week;
        return $e(this.year(), e.dow, e.doy)
    }
    function Rn(e, t, n, i, r) {
        var o;
        return null == e ? ke(this, i, r).year : (t > (o = $e(e, i, r)) && (t = o),
        Hn.call(this, e, t, n, i, r))
    }
    function Hn(e, t, n, i, r) {
        var o = xe(e, t, n, i, r)
          , s = we(o.year, 0, o.dayOfYear);
        return this.year(s.getUTCFullYear()),
        this.month(s.getUTCMonth()),
        this.date(s.getUTCDate()),
        this
    }
    function Un(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    function Yn(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    function Wn(e, t) {
        t[gr] = w(1e3 * ("0." + e))
    }
    function Bn() {
        return this._isUTC ? "UTC" : ""
    }
    function Gn() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    function Vn(e) {
        return Ct(1e3 * e)
    }
    function Xn() {
        return Ct.apply(null, arguments).parseZone()
    }
    function Qn(e) {
        return e
    }
    function Zn(e, t, n, i) {
        var r = nt()
          , o = d().set(i, t);
        return r[n](o, e)
    }
    function Kn(e, t, n) {
        if (s(e) && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return Zn(e, t, n, "month");
        var i, r = [];
        for (i = 0; i < 12; i++)
            r[i] = Zn(e, i, n, "month");
        return r
    }
    function Jn(e, t, n, i) {
        "boolean" == typeof e ? (s(t) && (n = t,
        t = void 0),
        t = t || "") : (n = t = e,
        e = !1,
        s(t) && (n = t,
        t = void 0),
        t = t || "");
        var r, o = nt(), a = e ? o._week.dow : 0;
        if (null != n)
            return Zn(t, (n + a) % 7, i, "day");
        var l = [];
        for (r = 0; r < 7; r++)
            l[r] = Zn(t, (r + a) % 7, i, "day");
        return l
    }
    function ei(e, t) {
        return Kn(e, t, "months")
    }
    function ti(e, t) {
        return Kn(e, t, "monthsShort")
    }
    function ni(e, t, n) {
        return Jn(e, t, n, "weekdays")
    }
    function ii(e, t, n) {
        return Jn(e, t, n, "weekdaysShort")
    }
    function ri(e, t, n) {
        return Jn(e, t, n, "weekdaysMin")
    }
    function oi() {
        var e = this._data;
        return this._milliseconds = uo(this._milliseconds),
        this._days = uo(this._days),
        this._months = uo(this._months),
        e.milliseconds = uo(e.milliseconds),
        e.seconds = uo(e.seconds),
        e.minutes = uo(e.minutes),
        e.hours = uo(e.hours),
        e.months = uo(e.months),
        e.years = uo(e.years),
        this
    }
    function si(e, t, n, i) {
        var r = Qt(t, n);
        return e._milliseconds += i * r._milliseconds,
        e._days += i * r._days,
        e._months += i * r._months,
        e._bubble()
    }
    function ai(e, t) {
        return si(this, e, t, 1)
    }
    function li(e, t) {
        return si(this, e, t, -1)
    }
    function ci(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function ui() {
        var e, t, n, i, r, o = this._milliseconds, s = this._days, a = this._months, l = this._data;
        return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * ci(hi(a) + s),
        s = 0,
        a = 0),
        l.milliseconds = o % 1e3,
        e = b(o / 1e3),
        l.seconds = e % 60,
        t = b(e / 60),
        l.minutes = t % 60,
        n = b(t / 60),
        l.hours = n % 24,
        s += b(n / 24),
        a += r = b(di(s)),
        s -= ci(hi(r)),
        i = b(a / 12),
        a %= 12,
        l.days = s,
        l.months = a,
        l.years = i,
        this
    }
    function di(e) {
        return 4800 * e / 146097
    }
    function hi(e) {
        return 146097 * e / 4800
    }
    function fi(e) {
        if (!this.isValid())
            return NaN;
        var t, n, i = this._milliseconds;
        if ("month" === (e = j(e)) || "year" === e)
            return t = this._days + i / 864e5,
            n = this._months + di(t),
            "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(hi(this._months)),
        e) {
        case "week":
            return t / 7 + i / 6048e5;
        case "day":
            return t + i / 864e5;
        case "hour":
            return 24 * t + i / 36e5;
        case "minute":
            return 1440 * t + i / 6e4;
        case "second":
            return 86400 * t + i / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + i;
        default:
            throw new Error("Unknown unit " + e)
        }
    }
    function pi() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN
    }
    function mi(e) {
        return function() {
            return this.as(e)
        }
    }
    function gi() {
        return Qt(this)
    }
    function vi(e) {
        return e = j(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    function yi(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    function bi() {
        return b(this.days() / 7)
    }
    function wi(e, t, n, i, r) {
        return r.relativeTime(t || 1, !!n, e, i)
    }
    function _i(e, t, n) {
        var i = Qt(e).abs()
          , r = To(i.as("s"))
          , o = To(i.as("m"))
          , s = To(i.as("h"))
          , a = To(i.as("d"))
          , l = To(i.as("M"))
          , c = To(i.as("y"))
          , u = r <= Eo.ss && ["s", r] || r < Eo.s && ["ss", r] || o <= 1 && ["m"] || o < Eo.m && ["mm", o] || s <= 1 && ["h"] || s < Eo.h && ["hh", s] || a <= 1 && ["d"] || a < Eo.d && ["dd", a] || l <= 1 && ["M"] || l < Eo.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c];
        return u[2] = t,
        u[3] = +e > 0,
        u[4] = n,
        wi.apply(null, u)
    }
    function xi(e) {
        return void 0 === e ? To : "function" == typeof e && (To = e,
        !0)
    }
    function ki(e, t) {
        return void 0 !== Eo[e] && (void 0 === t ? Eo[e] : (Eo[e] = t,
        "s" === e && (Eo.ss = t - 1),
        !0))
    }
    function $i(e) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var t = this.localeData()
          , n = _i(this, !e, t);
        return e && (n = t.pastFuture(+this, n)),
        t.postformat(n)
    }
    function Ci(e) {
        return (e > 0) - (e < 0) || +e
    }
    function Si() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, t, n = Do(this._milliseconds) / 1e3, i = Do(this._days), r = Do(this._months);
        e = b(n / 60),
        t = b(e / 60),
        n %= 60,
        e %= 60;
        var o = b(r / 12)
          , s = r %= 12
          , a = i
          , l = t
          , c = e
          , u = n ? n.toFixed(3).replace(/\.?0+$/, "") : ""
          , d = this.asSeconds();
        if (!d)
            return "P0D";
        var h = d < 0 ? "-" : ""
          , f = Ci(this._months) !== Ci(d) ? "-" : ""
          , p = Ci(this._days) !== Ci(d) ? "-" : ""
          , m = Ci(this._milliseconds) !== Ci(d) ? "-" : "";
        return h + "P" + (o ? f + o + "Y" : "") + (s ? f + s + "M" : "") + (a ? p + a + "D" : "") + (l || c || u ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (u ? m + u + "S" : "")
    }
    var Ti, Ei;
    Ei = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
            if (i in t && e.call(this, t[i], i, t))
                return !0;
        return !1
    }
    ;
    var Di, Ai = e.momentProperties = [], Mi = !1, Ii = {};
    e.suppressDeprecationWarnings = !1,
    e.deprecationHandler = null,
    Di = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e)
            c(e, t) && n.push(t);
        return n
    }
    ;
    var Pi = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }
      , Oi = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }
      , Li = "Invalid date"
      , ji = "%d"
      , Ni = /\d{1,2}/
      , Fi = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }
      , zi = {}
      , qi = {}
      , Ri = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , Hi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , Ui = {}
      , Yi = {}
      , Wi = /\d/
      , Bi = /\d\d/
      , Gi = /\d{3}/
      , Vi = /\d{4}/
      , Xi = /[+-]?\d{6}/
      , Qi = /\d\d?/
      , Zi = /\d\d\d\d?/
      , Ki = /\d\d\d\d\d\d?/
      , Ji = /\d{1,3}/
      , er = /\d{1,4}/
      , tr = /[+-]?\d{1,6}/
      , nr = /\d+/
      , ir = /[+-]?\d+/
      , rr = /Z|[+-]\d\d:?\d\d/gi
      , or = /Z|[+-]\d\d(?::?\d\d)?/gi
      , sr = /[+-]?\d+(\.\d{1,3})?/
      , ar = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
      , lr = {}
      , cr = {}
      , ur = 0
      , dr = 1
      , hr = 2
      , fr = 3
      , pr = 4
      , mr = 5
      , gr = 6
      , vr = 7
      , yr = 8;
    R("Y", 0, 0, (function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }
    )),
    R(0, ["YY", 2], 0, (function() {
        return this.year() % 100
    }
    )),
    R(0, ["YYYY", 4], 0, "year"),
    R(0, ["YYYYY", 5], 0, "year"),
    R(0, ["YYYYYY", 6, !0], 0, "year"),
    L("year", "y"),
    F("year", 1),
    B("Y", ir),
    B("YY", Qi, Bi),
    B("YYYY", er, Vi),
    B("YYYYY", tr, Xi),
    B("YYYYYY", tr, Xi),
    Q(["YYYYY", "YYYYYY"], ur),
    Q("YYYY", (function(t, n) {
        n[ur] = 2 === t.length ? e.parseTwoDigitYear(t) : w(t)
    }
    )),
    Q("YY", (function(t, n) {
        n[ur] = e.parseTwoDigitYear(t)
    }
    )),
    Q("Y", (function(e, t) {
        t[ur] = parseInt(e, 10)
    }
    )),
    e.parseTwoDigitYear = function(e) {
        return w(e) + (w(e) > 68 ? 1900 : 2e3)
    }
    ;
    var br, wr = ne("FullYear", !0);
    br = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
    ,
    R("M", ["MM", 2], "Mo", (function() {
        return this.month() + 1
    }
    )),
    R("MMM", 0, 0, (function(e) {
        return this.localeData().monthsShort(this, e)
    }
    )),
    R("MMMM", 0, 0, (function(e) {
        return this.localeData().months(this, e)
    }
    )),
    L("month", "M"),
    F("month", 8),
    B("M", Qi),
    B("MM", Qi, Bi),
    B("MMM", (function(e, t) {
        return t.monthsShortRegex(e)
    }
    )),
    B("MMMM", (function(e, t) {
        return t.monthsRegex(e)
    }
    )),
    Q(["M", "MM"], (function(e, t) {
        t[dr] = w(e) - 1
    }
    )),
    Q(["MMM", "MMMM"], (function(e, t, n, i) {
        var r = n._locale.monthsParse(e, i, n._strict);
        null != r ? t[dr] = r : f(n).invalidMonth = e
    }
    ));
    var _r = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , xr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , kr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , $r = ar
      , Cr = ar;
    R("w", ["ww", 2], "wo", "week"),
    R("W", ["WW", 2], "Wo", "isoWeek"),
    L("week", "w"),
    L("isoWeek", "W"),
    F("week", 5),
    F("isoWeek", 5),
    B("w", Qi),
    B("ww", Qi, Bi),
    B("W", Qi),
    B("WW", Qi, Bi),
    Z(["w", "ww", "W", "WW"], (function(e, t, n, i) {
        t[i.substr(0, 1)] = w(e)
    }
    ));
    var Sr = {
        dow: 0,
        doy: 6
    };
    R("d", 0, "do", "day"),
    R("dd", 0, 0, (function(e) {
        return this.localeData().weekdaysMin(this, e)
    }
    )),
    R("ddd", 0, 0, (function(e) {
        return this.localeData().weekdaysShort(this, e)
    }
    )),
    R("dddd", 0, 0, (function(e) {
        return this.localeData().weekdays(this, e)
    }
    )),
    R("e", 0, 0, "weekday"),
    R("E", 0, 0, "isoWeekday"),
    L("day", "d"),
    L("weekday", "e"),
    L("isoWeekday", "E"),
    F("day", 11),
    F("weekday", 11),
    F("isoWeekday", 11),
    B("d", Qi),
    B("e", Qi),
    B("E", Qi),
    B("dd", (function(e, t) {
        return t.weekdaysMinRegex(e)
    }
    )),
    B("ddd", (function(e, t) {
        return t.weekdaysShortRegex(e)
    }
    )),
    B("dddd", (function(e, t) {
        return t.weekdaysRegex(e)
    }
    )),
    Z(["dd", "ddd", "dddd"], (function(e, t, n, i) {
        var r = n._locale.weekdaysParse(e, i, n._strict);
        null != r ? t.d = r : f(n).invalidWeekday = e
    }
    )),
    Z(["d", "e", "E"], (function(e, t, n, i) {
        t[i] = w(e)
    }
    ));
    var Tr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , Er = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , Dr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , Ar = ar
      , Mr = ar
      , Ir = ar;
    R("H", ["HH", 2], 0, "hour"),
    R("h", ["hh", 2], 0, Ye),
    R("k", ["kk", 2], 0, We),
    R("hmm", 0, 0, (function() {
        return "" + Ye.apply(this) + q(this.minutes(), 2)
    }
    )),
    R("hmmss", 0, 0, (function() {
        return "" + Ye.apply(this) + q(this.minutes(), 2) + q(this.seconds(), 2)
    }
    )),
    R("Hmm", 0, 0, (function() {
        return "" + this.hours() + q(this.minutes(), 2)
    }
    )),
    R("Hmmss", 0, 0, (function() {
        return "" + this.hours() + q(this.minutes(), 2) + q(this.seconds(), 2)
    }
    )),
    Be("a", !0),
    Be("A", !1),
    L("hour", "h"),
    F("hour", 13),
    B("a", Ge),
    B("A", Ge),
    B("H", Qi),
    B("h", Qi),
    B("k", Qi),
    B("HH", Qi, Bi),
    B("hh", Qi, Bi),
    B("kk", Qi, Bi),
    B("hmm", Zi),
    B("hmmss", Ki),
    B("Hmm", Zi),
    B("Hmmss", Ki),
    Q(["H", "HH"], fr),
    Q(["k", "kk"], (function(e, t) {
        var n = w(e);
        t[fr] = 24 === n ? 0 : n
    }
    )),
    Q(["a", "A"], (function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }
    )),
    Q(["h", "hh"], (function(e, t, n) {
        t[fr] = w(e),
        f(n).bigHour = !0
    }
    )),
    Q("hmm", (function(e, t, n) {
        var i = e.length - 2;
        t[fr] = w(e.substr(0, i)),
        t[pr] = w(e.substr(i)),
        f(n).bigHour = !0
    }
    )),
    Q("hmmss", (function(e, t, n) {
        var i = e.length - 4
          , r = e.length - 2;
        t[fr] = w(e.substr(0, i)),
        t[pr] = w(e.substr(i, 2)),
        t[mr] = w(e.substr(r)),
        f(n).bigHour = !0
    }
    )),
    Q("Hmm", (function(e, t) {
        var n = e.length - 2;
        t[fr] = w(e.substr(0, n)),
        t[pr] = w(e.substr(n))
    }
    )),
    Q("Hmmss", (function(e, t) {
        var n = e.length - 4
          , i = e.length - 2;
        t[fr] = w(e.substr(0, n)),
        t[pr] = w(e.substr(n, 2)),
        t[mr] = w(e.substr(i))
    }
    ));
    var Pr, Or = /[ap]\.?m?\.?/i, Lr = ne("Hours", !0), jr = {
        calendar: Pi,
        longDateFormat: Oi,
        invalidDate: Li,
        ordinal: ji,
        dayOfMonthOrdinalParse: Ni,
        relativeTime: Fi,
        months: xr,
        monthsShort: kr,
        week: Sr,
        weekdays: Tr,
        weekdaysMin: Dr,
        weekdaysShort: Er,
        meridiemParse: Or
    }, Nr = {}, Fr = {}, zr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, qr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Rr = /Z|[+-]\d\d(?::?\d\d)?/, Hr = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], Ur = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Yr = /^\/?Date\((\-?\d+)/i, Wr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Br = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    e.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }
    )),
    e.ISO_8601 = function() {}
    ,
    e.RFC_2822 = function() {}
    ;
    var Gr = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var e = Ct.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : m()
    }
    ))
      , Vr = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var e = Ct.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : m()
    }
    ))
      , Xr = function() {
        return Date.now ? Date.now() : +new Date
    }
      , Qr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Lt("Z", ":"),
    Lt("ZZ", ""),
    B("Z", or),
    B("ZZ", or),
    Q(["Z", "ZZ"], (function(e, t, n) {
        n._useUTC = !0,
        n._tzm = jt(or, e)
    }
    ));
    var Zr = /([\+\-]|\d\d)/gi;
    e.updateOffset = function() {}
    ;
    var Kr = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
      , Jr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    Qt.fn = It.prototype,
    Qt.invalid = Mt;
    var eo = en(1, "add")
      , to = en(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var no = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    }
    ));
    R(0, ["gg", 2], 0, (function() {
        return this.weekYear() % 100
    }
    )),
    R(0, ["GG", 2], 0, (function() {
        return this.isoWeekYear() % 100
    }
    )),
    jn("gggg", "weekYear"),
    jn("ggggg", "weekYear"),
    jn("GGGG", "isoWeekYear"),
    jn("GGGGG", "isoWeekYear"),
    L("weekYear", "gg"),
    L("isoWeekYear", "GG"),
    F("weekYear", 1),
    F("isoWeekYear", 1),
    B("G", ir),
    B("g", ir),
    B("GG", Qi, Bi),
    B("gg", Qi, Bi),
    B("GGGG", er, Vi),
    B("gggg", er, Vi),
    B("GGGGG", tr, Xi),
    B("ggggg", tr, Xi),
    Z(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, i) {
        t[i.substr(0, 2)] = w(e)
    }
    )),
    Z(["gg", "GG"], (function(t, n, i, r) {
        n[r] = e.parseTwoDigitYear(t)
    }
    )),
    R("Q", 0, "Qo", "quarter"),
    L("quarter", "Q"),
    F("quarter", 7),
    B("Q", Wi),
    Q("Q", (function(e, t) {
        t[dr] = 3 * (w(e) - 1)
    }
    )),
    R("D", ["DD", 2], "Do", "date"),
    L("date", "D"),
    F("date", 9),
    B("D", Qi),
    B("DD", Qi, Bi),
    B("Do", (function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }
    )),
    Q(["D", "DD"], hr),
    Q("Do", (function(e, t) {
        t[hr] = w(e.match(Qi)[0])
    }
    ));
    var io = ne("Date", !0);
    R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    L("dayOfYear", "DDD"),
    F("dayOfYear", 4),
    B("DDD", Ji),
    B("DDDD", Gi),
    Q(["DDD", "DDDD"], (function(e, t, n) {
        n._dayOfYear = w(e)
    }
    )),
    R("m", ["mm", 2], 0, "minute"),
    L("minute", "m"),
    F("minute", 14),
    B("m", Qi),
    B("mm", Qi, Bi),
    Q(["m", "mm"], pr);
    var ro = ne("Minutes", !1);
    R("s", ["ss", 2], 0, "second"),
    L("second", "s"),
    F("second", 15),
    B("s", Qi),
    B("ss", Qi, Bi),
    Q(["s", "ss"], mr);
    var oo, so = ne("Seconds", !1);
    for (R("S", 0, 0, (function() {
        return ~~(this.millisecond() / 100)
    }
    )),
    R(0, ["SS", 2], 0, (function() {
        return ~~(this.millisecond() / 10)
    }
    )),
    R(0, ["SSS", 3], 0, "millisecond"),
    R(0, ["SSSS", 4], 0, (function() {
        return 10 * this.millisecond()
    }
    )),
    R(0, ["SSSSS", 5], 0, (function() {
        return 100 * this.millisecond()
    }
    )),
    R(0, ["SSSSSS", 6], 0, (function() {
        return 1e3 * this.millisecond()
    }
    )),
    R(0, ["SSSSSSS", 7], 0, (function() {
        return 1e4 * this.millisecond()
    }
    )),
    R(0, ["SSSSSSSS", 8], 0, (function() {
        return 1e5 * this.millisecond()
    }
    )),
    R(0, ["SSSSSSSSS", 9], 0, (function() {
        return 1e6 * this.millisecond()
    }
    )),
    L("millisecond", "ms"),
    F("millisecond", 16),
    B("S", Ji, Wi),
    B("SS", Ji, Bi),
    B("SSS", Ji, Gi),
    oo = "SSSS"; oo.length <= 9; oo += "S")
        B(oo, nr);
    for (oo = "S"; oo.length <= 9; oo += "S")
        Q(oo, Wn);
    var ao = ne("Milliseconds", !1);
    R("z", 0, 0, "zoneAbbr"),
    R("zz", 0, 0, "zoneName");
    var lo = v.prototype;
    lo.add = eo,
    lo.calendar = rn,
    lo.clone = on,
    lo.diff = hn,
    lo.endOf = Cn,
    lo.format = vn,
    lo.from = yn,
    lo.fromNow = bn,
    lo.to = wn,
    lo.toNow = _n,
    lo.get = oe,
    lo.invalidAt = On,
    lo.isAfter = sn,
    lo.isBefore = an,
    lo.isBetween = ln,
    lo.isSame = cn,
    lo.isSameOrAfter = un,
    lo.isSameOrBefore = dn,
    lo.isValid = In,
    lo.lang = no,
    lo.locale = xn,
    lo.localeData = kn,
    lo.max = Vr,
    lo.min = Gr,
    lo.parsingFlags = Pn,
    lo.set = se,
    lo.startOf = $n,
    lo.subtract = to,
    lo.toArray = Dn,
    lo.toObject = An,
    lo.toDate = En,
    lo.toISOString = mn,
    lo.inspect = gn,
    lo.toJSON = Mn,
    lo.toString = pn,
    lo.unix = Tn,
    lo.valueOf = Sn,
    lo.creationData = Ln,
    lo.year = wr,
    lo.isLeapYear = te,
    lo.weekYear = Nn,
    lo.isoWeekYear = Fn,
    lo.quarter = lo.quarters = Un,
    lo.month = pe,
    lo.daysInMonth = me,
    lo.week = lo.weeks = Ee,
    lo.isoWeek = lo.isoWeeks = De,
    lo.weeksInYear = qn,
    lo.isoWeeksInYear = zn,
    lo.date = io,
    lo.day = lo.days = Ne,
    lo.weekday = Fe,
    lo.isoWeekday = ze,
    lo.dayOfYear = Yn,
    lo.hour = lo.hours = Lr,
    lo.minute = lo.minutes = ro,
    lo.second = lo.seconds = so,
    lo.millisecond = lo.milliseconds = ao,
    lo.utcOffset = zt,
    lo.utc = Rt,
    lo.local = Ht,
    lo.parseZone = Ut,
    lo.hasAlignedHourOffset = Yt,
    lo.isDST = Wt,
    lo.isLocal = Gt,
    lo.isUtcOffset = Vt,
    lo.isUtc = Xt,
    lo.isUTC = Xt,
    lo.zoneAbbr = Bn,
    lo.zoneName = Gn,
    lo.dates = k("dates accessor is deprecated. Use date instead.", io),
    lo.months = k("months accessor is deprecated. Use month instead", pe),
    lo.years = k("years accessor is deprecated. Use year instead", wr),
    lo.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", qt),
    lo.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Bt);
    var co = E.prototype;
    co.calendar = D,
    co.longDateFormat = A,
    co.invalidDate = M,
    co.ordinal = I,
    co.preparse = Qn,
    co.postformat = Qn,
    co.relativeTime = P,
    co.pastFuture = O,
    co.set = S,
    co.months = ce,
    co.monthsShort = ue,
    co.monthsParse = he,
    co.monthsRegex = ve,
    co.monthsShortRegex = ge,
    co.week = Ce,
    co.firstDayOfYear = Te,
    co.firstDayOfWeek = Se,
    co.weekdays = Ie,
    co.weekdaysMin = Oe,
    co.weekdaysShort = Pe,
    co.weekdaysParse = je,
    co.weekdaysRegex = qe,
    co.weekdaysShortRegex = Re,
    co.weekdaysMinRegex = He,
    co.isPM = Ve,
    co.meridiem = Xe,
    Je("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === w(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }),
    e.lang = k("moment.lang is deprecated. Use moment.locale instead.", Je),
    e.langData = k("moment.langData is deprecated. Use moment.localeData instead.", nt);
    var uo = Math.abs
      , ho = mi("ms")
      , fo = mi("s")
      , po = mi("m")
      , mo = mi("h")
      , go = mi("d")
      , vo = mi("w")
      , yo = mi("M")
      , bo = mi("y")
      , wo = yi("milliseconds")
      , _o = yi("seconds")
      , xo = yi("minutes")
      , ko = yi("hours")
      , $o = yi("days")
      , Co = yi("months")
      , So = yi("years")
      , To = Math.round
      , Eo = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }
      , Do = Math.abs
      , Ao = It.prototype;
    return Ao.isValid = At,
    Ao.abs = oi,
    Ao.add = ai,
    Ao.subtract = li,
    Ao.as = fi,
    Ao.asMilliseconds = ho,
    Ao.asSeconds = fo,
    Ao.asMinutes = po,
    Ao.asHours = mo,
    Ao.asDays = go,
    Ao.asWeeks = vo,
    Ao.asMonths = yo,
    Ao.asYears = bo,
    Ao.valueOf = pi,
    Ao._bubble = ui,
    Ao.clone = gi,
    Ao.get = vi,
    Ao.milliseconds = wo,
    Ao.seconds = _o,
    Ao.minutes = xo,
    Ao.hours = ko,
    Ao.days = $o,
    Ao.weeks = bi,
    Ao.months = Co,
    Ao.years = So,
    Ao.humanize = $i,
    Ao.toISOString = Si,
    Ao.toString = Si,
    Ao.toJSON = Si,
    Ao.locale = xn,
    Ao.localeData = kn,
    Ao.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Si),
    Ao.lang = no,
    R("X", 0, 0, "unix"),
    R("x", 0, 0, "valueOf"),
    B("x", ir),
    B("X", sr),
    Q("X", (function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }
    )),
    Q("x", (function(e, t, n) {
        n._d = new Date(w(e))
    }
    )),
    e.version = "2.20.1",
    t(Ct),
    e.fn = lo,
    e.min = Tt,
    e.max = Et,
    e.now = Xr,
    e.utc = d,
    e.unix = Vn,
    e.months = ei,
    e.isDate = a,
    e.locale = Je,
    e.invalid = m,
    e.duration = Qt,
    e.isMoment = y,
    e.weekdays = ni,
    e.parseZone = Xn,
    e.localeData = nt,
    e.isDuration = Pt,
    e.monthsShort = ti,
    e.weekdaysMin = ri,
    e.defineLocale = et,
    e.updateLocale = tt,
    e.locales = it,
    e.weekdaysShort = ii,
    e.normalizeUnits = j,
    e.relativeTimeRounding = xi,
    e.relativeTimeThreshold = ki,
    e.calendarFormat = nn,
    e.prototype = lo,
    e.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "YYYY-[W]WW",
        MONTH: "YYYY-MM"
    },
    e
}
)),
ready((function() {
    function e(e) {
        this.conversation$ = e,
        this.$input = $("#chatbot-typing-area"),
        this.$sendButton = $("#chatbot-enter-btn"),
        this.loading = !1,
        this.listen(),
        this.$input.focus(),
        this.greet()
    }
    function t(e) {
        return document.getElementById(e).dataset.userChatbotUrl
    }
    function n() {
        o("helpdesk_closed", {}),
        $("#helpdesk-panel").animate({
            width: "hide",
            opacity: "hide"
        }, {
            duration: 200,
            step: function() {
                var e = $("#helpdesk-panel").width();
                $("#helpdesk-button").css("right", e - 1)
            },
            complete: function() {
                "default" === l ? ($("#helpdesk-panel .helpdesk-default-box").fadeOut("fast"),
                $("#helpdesk-panel .helpdesk-result-box").hide()) : $("#helpdesk-panel .helpdesk-result-box").fadeOut("fast", (function() {
                    $("#helpdesk-panel .helpdesk-default-box").hide(),
                    l = "default"
                }
                ))
            }
        }),
        $(".dimmer").animate({
            opacity: 0
        }, {
            duration: 200,
            complete: function() {
                $(this).hide()
            }
        }),
        $(".dimmer").on("click", (function() {}
        )),
        c = !1,
        i = null
    }
    var i = null
      , r = function(e, t, n, i) {
        var r = Math.max(0, e - t);
        setTimeout(i, r * (n + 1))
    }
      , o = function(e, t) {
        if (gon.user_id) {
            var n = document.getElementById("chatbot-current-feature");
            t.helpdesk_session_id = i,
            t.chatbot_version = n ? n.dataset.feature : "default",
            t.language = I18n.locale,
            $(document).trigger("track-event", {
                verb: e,
                resource: window.location.pathname,
                resourceType: "page",
                inContext: t
            })
        }
    }
      , s = function() {
        var e = $("#helpdesk-suggestions");
        if (0 !== e.length) {
            var n = $("#helpdesk-form").find("[name=title]")
              , i = t("chatbot-urls-v1")
              , r = function() {
                e.removeClass("is-loaded");
                var t = (new Date).getTime()
                  , r = n.val();
                "" !== r.trim() && (e.addClass("is-loading"),
                $.ajax({
                    type: "POST",
                    url: i,
                    dataType: "json",
                    data: JSON.stringify({
                        message: r
                    }),
                    success: function(t) {
                        t.length > 0 && (e.addClass("is-loaded"),
                        e.find(".result-text p").html(t[0].text))
                    },
                    complete: function(n, i) {
                        e.removeClass("is-loading");
                        var s = (new Date).getTime() - t;
                        if ("success" === i) {
                            var a = n.responseJSON.length > 0 ? n.responseJSON[0].text : "";
                            o("helpdesk_chatbot_replied", {
                                question: r,
                                response: a,
                                request_time: s,
                                status: i
                            })
                        } else
                            o("helpdesk_chatbot_replied", {
                                question: r,
                                request_time: s,
                                status: i
                            })
                    }
                }))
            };
            n.on("blur", r)
        }
    }
      , a = function() {
        var t = document.getElementById("chatbot-conversation");
        t && new e(t)
    }
      , l = "default"
      , c = !1;
    window.openHelpdeskLayer = function() {
        var e;
        i = Math.random().toString(36).substr(2, 12),
        o("helpdesk_opened", {});
        var t = -1 != navigator.userAgent.toLowerCase().indexOf("msie");
        e = t ? navigator.browserLanguage : navigator.language,
        $(".dimmer").css("opacity", 0).show().animate({
            opacity: .75
        }, {
            duration: 200
        }),
        $(".dimmer").on("click", (function() {
            $("[data-behavior=close-helpdesk]").trigger("click")
        }
        )),
        $("#helpdesk-ajax-container").load("/helpdesk", (function() {
            $("#helpdesk-panel .helpdesk-default-box").show(),
            $("#helpdesk-panel").animate({
                width: "show",
                opacity: "show"
            }, {
                duration: 200,
                step: function() {
                    var e = $("#helpdesk-panel").outerWidth();
                    $("#helpdesk-button").css("right", e - 11),
                    $("#helpdesk-panel .helpdesk-result-box").hide()
                },
                complete: function() {
                    c = !0,
                    $("#course_id_container").text() && $("select#category").val($("#course_id_container").text()).change(),
                    s(),
                    a()
                }
            }),
            document.querySelector(".helpdesk-closing-button").addEventListener("click", n),
            $("#helpdesk-form").submit((function() {
                var t = $("#issuereport").val()
                  , n = $("#issuetitle").val()
                  , i = $("#category").val()
                  , r = null
                  , s = $("input[name='question_topic']:checked").val()
                  , a = document.URL
                  , c = navigator.userAgent
                  , u = e
                  , d = navigator.cookieEnabled;
                try {
                    r = $("#issueemail").val()
                } catch (e) {}
                return $.ajax({
                    type: "POST",
                    url: "/helpdesk/",
                    dataType: "html",
                    data: {
                        report: t,
                        url: a,
                        topic: s,
                        userAgent: c,
                        language: u,
                        category: i,
                        cookie: d,
                        title: n,
                        mail: r
                    }
                }).always((function() {
                    $("#helpdesk-panel .helpdesk-default-box").fadeOut("slow", (function() {
                        $("#helpdesk-panel .helpdesk-result-box").fadeIn("slow")
                    }
                    ))
                }
                )).fail((function(e) {
                    $("#helpdesk-panel .helpdesk-result-box").html(e.responseText),
                    l = "error"
                }
                )).done((function(e) {
                    $("#helpdesk-panel .helpdesk-result-box").html(e),
                    l = "success",
                    $("#issuereport").val(""),
                    $("#issuetitle").val(""),
                    o("helpdesk_ticket_created", {
                        report: t,
                        topic: i,
                        question: n
                    })
                }
                )),
                !1
            }
            ))
        }
        ))
    }
    ,
    e.prototype = {
        listen: function() {
            var e = this;
            this.$sendButton.on("click", (function(t) {
                t.preventDefault(),
                e.handleInput()
            }
            ))
        },
        handleInput: function(e) {
            var n = (new Date).getTime()
              , i = this.$input.val()
              , r = t("chatbot-urls-v2")
              , s = document.getElementById("chatbot-api-token").dataset.chatbotToken;
            this.$input.val(""),
            this.addUtterance(i, "chatbot-question"),
            this.startLoading();
            var a = this;
            e && (i = e),
            $.ajax({
                type: "POST",
                url: r,
                dataType: "json",
                data: JSON.stringify({
                    message: i,
                    sender: s
                }),
                complete: function(e, t) {
                    var r = (new Date).getTime() - n
                      , s = {
                        question: i,
                        request_time: r,
                        status: t
                    };
                    if ("success" === t) {
                        var l = $.parseJSON(e.responseText);
                        s.response = l,
                        a.handleResponse(l, r)
                    } else
                        a.stopLoading();
                    a.$input.focus(),
                    a.conversation$.scrollTop = a.conversation$.scrollHeight,
                    o("helpdesk_chatbot_replied", s)
                }
            })
        },
        handleResponse: function(e, t) {
            if (0 !== e.length) {
                var n = this
                  , i = e.length;
                e.forEach((function(e, o) {
                    e.custom && e.custom.endOfConversation || r(1e3, t, o, (function() {
                        (e.text && (n.stopLoading(),
                        n.addUtterance(e.text, "chatbot-answer")),
                        e.buttons) && e.buttons.forEach((function(e, i) {
                            r(500, t, i, (function() {
                                n.stopLoading(),
                                n.addButtonUtterance(e.title, e.payload)
                            }
                            ))
                        }
                        ));
                        n.startLoading(),
                        --i <= 1 && n.stopLoading()
                    }
                    ))
                }
                ))
            }
        },
        startLoading: function() {
            this.loading = !0,
            this.conversation$.dataset.loading = "true",
            this.conversation$.scrollTop = this.conversation$.scrollHeight
        },
        stopLoading: function() {
            this.loading = !1,
            this.conversation$.dataset.loading = "false"
        },
        greet: function() {
            var e = document.getElementById("chatbot-sitename").dataset.chatbotSitename
              , t = I18n.t("chatbot.greeting", {
                site_name: e
            });
            this.addUtterance(t, "chatbot-answer")
        },
        addUtterance: function(e, t) {
            var n = document.createElement("div");
            n.classList.add("chatbot-message-box", t),
            n.innerHTML = e.trim(),
            this.conversation$.insertBefore(n, document.getElementById("utterance--placeholder")),
            this.conversation$.scrollTop = this.conversation$.scrollHeight
        },
        addButtonUtterance: function(e, t) {
            var n = this
              , i = document.createElement("button");
            i.type = "button",
            i.classList.add("chatbot-message-box", "chatbot-answer", "chatbot-button-answer"),
            i.innerHTML = e.trim(),
            i.onclick = function() {
                $("#chatbot-typing-area").val(e.trim()),
                n.handleInput(t),
                n.disableButtonsAfterClick()
            }
            ,
            this.conversation$.insertBefore(i, document.getElementById("utterance--placeholder")),
            this.conversation$.scrollTop = this.conversation$.scrollHeight
        },
        disableButtonsAfterClick: function() {
            var e = document.getElementsByClassName("chatbot-button-answer");
            for (var t of e)
                t.disabled = !0
        }
    },
    $("#helpdesk-button").show(),
    $("#helpdesk-button").on("click", (function() {
        0 == c ? openHelpdeskLayer() : n()
    }
    )),
    $(".helpdesk-container").on("click", "[data-behavior=close-helpdesk]", (function() {
        n(),
        document.getElementById("helpdesk-form").reset()
    }
    )),
    $(".helpdesk-container").on("click", "[data-behavior=back-to-form]", (function(e) {
        e.preventDefault(),
        $("#helpdesk-panel .helpdesk-result-box").hide(),
        $("#helpdesk-panel .helpdesk-default-box").fadeIn("medium")
    }
    )),
    s(),
    a()
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e) {
    return e.ui = e.ui || {},
    e.ui.version = "1.12.1"
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}((function(e) {
    return e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}((function(e) {
    var t, n = 0, i = Array.prototype.slice;
    return e.cleanData = (t = e.cleanData,
    function(n) {
        var i, r, o;
        for (o = 0; null != (r = n[o]); o++)
            try {
                (i = e._data(r, "events")) && i.remove && e(r).triggerHandler("remove")
            } catch (e) {}
        t(n)
    }
    ),
    e.widget = function(t, n, i) {
        var r, o, s, a = {}, l = t.split(".")[0], c = l + "-" + (t = t.split(".")[1]);
        return i || (i = n,
        n = e.Widget),
        e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))),
        e.expr[":"][c.toLowerCase()] = function(t) {
            return !!e.data(t, c)
        }
        ,
        e[l] = e[l] || {},
        r = e[l][t],
        o = e[l][t] = function(e, t) {
            if (!this._createWidget)
                return new o(e,t);
            arguments.length && this._createWidget(e, t)
        }
        ,
        e.extend(o, r, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }),
        (s = new n).options = e.widget.extend({}, s.options),
        e.each(i, (function(t, i) {
            e.isFunction(i) ? a[t] = function() {
                function e() {
                    return n.prototype[t].apply(this, arguments)
                }
                function r(e) {
                    return n.prototype[t].apply(this, e)
                }
                return function() {
                    var t, n = this._super, o = this._superApply;
                    return this._super = e,
                    this._superApply = r,
                    t = i.apply(this, arguments),
                    this._super = n,
                    this._superApply = o,
                    t
                }
            }() : a[t] = i
        }
        )),
        o.prototype = e.widget.extend(s, {
            widgetEventPrefix: r && s.widgetEventPrefix || t
        }, a, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: c
        }),
        r ? (e.each(r._childConstructors, (function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, o, n._proto)
        }
        )),
        delete r._childConstructors) : n._childConstructors.push(o),
        e.widget.bridge(t, o),
        o
    }
    ,
    e.widget.extend = function(t) {
        for (var n, r, o = i.call(arguments, 1), s = 0, a = o.length; s < a; s++)
            for (n in o[s])
                r = o[s][n],
                o[s].hasOwnProperty(n) && void 0 !== r && (e.isPlainObject(r) ? t[n] = e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], r) : e.widget.extend({}, r) : t[n] = r);
        return t
    }
    ,
    e.widget.bridge = function(t, n) {
        var r = n.prototype.widgetFullName || t;
        e.fn[t] = function(o) {
            var s = "string" == typeof o
              , a = i.call(arguments, 1)
              , l = this;
            return s ? this.length || "instance" !== o ? this.each((function() {
                var n, i = e.data(this, r);
                return "instance" === o ? (l = i,
                !1) : i ? e.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, a)) !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n,
                !1) : void 0 : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
            }
            )) : l = void 0 : (a.length && (o = e.widget.extend.apply(null, [o].concat(a))),
            this.each((function() {
                var t = e.data(this, r);
                t ? (t.option(o || {}),
                t._init && t._init()) : e.data(this, r, new n(o,this))
            }
            ))),
            l
        }
    }
    ,
    e.Widget = function() {}
    ,
    e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0],
            this.element = e(i),
            this.uuid = n++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            this.classesElementLookup = {},
            i !== this && (e.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }),
            this.document = e(i.style ? i.ownerDocument : i.document || i),
            this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            var t = this;
            this._destroy(),
            e.each(this.classesElementLookup, (function(e, n) {
                t._removeClass(n, e)
            }
            )),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, n) {
            var i, r, o, s = t;
            if (0 === arguments.length)
                return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (s = {},
                i = t.split("."),
                t = i.shift(),
                i.length) {
                    for (r = s[t] = e.widget.extend({}, this.options[t]),
                    o = 0; o < i.length - 1; o++)
                        r[i[o]] = r[i[o]] || {},
                        r = r[i[o]];
                    if (t = i.pop(),
                    1 === arguments.length)
                        return void 0 === r[t] ? null : r[t];
                    r[t] = n
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    s[t] = n
                }
            return this._setOptions(s),
            this
        },
        _setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return "classes" === e && this._setOptionClasses(t),
            this.options[e] = t,
            "disabled" === e && this._setOptionDisabled(t),
            this
        },
        _setOptionClasses: function(t) {
            var n, i, r;
            for (n in t)
                r = this.classesElementLookup[n],
                t[n] !== this.options.classes[n] && r && r.length && (i = e(r.get()),
                this._removeClass(r, n),
                i.addClass(this._classes({
                    element: i,
                    keys: n,
                    classes: t,
                    add: !0
                })))
        },
        _setOptionDisabled: function(e) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e),
            e && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(t) {
            function n(n, o) {
                var s, a;
                for (a = 0; a < n.length; a++)
                    s = r.classesElementLookup[n[a]] || e(),
                    s = t.add ? e(e.unique(s.get().concat(t.element.get()))) : e(s.not(t.element).get()),
                    r.classesElementLookup[n[a]] = s,
                    i.push(n[a]),
                    o && t.classes[n[a]] && i.push(t.classes[n[a]])
            }
            var i = []
              , r = this;
            return t = e.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, t),
            this._on(t.element, {
                remove: "_untrackClassesElement"
            }),
            t.keys && n(t.keys.match(/\S+/g) || [], !0),
            t.extra && n(t.extra.match(/\S+/g) || []),
            i.join(" ")
        },
        _untrackClassesElement: function(t) {
            var n = this;
            e.each(n.classesElementLookup, (function(i, r) {
                -1 !== e.inArray(t.target, r) && (n.classesElementLookup[i] = e(r.not(t.target).get()))
            }
            ))
        },
        _removeClass: function(e, t, n) {
            return this._toggleClass(e, t, n, !1)
        },
        _addClass: function(e, t, n) {
            return this._toggleClass(e, t, n, !0)
        },
        _toggleClass: function(e, t, n, i) {
            i = "boolean" == typeof i ? i : n;
            var r = "string" == typeof e || null === e
              , o = {
                extra: r ? t : n,
                keys: r ? e : t,
                element: r ? this.element : e,
                add: i
            };
            return o.element.toggleClass(this._classes(o), i),
            this
        },
        _on: function(t, n, i) {
            var r, o = this;
            "boolean" != typeof t && (i = n,
            n = t,
            t = !1),
            i ? (n = r = e(n),
            this.bindings = this.bindings.add(n)) : (i = n,
            n = this.element,
            r = this.widget()),
            e.each(i, (function(i, s) {
                function a() {
                    if (t || !0 !== o.options.disabled && !e(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof s ? o[s] : s).apply(o, arguments)
                }
                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/)
                  , c = l[1] + o.eventNamespace
                  , u = l[2];
                u ? r.on(c, u, a) : n.on(c, a)
            }
            ))
        },
        _off: function(t, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.off(n).off(n),
            this.bindings = e(this.bindings.not(t).get()),
            this.focusable = e(this.focusable.not(t).get()),
            this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, n, i) {
            var r, o, s = this.options[t];
            if (i = i || {},
            (n = e.Event(n)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            n.target = this.element[0],
            o = n.originalEvent)
                for (r in o)
                    r in n || (n[r] = o[r]);
            return this.element.trigger(n, i),
            !(e.isFunction(s) && !1 === s.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
        }
    },
    e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, (function(t, n) {
        e.Widget.prototype["_" + t] = function(i, r, o) {
            var s;
            "string" == typeof r && (r = {
                effect: r
            });
            var a = r ? !0 === r || "number" == typeof r ? n : r.effect || n : t;
            "number" == typeof (r = r || {}) && (r = {
                duration: r
            }),
            s = !e.isEmptyObject(r),
            r.complete = o,
            r.delay && i.delay(r.delay),
            s && e.effects && e.effects.effect[a] ? i[t](r) : a !== t && i[a] ? i[a](r.duration, r.easing, o) : i.queue((function(n) {
                e(this)[t](),
                o && o.call(i[0]),
                n()
            }
            ))
        }
    }
    )),
    e.widget
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "../ie", "../version", "../widget"], e) : e(jQuery)
}((function(e) {
    var t = !1;
    return e(document).on("mouseup", (function() {
        t = !1
    }
    )),
    e.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, (function(e) {
                return t._mouseDown(e)
            }
            )).on("click." + this.widgetName, (function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))
                    return e.removeData(n.target, t.widgetName + ".preventClickEvent"),
                    n.stopImmediatePropagation(),
                    !1
            }
            )),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName),
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!t) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(n),
                this._mouseDownEvent = n;
                var i = this
                  , r = 1 === n.which
                  , o = !("string" != typeof this.options.cancel || !n.target.nodeName) && e(n.target).closest(this.options.cancel).length;
                return !(r && !o && this._mouseCapture(n)) || (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function() {
                    i.mouseDelayMet = !0
                }
                ), this.options.delay)),
                this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = !1 !== this._mouseStart(n),
                !this._mouseStarted) ? (n.preventDefault(),
                !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }
                ,
                this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }
                ,
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                n.preventDefault(),
                t = !0,
                !0))
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button)
                    return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t),
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(n) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            n.target === this._mouseDownEvent.target && e.data(n.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(n)),
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer),
            this.ignoreMissingWhich = !1,
            t = !1,
            n.preventDefault()
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}((function(e) {
    return e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo((function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }
        )) : function(t, n, i) {
            return !!e.data(t, i[3])
        }
    })
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
}((function(e) {
    return e.fn.scrollParent = function(t) {
        var n = this.css("position")
          , i = "absolute" === n
          , r = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , o = this.parents().filter((function() {
            var t = e(this);
            return (!i || "static" !== t.css("position")) && r.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }
        )).eq(0);
        return "fixed" !== n && o.length ? o : e(this[0].ownerDocument || document)
    }
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../data", "../ie", "../scroll-parent", "../version", "../widget"], e) : e(jQuery)
}((function(e) {
    return e.widget("ui.sortable", e.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(e, t, n) {
            return e >= t && e < t + n
        },
        _isFloating: function(e) {
            return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
        },
        _create: function() {
            this.containerCache = {},
            this._addClass("ui-sortable"),
            this.refresh(),
            this.offset = this.element.offset(),
            this._mouseInit(),
            this._setHandleClassName(),
            this.ready = !0
        },
        _setOption: function(e, t) {
            this._super(e, t),
            "handle" === e && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
            e.each(this.items, (function() {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            }
            ))
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--)
                this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, n) {
            var i = null
              , r = !1
              , o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t),
            e(t.target).parents().each((function() {
                if (e.data(this, o.widgetName + "-item") === o)
                    return i = e(this),
                    !1
            }
            )),
            e.data(t.target, o.widgetName + "-item") === o && (i = e(t.target)),
            !!i && (!(this.options.handle && !n && (e(this.options.handle, i).find("*").addBack().each((function() {
                this === t.target && (r = !0)
            }
            )),
            !r)) && (this.currentItem = i,
            this._removeCurrentsFromItems(),
            !0))))
        },
        _mouseStart: function(t, n, i) {
            var r, o, s = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            s.containment && this._setContainment(),
            s.cursor && "auto" !== s.cursor && (o = this.document.find("body"),
            this.storedCursor = o.css("cursor"),
            o.css("cursor", s.cursor),
            this.storedStylesheet = e("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(o)),
            s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", s.opacity)),
            s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", s.zIndex)),
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !i)
                for (r = this.containers.length - 1; r >= 0; r--)
                    this.containers[r]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this),
            e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var n, i, r, o, s = this.options, a = !1;
            for (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (t.pageY - this.document.scrollTop() < s.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - s.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < s.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + s.scrollSpeed)),
            t.pageX - this.document.scrollLeft() < s.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - s.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < s.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + s.scrollSpeed))),
            !1 !== a && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            n = this.items.length - 1; n >= 0; n--)
                if (r = (i = this.items[n]).item[0],
                (o = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && !(r === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === r || e.contains(this.placeholder[0], r) || "semi-dynamic" === this.options.type && e.contains(this.element[0], r))) {
                    if (this.direction = 1 === o ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(i))
                        break;
                    this._rearrange(t, i),
                    this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t),
            e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, n) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t),
                this.options.revert) {
                    var i = this
                      , r = this.placeholder.offset()
                      , o = this.options.axis
                      , s = {};
                    o && "x" !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                    o && "y" !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    e(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, (function() {
                        i._clear(t)
                    }
                    ))
                } else
                    this._clear(t, n);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new e.Event("mouseup",{
                    target: null
                })),
                "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--)
                    this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)),
                    this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            e(n).each((function() {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
            }
            )),
            !i.length && t.key && i.push(t.key + "="),
            i.join("&")
        },
        toArray: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            n.each((function() {
                i.push(e(t.item || this).attr(t.attribute || "id") || "")
            }
            )),
            i
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left
              , n = t + this.helperProportions.width
              , i = this.positionAbs.top
              , r = i + this.helperProportions.height
              , o = e.left
              , s = o + e.width
              , a = e.top
              , l = a + e.height
              , c = this.offset.click.top
              , u = this.offset.click.left
              , d = "x" === this.options.axis || i + c > a && i + c < l
              , h = "y" === this.options.axis || t + u > o && t + u < s
              , f = d && h;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? f : o < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < s && a < i + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(e) {
            var t, n, i = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), r = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width);
            return !(!i || !r) && (t = this._getDragVerticalDirection(),
            n = this._getDragHorizontalDirection(),
            this.floating ? "right" === n || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1))
        },
        _intersectsWithSides: function(e) {
            var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height)
              , n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width)
              , i = this._getDragVerticalDirection()
              , r = this._getDragHorizontalDirection();
            return this.floating && r ? "right" === r && n || "left" === r && !n : i && ("down" === i && t || "up" === i && !t)
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function(e) {
            return this._refreshItems(e),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function n() {
                a.push(this)
            }
            var i, r, o, s, a = [], l = [], c = this._connectWith();
            if (c && t)
                for (i = c.length - 1; i >= 0; i--)
                    for (r = (o = e(c[i], this.document[0])).length - 1; r >= 0; r--)
                        (s = e.data(o[r], this.widgetFullName)) && s !== this && !s.options.disabled && l.push([e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s]);
            for (l.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            i = l.length - 1; i >= 0; i--)
                l[i][0].each(n);
            return e(a)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, (function(e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] === e.item[0])
                        return !1;
                return !0
            }
            ))
        },
        _refreshItems: function(t) {
            this.items = [],
            this.containers = [this];
            var n, i, r, o, s, a, l, c, u = this.items, d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : e(this.options.items, this.element), this]], h = this._connectWith();
            if (h && this.ready)
                for (n = h.length - 1; n >= 0; n--)
                    for (i = (r = e(h[n], this.document[0])).length - 1; i >= 0; i--)
                        (o = e.data(r[i], this.widgetFullName)) && o !== this && !o.options.disabled && (d.push([e.isFunction(o.options.items) ? o.options.items.call(o.element[0], t, {
                            item: this.currentItem
                        }) : e(o.options.items, o.element), o]),
                        this.containers.push(o));
            for (n = d.length - 1; n >= 0; n--)
                for (s = d[n][1],
                i = 0,
                c = (a = d[n][0]).length; i < c; i++)
                    (l = e(a[i])).data(this.widgetName + "-item", s),
                    u.push({
                        item: l,
                        instance: s,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(t) {
            var n, i, r, o;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)),
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()),
            n = this.items.length - 1; n >= 0; n--)
                (i = this.items[n]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item,
                t || (i.width = r.outerWidth(),
                i.height = r.outerHeight()),
                o = r.offset(),
                i.left = o.left,
                i.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (n = this.containers.length - 1; n >= 0; n--)
                    o = this.containers[n].element.offset(),
                    this.containers[n].containerCache.left = o.left,
                    this.containers[n].containerCache.top = o.top,
                    this.containers[n].containerCache.width = this.containers[n].element.outerWidth(),
                    this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            var n, i = (t = t || this).options;
            i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder,
            i.placeholder = {
                element: function() {
                    var i = t.currentItem[0].nodeName.toLowerCase()
                      , r = e("<" + i + ">", t.document[0]);
                    return t._addClass(r, "ui-sortable-placeholder", n || t.currentItem[0].className)._removeClass(r, "ui-sortable-helper"),
                    "tbody" === i ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(r)) : "tr" === i ? t._createTrPlaceholder(t.currentItem, r) : "img" === i && r.attr("src", t.currentItem.attr("src")),
                    n || r.css("visibility", "hidden"),
                    r
                },
                update: function(e, r) {
                    n && !i.forcePlaceholderSize || (r.height() || r.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)),
                    r.width() || r.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)),
            t.currentItem.after(t.placeholder),
            i.placeholder.update(t, t.placeholder)
        },
        _createTrPlaceholder: function(t, n) {
            var i = this;
            t.children().each((function() {
                e("<td>&#160;</td>", i.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n)
            }
            ))
        },
        _contactContainers: function(t) {
            var n, i, r, o, s, a, l, c, u, d, h = null, f = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!e.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (h && e.contains(this.containers[n].element[0], h.element[0]))
                            continue;
                        h = this.containers[n],
                        f = n
                    } else
                        this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)),
                        this.containers[n].containerCache.over = 0);
            if (h)
                if (1 === this.containers.length)
                    this.containers[f].containerCache.over || (this.containers[f]._trigger("over", t, this._uiHash(this)),
                    this.containers[f].containerCache.over = 1);
                else {
                    for (r = 1e4,
                    o = null,
                    s = (u = h.floating || this._isFloating(this.currentItem)) ? "left" : "top",
                    a = u ? "width" : "height",
                    d = u ? "pageX" : "pageY",
                    i = this.items.length - 1; i >= 0; i--)
                        e.contains(this.containers[f].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (l = this.items[i].item.offset()[s],
                        c = !1,
                        t[d] - l > this.items[i][a] / 2 && (c = !0),
                        Math.abs(t[d] - l) < r && (r = Math.abs(t[d] - l),
                        o = this.items[i],
                        this.direction = c ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[f])
                        return void (this.currentContainer.containerCache.over || (this.containers[f]._trigger("over", t, this._uiHash()),
                        this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[f].element, !0),
                    this._trigger("change", t, this._uiHash()),
                    this.containers[f]._trigger("change", t, this._uiHash(this)),
                    this.currentContainer = this.containers[f],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[f]._trigger("over", t, this._uiHash(this)),
                    this.containers[f].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var n = this.options
              , i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]),
            i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            i[0].style.width && !n.forceHelperSize || i.width(this.currentItem.width()),
            i[0].style.height && !n.forceHelperSize || i.height(this.currentItem.height()),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }),
            "left"in t && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, n, i, r = this.options;
            "parent" === r.containment && (r.containment = this.helper[0].parentNode),
            "document" !== r.containment && "window" !== r.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === r.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === r.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(r.containment) || (t = e(r.containment)[0],
            n = e(r.containment).offset(),
            i = "hidden" !== e(t).css("overflow"),
            this.containment = [n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var i = "absolute" === t ? 1 : -1
              , r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
            }
        },
        _generatePosition: function(t) {
            var n, i, r = this.options, o = t.pageX, s = t.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)),
            r.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1],
            s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n,
            i = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0],
            o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)),
            {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function(e, t, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var r = this.counter;
            this._delay((function() {
                r === this.counter && this.refreshPositions(!i)
            }
            ))
        },
        _clear: function(e, t) {
            function n(e, t, n) {
                return function(i) {
                    n._trigger(e, i, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)
                    "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !t && r.push((function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }
            )),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push((function(e) {
                this._trigger("update", e, this._uiHash())
            }
            )),
            this !== this.currentContainer && (t || (r.push((function(e) {
                this._trigger("remove", e, this._uiHash())
            }
            )),
            r.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            r.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            i = this.containers.length - 1; i >= 0; i--)
                t || r.push(n("deactivate", this, this.containers[i])),
                this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])),
                this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            t || this._trigger("beforeStop", e, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null),
            !t) {
                for (i = 0; i < r.length; i++)
                    r[i].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1,
            !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 === e.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            }
        }
    })
}
)),
function() {
    var e, t;
    e = function() {
        switch ($("#xikolo_course_item_content_type").val()) {
        case "video":
            $("#custom-form").html($("#custom-form").data("form-video")),
            $(".xikolo_course_item_max_points, .xikolo_course_item_submission_deadline, .xikolo_course_item_submission_publishing_date, .xikolo_course_item_exercise_type").hide();
            break;
        case "rich_text":
            $("#custom-form").html($("#custom-form").data("form-richtext")),
            $(".xikolo_course_item_max_points, .xikolo_course_item_submission_deadline, .xikolo_course_item_submission_publishing_date, .xikolo_course_item_exercise_type").hide();
            break;
        case "lti_exercise":
            $("#custom-form").html($("#custom-form").data("form-lti_exercise")),
            $(".xikolo_course_item_submission_deadline, .xikolo_course_item_submission_publishing_date, .xikolo_course_item_exercise_type").show(),
            t();
            break;
        case "quiz":
            $(".xikolo_course_item_max_points, .xikolo_course_item_submission_deadline, .xikolo_course_item_submission_publishing_date, .xikolo_course_item_exercise_type").show(),
            $("#custom-form").html(""),
            $("#quiz_questions").html($("#custom-form").data("form-quiz-questions")),
            $("#custom-form").html($("#custom-form").data("form-quiz"));
            break;
        case "peer_assessment":
            $("#custom-form").html($("#custom-form").data("form-peer_assessment")),
            $(".xikolo_course_item_max_points, .xikolo_course_item_submission_deadline, .xikolo_course_item_submission_publishing_date").hide(),
            $(".xikolo_course_item_exercise_type").show();
            break;
        default:
            $("#custom-form").html("")
        }
        return window.xui.upload.scan($("#custom-form").el),
        window.xui.mdupload.scan($("#custom-form").el),
        createPagedownEditor("textarea.wmd-input"),
        initSelect2VideoStreams()
    }
    ,
    t = function() {
        var e, t;
        if (e = "lti_exercise" === $("#xikolo_course_item_content_type").val(),
        t = "" === $("#xikolo_course_item_exercise_type").val(),
        e)
            return t ? ($("#xikolo_course_item_max_points").val(0),
            $(".xikolo_course_item_max_points").hide()) : ("0" === $("#xikolo_course_item_max_points").val() && $("#xikolo_course_item_max_points").val(""),
            $(".xikolo_course_item_max_points").show())
    }
    ,
    ready((function() {
        if ($("#custom-form").data("form-richtext", $("#rich_text-form").html()),
        $("#custom-form").data("form-video", $("#video-form").html()),
        $("#custom-form").data("form-lti_exercise", $("#lti_exercise-form").html()),
        $("#custom-form").data("form-quiz-questions", $("#quiz_questions_wrapper").html()),
        $("#custom-form").data("form-peer_assessment", $("#peer_assessment-form").html()),
        $(".xikolo_course_item_max_points, .xikolo_course_item_submission_deadline, .xikolo_course_item_submission_publishing_date, .xikolo_course_item_exercise_type").hide(),
        $("#quiz_questions_wrapper").remove(),
        $("#custom-form").data("form-quiz", $("#quiz-form").html()),
        $("#quiz_questions_wrapper").remove(),
        $("#form-extensions").remove(),
        $("#form-peer_assessment").remove(),
        $("#xikolo_course_item_exercise_type").change(t).trigger("change"),
        $("#xikolo_course_item_content_type").change(e).trigger("change"),
        $("#quiz_questions ul.js-question li").length > 0)
            return $('#quiz-edit-tabs a[href="#quiz_questions"]').tab("show")
    }
    ))
}
.call(this),
function() {
    var e;
    e = function() {
        switch ($(".generic-fields").show(),
        $("#meta_question_type").val()) {
        case "multiple_choice":
            return $("#available-question-forms").append($("#active-question-form").children()),
            $("#active-question-form").append($("#multiple-choice-form"));
        case "multiple_answer":
            return $("#available-question-forms").append($("#active-question-form").children()),
            $("#active-question-form").append($("#multiple-answer-form"));
        case "free_text":
            return $("#available-question-forms").append($("#active-question-form").children()),
            $("#active-question-form").append($("#simple-free-text-form"));
        case "essay":
            return $("#available-question-forms").append($("#active-question-form").children()),
            $("#active-question-form").append($("#simple-essay-form"));
        default:
            return $(".generic-fields").hide(),
            $("#available-question-forms").append($("#active-question-form").children())
        }
    }
    ,
    this.quizEditQuestion = function(e) {
        var t, n;
        return n = $(".edit_form_quiz_wrapper", $(e).closest(".jquery-search-wrapper")),
        t = $(n).data("ajax-url"),
        $.ajax(t, {
            type: "get",
            dataType: "html",
            success: function(e) {
                return $(n).html(e),
                $(n).show(),
                window.xui.mdupload.scan(n.el),
                !1
            },
            error: function() {
                return alert("Upsi. Could not get edit form")
            }
        }),
        !1
    }
    ,
    this.quizAddAnswer = function(e) {
        var t, n;
        return n = $(".add_form_quiz_question_wrapper", $(e).closest(".jquery-search-wrapper")),
        t = $(n).data("ajax-url"),
        showLoading(),
        $.ajax(t, {
            type: "get",
            dataType: "html",
            success: function(e) {
                return $(n).html(e),
                $(n).show(),
                window.xui.mdupload.scan(n.el),
                $(".available-answer-forms", n).hide(),
                $(".meta_answer_type", n).change((function() {
                    return toggleQuizAnswerForm(n)
                }
                )),
                toggleQuizAnswerForm(n),
                createPagedownEditor(".wmd-input", n),
                hideLoading(),
                !1
            },
            error: function() {
                return alert("Upsi. Could not get add form"),
                hideLoading(),
                !1
            }
        }),
        !1
    }
    ,
    this.quizEditAnswer = function(e) {
        var t, n;
        return n = $(".edit_form_quiz_question_wrapper", $(e).closest(".answer")),
        t = $(e).attr("href"),
        showLoading(),
        $.ajax(t, {
            type: "get",
            dataType: "html",
            success: function(e) {
                return $(n).html(e),
                $(n).show(),
                window.xui.mdupload.scan(n.el),
                $(".available-answer-forms", n).hide(),
                $(".meta_answer_type", n).change((function() {
                    return toggleQuizAnswerForm(n)
                }
                )),
                toggleQuizAnswerForm(n),
                createPagedownEditor(".wmd-input", n),
                hideLoading(),
                !1
            },
            error: function() {
                return alert("Upsi. Could not get add form"),
                hideLoading(),
                !1
            }
        }),
        !1
    }
    ,
    ready((function() {
        return $("#available-question-forms").hide(),
        e(),
        $("#meta_question_type").change((function() {
            return e()
        }
        )),
        $(".delete-quiz-question-answer").click((function() {
            var e;
            return event.preventDefault(),
            confirm("Are you sure you want to delete this?") && (e = $(this),
            $.ajax($(this).attr("href"), {
                type: "DELETE",
                success: function() {
                    return $(e).closest(".answer").hide(),
                    !1
                }
            })),
            !1
        }
        )),
        $(".quiz_answer_editor_item_button").on("click", (function() {
            return sessionStorage.setItem("_scroll_position_answer", $(this).parent().offset().top)
        }
        )),
        $(".scroll_marker").on("click", (function() {
            return sessionStorage.setItem("_scroll_position_question_edit", $(document).scrollTop())
        }
        )),
        $(".new_question_form_submit_button").on("click", (function() {
            return sessionStorage.setItem("_scroll_position_question", $("body").offset().top)
        }
        )),
        null !== sessionStorage.getItem("_scroll_position_answer") && $("html, body").animate({
            scrollTop: sessionStorage.getItem("_scroll_position_answer")
        }),
        sessionStorage.removeItem("_scroll_position_answer"),
        null !== sessionStorage.getItem("_scroll_position_question") && $("html, body").animate({
            scrollTop: sessionStorage.getItem("_scroll_position_question")
        }),
        sessionStorage.removeItem("_scroll_position_question"),
        null !== sessionStorage.getItem("_scroll_position_question_edit") && $("html, body").animate({
            scrollTop: sessionStorage.getItem("_scroll_position_question_edit")
        }),
        sessionStorage.removeItem("_scroll_position_question_edit")
    }
    ))
}
.call(this),
function() {
    this.toggleQuizAnswerForm = function(e) {
        switch ($(".generic-fields", e).show(),
        $(".meta_answer_type", e).val()) {
        case "text_answer":
            return $(".available-answer-forms", e).append($(".active-answer-form", e).children()),
            $(".active-answer-form", e).append($(".text-answer-form", e));
        case "free_text_answer":
            return $(".available-answer-forms", e).append($(".active-answer-form", e).children()),
            $(".active-answer-form", e).append($(".free-text-answer-form", e));
        default:
            return $(".generic-fields", e).hide(),
            $(".available-answer-forms", e).append($(".active-answer-form", e).children())
        }
    }
}
.call(this),
function(e, t) {
    "function" == typeof define && define.amd ? define("i18n", (function() {
        return t(e)
    }
    )) : "object" == typeof module && module.exports ? module.exports = t(e) : e.I18n = t(e)
}(this, (function(e) {
    "use strict";
    var t = e && e.I18n || {}
      , n = Array.prototype.slice
      , i = function(e) {
        return ("0" + e.toString()).substr(-2)
    }
      , r = function(e, t) {
        return f("round", e, -t).toFixed(t)
    }
      , o = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t
    }
      , s = function(e) {
        return "function" === typeof e
    }
      , a = function(e) {
        return null != e
    }
      , l = function(e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
    }
      , c = function(e) {
        return "string" == typeof e || "[object String]" === Object.prototype.toString.call(e)
    }
      , u = function(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
      , d = function(e) {
        return !0 === e || !1 === e
    }
      , h = function(e) {
        return null === e
    }
      , f = function(e, t, n) {
        return void 0 === n || 0 == +n ? Math[e](t) : (t = +t,
        n = +n,
        isNaN(t) || "number" != typeof n || n % 1 != 0 ? NaN : (t = t.toString().split("e"),
        +((t = (t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - n : -n)))).toString().split("e"))[0] + "e" + (t[1] ? +t[1] + n : n))))
    }
      , p = function(e, t) {
        return s(e) ? e(t) : e
    }
      , m = function(e, t) {
        var n, i;
        for (n in t)
            t.hasOwnProperty(n) && (i = t[n],
            c(i) || u(i) || d(i) || l(i) || h(i) ? e[n] = i : (null == e[n] && (e[n] = {}),
            m(e[n], i)));
        return e
    }
      , g = {
        day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        abbr_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        month_names: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        abbr_month_names: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        meridian: ["AM", "PM"]
    }
      , v = {
        precision: 3,
        separator: ".",
        delimiter: ",",
        strip_insignificant_zeros: !1
    }
      , y = {
        unit: "$",
        precision: 2,
        format: "%u%n",
        sign_first: !0,
        delimiter: ",",
        separator: "."
    }
      , b = {
        unit: "%",
        precision: 3,
        format: "%n%u",
        separator: ".",
        delimiter: ""
    }
      , w = [null, "kb", "mb", "gb", "tb"]
      , _ = {
        defaultLocale: "en",
        locale: "en",
        defaultSeparator: ".",
        placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
        fallbacks: !1,
        translations: {},
        missingBehaviour: "message",
        missingTranslationPrefix: ""
    };
    return t.reset = function() {
        var e;
        for (e in _)
            this[e] = _[e]
    }
    ,
    t.initializeOptions = function() {
        var e;
        for (e in _)
            a(this[e]) || (this[e] = _[e])
    }
    ,
    t.initializeOptions(),
    t.locales = {},
    t.locales.get = function(e) {
        var n = this[e] || this[t.locale] || this.default;
        return s(n) && (n = n(e)),
        !1 === l(n) && (n = [n]),
        n
    }
    ,
    t.locales.default = function(e) {
        var n = []
          , i = [];
        return e && n.push(e),
        !e && t.locale && n.push(t.locale),
        t.fallbacks && t.defaultLocale && n.push(t.defaultLocale),
        n.forEach((function(e) {
            var n = e.split("-")
              , r = null
              , o = null;
            3 === n.length ? (r = [n[0], n[1]].join("-"),
            o = n[0]) : 2 === n.length && (r = n[0]),
            -1 === i.indexOf(e) && i.push(e),
            t.fallbacks && [r, o].forEach((function(t) {
                null != t && t !== e && -1 === i.indexOf(t) && i.push(t)
            }
            ))
        }
        )),
        n.length || n.push("en"),
        i
    }
    ,
    t.pluralization = {},
    t.pluralization.get = function(e) {
        return this[e] || this[t.locale] || this.default
    }
    ,
    t.pluralization.default = function(e) {
        switch (e) {
        case 0:
            return ["zero", "other"];
        case 1:
            return ["one"];
        default:
            return ["other"]
        }
    }
    ,
    t.currentLocale = function() {
        return this.locale || this.defaultLocale
    }
    ,
    t.isSet = a,
    t.lookup = function(e, t) {
        t = t || {};
        var n, i, r, o, s = this.locales.get(t.locale).slice();
        for (r = this.getFullScope(e, t); s.length; )
            if (n = s.shift(),
            i = r.split(this.defaultSeparator),
            o = this.translations[n]) {
                for (; i.length && null != (o = o[i.shift()]); )
                    ;
                if (null != o)
                    return o
            }
        if (a(t.defaultValue))
            return p(t.defaultValue, e)
    }
    ,
    t.pluralizationLookupWithoutFallback = function(e, t, n) {
        var i, r, s = this.pluralization.get(t)(e);
        if (o(n))
            for (; s.length; )
                if (i = s.shift(),
                a(n[i])) {
                    r = n[i];
                    break
                }
        return r
    }
    ,
    t.pluralizationLookup = function(e, t, n) {
        n = n || {};
        var i, r, s, l, c = this.locales.get(n.locale).slice();
        for (t = this.getFullScope(t, n); c.length; )
            if (i = c.shift(),
            r = t.split(this.defaultSeparator),
            s = this.translations[i]) {
                for (; r.length && (s = s[r.shift()],
                o(s)); )
                    0 === r.length && (l = this.pluralizationLookupWithoutFallback(e, i, s));
                if (null != l)
                    break
            }
        return null == l && a(n.defaultValue) && (l = o(n.defaultValue) ? this.pluralizationLookupWithoutFallback(e, n.locale, n.defaultValue) : n.defaultValue,
        s = n.defaultValue),
        {
            message: l,
            translations: s
        }
    }
    ,
    t.meridian = function() {
        var e = this.lookup("time")
          , t = this.lookup("date");
        return e && e.am && e.pm ? [e.am, e.pm] : t && t.meridian ? t.meridian : g.meridian
    }
    ,
    t.prepareOptions = function() {
        for (var e, t = n.call(arguments), i = {}; t.length; )
            if ("object" == typeof (e = t.shift()))
                for (var r in e)
                    e.hasOwnProperty(r) && (a(i[r]) || (i[r] = e[r]));
        return i
    }
    ,
    t.createTranslationOptions = function(e, t) {
        var n = [{
            scope: e
        }];
        return a(t.defaults) && (n = n.concat(t.defaults)),
        a(t.defaultValue) && n.push({
            message: t.defaultValue
        }),
        n
    }
    ,
    t.translate = function(e, t) {
        t = t || {};
        var n, i = this.createTranslationOptions(e, t), r = e, s = this.prepareOptions(t);
        return delete s.defaultValue,
        i.some((function(t) {
            if (a(t.scope) ? (r = t.scope,
            n = this.lookup(r, s)) : a(t.message) && (n = p(t.message, e)),
            null != n)
                return !0
        }
        ), this) ? ("string" == typeof n ? n = this.interpolate(n, t) : l(n) ? n = n.map((function(e) {
            return "string" == typeof e ? this.interpolate(e, t) : e
        }
        ), this) : o(n) && a(t.count) && (n = this.pluralize(t.count, r, t)),
        n) : this.missingTranslation(e, t)
    }
    ,
    t.interpolate = function(e, t) {
        if (null == e)
            return e;
        t = t || {};
        var n, i, r, o, s = e.match(this.placeholder);
        if (!s)
            return e;
        for (; s.length; )
            r = (n = s.shift()).replace(this.placeholder, "$1"),
            i = a(t[r]) ? t[r].toString().replace(/\$/gm, "_#$#_") : r in t ? this.nullPlaceholder(n, e, t) : this.missingPlaceholder(n, e, t),
            o = new RegExp(n.replace(/{/gm, "\\{").replace(/}/gm, "\\}")),
            e = e.replace(o, i);
        return e.replace(/_#\$#_/g, "$")
    }
    ,
    t.pluralize = function(e, t, n) {
        var i, r;
        return n = this.prepareOptions({
            count: String(e)
        }, n),
        void 0 === (r = this.pluralizationLookup(e, t, n)).translations || null == r.translations ? this.missingTranslation(t, n) : void 0 !== r.message && null != r.message ? this.interpolate(r.message, n) : (i = this.pluralization.get(n.locale),
        this.missingTranslation(t + "." + i(e)[0], n))
    }
    ,
    t.missingTranslation = function(e, t) {
        if ("guess" === this.missingBehaviour) {
            var n = e.split(".").slice(-1)[0];
            return (this.missingTranslationPrefix.length > 0 ? this.missingTranslationPrefix : "") + n.replace("_", " ").replace(/([a-z])([A-Z])/g, (function(e, t, n) {
                return t + " " + n.toLowerCase()
            }
            ))
        }
        return '[missing "' + [null != t && null != t.locale ? t.locale : this.currentLocale(), this.getFullScope(e, t)].join(this.defaultSeparator) + '" translation]'
    }
    ,
    t.missingPlaceholder = function(e) {
        return "[missing " + e + " value]"
    }
    ,
    t.nullPlaceholder = function() {
        return t.missingPlaceholder.apply(t, arguments)
    }
    ,
    t.toNumber = function(e, t) {
        t = this.prepareOptions(t, this.lookup("number.format"), v);
        var n, i, o = e < 0, s = r(Math.abs(e), t.precision).toString().split("."), a = [], l = t.format || "%n", c = o ? "-" : "";
        for (e = s[0],
        n = s[1]; e.length > 0; )
            a.unshift(e.substr(Math.max(0, e.length - 3), 3)),
            e = e.substr(0, e.length - 3);
        return i = a.join(t.delimiter),
        t.strip_insignificant_zeros && n && (n = n.replace(/0+$/, "")),
        t.precision > 0 && n && (i += t.separator + n),
        i = (l = t.sign_first ? "%s" + l : l.replace("%n", "%s%n")).replace("%u", t.unit).replace("%n", i).replace("%s", c)
    }
    ,
    t.toCurrency = function(e, t) {
        return t = this.prepareOptions(t, this.lookup("number.currency.format", t), this.lookup("number.format", t), y),
        this.toNumber(e, t)
    }
    ,
    t.localize = function(e, t, n) {
        switch (n || (n = {}),
        e) {
        case "currency":
            return this.toCurrency(t, n);
        case "number":
            return e = this.lookup("number.format", n),
            this.toNumber(t, e);
        case "percentage":
            return this.toPercentage(t, n);
        default:
            var i;
            return i = e.match(/^(date|time)/) ? this.toTime(e, t, n) : t.toString(),
            this.interpolate(i, n)
        }
    }
    ,
    t.parseDate = function(e) {
        var t, n, i;
        if (null == e)
            return e;
        if ("object" == typeof e)
            return e;
        if (t = e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)) {
            for (var r = 1; r <= 6; r++)
                t[r] = parseInt(t[r], 10) || 0;
            t[2] -= 1,
            i = t[7] ? 1e3 * ("0" + t[7]) : null,
            n = t[8] ? new Date(Date.UTC(t[1], t[2], t[3], t[4], t[5], t[6], i)) : new Date(t[1],t[2],t[3],t[4],t[5],t[6],i)
        } else
            "number" == typeof e ? (n = new Date).setTime(e) : e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/) ? (n = new Date).setTime(Date.parse([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(" "))) : (e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/),
            (n = new Date).setTime(Date.parse(e)));
        return n
    }
    ,
    t.strftime = function(e, n, r) {
        r = this.lookup("date", r);
        var o = t.meridian();
        if (r || (r = {}),
        r = this.prepareOptions(r, g),
        isNaN(e.getTime()))
            throw new Error("I18n.strftime() requires a valid date object, but received an invalid date.");
        var s = e.getDay()
          , a = e.getDate()
          , l = e.getFullYear()
          , c = e.getMonth() + 1
          , u = e.getHours()
          , d = u
          , h = u > 11 ? 1 : 0
          , f = e.getSeconds()
          , p = e.getMinutes()
          , m = e.getTimezoneOffset()
          , v = Math.floor(Math.abs(m / 60))
          , y = Math.abs(m) - 60 * v
          , b = (m > 0 ? "-" : "+") + (v.toString().length < 2 ? "0" + v : v) + (y.toString().length < 2 ? "0" + y : y);
        return d > 12 ? d -= 12 : 0 === d && (d = 12),
        n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace("%a", r.abbr_day_names[s])).replace("%A", r.day_names[s])).replace("%b", r.abbr_month_names[c])).replace("%B", r.month_names[c])).replace("%d", i(a))).replace("%e", a)).replace("%-d", a)).replace("%H", i(u))).replace("%-H", u)).replace("%k", u)).replace("%I", i(d))).replace("%-I", d)).replace("%l", d)).replace("%m", i(c))).replace("%-m", c)).replace("%M", i(p))).replace("%-M", p)).replace("%p", o[h])).replace("%P", o[h].toLowerCase())).replace("%S", i(f))).replace("%-S", f)).replace("%w", s)).replace("%y", i(l))).replace("%-y", i(l).replace(/^0+/, ""))).replace("%Y", l)).replace("%z", b)).replace("%Z", b)
    }
    ,
    t.toTime = function(e, t, n) {
        var i = this.parseDate(t)
          , r = this.lookup(e, n);
        if (null == i)
            return i;
        var o = i.toString();
        return o.match(/invalid/i) ? o : r ? this.strftime(i, r, n) : o
    }
    ,
    t.toPercentage = function(e, t) {
        return t = this.prepareOptions(t, this.lookup("number.percentage.format", t), this.lookup("number.format", t), b),
        this.toNumber(e, t)
    }
    ,
    t.toHumanSize = function(e, t) {
        for (var n, i, r = 1024, o = e, s = 0; o >= r && s < 4; )
            o /= r,
            s += 1;
        return 0 === s ? (n = this.t("number.human.storage_units.units.byte", {
            count: o
        }),
        i = 0) : (n = this.t("number.human.storage_units.units." + w[s]),
        i = o - Math.floor(o) == 0 ? 0 : 1),
        t = this.prepareOptions(t, {
            unit: n,
            precision: i,
            format: "%n%u",
            delimiter: ""
        }),
        this.toNumber(o, t)
    }
    ,
    t.getFullScope = function(e, t) {
        return t = t || {},
        l(e) && (e = e.join(this.defaultSeparator)),
        t.scope && (e = [t.scope, e].join(this.defaultSeparator)),
        e
    }
    ,
    t.extend = function(e, t) {
        return void 0 === e && void 0 === t ? {} : m(e, t)
    }
    ,
    t.t = t.translate.bind(t),
    t.l = t.localize.bind(t),
    t.p = t.pluralize.bind(t),
    t
}
)),
function() {
    ready((function() {
        var e;
        return (e = $("form.login")).on("ajax:beforeSend", (function() {
            var t;
            return t = e.find("input[type=submit]"),
            console.log(t),
            $(t).val($(t).data("inactive-text")).prop("disabled", !0),
            $(t).parent().addClass("loading")
        }
        )),
        e.on("submit", (function() {
            var t;
            return t = e.find("input[type=submit]"),
            console.log(t),
            $(t).val($(t).data("inactive-text")).prop("disabled", !0),
            $(t).parent().addClass("loading")
        }
        ))
    }
    ))
}
.call(this),
function() {
    var e, t, n, i, r, o, s, a, l;
    l = function() {
        return $(document).trigger("track-event", {
            verb: "toggled_pinboard_question_form",
            resource: window.location.pathname,
            resourceType: "page"
        })
    }
    ,
    o = function() {
        return $(this).addClass("hidden"),
        $("#question_form").removeClass("hidden"),
        l(),
        $("#question_form :input:enabled:visible:first").focus()
    }
    ,
    t = function() {
        return $(".js-toggle-question").removeClass("hidden"),
        $("#question_form").addClass("hidden"),
        l()
    }
    ,
    a = function() {
        var e, t;
        return (t = $(this)).toggleClass("unselected"),
        t.toggleClass("selected"),
        e = [],
        $("#search_tags > .selected").each((function(t, n) {
            return e.push($(n).data("tag-id"))
        }
        )),
        $("#questionwrapper").load("pinboard?" + $.param({
            tags: e
        }) + " #questions")
    }
    ,
    i = function() {
        var e, t, n, i, r;
        for (n = {},
        e = 0,
        t = (r = window.location.search.substr(1).split("&")).length; e < t; e++)
            n[(i = (i = r[e]).split("="))[0]] = i[1];
        return n
    }
    ,
    r = function(e) {
        var t;
        return !(t = window.history.state) || (t.order !== e.order || t.search !== e.search)
    }
    ,
    n = function(e, t) {
        var n, i, o, a, l;
        return null == e && (e = !0),
        null == t && (t = !1),
        showLoading(),
        t && ($(".question_search_string").val(""),
        $("#question_filter_order").val("activity")),
        i = $("#question_filter_order").val(),
        l = $(".question_search_string").val(),
        o = $.param({
            question_filter_order: i,
            question_filter_search: l
        }),
        $("#questionwrapper").load("pinboard?" + o + " #questions", hideLoading),
        n = {
            order: i,
            search: l
        },
        a = "?question_filter_order=" + i,
        l && (a += "&question_search_string=" + encodeURI(l)),
        r(n) && e && window.history.pushState(n, "", a),
        s(l)
    }
    ,
    s = function(e) {
        var t;
        return null == e && (e = null),
        e ? (t = I18n.t("pinboard.search_result_text", {
            search_string: e + ":"
        }),
        $("#search_result_text").text(t)) : i().tag_names ? void 0 : $("#search_result_text").text("")
    }
    ,
    e = function() {
        var e;
        return showLoading(),
        e = $("#question_filter_section").val(),
        window.location.href = e ? $("#question_filter_section").find(":selected").data("section-pinboard-url") : $("#question_filter_section").data("course-pinboard-url")
    }
    ,
    $((function() {
        return $(".js-toggle-question").on("click", o),
        $(".js-cancel").on("click", t),
        $("#search_tags > .tag").on("click", a),
        $(".question_search_button").on("click", n),
        $(".clear_filter_button").on("click", (function() {
            return n(!0, !0)
        }
        )),
        $(".question_search_string").on("keypress", (function(e) {
            if (13 === e.keyCode)
                return n()
        }
        )),
        $("#question_filter_order").on("change", n),
        $("#question_filter_section").on("change", e),
        $(".qa-answer.unread, .comment.unread").mouseenter((function() {
            return $(this).removeClass("unread"),
            $(this).addClass("justread")
        }
        ))
    }
    ))
}
.call(this),
function() {
    var e, t, n, i, r, o, s, a, l, c, u, d, h, f, p, m;
    n = 2e3,
    l = function(e, t, n) {
        return $("#" + e + "-" + t + "-votes").text(n)
    }
    ,
    u = function(e, t, i) {
        var r, o;
        return o = $("#" + e + "-" + t + "-votes"),
        (r = $("<div>")).addClass("vote_error_popup"),
        r.append(i),
        r.appendTo(o.parent()),
        r.fadeIn("fast"),
        setTimeout((function() {
            return r.fadeOut("fast", (function() {
                return this.remove()
            }
            ))
        }
        ), n)
    }
    ,
    c = function(e) {
        var t;
        return (t = $("<div>")).addClass("error_popup"),
        t.append(e),
        t.appendTo($(".content")),
        t.css("left", Math.max(0, ($(window).width() - $(t).outerWidth()) / 2 + $(window).scrollLeft()) + "px"),
        t.fadeIn("fast"),
        setTimeout((function() {
            return t.fadeOut("fast", (function() {
                return this.remove()
            }
            ))
        }
        ), n)
    }
    ,
    p = function(e) {
        if ("server error" === e.response)
            return c("An error occured on our side");
        if ("already voted" === e.response)
            u(e.votable_type, e.votable_id, "You can only vote once");
        return l(e.votable_type, e.votable_id, e.votes_sum)
    }
    ,
    m = function() {
        var e, t, n;
        return e = this,
        n = $(e).data("votable-type"),
        t = $(e).data("votable-id"),
        +$("#" + n + "-" + t + "-votes").text(),
        $.ajax("../" + n + "/" + t + "/upvote", {
            type: "POST",
            cache: !1,
            data: {
                votable_id: t
            },
            success: p
        }),
        $(document).trigger("track-event", {
            verb: "clicked_upvote",
            resource: t,
            resourceType: n
        })
    }
    ,
    t = function() {
        var e, t, n;
        return e = this,
        n = $(e).data("votable-type"),
        t = $(e).data("votable-id"),
        +$("#" + n + "-" + t + "-votes").text(),
        $.ajax("../" + n + "/" + t + "/downvote", {
            type: "POST",
            cache: !1,
            data: {
                votable_id: t
            },
            success: p
        }),
        $(document).trigger("track-event", {
            verb: "clicked_downvote",
            resource: t,
            resourceType: n
        })
    }
    ,
    f = function() {
        return window.location.reload()
    }
    ,
    e = function() {
        var e, t;
        return t = (e = $(this)).data("question-id"),
        $(".acceptbox").remove(),
        $.ajax(t + "/accept_answer", {
            type: "POST",
            cache: !1,
            data: {
                accepted_answer_id: e.data("answer-id"),
                course_id: e.data("course-id"),
                learning_room_id: e.data("learning-room-id")
            },
            success: f
        }),
        !1
    }
    ,
    d = function() {
        var e, t, n;
        return n = this,
        t = $(n).text(),
        e = $(n).attr("data-toggleText"),
        $(n).text(e),
        $(n).attr("data-toggleText", t),
        $(document).trigger("track-event", {
            verb: "toggled_subscription"
        })
    }
    ,
    h = function() {
        return $(document).trigger("track-event", {
            verb: "toggled_add_comment"
        }),
        $($(this).data("toggle-selector")).toggleClass("hidden"),
        $("#answer_form_box").toggleClass("hidden"),
        !1
    }
    ,
    i = function() {
        return $("#" + $(this).data("focus-id")).find("input:text, textarea").focus(),
        !1
    }
    ,
    o = function() {
        var e, t;
        return t = this,
        e = $(t).data("answer-id"),
        $("#answer-edit-" + e).load($(t).data("url"), (function() {
            return r("#answer-edit-" + e)
        }
        )),
        $(document).trigger("track-event", {
            verb: "clicked_edit_answer",
            resourceType: "answer",
            resource: e
        })
    }
    ,
    a = function() {
        var e, t;
        return t = this,
        e = $(t).data("question-id"),
        $("#question-edit-" + e).load($(t).data("url"), (function() {
            return r("#question-edit-" + e)
        }
        )),
        $(document).trigger("track-event", {
            verb: "clicked_edit_question",
            resourceType: "question",
            resource: e
        })
    }
    ,
    s = function(e) {
        var t, n;
        return e.preventDefault(),
        n = this,
        t = $(n).data("comment-id"),
        $("#comment-edit-" + t).load($(n).data("url"), (function() {
            return r("#comment-edit-" + t)
        }
        )),
        $(document).trigger("track-event", {
            verb: "clicked_edit_comment",
            resourceType: "comment",
            resource: t
        })
    }
    ,
    r = function(e) {
        return createPagedownEditor(e + " textarea.wmd-input"),
        build_select2_multi(e),
        window.xui.upload.scan($(e)[0]),
        window.xui.mdupload.scan($(e)[0]),
        $(e).toggleClass("hidden"),
        $(e).find(".cancel-post").click((function() {
            return $(e).toggleClass("hidden")
        }
        ))
    }
    ,
    ready((function() {
        return $(document).on("click", ".js-toggle-comment", h),
        $(document).on("click", ".js-focus-comment-form", i),
        $(".vote-box > .upvote").click(m),
        $(".vote-box > .downvote").click(t),
        $(".accept").click(e),
        $("#toggle_subscription").on("ajax:success", d),
        $(".answer-edit").each((function(e, t) {
            return $(t).click(o)
        }
        )),
        $(".question-edit").each((function(e, t) {
            return $(t).click(a)
        }
        )),
        $(".comment-edit").each((function(e, t) {
            return $(t).click(s)
        }
        ))
    }
    ))
}
.call(this),
function() {
    ready((function() {
        var e;
        return (e = $("#account-preferences")).find(".preferences-switch").on("change", (function() {
            if ($.ajax("/preferences", {
                type: "PUT",
                dataType: "text",
                data: {
                    name: $(this).attr("name"),
                    value: $(this).is(":checked")
                }
            }),
            $(this).data("toggle-notification-preferences"))
                return $(this).is(":checked") ? e.find("#notification-preferences").fadeIn() : e.find("#notification-preferences").fadeOut()
        }
        )),
        e.find(".unsubscribe-button").on("ajax:success", (function() {
            return $(this).closest("tr").fadeOut(),
            $.ajax("/subscriptions/subscription_count_text", {
                type: "GET",
                dataType: "text",
                success: function(t) {
                    return e.find("#thread-count").fadeOut((function() {
                        return $(this).text("" + t).fadeIn()
                    }
                    ))
                }
            })
        }
        )),
        $("#reset-button").on("ajax:success", (function() {
            return window.location.reload()
        }
        ))
    }
    ))
}
.call(this),
function() {
    var e;
    e = function(e, t) {
        return $(".flash--" + t + " span").text(e),
        $(".flash--" + t).show()
    }
    ,
    $(document).ajaxComplete((function(t, n) {
        var i, r;
        if (i = n.getResponseHeader("X-Message"),
        r = n.getResponseHeader("X-Message-Type"),
        "" !== i || void 0 !== i)
            return e(i, r)
    }
    ))
}
.call(this),
function() {
    var e, t, n, i, r, o, s, a, l, c, u, d;
    $("iframe"),
    l = "*",
    $(".status"),
    $((function() {
        return $(".video-link").removeClass("hidden"),
        d(),
        n()
    }
    )),
    $(window).on("load", (function() {
        n(),
        u(),
        $("iframe").ready((function() {
            return $(".video-link a").click((function() {
                return $("#channel-carousel").find(".active iframe").show(),
                n(),
                $("#channel-carousel").carousel("pause"),
                !0
            }
            ))
        }
        )),
        window.onresize = function() {
            return n()
        }
        ,
        $("#foreground-text").click((function() {
            return $("#foreground-text").hide(),
            n(),
            c("play")
        }
        ))
    }
    )),
    u = function() {
        return $("#channel-carousel").on("slid.bs.carousel", (function() {
            if (n(),
            0 === $("#channel-carousel").find(".active iframe").length)
                return c("pause")
        }
        ))
    }
    ,
    n = function() {
        var n, i;
        return $("#channel-carousel").find(".active iframe").length > 0 ? (t(),
        n = Math.min(500, 500 * $(document).width() / 1920),
        e(n + "px"),
        $(".channel-carousel .carousel-video iframe").css("min-height", n + "px"),
        i = n / 9 * 16,
        $(".carousel-video-dynamic").width(i),
        $(".channel-carousel .carousel-video iframe").css("max-width", i + "px"),
        $(".channel-carousel .carousel-video iframe").css("max-height", n + "px")) : t()
    }
    ,
    t = function() {
        return $("#channel-carousel").children().find(".item.active").outerWidth() < 1900 ? $(".carousel-video").addClass("carousel-video-dynamic").removeClass("carousel-video-fixed") : ($(".carousel-video").addClass("carousel-video-fixed").removeClass("carousel-video-dynamic"),
        e("500px"))
    }
    ,
    e = function(e) {
        return $("#channel-carousel").children(".carousel-inner").css("height", e)
    }
    ,
    d = function() {
        return window.addEventListener ? window.addEventListener("message", r, !1) : window.attachEvent("onmessage", r, !1)
    }
    ,
    r = function(e) {
        var t;
        if (!/^https?:\/\/player.vimeo.com/.test(e.origin))
            return !1;
        "*" === l && (l = e.origin);
        try {
            t = JSON.parse(e.data)
        } catch (n) {
            n,
            t = e.data
        }
        switch (t.event) {
        case "ready":
            return a();
        case "pause":
            return o();
        case "play":
            return s();
        case "finish":
            return i()
        }
    }
    ,
    c = function(e, t) {
        var n;
        return n = {
            method: e
        },
        t && (n.value = t),
        JSON.stringify(n),
        $("iframe")[0].contentWindow.postMessage(n, l)
    }
    ,
    o = function() {
        return $("#channel-carousel").carousel("cycle"),
        $(".carousel-indicators").show(),
        $("#foreground-text").show(),
        $(".statement-inner").fadeIn("fast"),
        $(".video-statement").fadeIn("fast")
    }
    ,
    s = function() {
        return $("#channel-carousel").carousel("pause"),
        $(".carousel-indicators").hide(),
        $("#foreground-text").hide(),
        $(".statement-inner").fadeOut("fast"),
        $(".video-statement").fadeOut("fast")
    }
    ,
    i = function() {
        return $("#channel-carousel").carousel("cycle"),
        $(".carousel-indicators").show(),
        $("#foreground-text").show(),
        $(".statement-inner").fadeIn("fast"),
        $(".video-statement").fadeIn("fast")
    }
    ,
    a = function() {
        return c("addEventListener", "pause"),
        c("addEventListener", "finish"),
        c("addEventListener", "play")
    }
}
.call(this),
ready((function() {
    $("[data-profile-optin]").change((function() {
        $(this).submit()
    }
    ))
}
)),
ready((function() {
    $("[data-profile-consent]").change((function() {
        $(this).submit()
    }
    )).on("ajax:success", (function(e, t) {
        var n = t[0]
          , i = $(this).find(".js-consent-wrapper");
        !0 === n.consented ? (template = $($.parseHTML($("template#js-consented_at_msg").html())[0]),
        template.find(".js-msg").html(n.consented_at_msg),
        i.append(template)) : $(this).find(".js-consented-at-msg").remove()
    }
    ))
}
)),
$((function() {
    $(".js-consents-form").length && (requiredConsentsGiven(),
    $(".js-consents-form").find(":checkbox").change((function() {
        requiredConsentsGiven()
    }
    )))
}
)),
$((function() {
    $("a[data-sharing-service]").on("click", (function(e) {
        var t = $(this).data("sharing-service")
          , n = $(this).data("tracking-verb")
          , i = {
            service: t
        };
        void 0 !== gon.user_id && $(document).trigger("track-event", {
            verb: n,
            resource: gon.course_id,
            resourceType: "course",
            inContext: i
        }),
        "mail" !== t && (window.open($(this).attr("href"), "Sharing", "height=400, width=600"),
        e.preventDefault())
    }
    ))
}
)),
$((function() {
    $(document).on("click", "[data-behavior=reactivate-prerequisite]", (function(e) {
        var t = e.target.dataset.courseTitle
          , n = e.target.dataset.courseId
          , i = e.target.dataset.url;
        xuiSwal.fire({
            title: I18n.t("courses.prerequisites.reactivation_modal.title", {
                course: t
            }),
            html: I18n.t("courses.prerequisites.reactivation_modal.text"),
            icon: "warning",
            confirmButtonText: I18n.t("courses.prerequisites.reactivation_modal.button_confirm"),
            confirmButtonAriaLabel: I18n.t("courses.prerequisites.reactivation_modal.button_confirm"),
            cancelButtonText: I18n.t("courses.prerequisites.reactivation_modal.button_cancel"),
            cancelButtonAriaLabel: I18n.t("courses.prerequisites.reactivation_modal.button_cancel"),
            expectRejections: !0,
            preConfirm: function() {
                return $.post(i, {
                    reactivate: n
                }).then(null, (function() {
                    return Swal.showValidationError(I18n.t("courses.prerequisites.reactivation_modal.error")),
                    !1
                }
                ))
            },
            showLoaderOnConfirm: !0
        }).then((function(e) {
            e.value && xuiSwal.fire({
                title: I18n.t("courses.prerequisites.success_modal.title"),
                text: I18n.t("courses.prerequisites.success_modal.text", {
                    course: t
                }),
                icon: "success",
                showCancelButton: !1
            }).then((function() {
                document.location.reload()
            }
            ))
        }
        ))
    }
    ))
}
)),
function() {
    var e, t, n, i = [].slice;
    t = function(e) {
        return e.replace(/[^-a-zA-Z0-9_.]+/g, "_")
    }
    ,
    e = function(e) {
        var n, r, o, s, a, l, c, u, d, h, f, p;
        if (u = JSON.parse(e.dataset.s3),
        p = e.dataset.upload,
        d = u.key,
        n = u.content_type,
        delete u.key,
        delete u.content_type,
        l = {
            url: p,
            maxFiles: 1,
            acceptedFiles: n,
            timeout: null,
            previewTemplate: '<div class="dz-preview">\n  <img class="dz-thumb"  data-dz-thumbnail />\n  <div class="dz-details">\n    <div class="dz-info">\n      <span class="dz-filename" data-dz-name></span>\n      <span class="dz-size" data-dz-size></span>\n    </div>\n    <div class="dz-progress">\n      <div data-dz-uploadprogress></div>\n    </div>\n  </div>\n  <div class="dz-actions">\n    <button class="dz-clear" title="Reset file"><i class="fas fa-times"></i></button>\n  </div>\n</div>'
        },
        null != e.dataset.maxFilesize && (l.maxFilesize = e.dataset.maxFilesize / 1024 / 1024),
        null != (f = u["x-amz-meta-image-target-width"]) && (f = parseInt(f, 10)),
        null != (h = u["x-amz-meta-image-target-height"]) && (h = parseInt(h, 10)),
        (c = null != f || null != h) && (l.resizeWidth = f,
        l.resizeHeight = h,
        l.resizeMethod = "crop",
        l.accept = function(e, t) {
            return e.done = t
        }
        ),
        null != e.dataset.errorSize && (l.dictFileTooBig = e.dataset.errorSize),
        null != e.dataset.errorType && (l.dictInvalidFileType = e.dataset.errorType),
        a = e.querySelector(".xui-upload-zone"),
        s = "function" == typeof (r = $(e)).closest ? r.closest(".form-group")[0] : void 0,
        null == a.dropzone)
            return (o = new Dropzone(a,l)).hiddenFileInput.id = e.dataset.id,
            a.addEventListener("keypress", (function(e) {
                if (e.target === a && (13 === e.keyCode || 32 === e.keyCode))
                    return e.preventDefault(),
                    o.hiddenFileInput.click()
            }
            )),
            o.on("sending", (function(e, n, i) {
                var r, o;
                for (r in u)
                    o = u[r],
                    i.append(r, o);
                return i.append("key", d + t(e.name)),
                i.append("Content-Type", e.type)
            }
            )),
            o.on("thumbnail", (function(e) {
                if (c)
                    return null != f && e.width < f || null != h && e.height < h ? e.done("Invalid dimensions") : e.done()
            }
            )),
            o.on("addedfile", (function(e) {
                var t;
                return this.files.length > 1 && this.removeFile(this.files[0]),
                e.previewElement.addEventListener("click", (function(e) {
                    if (!e.defaultPrevented)
                        return e.preventDefault(),
                        o.hiddenFileInput.click()
                }
                )),
                null != (t = e.previewElement.querySelector(".dz-clear")) ? t.addEventListener("click", (function(t) {
                    return t.preventDefault(),
                    o.removeFile(e)
                }
                )) : void 0
            }
            )),
            o.on("removedfile", (function(e) {
                return null != s && s.classList.remove("has-error"),
                null != s && s.classList.remove("has-success"),
                null != s && s.querySelectorAll(".has-error").forEach((function(e) {
                    return e.remove()
                }
                )),
                fetch(p + "/" + d + t(e.name), {
                    method: "DELETE"
                })
            }
            )),
            o.on("error", (function(t, n, i) {
                var r, a;
                return null != s && s.classList.add("has-error"),
                null != s && s.querySelectorAll(".has-error").forEach((function(e) {
                    return e.remove()
                }
                )),
                a = {
                    filetype: t.type,
                    fileext: t.name.split(".").pop()
                },
                null != i && (n = o.options.dictResponseError,
                a.statusCode = i.status + " " + i.statusText),
                (r = document.createElement("div")).classList.add("help-block"),
                r.classList.add("has-error"),
                r.textContent = ("" + n).replace(/\{\{(\w+)\}\}/g, (function(e, t) {
                    return null != a[t] ? a[t] : "{{" + t + "}}"
                }
                )),
                e.parentNode.appendChild(r)
            }
            )),
            o.on("success", (function() {
                return 1 <= arguments.length ? i.call(arguments, 0) : [],
                null != s && s.classList.remove("has-error"),
                null != s && s.classList.add("has-success"),
                null != s ? s.querySelectorAll(".has-error").forEach((function(e) {
                    return e.remove()
                }
                )) : void 0
            }
            )),
            o.on("uploadprogress", (function(e, t) {
                var n;
                return null != (n = e.previewElement.querySelector("progress")) ? n.value = t : void 0
            }
            ))
    }
    ,
    n = function(t) {
        return null == t && (t = document),
        Array.prototype.forEach.call(t.querySelectorAll("[data-upload]"), e)
    }
    ,
    ready((function() {
        return n()
    }
    )),
    window.xui || (window.xui = {}),
    window.xui.upload = {
        scan: n,
        init: e,
        sanitize: t
    }
}
.call(this),
function() {
    var e, t;
    e = function(e) {
        var t, n, i, r, o, s, a, l;
        if (r = JSON.parse(e.dataset.s3),
        l = e.dataset.mdupload,
        o = r.key,
        t = r.content_type,
        s = document.querySelector(e.dataset.textareaId),
        a = e.dataset.uploadId,
        delete r.key,
        delete r.content_type,
        null == (i = e.querySelector(".xui-mdupload-zone")).dropzone)
            return (n = new Dropzone(i,{
                url: l,
                acceptedFiles: t,
                timeout: null
            })).on("sending", (function(e, t, n) {
                var i, s;
                for (i in r)
                    s = r[i],
                    n.append(i, s);
                return n.append("key", o + xui.upload.sanitize(e.name)),
                n.append("Content-Type", e.type)
            }
            )),
            n.on("addedfile", (function(e) {
                var t, n;
                return n = "upload://" + a + "/" + xui.upload.sanitize(e.name),
                t = l + "/" + o + xui.upload.sanitize(e.name),
                s.xiUrlMapping[n] = t,
                s.xiUrlMappingInput.value = JSON.stringify(s.xiUrlMapping)
            }
            ))
    }
    ,
    t = function(t) {
        return null == t && (t = document),
        Array.prototype.forEach.call(t.querySelectorAll("[data-mdupload]"), e)
    }
    ,
    $((function() {
        return t()
    }
    )),
    window.xui || (window.xui = {}),
    window.xui.mdupload = {
        scan: t,
        init: e
    }
}
.call(this),
Markdown = "object" == typeof exports && "function" == typeof require ? exports : {},
function() {
    function e(e) {
        return e
    }
    function t() {
        return !1
    }
    function n() {}
    function i() {}
    n.prototype = {
        chain: function(t, n) {
            var i = this[t];
            if (!i)
                throw new Error("unknown hook " + t);
            this[t] = i === e ? n : function(e) {
                var t = Array.prototype.slice.call(arguments, 0);
                return t[0] = i.apply(null, t),
                n.apply(null, t)
            }
        },
        set: function(e, t) {
            if (!this[e])
                throw new Error("unknown hook " + e);
            this[e] = t
        },
        addNoop: function(t) {
            this[t] = e
        },
        addFalse: function(e) {
            this[e] = t
        }
    },
    Markdown.HookCollection = n,
    i.prototype = {
        set: function(e, t) {
            this["s_" + e] = t
        },
        get: function(e) {
            return this["s_" + e]
        }
    },
    Markdown.Converter = function() {
        function e(e) {
            return e = e.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm, (function(e, t, n, i, r, o) {
                return t = t.toLowerCase(),
                P.set(t, k(n)),
                r ? i : (o && O.set(t, o.replace(/"/g, "&quot;")),
                "")
            }
            ))
        }
        function t(e) {
            return e = (e = (e = (e = (e = e.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, r)).replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, r)).replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, r)).replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g, r)).replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, r)
        }
        function r(e, t) {
            var n = t;
            return n = (n = n.replace(/^\n+/, "")).replace(/\n+$/g, ""),
            n = "\n\n~K" + (L.push(n) - 1) + "K\n\n"
        }
        function o(e, n) {
            var i = "<hr />\n";
            return e = _(e = g(e = p(e = (e = (e = (e = f(e = N.preBlockGamut(e, F))).replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, i)).replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm, i)).replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm, i)))),
            e = x(e = t(e = N.postBlockGamut(e, F)), n)
        }
        function s(e) {
            return e = (e = w(e = k(e = (e = S(e = l(e = u(e = $(e = a(e = y(e = N.preSpanGamut(e)))))))).replace(/~P/g, "://")))).replace(/  +\n/g, " <br>\n"),
            e = N.postSpanGamut(e)
        }
        function a(e) {
            var t = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;
            return e = e.replace(t, (function(e) {
                var t = e.replace(/(.)<\/?code>(?=.)/g, "$1`");
                return t = M(t, "!" == e.charAt(1) ? "\\`*_/" : "\\`*_")
            }
            ))
        }
        function l(e) {
            return e = (e = (e = e.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, c)).replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, c)).replace(/(\[([^\[\]]+)\])()()()()()/g, c)
        }
        function c(e, t, n, i, r, o, s, a) {
            null == a && (a = "");
            var l = t
              , c = n.replace(/:\/\//g, "~P")
              , u = i.toLowerCase()
              , h = r
              , f = a;
            if ("" == h)
                if ("" == u && (u = c.toLowerCase().replace(/ ?\n/g, " ")),
                h = "#" + u,
                null != P.get(u))
                    h = P.get(u),
                    null != O.get(u) && (f = O.get(u));
                else {
                    if (!(l.search(/\(\s*\)$/m) > -1))
                        return l;
                    h = ""
                }
            var p = '<a href="' + (h = M(h = A(h), "*_")) + '"';
            return "" != f && (p += ' title="' + (f = M(f = d(f), "*_")) + '"'),
            p += ">" + c + "</a>"
        }
        function u(e) {
            return e = (e = e.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, h)).replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, h)
        }
        function d(e) {
            return e.replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
        }
        function h(e, t, n, i, r, o, s, a) {
            var l = t
              , c = n
              , u = i.toLowerCase()
              , h = r
              , f = a;
            if (f || (f = ""),
            "" == h) {
                if ("" == u && (u = c.toLowerCase().replace(/ ?\n/g, " ")),
                h = "#" + u,
                null == P.get(u))
                    return l;
                h = P.get(u),
                null != O.get(u) && (f = O.get(u))
            }
            c = M(d(c), "*_[]()");
            var p = '<img src="' + (h = M(h, "*_")) + '" alt="' + c + '"';
            return p += ' title="' + (f = M(f = d(f), "*_")) + '"',
            p += " />"
        }
        function f(e) {
            return e = (e = (e = e.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, (function(e, t) {
                return "<h1>" + s(t) + "</h1>\n\n"
            }
            ))).replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, (function(e, t) {
                return "<h2>" + s(t) + "</h2>\n\n"
            }
            ))).replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, (function(e, t, n) {
                var i = t.length;
                return "<h" + i + ">" + s(n) + "</h" + i + ">\n\n"
            }
            ))
        }
        function p(e, t) {
            e += "~0";
            var n = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
            return j ? e = e.replace(n, (function(e, n, i) {
                var r = n
                  , o = i.search(/[*+-]/g) > -1 ? "ul" : "ol"
                  , s = m(r, o, t);
                return s = "<" + o + ">" + (s = s.replace(/\s+$/, "")) + "</" + o + ">\n"
            }
            )) : (n = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,
            e = e.replace(n, (function(e, t, n, i) {
                var r = t
                  , o = n
                  , s = i.search(/[*+-]/g) > -1 ? "ul" : "ol"
                  , a = m(o, s);
                return a = r + "<" + s + ">\n" + a + "</" + s + ">\n"
            }
            ))),
            e = e.replace(/~0/, "")
        }
        function m(e, t, n) {
            j++,
            e = e.replace(/\n{2,}$/, "\n"),
            e += "~0";
            var i = z[t]
              , r = new RegExp("(^[ \\t]*)(" + i + ")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1(" + i + ")[ \\t]+))","gm")
              , a = !1;
            return e = (e = e.replace(r, (function(e, t, i, r) {
                var l = r
                  , c = /\n\n$/.test(l);
                return c || l.search(/\n{2,}/) > -1 || a ? l = o(E(l), !0) : (l = (l = p(E(l), !0)).replace(/\n$/, ""),
                n || (l = s(l))),
                a = c,
                "<li>" + l + "</li>\n"
            }
            ))).replace(/~0/g, ""),
            j--,
            e
        }
        function g(e) {
            return e = (e = (e += "~0").replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, (function(e, t, n) {
                var i = t
                  , r = n;
                return "\n\n" + (i = "<pre><code>" + (i = (i = (i = D(i = b(E(i)))).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + "\n</code></pre>") + "\n\n" + r
            }
            ))).replace(/~0/, "")
        }
        function v(e) {
            return e = e.replace(/(^\n+|\n+$)/g, ""),
            "\n\n~K" + (L.push(e) - 1) + "K\n\n"
        }
        function y(e) {
            return e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, (function(e, t, n, i) {
                var r = i;
                return t + "<code>" + (r = (r = b(r = (r = r.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""))).replace(/:\/\//g, "~P")) + "</code>"
            }
            ))
        }
        function b(e) {
            return e = M(e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), "*_{}[]\\", !1)
        }
        function w(e) {
            return e = (e = e.replace(/([\W_]|^)(\*\*|__)(?=\S)([^\r]*?\S[\*_]*)\2([\W_]|$)/g, "$1<strong>$3</strong>$4")).replace(/([\W_]|^)(\*|_)(?=\S)([^\r\*_]*?\S)\2([\W_]|$)/g, "$1<em>$3</em>$4")
        }
        function _(e) {
            return e = e.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, (function(e, t) {
                var n = t;
                return n = (n = (n = o(n = (n = (n = n.replace(/^[ \t]*>[ \t]?/gm, "~0")).replace(/~0/g, "")).replace(/^[ \t]+$/gm, ""))).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, (function(e, t) {
                    var n = t;
                    return n = (n = n.replace(/^  /gm, "~0")).replace(/~0/g, "")
                }
                )),
                v("<blockquote>\n" + n + "\n</blockquote>")
            }
            ))
        }
        function x(e, t) {
            for (var n = (e = (e = e.replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), i = [], r = /~K(\d+)K/, o = n.length, a = 0; a < o; a++) {
                var l = n[a];
                r.test(l) ? i.push(l) : /\S/.test(l) && (l = (l = s(l)).replace(/^([ \t]*)/g, "<p>"),
                l += "</p>",
                i.push(l))
            }
            if (!t) {
                o = i.length;
                for (a = 0; a < o; a++)
                    for (var c = !0; c; )
                        c = !1,
                        i[a] = i[a].replace(/~K(\d+)K/g, (function(e, t) {
                            return c = !0,
                            L[t]
                        }
                        ))
            }
            return i.join("\n\n")
        }
        function k(e) {
            return e = (e = e.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?!]|~D)/gi, "&lt;")
        }
        function $(e) {
            return e = (e = e.replace(/\\(\\)/g, I)).replace(/\\([`*_{}\[\]()>#+-.!])/g, I)
        }
        function C(e, t, n, i) {
            if (t)
                return e;
            if (")" !== i.charAt(i.length - 1))
                return "<" + n + i + ">";
            for (var r = i.match(/[()]/g), o = 0, s = 0; s < r.length; s++)
                "(" === r[s] ? o <= 0 ? o = 1 : o++ : o--;
            var a = "";
            if (o < 0) {
                var l = new RegExp("\\){1," + -o + "}$");
                i = i.replace(l, (function(e) {
                    return a = e,
                    ""
                }
                ))
            }
            if (a) {
                var c = i.charAt(i.length - 1);
                H.test(c) || (a = c + a,
                i = i.substr(0, i.length - 1))
            }
            return "<" + n + i + ">" + a
        }
        function S(e) {
            var t = function(e, t) {
                return '<a href="' + t + '">' + N.plainLinkText(t) + "</a>"
            };
            return e = (e = e.replace(R, C)).replace(/<((https?|ftp):[^'">\s]+)>/gi, t)
        }
        function T(e) {
            return e = e.replace(/~E(\d+)E/g, (function(e, t) {
                var n = parseInt(t);
                return String.fromCharCode(n)
            }
            ))
        }
        function E(e) {
            return e = (e = e.replace(/^(\t|[ ]{1,4})/gm, "~0")).replace(/~0/g, "")
        }
        function D(e) {
            if (!/\t/.test(e))
                return e;
            var t, n = ["    ", "   ", "  ", " "], i = 0;
            return e.replace(/[\n\t]/g, (function(e, r) {
                return "\n" === e ? (i = r + 1,
                e) : (t = (r - i) % 4,
                i = r + 1,
                n[t])
            }
            ))
        }
        function A(e) {
            if (!e)
                return "";
            var t = e.length;
            return e.replace(U, (function(n, i) {
                return "~D" == n ? "%24" : ":" != n || i != t - 1 && !/[0-9\/]/.test(e.charAt(i + 1)) ? "%" + n.charCodeAt(0).toString(16) : ":"
            }
            ))
        }
        function M(e, t, n) {
            var i = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
            n && (i = "\\\\" + i);
            var r = new RegExp(i,"g");
            return e = e.replace(r, I)
        }
        function I(e, t) {
            return "~E" + t.charCodeAt(0) + "E"
        }
        var P, O, L, j, N = this.hooks = new n;
        N.addNoop("plainLinkText"),
        N.addNoop("preConversion"),
        N.addNoop("postNormalization"),
        N.addNoop("preBlockGamut"),
        N.addNoop("postBlockGamut"),
        N.addNoop("preSpanGamut"),
        N.addNoop("postSpanGamut"),
        N.addNoop("postConversion"),
        this.makeHtml = function(n) {
            if (P)
                throw new Error("Recursive call to converter.makeHtml");
            return P = new i,
            O = new i,
            L = [],
            j = 0,
            n = (n = D(n = "\n\n" + (n = (n = (n = (n = (n = N.preConversion(n)).replace(/~/g, "~T")).replace(/\$/g, "~D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")) + "\n\n")).replace(/^[ \t]+$/gm, ""),
            n = (n = (n = T(n = o(n = e(n = t(n = N.postNormalization(n)))))).replace(/~D/g, "$$")).replace(/~T/g, "~"),
            n = N.postConversion(n),
            L = O = P = null,
            n
        }
        ;
        var F = function(e) {
            return o(e)
        }
          , z = {
            ol: "\\d+[.]",
            ul: "[*+-]"
        }
          , q = "[-A-Z0-9+&@#/%=~_|[\\])]"
          , R = new RegExp('(="|<)?\\b(https?|ftp)(://' + "[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]" + "*" + q + ")(?=$|\\W)","gi")
          , H = new RegExp(q,"i")
          , U = /(?:["'*()[\]:]|~D)/g
    }
}(),
function() {
    function e() {}
    function t(e) {
        this.buttonBar = d.getElementById("wmd-button-bar" + e),
        this.preview = d.getElementById("wmd-preview" + e),
        this.input = d.getElementById("wmd-input" + e)
    }
    function n(e, t) {
        var n, r, o, s = this, a = [], c = 0, u = "none", d = function(e, t) {
            u != e && (u = e,
            t || f()),
            m.isIE && "moving" == u ? o = null : r = setTimeout(h, 1)
        }, h = function(e) {
            o = new i(t,e),
            r = void 0
        };
        this.setCommandMode = function() {
            u = "command",
            f(),
            r = setTimeout(h, 0)
        }
        ,
        this.canUndo = function() {
            return c > 1
        }
        ,
        this.canRedo = function() {
            return !!a[c + 1]
        }
        ,
        this.undo = function() {
            s.canUndo() && (n ? (n.restore(),
            n = null) : (a[c] = new i(t),
            a[--c].restore(),
            e && e())),
            u = "none",
            t.input.focus(),
            h()
        }
        ,
        this.redo = function() {
            s.canRedo() && (a[++c].restore(),
            e && e()),
            u = "none",
            t.input.focus(),
            h()
        }
        ;
        var f = function() {
            var r = o || new i(t);
            if (!r)
                return !1;
            "moving" != u ? (n && (a[c - 1].text != n.text && (a[c++] = n),
            n = null),
            a[c++] = r,
            a[c + 1] = null,
            e && e()) : n || (n = r)
        }
          , p = function(e) {
            var t = !1;
            if (e.ctrlKey || e.metaKey) {
                var n = e.charCode || e.keyCode;
                switch (String.fromCharCode(n)) {
                case "y":
                    s.redo(),
                    t = !0;
                    break;
                case "z":
                    e.shiftKey ? s.redo() : s.undo(),
                    t = !0
                }
            }
            t && (e.preventDefault && e.preventDefault(),
            window.event && (window.event.returnValue = !1))
        }
          , g = function(e) {
            if (!e.ctrlKey && !e.metaKey) {
                var t = e.keyCode;
                t >= 33 && t <= 40 || t >= 63232 && t <= 63235 ? d("moving") : 8 == t || 46 == t || 127 == t ? d("deleting") : 13 == t ? d("newlines") : 27 == t ? d("escape") : (t < 16 || t > 20) && 91 != t && d("typing")
            }
        }
          , v = function() {
            l.addEvent(t.input, "keypress", (function(e) {
                !e.ctrlKey && !e.metaKey || 89 != e.keyCode && 90 != e.keyCode || e.preventDefault()
            }
            ));
            var e = function() {
                (m.isIE || o && o.text != t.input.value) && null == r && (u = "paste",
                f(),
                h())
            };
            l.addEvent(t.input, "keydown", p),
            l.addEvent(t.input, "keydown", g),
            l.addEvent(t.input, "mousedown", (function() {
                d("moving")
            }
            )),
            t.input.onpaste = e,
            t.input.ondrop = e
        };
        (function() {
            v(),
            h(!0),
            f()
        }
        )()
    }
    function i(t, n) {
        var i = this
          , r = t.input;
        this.init = function() {
            l.isVisible(r) && (!n && d.activeElement && d.activeElement !== r || (this.setInputAreaSelectionStartEnd(),
            this.scrollTop = r.scrollTop,
            (!this.text && r.selectionStart || 0 === r.selectionStart) && (this.text = r.value)))
        }
        ,
        this.setInputAreaSelection = function() {
            if (l.isVisible(r))
                if (void 0 === r.selectionStart || m.isOpera) {
                    if (d.selection) {
                        if (d.activeElement && d.activeElement !== r)
                            return;
                        r.focus();
                        var e = r.createTextRange();
                        e.moveStart("character", -r.value.length),
                        e.moveEnd("character", -r.value.length),
                        e.moveEnd("character", i.end),
                        e.moveStart("character", i.start),
                        e.select()
                    }
                } else
                    r.focus(),
                    r.selectionStart = i.start,
                    r.selectionEnd = i.end,
                    r.scrollTop = i.scrollTop
        }
        ,
        this.setInputAreaSelectionStartEnd = function() {
            if (t.ieCachedRange || !r.selectionStart && 0 !== r.selectionStart) {
                if (d.selection) {
                    i.text = l.fixEolChars(r.value);
                    var e = t.ieCachedRange || d.selection.createRange()
                      , n = l.fixEolChars(e.text)
                      , o = "\x07"
                      , s = o + n + o;
                    e.text = s;
                    var a = l.fixEolChars(r.value);
                    e.moveStart("character", -s.length),
                    e.text = n,
                    i.start = a.indexOf(o),
                    i.end = a.lastIndexOf(o) - o.length;
                    var c = i.text.length - l.fixEolChars(r.value).length;
                    if (c) {
                        for (e.moveStart("character", -n.length); c--; )
                            n += "\n",
                            i.end += 1;
                        e.text = n
                    }
                    t.ieCachedRange && (i.scrollTop = t.ieCachedScrollTop),
                    t.ieCachedRange = null,
                    this.setInputAreaSelection()
                }
            } else
                i.start = r.selectionStart,
                i.end = r.selectionEnd
        }
        ,
        this.restore = function() {
            null != i.text && i.text != r.value && (r.value = i.text),
            this.setInputAreaSelection(),
            r.scrollTop = i.scrollTop
        }
        ,
        this.getChunks = function() {
            var t = new e;
            return t.before = l.fixEolChars(i.text.substring(0, i.start)),
            t.startTag = "",
            t.selection = l.fixEolChars(i.text.substring(i.start, i.end)),
            t.endTag = "",
            t.after = l.fixEolChars(i.text.substring(i.end)),
            t.scrollTop = i.scrollTop,
            t
        }
        ,
        this.setChunks = function(e) {
            e.before = e.before + e.startTag,
            e.after = e.endTag + e.after,
            this.start = e.before.length,
            this.end = e.before.length + e.selection.length,
            this.text = e.before + e.selection + e.after,
            this.scrollTop = e.scrollTop
        }
        ,
        this.init()
    }
    function r(e, t, n) {
        var i, r, o, s = 3e3, a = "delayed", u = function(e, t) {
            l.addEvent(e, "input", t),
            e.onpaste = t,
            e.ondrop = t,
            l.addEvent(e, "keypress", t),
            l.addEvent(e, "keydown", t)
        }, h = function() {
            var e = 0;
            return window.innerHeight ? e = window.pageYOffset : d.documentElement && d.documentElement.scrollTop ? e = d.documentElement.scrollTop : d.body && (e = d.body.scrollTop),
            e
        }, f = function() {
            if (t.preview) {
                var n = t.input.value;
                if (!n || n != o) {
                    o = n;
                    var i = (new Date).getTime();
                    n = e.makeHtml(n);
                    var s = (new Date).getTime();
                    r = s - i,
                    k(n)
                }
            }
        }, p = function() {
            if (i && (clearTimeout(i),
            i = void 0),
            "manual" !== a) {
                var e = 0;
                "delayed" === a && (e = r),
                e > s && (e = s),
                i = setTimeout(f, e)
            }
        }, g = function(e) {
            return e.scrollHeight <= e.clientHeight ? 1 : e.scrollTop / (e.scrollHeight - e.clientHeight)
        }, v = function() {
            t.preview && (t.preview.scrollTop = (t.preview.scrollHeight - t.preview.clientHeight) * g(t.preview))
        };
        this.refresh = function(e) {
            e ? (o = "",
            f()) : p()
        }
        ,
        this.processingTime = function() {
            return r
        }
        ;
        var y, b = !0, w = function(e) {
            var n = t.preview
              , i = n.parentNode
              , r = n.nextSibling;
            i.removeChild(n),
            n.innerHTML = e,
            r ? i.insertBefore(n, r) : i.appendChild(n)
        }, _ = function(e) {
            t.preview.innerHTML = e
        }, x = function(e) {
            if (y)
                return y(e);
            try {
                _(e),
                y = _
            } catch (t) {
                (y = w)(e)
            }
        }, k = function(e) {
            var i = c.getTop(t.input) - h();
            if (t.preview && (x(e),
            n()),
            v(),
            b)
                b = !1;
            else {
                var r = c.getTop(t.input) - h();
                m.isIE ? setTimeout((function() {
                    window.scrollBy(0, r - i)
                }
                ), 0) : window.scrollBy(0, r - i)
            }
        };
        (function() {
            u(t.input, p),
            f(),
            t.preview && (t.preview.scrollTop = 0)
        }
        )()
    }
    function o(e, t, n, r, o, s) {
        function a(e) {
            if (p.focus(),
            e.textOp) {
                n && n.setCommandMode();
                var o = new i(t);
                if (!o)
                    return;
                var s = o.getChunks()
                  , a = function() {
                    p.focus(),
                    s && o.setChunks(s),
                    o.restore(),
                    r.refresh()
                };
                e.textOp(s, a) || a()
            }
            e.execute && e.execute(n)
        }
        function c(e, t) {
            t ? (e.disabled = !1,
            e.isHelp || (e.onclick = function() {
                return this.onmouseout && this.onmouseout(),
                a(this),
                !1
            }
            )) : e.disabled = !0
        }
        function u(e) {
            return "string" == typeof e && (e = o[e]),
            function() {
                e.apply(o, arguments)
            }
        }
        function d() {
            var n = t.buttonBar
              , i = document.createElement("div");
            i.id = "wmd-button-row" + e,
            i.className = "btn-toolbar",
            i = n.appendChild(i);
            var r = function(t, n, r, o, s) {
                var a = document.createElement("button");
                a.className = "btn btn-default btn-sm";
                var l = document.createElement("i");
                return l.className = r,
                a.appendChild(l),
                a.id = t + e,
                a.title = n,
                o && (a.textOp = o),
                c(a, !0),
                s ? s.appendChild(a) : i.appendChild(a),
                a
            }
              , o = function(t) {
                var n = document.createElement("div");
                return n.className = "btn-group wmd-button-group" + t,
                n.id = "wmd-button-group" + t + e,
                i.appendChild(n),
                n
            }
              , a = o(1);
            g.bold = r("wmd-bold-button", "Bold (Ctrl+B)", "fa fa-bold", u("doBold"), a),
            g.italic = r("wmd-italic-button", "Italic (Ctrl+I)", "fa fa-italic", u("doItalic"), a);
            var l = o(2);
            g.link = r("wmd-link-button", "Link (Ctrl+L)", "fa fa-link", u((function(e, t) {
                return this.doLinkOrImage(e, t, !1)
            }
            )), l),
            g.image = r("wmd-image-button", "Image (Ctrl+G)", "fa fa-picture-o", u((function(e, t) {
                return this.doLinkOrImage(e, t, !0)
            }
            )), l),
            g.quote = r("wmd-quote-button", "Blockquote (Ctrl+Q)", "fa fa-quote-left", u("doBlockquote"), l),
            g.code = r("wmd-code-button", "Code Sample (Ctrl+K)", "fa fa-code", u("doCode"), l);
            var d = o(3);
            g.ulist = r("wmd-ulist-button", "Bulleted List (Ctrl+U)", "fa fa-list-ul", u((function(e, t) {
                this.doList(e, t, !1)
            }
            )), d),
            g.olist = r("wmd-olist-button", "Numbered List (Ctrl+O)", "fa fa-list-ol", u((function(e, t) {
                this.doList(e, t, !0)
            }
            )), d),
            g.heading = r("wmd-heading-button", "Heading (Ctrl+H)", "fa fa-font", u("doHeading"), d);
            var p = o(4);
            g.undo = r("wmd-undo-button", "Undo (Ctrl+Z)", "fa fa-undo", null, p),
            g.undo.execute = function(e) {
                e && e.undo()
            }
            ;
            var m = /win/.test(f.platform.toLowerCase()) ? "Redo (Ctrl+Y)" : "Redo (Ctrl+Shift+Z)";
            if (g.redo = r("wmd-redo-button", m, "fa fa-repeat", null, p),
            g.redo.execute = function(e) {
                e && e.redo()
            }
            ,
            s) {
                var v = o(5);
                v.className = v.className + " pull-right";
                var y = document.createElement("button")
                  , b = document.createElement("i");
                b.className = "fa fa-info",
                y.appendChild(b),
                y.className = "btn btn-info btn-sm",
                y.id = "wmd-help-button" + e,
                y.isHelp = !0,
                y.title = s.title || C,
                y.onclick = s.handler,
                c(y, !0),
                v.appendChild(y),
                g.help = y
            }
            h()
        }
        function h() {
            n && (c(g.undo, n.canUndo()),
            c(g.redo, n.canRedo()))
        }
        var p = t.input
          , g = {};
        d();
        var v = "keydown";
        m.isOpera && (v = "keypress"),
        l.addEvent(p, v, (function(e) {
            if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
                var t = e.charCode || e.keyCode;
                switch (String.fromCharCode(t).toLowerCase()) {
                case "b":
                    a(g.bold);
                    break;
                case "i":
                    a(g.italic);
                    break;
                case "l":
                    a(g.link);
                    break;
                case "q":
                    a(g.quote);
                    break;
                case "k":
                    a(g.code);
                    break;
                case "g":
                    a(g.image);
                    break;
                case "o":
                    a(g.olist);
                    break;
                case "u":
                    a(g.ulist);
                    break;
                case "h":
                    a(g.heading);
                    break;
                case "r":
                    a(g.hr);
                    break;
                case "y":
                    a(g.redo);
                    break;
                case "z":
                    e.shiftKey ? a(g.redo) : a(g.undo);
                    break;
                default:
                    return
                }
                e.preventDefault && e.preventDefault(),
                window.event && (window.event.returnValue = !1)
            }
        }
        )),
        l.addEvent(p, "keyup", (function(e) {
            if (e.shiftKey && !e.ctrlKey && !e.metaKey && 13 === (e.charCode || e.keyCode)) {
                var t = {};
                t.textOp = u("doAutoindent"),
                a(t)
            }
        }
        )),
        m.isIE && l.addEvent(p, "keydown", (function(e) {
            if (27 === e.keyCode)
                return !1
        }
        )),
        this.setUndoRedoButtonStates = h
    }
    function s(e) {
        this.hooks = e
    }
    function a(e) {
        return e.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/, (function(e, t, n) {
            return t = t.replace(/\?.*$/, (function(e) {
                return e.replace(/\+/g, " ")
            }
            )),
            t = decodeURIComponent(t),
            t = (t = encodeURI(t).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")).replace(/\?.*$/, (function(e) {
                return e.replace(/\+/g, "%2b")
            }
            )),
            n && (n = n.trim ? n.trim() : n.replace(/^\s*/, "").replace(/\s*$/, ""),
            n = $.trim(n).replace(/"/g, "quot;").replace(/\(/g, "&#40;").replace(/\)/g, "&#41;").replace(/</g, "&lt;").replace(/>/g, "&gt;")),
            n ? t + ' "' + n + '"' : t
        }
        ))
    }
    var l = {}
      , c = {}
      , u = {}
      , d = window.document
      , h = window.RegExp
      , f = window.navigator
      , p = {
        lineLength: 72
    }
      , m = {
        isIE: /msie/.test(f.userAgent.toLowerCase()),
        isIE_5or6: /msie 6/.test(f.userAgent.toLowerCase()) || /msie 5/.test(f.userAgent.toLowerCase()),
        isOpera: /opera/.test(f.userAgent.toLowerCase())
    }
      , g = "Insert link"
      , v = "Link URL"
      , y = 'http://example.com/ "optional title"'
      , b = "Enter URL to point link to and optional title to display when mouse is placed over the link"
      , w = "Insert image"
      , _ = "Image URL"
      , x = 'http://example.com/images/diagram.jpg "optional title"'
      , k = "Enter URL where image is located and optional title to display when mouse is placed over the image"
      , C = "Markdown Editing Help";
    Markdown.Editor = function(e, i, a) {
        i = i || "";
        var l = this.hooks = new Markdown.HookCollection;
        l.addNoop("onPreviewRefresh"),
        l.addNoop("postBlockquoteCreation"),
        l.addFalse("insertImageDialog"),
        this.getConverter = function() {
            return e
        }
        ;
        var c, u = this;
        this.run = function() {
            if (!c) {
                c = new t(i);
                var h, f, p = new s(l), m = new r(e,c,(function() {
                    l.onPreviewRefresh()
                }
                ));
                /\?noundo/.test(d.location.href) || (h = new n((function() {
                    m.refresh(),
                    f && f.setUndoRedoButtonStates()
                }
                ),c),
                this.textOperation = function(e) {
                    h.setCommandMode(),
                    e(),
                    u.refreshPreview()
                }
                ),
                (f = new o(i,c,h,m,p,a)).setUndoRedoButtonStates(),
                (u.refreshPreview = function() {
                    m.refresh(!0)
                }
                )()
            }
        }
    }
    ,
    e.prototype.findTags = function(e, t) {
        var n, i = this;
        e && (n = l.extendRegExp(e, "", "$"),
        this.before = this.before.replace(n, (function(e) {
            return i.startTag = i.startTag + e,
            ""
        }
        )),
        n = l.extendRegExp(e, "^", ""),
        this.selection = this.selection.replace(n, (function(e) {
            return i.startTag = i.startTag + e,
            ""
        }
        ))),
        t && (n = l.extendRegExp(t, "", "$"),
        this.selection = this.selection.replace(n, (function(e) {
            return i.endTag = e + i.endTag,
            ""
        }
        )),
        n = l.extendRegExp(t, "^", ""),
        this.after = this.after.replace(n, (function(e) {
            return i.endTag = e + i.endTag,
            ""
        }
        )))
    }
    ,
    e.prototype.trimWhitespace = function(e) {
        var t, n, i = this;
        e ? t = n = "" : (t = function(e) {
            return i.before += e,
            ""
        }
        ,
        n = function(e) {
            return i.after = e + i.after,
            ""
        }
        ),
        this.selection = this.selection.replace(/^(\s*)/, t).replace(/(\s*)$/, n)
    }
    ,
    e.prototype.skipLines = function(e, t, n) {
        var i, r;
        if (void 0 === e && (e = 1),
        void 0 === t && (t = 1),
        e++,
        t++,
        navigator.userAgent.match(/Chrome/) && "X".match(/()./),
        this.selection = this.selection.replace(/(^\n*)/, ""),
        this.startTag = this.startTag + h.$1,
        this.selection = this.selection.replace(/(\n*$)/, ""),
        this.endTag = this.endTag + h.$1,
        this.startTag = this.startTag.replace(/(^\n*)/, ""),
        this.before = this.before + h.$1,
        this.endTag = this.endTag.replace(/(\n*$)/, ""),
        this.after = this.after + h.$1,
        this.before) {
            for (i = r = ""; e--; )
                i += "\\n?",
                r += "\n";
            n && (i = "\\n*"),
            this.before = this.before.replace(new h(i + "$",""), r)
        }
        if (this.after) {
            for (i = r = ""; t--; )
                i += "\\n?",
                r += "\n";
            n && (i = "\\n*"),
            this.after = this.after.replace(new h(i,""), r)
        }
    }
    ,
    l.isVisible = function(e) {
        return window.getComputedStyle ? "none" !== window.getComputedStyle(e, null).getPropertyValue("display") : e.currentStyle ? "none" !== e.currentStyle.display : void 0
    }
    ,
    l.addEvent = function(e, t, n) {
        e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener(t, n, !1)
    }
    ,
    l.removeEvent = function(e, t, n) {
        e.detachEvent ? e.detachEvent("on" + t, n) : e.removeEventListener(t, n, !1)
    }
    ,
    l.fixEolChars = function(e) {
        return e = (e = e.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")
    }
    ,
    l.extendRegExp = function(e, t, n) {
        null == t && (t = ""),
        null == n && (n = "");
        var i, r = e.toString();
        return r = (r = r.replace(/\/([gim]*)$/, (function(e, t) {
            return i = t,
            ""
        }
        ))).replace(/(^\/|\/$)/g, ""),
        new h(r = t + r + n,i)
    }
    ,
    c.getTop = function(e, t) {
        var n = e.offsetTop;
        if (!t)
            for (; e = e.offsetParent; )
                n += e.offsetTop;
        return n
    }
    ,
    c.getHeight = function(e) {
        return e.offsetHeight || e.scrollHeight
    }
    ,
    c.getWidth = function(e) {
        return e.offsetWidth || e.scrollWidth
    }
    ,
    c.getPageSize = function() {
        var e, t, n, i;
        return self.innerHeight && self.scrollMaxY ? (e = d.body.scrollWidth,
        t = self.innerHeight + self.scrollMaxY) : d.body.scrollHeight > d.body.offsetHeight ? (e = d.body.scrollWidth,
        t = d.body.scrollHeight) : (e = d.body.offsetWidth,
        t = d.body.offsetHeight),
        self.innerHeight ? (n = self.innerWidth,
        i = self.innerHeight) : d.documentElement && d.documentElement.clientHeight ? (n = d.documentElement.clientWidth,
        i = d.documentElement.clientHeight) : d.body && (n = d.body.clientWidth,
        i = d.body.clientHeight),
        [Math.max(e, n), Math.max(t, i), n, i]
    }
    ,
    u.prompt = function(e, t, n, i, r) {
        var o, s;
        void 0 === n && (n = "");
        var a = function(e) {
            27 === (e.charCode || e.keyCode) && c(!0)
        }
          , c = function(e) {
            l.removeEvent(d.body, "keydown", a);
            var t = s.value;
            return e ? t = null : (t = t.replace(/^http:\/\/(https?|ftp):\/\//, "$1://"),
            /^(?:https?|ftp):\/\//.test(t) || (t = "http://" + t)),
            $(o).modal("hide"),
            r(t),
            !1
        }
          , u = function() {
            (o = d.createElement("div")).className = "modal fade",
            o.style.display = "none";
            var r = d.createElement("div");
            r.className = "modal-dialog",
            o.appendChild(r);
            var u = d.createElement("div");
            u.className = "modal-content",
            r.appendChild(u);
            var h = d.createElement("div");
            h.className = "modal-header",
            h.innerHTML = '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <h3 class="modal-title">' + e + "</h3>",
            u.appendChild(h);
            var f = d.createElement("div");
            f.className = "modal-body",
            u.appendChild(f);
            var p = d.createElement("div");
            p.className = "modal-footer",
            u.appendChild(p);
            var m = d.createElement("form");
            m.onsubmit = function() {
                return c(!1)
            }
            ,
            f.appendChild(m);
            var g = d.createElement("div");
            g.className = "form-group",
            m.appendChild(g);
            var v = d.createElement("label");
            v.htmlFor = "url-" + (new Date).getTime(),
            v.innerHTML = t,
            g.appendChild(v),
            (s = d.createElement("input")).id = v.htmlFor,
            s.type = "text",
            s.className = "form-control",
            s.placeholder = n,
            g.appendChild(s);
            var y = d.createElement("span");
            y.className = "help-block",
            y.innerHTML = i || "",
            g.appendChild(y);
            var b = d.createElement("button");
            b.className = "btn btn-primary",
            b.type = "button",
            b.onclick = function() {
                return c(!1)
            }
            ,
            b.innerHTML = "OK";
            var w = d.createElement("button");
            w.className = "btn btn-default",
            w.type = "button",
            w.onclick = function() {
                return c(!0)
            }
            ,
            w.innerHTML = "Cancel",
            p.appendChild(b),
            p.appendChild(w),
            l.addEvent(d.body, "keydown", a),
            d.body.appendChild(o)
        };
        setTimeout((function() {
            u();
            var e = 0;
            if (void 0 !== s.selectionStart)
                s.selectionStart = 0,
                s.selectionEnd = e;
            else if (s.createTextRange) {
                var t = s.createTextRange();
                t.collapse(!1),
                t.moveStart("character", -e),
                t.moveEnd("character", e),
                t.select()
            }
            $(o).on("shown", (function() {
                s.focus()
            }
            )),
            $(o).on("hidden", (function() {
                o.parentNode.removeChild(o)
            }
            )),
            $(o).modal()
        }
        ), 0)
    }
    ;
    var S = s.prototype;
    S.prefixes = "(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)",
    S.unwrap = function(e) {
        var t = new h("([^\\n])\\n(?!(\\n|" + this.prefixes + "))","g");
        e.selection = e.selection.replace(t, "$1 $2")
    }
    ,
    S.wrap = function(e, t) {
        this.unwrap(e);
        var n = new h("(.{1," + t + "})( +|$\\n?)","gm")
          , i = this;
        e.selection = e.selection.replace(n, (function(e, t) {
            return new h("^" + i.prefixes,"").test(e) ? e : t + "\n"
        }
        )),
        e.selection = e.selection.replace(/\s+$/, "")
    }
    ,
    S.doBold = function(e, t) {
        return this.doBorI(e, t, 2, "strong text")
    }
    ,
    S.doItalic = function(e, t) {
        return this.doBorI(e, t, 1, "emphasized text")
    }
    ,
    S.doBorI = function(e, t, n, i) {
        e.trimWhitespace(),
        e.selection = e.selection.replace(/\n{2,}/g, "\n");
        var r = /(\**$)/.exec(e.before)[0]
          , o = /(^\**)/.exec(e.after)[0]
          , s = Math.min(r.length, o.length);
        if (s >= n && (2 != s || 1 != n))
            e.before = e.before.replace(h("[*]{" + n + "}$", ""), ""),
            e.after = e.after.replace(h("^[*]{" + n + "}", ""), "");
        else if (!e.selection && o) {
            e.after = e.after.replace(/^([*_]*)/, ""),
            e.before = e.before.replace(/(\s?)$/, "");
            var a = h.$1;
            e.before = e.before + o + a
        } else {
            e.selection || o || (e.selection = i);
            var l = n <= 1 ? "*" : "**";
            e.before = e.before + l,
            e.after = l + e.after
        }
    }
    ,
    S.stripLinkDefs = function(e, t) {
        return e = e.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm, (function(e, n, i, r, o) {
            return t[n] = e.replace(/\s*$/, ""),
            r ? (t[n] = e.replace(/["(](.+?)[")]$/, ""),
            r + o) : ""
        }
        ))
    }
    ,
    S.addLinkDef = function(e, t) {
        var n = 0
          , i = {};
        e.before = this.stripLinkDefs(e.before, i),
        e.selection = this.stripLinkDefs(e.selection, i),
        e.after = this.stripLinkDefs(e.after, i);
        var r = ""
          , o = /(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g
          , s = function(e) {
            n++,
            e = e.replace(/^[ ]{0,3}\[(\d+)\]:/, "  [" + n + "]:"),
            r += "\n" + e
        }
          , a = function(e, t, r, l, c, u) {
            return r = r.replace(o, a),
            i[c] ? (s(i[c]),
            t + r + l + n + u) : e
        };
        e.before = e.before.replace(o, a),
        t ? s(t) : e.selection = e.selection.replace(o, a);
        var l = n;
        return e.after = e.after.replace(o, a),
        e.after && (e.after = e.after.replace(/\n*$/, "")),
        e.after || (e.selection = e.selection.replace(/\n*$/, "")),
        e.after += "\n\n" + r,
        l
    }
    ,
    S.doLinkOrImage = function(e, t, n) {
        if (e.trimWhitespace(),
        e.findTags(/\s*!?\[/, /\][ ]?(?:\n[ ]*)?(\[.*?\])?/),
        !(e.endTag.length > 1 && e.startTag.length > 0)) {
            if (e.selection = e.startTag + e.selection + e.endTag,
            e.startTag = e.endTag = "",
            /\n\n/.test(e.selection))
                return void this.addLinkDef(e, null);
            var i = this
              , r = function(r) {
                if (null !== r) {
                    e.selection = (" " + e.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g, "$1\\").substr(1);
                    var o = " [999]: " + a(r)
                      , s = i.addLinkDef(e, o);
                    e.startTag = n ? "![" : "[",
                    e.endTag = "][" + s + "]",
                    e.selection || (e.selection = n ? "enter image description here" : "enter link description here")
                }
                t()
            };
            return n ? this.hooks.insertImageDialog(r) || u.prompt(w, _, x, k, r) : u.prompt(g, v, y, b, r),
            !0
        }
        e.startTag = e.startTag.replace(/!?\[/, ""),
        e.endTag = "",
        this.addLinkDef(e, null)
    }
    ,
    S.doAutoindent = function(e) {
        var t = this
          , n = !1;
        e.before = e.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/, "\n\n"),
        e.before = e.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/, "\n\n"),
        e.before = e.before.replace(/(\n|^)[ \t]+\n$/, "\n\n"),
        e.selection || /^[ \t]*(?:\n|$)/.test(e.after) || (e.after = e.after.replace(/^[^\n]*/, (function(t) {
            return e.selection = t,
            ""
        }
        )),
        n = !0),
        /(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(e.before) && t.doList && t.doList(e),
        /(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(e.before) && t.doBlockquote && t.doBlockquote(e),
        /(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before) && t.doCode && t.doCode(e),
        n && (e.after = e.selection + e.after,
        e.selection = "")
    }
    ,
    S.doBlockquote = function(e) {
        e.selection = e.selection.replace(/^(\n*)([^\r]+?)(\n*)$/, (function(t, n, i, r) {
            return e.before += n,
            e.after = r + e.after,
            i
        }
        )),
        e.before = e.before.replace(/(>[ \t]*)$/, (function(t, n) {
            return e.selection = n + e.selection,
            ""
        }
        )),
        e.selection = e.selection.replace(/^(\s|>)+$/, ""),
        e.selection = e.selection || "Blockquote";
        var t, n = "", i = "";
        if (e.before) {
            for (var r = e.before.replace(/\n$/, "").split("\n"), o = !1, s = 0; s < r.length; s++) {
                var a = !1;
                t = r[s],
                o = o && t.length > 0,
                /^>/.test(t) ? (a = !0,
                !o && t.length > 1 && (o = !0)) : a = !!/^[ \t]*$/.test(t) || o,
                a ? n += t + "\n" : (i += n + t,
                n = "\n")
            }
            /(^|\n)>/.test(n) || (i += n,
            n = "")
        }
        e.startTag = n,
        e.before = i,
        e.after && (e.after = e.after.replace(/^\n?/, "\n")),
        e.after = e.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/, (function(t) {
            return e.endTag = t,
            ""
        }
        ));
        var l = function(t) {
            var n = t ? "> " : "";
            e.startTag && (e.startTag = e.startTag.replace(/\n((>|\s)*)\n$/, (function(e, t) {
                return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, n) + "\n"
            }
            ))),
            e.endTag && (e.endTag = e.endTag.replace(/^\n((>|\s)*)\n/, (function(e, t) {
                return "\n" + t.replace(/^[ ]{0,3}>?[ \t]*$/gm, n) + "\n"
            }
            )))
        };
        /^(?![ ]{0,3}>)/m.test(e.selection) ? (this.wrap(e, p.lineLength - 2),
        e.selection = e.selection.replace(/^/gm, "> "),
        l(!0),
        e.skipLines()) : (e.selection = e.selection.replace(/^[ ]{0,3}> ?/gm, ""),
        this.unwrap(e),
        l(!1),
        !/^(\n|^)[ ]{0,3}>/.test(e.selection) && e.startTag && (e.startTag = e.startTag.replace(/\n{0,2}$/, "\n\n")),
        !/(\n|^)[ ]{0,3}>.*$/.test(e.selection) && e.endTag && (e.endTag = e.endTag.replace(/^\n{0,2}/, "\n\n"))),
        e.selection = this.hooks.postBlockquoteCreation(e.selection),
        /\n/.test(e.selection) || (e.selection = e.selection.replace(/^(> *)/, (function(t, n) {
            return e.startTag += n,
            ""
        }
        )))
    }
    ,
    S.doCode = function(e) {
        var t = /\S[ ]*$/.test(e.before);
        if (!/^[ ]*\S/.test(e.after) && !t || /\n/.test(e.selection)) {
            e.before = e.before.replace(/[ ]{4}$/, (function(t) {
                return e.selection = t + e.selection,
                ""
            }
            ));
            var n = 1
              , i = 1;
            /(\n|^)(\t|[ ]{4,}).*\n$/.test(e.before) && (n = 0),
            /^\n(\t|[ ]{4,})/.test(e.after) && (i = 0),
            e.skipLines(n, i),
            e.selection ? /^[ ]{0,3}\S/m.test(e.selection) ? /\n/.test(e.selection) ? e.selection = e.selection.replace(/^/gm, "    ") : e.before += "    " : e.selection = e.selection.replace(/^[ ]{4}/gm, "") : (e.startTag = "    ",
            e.selection = "enter code here")
        } else
            e.trimWhitespace(),
            e.findTags(/`/, /`/),
            e.startTag || e.endTag ? e.endTag && !e.startTag ? (e.before += e.endTag,
            e.endTag = "") : e.startTag = e.endTag = "" : (e.startTag = e.endTag = "`",
            e.selection || (e.selection = "enter code here"))
    }
    ,
    S.doList = function(e, t, n) {
        var i = /(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/
          , r = /^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/
          , o = "-"
          , s = 1
          , a = function() {
            var e;
            return n ? (e = " " + s + ". ",
            s++) : e = " " + o + " ",
            e
        }
          , l = function(e) {
            return void 0 === n && (n = /^\s*\d/.test(e)),
            e = e.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm, (function() {
                return a()
            }
            ))
        };
        if (e.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/, null),
        !e.before || /\n$/.test(e.before) || /^\n/.test(e.startTag) || (e.before += e.startTag,
        e.startTag = ""),
        e.startTag) {
            var c = /\d+[.]/.test(e.startTag);
            if (e.startTag = "",
            e.selection = e.selection.replace(/\n[ ]{4}/g, "\n"),
            this.unwrap(e),
            e.skipLines(),
            c && (e.after = e.after.replace(r, l)),
            n == c)
                return
        }
        var u = 1;
        e.before = e.before.replace(i, (function(e) {
            return /^\s*([*+-])/.test(e) && (o = h.$1),
            u = /[^\n]\n\n[^\n]/.test(e) ? 1 : 0,
            l(e)
        }
        )),
        e.selection || (e.selection = "List item");
        var d = a()
          , f = 1;
        e.after = e.after.replace(r, (function(e) {
            return f = /[^\n]\n\n[^\n]/.test(e) ? 1 : 0,
            l(e)
        }
        )),
        e.trimWhitespace(!0),
        e.skipLines(u, f, !0),
        e.startTag = d;
        var m = d.replace(/./g, " ");
        this.wrap(e, p.lineLength - m.length),
        e.selection = e.selection.replace(/\n/g, "\n" + m)
    }
    ,
    S.doHeading = function(e) {
        if (e.selection = e.selection.replace(/\s+/g, " "),
        e.selection = e.selection.replace(/(^\s+|\s+$)/g, ""),
        !e.selection)
            return e.startTag = "## ",
            e.selection = "Heading",
            void (e.endTag = "");
        var t = 0;
        e.findTags(/#+[ ]*/, /[ ]*#+/),
        /#+/.test(e.startTag) && (t = h.lastMatch.length),
        e.startTag = e.endTag = "",
        e.findTags(null, /\s?(-+|=+)/),
        /=+/.test(e.endTag) && (t = 1),
        /-+/.test(e.endTag) && (t = 2),
        e.startTag = e.endTag = "",
        e.skipLines(1, 1);
        var n = 0 == t ? 2 : t - 1;
        if (n > 0) {
            var i = n >= 2 ? "-" : "="
              , r = e.selection.length;
            for (r > p.lineLength && (r = p.lineLength),
            e.endTag = "\n"; r--; )
                e.endTag += i
        }
    }
    ,
    S.doHorizontalRule = function(e) {
        e.startTag = "----------\n",
        e.selection = "",
        e.skipLines(2, 1, !0)
    }
}(),
function() {
    function e(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }
    function t(e) {
        return e.replace(/\s+$/g, "")
    }
    function n(e) {
        return e.replace(new RegExp("^(\\t|[ ]{1,4})","gm"), "")
    }
    function i(e, t) {
        return -1 != e.indexOf(t)
    }
    function r(e, t) {
        return e.replace(/<[^>]*>?/gi, (function(e) {
            return e.match(t) ? e : ""
        }
        ))
    }
    function o(e, t) {
        for (var n = {}, i = 0; i < e.length; i++)
            n[e[i]] = e[i];
        for (i = 0; i < t.length; i++)
            n[t[i]] = t[i];
        var r = [];
        for (var o in n)
            n.hasOwnProperty(o) && r.push(n[o]);
        return r
    }
    function s(e) {
        return "\x02" != e.charAt(0) && (e = "\x02" + e),
        "\x03" != e.charAt(e.length - 1) && (e += "\x03"),
        e
    }
    function a(e) {
        return "\x02" == e.charAt(0) && (e = e.substr(1)),
        "\x03" == e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)),
        e
    }
    function l(e, t) {
        return r(c(e, t), m)
    }
    function c(e, t) {
        var n = t.blockGamutHookCallback(e);
        return n = (n = h(n)).replace(/~D/g, "$$").replace(/~T/g, "~"),
        n = t.previousPostConversion(n)
    }
    function u(e) {
        return e.replace(/\\\|/g, "~I").replace(/\\:/g, "~i")
    }
    function d(e) {
        return e.replace(/~I/g, "|").replace(/~i/g, ":")
    }
    function h(e) {
        return e = e.replace(/~E(\d+)E/g, (function(e, t) {
            var n = parseInt(t);
            return String.fromCharCode(n)
        }
        ))
    }
    function f(e) {
        return e.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    }
    function p(e, t) {
        var n = t;
        return n = (n = (n = (n = (n = (n = (n = n.replace(/&\#8220;/g, '"')).replace(/&\#8221;/g, '"')).replace(/&\#8216;/g, "'")).replace(/&\#8217;/g, "'")).replace(/&\#8212;/g, "---")).replace(/&\#8211;/g, "--")).replace(/&\#8230;/g, "...")
    }
    var m = new RegExp(["^(<\\/?(a|abbr|acronym|applet|area|b|basefont|", "bdo|big|button|cite|code|del|dfn|em|figcaption|", "font|i|iframe|img|input|ins|kbd|label|map|", "mark|meter|object|param|progress|q|ruby|rp|rt|s|", "samp|script|select|small|span|strike|strong|", "sub|sup|textarea|time|tt|u|var|wbr)[^>]*>|", "<(br)\\s?\\/?>)$"].join(""),"i");
    Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
        for (var t = 0; t < this.length; t++)
            if (this[t] == e)
                return t;
        return -1
    }
    ),
    Markdown.Extra = function() {
        this.converter = null,
        this.hashBlocks = [],
        this.footnotes = {},
        this.usedFootnotes = [],
        this.attributeBlocks = !1,
        this.googleCodePrettify = !1,
        this.highlightJs = !1,
        this.tableClass = "",
        this.tabWidth = 4
    }
    ,
    Markdown.Extra.init = function(e, t) {
        var n = new Markdown.Extra
          , r = []
          , o = []
          , s = []
          , a = ["unHashExtraBlocks"];
        return (t = t || {}).extensions = t.extensions || ["all"],
        i(t.extensions, "all") && (t.extensions = ["tables", "fenced_code_gfm", "def_list", "attr_list", "footnotes", "smartypants", "strikethrough", "newlines"]),
        o.push("wrapHeaders"),
        i(t.extensions, "attr_list") && (r.push("hashFcbAttributeBlocks"),
        o.push("hashHeaderAttributeBlocks"),
        a.push("applyAttributeBlocks"),
        n.attributeBlocks = !0),
        i(t.extensions, "fenced_code_gfm") && (o.push("fencedCodeBlocks"),
        r.push("fencedCodeBlocks")),
        i(t.extensions, "tables") && o.push("tables"),
        i(t.extensions, "def_list") && o.push("definitionLists"),
        i(t.extensions, "footnotes") && (r.push("stripFootnoteDefinitions"),
        o.push("doFootnotes"),
        a.push("printFootnotes")),
        i(t.extensions, "smartypants") && a.push("runSmartyPants"),
        i(t.extensions, "strikethrough") && s.push("strikethrough"),
        i(t.extensions, "newlines") && s.push("newlines"),
        e.hooks.chain("postNormalization", (function(e) {
            return n.doTransform(r, e) + "\n"
        }
        )),
        e.hooks.chain("preBlockGamut", (function(e, t) {
            return n.blockGamutHookCallback = t,
            e = u(e),
            e = d(e = n.doTransform(o, e) + "\n")
        }
        )),
        e.hooks.chain("postSpanGamut", (function(e) {
            return n.doTransform(s, e)
        }
        )),
        n.previousPostConversion = e.hooks.postConversion,
        e.hooks.chain("postConversion", (function(e) {
            return e = n.doTransform(a, e),
            n.hashBlocks = [],
            n.footnotes = {},
            n.usedFootnotes = [],
            e
        }
        )),
        "highlighter"in t && (n.googleCodePrettify = "prettify" === t.highlighter,
        n.highlightJs = "highlight" === t.highlighter),
        "table_class"in t && (n.tableClass = t.table_class),
        n.converter = e,
        n
    }
    ,
    Markdown.Extra.prototype.doTransform = function(e, t) {
        for (var n = 0; n < e.length; n++)
            t = this[e[n]](t);
        return t
    }
    ,
    Markdown.Extra.prototype.hashExtraBlock = function(e) {
        return "\n<p>~X" + (this.hashBlocks.push(e) - 1) + "X</p>\n"
    }
    ,
    Markdown.Extra.prototype.hashExtraInline = function(e) {
        return "~X" + (this.hashBlocks.push(e) - 1) + "X"
    }
    ,
    Markdown.Extra.prototype.unHashExtraBlocks = function(e) {
        function t() {
            var i = !1;
            e = e.replace(/(?:<p>)?~X(\d+)X(?:<\/p>)?/g, (function(e, t) {
                i = !0;
                var r = parseInt(t, 10);
                return n.hashBlocks[r]
            }
            )),
            !0 === i && t()
        }
        var n = this;
        return t(),
        e
    }
    ,
    Markdown.Extra.prototype.wrapHeaders = function(e) {
        function t(e) {
            return "\n" + e + "\n"
        }
        return e = (e = (e = e.replace(/^.+[ \t]*\n=+[ \t]*\n+/gm, t)).replace(/^.+[ \t]*\n-+[ \t]*\n+/gm, t)).replace(/^\#{1,6}[ \t]*.+?[ \t]*\#*\n+/gm, t)
    }
    ;
    var g = "\\{[ \\t]*((?:[#.][-_:a-zA-Z0-9]+[ \\t]*)+)\\}"
      , v = new RegExp("^(#{1,6}.*#{0,6})[ \\t]+" + g + "[ \\t]*(?:\\n|0x03)","gm")
      , y = new RegExp("^(.*)[ \\t]+" + g + "[ \\t]*\\n(?=[\\-|=]+\\s*(?:\\n|0x03))","gm")
      , b = new RegExp("^(```[ \\t]*[^{\\s]*)[ \\t]+" + g + "[ \\t]*\\n(?=([\\s\\S]*?)\\n```[ \\t]*(\\n|0x03))","gm");
    Markdown.Extra.prototype.hashHeaderAttributeBlocks = function(e) {
        function t(e, t, i) {
            return "<p>~XX" + (n.hashBlocks.push(i) - 1) + "XX</p>\n" + t + "\n"
        }
        var n = this;
        return e = (e = e.replace(v, t)).replace(y, t)
    }
    ,
    Markdown.Extra.prototype.hashFcbAttributeBlocks = function(e) {
        function t(e, t, i) {
            return "<p>~XX" + (n.hashBlocks.push(i) - 1) + "XX</p>\n" + t + "\n"
        }
        var n = this;
        return e.replace(b, t)
    }
    ,
    Markdown.Extra.prototype.applyAttributeBlocks = function(e) {
        var t = this
          , n = new RegExp('<p>~XX(\\d+)XX</p>[\\s]*(?:<(h[1-6]|pre)(?: +class="(\\S+)")?(>[\\s\\S]*?</\\2>))',"gm");
        return e = e.replace(n, (function(e, n, i, r, s) {
            if (!i)
                return "";
            for (var a = parseInt(n, 10), l = t.hashBlocks[a], c = l.match(/#[^\s#.]+/g) || [], u = c[0] ? ' id="' + c[0].substr(1, c[0].length - 1) + '"' : "", d = l.match(/\.[^\s#.]+/g) || [], h = 0; h < d.length; h++)
                d[h] = d[h].substr(1, d[h].length - 1);
            var f = "";
            return r && (d = o(d, [r])),
            d.length > 0 && (f = ' class="' + d.join(" ") + '"'),
            "<" + i + u + f + s
        }
        )),
        e
    }
    ,
    Markdown.Extra.prototype.tables = function(t) {
        function n(t, n, r, o) {
            n = n.replace(/^ *[|]/m, ""),
            r = r.replace(/^ *[|]/m, ""),
            o = o.replace(/^ *[|]/gm, ""),
            n = n.replace(/[|] *$/m, ""),
            r = r.replace(/[|] *$/m, ""),
            o = o.replace(/[|] *$/gm, ""),
            alignspecs = r.split(/ *[|] */),
            align = [];
            for (var s = 0; s < alignspecs.length; s++) {
                var a = alignspecs[s];
                a.match(/^ *-+: *$/m) ? align[s] = ' style="text-align:right;"' : a.match(/^ *:-+: *$/m) ? align[s] = ' style="text-align:center;"' : a.match(/^ *:-+ *$/m) ? align[s] = ' style="text-align:left;"' : align[s] = ""
            }
            var c = n.split(/ *[|] */)
              , u = c.length
              , d = ["<table", i.tableClass ? ' class="' + i.tableClass + '"' : "", ">\n", "<thead>\n", "<tr>\n"].join("");
            for (s = 0; s < u; s++) {
                var h = l(e(c[s]), i);
                d += ["  <th", align[s], ">", h, "</th>\n"].join("")
            }
            d += "</tr>\n</thead>\n";
            var f = o.split("\n");
            for (s = 0; s < f.length; s++)
                if (!f[s].match(/^\s*$/)) {
                    for (var p = f[s].split(/ *[|] */), m = u - p.length, g = 0; g < m; g++)
                        p.push("");
                    for (d += "<tr>\n",
                    g = 0; g < u; g++) {
                        var v = l(e(p[g]), i);
                        d += ["  <td", align[g], ">", v, "</td>\n"].join("")
                    }
                    d += "</tr>\n"
                }
            return d += "</table>\n",
            i.hashExtraBlock(d)
        }
        var i = this
          , r = new RegExp(["^", "[ ]{0,3}", "[|]", "(.+)\\n", "[ ]{0,3}", "[|]([ ]*[-:]+[-| :]*)\\n", "(", "(?:[ ]*[|].*\\n?)*", ")", "(?:\\n|$)"].join(""),"gm")
          , o = new RegExp(["^", "[ ]{0,3}", "(\\S.*[|].*)\\n", "[ ]{0,3}", "([-:]+[ ]*[|][-| :]*)\\n", "(", "(?:.*[|].*\\n?)*", ")", "(?:\\n|$)"].join(""),"gm");
        return t = (t = t.replace(r, n)).replace(o, n)
    }
    ,
    Markdown.Extra.prototype.stripFootnoteDefinitions = function(e) {
        var t = this;
        return e = e.replace(/\n[ ]{0,3}\[\^(.+?)\]\:[ \t]*\n?([\s\S]*?)\n{1,2}((?=\n[ ]{0,3}\S)|$)/g, (function(e, n, i) {
            return n = f(n),
            i = (i += "\n").replace(/^[ ]{0,3}/g, ""),
            t.footnotes[n] = i,
            "\n"
        }
        ))
    }
    ,
    Markdown.Extra.prototype.doFootnotes = function(e) {
        var t = this;
        if (!0 === t.isConvertingFootnote)
            return e;
        var n = 0;
        return e = e.replace(/\[\^(.+?)\]/g, (function(e, i) {
            var r = f(i);
            if (void 0 === t.footnotes[r])
                return e;
            n++,
            t.usedFootnotes.push(r);
            var o = '<a href="#fn:' + r + '" id="fnref:' + r + '" title="See footnote" class="footnote">' + n + "</a>";
            return t.hashExtraInline(o)
        }
        ))
    }
    ,
    Markdown.Extra.prototype.printFootnotes = function(e) {
        var t = this;
        if (0 === t.usedFootnotes.length)
            return e;
        e += '\n\n<div class="footnotes">\n<hr>\n<ol>\n\n';
        for (var n = 0; n < t.usedFootnotes.length; n++) {
            var i = t.usedFootnotes[n]
              , r = t.footnotes[i];
            t.isConvertingFootnote = !0;
            var o = l(r, t);
            delete t.isConvertingFootnote,
            e += '<li id="fn:' + i + '">' + o + ' <a href="#fnref:' + i + '" title="Return to article" class="reversefootnote">&#8617;</a></li>\n\n'
        }
        return e += "</ol>\n</div>"
    }
    ,
    Markdown.Extra.prototype.fencedCodeBlocks = function(e) {
        function t(e) {
            return e = (e = (e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/~D/g, "$$")).replace(/~T/g, "~")
        }
        var n = this;
        return e = e.replace(/(?:^|\n)```[ \t]*(\S*)[ \t]*\n([\s\S]*?)\n```[ \t]*(?=\n)/g, (function(e, i, r) {
            var o = i
              , s = r
              , a = n.googleCodePrettify ? ' class="prettyprint"' : ""
              , l = "";
            o && (l = n.googleCodePrettify || n.highlightJs ? ' class="language-' + o + '"' : ' class="' + o + '"');
            var c = ["<pre", a, "><code", l, ">", t(s), "</code></pre>"].join("");
            return n.hashExtraBlock(c)
        }
        ))
    }
    ,
    Markdown.Extra.prototype.educatePants = function(e) {
        var t = this
          , n = ""
          , i = 0;
        e.replace(/(?:<!--[\s\S]*?-->)|(<)([a-zA-Z1-6]+)([^\n]*?>)([\s\S]*?)(<\/\2>)/g, (function(r, o, s, a, l, c, u) {
            var d = e.substring(i, u);
            n += t.applyPants(d),
            t.smartyPantsLastChar = n.substring(n.length - 1),
            i = u + r.length,
            o ? (/code|kbd|pre|script|noscript|iframe|math|ins|del|pre/i.test(s) ? t.smartyPantsLastChar = l.substring(l.length - 1) : l = t.educatePants(l),
            n += o + s + a + l + c) : n += r
        }
        ));
        var r = e.substring(i);
        return n += t.applyPants(r),
        t.smartyPantsLastChar = n.substring(n.length - 1),
        n
    }
    ,
    Markdown.Extra.prototype.applyPants = function(e) {
        return e = (e = (e = e.replace(/---/g, "&#8212;").replace(/--/g, "&#8211;")).replace(/\.\.\./g, "&#8230;").replace(/\.\s\.\s\./g, "&#8230;")).replace(/``/g, "&#8220;").replace(/''/g, "&#8221;"),
        /^'$/.test(e) ? /\S/.test(this.smartyPantsLastChar) ? "&#8217;" : "&#8216;" : /^"$/.test(e) ? /\S/.test(this.smartyPantsLastChar) ? "&#8221;" : "&#8220;" : e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace(/^'(?=[!"#\$\%'()*+,\-.\/:;<=>?\@\[\\]\^_`{|}~]\B)/, "&#8217;")).replace(/^"(?=[!"#\$\%'()*+,\-.\/:;<=>?\@\[\\]\^_`{|}~]\B)/, "&#8221;")).replace(/"'(?=\w)/g, "&#8220;&#8216;")).replace(/'"(?=\w)/g, "&#8216;&#8220;")).replace(/'(?=\d{2}s)/g, "&#8217;")).replace(/(\s|&nbsp;|--|&[mn]dash;|&\#8211;|&\#8212;|&\#x201[34];)'(?=\w)/g, "$1&#8216;")).replace(/([^\s\[\{\(\-])'/g, "$1&#8217;")).replace(/'(?=\s|s\b)/g, "&#8217;")).replace(/'/g, "&#8216;")).replace(/(\s|&nbsp;|--|&[mn]dash;|&\#8211;|&\#8212;|&\#x201[34];)"(?=\w)/g, "$1&#8220;")).replace(/([^\s\[\{\(\-])"/g, "$1&#8221;")).replace(/"(?=\s)/g, "&#8221;")).replace(/"/gi, "&#8220;")
    }
    ,
    Markdown.Extra.prototype.runSmartyPants = function(e) {
        return this.smartyPantsLastChar = "",
        e = (e = this.educatePants(e)).replace(/(<([a-zA-Z1-6]+)\b([^\n>]*?)(\/)?>)/g, p)
    }
    ,
    Markdown.Extra.prototype.definitionLists = function(t) {
        var n = new RegExp(["(\\x02\\n?|\\n\\n)", "(?:", "(", "(", "[ ]{0,3}", "((?:[ \\t]*\\S.*\\n)+)", "\\n?", "[ ]{0,3}:[ ]+", ")", "([\\s\\S]+?)", "(", "(?=\\0x03)", "|", "(?=", "\\n{2,}", "(?=\\S)", "(?!", "[ ]{0,3}", "(?:\\S.*\\n)+?", "\\n?", "[ ]{0,3}:[ ]+", ")", "(?!", "[ ]{0,3}:[ ]+", ")", ")", ")", ")", ")"].join(""),"gm")
          , i = this;
        return a(t = (t = s(t)).replace(n, (function(t, n, r) {
            var o = e(i.processDefListItems(r));
            return o = "<dl>\n" + o + "\n</dl>",
            n + i.hashExtraBlock(o) + "\n\n"
        }
        )))
    }
    ,
    Markdown.Extra.prototype.processDefListItems = function(i) {
        var r = this
          , o = new RegExp(["(\\x02\\n?|\\n\\n+)", "(", "[ ]{0,3}", "(?![:][ ]|[ ])", "(?:\\S.*\\n)+?", ")", "(?=\\n?[ ]{0,3}:[ ])"].join(""),"gm")
          , u = new RegExp(["\\n(\\n+)?", "(", "[ ]{0,3}", "[:][ ]+", ")", "([\\s\\S]+?)", "(?=\\n*", "(?:", "\\n[ ]{0,3}[:][ ]|", "<dt>|\\x03", ")", ")"].join(""),"gm");
        return i = (i = (i = s(i)).replace(/\n{2,}(?=\\x03)/, "\n")).replace(o, (function(t, n, i) {
            for (var o = e(i).split("\n"), s = "", a = 0; a < o.length; a++) {
                var c = o[a];
                s += "\n<dt>" + (c = l(e(c), r)) + "</dt>"
            }
            return s + "\n"
        }
        )),
        a(i = i.replace(u, (function(e, i, o, s) {
            return "\n<dd>" + (s = i || s.match(/\n{2,}/) ? "\n" + c(s = n(s = Array(o.length + 1).join(" ") + s) + "\n\n", r) + "\n" : l(n(s = t(s)), r)) + "</dd>\n"
        }
        )))
    }
    ,
    Markdown.Extra.prototype.strikethrough = function(e) {
        return e.replace(/([\W_]|^)~T~T(?=\S)([^\r]*?\S[\*_]*)~T~T([\W_]|$)/g, "$1<del>$2</del>$3")
    }
    ,
    Markdown.Extra.prototype.newlines = function(e) {
        return e.replace(/(<(?:br|\/li)>)?\n/g, (function(e, t) {
            return t ? e : " <br>\n"
        }
        ))
    }
}(),
function() {
    function e(e) {
        return e.replace(/<[^>]*>?/gi, t)
    }
    function t(e) {
        return e.match(o) || e.match(s) || e.match(a) || e.match(l) ? e : ""
    }
    function n(e) {
        if ("" == e)
            return "";
        var t, n, i = /<\/?\w+[^>]*(\s|$|>)/g, r = e.toLowerCase().match(i), o = (r || []).length;
        if (0 == o)
            return e;
        for (var s, a = "<p><img><br><li><hr>", l = [], c = [], u = !1, d = 0; d < o; d++)
            if (t = r[d].replace(/<\/?(\w+).*/, "$1"),
            !(l[d] || a.search("<" + t + ">") > -1)) {
                if (n = r[d],
                s = -1,
                !/^<\//.test(n))
                    for (var h = d + 1; h < o; h++)
                        if (!l[h] && r[h] == "</" + t + ">") {
                            s = h;
                            break
                        }
                -1 == s ? u = c[d] = !0 : l[s] = !0
            }
        if (!u)
            return e;
        d = 0;
        return e = e.replace(i, (function(e) {
            var t = c[d] ? "" : e;
            return d++,
            t
        }
        )),
        e
    }
    var i, r;
    "object" == typeof exports && "function" == typeof require ? (i = exports,
    r = require("./Markdown.Converter").Converter) : (i = window.Markdown,
    r = i.Converter),
    i.getSanitizingConverter = function() {
        var t = new r;
        return t.hooks.chain("postConversion", e),
        t.hooks.chain("postConversion", n),
        t
    }
    ;
    var o = /^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i
      , s = /^(<a\shref="(https?:(\/\/|\/)|ftp:(\/\/|\/)|mailto:|magnet:)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i
      , a = /^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i
      , l = /^(<pre(\sclass="prettyprint linenums")?>|<\/pre>)$/i
}(),
function() {
    this.renderPagedown = function() {
        return $(".wmd-output").each((function() {
            var e, t;
            return t = Markdown.getSanitizingConverter(),
            e = $(this).html(),
            $(this).html(t.makeHtml(e))
        }
        ))
    }
    ,
    this.createPagedownEditor = function(e, t) {
        return null == t && (t = "body"),
        $(e, t).each((function(e, t) {
            var n, i, r, o, s;
            if (!$(t).data("is_rendered"))
                return n = $(t).attr("id").split("wmd-input")[1],
                null != t.dataset.urlMapping && (t.xiUrlMappingInput = document.querySelector(t.dataset.urlMapping),
                t.xiUrlMapping = JSON.parse(t.xiUrlMappingInput.value)),
                (i = Markdown.getSanitizingConverter()).hooks.set("preConversion", (function(e) {
                    var n, i;
                    return null != t.xiUrlMapping ? (i = /(s3|upload):\/\/[-a-zA-Z0-9.\/_]*/g,
                    n = t.xiUrlMapping,
                    e.replace(i, (function(e) {
                        return n.hasOwnProperty(e) ? n[e] : e
                    }
                    ))) : e
                }
                )),
                Markdown.Extra.init(i, {
                    extensions: ["tables", "fenced_code_gfm", "def_list", "attr_list", "footnotes", "smartypants", "strikethrough"]
                }),
                s = {
                    handler: function() {
                        return window.open("http://daringfireball.net/projects/markdown/syntax"),
                        !1
                    },
                    title: I18n.t("components.markdown_editor.help")
                },
                o = new Markdown.Editor(i,n,s),
                null != (r = $(t).data("upload-dropzone")) ? (o.hooks.set("insertImageDialog", (function(e) {
                    var n, i;
                    return i = JSON.parse(document.querySelector(t.dataset.otherFiles).value),
                    n = createPagedownImageDialog(document.querySelector(r), e, i),
                    $(n).modal("show"),
                    !0
                }
                )),
                o.run()) : (o.run(),
                document.getElementById("wmd-image-button" + n).style.display = "none"),
                $(t).data("is_rendered", !0)
        }
        ))
    }
    ,
    ready((function() {
        return renderPagedown(),
        createPagedownEditor(".wmd-input"),
        $("[id^='wmd-button-bar'] button").each((function() {
            return $(this).attr("type", "button")
        }
        ))
    }
    ))
}
.call(this);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
}()
  , Emitter = function() {
    function e() {
        _classCallCheck(this, e)
    }
    return _createClass(e, [{
        key: "on",
        value: function(e, t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks[e] || (this._callbacks[e] = []),
            this._callbacks[e].push(t),
            this
        }
    }, {
        key: "emit",
        value: function(e) {
            this._callbacks = this._callbacks || {};
            var t = this._callbacks[e];
            if (t) {
                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                    i[r - 1] = arguments[r];
                var o = t
                  , s = !0
                  , a = 0;
                for (o = s ? o : o[Symbol.iterator](); ; ) {
                    var l;
                    if (s) {
                        if (a >= o.length)
                            break;
                        l = o[a++]
                    } else {
                        if ((a = o.next()).done)
                            break;
                        l = a.value
                    }
                    l.apply(this, i)
                }
            }
            return this
        }
    }, {
        key: "off",
        value: function(e, t) {
            if (!this._callbacks || 0 === arguments.length)
                return this._callbacks = {},
                this;
            var n = this._callbacks[e];
            if (!n)
                return this;
            if (1 === arguments.length)
                return delete this._callbacks[e],
                this;
            for (var i = 0; i < n.length; i++) {
                if (n[i] === t) {
                    n.splice(i, 1);
                    break
                }
            }
            return this
        }
    }]),
    e
}()
  , Dropzone = function() {
    function e(t, n) {
        _classCallCheck(this, e);
        var i = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this))
          , r = void 0
          , o = void 0;
        if (i.element = t,
        i.version = e.version,
        i.defaultOptions.previewTemplate = i.defaultOptions.previewTemplate.replace(/\n*/g, ""),
        i.clickableElements = [],
        i.listeners = [],
        i.files = [],
        "string" == typeof i.element && (i.element = document.querySelector(i.element)),
        !i.element || null == i.element.nodeType)
            throw new Error("Invalid dropzone element.");
        if (i.element.dropzone)
            throw new Error("Dropzone already attached.");
        e.instances.push(i),
        i.element.dropzone = i;
        var s, a = null != (o = e.optionsForElement(i.element)) ? o : {};
        if (i.options = e.extend({}, i.defaultOptions, a, null != n ? n : {}),
        i.options.forceFallback || !e.isBrowserSupported())
            return s = i.options.fallback.call(i),
            _possibleConstructorReturn(i, s);
        if (null == i.options.url && (i.options.url = i.element.getAttribute("action")),
        !i.options.url)
            throw new Error("No URL provided.");
        if (i.options.acceptedFiles && i.options.acceptedMimeTypes)
            throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
        if (i.options.uploadMultiple && i.options.chunking)
            throw new Error("You cannot set both: uploadMultiple and chunking.");
        return i.options.acceptedMimeTypes && (i.options.acceptedFiles = i.options.acceptedMimeTypes,
        delete i.options.acceptedMimeTypes),
        null != i.options.renameFilename && (i.options.renameFile = function(e) {
            return i.options.renameFilename.call(i, e.name, e)
        }
        ),
        i.options.method = i.options.method.toUpperCase(),
        (r = i.getExistingFallback()) && r.parentNode && r.parentNode.removeChild(r),
        !1 !== i.options.previewsContainer && (i.options.previewsContainer ? i.previewsContainer = e.getElement(i.options.previewsContainer, "previewsContainer") : i.previewsContainer = i.element),
        i.options.clickable && (!0 === i.options.clickable ? i.clickableElements = [i.element] : i.clickableElements = e.getElements(i.options.clickable, "clickable")),
        i.init(),
        i
    }
    return _inherits(e, Emitter),
    _createClass(e, null, [{
        key: "initClass",
        value: function() {
            this.prototype.Emitter = Emitter,
            this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"],
            this.prototype.defaultOptions = {
                url: null,
                method: "post",
                withCredentials: !1,
                timeout: 3e4,
                parallelUploads: 2,
                uploadMultiple: !1,
                chunking: !1,
                forceChunking: !1,
                chunkSize: 2e6,
                parallelChunkUploads: !1,
                retryChunks: !1,
                retryChunksLimit: 3,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                thumbnailMethod: "crop",
                resizeWidth: null,
                resizeHeight: null,
                resizeMimeType: null,
                resizeQuality: .8,
                resizeMethod: "contain",
                filesizeBase: 1e3,
                maxFiles: null,
                headers: null,
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                hiddenInputContainer: "body",
                capture: null,
                renameFilename: null,
                renameFile: null,
                forceFallback: !1,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictUploadCanceled: "Upload canceled.",
                dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                dictFileSizeUnits: {
                    tb: "TB",
                    gb: "GB",
                    mb: "MB",
                    kb: "KB",
                    b: "b"
                },
                init: function() {},
                params: function(e, t, n) {
                    if (n)
                        return {
                            dzuuid: n.file.upload.uuid,
                            dzchunkindex: n.index,
                            dztotalfilesize: n.file.size,
                            dzchunksize: this.options.chunkSize,
                            dztotalchunkcount: n.file.upload.totalChunkCount,
                            dzchunkbyteoffset: n.index * this.options.chunkSize
                        }
                },
                accept: function(e, t) {
                    return t()
                },
                chunksUploaded: function(e, t) {
                    t()
                },
                fallback: function() {
                    var t = void 0;
                    this.element.className = this.element.className + " dz-browser-not-supported";
                    var n = this.element.getElementsByTagName("div")
                      , i = !0
                      , r = 0;
                    for (n = i ? n : n[Symbol.iterator](); ; ) {
                        var o;
                        if (i) {
                            if (r >= n.length)
                                break;
                            o = n[r++]
                        } else {
                            if ((r = n.next()).done)
                                break;
                            o = r.value
                        }
                        var s = o;
                        if (/(^| )dz-message($| )/.test(s.className)) {
                            t = s,
                            s.className = "dz-message";
                            break
                        }
                    }
                    t || (t = e.createElement('<div class="dz-message"><span></span></div>'),
                    this.element.appendChild(t));
                    var a = t.getElementsByTagName("span")[0];
                    return a && (null != a.textContent ? a.textContent = this.options.dictFallbackMessage : null != a.innerText && (a.innerText = this.options.dictFallbackMessage)),
                    this.element.appendChild(this.getFallbackForm())
                },
                resize: function(e, t, n, i) {
                    var r = {
                        srcX: 0,
                        srcY: 0,
                        srcWidth: e.width,
                        srcHeight: e.height
                    }
                      , o = e.width / e.height;
                    null == t && null == n ? (t = r.srcWidth,
                    n = r.srcHeight) : null == t ? t = n * o : null == n && (n = t / o);
                    var s = (t = Math.min(t, r.srcWidth)) / (n = Math.min(n, r.srcHeight));
                    if (r.srcWidth > t || r.srcHeight > n)
                        if ("crop" === i)
                            o > s ? (r.srcHeight = e.height,
                            r.srcWidth = r.srcHeight * s) : (r.srcWidth = e.width,
                            r.srcHeight = r.srcWidth / s);
                        else {
                            if ("contain" !== i)
                                throw new Error("Unknown resizeMethod '" + i + "'");
                            o > s ? n = t / o : t = n * o
                        }
                    return r.srcX = (e.width - r.srcWidth) / 2,
                    r.srcY = (e.height - r.srcHeight) / 2,
                    r.trgWidth = t,
                    r.trgHeight = n,
                    r
                },
                transformFile: function(e, t) {
                    return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e)
                },
                previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                drop: function() {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragstart: function() {},
                dragend: function() {
                    return this.element.classList.remove("dz-drag-hover")
                },
                dragenter: function() {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragover: function() {
                    return this.element.classList.add("dz-drag-hover")
                },
                dragleave: function() {
                    return this.element.classList.remove("dz-drag-hover")
                },
                paste: function() {},
                reset: function() {
                    return this.element.classList.remove("dz-started")
                },
                addedfile: function(t) {
                    var n = this;
                    if (this.element === this.previewsContainer && this.element.classList.add("dz-started"),
                    this.previewsContainer) {
                        t.previewElement = e.createElement(this.options.previewTemplate.trim()),
                        t.previewTemplate = t.previewElement,
                        this.previewsContainer.appendChild(t.previewElement);
                        var i = t.previewElement.querySelectorAll("[data-dz-name]")
                          , r = !0
                          , o = 0;
                        for (i = r ? i : i[Symbol.iterator](); ; ) {
                            var s;
                            if (r) {
                                if (o >= i.length)
                                    break;
                                s = i[o++]
                            } else {
                                if ((o = i.next()).done)
                                    break;
                                s = o.value
                            }
                            var a = s;
                            a.textContent = t.name
                        }
                        var l = t.previewElement.querySelectorAll("[data-dz-size]")
                          , c = !0
                          , u = 0;
                        for (l = c ? l : l[Symbol.iterator](); ; ) {
                            if (c) {
                                if (u >= l.length)
                                    break;
                                a = l[u++]
                            } else {
                                if ((u = l.next()).done)
                                    break;
                                a = u.value
                            }
                            a.innerHTML = this.filesize(t.size)
                        }
                        this.options.addRemoveLinks && (t._removeLink = e.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"),
                        t.previewElement.appendChild(t._removeLink));
                        var d = function(i) {
                            return i.preventDefault(),
                            i.stopPropagation(),
                            t.status === e.UPLOADING ? e.confirm(n.options.dictCancelUploadConfirmation, (function() {
                                return n.removeFile(t)
                            }
                            )) : n.options.dictRemoveFileConfirmation ? e.confirm(n.options.dictRemoveFileConfirmation, (function() {
                                return n.removeFile(t)
                            }
                            )) : n.removeFile(t)
                        }
                          , h = t.previewElement.querySelectorAll("[data-dz-remove]")
                          , f = !0
                          , p = 0;
                        for (h = f ? h : h[Symbol.iterator](); ; ) {
                            var m;
                            if (f) {
                                if (p >= h.length)
                                    break;
                                m = h[p++]
                            } else {
                                if ((p = h.next()).done)
                                    break;
                                m = p.value
                            }
                            m.addEventListener("click", d)
                        }
                    }
                },
                removedfile: function(e) {
                    return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement),
                    this._updateMaxFilesReachedClass()
                },
                thumbnail: function(e, t) {
                    if (e.previewElement) {
                        e.previewElement.classList.remove("dz-file-preview");
                        var n = e.previewElement.querySelectorAll("[data-dz-thumbnail]")
                          , i = !0
                          , r = 0;
                        for (n = i ? n : n[Symbol.iterator](); ; ) {
                            var o;
                            if (i) {
                                if (r >= n.length)
                                    break;
                                o = n[r++]
                            } else {
                                if ((r = n.next()).done)
                                    break;
                                o = r.value
                            }
                            var s = o;
                            s.alt = e.name,
                            s.src = t
                        }
                        return setTimeout((function() {
                            return e.previewElement.classList.add("dz-image-preview")
                        }
                        ), 1)
                    }
                },
                error: function(e, t) {
                    if (e.previewElement) {
                        e.previewElement.classList.add("dz-error"),
                        "String" != typeof t && t.error && (t = t.error);
                        var n = e.previewElement.querySelectorAll("[data-dz-errormessage]")
                          , i = !0
                          , r = 0;
                        for (n = i ? n : n[Symbol.iterator](); ; ) {
                            var o;
                            if (i) {
                                if (r >= n.length)
                                    break;
                                o = n[r++]
                            } else {
                                if ((r = n.next()).done)
                                    break;
                                o = r.value
                            }
                            o.textContent = t
                        }
                    }
                },
                errormultiple: function() {},
                processing: function(e) {
                    if (e.previewElement && (e.previewElement.classList.add("dz-processing"),
                    e._removeLink))
                        return e._removeLink.innerHTML = this.options.dictCancelUpload
                },
                processingmultiple: function() {},
                uploadprogress: function(e, t) {
                    if (e.previewElement) {
                        var n = e.previewElement.querySelectorAll("[data-dz-uploadprogress]")
                          , i = !0
                          , r = 0;
                        for (n = i ? n : n[Symbol.iterator](); ; ) {
                            var o;
                            if (i) {
                                if (r >= n.length)
                                    break;
                                o = n[r++]
                            } else {
                                if ((r = n.next()).done)
                                    break;
                                o = r.value
                            }
                            var s = o;
                            "PROGRESS" === s.nodeName ? s.value = t : s.style.width = t + "%"
                        }
                    }
                },
                totaluploadprogress: function() {},
                sending: function() {},
                sendingmultiple: function() {},
                success: function(e) {
                    if (e.previewElement)
                        return e.previewElement.classList.add("dz-success")
                },
                successmultiple: function() {},
                canceled: function(e) {
                    return this.emit("error", e, this.options.dictUploadCanceled)
                },
                canceledmultiple: function() {},
                complete: function(e) {
                    if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile),
                    e.previewElement)
                        return e.previewElement.classList.add("dz-complete")
                },
                completemultiple: function() {},
                maxfilesexceeded: function() {},
                maxfilesreached: function() {},
                queuecomplete: function() {},
                addedfiles: function() {}
            },
            this.prototype._thumbnailQueue = [],
            this.prototype._processingThumbnail = !1
        }
    }, {
        key: "extend",
        value: function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                n[i - 1] = arguments[i];
            var r = n
              , o = !0
              , s = 0;
            for (r = o ? r : r[Symbol.iterator](); ; ) {
                var a;
                if (o) {
                    if (s >= r.length)
                        break;
                    a = r[s++]
                } else {
                    if ((s = r.next()).done)
                        break;
                    a = s.value
                }
                var l = a;
                for (var c in l) {
                    var u = l[c];
                    e[c] = u
                }
            }
            return e
        }
    }]),
    _createClass(e, [{
        key: "getAcceptedFiles",
        value: function() {
            return this.files.filter((function(e) {
                return e.accepted
            }
            )).map((function(e) {
                return e
            }
            ))
        }
    }, {
        key: "getRejectedFiles",
        value: function() {
            return this.files.filter((function(e) {
                return !e.accepted
            }
            )).map((function(e) {
                return e
            }
            ))
        }
    }, {
        key: "getFilesWithStatus",
        value: function(e) {
            return this.files.filter((function(t) {
                return t.status === e
            }
            )).map((function(e) {
                return e
            }
            ))
        }
    }, {
        key: "getQueuedFiles",
        value: function() {
            return this.getFilesWithStatus(e.QUEUED)
        }
    }, {
        key: "getUploadingFiles",
        value: function() {
            return this.getFilesWithStatus(e.UPLOADING)
        }
    }, {
        key: "getAddedFiles",
        value: function() {
            return this.getFilesWithStatus(e.ADDED)
        }
    }, {
        key: "getActiveFiles",
        value: function() {
            return this.files.filter((function(t) {
                return t.status === e.UPLOADING || t.status === e.QUEUED
            }
            )).map((function(e) {
                return e
            }
            ))
        }
    }, {
        key: "init",
        value: function() {
            var t = this;
            ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"),
            this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(e.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")),
            this.clickableElements.length) && function n() {
                return t.hiddenFileInput && t.hiddenFileInput.parentNode.removeChild(t.hiddenFileInput),
                t.hiddenFileInput = document.createElement("input"),
                t.hiddenFileInput.setAttribute("type", "file"),
                (null === t.options.maxFiles || t.options.maxFiles > 1) && t.hiddenFileInput.setAttribute("multiple", "multiple"),
                t.hiddenFileInput.className = "dz-hidden-input",
                null !== t.options.acceptedFiles && t.hiddenFileInput.setAttribute("accept", t.options.acceptedFiles),
                null !== t.options.capture && t.hiddenFileInput.setAttribute("capture", t.options.capture),
                t.hiddenFileInput.style.visibility = "hidden",
                t.hiddenFileInput.style.position = "absolute",
                t.hiddenFileInput.style.top = "0",
                t.hiddenFileInput.style.left = "0",
                t.hiddenFileInput.style.height = "0",
                t.hiddenFileInput.style.width = "0",
                e.getElement(t.options.hiddenInputContainer, "hiddenInputContainer").appendChild(t.hiddenFileInput),
                t.hiddenFileInput.addEventListener("change", (function() {
                    var e = t.hiddenFileInput.files;
                    if (e.length) {
                        var i = e
                          , r = !0
                          , o = 0;
                        for (i = r ? i : i[Symbol.iterator](); ; ) {
                            var s;
                            if (r) {
                                if (o >= i.length)
                                    break;
                                s = i[o++]
                            } else {
                                if ((o = i.next()).done)
                                    break;
                                s = o.value
                            }
                            var a = s;
                            t.addFile(a)
                        }
                    }
                    return t.emit("addedfiles", e),
                    n()
                }
                ))
            }();
            this.URL = null !== window.URL ? window.URL : window.webkitURL;
            var n = this.events
              , i = !0
              , r = 0;
            for (n = i ? n : n[Symbol.iterator](); ; ) {
                var o;
                if (i) {
                    if (r >= n.length)
                        break;
                    o = n[r++]
                } else {
                    if ((r = n.next()).done)
                        break;
                    o = r.value
                }
                var s = o;
                this.on(s, this.options[s])
            }
            this.on("uploadprogress", (function() {
                return t.updateTotalUploadProgress()
            }
            )),
            this.on("removedfile", (function() {
                return t.updateTotalUploadProgress()
            }
            )),
            this.on("canceled", (function(e) {
                return t.emit("complete", e)
            }
            )),
            this.on("complete", (function() {
                if (0 === t.getAddedFiles().length && 0 === t.getUploadingFiles().length && 0 === t.getQueuedFiles().length)
                    return setTimeout((function() {
                        return t.emit("queuecomplete")
                    }
                    ), 0)
            }
            ));
            var a = function(e) {
                return e.stopPropagation(),
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            };
            return this.listeners = [{
                element: this.element,
                events: {
                    dragstart: function(e) {
                        return t.emit("dragstart", e)
                    },
                    dragenter: function(e) {
                        return a(e),
                        t.emit("dragenter", e)
                    },
                    dragover: function(e) {
                        var n = void 0;
                        try {
                            n = e.dataTransfer.effectAllowed
                        } catch (e) {}
                        return e.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy",
                        a(e),
                        t.emit("dragover", e)
                    },
                    dragleave: function(e) {
                        return t.emit("dragleave", e)
                    },
                    drop: function(e) {
                        return a(e),
                        t.drop(e)
                    },
                    dragend: function(e) {
                        return t.emit("dragend", e)
                    }
                }
            }],
            this.clickableElements.forEach((function(n) {
                return t.listeners.push({
                    element: n,
                    events: {
                        click: function(i) {
                            return (n !== t.element || i.target === t.element || e.elementInside(i.target, t.element.querySelector(".dz-message"))) && t.hiddenFileInput.click(),
                            !0
                        }
                    }
                })
            }
            )),
            this.enable(),
            this.options.init.call(this)
        }
    }, {
        key: "destroy",
        value: function() {
            return this.disable(),
            this.removeAllFiles(!0),
            (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),
            this.hiddenFileInput = null),
            delete this.element.dropzone,
            e.instances.splice(e.instances.indexOf(this), 1)
        }
    }, {
        key: "updateTotalUploadProgress",
        value: function() {
            var e = void 0
              , t = 0
              , n = 0;
            if (this.getActiveFiles().length) {
                var i = this.getActiveFiles()
                  , r = !0
                  , o = 0;
                for (i = r ? i : i[Symbol.iterator](); ; ) {
                    var s;
                    if (r) {
                        if (o >= i.length)
                            break;
                        s = i[o++]
                    } else {
                        if ((o = i.next()).done)
                            break;
                        s = o.value
                    }
                    var a = s;
                    t += a.upload.bytesSent,
                    n += a.upload.total
                }
                e = 100 * t / n
            } else
                e = 100;
            return this.emit("totaluploadprogress", e, n, t)
        }
    }, {
        key: "_getParamName",
        value: function(e) {
            return "function" == typeof this.options.paramName ? this.options.paramName(e) : this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "")
        }
    }, {
        key: "_renameFile",
        value: function(e) {
            return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e)
        }
    }, {
        key: "getFallbackForm",
        value: function() {
            var t = void 0
              , n = void 0;
            if (t = this.getExistingFallback())
                return t;
            var i = '<div class="dz-fallback">';
            this.options.dictFallbackText && (i += "<p>" + this.options.dictFallbackText + "</p>"),
            i += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>';
            var r = e.createElement(i);
            return "FORM" !== this.element.tagName ? (n = e.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>')).appendChild(r) : (this.element.setAttribute("enctype", "multipart/form-data"),
            this.element.setAttribute("method", this.options.method)),
            null != n ? n : r
        }
    }, {
        key: "getExistingFallback",
        value: function() {
            for (var e = function(e) {
                var t = e
                  , n = !0
                  , i = 0;
                for (t = n ? t : t[Symbol.iterator](); ; ) {
                    var r;
                    if (n) {
                        if (i >= t.length)
                            break;
                        r = t[i++]
                    } else {
                        if ((i = t.next()).done)
                            break;
                        r = i.value
                    }
                    var o = r;
                    if (/(^| )fallback($| )/.test(o.className))
                        return o
                }
            }, t = ["div", "form"], n = 0; n < t.length; n++) {
                var i, r = t[n];
                if (i = e(this.element.getElementsByTagName(r)))
                    return i
            }
        }
    }, {
        key: "setupEventListeners",
        value: function() {
            return this.listeners.map((function(e) {
                return function() {
                    var t = [];
                    for (var n in e.events) {
                        var i = e.events[n];
                        t.push(e.element.addEventListener(n, i, !1))
                    }
                    return t
                }()
            }
            ))
        }
    }, {
        key: "removeEventListeners",
        value: function() {
            return this.listeners.map((function(e) {
                return function() {
                    var t = [];
                    for (var n in e.events) {
                        var i = e.events[n];
                        t.push(e.element.removeEventListener(n, i, !1))
                    }
                    return t
                }()
            }
            ))
        }
    }, {
        key: "disable",
        value: function() {
            var e = this;
            return this.clickableElements.forEach((function(e) {
                return e.classList.remove("dz-clickable")
            }
            )),
            this.removeEventListeners(),
            this.disabled = !0,
            this.files.map((function(t) {
                return e.cancelUpload(t)
            }
            ))
        }
    }, {
        key: "enable",
        value: function() {
            return delete this.disabled,
            this.clickableElements.forEach((function(e) {
                return e.classList.add("dz-clickable")
            }
            )),
            this.setupEventListeners()
        }
    }, {
        key: "filesize",
        value: function(e) {
            var t = 0
              , n = "b";
            if (e > 0) {
                for (var i = ["tb", "gb", "mb", "kb", "b"], r = 0; r < i.length; r++) {
                    var o = i[r];
                    if (e >= Math.pow(this.options.filesizeBase, 4 - r) / 10) {
                        t = e / Math.pow(this.options.filesizeBase, 4 - r),
                        n = o;
                        break
                    }
                }
                t = Math.round(10 * t) / 10
            }
            return "<strong>" + t + "</strong> " + this.options.dictFileSizeUnits[n]
        }
    }, {
        key: "_updateMaxFilesReachedClass",
        value: function() {
            return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files),
            this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
        }
    }, {
        key: "drop",
        value: function(e) {
            if (e.dataTransfer) {
                this.emit("drop", e);
                for (var t = [], n = 0; n < e.dataTransfer.files.length; n++)
                    t[n] = e.dataTransfer.files[n];
                if (this.emit("addedfiles", t),
                t.length) {
                    var i = e.dataTransfer.items;
                    i && i.length && null != i[0].webkitGetAsEntry ? this._addFilesFromItems(i) : this.handleFiles(t)
                }
            }
        }
    }, {
        key: "paste",
        value: function(e) {
            if (null != __guard__(null != e ? e.clipboardData : void 0, (function(e) {
                return e.items
            }
            ))) {
                this.emit("paste", e);
                var t = e.clipboardData.items;
                return t.length ? this._addFilesFromItems(t) : void 0
            }
        }
    }, {
        key: "handleFiles",
        value: function(e) {
            var t = e
              , n = !0
              , i = 0;
            for (t = n ? t : t[Symbol.iterator](); ; ) {
                var r;
                if (n) {
                    if (i >= t.length)
                        break;
                    r = t[i++]
                } else {
                    if ((i = t.next()).done)
                        break;
                    r = i.value
                }
                var o = r;
                this.addFile(o)
            }
        }
    }, {
        key: "_addFilesFromItems",
        value: function(e) {
            var t = this;
            return function() {
                var n = []
                  , i = e
                  , r = !0
                  , o = 0;
                for (i = r ? i : i[Symbol.iterator](); ; ) {
                    var s;
                    if (r) {
                        if (o >= i.length)
                            break;
                        s = i[o++]
                    } else {
                        if ((o = i.next()).done)
                            break;
                        s = o.value
                    }
                    var a, l = s;
                    null != l.webkitGetAsEntry && (a = l.webkitGetAsEntry()) ? a.isFile ? n.push(t.addFile(l.getAsFile())) : a.isDirectory ? n.push(t._addFilesFromDirectory(a, a.name)) : n.push(void 0) : null != l.getAsFile && (null == l.kind || "file" === l.kind) ? n.push(t.addFile(l.getAsFile())) : n.push(void 0)
                }
                return n
            }()
        }
    }, {
        key: "_addFilesFromDirectory",
        value: function(e, t) {
            var n = this
              , i = e.createReader()
              , r = function(e) {
                return __guardMethod__(console, "log", (function(t) {
                    return t.log(e)
                }
                ))
            };
            return function e() {
                return i.readEntries((function(i) {
                    if (i.length > 0) {
                        var r = i
                          , o = !0
                          , s = 0;
                        for (r = o ? r : r[Symbol.iterator](); ; ) {
                            var a;
                            if (o) {
                                if (s >= r.length)
                                    break;
                                a = r[s++]
                            } else {
                                if ((s = r.next()).done)
                                    break;
                                a = s.value
                            }
                            var l = a;
                            l.isFile ? l.file((function(e) {
                                if (!n.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1))
                                    return e.fullPath = t + "/" + e.name,
                                    n.addFile(e)
                            }
                            )) : l.isDirectory && n._addFilesFromDirectory(l, t + "/" + l.name)
                        }
                        e()
                    }
                    return null
                }
                ), r)
            }()
        }
    }, {
        key: "accept",
        value: function(t, n) {
            return this.options.maxFilesize && t.size > 1024 * this.options.maxFilesize * 1024 ? n(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(t.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : e.isValidFile(t, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (n(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)),
            this.emit("maxfilesexceeded", t)) : this.options.accept.call(this, t, n) : n(this.options.dictInvalidFileType)
        }
    }, {
        key: "addFile",
        value: function(t) {
            var n = this;
            return t.upload = {
                uuid: e.uuidv4(),
                progress: 0,
                total: t.size,
                bytesSent: 0,
                filename: this._renameFile(t),
                chunked: this.options.chunking && (this.options.forceChunking || t.size > this.options.chunkSize),
                totalChunkCount: Math.ceil(t.size / this.options.chunkSize)
            },
            this.files.push(t),
            t.status = e.ADDED,
            this.emit("addedfile", t),
            this._enqueueThumbnail(t),
            this.accept(t, (function(e) {
                return e ? (t.accepted = !1,
                n._errorProcessing([t], e)) : (t.accepted = !0,
                n.options.autoQueue && n.enqueueFile(t)),
                n._updateMaxFilesReachedClass()
            }
            ))
        }
    }, {
        key: "enqueueFiles",
        value: function(e) {
            var t = e
              , n = !0
              , i = 0;
            for (t = n ? t : t[Symbol.iterator](); ; ) {
                var r;
                if (n) {
                    if (i >= t.length)
                        break;
                    r = t[i++]
                } else {
                    if ((i = t.next()).done)
                        break;
                    r = i.value
                }
                var o = r;
                this.enqueueFile(o)
            }
            return null
        }
    }, {
        key: "enqueueFile",
        value: function(t) {
            var n = this;
            if (t.status !== e.ADDED || !0 !== t.accepted)
                throw new Error("This file can't be queued because it has already been processed or was rejected.");
            if (t.status = e.QUEUED,
            this.options.autoProcessQueue)
                return setTimeout((function() {
                    return n.processQueue()
                }
                ), 0)
        }
    }, {
        key: "_enqueueThumbnail",
        value: function(e) {
            var t = this;
            if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024)
                return this._thumbnailQueue.push(e),
                setTimeout((function() {
                    return t._processThumbnailQueue()
                }
                ), 0)
        }
    }, {
        key: "_processThumbnailQueue",
        value: function() {
            var e = this;
            if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
                this._processingThumbnail = !0;
                var t = this._thumbnailQueue.shift();
                return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, (function(n) {
                    return e.emit("thumbnail", t, n),
                    e._processingThumbnail = !1,
                    e._processThumbnailQueue()
                }
                ))
            }
        }
    }, {
        key: "removeFile",
        value: function(t) {
            if (t.status === e.UPLOADING && this.cancelUpload(t),
            this.files = without(this.files, t),
            this.emit("removedfile", t),
            0 === this.files.length)
                return this.emit("reset")
        }
    }, {
        key: "removeAllFiles",
        value: function(t) {
            null == t && (t = !1);
            var n = this.files.slice()
              , i = !0
              , r = 0;
            for (n = i ? n : n[Symbol.iterator](); ; ) {
                var o;
                if (i) {
                    if (r >= n.length)
                        break;
                    o = n[r++]
                } else {
                    if ((r = n.next()).done)
                        break;
                    o = r.value
                }
                var s = o;
                (s.status !== e.UPLOADING || t) && this.removeFile(s)
            }
            return null
        }
    }, {
        key: "resizeImage",
        value: function(t, n, i, r, o) {
            var s = this;
            return this.createThumbnail(t, n, i, r, !0, (function(n, i) {
                if (null == i)
                    return o(t);
                var r = s.options.resizeMimeType;
                null == r && (r = t.type);
                var a = i.toDataURL(r, s.options.resizeQuality);
                return "image/jpeg" !== r && "image/jpg" !== r || (a = ExifRestore.restore(t.dataURL, a)),
                o(e.dataURItoBlob(a))
            }
            ))
        }
    }, {
        key: "createThumbnail",
        value: function(e, t, n, i, r, o) {
            var s = this
              , a = new FileReader;
            return a.onload = function() {
                if (e.dataURL = a.result,
                "image/svg+xml" !== e.type)
                    return s.createThumbnailFromUrl(e, t, n, i, r, o);
                null != o && o(a.result)
            }
            ,
            a.readAsDataURL(e)
        }
    }, {
        key: "createThumbnailFromUrl",
        value: function(e, t, n, i, r, o, s) {
            var a = this
              , l = document.createElement("img");
            return s && (l.crossOrigin = s),
            l.onload = function() {
                var s = function(e) {
                    return e(1)
                };
                return "undefined" != typeof EXIF && null !== EXIF && r && (s = function(e) {
                    return EXIF.getData(l, (function() {
                        return e(EXIF.getTag(this, "Orientation"))
                    }
                    ))
                }
                ),
                s((function(r) {
                    e.width = l.width,
                    e.height = l.height;
                    var s = a.options.resize.call(a, e, t, n, i)
                      , c = document.createElement("canvas")
                      , u = c.getContext("2d");
                    switch (c.width = s.trgWidth,
                    c.height = s.trgHeight,
                    r > 4 && (c.width = s.trgHeight,
                    c.height = s.trgWidth),
                    r) {
                    case 2:
                        u.translate(c.width, 0),
                        u.scale(-1, 1);
                        break;
                    case 3:
                        u.translate(c.width, c.height),
                        u.rotate(Math.PI);
                        break;
                    case 4:
                        u.translate(0, c.height),
                        u.scale(1, -1);
                        break;
                    case 5:
                        u.rotate(.5 * Math.PI),
                        u.scale(1, -1);
                        break;
                    case 6:
                        u.rotate(.5 * Math.PI),
                        u.translate(0, -c.width);
                        break;
                    case 7:
                        u.rotate(.5 * Math.PI),
                        u.translate(c.height, -c.width),
                        u.scale(-1, 1);
                        break;
                    case 8:
                        u.rotate(-.5 * Math.PI),
                        u.translate(-c.height, 0)
                    }
                    drawImageIOSFix(u, l, null != s.srcX ? s.srcX : 0, null != s.srcY ? s.srcY : 0, s.srcWidth, s.srcHeight, null != s.trgX ? s.trgX : 0, null != s.trgY ? s.trgY : 0, s.trgWidth, s.trgHeight);
                    var d = c.toDataURL("image/png");
                    if (null != o)
                        return o(d, c)
                }
                ))
            }
            ,
            null != o && (l.onerror = o),
            l.src = e.dataURL
        }
    }, {
        key: "processQueue",
        value: function() {
            var e = this.options.parallelUploads
              , t = this.getUploadingFiles().length
              , n = t;
            if (!(t >= e)) {
                var i = this.getQueuedFiles();
                if (i.length > 0) {
                    if (this.options.uploadMultiple)
                        return this.processFiles(i.slice(0, e - t));
                    for (; n < e; ) {
                        if (!i.length)
                            return;
                        this.processFile(i.shift()),
                        n++
                    }
                }
            }
        }
    }, {
        key: "processFile",
        value: function(e) {
            return this.processFiles([e])
        }
    }, {
        key: "processFiles",
        value: function(t) {
            var n = t
              , i = !0
              , r = 0;
            for (n = i ? n : n[Symbol.iterator](); ; ) {
                var o;
                if (i) {
                    if (r >= n.length)
                        break;
                    o = n[r++]
                } else {
                    if ((r = n.next()).done)
                        break;
                    o = r.value
                }
                var s = o;
                s.processing = !0,
                s.status = e.UPLOADING,
                this.emit("processing", s)
            }
            return this.options.uploadMultiple && this.emit("processingmultiple", t),
            this.uploadFiles(t)
        }
    }, {
        key: "_getFilesWithXhr",
        value: function(e) {
            return this.files.filter((function(t) {
                return t.xhr === e
            }
            )).map((function(e) {
                return e
            }
            ))
        }
    }, {
        key: "cancelUpload",
        value: function(t) {
            if (t.status === e.UPLOADING) {
                var n = this._getFilesWithXhr(t.xhr)
                  , i = n
                  , r = !0
                  , o = 0;
                for (i = r ? i : i[Symbol.iterator](); ; ) {
                    var s;
                    if (r) {
                        if (o >= i.length)
                            break;
                        s = i[o++]
                    } else {
                        if ((o = i.next()).done)
                            break;
                        s = o.value
                    }
                    s.status = e.CANCELED
                }
                void 0 !== t.xhr && t.xhr.abort();
                var a = n
                  , l = !0
                  , c = 0;
                for (a = l ? a : a[Symbol.iterator](); ; ) {
                    var u;
                    if (l) {
                        if (c >= a.length)
                            break;
                        u = a[c++]
                    } else {
                        if ((c = a.next()).done)
                            break;
                        u = c.value
                    }
                    var d = u;
                    this.emit("canceled", d)
                }
                this.options.uploadMultiple && this.emit("canceledmultiple", n)
            } else
                t.status !== e.ADDED && t.status !== e.QUEUED || (t.status = e.CANCELED,
                this.emit("canceled", t),
                this.options.uploadMultiple && this.emit("canceledmultiple", [t]));
            if (this.options.autoProcessQueue)
                return this.processQueue()
        }
    }, {
        key: "resolveOption",
        value: function(e) {
            if ("function" == typeof e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                    n[i - 1] = arguments[i];
                return e.apply(this, n)
            }
            return e
        }
    }, {
        key: "uploadFile",
        value: function(e) {
            return this.uploadFiles([e])
        }
    }, {
        key: "uploadFiles",
        value: function(t) {
            var n = this;
            this._transformFiles(t, (function(i) {
                if (t[0].upload.chunked) {
                    var r = t[0]
                      , o = i[0];
                    r.upload.chunks = [];
                    var s = function() {
                        for (var i = 0; void 0 !== r.upload.chunks[i]; )
                            i++;
                        if (!(i >= r.upload.totalChunkCount)) {
                            0;
                            var s = i * n.options.chunkSize
                              , a = Math.min(s + n.options.chunkSize, r.size)
                              , l = {
                                name: n._getParamName(0),
                                data: o.webkitSlice ? o.webkitSlice(s, a) : o.slice(s, a),
                                filename: r.upload.filename,
                                chunkIndex: i
                            };
                            r.upload.chunks[i] = {
                                file: r,
                                index: i,
                                dataBlock: l,
                                status: e.UPLOADING,
                                progress: 0,
                                retries: 0
                            },
                            n._uploadData(t, [l])
                        }
                    };
                    if (r.upload.finishedChunkUpload = function(i) {
                        var o = !0;
                        i.status = e.SUCCESS,
                        i.dataBlock = null,
                        i.xhr = null;
                        for (var a = 0; a < r.upload.totalChunkCount; a++) {
                            if (void 0 === r.upload.chunks[a])
                                return s();
                            r.upload.chunks[a].status !== e.SUCCESS && (o = !1)
                        }
                        o && n.options.chunksUploaded(r, (function() {
                            n._finished(t, "", null)
                        }
                        ))
                    }
                    ,
                    n.options.parallelChunkUploads)
                        for (var a = 0; a < r.upload.totalChunkCount; a++)
                            s();
                    else
                        s()
                } else {
                    for (var l = [], c = 0; c < t.length; c++)
                        l[c] = {
                            name: n._getParamName(c),
                            data: i[c],
                            filename: t[c].upload.filename
                        };
                    n._uploadData(t, l)
                }
            }
            ))
        }
    }, {
        key: "_getChunk",
        value: function(e, t) {
            for (var n = 0; n < e.upload.totalChunkCount; n++)
                if (void 0 !== e.upload.chunks[n] && e.upload.chunks[n].xhr === t)
                    return e.upload.chunks[n]
        }
    }, {
        key: "_uploadData",
        value: function(t, n) {
            var i = this
              , r = new XMLHttpRequest
              , o = t
              , s = !0
              , a = 0;
            for (o = s ? o : o[Symbol.iterator](); ; ) {
                var l;
                if (s) {
                    if (a >= o.length)
                        break;
                    l = o[a++]
                } else {
                    if ((a = o.next()).done)
                        break;
                    l = a.value
                }
                l.xhr = r
            }
            t[0].upload.chunked && (t[0].upload.chunks[n[0].chunkIndex].xhr = r);
            var c = this.resolveOption(this.options.method, t)
              , u = this.resolveOption(this.options.url, t);
            r.open(c, u, !0),
            r.timeout = this.resolveOption(this.options.timeout, t),
            r.withCredentials = !!this.options.withCredentials,
            r.onload = function(e) {
                i._finishedUploading(t, r, e)
            }
            ,
            r.onerror = function() {
                i._handleUploadError(t, r)
            }
            ,
            (null != r.upload ? r.upload : r).onprogress = function(e) {
                return i._updateFilesUploadProgress(t, r, e)
            }
            ;
            var d = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest"
            };
            for (var h in this.options.headers && e.extend(d, this.options.headers),
            d) {
                var f = d[h];
                f && r.setRequestHeader(h, f)
            }
            var p = new FormData;
            if (this.options.params) {
                var m = this.options.params;
                for (var g in "function" == typeof m && (m = m.call(this, t, r, t[0].upload.chunked ? this._getChunk(t[0], r) : null)),
                m) {
                    var v = m[g];
                    p.append(g, v)
                }
            }
            var y = t
              , b = !0
              , w = 0;
            for (y = b ? y : y[Symbol.iterator](); ; ) {
                var _;
                if (b) {
                    if (w >= y.length)
                        break;
                    _ = y[w++]
                } else {
                    if ((w = y.next()).done)
                        break;
                    _ = w.value
                }
                var x = _;
                this.emit("sending", x, r, p)
            }
            this.options.uploadMultiple && this.emit("sendingmultiple", t, r, p),
            this._addFormElementData(p);
            for (var k = 0; k < n.length; k++) {
                var $ = n[k];
                p.append($.name, $.data, $.filename)
            }
            this.submitRequest(r, p, t)
        }
    }, {
        key: "_transformFiles",
        value: function(e, t) {
            for (var n = this, i = [], r = 0, o = function(o) {
                n.options.transformFile.call(n, e[o], (function(n) {
                    i[o] = n,
                    ++r === e.length && t(i)
                }
                ))
            }, s = 0; s < e.length; s++)
                o(s)
        }
    }, {
        key: "_addFormElementData",
        value: function(e) {
            if ("FORM" === this.element.tagName) {
                var t = this.element.querySelectorAll("input, textarea, select, button")
                  , n = !0
                  , i = 0;
                for (t = n ? t : t[Symbol.iterator](); ; ) {
                    var r;
                    if (n) {
                        if (i >= t.length)
                            break;
                        r = t[i++]
                    } else {
                        if ((i = t.next()).done)
                            break;
                        r = i.value
                    }
                    var o = r
                      , s = o.getAttribute("name")
                      , a = o.getAttribute("type");
                    if (a && (a = a.toLowerCase()),
                    null != s)
                        if ("SELECT" === o.tagName && o.hasAttribute("multiple")) {
                            var l = o.options
                              , c = !0
                              , u = 0;
                            for (l = c ? l : l[Symbol.iterator](); ; ) {
                                var d;
                                if (c) {
                                    if (u >= l.length)
                                        break;
                                    d = l[u++]
                                } else {
                                    if ((u = l.next()).done)
                                        break;
                                    d = u.value
                                }
                                var h = d;
                                h.selected && e.append(s, h.value)
                            }
                        } else
                            (!a || "checkbox" !== a && "radio" !== a || o.checked) && e.append(s, o.value)
                }
            }
        }
    }, {
        key: "_updateFilesUploadProgress",
        value: function(e, t, n) {
            var i = void 0;
            if (void 0 !== n) {
                if (i = 100 * n.loaded / n.total,
                e[0].upload.chunked) {
                    var r = e[0]
                      , o = this._getChunk(r, t);
                    o.progress = i,
                    o.total = n.total,
                    o.bytesSent = n.loaded;
                    r.upload.progress = 0,
                    r.upload.total = 0,
                    r.upload.bytesSent = 0;
                    for (var s = 0; s < r.upload.totalChunkCount; s++)
                        void 0 !== r.upload.chunks[s] && void 0 !== r.upload.chunks[s].progress && (r.upload.progress += r.upload.chunks[s].progress,
                        r.upload.total += r.upload.chunks[s].total,
                        r.upload.bytesSent += r.upload.chunks[s].bytesSent);
                    r.upload.progress = r.upload.progress / r.upload.totalChunkCount
                } else {
                    var a = e
                      , l = !0
                      , c = 0;
                    for (a = l ? a : a[Symbol.iterator](); ; ) {
                        var u;
                        if (l) {
                            if (c >= a.length)
                                break;
                            u = a[c++]
                        } else {
                            if ((c = a.next()).done)
                                break;
                            u = c.value
                        }
                        var d = u;
                        d.upload.progress = i,
                        d.upload.total = n.total,
                        d.upload.bytesSent = n.loaded
                    }
                }
                var h = e
                  , f = !0
                  , p = 0;
                for (h = f ? h : h[Symbol.iterator](); ; ) {
                    var m;
                    if (f) {
                        if (p >= h.length)
                            break;
                        m = h[p++]
                    } else {
                        if ((p = h.next()).done)
                            break;
                        m = p.value
                    }
                    var g = m;
                    this.emit("uploadprogress", g, g.upload.progress, g.upload.bytesSent)
                }
            } else {
                var v = !0;
                i = 100;
                var y = e
                  , b = !0
                  , w = 0;
                for (y = b ? y : y[Symbol.iterator](); ; ) {
                    var _;
                    if (b) {
                        if (w >= y.length)
                            break;
                        _ = y[w++]
                    } else {
                        if ((w = y.next()).done)
                            break;
                        _ = w.value
                    }
                    var x = _;
                    100 === x.upload.progress && x.upload.bytesSent === x.upload.total || (v = !1),
                    x.upload.progress = i,
                    x.upload.bytesSent = x.upload.total
                }
                if (v)
                    return;
                var k = e
                  , $ = !0
                  , C = 0;
                for (k = $ ? k : k[Symbol.iterator](); ; ) {
                    var S;
                    if ($) {
                        if (C >= k.length)
                            break;
                        S = k[C++]
                    } else {
                        if ((C = k.next()).done)
                            break;
                        S = C.value
                    }
                    var T = S;
                    this.emit("uploadprogress", T, i, T.upload.bytesSent)
                }
            }
        }
    }, {
        key: "_finishedUploading",
        value: function(t, n, i) {
            var r = void 0;
            if (t[0].status !== e.CANCELED && 4 === n.readyState) {
                if ("arraybuffer" !== n.responseType && "blob" !== n.responseType && (r = n.responseText,
                n.getResponseHeader("content-type") && ~n.getResponseHeader("content-type").indexOf("application/json")))
                    try {
                        r = JSON.parse(r)
                    } catch (e) {
                        i = e,
                        r = "Invalid JSON response from server."
                    }
                this._updateFilesUploadProgress(t),
                200 <= n.status && n.status < 300 ? t[0].upload.chunked ? t[0].upload.finishedChunkUpload(this._getChunk(t[0], n)) : this._finished(t, r, i) : this._handleUploadError(t, n, r)
            }
        }
    }, {
        key: "_handleUploadError",
        value: function(t, n, i) {
            if (t[0].status !== e.CANCELED) {
                if (t[0].upload.chunked && this.options.retryChunks) {
                    var r = this._getChunk(t[0], n);
                    if (r.retries++ < this.options.retryChunksLimit)
                        return void this._uploadData(t, [r.dataBlock]);
                    console.warn("Retried this chunk too often. Giving up.")
                }
                var o = t
                  , s = !0
                  , a = 0;
                for (o = s ? o : o[Symbol.iterator](); ; ) {
                    if (s) {
                        if (a >= o.length)
                            break;
                        o[a++]
                    } else {
                        if ((a = o.next()).done)
                            break;
                        a.value
                    }
                    this._errorProcessing(t, i || this.options.dictResponseError.replace("{{statusCode}}", n.status), n)
                }
            }
        }
    }, {
        key: "submitRequest",
        value: function(e, t) {
            e.send(t)
        }
    }, {
        key: "_finished",
        value: function(t, n, i) {
            var r = t
              , o = !0
              , s = 0;
            for (r = o ? r : r[Symbol.iterator](); ; ) {
                var a;
                if (o) {
                    if (s >= r.length)
                        break;
                    a = r[s++]
                } else {
                    if ((s = r.next()).done)
                        break;
                    a = s.value
                }
                var l = a;
                l.status = e.SUCCESS,
                this.emit("success", l, n, i),
                this.emit("complete", l)
            }
            if (this.options.uploadMultiple && (this.emit("successmultiple", t, n, i),
            this.emit("completemultiple", t)),
            this.options.autoProcessQueue)
                return this.processQueue()
        }
    }, {
        key: "_errorProcessing",
        value: function(t, n, i) {
            var r = t
              , o = !0
              , s = 0;
            for (r = o ? r : r[Symbol.iterator](); ; ) {
                var a;
                if (o) {
                    if (s >= r.length)
                        break;
                    a = r[s++]
                } else {
                    if ((s = r.next()).done)
                        break;
                    a = s.value
                }
                var l = a;
                l.status = e.ERROR,
                this.emit("error", l, n, i),
                this.emit("complete", l)
            }
            if (this.options.uploadMultiple && (this.emit("errormultiple", t, n, i),
            this.emit("completemultiple", t)),
            this.options.autoProcessQueue)
                return this.processQueue()
        }
    }], [{
        key: "uuidv4",
        value: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }
            ))
        }
    }]),
    e
}();
Dropzone.initClass(),
Dropzone.version = "5.5.0",
Dropzone.options = {},
Dropzone.optionsForElement = function(e) {
    return e.getAttribute("id") ? Dropzone.options[camelize(e.getAttribute("id"))] : void 0
}
,
Dropzone.instances = [],
Dropzone.forElement = function(e) {
    if ("string" == typeof e && (e = document.querySelector(e)),
    null == (null != e ? e.dropzone : void 0))
        throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    return e.dropzone
}
,
Dropzone.autoDiscover = !0,
Dropzone.discover = function() {
    var e = void 0;
    if (document.querySelectorAll)
        e = document.querySelectorAll(".dropzone");
    else {
        e = [];
        var t = function(t) {
            return function() {
                var n = []
                  , i = t
                  , r = !0
                  , o = 0;
                for (i = r ? i : i[Symbol.iterator](); ; ) {
                    var s;
                    if (r) {
                        if (o >= i.length)
                            break;
                        s = i[o++]
                    } else {
                        if ((o = i.next()).done)
                            break;
                        s = o.value
                    }
                    var a = s;
                    /(^| )dropzone($| )/.test(a.className) ? n.push(e.push(a)) : n.push(void 0)
                }
                return n
            }()
        };
        t(document.getElementsByTagName("div")),
        t(document.getElementsByTagName("form"))
    }
    return function() {
        var t = []
          , n = e
          , i = !0
          , r = 0;
        for (n = i ? n : n[Symbol.iterator](); ; ) {
            var o;
            if (i) {
                if (r >= n.length)
                    break;
                o = n[r++]
            } else {
                if ((r = n.next()).done)
                    break;
                o = r.value
            }
            var s = o;
            !1 !== Dropzone.optionsForElement(s) ? t.push(new Dropzone(s)) : t.push(void 0)
        }
        return t
    }()
}
,
Dropzone.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i],
Dropzone.isBrowserSupported = function() {
    var e = !0;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
        if ("classList"in document.createElement("a")) {
            var t = Dropzone.blacklistedBrowsers
              , n = !0
              , i = 0;
            for (t = n ? t : t[Symbol.iterator](); ; ) {
                var r;
                if (n) {
                    if (i >= t.length)
                        break;
                    r = t[i++]
                } else {
                    if ((i = t.next()).done)
                        break;
                    r = i.value
                }
                r.test(navigator.userAgent) && (e = !1)
            }
        } else
            e = !1;
    else
        e = !1;
    return e
}
,
Dropzone.dataURItoBlob = function(e) {
    for (var t = atob(e.split(",")[1]), n = e.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(t.length), r = new Uint8Array(i), o = 0, s = t.length, a = 0 <= s; a ? o <= s : o >= s; a ? o++ : o--)
        r[o] = t.charCodeAt(o);
    return new Blob([i],{
        type: n
    })
}
;
var without = function(e, t) {
    return e.filter((function(e) {
        return e !== t
    }
    )).map((function(e) {
        return e
    }
    ))
}
  , camelize = function(e) {
    return e.replace(/[\-_](\w)/g, (function(e) {
        return e.charAt(1).toUpperCase()
    }
    ))
};
Dropzone.createElement = function(e) {
    var t = document.createElement("div");
    return t.innerHTML = e,
    t.childNodes[0]
}
,
Dropzone.elementInside = function(e, t) {
    if (e === t)
        return !0;
    for (; e = e.parentNode; )
        if (e === t)
            return !0;
    return !1
}
,
Dropzone.getElement = function(e, t) {
    var n = void 0;
    if ("string" == typeof e ? n = document.querySelector(e) : null != e.nodeType && (n = e),
    null == n)
        throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
    return n
}
,
Dropzone.getElements = function(e, t) {
    var n = void 0
      , i = void 0;
    if (e instanceof Array) {
        i = [];
        try {
            var r = e
              , o = !0
              , s = 0;
            for (r = o ? r : r[Symbol.iterator](); ; ) {
                if (o) {
                    if (s >= r.length)
                        break;
                    n = r[s++]
                } else {
                    if ((s = r.next()).done)
                        break;
                    n = s.value
                }
                i.push(this.getElement(n, t))
            }
        } catch (e) {
            i = null
        }
    } else if ("string" == typeof e) {
        i = [];
        var a = document.querySelectorAll(e)
          , l = !0
          , c = 0;
        for (a = l ? a : a[Symbol.iterator](); ; ) {
            if (l) {
                if (c >= a.length)
                    break;
                n = a[c++]
            } else {
                if ((c = a.next()).done)
                    break;
                n = c.value
            }
            i.push(n)
        }
    } else
        null != e.nodeType && (i = [e]);
    if (null == i || !i.length)
        throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    return i
}
,
Dropzone.confirm = function(e, t, n) {
    return window.confirm(e) ? t() : null != n ? n() : void 0
}
,
Dropzone.isValidFile = function(e, t) {
    if (!t)
        return !0;
    t = t.split(",");
    var n = e.type
      , i = n.replace(/\/.*$/, "")
      , r = t
      , o = !0
      , s = 0;
    for (r = o ? r : r[Symbol.iterator](); ; ) {
        var a;
        if (o) {
            if (s >= r.length)
                break;
            a = r[s++]
        } else {
            if ((s = r.next()).done)
                break;
            a = s.value
        }
        var l = a;
        if ("." === (l = l.trim()).charAt(0)) {
            if (-1 !== e.name.toLowerCase().indexOf(l.toLowerCase(), e.name.length - l.length))
                return !0
        } else if (/\/\*$/.test(l)) {
            if (i === l.replace(/\/.*$/, ""))
                return !0
        } else if (n === l)
            return !0
    }
    return !1
}
,
"undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(e) {
    return this.each((function() {
        return new Dropzone(this,e)
    }
    ))
}
),
"undefined" != typeof module && null !== module ? module.exports = Dropzone : window.Dropzone = Dropzone,
Dropzone.ADDED = "added",
Dropzone.QUEUED = "queued",
Dropzone.ACCEPTED = Dropzone.QUEUED,
Dropzone.UPLOADING = "uploading",
Dropzone.PROCESSING = Dropzone.UPLOADING,
Dropzone.CANCELED = "canceled",
Dropzone.ERROR = "error",
Dropzone.SUCCESS = "success";
var detectVerticalSquash = function(e) {
    e.naturalWidth;
    var t = e.naturalHeight
      , n = document.createElement("canvas");
    n.width = 1,
    n.height = t;
    var i = n.getContext("2d");
    i.drawImage(e, 0, 0);
    for (var r = i.getImageData(1, 0, 1, t).data, o = 0, s = t, a = t; a > o; ) {
        0 === r[4 * (a - 1) + 3] ? s = a : o = a,
        a = s + o >> 1
    }
    var l = a / t;
    return 0 === l ? 1 : l
}
  , drawImageIOSFix = function(e, t, n, i, r, o, s, a, l, c) {
    var u = detectVerticalSquash(t);
    return e.drawImage(t, n, i, r, o, s, a, l, c / u)
}
  , ExifRestore = function() {
    function e() {
        _classCallCheck(this, e)
    }
    return _createClass(e, null, [{
        key: "initClass",
        value: function() {
            this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }, {
        key: "encode64",
        value: function(e) {
            for (var t = "", n = void 0, i = void 0, r = "", o = void 0, s = void 0, a = void 0, l = "", c = 0; o = (n = e[c++]) >> 2,
            s = (3 & n) << 4 | (i = e[c++]) >> 4,
            a = (15 & i) << 2 | (r = e[c++]) >> 6,
            l = 63 & r,
            isNaN(i) ? a = l = 64 : isNaN(r) && (l = 64),
            t = t + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(l),
            n = i = r = "",
            o = s = a = l = "",
            c < e.length; )
                ;
            return t
        }
    }, {
        key: "restore",
        value: function(e, t) {
            if (!e.match("data:image/jpeg;base64,"))
                return t;
            var n = this.decode64(e.replace("data:image/jpeg;base64,", ""))
              , i = this.slice2Segments(n)
              , r = this.exifManipulation(t, i);
            return "data:image/jpeg;base64," + this.encode64(r)
        }
    }, {
        key: "exifManipulation",
        value: function(e, t) {
            var n = this.getExifArray(t)
              , i = this.insertExif(e, n);
            return new Uint8Array(i)
        }
    }, {
        key: "getExifArray",
        value: function(e) {
            for (var t = void 0, n = 0; n < e.length; ) {
                if (255 === (t = e[n])[0] & 225 === t[1])
                    return t;
                n++
            }
            return []
        }
    }, {
        key: "insertExif",
        value: function(e, t) {
            var n = e.replace("data:image/jpeg;base64,", "")
              , i = this.decode64(n)
              , r = i.indexOf(255, 3)
              , o = i.slice(0, r)
              , s = i.slice(r)
              , a = o;
            return a = (a = a.concat(t)).concat(s)
        }
    }, {
        key: "slice2Segments",
        value: function(e) {
            for (var t = 0, n = []; ; ) {
                if (255 === e[t] & 218 === e[t + 1])
                    break;
                if (255 === e[t] & 216 === e[t + 1])
                    t += 2;
                else {
                    var i = t + (256 * e[t + 2] + e[t + 3]) + 2
                      , r = e.slice(t, i);
                    n.push(r),
                    t = i
                }
                if (t > e.length)
                    break
            }
            return n
        }
    }, {
        key: "decode64",
        value: function(e) {
            var t = void 0
              , n = void 0
              , i = ""
              , r = void 0
              , o = void 0
              , s = ""
              , a = 0
              , l = [];
            for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(a++)) << 2 | (r = this.KEY_STR.indexOf(e.charAt(a++))) >> 4,
            n = (15 & r) << 4 | (o = this.KEY_STR.indexOf(e.charAt(a++))) >> 2,
            i = (3 & o) << 6 | (s = this.KEY_STR.indexOf(e.charAt(a++))),
            l.push(t),
            64 !== o && l.push(n),
            64 !== s && l.push(i),
            t = n = i = "",
            r = o = s = "",
            a < e.length; )
                ;
            return l
        }
    }]),
    e
}();
ExifRestore.initClass();
var cancel_report, show_report_form, contentLoaded = function(e, t) {
    var n = !1
      , i = !0
      , r = e.document
      , o = r.documentElement
      , s = r.addEventListener ? "addEventListener" : "attachEvent"
      , a = r.addEventListener ? "removeEventListener" : "detachEvent"
      , l = r.addEventListener ? "" : "on"
      , c = function i(o) {
        if ("readystatechange" !== o.type || "complete" === r.readyState)
            return ("load" === o.type ? e : r)[a](l + o.type, i, !1),
            !n && (n = !0) ? t.call(e, o.type || o) : void 0
    }
      , u = function e() {
        try {
            o.doScroll("left")
        } catch (t) {
            return void setTimeout(e, 50)
        }
        return c("poll")
    };
    if ("complete" !== r.readyState) {
        if (r.createEventObject && o.doScroll) {
            try {
                i = !e.frameElement
            } catch (e) {}
            i && u()
        }
        return r[s](l + "DOMContentLoaded", c, !1),
        r[s](l + "readystatechange", c, !1),
        e[s](l + "load", c, !1)
    }
};
Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover)
        return Dropzone.discover()
}
,
contentLoaded(window, Dropzone._autoDiscoverFunction),
function() {
    this.build_select2_multi = function(e) {
        return null == e && (e = "body"),
        $(".with-select2multi", e).each((function(e, t) {
            var n;
            return (n = $(t)).select2({
                tags: !0,
                width: "100%",
                ajax: {
                    url: n.data("request-url"),
                    dataType: "json",
                    delay: 500,
                    data: function(e) {
                        return $.extend({
                            search_term: e.term
                        }, {
                            offset: 10 * ((e.page || 1) - 1)
                        }, n.data("requestParams"))
                    },
                    processResults: function(e) {
                        return {
                            results: e
                        }
                    }
                },
                createTag: function(e) {
                    return {
                        id: e.term,
                        text: e.term + " (new)"
                    }
                }
            })
        }
        ))
    }
    ,
    ready((function() {
        return build_select2_multi()
    }
    ))
}
.call(this),
ready((function() {
    initSelect2VideoStreams()
}
)),
ready((function() {
    $("[data-auto-completion-url]").each((function() {
        var e = $(this).data("auto-completion-url")
          , t = $(this).data("placeholder");
        $(this).select2({
            minimumInputLength: 3,
            placeholder: t,
            ajax: {
                url: e,
                dataType: "json",
                delay: 500,
                data: function(e) {
                    return {
                        q: e.term
                    }
                },
                processResults: function(e) {
                    return {
                        results: e
                    }
                }
            }
        })
    }
    ))
}
)),
function() {
    var e = [].indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    this.showLoading = function() {
        return $("#loading-dimmer").fadeIn()
    }
    ,
    this.hideLoading = function() {
        return $("#loading-dimmer").fadeOut()
    }
    ,
    ready((function() {
        return $("[data-click-target]").on("click", (function(e) {
            if (0 === e.button)
                return $("#loading-dimmer").fadeIn(),
                document.location.href = $(this).attr("data-click-target")
        }
        )),
        $("a.show-spinner", "button.show-spinner").on("click", (function(e) {
            if (0 === e.button)
                return $("#loading-dimmer").fadeIn()
        }
        )),
        $("form.show-spinner").on("submit", (function() {
            return $("#loading-dimmer").fadeIn()
        }
        ))
    }
    )),
    this.getHiddenProp = function() {
        var t, n, i;
        if (n = ["webkit", "moz", "ms", "o"],
        void 0 !== document.hidden)
            return "hidden";
        for (t = 0; t < n.length; ) {
            if (i = n[t] + "Hidden",
            e.call(document, i) >= 0)
                return n[t] + "Hidden";
            t++
        }
        return null
    }
    ,
    this.isHidden = function() {
        var e;
        return !!(e = getHiddenProp()) && document[e]
    }
    ,
    ready((function() {
        return $("[data-toggle-visibility]").each((function() {
            return $(document.getElementById($(this).data("toggle-visibility"))).hide()
        }
        )),
        $(document).on("click", (function(e) {
            var t, n;
            if ((t = $(e.target)).is("[data-toggle-visibility]"))
                return (n = $(document.getElementById(t.data("toggle-visibility")))).is(":hidden") ? (t.text(t.data("toggle-text-off")),
                n.show()) : (t.text(t.data("toggle-text-on")),
                n.hide()),
                !1
        }
        ))
    }
    ))
}
.call(this),
ready((function() {
    $(document).on("click", ".js-copy-to-clipboard", (function() {
        copyTextToClipboard($(this).data("text"))
    }
    ))
}
)),
function() {
    var e, t;
    t = function() {
        var e;
        return e = $(this).find(".xtext").html(),
        $(this).find(".xtext").html($(this).data("toggle-text")),
        $(this).data("toggle-text", e),
        $(this).siblings(".explanation-text").toggle()
    }
    ,
    e = function() {
        var e, t;
        return t = $(this).find(".xtext").html(),
        $(this).find(".xtext").html($(this).data("toggle-text")),
        $(this).data("toggle-text", t),
        e = "#" + $(this).data("toggle-text-id") + "_text",
        $(e).toggle()
    }
    ,
    ready((function() {
        return $(".toggle-explanation-text").click(t),
        $(".toggle-answer-explanation-text").click(e)
    }
    )),
    $(document).on("change", "[data_select_url]", (function() {
        return window.location.replace(this.value)
    }
    ))
}
.call(this),
function(e) {
    "use strict";
    var t = function(n, i) {
        this.$element = e(n),
        this.options = e.extend({}, t.defaults, i)
    };
    t.defaults = {
        transition_delay: 300,
        refresh_speed: 50,
        display_text: "none",
        use_percentage: !0,
        percent_format: function(e) {
            return e + "%"
        },
        amount_format: function(e, t) {
            return e + " / " + t
        },
        update: e.noop,
        done: e.noop,
        fail: e.noop
    },
    t.prototype.transition = function() {
        var n = this.$element
          , i = n.parent()
          , r = this.$back_text
          , o = this.$front_text
          , s = this.options
          , a = n.attr("aria-valuetransitiongoal")
          , l = n.attr("aria-valuemin") || 0
          , c = n.attr("aria-valuemax") || 100
          , u = i.hasClass("vertical")
          , d = s.update && "function" == typeof s.update ? s.update : t.defaults.update
          , h = s.done && "function" == typeof s.done ? s.done : t.defaults.done
          , f = s.fail && "function" == typeof s.fail ? s.fail : t.defaults.fail;
        if (a) {
            var p, m = Math.round(100 * (a - l) / (c - l));
            if ("center" === s.display_text && !r && !o)
                this.$back_text = r = e("<span>").addClass("progressbar-back-text").prependTo(i),
                this.$front_text = o = e("<span>").addClass("progressbar-front-text").prependTo(n),
                u ? (p = i.css("height"),
                r.css({
                    height: p,
                    "line-height": p
                }),
                o.css({
                    height: p,
                    "line-height": p
                }),
                e(window).resize((function() {
                    p = i.css("height"),
                    r.css({
                        height: p,
                        "line-height": p
                    }),
                    o.css({
                        height: p,
                        "line-height": p
                    })
                }
                ))) : (p = i.css("width"),
                o.css({
                    width: p
                }),
                e(window).resize((function() {
                    p = i.css("width"),
                    o.css({
                        width: p
                    })
                }
                )));
            setTimeout((function() {
                var e, t, f, p, g;
                u ? n.css("height", m + "%") : n.css("width", m + "%");
                var v = setInterval((function() {
                    u ? (f = n.height(),
                    p = i.height()) : (f = n.width(),
                    p = i.width()),
                    e = Math.round(100 * f / p),
                    t = Math.round(f / p * (c - l)),
                    e >= m && (e = m,
                    t = a,
                    h(),
                    clearInterval(v)),
                    "none" !== s.display_text && (g = s.use_percentage ? s.percent_format(e) : s.amount_format(t, c),
                    "fill" === s.display_text ? n.text(g) : "center" === s.display_text && (r.text(g),
                    o.text(g))),
                    n.attr("aria-valuenow", t),
                    d(e)
                }
                ), s.refresh_speed)
            }
            ), s.transition_delay)
        } else
            f("aria-valuetransitiongoal not set")
    }
    ;
    var n = e.fn.progressbar;
    e.fn.progressbar = function(n) {
        return this.each((function() {
            var i = e(this)
              , r = i.data("bs.progressbar")
              , o = "object" == typeof n && n;
            r || i.data("bs.progressbar", r = new t(this,o)),
            r.transition()
        }
        ))
    }
    ,
    e.fn.progressbar.Constructor = t,
    e.fn.progressbar.noConflict = function() {
        return e.fn.progressbar = n,
        this
    }
}(window.jQuery),
function(e) {
    function t(t) {
        function i() {
            t ? s.removeData(t) : h && delete n[h]
        }
        function o() {
            l.id = setTimeout((function() {
                l.fn()
            }
            ), f)
        }
        var s, a = this, l = {}, c = t ? e.fn : e, u = arguments, d = 4, h = u[1], f = u[2], p = u[3];
        if ("string" != typeof h && (d--,
        h = t = 0,
        f = u[1],
        p = u[2]),
        t ? (s = a.eq(0)).data(t, l = s.data(t) || {}) : h && (l = n[h] || (n[h] = {})),
        l.id && clearTimeout(l.id),
        delete l.id,
        p)
            l.fn = function(e) {
                "string" == typeof p && (p = c[p]),
                !0 !== p.apply(a, r.call(u, d)) || e ? i() : o()
            }
            ,
            o();
        else {
            if (l.fn)
                return void 0 === f ? i() : l.fn(!1 === f),
                !0;
            i()
        }
    }
    var n = {}
      , i = "doTimeout"
      , r = Array.prototype.slice;
    e[i] = function() {
        return t.apply(window, [0].concat(r.call(arguments)))
    }
    ,
    e.fn[i] = function() {
        var e = r.call(arguments)
          , n = t.apply(this, [i + e[0]].concat(e));
        return "number" == typeof e[0] || "number" == typeof e[1] ? this : n
    }
}(jQuery),
function(e) {
    e.fn.equalHeights = function(t) {
        var n = 0
          , i = e(this);
        return i.each((function() {
            if (t && "undefined" != t || (t = 0),
            i.css("min-height", "0px"),
            e(window).innerWidth() < t)
                n = "0";
            else {
                var r = e(this).innerHeight();
                r > n && (n = r)
            }
        }
        )),
        i.css("min-height", n)
    }
    ,
    ready((function() {
        e("[data-equal]").each((function() {
            var t = e(this)
              , n = t.data("equal");
            minwidth = t.data("equal-minwidth"),
            t.find(n).equalHeights(minwidth)
        }
        ))
    }
    )),
    e(window).on("load", (function() {
        e("[data-equal]").each((function() {
            var t = e(this)
              , n = t.data("equal");
            minwidth = t.data("equal-minwidth"),
            t.find(n).equalHeights(minwidth)
        }
        ))
    }
    )),
    e(document).ajaxComplete((function() {
        e("[data-equal]").each((function() {
            var t = e(this)
              , n = t.data("equal");
            minwidth = t.data("equal-minwidth"),
            t.find(n).equalHeights(minwidth)
        }
        ))
    }
    )),
    e(window).on("resize", (function() {
        e("[data-equal]").each((function() {
            var t = e(this)
              , n = t.data("equal");
            minwidth = t.data("equal-minwidth"),
            t.find(n).equalHeights(minwidth)
        }
        ))
    }
    ))
}(jQuery),
$.circleProgress = {
    defaults: {
        value: 0,
        size: 100,
        startAngle: -Math.PI,
        thickness: "auto",
        fill: {
            gradient: ["#3aeabb", "#fdd250"]
        },
        emptyFill: "rgba(0, 0, 0, .1)",
        animation: {
            duration: 1200,
            easing: "circleProgressEasing"
        },
        animationStartValue: 0
    },
    reverse: !1
},
$.easing.circleProgressEasing = function(e, t, n, i, r) {
    return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
}
,
$.fn.circleProgress = function(e) {
    if ("string" == typeof e && "widget" != e && "redraw" != e)
        throw Error("Only 2 commands supported: 'widget' and 'redraw'");
    return "widget" == e ? this.data("circle-progress").widget : this.each((function() {
        function t() {
            var e = $("<canvas>")[0];
            e.width = d,
            e.height = d,
            e.getContext("2d").drawImage(b, 0, 0, d, d),
            u = w.createPattern(e, "no-repeat"),
            s.animation || n(p)
        }
        function n(e) {
            w.clearRect(0, 0, d, d),
            i(e),
            r(e)
        }
        function i(e) {
            w.save(),
            w.beginPath(),
            s.reverse ? w.arc(h, h, h - f / 2, m - 2 * Math.PI * e, m) : w.arc(h, h, h - f / 2, m, m + 2 * Math.PI * e),
            w.lineWidth = f,
            w.strokeStyle = u,
            w.stroke(),
            w.restore()
        }
        function r(e) {
            w.save(),
            e < 1 && (w.beginPath(),
            e <= 0 ? w.arc(h, h, h - f / 2, 0, 2 * Math.PI) : s.reverse ? w.arc(h, h, h - f / 2, m, m - 2 * Math.PI * e) : w.arc(h, h, h - f / 2, m + 2 * Math.PI * e, m),
            w.lineWidth = f,
            w.strokeStyle = g,
            w.stroke()),
            w.restore()
        }
        function o(e) {
            a.trigger("circle-animation-start"),
            $(y).stop(!0, !0).css({
                animationProgress: 0
            }).animate({
                animationProgress: 1
            }, $.extend({}, s.animation, {
                step: function(t) {
                    var i = v * (1 - t) + e * t;
                    n(i),
                    a.trigger("circle-animation-progress", [t, i])
                },
                complete: function() {
                    a.trigger("circle-animation-end")
                }
            }))
        }
        var s, a = $(this), l = "circle-progress", c = a.data(l);
        c || (c = {
            options: null,
            widget: null
        },
        a.data(l, c)),
        void 0 === e || "redraw" == e ? s = c.options : (s = $.extend({}, $.circleProgress.defaults, e),
        c.options = s);
        var u, d = s.size, h = d / 2, f = d / 14, p = s.value, m = s.startAngle, g = s.emptyFill, v = s.animationStartValue;
        $.isNumeric(s.thickness) && (f = s.thickness);
        var y = c.widget;
        y || (y = $("<canvas>").prependTo(a)[0],
        c.widget = y),
        y.width = d,
        y.height = d;
        var b, w = y.getContext("2d");
        if (!s.fill)
            throw Error("The fill is not specified!");
        if (s.fill.color && (u = s.fill.color),
        s.fill.gradient) {
            var _ = s.fill.gradient;
            if (1 == _.length)
                u = _[0];
            else if (_.length > 1) {
                for (var x = w.createLinearGradient(0, 0, d, 0), k = 0; k < _.length; k++)
                    x.addColorStop(k / (_.length - 1), _[k]);
                u = x
            }
        }
        s.fill.image && (s.fill.image instanceof Image ? b = s.fill.image : (b = new Image).src = s.fill.image,
        b.complete ? t() : b.onload = t());
        s.animation ? o(p) : n(p)
    }
    ))
}
,
ready((function() {
    $(".pa-flow").length && ($(".component-wrapper").each((function(e, t) {
        flow_component_dates($(t))
    }
    )),
    build_assessment_flow($(".flow-component"), 0),
    $(window).resize((function() {
        $.doTimeout("resize", 200, (function() {
            var e = $(".flow-component").first().offset().top
              , t = $.map($(".flow-component"), (function(t) {
                if ($(t).offset().top != e)
                    return t
            }
            ));
            build_assessment_flow($(".flow-component"), 0),
            t.length && build_assessment_flow(t, 25)
        }
        ))
    }
    )),
    $(window).trigger("resize"))
}
)),
$.fn.changeTimeago = function(e) {
    return $(this).attr("title", e).data("timeago", null).timeago()
}
,
$.fn.autosave = function() {
    var e, t, n, i, r, o, s, a, l, c, u;
    "form" === $(this).prop("tagName").toLowerCase() ? (i = !1,
    r = -1,
    a = $(this),
    u = $(a).data("autosave-url"),
    t = 1e4,
    n = $($(a).data("autosave-button")),
    c = $($(a).data("submit-button")),
    l = $($(a).data("last-saved-container")),
    $(window).on("beforeunload", (function() {
        e(!1)
    }
    )),
    $(a).change((function() {
        i || (i = !0)
    }
    )),
    $(a).find("textarea").on("keydown change input", (function() {
        i || (i = !0)
    }
    )),
    $(n).click((function(t) {
        clearTimeout(r),
        i = !0,
        e(),
        t.preventDefault()
    }
    )),
    o = function() {
        $(n).html($(n).data("save-text")).attr("disabled", "disabled").addClass("disabled"),
        $(c).attr("disabled", "disabled").addClass("disabled")
    }
    ,
    s = function(e) {
        $(n).html(e).attr("disabled", !1).removeClass("disabled"),
        $(c).attr("disabled", !1).removeClass("disabled")
    }
    ,
    e = function(c) {
        var d;
        null == c && (c = !0),
        i ? (d = $(n).html(),
        o(),
        c || showLoading(),
        $.ajax({
            type: "PATCH",
            url: u,
            data: $(a).serialize(),
            async: c,
            headers: {
                Accept: "application/json; charset=utf-8"
            },
            dataType: "json",
            error: function() {
                $(l).find(".last_saved").html('<span class="red">' + $(a).data("remote-error-message") + "</span>")
            },
            success: function(n) {
                i = !1,
                n.success ? ($(l).find(".last_saved").changeTimeago(n.timestamp),
                r = setTimeout(e, t)) : n.hasOwnProperty("message") ? $(l).find(".last_saved").html('<span class="red">' + n.message + "</span>") : $(l).find(".last_saved").html('<span class="red">' + $(a).data("remote-error-message") + "</span>")
            },
            complete: function() {
                $(l).removeClass("hidden"),
                s(d)
            }
        })) : r = setTimeout(e, t)
    }
    ,
    r = setTimeout(e, t)) : console.error("Tried to initialize autosave on a non-form tag.")
}
,
ready((function() {
    $(".js-submit-confirm").each((function(e, t) {
        $(t).submit((function() {
            return "" === $(t).data("confirm-message") || (xuiSwal.fire({
                title: $(t).data("confirm-title"),
                text: $(t).data("confirm-message"),
                icon: "warning",
                confirmButtonText: $(t).data("confirm-button") || I18n.t("global.confirm"),
                cancelButtonText: $(t).data("cancel-button") || I18n.t("global.cancel")
            }).then((function(e) {
                e.value ? (showLoading(),
                $(t).off("submit"),
                $(t).submit()) : $(t).data("confirmation-answer", !1)
            }
            )),
            !1)
        }
        ))
    }
    )),
    $(".js-swal-popup").each((function(e, t) {
        $(t).click((function(e) {
            e.preventDefault(),
            xuiSwal.fire({
                title: $(t).data("popup-title"),
                text: $(t).data("popup-message"),
                icon: "info"
            })
        }
        ))
    }
    )),
    $("button[form]").each((function(e, t) {
        $(t).click((function() {
            $("#" + $(t).attr("form")).submit()
        }
        ))
    }
    ))
}
)),
ready((function() {
    function e() {
        var i = $(".sweet-alert").find("button.confirm");
        if (0 == t)
            return i.prop("disabled", !1),
            i.removeClass("disabled"),
            void i.html(I18n.t("peer_assessment.submission.confirmation_window.confirm_button"));
        i.html(t),
        t -= 1,
        n = window.setTimeout(e, 1e3)
    }
    var t, n, i = !1;
    if (1 == $("#submission_form_submit_button").length) {
        var r = $("#submission_form");
        r.submit((function() {
            if (window.clearTimeout(n),
            t = 4,
            1 == $("#user_files").length && $("#user_files").find("tbody").children().length > 0) {
                if (xuiSwal.fire({
                    title: I18n.t("peer_assessment.submission.confirmation_window.title"),
                    text: I18n.t("peer_assessment.submission.confirmation_window.text"),
                    icon: "info",
                    confirmButtonText: I18n.t("peer_assessment.submission.confirmation_window.confirm_button"),
                    cancelButtonText: I18n.t("global.cancel")
                }).then((function(e) {
                    e.value && xuiSwal.fire({
                        title: I18n.t("peer_assessment.submission.submit_title"),
                        text: I18n.t("peer_assessment.submission.submit"),
                        icon: "warning",
                        confirmButtonText: I18n.t("global.confirm"),
                        cancelButtonText: I18n.t("global.cancel")
                    }).then((function(e) {
                        e.value && (showLoading(),
                        r.off("submit"),
                        r.submit())
                    }
                    ))
                }
                )),
                !i) {
                    var o = $(".sweet-alert").find("button.confirm");
                    o.prop("disabled", !0),
                    o.addClass("disabled"),
                    e(),
                    i = !0
                }
                var s = $("#user_files").find("table").clone();
                s.addClass("mt10"),
                s.find(".js-delete-file").remove(),
                s.find("thead").children().remove(),
                $(s.find("tr")).each((function(e, t) {
                    $($(t).children()[1]).remove()
                }
                )),
                $(".sweet-alert").find("p").first().append(s)
            } else
                xuiSwal.fire({
                    title: I18n.t("peer_assessment.submission.submit_title"),
                    text: I18n.t("peer_assessment.submission.submit"),
                    icon: "warning",
                    confirmButtonText: I18n.t("global.confirm"),
                    cancelButtonText: I18n.t("global.cancel")
                }).then((function(e) {
                    e.value && (showLoading(),
                    r.off("submit"),
                    r.submit())
                }
                ));
            return !1
        }
        )),
        r.data().hasOwnProperty("autosaveUrl") && r.autosave(),
        $("#submission_form_submit_button").click((function() {
            submit_form_force_events(document.getElementById("submission_form"))
        }
        ));
        var o = r.data("allowed-file-types")
          , s = r.data("max-file-size")
          , a = r.data("assessment-id")
          , l = r.data("current-step-id")
          , c = r.data("authenticity-token")
          , u = I18n.t("peer_assessment.files.download_button")
          , d = I18n.t("peer_assessment.submission.delete_file_message")
          , h = I18n.t("peer_assessment.submission.delete_file");
        if ($("#submission_upload")) {
            var f = new Dropzone("#submission_upload",{
                maxFilesize: s,
                uploadMultiple: !1,
                parallelUploads: 1,
                acceptedFiles: o,
                dictDefaultMessage: I18n.t("peer_assessment.files.upload_default_message"),
                timeout: 0
            });
            $(".js-delete-file").each((function(e, t) {
                register_deletion_handler(t, f)
            }
            )),
            "on"in f && (f.on("addedfile", (function() {
                $("#submission_form_submit_button").prop("disabled", !0).addClass("disabled")
            }
            )),
            f.on("sending", (function(e, t, n) {
                n.append("key", $("#submission_upload").data("key") + xui.upload.sanitize(e.name)),
                n.append("Content-Type", e.type)
            }
            )),
            f.on("success", (function(e) {
                e.previewElement.className = "dz-preview dz-processing dz-image-preview",
                $.ajax({
                    url: $("#submission_upload").data("url"),
                    method: "POST",
                    data: {
                        upload_uri: $("#submission_upload").data("prefix") + xui.upload.sanitize(e.name)
                    },
                    success: function(t) {
                        e.previewElement.className = "dz-preview dz-processing dz-success dz-image-preview",
                        $("#user_files table").removeClass("hidden"),
                        $("#user_files tbody").append("<tr><td>" + xui.upload.sanitize(e.name) + "</td><td>" + humanFileSize(e.size, !0) + '</td><td><a class="btn btn-primary btn-xs" href="' + t.upload.download_url + '" target="blank">' + u + '</a><form accept-charset="UTF-8" action="/peer_assessments/' + a + "/steps/" + l + '/submission/remove_file" class="inline-block js-delete-file" data-confirm-text="' + d + '" data-confirm-title="' + d + '" enctype="multipart/form-data" method="post"><div style="margin:0; padding:0; display:inline"><input name="utf8" type="hidden" value="\u2713"><input name="_method" type="hidden" value="delete"><input name="authenticity_token" type="hidden" value="' + c + '"></div><input id="file_id" name="file_id" type="hidden" value="' + t.upload.id + '"><input id="peer_assessment_id" name="peer_assessment_id" type="hidden" value="' + a + '"><button class="btn btn-xs btn-danger ml5" type="submit">' + h + "</button></form></td></tr>"),
                        register_deletion_handler($("#user_files form").last(), f, e)
                    },
                    error: function() {
                        e.previewElement.className = "dz-preview dz-processing dz-image-preview dz-error"
                    }
                }),
                $("#submission_form_submit_button").prop("disabled", !1).removeClass("disabled")
            }
            )),
            f.on("error", (function(e) {
                window.setTimeout((function() {
                    f.removeFile(e)
                }
                ), 5e3),
                $("#submission_form_submit_button").prop("disabled", !1).removeClass("disabled")
            }
            )))
        }
    }
}
)),
ready((function() {
    return $("#report_button li a").each((function() {
        $(this).click((function(e) {
            e.preventDefault(),
            show_report_form($(this).data("reason"))
        }
        ))
    }
    )),
    $("#report_cancel_button").click((function(e) {
        cancel_report(),
        e.preventDefault()
    }
    ))
}
)),
show_report_form = function(e) {
    $("#report_form").removeClass("hidden"),
    $("#xikolo_peer_assessment_conflict_reason").find('option[value="' + e + '"]').attr("selected", !0),
    $("#report_form textarea").focus()
}
,
cancel_report = function() {
    $("#report_form").addClass("hidden")
}
,
this.review_error = function(e) {
    return $("#" + e).addClass("error-border")
}
,
ready((function() {
    $(".delete_review").each((function(e, t) {
        $(t).submit((function(e) {
            return e.preventDefault(),
            xuiSwal.fire({
                title: I18n.t("peer_assessment.train_samples.delete_review_title"),
                text: I18n.t("peer_assessment.train_samples.delete_review"),
                icon: "warning",
                confirmButtonText: I18n.t("global.confirm"),
                cancelButtonText: I18n.t("global.cancel")
            }).then((function(e) {
                e.value && (showLoading(),
                $(t).off("submit"),
                $(t).submit())
            }
            )),
            !1
        }
        ))
    }
    )),
    $(".js-show-loader").each((function(e, t) {
        $(t).click((function() {
            return showLoading()
        }
        ))
    }
    )),
    $("#open_training_form").submit((function(e) {
        return e.preventDefault(),
        xuiSwal.fire({
            title: I18n.t("peer_assessment.train_samples.open_training_title"),
            text: I18n.t("peer_assessment.train_samples.open_training_message"),
            icon: "warning",
            confirmButtonText: I18n.t("global.confirm"),
            cancelButtonText: I18n.t("global.cancel")
        }).then((function(e) {
            e.value && $("#open_training_form").off("submit").submit()
        }
        )),
        !1
    }
    ))
}
)),
ready((function() {
    $("#request-regrading-button").click((function() {
        $("#request-regrading-form").removeClass("hidden"),
        $("#request-regrading-button").prop("disabled", !0)
    }
    )),
    $("#request-regrading-cancel").click((function() {
        $("#request-regrading-form").addClass("hidden"),
        $("#request-regrading-button").prop("disabled", !1)
    }
    ))
}
)),
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60)
}
,
ready((function() {
    $("#rating-stars:not(.rendered)").length && $("#rating-stars .xi-icon").each((function(e, t) {
        $(t).click((function() {
            "1" == $(t).data("value") ? $(t).hasClass("fa-solid") ? $("#rating-stars .xi-icon.fa-solid").length > 1 ? ($(t).nextAll().each((function(e, t) {
                $(t).removeClass("fa-solid").addClass("fa-regular")
            }
            )),
            $("#rating-value").val(1),
            $("#rating").html(1)) : ($(t).removeClass("fa-solid").addClass("fa-regular"),
            $("#rating-value").val(0),
            $("#rating").html(0)) : ($(t).removeClass("fa-regular").addClass("fa-solid"),
            $("#rating-value").val(1),
            $("#rating").html(1)) : ($(t).removeClass("fa-regular").addClass("fa-solid"),
            $(t).prevAll().each((function(e, t) {
                $(t).removeClass("fa-regular").addClass("fa-solid")
            }
            )),
            $(t).nextAll().each((function(e, t) {
                $(t).removeClass("fa-solid").addClass("fa-regular")
            }
            )),
            $("#rating-value").val($(t).data("value")),
            $("#rating").html($(t).data("value")))
        }
        ))
    }
    ))
}
)),
ready((function() {
    $(".team_evaluation").length && $(".team_evaluation").each((function(e, t) {
        $(t).find(".rating-stars .xi-icon").each((function(e, n) {
            $(n).click((function() {
                $(t).find(".rating-value").val() == $(n).data("value") ? ($(n).removeClass("fa-solid").addClass("fa-regular"),
                $(n).prevAll().each((function(e, t) {
                    $(t).removeClass("fa-solid").addClass("fa-regular")
                }
                )),
                $(n).nextAll().each((function(e, t) {
                    $(t).removeClass("fa-solid").addClass("fa-regular")
                }
                )),
                $(t).find(".rating-value").val(""),
                $(t).find(".rating-label").html("0")) : ($(n).removeClass("fa-regular").addClass("fa-solid"),
                $(n).prevAll().each((function(e, t) {
                    $(t).removeClass("fa-regular").addClass("fa-solid")
                }
                )),
                $(n).nextAll().each((function(e, t) {
                    $(t).removeClass("fa-solid").addClass("fa-regular")
                }
                )),
                $(t).find(".rating-value").val($(n).data("value")),
                $(t).find(".rating-label").html($(n).data("label")))
            }
            ))
        }
        ))
    }
    ))
}
)),
ready((function() {
    $(".js-hide-rubrics").each((function(e, t) {
        $(t).click((function() {
            $($(t).data("hide")).toggleClass("hidden");
            var e = $(t).html();
            $(t).html($(t).data("alternative-text")),
            $(t).data("alternative-text", e)
        }
        ))
    }
    )),
    $("#direct-search-form").submit((function() {
        $("#direct-search-form").attr("action", $("#direct-search-form").attr("action") + $("#id-input").val()),
        $("#id-input").attr("disabled", "disabled")
    }
    ))
}
)),
ready((function() {
    $(".js-back-button").each((function(e, t) {
        $(t).click((function() {
            document.referrer.split("/")[2] == location.host ? window.location.href = document.referrer : window.location.href = $(t).data("alternative-url")
        }
        ))
    }
    ))
}
)),
ready((function() {
    $("#generate-gallery-button").click((function() {
        showLoading(),
        $("#generate-error-message").addClass("hidden"),
        $.get($("#generate-gallery-button").data("url"), (function(e) {
            hideLoading(),
            $("#generated-gallery").val(e),
            $("#gallery-modal").modal()
        }
        )).fail((function() {
            $("#generate-error-message").removeClass("hidden"),
            hideLoading()
        }
        ))
    }
    ))
}
)),
function() {
    function e(e) {
        var i = $(e);
        i.submit((function(e) {
            return e.preventDefault(),
            n(i.find('button[type="submit"]')),
            xuiSwal.fire({
                title: I18n.t("peer_assessment.notes.delete_confirm_title"),
                text: I18n.t("peer_assessment.notes.delete_confirm_text"),
                icon: "warning",
                confirmButtonText: I18n.t("global.delete"),
                cancelButtonText: I18n.t("global.cancel")
            }).then((function(e) {
                e.value && $.post(i.attr("action"), i.serialize()).done((function(e) {
                    $("#" + e.id).remove()
                }
                )).fail((function(e) {
                    $("#" + e.id).remove(),
                    r(e),
                    t(i.find('button[type="submit"]'))
                }
                ))
            }
            )),
            !1
        }
        ))
    }
    function t(e) {
        e.prop("disabled", !1).removeClass("disabled")
    }
    function n(e) {
        e.prop("disabled", !0).addClass("disabled")
    }
    function i(t) {
        new_note = o.clone(),
        new_note.attr("id", t.id),
        $(new_note.find("td")[0]).html(t.author),
        $(new_note.find("td")[1]).html(t.created_at),
        $(new_note.find("td")[2]).html(t.text);
        var n = new_note.find(".js-note-delete");
        n.attr("action", n.attr("action") + t.id),
        e(n),
        $("#notes").find("tbody").append(new_note)
    }
    function r(e) {
        xuiSwal.fire(I18n.t("peer_assessment.notes.error_header"), e.responseJSON.message, "error")
    }
    var o, s;
    ready((function() {
        (s = $("#new_note_form")).length && (o = $("#note_template").remove().removeAttr("id"),
        $("#edit_template").remove().removeAttr("id"),
        s.submit((function() {
            return n(s.find('button[type="submit"]')),
            $.post("/notes", s.serialize()).done((function(e) {
                i(e),
                s.find("textarea").val("")
            }
            )).fail((function(e) {
                r(e)
            }
            )).always((function() {
                t(s.find('button[type="submit"]'))
            }
            )),
            !1
        }
        )),
        $(".js-note-delete").each((function(t, n) {
            e(n)
        }
        )))
    }
    ))
}(),
function() {
    $((function() {
        var e, t, n, i, r, o, s, a, l, c, u, d, h, f, p;
        if ($(document).on("click", "tr[data-link]", (function() {
            return window.location = $(this).data("link")
        }
        )),
        $(".box-plot").length > 0) {
            for (p = [],
            r = 0,
            a = (h = $(".box-plot")).length; r < a; r++) {
                for (e = h[r],
                d = [],
                n = o = 0,
                l = (f = (t = (e = $(e)).data("chart-data")).outliers).length; o < l; n = ++o)
                    for (s = 0,
                    c = (i = f[n]).length; s < c; s++)
                        u = i[s],
                        d.push([n, u]);
                p.push(e.highcharts({
                    chart: {
                        type: "boxplot"
                    },
                    title: {
                        text: "Box Plot"
                    },
                    legend: {
                        enabled: !1
                    },
                    xAxis: {
                        categories: t.groups,
                        title: {
                            text: "Experiment No."
                        }
                    },
                    yAxis: {
                        title: {
                            text: "Observations"
                        }
                    },
                    series: [{
                        name: "Observations",
                        data: t.data,
                        tooltip: {
                            headerFormat: "<em>Experiment No {point.key}</em><br/>"
                        }
                    }, {
                        name: "Outlier",
                        color: Highcharts.getOptions().colors[0],
                        type: "scatter",
                        data: d,
                        marker: {
                            fillColor: "white",
                            lineWidth: 1,
                            lineColor: Highcharts.getOptions().colors[0]
                        },
                        tooltip: {
                            pointFormat: "Observation: {point.y}"
                        }
                    }]
                }))
            }
            return p
        }
    }
    ))
}
.call(this),
window.Modernizr = function(e, t, n) {
    function i(e) {
        b.cssText = e
    }
    function r(e, t) {
        return i(k.join(e + ";") + (t || ""))
    }
    function o(e, t) {
        return typeof e === t
    }
    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function a(e, t) {
        for (var i in e) {
            var r = e[i];
            if (!s(r, "-") && b[r] !== n)
                return "pfx" != t || r
        }
        return !1
    }
    function l(e, t, i) {
        for (var r in e) {
            var s = t[e[r]];
            if (s !== n)
                return !1 === i ? e[r] : o(s, "function") ? s.bind(i || t) : s
        }
        return !1
    }
    function c(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1)
          , r = (e + " " + C.join(i + " ") + i).split(" ");
        return o(t, "string") || o(t, "undefined") ? a(r, t) : l(r = (e + " " + S.join(i + " ") + i).split(" "), t, n)
    }
    function u() {
        p.input = function(n) {
            for (var i = 0, r = n.length; i < r; i++)
                A[n[i]] = n[i]in w;
            return A.list && (A.list = !!t.createElement("datalist") && !!e.HTMLDataListElement),
            A
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        p.inputtypes = function(e) {
            for (var i, r, o, s = 0, a = e.length; s < a; s++)
                w.setAttribute("type", r = e[s]),
                (i = "text" !== w.type) && (w.value = _,
                w.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(r) && w.style.WebkitAppearance !== n ? (g.appendChild(w),
                i = (o = t.defaultView).getComputedStyle && "textfield" !== o.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight,
                g.removeChild(w)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? w.checkValidity && !1 === w.checkValidity() : w.value != _)),
                D[e[s]] = !!i;
            return D
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, h, f = "2.6.1", p = {}, m = !0, g = t.documentElement, v = "modernizr", y = t.createElement(v), b = y.style, w = t.createElement("input"), _ = ":)", x = {}.toString, k = " -webkit- -moz- -o- -ms- ".split(" "), $ = "Webkit Moz O ms", C = $.split(" "), S = $.toLowerCase().split(" "), T = {
        svg: "http://www.w3.org/2000/svg"
    }, E = {}, D = {}, A = {}, M = [], I = M.slice, P = function(e, n, i, r) {
        var o, s, a, l = t.createElement("div"), c = t.body, u = c || t.createElement("body");
        if (parseInt(i, 10))
            for (; i--; )
                (a = t.createElement("div")).id = r ? r[i] : v + (i + 1),
                l.appendChild(a);
        return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""),
        l.id = v,
        (c ? l : u).innerHTML += o,
        u.appendChild(l),
        c || (u.style.background = "",
        g.appendChild(u)),
        s = n(l, e),
        c ? l.parentNode.removeChild(l) : u.parentNode.removeChild(u),
        !!s
    }, O = function(t) {
        var n, i = e.matchMedia || e.msMatchMedia;
        return i ? i(t).matches : (P("@media " + t + " { #" + v + " { position: absolute; } }", (function(t) {
            n = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }
        )),
        n)
    }, L = function() {
        function e(e, r) {
            r = r || t.createElement(i[e] || "div");
            var s = (e = "on" + e)in r;
            return s || (r.setAttribute || (r = t.createElement("div")),
            r.setAttribute && r.removeAttribute && (r.setAttribute(e, ""),
            s = o(r[e], "function"),
            o(r[e], "undefined") || (r[e] = n),
            r.removeAttribute(e))),
            r = null,
            s
        }
        var i = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), j = {}.hasOwnProperty;
    for (var N in h = o(j, "undefined") || o(j.call, "undefined") ? function(e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    }
    : function(e, t) {
        return j.call(e, t)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var n = I.call(arguments, 1)
          , i = function() {
            if (this instanceof i) {
                var r = function() {};
                r.prototype = t.prototype;
                var o = new r
                  , s = t.apply(o, n.concat(I.call(arguments)));
                return Object(s) === s ? s : o
            }
            return t.apply(e, n.concat(I.call(arguments)))
        };
        return i
    }
    ),
    E.flexbox = function() {
        return c("flexWrap")
    }
    ,
    E.canvas = function() {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
    }
    ,
    E.canvastext = function() {
        return !!p.canvas && !!o(t.createElement("canvas").getContext("2d").fillText, "function")
    }
    ,
    E.webgl = function() {
        return !!e.WebGLRenderingContext
    }
    ,
    E.touch = function() {
        var n;
        return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : P(["@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), (function(e) {
            n = 9 === e.offsetTop
        }
        )),
        n
    }
    ,
    E.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    E.postmessage = function() {
        return !!e.postMessage
    }
    ,
    E.websqldatabase = function() {
        return !!e.openDatabase
    }
    ,
    E.indexedDB = function() {
        return !!c("indexedDB", e)
    }
    ,
    E.hashchange = function() {
        return L("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }
    ,
    E.history = function() {
        return !!e.history && !!history.pushState
    }
    ,
    E.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable"in e || "ondragstart"in e && "ondrop"in e
    }
    ,
    E.websockets = function() {
        return "WebSocket"in e || "MozWebSocket"in e
    }
    ,
    E.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"),
        s(b.backgroundColor, "rgba")
    }
    ,
    E.hsla = function() {
        return i("background-color:hsla(120,40%,100%,.5)"),
        s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla")
    }
    ,
    E.multiplebgs = function() {
        return i("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(b.background)
    }
    ,
    E.backgroundsize = function() {
        return c("backgroundSize")
    }
    ,
    E.borderimage = function() {
        return c("borderImage")
    }
    ,
    E.borderradius = function() {
        return c("borderRadius")
    }
    ,
    E.boxshadow = function() {
        return c("boxShadow")
    }
    ,
    E.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }
    ,
    E.opacity = function() {
        return r("opacity:.55"),
        /^0.55$/.test(b.opacity)
    }
    ,
    E.cssanimations = function() {
        return c("animationName")
    }
    ,
    E.csscolumns = function() {
        return c("columnCount")
    }
    ,
    E.cssgradients = function() {
        var e = "background-image:"
          , t = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , n = "linear-gradient(left top,#9f9, white);";
        return i((e + "-webkit- ".split(" ").join(t + e) + k.join(n + e)).slice(0, -e.length)),
        s(b.backgroundImage, "gradient")
    }
    ,
    E.cssreflections = function() {
        return c("boxReflect")
    }
    ,
    E.csstransforms = function() {
        return !!c("transform")
    }
    ,
    E.csstransforms3d = function() {
        var e = !!c("perspective");
        return e && "webkitPerspective"in g.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", (function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }
        )),
        e
    }
    ,
    E.csstransitions = function() {
        return c("transition")
    }
    ,
    E.fontface = function() {
        var e;
        return P('@font-face {font-family:"font";src:url("https://")}', (function(n, i) {
            var r = t.getElementById("smodernizr")
              , o = r.sheet || r.styleSheet
              , s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
        }
        )),
        e
    }
    ,
    E.generatedcontent = function() {
        var e;
        return P(['#modernizr:after{content:"', _, '";visibility:hidden}'].join(""), (function(t) {
            e = t.offsetHeight >= 1
        }
        )),
        e
    }
    ,
    E.video = function() {
        var e = t.createElement("video")
          , n = !1;
        try {
            (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (e) {}
        return n
    }
    ,
    E.audio = function() {
        var e = t.createElement("audio")
          , n = !1;
        try {
            (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (e) {}
        return n
    }
    ,
    E.localstorage = function() {
        try {
            return localStorage.setItem(v, v),
            localStorage.removeItem(v),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    E.sessionstorage = function() {
        try {
            return sessionStorage.setItem(v, v),
            sessionStorage.removeItem(v),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    E.webworkers = function() {
        return !!e.Worker
    }
    ,
    E.applicationcache = function() {
        return !!e.applicationCache
    }
    ,
    E.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(T.svg, "svg").createSVGRect
    }
    ,
    E.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>",
        (e.firstChild && e.firstChild.namespaceURI) == T.svg
    }
    ,
    E.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(T.svg, "animate")))
    }
    ,
    E.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(T.svg, "clipPath")))
    }
    ,
    E)
        h(E, N) && (d = N.toLowerCase(),
        p[d] = E[N](),
        M.push((p[d] ? "" : "no-") + d));
    return p.input || u(),
    p.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var i in e)
                h(e, i) && p.addTest(i, e[i]);
        else {
            if (e = e.toLowerCase(),
            p[e] !== n)
                return p;
            t = "function" == typeof t ? t() : t,
            m && (g.className += " " + (t ? "" : "no-") + e),
            p[e] = t
        }
        return p
    }
    ,
    i(""),
    y = w = null,
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            i.insertBefore(n.lastChild, i.firstChild)
        }
        function i() {
            var e = v.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function r(e) {
            var t = g[e[p]];
            return t || (t = {},
            m++,
            e[p] = m,
            g[m] = t),
            t
        }
        function o(e, n, i) {
            return n || (n = t),
            u ? n.createElement(e) : (i || (i = r(n)),
            (o = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren && !h.test(e) ? i.frag.appendChild(o) : o);
            var o
        }
        function s(e, n) {
            if (e || (e = t),
            u)
                return e.createDocumentFragment();
            for (var o = (n = n || r(e)).frag.cloneNode(), s = 0, a = i(), l = a.length; s < l; s++)
                o.createElement(a[s]);
            return o
        }
        function a(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return v.shivMethods ? o(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, (function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }
            )) + ");return n}")(v, t.frag)
        }
        function l(e) {
            e || (e = t);
            var i = r(e);
            return v.shivCSS && !c && !i.hasCSS && (i.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            u || a(e, i),
            e
        }
        var c, u, d = e.html5 || {}, h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i, p = "_html5shiv", m = 0, g = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                c = "hidden"in e,
                u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                c = !0,
                u = !0
            }
        }();
        var v = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: !1 !== d.shivCSS,
            supportsUnknownElements: u,
            shivMethods: !1 !== d.shivMethods,
            type: "default",
            shivDocument: l,
            createElement: o,
            createDocumentFragment: s
        };
        e.html5 = v,
        l(t)
    }(this, t),
    p._version = f,
    p._prefixes = k,
    p._domPrefixes = S,
    p._cssomPrefixes = C,
    p.mq = O,
    p.hasEvent = L,
    p.testProp = function(e) {
        return a([e])
    }
    ,
    p.testAllProps = c,
    p.testStyles = P,
    p.prefixed = function(e, t, n) {
        return t ? c(e, t, n) : c(e, "pfx")
    }
    ,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + M.join(" ") : ""),
    p
}(this, this.document),
function(e, t, n) {
    function i(e) {
        return "[object Function]" == g.call(e)
    }
    function r(e) {
        return "string" == typeof e
    }
    function o() {}
    function s(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }
    function a() {
        var e = v.shift();
        y = 1,
        e ? e.t ? p((function() {
            ("c" == e.t ? h.injectCss : h.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }
        ), 0) : (e(),
        a()) : y = 0
    }
    function l(e, n, i, r, o, l, c) {
        function u(t) {
            if (!f && s(d.readyState) && (b.r = f = 1,
            !y && a(),
            d.onload = d.onreadystatechange = null,
            t))
                for (var i in "img" != e && p((function() {
                    _.removeChild(d)
                }
                ), 50),
                S[n])
                    S[n].hasOwnProperty(i) && S[n][i].onload()
        }
        c = c || h.errorTimeout;
        var d = {}
          , f = 0
          , g = 0
          , b = {
            t: i,
            s: n,
            e: o,
            a: l,
            x: c
        };
        1 === S[n] && (g = 1,
        S[n] = [],
        d = t.createElement(e)),
        "object" == e ? d.data = n : (d.src = n,
        d.type = e),
        d.width = d.height = "0",
        d.onerror = d.onload = d.onreadystatechange = function() {
            u.call(this, g)
        }
        ,
        v.splice(r, 0, b),
        "img" != e && (g || 2 === S[n] ? (_.insertBefore(d, w ? null : m),
        p(u, c)) : S[n].push(d))
    }
    function c(e, t, n, i, o) {
        return y = 0,
        t = t || "j",
        r(e) ? l("c" == t ? k : x, e, t, this.i++, n, i, o) : (v.splice(this.i++, 0, e),
        1 == v.length && a()),
        this
    }
    function u() {
        var e = h;
        return e.loader = {
            load: c,
            i: 0
        },
        e
    }
    var d, h, f = t.documentElement, p = e.setTimeout, m = t.getElementsByTagName("script")[0], g = {}.toString, v = [], y = 0, b = "MozAppearance"in f.style, w = b && !!t.createRange().compareNode, _ = w ? f : m.parentNode, x = (f = e.opera && "[object Opera]" == g.call(e.opera),
    f = !!t.attachEvent && !f,
    b ? "object" : f ? "script" : "img"), k = f ? "script" : x, $ = Array.isArray || function(e) {
        return "[object Array]" == g.call(e)
    }
    , C = [], S = {}, T = {
        timeout: function(e, t) {
            return t.length && (e.timeout = t[0]),
            e
        }
    };
    h = function(e) {
        function t(e) {
            e = e.split("!");
            var t, n, i, r = C.length, o = e.pop(), s = e.length;
            o = {
                url: o,
                origUrl: o,
                prefixes: e
            };
            for (n = 0; n < s; n++)
                i = e[n].split("="),
                (t = T[i.shift()]) && (o = t(o, i));
            for (n = 0; n < r; n++)
                o = C[n](o);
            return o
        }
        function s(e, r, o, s, l) {
            var c = t(e)
              , d = c.autoCallback;
            c.url.split(".").pop().split("?").shift(),
            c.bypass || (r && (r = i(r) ? r : r[e] || r[s] || r[e.split("/").pop().split("?")[0]] || a),
            c.instead ? c.instead(e, r, o, s, l) : (S[c.url] ? c.noexec = !0 : S[c.url] = 1,
            o.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout),
            (i(r) || i(d)) && o.load((function() {
                u(),
                r && r(c.origUrl, l, s),
                d && d(c.origUrl, l, s),
                S[c.url] = 2
            }
            ))))
        }
        function l(e, t) {
            function n(e, n) {
                if (e) {
                    if (r(e))
                        n || (d = function() {
                            var e = [].slice.call(arguments);
                            h.apply(this, e),
                            f()
                        }
                        ),
                        s(e, d, t, 0, c);
                    else if (Object(e) === e)
                        for (l in a = function() {
                            var t, n = 0;
                            for (t in e)
                                e.hasOwnProperty(t) && n++;
                            return n
                        }(),
                        e)
                            e.hasOwnProperty(l) && (!n && !--a && (i(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                h.apply(this, e),
                                f()
                            }
                            : d[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t),
                                    f()
                                }
                            }(h[l])),
                            s(e[l], d, t, l, c))
                } else
                    !n && f()
            }
            var a, l, c = !!e.test, u = e.load || e.both, d = e.callback || o, h = d, f = e.complete || o;
            n(c ? e.yep : e.nope, !!u),
            u && n(u)
        }
        var c, d, f = this.yepnope.loader;
        if (r(e))
            s(e, 0, f, 0);
        else if ($(e))
            for (c = 0; c < e.length; c++)
                r(d = e[c]) ? s(d, 0, f, 0) : $(d) ? h(d) : Object(d) === d && l(d, f);
        else
            Object(e) === e && l(e, f)
    }
    ,
    h.addPrefix = function(e, t) {
        T[e] = t
    }
    ,
    h.addFilter = function(e) {
        C.push(e)
    }
    ,
    h.errorTimeout = 1e4,
    null == t.readyState && t.addEventListener && (t.readyState = "loading",
    t.addEventListener("DOMContentLoaded", d = function() {
        t.removeEventListener("DOMContentLoaded", d, 0),
        t.readyState = "complete"
    }
    , 0)),
    e.yepnope = u(),
    e.yepnope.executeStack = a,
    e.yepnope.injectJs = function(e, n, i, r, l, c) {
        var u, d, f = t.createElement("script");
        r = r || h.errorTimeout;
        for (d in f.src = e,
        i)
            f.setAttribute(d, i[d]);
        n = c ? a : n || o,
        f.onreadystatechange = f.onload = function() {
            !u && s(f.readyState) && (u = 1,
            n(),
            f.onload = f.onreadystatechange = null)
        }
        ,
        p((function() {
            u || (u = 1,
            n(1))
        }
        ), r),
        l ? f.onload() : m.parentNode.insertBefore(f, m)
    }
    ,
    e.yepnope.injectCss = function(e, n, i, r, s, l) {
        var c;
        r = t.createElement("link"),
        n = l ? a : n || o;
        for (c in r.href = e,
        r.rel = "stylesheet",
        r.type = "text/css",
        i)
            r.setAttribute(c, i[c]);
        s || (m.parentNode.insertBefore(r, m),
        p(n, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
,
$(document).on("confirm", (function(e) {
    e.preventDefault();
    var t = $(e.target)
      , n = t.data("confirm")
      , i = t.data("confirm-title") || I18n.t("global.are_you_sure");
    return xuiSwal.fire({
        title: i,
        text: n,
        icon: "warning",
        confirmButtonText: I18n.t("global.confirm"),
        confirmButtonAriaLabel: I18n.t("global.confirm"),
        cancelButtonText: I18n.t("global.cancel"),
        cancelButtonAriaLabel: I18n.t("global.cancel")
    }).then((function(e) {
        e.value && (t.data("confirm", null),
        t.trigger("click.rails"),
        t.data("confirm", n))
    }
    )),
    !1
}
));
for (var _hexMap = [], i = 0; i < 256; i++)
    _hexMap[i] = (i + 256).toString(16).substr(1);
Dropzone.autoDiscover = !1,
ready((function() {
    function e() {
        $("#itemnav #prev").on("click", (function() {
            $(document).trigger("track-event", {
                verb: "clicked_item_nav_prev"
            })
        }
        )),
        $("#itemnav #next").on("click", (function() {
            $(document).trigger("track-event", {
                verb: "clicked_item_nav_next"
            })
        }
        ))
    }
    if ($("body").addClass("loaded"),
    $.timeago.settings.allowFuture = !0,
    $("[data-toggle~=tooltip]").tooltip(),
    $(".full-height").each((function() {
        $(this).css("height", $(this).parent().height())
    }
    )),
    $(window).resize((function() {
        $(".full-height").each((function() {
            $(this).css("height", $(this).parent().height())
        }
        ))
    }
    )),
    $(".disable-after-click").on("click", (function(e) {
        if ($(this).hasClass("disabled"))
            return e.preventDefault(),
            !1;
        $(this).addClass("disabled").closest("li").addClass("disabled")
    }
    )),
    $(".frame").length) {
        var t = $(".frame")
          , n = Math.floor(t.width() / 40)
          , i = Math.ceil($(".course-nav-item.active").index() / n) - 1
          , r = new Sly(t,{
            horizontal: 1,
            itemNav: "basic",
            scrollBy: 1,
            nextPage: "#next",
            prevPage: "#prev",
            startAt: i * n,
            speed: 300,
            activeClass: "sly-active",
            disabledClass: "inactive"
        }).init();
        e(),
        $(window).resize((function() {
            r.reload()
        }
        ))
    }
    $("#togglenav_horizontal").length && $("#togglenav_horizontal").click((function() {
        r.reload()
    }
    )),
    $("#togglenav_vertical").length && $("#togglenav_vertical").click((function() {
        r.reload()
    }
    )),
    $.each($("[data-dismiss='flash']"), (function(e, t) {
        $(t).click((function() {
            $(this).parents()[2].remove()
        }
        ))
    }
    )),
    $(".js-target-blank a").each((function(e, t) {
        if ("#" != $(t).attr("href") && !$(t).hasClass("btn")) {
            var n = window.location.href.split("/")
              , i = $(t).attr("href").split("/");
            n[2] !== i[2] && $(t).attr("target", "_blank").attr("rel", "noopener")
        }
    }
    )),
    $(".alert a, .course-area-main a, .course-information a, .course-info a, #teachers a, .static_page a, .channel-info a, .quiz-question a").each((function(e, t) {
        $(t).attr("title") && "EXTERNAL" == $(t).attr("title").substr(0, 8) && $(t).attr("target", "_blank").attr("rel", "noopener").attr("title", $(t).attr("title").substr(8))
    }
    )),
    $(document).on("ajax:success", "[data-render-to]", (function(e, t) {
        var n = $(this).data("render-to");
        $(n).html(t)
    }
    ))
}
)),
ready((function() {
    $(document).on("objective-modal-submit", (function() {
        $("#objective-infobox-container").hide()
    }
    )),
    $("#objective-infobox-open-link").on("click", (function(e) {
        e.preventDefault(),
        $(document).trigger("objective-infobox-open-click")
    }
    )),
    $("#objective-infobox-close-link").on("click", (function() {
        var e = $("#objective-infobox-container");
        e.hide(),
        $.ajax({
            url: "/api/v2/objectives-user-statuses",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                data: {
                    type: "objectives-user-statuses",
                    attributes: {
                        context: e.data("courseId"),
                        settings: {
                            hide_objectives_infobox: !0
                        }
                    }
                }
            }),
            dataType: "json"
        })
    }
    ))
}
)),
ready((function() {
    $("#profile-fields-disclosure-modal").modal("show")
}
)),
function() {
    var e, t, n;
    void 0 === e && (e = !1),
    window.Lanalytics || (window.Lanalytics = {}),
    window.Lanalytics.Framework = function() {
        function t() {
            this.eventQueue = [],
            this.plugins = []
        }
        return t.prototype.addPlugin = function(e) {
            return this.plugins.push(e)
        }
        ,
        t.prototype.currentUser = function() {
            return null != ("undefined" != typeof gon && null !== gon ? gon.user_id : void 0) ? new Lanalytics.Model.StmtUser(gon.user_id) : new Lanalytics.Model.AnonymousUser
        }
        ,
        t.prototype.track = function(t, n, i, r, o) {
            var s, a;
            if (null == r && (r = {}),
            null == o && (o = {}),
            n = new Lanalytics.Model.StmtVerb(n),
            a = new Date,
            s = new Lanalytics.Model.ExpApiStatement(t,n,i,a,r,o),
            this.eventQueue.push(s),
            this.processEventQueue(),
            e)
                return console.debug("New event was tracked:", s)
        }
        ,
        t.prototype.trackCurrentUserDoing = function(e, t, n, i) {
            var r;
            return null == n && (n = {}),
            null == i && (i = {}),
            r = this.currentUser(),
            this.track(r, e, t, n, i)
        }
        ,
        t.prototype.processEventQueue = function() {
            var e, t, n, i;
            return t = this.eventQueue.shift(),
            (n = new XMLHttpRequest).open("POST", "/api/v2/tracking-events", !0),
            n.setRequestHeader("Content-Type", "application/json"),
            i = this,
            e = function() {
                i.eventQueue.push(t)
            }
            ,
            n.onerror = e,
            n.onload = function() {
                (n.status < 200 || n.status >= 400) && e()
            }
            ,
            n.send(t.serializeJsonApi())
        }
        ,
        t
    }(),
    window.Lanalytics.Plugin = function() {
        function e(e) {
            this.lanalytics = e
        }
        return e.newInstance = function() {
            throw "This function has to be implemented in the subclass."
        }
        ,
        e
    }(),
    (t = window.Lanalytics).Plugins || (t.Plugins = {}),
    n = new window.Lanalytics.Framework,
    ready((function() {
        var t, i, r, o, s, a, l;
        for (l = [],
        i = 0,
        r = (a = Object.keys(Lanalytics.Plugins)).length; i < r; i++) {
            s = a[i];
            try {
                o = Lanalytics.Plugins[s].newInstance(n),
                n.addPlugin(o),
                e ? l.push(console.log("Lanalytics.Plugins." + s + " found, created and added")) : l.push(void 0)
            } catch (n) {
                t = n,
                e && console.log("Lanalytics.Plugins." + s + " found, but could not be instantiated"),
                e ? l.push(console.log(t.stack)) : l.push(void 0)
            }
        }
        return l
    }
    ))
}
.call(this),
function() {
    var e;
    window.Lanalytics || (window.Lanalytics = {}),
    (e = window.Lanalytics).Model || (e.Model = {}),
    window.Lanalytics.Model.ExpApiStatement = function() {
        function e(e, t, n, i, r, o) {
            if (null == i && (i = new Date),
            this.with_result = null != r ? r : {},
            this.in_context = null != o ? o : {},
            !(e instanceof Lanalytics.Model.StmtUser))
                throw "'user' argument cannot be nil and should be Lanalytics::Model::StmtUser";
            if (this.user = e,
            !(t instanceof Lanalytics.Model.StmtVerb))
                throw "'verb' argument cannot be nil and should be Lanalytics::Model::StmtVerb";
            if (this.verb = t,
            !(n instanceof Lanalytics.Model.StmtResource))
                throw "'resource' argument cannot be nil and should be Lanalytics::Model::StmtResource";
            if (this.resource = n,
            i || (i = DateTime.now),
            !(i instanceof Date || i instanceof String))
                throw "'timestamp' argument should be DateTime or String";
            i instanceof String && (i = new Date(i)),
            this.timestamp = i
        }
        return e.prototype.serializeJsonApi = function() {
            return JSON.stringify({
                data: {
                    type: "tracking-events",
                    attributes: {
                        user: this.user.params(),
                        verb: this.verb.params(),
                        resource: this.resource.params(),
                        timestamp: this.timestamp,
                        result: this.with_result,
                        context: this.in_context
                    }
                }
            })
        }
        ,
        e
    }()
}
.call(this),
function() {
    var e;
    window.Lanalytics || (window.Lanalytics = {}),
    (e = window.Lanalytics).Model || (e.Model = {}),
    window.Lanalytics.Model.StmtComponent = function() {
        function e(e) {
            if (null == e || !e.trim().length)
                throw "'type' argument cannot be nil and or empty";
            this.type = e.toString()
        }
        return e
    }()
}
.call(this),
function() {
    var e, t = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            n.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }, n = {}.hasOwnProperty;
    window.Lanalytics || (window.Lanalytics = {}),
    (e = window.Lanalytics).Model || (e.Model = {}),
    window.Lanalytics.Model.StmtResource = function(e) {
        function n(e, t) {
            if (n.__super__.constructor.call(this, e),
            null == t || !t.trim().length)
                throw "'uuid' argument cannot be nil or empty";
            this.uuid = t.toString()
        }
        return t(n, e),
        n.prototype.params = function() {
            return {
                type: this.type,
                uuid: this.uuid
            }
        }
        ,
        n
    }(Lanalytics.Model.StmtComponent)
}
.call(this),
function() {
    var e, t = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            n.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }, n = {}.hasOwnProperty;
    window.Lanalytics || (window.Lanalytics = {}),
    (e = window.Lanalytics).Model || (e.Model = {}),
    window.Lanalytics.Model.StmtUser = function(e) {
        function n(e) {
            n.__super__.constructor.call(this, "user", e)
        }
        return t(n, e),
        n
    }(window.Lanalytics.Model.StmtResource),
    window.Lanalytics.Model.AnonymousUser = function(e) {
        function n() {
            n.__super__.constructor.call(this, "user", "ANONYMOUS")
        }
        return t(n, e),
        n
    }(window.Lanalytics.Model.StmtUser)
}
.call(this),
function() {
    var e, t = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            n.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }, n = {}.hasOwnProperty;
    window.Lanalytics || (window.Lanalytics = {}),
    (e = window.Lanalytics).Model || (e.Model = {}),
    window.Lanalytics.Model.StmtVerb = function(e) {
        function n(e) {
            n.__super__.constructor.call(this, e)
        }
        return t(n, e),
        n.prototype.params = function() {
            return {
                type: this.type
            }
        }
        ,
        n
    }(window.Lanalytics.Model.StmtComponent)
}
.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
      , t = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            n.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }
      , n = {}.hasOwnProperty;
    window.Lanalytics.Plugins.JSEventsPlugin = function(n) {
        function i(t) {
            this.trackEvent = e(this.trackEvent, this),
            i.__super__.constructor.call(this, t),
            this._init()
        }
        return t(i, n),
        i.newInstance = function(e) {
            return new Lanalytics.Plugins.JSEventsPlugin(e)
        }
        ,
        i.prototype._init = function() {
            return $(document).on("track-event", this.trackEvent)
        }
        ,
        i.prototype._createResourceFrom = function(e) {
            return new Lanalytics.Model.StmtResource(e.resourceType,e.resource)
        }
        ,
        i.prototype._findResource = function(e) {
            var t;
            return (t = $(e.target.activeElement).closest("[data-lanalytics-resource]")).length > 0 ? t.data("lanalytics-resource") : 0 === (t = $("[data-lanalytics-resource]")).length ? null : t.first().data("lanalytics-resource")
        }
        ,
        i.prototype._getResource = function(e, t) {
            var n;
            return t.resourceType && t.resource || (n = this._findResource(e),
            t.resourceType = n.type,
            t.resource = n.uuid),
            this._createResourceFrom(t)
        }
        ,
        i.prototype._getContext = function(e) {
            var t, n, i, r, o, s, a, l;
            if (o = {},
            0 !== (n = $("[data-lanalytics-context]")).length && n.each((function(e, t) {
                var n, i, r, s;
                for (i in r = [],
                n = $(t).data("lanalytics-context"))
                    s = n[i],
                    r.push(o[i] = s);
                return r
            }
            )),
            i = $.cookie("lanalytics-context"),
            gon.in_app && null != i)
                for (s in r = JSON.parse(i))
                    l = r[s],
                    o[s] = l;
            else
                o.user_agent = "undefined" != typeof navigator && null !== navigator ? navigator.userAgent : void 0,
                o.screen_width = "undefined" != typeof screen && null !== screen ? screen.width : void 0,
                o.screen_height = "undefined" != typeof screen && null !== screen ? screen.height : void 0,
                null != gon.build_version && (o.build_version = gon.build_version),
                null != (t = getClientID()) && (o.client_id = t);
            for (s in a = e.inContext)
                l = a[s],
                o[s] = l;
            return o
        }
        ,
        i.prototype.trackEvent = function(e, t) {
            var n, i;
            return n = this._getContext(t),
            i = this._getResource(e, t),
            null != ("undefined" != typeof gon && null !== gon ? gon.course_id : void 0) && i.uuid !== gon.course_id && (n.course_id = gon.course_id),
            null != ("undefined" != typeof gon && null !== gon ? gon.section_id : void 0) && i.uuid !== gon.section_id && (n.section_id = gon.section_id),
            this.lanalytics.trackCurrentUserDoing(t.verb, i, t.withResult, n)
        }
        ,
        i
    }(Lanalytics.Plugin)
}
.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
      , t = function(e, t) {
        function i() {
            this.constructor = e
        }
        for (var r in t)
            n.call(t, r) && (e[r] = t[r]);
        return i.prototype = t.prototype,
        e.prototype = new i,
        e.__super__ = t.prototype,
        e
    }
      , n = {}.hasOwnProperty;
    window.Lanalytics.Plugins.StaticHtmlEventTracker = function(n) {
        function i(t) {
            this.processStaticHtmlEvent = e(this.processStaticHtmlEvent, this),
            i.__super__.constructor.call(this, t),
            this._init()
        }
        return t(i, n),
        i.newInstance = function(e) {
            return new Lanalytics.Plugins.StaticHtmlEventTracker(e)
        }
        ,
        i.prototype._init = function() {
            return $("*[data-lanalytics-event]").on("click", this.processStaticHtmlEvent)
        }
        ,
        i.prototype.processStaticHtmlEvent = function(e) {
            var t, n, i, r, o, s, a, l;
            if (t = e.target,
            0 === (s = $(t).parents("[data-lanalytics-resource]")).length)
                throw "No 'data-lanalytics-resource' field could be found in the parents of " + $(t).html().trim() + ".";
            if (i = s.first().data("lanalytics-resource"),
            0 === (l = $(t).closest("[data-lanalytics-event]")).length)
                throw "No 'data-lanalytics-event' field could be found in the parents of " + $(t).html().trim() + ".";
            return n = l.first().data("lanalytics-event"),
            a = new Lanalytics.Model.StmtVerb(n.verb),
            r = {},
            0 !== (o = $(t).closest("[data-lanalytics-context]")).length && (r = o.first().data("lanalytics-context")),
            $(document).trigger("track-event", {
                verb: a.type,
                resource: i.uuid,
                resourceType: i.type,
                inContext: r
            })
        }
        ,
        i
    }(Lanalytics.Plugin)
}
.call(this),
function() {
    var e = function(e, n) {
        function i() {
            this.constructor = e
        }
        for (var r in n)
            t.call(n, r) && (e[r] = n[r]);
        return i.prototype = n.prototype,
        e.prototype = new i,
        e.__super__ = n.prototype,
        e
    }
      , t = {}.hasOwnProperty;
    window.Lanalytics.Plugins.VisitedEventsPlugin = function(t) {
        function n(e) {
            n.__super__.constructor.call(this, e),
            this._init()
        }
        return e(n, t),
        n.newInstance = function(e) {
            return new Lanalytics.Plugins.VisitedEventsPlugin(e)
        }
        ,
        n.prototype._init = function() {
            var e, t, n, i, r;
            if (null != gon.user_id)
                return t = window.location.pathname,
                r = void 0,
                n = void 0,
                i = void 0,
                e = {},
                /\/question/.test(t) && (r = "visited_question",
                n = gon.question_id,
                i = "question",
                e.course_id = gon.course_id),
                gon.in_app || (!/\/items/.test(t) || /\/items\/new/.test(t) || /\/items\/.*\/edit/.test(t) || /\/items\/.*\/stats/.test(t) ? /\/pinboard$/.test(t) && !/\/statistics\/pinboard/.test(t) ? (r = "visited_pinboard",
                n = gon.course_id,
                i = "course") : /\/progress$/.test(t) ? (r = "visited_progress",
                n = gon.course_id,
                i = "course") : /\/learning_rooms$/.test(t) ? (r = "visited_learning_rooms",
                n = gon.course_id,
                i = "course") : /\/announcements$/.test(t) ? (r = "visited_announcements",
                n = gon.course_id,
                i = "course") : /^\/learn$/.test(t) ? (n = gon.course_id) && (r = "visited_recap",
                i = "course") : /^\/dashboard\/profile$/.test(t) ? (r = "visited_profile",
                n = gon.user_id,
                i = "user") : /^\/dashboard\/documents$/.test(t) ? (r = "visited_documents",
                n = gon.user_id,
                i = "user") : /^\/dashboard\/activity$/.test(t) ? (r = "visited_activity",
                n = gon.user_id,
                i = "user") : /^\/dashboard$/.test(t) ? (r = "visited_dashboard",
                n = gon.user_id,
                i = "user") : /^\/preferences$/.test(t) && (r = "visited_preferences",
                n = gon.user_id,
                i = "user") : (r = "visited_item",
                n = gon.item_id,
                i = "item",
                e.course_id = gon.course_id,
                e.section_id = gon.section_id)),
                r ? $(document).trigger("track-event", {
                    verb: r,
                    resource: n,
                    resourceType: i,
                    inContext: e
                }) : void 0
        }
        ,
        n
    }(Lanalytics.Plugin)
}
.call(this),
function(e) {
    "use strict";
    function t(t) {
        return this.each((function() {
            var i = e(this)
              , r = i.data("bs.affix")
              , o = "object" == typeof t && t;
            r || i.data("bs.affix", r = new n(this,o)),
            "string" == typeof t && r[t]()
        }
        ))
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i);
        var r = this.options.target === n.DEFAULTS.target ? e(this.options.target) : e(document).find(this.options.target);
        this.$target = r.on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = e(t),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.4.1",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function(e, t, n, i) {
        var r = this.$target.scrollTop()
          , o = this.$element.offset()
          , s = this.$target.height();
        if (null != n && "top" == this.affixed)
            return r < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= e - i) && "bottom";
        var a = null == this.affixed
          , l = a ? r : o.top;
        return null != n && r <= n ? "top" : null != i && l + (a ? s : t) >= e - i && "bottom"
    }
    ,
    n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop()
          , t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }
    ,
    n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }
    ,
    n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height()
              , i = this.options.offset
              , r = i.top
              , o = i.bottom
              , s = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (o = r = i),
            "function" == typeof r && (r = i.top(this.$element)),
            "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, t, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : "")
                  , c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c),
                c.isDefaultPrevented())
                    return;
                this.affixed = a,
                this.unpin = "bottom" == a ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - t - o
            })
        }
    }
    ;
    var i = e.fn.affix;
    e.fn.affix = t,
    e.fn.affix.Constructor = n,
    e.fn.affix.noConflict = function() {
        return e.fn.affix = i,
        this
    }
    ,
    e(window).on("load", (function() {
        e('[data-spy="affix"]').each((function() {
            var n = e(this)
              , i = n.data();
            i.offset = i.offset || {},
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            t.call(n, i)
        }
        ))
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each((function() {
            var n = e(this)
              , r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)),
            "string" == typeof t && r[t].call(n)
        }
        ))
    }
    var n = '[data-dismiss="alert"]'
      , i = function(t) {
        e(t).on("click", n, this.close)
    };
    i.VERSION = "3.4.1",
    i.TRANSITION_DURATION = 150,
    i.prototype.close = function(t) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var r = e(this)
          , o = r.attr("data-target");
        o || (o = (o = r.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")),
        o = "#" === o ? [] : o;
        var s = e(document).find(o);
        t && t.preventDefault(),
        s.length || (s = r.closest(".alert")),
        s.trigger(t = e.Event("close.bs.alert")),
        t.isDefaultPrevented() || (s.removeClass("in"),
        e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    }
    ;
    var r = e.fn.alert;
    e.fn.alert = t,
    e.fn.alert.Constructor = i,
    e.fn.alert.noConflict = function() {
        return e.fn.alert = r,
        this
    }
    ,
    e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each((function() {
            var i = e(this)
              , r = i.data("bs.button")
              , o = "object" == typeof t && t;
            r || i.data("bs.button", r = new n(this,o)),
            "toggle" == t ? r.toggle() : t && r.setState(t)
        }
        ))
    }
    var n = function(t, i) {
        this.$element = e(t),
        this.options = e.extend({}, n.DEFAULTS, i),
        this.isLoading = !1
    };
    n.VERSION = "3.4.1",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(t) {
        var n = "disabled"
          , i = this.$element
          , r = i.is("input") ? "val" : "html"
          , o = i.data();
        t += "Text",
        null == o.resetText && i.data("resetText", i[r]()),
        setTimeout(e.proxy((function() {
            i[r](null == o[t] ? this.options[t] : o[t]),
            "loadingText" == t ? (this.isLoading = !0,
            i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1,
            i.removeClass(n).removeAttr(n).prop(n, !1))
        }
        ), this), 0)
    }
    ,
    n.prototype.toggle = function() {
        var e = !0
          , t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1),
            t.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            e && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var i = e.fn.button;
    e.fn.button = t,
    e.fn.button.Constructor = n,
    e.fn.button.noConflict = function() {
        return e.fn.button = i,
        this
    }
    ,
    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(n) {
        var i = e(n.target).closest(".btn");
        t.call(i, "toggle"),
        e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(),
        i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }
    )).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each((function() {
            var i = e(this)
              , r = i.data("bs.carousel")
              , o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t)
              , s = "string" == typeof t ? t : o.slide;
            r || i.data("bs.carousel", r = new n(this,o)),
            "number" == typeof t ? r.to(t) : s ? r[s]() : o.interval && r.pause().cycle()
        }
        ))
    }
    var n = function(t, n) {
        this.$element = e(t),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            e.preventDefault()
        }
    }
    ,
    n.prototype.cycle = function(t) {
        return t || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"),
        this.$items.index(e || this.$active)
    }
    ,
    n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap)
            return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }
    ,
    n.prototype.to = function(e) {
        var t = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", (function() {
                t.to(e)
            }
            )) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }
    ,
    n.prototype.pause = function(t) {
        return t || (this.paused = !0),
        this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    n.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    n.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    n.prototype.slide = function(t, i) {
        var r = this.$element.find(".item.active")
          , o = i || this.getItemForDirection(t, r)
          , s = this.interval
          , a = "next" == t ? "left" : "right"
          , l = this;
        if (o.hasClass("active"))
            return this.sliding = !1;
        var c = o[0]
          , u = e.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
        if (this.$element.trigger(u),
        !u.isDefaultPrevented()) {
            if (this.sliding = !0,
            s && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var h = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t),
            "object" == typeof o && o.length && o[0].offsetWidth,
            r.addClass(a),
            o.addClass(a),
            r.one("bsTransitionEnd", (function() {
                o.removeClass([t, a].join(" ")).addClass("active"),
                r.removeClass(["active", a].join(" ")),
                l.sliding = !1,
                setTimeout((function() {
                    l.$element.trigger(h)
                }
                ), 0)
            }
            )).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"),
            o.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(h)),
            s && this.cycle(),
            this
        }
    }
    ;
    var i = e.fn.carousel;
    e.fn.carousel = t,
    e.fn.carousel.Constructor = n,
    e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i,
        this
    }
    ;
    var r = function(n) {
        var i = e(this)
          , r = i.attr("href");
        r && (r = r.replace(/.*(?=#[^\s]+$)/, ""));
        var o = i.attr("data-target") || r
          , s = e(document).find(o);
        if (s.hasClass("carousel")) {
            var a = e.extend({}, s.data(), i.data())
              , l = i.attr("data-slide-to");
            l && (a.interval = !1),
            t.call(s, a),
            l && s.data("bs.carousel").to(l),
            n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r),
    e(window).on("load", (function() {
        e('[data-ride="carousel"]').each((function() {
            var n = e(this);
            t.call(n, n.data())
        }
        ))
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(document).find(i)
    }
    function n(t) {
        return this.each((function() {
            var n = e(this)
              , r = n.data("bs.collapse")
              , o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1),
            r || n.data("bs.collapse", r = new i(this,o)),
            "string" == typeof t && r[t]()
        }
        ))
    }
    var i = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, i.DEFAULTS, n),
        this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    i.VERSION = "3.4.1",
    i.TRANSITION_DURATION = 350,
    i.DEFAULTS = {
        toggle: !0
    },
    i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ,
    i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (t = r.data("bs.collapse")) && t.transitioning)) {
                var o = e.Event("show.bs.collapse");
                if (this.$element.trigger(o),
                !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"),
                    t || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition)
                        return a.call(this);
                    var l = e.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }
    ,
    i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t),
            !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!e.support.transition)
                    return r.call(this);
                this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }
    ,
    i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    i.prototype.getParent = function() {
        return e(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy((function(n, i) {
            var r = e(i);
            this.addAriaAndCollapsedClass(t(r), r)
        }
        ), this)).end()
    }
    ,
    i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
        t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var r = e.fn.collapse;
    e.fn.collapse = n,
    e.fn.collapse.Constructor = i,
    e.fn.collapse.noConflict = function() {
        return e.fn.collapse = r,
        this
    }
    ,
    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(i) {
        var r = e(this);
        r.attr("data-target") || i.preventDefault();
        var o = t(r)
          , s = o.data("bs.collapse") ? "toggle" : r.data();
        n.call(o, s)
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        var n = t.attr("data-target");
        n || (n = (n = t.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = "#" !== n ? e(document).find(n) : null;
        return i && i.length ? i : t.parent()
    }
    function n(n) {
        n && 3 === n.which || (e(r).remove(),
        e(o).each((function() {
            var i = e(this)
              , r = t(i)
              , o = {
                relatedTarget: this
            };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(r[0], n.target) || (r.trigger(n = e.Event("hide.bs.dropdown", o)),
            n.isDefaultPrevented() || (i.attr("aria-expanded", "false"),
            r.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))))
        }
        )))
    }
    function i(t) {
        return this.each((function() {
            var n = e(this)
              , i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)),
            "string" == typeof t && i[t].call(n)
        }
        ))
    }
    var r = ".dropdown-backdrop"
      , o = '[data-toggle="dropdown"]'
      , s = function(t) {
        e(t).on("click.bs.dropdown", this.toggle)
    };
    s.VERSION = "3.4.1",
    s.prototype.toggle = function(i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
            var o = t(r)
              , s = o.hasClass("open");
            if (n(),
            !s) {
                "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = e.Event("show.bs.dropdown", a)),
                i.isDefaultPrevented())
                    return;
                r.trigger("focus").attr("aria-expanded", "true"),
                o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }
    ,
    s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled")) {
                var r = t(i)
                  , s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)
                    return 27 == n.which && r.find(o).trigger("focus"),
                    i.trigger("click");
                var a = " li:not(.disabled):visible a"
                  , l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--,
                    40 == n.which && c < l.length - 1 && c++,
                    ~c || (c = 0),
                    l.eq(c).trigger("focus")
                }
            }
        }
    }
    ;
    var a = e.fn.dropdown;
    e.fn.dropdown = i,
    e.fn.dropdown.Constructor = s,
    e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = a,
        this
    }
    ,
    e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", (function(e) {
        e.stopPropagation()
    }
    )).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery),
function(e) {
    "use strict";
    function t(t, i) {
        return this.each((function() {
            var r = e(this)
              , o = r.data("bs.modal")
              , s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
            o || r.data("bs.modal", o = new n(this,s)),
            "string" == typeof t ? o[t](i) : s.show && o.show(i)
        }
        ))
    }
    var n = function(t, n) {
        this.options = n,
        this.$body = e(document.body),
        this.$element = e(t),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom",
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy((function() {
            this.$element.trigger("loaded.bs.modal")
        }
        ), this))
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }
    ,
    n.prototype.show = function(t) {
        var i = this
          , r = e.Event("show.bs.modal", {
            relatedTarget: t
        });
        this.$element.trigger(r),
        this.isShown || r.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
            i.$element.one("mouseup.dismiss.bs.modal", (function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            }
            ))
        }
        )),
        this.backdrop((function() {
            var r = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            i.adjustDialog(),
            r && i.$element[0].offsetWidth,
            i.$element.addClass("in"),
            i.enforceFocus();
            var o = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? i.$dialog.one("bsTransitionEnd", (function() {
                i.$element.trigger("focus").trigger(o)
            }
            )).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }
        )))
    }
    ,
    n.prototype.hide = function(t) {
        t && t.preventDefault(),
        t = e.Event("hide.bs.modal"),
        this.$element.trigger(t),
        this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        e(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy((function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }
        ), this))
    }
    ,
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy((function(e) {
            27 == e.which && this.hide()
        }
        ), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }
    ,
    n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
        this.backdrop((function() {
            e.$body.removeClass("modal-open"),
            e.resetAdjustments(),
            e.resetScrollbar(),
            e.$element.trigger("hidden.bs.modal")
        }
        ))
    }
    ,
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    n.prototype.backdrop = function(t) {
        var i = this
          , r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && r;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", e.proxy((function(e) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }
            ), this)),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(),
                t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else
            t && t()
    }
    ,
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }
    ,
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", t + n),
        e(this.fixedContent).each((function(t, i) {
            var r = i.style.paddingRight
              , o = e(i).css("padding-right");
            e(i).data("padding-right", r).css("padding-right", parseFloat(o) + n + "px")
        }
        )))
    }
    ,
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad),
        e(this.fixedContent).each((function(t, n) {
            var i = e(n).data("padding-right");
            e(n).removeData("padding-right"),
            n.style.paddingRight = i || ""
        }
        ))
    }
    ,
    n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e),
        t
    }
    ;
    var i = e.fn.modal;
    e.fn.modal = t,
    e.fn.modal.Constructor = n,
    e.fn.modal.noConflict = function() {
        return e.fn.modal = i,
        this
    }
    ,
    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(n) {
        var i = e(this)
          , r = i.attr("href")
          , o = i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")
          , s = e(document).find(o)
          , a = s.data("bs.modal") ? "toggle" : e.extend({
            remote: !/#/.test(r) && r
        }, s.data(), i.data());
        i.is("a") && n.preventDefault(),
        s.one("show.bs.modal", (function(e) {
            e.isDefaultPrevented() || s.one("hidden.bs.modal", (function() {
                i.is(":visible") && i.trigger("focus")
            }
            ))
        }
        )),
        t.call(s, a, this)
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    function t(n, i) {
        this.$body = e(document.body),
        this.$scrollElement = e(n).is(document.body) ? e(window) : e(n),
        this.options = e.extend({}, t.DEFAULTS, i),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each((function() {
            var i = e(this)
              , r = i.data("bs.scrollspy")
              , o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new t(this,o)),
            "string" == typeof n && r[n]()
        }
        ))
    }
    t.VERSION = "3.4.1",
    t.DEFAULTS = {
        offset: 10
    },
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    t.prototype.refresh = function() {
        var t = this
          , n = "offset"
          , i = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        e.isWindow(this.$scrollElement[0]) || (n = "position",
        i = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map((function() {
            var t = e(this)
              , r = t.data("target") || t.attr("href")
              , o = /^#./.test(r) && e(r);
            return o && o.length && o.is(":visible") && [[o[n]().top + i, r]] || null
        }
        )).sort((function(e, t) {
            return e[0] - t[0]
        }
        )).each((function() {
            t.offsets.push(this[0]),
            t.targets.push(this[1])
        }
        ))
    }
    ,
    t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), r = this.offsets, o = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        t >= i)
            return s != (e = o[o.length - 1]) && this.activate(e);
        if (s && t < r[0])
            return this.activeTarget = null,
            this.clear();
        for (e = r.length; e--; )
            s != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e])
    }
    ,
    t.prototype.activate = function(t) {
        this.activeTarget = t,
        this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]'
          , i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
        i.trigger("activate.bs.scrollspy")
    }
    ,
    t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n,
    e.fn.scrollspy.Constructor = t,
    e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i,
        this
    }
    ,
    e(window).on("load.bs.scrollspy.data-api", (function() {
        e('[data-spy="scroll"]').each((function() {
            var t = e(this);
            n.call(t, t.data())
        }
        ))
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each((function() {
            var i = e(this)
              , r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)),
            "string" == typeof t && r[t]()
        }
        ))
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var t = this.element
          , n = t.closest("ul:not(.dropdown-menu)")
          , i = t.data("target");
        if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
        !t.parent("li").hasClass("active")) {
            var r = n.find(".active:last a")
              , o = e.Event("hide.bs.tab", {
                relatedTarget: t[0]
            })
              , s = e.Event("show.bs.tab", {
                relatedTarget: r[0]
            });
            if (r.trigger(o),
            t.trigger(s),
            !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = e(document).find(i);
                this.activate(t.closest("li"), n),
                this.activate(a, a.parent(), (function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }),
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                }
                ))
            }
        }
    }
    ,
    n.prototype.activate = function(t, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            a ? (t[0].offsetWidth,
            t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            r && r()
        }
        var s = i.find("> .active")
          , a = r && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(),
        s.removeClass("in")
    }
    ;
    var i = e.fn.tab;
    e.fn.tab = t,
    e.fn.tab.Constructor = n,
    e.fn.tab.noConflict = function() {
        return e.fn.tab = i,
        this
    }
    ;
    var r = function(n) {
        n.preventDefault(),
        t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery),
function(e) {
    "use strict";
    function t() {
        var e = document.createElement("bootstrap")
          , t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in t)
            if (void 0 !== e.style[n])
                return {
                    end: t[n]
                };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1
          , i = this;
        return e(this).one("bsTransitionEnd", (function() {
            n = !0
        }
        )),
        setTimeout((function() {
            n || e(i).trigger(e.support.transition.end)
        }
        ), t),
        this
    }
    ,
    e((function() {
        e.support.transition = t(),
        e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments)
            }
        })
    }
    ))
}(jQuery),
function(e) {
    "use strict";
    function t(t, n) {
        var i = t.nodeName.toLowerCase();
        if (-1 !== e.inArray(i, n))
            return -1 === e.inArray(i, o) || Boolean(t.nodeValue.match(a) || t.nodeValue.match(l));
        for (var r = e(n).filter((function(e, t) {
            return t instanceof RegExp
        }
        )), s = 0, c = r.length; s < c; s++)
            if (i.match(r[s]))
                return !0;
        return !1
    }
    function n(n, i, r) {
        if (0 === n.length)
            return n;
        if (r && "function" == typeof r)
            return r(n);
        if (!document.implementation || !document.implementation.createHTMLDocument)
            return n;
        var o = document.implementation.createHTMLDocument("sanitization");
        o.body.innerHTML = n;
        for (var s = e.map(i, (function(e, t) {
            return t
        }
        )), a = e(o.body).find("*"), l = 0, c = a.length; l < c; l++) {
            var u = a[l]
              , d = u.nodeName.toLowerCase();
            if (-1 !== e.inArray(d, s))
                for (var h = e.map(u.attributes, (function(e) {
                    return e
                }
                )), f = [].concat(i["*"] || [], i[d] || []), p = 0, m = h.length; p < m; p++)
                    t(h[p], f) || u.removeAttribute(h[p].nodeName);
            else
                u.parentNode.removeChild(u)
        }
        return o.body.innerHTML
    }
    function i(t) {
        return this.each((function() {
            var n = e(this)
              , i = n.data("bs.tooltip")
              , r = "object" == typeof t && t;
            !i && /destroy|hide/.test(t) || (i || n.data("bs.tooltip", i = new c(this,r)),
            "string" == typeof t && i[t]())
        }
        ))
    }
    var r = ["sanitize", "whiteList", "sanitizeFn"]
      , o = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , s = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , a = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , l = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
      , c = function(e, t) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", e, t)
    };
    c.VERSION = "3.4.1",
    c.TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: s
    },
    c.prototype.init = function(t, n, i) {
        if (this.enabled = !0,
        this.type = t,
        this.$element = e(n),
        this.options = this.getOptions(i),
        this.$viewport = this.options.viewport && e(document).find(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
            var s = r[o];
            if ("click" == s)
                this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin"
                  , l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.getOptions = function(t) {
        var i = this.$element.data();
        for (var o in i)
            i.hasOwnProperty(o) && -1 !== e.inArray(o, r) && delete i[o];
        return (t = e.extend({}, this.getDefaults(), i, t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }),
        t.sanitize && (t.template = n(t.template, t.whiteList, t.sanitizeFn)),
        t
    }
    ,
    c.prototype.getDelegateOptions = function() {
        var t = {}
          , n = this.getDefaults();
        return this._options && e.each(this._options, (function(e, i) {
            n[e] != i && (t[e] = i)
        }
        )),
        t
    }
    ,
    c.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState)
            n.hoverState = "in";
        else {
            if (clearTimeout(n.timeout),
            n.hoverState = "in",
            !n.options.delay || !n.options.delay.show)
                return n.show();
            n.timeout = setTimeout((function() {
                "in" == n.hoverState && n.show()
            }
            ), n.options.delay.show)
        }
    }
    ,
    c.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e])
                return !0;
        return !1
    }
    ,
    c.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n)),
        t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1),
        !n.isInStateTrue()) {
            if (clearTimeout(n.timeout),
            n.hoverState = "out",
            !n.options.delay || !n.options.delay.hide)
                return n.hide();
            n.timeout = setTimeout((function() {
                "out" == n.hoverState && n.hide()
            }
            ), n.options.delay.hide)
        }
    }
    ,
    c.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var n = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !n)
                return;
            var i = this
              , r = this.tip()
              , o = this.getUID(this.type);
            this.setContent(),
            r.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement
              , a = /\s?auto?\s?/i
              , l = a.test(s);
            l && (s = s.replace(a, "") || "top"),
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this),
            this.options.container ? r.appendTo(e(document).find(this.options.container)) : r.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition()
              , d = r[0].offsetWidth
              , h = r[0].offsetHeight;
            if (l) {
                var f = s
                  , p = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + h > p.bottom ? "top" : "top" == s && u.top - h < p.top ? "bottom" : "right" == s && u.right + d > p.width ? "left" : "left" == s && u.left - d < p.left ? "right" : s,
                r.removeClass(f).addClass(s)
            }
            var m = this.getCalculatedOffset(s, u, d, h);
            this.applyPlacement(m, s);
            var g = function() {
                var e = i.hoverState;
                i.$element.trigger("shown.bs." + i.type),
                i.hoverState = null,
                "out" == e && i.leave(i)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(c.TRANSITION_DURATION) : g()
        }
    }
    ,
    c.prototype.applyPlacement = function(t, n) {
        var i = this.tip()
          , r = i[0].offsetWidth
          , o = i[0].offsetHeight
          , s = parseInt(i.css("margin-top"), 10)
          , a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0),
        isNaN(a) && (a = 0),
        t.top += s,
        t.left += a,
        e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0),
        i.addClass("in");
        var l = i[0].offsetWidth
          , c = i[0].offsetHeight;
        "top" == n && c != o && (t.top = t.top + o - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n)
          , h = d ? 2 * u.left - r + l : 2 * u.top - o + c
          , f = d ? "offsetWidth" : "offsetHeight";
        i.offset(t),
        this.replaceArrow(h, i[0][f], d)
    }
    ,
    c.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }
    ,
    c.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle();
        this.options.html ? (this.options.sanitize && (t = n(t, this.options.whiteList, this.options.sanitizeFn)),
        e.find(".tooltip-inner").html(t)) : e.find(".tooltip-inner").text(t),
        e.removeClass("fade in top bottom left right")
    }
    ,
    c.prototype.hide = function(t) {
        function n() {
            "in" != i.hoverState && r.detach(),
            i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type),
            t && t()
        }
        var i = this
          , r = e(this.$tip)
          , o = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(o),
        !o.isDefaultPrevented())
            return r.removeClass("in"),
            e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(c.TRANSITION_DURATION) : n(),
            this.hoverState = null,
            this
    }
    ,
    c.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    c.prototype.getPosition = function(t) {
        var n = (t = t || this.$element)[0]
          , i = "BODY" == n.tagName
          , r = n.getBoundingClientRect();
        null == r.width && (r = e.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement
          , s = i ? {
            top: 0,
            left: 0
        } : o ? null : t.offset()
          , a = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        }
          , l = i ? {
            width: e(window).width(),
            height: e(window).height()
        } : null;
        return e.extend({}, r, a, l, s)
    }
    ,
    c.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }
    ,
    c.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return r;
        var o = this.options.viewport && this.options.viewport.padding || 0
          , s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - o - s.scroll
              , l = t.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var c = t.left - o
              , u = t.left + o + n;
            c < s.left ? r.left = s.left - c : u > s.right && (r.left = s.left + s.width - u)
        }
        return r
    }
    ,
    c.prototype.getTitle = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }
    ,
    c.prototype.getUID = function(e) {
        do {
            e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
    }
    ,
    c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    c.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    c.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    c.prototype.toggle = function(t) {
        var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget,this.getDelegateOptions()),
        e(t.currentTarget).data("bs." + this.type, n))),
        t ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    c.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide((function() {
            e.$element.off("." + e.type).removeData("bs." + e.type),
            e.$tip && e.$tip.detach(),
            e.$tip = null,
            e.$arrow = null,
            e.$viewport = null,
            e.$element = null
        }
        ))
    }
    ,
    c.prototype.sanitizeHtml = function(e) {
        return n(e, this.options.whiteList, this.options.sanitizeFn)
    }
    ;
    var u = e.fn.tooltip;
    e.fn.tooltip = i,
    e.fn.tooltip.Constructor = c,
    e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = u,
        this
    }
}(jQuery),
function(e) {
    "use strict";
    function t(t) {
        return this.each((function() {
            var i = e(this)
              , r = i.data("bs.popover")
              , o = "object" == typeof t && t;
            !r && /destroy|hide/.test(t) || (r || i.data("bs.popover", r = new n(this,o)),
            "string" == typeof t && r[t]())
        }
        ))
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.4.1",
    n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }
    ,
    n.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle()
          , n = this.getContent();
        if (this.options.html) {
            var i = typeof n;
            this.options.sanitize && (t = this.sanitizeHtml(t),
            "string" === i && (n = this.sanitizeHtml(n))),
            e.find(".popover-title").html(t),
            e.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
        } else
            e.find(".popover-title").text(t),
            e.find(".popover-content").children().detach().end().text(n);
        e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    }
    ,
    n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    n.prototype.getContent = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }
    ,
    n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var i = e.fn.popover;
    e.fn.popover = t,
    e.fn.popover.Constructor = n,
    e.fn.popover.noConflict = function() {
        return e.fn.popover = i,
        this
    }
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function(t, n) {
        return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)),
        e(n),
        n
    }
    : e(jQuery)
}((function(e) {
    var t = function() {
        function t(e, t) {
            return _.call(e, t)
        }
        function n(e, t) {
            var n, i, r, o, s, a, l, c, u, d, h, f = t && t.split("/"), p = b.map, m = p && p["*"] || {};
            if (e) {
                for (s = (e = e.split("/")).length - 1,
                b.nodeIdCompat && k.test(e[s]) && (e[s] = e[s].replace(k, "")),
                "." === e[0].charAt(0) && f && (e = f.slice(0, f.length - 1).concat(e)),
                u = 0; u < e.length; u++)
                    if ("." === (h = e[u]))
                        e.splice(u, 1),
                        --u;
                    else if (".." === h) {
                        if (0 === u || 1 === u && ".." === e[2] || ".." === e[u - 1])
                            continue;
                        0 < u && (e.splice(u - 1, 2),
                        u -= 2)
                    }
                e = e.join("/")
            }
            if ((f || m) && p) {
                for (u = (n = e.split("/")).length; 0 < u; --u) {
                    if (i = n.slice(0, u).join("/"),
                    f)
                        for (d = f.length; 0 < d; --d)
                            if (r = (r = p[f.slice(0, d).join("/")]) && r[i]) {
                                o = r,
                                a = u;
                                break
                            }
                    if (o)
                        break;
                    !l && m && m[i] && (l = m[i],
                    c = u)
                }
                !o && l && (o = l,
                a = c),
                o && (n.splice(0, a, o),
                e = n.join("/"))
            }
            return e
        }
        function i(e, t) {
            return function() {
                var n = x.call(arguments, 0);
                return "string" != typeof n[0] && 1 === n.length && n.push(null),
                p.apply(h, n.concat([e, t]))
            }
        }
        function r(e) {
            return function(t) {
                v[e] = t
            }
        }
        function o(e) {
            if (t(y, e)) {
                var n = y[e];
                delete y[e],
                w[e] = !0,
                f.apply(h, n)
            }
            if (!t(v, e) && !t(w, e))
                throw new Error("No " + e);
            return v[e]
        }
        function s(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return -1 < n && (t = e.substring(0, n),
            e = e.substring(n + 1, e.length)),
            [t, e]
        }
        function a(e) {
            return e ? s(e) : []
        }
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
            var l = e.fn.select2.amd;
        var c, u, d, h, f, p, m, g, v, y, b, w, _, x, k, C;
        return l && l.requirejs || (l ? u = l : l = {},
        v = {},
        y = {},
        b = {},
        w = {},
        _ = Object.prototype.hasOwnProperty,
        x = [].slice,
        k = /\.js$/,
        m = function(e, t) {
            var i, r, a = s(e), l = a[0], c = t[1];
            return e = a[1],
            l && (i = o(l = n(l, c))),
            l ? e = i && i.normalize ? i.normalize(e, (r = c,
            function(e) {
                return n(e, r)
            }
            )) : n(e, c) : (l = (a = s(e = n(e, c)))[0],
            e = a[1],
            l && (i = o(l))),
            {
                f: l ? l + "!" + e : e,
                n: e,
                pr: l,
                p: i
            }
        }
        ,
        g = {
            require: function(e) {
                return i(e)
            },
            exports: function(e) {
                var t = v[e];
                return void 0 !== t ? t : v[e] = {}
            },
            module: function(e) {
                return {
                    id: e,
                    uri: "",
                    exports: v[e],
                    config: (t = e,
                    function() {
                        return b && b.config && b.config[t] || {}
                    }
                    )
                };
                var t
            }
        },
        f = function(e, n, s, l) {
            var c, u, d, f, p, b, _, x = [], k = typeof s;
            if (b = a(l = l || e),
            "undefined" == k || "function" == k) {
                for (n = !n.length && s.length ? ["require", "exports", "module"] : n,
                p = 0; p < n.length; p += 1)
                    if ("require" === (u = (f = m(n[p], b)).f))
                        x[p] = g.require(e);
                    else if ("exports" === u)
                        x[p] = g.exports(e),
                        _ = !0;
                    else if ("module" === u)
                        c = x[p] = g.module(e);
                    else if (t(v, u) || t(y, u) || t(w, u))
                        x[p] = o(u);
                    else {
                        if (!f.p)
                            throw new Error(e + " missing " + u);
                        f.p.load(f.n, i(l, !0), r(u), {}),
                        x[p] = v[u]
                    }
                d = s ? s.apply(v[e], x) : void 0,
                e && (c && c.exports !== h && c.exports !== v[e] ? v[e] = c.exports : d === h && _ || (v[e] = d))
            } else
                e && (v[e] = s)
        }
        ,
        c = u = p = function(e, t, n, i, r) {
            if ("string" == typeof e)
                return g[e] ? g[e](t) : o(m(e, a(t)).f);
            if (!e.splice) {
                if ((b = e).deps && p(b.deps, b.callback),
                !t)
                    return;
                t.splice ? (e = t,
                t = n,
                n = null) : e = h
            }
            return t = t || function() {}
            ,
            "function" == typeof n && (n = i,
            i = r),
            i ? f(h, e, t, n) : setTimeout((function() {
                f(h, e, t, n)
            }
            ), 4),
            p
        }
        ,
        p.config = function(e) {
            return p(e)
        }
        ,
        c._defined = v,
        (d = function(e, n, i) {
            if ("string" != typeof e)
                throw new Error("See almond README: incorrect module build, no module name");
            n.splice || (i = n,
            n = []),
            t(v, e) || t(y, e) || (y[e] = [e, n, i])
        }
        ).amd = {
            jQuery: !0
        },
        l.requirejs = c,
        l.require = u,
        l.define = d),
        l.define("almond", (function() {}
        )),
        l.define("jquery", [], (function() {
            var t = e || $;
            return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
            t
        }
        )),
        l.define("select2/utils", ["jquery"], (function(e) {
            function t(e) {
                var t = e.prototype
                  , n = [];
                for (var i in t)
                    "function" == typeof t[i] && "constructor" !== i && n.push(i);
                return n
            }
            function n() {
                this.listeners = {}
            }
            var i = {
                Extend: function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    var i = {}.hasOwnProperty;
                    for (var r in t)
                        i.call(t, r) && (e[r] = t[r]);
                    return n.prototype = t.prototype,
                    e.prototype = new n,
                    e.__super__ = t.prototype,
                    e
                },
                Decorate: function(e, n) {
                    function i() {
                        var t = Array.prototype.unshift
                          , i = n.prototype.constructor.length
                          , r = e.prototype.constructor;
                        0 < i && (t.call(arguments, e.prototype.constructor),
                        r = n.prototype.constructor),
                        r.apply(this, arguments)
                    }
                    function r(e) {
                        var t = function() {};
                        e in i.prototype && (t = i.prototype[e]);
                        var r = n.prototype[e];
                        return function() {
                            return Array.prototype.unshift.call(arguments, t),
                            r.apply(this, arguments)
                        }
                    }
                    var o = t(n)
                      , s = t(e);
                    n.displayName = e.displayName,
                    i.prototype = new function() {
                        this.constructor = i
                    }
                    ;
                    for (var a = 0; a < s.length; a++) {
                        var l = s[a];
                        i.prototype[l] = e.prototype[l]
                    }
                    for (var c = 0; c < o.length; c++) {
                        var u = o[c];
                        i.prototype[u] = r(u)
                    }
                    return i
                }
            };
            n.prototype.on = function(e, t) {
                this.listeners = this.listeners || {},
                e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
            }
            ,
            n.prototype.trigger = function(e) {
                var t = Array.prototype.slice
                  , n = t.call(arguments, 1);
                this.listeners = this.listeners || {},
                null == n && (n = []),
                0 === n.length && n.push({}),
                (n[0]._type = e)in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
                "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
            }
            ,
            n.prototype.invoke = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    e[n].apply(this, t)
            }
            ,
            i.Observable = n,
            i.generateChars = function(e) {
                for (var t = "", n = 0; n < e; n++)
                    t += Math.floor(36 * Math.random()).toString(36);
                return t
            }
            ,
            i.bind = function(e, t) {
                return function() {
                    e.apply(t, arguments)
                }
            }
            ,
            i._convertData = function(e) {
                for (var t in e) {
                    var n = t.split("-")
                      , i = e;
                    if (1 !== n.length) {
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            (o = o.substring(0, 1).toLowerCase() + o.substring(1))in i || (i[o] = {}),
                            r == n.length - 1 && (i[o] = e[t]),
                            i = i[o]
                        }
                        delete e[t]
                    }
                }
                return e
            }
            ,
            i.hasScroll = function(t, n) {
                var i = e(n)
                  , r = n.style.overflowX
                  , o = n.style.overflowY;
                return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth)
            }
            ,
            i.escapeMarkup = function(e) {
                var t = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, (function(e) {
                    return t[e]
                }
                ))
            }
            ,
            i.appendMany = function(t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                    var i = e();
                    e.map(n, (function(e) {
                        i = i.add(e)
                    }
                    )),
                    n = i
                }
                t.append(n)
            }
            ,
            i.__cache = {};
            var r = 0;
            return i.GetUniqueElementId = function(e) {
                var t = e.getAttribute("data-select2-id");
                return null == t && (e.id ? (t = e.id,
                e.setAttribute("data-select2-id", t)) : (e.setAttribute("data-select2-id", ++r),
                t = r.toString())),
                t
            }
            ,
            i.StoreData = function(e, t, n) {
                var r = i.GetUniqueElementId(e);
                i.__cache[r] || (i.__cache[r] = {}),
                i.__cache[r][t] = n
            }
            ,
            i.GetData = function(t, n) {
                var r = i.GetUniqueElementId(t);
                return n ? i.__cache[r] && null != i.__cache[r][n] ? i.__cache[r][n] : e(t).data(n) : i.__cache[r]
            }
            ,
            i.RemoveData = function(e) {
                var t = i.GetUniqueElementId(e);
                null != i.__cache[t] && delete i.__cache[t],
                e.removeAttribute("data-select2-id")
            }
            ,
            i
        }
        )),
        l.define("select2/results", ["jquery", "./utils"], (function(e, t) {
            function n(e, t, i) {
                this.$element = e,
                this.data = i,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable),
            n.prototype.render = function() {
                var t = e('<ul class="select2-results__options" role="listbox"></ul>');
                return this.options.get("multiple") && t.attr("aria-multiselectable", "true"),
                this.$results = t
            }
            ,
            n.prototype.clear = function() {
                this.$results.empty()
            }
            ,
            n.prototype.displayMessage = function(t) {
                var n = this.options.get("escapeMarkup");
                this.clear(),
                this.hideLoading();
                var i = e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>')
                  , r = this.options.get("translations").get(t.message);
                i.append(n(r(t.args))),
                i[0].className += " select2-results__message",
                this.$results.append(i)
            }
            ,
            n.prototype.hideMessages = function() {
                this.$results.find(".select2-results__message").remove()
            }
            ,
            n.prototype.append = function(e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                    e.results = this.sort(e.results);
                    for (var n = 0; n < e.results.length; n++) {
                        var i = e.results[n]
                          , r = this.option(i);
                        t.push(r)
                    }
                    this.$results.append(t)
                } else
                    0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
            }
            ,
            n.prototype.position = function(e, t) {
                t.find(".select2-results").append(e)
            }
            ,
            n.prototype.sort = function(e) {
                return this.options.get("sorter")(e)
            }
            ,
            n.prototype.highlightFirstItem = function() {
                var e = this.$results.find(".select2-results__option[aria-selected]")
                  , t = e.filter("[aria-selected=true]");
                0 < t.length ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"),
                this.ensureHighlightVisible()
            }
            ,
            n.prototype.setClasses = function() {
                var n = this;
                this.data.current((function(i) {
                    var r = e.map(i, (function(e) {
                        return e.id.toString()
                    }
                    ));
                    n.$results.find(".select2-results__option[aria-selected]").each((function() {
                        var n = e(this)
                          , i = t.GetData(this, "data")
                          , o = "" + i.id;
                        null != i.element && i.element.selected || null == i.element && -1 < e.inArray(o, r) ? n.attr("aria-selected", "true") : n.attr("aria-selected", "false")
                    }
                    ))
                }
                ))
            }
            ,
            n.prototype.showLoading = function(e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e)
                }
                  , n = this.option(t);
                n.className += " loading-results",
                this.$results.prepend(n)
            }
            ,
            n.prototype.hideLoading = function() {
                this.$results.find(".loading-results").remove()
            }
            ,
            n.prototype.option = function(n) {
                var i = document.createElement("li");
                i.className = "select2-results__option";
                var r = {
                    role: "option",
                    "aria-selected": "false"
                }
                  , o = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
                for (var s in (null != n.element && o.call(n.element, ":disabled") || null == n.element && n.disabled) && (delete r["aria-selected"],
                r["aria-disabled"] = "true"),
                null == n.id && delete r["aria-selected"],
                null != n._resultId && (i.id = n._resultId),
                n.title && (i.title = n.title),
                n.children && (r.role = "group",
                r["aria-label"] = n.text,
                delete r["aria-selected"]),
                r) {
                    var a = r[s];
                    i.setAttribute(s, a)
                }
                if (n.children) {
                    var l = e(i)
                      , c = document.createElement("strong");
                    c.className = "select2-results__group",
                    e(c),
                    this.template(n, c);
                    for (var u = [], d = 0; d < n.children.length; d++) {
                        var h = n.children[d]
                          , f = this.option(h);
                        u.push(f)
                    }
                    var p = e("<ul></ul>", {
                        class: "select2-results__options select2-results__options--nested"
                    });
                    p.append(u),
                    l.append(c),
                    l.append(p)
                } else
                    this.template(n, i);
                return t.StoreData(i, "data", n),
                i
            }
            ,
            n.prototype.bind = function(n) {
                var i = this
                  , r = n.id + "-results";
                this.$results.attr("id", r),
                n.on("results:all", (function(e) {
                    i.clear(),
                    i.append(e.data),
                    n.isOpen() && (i.setClasses(),
                    i.highlightFirstItem())
                }
                )),
                n.on("results:append", (function(e) {
                    i.append(e.data),
                    n.isOpen() && i.setClasses()
                }
                )),
                n.on("query", (function(e) {
                    i.hideMessages(),
                    i.showLoading(e)
                }
                )),
                n.on("select", (function() {
                    n.isOpen() && (i.setClasses(),
                    i.options.get("scrollAfterSelect") && i.highlightFirstItem())
                }
                )),
                n.on("unselect", (function() {
                    n.isOpen() && (i.setClasses(),
                    i.options.get("scrollAfterSelect") && i.highlightFirstItem())
                }
                )),
                n.on("open", (function() {
                    i.$results.attr("aria-expanded", "true"),
                    i.$results.attr("aria-hidden", "false"),
                    i.setClasses(),
                    i.ensureHighlightVisible()
                }
                )),
                n.on("close", (function() {
                    i.$results.attr("aria-expanded", "false"),
                    i.$results.attr("aria-hidden", "true"),
                    i.$results.removeAttr("aria-activedescendant")
                }
                )),
                n.on("results:toggle", (function() {
                    var e = i.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup")
                }
                )),
                n.on("results:select", (function() {
                    var e = i.getHighlightedResults();
                    if (0 !== e.length) {
                        var n = t.GetData(e[0], "data");
                        "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                            data: n
                        })
                    }
                }
                )),
                n.on("results:previous", (function() {
                    var e = i.getHighlightedResults()
                      , t = i.$results.find("[aria-selected]")
                      , n = t.index(e);
                    if (!(n <= 0)) {
                        var r = n - 1;
                        0 === e.length && (r = 0);
                        var o = t.eq(r);
                        o.trigger("mouseenter");
                        var s = i.$results.offset().top
                          , a = o.offset().top
                          , l = i.$results.scrollTop() + (a - s);
                        0 === r ? i.$results.scrollTop(0) : a - s < 0 && i.$results.scrollTop(l)
                    }
                }
                )),
                n.on("results:next", (function() {
                    var e = i.getHighlightedResults()
                      , t = i.$results.find("[aria-selected]")
                      , n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                        var r = t.eq(n);
                        r.trigger("mouseenter");
                        var o = i.$results.offset().top + i.$results.outerHeight(!1)
                          , s = r.offset().top + r.outerHeight(!1)
                          , a = i.$results.scrollTop() + s - o;
                        0 === n ? i.$results.scrollTop(0) : o < s && i.$results.scrollTop(a)
                    }
                }
                )),
                n.on("results:focus", (function(e) {
                    e.element.addClass("select2-results__option--highlighted")
                }
                )),
                n.on("results:message", (function(e) {
                    i.displayMessage(e)
                }
                )),
                e.fn.mousewheel && this.$results.on("mousewheel", (function(e) {
                    var t = i.$results.scrollTop()
                      , n = i.$results.get(0).scrollHeight - t + e.deltaY
                      , r = 0 < e.deltaY && t - e.deltaY <= 0
                      , o = e.deltaY < 0 && n <= i.$results.height();
                    r ? (i.$results.scrollTop(0),
                    e.preventDefault(),
                    e.stopPropagation()) : o && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()),
                    e.preventDefault(),
                    e.stopPropagation())
                }
                )),
                this.$results.on("mouseup", ".select2-results__option[aria-selected]", (function(n) {
                    var r = e(this)
                      , o = t.GetData(this, "data");
                    "true" !== r.attr("aria-selected") ? i.trigger("select", {
                        originalEvent: n,
                        data: o
                    }) : i.options.get("multiple") ? i.trigger("unselect", {
                        originalEvent: n,
                        data: o
                    }) : i.trigger("close", {})
                }
                )),
                this.$results.on("mouseenter", ".select2-results__option[aria-selected]", (function() {
                    var n = t.GetData(this, "data");
                    i.getHighlightedResults().removeClass("select2-results__option--highlighted"),
                    i.trigger("results:focus", {
                        data: n,
                        element: e(this)
                    })
                }
                ))
            }
            ,
            n.prototype.getHighlightedResults = function() {
                return this.$results.find(".select2-results__option--highlighted")
            }
            ,
            n.prototype.destroy = function() {
                this.$results.remove()
            }
            ,
            n.prototype.ensureHighlightVisible = function() {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                    var t = this.$results.find("[aria-selected]").index(e)
                      , n = this.$results.offset().top
                      , i = e.offset().top
                      , r = this.$results.scrollTop() + (i - n)
                      , o = i - n;
                    r -= 2 * e.outerHeight(!1),
                    t <= 2 ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || o < 0) && this.$results.scrollTop(r)
                }
            }
            ,
            n.prototype.template = function(t, n) {
                var i = this.options.get("templateResult")
                  , r = this.options.get("escapeMarkup")
                  , o = i(t, n);
                null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : e(n).append(o)
            }
            ,
            n
        }
        )),
        l.define("select2/keys", [], (function() {
            return {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CTRL: 17,
                ALT: 18,
                ESC: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                DELETE: 46
            }
        }
        )),
        l.define("select2/selection/base", ["jquery", "../utils", "../keys"], (function(e, t, n) {
            function i(e, t) {
                this.$element = e,
                this.options = t,
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, t.Observable),
            i.prototype.render = function() {
                var n = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                return this._tabindex = 0,
                null != t.GetData(this.$element[0], "old-tabindex") ? this._tabindex = t.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
                n.attr("title", this.$element.attr("title")),
                n.attr("tabindex", this._tabindex),
                n.attr("aria-disabled", "false"),
                this.$selection = n
            }
            ,
            i.prototype.bind = function(e) {
                var t = this
                  , i = e.id + "-results";
                this.container = e,
                this.$selection.on("focus", (function(e) {
                    t.trigger("focus", e)
                }
                )),
                this.$selection.on("blur", (function(e) {
                    t._handleBlur(e)
                }
                )),
                this.$selection.on("keydown", (function(e) {
                    t.trigger("keypress", e),
                    e.which === n.SPACE && e.preventDefault()
                }
                )),
                e.on("results:focus", (function(e) {
                    t.$selection.attr("aria-activedescendant", e.data._resultId)
                }
                )),
                e.on("selection:update", (function(e) {
                    t.update(e.data)
                }
                )),
                e.on("open", (function() {
                    t.$selection.attr("aria-expanded", "true"),
                    t.$selection.attr("aria-owns", i),
                    t._attachCloseHandler(e)
                }
                )),
                e.on("close", (function() {
                    t.$selection.attr("aria-expanded", "false"),
                    t.$selection.removeAttr("aria-activedescendant"),
                    t.$selection.removeAttr("aria-owns"),
                    t.$selection.trigger("focus"),
                    t._detachCloseHandler(e)
                }
                )),
                e.on("enable", (function() {
                    t.$selection.attr("tabindex", t._tabindex),
                    t.$selection.attr("aria-disabled", "false")
                }
                )),
                e.on("disable", (function() {
                    t.$selection.attr("tabindex", "-1"),
                    t.$selection.attr("aria-disabled", "true")
                }
                ))
            }
            ,
            i.prototype._handleBlur = function(t) {
                var n = this;
                window.setTimeout((function() {
                    document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                }
                ), 1)
            }
            ,
            i.prototype._attachCloseHandler = function(n) {
                e(document.body).on("mousedown.select2." + n.id, (function(n) {
                    var i = e(n.target).closest(".select2");
                    e(".select2.select2-container--open").each((function() {
                        this != i[0] && t.GetData(this, "element").select2("close")
                    }
                    ))
                }
                ))
            }
            ,
            i.prototype._detachCloseHandler = function(t) {
                e(document.body).off("mousedown.select2." + t.id)
            }
            ,
            i.prototype.position = function(e, t) {
                t.find(".selection").append(e)
            }
            ,
            i.prototype.destroy = function() {
                this._detachCloseHandler(this.container)
            }
            ,
            i.prototype.update = function() {
                throw new Error("The `update` method must be defined in child classes.")
            }
            ,
            i.prototype.isEnabled = function() {
                return !this.isDisabled()
            }
            ,
            i.prototype.isDisabled = function() {
                return this.options.get("disabled")
            }
            ,
            i
        }
        )),
        l.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], (function(e, t, n) {
            function i() {
                i.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(i, t),
            i.prototype.render = function() {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--single"),
                e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
                e
            }
            ,
            i.prototype.bind = function(e, t) {
                var n = this;
                i.__super__.bind.apply(this, arguments);
                var r = e.id + "-container";
                this.$selection.find(".select2-selection__rendered").attr("id", r).attr("role", "textbox").attr("aria-readonly", "true"),
                this.$selection.attr("aria-labelledby", r),
                this.$selection.on("mousedown", (function(e) {
                    1 === e.which && n.trigger("toggle", {
                        originalEvent: e
                    })
                }
                )),
                this.$selection.on("focus", (function() {}
                )),
                this.$selection.on("blur", (function() {}
                )),
                e.on("focus", (function() {
                    e.isOpen() || n.$selection.trigger("focus")
                }
                ))
            }
            ,
            i.prototype.clear = function() {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(),
                e.removeAttr("title")
            }
            ,
            i.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }
            ,
            i.prototype.selectionContainer = function() {
                return e("<span></span>")
            }
            ,
            i.prototype.update = function(e) {
                if (0 !== e.length) {
                    var t = e[0]
                      , n = this.$selection.find(".select2-selection__rendered")
                      , i = this.display(t, n);
                    n.empty().append(i);
                    var r = t.title || t.text;
                    r ? n.attr("title", r) : n.removeAttr("title")
                } else
                    this.clear()
            }
            ,
            i
        }
        )),
        l.define("select2/selection/multiple", ["jquery", "./base", "../utils"], (function(e, t, n) {
            function i(e, t) {
                i.__super__.constructor.apply(this, arguments)
            }
            return n.Extend(i, t),
            i.prototype.render = function() {
                var e = i.__super__.render.call(this);
                return e.addClass("select2-selection--multiple"),
                e.html('<ul class="select2-selection__rendered"></ul>'),
                e
            }
            ,
            i.prototype.bind = function(t, r) {
                var o = this;
                i.__super__.bind.apply(this, arguments),
                this.$selection.on("click", (function(e) {
                    o.trigger("toggle", {
                        originalEvent: e
                    })
                }
                )),
                this.$selection.on("click", ".select2-selection__choice__remove", (function(t) {
                    if (!o.isDisabled()) {
                        var i = e(this).parent()
                          , r = n.GetData(i[0], "data");
                        o.trigger("unselect", {
                            originalEvent: t,
                            data: r
                        })
                    }
                }
                ))
            }
            ,
            i.prototype.clear = function() {
                var e = this.$selection.find(".select2-selection__rendered");
                e.empty(),
                e.removeAttr("title")
            }
            ,
            i.prototype.display = function(e, t) {
                var n = this.options.get("templateSelection");
                return this.options.get("escapeMarkup")(n(e, t))
            }
            ,
            i.prototype.selectionContainer = function() {
                return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
            }
            ,
            i.prototype.update = function(e) {
                if (this.clear(),
                0 !== e.length) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var r = e[i]
                          , o = this.selectionContainer()
                          , s = this.display(r, o);
                        o.append(s);
                        var a = r.title || r.text;
                        a && o.attr("title", a),
                        n.StoreData(o[0], "data", r),
                        t.push(o)
                    }
                    var l = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(l, t)
                }
            }
            ,
            i
        }
        )),
        l.define("select2/selection/placeholder", ["../utils"], (function() {
            function e(e, t, n) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                e.call(this, t, n)
            }
            return e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            e.prototype.createPlaceholder = function(e, t) {
                var n = this.selectionContainer();
                return n.html(this.display(t)),
                n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),
                n
            }
            ,
            e.prototype.update = function(e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (1 < t.length || n)
                    return e.call(this, t);
                this.clear();
                var i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i)
            }
            ,
            e
        }
        )),
        l.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], (function(e, t, n) {
            function i() {}
            return i.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
                this.$selection.on("mousedown", ".select2-selection__clear", (function(e) {
                    i._handleClear(e)
                }
                )),
                t.on("keypress", (function(e) {
                    i._handleKeyboardClear(e, t)
                }
                ))
            }
            ,
            i.prototype._handleClear = function(e, t) {
                if (!this.isDisabled()) {
                    var i = this.$selection.find(".select2-selection__clear");
                    if (0 !== i.length) {
                        t.stopPropagation();
                        var r = n.GetData(i[0], "data")
                          , o = this.$element.val();
                        this.$element.val(this.placeholder.id);
                        var s = {
                            data: r
                        };
                        if (this.trigger("clear", s),
                        s.prevented)
                            this.$element.val(o);
                        else {
                            for (var a = 0; a < r.length; a++)
                                if (s = {
                                    data: r[a]
                                },
                                this.trigger("unselect", s),
                                s.prevented)
                                    return void this.$element.val(o);
                            this.$element.trigger("input").trigger("change"),
                            this.trigger("toggle", {})
                        }
                    }
                }
            }
            ,
            i.prototype._handleKeyboardClear = function(e, n, i) {
                i.isOpen() || n.which != t.DELETE && n.which != t.BACKSPACE || this._handleClear(n)
            }
            ,
            i.prototype.update = function(t, i) {
                if (t.call(this, i),
                !(0 < this.$selection.find(".select2-selection__placeholder").length || 0 === i.length)) {
                    var r = this.options.get("translations").get("removeAllItems")
                      , o = e('<span class="select2-selection__clear" title="' + r() + '">&times;</span>');
                    n.StoreData(o[0], "data", i),
                    this.$selection.find(".select2-selection__rendered").prepend(o)
                }
            }
            ,
            i
        }
        )),
        l.define("select2/selection/search", ["jquery", "../utils", "../keys"], (function(e, t, n) {
            function i(e, t, n) {
                e.call(this, t, n)
            }
            return i.prototype.render = function(t) {
                var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');
                this.$searchContainer = n,
                this.$search = n.find("input");
                var i = t.call(this);
                return this._transferTabIndex(),
                i
            }
            ,
            i.prototype.bind = function(e, i, r) {
                var o = this
                  , s = i.id + "-results";
                e.call(this, i, r),
                i.on("open", (function() {
                    o.$search.attr("aria-controls", s),
                    o.$search.trigger("focus")
                }
                )),
                i.on("close", (function() {
                    o.$search.val(""),
                    o.$search.removeAttr("aria-controls"),
                    o.$search.removeAttr("aria-activedescendant"),
                    o.$search.trigger("focus")
                }
                )),
                i.on("enable", (function() {
                    o.$search.prop("disabled", !1),
                    o._transferTabIndex()
                }
                )),
                i.on("disable", (function() {
                    o.$search.prop("disabled", !0)
                }
                )),
                i.on("focus", (function() {
                    o.$search.trigger("focus")
                }
                )),
                i.on("results:focus", (function(e) {
                    e.data._resultId ? o.$search.attr("aria-activedescendant", e.data._resultId) : o.$search.removeAttr("aria-activedescendant")
                }
                )),
                this.$selection.on("focusin", ".select2-search--inline", (function(e) {
                    o.trigger("focus", e)
                }
                )),
                this.$selection.on("focusout", ".select2-search--inline", (function(e) {
                    o._handleBlur(e)
                }
                )),
                this.$selection.on("keydown", ".select2-search--inline", (function(e) {
                    if (e.stopPropagation(),
                    o.trigger("keypress", e),
                    o._keyUpPrevented = e.isDefaultPrevented(),
                    e.which === n.BACKSPACE && "" === o.$search.val()) {
                        var i = o.$searchContainer.prev(".select2-selection__choice");
                        if (0 < i.length) {
                            var r = t.GetData(i[0], "data");
                            o.searchRemoveChoice(r),
                            e.preventDefault()
                        }
                    }
                }
                )),
                this.$selection.on("click", ".select2-search--inline", (function(e) {
                    o.$search.val() && e.stopPropagation()
                }
                ));
                var a = document.documentMode
                  , l = a && a <= 11;
                this.$selection.on("input.searchcheck", ".select2-search--inline", (function() {
                    l ? o.$selection.off("input.search input.searchcheck") : o.$selection.off("keyup.search")
                }
                )),
                this.$selection.on("keyup.search input.search", ".select2-search--inline", (function(e) {
                    if (l && "input" === e.type)
                        o.$selection.off("input.search input.searchcheck");
                    else {
                        var t = e.which;
                        t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && o.handleSearch(e)
                    }
                }
                ))
            }
            ,
            i.prototype._transferTabIndex = function() {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                this.$selection.attr("tabindex", "-1")
            }
            ,
            i.prototype.createPlaceholder = function(e, t) {
                this.$search.attr("placeholder", t.text)
            }
            ,
            i.prototype.update = function(e, t) {
                var n = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                e.call(this, t),
                this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),
                this.resizeSearch(),
                n && this.$search.trigger("focus")
            }
            ,
            i.prototype.handleSearch = function() {
                if (this.resizeSearch(),
                !this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            i.prototype.searchRemoveChoice = function(e, t) {
                this.trigger("unselect", {
                    data: t
                }),
                this.$search.val(t.text),
                this.handleSearch()
            }
            ,
            i.prototype.resizeSearch = function() {
                this.$search.css("width", "25px");
                var e = "";
                e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2-selection__rendered").width() : .75 * (this.$search.val().length + 1) + "em",
                this.$search.css("width", e)
            }
            ,
            i
        }
        )),
        l.define("select2/selection/eventRelay", ["jquery"], (function(e) {
            function t() {}
            return t.prototype.bind = function(t, n, i) {
                var r = this
                  , o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"]
                  , s = ["opening", "closing", "selecting", "unselecting", "clearing"];
                t.call(this, n, i),
                n.on("*", (function(t, n) {
                    if (-1 !== e.inArray(t, o)) {
                        n = n || {};
                        var i = e.Event("select2:" + t, {
                            params: n
                        });
                        r.$element.trigger(i),
                        -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                    }
                }
                ))
            }
            ,
            t
        }
        )),
        l.define("select2/translation", ["jquery", "require"], (function(e, t) {
            function n(e) {
                this.dict = e || {}
            }
            return n.prototype.all = function() {
                return this.dict
            }
            ,
            n.prototype.get = function(e) {
                return this.dict[e]
            }
            ,
            n.prototype.extend = function(t) {
                this.dict = e.extend({}, t.all(), this.dict)
            }
            ,
            n._cache = {},
            n.loadPath = function(e) {
                if (!(e in n._cache)) {
                    var i = t(e);
                    n._cache[e] = i
                }
                return new n(n._cache[e])
            }
            ,
            n
        }
        )),
        l.define("select2/diacritics", [], (function() {
            return {
                "\u24b6": "A",
                "\uff21": "A",
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\u1ea6": "A",
                "\u1ea4": "A",
                "\u1eaa": "A",
                "\u1ea8": "A",
                "\xc3": "A",
                "\u0100": "A",
                "\u0102": "A",
                "\u1eb0": "A",
                "\u1eae": "A",
                "\u1eb4": "A",
                "\u1eb2": "A",
                "\u0226": "A",
                "\u01e0": "A",
                "\xc4": "A",
                "\u01de": "A",
                "\u1ea2": "A",
                "\xc5": "A",
                "\u01fa": "A",
                "\u01cd": "A",
                "\u0200": "A",
                "\u0202": "A",
                "\u1ea0": "A",
                "\u1eac": "A",
                "\u1eb6": "A",
                "\u1e00": "A",
                "\u0104": "A",
                "\u023a": "A",
                "\u2c6f": "A",
                "\ua732": "AA",
                "\xc6": "AE",
                "\u01fc": "AE",
                "\u01e2": "AE",
                "\ua734": "AO",
                "\ua736": "AU",
                "\ua738": "AV",
                "\ua73a": "AV",
                "\ua73c": "AY",
                "\u24b7": "B",
                "\uff22": "B",
                "\u1e02": "B",
                "\u1e04": "B",
                "\u1e06": "B",
                "\u0243": "B",
                "\u0182": "B",
                "\u0181": "B",
                "\u24b8": "C",
                "\uff23": "C",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\xc7": "C",
                "\u1e08": "C",
                "\u0187": "C",
                "\u023b": "C",
                "\ua73e": "C",
                "\u24b9": "D",
                "\uff24": "D",
                "\u1e0a": "D",
                "\u010e": "D",
                "\u1e0c": "D",
                "\u1e10": "D",
                "\u1e12": "D",
                "\u1e0e": "D",
                "\u0110": "D",
                "\u018b": "D",
                "\u018a": "D",
                "\u0189": "D",
                "\ua779": "D",
                "\u01f1": "DZ",
                "\u01c4": "DZ",
                "\u01f2": "Dz",
                "\u01c5": "Dz",
                "\u24ba": "E",
                "\uff25": "E",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\u1ec0": "E",
                "\u1ebe": "E",
                "\u1ec4": "E",
                "\u1ec2": "E",
                "\u1ebc": "E",
                "\u0112": "E",
                "\u1e14": "E",
                "\u1e16": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\xcb": "E",
                "\u1eba": "E",
                "\u011a": "E",
                "\u0204": "E",
                "\u0206": "E",
                "\u1eb8": "E",
                "\u1ec6": "E",
                "\u0228": "E",
                "\u1e1c": "E",
                "\u0118": "E",
                "\u1e18": "E",
                "\u1e1a": "E",
                "\u0190": "E",
                "\u018e": "E",
                "\u24bb": "F",
                "\uff26": "F",
                "\u1e1e": "F",
                "\u0191": "F",
                "\ua77b": "F",
                "\u24bc": "G",
                "\uff27": "G",
                "\u01f4": "G",
                "\u011c": "G",
                "\u1e20": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u01e6": "G",
                "\u0122": "G",
                "\u01e4": "G",
                "\u0193": "G",
                "\ua7a0": "G",
                "\ua77d": "G",
                "\ua77e": "G",
                "\u24bd": "H",
                "\uff28": "H",
                "\u0124": "H",
                "\u1e22": "H",
                "\u1e26": "H",
                "\u021e": "H",
                "\u1e24": "H",
                "\u1e28": "H",
                "\u1e2a": "H",
                "\u0126": "H",
                "\u2c67": "H",
                "\u2c75": "H",
                "\ua78d": "H",
                "\u24be": "I",
                "\uff29": "I",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u0130": "I",
                "\xcf": "I",
                "\u1e2e": "I",
                "\u1ec8": "I",
                "\u01cf": "I",
                "\u0208": "I",
                "\u020a": "I",
                "\u1eca": "I",
                "\u012e": "I",
                "\u1e2c": "I",
                "\u0197": "I",
                "\u24bf": "J",
                "\uff2a": "J",
                "\u0134": "J",
                "\u0248": "J",
                "\u24c0": "K",
                "\uff2b": "K",
                "\u1e30": "K",
                "\u01e8": "K",
                "\u1e32": "K",
                "\u0136": "K",
                "\u1e34": "K",
                "\u0198": "K",
                "\u2c69": "K",
                "\ua740": "K",
                "\ua742": "K",
                "\ua744": "K",
                "\ua7a2": "K",
                "\u24c1": "L",
                "\uff2c": "L",
                "\u013f": "L",
                "\u0139": "L",
                "\u013d": "L",
                "\u1e36": "L",
                "\u1e38": "L",
                "\u013b": "L",
                "\u1e3c": "L",
                "\u1e3a": "L",
                "\u0141": "L",
                "\u023d": "L",
                "\u2c62": "L",
                "\u2c60": "L",
                "\ua748": "L",
                "\ua746": "L",
                "\ua780": "L",
                "\u01c7": "LJ",
                "\u01c8": "Lj",
                "\u24c2": "M",
                "\uff2d": "M",
                "\u1e3e": "M",
                "\u1e40": "M",
                "\u1e42": "M",
                "\u2c6e": "M",
                "\u019c": "M",
                "\u24c3": "N",
                "\uff2e": "N",
                "\u01f8": "N",
                "\u0143": "N",
                "\xd1": "N",
                "\u1e44": "N",
                "\u0147": "N",
                "\u1e46": "N",
                "\u0145": "N",
                "\u1e4a": "N",
                "\u1e48": "N",
                "\u0220": "N",
                "\u019d": "N",
                "\ua790": "N",
                "\ua7a4": "N",
                "\u01ca": "NJ",
                "\u01cb": "Nj",
                "\u24c4": "O",
                "\uff2f": "O",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\u1ed2": "O",
                "\u1ed0": "O",
                "\u1ed6": "O",
                "\u1ed4": "O",
                "\xd5": "O",
                "\u1e4c": "O",
                "\u022c": "O",
                "\u1e4e": "O",
                "\u014c": "O",
                "\u1e50": "O",
                "\u1e52": "O",
                "\u014e": "O",
                "\u022e": "O",
                "\u0230": "O",
                "\xd6": "O",
                "\u022a": "O",
                "\u1ece": "O",
                "\u0150": "O",
                "\u01d1": "O",
                "\u020c": "O",
                "\u020e": "O",
                "\u01a0": "O",
                "\u1edc": "O",
                "\u1eda": "O",
                "\u1ee0": "O",
                "\u1ede": "O",
                "\u1ee2": "O",
                "\u1ecc": "O",
                "\u1ed8": "O",
                "\u01ea": "O",
                "\u01ec": "O",
                "\xd8": "O",
                "\u01fe": "O",
                "\u0186": "O",
                "\u019f": "O",
                "\ua74a": "O",
                "\ua74c": "O",
                "\u0152": "OE",
                "\u01a2": "OI",
                "\ua74e": "OO",
                "\u0222": "OU",
                "\u24c5": "P",
                "\uff30": "P",
                "\u1e54": "P",
                "\u1e56": "P",
                "\u01a4": "P",
                "\u2c63": "P",
                "\ua750": "P",
                "\ua752": "P",
                "\ua754": "P",
                "\u24c6": "Q",
                "\uff31": "Q",
                "\ua756": "Q",
                "\ua758": "Q",
                "\u024a": "Q",
                "\u24c7": "R",
                "\uff32": "R",
                "\u0154": "R",
                "\u1e58": "R",
                "\u0158": "R",
                "\u0210": "R",
                "\u0212": "R",
                "\u1e5a": "R",
                "\u1e5c": "R",
                "\u0156": "R",
                "\u1e5e": "R",
                "\u024c": "R",
                "\u2c64": "R",
                "\ua75a": "R",
                "\ua7a6": "R",
                "\ua782": "R",
                "\u24c8": "S",
                "\uff33": "S",
                "\u1e9e": "S",
                "\u015a": "S",
                "\u1e64": "S",
                "\u015c": "S",
                "\u1e60": "S",
                "\u0160": "S",
                "\u1e66": "S",
                "\u1e62": "S",
                "\u1e68": "S",
                "\u0218": "S",
                "\u015e": "S",
                "\u2c7e": "S",
                "\ua7a8": "S",
                "\ua784": "S",
                "\u24c9": "T",
                "\uff34": "T",
                "\u1e6a": "T",
                "\u0164": "T",
                "\u1e6c": "T",
                "\u021a": "T",
                "\u0162": "T",
                "\u1e70": "T",
                "\u1e6e": "T",
                "\u0166": "T",
                "\u01ac": "T",
                "\u01ae": "T",
                "\u023e": "T",
                "\ua786": "T",
                "\ua728": "TZ",
                "\u24ca": "U",
                "\uff35": "U",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\u0168": "U",
                "\u1e78": "U",
                "\u016a": "U",
                "\u1e7a": "U",
                "\u016c": "U",
                "\xdc": "U",
                "\u01db": "U",
                "\u01d7": "U",
                "\u01d5": "U",
                "\u01d9": "U",
                "\u1ee6": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u01d3": "U",
                "\u0214": "U",
                "\u0216": "U",
                "\u01af": "U",
                "\u1eea": "U",
                "\u1ee8": "U",
                "\u1eee": "U",
                "\u1eec": "U",
                "\u1ef0": "U",
                "\u1ee4": "U",
                "\u1e72": "U",
                "\u0172": "U",
                "\u1e76": "U",
                "\u1e74": "U",
                "\u0244": "U",
                "\u24cb": "V",
                "\uff36": "V",
                "\u1e7c": "V",
                "\u1e7e": "V",
                "\u01b2": "V",
                "\ua75e": "V",
                "\u0245": "V",
                "\ua760": "VY",
                "\u24cc": "W",
                "\uff37": "W",
                "\u1e80": "W",
                "\u1e82": "W",
                "\u0174": "W",
                "\u1e86": "W",
                "\u1e84": "W",
                "\u1e88": "W",
                "\u2c72": "W",
                "\u24cd": "X",
                "\uff38": "X",
                "\u1e8a": "X",
                "\u1e8c": "X",
                "\u24ce": "Y",
                "\uff39": "Y",
                "\u1ef2": "Y",
                "\xdd": "Y",
                "\u0176": "Y",
                "\u1ef8": "Y",
                "\u0232": "Y",
                "\u1e8e": "Y",
                "\u0178": "Y",
                "\u1ef6": "Y",
                "\u1ef4": "Y",
                "\u01b3": "Y",
                "\u024e": "Y",
                "\u1efe": "Y",
                "\u24cf": "Z",
                "\uff3a": "Z",
                "\u0179": "Z",
                "\u1e90": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u1e92": "Z",
                "\u1e94": "Z",
                "\u01b5": "Z",
                "\u0224": "Z",
                "\u2c7f": "Z",
                "\u2c6b": "Z",
                "\ua762": "Z",
                "\u24d0": "a",
                "\uff41": "a",
                "\u1e9a": "a",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\u1ea7": "a",
                "\u1ea5": "a",
                "\u1eab": "a",
                "\u1ea9": "a",
                "\xe3": "a",
                "\u0101": "a",
                "\u0103": "a",
                "\u1eb1": "a",
                "\u1eaf": "a",
                "\u1eb5": "a",
                "\u1eb3": "a",
                "\u0227": "a",
                "\u01e1": "a",
                "\xe4": "a",
                "\u01df": "a",
                "\u1ea3": "a",
                "\xe5": "a",
                "\u01fb": "a",
                "\u01ce": "a",
                "\u0201": "a",
                "\u0203": "a",
                "\u1ea1": "a",
                "\u1ead": "a",
                "\u1eb7": "a",
                "\u1e01": "a",
                "\u0105": "a",
                "\u2c65": "a",
                "\u0250": "a",
                "\ua733": "aa",
                "\xe6": "ae",
                "\u01fd": "ae",
                "\u01e3": "ae",
                "\ua735": "ao",
                "\ua737": "au",
                "\ua739": "av",
                "\ua73b": "av",
                "\ua73d": "ay",
                "\u24d1": "b",
                "\uff42": "b",
                "\u1e03": "b",
                "\u1e05": "b",
                "\u1e07": "b",
                "\u0180": "b",
                "\u0183": "b",
                "\u0253": "b",
                "\u24d2": "c",
                "\uff43": "c",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\xe7": "c",
                "\u1e09": "c",
                "\u0188": "c",
                "\u023c": "c",
                "\ua73f": "c",
                "\u2184": "c",
                "\u24d3": "d",
                "\uff44": "d",
                "\u1e0b": "d",
                "\u010f": "d",
                "\u1e0d": "d",
                "\u1e11": "d",
                "\u1e13": "d",
                "\u1e0f": "d",
                "\u0111": "d",
                "\u018c": "d",
                "\u0256": "d",
                "\u0257": "d",
                "\ua77a": "d",
                "\u01f3": "dz",
                "\u01c6": "dz",
                "\u24d4": "e",
                "\uff45": "e",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\u1ec1": "e",
                "\u1ebf": "e",
                "\u1ec5": "e",
                "\u1ec3": "e",
                "\u1ebd": "e",
                "\u0113": "e",
                "\u1e15": "e",
                "\u1e17": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\xeb": "e",
                "\u1ebb": "e",
                "\u011b": "e",
                "\u0205": "e",
                "\u0207": "e",
                "\u1eb9": "e",
                "\u1ec7": "e",
                "\u0229": "e",
                "\u1e1d": "e",
                "\u0119": "e",
                "\u1e19": "e",
                "\u1e1b": "e",
                "\u0247": "e",
                "\u025b": "e",
                "\u01dd": "e",
                "\u24d5": "f",
                "\uff46": "f",
                "\u1e1f": "f",
                "\u0192": "f",
                "\ua77c": "f",
                "\u24d6": "g",
                "\uff47": "g",
                "\u01f5": "g",
                "\u011d": "g",
                "\u1e21": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u01e7": "g",
                "\u0123": "g",
                "\u01e5": "g",
                "\u0260": "g",
                "\ua7a1": "g",
                "\u1d79": "g",
                "\ua77f": "g",
                "\u24d7": "h",
                "\uff48": "h",
                "\u0125": "h",
                "\u1e23": "h",
                "\u1e27": "h",
                "\u021f": "h",
                "\u1e25": "h",
                "\u1e29": "h",
                "\u1e2b": "h",
                "\u1e96": "h",
                "\u0127": "h",
                "\u2c68": "h",
                "\u2c76": "h",
                "\u0265": "h",
                "\u0195": "hv",
                "\u24d8": "i",
                "\uff49": "i",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\xef": "i",
                "\u1e2f": "i",
                "\u1ec9": "i",
                "\u01d0": "i",
                "\u0209": "i",
                "\u020b": "i",
                "\u1ecb": "i",
                "\u012f": "i",
                "\u1e2d": "i",
                "\u0268": "i",
                "\u0131": "i",
                "\u24d9": "j",
                "\uff4a": "j",
                "\u0135": "j",
                "\u01f0": "j",
                "\u0249": "j",
                "\u24da": "k",
                "\uff4b": "k",
                "\u1e31": "k",
                "\u01e9": "k",
                "\u1e33": "k",
                "\u0137": "k",
                "\u1e35": "k",
                "\u0199": "k",
                "\u2c6a": "k",
                "\ua741": "k",
                "\ua743": "k",
                "\ua745": "k",
                "\ua7a3": "k",
                "\u24db": "l",
                "\uff4c": "l",
                "\u0140": "l",
                "\u013a": "l",
                "\u013e": "l",
                "\u1e37": "l",
                "\u1e39": "l",
                "\u013c": "l",
                "\u1e3d": "l",
                "\u1e3b": "l",
                "\u017f": "l",
                "\u0142": "l",
                "\u019a": "l",
                "\u026b": "l",
                "\u2c61": "l",
                "\ua749": "l",
                "\ua781": "l",
                "\ua747": "l",
                "\u01c9": "lj",
                "\u24dc": "m",
                "\uff4d": "m",
                "\u1e3f": "m",
                "\u1e41": "m",
                "\u1e43": "m",
                "\u0271": "m",
                "\u026f": "m",
                "\u24dd": "n",
                "\uff4e": "n",
                "\u01f9": "n",
                "\u0144": "n",
                "\xf1": "n",
                "\u1e45": "n",
                "\u0148": "n",
                "\u1e47": "n",
                "\u0146": "n",
                "\u1e4b": "n",
                "\u1e49": "n",
                "\u019e": "n",
                "\u0272": "n",
                "\u0149": "n",
                "\ua791": "n",
                "\ua7a5": "n",
                "\u01cc": "nj",
                "\u24de": "o",
                "\uff4f": "o",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\u1ed3": "o",
                "\u1ed1": "o",
                "\u1ed7": "o",
                "\u1ed5": "o",
                "\xf5": "o",
                "\u1e4d": "o",
                "\u022d": "o",
                "\u1e4f": "o",
                "\u014d": "o",
                "\u1e51": "o",
                "\u1e53": "o",
                "\u014f": "o",
                "\u022f": "o",
                "\u0231": "o",
                "\xf6": "o",
                "\u022b": "o",
                "\u1ecf": "o",
                "\u0151": "o",
                "\u01d2": "o",
                "\u020d": "o",
                "\u020f": "o",
                "\u01a1": "o",
                "\u1edd": "o",
                "\u1edb": "o",
                "\u1ee1": "o",
                "\u1edf": "o",
                "\u1ee3": "o",
                "\u1ecd": "o",
                "\u1ed9": "o",
                "\u01eb": "o",
                "\u01ed": "o",
                "\xf8": "o",
                "\u01ff": "o",
                "\u0254": "o",
                "\ua74b": "o",
                "\ua74d": "o",
                "\u0275": "o",
                "\u0153": "oe",
                "\u01a3": "oi",
                "\u0223": "ou",
                "\ua74f": "oo",
                "\u24df": "p",
                "\uff50": "p",
                "\u1e55": "p",
                "\u1e57": "p",
                "\u01a5": "p",
                "\u1d7d": "p",
                "\ua751": "p",
                "\ua753": "p",
                "\ua755": "p",
                "\u24e0": "q",
                "\uff51": "q",
                "\u024b": "q",
                "\ua757": "q",
                "\ua759": "q",
                "\u24e1": "r",
                "\uff52": "r",
                "\u0155": "r",
                "\u1e59": "r",
                "\u0159": "r",
                "\u0211": "r",
                "\u0213": "r",
                "\u1e5b": "r",
                "\u1e5d": "r",
                "\u0157": "r",
                "\u1e5f": "r",
                "\u024d": "r",
                "\u027d": "r",
                "\ua75b": "r",
                "\ua7a7": "r",
                "\ua783": "r",
                "\u24e2": "s",
                "\uff53": "s",
                "\xdf": "s",
                "\u015b": "s",
                "\u1e65": "s",
                "\u015d": "s",
                "\u1e61": "s",
                "\u0161": "s",
                "\u1e67": "s",
                "\u1e63": "s",
                "\u1e69": "s",
                "\u0219": "s",
                "\u015f": "s",
                "\u023f": "s",
                "\ua7a9": "s",
                "\ua785": "s",
                "\u1e9b": "s",
                "\u24e3": "t",
                "\uff54": "t",
                "\u1e6b": "t",
                "\u1e97": "t",
                "\u0165": "t",
                "\u1e6d": "t",
                "\u021b": "t",
                "\u0163": "t",
                "\u1e71": "t",
                "\u1e6f": "t",
                "\u0167": "t",
                "\u01ad": "t",
                "\u0288": "t",
                "\u2c66": "t",
                "\ua787": "t",
                "\ua729": "tz",
                "\u24e4": "u",
                "\uff55": "u",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\u0169": "u",
                "\u1e79": "u",
                "\u016b": "u",
                "\u1e7b": "u",
                "\u016d": "u",
                "\xfc": "u",
                "\u01dc": "u",
                "\u01d8": "u",
                "\u01d6": "u",
                "\u01da": "u",
                "\u1ee7": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u01d4": "u",
                "\u0215": "u",
                "\u0217": "u",
                "\u01b0": "u",
                "\u1eeb": "u",
                "\u1ee9": "u",
                "\u1eef": "u",
                "\u1eed": "u",
                "\u1ef1": "u",
                "\u1ee5": "u",
                "\u1e73": "u",
                "\u0173": "u",
                "\u1e77": "u",
                "\u1e75": "u",
                "\u0289": "u",
                "\u24e5": "v",
                "\uff56": "v",
                "\u1e7d": "v",
                "\u1e7f": "v",
                "\u028b": "v",
                "\ua75f": "v",
                "\u028c": "v",
                "\ua761": "vy",
                "\u24e6": "w",
                "\uff57": "w",
                "\u1e81": "w",
                "\u1e83": "w",
                "\u0175": "w",
                "\u1e87": "w",
                "\u1e85": "w",
                "\u1e98": "w",
                "\u1e89": "w",
                "\u2c73": "w",
                "\u24e7": "x",
                "\uff58": "x",
                "\u1e8b": "x",
                "\u1e8d": "x",
                "\u24e8": "y",
                "\uff59": "y",
                "\u1ef3": "y",
                "\xfd": "y",
                "\u0177": "y",
                "\u1ef9": "y",
                "\u0233": "y",
                "\u1e8f": "y",
                "\xff": "y",
                "\u1ef7": "y",
                "\u1e99": "y",
                "\u1ef5": "y",
                "\u01b4": "y",
                "\u024f": "y",
                "\u1eff": "y",
                "\u24e9": "z",
                "\uff5a": "z",
                "\u017a": "z",
                "\u1e91": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u1e93": "z",
                "\u1e95": "z",
                "\u01b6": "z",
                "\u0225": "z",
                "\u0240": "z",
                "\u2c6c": "z",
                "\ua763": "z",
                "\u0386": "\u0391",
                "\u0388": "\u0395",
                "\u0389": "\u0397",
                "\u038a": "\u0399",
                "\u03aa": "\u0399",
                "\u038c": "\u039f",
                "\u038e": "\u03a5",
                "\u03ab": "\u03a5",
                "\u038f": "\u03a9",
                "\u03ac": "\u03b1",
                "\u03ad": "\u03b5",
                "\u03ae": "\u03b7",
                "\u03af": "\u03b9",
                "\u03ca": "\u03b9",
                "\u0390": "\u03b9",
                "\u03cc": "\u03bf",
                "\u03cd": "\u03c5",
                "\u03cb": "\u03c5",
                "\u03b0": "\u03c5",
                "\u03ce": "\u03c9",
                "\u03c2": "\u03c3",
                "\u2019": "'"
            }
        }
        )),
        l.define("select2/data/base", ["../utils"], (function(e) {
            function t() {
                t.__super__.constructor.call(this)
            }
            return e.Extend(t, e.Observable),
            t.prototype.current = function() {
                throw new Error("The `current` method must be defined in child classes.")
            }
            ,
            t.prototype.query = function() {
                throw new Error("The `query` method must be defined in child classes.")
            }
            ,
            t.prototype.bind = function() {}
            ,
            t.prototype.destroy = function() {}
            ,
            t.prototype.generateResultId = function(t, n) {
                var i = t.id + "-result-";
                return i += e.generateChars(4),
                null != n.id ? i += "-" + n.id.toString() : i += "-" + e.generateChars(4),
                i
            }
            ,
            t
        }
        )),
        l.define("select2/data/select", ["./base", "../utils", "jquery"], (function(e, t, n) {
            function i(e, t) {
                this.$element = e,
                this.options = t,
                i.__super__.constructor.call(this)
            }
            return t.Extend(i, e),
            i.prototype.current = function(e) {
                var t = []
                  , i = this;
                this.$element.find(":selected").each((function() {
                    var e = n(this)
                      , r = i.item(e);
                    t.push(r)
                }
                )),
                e(t)
            }
            ,
            i.prototype.select = function(e) {
                var t = this;
                if (e.selected = !0,
                n(e.element).is("option"))
                    return e.element.selected = !0,
                    void this.$element.trigger("input").trigger("change");
                if (this.$element.prop("multiple"))
                    this.current((function(i) {
                        var r = [];
                        (e = [e]).push.apply(e, i);
                        for (var o = 0; o < e.length; o++) {
                            var s = e[o].id;
                            -1 === n.inArray(s, r) && r.push(s)
                        }
                        t.$element.val(r),
                        t.$element.trigger("input").trigger("change")
                    }
                    ));
                else {
                    var i = e.id;
                    this.$element.val(i),
                    this.$element.trigger("input").trigger("change")
                }
            }
            ,
            i.prototype.unselect = function(e) {
                var t = this;
                if (this.$element.prop("multiple")) {
                    if (e.selected = !1,
                    n(e.element).is("option"))
                        return e.element.selected = !1,
                        void this.$element.trigger("input").trigger("change");
                    this.current((function(i) {
                        for (var r = [], o = 0; o < i.length; o++) {
                            var s = i[o].id;
                            s !== e.id && -1 === n.inArray(s, r) && r.push(s)
                        }
                        t.$element.val(r),
                        t.$element.trigger("input").trigger("change")
                    }
                    ))
                }
            }
            ,
            i.prototype.bind = function(e) {
                var t = this;
                (this.container = e).on("select", (function(e) {
                    t.select(e.data)
                }
                )),
                e.on("unselect", (function(e) {
                    t.unselect(e.data)
                }
                ))
            }
            ,
            i.prototype.destroy = function() {
                this.$element.find("*").each((function() {
                    t.RemoveData(this)
                }
                ))
            }
            ,
            i.prototype.query = function(e, t) {
                var i = []
                  , r = this;
                this.$element.children().each((function() {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                        var o = r.item(t)
                          , s = r.matches(e, o);
                        null !== s && i.push(s)
                    }
                }
                )),
                t({
                    results: i
                })
            }
            ,
            i.prototype.addOptions = function(e) {
                t.appendMany(this.$element, e)
            }
            ,
            i.prototype.option = function(e) {
                var i;
                e.children ? (i = document.createElement("optgroup")).label = e.text : void 0 !== (i = document.createElement("option")).textContent ? i.textContent = e.text : i.innerText = e.text,
                void 0 !== e.id && (i.value = e.id),
                e.disabled && (i.disabled = !0),
                e.selected && (i.selected = !0),
                e.title && (i.title = e.title);
                var r = n(i)
                  , o = this._normalizeItem(e);
                return o.element = i,
                t.StoreData(i, "data", o),
                r
            }
            ,
            i.prototype.item = function(e) {
                var i = {};
                if (null != (i = t.GetData(e[0], "data")))
                    return i;
                if (e.is("option"))
                    i = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                else if (e.is("optgroup")) {
                    i = {
                        text: e.prop("label"),
                        children: [],
                        title: e.prop("title")
                    };
                    for (var r = e.children("option"), o = [], s = 0; s < r.length; s++) {
                        var a = n(r[s])
                          , l = this.item(a);
                        o.push(l)
                    }
                    i.children = o
                }
                return (i = this._normalizeItem(i)).element = e[0],
                t.StoreData(e[0], "data", i),
                i
            }
            ,
            i.prototype._normalizeItem = function(e) {
                return e !== Object(e) && (e = {
                    id: e,
                    text: e
                }),
                null != (e = n.extend({}, {
                    text: ""
                }, e)).id && (e.id = e.id.toString()),
                null != e.text && (e.text = e.text.toString()),
                null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
                n.extend({}, {
                    selected: !1,
                    disabled: !1
                }, e)
            }
            ,
            i.prototype.matches = function(e, t) {
                return this.options.get("matcher")(e, t)
            }
            ,
            i
        }
        )),
        l.define("select2/data/array", ["./select", "../utils", "jquery"], (function(e, t, n) {
            function i(e, t) {
                this._dataToConvert = t.get("data") || [],
                i.__super__.constructor.call(this, e, t)
            }
            return t.Extend(i, e),
            i.prototype.bind = function(e, t) {
                i.__super__.bind.call(this, e, t),
                this.addOptions(this.convertToOptions(this._dataToConvert))
            }
            ,
            i.prototype.select = function(e) {
                var t = this.$element.find("option").filter((function(t, n) {
                    return n.value == e.id.toString()
                }
                ));
                0 === t.length && (t = this.option(e),
                this.addOptions(t)),
                i.__super__.select.call(this, e)
            }
            ,
            i.prototype.convertToOptions = function(e) {
                function i(e) {
                    return function() {
                        return n(this).val() == e.id
                    }
                }
                for (var r = this, o = this.$element.find("option"), s = o.map((function() {
                    return r.item(n(this)).id
                }
                )).get(), a = [], l = 0; l < e.length; l++) {
                    var c = this._normalizeItem(e[l]);
                    if (0 <= n.inArray(c.id, s)) {
                        var u = o.filter(i(c))
                          , d = this.item(u)
                          , h = n.extend(!0, {}, c, d)
                          , f = this.option(h);
                        u.replaceWith(f)
                    } else {
                        var p = this.option(c);
                        if (c.children) {
                            var m = this.convertToOptions(c.children);
                            t.appendMany(p, m)
                        }
                        a.push(p)
                    }
                }
                return a
            }
            ,
            i
        }
        )),
        l.define("select2/data/ajax", ["./array", "../utils", "jquery"], (function(e, t, n) {
            function i(e, t) {
                this.ajaxOptions = this._applyDefaults(t.get("ajax")),
                null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
                i.__super__.constructor.call(this, e, t)
            }
            return t.Extend(i, e),
            i.prototype._applyDefaults = function(e) {
                var t = {
                    data: function(e) {
                        return n.extend({}, e, {
                            q: e.term
                        })
                    },
                    transport: function(e, t, i) {
                        var r = n.ajax(e);
                        return r.then(t),
                        r.fail(i),
                        r
                    }
                };
                return n.extend({}, t, e, !0)
            }
            ,
            i.prototype.processResults = function(e) {
                return e
            }
            ,
            i.prototype.query = function(e, t) {
                function i() {
                    var i = o.transport(o, (function(i) {
                        var o = r.processResults(i, e);
                        r.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                        t(o)
                    }
                    ), (function() {
                        "status"in i && (0 === i.status || "0" === i.status) || r.trigger("results:message", {
                            message: "errorLoading"
                        })
                    }
                    ));
                    r._request = i
                }
                var r = this;
                null != this._request && (n.isFunction(this._request.abort) && this._request.abort(),
                this._request = null);
                var o = n.extend({
                    type: "GET"
                }, this.ajaxOptions);
                "function" == typeof o.url && (o.url = o.url.call(this.$element, e)),
                "function" == typeof o.data && (o.data = o.data.call(this.$element, e)),
                this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
                this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
            }
            ,
            i
        }
        )),
        l.define("select2/data/tags", ["jquery"], (function(e) {
            function t(t, n, i) {
                var r = i.get("tags")
                  , o = i.get("createTag");
                void 0 !== o && (this.createTag = o);
                var s = i.get("insertTag");
                if (void 0 !== s && (this.insertTag = s),
                t.call(this, n, i),
                e.isArray(r))
                    for (var a = 0; a < r.length; a++) {
                        var l = r[a]
                          , c = this._normalizeItem(l)
                          , u = this.option(c);
                        this.$element.append(u)
                    }
            }
            return t.prototype.query = function(e, t, n) {
                var i = this;
                this._removeOldTags(),
                null != t.term && null == t.page ? e.call(this, t, (function e(r, o) {
                    for (var s = r.results, a = 0; a < s.length; a++) {
                        var l = s[a]
                          , c = null != l.children && !e({
                            results: l.children
                        }, !0);
                        if ((l.text || "").toUpperCase() === (t.term || "").toUpperCase() || c)
                            return !o && (r.data = s,
                            void n(r))
                    }
                    if (o)
                        return !0;
                    var u = i.createTag(t);
                    if (null != u) {
                        var d = i.option(u);
                        d.attr("data-select2-tag", !0),
                        i.addOptions([d]),
                        i.insertTag(s, u)
                    }
                    r.results = s,
                    n(r)
                }
                )) : e.call(this, t, n)
            }
            ,
            t.prototype.createTag = function(t, n) {
                var i = e.trim(n.term);
                return "" === i ? null : {
                    id: i,
                    text: i
                }
            }
            ,
            t.prototype.insertTag = function(e, t, n) {
                t.unshift(n)
            }
            ,
            t.prototype._removeOldTags = function() {
                this.$element.find("option[data-select2-tag]").each((function() {
                    this.selected || e(this).remove()
                }
                ))
            }
            ,
            t
        }
        )),
        l.define("select2/data/tokenizer", ["jquery"], (function(e) {
            function t(e, t, n) {
                var i = n.get("tokenizer");
                void 0 !== i && (this.tokenizer = i),
                e.call(this, t, n)
            }
            return t.prototype.bind = function(e, t, n) {
                e.call(this, t, n),
                this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
            }
            ,
            t.prototype.query = function(t, n, i) {
                var r = this;
                n.term = n.term || "";
                var o = this.tokenizer(n, this.options, (function(t) {
                    var n, i = r._normalizeItem(t);
                    if (!r.$element.find("option").filter((function() {
                        return e(this).val() === i.id
                    }
                    )).length) {
                        var o = r.option(i);
                        o.attr("data-select2-tag", !0),
                        r._removeOldTags(),
                        r.addOptions([o])
                    }
                    n = i,
                    r.trigger("select", {
                        data: n
                    })
                }
                ));
                o.term !== n.term && (this.$search.length && (this.$search.val(o.term),
                this.$search.trigger("focus")),
                n.term = o.term),
                t.call(this, n, i)
            }
            ,
            t.prototype.tokenizer = function(t, n, i, r) {
                for (var o = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function(e) {
                    return {
                        id: e.term,
                        text: e.term
                    }
                }
                ; a < s.length; ) {
                    var c = s[a];
                    if (-1 !== e.inArray(c, o)) {
                        var u = s.substr(0, a)
                          , d = l(e.extend({}, n, {
                            term: u
                        }));
                        null != d ? (r(d),
                        s = s.substr(a + 1) || "",
                        a = 0) : a++
                    } else
                        a++
                }
                return {
                    term: s
                }
            }
            ,
            t
        }
        )),
        l.define("select2/data/minimumInputLength", [], (function() {
            function e(e, t, n) {
                this.minimumInputLength = n.get("minimumInputLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                t.term = t.term || "",
                t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                    message: "inputTooShort",
                    args: {
                        minimum: this.minimumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : e.call(this, t, n)
            }
            ,
            e
        }
        )),
        l.define("select2/data/maximumInputLength", [], (function() {
            function e(e, t, n) {
                this.maximumInputLength = n.get("maximumInputLength"),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                t.term = t.term || "",
                0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                    message: "inputTooLong",
                    args: {
                        maximum: this.maximumInputLength,
                        input: t.term,
                        params: t
                    }
                }) : e.call(this, t, n)
            }
            ,
            e
        }
        )),
        l.define("select2/data/maximumSelectionLength", [], (function() {
            function e(e, t, n) {
                this.maximumSelectionLength = n.get("maximumSelectionLength"),
                e.call(this, t, n)
            }
            return e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("select", (function() {
                    i._checkIfMaximumSelected()
                }
                ))
            }
            ,
            e.prototype.query = function(e, t, n) {
                var i = this;
                this._checkIfMaximumSelected((function() {
                    e.call(i, t, n)
                }
                ))
            }
            ,
            e.prototype._checkIfMaximumSelected = function(e, t) {
                var n = this;
                this.current((function(e) {
                    var i = null != e ? e.length : 0;
                    0 < n.maximumSelectionLength && i >= n.maximumSelectionLength ? n.trigger("results:message", {
                        message: "maximumSelected",
                        args: {
                            maximum: n.maximumSelectionLength
                        }
                    }) : t && t()
                }
                ))
            }
            ,
            e
        }
        )),
        l.define("select2/dropdown", ["jquery", "./utils"], (function(e, t) {
            function n(e, t) {
                this.$element = e,
                this.options = t,
                n.__super__.constructor.call(this)
            }
            return t.Extend(n, t.Observable),
            n.prototype.render = function() {
                var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$dropdown = t
            }
            ,
            n.prototype.bind = function() {}
            ,
            n.prototype.position = function() {}
            ,
            n.prototype.destroy = function() {
                this.$dropdown.remove()
            }
            ,
            n
        }
        )),
        l.define("select2/dropdown/search", ["jquery", "../utils"], (function(e) {
            function t() {}
            return t.prototype.render = function(t) {
                var n = t.call(this)
                  , i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
                return this.$searchContainer = i,
                this.$search = i.find("input"),
                n.prepend(i),
                n
            }
            ,
            t.prototype.bind = function(t, n, i) {
                var r = this
                  , o = n.id + "-results";
                t.call(this, n, i),
                this.$search.on("keydown", (function(e) {
                    r.trigger("keypress", e),
                    r._keyUpPrevented = e.isDefaultPrevented()
                }
                )),
                this.$search.on("input", (function() {
                    e(this).off("keyup")
                }
                )),
                this.$search.on("keyup input", (function(e) {
                    r.handleSearch(e)
                }
                )),
                n.on("open", (function() {
                    r.$search.attr("tabindex", 0),
                    r.$search.attr("aria-controls", o),
                    r.$search.trigger("focus"),
                    window.setTimeout((function() {
                        r.$search.trigger("focus")
                    }
                    ), 0)
                }
                )),
                n.on("close", (function() {
                    r.$search.attr("tabindex", -1),
                    r.$search.removeAttr("aria-controls"),
                    r.$search.removeAttr("aria-activedescendant"),
                    r.$search.val(""),
                    r.$search.trigger("blur")
                }
                )),
                n.on("focus", (function() {
                    n.isOpen() || r.$search.trigger("focus")
                }
                )),
                n.on("results:all", (function(e) {
                    null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"))
                }
                )),
                n.on("results:focus", (function(e) {
                    e.data._resultId ? r.$search.attr("aria-activedescendant", e.data._resultId) : r.$search.removeAttr("aria-activedescendant")
                }
                ))
            }
            ,
            t.prototype.handleSearch = function() {
                if (!this._keyUpPrevented) {
                    var e = this.$search.val();
                    this.trigger("query", {
                        term: e
                    })
                }
                this._keyUpPrevented = !1
            }
            ,
            t.prototype.showSearch = function() {
                return !0
            }
            ,
            t
        }
        )),
        l.define("select2/dropdown/hidePlaceholder", [], (function() {
            function e(e, t, n, i) {
                this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
                e.call(this, t, n, i)
            }
            return e.prototype.append = function(e, t) {
                t.results = this.removePlaceholder(t.results),
                e.call(this, t)
            }
            ,
            e.prototype.normalizePlaceholder = function(e, t) {
                return "string" == typeof t && (t = {
                    id: "",
                    text: t
                }),
                t
            }
            ,
            e.prototype.removePlaceholder = function(e, t) {
                for (var n = t.slice(0), i = t.length - 1; 0 <= i; i--) {
                    var r = t[i];
                    this.placeholder.id === r.id && n.splice(i, 1)
                }
                return n
            }
            ,
            e
        }
        )),
        l.define("select2/dropdown/infiniteScroll", ["jquery"], (function(e) {
            function t(e, t, n, i) {
                this.lastParams = {},
                e.call(this, t, n, i),
                this.$loadingMore = this.createLoadingMore(),
                this.loading = !1
            }
            return t.prototype.append = function(e, t) {
                this.$loadingMore.remove(),
                this.loading = !1,
                e.call(this, t),
                this.showLoadingMore(t) && (this.$results.append(this.$loadingMore),
                this.loadMoreIfNeeded())
            }
            ,
            t.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("query", (function(e) {
                    i.lastParams = e,
                    i.loading = !0
                }
                )),
                t.on("query:append", (function(e) {
                    i.lastParams = e,
                    i.loading = !0
                }
                )),
                this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
            }
            ,
            t.prototype.loadMoreIfNeeded = function() {
                var t = e.contains(document.documentElement, this.$loadingMore[0]);
                if (!this.loading && t) {
                    var n = this.$results.offset().top + this.$results.outerHeight(!1);
                    this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= n + 50 && this.loadMore()
                }
            }
            ,
            t.prototype.loadMore = function() {
                this.loading = !0;
                var t = e.extend({}, {
                    page: 1
                }, this.lastParams);
                t.page++,
                this.trigger("query:append", t)
            }
            ,
            t.prototype.showLoadingMore = function(e, t) {
                return t.pagination && t.pagination.more
            }
            ,
            t.prototype.createLoadingMore = function() {
                var t = e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>')
                  , n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)),
                t
            }
            ,
            t
        }
        )),
        l.define("select2/dropdown/attachBody", ["jquery", "../utils"], (function(e, t) {
            function n(t, n, i) {
                this.$dropdownParent = e(i.get("dropdownParent") || document.body),
                t.call(this, n, i)
            }
            return n.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("open", (function() {
                    i._showDropdown(),
                    i._attachPositioningHandler(t),
                    i._bindContainerResultHandlers(t)
                }
                )),
                t.on("close", (function() {
                    i._hideDropdown(),
                    i._detachPositioningHandler(t)
                }
                )),
                this.$dropdownContainer.on("mousedown", (function(e) {
                    e.stopPropagation()
                }
                ))
            }
            ,
            n.prototype.destroy = function(e) {
                e.call(this),
                this.$dropdownContainer.remove()
            }
            ,
            n.prototype.position = function(e, t, n) {
                t.attr("class", n.attr("class")),
                t.removeClass("select2"),
                t.addClass("select2-container--open"),
                t.css({
                    position: "absolute",
                    top: -999999
                }),
                this.$container = n
            }
            ,
            n.prototype.render = function(t) {
                var n = e("<span></span>")
                  , i = t.call(this);
                return n.append(i),
                this.$dropdownContainer = n
            }
            ,
            n.prototype._hideDropdown = function() {
                this.$dropdownContainer.detach()
            }
            ,
            n.prototype._bindContainerResultHandlers = function(e, t) {
                if (!this._containerResultsHandlersBound) {
                    var n = this;
                    t.on("results:all", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    t.on("results:append", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    t.on("results:message", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    t.on("select", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    t.on("unselect", (function() {
                        n._positionDropdown(),
                        n._resizeDropdown()
                    }
                    )),
                    this._containerResultsHandlersBound = !0
                }
            }
            ,
            n.prototype._attachPositioningHandler = function(n, i) {
                var r = this
                  , o = "scroll.select2." + i.id
                  , s = "resize.select2." + i.id
                  , a = "orientationchange.select2." + i.id
                  , l = this.$container.parents().filter(t.hasScroll);
                l.each((function() {
                    t.StoreData(this, "select2-scroll-position", {
                        x: e(this).scrollLeft(),
                        y: e(this).scrollTop()
                    })
                }
                )),
                l.on(o, (function() {
                    var n = t.GetData(this, "select2-scroll-position");
                    e(this).scrollTop(n.y)
                }
                )),
                e(window).on(o + " " + s + " " + a, (function() {
                    r._positionDropdown(),
                    r._resizeDropdown()
                }
                ))
            }
            ,
            n.prototype._detachPositioningHandler = function(n, i) {
                var r = "scroll.select2." + i.id
                  , o = "resize.select2." + i.id
                  , s = "orientationchange.select2." + i.id;
                this.$container.parents().filter(t.hasScroll).off(r),
                e(window).off(r + " " + o + " " + s)
            }
            ,
            n.prototype._positionDropdown = function() {
                var t = e(window)
                  , n = this.$dropdown.hasClass("select2-dropdown--above")
                  , i = this.$dropdown.hasClass("select2-dropdown--below")
                  , r = null
                  , o = this.$container.offset();
                o.bottom = o.top + this.$container.outerHeight(!1);
                var s = {
                    height: this.$container.outerHeight(!1)
                };
                s.top = o.top,
                s.bottom = o.top + s.height;
                var a = this.$dropdown.outerHeight(!1)
                  , l = t.scrollTop()
                  , c = t.scrollTop() + t.height()
                  , u = l < o.top - a
                  , d = c > o.bottom + a
                  , h = {
                    left: o.left,
                    top: s.bottom
                }
                  , f = this.$dropdownParent;
                "static" === f.css("position") && (f = f.offsetParent());
                var p = {
                    top: 0,
                    left: 0
                };
                (e.contains(document.body, f[0]) || f[0].isConnected) && (p = f.offset()),
                h.top -= p.top,
                h.left -= p.left,
                n || i || (r = "below"),
                d || !u || n ? !u && d && n && (r = "below") : r = "above",
                ("above" == r || n && "below" !== r) && (h.top = s.top - p.top - a),
                null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r),
                this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)),
                this.$dropdownContainer.css(h)
            }
            ,
            n.prototype._resizeDropdown = function() {
                var e = {
                    width: this.$container.outerWidth(!1) + "px"
                };
                this.options.get("dropdownAutoWidth") && (e.minWidth = e.width,
                e.position = "relative",
                e.width = "auto"),
                this.$dropdown.css(e)
            }
            ,
            n.prototype._showDropdown = function() {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                this._positionDropdown(),
                this._resizeDropdown()
            }
            ,
            n
        }
        )),
        l.define("select2/dropdown/minimumResultsForSearch", [], (function() {
            function e(e, t, n, i) {
                this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
                this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
                e.call(this, t, n, i)
            }
            return e.prototype.showSearch = function(e, t) {
                return !(function e(t) {
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.children ? n += e(r.children) : n++
                    }
                    return n
                }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
            }
            ,
            e
        }
        )),
        l.define("select2/dropdown/selectOnClose", ["../utils"], (function(e) {
            function t() {}
            return t.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("close", (function(e) {
                    i._handleSelectOnClose(e)
                }
                ))
            }
            ,
            t.prototype._handleSelectOnClose = function(t, n) {
                if (n && null != n.originalSelect2Event) {
                    var i = n.originalSelect2Event;
                    if ("select" === i._type || "unselect" === i._type)
                        return
                }
                var r = this.getHighlightedResults();
                if (!(r.length < 1)) {
                    var o = e.GetData(r[0], "data");
                    null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                        data: o
                    })
                }
            }
            ,
            t
        }
        )),
        l.define("select2/dropdown/closeOnSelect", [], (function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                var i = this;
                e.call(this, t, n),
                t.on("select", (function(e) {
                    i._selectTriggered(e)
                }
                )),
                t.on("unselect", (function(e) {
                    i._selectTriggered(e)
                }
                ))
            }
            ,
            e.prototype._selectTriggered = function(e, t) {
                var n = t.originalEvent;
                n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: t
                })
            }
            ,
            e
        }
        )),
        l.define("select2/i18n/en", [], (function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(e) {
                    var t = e.input.length - e.maximum
                      , n = "Please delete " + t + " character";
                    return 1 != t && (n += "s"),
                    n
                },
                inputTooShort: function(e) {
                    return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                },
                loadingMore: function() {
                    return "Loading more results\u2026"
                },
                maximumSelected: function(e) {
                    var t = "You can only select " + e.maximum + " item";
                    return 1 != e.maximum && (t += "s"),
                    t
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searching\u2026"
                },
                removeAllItems: function() {
                    return "Remove all items"
                }
            }
        }
        )),
        l.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], (function(e, t, n, i, r, o, s, a, l, c, u, d, h, f, p, m, g, v, y, b, w, _, x, k, $, C, S, T) {
            function E() {
                this.reset()
            }
            return E.prototype.apply = function(u) {
                if (null == (u = e.extend(!0, {}, this.defaults, u)).dataAdapter) {
                    if (null != u.ajax ? u.dataAdapter = p : null != u.data ? u.dataAdapter = f : u.dataAdapter = h,
                    0 < u.minimumInputLength && (u.dataAdapter = c.Decorate(u.dataAdapter, v)),
                    0 < u.maximumInputLength && (u.dataAdapter = c.Decorate(u.dataAdapter, y)),
                    0 < u.maximumSelectionLength && (u.dataAdapter = c.Decorate(u.dataAdapter, b)),
                    u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, m)),
                    null == u.tokenSeparators && null == u.tokenizer || (u.dataAdapter = c.Decorate(u.dataAdapter, g)),
                    null != u.query) {
                        var d = t(u.amdBase + "compat/query");
                        u.dataAdapter = c.Decorate(u.dataAdapter, d)
                    }
                    if (null != u.initSelection) {
                        var E = t(u.amdBase + "compat/initSelection");
                        u.dataAdapter = c.Decorate(u.dataAdapter, E)
                    }
                }
                if (null == u.resultsAdapter && (u.resultsAdapter = n,
                null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, k)),
                null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, x)),
                u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, S))),
                null == u.dropdownAdapter) {
                    if (u.multiple)
                        u.dropdownAdapter = w;
                    else {
                        var D = c.Decorate(w, _);
                        u.dropdownAdapter = D
                    }
                    if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, C)),
                    u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, T)),
                    null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
                        var A = t(u.amdBase + "compat/dropdownCss");
                        u.dropdownAdapter = c.Decorate(u.dropdownAdapter, A)
                    }
                    u.dropdownAdapter = c.Decorate(u.dropdownAdapter, $)
                }
                if (null == u.selectionAdapter) {
                    if (u.multiple ? u.selectionAdapter = r : u.selectionAdapter = i,
                    null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, o)),
                    u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)),
                    u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)),
                    null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
                        var M = t(u.amdBase + "compat/containerCss");
                        u.selectionAdapter = c.Decorate(u.selectionAdapter, M)
                    }
                    u.selectionAdapter = c.Decorate(u.selectionAdapter, l)
                }
                u.language = this._resolveLanguage(u.language),
                u.language.push("en");
                for (var I = [], P = 0; P < u.language.length; P++) {
                    var O = u.language[P];
                    -1 === I.indexOf(O) && I.push(O)
                }
                return u.language = I,
                u.translations = this._processTranslations(u.language, u.debug),
                u
            }
            ,
            E.prototype.reset = function() {
                function t(e) {
                    return e.replace(/[^\u0000-\u007E]/g, (function(e) {
                        return d[e] || e
                    }
                    ))
                }
                this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: {},
                    matcher: function n(i, r) {
                        if ("" === e.trim(i.term))
                            return r;
                        if (r.children && 0 < r.children.length) {
                            for (var o = e.extend(!0, {}, r), s = r.children.length - 1; 0 <= s; s--)
                                null == n(i, r.children[s]) && o.children.splice(s, 1);
                            return 0 < o.children.length ? o : n(i, o)
                        }
                        var a = t(r.text).toUpperCase()
                          , l = t(i.term).toUpperCase();
                        return -1 < a.indexOf(l) ? r : null
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    scrollAfterSelect: !1,
                    sorter: function(e) {
                        return e
                    },
                    templateResult: function(e) {
                        return e.text
                    },
                    templateSelection: function(e) {
                        return e.text
                    },
                    theme: "default",
                    width: "resolve"
                }
            }
            ,
            E.prototype.applyFromElement = function(e, t) {
                var n = e.language
                  , i = this.defaults.language
                  , r = t.prop("lang")
                  , o = t.closest("[lang]").prop("lang")
                  , s = Array.prototype.concat.call(this._resolveLanguage(r), this._resolveLanguage(n), this._resolveLanguage(i), this._resolveLanguage(o));
                return e.language = s,
                e
            }
            ,
            E.prototype._resolveLanguage = function(t) {
                if (!t)
                    return [];
                if (e.isEmptyObject(t))
                    return [];
                if (e.isPlainObject(t))
                    return [t];
                var n;
                n = e.isArray(t) ? t : [t];
                for (var i = [], r = 0; r < n.length; r++)
                    if (i.push(n[r]),
                    "string" == typeof n[r] && 0 < n[r].indexOf("-")) {
                        var o = n[r].split("-")[0];
                        i.push(o)
                    }
                return i
            }
            ,
            E.prototype._processTranslations = function(t, n) {
                for (var i = new u, r = 0; r < t.length; r++) {
                    var o = new u
                      , s = t[r];
                    if ("string" == typeof s)
                        try {
                            o = u.loadPath(s)
                        } catch (t) {
                            try {
                                s = this.defaults.amdLanguageBase + s,
                                o = u.loadPath(s)
                            } catch (t) {
                                n && window.console && console.warn && console.warn('Select2: The language file for "' + s + '" could not be automatically loaded. A fallback will be used instead.')
                            }
                        }
                    else
                        o = e.isPlainObject(s) ? new u(s) : s;
                    i.extend(o)
                }
                return i
            }
            ,
            E.prototype.set = function(t, n) {
                var i = {};
                i[e.camelCase(t)] = n;
                var r = c._convertData(i);
                e.extend(!0, this.defaults, r)
            }
            ,
            new E
        }
        )),
        l.define("select2/options", ["require", "jquery", "./defaults", "./utils"], (function(e, t, n, i) {
            function r(t, r) {
                if (this.options = t,
                null != r && this.fromElement(r),
                null != r && (this.options = n.applyFromElement(this.options, r)),
                this.options = n.apply(this.options),
                r && r.is("input")) {
                    var o = e(this.get("amdBase") + "compat/inputData");
                    this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                }
            }
            return r.prototype.fromElement = function(e) {
                function n(e, t) {
                    return t.toUpperCase()
                }
                var r = ["select2"];
                null == this.options.multiple && (this.options.multiple = e.prop("multiple")),
                null == this.options.disabled && (this.options.disabled = e.prop("disabled")),
                null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
                e.prop("disabled", this.options.disabled),
                e.prop("multiple", this.options.multiple),
                i.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
                i.StoreData(e[0], "data", i.GetData(e[0], "select2Tags")),
                i.StoreData(e[0], "tags", !0)),
                i.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
                e.attr("ajax--url", i.GetData(e[0], "ajaxUrl")),
                i.StoreData(e[0], "ajax-Url", i.GetData(e[0], "ajaxUrl")));
                for (var o = {}, s = 0; s < e[0].attributes.length; s++) {
                    var a = e[0].attributes[s].name
                      , l = "data-";
                    if (a.substr(0, l.length) == l) {
                        var c = a.substring(l.length)
                          , u = i.GetData(e[0], c);
                        o[c.replace(/-([a-z])/g, n)] = u
                    }
                }
                t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset && (o = t.extend(!0, {}, e[0].dataset, o));
                var d = t.extend(!0, {}, i.GetData(e[0]), o);
                for (var h in d = i._convertData(d))
                    -1 < t.inArray(h, r) || (t.isPlainObject(this.options[h]) ? t.extend(this.options[h], d[h]) : this.options[h] = d[h]);
                return this
            }
            ,
            r.prototype.get = function(e) {
                return this.options[e]
            }
            ,
            r.prototype.set = function(e, t) {
                this.options[e] = t
            }
            ,
            r
        }
        )),
        l.define("select2/core", ["jquery", "./options", "./utils", "./keys"], (function(e, t, n, i) {
            var r = function(e, i) {
                null != n.GetData(e[0], "select2") && n.GetData(e[0], "select2").destroy(),
                this.$element = e,
                this.id = this._generateId(e),
                i = i || {},
                this.options = new t(i,e),
                r.__super__.constructor.call(this);
                var o = e.attr("tabindex") || 0;
                n.StoreData(e[0], "old-tabindex", o),
                e.attr("tabindex", "-1");
                var s = this.options.get("dataAdapter");
                this.dataAdapter = new s(e,this.options);
                var a = this.render();
                this._placeContainer(a);
                var l = this.options.get("selectionAdapter");
                this.selection = new l(e,this.options),
                this.$selection = this.selection.render(),
                this.selection.position(this.$selection, a);
                var c = this.options.get("dropdownAdapter");
                this.dropdown = new c(e,this.options),
                this.$dropdown = this.dropdown.render(),
                this.dropdown.position(this.$dropdown, a);
                var u = this.options.get("resultsAdapter");
                this.results = new u(e,this.options,this.dataAdapter),
                this.$results = this.results.render(),
                this.results.position(this.$results, this.$dropdown);
                var d = this;
                this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current((function(e) {
                    d.trigger("selection:update", {
                        data: e
                    })
                }
                )),
                e.addClass("select2-hidden-accessible"),
                e.attr("aria-hidden", "true"),
                this._syncAttributes(),
                n.StoreData(e[0], "select2", this),
                e.data("select2", this)
            };
            return n.Extend(r, n.Observable),
            r.prototype._generateId = function(e) {
                return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
            }
            ,
            r.prototype._placeContainer = function(e) {
                e.insertAfter(this.$element);
                var t = this._resolveWidth(this.$element, this.options.get("width"));
                null != t && e.css("width", t)
            }
            ,
            r.prototype._resolveWidth = function(e, t) {
                var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element")
                }
                if ("element" == t) {
                    var r = e.outerWidth(!1);
                    return r <= 0 ? "auto" : r + "px"
                }
                if ("style" != t)
                    return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
                var o = e.attr("style");
                if ("string" != typeof o)
                    return null;
                for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                    var c = s[a].replace(/\s/g, "").match(n);
                    if (null !== c && 1 <= c.length)
                        return c[1]
                }
                return null
            }
            ,
            r.prototype._bindAdapters = function() {
                this.dataAdapter.bind(this, this.$container),
                this.selection.bind(this, this.$container),
                this.dropdown.bind(this, this.$container),
                this.results.bind(this, this.$container)
            }
            ,
            r.prototype._registerDomEvents = function() {
                var e = this;
                this.$element.on("change.select2", (function() {
                    e.dataAdapter.current((function(t) {
                        e.trigger("selection:update", {
                            data: t
                        })
                    }
                    ))
                }
                )),
                this.$element.on("focus.select2", (function(t) {
                    e.trigger("focus", t)
                }
                )),
                this._syncA = n.bind(this._syncAttributes, this),
                this._syncS = n.bind(this._syncSubtree, this),
                this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                var t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                null != t ? (this._observer = new t((function(t) {
                    e._syncA(),
                    e._syncS(null, t)
                }
                )),
                this._observer.observe(this.$element[0], {
                    attributes: !0,
                    childList: !0,
                    subtree: !1
                })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1),
                this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1),
                this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
            }
            ,
            r.prototype._registerDataEvents = function() {
                var e = this;
                this.dataAdapter.on("*", (function(t, n) {
                    e.trigger(t, n)
                }
                ))
            }
            ,
            r.prototype._registerSelectionEvents = function() {
                var t = this
                  , n = ["toggle", "focus"];
                this.selection.on("toggle", (function() {
                    t.toggleDropdown()
                }
                )),
                this.selection.on("focus", (function(e) {
                    t.focus(e)
                }
                )),
                this.selection.on("*", (function(i, r) {
                    -1 === e.inArray(i, n) && t.trigger(i, r)
                }
                ))
            }
            ,
            r.prototype._registerDropdownEvents = function() {
                var e = this;
                this.dropdown.on("*", (function(t, n) {
                    e.trigger(t, n)
                }
                ))
            }
            ,
            r.prototype._registerResultsEvents = function() {
                var e = this;
                this.results.on("*", (function(t, n) {
                    e.trigger(t, n)
                }
                ))
            }
            ,
            r.prototype._registerEvents = function() {
                var e = this;
                this.on("open", (function() {
                    e.$container.addClass("select2-container--open")
                }
                )),
                this.on("close", (function() {
                    e.$container.removeClass("select2-container--open")
                }
                )),
                this.on("enable", (function() {
                    e.$container.removeClass("select2-container--disabled")
                }
                )),
                this.on("disable", (function() {
                    e.$container.addClass("select2-container--disabled")
                }
                )),
                this.on("blur", (function() {
                    e.$container.removeClass("select2-container--focus")
                }
                )),
                this.on("query", (function(t) {
                    e.isOpen() || e.trigger("open", {}),
                    this.dataAdapter.query(t, (function(n) {
                        e.trigger("results:all", {
                            data: n,
                            query: t
                        })
                    }
                    ))
                }
                )),
                this.on("query:append", (function(t) {
                    this.dataAdapter.query(t, (function(n) {
                        e.trigger("results:append", {
                            data: n,
                            query: t
                        })
                    }
                    ))
                }
                )),
                this.on("keypress", (function(t) {
                    var n = t.which;
                    e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(t),
                    t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}),
                    t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}),
                    t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}),
                    t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}),
                    t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(),
                    t.preventDefault())
                }
                ))
            }
            ,
            r.prototype._syncAttributes = function() {
                this.options.set("disabled", this.$element.prop("disabled")),
                this.isDisabled() ? (this.isOpen() && this.close(),
                this.trigger("disable", {})) : this.trigger("enable", {})
            }
            ,
            r.prototype._isChangeMutation = function(t, n) {
                var i = !1
                  , r = this;
                if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                    if (n)
                        if (n.addedNodes && 0 < n.addedNodes.length)
                            for (var o = 0; o < n.addedNodes.length; o++)
                                n.addedNodes[o].selected && (i = !0);
                        else
                            n.removedNodes && 0 < n.removedNodes.length ? i = !0 : e.isArray(n) && e.each(n, (function(e, t) {
                                if (r._isChangeMutation(e, t))
                                    return !(i = !0)
                            }
                            ));
                    else
                        i = !0;
                    return i
                }
            }
            ,
            r.prototype._syncSubtree = function(e, t) {
                var n = this._isChangeMutation(e, t)
                  , i = this;
                n && this.dataAdapter.current((function(e) {
                    i.trigger("selection:update", {
                        data: e
                    })
                }
                ))
            }
            ,
            r.prototype.trigger = function(e, t) {
                var n = r.__super__.trigger
                  , i = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                    clear: "clearing"
                };
                if (void 0 === t && (t = {}),
                e in i) {
                    var o = i[e]
                      , s = {
                        prevented: !1,
                        name: e,
                        args: t
                    };
                    if (n.call(this, o, s),
                    s.prevented)
                        return void (t.prevented = !0)
                }
                n.call(this, e, t)
            }
            ,
            r.prototype.toggleDropdown = function() {
                this.isDisabled() || (this.isOpen() ? this.close() : this.open())
            }
            ,
            r.prototype.open = function() {
                this.isOpen() || this.isDisabled() || this.trigger("query", {})
            }
            ,
            r.prototype.close = function(e) {
                this.isOpen() && this.trigger("close", {
                    originalEvent: e
                })
            }
            ,
            r.prototype.isEnabled = function() {
                return !this.isDisabled()
            }
            ,
            r.prototype.isDisabled = function() {
                return this.options.get("disabled")
            }
            ,
            r.prototype.isOpen = function() {
                return this.$container.hasClass("select2-container--open")
            }
            ,
            r.prototype.hasFocus = function() {
                return this.$container.hasClass("select2-container--focus")
            }
            ,
            r.prototype.focus = function() {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"),
                this.trigger("focus", {}))
            }
            ,
            r.prototype.enable = function(e) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),
                null != e && 0 !== e.length || (e = [!0]);
                var t = !e[0];
                this.$element.prop("disabled", t)
            }
            ,
            r.prototype.data = function() {
                this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                var e = [];
                return this.dataAdapter.current((function(t) {
                    e = t
                }
                )),
                e
            }
            ,
            r.prototype.val = function(t) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
                null == t || 0 === t.length)
                    return this.$element.val();
                var n = t[0];
                e.isArray(n) && (n = e.map(n, (function(e) {
                    return e.toString()
                }
                ))),
                this.$element.val(n).trigger("input").trigger("change")
            }
            ,
            r.prototype.destroy = function() {
                this.$container.remove(),
                this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA),
                null != this._observer ? (this._observer.disconnect(),
                this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1),
                this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1),
                this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)),
                this._syncA = null,
                this._syncS = null,
                this.$element.off(".select2"),
                this.$element.attr("tabindex", n.GetData(this.$element[0], "old-tabindex")),
                this.$element.removeClass("select2-hidden-accessible"),
                this.$element.attr("aria-hidden", "false"),
                n.RemoveData(this.$element[0]),
                this.$element.removeData("select2"),
                this.dataAdapter.destroy(),
                this.selection.destroy(),
                this.dropdown.destroy(),
                this.results.destroy(),
                this.dataAdapter = null,
                this.selection = null,
                this.dropdown = null,
                this.results = null
            }
            ,
            r.prototype.render = function() {
                var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                return t.attr("dir", this.options.get("dir")),
                this.$container = t,
                this.$container.addClass("select2-container--" + this.options.get("theme")),
                n.StoreData(t[0], "element", this.$element),
                t
            }
            ,
            r
        }
        )),
        l.define("select2/compat/utils", ["jquery"], (function(e) {
            return {
                syncCssClasses: function(t, n, i) {
                    var r, o, s = [];
                    (r = e.trim(t.attr("class"))) && e((r = "" + r).split(/\s+/)).each((function() {
                        0 === this.indexOf("select2-") && s.push(this)
                    }
                    )),
                    (r = e.trim(n.attr("class"))) && e((r = "" + r).split(/\s+/)).each((function() {
                        0 !== this.indexOf("select2-") && null != (o = i(this)) && s.push(o)
                    }
                    )),
                    t.attr("class", s.join(" "))
                }
            }
        }
        )),
        l.define("select2/compat/containerCss", ["jquery", "./utils"], (function(e, t) {
            function n() {
                return null
            }
            function i() {}
            return i.prototype.render = function(i) {
                var r = i.call(this)
                  , o = this.options.get("containerCssClass") || "";
                e.isFunction(o) && (o = o(this.$element));
                var s = this.options.get("adaptContainerCssClass");
                if (s = s || n,
                -1 !== o.indexOf(":all:")) {
                    o = o.replace(":all:", "");
                    var a = s;
                    s = function(e) {
                        var t = a(e);
                        return null != t ? t + " " + e : e
                    }
                }
                var l = this.options.get("containerCss") || {};
                return e.isFunction(l) && (l = l(this.$element)),
                t.syncCssClasses(r, this.$element, s),
                r.css(l),
                r.addClass(o),
                r
            }
            ,
            i
        }
        )),
        l.define("select2/compat/dropdownCss", ["jquery", "./utils"], (function(e, t) {
            function n() {
                return null
            }
            function i() {}
            return i.prototype.render = function(i) {
                var r = i.call(this)
                  , o = this.options.get("dropdownCssClass") || "";
                e.isFunction(o) && (o = o(this.$element));
                var s = this.options.get("adaptDropdownCssClass");
                if (s = s || n,
                -1 !== o.indexOf(":all:")) {
                    o = o.replace(":all:", "");
                    var a = s;
                    s = function(e) {
                        var t = a(e);
                        return null != t ? t + " " + e : e
                    }
                }
                var l = this.options.get("dropdownCss") || {};
                return e.isFunction(l) && (l = l(this.$element)),
                t.syncCssClasses(r, this.$element, s),
                r.css(l),
                r.addClass(o),
                r
            }
            ,
            i
        }
        )),
        l.define("select2/compat/initSelection", ["jquery"], (function(e) {
            function t(e, t, n) {
                n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),
                this.initSelection = n.get("initSelection"),
                this._isInitialized = !1,
                e.call(this, t, n)
            }
            return t.prototype.current = function(t, n) {
                var i = this;
                this._isInitialized ? t.call(this, n) : this.initSelection.call(null, this.$element, (function(t) {
                    i._isInitialized = !0,
                    e.isArray(t) || (t = [t]),
                    n(t)
                }
                ))
            }
            ,
            t
        }
        )),
        l.define("select2/compat/inputData", ["jquery", "../utils"], (function(e, t) {
            function n(e, t, n) {
                this._currentData = [],
                this._valueSeparator = n.get("valueSeparator") || ",",
                "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),
                e.call(this, t, n)
            }
            return n.prototype.current = function(t, n) {
                function i(t, n) {
                    var r = [];
                    return t.selected || -1 !== e.inArray(t.id, n) ? (t.selected = !0,
                    r.push(t)) : t.selected = !1,
                    t.children && r.push.apply(r, i(t.children, n)),
                    r
                }
                for (var r = [], o = 0; o < this._currentData.length; o++) {
                    var s = this._currentData[o];
                    r.push.apply(r, i(s, this.$element.val().split(this._valueSeparator)))
                }
                n(r)
            }
            ,
            n.prototype.select = function(t, n) {
                if (this.options.get("multiple")) {
                    var i = this.$element.val();
                    i += this._valueSeparator + n.id,
                    this.$element.val(i),
                    this.$element.trigger("input").trigger("change")
                } else
                    this.current((function(t) {
                        e.map(t, (function(e) {
                            e.selected = !1
                        }
                        ))
                    }
                    )),
                    this.$element.val(n.id),
                    this.$element.trigger("input").trigger("change")
            }
            ,
            n.prototype.unselect = function(e, t) {
                var n = this;
                t.selected = !1,
                this.current((function(e) {
                    for (var i = [], r = 0; r < e.length; r++) {
                        var o = e[r];
                        t.id != o.id && i.push(o.id)
                    }
                    n.$element.val(i.join(n._valueSeparator)),
                    n.$element.trigger("input").trigger("change")
                }
                ))
            }
            ,
            n.prototype.query = function(e, t, n) {
                for (var i = [], r = 0; r < this._currentData.length; r++) {
                    var o = this._currentData[r]
                      , s = this.matches(t, o);
                    null !== s && i.push(s)
                }
                n({
                    results: i
                })
            }
            ,
            n.prototype.addOptions = function(n, i) {
                var r = e.map(i, (function(e) {
                    return t.GetData(e[0], "data")
                }
                ));
                this._currentData.push.apply(this._currentData, r)
            }
            ,
            n
        }
        )),
        l.define("select2/compat/matcher", ["jquery"], (function(e) {
            return function(t) {
                return function(n, i) {
                    var r = e.extend(!0, {}, i);
                    if (null == n.term || "" === e.trim(n.term))
                        return r;
                    if (i.children) {
                        for (var o = i.children.length - 1; 0 <= o; o--) {
                            var s = i.children[o];
                            t(n.term, s.text, s) || r.children.splice(o, 1)
                        }
                        if (0 < r.children.length)
                            return r
                    }
                    return t(n.term, i.text, i) ? r : null
                }
            }
        }
        )),
        l.define("select2/compat/query", [], (function() {
            function e(e, t, n) {
                n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),
                e.call(this, t, n)
            }
            return e.prototype.query = function(e, t, n) {
                t.callback = n,
                this.options.get("query").call(null, t)
            }
            ,
            e
        }
        )),
        l.define("select2/dropdown/attachContainer", [], (function() {
            function e(e, t, n) {
                e.call(this, t, n)
            }
            return e.prototype.position = function(e, t, n) {
                n.find(".dropdown-wrapper").append(t),
                t.addClass("select2-dropdown--below"),
                n.addClass("select2-container--below")
            }
            ,
            e
        }
        )),
        l.define("select2/dropdown/stopPropagation", [], (function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                e.call(this, t, n),
                this.$dropdown.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function(e) {
                    e.stopPropagation()
                }
                ))
            }
            ,
            e
        }
        )),
        l.define("select2/selection/stopPropagation", [], (function() {
            function e() {}
            return e.prototype.bind = function(e, t, n) {
                e.call(this, t, n),
                this.$selection.on(["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"].join(" "), (function(e) {
                    e.stopPropagation()
                }
                ))
            }
            ,
            e
        }
        )),
        C = function(e) {
            function t(t) {
                var s, a = t || window.event, c = l.call(arguments, 1), d = 0, h = 0, f = 0, p = 0, m = 0;
                if ((t = e.event.fix(a)).type = "mousewheel",
                "detail"in a && (f = -1 * a.detail),
                "wheelDelta"in a && (f = a.wheelDelta),
                "wheelDeltaY"in a && (f = a.wheelDeltaY),
                "wheelDeltaX"in a && (h = -1 * a.wheelDeltaX),
                "axis"in a && a.axis === a.HORIZONTAL_AXIS && (h = -1 * f,
                f = 0),
                d = 0 === f ? h : f,
                "deltaY"in a && (d = f = -1 * a.deltaY),
                "deltaX"in a && (h = a.deltaX,
                0 === f && (d = -1 * h)),
                0 !== f || 0 !== h) {
                    if (1 === a.deltaMode) {
                        var g = e.data(this, "mousewheel-line-height");
                        d *= g,
                        f *= g,
                        h *= g
                    } else if (2 === a.deltaMode) {
                        var v = e.data(this, "mousewheel-page-height");
                        d *= v,
                        f *= v,
                        h *= v
                    }
                    if (s = Math.max(Math.abs(f), Math.abs(h)),
                    (!o || s < o) && i(a, o = s) && (o /= 40),
                    i(a, s) && (d /= 40,
                    h /= 40,
                    f /= 40),
                    d = Math[1 <= d ? "floor" : "ceil"](d / o),
                    h = Math[1 <= h ? "floor" : "ceil"](h / o),
                    f = Math[1 <= f ? "floor" : "ceil"](f / o),
                    u.settings.normalizeOffset && this.getBoundingClientRect) {
                        var y = this.getBoundingClientRect();
                        p = t.clientX - y.left,
                        m = t.clientY - y.top
                    }
                    return t.deltaX = h,
                    t.deltaY = f,
                    t.deltaFactor = o,
                    t.offsetX = p,
                    t.offsetY = m,
                    t.deltaMode = 0,
                    c.unshift(t, d, h, f),
                    r && clearTimeout(r),
                    r = setTimeout(n, 200),
                    (e.event.dispatch || e.event.handle).apply(this, c)
                }
            }
            function n() {
                o = null
            }
            function i(e, t) {
                return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
            }
            var r, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], a = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], l = Array.prototype.slice;
            if (e.event.fixHooks)
                for (var c = s.length; c; )
                    e.event.fixHooks[s[--c]] = e.event.mouseHooks;
            var u = e.event.special.mousewheel = {
                version: "3.1.12",
                setup: function() {
                    if (this.addEventListener)
                        for (var n = a.length; n; )
                            this.addEventListener(a[--n], t, !1);
                    else
                        this.onmousewheel = t;
                    e.data(this, "mousewheel-line-height", u.getLineHeight(this)),
                    e.data(this, "mousewheel-page-height", u.getPageHeight(this))
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var n = a.length; n; )
                            this.removeEventListener(a[--n], t, !1);
                    else
                        this.onmousewheel = null;
                    e.removeData(this, "mousewheel-line-height"),
                    e.removeData(this, "mousewheel-page-height")
                },
                getLineHeight: function(t) {
                    var n = e(t)
                      , i = n["offsetParent"in e.fn ? "offsetParent" : "parent"]();
                    return i.length || (i = e("body")),
                    parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                },
                getPageHeight: function(t) {
                    return e(t).height()
                },
                settings: {
                    adjustOldDeltas: !0,
                    normalizeOffset: !0
                }
            };
            e.fn.extend({
                mousewheel: function(e) {
                    return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                },
                unmousewheel: function(e) {
                    return this.unbind("mousewheel", e)
                }
            })
        }
        ,
        "function" == typeof l.define && l.define.amd ? l.define("jquery-mousewheel", ["jquery"], C) : "object" == typeof exports ? module.exports = C : C(e),
        l.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], (function(e, t, n, i, r) {
            if (null == e.fn.select2) {
                var o = ["open", "close", "destroy"];
                e.fn.select2 = function(t) {
                    if ("object" == typeof (t = t || {}))
                        return this.each((function() {
                            var i = e.extend(!0, {}, t);
                            new n(e(this),i)
                        }
                        )),
                        this;
                    if ("string" != typeof t)
                        throw new Error("Invalid arguments for Select2: " + t);
                    var i, s = Array.prototype.slice.call(arguments, 1);
                    return this.each((function() {
                        var e = r.GetData(this, "select2");
                        null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."),
                        i = e[t].apply(e, s)
                    }
                    )),
                    -1 < e.inArray(t, o) ? this : i
                }
            }
            return null == e.fn.select2.defaults && (e.fn.select2.defaults = i),
            n
        }
        )),
        {
            define: l.define,
            require: l.require
        }
    }()
      , n = t.require("jquery.select2");
    return e.fn.select2.amd = t,
    n
}
));
