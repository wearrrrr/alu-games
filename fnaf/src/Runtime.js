var za = "function" == typeof Object.defineProperties ? Object.defineProperty : function (P, pa, t) { if (t.get || t.set) throw new TypeError("ES3 does not support getters and setters."); P != Array.prototype && P != Object.prototype && (P[pa] = t.value) }, Xa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this; function kb() { kb = function () { }; Xa.Symbol || (Xa.Symbol = lb) } var mb = 0; function lb(P) { return "jscomp_symbol_" + (P || "") + mb++ }
function be() { kb(); var P = Xa.Symbol.iterator; P || (P = Xa.Symbol.iterator = Xa.Symbol("iterator")); "function" != typeof Array.prototype[P] && za(Array.prototype, P, { configurable: !0, writable: !0, value: function () { return ce(this) } }); be = function () { } } function ce(P) { var pa = 0; return de(function () { return pa < P.length ? { done: !1, value: P[pa++] } : { done: !0 } }) } function de(P) { be(); P = { next: P }; P[Xa.Symbol.iterator] = function () { return this }; return P }
function ee(P, pa) { be(); P instanceof String && (P += ""); var t = 0, V = { next: function () { if (t < P.length) { var X = t++; return { value: pa(X, P[X]), done: !1 } } V.next = function () { return { done: !0, value: void 0 } }; return V.next() } }; V[Symbol.iterator] = function () { return V }; return V } function fe(P, pa) { if (pa) { for (var t = Xa, V = P.split("."), X = 0; X < V.length - 1; X++) { var N = V[X]; N in t || (t[N] = {}); t = t[N] } V = V[V.length - 1]; X = t[V]; N = pa(X); N != X && null != N && za(t, V, { configurable: !0, writable: !0, value: N }) } }
fe("Array.prototype.values", function (P) { return P ? P : function () { return ee(this, function (P, t) { return t }) } }); fe("Array.prototype.fill", function (P) { return P ? P : function (P, t, V) { var X = this.length || 0; 0 > t && (t = Math.max(0, X + t)); if (null == V || V > X) V = X; V = Number(V); 0 > V && (V = Math.max(0, X + V)); for (t = Number(t || 0); t < V; t++)this[t] = P; return this } });
window.Runtime = function (P, pa) {
    function t(a, b) { this.files = {}; this.root = ""; a && this.load(a, b) } function V(a, b, c) { this.x = a; this.y = b; this.text = c } function X() { this.gd = ""; this.offset = this.O = 0; this.fd = !1 } function N() { this.xd = [] } function aa(a, b, c, d) { this.left = a ? a : 0; this.top = b ? b : 0; this.right = c ? c : 0; this.bottom = d ? d : 0 } function qa() { this.y = this.x = 0 } function Ya() { this.bc = 12; this.Ee = 400; this.De = 0; this.Ce = "Arial"; this.Ji = !1 } function la(a, b) { this.app = a; this.ma = b; this.Xa = new N; this.$j = null } function ia(a, b, c) {
        this.app =
        a; this.width = b; this.height = c; this.canvas = document.createElement("canvas"); this.canvas.width = b; this.canvas.height = c; this.Pd = this.canvas.getContext("2d")
    } function Ea() {
        this.tI = !!window.opr && !!opr.aP || !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/"); this.sI = "undefined" !== typeof InstallTrigger; this.wI = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString(); this.On = !!document.documentMode;
        this.qI = !this.On && !!window.StyleMedia; (this.EA = !!window.chrome && !!window.chrome.webstore) || this.qI || this.On || this.sI || this.tI || this.wI || this.OC(Ea.fH); this.version = this.PC(navigator.userAgent) || this.PC(navigator.appVersion) || "Unknown version"; this.OC(Ea.hH)
    } function wa() { this.mu = null; this.height = this.width = 0; this.mg = null; this.ma = this.color = 0; this.HH = null; this.vr = this.dv = this.pI = this.$z = this.Ad = 0; this.lu = null; this.Ji = !0 } function U() { } function nb() { this.ma = 0; this.name = null; this.index = 0 } function da() { }
    function ob() { } function pb() { } function qb() { } function rb() { } function sb() { } function tb() { } function ub() { } function vb() { } function wb() { } function xb() { } function yb() { } function zb() { } function Ab() { } function Bb() { } function Cb() { } function Db() { } function Eb() { } function Fb() { } function Gb() { } function Hb() { } function Ib() { } function Jb() { } function Kb() { } function Lb() { } function Mb() { } function L() { } function ra() { } function Za() { } function L() { } function Nb() { } function Ob() { } function Pb() { } function Qb() { } function Rb() { }
    function Sb() { } function Tb() { } function Ub() { } function Vb() { } function Wb() { } function Xb() { } function Yb() { } function Zb() { } function $b() { } function ac() { } function $a() { } function bc() { } function cc() { } function dc() { } function ec() { } function fc() { } function gc() { } function hc() { } function ea() { } function ab() { } function va() { } function bb() { } function ic() { } function jc() { } function kc() { } function lc() { } function mc() { } function nc() { } function oc() { } function pc() { } function qc() { } function rc() { } function sc() { } function tc() { }
    function uc() { } function vc() { } function wc() { } function xc() { } function yc() { } function cb() { ma.Mc.MI() } function zc() { ma.Mc.SI() } function m(a, b, c, d) {
        this.HA = !0 === d; this.GA = !1; this.HA ? (this.canvas = a.canvas, this.Er = a.Er) : "string" === typeof a ? (this.canvas = document.getElementById(a), this.Er = this.canvas.parentElement) : a instanceof HTMLElement && (this.canvas = document.createElement("canvas"), this.Er = a); a = this.pu = a.pu || document.createElement("div"); a.appendChild(this.canvas); this.Er.appendChild(a); a.style.overflow =
            "hidden"; a.style.position = "relative"; a.style.transform = "translateZ(0)"; a.style.margin = "0"; a.style.padding = "0"; a.style.display = "block"; a.style.boxSizing = "content-box"; a.className = "MMFDiv"; this.aA = this.bA = this.Ju = null; this.Ll = 0; this.appName = this.Ku = null; this.bm = 0; this.Uu = this.wA = null; this.fo = 0; this.To = this.Bc = this.gf = this.Nb = this.ea = this.Lc = this.Tu = null; this.Za = this.jD = 0; this.Dn = this.En = this.eC = this.Po = this.Un = null; this.xe = this.Bb = this.gx = 0; this.Aa = this.file = this.frame = null; this.nw = this.ow = this.Ck =
                0; this.Qh = this.G = null; this.uv = !1; this.eA = this.xf = this.dA = this.fA = this.gA = this.xa = this.na = this.Gn = this.Fn = this.Uf = this.Tf = 0; this.Bn = this.pw = this.dC = null; this.Hf = this.Gf = this.eH = this.dH = this.Cn = 0; this.Nc = null; this.vz = 0; this.cursor = "auto"; this.Pr = !1; this.dk = this.Bq = null; this.fd = !1; this.xj = this.vj = 0; this.Hv = this.pB = null; this.Ca = this.alpha = this.Sd = this.Rd = this.Az = 0; this.file = b; this.gj = ""; this.path = c; b = c.lastIndexOf("/"); 0 <= b && (this.gj = c.substring(0, b + 1)); this.fg = 0; this.G = null; this.th = this.uh = this.td = 0;
        this.pk = !1; this.ib = []; this.vo = -1; this.Kr = this.Fk = this.jC = this.lC = this.kC = this.iC = this.hC = 0; this.Sf = this.ad = this.kx = this.transition = null; this.cu = !1; this.iq = new Ea; this.Og = this.Ng = this.jf = null; this.$n = m.Qj; this.la = null; this.gn = this.xh = 0; this.Pt = null; this.kh = this.jh = this.Sj = this.Rj = 0; this.hc = this.ic = 1; this.hasFocus = !0; this.Ln = this.du = !1; this.Vu = this.Lr = null; this.Wq = -1; this.Nn = null; this.Mn = 1E9; this.Vq = null; 0 <= window.location.href.indexOf("192.") && (b = window.location.href.indexOf("21700/"), 0 <= b && (this.Vq =
            window.location.href.substring(0, b + 6), this.Wq = -1, this.Mn = 25)); this.bg = !1; this.gH = 3; this.sn = new N; this.wq = new N; this.ec = []; this.ke = 0; this.Ke = null; this.zv = "Please touch the screen to start"; this.fullScreen = !1; this.zD = "***version***"; this.px = this.Zo = 0; this.Ff = null
    } function Oa(a, b, c) { this.changedTouches = Array(1); this.changedTouches[0] = { pageX: a, pageY: b, target: c, identifier: m.Px } } function E(a) {
        this.app = a; this.l = null; this.NA = this.Xc = this.ge = 0; this.$q = !1; this.Pb = 0; this.ar = null; this.Sn = this.Tn = 0; this.cA = null;
        this.nc = 0; this.yn = this.ud = this.Ua = null; this.TA = this.or = this.mv = this.lv = this.Li = this.Ki = this.sg = 0; this.me = this.le = this.Yn = this.Eu = this.zn = null; this.Hi = this.la = this.ke = 0
    } function Z(a) {
        this.app = a; this.qb = null; this.Zt = !1; this.Ly = !0; this.kn = this.$o = null; this.WA = 0; this.ak = null; this.uu = !1; this.qb = Array(Z.dd); this.$o = Array(Z.dd); this.kn = Array(Z.dd); this.Zt = this.Ly = !0; var b; for (b = 0; b < Z.dd; b++)this.qb[b] = null, this.$o[b] = 100, this.kn[b] = !1; this.WA = 100; b = new Audio; var c = Array(4); c[0] = b.canPlayType("audio/ogg");
        c[1] = b.canPlayType("audio/x-m4a"); c[2] = b.canPlayType("audio/mpeg"); c[3] = b.canPlayType("audio/wav"); for (b = this.Av = this.vw = 0; 4 > b; b++)"probably" == c[b] && (this.vw |= 1 << b), "maybe" == c[b] && (this.Av |= 1 << b); for (; null != a.Aa;)a = a.Aa; this.context = a.To; this.Bl = a.jD; null == this.context && ("undefined" !== typeof AudioContext ? (this.context = new AudioContext, this.Bl = 1) : "undefined" !== typeof webkitAudioContext && (this.context = new webkitAudioContext, this.Bl = 0), a.To = this.context, a.jD = this.Bl)
    } function Ac(a) { this.app = a } function Bc(a) {
        this.app =
        a; this.hv = !1; this.B = null; this.context = this.app.context; this.$e = this.app.kC; this.color = this.app.jC; this.bi = this.app.hC; 0 > this.bi && (this.bi = this.app.na / 2); this.ci = this.app.iC; 0 > this.ci && (this.ci = this.app.xa / 2); this.size = this.app.lC; this.gw = 0; this.qq = 25; this.He = 0; this.mg = new Image; var b = this; this.mg.onload = function () { b.hv = !0 }; this.mg.src = this.app.gj + "Preloader.png"
    } function Cc(a) {
        this.app = a; this.context = this.app.context; this.width = 100; this.height = 12; this.position = 0; this.EG = 10526880; this.borderColor =
            8421504; this.FG = 0; this.rect = new aa; this.rect.left = this.app.na / 2 - this.width / 2; this.rect.top = this.app.xa / 2 - this.height / 2; this.rect.right = this.rect.left + this.width; this.rect.bottom = this.rect.top + this.height; this.reset()
    } function Dc(a) {
        this.app = a; this.hv = !1; this.Ec = new Aa; this.B = new m(this.app, this.app.file, this.app.path, !0); this.B.GA = !0; this.B.SC(this.app, this.app.Kr, 0, this.Ec, this.app.na, this.app.xa); this.B.digest(); this.B.uv = !1; this.B.$h = !1; this.B.Ca &= ~m.ei; this.B.fx(); this.B.vs(0, 0); this.B.Uo(); this.Ec.x =
            this.app.na / 2 - this.B.frame.ge / 2; this.Ec.y = this.app.xa / 2 - this.B.frame.Xc / 2; this.AK = 0 != (this.app.Ca & m.HD); this.app.ib.push(this.B); this.El = 0
    } function p(a) { this.app = a; this.Yz = this.Xz = this.Ud = this.kd = this.KA = this.iv = this.JA = this.nk = this.IA = this.Pn = this.LA = this.Tl = this.Zq = this.zb = null; this.bb = Array(3); this.cb = Array(3); this.ma = this.la = this.Cf = this.Bf = 0; this.touches = Array(3); this.au = !1; this.Qn = this.ng = this.MA = 0 } function h(a) {
        this.h = a; this.w = null; this.Eg = this.tb = this.Hm = this.Xw = this.ub = this.Sc = this.Gc = this.Ww =
            this.re = 0; this.i = this.S = null; this.Uk = this.Go = this.Io = this.Vk = this.Fg = this.Ib = this.Vw = this.Zh = this.Ho = this.Wk = this.da = this.ca = this.Kd = this.Jd = 0; this.as = this.Nw = this.bs = null; this.hs = this.Ow = this.Bm = this.xm = this.Dm = this.zm = this.Am = this.wm = this.Cm = this.ym = this.Qk = this.qe = this.vm = this.um = this.Pk = this.Ok = this.EC = this.Pf = this.jj = this.ij = this.Do = this.Mk = 0; this.Rk = null; this.ga = this.Gm = this.ls = this.ks = this.Pw = this.Qw = this.IC = 0; this.gs = this.Fm = this.Fa = null; this.Id = 0; this.fs = this.Sk = null; this.Em = 0; this.Tk = null;
        this.xc = 0; this.Or = null; this.ln = !1; this.H = null; this.ev = Array(2); this.sh = !1; this.Tz = 0; this.Uw = 255; this.Qr = this.fJ = !1
    } function Ec() { this.MG = null; this.ez = this.dz = this.cz = this.OG = this.NG = this.on = 0 } function I() { this.fw = this.ew = this.nb = this.Gd = this.mb = this.Qc = 0; this.Lf = !1; this.ro = this.WB = this.XB = this.YB = this.hm = this.Fd = this.Dr = this.Xd = this.qd = this.$i = this.xg = this.Xi = this.cw = this.bw = this.Yi = 0; this.Zi = this.im = null; this.dw = 0; this.Wi = null } function ge() { this.Kf = this.name = null } function he() {
        this.value = null; this.ps =
            this.qs = this.Hc = this.ob = 0
    } function ie() { this.text = null; this.ob = 0 } function je() { this.Xa = this.values = null; this.ma = 0 } function ba() { this.$I = 0; this.YI = null; this.ZI = 0; this.oa = this.U = null } function A() { this.si = this.lh = this.Od = null } function Ka() { this.rf = 0; this.ri = this.sf = null } function Fc() { this.ul = this.Fy = this.Ey = this.Qt = this.Rt = 0; this.Tj = null } function Fa() {
        this.a = null; this.Ik = this.Sr = this.Bg = 0; this.Ew = !1; this.Rh = 0; this.oe = null; this.Tr = this.Rr = 0; this.Bo = null; this.pm = this.nm = this.ne = this.Of = this.sC = this.Hk =
            this.mm = this.Ao = this.rC = this.om = this.cj = this.Dw = 0; this.tC = -1
    } function Gc(a, b) { this.ea = a; this.app = a.app; this.handle = b } function Hc(a) { this.app = a; this.images = this.file = null; this.Xe = this.Bh = this.Ab = 0; this.Nh = this.ec = this.Oh = this.Uj = this.mk = this.Sh = this.Ra = this.ya = this.zk = null } function W() { this.app = null; this.Ra = this.Sg = this.Rg = this.Ia = this.Ka = this.height = this.width = this.handle = 0; this.zh = this.Wl = this.qg = this.rc = null; this.me = this.le = this.Wb = 0 } function Ic(a) {
        this.app = a; this.Br = this.fonts = this.file = null; this.Ah =
            0; this.ya = null; this.rg = this.Wd = 0; this.Ra = null; this.ko = new xa; this.ko.sq()
    } function xa() { this.De = this.Ee = this.bc = this.handle = this.Ra = 0; this.font = this.Ce = null; this.Ji = !1 } function Jc(a) { this.app = a; this.qj = null; this.io = this.Bh = this.Ab = 0; this.file = this.Ra = this.ya = this.Cr = null } function Pa(a) {
        this.Mc = a; this.context = a.Bc.context; this.Bl = a.Bc.Bl; this.JH = a.Bc.JH; this.type = 0; this.file = a.file; this.handle = -1; this.pb = this.source = null; this.Ra = 0; this.nn = !1; this.Ch = 0; this.name = null; this.wi = this.hq = this.vi = !1; this.frequency =
            0; this.gain = this.response = null
    } function Kc(a) { this.name = a; this.zJ = []; this.position = 0; this.SA = !1 } function db(a) { this.fC = a; this.Qo = [] } function O(a) {
        this.Mc = a; this.l = null; this.LB = this.sg = 0; this.Pv = Array(r.be + r.ky); this.eo = this.Dh = 0; this.qk = this.Oe = this.Zb = this.cc = this.gc = this.Td = this.Ag = null; this.Je = Array(r.be + 1); this.KC = !1; this.Me = null; this.xo = this.zo = this.wo = this.yo = 0; this.Fo = !1; this.Ie = null; this.ms = 0; this.js = Array(4); this.tm = this.Kk = this.hj = !1; this.es = this.Vh = this.Jk = this.Xb = 0; this.FC = this.Yh = !1;
        this.Cg = null; this.Eo = this.cf = this.Dg = 0; this.Lk = this.Wh = null; this.ye = 0; this.wc = !1; this.$r = this.Tw = this.yc = this.JC = 0; this.Sw = null; this.mn = !1; this.kj = null; this.ZJ = 0; this.Nk = null; this.hu = !1; this.$A = 0; this.nu = null; this.mq = []; this.Dl = B.AE
    } function B() { this.Il = this.Ei = this.fa = this.fe = this.Mb = 0; this.ab = null } function Q() { } function ke() { this.Oz = this.id = 0 } function le() { this.Nr = this.Mr = 0 } function me(a, b, c, d, e) { this.aK = a; this.code = b; this.qJ = c; this.pJ = d; this.Kh = e } function ne() {
        this.xw = this.ww = this.aj = this.lm = this.bj =
            this.yg = 0; this.yw = this.Mf = !1; this.Na = null
    } function eb() { this.next = null; this.type = 0; this.name = null; this.index = this.gr = this.Vo = this.DK = this.td = 0; this.Yt = !1 } function ya() { this.cr = this.OA = this.ov = this.qv = this.pv = this.Df = this.Mi = 0; this.nv = null; this.nv = Array(4); var a; for (a = 0; 4 > a; a++)this.nv[a] = null } function Lc() { this.ya = this.list = null; this.br = this.If = 0 } function T(a) {
        this.app = a; this.ck = this.bk = this.Xr = this.Wr = this.y = this.x = 0; this.eq = this.km = this.jm = null; this.de = !1; this.Bk = null; this.Py = this.Oy = this.Ry = this.Qy =
            this.Ny = this.Sd = this.Rd = this.wr = this.ur = this.wj = this.uj = this.Ca = this.Qv = 0; this.Ma = this.Gb = this.fc = null; this.angle = 0; this.scale = this.hc = this.ic = 1; this.Ka = this.ap = 320; this.Ia = this.cp = 240
    } function ga(a, b, c, d, e, f) {
        this.app = a; this.JI = d; this.Ye = this.type = 0; this.x = b; this.y = c; this.height = this.width = 0; this.Yd = null; this.yl = !1; this.Wc = null; this.borderWidth = 0; this.borderColor = this.ou = this.Wj = null; this.Sd = this.Rd = 0; this.U = this.body = null; if (d) if (this.Yd = this.app.Lc.ik(d.Df), this.type = this.Yd.Ge, this.Ye = this.Yd.oc.QB,
            this.borderWidth = this.Yd.oc.Ar, this.xA = this.Yd.oc.no, this.Rd = this.Yd.Zv, this.Sd = this.Yd.$v, this.width = this.Yd.oc.NB, this.height = this.Yd.oc.OB, this.yl = 0 != this.Yd.oc.MB, this.Wj = this.Yd.oc.tg, this.ou = this.Yd.oc.fm, this.borderColor = this.Yd.oc.zr, 1 == this.type) this.Wc = this.app.ea.Ob(this.Yd.oc.Fh), this.width = this.Wc.width, this.height = this.Wc.height; else { if (32 <= this.type) { a = this.app.G; b = null; for (e = c = 0; e < a.tb; e++) { for (; null == a.H[c];)c++; b = a.H[c]; c++; if (b.KI == d) break } this.U = b } } else {
                this.type = r.my; this.Wc =
                    e; this.width = this.Wc.width; this.height = this.Wc.height; this.x -= this.Wc.Ka; this.y -= this.Wc.Ia; switch (f) { case 0: this.Ye = Y.qy; break; case 1: this.Ye = Y.Mp; break; case 2: this.Ye = Y.ag; break; case 3: this.Ye = Y.Gt }this.yl = !1
        }
    } function r() { this.$v = this.Zv = this.Lh = this.Ge = this.po = 0; this.oc = this.aw = null; this.VB = this.UB = 0 } function Mc() { this.wg = this.xb = this.Vi = 0; this.Ui = this.qo = this.Mh = null; this.vq = 0 } function Y() { } function Nc() { this.Fh = 0 } function Ga() {
        this.Fh = this.no = this.fm = this.tg = this.oo = this.Qi = this.Gh = this.zr =
            this.Ar = 0
    } function w() { this.vg = 0; this.Wv = null; this.uc = this.Ri = 0; this.Pc = this.gb = this.Pi = this.Si = this.Hh = this.ug = null; this.RB = this.SB = this.PB = 0; this.mo = this.gm = null } function Oc() { this.Ed = this.TB = this.Jh = this.Ih = 0; this.Xv = null } function Pc() { this.pz = this.qz = this.oz = 0 } function ha() { this.am = this.no = this.fm = this.tg = this.oo = this.Qi = this.Gh = this.zr = this.Ar = this.Ti = this.yk = this.Ze = this.Yv = this.Jh = this.Ih = 0; this.frames = null } function Qc() { this.Jh = this.Ih = this.Ed = 0; this.text = null } function na() {
        this.lx = this.Yo =
            this.Om = 0; this.ai = null
    } function Rc() { this.Ak = this.mw = this.lw = 0; this.Rb = null } function G() { this.qc = this.Vb = 0; this.c = null; this.Xu = this.Ea = this.$b = this.lg = this.Ue = this.Sq = 0; this.ac = null; this.Yu = 0; this.Rq = this.yA = null; this.Tq = this.Rl = 0; this.N = this.Ql = null; this.hI = this.Te = this.Vd = this.av = this.X = this.ua = this.J = this.K = this.ia = this.ha = this.v = this.kg = this.u = this.jg = 0; this.Jn = !1; this.F = this.M = this.$ = this.A = this.b = null } function Sc() {
        this.dx = !1; this.mg = null; this.wa = !1; this.za = null; this.de = !0; this.ic = this.hc = 1;
        this.y = this.x = this.angle = 0; this.dl = null
    } function J() { this.Ed = this.ma = 0; this.B = null; this.kw = this.jw = 0; this.ZB = this.level = -1; this.Rn = null; this.de = !0 } function Tc() { this.pe = this.Rc = this.Uh = 0; this.Pa = -1; this.Db = this.Cb = 1; this.eb = this.Th = this.Z = this.Va = this.hb = 0; this.Oa = this.L = !1; this.ej = this.dj = 0; this.Vr = -1; this.Jw = this.Hw = this.Iw = this.Gw = this.Fw = this.Ur = 0 } function ca() {
        this.$c = this.Zc = this.Hc = this.ob = this.sa = this.type = 0; this.My = this.wa = !1; this.yd = this.If = this.Hg = this.Mo = this.zc = 0; this.ui = !1; this.za = this.ja =
            null; this.Ad = 0; this.font = null; this.Qd = this.La = !1
    } function Uc() { this.type = this.zc = this.Ac = this.$c = this.Zc = this.sa = this.Xk = 0; this.wa = !0; this.If = 0; this.ja = null; this.yd = 0; this.za = null; this.Ad = 0; this.alpha = 1; this.Yj = "source-over"; this.Qd = !1 } function Vc() { this.type = this.zc = this.Ac = this.$c = this.Zc = this.sa = this.Xk = 0; this.wa = !0; this.If = 0; this.ja = null; this.yd = 0; this.za = null; this.Ad = 0; this.alpha = 1; this.Yj = "source-over"; this.Qd = !1 } function Wc() {
        this.Jm = null; this.No = this.Ac = this.ob = this.Hc = 0; this.font = null; this.wa =
            !0; this.MC = this.ma = 0; this.ja = this.za = null; this.La = !1; this.rect = new aa; this.$c = this.Zc = this.deltaY = 0; this.jb = null; this.Qd = !1
    } function Xc() { this.$c = this.Zc = 0; this.Hd = null; this.Zj = 0; this.Lg = [] } function Yc(a, b) { this.ext = b.h.Bq.er(a); this.Tv = !1; this.Vv = this.lo = this.uw = 0; this.La = !1; this.wa = !0; this.ja = this.za = null } function Qa() { } function Zc() { this.Rn = this.dir = this.y = this.x = 0; this.$t = !1 } function $c(a) { a.file.o(); this.Is = a.file.o() } function oe(a) { this.td = a.file.s(); this.gr = a.file.s(); this.Xj = a.file.o() } function pe(a) {
        this.color =
        a.file.Yc()
    } function qe(a) { this.El = a.file.s(); this.SG = a.file.s() } function oa(a) { this.Xj = a.file.o(); for (var b = a.file.O, c = 0, d; ;) { c++; d = a.file.s(); if (0 == d) break; d = a.file.o(); 6 < d && a.file.pa(d - 6) } a.file.seek(b); this.Ga = Array(c); for (b = 0; b < c; b++)this.Ga[b] = ea.create(a.file) } function re(a) { var b = a.file.o(); a.file.pa(4); this.data = 0; 6 < b && (this.data = a.file.O, a.file.pa(b - 6)) } function ja(a) { this.ig = a.file.o(); this.bI = a.file.o() } function se(a) { a.file.pa(4); this.O = 0; this.id = a.file.o() } function Ha(a) {
        this.value =
        a.file.s(); this.Is = 0
    } function ad(a) { this.key = a.file.o() } function te(a) { this.Qb = a.file.T(); this.Kh = a.file.T(); this.type = a.file.T() } function ue(a) { a.file.pa(4); this.Pz = 0; for (this.xb = []; ;) { var b = a.file.T(), c = a.file.T(); if (-1 == b) break; this.xb.push(b); this.xb.push(c) } } function ka() { } function bd(a) { this.to = a.file.T(); this.Ek = a.file.T(); this.Ir = a.file.T(); this.Jr = a.file.T(); this.Gr = a.file.T(); this.qw = a.file.T(); this.Fr = a.file.s(); this.Hr = a.file.T(); this.uo = a.file.T(); this.rw = a.file.T() } function fb(a) {
        this.to =
        a.file.T(); this.Ek = a.file.T(); this.Ir = a.file.T(); this.Jr = a.file.T(); this.Gr = a.file.T(); this.qw = a.file.T(); this.Fr = a.file.s(); this.Hr = a.file.T(); this.uo = a.file.T(); this.rw = a.file.T(); this.kq = a.file.o(); this.Vy = a.file.o()
    } function cd(a) { this.to = a.file.T(); this.Ek = a.file.T(); this.Ir = a.file.T(); this.Jr = a.file.T(); this.Gr = a.file.T(); this.qw = a.file.T(); this.Fr = a.file.s(); this.Hr = a.file.T(); this.uo = a.file.T(); this.rw = a.file.T(); this.kq = a.file.T(); this.Vy = a.file.T(); a.file.pa(4); a.file.o() } function La(a) {
        this.ex =
        a.file.o(); this.iD = a.file.o()
    } function fa(a) { this.value = a.file.o() } function Ra(a) { this.Lb = a.file.Hb() } function ve(a) { this.td = a.file.s(); this.gr = a.file.s() } function we(a) { a.file.T(); a.file.T(); a.file.T(); a.file.T() } function ze(a, b, c) { this.index = a.file.s(); this.aC = a.file.s(); this.global = b; c ? this.ox = a.file.uC() : (this.ox = a.file.s(), a.file.pa(4)) } function dd(a) {
        this.ma = a.file.s(); this.Gq = a.file.s(); this.Zz = a.file.s(); this.values = []; for (var b = 1, c = 2, d = 4, e = 0; 4 > e && 0 != (this.ma & b); e++) {
            var f = new ze(a, 0 != (this.ma &
                c), 0 != (this.ma & d)), b = b << 4, c = c << 4, d = d << 4; this.values.push(f)
        }
    } function Sa() { this.Vj = [] } function Ba(a) { this.ep = this.bp = 1; this.hw = -1; this.iw = this.dx = !1; this.Di = this.Ci = 0; if (!(this.Sa = a.getContext("2d"))) throw Error("Failed to init standard renderer"); } function sa() { this.tn = ""; this.wz = this.Wo = this.Xo = this.uD = this.vD = 0 } function ed() { } function u() { this.j = this.Wn = this.Vn = this.jr = 0; this.va = this.UA = !1; this.ph = this.Bz = this.m = this.V = null } function fd(a) { this.app = a } function Ma() { } function gd() {
        this.VA = this.f =
            this.g = this.$a = 0
    } function hd() { this.f = this.g = this.$a = 0 } function id() { this.wb = this.tc = this.fu = this.uf = 0; this.aJ = null } function jd() { this.f = this.g = this.yq = this.Ta = 0 } function kd() { this.wb = this.tc = this.Ni = 0 } function ld() { } function md() { this.f = this.g = this.vn = this.$a = this.Ta = 0 } function nd() { this.yv; this.tk = this.vk = this.pg = this.Fe = this.I = 0; this.he = null } function od() { this.f = this.g = this.$a = 0 } function pd() { this.xv = this.f = this.g = this.$a = 0 } function qd() { this.Ni; this.tc; this.wb } function rd() {
        this.f = this.g = this.Kz =
            this.Ta = this.$a = 0
    } function sd() { this.f = this.g = this.$a = 0 } function td() { this.dc = this.f = this.g = this.$a = 0 } function ud() { this.sk = this.rk = this.f = this.g = this.$a = 0 } function vd() { this.Vl = this.f = this.g = this.Jz = this.un = this.Ta = 0 } function wd() { this.ir = this.f = this.g = this.un = this.Ta = 0 } function xd() { this.hr = this.mr = this.nr = this.kr = this.od = this.wv = this.ba = this.aa = this.tk = this.vk = this.pg = this.Fe = this.I = this.CD = this.Os = this.qx = 0 } function yd() { this.Ef = this.uk = this.f = this.g = this.Ta = this.$a = 0 } function zd() { } function Ad() {
        this.f =
        this.g = this.Ta = 0
    } function Bd(a, b) { var c = new X; ma.Mc = new m(a, c, b); c.getFile(b, Cd) } function Cd() { ma.Mc.load() } function Ta() { ma.Mc.Uo() } function Aa() { this.y = this.x = 0; this.visible = !0; this.children = []; this.bg = !1 } function ta() { } function F() { this.R = null; this.lineWidth = this.Ia = this.Ka = this.width = this.height = this.lineWidth = 0 } function Ae() { this.R = null; this.angle = 0; this.ic = this.hc = 1; this.jx = 0 } function v() { this.a = null; this.W = this.Tb = this.Sb = this.rs = this.Im = this.os = this.ns = 0; this.Ig = null } function Dd() {
        this.cm =
        0; this.Xa = null
    } function Ed() { this.dm = 0; this.values = null; this.ma = 0 } function Ia() { this.Yk = 0; this.Ld = this.Qa = null } function Na(a) { this.app = a; this.fk = null; this.xr = 0 } function Fd() { this.handle = 0 } function Ca() { this.oa = this.U = null } function Gd() { } function Hd() { } function Id() { } function S() { this.Ov = 100; this.tr = this.JB = this.KB = this.$l = 0 } function Jd() { this.ho = 0; this.Cd = null } function Kd() { this.cB = this.dB = this.aB = this.bB = this.Xn = 0 } function Ld() { this.jB = this.iB = this.hB = this.kB = 0 } function Md() {
        this.oB = this.mB = this.nB =
            this.lB = 0
    } function Nd() { this.IB = this.GB = this.Nv = this.DB = this.EB = this.Zl = 0; this.Ya = null } function Od() { this.Fv = this.fB = this.Gv = this.Bv = this.Ev = this.Dv = this.Cv = this.gB = 0; this.je = null } function Pd() { this.vB = this.uB = this.wB = this.tB = this.sB = this.xB = 0 } function Qd() { this.zB = this.yB = this.AB = this.Mv = this.Lv = this.BB = 0 } function Rd() { } function Sd() { this.Oc = null; this.data = 0 } function D() { this.a = null; this.nj = this.se = this.Gg = this.Jb = this.Qf = this.Ko = this.Jo = 0 } function ua() {
        this.rt = this.Ap = this.kl = this.by = this.jl = this.Bp =
            this.zp = 0; this.li = !1
    } function Td() { this.Cp = !1; this.ll = null } function Ud() { } function Vd() { this.tt = this.$f = this.ut = this.Yg = 0 } function Wd() { this.Dp = this.Ep = this.yt = this.xt = this.wt = this.vt = 0 } function Xd() { this.ae = this.Ij = this.Hj = this.eh = this.dh = this.Ip = this.an = this.bn = this.Dc = 0; this.cd = !1; this.Ha = null; this.bh = this.Kp = this.Jp = this.ah = 0; this.ql = null; this.Hp = !1 } function M() { this.nl = this.fy = this.mi = this.pf = this.nf = this.vd = this.ey = this.zt = this.Md = this.kb = 0; this.ol = null; this.Bt = this.At = 0; this.Fj = !1 } function Ua() {
        this.gy =
        this.Ct = this.hy = this.Dt = this.Gj = this.pl = this.Et = this.wd = this.$g = 0
    } function Va() { } function Da() { this.Yw = 0; this.ra = null; this.Zw = 0; this.P = !1; this.oj = 0; this.mj = !1; this.Lo = 0 } function Ja() { this.Fc = null; this.BA = 0; this.Sl = this.Be = this.sc = null; this.ee = 0 } var ma = this, n = {
        extend: function (a, b) { var c = Object.create(a.prototype || a); if (void 0 !== b && (b = b.prototype || b)) for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]); return c }, tp: function (a) { return a >> 16 }, sF: function (a) { return a & 65535 }, uF: function (a, b) {
            return b << 16 | a &
                65535
        }, XP: function (a) { return a >>> 16 & 255 }, QP: function (a) { return a >>> 8 & 255 }, KP: function (a) { return a & 255 }, lO: function (a, b, c) { return (a & 255) << 16 | (b & 255) << 8 | c & 255 }, HQ: function (a) { return (a & 255) << 16 | (a >>> 8 & 255) << 8 | a >>> 16 & 255 }, LG: function (a, b, c) { return Math.min(Math.max(a, b), c) }, yf: function (a) { var b = (a >>> 16 & 255).toString(16), c = (a >>> 8 & 255).toString(16); for (a = (a & 255).toString(16); 2 > b.length;)b = "0" + b; for (; 2 > c.length;)c = "0" + c; for (; 2 > a.length;)a = "0" + a; return "#" + b + c + a }, zd: function (a) { return 0 > a ? Math.ceil(a) : Math.floor(a) },
        cP: function (a) { return Math.round(a) }, gv: function (a) { return Math.ceil(a) == a }, tq: function (a, b, c, d, e) { ox = d / 2 * .5522848; oy = e / 2 * .5522848; xe = b + d; ye = c + e; xm = b + d / 2; ym = c + e / 2; a.beginPath(); a.moveTo(b, ym); a.bezierCurveTo(b, ym - oy, xm - ox, c, xm, c); a.bezierCurveTo(xm + ox, c, xe, ym - oy, xe, ym); a.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye); a.bezierCurveTo(xm - ox, ye, b, ym + oy, b, ym); a.closePath() }, xP: function (a, b) {
            a.beginPath(); a.moveTo(b.left, b.top); a.lineTo(b.right, b.top); a.lineTo(b.right, b.bottom); a.lineTo(b.left, b.bottom); a.lineTo(b.left,
                b.top); a.closePath(); a.stroke()
        }, wP: function (a, b, c, d, e) { a.beginPath(); a.moveTo(b, c); a.lineTo(d, e); a.closePath(); a.stroke() }, An: function (a, b) { for (var c = a.toString(); 4 > c.length;)c = "0" + c; return c + ("." + b) }, rb: function (a, b) { if (a == b) return !0; a = a.toLowerCase(); b = b.toLowerCase(); return a == b }, cC: function (a) { var b = a.lastIndexOf("\\"); 0 < b && (a = a.substring(b + 1)); return a }, vF: 40, sG: [0, 1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48, 49, 51, 52], bQ: function (a) {
            return a <
                n.vF ? n.sG[a] : Math.round(96 * a / 72)
        }, kp: 0, lp: 0, Cj: 1, Xs: 2, jp: 8, fi: 4, oE: 32, Ws: 1024, pE: 2048, Iz: function (a, b, c, d, e, f) {
            if (0 == b.length) return 0 != (c & 1024) && (d.right = d.left, d.bottom = d.top), 0; e.Ji || (a.font = e.gg()); var g = 0, k = String.fromCharCode(10), q = String.fromCharCode(13), K = b.indexOf(k); if (0 <= K) {
                var h = new aa; h.kz(d); var m, l = 0, p = 0, r; do m = -1, l < b.length && (m = b.indexOf(q, l)), r = Math.max(K, m), m == K - 1 && K--, K = b.substring(l, K), m = n.Fl(a, K, c, h, f, e), p = Math.max(p, h.right - h.left), g += m, h.top += m, h.bottom = d.bottom, h.right = d.right,
                    l = r + 1, K = -1, l < b.length ? K = b.indexOf(k, l) : (m = n.Fl(a, "", c, h, f, e), p = Math.max(p, h.right - h.left), g += m, h.top += m, h.bottom = d.bottom, h.right = d.right); while (0 <= K); l < b.length && (K = b.substring(l), m = n.Fl(a, K, c, h, f, e), p = Math.max(p, h.right - h.left), g += m); 0 != (c & n.Ws) && (d.right = d.left + p, d.bottom = h.bottom); return g
            } return g = n.Fl(a, b, c | n.pE, d, f, e)
        }, Ls: null, Fl: function (a, b, c, d, e, f) {
            0 == b.length && (b = " "); var g, k; g = f.Se(); k = f.Ji ? f.measureText(" ") : a.measureText(" ").width; var q = d.right - d.left, K = 0, h = 0, m, l, p, r = 0, u = 0, w; null ==
                n.Ls && (n.Ls = Array(100)); var H, z, R = !1, C = !1, A = d.top; l = g; 0 != (l & 1) && l++; var v = A; do {
                    l = K; p = w = 0; u += g; do {
                        n.Ls[w] = p; w += 1; m = h; h = -1; l < b.length && (h = b.indexOf(" ", l)); -1 == h && (h = b.length); if (h < l) { p -= k; break } z = b.substring(l, h); H = f.Ji ? f.measureText(z) : a.measureText(z).width; if (p + H > q) {
                            w--; if (0 < w) { p -= k; h = m; break } for (m = l; m < h; m++) {
                                H = f.Ji ? f.measureText(b.substring(m, m + 1)) : a.measureText(b.substring(m, m + 1)).width; if (p + H >= q) {
                                    m--; if (0 < m) {
                                        r = Math.max(p, r); 0 == (c & n.Ws) && (p = 0 != (c & n.Cj) ? d.left + (d.right - d.left) / 2 - p / 2 : 0 != (c & n.Xs) ?
                                            d.right - p : d.left, z = b.substring(l, m), e.push(new V(p, A, z))); h = m - 1; C = R = !0; break
                                    } h = m < b.length ? b.indexOf(" ", m) : -1; R = !0; 0 <= h && (C = !0); break
                                } p += H
                            }
                        } if (R) break; p += H; if (p + k > q) break; p += k; l = h + 1
                    } while (1); if (0 == C) { if (R) break; r = Math.max(p, r); if (0 == (c & n.Ws)) for (p = 0 != (c & n.Cj) ? d.left + (d.right - d.left) / 2 - p / 2 : 0 != (c & n.Xs) ? d.right - p : d.left, l = K, K = 0; K < w; K++) { h = -1; l < b.length && (h = b.indexOf(" ", l)); -1 == h && (h = b.length); if (h < l) break; z = b.substring(l, h); e.push(new V(p + n.Ls[K], A, z)); l = h + 1 } } C = R = !1; A += g; K = h + 1
                } while (K < b.length); d.right =
                    d.left + r; d.bottom = v + u; return u
        }, qh: function (a, b, c, d, e, f) { var g; if (e.Ji) for (f = 0; f < d.length; f++)g = d[f], e.fillText(a, g.text, b + g.x, c + g.y); else for (a.font = e.gg(), a.fillStyle = n.yf(f), a.textAlign = "left", a.textBaseline = "top", f = 0; f < d.length; f++)g = d[f], a.fillText(g.text, b + g.x, c + g.y) }, Ii: function (a, b) { var c = a.toString(); if (0 != (b & ca.Hx)) { var d = b & ca.Hx; if (c.length > d) c = c.substring(c.length - d); else for (; c.length < d;)c = "0" + c } return c }, zu: function (a, b) {
            var c; if (0 == (b & ca.gE)) c = a.toString(); else {
                var d = Math.floor(((b &
                    ca.eE) >> ca.fE) + 1); c = -1; 0 != (b & ca.iE) ? c = (b & ca.cE) >> ca.dE : 0 != a && -1 < a && 1 > a && (c = d); c = 0 > c ? a.toPrecision(d) : a.toFixed(c); var e, f, g; if (0 != (b & ca.hE)) for (f = e = 0; f < c.length; f++)g = c.charAt(f), "." != g && "+" != g && "-" != g && "e" != g && "E" != g && e++; f = !1; "-" == c.charAt(0) && (f = !0, c = c.substr(1)); for (; e < d;)c = "0" + c, e++; f && (c = "-" + c)
            } return c
        }, GQ: function (a, b) { for (var c = a, d = b, e = d.indexOf("\\"); 0 <= e;)c.substring(0, e) == d.substring(0, e) && (d = d.substring(e + 1), c = c.substring(e + 1)), e = d.indexOf("\\", e + 1); return c }
    }, Yd = !1, Wa = !1, gb = !1, hb = window.XMLHttpRequest ?
        new XMLHttpRequest : null; if (hb && hb.overrideMimeType) try { Wa = "string" === typeof (new XMLHttpRequest).responseType, 0 <= navigator.userAgent.toLowerCase().indexOf("safari") && (Wa = !1) } catch (a) { } else {
            var Yd = !0, ib = document.createElement("script"); ib.type = "text/vbscript"; ib.innerHTML = 'Function BinFileReaderImpl_IE_VBAjaxLoader(fileName)\n\r\n\t                Dim xhr\n\r\n\t                Set xhr = CreateObject("Microsoft.XMLHTTP")\n\r\n\t                xhr.Open "GET", fileName, False\n\r\n\t                xhr.setRequestHeader "Accept-Charset", "x-user-defined"\n\r\n\t                xhr.send\n\r\n\t                Dim byteArray()\n\r\n\t                if xhr.Status = 200 Then\n\r\n\t                    Dim byteString\n\r\n\t                    Dim i\n\r\n\t                    byteString=xhr.responseBody\n\r\n\t                    ReDim byteArray(LenB(byteString))\n\r\n\t                    For i = 1 To LenB(byteString)\n\r\n\t                        byteArray(i-1) = AscB(MidB(byteString, i, 1))\n\r\n\t                    Next\n\r\n\t                End If\n\r\n\t                BinFileReaderImpl_IE_VBAjaxLoader=byteArray\n\r\n\t            End Function';
            document.head.appendChild(ib)
        } if (Wa) { var Zd = new FileReader; try { Zd.readAsBinaryString && (gb = !0) } catch (a) { } Zd = null } hb = null; X.prototype = {
            qa: function () { return this.gd.charCodeAt(this.O++) & 255 }, getFile: function (a, b, c) {
                this.ju = b; if (Yd) try { var d = BinFileReaderImpl_IE_VBAjaxLoader(a).toArray(), e, f = d.length; f > c && (f = c); for (e = 0; e < f; e++)this.gd += String.fromCharCode(d[e]); this.end = this.gd.length; this.ju() } catch (q) { } else {
                    var g = new XMLHttpRequest; g.open("GET", a, !0); var k = this; Wa ? (g.responseType = "blob", g.onload = function () {
                        if (4 ==
                            g.readyState && 200 == g.status) { var a = new FileReader; a.onloadend = function () { if (gb) k.gd += a.result; else { var b = new Uint8Array(a.result), c; for (c = 0; c < b.length; c++)k.gd += String.fromCharCode(b[c]) } k.end = k.gd.length; k.ju() }; gb ? a.readAsBinaryString(g.response) : a.readAsArrayBuffer(g.response) }
                    }) : (g.overrideMimeType("text/plain; charset=x-user-defined"), g.onload = function () { 4 == g.readyState && 200 == g.status && (k.gd += g.responseText, k.end = k.gd.length, k.ju()) }); g.send(null)
                }
            }, jK: function (a) {
                this.gd = a; this.end = a.length;
                var b = this; this.qa = function () { return b.gd.charCodeAt(b.O++) & 255 }
            }, Uc: function (a, b) { var c = new X; c.gd = this.gd; c.offset = a; c.O = a; c.end = a + b; c.fd = this.fd; return c }, YC: function (a) { this.fd = a }, oH: function () { var a = this.qa(), b = this.qa(), c = this.qa(); 255 == a && 254 == b ? (this.fd = !0, this.O--) : 239 == a && 187 == b && 191 == c ? this.fd = !1 : (this.fd = !1, this.O -= 3) }, pa: function (a) { this.O += a }, wh: function () { return this.O >= this.end }, sb: function () { return this.qa() }, o: function () { var a; a = this.qa(); return 256 * this.qa() + a }, T: function () {
                var a;
                a = this.qa(); a = 256 * this.qa() + a; return 32768 > a ? a : a - 65536
            }, qm: function () { var a; a = this.qa(); return 256 * this.qa() + a }, s: function () { var a, b, c; a = this.qa(); b = this.qa(); c = this.qa(); a = 16777216 * this.qa() + 65536 * c + 256 * b + a; return 2147483647 >= a ? a : a - 4294967296 }, Yc: function () { var a, b, c; a = this.qa(); b = this.qa(); c = this.qa(); this.qa(); return 65536 * a + 256 * b + c }, vC: function () { var a, b, c; a = this.qa(); b = this.qa(); c = this.qa(); a = 16777216 * this.qa() + 65536 * c + 256 * b + a; 2147483648 < a && (a -= 4294967295); return a / 65536 }, uC: function () {
                var a,
                b, c, d, e, f, g; a = this.qa(); b = this.qa(); c = this.qa(); d = this.qa(); e = this.qa(); f = this.qa(); g = this.qa(); a = 72057594037927936 * this.qa() + 281474976710656 * g + 1099511627776 * f + 4294967296 * e + 16777216 * d + 65536 * c + 256 * b + a; 0x7fffffffffffffff < a && (a -= 1.8446744073709552E19); return a / 4294967296
            }, Hb: function (a) {
                var b = ""; if (this.fd) if (1 > arguments.length) { if (this.wh()) return b; c = this.O; for (b = this.qm(); b && !this.wh();)b = this.qm(); b = (this.O - c - 2) / 2; this.O = c; b = this.Hb(b); this.qa(); this.qa() } else {
                    b = ""; c = this.O; for (e = 0; e < a; e++) {
                        d = this.qm();
                        if (0 == d) break; b += String.fromCharCode(d)
                    } this.O = c + 2 * a
                } else if (1 > arguments.length) { if (this.wh()) return b; for (var c = this.O, b = this.qa(); b && !this.wh();)b = this.qa(); b = this.O - c - 1; this.O = c; b = this.Hb(b); this.qa() } else { for (var d, c = this.O, e = 0; e < a; ++e) { d = this.qa(); if (0 == d) break; b += String.fromCharCode(d) } this.O = c + a } return b
            }, HJ: function () {
                var a = this.O, b, c = "", d, e; if (0 == this.fd) {
                    if (this.wh()) return; for (b = this.qa(); 10 != b && 13 != b && !this.wh();)b = this.qa(); d = this.O; this.O = a; e = 1; 10 != b && 13 != b && (e = 0); d > a + e && (c = this.Hb(d -
                        a - e)); if (10 == b || 13 == b) this.qa(), a = this.sb(), 10 == b && 13 != a && this.O--, 13 == b && 10 != a && this.O--
                } else { if (this.wh()) return; for (b = this.qm(); 10 != b && 13 != b && !this.wh();)b = this.qm(); d = this.O; this.O = a; e = 2; 10 != b && 13 != b && (e = 0); d > a + e && (c = this.Hb((d - a - e) / 2)); if (10 == b || 13 == b) this.O += 2, a = this.qm(), 10 == b && 13 != a && (this.O -= 2), 13 == b && 10 != a && (this.O -= 2) } return c
            }, seek: function (a) { a >= this.end && (a = this.end); this.O = a }, uK: function (a) { var b = this.O, b = b - a; 0 > b && (b = 0); this.O = b }, LJ: function (a) {
                var b, c = a.length; for (b = 0; b < c; b++)a[b] =
                    this.qa()
            }, wC: function (a) { var b = [], c; for (c = 0; c < a; c++)b[c] = this.qa(); return b }
        }; N.prototype = {
            add: function (a) { this.xd.push(a) }, oI: function (a, b) { this.xd.splice(a, 0, b) }, get: function (a) { return a < this.xd.length ? this.xd[a] : null }, put: function (a, b) { this.xd[a] = b }, set: function (a, b) { a < this.xd.length && (this.xd[a] = b) }, Co: function (a) { a < this.xd.length && this.xd.splice(a, 1) }, indexOf: function (a) { return this.xd.indexOf(a) }, contains: function (a) { return 0 <= this.xd.indexOf(a) }, yC: function (a) {
                a = this.xd.indexOf(a); 0 <= a && this.xd.splice(a,
                    1)
            }, size: function () { return this.xd.length }, clear: function () { this.xd.length = 0 }, sort: function (a) { Array.prototype.sort.call(this.xd, a) }
        }; aa.prototype = { load: function (a) { this.left = a.s(); this.top = a.s(); this.right = a.s(); this.bottom = a.s() }, kz: function (a) { this.left = a.left; this.right = a.right; this.top = a.top; this.bottom = a.bottom } }; Ya.prototype = {
            gg: function () { var a; a = this.De ? "italic " : "normal "; var b = 100 * Math.floor(this.Ee / 100), b = Math.max(b, 100), b = Math.min(b, 900); a = a + (b + " ") + (this.bc + "px "); return a += this.Ce },
            Se: function () { return this.bc + Math.ceil(this.bc / 8) }, Y: function () { this.Ce = "Arial"; this.bc = 13; this.Ee = 400; this.De = 0 }
        }; la.separator = "{@24}"; la.Vx = 1; la.$E = 2; la.prototype = {
            Oo: function () { if (null != this.Xa && null != this.$j) { var a = "", b; for (b = 0; b < this.Xa.size(); b++)a += this.Xa.get(b) + la.separator; localStorage.setItem(this.$j, a) } }, dr: function (a) {
                var b = !0; null != this.$j && n.rb(a, this.$j) && (b = !1); if (b) if (this.Oo(), this.$j = a, this.Xa = new N, a = localStorage.getItem(this.$j)) for (var b = 0, c = a.indexOf(la.separator, 0); 0 <= c;)this.Xa.add(a.substring(b,
                    c)), b = c + la.separator.length, c = a.indexOf(la.separator, b); else if (a = null, null == a && (b = this.app.OH(this.$j), null != b && (a = b.open())), a) for (b = !1, a.oH(), "undefined" != typeof this.ma && (this.ma & la.Vx && (this.fd = !1, b = !0), this.ma & la.$E && (this.fd = !0)); 0 == a.wh();) { c = a.HJ(); b && (c = this.jH(c)); if ("<" == c.substring(0, 1)) { this.Xa.clear(); break } if (null == c) break; this.Xa.add(c) }
            }, jH: function (a) {
                for (var b = "", c = 0, d, e, f; c < a.length;)d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b +=
                    String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3); return b
            }, Eq: function (a) { var b, c; for (b = 0; b < this.Xa.size(); b++)if (c = this.Xa.get(b), "[" == c.charAt(0)) { var d = c.lastIndexOf("]"); if (1 <= d && (c = c.substring(1, d), n.rb(a, c))) return b } return -1 }, Gu: function (a, b) {
                for (var c, d; a < this.Xa.size(); a++) {
                    c = this.Xa.get(a); if ("[" == c.charAt(0)) break; d = c.indexOf("="); if (0 <= d) {
                        for (var e = 0; e < d && 32 == c.charCodeAt(e);)e++; for (; d > e && 32 == c.charCodeAt(d -
                            1);)d--; if (d > e && (c = c.substring(0, d), n.rb(c, b))) return a
                    }
                } return -1
            }, jk: function (a, b, c, d) { this.dr(d); a = this.Eq(a); return 0 <= a && (a = this.Gu(a + 1, b), 0 <= a) ? (b = this.Xa.get(a), b.substring(b.indexOf("=") + 1)) : c }, el: function (a, b, c, d) { this.dr(d); d = this.Eq(a); if (0 > d) this.Xa.add("[" + a + "]"), this.Xa.add(b + "=" + c); else if (a = this.Gu(d + 1, b), 0 <= a) this.Xa.set(a, b + "=" + c); else { for (a = d + 1; a < this.Xa.size(); a++)if (d = this.Xa.get(a), "[" == d.charAt(0)) { d = b + "=" + c; this.Xa.oI(a, d); return } this.Xa.add(b + "=" + c) } }, yz: function (a, b, c) {
                this.dr(c);
                a = this.Eq(a); 0 <= a && (b = this.Gu(a + 1, b), 0 <= b && this.Xa.Co(b), this.Oo())
            }, mH: function (a, b) { this.dr(b); var c = this.Eq(a); if (0 <= c) { for (this.Xa.Co(c); ;) { c++; if (c >= this.Xa.size()) break; if ("[" == this.Xa.get(c).charAt(0)) break; this.Xa.Co(c) } this.Oo() } }
        }; ia.prototype = {
            measureText: function (a, b) { b = this.app.Ou(b); if (b.Ji) return b.measureText(a); this.Pd.font = b.gg(); return this.Pd.measureText(a).width }, xs: function (a, b, c, d, e) {
                if (a == this.II && b == this.EI && c == this.HI && d == this.FI && e == this.DI) return this.GI; var f = this.Pd;
                f.clearRect(0, 0, this.width, this.height); c || (c = new aa(0, 0, this.width, this.height)); var g = []; d = this.app.Ou(d); var k = n.Iz(f, a, b, c, d, g); if (0 != k) { var q = 0; 0 != (b & n.jp) ? q = this.height - k : 0 != (b & n.fi) && (q = this.height / 2 - k / 2); n.qh(f, 0, q, g, d, e, 0, 0) } this.II = a; this.EI = b; this.HI = c; this.FI = d; this.DI = e; return this.GI = k
            }, ZA: function (a) { a ? (this.Pd.fillStyle = n.yf(a), this.Pd.fillRect(0, 0, this.width, this.height)) : this.Pd.clearRect(0, 0, this.width, this.height) }, qr: function (a, b, c, d, e, f, g) {
                var k = []; c || (c = new aa(0, 0, this.width,
                    this.height)); e = this.app.Ou(e); a = n.Iz(this.Pd, a, b, c, e, k); if (0 != a) switch (c = 0, 0 != (b & n.jp) ? c = this.height - a : 0 != (b & n.fi) && (c = this.height / 2 - a / 2), f) { case 1: n.qh(this.Pd, 1, c + 1, k, e, g, 0, 0); n.qh(this.Pd, 0, c, k, e, d, 0, 0); break; case 2: n.qh(this.Pd, 1, c, k, e, g, 0, 0); n.qh(this.Pd, 1, c + 2, k, e, g, 0, 0); n.qh(this.Pd, 0, c + 1, k, e, g, 0, 0); n.qh(this.Pd, 2, c + 1, k, e, g, 0, 0); n.qh(this.Pd, 1, c + 1, k, e, d, 0, 0); break; case 0: n.qh(this.Pd, 0, c, k, e, d, 0, 0) }
            }, resize: function (a, b) {
                if (a != this.width || b != this.height) this.width = a, this.height = b, this.canvas.width =
                    a, this.canvas.height = b
            }, yb: function (a, b, c, d, e) { a.fj(this.canvas, b, c, this.width, this.height, d, e) }
        }; Ea.fH = [{ Lb: navigator.userAgent, Tc: "Chrome", mc: "Chrome" }, { Lb: navigator.userAgent, Tc: "OmniWeb", Qm: "OmniWeb/", mc: "OmniWeb" }, { Lb: navigator.vendor, Tc: "Apple", mc: "Safari", Qm: "Version" }, { BJ: window.opera, mc: "Opera", Qm: "Version" }, { Lb: navigator.vendor, Tc: "iCab", mc: "iCab" }, { Lb: navigator.vendor, Tc: "KDE", mc: "Konqueror" }, { Lb: navigator.userAgent, Tc: "Firefox", mc: "Firefox" }, { Lb: navigator.vendor, Tc: "Camino", mc: "Camino" },
        { Lb: navigator.userAgent, Tc: "Netscape", mc: "Netscape" }, { Lb: navigator.userAgent, Tc: "MSIE", mc: "Explorer", Qm: "MSIE" }, { Lb: navigator.userAgent, Tc: "Gecko", mc: "Mozilla", Qm: "rv" }, { Lb: navigator.userAgent, Tc: "Mozilla", mc: "Netscape", Qm: "Mozilla" }]; Ea.hH = [{ Lb: navigator.platform, Tc: "Win", mc: "Windows" }, { Lb: navigator.platform, Tc: "Mac", mc: "MacOS" }, { Lb: navigator.userAgent, Tc: "iPhone", mc: "iOS" }, { Lb: navigator.userAgent, Tc: "iPod", mc: "iOS" }, { Lb: navigator.userAgent, Tc: "iPad", mc: "iOS" }, {
            Lb: navigator.userAgent, Tc: "Android",
            mc: "Android"
        }, { Lb: navigator.platform, Tc: "Windows Phone", mc: "Windows Phone" }, { Lb: navigator.platform, Tc: "Linux", mc: "Linux" }]; Ea.prototype = { OC: function (a) { for (var b = 0; b < a.length; b++) { var c = a[b].Lb, d = a[b].BJ; this.AD = a[b].Qm || a[b].mc; if (c) { if (-1 != c.indexOf(a[b].Tc)) return a[b].mc } else if (d) return a[b].mc } }, PC: function (a) { var b = a.indexOf(this.AD); if (-1 != b) return parseFloat(a.substring(b + this.AD.length + 1)) } }; n.iQ = function (a, b, c, d) {
            var e = document.createElement("canvas"); e.width = b.width; e.height = b.height;
            var f = e.getContext("2d"); 0 == b.Wb ? f.drawImage(b.rc, 0, 0) : f.drawImage(a.ea.ec[b.Wb], b.le, b.me, b.width, b.height, 0, 0, b.width, b.height); var g = f.getImageData(0, 0, b.width, b.height), k = d >> 16 & 255, q = d >> 8 & 255; d &= 255; var h = c >> 16 & 255, m = c >> 8 & 255; c &= 255; var n, l, p; for (p = 0; p < b.height; p++)for (l = 0; l < b.width; l++)n = 4 * (p * b.width + l), g.data[n] == h && g.data[n + 1] == m && g.data[n + 2] == c && (g.data[n] = k, g.data[n + 1] = q, g.data[n + 2] = d); f.putImageData(g, 0, 0); f = new W; f.app = a; f.width = b.width; f.height = b.height; f.Ka = b.Ka; f.Ia = b.Ia; f.Rg = b.Rg; f.Sg =
                b.Sg; f.Ra = 0; f.rc = e; f.qg = b.qg; f.Wl = b.Wl; f.zh = b.zh; return f
        }; wa.FE = 1; wa.wM = 2; wa.EE = 4; wa.DE = 8; wa.prototype = {
            PG: function (a) { if (this.HH != a.Ce || this.Ad != a.bc) return !1; var b = 0 != (this.$z & wa.FE), c = 0 != a.De; if (b != c) return !1; b = 0 != (this.$z & wa.EE); c = 400 < a.Ee; return b != c ? !1 : !0 }, Se: function () { return this.height + this.pI }, measureText: function (a) { var b = 0, c = a.length, d, e; for (d = 0; d < c; d++)e = this.mu.indexOf(a.charAt(d)), b = 0 <= e ? b + (this.lu[e] + this.dv) : b + this.width; return b }, fillText: function (a, b, c, d) {
                var e = b.length, f, g, k,
                q, h = this.mg; if (0 == (this.ma & wa.DE)) for (f = 0; f < e; f++)q = this.mu.indexOf(b.charAt(f)), 0 <= q ? (k = Math.floor(q / this.vr), g = q - k * this.vr, k *= this.height + 1, g *= this.width + 1, 0 == h.Wb ? a.drawImage(h.rc, g, k, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(h.app.ea.ec[h.Wb], g + h.le, k + h.me, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height), c += this.lu[q] + this.dv) : (a.fillStyle = n.yf(this.color), a.fillRect(c, d, this.width, this.height), c += this.width); else for (c += this.measureText(b),
                    f = e - 1; 0 <= f; f--)q = this.mu.indexOf(b.charAt(f)), 0 <= q ? (c -= this.lu[q] + this.dv, k = q / this.vr, g = q - k * this.vr, k *= this.height + 1, g *= this.width + 1, 0 == h.Wb ? a.drawImage(h.rc, g, k, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height) : a.drawImage(h.app.ea.ec[h.Wb], g + h.le, k + h.me, this.width, this.height, Math.round(c), Math.round(d), this.width, this.height)) : (c -= this.width, a.fillStyle = n.yf(this.color), a.fillRect(c, d, this.width, this.height))
            }
        }; U.di = 1; U.ZK = 17408; U.YK = 17664; U.SK = 17920; U.QK = 18176; U.RK = 18432;
    U.TK = 18688; U.aL = 18944; U.WK = 19200; U.UK = 19456; U.VK = 19712; U.bL = 19968; U.cL = 20224; U.XK = 20480; U.$K = 20736; U.DD = 983039; U.create = function (a) {
        var b = !1, c = !1, d = !1, e = !1, f = !1, g = !1, k = !1, q = !1, h = !1, m = a.file.O, n = a.file.o(), l, p = a.file.s(); switch (p) {
            case 65535: l = new da; break; case 131071: l = new da; break; case 262143: l = new ACT_SETVARG; break; case 327679: l = new ACT_SUBVARG; break; case 393215: l = new ACT_ADDVARG; break; case 458751: l = new ACT_GRPACTIVATE; break; case 524287: l = new ACT_GRPDEACTIVATE; break; case 983039: l = new ACT_STARTLOOP;
                break; case 1048575: l = new ACT_STOPLOOP; break; case 1114111: l = new ACT_SETLOOPINDEX; break; case 1179647: l = new ACT_RANDOMIZE; break; case 1310719: l = new ACT_SETGLOBALSTRING; break; case 1572863: l = new da; break; case 1638399: l = new da; break; case 1835007: l = new ACT_SETVARGCONST; b = !0; break; case 1900543: l = new ACT_SETVARG; break; case 1966079: l = new ACT_SETVARGCONST; b = !0; break; case 2031615: l = new ACT_SETVARG; break; case 2097151: l = new ACT_ADDVARGCONST; c = !0; break; case 2162687: l = new ACT_ADDVARG; break; case 2228223: l = new ACT_ADDVARGCONST;
                c = !0; break; case 2293759: l = new ACT_ADDVARG; break; case 2359295: l = new ACT_SUBVARGCONST; d = !0; break; case 2424831: l = new ACT_SUBVARG; break; case 2490367: l = new ACT_SUBVARGCONST; d = !0; break; case 2555903: l = new ACT_SUBVARG; break; case 2883583: l = new ACT_EXECUTECHILDEVENTS; break; case 2949119: l = new da; break; case 65534: l = new ACT_PLAYSAMPLE; break; case 131070: l = new ob; break; case 327678: l = new ACT_PLAYLOOPSAMPLE; break; case 458750: l = new ACT_STOPSPESAMPLE; break; case 524286: l = new ACT_PAUSESAMPLE; break; case 589822: l = new ACT_RESUMESAMPLE;
                break; case 786430: l = new pb; break; case 851966: l = new qb; break; case 917502: l = new ACT_PAUSECHANNEL; break; case 983038: l = new ACT_RESUMECHANNEL; break; case 1048574: l = new ACT_STOPCHANNEL; break; case 1114110: l = new ACT_SETCHANNELPOS; break; case 1179646: l = new rb; break; case 1245182: l = new da; break; case 1310718: l = new ACT_SETSAMPLEPOS; break; case 1376254: l = new ACT_SETSAMPLEMAINVOL; break; case 1441790: l = new ACT_SETSAMPLEVOL; break; case 1507326: l = new da; break; case 1572862: l = new da; break; case 1638398: l = new ACT_PAUSEALLCHANNELS;
                break; case 1703934: l = new ACT_RESUMEALLCHANNELS; break; case 2031614: l = new ACT_LOCKCHANNEL; break; case 2097150: l = new ACT_UNLOCKCHANNEL; break; case 2162686: l = new ACT_SETCHANNELFREQ; break; case 2228222: l = new ACT_SETSAMPLEFREQ; break; case 65533: l = new sb; break; case 131069: l = new ACT_PREVLEVEL; break; case 196605: l = new tb; break; case 262141: l = new ACT_PAUSEKEY; break; case 327677: l = new ub; break; case 393213: l = new ACT_RESTARTGAME; break; case 458749: l = new ACT_RESTARTLEVEL; break; case 524285: l = new ACT_CDISPLAY; break; case 589821: l =
                    new vb; break; case 655357: l = new ACT_CDISPLAYY; break; case 983037: l = new ACT_FULLSCREENMODE; break; case 1048573: l = new ACT_WINDOWEDMODE; break; case 1114109: l = new ACT_SETFRAMERATE; break; case 1179645: l = new ACT_PAUSEKEY; break; case 1245181: l = new ACT_PAUSEANYKEY; break; case 1310717: l = new ACT_SETVSYNCON; break; case 1376253: l = new ACT_SETVSYNCOFF; break; case 1441789: l = new ACT_SETVIRTUALWIDTH; break; case 1507325: l = new ACT_SETVIRTUALHEIGHT; break; case 1572861: l = new ACT_SETFRAMEBDKCOLOR; break; case 1638397: l = new ACT_DELCREATEDBKDAT;
                break; case 1703933: l = new ACT_DELALLCREATEDBKD; break; case 1769469: l = new ACT_SETFRAMEWIDTH; break; case 1835005: l = new ACT_SETFRAMEHEIGHT; break; case 2097149: l = new ACT_PLAYDEMO; break; case 2162685: l = new da; break; case 2228221: l = new da; break; case 2293757: l = new da; break; case 2359293: l = new da; break; case 2424829: l = new da; break; case 2490365: l = new ACT_SETSTRETCHRESAMPLING; break; case 65532: l = new ACT_SETTIMER; break; case 131068: l = new ACT_EVENTAFTER; break; case 196604: l = new ACT_NEVENTSAFTER; break; case 65530: l = new ACT_HIDECURSOR;
                break; case 131066: l = new ACT_SHOWCURSOR; break; case 65529: l = new ACT_SETSCORE; break; case 131065: l = new ACT_SETLIVES; break; case 196601: l = new ACT_NOINPUT; break; case 262137: l = new ACT_RESTINPUT; break; case 327673: l = new ACT_ADDSCORE; break; case 393209: l = new ACT_ADDLIVES; break; case 458745: l = new ACT_SUBSCORE; break; case 524281: l = new ACT_SUBLIVES; break; case 589817: l = new ACT_SETINPUT; break; case 655353: l = new ACT_SETINPUTKEY; break; case 720889: l = new ACT_SETPLAYERNAME; break; case 65531: l = new wb; break; case 131067: l = new ACT_CREATEBYNAME;
                break; case 5242883: l = new ACT_STRDESTROY; break; case 5308419: l = new ACT_STRDISPLAY; break; case 5373955: l = new ACT_STRDISPLAYDURING; break; case 5439491: l = new ACT_STRSETCOLOUR; break; case 5505027: l = new ACT_STRSET; break; case 5570563: l = new ACT_STRPREV; break; case 5636099: l = new ACT_STRNEXT; break; case 5701635: l = new ACT_STRDISPLAYSTRING; break; case 5767171: l = new ACT_STRSETSTRING; break; case 5242882: l = new ACT_SPRPASTE; break; case 5308418: l = new ACT_SPRFRONT; break; case 5373954: l = new ACT_SPRBACK; break; case 5439490: l = new ACT_SPRADDBKD;
                break; case 5505026: l = new ACT_SPRREPLACECOLOR; break; case 5570562: l = new ACT_SPRSETSCALE; break; case 5636098: l = new ACT_SPRSETSCALEX; break; case 5701634: l = new ACT_SPRSETSCALEY; break; case 5767170: l = new ACT_SPRSETANGLE; break; case 5242887: l = new xb; break; case 5308423: l = new yb; break; case 5373959: l = new zb; break; case 5439495: l = new ACT_CSETMIN; break; case 5505031: l = new ACT_CSETMAX; break; case 5570567: l = new ACT_CSETCOLOR1; break; case 5636103: l = new ACT_CSETCOLOR2; break; case 5242884: l = new ACT_QASK; break; case 5242889: l =
                    new ACT_CCARESTARTAPP; break; case 5308425: l = new ACT_CCARESTARTFRAME; break; case 5373961: l = new ACT_CCANEXTFRAME; break; case 5439497: l = new ACT_CCAPREVIOUSFRAME; break; case 5505033: l = new ACT_CCAENDAPP; break; case 5636105: l = new ACT_CCAJUMPFRAME; break; case 5701641: l = new ACT_CCASETGLOBALVALUE; break; case 5767177: l = new ACT_CCASHOW; break; case 5832713: l = new ACT_CCAHIDE; break; case 5898249: l = new ACT_CCASETGLOBALSTRING; break; case 5963785: l = new ACT_CCAPAUSEAPP; break; case 6029321: l = new ACT_CCARESUMEAPP; break; case 6094857: l =
                        new ACT_CCASETWIDTH; break; case 6160393: l = new ACT_CCASETHEIGHT; break; default: switch (p & 4294901760) {
                            case 65536: l = new Ab; break; case 131072: l = new Bb; break; case 196608: l = new ACT_EXTSETY; break; case 262144: l = new ACT_EXTSTOP; break; case 327680: l = new ACT_EXTSTART; break; case 393216: l = new ACT_EXTSPEED; break; case 458752: l = new ACT_EXTMAXSPEED; break; case 524288: l = new ACT_EXTWRAP; break; case 589824: l = new ACT_EXTBOUNCE; break; case 655360: l = new ACT_EXTREVERSE; break; case 720896: l = new ACT_EXTNEXTMOVE; break; case 786432: l =
                                new ACT_EXTPREVMOVE; break; case 851968: l = new ACT_EXTSELMOVE; break; case 917504: l = new ACT_EXTLOOKAT; break; case 983040: l = new ACT_EXTSTOPANIM; break; case 1048576: l = new ACT_EXTSTARTANIM; break; case 1114112: l = new Cb; break; case 1179648: l = new ACT_EXTFORCEDIR; break; case 1245184: l = new ACT_EXTFORCESPEED; break; case 1310720: l = new ACT_EXTRESTANIM; break; case 1376256: l = new ACT_EXTRESTDIR; break; case 1441792: l = new ACT_EXTRESTSPEED; break; case 1507328: l = new ACT_EXTSETDIR; break; case 1572864: l = new Db; break; case 1638400: l =
                                    new ACT_EXTSHUFFLE; break; case 1703936: l = new Eb; break; case 1769472: l = new Fb; break; case 1835008: l = new ACT_EXTDISPLAYDURING; break; case 1900544: l = new ACT_EXTSHOOT; break; case 1966080: l = new ACT_EXTSHOOTTOWARD; break; case 2031616: l = new Gb; e = !0; break; case 2097152: l = new Ib; f = !0; break; case 2162688: l = new Kb; g = !0; break; case 2228224: l = new ACT_EXTDISPATCHVAR; break; case 2293760: l = new ACT_EXTSETFLAG; k = !0; break; case 2359296: l = new ACT_EXTCLRFLAG; q = !0; break; case 2424832: l = new ACT_EXTCHGFLAG; h = !0; break; case 2490368: l =
                                        new ACT_EXTINKEFFECT; break; case 2555904: l = new ACT_EXTSETSEMITRANSPARENCY; break; case 2621440: l = new ACT_EXTFORCEFRAME; break; case 2686976: l = new ACT_EXTRESTFRAME; break; case 2752512: l = new ACT_EXTSETACCELERATION; break; case 2818048: l = new ACT_EXTSETDECELERATION; break; case 2883584: l = new ACT_EXTSETROTATINGSPEED; break; case 2949120: l = new ACT_EXTSETDIRECTIONS; break; case 3014656: l = new ACT_EXTBRANCHNODE; break; case 3080192: l = new ACT_EXTSETGRAVITY; break; case 3145728: l = new ACT_EXTGOTONODE; break; case 3211264: l = new ACT_EXTSETVARSTRING;
                                break; case 3276800: l = new ACT_EXTSETFONTNAME; break; case 3342336: l = new ACT_EXTSETFONTSIZE; break; case 3407872: l = new ACT_EXTSETBOLD; break; case 3473408: l = new ACT_EXTSETITALIC; break; case 3538944: l = new ACT_EXTSETUNDERLINE; break; case 3604480: l = new da; break; case 3670016: l = new ACT_EXTSETTEXTCOLOR; break; case 3735552: l = new ACT_EXTSPRFRONT; break; case 3801088: l = new ACT_EXTSPRBACK; break; case 3866624: l = new ACT_EXTMOVEBEFORE; break; case 3932160: l = new ACT_EXTMOVEAFTER; break; case 3997696: l = new ACT_EXTMOVETOLAYER; break;
                            case 4063232: l = new da; break; case 4128768: l = new ACT_EXTSETEFFECT; break; case 4194304: l = new da; break; case 4259840: l = new Mb; break; case 4325376: l = new ACT_EXTSETRGBCOEF; break; case 4390912: l = new da; break; case 4456448: l = new ACT_EXTSETFRICTION; break; case 4521984: l = new ACT_EXTSETELASTICITY; break; case 4587520: l = new ACT_EXTAPPLYIMPULSE; break; case 4653056: l = new ACT_EXTAPPLYANGULARIMPULSE; break; case 4718592: l = new ACT_EXTAPPLYFORCE; break; case 4784128: l = new ACT_EXTAPPLYTORQUE; break; case 4849664: l = new ACT_EXTSETLINEARVELOCITY;
                                break; case 4915200: l = new ACT_EXTSETANGULARVELOCITY; break; case 4980736: l = new ACT_EXTFOREACH; break; case 5046272: l = new ACT_EXTFOREACH2; break; case 5111808: l = new ACT_EXTSTOPFORCE; break; case 5177344: l = new ACT_EXTSTOPTORQUE; break; default: l = new Hd
                        }
        }if (null != l) {
            l.ka = p; l.Qe = a.file.T(); l.Eb = a.file.T(); l.Ja = a.file.sb(); l.Pe = a.file.sb(); l.hd = a.file.sb(); l.xn = a.file.sb(); if (0 < l.hd) for (l.C = Array(l.hd), p = 0; p < l.hd; p++)l.C[p] = Qa.create(a); if (b || c || d) c = l.C[0], l.pd = c.value, c = l.C[1], l.value = c.Ga[0].value; if (e || f || g) b =
                null, c = l.C[0], 53 != c.code && (d = c.value, c = l.C[1], 0 <= d && 2 == c.Ga.length && (0 >= c.Ga[1].code || 1310720 <= c.Ga[1].code) && (65535 == c.Ga[0].code || 1572863 == c.Ga[0].code) && (e ? (b = new Hb, b.pd = d, b.value = c.Ga[0].value) : f ? (b = new Jb, b.pd = d, b.value = c.Ga[0].value) : g && (b = new Lb, b.pd = d, b.value = c.Ga[0].value)), null != b && (b.ka = l.ka, b.Qe = l.Qe, b.Eb = l.Eb, b.Ja = l.Ja, b.Pe = l.Pe, b.hd = l.hd, b.xn = l.xn, b.C = l.C, l = b)); if (k || q || h) b = null, e = l.C[0], 2 == e.Ga.length && (0 >= e.Ga[1].code || 1310720 <= e.Ga[1].code) && 65535 == e.Ga[0].code && (k ? (b = new ACT_EXTSETFLAGCONST,
                    b.R = 1 << e.Ga[0].value) : q ? (b = new ACT_EXTCLRFLAGCONST, b.R = 1 << e.Ga[0].value) : h && (b = new ACT_EXTCHGFLAGCONST, b.R = 1 << e.Ga[0].value)), null != b && (b.ka = l.ka, b.Qe = l.Qe, b.Eb = l.Eb, b.Ja = l.Ja, b.Pe = l.Pe, b.hd = l.hd, b.xn = l.xn, b.C = l.C, l = b)
        } a.file.seek(m + n); return l
    }; nb.sM = 1; da.prototype = { lb: function () { } }; ob.prototype = { lb: function (a) { a.h.Bc.zs() } }; pb.prototype = { lb: function (a) { var b = this.C[0], c = a.lc(this.C[1]), d = !1; 45 == b.code ? (b = a.Oq(b), b = a.h.gf.qA(b)) : (d = 0 != (b.iD & La.XF), b = b.ex); 0 <= b && a.h.Bc.play(b, 1, c - 1, d) } }; qb.prototype =
        { lb: function (a) { var b = this.C[0], c = !1; 45 == b.code ? (b = a.Oq(b), b = a.h.gf.qA(b)) : (c = 0 != (b.iD & La.XF), b = b.ex); var d = a.lc(this.C[1]), e = a.lc(this.C[2]); 0 <= b && a.h.Bc.play(b, e, d - 1, c) } }; rb.prototype = { lb: function (a) { var b = a.lc(this.C[0]), c = a.lc(this.C[1]); 0 <= c && 100 >= c && a.h.Bc.sK(b - 1, c) } }; sb.prototype = { lb: function (a) { a.ub = h.xp; a.h.$h = !0 } }; tb.prototype = {
            lb: function (a) {
                var b; if (26 == this.C[0].code) { if (b = this.C[0].value, -1 == a.h.XE(b)) return } else { b = a.lc(this.C[0]) - 1; if (0 > b || 4096 <= b) return; a.h.eP && b++; b |= 32768 } a.ub = h.wp;
                a.Hm = b; a.h.$h = !0
            }
        }; ub.prototype = { lb: function (a) { a.h.$h = !0; a.h.HA && !a.h.GA && (a.ub = h.vp) } }; vb.prototype = { lb: function (a) { var b = a.lc(this.C[0]); a.kK(b, 0, -1, 1) } }; wb.prototype = { lb: function (a) { var b = this.C[0], c = new Zc; b.xC(a, 17, c) && (c.$t ? (this.Ja |= U.di, a.i.hj = !0) : this.Ja &= ~U.di, b = a.Cu(b.kq, b.Vy, c.x, c.y, c.dir, 0, c.Rn, -1), 0 <= b && (b = a.H[b], a.i.Jl(b), b && 32 <= b.Ea && a.yG(b), a.rp(b) || null != a.vQ && a.Xh.FJ(b))) } }; xb.prototype = { lb: function (a) { var b = a.i.md(this); null != b && (a = a.hg(this.C[0]), b.qu(a), b.qn(a)) } }; yb.prototype =
            { lb: function (a) { var b = a.i.md(this); null != b && (a = a.hg(this.C[0]), b.YG(a)) } }; zb.prototype = { lb: function (a) { var b = a.i.md(this); null != b && (a = a.hg(this.C[0]), b.ZG(a)) } }; Ab.prototype = { lb: function (a) { var b = a.i.md(this); if (null != b) { var c = new Zc; this.C[0].xC(a, 1, c) && (h.Yb(b, c.x), h.jc(b, c.y), -1 != c.dir && (c = c.dir &= 31, a.Ub(b) != c && (b.b.Va = c, b.b.L = !0, b.A.ra.df(c), 2 == b.Ea && b.$.wl(0)))) } } }; Bb.prototype = { lb: function (a) { var b = a.i.md(this); null != b && (a = a.lc(this.C[0]), h.Yb(b, Math.floor(a))) } }; Cb.prototype = {
                lb: function (a) {
                    var b =
                        a.i.md(this); null != b && (a = 10 == this.C[0].code ? this.C[0].value : a.lc(this.C[0]), 0 > a && (a = 0), b.$.fq(a), b.b.L = !0)
                }
            }; Db.prototype = { lb: function (a) { var b = a.i.md(this); null != b && (3 == b.Ea ? 0 != (b.MC & h.Vs) ? (b.F.yr(), b.F.W &= ~v.ih, b.X |= G.Xg) : (b.X |= G.lf, a.eg(b.Vb)) : 0 == (b.X & G.lf) && (b.X |= G.lf, 0 != (b.ua & w.Kj) || 0 != (b.ua & w.Mj) ? a.DA(b) : (b.Jn = !1, a.eg(b.Vb)))) } }; Eb.prototype = { lb: function (a) { a = a.i.md(this); null != a && h.hJ(a) } }; Fb.prototype = { lb: function (a) { a = a.i.md(this); null != a && h.iJ(a) } }; Gb.prototype = {
                lb: function (a) {
                    var b = a.i.md(this);
                    if (null != b) { var c; c = 53 == this.C[0].code ? a.lc(this.C[0]) : this.C[0].value; 0 <= c && null != b.M && (c >= b.M.Qa.length && b.M.Fi(c + 10), a = a.hg(this.C[1]), b.M.Qa[c] = a) }
                }
            }; Hb.prototype = { lb: function (a) { a = a.i.md(this); null != a && 0 <= this.pd && null != a.M && (this.pd >= a.M.Qa.length && a.M.Fi(this.pd + 10), a.M.Qa[this.pd] = this.value) } }; Ib.prototype = {
                lb: function (a) {
                    var b = a.i.md(this); if (null != b) {
                        var c; c = 53 == this.C[0].code ? a.lc(this.C[0]) : this.C[0].value; 0 <= c && null != b.M && (c >= b.M.Qa.length && b.M.Fi(c + 10), a = a.hg(this.C[1]), b.M.Qa[c] +=
                            a)
                    }
                }
            }; Jb.prototype = { lb: function (a) { a = a.i.md(this); null != a && 0 <= this.pd && null != a.M && (this.pd >= a.M.Qa.length && a.M.Fi(this.pd + 10), a.M.Qa[this.pd] += this.value) } }; Kb.prototype = { lb: function (a) { var b = a.i.md(this); if (null != b) { var c; c = 53 == this.C[0].code ? a.lc(this.C[0]) : this.C[0].value; 0 <= c && null != b.M && (c >= b.M.Qa.length && b.M.Fi(c + 10), a = a.hg(this.C[1]), b.M.Qa[c] -= a) } } }; Lb.prototype = { lb: function (a) { a = a.i.md(this); null != a && 0 <= this.pd && null != a.M && (this.pd >= a.M.Qa.length && a.M.Fi(this.pd + 10), a.M.Qa[this.pd] -= this.value) } };
    Mb.prototype = { lb: function (a) { var b = a.i.md(this); if (null != b && null != b.F) { a = n.LG(255 - a.lc(this.C[0]), 0, 255); var c = 0 == (b.F.Sb & v.Ss); b.F.Sb = b.F.Sb & v.xx | v.Ss; var d = 16777215; c || (d = b.F.Tb); b.F.Tb = a << 24 | d & 16777215; b.F.dJ(b.F.Sb, b.F.Tb) } } }; L.iy = 6; L.WD = -983041; L.XD = -1507329; L.YD = -1572865; L.create = function (a) {
        var b = a.file.O, c = a.file.o(), d, e = a.file.s(); switch (e) {
            case -2752513: d = new CND_STARTCHILDEVENT; break; case -2686977: d = new ra; break; case -2555905: d = new CND_RUNNINGAS; break; case -2490369: d = new CND_COMPAREGCONST_GT;
                break; case -2424833: d = new CND_COMPAREGCONST_GE; break; case -2359297: d = new CND_COMPAREGCONST_LT; break; case -2293761: d = new CND_COMPAREGCONST_LE; break; case -2228225: d = new CND_COMPAREGCONST_NE; break; case -2162689: d = new CND_COMPAREGCONST_EQ; break; case -2097153: d = new CND_COMPAREGCONST_GT; break; case -2031617: d = new CND_COMPAREGCONST_GE; break; case -1966081: d = new CND_COMPAREGCONST_LT; break; case -1900545: d = new CND_COMPAREGCONST_LE; break; case -1835009: d = new CND_COMPAREGCONST_NE; break; case -1769473: d = new CND_COMPAREGCONST_EQ;
                break; case -1703937: d = new ra; break; case -1638401: d = new CND_CHANCE; break; case -1572865: d = new ra; break; case -1507329: d = new ra; break; case -1441793: d = new CND_GROUPSTART; break; case -1245185: d = new CND_COMPAREGSTRING; break; case -983041: d = new CND_ONLOOP; break; case -720897: d = new CND_GROUPACTIVATED; break; case -655361: d = new ra; break; case -589825: d = new ra; break; case -524289: d = new ra; break; case -458753: d = new CND_COMPAREG; break; case -393217: d = new Nb; break; case -327681: d = new Ob; break; case -262145: d = new CND_REPEAT;
                break; case -196609: d = new CND_NOMORE; break; case -131073: d = new Pb; break; case -65537: d = new ra; break; case -1: d = new Za; break; case -524290: d = new CND_SPCHANNELPAUSED; break; case -458754: d = new CND_NOSPCHANNELPLAYING; break; case -327682: d = new CND_SPSAMPAUSED; break; case -131074: d = new CND_NOSAMPLAYING; break; case -2: d = new CND_NOSPSAMPLAYING; break; case -458755: d = new CND_ENDOFPAUSE; break; case -393219: d = new CND_ISVSYNCON; break; case -327683: d = new CND_ISLADDER; break; case -262147: d = new CND_ISOBSTACLE; break; case -196611: d =
                    new CND_QUITAPPLICATION; break; case -131075: d = new ra; break; case -65539: d = new Za; break; case -3: d = new Qb; break; case -458756: d = new Zb; break; case -393220: d = new Yb; break; case -327684: d = new CND_ONEVENT; break; case -262148: d = new CND_TIMEOUT; break; case -196612: d = new CND_EVERY; break; case -131076: d = new CND_TIMER; break; case -65540: d = new CND_TIMERINF; break; case -4: d = new Rb; break; case -720902: d = new CND_ONMOUSEWHEELDOWN; break; case -655366: d = new CND_ONMOUSEWHEELUP; break; case -589830: d = new CND_MOUSEON; break; case -524294: d =
                        new CND_ANYKEY; break; case -458758: d = new CND_MKEYDEPRESSED; break; case -393222: d = new Sb; break; case -327686: d = new CND_MCLICKINZONE; break; case -262150: d = new Tb; break; case -196614: d = new Ub; break; case -131078: d = new CND_MINZONE; break; case -65542: d = new Vb; break; case -6: d = new Wb; break; case -327687: d = new CND_JOYPUSHED; break; case -262151: d = new CND_NOMORELIVE; break; case -196615: d = new CND_JOYPRESSED; break; case -131079: d = new CND_LIVE; break; case -65543: d = new CND_SCORE; break; case -7: d = new CND_PLAYERPLAYING; break;
            case -1441797: d = new CND_CHOOSEALLINLINE; break; case -1376261: d = new CND_CHOOSEFLAGRESET; break; case -1310725: d = new CND_CHOOSEFLAGSET; break; case -1245189: d = new CND_CHOOSEVALUE; break; case -1179653: d = new CND_PICKFROMID; break; case -1114117: d = new CND_CHOOSEALLINZONE; break; case -1048581: d = new CND_CHOOSEALL; break; case -983045: d = new CND_CHOOSEZONE; break; case -917509: d = new CND_NUMOFALLOBJECT; break; case -851973: d = new CND_NUMOFALLZONE; break; case -786437: d = new CND_NOMOREALLZONE; break; case -720901: d = new CND_CHOOSEFLAGRESET_OLD;
                break; case -655365: d = new CND_CHOOSEFLAGSET_OLD; break; case -458757: d = new CND_CHOOSEVALUE_OLD; break; case -393221: d = new CND_PICKFROMID_OLD; break; case -327685: d = new CND_CHOOSEALLINZONE_OLD; break; case -262149: d = new CND_CHOOSEALL_OLD; break; case -196613: d = new CND_CHOOSEZONE_OLD; break; case -131077: d = new CND_NUMOFALLOBJECT_OLD; break; case -65541: d = new CND_NUMOFALLZONE_OLD; break; case -5: d = new CND_NOMOREALLZONE_OLD; break; case -5308409: d = new Xb; break; case -5439484: d = new CND_QEQUAL; break; case -5373948: d = new CND_QFALSE;
                break; case -5308412: d = new CND_QEXACT; break; case -5505015: d = new CND_CCAISPAUSED; break; case -5439479: d = new CND_CCAISVISIBLE; break; case -5373943: d = new CND_CCAAPPFINISHED; break; case -5308407: d = new CND_CCAFRAMECHANGED; break; default: switch (e & 4294901760) {
                    case -2818048: d = new $a; break; case -2752512: d = new $a; break; case -2686976: d = new CND_EXTONLOOP; break; case -2621440: d = new CND_EXTISSTRIKEOUT; break; case -2555904: d = new CND_EXTISUNDERLINE; break; case -2490368: d = new CND_EXTISITALIC; break; case -2424832: d = new CND_EXTISBOLD;
                        break; case -2359296: d = new CND_EXTCMPVARSTRING; break; case -2293760: d = new CND_EXTPATHNODENAME; break; case -2228224: d = new CND_EXTCHOOSE; break; case -2162688: d = new CND_EXTNOMOREOBJECT; break; case -2097152: d = new CND_EXTNUMOFOBJECT; break; case -2031616: d = new CND_EXTNOMOREZONE; break; case -1966080: d = new CND_EXTNUMBERZONE; break; case -1900544: d = new $b; break; case -1835008: d = new CND_EXTHIDDEN; break; case -1769472: d = new ac; break; case -1703936: d = new CND_EXTCMPVARFIXED; break; case -1638400: d = new bc; break; case -1572864: d =
                            new CND_EXTFLAGRESET; break; case -1507328: d = new CND_EXTISCOLBACK; break; case -1441792: d = new CND_EXTNEARBORDERS; break; case -1376256: d = new CND_EXTENDPATH; break; case -1310720: d = new CND_EXTPATHNODE; break; case -1245184: d = new CND_EXTCMPACC; break; case -1179648: d = new CND_EXTCMPDEC; break; case -1114112: d = new cc; break; case -1048576: d = new CND_EXTCMPY; break; case -983040: d = new CND_EXTCMPSPEED; break; case -917504: d = new CND_EXTCOLLISION; break; case -851968: d = new CND_EXTCOLBACK; break; case -786432: d = new CND_EXTOUTPLAYFIELD;
                        break; case -720896: d = new CND_EXTINPLAYFIELD; break; case -655360: d = new CND_EXTISOUT; break; case -589824: d = new CND_EXTISIN; break; case -524288: d = new CND_EXTFACING; break; case -458752: d = new dc; break; case -393216: d = new CND_EXTBOUNCING; break; case -327680: d = new CND_EXTREVERSED; break; case -262144: d = new ec; break; case -196608: d = new fc; break; case -131072: d = new gc; break; case -65536: d = new hc; break; default: d = new Id
                }
        }if (null != d && (d.ka = e, d.Qe = a.file.T(), d.Eb = a.file.T(), d.Ja = a.file.sb(), d.Pe = a.file.sb(), d.hd = a.file.sb(),
            d.xn = a.file.sb(), d.AP = a.file.o(), 0 < d.hd)) for (d.C = Array(d.hd), e = 0; e < d.hd; e++)d.C[e] = Qa.create(a); a.file.seek(b + c); return d
    }; L.Rv = function (a) { return a.Pe & Q.Dj ? !1 : !0 }; L.xk = function (a) { return a.Pe & Q.Dj ? !0 : !1 }; L.Sv = function (a, b) { return a.Pe & Q.Dj ? !b : b }; L.UG = function (a) { var b = a.i.Ie, c = b.Ei; a = b.Ei = a.Ib; if (a == c) return !1; a--; return a == c ? !1 : !0 }; L.lP = function (a, b) {
        var c, d = b.Rq; if (null == d) d = new N, b.Rq = d; else for (c = 0; c < d.size(); c++)if (d.get(c) == a) return !1; d.add(a); d = b.yA; if (null == d) return !0; for (c = 0; c < d.size(); c++)if (d.get(c) ==
            a) return !1; return !0
    }; L.jP = function (a, b) { return 0 == b ? !1 : b == a.Ib || b == a.Ib - 1 ? !0 : !1 }; ra.prototype = { vb: function () { return !1 }, ta: function () { return !1 } }; Za.prototype = { vb: function () { return !0 }, ta: function () { return !0 } }; L.prototype = {
        ek: function (a, b) { var c = a.i.Re(this.Eb), d = a.i.ye, e = this.C[0], f; f = e.Ga[0]; if (f.code != ea.Ox && f.code != ea.CE || 0 != e.Ga[1].code) for (; null != c;)f = a.lc(e), 0 == b.Gl(c, f, e.Xj) && (d--, a.i.jd()), c = a.i.ze(); else for (f = f.value; null != c;)0 == b.Gl(c, f, e.Xj) && (d--, a.i.jd()), c = a.i.ze(); return 0 != d ? !0 : !1 },
        Hl: function (a, b) { for (var c = a.i.Re(this.Eb), d = a.i.ye; null != c;)0 == b.zq(c) && (d--, a.i.jd()), c = a.i.ze(); return 0 != d ? !0 : !1 }, FA: function (a) {
            if (a.i.Yh) return a.i.Re(this.Eb), a.i.Re(this.C[0].Qb), !1; var b = !1; 0 != (this.Pe & Q.Dj) && (b = !0); var c = a.i.Re(this.Eb); if (null == c) return L.xk(this); var d = a.i.ye, e = this.C[0].Kh; 0 <= e ? (a.ev[0] = e, a.ev[1] = this.C[0].Qb, e = a.ev) : e = a.i.gc[this.C[0].Qb & 32767].Na; var f, g = new N, k, q; do {
                f = a.em(c, c.b.Pa, c.b.hb, c.b.Cb, c.b.Db, c.u, c.v, e); if (null == f) 0 == b && (d--, a.i.jd()); else {
                    c = !1; for (k = 0; k <
                        f.size(); k++)q = f.get(k), 0 == (q.X & G.lf) && (g.add(q), c = !0); 1 == b ? 1 == c && (d--, a.i.jd()) : 0 == c && (d--, a.i.jd())
                } c = a.i.ze()
            } while (null != c); if (0 == d) return !1; c = a.i.Re(this.C[0].Qb); if (null == c) return !1; d = a.i.ye; if (0 == b) { do { for (k = 0; k < g.size() && (q = g.get(k), c != q); k++); k == g.size() && (d--, a.i.jd()); c = a.i.ze() } while (null != c); return 0 != d ? !0 : !1 } do { for (k = 0; k < g.size(); k++)if (q = g.get(k), c == q) { d--; a.i.jd(); break } c = a.i.ze() } while (null != c); return 0 != d ? !0 : !1
        }
    }; Nb.prototype = {
        vb: function (a) { return this.ta(a) }, ta: function (a) {
            a = a.i.Ie;
            if (0 != (a.fa & B.Xm)) return !0; if (0 != (a.fa & B.Wm)) return !1; a.Ei = -2; a.fa |= B.Xm; return !0
        }
    }; Ob.prototype = { vb: function (a) { return this.ta(a) }, ta: function (a) { a = a.i.Ie; if (0 != (a.fa & B.pp)) return !1; a.fa |= B.pp; return !0 } }; Pb.prototype = { vb: function (a) { return this.ta(a) }, ta: function (a) { var b = a.hg(this.C[0]); a = a.hg(this.C[1]); return h.zl(b, a, this.C[1].Xj) } }; Qb.prototype = { vb: function (a) { return 2 < a.Ib ? !1 : !0 }, ta: function (a) { return 2 < a.Ib ? !1 : !0 } }; Rb.prototype = {
        vb: function (a) { return this.ta(a) }, ta: function (a) {
            var b; b = 22 ==
                this.C[0].code ? a.lc(this.C[0]) : this.C[0].td; return a.Fg > b ? !0 : !1
        }
    }; Sb.prototype = { vb: function (a) { if (a.i.yc != this.C[0].value) return !1; var b = a.i.Tw, c = this.C[1]; if (b == c.Kh) return a.i.Jl(a.i.Sw), !0; c = c.Qb; if (0 == (c & 32768)) return !1; var d = a.i.gc[c & 32767], e; for (e = 0; e < d.Na.length; e += 2)if (d.Na[e] == b) return a.i.AH(c), a.i.Jl(a.i.Sw), !0; return !1 }, ta: function (a) { return a.i.$r != this.C[0].value ? !1 : a.lA(this.C[1].Qb, !1) } }; Tb.prototype = {
        vb: function (a) { return this.C[0].value != a.i.yc ? !1 : !0 }, ta: function (a) {
            return this.C[0].value ==
                a.i.$r ? !0 : !1
        }
    }; Ub.prototype = { vb: function (a) { return this.ta(a) }, ta: function (a) { return a.lA(this.C[0].Qb, 0 != (this.Pe & Q.Dj)) } }; Vb.prototype = { vb: function (a) { return this.ta(a) }, ta: function (a) { return L.Sv(this, a.h.Nc[this.C[0].key]) } }; Wb.prototype = { vb: function (a) { return this.ta(a) }, ta: function (a) { return 0 == a.h.Nc[this.C[0].key] ? L.xk(this) : L.UG(a) ? L.Rv(this) : L.xk(this) } }; Xb.prototype = {
        vb: function (a) { return this.ta(a) }, ta: function (a) {
            for (var b = a.i.Re(this.Eb), c = a.i.ye, d; null != b;)b = b.sa, d = a.hg(this.C[0]),
                0 == h.zl(b, d, this.C[0].Xj) && (c--, a.i.jd()), b = a.i.ze(); return 0 != c
        }
    }; Yb.prototype = { vb: function (a) { return this.ta(a) }, ta: function (a) { var b; b = 22 == this.C[0].code ? a.lc(this.C[0]) : this.C[0].td; var c = this.C[1]; if (a.Fg >= b) { if (c.value == a.Ib) return c.value = a.Ib + 1, !1; c.value = a.Ib + 1; return !0 } return !1 } }; Zb.prototype = {
        vb: function (a) { return this.ta(a) }, ta: function (a) {
            var b = this.C[1]; if (0 == b.Is) a = 22 == this.C[0].code ? a.lc(this.C[0]) : this.C[0].td, b.value = a, b.Is = -1; else if (b.value -= a.Io, 0 >= b.value) return a = 22 == this.C[0].code ?
                a.lc(this.C[0]) : this.C[0].td, b.value += a, !0; return !1
        }
    }; $b.prototype = n.extend(new L, { vb: function (a) { return this.Hl(a, this) }, ta: function (a) { return this.Hl(a, this) }, zq: function (a) { return L.Sv(this, 0 == (a.F.W & v.hh)) } }); ac.prototype = {
        vb: function (a) { return this.ta(a) }, ta: function (a) {
            var b = a.i.Re(this.Eb); if (null == b) return !1; var c = a.i.ye, d, e = this.C[1]; do d = 53 == this.C[0].code ? a.lc(this.C[0]) : this.C[0].value, 0 <= d && null != b.M ? (b = d < b.M.Qa.length ? b.M.Ol(d) : 0, d = a.hg(e), 0 == h.zl(b, d, e.Xj) && (c--, a.i.jd())) : (c--, a.i.jd()),
                b = a.i.ze(); while (null != b); return 0 != c
        }
    }; $a.prototype = { vb: function (a) { return this.ta(a) }, ta: function (a) { var b = a.i.Re(this.Eb); if (null == b) return !1; var c = a.i.ye, d = this.C[0].value, e = this.C[1], f = e.Ga[0].value; do 0 <= d && null != b.M ? (b = d < b.M.Qa.length ? b.M.Ol(d) : 0, 0 == h.zl(b, f, e.Xj) && (c--, a.i.jd())) : (c--, a.i.jd()), b = a.i.ze(); while (null != b); return 0 != c } }; bc.prototype = n.extend(new L, {
        vb: function (a) { return this.ta(a) }, ta: function (a) {
            var b = this.C[0]; if (68 != b.code) return this.ek(a, this); for (var c = a.i.Re(this.Eb),
                d = a.i.ye; null != c;)0 == b.yH(c) && (d--, a.i.jd()), c = a.i.ze(); return 0 != d ? !0 : !1
        }, Gl: function (a, b) { return null != a.M && 0 != (a.M.Yk & 1 << (b & 31)) ? !0 : !1 }
    }); cc.prototype = n.extend(new L, { vb: function (a) { return this.ek(a, this) }, ta: function (a) { return this.ek(a, this) }, Gl: function (a, b, c) { return h.fz(a.u, b, c) } }); dc.prototype = n.extend(new L, { vb: function (a) { return this.Hl(a, this) }, ta: function (a) { return this.Hl(a, this) }, zq: function (a) { return L.Sv(this, 0 == a.b.Z) } }); ec.prototype = n.extend(new L, {
        vb: function (a) { return this.FA(a) },
        ta: function (a) { return this.FA(a) }
    }); fc.prototype = n.extend(new L, { vb: function (a) { return this.ta(a) }, ta: function (a) { return 10 == this.C[0].code ? this.Hl(a, this) : this.ek(a, this) }, zq: function (a) { return this.C[0].value != a.$.Rh ? L.xk(this) : 0 != a.$.ne ? L.Rv(this) : L.xk(this) }, Gl: function (a, b) { return b != a.$.Rh ? L.xk(this) : 0 != a.$.ne ? L.Rv(this) : L.xk(this) } }); gc.prototype = n.extend(new L, {
        vb: function (a, b) { if ((10 == this.C[0].code ? this.C[0].value : a.lc(this.C[0])) != a.i.yc) return !1; a.i.Jl(b); return !0 }, ta: function (a) {
            return 10 ==
                this.C[0].code ? this.Hl(a, this) : this.ek(a, this)
        }, zq: function (a) { return this.C[0].value != a.$.Rh ? !1 : 0 == a.$.ne ? !0 : !1 }, Gl: function (a, b) { return b != a.$.Rh ? !1 : 0 == a.$.ne ? !0 : !1 }
    }); hc.prototype = n.extend(new L, { vb: function (a) { return this.ek(a, this) }, ta: function (a) { return this.ek(a, this) }, Gl: function (a, b, c) { return h.fz(a.$.Of, b, c) } }); ea.oM = 8960; ea.qM = 9216; ea.nM = 9472; ea.rM = 9728; ea.lM = 9984; ea.pM = 10752; ea.mM = 11008; ea.ct = 262143; ea.Ox = 65535; ea.CE = 1572863; ea.create = function (a) {
        var b = a.O, c, d = a.s(); switch (d) {
            case 0: c =
                new va; break; case 131072: c = new qc; break; case 262144: c = new rc; break; case 393216: c = new sc; break; case 524288: c = new tc; break; case 655360: c = new EXP_MOD; break; case 786432: c = new EXP_POW; break; case 917504: c = new EXP_AND; break; case 1048576: c = new EXP_OR; break; case 1179648: c = new EXP_XOR; break; case 65535: c = new bb; break; case 131071: c = new uc; break; case 196607: c = new EXP_VARGLO; break; case 262143: c = new nc; break; case 327679: c = new EXP_STR; break; case 393215: c = new EXP_VAL; break; case 458751: case 524287: case 589823: case 655359: c =
                    new ab; break; case 720895: c = new EXP_SIN; break; case 786431: c = new EXP_COS; break; case 851967: c = new EXP_TAN; break; case 917503: c = new EXP_SQR; break; case 983039: c = new EXP_LOG; break; case 1048575: c = new EXP_LN; break; case 1114111: c = new EXP_HEX; break; case 1179647: c = new EXP_BIN; break; case 1245183: c = new EXP_EXP; break; case 1310719: c = new EXP_LEFT; break; case 1376255: c = new EXP_RIGHT; break; case 1441791: c = new EXP_MID; break; case 1507327: c = new EXP_LEN; break; case 1572863: c = new ic; break; case 1638399: c = new mc; break; case 1900543: c =
                        new EXP_INT; break; case 1966079: c = new EXP_ABS; break; case 2031615: c = new EXP_CEIL; break; case 2097151: c = new EXP_FLOOR; break; case 2162687: c = new EXP_ACOS; break; case 2228223: c = new EXP_ASIN; break; case 2293759: c = new EXP_ATAN; break; case 2359295: c = new EXP_NOT; break; case 2686975: c = new EXP_MIN; break; case 2752511: c = new EXP_MAX; break; case 2818047: c = new EXP_GETRGB; break; case 2883583: c = new EXP_GETRED; break; case 2949119: c = new EXP_GETGREEN; break; case 3014655: c = new EXP_GETBLUE; break; case 3080191: c = new EXP_LOOPINDEX;
                break; case 3145727: c = new EXP_NEWLINE; break; case 3211263: c = new EXP_ROUND; break; case 3276799: c = new EXP_STRINGGLO; break; case 3342335: c = new lc; break; case 3407871: c = new EXP_LOWER; break; case 3473407: c = new EXP_UPPER; break; case 3538943: c = new EXP_FIND; break; case 3604479: c = new EXP_REVERSEFIND; break; case 3866623: c = new EXP_FLOATTOSTRING; break; case 3932159: c = new EXP_ATAN2; break; case 3997695: c = new va; break; case 4063231: c = new ab; break; case 4128767: c = new EXP_DISTANCE; break; case 4194303: c = new EXP_ANGLE; break; case 4259839: c =
                    new EXP_RANGE; break; case 4325375: c = new EXP_RANDOMRANGE; break; case 4456447: c = new EXP_RUNTIMENAME; break; case -1: c = new vc; break; case -65537: c = new wc; break; case -131073: c = new EXP_VIRGULE; break; case 65534: c = new EXP_GETSAMPLEMAINVOL; break; case 131070: c = new EXP_GETSAMPLEVOL; break; case 196606: c = new EXP_GETCHANNELVOL; break; case 262142: c = new va; break; case 327678: c = new EXP_GETSAMPLEPAN; break; case 393214: c = new EXP_GETCHANNELPAN; break; case 458750: c = new EXP_GETSAMPLEPOS; break; case 524286: c = new EXP_GETCHANNELPOS;
                break; case 589822: c = new EXP_GETSAMPLEDUR; break; case 655358: c = new EXP_GETCHANNELDUR; break; case 720894: c = new EXP_GETSAMPLEFREQ; break; case 786430: c = new EXP_GETCHANNELFREQ; break; case 65533: c = new EXP_GAMLEVEL; break; case 131069: c = new EXP_GAMNPLAYER; break; case 196605: c = new EXP_PLAYXLEFT; break; case 262141: c = new EXP_PLAYXRIGHT; break; case 327677: c = new EXP_PLAYYTOP; break; case 393213: c = new EXP_PLAYYBOTTOM; break; case 458749: c = new EXP_PLAYWIDTH; break; case 524285: c = new EXP_PLAYHEIGHT; break; case 589821: c = new EXP_GAMLEVELNEW;
                break; case 655357: c = new EXP_GETCOLLISIONMASK; break; case 720893: c = new EXP_FRAMERATE; break; case 786429: c = new EXP_GETVIRTUALWIDTH; break; case 851965: c = new EXP_GETVIRTUALHEIGHT; break; case 917501: c = new EXP_GETFRAMEBKDCOLOR; break; case 983037: c = new va; break; case 1048573: c = new va; break; case 1114109: c = new EXP_FRAMEALPHACOEF; break; case 1179645: c = new EXP_FRAMERGBCOEF; break; case 1245181: c = new va; break; case 65532: c = new EXP_TIMVALUE; break; case 131068: c = new EXP_TIMCENT; break; case 196604: c = new EXP_TIMSECONDS; break;
            case 262140: c = new EXP_TIMHOURS; break; case 327676: c = new EXP_TIMMINITS; break; case 393212: c = new EXP_EVENTAFTER; break; case 65530: c = new EXP_XMOUSE; break; case 131066: c = new EXP_YMOUSE; break; case 196602: c = new EXP_MOUSEWHEELDELTA; break; case 65529: c = new EXP_PLASCORE; break; case 131065: c = new EXP_PLALIVES; break; case 196601: c = new EXP_GETINPUT; break; case 262137: c = new EXP_GETINPUTKEY; break; case 327673: c = new EXP_GETPLAYERNAME; break; case 65531: c = new EXP_CRENUMBERALL; break; case 5242883: c = new EXP_STRNUMBER; break; case 5308419: c =
                new EXP_STRGETCURRENT; break; case 5373955: c = new EXP_STRGETNUMBER; break; case 5439491: c = new EXP_STRGETNUMERIC; break; case 5505027: c = new EXP_STRGETNPARA; break; case 5242882: c = new EXP_GETRGBAT; break; case 5308418: c = new EXP_GETSCALEX; break; case 5373954: c = new EXP_GETSCALEY; break; case 5439490: c = new EXP_GETANGLE; break; case 5242887: c = new xc; break; case 5308423: c = new EXP_CGETMIN; break; case 5373959: c = new EXP_CGETMAX; break; case 5439495: c = new EXP_CGETCOLOR1; break; case 5505031: c = new EXP_CGETCOLOR2; break; case 5242889: c =
                    new EXP_CCAGETFRAMENUMBER; break; case 5308425: c = new EXP_CCAGETGLOBALVALUE; break; case 5373961: c = new EXP_CCAGETGLOBALSTRING; break; default: switch (d & 4294901760) {
                        case 65536: c = new EXP_EXTYSPR; break; case 131072: c = new EXP_EXTISPR; break; case 196608: c = new EXP_EXTSPEED; break; case 262144: c = new EXP_EXTACC; break; case 327680: c = new EXP_EXTDEC; break; case 393216: c = new EXP_EXTDIR; break; case 458752: c = new EXP_EXTXLEFT; break; case 524288: c = new EXP_EXTXRIGHT; break; case 589824: c = new EXP_EXTYTOP; break; case 655360: c = new EXP_EXTYBOTTOM;
                            break; case 720896: c = new yc; break; case 786432: c = new EXP_EXTIDENTIFIER; break; case 851968: c = new EXP_EXTFLAG; break; case 917504: c = new EXP_EXTNANI; break; case 983040: c = new EXP_EXTNOBJECTS; break; case 1048576: c = new jc; break; case 1114112: c = new EXP_EXTGETSEMITRANSPARENCY; break; case 1179648: c = new EXP_EXTNMOVE; break; case 1245184: c = new kc; break; case 1310720: c = new EXP_EXTGETFONTNAME; break; case 1376256: c = new EXP_EXTGETFONTSIZE; break; case 1441792: c = new EXP_EXTGETFONTCOLOR; break; case 1507328: c = new EXP_EXTGETLAYER;
                            break; case 1572864: c = new EXP_EXTGETGRAVITY; break; case 1638400: c = new EXP_EXTXAP; break; case 1703936: c = new EXP_EXTYAP; break; case 1769472: c = new EXP_EXTALPHACOEF; break; case 1835008: c = new EXP_EXTRGBCOEF; break; case 1900544: c = new va; break; case 1966080: c = new oc; break; case 2031616: c = new pc; break; case 2097152: c = new EXP_EXTDISTANCE; break; case 2162688: c = new EXP_EXTANGLE; break; case 2228224: c = new EXP_EXTLOOPINDEX; break; case 2293760: c = new EXP_EXTGETFRICTION; break; case 2359296: c = new EXP_EXTGETRESTITUTION; break; case 2424832: c =
                                new EXP_EXTGETDENSITY; break; case 2490368: c = new EXP_EXTGETVELOCITY; break; case 2555904: c = new EXP_EXTGETANGLE; break; case 2621440: c = new EXP_EXTWIDTH; break; case 2686976: c = new EXP_EXTHEIGHT; break; case 2752512: c = new EXP_EXTGETMASS; break; case 2818048: c = new EXP_EXTGETANGULARVELOCITY; break; case 2883584: c = new EXP_EXTGETNAME; break; default: c = new Gd
                    }
        }if (null != c && (c.code = d, 0 != d)) {
            var e = a.o(), f; switch (d) {
                case 262143: c.Lb = a.Hb(); break; case 65535: c.value = a.s(); break; case 1572863: c.value = a.uC(); break; case 1638399: a.pa(4);
                    c.Eh = a.o(); break; case 3342335: a.pa(4); c.Eh = a.o(); break; default: if (f = d & 65535, 0 != (f & 32768) && (f -= 65536), 2 <= f || f == r.ny) switch (c.Kh = a.T(), c.Qb = a.T(), d & 4294901760) { case 1048576: c.Eh = a.o(); break; case 1245184: c.Eh = a.o() }
            }a.seek(b + e)
        } return c
    }; ab.prototype = { evaluate: function (a) { a.Fa[a.ga] = "" } }; va.prototype = { evaluate: function (a) { a.Fa[a.ga] = 0 } }; bb.prototype = { evaluate: function (a) { a.Fa[a.ga] = this.value } }; ic.prototype = { evaluate: function (a) { a.Fa[a.ga] = this.value; a.sh = !0 } }; jc.prototype = {
        evaluate: function (a) {
            var b =
                a.i.kk(this.Qb); null == b ? a.Fa[a.ga] = 0 : (b = null != b.M ? b.M.Ol(this.Eh) : 0, n.gv(b) || (a.sh = !0), a.Fa[a.ga] = b)
        }
    }; kc.prototype = { evaluate: function (a) { var b = a.i.kk(this.Qb); a.Fa[a.ga] = null == b ? "" : b.M.rA(this.Eh) } }; lc.prototype = { evaluate: function (a) { a.Fa[a.ga] = a.h.iA(this.Eh) } }; mc.prototype = { evaluate: function (a) { a.Fa[a.ga] = a.h.Nu(this.Eh) } }; nc.prototype = { evaluate: function (a) { a.Fa[a.ga] = this.Lb } }; oc.prototype = {
        evaluate: function (a) {
            var b = a.i.kk(this.Qb); a.Id++; var c = a.Su(); null != b && null != b.M && 0 <= c && c < b.M.Qa.length ?
                (b = b.M.Ol(c), n.gv(b) || (a.sh = !0), a.Fa[a.ga] = b) : a.Fa[a.ga] = 0
        }
    }; pc.prototype = { evaluate: function (a) { var b = a.i.kk(this.Qb); a.Id++; var c = a.Su(); a.Fa[a.ga] = null != b && null != b.M && 0 <= c && c < b.M.Ld.length ? b.M.rA(c) : "" } }; qc.prototype = { evaluate: function (a) { a.Fa[a.ga] += a.Fa[a.ga + 1] } }; rc.prototype = { evaluate: function (a) { a.ln ? (a.Id++, a.Sk[a.Id].evaluate(a), a.Fa[a.ga] = -a.Fa[a.ga]) : a.Fa[a.ga] -= a.Fa[a.ga + 1] } }; sc.prototype = { evaluate: function (a) { a.Fa[a.ga] *= a.Fa[a.ga + 1] } }; tc.prototype = {
        evaluate: function (a) {
            var b = a.Fa[a.ga],
            c = a.Fa[a.ga + 1]; a.Fa[a.ga] = 0 != c ? 0 == a.sh ? n.zd(b / c) : a.Fa[a.ga] / a.Fa[a.ga + 1] : 0
        }
    }; uc.prototype = { evaluate: function (a) { a.Id++; var b = a.Su(); a.Fa[a.ga] = a.random(b) } }; vc.prototype = { evaluate: function (a) { a.Id++; a.Fa[a.ga] = a.getExpression() } }; wc.prototype = { evaluate: function () { } }; xc.prototype = { evaluate: function (a) { var b = a.i.kk(this.Qb); null == b ? a.Fa[a.ga] = 0 : (a.Fa[a.ga] = b.sa, b.ui && (a.sh = !0)) } }; yc.prototype = { evaluate: function (a) { var b = a.i.kk(this.Qb); a.Fa[a.ga] = null == b ? 0 : b.u } }; ma.FusionVersion = "Clickteam Fusion HTML5 Exporter Build 291.2";
    m.Zf = 4; m.qO = 770; m.Zm = 8; m.IM = 2; m.PE = 4; m.JM = 8; m.Sx = 16; m.HM = 128; m.GM = 256; m.FM = 512; m.OE = 1024; m.EM = 2048; m.ME = 1; m.KE = 4; m.LE = 8; m.BM = 64; m.zM = 128; m.yM = 512; m.AM = 1024; m.NE = 4096; m.DM = 4096; m.CM = 8192; m.pO = 1; m.Wp = 0; m.tl = 1; m.Lt = 2; m.rl = 3; m.Vp = 4; m.Up = 5; m.sl = 6; m.tO = 7; m.ay = 203; m.HO = 37; m.TO = 39; m.WO = 38; m.EO = 40; m.qf = 200; m.Ot = 201; m.Zp = 202; m.JO = 96; m.KO = 97; m.LO = 98; m.MO = 99; m.NO = 100; m.OO = 101; m.PO = 102; m.QO = 103; m.RO = 104; m.SO = 105; m.UO = 83; m.DO = 68; m.FO = 69; m.XO = 88; m.GO = 123; m.VO = 16; m.CO = 17; m.IO = 18; m.YL = 0; m.TL = 1; m.UL = 2; m.VL = 3; m.WL =
        4; m.XL = 5; m.wx = 4; m.uL = 128; m.FD = 1; m.rx = 4; m.fL = 65536; m.Ps = 32768; m.ID = 1048576; m.HD = 8388608; m.ei = 16777216; m.GD = 33554432; m.ED = 67108864; m.bd = 10; m.Px = 592880741; m.Qj = 1770410840; m.wF = 300; ma.loadApplication = cb; ma.loadInfo = zc; m.prototype = {
            SI: function () { var a = this.Nn.s(); 0 > this.Wq && (this.Wq = a); a != this.Wq && (this.Nn.YC(!0), a = this.Nn.Hb(), window.open(this.Vq + a, "_self")); this.Mn = 25 }, load: function () {
                this.gJ = this.file.o(); this.uq = 1; this.fr = new X; var a = this.file.s(); this.fr.getFile(this.path.substring(0, this.path.length -
                    1) + this.uq.toString(), cb, a)
            }, MI: function () { this.uq++; if (this.uq > this.gJ) { var a = (new t(this.fr.gd, "content")).file("Application.ccj").Iy(); this.fr = null; this.file = new X; this.file.jK(a); this.digest(); this.fx() } else a = this.file.s(), this.fr.getFile(this.path.substring(0, this.path.length - 1) + this.uq.toString(), cb, a) }, digest: function () {
                this.file.seek(0); var a = this.file.wC(4); this.fd = !1; 80 == a[0] && 65 == a[1] && 77 == a[2] && 85 == a[3] && (this.fd = !0); this.file.YC(this.fd); this.file.pa(8); this.file.pa(4); this.Lc = new Mc;
                this.ea = new Hc(this); this.Nb = new Ic(this); this.gf = new Jc(this); this.Bc = new Z(this); for (var b, c = 0; 32639 != c;)if (c = this.file.o(), this.file.o(), b = this.file.s(), 0 != b) {
                    a = this.file.O + b; switch (c) {
                        case 8739: this.LI(); this.Ju = Array(this.xf); this.bA = Array(this.xf); this.aA = Array(this.xf); this.Ku = Array(this.xf); for (b = 0; b < this.xf; b++)this.Ku[b] = null; break; case 8773: this.Ca = this.file.s(); this.file.s(); this.file.s(); this.file.o(); this.file.o(); break; case 8740: this.appName = this.file.Hb(); break; case 8774: this.file.s();
                            break; case 8750: this.file.Hb(); break; case 8782: this.zv = this.file.Hb(); break; case 8754: this.RI(); break; case 8755: this.QI(); break; case 8745: case 8767: this.Bq = new Na(this); this.Bq.$G(this.file); this.Lc.Ph(this.file); break; case 8747: this.NI(b); break; case 8778: this.vo = this.file.s(); this.hC = this.file.s(); this.iC = this.file.s(); this.kC = this.file.s(); this.lC = this.file.s(); this.jC = this.file.Yc(); this.Fk = this.file.s(); -1 != this.Fk && (this.file.uK(4), this.Fk = this.file.Yc()); this.Kr = this.file.s(); this.uv = !0; break;
                        case 13107: this.Ju[this.Ll] = this.file.O; for (var d = 0; 32639 != d;)if (d = this.file.o(), this.file.o(), b = this.file.s(), 0 != b) { var e = this.file.O + b; switch (d) { case 13108: 0 == this.Ll && (this.file.pa(8), this.file.Yc()); break; case 13110: this.Ku[this.Ll] = this.file.Hb(); break; case 13129: this.bA[this.Ll] = this.file.s(); this.aA[this.Ll] = this.file.s(); break; case 13128: var f = b / 6; for (b = 0; b < f; b++) { var g = this.file.o(); this.file.pa(4); 0 != g && (this.ec[g] = 1, this.ke = Math.max(this.ke, g + 1)) } }this.file.seek(e) } this.Ll++; break; case 8760: d =
                            this.file.s(); this.dk = Array(d); for (b = 0; b < d; b++)this.dk[b] = new Ac(this), this.dk[b].Ph(); break; case 26214: this.ea.Ph(this.file); break; case 26215: this.Nb.Ph(this.file); break; case 26216: this.gf.Ph(this.file)
                    }this.file.seek(a)
                } this.context = new Ba(this.canvas); this.Bc.pK(0 != (this.Fn & m.OE)); null == this.Aa && (this.ie = new Aa)
            }, SC: function (a, b, c, d, e, f) { this.Aa = a; this.Ck = c; this.ie = d; this.gx = b; this.ow = e; this.nw = f }, mI: function () {
                this.bg = !1; this.NC = 0; this.cK = this.dK = 1; this.fK = this.eK = this.na / 2; this.hK = this.gK = this.xa /
                    2
            }, ys: function () { window.setTimeout(Ta.bind(this), 20) }, fx: function () {
                (this.Ln = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent)) && 0 < this.gf.Ab && (this.Ke = new Pa(this), this.Ke.VI()); this.sm(); this.Nc = Array(m.ay); var a; for (a = 0; a < m.ay; a++)this.Nc[a] = !1; this.canvas.Mc = this; if (null == this.Aa) {
                    var b = this; window.addEventListener("keypress", function (a) { b.qH(a) }, !1); window.addEventListener("keydown", function (a) { b.Fz(a) }, !1); window.addEventListener("keyup",
                        function (a) { b.Gz(a) }, !1); window.addEventListener("blur", function () { b.hasFocus = !1 }, !1); window.addEventListener("focus", function () { b.hasFocus = !0 }, !1); if (window !== window.top) try { var c = window.top; c.addEventListener("focus", function () { b.hasFocus = !0; b.canvas.focus() }); c.addEventListener("blur", function () { b.hasFocus = !1 }) } catch (d) { } window.addEventListener("resize", function () { b.sm() }, !1); document.addEventListener("blur", function () { b.hasFocus = !1 }, !1); document.addEventListener("focus", function () {
                            b.hasFocus =
                            !0
                        }, !1); document.addEventListener("fullscreenchange", function () { b.fullScreen = document.GP; b.sm() }, !1); document.addEventListener("mozfullscreenchange", function () { b.fullScreen = document.mozFullScreen; b.sm() }, !1); document.addEventListener("webkitfullscreenchange", function () { b.fullScreen = document.webkitIsFullScreen; b.sm() }, !1); window.PointerEvent ? ("undefined" !== typeof CRunMultipleTouch && (this.canvas.setAttribute("style", "-ms-touch-action: none;"), this.canvas.setAttribute("style", "touch-action: none;")),
                            this.canvas.addEventListener("pointerdown", function (a) { switch (a.pointerType) { case "mouse": case "pen": b.Iv(a, !0); break; case "touch": b.Ds(a, !0) }a.preventDefault && a.preventDefault() }, !1), this.canvas.addEventListener("pointermove", function (a) { switch (a.pointerType) { case "mouse": case "pen": b.Zn(a, b.canvas); break; case "touch": b.Cs(a, !0) }a.preventDefault && a.preventDefault() }, !1), this.canvas.addEventListener("pointerup", function (a) {
                                switch (a.pointerType) {
                                    case "mouse": case "pen": b.Jv(a); break; case "touch": b.bl(a,
                                        !0)
                                }a.preventDefault && a.preventDefault()
                            }, !1), this.canvas.addEventListener("pointercancel", function (a) { switch (a.pointerType) { case "touch": b.bl(a, !0) }a.preventDefault && a.preventDefault() }, !1)) : (this.canvas.addEventListener("mousemove", function (a) { b.Zn(a, b.canvas); a.preventDefault && a.preventDefault() }, !1), this.canvas.addEventListener("mousedown", function (a) { b.Iv(a, !1); a.preventDefault && a.preventDefault() }, !1), this.canvas.addEventListener("mouseup", function (a) { b.Jv(a); a.preventDefault && a.preventDefault() },
                                !1), this.canvas.addEventListener("mouseout", function (a) { b.qB(a); a.preventDefault && a.preventDefault() }, !1), this.canvas.addEventListener("click", function (a) { b.click(a); a.preventDefault && a.preventDefault() }, !1), this.canvas.addEventListener("dblclick", function (a) { b.xz(a); a.preventDefault && a.preventDefault() }, !1)); this.canvas.addEventListener("contextmenu", function (a) { a.preventDefault && a.preventDefault() }, !1); a = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"; document.attachEvent ? document.attachEvent("on" +
                                    a, function (a) { b.rB(a) }) : document.addEventListener && document.addEventListener(a, function (a) { b.rB(a) }, !1); document.onselectstart = function () { return !1 }; this.canvas.onselectstart = function (a) { a.preventDefault && a.preventDefault(); return !1 }; this.tj = this.xI(); this.hf = new N; this.jf = Array(m.bd); this.xi = Array(m.bd); this.Nm = Array(m.bd); this.Ng = Array(m.bd); this.Og = Array(m.bd); for (a = 0; a < m.bd; a++)this.jf[a] = m.Qj, this.Ng[a] = 0, this.Og[a] = 0, this.xi[a] = !1, this.Nm[a] = 0; this.tj && !window.PointerEvent && (this.canvas.addEventListener("touchstart",
                                        function (a) { b.Ds(a, !1); a.preventDefault && a.preventDefault() }, !1), this.canvas.addEventListener("touchmove", function (a) { b.Cs(a, !1); a.preventDefault && a.preventDefault() }, !1), this.canvas.addEventListener("touchend", function (a) { b.bl(a, !1); a.preventDefault && a.preventDefault() }, !1), this.canvas.addEventListener("touchcancel", function (a) { b.bl(a, !1); a.preventDefault && a.preventDefault() }, !1)); window.focus(); this.ys()
                } else for (this.tj = this.Aa.tj, this.hf = new N, this.jf = Array(m.bd), this.xi = Array(m.bd), this.Nm = Array(m.bd),
                    this.Ng = Array(m.bd), this.Og = Array(m.bd), a = 0; a < m.bd; a++)this.jf[a] = m.Qj, this.Ng[a] = 0, this.Og[a] = 0, this.xi[a] = !1, this.Nm[a] = 0; this.Za = this.xj = this.vj = 0; this.xe = -2; this.G = new h(this)
            }, sm: function () {
                var a = this.na, b = this.xa, c, d; this.fullScreen || this.Fn & m.Sx ? (c = window.innerWidth, d = window.innerHeight, document.documentElement.style.overflow = "hidden", document.body.scroll = "no") : (c = a, d = b); c /= a; d /= b; if (this.Ca & m.FD || this.Fn & m.Sx && this.Fn & m.PE) c = d = Math.min(c, d); if (c != this.hc || d != this.ic) this.hc = c, this.ic = d, this.canvas.width =
                    Math.floor(this.hc * a), this.canvas.height = Math.floor(this.ic * b), this.context.VC(this.hc, this.ic); this.G && this.G.ti()
            }, xI: function () { var a = "Android;webOS;iPhone;iPad;iPod;Blackberry;Windows Phone;Touch".split(";"), b = navigator.userAgent, c; for (c in a) if (0 <= b.indexOf(a[c])) return !0; return "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? !0 : !1 }, Ai: function (a) { this.wq.yC(a); this.th++ }, hn: function (a) { this.sn.add(a); this.uh++; this.og = !0 }, Uo: function () {
                this.Vq && (this.Mn--, 0 >
                    this.Mn && (this.Mn = 1E9, this.Nn = new X, this.Nn.getFile(this.Vq + "info.dat", zc))); this.td = (new Date).getTime(); if (this.yJ(!1)) {
                        if (this.og) {
                            if (null == this.Qh) { var a = this.fg; this.uv ? (this.Qh = 0 == this.vo ? new Bc(this) : new Dc(this), 0 == this.vo && -1 != this.Fk && (a = this.Fk)) : this.Qh = new Cc(this); this.mC = !1; this.Mw = !0; null == this.Aa && (this.frame.$q ? this.context.nq(0, 0, this.canvas.width, this.canvas.height) : this.context.vc(0, 0, this.na, this.xa, a), this.ys()); return } if (null != this.Qh && 0 == this.mC) {
                                this.mC = this.Qh.load(); null ==
                                    this.Aa && this.ys(); return
                            } for (; 0 < this.sn.size() && this.wq.size() < this.gH;)a = this.sn.get(0), this.wq.add(a), this.sn.Co(0), a.xu(); this.Bc.iH(); a = !1; 0 == this.sn.size() && 0 == this.wq.size() && (a = !0); null == this.Qh || 0 == (this.Ca & m.ei) && 0 == (this.frame.Hi & E.ZE) || (this.Mw || (this.Qh.reset(), this.Mw = !0), this.Qh.step(), a = this.Qh.fv()); a && (this.Mw = !1, this.G.resume(), this.G.oh(), this.og = !1, this.ea.bf(), this.gf.bf(), this.Nb.bf(), this.th = this.uh = 0, this.cu && (this.cu = !1, 0 != this.G.yu() ? this.Za = m.Up : (this.Za = m.rl, this.mD(this.Sf),
                                this.Sf = null))); null == this.Aa && this.ys()
                        } else null == this.Aa && (null == this.ad ? (this.context.Zr(0 != (this.Ca & m.rx)), this.Lr ? this.context.fj(this.Lr, 0, 0, this.na, this.xa, 0, 0) : this.frame.$q ? this.context.nq(0, 0, this.na, this.xa) : this.context.vc(0, 0, this.na, this.xa, this.fg), a = this.context.Sa, this.bg && (bRestore = !0, a.save(), a.translate(this.eK, this.gK), 0 != this.NC && a.rotate(.0174532925 * -this.NC), a.scale(Math.max(.001, this.cK), Math.max(.001, this.dK)), a.translate(-this.fK, -this.hK)), this.ie.yb(this.context, 0, 0),
                            this.bg && a.restore(), this.xh && this.la.yb(this.context), this.px && (this.px--, this.Js || (a = new xa, a.sq(), a.bc = 16, this.Js = new ia(this, this.na, 30), this.Js.ZA(16711680), this.Js.qr(window.FusionVersion, n.Cj | n.fi, null, 16777215, a, 1, 10526880)), this.Js.yb(this.context, 0, 0, 0, 0))) : (this.context.Zr(), this.context.fj(this.ad, 0, 0, this.na, this.xa, 0, 0)), 0 != (this.Gn & m.NE) && window.requestAnimationFrame ? window.requestAnimationFrame(Ta) : (a = (new Date).getTime() - this.td, a = Math.max(1E3 / this.eA - a, 1), window.setTimeout(Ta, a)));
                        return !0
                    } this.Mz(); return !1
            }, Hz: function (a, b, c, d) { this.og || (this.context.Zr(0 != (this.Ca & m.rx)), null == this.ad ? (d || this.context.vc(b, c, this.ow, this.nw, this.fg), this.context.clip(b, c, this.ow, this.nw), this.ie.yb(this.context, 0, 0), this.context.HK()) : (this.context.Zr(), this.context.fj(this.ad, b, c, this.na, this.xa, 0, 0))) }, IG: function () { 0 == (this.Ca & m.ID) && (this.hasFocus ? this.du && (this.G.resume(), this.du = !1) : (this.G.pause(this.Gn & m.LE), this.du = !0)) }, yJ: function (a) {
                this.IG(); var b = !0, c = !0; do switch (this.Za) {
                    case m.Wp: if (this.kI(),
                        this.Bb = this.gx, this.Za = 1, this.AI(), a) { b = !1; break } case m.tl: this.zK(); break; case m.Lt: 0 == this.WI() ? (this.uH(), this.Za != m.sl && this.Za != m.Wp || this.wn()) : b = !1; break; case m.rl: this.G.yu(); 0 != this.G.ub ? this.xK() ? this.Za = m.Vp : this.wn() : b = !1; break; case m.Vp: 0 == this.XI() ? (this.Nz(), this.Za != m.sl && this.Za != m.Wp || this.wn()) : b = !1; break; case m.Up: this.wn(); break; default: b = !1
                } while (1 == b); this.Za == m.sl && (c = !1); return c
            }, Mz: function () { null != this.Bc && this.Bc.zs() }, zK: function () {
                this.Bb != this.xe && (this.frame = new E(this),
                    this.frame.OI(this.Bb)); this.fg = this.frame.NA; this.xe = this.Bb; this.frame.Ki = this.frame.Li = 0; this.frame.lv = this.frame.mv = 0; this.frame.LC = !1; this.mI(); var a; null != this.Aa ? this.Uf = this.Tf = 0 : (this.Tf = this.na / 2 - this.frame.Tn / 2, this.Uf = this.xa / 2 - this.frame.Sn / 2); for (a = 0; a < this.frame.nc; a++)this.frame.Ua[a].aH(this.Tf, this.Uf); this.frame.Pb & E.lF && (document.title = this.frame.cA); this.Lr = null; this.frame.Pb & E.mF && (this.Lr = this.Sf); this.frame.Pb & E.nF && (this.frame.$q = !0); this.G.lK(this.frame); this.G.lI(null !=
                        this.frame.zn); this.Za = m.rl; null != this.frame.zn ? this.og ? this.cu = !0 : 0 != this.G.yu() ? this.Za = m.Up : (this.Za = m.rl, this.mD(this.Sf), this.Sf = null) : this.Sf = null; this.og ? this.G.pause(!0) : this.G.oh()
            }, DC: function () { null != this.Aa ? this.Uf = this.Tf = 0 : (this.Tf = this.na / 2 - this.frame.Tn / 2, this.Uf = this.xa / 2 - this.frame.Sn / 2); var a; for (a = 0; a < this.frame.nc; a++)this.frame.Ua[a].YJ(this.Tf, this.Uf) }, wn: function () {
                var a; a = this.G.BI(!1); if (0 != (this.Gn & m.KE)) this.Za = m.sl; else switch (n.sF(a)) {
                    case 1: this.Bb = this.xe + 1; 1 == this.vo &&
                        this.Bb == this.Kr && this.Bb++; this.Za = m.tl; this.Bb >= this.xf && (this.Za = m.sl); break; case 2: this.Bb = Math.max(0, this.xe - 1); 1 == this.vo && this.Bb == this.Kr && (0 == this.Bb ? this.Bb = this.xe : this.Bb--); this.Za = m.tl; break; case 3: this.Za = m.tl; 0 != (n.tp(a) & 32768) ? (this.Bb = n.tp(a) & 32767, this.Bb >= this.xf && (this.Bb = this.xf - 1), 0 > this.Bb && (this.Bb = 0)) : n.tp(a) < this.Cn ? (this.Bb = this.Bn[n.tp(a)], -1 == this.Bb && (this.Bb = this.xe + 1)) : this.Bb = this.xe + 1; break; case 4: this.Za = m.Wp; this.Bb = this.gx; break; default: this.Za = m.sl
                }this.Za ==
                    m.tl && (0 > this.Bb || this.Bb >= this.xf) && (this.Za = this.xe); if (this.Za != m.tl || this.Bb != this.xe) { for (a = 0; a < this.frame.nc; a++)this.frame.Ua[a].zz(); this.frame = null; this.xe = -1 }
            }, Ru: function () { null == this.kx && (this.kx = new fd(this)); return this.kx }, mD: function (a) {
                var b, c, d = this.frame.zn; if (null != d) {
                    b = document.createElement("canvas"); b.width = this.na; b.height = this.xa; c = document.createElement("canvas"); c.width = this.na; c.height = this.xa; var e = new Ba(c); e.vc(0, 0, this.na, this.xa, this.fg); this.ie.yb(e, 0, 0); e = new Ba(b);
                    0 != (d.Xo & sa.Xp) ? e.vc(0, 0, this.na, this.xa, d.Wo) : (e.vc(0, 0, this.na, this.xa, this.dA), null != a && e.fj(a, 0, 0, a.width, a.height, 0, 0)); this.ad = document.createElement("canvas"); this.ad.width = this.na; this.ad.height = this.xa; this.ad.getContext("2d").drawImage(b, 0, 0); this.transition = this.Ru().Cl(d, this.ad, b, c); if (null != this.transition) return this.Za = m.Lt, !0
                } this.ad = null; this.Za = m.rl; this.G.mz(); return !1
            }, WI: function () { if (null != this.transition) { if (this.transition.Xq()) return !1; this.transition.Kb(u.Nt); return !0 } return !1 },
            uH: function () { null != this.transition && (this.transition.end(), this.ad = this.transition = null, this.Za == m.Lt && (this.Za = m.rl), this.G.mz()); return !0 }, xK: function () {
                var a, b, c = this.frame.Eu; if (null != c) {
                    a = document.createElement("canvas"); a.width = this.na; a.height = this.xa; b = document.createElement("canvas"); b.width = this.na; b.height = this.xa; var d = new Ba(a); d.vc(0, 0, this.na, this.xa, this.fg); this.ie.yb(d, 0, 0); d = new Ba(b); 0 != (c.Xo & sa.Xp) ? d.vc(0, 0, this.na, this.xa, c.Wo) : d.vc(0, 0, this.na, this.xa, 0); this.ad = document.createElement("canvas");
                    this.ad.width = this.na; this.ad.height = this.xa; this.ad.getContext("2d").drawImage(a, 0, 0); this.transition = this.Ru().Cl(c, this.ad, a, b); if (null != this.transition) return this.Za = m.Vp, !0
                } this.ad = null; return !1
            }, XI: function () { if (null != this.transition) { if (this.transition.Xq()) return this.Nz(), !1; this.transition.Kb(u.Yp) } return !0 }, Nz: function () { null != this.transition && (this.Sf = this.transition.m, this.transition.end(), this.ad = this.transition = null, this.Za == m.Vp && (this.Za = m.Up)); return !0 }, LI: function () {
                this.file.pa(4);
                this.Fn = this.file.o(); this.Gn = this.file.o(); this.file.o(); this.file.o(); this.na = this.file.o(); this.xa = this.file.o(); this.gA = this.file.s(); this.fA = this.file.s(); var a, b; this.dC = Array(m.Zf); for (a = 0; a < m.Zf; a++)this.dC[a] = this.file.o(); this.pw = Array(m.Zf * m.Zm); for (a = 0; a < m.Zf; a++)for (b = 0; b < m.Zm; b++)this.pw[a * m.Zm + b] = this.file.o(); this.dA = this.file.Yc(); this.xf = this.file.s(); this.eA = this.file.s(); this.file.pa(1); this.file.pa(3)
            }, RI: function () {
                this.bm = this.file.o(); this.Uu = Array(this.bm); this.wA = Array(this.bm);
                var a; for (a = 0; a < this.bm; a++)this.Uu[a] = this.file.s(); this.file.LJ(this.wA)
            }, QI: function () { this.fo = this.file.s(); this.Tu = Array(this.fo); var a; for (a = 0; a < this.fo; a++)this.Tu[a] = this.file.Hb() }, NI: function (a) { this.Cn = a / 2; this.Bn = Array(this.Cn); for (a = 0; a < this.Cn; a++)this.Bn[a] = this.file.o() }, XE: function (a) { return null == this.Bn || -1 == a || a >= this.Cn ? -1 : this.Bn[a] }, Ou: function (a) { if (this.Vu) { var b; for (b = 0; b < this.Vu.size(); b++)if (gFont = this.Vu.get(b), gFont.PG(a)) return gFont } return a }, AI: function () {
                this.pi =
                null
            }, kI: function () {
                var a; if (null == this.Aa || null != this.Aa && 0 == (this.Ck & J.QD)) for (this.Un = Array(m.Zf), a = 0; a < m.Zf; a++)this.Un[a] = this.fA ^ 4294967295; else this.Un = null; if (null == this.Aa || null != this.Aa && 0 == (this.Ck & J.SD)) for (this.Po = Array(m.Zf), a = 0; a < m.Zf; a++)this.Po[a] = this.gA ^ 4294967295; else this.Po = null; this.eC = Array(m.Zf); for (a = 0; a < m.Zf; a++)this.eC[a] = ""; if (null == this.Aa || null != this.Aa && 0 == (this.Ck & J.Bx)) for (this.En = Array(this.bm), a = 0; a < this.bm; a++)this.En[a] = this.Uu[a]; else this.En = null; if (null == this.Aa ||
                    null != this.Aa && 0 == (this.Ck & J.Bx)) for (this.Dn = Array(this.fo), a = 0; a < this.fo; a++)this.Dn[a] = this.Tu[a]; else this.Dn = null
            }, kA: function () { for (var a = this; null == a.Un;)a = this.Aa; return a.Un }, pA: function () { for (var a = this; null == a.Po;)a = this.Aa; return a.Po }, LH: function () { for (var a = this; null != a.Aa && 0 != (a.Ck & J.RD);)a = a.Aa; return a.pw }, RH: function () { for (var a = this; null == a.En;)a = a.Aa; return a.En }, QH: function () { for (var a = this; null == a.Dn;)a = a.Aa; return a.Dn }, $y: function (a) {
                var b = this.RH(); if (0 > a || 1E3 < a) return null;
                var c = b.length; if (a + 1 > c) for (; c < a + 1; c++)b.push(0); return b
            }, Nu: function (a) { var b = this.$y(a); return null != b ? b[a] : 0 }, nK: function (a, b) { var c = this.$y(a); null != c && (c[a] = b) }, Zy: function (a) { var b = this.QH(); if (0 > a || 1E3 < a) return null; var c = b.length; if (a + 1 > c) for (; c < a + 1; c++)b.push(""); return b }, iA: function (a) { var b = this.Zy(a); return null != b ? b[a] : "" }, mK: function (a, b) { var c = this.Zy(a); null != c && (c[a] = b) }, qH: function (a) {
                a && (this.zD.charCodeAt(this.Zo) == a.charCode ? (this.Zo++, this.Zo == this.zD.length && (this.px = 250,
                    this.Zo = 0)) : this.Zo = 0)
            }, Fz: function (a) { if (a) { var b = a.keyCode; this.pk = this.Nc[b] = !0; null != this.G && null != this.G.i && this.G.i.mJ(b); for (b = 0; b < this.ib.length; b++)this.ib[b].Fz(a) } }, Gz: function (a) { if (a) { this.Nc[a.keyCode] = !1; var b; for (b = 0; b < this.ib.length; b++)this.ib[b].Gz(a) } }, vs: function (a, b) { this.vj = a; this.xj = b }, Zn: function (a, b, c) {
                a.pageX ? (this.Gf = a.pageX, this.Hf = a.pageY) : a.clientY && (this.Gf = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, this.Hf = a.clientY + document.body.scrollTop +
                    document.documentElement.scrollTop); for (var d = 0, e = 0, f = b; f && "BODY" != f.tagName;)d += f.offsetTop, e += f.offsetLeft, f = f.offsetParent; this.Gf -= e + this.vj; this.Hf -= d + this.xj; this.Gf = Math.floor(this.Gf / this.hc); this.Hf = Math.floor(this.Hf / this.ic); null != this.G && null != this.G.i && this.G.i.$B(); for (d = 0; d < this.ib.length; d++)this.ib[d].Zn(a, b); this.tj || 305419896 == c || this.Cs(new Oa(a.pageX, a.pageY, this.canvas), !1)
            }, Dy: function (a) {
                if (a.which) switch (a.which) { case 2: return m.Ot; case 3: return m.Zp; default: return m.qf } else switch (a.button) {
                    case 2: return m.Zp;
                    case 4: return m.Ot; default: return m.qf
                }
            }, Jv: function (a) { var b = this.Dy(a); this.Zn(a, this.canvas, 305419896); this.Nc[b] = !1; for (b = 0; b < this.ib.length; b++)this.ib[b].Jv(a); this.tj || this.bl(new Oa(a.pageX, a.pageY, this.canvas), !1) }, Iv: function (a, b) {
                var c = this.Dy(a); this.Zn(a, this.canvas, 305419896); this.pk = !0; this.Nc[c] = !0; this.Lz(); if (null != this.G && null != this.G.i) if (b) { var d = Date.now(), e = null !== this.Hv && this.pB == c && d - this.Hv <= m.wF ? 2 : 1; this.pB = c; this.Hv = d; this.G.i.so(c - m.qf, e) } else this.iq.On ? this.G.i.so(c -
                    m.qf, 1) : this.G.i.so(c - m.qf, 0 == a.detail % 2 ? 2 : 1); for (c = 0; c < this.ib.length; c++)this.ib[c].Iv(a, b); this.tj || this.Ds(new Oa(a.pageX, a.pageY, this.canvas), !1); window.focus()
            }, qB: function (a) { this.Nc[m.qf] = !1; this.Nc[m.Ot] = !1; this.Nc[m.Zp] = !1; var b; for (b = 0; b < this.ib.length; b++)this.ib[b].qB(a); this.tj || this.bl(new Oa(a.pageX, a.pageY, this.canvas), !1) }, click: function (a) { if (this.iq.On) { var b; for (b = 0; b < this.ib.length; b++)this.ib[b].click(a) } }, xz: function (a) {
                if (this.iq.On) {
                    null != this.G && null != this.G.i && this.G.i.so(0,
                        2); var b; for (b = 0; b < this.ib.length; b++)this.ib[b].xz(a)
                }
            }, rB: function (a) { this.Az = "undefined" != typeof a.wheelDelta ? a.wheelDelta / 40 : -a.detail; null != this.G && null != this.G.i && this.G.nJ(this.Az) }, Lz: function () { this.iq.EA && null != this.To && "suspended" == this.To.state && this.To.resume() }, Ds: function (a, b) {
                this.Lz(); !this.Ln && this.Ke && (this.Ke.Dk(), this.Ke = null); if (null != this.jf) {
                    var c, d, e = b ? 1 : a.changedTouches.length; for (c = 0; c < e; c++) {
                        var f; b ? (f = a, f.identifier = a.pointerId) : f = a.changedTouches[c]; for (d = 0; d < m.bd; d++)if (this.jf[d] ==
                            m.Qj) { this.jf[d] = f.identifier; this.xi[d] = !1; for (o = 0; o < this.hf.size(); o++)if (this.hf.get(o).EK(f)) { this.xi[d] = !0; this.Nm[d] = o; break } if (!this.xi[d] && (this.Ng[d] = this.Hn(f), this.Og[d] = this.In(f), this.$n == m.Qj && f.identifier != m.Px)) for (this.$n = d, this.Gf = this.Ng[d], this.Hf = this.Og[d], this.pk = !0, this.Nc[m.qf] = !0, null != this.G && null != this.G.i && this.G.i.so(0, 1), d = 0; d < this.ib.length; d++)this.ib[d].Ds(a, b); break }
                    }
                }
            }, Cs: function (a, b) {
                if (null != this.jf) {
                    var c, d, e, f = b ? 1 : a.changedTouches.length; for (c = 0; c < f; c++) {
                        var g;
                        b ? (g = a, g.identifier = a.pointerId) : g = a.changedTouches[c]; for (d = 0; d < m.bd; d++)if (this.jf[d] == g.identifier) { if (this.xi[d]) this.hf.get(this.Nm[d]).tD(g); else { for (e = 0; e < this.hf.size(); e++)this.hf.get(e).tD(g); this.Ng[d] = this.Hn(g); this.Og[d] = this.In(g) } if (this.$n == d) for (this.Gf = this.Ng[d], this.Hf = this.Og[d], null != this.G && null != this.G.i && this.G.i.$B(), d = 0; d < this.ib.length; d++)this.ib[d].Cs(a, b); break }
                    }
                }
            }, bl: function (a, b) {
                this.Ln && this.Ke && (this.Ke.Dk(), this.Ke = null); if (null != this.jf) {
                    var c, d, e, f = b ? 1 : a.changedTouches.length;
                    for (c = 0; c < f; c++) { var g; b ? (g = a, g.identifier = a.pointerId) : g = a.changedTouches[c]; for (d = 0; d < m.bd; d++)if (this.jf[d] == g.identifier) { this.jf[d] = m.Qj; if (this.xi[d]) this.hf.get(this.Nm[d]).rD(g); else { for (e = 0; e < this.hf.size(); e++)this.hf.get(e).rD(g); this.Ng[d] = this.Hn(g); this.Og[d] = this.In(g) } if (d == this.$n) for (this.Gf = this.Ng[d], this.Hf = this.Og[d], this.$n = m.Qj, this.Nc[m.qf] = !1, e = 0; e < this.ib.length; e++)this.ib[e].bl(a, b) } }
                }
            }, Hn: function (a) {
                var b = a.pageX; for (a = a.target; a && "BODY" != a.tagName;)b -= a.offsetLeft,
                    a = a.offsetParent; return Math.floor((b - this.vj) / this.hc)
            }, In: function (a) { var b = a.pageY; for (a = a.target; a && "BODY" != a.tagName;)b -= a.offsetTop, a = a.offsetParent; return Math.floor((b - this.xj) / this.ic) }, OH: function (a) { if (null != this.dk) { var b; b = a.lastIndexOf("\\"); 0 > b && (b = a.lastIndexOf("/")); 0 <= b && (a = a.substring(b + 1)); for (b = 0; b < this.dk.length; b++)if (this.dk[b].path == a) return this.dk[b] } return null }, cx: function (a) { this.vz = a; this.canvas.style.cursor = 0 <= this.vz ? this.cursor : "none" }, nD: function (a, b) {
                null == this.la &&
                (this.la = new p(this), this.la.QA(), this.la.reset(b), this.xh = 1, null != this.frame && 0 != (this.frame.Hi & E.mt) ? (this.canvas.setAttribute("style", "-ms-touch-action: manipulation;"), this.canvas.setAttribute("style", "touch-action: manipulation;")) : (this.canvas.setAttribute("style", "-ms-touch-action: none;"), this.canvas.setAttribute("style", "touch-action: none;")), 0 > this.hf.indexOf(this.la) && this.hf.add(this.la))
            }, vK: function () { this.wK(); this.xh = 2 }, vH: function () {
                null != this.la && (1 == this.xh && this.hf.yC(this.la),
                    this.la = null); 2 == this.xh && this.sH(); this.xh = 0
            }, wK: function () { 0 == this.gn && window.DeviceMotionEvent && (this.Pt = this.rG.bind(this), window.addEventListener("devicemotion", this.Pt)); this.gn++ }, rG: function (a) {
                var b = a.acceleration.x / 9.780318, c = a.acceleration.y / 9.780318, d = a.accelerationIncludingGravity.x / 9.780318; a = a.accelerationIncludingGravity.y / 9.780318; this.Rj = b; this.Sj = c; this.jh = d; this.kh = a; switch (window.orientation) {
                    case 0: this.Rj = -b; this.Sj = c; this.jh = -d; this.kh = a; break; case 90: this.Rj = c; this.Sj = b; this.jh =
                        a; this.kh = d; break; case 180: this.Rj = b; this.Sj = -c; this.jh = d; this.kh = -a; break; case -90: this.Rj = -c, this.Sj = -b, this.jh = -a, this.kh = -d
                }this.Ln && (this.Rj = -this.Rj, this.Sj = -this.Sj, this.jh = -this.jh, this.kh = -this.kh)
            }, sH: function () { this.gn--; 0 >= this.gn && (window.DeviceMotionEvent && window.removeEventListener("devicemotion", this.Pt), this.gn = 0) }, Kq: function () { var a = 0; -.2 > this.jh && (a |= 4); .2 < this.jh && (a |= 8); -.2 > this.kh && (a |= 1); .2 < this.kh && (a |= 2); return a }, Au: function (a) {
                if (a.cl) {
                    null == this.Ke && (a.sD = 2); switch (a.sD) {
                        case 0: 0 <
                            a.Rf && (a.Rf -= 2, 0 > a.Rf && (a.Rf = 0, phase++)); break; case 2: 128 > a.Rf && (a.Rf += 4, 128 <= a.Rf && (a.Rf = 128, a.Bs = !0))
                    }this.context.vc(a.Zd.left, a.Zd.top, a.Zd.right - a.Zd.left, a.Zd.bottom - a.Zd.top, this.fg, 0, 0); a.cl.yb(this.context, a.Zd.left, a.Zd.top, v.kf, a.Rf); a.Bs && (a.cl = null, a.Zd = null, a.Mm = null)
                } else if (a.Bs = !0, null != this.Ke && 0 != (this.Ca & m.GD)) {
                    a.Mm = new xa; a.Mm.sq(); a.Mm.bc = 24; var b = a.Mm.bc + 6; a.cl = new ia(this, 120, b); var c = a.cl.measureText(this.zv, a.Mm) + 64; a.cl.resize(c, b); a.cl.ZA(); a.cl.qr(this.zv, n.fi | n.Cj, null,
                        16776960, a.Mm, 2, 0); a.Zd = new aa; a.Zd.left = this.na / 2 - c / 2; a.Zd.top = this.xa / 2 - b / 2; a.Zd.right = a.Zd.left + c; a.Zd.bottom = a.Zd.top + b; a.Rf = 128; a.sD = 0; a.Bs = !1; this.context.vc(0, 0, this.na, this.xa, this.fg, 0, 0)
                } return a.Bs
            }
        }; E.lF = 1; E.SM = 2; E.mF = 4; E.Yx = 32; E.UM = 256; E.TM = 2048; E.Kc = 32768; E.nF = 131072; E.ip = 0; E.ve = 1; E.UD = 1; E.VD = 2; E.sp = 6; E.bF = 1; E.cF = 2; E.dF = 4; E.mt = 8; E.ZE = 256; E.hF = 0; E.iF = 1; E.fF = 2; E.gF = 3; E.prototype = {
            OI: function (a) {
                this.app.file.seek(this.app.Ju[a]); this.yn = new O(this.app); this.ud = new Lc; this.ar = new aa; a =
                    0; var b; for (this.or = -1; 32639 != a;)if (a = this.app.file.o(), this.app.file.o(), b = this.app.file.s(), 0 != b) {
                        this.AJ = this.app.file.O + b; switch (a) {
                            case 13108: this.sv(); null != this.app.Aa && 0 != (this.app.Ck & J.PD) ? (this.Tn = this.app.dH, this.Sn = this.app.eH) : (this.Tn = Math.min(this.app.na, this.ge), this.Sn = Math.min(this.app.xa, this.Xc)); break; case 13128: var c = b / 6; this.Yn = Array(c); this.le = Array(c); this.me = Array(c); for (b = this.ke = 0; b < c; b++)this.Yn[b] = this.app.file.o(), this.ke = Math.max(this.ke, this.Yn[b]), this.le[b] = this.app.file.o(),
                                this.me[b] = this.app.file.o(); this.ke++; break; case 13130: this.la = this.app.file.o(); this.Hi = this.app.file.o(); break; case 13122: this.ar.load(this.app.file); break; case 13124: this.or = this.app.file.o(); break; case 13127: this.TA = this.app.file.s(); break; case 13109: this.cA = this.app.file.Hb(); break; case 13115: this.zn = new sa; this.zn.load(this.app.file); break; case 13116: this.Eu = new sa; this.Eu.load(this.app.file); break; case 13121: this.UI(); break; case 13125: this.TI(); break; case 13112: this.ud.load(this.app); break;
                            case 13117: this.yn.load(this.app), this.sg = this.yn.sg
                        }this.app.file.seek(this.AJ)
                    } this.app.Lc.bf(); for (b = 0; b < this.ud.If; b++)this.app.Lc.pj(this.ud.jA(b).Df); this.app.ea.bf(); this.app.gf.bf(); this.app.Nb.bf(); this.app.Lc.load(this.app.file); this.app.Lc.kc(this.app.ea, this.app.Nb); this.app.Ca & m.ei && (this.app.Nb.Ro(), this.app.gf.Ro(), this.app.ea.Ro()); this.app.ea.load(this.app.file); this.app.Nb.load(this.app.file); this.yn.xH(this.app.gf); this.app.gf.load(); this.app.Lc.XJ(); for (b = 0; b < this.ud.If; b++)a =
                        this.ud.list[b], a.cr >= r.we && this.app.Lc.qK(a.Df)
            }, UI: function () { this.nc = this.app.file.s(); this.Ua = Array(this.nc); var a; for (a = 0; a < this.nc; a++)this.Ua[a] = new T(this.app), this.Ua[a].load(this.app.file) }, TI: function () { var a; for (a = 0; a < this.nc; a++)this.Ua[a].Rd = this.app.file.s(), this.Ua[a].Sd = this.app.file.s(), this.app.file.pa(12) }, sv: function () { this.ge = this.app.file.s(); this.Xc = this.app.file.s(); this.NA = this.app.file.Yc(); this.Pb = this.app.file.s() }
        }; Z.dd = 32; Z.prototype = {
            uG: function (a) {
                null == this.ak && (this.ak =
                    new N); this.ak.add(a)
            }, iH: function () { if (null != this.ak && 0 < this.ak.size() && !this.uu) { var a = this.ak.get(0); this.ak.Co(0); this.uu = !0; var b = this; b.context.decodeAudioData(a.response, function (c) { a.buffer = c; a.response = null; b.app.Ai(a); b.uu = !1 }) } }, reset: function () { var a; for (a = 0; a < Z.dd; a++)this.kn[a] = !1 }, play: function (a, b, c, d) {
                if (0 != this.Ly) {
                    var e = this.app.gf.VH(a); if (null != e) {
                        0 == this.Zt && (c = 0); if (0 > c) {
                            for (a = 0; a < Z.dd && (null != this.qb[a] || 0 != this.kn[a]); a++); if (a == Z.dd) for (a = 0; a < Z.dd && (0 != this.kn[a] || null ==
                                this.qb[a] || 0 != this.qb[a].nn); a++); c = a; 0 <= c && c < Z.dd && (this.$o[c] = this.WA)
                        } if (!(0 > c || c >= Z.dd)) { if (null != this.qb[c]) { if (1 == this.qb[c].nn) return; this.qb[c] != e && (this.qb[c].stop(), this.qb[c] = null) } for (a = 0; a < Z.dd; a++)this.qb[a] == e && (this.qb[a].stop(), this.qb[a] = null); this.qb[c] = e; e.play(b, d, this.$o[c]) }
                    }
                }
            }, pK: function (a) { this.Zt = a }, zI: function () { var a; for (a = 0; a < Z.dd; a++)null != this.qb[a] && this.qb[a].vI() && this.app.gf.pj(this.qb[a].handle) }, zs: function () {
                var a; for (a = 0; a < Z.dd; a++)null != this.qb[a] && (this.qb[a].stop(),
                    this.qb[a] = null)
            }, pause: function () { var a; for (a = 0; a < Z.dd; a++)null != this.qb[a] && this.qb[a].ZH() }, resume: function () { var a; for (a = 0; a < Z.dd; a++)null != this.qb[a] && this.qb[a].$H() }, sK: function (a, b) { 0 > b && (b = 0); 100 < b && (b = 100); 0 <= a && a < Z.dd && (this.$o[a] = b, null != this.qb[a] && this.qb[a].rK(b)) }, KG: function () { var a; for (a = 0; a < Z.dd; a++)null != this.qb[a] && this.qb[a].JG() && (this.qb[a] = null) }
        }; Ac.prototype = {
            Ph: function () {
                var a = this.app.file.o(); this.path = this.app.file.Hb(a); a = this.path.lastIndexOf("\\"); 0 <= a && (this.path =
                    this.path.substring(a + 1)); this.length = this.app.file.s(); this.offset = this.app.file.O; this.app.file.pa(this.length)
            }, open: function () { return this.app.file.Uc(this.offset, this.length) }
        }; Bc.prototype = {
            load: function () { return this.hv }, reset: function () { this.gw = this.He = 0; this.qq = 25 }, step: function () {
                switch (this.He) {
                    case 0: -1 != this.app.Fk ? this.context.vc(0, 0, this.app.na, this.app.xa, this.app.Fk) : this.context.nq(0, 0, this.app.na, this.app.xa); this.context.fj(this.mg, this.bi - this.mg.width / 2, this.ci - this.mg.height /
                        2, this.mg.width, this.mg.height, 0, 0); this.He++; break; case 1: this.angle = this.app.th / this.app.uh * 2 * Math.PI; this.Fl(this.angle); this.app.th == this.app.uh && this.He++; break; case 2: 0 < this.qq && this.qq--; 0 == this.qq && this.He++; break; case 3: this.app.Au(this) && this.He++
                }
            }, fv: function () { return 4 == this.He }, Fl: function (a) {
                var b, c, d, e, f; for (b = this.gw; b <= a; b += .005) {
                    c = this.bi + Math.cos(b) * (this.$e - this.size); d = this.ci - Math.sin(b) * (this.$e - this.size); e = this.bi + Math.cos(b) * this.$e; f = this.ci - Math.sin(b) * this.$e; this.context.sd(c,
                        d, e, f, this.color, 1, 0, 0); var g; for (g = 0; 3 > g; g++)c = this.bi + Math.cos(b) * (this.$e - this.size - g), d = this.ci - Math.sin(b) * (this.$e - this.size - g), e = this.bi + Math.cos(b) * (this.$e - this.size - g - 1), f = this.ci - Math.sin(b) * (this.$e - this.size - g - 1), this.context.sd(c, d, e, f, this.color, 1, 0, 0), c = this.bi + Math.cos(b) * (this.$e + g), d = this.ci - Math.sin(b) * (this.$e + g), e = this.bi + Math.cos(b) * (this.$e + g + 1), f = this.ci - Math.sin(b) * (this.$e + g + 1), this.context.sd(c, d, e, f, this.color, 1, 0, 0)
                } this.gw = a
            }
        }; Cc.prototype = {
            load: function () { return !0 },
            reset: function () { this.Pr = !1; this.He = 0; this.alpha = 128; this.position = 0 }, step: function () {
                if (this.app.th < this.app.uh) switch (this.He) { case 0: 0 < this.alpha && (this.alpha -= 2, 0 >= this.alpha && (this.alpha = 0, this.He++)) } else switch (this.He) { case 0: case 1: this.He = 2; break; case 2: 128 > this.alpha && (this.alpha += 4); 128 <= this.alpha && (this.alpha = 128, null == this.app.Ke ? this.Pr = !0 : this.He++); break; default: this.Pr = this.app.Au(this); return }this.context.vc(this.rect.left, this.rect.top, this.width, this.height, this.EG, v.kf, this.alpha);
                this.context.Yr(this.rect.left, this.rect.top, this.width, this.height, this.borderColor, 1, v.kf, this.alpha); this.position = this.app.th / this.app.uh * (this.width - 2); this.context.vc(this.rect.left + 1, this.rect.top + 1, this.position, this.height - 2, this.FG, v.kf, this.alpha)
            }, fv: function () { return this.Pr && this.app.th == this.app.uh }
        }; Dc.prototype = {
            load: function () { this.step(); return !this.B.og }, reset: function () {
                this.B.G.Sz(); this.B.G.jv(); this.B.G.Ns(!1); this.B.G.rm(-1, !1); this.B.G.i.Gs(); this.B.G.Lu(); this.B.G.Mu();
                this.B.G.w.Ki = this.B.G.w.lv = this.B.G.Ok = 0; this.B.G.w.Li = this.B.G.w.mv = this.B.G.Pk = 0; this.B.DC(); this.B.G.Ut(); this.B.G.cv(); this.B.G.rm(-1, !1); this.B.G.sw(); this.B.G.ru(!1); this.B.G.Bu(); this.B.G.rv(); this.B.G.i.tw(); this.B.G.i.gq(this.B.G); this.B.G.Du(); this.B.G.jq(); this.B.G.ub = 0; this.B.G.Hm = 0; this.B.$h = !1; this.app.ib.push(this.B); this.El = 0
            }, step: function () {
                this.B.$h || (this.AK && (this.B.$h = this.app.th == this.app.uh), 0 == this.B.Uo() && (this.B.$h = !0), this.B.Hz(this.context, this.Ec.x, this.Ec.y, !1)); this.B.$h &&
                    this.app.Ke && this.app.Au(this)
            }, fv: function () { var a = this.B.$h; this.app.Ke && (a = !1); if (a) { if (0 < this.El && (this.El--, 0 < this.El)) return !1; var b; for (b = 0; b < this.app.ib.length; b++)if (this.app.ib[b] == this.B) { this.app.ib.splice(b, 1); break } } return a }
        }; p.Da = 0; p.Ic = 1; p.Jc = 2; p.Xx = -1; p.bd = 3; p.ki = 1; p.Wf = 2; p.Xf = 4; p.Wx = 8; p.ji = 16; p.RM = 2147483648; p.jF = 70; p.mE = .25; p.prototype = {
            QA: function () {
                null == this.zb && (this.zb = W.Uc(this.app, "joyback.png"), this.Zq = W.Uc(this.app, "joyfront.png")); null == this.Tl && 0 != (this.app.frame.Hi &
                    E.mt) && (this.Tl = W.Uc(this.app, "joyup.png"), this.LA = W.Uc(this.app, "joyupd.png"), this.Pn = W.Uc(this.app, "joydown.png"), this.IA = W.Uc(this.app, "joydownd.png"), this.nk = W.Uc(this.app, "joyleft.png"), this.JA = W.Uc(this.app, "joyleftd.png"), this.iv = W.Uc(this.app, "joyright.png"), this.KA = W.Uc(this.app, "joyrightd.png")); null == this.kd && (this.kd = W.Uc(this.app, "fire1U.png"), this.Ud = W.Uc(this.app, "fire2U.png"), this.Xz = W.Uc(this.app, "fire1D.png"), this.Yz = W.Uc(this.app, "fire2D.png"))
            }, reset: function (a) {
                this.ma = a; null !=
                    this.zb && 0 != this.zb.width ? this.TC() : this.au = !0; this.ng = p.jF * Math.PI / 180
            }, TC: function () {
                var a, b; a = this.app.na; b = this.app.xa; this.Qn = 0 != (this.ma & p.ji) ? Math.ceil(Math.sqrt(this.nk.width * this.nk.width + this.Tl.height * this.Tl.height)) : Math.ceil(Math.sqrt(this.zb.width / 2 * this.zb.width / 2 + this.zb.height / 2 * this.zb.height / 2)); this.MA = p.mE * this.Qn; 0 == (this.ma & p.Wx) ? (0 != (this.ma & p.ki) && (0 != (this.ma & p.ji) ? (this.bb[p.Da] = 16 + this.nk.width, this.cb[p.Da] = b - 16 - this.Pn.height) : (this.bb[p.Da] = 16 + this.zb.width / 2, this.cb[p.Da] =
                    b - 16 - this.zb.height / 2)), 0 != (this.ma & p.Wf) && 0 != (this.ma & p.Xf) ? (this.bb[p.Ic] = a - this.kd.width / 2 - 32, this.cb[p.Ic] = b - this.kd.height / 2 - 16, this.bb[p.Jc] = a - this.Ud.width / 2 - 16, this.cb[p.Jc] = b - this.Ud.height / 2 - this.kd.height - 24) : 0 != (this.ma & p.Wf) ? (this.bb[p.Ic] = a - this.kd.width / 2 - 16, this.cb[p.Ic] = b - this.kd.height / 2 - 16) : 0 != (this.ma & p.Xf) && (this.bb[p.Jc] = a - this.Ud.width / 2 - 16, this.cb[p.Jc] = b - this.Ud.height / 2 - 16)) : (0 != (this.ma & p.ki) && (0 != (this.ma & p.ji) ? (this.bb[p.Da] = a - 16 - this.nk.width, this.cb[p.Da] = b - 16 - this.Pn.height) :
                        (this.bb[p.Da] = a - 16 - this.zb.width / 2, this.cb[p.Da] = b - 16 - this.zb.height / 2)), 0 != (this.ma & p.Wf) && 0 != (this.ma & p.Xf) ? (this.bb[p.Ic] = this.kd.width / 2 + 16 + 2 * this.Ud.width / 3, this.cb[p.Ic] = b - this.kd.height / 2 - 16, this.bb[p.Jc] = this.Ud.width / 2 + 16, this.cb[p.Jc] = b - this.Ud.height / 2 - this.kd.height - 24) : 0 != (this.ma & p.Wf) ? (this.bb[p.Ic] = this.kd.width / 2 + 16, this.cb[p.Ic] = b - this.kd.height / 2 - 16) : 0 != (this.ma & p.Xf) && (this.bb[p.Jc] = this.Ud.width / 2 + 16, this.cb[p.Jc] = b - this.Ud.height / 2 - 16))
            }, Yb: function (a, b) {
                0 != (a & p.ki) ? this.bb[p.Da] =
                    b : 0 != (a & p.Wf) ? this.bb[p.Ic] = b : 0 != (a & p.Xf) && (this.bb[p.Jc] = b)
            }, jc: function (a, b) { 0 != (a & p.ki) ? this.cb[p.Da] = b : 0 != (a & p.Wf) ? this.cb[p.Ic] = b : 0 != (a & p.Xf) && (this.cb[p.Jc] = b) }, yb: function (a) {
                this.au && (this.au = !1, this.TC()); var b, c; if (0 != (this.ma & p.ki)) if (0 != (this.ma & p.ji)) {
                    var d = this.la & 1 ? this.LA : this.Tl; b = this.bb[p.Da] - d.width / 2; c = this.cb[p.Da] - d.height; a.rd(d, b, c, 0, 1, 1, 0, 0); d = this.la & 2 ? this.IA : this.Pn; b = this.bb[p.Da] - d.width / 2; c = this.cb[p.Da]; a.rd(d, b, c, 0, 1, 1, 0, 0); d = this.la & 4 ? this.JA : this.nk; b = this.bb[p.Da] -
                        d.width; c = this.cb[p.Da] - d.height / 2; a.rd(d, b, c, 0, 1, 1, 0, 0); d = this.la & 8 ? this.KA : this.iv; b = this.bb[p.Da]; c = this.cb[p.Da] - d.height / 2; a.rd(d, b, c, 0, 1, 1, 0, 0)
                } else b = this.bb[p.Da] - this.zb.width / 2, c = this.cb[p.Da] - this.zb.height / 2, a.rd(this.zb, b, c, 0, 1, 1, 0, 0), b = this.bb[p.Da] + this.Bf - this.Zq.width / 2, c = this.cb[p.Da] + this.Cf - this.Zq.height / 2, a.rd(this.Zq, b, c, 0, 1, 1, 0, 0); 0 != (this.ma & p.Wf) && (d = 0 == (this.la & 16) ? this.kd : this.Xz, b = this.bb[p.Ic] - d.width / 2, c = this.cb[p.Ic] - d.height / 2, a.rd(d, b, c, 0, 1, 1, 0, 0)); 0 != (this.ma & p.Xf) &&
                    (d = 0 == (this.la & 32) ? this.Ud : this.Yz, b = this.bb[p.Jc] - d.width / 2, c = this.cb[p.Jc] - d.height / 2, a.rd(d, b, c, 0, 1, 1, 0, 0))
            }, wD: function (a, b) {
                this.Bf = a - this.bb[p.Da]; this.Cf = b - this.cb[p.Da]; 0 == (this.ma & p.ji) && (this.Bf < -this.zb.width / 4 && (this.Bf = -this.zb.width / 4), this.Bf > this.zb.width / 4 && (this.Bf = this.zb.width / 4), this.Cf < -this.zb.height / 4 && (this.Cf = -this.zb.height / 4), this.Cf > this.zb.height / 4 && (this.Cf = this.zb.height / 4)); var c = (2 * Math.PI - Math.atan2(this.Cf, this.Bf)) % (2 * Math.PI); this.la &= 240; var d = Math.sqrt(this.Bf *
                    this.Bf + this.Cf * this.Cf); if (d > this.MA && d <= this.Qn) {
                        this.Bf = Math.cos(c) * this.Qn / 2; this.Cf = Math.sin(c) * -this.Qn / 2; d = 0; if (0 <= c) for (; ;) {
                            if (this.vh(c, 0, this.ng) || this.vh(c, 2 * Math.PI, this.ng)) { d = 8; break } if (this.vh(c, Math.PI / 2, this.ng)) { d = 1; break } if (this.vh(c, Math.PI, this.ng)) { d = 4; break } if (this.vh(c, Math.PI / 4 * 6, this.ng)) { d = 2; break } if (this.vh(c, Math.PI / 4, Math.PI / 2 - this.ng)) { d = 9; break } if (this.vh(c, Math.PI / 4 * 3, Math.PI / 2 - this.ng)) { d = 5; break } if (this.vh(c, Math.PI / 4 * 5, Math.PI / 2 - this.ng)) { d = 6; break } if (this.vh(c,
                                Math.PI / 4 * 7, Math.PI / 2 - this.ng)) { d = 10; break } break
                        } this.la |= d
                    }
            }, EK: function (a) { var b = !1, c = this.app.Hn(a), d = this.app.In(a), e = this.getKey(c, d); e != p.Xx && (this.touches[e] = a.identifier, e == p.Da && (this.la &= 240, b = !0, 0 != (this.ma & p.ji) && this.wD(c, d)), e == p.Ic ? (this.la |= 16, b = !0) : e == p.Jc && (this.la |= 32, b = !0)); return b }, tD: function (a) { var b = this.app.Hn(a), c = this.app.In(a); this.getKey(b, c) == p.Da && (this.touches[p.Da] = a.identifier); this.touches[p.Da] == a.identifier && this.wD(b, c) }, vh: function (a, b, c) {
                return a > b - c / 2 && a <
                    b + c / 2
            }, rD: function (a) { var b; for (b = 0; b < p.bd; b++)if (this.touches[b] == a.identifier) { this.touches[b] = 0; switch (b) { case p.Da: this.Cf = this.Bf = 0; this.la &= 240; break; case p.Ic: this.la &= -17; break; case p.Jc: this.la &= -33 }break } }, getKey: function (a, b) {
                if (0 != (this.ma & p.ki)) if (0 != (this.ma & p.ji)) { if (a >= this.bb[p.Da] - this.nk.width && a < this.bb[p.Da] + this.iv.width && b > this.cb[p.Da] - this.Tl.height && b < this.cb[p.Da] + this.Pn.height) return p.Da } else if (a >= this.bb[p.Da] - this.zb.width / 2 && a < this.bb[p.Da] + this.zb.width / 2 && b > this.cb[p.Da] -
                    this.zb.height / 2 && b < this.cb[p.Da] + this.zb.height / 2) return p.Da; return 0 != (this.ma & p.Wf) && a >= this.bb[p.Ic] - this.kd.width / 2 && a < this.bb[p.Ic] + this.kd.width / 2 && b > this.cb[p.Ic] - this.kd.height / 2 && b < this.cb[p.Ic] + this.kd.height / 2 ? p.Ic : 0 != (this.ma & p.Xf) && a >= this.bb[p.Jc] - this.Ud.width / 2 && a < this.bb[p.Jc] + this.Ud.width / 2 && b > this.cb[p.Jc] - this.Ud.height / 2 && b < this.cb[p.Jc] + this.Ud.height / 2 ? p.Jc : p.Xx
            }, Kq: function () { return this.la }
        }; h.xM = 2; h.GE = 4; h.Ym = 16; h.HE = 32; h.JE = 64; h.IE = 128; h.jt = 512; h.aM = 2; h.cM = 4; h.eM = 8; h.bM =
            16; h.$L = 32; h.fM = 64; h.dM = 128; h.gM = 256; h.Qx = 480; h.Rx = 300; h.Tm = 64; h.Um = 16; h.YO = 1; h.$O = 2; h.ZO = 4; h.Jt = 1; h.nO = 2; h.mO = 4; h.oO = 8; h.qy = 0; h.Mp = 1; h.ag = 2; h.Gt = 3; h.KF = 4; h.ZD = 1; h.Sm = 2; h.Vs = 4; h.Fx = 8; h.yp = 10; h.xp = 1; h.ot = 2; h.wp = 3; h.$x = 4; h.XM = 5; h.YM = 6; h.VM = 7; h.ZM = 8; h.WM = 9; h.vp = -2; h.qF = 100; h.rF = 101; h.Ug = 1; h.Vg = 2; h.Wg = 4; h.Tg = 8; h.ND = 15; h.qt = 128; h.mf = 2147483647; h.dt = 1110591041; h.Mt = 1110594637; h.WF = 1110600435; h.pt = 1110874198; h.Tp = 1110634490; h.Rm = 1110590791; h.wJ = [0, 0, 0, 0, 255, 0, 0, 0, 255, 255, 0, 0, 255, 255, 255, 0, 255, 255, 255, 255];
    h.By = [0, h.Ug, h.Vg, 0, h.Wg, h.Wg + h.Ug, h.Wg + h.Vg, 0, h.Tg, h.Tg + h.Ug, h.Tg + h.Vg, 0, 0, 0, 0, 0]; h.Ky = !1; h.zl = function (a, b, c) { switch (c) { case 0: return a == b; case 1: return a != b; case 2: return a <= b; case 3: return a < b; case 4: return a >= b; case 5: return a > b }return !1 }; h.fz = function (a, b, c) { switch (c) { case 0: return a == b; case 1: return a != b; case 2: return a <= b; case 3: return a < b; case 4: return a >= b; case 5: return a > b }return !1 }; h.UP = function (a) { a = a.Ea >= r.Yf ? a.ext.oA() : a.gg(); null == a && (a = new Ya); return a }; h.DQ = function (a, b, c) {
        a.Ea >=
        r.Yf ? a.ext.UC(b, c) : a.Zk(b, c)
    }; h.WP = function (a) { return a.Ea >= r.Yf ? 0 : a.Iq() }; h.EQ = function (a, b) { a.Ea >= r.Yf || a.ts(b) }; h.iJ = function (a) { null != a.F && (a.F.Uv(), a.F.W |= v.ih, a.F.ns = 0) }; h.hJ = function (a) { null != a.F && (a.F.yr(), a.F.W &= ~v.ih, a.F.ns = 0) }; h.Yb = function (a, b) { null != a.A ? a.A.ra.Yb(b) : a.u != b && (a.u = b, null != a.b && (a.b.L = !0, a.b.Oa = !0)) }; h.jc = function (a, b) { null != a.A ? a.A.ra.jc(b) : a.v != b && (a.v = b, null != a.b && (a.b.L = !0, a.b.Oa = !0)) }; h.aQ = function (a, b) {
        if (0 == a) return 0 <= b ? 24 : 8; if (0 == b) return 0 <= a ? 0 : 16; var c, d = !1, e =
            !1; 0 > a && (d = !0, a = -a); 0 > b && (e = !0, b = -b); c = 256 * a / b; var f; for (f = 0; !(c >= D.gl[f]); f += 2); c = D.gl[f + 1]; e && (c = -c + 32 & 31); d && (c = (-(c - 8 & 31) & 31) + 8 & 31); return c
    }; h.prototype = {
        lK: function (a) { this.w = a }, Ut: function () {
            this.H = Array(this.w.sg); this.i = this.w.yn; this.re = 0; var a; for (a = this.h.Lc.hA(); null != a; a = this.h.Lc.mA())a.Ge >= r.we && this.re++; this.Ow = -1 == this.w.or ? this.h.td & 65535 : this.w.or; this.Tk = Array(Math.round(this.w.sg / 32 + 1)); this.Rk = new N; this.Eg = this.w.sg; this.Ww = this.i.LB; this.w.Ki = 0; this.w.Li = 0; this.ca = this.w.Ki;
            this.da = this.w.Li; this.ls = this.ks = 0; this.Jd = this.w.ar.right; -1 == this.Jd && (this.Jd = 2147479552); this.Kd = this.w.ar.bottom; -1 == this.Kd && (this.Kd = 2147479552); this.Xw = this.ub = this.tb = 0; this.Gc &= h.IE; this.Gc |= h.GE; this.Em = 0; this.fs = Array(h.yp); this.lj = null; this.Gc |= h.JE; this.Fa = Array(h.qt); this.Fm = Array(h.qt); this.gs = new va; this.gs.code = 0; this.bs = Array(4); this.Nw = Array(4); this.as = Array(4); this.Sc = Array(4); for (a = this.xc = 0; a < h.yp; a++)this.fs[a] = 50; this.eu = this.Qr = !1; this.w.LC = !0
        }, Mu: function () {
            this.w.LC = !1;
            this.lj = this.Rk = this.Tk = this.S = this.H = null; var a; for (a = 0; a < h.qt; a++)this.Fa[a] = 0; this.gs = null
        }, lI: function (a) {
            this.Ut(); this.h.xh = 0; if (null == this.h.Aa && this.h.tj) if (this.w.la == E.gF) null == this.h.la && (this.h.la = new p(this.h), this.h.la.QA()), this.h.la.reset(0), this.h.nD(); else if (this.w.la != E.hF) {
                var b = 0; 0 != (this.w.Hi & E.bF) && (b = p.Wf); 0 != (this.w.Hi & E.cF) && (b |= p.Xf); 0 != (this.w.Hi & E.dF) && (b |= p.Wx); 0 != (this.w.Hi & E.mt) && (b |= p.ji); this.w.la == E.iF && (b |= p.ki); 0 != (b & (p.Wf | p.Xf | p.ki)) && (this.h.nD(b), this.h.la.reset(b));
                this.w.la == E.fF && this.h.vK()
            } this.Uw = 255; a && (this.Gc |= h.Ym); this.cv(); this.rm(-1, !1); this.sw(); this.Ib = 0; this.ru(a); this.Bu(); this.gI(); this.rv(); this.i.tw(); this.i.gq(this); this.gD(); this.jq(); this.Hm = 0; this.Du(); this.eu = !1
        }, yu: function () {
            if (0 < this.Pf && null == this.h.Ff) this.Qr && (1 == this.h.pk && (0 <= this.hs ? this.h.Nc[this.hs] && (this.resume(), this.ub = 0, this.i.Ae(-458755)) : this.h.pk && (this.resume(), this.ub = 0, this.i.Ae(-458755))), this.h.pk = !1), null != this.Or && this.Or.cI(), a = this.ub; else {
                this.h.Xt |= m.wx;
                var a = this.FH(); this.h.Xt &= ~m.wx; 0 != (this.Gc & h.Ym) && (this.Tz = (new Date).getTime() - this.Vk, this.Ns(!0), this.i.Gs())
            } if (a == h.xp || a == h.ot || a == h.wp) { this.h.Sf = document.createElement("canvas"); this.h.Sf.width = this.h.na; this.h.Sf.height = this.h.xa; var b = new Ba(this.h.Sf); this.h.frame.$q ? b.nq(0, 0, this.na, this.xa) : b.vc(0, 0, this.na, this.xa, this.fg); b.vc(0, 0, this.h.na, this.h.xa, this.h.fg); this.h.ie.yb(b, 0, 0) } if (0 != a) switch (a) {
                case 5: this.pause(); this.h.pk = !1; this.Qr = !0; a = 0; break; case 101: if (this.w.BP) break;
                    this.Sz(); this.jv(); this.Ns(!1); this.rm(-1, !1); this.i.Gs(); this.Lu(); this.Mu(); this.w.Ki = this.w.lv = this.Ok = 0; this.w.Li = this.w.mv = this.Pk = 0; this.h.DC(); this.Ut(); this.cv(); this.rm(-1, !1); this.sw(); this.ru(!1); this.Bu(); this.rv(); this.i.tw(); this.i.gq(this); this.Du(); this.gD(); this.jq(); this.Hm = a = 0; break; case 100: case -2: this.i.Ae(-196611)
            }return this.ub = a
        }, BI: function (a) {
            var b; 100 < this.ub && (this.ub = h.vp); b = this.Hm; this.bK(); this.jv(); this.Ns(a); this.i.Gs(); this.Mu(); this.Lu(); this.rm(-1, !0); this.h.vH();
            return n.uF(this.ub, b)
        }, cv: function () { var a; for (a = 0; a < this.Eg; a++)this.H[a] = null }, sw: function () {
            var a, b; this.Gc |= h.HE; this.Gc |= h.jt; var c = this.Do = 0; this.S = Array(this.re); this.Uk = 0; for (a = this.h.Lc.hA(); null != a; a = this.h.Lc.mA())if (b = a.Ge, b >= r.we) {
                this.S[c] = new I; this.S[c].XG(a); this.S[c].ro = -1; if (b == r.fh || b == r.oy) for (b = this.w.ud.Fq(); null != b; b = this.w.ud.jo())if (b.Df == this.S[c].Qc) { this.S[c].ro = b.Mi; break } c++; a = a.oc; if (0 != (a.vg & w.gh) && null != a.ug) for (b = 0; b < a.ug.ho; b++) {
                    var d = a.ug.Cd[b]; d.Ov == S.CF && (this.Uk |=
                        1 << d.$l - 1)
                }
            } for (c = 0; c < this.w.nc; c++)this.w.Ua[c].Qv = 1; return 0
        }, mz: function () { var a, b, c, d, e; this.Gc &= ~h.Ym; c = 0; for (e = this.w.ud.Fq(); null != e; c++, e = this.w.ud.jo())if (a = this.h.Lc.ik(e.Df), b = a.oc, a = a.Ge, !(a < r.Yf) && 0 == (b.vg & w.uy) && (d = h.Fx, e.ov == ya.wy)) { if (0 == (b.Ri & w.Np)) { if (a != r.fh) continue; d |= h.Sm } 0 == (b.vg & w.ry) && this.Cu(e.Mi, e.Df, 2147483648, 2147483648, -1, d, -1, -1) } this.i.gq(this); this.Vk = (new Date).getTime() - this.Tz }, ru: function (a) {
            var b, c, d, e, f; d = 0; for (f = this.w.ud.Fq(); null != f; d++, f = this.w.ud.jo())if (b =
                this.h.Lc.ik(f.Df), c = b.oc, b = b.Ge, e = h.Fx, f.ov == ya.wy) { b == r.fh && (e |= h.Vs); if (0 == (c.Ri & w.Np)) { if (b == r.oy) continue; e |= h.Sm } a && b >= r.Yf && 0 == (c.vg & w.uy) || 0 == (c.vg & w.ry) && this.Cu(f.Mi, f.Df, 2147483648, 2147483648, -1, e, -1, -1) } this.Gc &= ~h.jt
        }, jv: function () { var a; for (a = 0; a < this.Eg && 0 != this.tb; a++)if (null != this.H[a]) { var b = this.H[a]; (32 > b.Ea || b.N.uc != h.Rm) && this.Dq(a, !0) } for (a = 0; a < this.Eg && 0 != this.tb; a++)null != this.H[a] && (b = this.H[a], 32 <= b.Ea && b.N.uc == h.Rm && this.Dq(a, !0)) }, Ns: function (a) {
            a || (0 == (this.h.Gn & m.ME) ?
                this.h.Bc.zs() : this.h.Bc.zI())
        }, rm: function (a, b) { var c, d; d = -1 == a ? this.w.nc : a + 1; for (c = 0; c < d; c++) { var e = this.w.Ua[c]; e.reset(); e.lH(); b && e.zz() } }, jq: function () { 0 != this.Uk && this.QC(-1) }, Lu: function () { 0 != this.Uk && this.QC(0) }, QC: function (a) { 0 <= a ? this.h.cx(1) : this.h.cx(-1) }, gD: function () { this.h.cx(1) }, St: function (a) { var b, c; for (c = 0; c < this.Rk.size() && (b = this.Rk.get(c), !n.rb(b.name, a)); c++); c == this.Rk.size() && (b = new nb, this.Rk.add(b), c = this.Rk.size() - 1, b.name = a, b.ma = 0); return c }, bK: function () {
            var a, b, c, d,
            e, f; for (c = 0; c < this.S.length; c++)if (b = this.S[c], f = b.nb, 32767 != b.Qc && 0 == (f & 2147483648) && (d = this.h.Lc.ik(b.Qc), 0 != (d.Lh & r.vy) && (a = this.H[f], b.Gd == r.fh || b.Gd == r.dn || null != a.M))) {
                e = b.Zi + b.Gd.toString(); null == this.h.pi && (this.h.pi = new N); var g = !1; d = null; for (a = 0; a < this.h.pi.size(); a++)if (d = this.h.pi.get(a), e == d.name) { g = !0; break } 0 == g ? (d = new ge, d.name = e, d.Kf = new N, this.h.pi.add(d)) : d.Kf.clear(); for (; ;) {
                    a = this.H[f]; if (b.Gd == r.fh) f = new ie, f.text = a.Jm, f.ob = a.ob, d.Kf.add(f); else if (b.Gd == r.dn) f = new he, f.value =
                        a.sa, f.ob = a.ob, f.Hc = a.Hc, f.qs = a.qs, f.ps = a.ps, d.Kf.add(f); else { e = new je; e.ma = a.M.Yk; e.values = Array(a.M.Qa.length); for (f = 0; f < a.M.Qa.length; f++)e.values[f] = a.M.Qa[f]; e.Xa = Array(a.M.Ld.length); for (f = 0; f < a.M.Ld.length; f++)e.Xa[f] = a.M.Ld[f]; d.Kf.add(e) } f = a.$b; if (0 != (f & 2147483648)) break
                }
            }
        }, rv: function () {
            var a, b, c, d, e, f; if (null != this.h.pi) for (c = 0; c < this.S.length; c++)if (b = this.S[c], a = b.nb, 32767 != b.Qc && 0 <= a && (e = this.h.Lc.ik(b.Qc), 0 != (e.Lh & r.vy))) for (f = b.Zi + b.Gd.toString(), d = 0; d < this.h.pi.size(); d++)if (e = this.h.pi.get(d),
                f == e.name) { for (d = 0; ;) { a = this.H[a]; if (b.Gd == r.fh) f = e.Kf.get(d), a.Jm = f.text, a.ob = f.ob, a.b.L = !0, a.fP = !0; else if (b.Gd == r.dn) f = e.Kf.get(d), a.sa = f.value, a.ob = f.ob, a.Hc = f.Hc, a.qs = f.qs, a.ps = f.ps, a.dP = !0, a.b.L = !0; else { f = e.Kf.get(d); a.M.Yk = f.ma; a.M.Fi(f.values.length); a.M.aI(f.Xa.length); var g; for (g = 0; g < f.values.length; g++)a.M.Qa[g] = f.values[g]; for (g = 0; g < f.Xa.length; g++)a.M.Ld[g] = f.Xa[g] } a = a.$b; if (0 != (a & 2147483648)) break; d++; if (d >= e.Kf.size()) break } break }
        }, Cu: function (a, b, c, d, e, f, g, k) {
            for (; ;) {
                var q = new Ec,
                m = null; -1 != a && (m = this.w.ud.SH(a)); var n = this.h.Lc.ik(b), p = n.oc; 0 == (p.Ri & w.Np) && (f |= h.Sm); if (this.tb >= this.Eg) break; var l = null, r = new G; switch (n.Ge) { case 2: l = new Sc; break; case 3: l = new Wc; break; case 4: l = new Xc; break; case 5: l = new Uc; break; case 6: l = new Vc; break; case 7: l = new ca; break; case 8: break; case 9: l = new J; break; default: l = new Yc(n.Ge, this), null == l.ext && (l = null) }if (null == l) break; l.prototype = r; l.KI = m; if (0 > k) for (k = 0; k < this.Eg && null != this.H[k]; k++); if (k >= this.Eg) break; this.H[k] = l; this.tb++; l.hI = p.uc; l.ua =
                    p.vg; k > this.IC && this.Qw++; l.Vb = k; this.Do++; 0 == this.Do && (this.Do = 1); l.Xu = this.Do; l.Ue = b; l.Sq = a; l.Ea = n.Ge; this.kJ(l); l.c = this; l.Jn = !0; l.N = p; 0 == (l.ua & w.sy) && (l.ua &= ~w.Lj, 0 != (l.Te & I.Pp) && 0 != (this.w.Pb & E.Yx) && (l.ua |= w.Lj), 0 != (l.Te & (I.Nd | I.Qp)) && (l.ua |= w.Lj)); a = c; 2147483648 == a && (a = m.pv); q.NG = a; l.u = a; 2147483648 == d && (d = m.qv); q.OG = d; l.v = d; null != m && -1 == g && (g = m.OA); q.dz = g; l.Vd = g; g = this.w.Ua[g]; g.Qv++; q.ez = g.Qv; q.on = f; q.cz = e; q.MG = m; l.b = null; 0 != (l.ua & (w.Kj | w.gh | w.Mj)) && (l.b = new Tc, l.b.Y()); l.A = null; 0 != (l.ua & w.gh) &&
                        (l.A = new Da, 0 == (q.on & h.ZD) && l.A.Y(0, l, p, q, -1)); l.$ = null; 0 != (l.ua & w.Kj) && (l.$ = new Fa, l.$.Y(l)); l.F = null; 0 != (l.ua & w.Mj) && (l.F = new v, l.F.iI(l, p, q)); l.M = null; 0 != (l.ua & w.RF) && (l.M = new Ia, l.M.Y(l, p, q)); l.Y(p, q); 0 != (l.ua & w.Mj) && l.F.bv(!0); 1 <= this.Ib && l.oh(); return k
            } return -1
        }, Dq: function (a, b) { var c = this.H[a]; if (null != c) { if (1 != b || 0 != c.Xu) this.CI(c), null != c.A && c.A.Fb(b), null != c.M && c.M.Fb(b), null != c.F && c.F.Fb(b), null != c.b && c.b.Fb(b), c.Fb(b), this.jJ(c); this.H[a] = null; this.tb-- } }, eg: function (a) {
            this.Tk[Math.floor(a /
                32)] |= 1 << (a & 31); this.Go++
        }, nH: function () { if (0 != this.Go) for (var a = 0, b, c; a < this.Eg;) { b = this.Tk[a / 32]; if (0 != b) { for (c = this.Tk[a / 32] = 0; 0 != b && 32 > c; c++) { if (0 != (b & 1)) { var d = this.H[a + c]; null != d && 1 == d.ac.Yi && this.i.nd(d, d.Ea | -2162688); this.Dq(a + c, !1); this.Go-- } b >>= 1 } if (0 == this.Go) break } a += 32 } }, CI: function (a) { var b = 0, c, d; for (c = 0; c < this.tb; c++) { for (; null == this.H[b];)b++; d = this.H[b]; b++; null != d.A && d.b.Rc == S.AF && (d = d.A.ra, d.ll == a && 1 == d.Cp && d.kD()) } }, oh: function () {
            var a, b, c; for (c = a = 0; a < this.tb; a++) {
                for (; null == this.H[c];)c++;
                c++
            } for (c = a = 0; a < this.tb; a++) { for (; null == this.H[c];)c++; b = this.H[c]; c++; b.oh() }
        }, kJ: function (a) { var b = a.Ue, c; for (c = 0; c < this.re && this.S[c].Qc != b; c++); b = this.S[c]; 0 != (b.nb & 2147483648) ? (b.nb = a.Vb, a.lg = c | 2147483648, a.$b = 2147483648) : (c = this.H[b.nb], a.lg = c.lg, c.lg = a.Vb, a.$b = c.Vb, b.nb = a.Vb); a.Yu = b.ew; a.ac = b; a.Te = b.Fd; -1 == a.Sq ? a.Sq = b.ro : -1 == b.ro && (b.ro = a.Sq); b.Yi += 1 }, jJ: function (a) {
            var b = a.ac; --b.Yi; var c; 0 == (a.lg & 2147483648) ? (c = this.H[a.lg], 0 == (a.$b & 2147483648) ? (b = this.H[a.$b], null != c && (c.$b = a.$b), null !=
                b && (b.lg = a.lg)) : null != c && (c.$b = 2147483648)) : 0 == (a.$b & 2147483648) ? (c = this.H[a.$b], null != c && (c.lg = a.lg, b.nb = c.Vb)) : b.nb = 2147483648
        }, lE: function () {
            var a = this.Tx(); if (null != a) {
                var b = 0, c; for (c = 0; c < this.tb; b++, c++) { for (; null == this.H[b];)b++; var d = this.H[b]; 32 <= d.Ea && (d.N.uc == h.dt || d.N.uc == h.Mt || d.N.uc == h.WF || d.N.uc == h.Tp || d.N.uc == h.pt ? d.ext.GJ() : d.N.uc == h.Rm && d.ext.GJ()) } for (c = b = 0; c < this.tb; b++, c++) {
                    for (; null == this.H[b];)b++; d = this.H[b]; if (0 != (d.ua & w.gh)) {
                        var e = !1; if (d.b.Rc == S.Jj) {
                            var f = d.N.ug.Cd[d.A.Yw];
                            if (n.rb(f.Oc, "box2d8directions") || n.rb(f.Oc, "box2dspring") || n.rb(f.Oc, "box2dspaceship") || n.rb(f.Oc, "box2dstatic") || n.rb(f.Oc, "box2dracecar") || n.rb(f.Oc, "box2daxial") || n.rb(f.Oc, "box2dplatform") || n.rb(f.Oc, "box2dbouncingball") || n.rb(f.Oc, "box2dbackground")) e = !0
                        } 0 == e && 2 == d.Ea && a.FJ(d)
                    }
                } for (c = b = 0; c < this.tb; b++, c++)for (; null == this.H[b];)b++
            }
        }, Tx: function () {
            if (0 == this.GC) {
                this.GC = !0; this.Xh = null; var a = 0, b; for (b = 0; b < this.tb; a++, b++) {
                    for (; null == this.H[a];)a++; var c = this.H[a]; if (32 <= c.Ea && c.N.uc == h.Rm) {
                        this.Xh =
                        c.ext; break
                    }
                }
            } return this.Xh
        }, rp: function (a) { if (a && 0 == (a.X & G.lf) && 0 != (a.ua & w.gh) && a.b.Rc == S.Jj) { var b = a.N.ug.Cd[a.A.Yw]; if (n.rb(b.Oc, "box2d8directions") || n.rb(b.Oc, "box2dspring") || n.rb(b.Oc, "box2dspaceship") || n.rb(b.Oc, "box2dstatic") || n.rb(b.Oc, "box2dracecar") || n.rb(b.Oc, "box2daxial") || n.rb(b.Oc, "box2dplatform") || n.rb(b.Oc, "box2dbouncingball") || n.rb(b.Oc, "box2dbackground")) return a.A.ra.Dd } return null }, yG: function (a) {
            if (a.N.uc == h.dt || a.N.uc == h.Mt || a.N.uc == h.pt || a.N.uc == h.Tp) {
                var b = 0, c; for (c = 0; c < this.tb; b++,
                    c++) { for (; null == this.H[b];)b++; var d = this.H[b]; 32 <= d.Ea && d.N.uc == h.Rm && (a.N.uc == h.dt ? a.ext.identifier == d.ext.identifier && d.ext.CP.add(a.ext) : a.N.uc == h.Mt ? a.ext.identifier == d.ext.identifier && d.ext.IQ.add(a.ext) : a.N.uc == h.pt ? a.ext.identifier == d.ext.identifier && d.ext.eQ.add(a.ext) : a.N.uc == h.Tp && a.ext.identifier == d.ext.identifier && d.ext.wQ.add(a.ext)) } if (a.N.uc != h.Tp) for (c = b = 0; c < this.tb; b++, c++) { for (; null == this.H[b];)b++; d = this.H[b]; d.Ea == r.we && (d = this.rp(d)) && a.ext.nQ(d) }
            }
        }, Ub: function (a) {
            return null !=
                a.A && null != a.A.ra ? a.A.ra.Ub() : a.b.Va
        }, pause: function (a) { if (0 == this.Pf) { this.Pf = 1; this.EC = this.h.td; var b = 0, c; for (c = 0; c < this.tb; c++) { for (; null == this.H[b];)b++; b++ } a || this.h.Bc.pause() } }, resume: function () { if (!this.fJ && 0 != this.Pf) { this.Pf = 0; this.jq(); var a = 0, b; for (b = 0; b < this.tb; b++) { for (; null == this.H[a];)a++; a++ } this.h.Bc.resume(); a = this.h.td; a -= this.EC; this.Vk += a; this.hs = 0; this.Qr = !1 } }, Sz: function () { this.h.Bc.zs() }, ti: function () {
            var a = 0, b; for (b = 0; b < this.tb; b++) {
                for (; null == this.H[a];)a++; var c = this.H[a];
                a++; c.ti()
            }
        }, dg: function (a, b, c) { a = this.MK(a, b, c); return null != a ? a.top : h.mf }, MK: function (a, b, c) { b -= this.ca; c -= this.da; var d; -1 == a ? (d = 0, a = this.w.nc) : (d = a, a += 1); for (; d < a; d++) { var e = this.w.Ua[d].TH(b, c); if (null != e) return e } return null }, Du: function () {
            this.Vk = this.h.td; this.Go = this.Xw = this.ub = this.Ib = this.Fg = 0; var a; for (a = 0; a < (this.Eg + 31) / 32; a++)this.Tk[a] = 0; this.um = this.w.Tn; this.vm = this.w.Sn; this.zm = -h.Qx; this.Dm = -h.Rx; this.xm = this.Jd + h.Qx; this.Bm = this.Kd + h.Rx; this.Ok = a = this.ca; a -= h.Tm; 0 > a && (a = this.zm);
            this.ym = a; this.Pk = a = this.da; a -= h.Um; 0 > a && (a = this.Dm); this.Cm = a; a = this.ca; a += this.um + h.Tm; a > this.Jd && (a = this.xm); this.wm = a; a = this.da; a += this.vm + h.Um; a > this.Kd && (a = this.Bm); this.Am = a; for (a = this.Pf = this.Gm = this.Pw = this.Qk = 0; 4 > a; a++)this.Sc[a] = 0, this.bs[a] = 0, this.as[a] = 255; this.Mk = 0; this.i.hu = !1; this.i.Fo = !1; this.hs = 0; this.Xh = null; this.GC = !1; this.Rw = this.ds = this.cs = this.HC = null; for (a = 0; a < h.yp; a++)this.fs[a] = 20; this.Em = 0
        }, FH: function () {
            this.h.Bc.KG(); if (null != this.h.Aa && this.h.og) return this.Vk = this.h.td,
                this.Fg = 0, this.ub; if (null != this.h.Ff) return this.h.Ff.handle(), 0; this.eu || (this.lE(), this.eu = !0); var a = this.h.td - this.Vk, b = this.Fg; this.Fg = a; this.Io = a -= b; this.Gm += a; this.Ib += 1; this.xc = this.Io * this.w.TA / 1E3; this.fs[this.Em] = a; this.Em++; this.Em >= h.yp && (this.Em = 0); for (a = 0; 4 > a; a++)this.bs[a] = this.Sc[a]; this.yI(); 1 == this.h.xh ? this.Sc[0] |= this.h.la.Kq() & this.Uw : 2 == this.h.xh && (this.Sc[0] |= this.h.Kq() & this.Uw); if (0 != this.Uk) for (this.Pu(), this.Mk = 0, this.h.Nc[m.qf] && (this.Mk |= 16), this.h.Nc[m.Zp] && (this.Mk |=
                    32), a = 0; a < this.Ww; a++)0 != (this.fQ & 1) && (b = this.Sc[a] & 207, b |= this.Mk, this.Sc[a] = b); else this.Pu(); for (a = 0; 4 > a; a++)if (b = this.Sc[a] & h.wJ[4 * this.Ww + a], b &= this.as[a], this.Sc[a] = b, b ^= this.bs[a], this.Nw[a] = b, 0 != b) if (b &= this.Sc[a], 0 != (b & 240)) this.i.JC = a, b = this.Nw[a], 0 != (b & 240) && (this.i.yc = b, this.i.Ae(-196615)), 0 != (b & 15) && (this.i.yc = b, this.i.Ae(-196615)); else { var c = this.i.cc[this.i.Je[-r.ny] + 4]; 0 != c && (this.i.yc = b, this.i.Ne(c, null)) } if (0 != this.tb) {
                        a = this.tb; b = 0; do {
                            for (this.Qw = 0; null == this.H[b];)b++; c = this.H[b];
                            c.yA = c.Rq; c.Rq = null; c.Jn && (this.IC = b, c.handle()); a += this.Qw; b++; a--
                        } while (0 != a)
                    } this.qe++; this.i.VG(); this.i.fI(); this.i.KC && 0 == (this.Gc & h.Ym) && this.i.Ne(0, null); this.i.eI(); this.nH(); this.doScroll(); this.i.$r = -1; this.Pw++; if (0 == this.ub) return this.Xw; this.ub != h.xp && this.ub != h.ot && this.ub != h.vp && this.ub != h.wp && this.ub != h.qF && this.ub != h.$x || this.i.Ae(-65539); return this.ub
        }, yI: function () {
            var a; for (a = 0; 4 > a; a++)this.Sc[a] = 0; var b = this.h.LH(); for (a = 0; 4 > a; a++) {
                var c; for (c = 0; c < m.Zm; c++)this.h.Nc[b[a * m.Zm +
                    c]] && (this.Sc[a] |= 1 << c)
            }
        }, Pu: function () { this.ij = this.h.Gf + this.ca - this.h.Tf; this.jj = this.h.Hf + this.da - this.h.Uf }, Jf: function (a) {
            a.A.P = !1; h.Ky = !1; a.A.Lo = 0; var b, c; 0 != (a.Te & I.Qp) && (b = this.Bw(a.b.Gw, a.b.Iw, a.b.Hw, a.b.Jw), 0 != b && (c = this.Bw(a.u - a.ha, a.v - a.ia, a.u - a.ha + a.K, a.v - a.ia + a.J), 0 == c && (b ^= c, 0 != b && (a.A.Lo |= Da.tE, this.i.yc = b, this.i.nd(a, -720896 | a.Ea & 65535)))), b = this.Bw(a.u - a.ha, a.v - a.ia, a.u - a.ha + a.K, a.v - a.ia + a.J), 0 != (b & a.A.Zw) && (c = a.A.P, 0 != (b & h.Ug) ? a.A.ra.Yb(a.u + this.Jd) : 0 != (b & h.Vg) && a.A.ra.Yb(a.u -
                this.Jd), 0 != (b & h.Wg) ? a.A.ra.jc(a.v + this.Kd) : 0 != (b & h.Tg) && a.A.ra.jc(a.v - this.Kd), a.b.Rc != S.Ft && a.b.Rc != S.Jj && (a.A.P = c)), b = this.Gk(a.b.Gw, a.b.Iw, a.b.Hw, a.b.Jw), b != h.ND && (c = this.Gk(a.u - a.ha, a.v - a.ia, a.u - a.ha + a.K, a.v - a.ia + a.J), b = ~b & c, 0 != b && (a.A.Lo |= Da.uE, this.i.yc = b, this.i.nd(a, -786432 | a.Ea & 65535)))); 0 != (a.Te & I.Pp) && (a.b.Rc == S.Ft ? a.A.ra.eJ() : this.pn(a, a.b.Pa, a.b.hb, a.b.Cb, a.b.Db, a.u, a.v, 0, E.ve) && this.i.nd(a, -851968 | a.Ea & 65535)); if (0 != (a.Te & I.fn) && (b = this.em(a, a.b.Pa, a.b.hb, a.b.Cb, a.b.Db, a.u, a.v, a.ac.Wi),
                    null != b)) for (c = 0; c < b.size(); c++) { var d = b.get(c); if (0 == (d.X & G.lf)) { var e = a.Ea, f = a, g = d; f.Ea > g.Ea && (f = d, g = a, e = f.Ea); this.i.yc = g.Ue; this.i.ZJ = g.Vb; this.i.nd(f, -917504 | e & 65535) } } return h.Ky
        }, em: function (a, b, c, d, e, f, g, k) {
            var q = null; f -= a.ha; var h = f + a.K; g -= a.ia; var m = g + a.J, n, l; if (0 != (a.X & G.Xg) || 0 != (a.X & G.lf)) return q; var p = !1, u = null, w = -1; a.Ea == r.we && 0 == (a.F.W & v.Nj) && (p = !0); a.Ea == r.we && (w = a.F.Im); var A = a.X; a.X |= G.Xg; var H = 0, z, R, C; if (null != k) for (H = 0; H < k.length; H += 2)for (var t = this.S[k[H + 1]].nb; 0 == (t & 2147483648);) {
                if (z =
                    this.H[t], t = z.$b, 0 == (z.X & G.Xg) && 0 == (z.X & G.lf) && (R = z.u - z.ha, C = z.v - z.ia, R < h && R + z.K > f && C < m && C + z.J > g)) switch (z.Ea) {
                        case r.we: (0 > w || 0 <= w && w == z.F.Im) && 0 != (z.F.W & v.Oj) && (0 == p || 0 != (z.F.W & v.Nj) ? (null == q && (q = new N), q.add(z)) : (null == u && (l = this.h.ea.Ob(b), null != l && (u = l.Af(0, c, d, e))), l = this.h.ea.Ob(z.b.Pa), null != l && (n = l.Af(0, z.b.hb, z.b.Cb, z.b.Db)), null != u && null != n && u.rj(f, g, 0, n, R, C, 0) && (null == q && (q = new N), q.add(z)))); break; case r.fh: case r.dn: case r.ly: case r.py: case r.jy: null == q && (q = new N); q.add(z); break; default: null ==
                            q && (q = new N), q.add(z)
                    }
            } else for (k = 0; k < this.tb; k++) {
                for (; null == this.H[H];)H++; z = this.H[H]; H++; if (0 == (z.X & G.Xg) && (R = z.u - z.ha, C = z.v - z.ia, R < h && R + z.K > f && C < m && C + z.J > g)) switch (z.Ea) {
                    case r.we: (0 > w || 0 <= w && w == z.F.Im) && 0 != (z.F.W & v.Oj) && (0 == p || 0 != (z.F.W & v.Nj) ? (null == q && (q = new N), q.add(z)) : (null == u && (l = this.h.ea.Ob(b), null != l && (u = l.Af(0, c, d, e))), l = this.h.ea.Ob(z.b.Pa), null != l && (n = l.Af(0, z.b.hb, z.b.Cb, z.b.Db)), null != u && null != n && u.rj(f, g, 0, n, R, C, 0) && (null == q && (q = new N), q.add(z)))); break; case r.fh: case r.dn: case r.ly: case r.py: case r.jy: null ==
                        q && (q = new N); q.add(z); break; default: null == q && (q = new N), q.add(z)
                }
            } a.X = A; return q
        }, pn: function (a, b, c, d, e, f, g, k, q) { b = this.w.Ua[a.Vd]; switch (a.Ea) { case r.we: if (0 == (a.F.W & v.Nj)) { if (a = this.h.ea.Ob(a.b.Pa), null != a) return a = a.Af(F.Ej, c, d, e), null != b.rj(a, f - this.ca, g - this.da, k, q) } else return f = f - a.ha - this.ca, g = g - a.ia - this.da, c = f + a.K, a = g + a.J, k = null != b.As(f, g, c, a, k, q); return !1; default: return f = f - a.ha - this.ca, g = g - a.ia - this.da, c = f + a.K, a = g + a.J, k = null != b.As(f, g, c, a, k, q) } }, Gk: function (a, b, c, d) {
            var e = 0; 0 > a && (e |= h.Ug);
            0 > b && (e |= h.Wg); c > this.Jd && (e |= h.Vg); d > this.Kd && (e |= h.Tg); return h.By[e]
        }, Bw: function (a, b, c, d) { var e = 15; a < this.Jd && (e &= ~h.Vg); b < this.Kd && (e &= ~h.Tg); 0 < c && (e &= ~h.Ug); 0 < d && (e &= ~h.Wg); return h.By[e] }, random: function (a) { var b = 31415 * this.Ow + 1; this.Ow = b &= 65535; return b * a >>> 16 }, vA: function (a) { if (0 == a || -1 == a) return this.random(32); var b, c = 0, d = 0, e = a; for (b = 0; 32 > b; b++)0 != (e & 1) && (d++, c = b), e >>>= 1; if (1 == d) return c; d = this.random(d); e = a; for (b = 0; 32 > b; b++) { if (0 != (e & 1) && (d--, 0 > d)) return b; e >>>= 1 } return 0 }, hg: function (a) {
            this.Sk =
            a.Ga; this.Id = 0; this.sh = !1; return this.getExpression()
        }, lc: function (a) { this.Sk = a.Ga; this.Id = 0; this.sh = !1; return this.getExpression() }, Oq: function (a) { this.Sk = a.Ga; this.Id = 0; this.sh = !1; return this.getExpression() }, Su: function () { this.sh = !1; var a = this.getExpression(); return 0 > a ? Math.ceil(a) : Math.floor(a) }, getExpression: function () {
            var a, b = this.ga; this.Fm[this.ga] = this.gs; do {
                this.ga++; this.ln = !0; this.Sk[this.Id].evaluate(this); this.ln = !1; this.Id++; do if (a = this.Sk[this.Id], 0 < a.code && 1310720 > a.code) a.code >
                    this.Fm[this.ga - 1].code ? (this.Fm[this.ga] = a, this.Id++, this.ga++, this.ln = !0, this.Sk[this.Id].evaluate(this), this.ln = !1, this.Id++) : (this.ga--, this.Fm[this.ga].evaluate(this)); else { this.ga--; if (this.ga == b) break; this.Fm[this.ga].evaluate(this) } while (1)
            } while (this.ga > b + 1); return this.Fa[b + 1]
        }, lA: function (a, b) {
            var c = this.i.Re(a); if (null == c) return b ? !0 : !1; var d = this.i.ye, e = 0, f, g, k, q, h, m, n = new N; for (f = 0; f < this.tb; f++) {
                for (; null == this.H[e];)e++; g = this.H[e]; e++; k = g.u - g.ha; q = g.v - g.ia; h = k + g.K; m = q + g.J; this.ij >=
                    k && this.ij < h && this.jj >= q && this.jj < m && 0 == (g.X & G.lf) && (g.Ea == r.we ? 0 == (g.F.W & v.Nj) ? this.h.ea.Ob(g.b.Pa).Af(F.Ej, 0, 1, 1).qD(this.ij - g.u, this.jj - g.v, g.b.hb, g.b.Cb, g.b.Db) && n.add(g) : n.add(g) : n.add(g))
            } if (0 == n.size()) return b ? !0 : !1; if (0 == b) { do { for (e = 0; e < n.size() && (g = n.get(e), g != c); e++); e == n.size() && (d--, this.i.jd()); c = this.i.ze() } while (null != c); return 0 != d } do { for (e = 0; e < n.size(); e++)if (g = n.get(e), g == c) return !1; c = this.i.ze() } while (null != c); return !0
        }, DA: function (a) {
            var b = !1, c = 0; if (0 != (a.ua & w.Kj)) {
                if (null != a.F &&
                    a.F.jI()) return; null != a.$ && a.$.mh(A.fl) && (c = 1)
            } 0 == c && (b = !0); b ? (a.Jn = !1, this.eg(a.Vb)) : (null != a.F && (a.F.ss(!1), a.X |= G.Xg), null != a.A && (a.A.Fb(!1), a.A.nI(a, S.BF, !1), a.b.Z = 0), 0 != (c & 1) && (a.$.fq(A.fl), a.$.Wt()))
        }, Bu: function () {
            var a, b = new aa, c; for (c = 0; c < this.w.nc; c++) {
                var d = this.w.Ua[c], e = 0 != (d.Ca & T.ft), f = 0 != (d.Ca & T.gt), g = d.ur, k; for (k = 0; k < g; k++) {
                    a = this.w.ud.jA(d.wr + k); a.cr < r.we && (b.left = a.pv, b.top = a.qv); var q; q = new ga(this.h, b.left, b.top, a, null, 0); q.ed(0, d); e ? (q = new ga(this.h, this.w.ge + b.left, b.top, a, null,
                        0), q.ed(1, d), b.left + q.width > this.w.ge && (q = new ga(this.h, b.left - this.w.ge, b.top, a, null, 0), q.ed(4, d)), f && (q = new ga(this.h, b.left, this.w.Xc + b.top, a, null, 0), q.ed(2, d), q = new ga(this.h, this.w.ge + b.left, this.w.Xc + b.top, a, null, 0), q.ed(3, d), b.top + q.height > this.w.Xc && (q = new ga(this.h, b.left, b.top - this.w.Xc, a, null, 0), q.ed(5, d)))) : f && (q = new ga(this.h, b.left, this.w.Xc + b.top, a, null, 0), q.ed(2, d), b.top + q.height > this.w.Xc && (q = new ga(this.h, b.left, b.top - this.w.Xc, a, null, 0), q.ed(5, d)))
                }
            }
        }, iK: function () {
            for (var a, b =
                this.Ok, c = this.Pk, d, e, f = 0; f < this.w.nc; f++) { a = this.w.Ua[f]; d = b; e = c; 0 != (a.Ca & (T.ht | T.it)) && (0 != (a.Ca & T.ht) && (d *= a.uj), 0 != (a.Ca & T.it) && (e *= a.wj)); d += a.Wr; e += a.Xr; d += a.bk; e += a.ck; var g = 0 != (a.Ca & T.gt); 0 != (a.Ca & T.ft) && (d %= this.w.ge); g && (e %= this.w.Xc); a.x = d; a.y = e; a.Wr += a.bk; a.Xr += a.ck; a.fc.x = -d + this.h.Tf; a.fc.y = -e + this.h.Uf; a.Gb.x = -d + this.h.Tf; a.Gb.y = -e + this.h.Uf; a.Ma.x = -d + this.h.Tf; a.Ma.y = -e + this.h.Uf } this.w.Ki = b; this.w.Li = c
        }, gI: function () { var a; for (a = 0; a < this.w.nc; a++) { var b = this.w.Ua[a]; b.Ca & T.qp && b.Qq() } },
        kK: function (a, b, c, d) { a -= Math.floor(this.um / 2); b -= Math.floor(this.vm / 2); -1 != c && c < this.w.nc && (c = this.w.Ua[c], 1 < c.uj && (a -= this.ca, a /= c.uj, a = n.zd(this.ca + a)), 1 < c.wj && (b -= this.da, b /= c.wj, b = n.zd(this.da + b))); 0 > a && (a = 0); 0 > b && (b = 0); c = a + this.um; var e = b + this.vm; c > this.Jd && (c = this.Jd - this.um, 0 > c && (c = 0), a = c); e > this.Kd && (e = this.Kd - this.vm, 0 > e && (e = 0), b = e); 0 != (d & 1) && a != this.ca && (this.Ok = a, this.Qk |= h.Jt); 0 != (d & 2) && b != this.da && (this.Pk = b, this.Qk |= h.Jt) }, KK: function (a, b) {
            var c = !1; this.ks = a - this.ca; this.ls = b - this.da;
            if (0 != this.ks || 0 != this.ls) c = !0; var d; if (!c) for (var e = 0; e < this.w.nc; e++)if (d = this.w.Ua[e], 0 != d.bk || 0 != d.ck) { c = !0; break } var e = this.ca, f = this.da, g = this.ks, k = this.ls; this.ca = a; this.ym = a - h.Tm; 0 > this.ym && (this.ym = this.zm); this.da = b; this.Cm = b - h.Um; 0 > this.Cm && (this.Cm = this.Dm); this.wm = a + this.um + h.Tm; this.wm > this.Jd && (this.wm = this.xm); this.Am = b + this.vm + h.Um; this.Am > this.Kd && (this.Am = this.Bm); if (c) for (var q = c = 0; q < this.tb; q++) {
                for (; null == this.H[c];)c++; var m = this.H[c]; c++; if (0 != (m.ua & w.QF)) null == m.A ? (m.u += g,
                    m.v += k) : (m.A.ra.Yb(m.u + g), m.A.ra.jc(m.v + k)); else if (d = m.Vd, d < this.w.nc) { var n = e, p = f, l = a, r = b; d = this.w.Ua[d]; 0 != (d.Ca & T.ht) && (n *= d.uj, l *= d.uj); 0 != (d.Ca & T.it) && (p *= d.wj, r *= d.wj); n = m.u + n - l + g - d.bk; d = m.v + p - r + k - d.ck; 0 == (m.ua & w.gh) ? (m.u = n, m.v = d) : (m.A.ra.Yb(n), m.A.ra.jc(d)); m.Kl() }
            }
        }, doScroll: function () {
            if (0 != (this.Qk & h.Jt)) {
                this.Qk = 0; var a = this.w.Ki != this.Ok || this.w.Li != this.Pk; if (!a) for (var b = 0; b < this.w.nc; b++)if (0 != this.w.Ua[b].bk || 0 != this.w.Ua[b].ck) { a = !0; break } if (a) for (this.iK(), this.KK(this.w.Ki, this.w.Li),
                    b = 0; b < this.w.nc; b++)this.w.Ua[b].bk = 0, this.w.Ua[b].ck = 0; this.Ok = this.ca; this.Pk = this.da
            }
        }, $p: function (a, b, c, d, e, f) {
            d = this.w.Ua[d]; var g = new ga(this.h, b - this.ca + d.x, c - this.ca + d.y, null, a, e); g.ed(0, d); !f || e != Y.Mp && e != Y.ag || null == this.Xh || (g.body = this.Xh.mQ(pHo.u - this.ca + d.x, pHo.v - this.da + d.y, pHo.b.Pa, e)); f = 0 != (d.Ca & T.gt); 0 != (d.Ca & T.ft) ? (g = new ga(this.h, this.w.ge + b - this.ca + d.x, c - this.da + d.y, null, a, e), g.ed(1, d), b + g.width > this.w.ge && (g = new ga(this.h, b - this.ca + d.x - this.w.ge, c - this.da + d.y, null, a, e), g.ed(4,
                d)), f && (g = new ga(this.h, b - this.ca + d.x, this.w.Xc + c - this.da + d.y, null, a, e), g.ed(2, d), g = new ga(this.h, this.w.ge + b - this.ca + d.x, this.w.Xc + c - this.da + d.y, null, a, e), g.ed(3, d), c + g.height > this.w.Xc && (g = new ga(this.h, b - this.ca + d.x, c - this.da + d.y - this.w.Xc, null, a, e), g.ed(5, d)))) : f && (g = new ga(this.h, b - this.ca + d.x, this.w.Xc + c - this.da + d.y, null, a, e), g.ed(2, d), c + g.height > this.w.Xc && (g = new ga(this.h, b - this.ca + d.x, c - this.da + d.y - this.w.Xc, null, a, e), g.ed(5, d)))
        }, nJ: function (a) { 0 > a ? this.i.Ae(-720902) : this.i.Ae(-655366) },
        Vz: function (a) { var b, c; if (0 != this.tb) for (b = 0; b < this.Eg; b++)if ((c = this.H[b]) && c.ac.Zi == a) return this.Hu = c.ac.Yi - 1, c; return null }, Wz: function (a) { if (a && this.Hu) { var b = a.Vb + 1; a = a.ac.Zi; for (var c; ;) { c = this.H[b]; if (null != c && c.ac.Zi == a) return this.Hu--, c; b++ } } this.Hu = 0; return null }
    }; Ec.Sm = 2; I.eO = 15; I.UF = 16; I.fn = 128; I.Nd = 256; I.Pp = 512; I.Qp = 1024; I.fO = 2048; I.Rp = 4096; I.TF = 65535; I.prototype = {
        XG: function (a) {
            this.Qc = a.po; this.Gd = a.Ge; var b = a.oc; this.YB = b.Ri; this.XB = a.Zv; this.WB = a.$v; this.Dr = b.vg; this.qd = 0; this.nb =
                -1; this.Fd = I.TF; null != a.aw && (this.Zi = a.aw); this.im = Array(8); for (a = 0; 8 > a; a++)this.im[a] = b.Wv[a]
        }
    }; ba.zF = 0; ba.lN = 1; ba.oN = 2; ba.mN = 3; ba.iN = 4; ba.jN = 5; ba.kN = 6; ba.hN = 7; ba.nN = 8; ba.pN = 9; ba.eN = 0; ba.cN = 1; ba.gN = 2; ba.dN = 3; ba.fN = 4; ba.gL = 123456789; ba.prototype = {
        eF: function () { m_currentAngle = 0 }, Y: function (a) { this.U = a; this.oa = this.U.c }, Fb: function () { }, move: function () { return !1 }, setPosition: function () { }, Yb: function () { }, jc: function () { }, stop: function () { }, cg: function () { }, reverse: function () { }, start: function () { }, ff: function () { },
        Jg: function () { }, df: function () { }, ws: function () { }, us: function () { }, wu: function (a) { return this.U.A.wu(this.U, a, 32) }, jn: function (a) { this.U.b.pe = a; null != this.U.$ && this.U.$.Le() }, Kq: function (a) { return this.U.c.Sc[a] }, $w: function () { }
    }; A.$d = 0; A.Cc = 1; A.ue = 2; A.fp = 3; A.fl = 4; A.JD = 5; A.vx = 6; A.ux = 7; A.tx = 8; A.sx = 9; A.Qs = 10; A.gp = 11; A.hL = 12; A.CK = [0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]; A.prototype = {
        load: function (a) {
            var b = a.O, c = Array(32), d; for (d = 0; 32 > d; d++)c[d] = a.o(); this.Od = Array(32); this.lh = Array(32); this.si = Array(32); for (d =
                0; 32 > d; d++)this.Od[d] = null, this.lh[d] = 0, this.si[d] = 0, 0 != c[d] && (this.Od[d] = new Fc, a.seek(b + c[d]), this.Od[d].load(a))
        }, kc: function (a) { var b; for (b = 0; 32 > b; b++)null != this.Od[b] && this.Od[b].kc(a) }, DG: function (a) { var b, c, d, e, f; for (b = 0; 32 > b; b++)if (null == this.Od[b]) { c = 0; for (e = b + 1; 32 > c; c++, e++)if (e &= 31, null != this.Od[e]) { this.lh[b] = e; break } d = 0; for (f = b - 1; 32 > d; d++, f--)if (f &= 31, null != this.Od[f]) { this.si[b] = f; break } e == f || c < d ? this.lh[b] |= 64 : d < c && (this.si[b] |= 64) } else 16 > a && 0 == A.CK[a] && (this.Od[b].Rt = this.Od[b].Qt) }
    };
    Ka.pD = [A.fp, A.Cc, A.ue, 0, A.ue, A.$d, 0, 0, A.Cc, A.$d, 0, 0, A.$d, A.Cc, A.ue, 0, A.$d, 0, 0, 0, A.$d, A.Cc, A.ue, 0, A.$d, A.Cc, A.ue, 0, A.Cc, A.ue, A.$d, 0, A.$d, A.Cc, A.ue, 0, A.Cc, A.ue, A.$d, 0, A.$d, A.Cc, A.ue, 0, A.$d, A.Cc, A.ue, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; Ka.prototype = {
        load: function (a) {
            var b = a.O; a.pa(2); this.rf = a.o(); var c = Array(this.rf), d; for (d = 0; d < this.rf; d++)c[d] = a.o(); this.sf = Array(this.rf); this.ri = Array(this.rf); for (d = 0; d < this.rf; d++)this.sf[d] = null, this.ri[d] = 0, 0 != c[d] && (this.sf[d] = new A, a.seek(b + c[d]), this.sf[d].load(a),
                this.ri[d] = 1); for (a = 0; a < this.rf; a++)if (0 == this.ri[a]) { b = !1; if (12 > a) for (d = 0; 4 > d; d++)if (0 != this.ri[Ka.pD[4 * a + d]]) { this.sf[a] = this.sf[Ka.pD[4 * a + d]]; b = !0; break } if (0 == b) for (d = 0; d < this.rf; d++)if (0 != this.ri[d]) { this.sf[a] = this.sf[d]; break } } else this.sf[a].DG(a)
        }, kc: function (a) { var b; for (b = 0; b < this.rf; b++)0 != this.ri[b] && this.sf[b].kc(a) }
    }; Fc.prototype = {
        load: function (a) { this.Rt = a.sb(); this.Qt = a.sb(); this.Ey = a.o(); this.Fy = a.o(); this.ul = a.o(); this.Tj = Array(this.ul); var b; for (b = 0; b < this.ul; b++)this.Tj[b] = a.o() },
        kc: function (a) { var b; for (b = 0; b < this.ul; b++)if (null != a) { var c = a.rh(this.Tj[b]); -1 != c && (this.Tj[b] = c) } }
    }; Fa.Vt = [A.$d, A.Cc, A.ue, A.JD, A.vx, A.ux, A.tx, A.sx, A.Qs, A.gp, 12, 13, 14, 15, -1]; Fa.prototype = {
        Y: function (a) { this.a = a; this.pm = 0; this.CA(A.Cc); if (this.mh(A.fp)) this.pm = 1, this.fq(A.fp), this.Wt(), this.jn(); else { for (a = 0; 0 <= Fa.Vt[a] && !this.mh(Fa.Vt[a]); a++); 0 > Fa.Vt[a] && this.mh(A.fl) && (this.pm = 2, this.fq(A.fl), this.Wt(), this.jn()) } }, CA: function (a) {
            this.a.b.pe = a; this.Ew = !1; this.Of = this.Ao = this.nm = this.Ik = this.Sr =
                this.Bg = 0; this.Tr = this.cj = this.Rh = -1; this.Bo = this.oe = null; this.jn()
        }, Le: function () { switch (this.pm) { case 0: return this.jn(); case 1: this.AG(); break; case 2: this.BG() }return !1 }, jn: function () { var a = this.a.u; this.a.b.dj = a; a -= this.a.ha; this.a.b.Gw = a; a += this.a.K; this.a.b.Hw = a; a = this.a.v; this.a.b.ej = a; a -= this.a.ia; this.a.b.Iw = a; a += this.a.J; this.a.b.Jw = a; this.a.b.Vr = this.a.b.Pa; this.a.b.Ur = this.a.b.hb; return this.wl(1) }, wl: function (a) {
            var b = this.a.N, c = this.a.b.Z, d = this.a.b.pe; 0 != this.Ik && (c = this.Ik - 1); d == A.Cc &&
                (0 == c && (d = A.$d), 75 <= c && (d = A.ue)); 0 != this.Bg && (d = this.Bg - 1); d != this.Rh && (this.Rh = d, d >= b.Pi.rf && (d = b.Pi.rf - 1), b = b.Pi.sf[d], b != this.oe && (this.oe = b, this.Rr = -1, this.Of = 0, 0 == (this.a.ua & w.PF) && (this.Ao = 0))); var e = this.a.b.Va % 32, b = !1; 0 != this.Sr && (e = this.Sr - 1); if (this.Rr != e && (this.Rr = e, d = this.oe.Od[e], null == d ? 0 != (this.oe.si[e] & 64) ? e = this.oe.si[e] & 63 : 0 != (this.oe.lh[e] & 64) ? e = this.oe.lh[e] & 63 : (d = e, 0 > this.Tr ? e = this.oe.lh[e] & 63 : (e -= this.Tr, e = 15 < (e & 31) ? this.oe.lh[d] & 63 : this.oe.si[d] & 63)) : this.Tr = e, d = this.oe.Od[e],
                    null != this.oe.Od[0] && 0 != (this.a.N.Ri & w.LF) && (this.a.b.hb = 360 * this.Rr / 32, d = this.oe.Od[0], this.Bo = null, b = !0), this.Bo != d)) {
                        this.Bo = d; this.Hk = d.Ey; this.sC = d.Fy; var e = d.Rt, f = d.Qt; if (e != this.cj || f != this.om) this.cj = e, this.om = f, this.rC = f - e, this.mm = e, this.Dw = -1; this.ne = d.ul; 0 != this.nm && this.nm - 1 >= this.ne && (this.nm = 0); this.Of >= this.ne && (this.Of = 0); d = d.Tj[this.Of]; 0 == this.Ew && (this.a.b.Pa = d, d = this.a.c.h.ea.hk(d, this.a.b.hb, this.a.b.Cb, this.a.b.Db), null != d && (this.a.K = d.width, this.a.J = d.height, this.a.ha = d.Ka,
                            this.a.ia = d.Ia, this.a.Zu = d.Rg, this.a.$u = d.Sg), this.a.b.L = !0, this.a.b.Oa = !0); if (1 == this.ne) { 0 == this.cj && (this.ne = 0); d = this.a.b.Pa; if (0 == d) return !1; d = this.a.c.h.ea.hk(d, this.a.b.hb, this.a.b.Cb, this.a.b.Db); null != d && (this.a.K = d.width, this.a.J = d.height, this.a.ha = d.Ka, this.a.ia = d.Ia, this.a.Zu = d.Rg, this.a.$u = d.Sg); return !1 }
            } if (0 == a && 0 == this.nm || 0 == b && 0 == this.ne) return !1; a = this.rC; c != this.Dw && (this.Dw = c, 0 == a ? (this.mm = this.cj, 0 != this.Ik && (this.mm = this.Ik - 1)) : (d = this.a.b.eb - this.a.b.Th, 0 == d ? 0 != this.Ik ? (a =
                a * c / 100 + this.cj, a > this.om && (a = this.om)) : (a /= 2, a += this.cj) : (a = a * c / d + this.cj, a > this.om && (a = this.om)), this.mm = a)); d = this.Bo; a = this.nm; if (0 == a) {
                    if (0 == this.mm || this.Ew) return !1; c = this.Ao; a = this.Of; e = this.mm; 0 != (this.a.c.w.Pb & E.Kc) && (e = Math.round(e * this.a.c.xc)); for (c += e; 100 < c;)if (c -= 100, a++, a >= this.ne && (a = this.sC, 0 != this.Hk && (this.Hk--, 0 == this.Hk))) {
                        this.Of = this.ne - 1; this.ne = 0; 0 != this.Bg && (this.Ik = this.Sr = this.Bg = 0); this.Of < d.ul && (d = d.Tj[this.Of], d != this.a.b.Pa && (this.a.b.Pa = d, this.a.b.L = !0, this.a.b.Oa =
                            !0)); this.Ao = c; if (0 != (this.a.c.Gc & h.jt)) return !1; b && (this.a.b.L = !0, this.a.b.Oa = !0, d = this.a.c.h.ea.hk(this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db), null != d && (this.a.K = d.width, this.a.J = d.height, this.a.ha = d.Ka, this.a.ia = d.Ia, this.a.Zu = d.Rg, this.a.$u = d.Sg)); c = -131072; c |= this.a.Ea & 65535; this.a.c.i.yc = this.a.$.Rh; return this.a.c.i.nd(this.a, c)
                    } this.Ao = c
                } else a--; this.Of = a; this.a.b.L = !0; this.a.b.Oa = !0; d = d.Tj[a]; if (this.a.b.Pa != d || this.tC != this.a.b.hb) this.a.b.Pa = d, this.tC = this.a.b.hb, 0 <= d && (d = this.a.c.h.ea.hk(d,
                    this.a.b.hb, this.a.b.Cb, this.a.b.Db), null != d && (this.a.K = d.width, this.a.J = d.height, this.a.ha = d.Ka, this.a.ia = d.Ia, this.a.Zu = d.Rg, this.a.$u = d.Sg)); return !1
        }, mh: function (a) { return 0 == this.a.N.Pi.ri[a] ? !1 : !0 }, Wt: function () { 0 == this.Hk && (this.Hk = 1) }, fq: function (a) { this.Bg = a + 1; this.wl(0) }, CG: function () { this.Bg = 0; this.wl(0) }, AG: function () { this.wl(1); this.Bg != A.fp + 1 && (this.mh(A.$d) || this.mh(A.Cc) || this.mh(A.ue) ? (this.pm = 0, this.CG()) : (this.pm = 2, this.a.c.DA(this.a))) }, BG: function () {
            0 == (this.a.X & G.ii) && (this.wl(1),
                this.Bg != A.fl + 1 && this.a.c.eg(this.a.Vb))
        }
    }; Gc.prototype = { xu: function () { var a = this.app.gj + "M" + n.An(this.handle, "png"), b = new Image; this.ea.ec[this.handle] = b; var c = this; b.onload = function () { c.app.Ai(c) }; b.onerror = function () { c.app.Ai(c) }; b.src = a } }; Hc.prototype = {
        Ph: function (a) {
            this.file = a; this.Ab = this.file.o(); this.zk = Array(this.Ab); a = this.file.o(); var b, c, d = new W; for (b = 0; b < a; b++)c = this.file.O, d.Ul(this.file), this.zk[d.handle] = c; this.Ra = Array(this.Ab); for (b = 0; b < this.Ab; b++)this.Ra[b] = 0; this.ya = null; this.Bh =
                this.Ab; this.Xe = 0; this.images = null
        }, Ob: function (a) { return 0 <= a && a < this.Bh && -1 != this.ya[a] ? this.images[this.ya[a]] : null }, Ro: function () { var a; for (a = 0; a < this.Ab; a++)this.zk[a] && (this.Ra[a] = 1) }, bf: function () { if (0 == (this.app.Ca & m.ei) && 0 == (this.app.Ca & m.Ps)) { var a; for (a = 0; a < this.Ab; a++)this.Ra[a] = 0 } this.Nh = null }, pj: function (a) { this.Ra[a]++ }, rh: function (a) { this.pj(a); return -1 }, RA: function (a) {
            null == this.ec[a] && (null != this.Nh && a < this.Nh.length && null != this.Nh[a] ? this.ec[a] = this.Nh[a] : (this.ec[a] = new Gc(this,
                a), this.app.hn(this.ec[a])))
        }, load: function (a) {
            var b; if (0 < this.app.ke) if (null == this.ec) { if (this.ec = Array(this.app.ke), this.app.Ca & m.ei) for (b = 0; b < this.app.ke; b++)this.app.ec[b] && this.RA(b) } else if (0 == (this.app.Ca & m.ei)) { this.Nh = Array(this.app.ke); for (b = 0; b < this.app.ke; b++)this.Nh[b] = this.ec[b]; this.ec = Array(this.app.ke); for (b = 0; b < this.app.ke; b++)this.ec[b] = null } for (b = this.Xe = 0; b < this.Ab; b++)0 != this.Ra[b] && this.Xe++; b = Array(this.Xe); var c = 0, d; for (d = 0; d < this.Ab; d++)if (0 != this.Ra[d]) {
                if (null != this.images &&
                    -1 != this.ya[d] && null != this.images[this.ya[d]]) { if (b[c] = this.images[this.ya[d]], b[c].Ra = this.Ra[d], null != this.ec && null != this.Nh) { var e = b[c].Wb; 0 < e && (this.ec[e] = this.Nh[e]) } } else 0 != this.zk[d] && (b[c] = new W, a.seek(this.zk[d]), b[c].load(this.app), b[c].Ra = this.Ra[d]); c++
            } this.images = b; this.ya = Array(this.Ab); for (b = 0; b < this.Ab; b++)this.ya[b] = -1; for (b = 0; b < this.Xe; b++)this.images[b] && (this.ya[this.images[b].handle] = b); this.Bh = this.Ab
        }, PA: function (a) {
            var b; for (b = 0; b < a.length; b++)if (0 <= a[b] && a[b] < this.Bh && 0 !=
                this.zk[a[b]] && null == this.Ob(a[b])) { var c, d = -1; for (c = 0; c < this.Xe; c++)if (null == this.images[c]) { d = c; break } if (-1 == d) { var e = Array(this.Xe + 10); for (c = 0; c < this.Xe; c++)e[c] = this.images[c]; for (; c < this.Xe + 10; c++)e[c] = null; d = this.Xe; this.Xe += 10; this.images = e } this.ya[a[b]] = d; this.images[d] = new W; this.images[d].Ra = 1; this.file.seek(this.zk[a[b]]); this.images[d].load(this.app) }
        }, hk: function (a, b, c, d) {
            var e; null == this.Oh && (this.Oh = new W); e = this.Ob(a); if (null != e) {
                a = e.width; var f = e.height, g = e.Ka, k = e.Ia, q = e.Rg; e = e.Sg;
                0 == b ? (1 != c && (g *= c, q *= c, a *= c), 1 != d && (k *= d, e *= d, f *= d)) : (1 != c && (g *= c, q *= c, a *= c), 1 != d && (k *= d, e *= d, f *= d), null == this.Sh && (this.Sh = new aa), null == this.mk && (this.mk = new qa), null == this.Uj && (this.Uj = new qa), this.mk.x = g, this.mk.y = k, this.Uj.x = q, this.Uj.y = e, this.Sh.left = this.Sh.top = 0, this.Sh.right = a, this.Sh.bottom = f, this.rH(this.Sh, this.mk, this.Uj, b), a = this.Sh.right, f = this.Sh.bottom, g = this.mk.x, k = this.mk.y, q = this.Uj.x, e = this.Uj.y); this.Oh.width = a; this.Oh.height = f; this.Oh.Ka = g; this.Oh.Ia = k; this.Oh.Rg = q; this.Oh.Sg =
                    e; return this.Oh
            } return e
        }, rH: function (a, b, c, d) {
            var e, f, g; 90 == d ? (d = 0, g = 1) : 180 == d ? (d = -1, g = 0) : 270 == d ? (d = 0, g = -1) : (g = d * Math.PI / 180, d = Math.cos(g), g = Math.sin(g)); var k, q, h, m, n; null == b ? k = q = n = f = 0 : (h = -b.x * d, m = -b.x * g, n = -b.y * d, f = -b.y * g, k = h + f, q = n - m); e = null == b ? a.right : a.right - b.x; h = e * d; m = e * g; e = h + f; n -= m; var l; f = null == b ? a.bottom : a.bottom - b.y; l = h + f * g; f = f * d - m; var p, r; p = k + l - e; r = q + f - n; h = Math.min(k, Math.min(e, Math.min(l, p))); m = Math.min(q, Math.min(n, Math.min(f, r))); k = Math.max(k, Math.max(e, Math.max(l, p))); q = Math.max(q,
                Math.max(n, Math.max(f, r))); null != c && (null == b ? (e = c.x, f = c.y) : (e = c.x - b.x, f = c.y - b.y), c.x = e * d + f * g - h, c.y = f * d - e * g - m); null != b && (b.x = -h, b.y = -m); a.right = k - h; a.bottom = q - m
        }
    }; W.bJ = 10; W.Uc = function (a, b) { var c = new W; c.app = a; c.rc = new Image; c.rc.onload = function () { c.app.th++; c.width = c.rc.width; c.height = c.rc.height }; a.uh++; a.og = !0; c.rc.src = a.gj + b; return c }; W.prototype = {
        Ul: function (a) { this.handle = a.o(); a.pa(12) }, xu: function () {
            this.rc = new Image; var a = this; this.rc.onload = function () { a.app.Ai(a) }; this.rc.onerror = function () { a.app.Ai(a) };
            this.rc.src = this.app.gj + n.An(this.handle, "png")
        }, load: function (a) { this.app = a; this.handle = a.file.o(); this.width = a.file.o(); this.height = a.file.o(); this.Ka = a.file.T(); this.Ia = a.file.T(); this.Rg = a.file.T(); this.Sg = a.file.T(); this.Wb = 0; this.rc = null; null != this.app.frame.Yn ? (this.Wb = this.app.frame.Yn[this.handle], 0 != this.Wb ? (this.app.ea.RA(this.Wb), this.le = this.app.frame.le[this.handle], this.me = this.app.frame.me[this.handle]) : this.app.hn(this)) : this.app.hn(this) }, createElement: function () {
            var a = document.createElement("div");
            a.style.width = this.width + "px"; a.style.height = this.height + "px"; a.style.backgroundRepeat = "no-repeat"; 0 == this.Wb ? a.style.backgroundImage = "url('" + this.rc.src + "')" : (a.style.backgroundPosition = "-" + this.le + "px -" + this.me + "px", a.style.backgroundImage = "url('" + this.app.gj + "M" + n.An(this.Wb, "png") + "')"); return a
        }, Af: function (a, b, c, d) {
            if (0 == (a & F.il)) {
                null == this.qg && (this.qg = new F, this.qg.su(this.app, this, a)); if (0 == b && 1 == c && 1 == d) return this.qg; null == this.zh && (this.zh = new N); var e, f = 2147483647, g = -1; for (e = 0; e < this.zh.size(); e++) {
                    a =
                    this.zh.get(e); if (b == a.angle && c == a.hc && d == a.ic) return a.R; a.jx < f && (f = a.jx, g = e)
                } this.zh.size() < this.bJ && (g = -1); a = new Ae; a.R = new F; a.R.bH(this.qg, b, c, d); a.angle = b; a.hc = c; a.ic = d; a.jx = this.app.td; 0 > g ? this.zh.add(a) : this.zh.set(g, a); return a.R
            } null == this.Wl && (null == this.qg && (this.qg = new F, this.qg.su(this.app, this, 0)), this.Wl = new F, this.Wl.su(this.app, this, a)); return this.Wl
        }
    }; Ic.prototype = {
        Ph: function (a) {
            var b = a.s(), c; this.Wd = 0; var d = a.O, e = new xa; for (c = 0; c < b; c++)e.Ul(a), this.Wd = Math.max(this.Wd, e.handle +
                1); a.seek(d); this.Br = Array(this.Wd); for (c = 0; c < b; c++)d = a.O, e.Ul(a), this.Br[e.handle] = d; this.Ra = Array(this.Wd); for (c = 0; c < this.Wd; c++)this.Ra[c] = 0; this.ya = null; this.rg = this.Wd; this.Ah = 0; this.fonts = null
        }, load: function (a) {
            var b; for (b = this.Ah = 0; b < this.Wd; b++)0 != this.Ra[b] && this.Ah++; b = Array(this.Ah); var c = 0, d; for (d = 0; d < this.Wd; d++)0 != this.Ra[d] && (null != this.fonts && -1 != this.ya[d] && null != this.fonts[this.ya[d]] ? b[c] = this.fonts[this.ya[d]] : (b[c] = new xa, a.seek(this.Br[d]), b[c].load(a)), b[c].Ra = this.Ra[d], c++);
            this.fonts = b; this.ya = Array(this.Wd); for (b = 0; b < this.Wd; b++)this.ya[b] = -1; for (b = 0; b < this.Ah; b++)this.ya[this.fonts[b].handle] = b; this.rg = this.Wd
        }, zf: function (a) { return -1 == a ? this.ko : 0 <= a && a < this.rg && -1 != this.ya[a] ? this.fonts[this.ya[a]] : null }, Jq: function (a) { return this.zf(a).PH() }, bf: function () { if (0 == (this.app.yP & m.ei) && 0 == (this.app.Ca & m.Ps)) { var a; for (a = 0; a < this.Wd; a++)this.Ra[a] = 0 } }, Ro: function () { var a; for (a = 0; a < this.Wd; a++)this.Br[a] && (this.Ra[a] = 1) }, pj: function (a) {
            -1 == a ? null == this.ko && (this.ko = new xa,
                this.ko.sq()) : this.Ra[a]++
        }, rh: function (a) { this.pj(a); return -1 }, cq: function (a) {
            var b, c; for (c = 0; c < this.Ah && (null == this.fonts[c] || this.fonts[c].bc != a.bc || this.fonts[c].Ee != a.Ee || this.fonts[c].De != a.De || this.fonts[c].Ce != a.Ce); c++); if (c < this.Ah) return this.fonts[c].handle; c = -1; for (b = this.Wd; b < this.rg && -1 != this.ya[b]; b++); if (-1 == c) { var d = Array(this.rg + 10); for (b = 0; b < this.rg; b++)d[b] = this.ya[b]; for (; b < this.rg + 10; b++)d[b] = -1; c = this.rg; this.rg += 10; this.ya = d } d = -1; for (b = 0; b < this.Ah; b++)if (null == this.fonts[b]) {
                d =
                b; break
            } -1 == d && (d = this.Ah, this.fonts.push(null)); this.ya[c] = d; this.fonts[d] = new xa; this.fonts[d].handle = c; this.fonts[d].bc = a.bc; this.fonts[d].Ee = a.Ee; this.fonts[d].De = a.De; this.fonts[d].Ce = a.Ce; return c
        }
    }; xa.prototype = {
        Ul: function (a) { this.handle = a.s(); 0 == a.fd ? a.pa(72) : a.pa(104) }, load: function (a) {
            this.handle = a.s(); var b = a.O; a.pa(12); this.bc = a.s(); 0 > this.bc && (this.bc = -this.bc); a.s(); a.s(); a.s(); this.Ee = a.s(); this.De = a.sb(); a.sb(); a.sb(); a.sb(); a.sb(); a.sb(); a.sb(); a.sb(); this.Ce = a.Hb(); 0 == a.fd ? a.seek(b +
                72) : a.seek(b + 104)
        }, PH: function () { var a = new Ya; a.bc = this.bc; a.Ee = this.Ee; a.De = this.De; a.Ce = this.Ce; return a }, sq: function () { this.Ce = "Arial"; this.bc = 13; this.Ee = 400; this.De = 0 }, Se: function () { return this.bc + Math.ceil(this.bc / 8) }, gg: function () { if (null == this.font) { this.font = this.De ? "italic " : "normal "; var a = 100 * Math.floor(this.Ee / 100), a = Math.max(a, 100), a = Math.min(a, 900); this.font += a + " "; this.font += this.bc + "px "; this.font += this.Ce } return this.font }
    }; Jc.prototype = {
        Ph: function (a) {
            this.file = a; this.Ab = this.file.o();
            this.Cr = Array(this.Ab); this.Ra = Array(this.Ab); this.ya = Array(this.Ab); for (a = 0; a < this.Ab; a++)this.Ra[a] = 0, this.ya[a] = -1; var b = this.file.o(), c = new Pa(this.app), d; for (a = 0; a < b; a++)d = this.file.O, c.Ul(), this.Cr[c.handle] = d; this.Bh = this.Ab; this.io = 0; this.qj = null
        }, VH: function (a) { return 0 <= a && a < this.Bh && -1 != this.ya[a] ? this.qj[this.ya[a]] : null }, qA: function (a) { for (var b = 0; b < this.Bh; b++)if (-1 != this.ya[b] && this.qj[this.ya[b]].name == a) return b; return -1 }, bf: function () {
            if (0 == (this.app.Ca & m.ei) && 0 == (this.app.Ca & m.Ps)) {
                var a;
                for (a = 0; a < this.Ab; a++)this.Ra[a] = 0
            }
        }, Ro: function () { var a; for (a = 0; a < this.Ab; a++)this.Cr[a] && (this.Ra[a] = 1) }, pj: function (a) { this.Ra[a]++ }, rh: function (a) { this.pj(a); return -1 }, load: function () {
            var a; for (a = this.io = 0; a < this.Ab; a++)0 != this.Ra[a] && this.io++; a = Array(this.io); var b = 0, c; for (c = 0; c < this.Ab; c++)0 != this.Ra[c] && (null != this.qj && -1 != this.ya[c] && null != this.qj[this.ya[c]] ? a[b] = this.qj[this.ya[c]] : (a[b] = new Pa(this.app), this.file.seek(this.Cr[c]), a[b].load()), a[b].Ra = this.Ra[c], b++); this.qj = a; this.ya =
                Array(this.Ab); for (a = 0; a < this.Ab; a++)this.ya[a] = -1; for (a = 0; a < this.io; a++)this.ya[this.qj[a].handle] = a; this.Bh = this.Ab; this.bf()
        }
    }; Pa.prototype = {
        Ul: function () { this.handle = this.file.o(); this.file.pa(5); var a = this.file.o(); 0 == this.file.fd ? this.file.pa(a) : this.file.pa(2 * a) }, xu: function () {
            var a, b = this.Mc.Bc.vw & this.type; 0 == b && (b = this.Mc.Bc.Av & this.type); for (a = 0; 4 > a && !(b & 1 << a); a++); if (4 > a) {
                b = ""; switch (a) { case 0: b = "ogg"; break; case 1: b = "m4a"; break; case 2: b = "mp3"; break; case 3: b = "wav" }if (this.context) {
                    var c =
                        this, d = new XMLHttpRequest; d.open("GET", this.Mc.gj + n.An(this.handle, b), !0); d.responseType = "arraybuffer"; d.addEventListener("load", function () { c.response = d.response; c.Mc.Bc.uG(c) }); d.send()
                } else this.pb = new Audio, this.pb.jQ = "auto", c = this, this.pb.addEventListener("loadeddata", function (a) { c.Mc.Ai(c); c.pb.removeEventListener("loadeddata", arguments.callee, !1) }, !1), this.pb.addEventListener("error", function () { c.Mc.Ai(c); c.pb = null }, !1), this.pb.src = this.Mc.gj + n.An(this.handle, b), this.pb.load(), this.pb.autoplay =
                    !1
            } else this.Mc.Ai(this)
        }, load: function () { this.handle = this.file.o(); this.type = this.file.sb(); this.rn = this.frequency = this.file.s(); var a = this.file.o(); this.name = this.file.Hb(a); this.pb = null; this.Mc.hn(this) }, VI: function () { this.handle = 9999; this.type = 4; this.rn = this.frequency = 4E4; this.name = ""; this.pb = null; this.Mc.hn(this) }, Dk: function (a, b) {
            a || (a = 0); b || (b = this.frequency); if (this.pb) this.pb.volume = this.volume / 100, this.rn = b, this.pb.playbackRate = b / this.frequency, this.pb.duration && (this.pb.currentTime = 0),
                this.pb.play(); else if (this.buffer) {
                    this.source = this.context.createBufferSource(); this.source.buffer = this.buffer; 0 == this.Bl ? (this.source.gain.value = this.volume / 100, this.source.connect(this.context.destination)) : (this.gain = this.context.createGain(), this.source.connect(this.gain), this.gain.connect(this.context.destination), this.gain.gain.value = this.volume / 100); a || (a = 0); b || (b = this.frequency); this.rn = b; this.source.playbackRate.value = b / this.frequency; this.startTime = Date.now() - a; "undefined" !== typeof this.source.start ?
                        this.source.start(0, a / 1E3) : this.source.noteOn(a); var c = this; this.source.onended = function () { c.Jy = !0 }
                } this.vi = !1; this.wi = !0; this.Jy = !1
        }, play: function (a, b, c) { this.Ch = a; 0 == this.Ch && (this.Ch = 1E7); this.volume = c; this.Dk() }, stop: function () { this.pb ? this.pb.pause() : this.source && this.wi && ("undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.source.onended = null); this.wi = this.nn = !1 }, rK: function (a) {
            this.volume = a; this.pb ? this.pb.volume = a / 100 : this.source && (this.gain ? this.gain.gain.value =
                a / 100 : this.source.gain.value = a / 100)
        }, pause: function () { this.vi || (this.pb ? this.pb.pause() : this.source && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0), this.tJ = Date.now() - this.startTime), this.vi = !0) }, ZH: function () { this.vi ? this.hq = !1 : (this.pause(), this.hq = !0) }, resume: function () { this.vi && (this.pb ? this.pb.play() : this.source && this.Dk(this.tJ), this.vi = !1) }, $H: function () { this.hq && (this.resume(), this.hq = !1) }, uI: function () { return this.vi }, vI: function () {
            return (this.pb ||
                this.source) && this.wi ? !0 : !1
        }, setPosition: function (a) { this.pb ? this.pb.currentTime = a / 1E3 : this.source && (this.wi && (this.source.onended = null, "undefined" !== typeof this.source.stop ? this.source.stop(0) : this.source.noteOff(0)), this.Dk(a)) }, JG: function () {
            if (1 == this.wi && 0 == this.vi) if (this.pb) { if (this.pb.ended) { if (0 < this.Ch && (this.Ch--, 0 < this.Ch)) return this.Dk(0, this.rn), !1; this.wi = this.nn = !1; return !0 } } else if (this.source && (3 == this.source.playbackState || this.Jy)) {
                if (0 < this.Ch && (this.Ch--, 0 < this.Ch)) return this.Dk(0,
                    this.rn), !1; this.wi = this.nn = !1; return !0
            } return !1
        }
    }; Kc.prototype = { KD: function (a) { this.zJ[this.position++] = a } }; db.prototype = {}; O.gi = 80; O.VF = 256; O.vE = 1; O.hP = function (a, b) { var c = b >> 5, d = 1 << (b & 31), e = 0 != (a[c] & d); a[c] |= d; return e }; O.zH = function (a) { return a.Mb + 0 }; O.Vf = function (a) { a &= 65535; return 0 != (a & 32768) ? a - 65536 : a }; O.bt = function (a) { return a >> 16 }; O.Hq = function (a) { return a & 4294901760 }; O.prototype = {
        Re: function (a) {
            var b; this.ye = 0; this.Cg = null; this.Dg = -1; if (0 != (a & 32768)) return 32767 == (a & 32767) ? null : this.DJ(a);
            var c = this.l.S[a]; if (c.qd == this.Xb) { if (0 != (c.mb & 2147483648)) return null; b = this.l.H[c.mb]; this.Wh = null; this.Lk = c; this.cf = b; this.Eo = a } else { c.qd = this.Xb; if (this.Yh) return c.mb = -1, c.Xd = 0, null; c.mb = c.nb; if (0 != (c.nb & 2147483648)) return c.Xd = 0, null; var d = c.nb; do b = this.l.H[d], d = b.$b, b.qc = d; while (0 == (d & 2147483648)); b = this.l.H[c.nb]; this.Wh = null; this.Lk = c; this.cf = b; this.Eo = a; c.Xd = c.Yi } this.ye = c.Xd; return b
        }, DJ: function (a) {
            var b, c, d = 0, e = 0; for (a = this.gc[a & 32767]; e < a.Na.length;) {
                c = a.Na[e + 1]; c = this.l.S[c]; if (c.qd ==
                    this.Xb) b = 0, 0 == (c.mb & 2147483648) && (b = c.Xd, null == this.Cg && (this.Cg = a, this.Dg = e)); else if (b = 0, c.qd = this.Xb, this.Yh) c.mb = -1, c.Xd = 0; else if (c.mb = c.nb, 0 != (c.nb & 2147483648)) c.Xd = 0; else { null == this.Cg && (this.Cg = a, this.Dg = e); b = c.nb; do b = this.l.H[b], b = b.qc = b.$b; while (0 == (b & 2147483648)); b = c.Xd = c.Yi } d += b; e += 2
            } a = this.Cg; return null != a ? (c = this.l.S[a.Na[this.Dg + 1]], this.Wh = null, this.Lk = c, this.cf = b = this.l.H[c.mb], this.Eo = a.Na[this.Dg + 1], this.ye = d, b) : null
        }, ze: function () {
            var a = this.cf, b; if (null == a && (b = this.l.S[this.Eo],
                0 == (b.mb & 2147483648))) return a = this.l.H[b.mb], this.Wh = null, this.Lk = b, this.cf = a; if (null != a && 0 == (a.qc & 2147483648)) return this.Wh = a, this.Lk = null, this.cf = a = this.l.H[a.qc]; if (null == this.Cg) return null; do { this.Dg += 2; if (this.Dg >= this.Cg.Na.length) return null; b = this.l.S[this.Cg.Na[this.Dg + 1]] } while (0 != (b.mb & 2147483648)); this.Wh = null; this.Lk = b; this.cf = a = this.l.H[b.mb]; this.Eo = this.Cg.Na[this.Dg + 1]; return a
        }, AH: function (a) {
            a = this.gc[a & 32767]; for (var b = 0, c; b < a.Na.length;)c = this.l.S[a.Na[b + 1]], c.qd != this.Xb &&
                (c.qd = this.Xb, c.Xd = 0, c.mb = -1), b += 2
        }, jd: function () { --this.cf.ac.Xd; null != this.Wh ? (this.Wh.qc = this.cf.qc, this.cf = this.Wh) : (this.Lk.mb = this.cf.qc, this.cf = null) }, Jl: function (a) { var b = a.ac; if (b.qd != this.Xb) b.qd = this.Xb, b.mb = a.Vb, b.Xd = 1, a.qc = -1; else { var c = b.mb; if (0 != (c & 2147483648)) b.mb = a.Vb, b.Xd += 1, a.qc = -1; else { do { if (a.Vb == c) return; b = this.l.H[c]; c = b.qc } while (0 == (c & 2147483648)); b.qc = a.Vb; a.qc = -1; a.ac.Xd += 1 } } }, Rz: function () {
            var a, b, c; for (b = 0; b < this.l.re; b++)if (c = this.l.S[b], c.qd == this.Xb) {
                if (c.dw != this.es) for (c.dw =
                    this.es, a = c.nb; 0 == (a & 2147483648);)a = this.l.H[a], a.av = 0, a = a.$b; for (a = c.mb; 0 == (a & 2147483648);)a = this.l.H[a], a.av = 1, a = a.qc
            }
        }, Qz: function () { var a, b, c, d, e; for (d = 0; d < this.l.re; d++)if (e = this.l.S[d], e.dw == this.es) for (e.qd = this.Xb, a = e.nb, c = null; 0 == (a & 2147483648);)b = this.l.H[a], 0 != b.av && (null != c ? c.qc = a : e.mb = a, b.qc = -1, c = b), a = b.$b }, kk: function (a) {
            if (this.Kk) return this.tm = !1, a = this.Nq(a); if (0 == (a & 32768)) return a = this.l.S[a], a.qd == this.Xb && 0 == (a.mb & 2147483648) ? this.l.H[a.mb] : 0 == (a.nb & 2147483648) ? this.l.H[a.nb] :
                null; var b = this.gc[a & 32767], c = 0; if (c >= b.Na.length) return null; do { a = this.l.S[b.Na[c + 1]]; if (a.qd == this.Xb && 0 == (a.mb & 2147483648)) return this.l.H[a.mb]; c += 2 } while (c < b.Na.length); c = 0; do { a = this.l.S[b.Na[c + 1]]; if (0 == (a.nb & 2147483648)) return this.l.H[a.nb]; c += 2 } while (c < b.Na.length); return null
        }, YH: function (a, b) { this.tm = !0; var c = this.Nq(a); if (null != c) return 0 != this.wc && (b.Ja |= U.di, this.hj = !0), c; b.Ja |= Q.hl; return c }, md: function (a) {
            a.Ja &= ~Q.hl; this.tm = !0; var b = this.Nq(a.Eb); if (null != b) return 0 != this.wc && (a.Ja |=
                U.di, this.hj = !0), b; a.Ja |= Q.hl; return b
        }, Nq: function (a) { return 0 == (a & 32768) ? this.WH(a) : this.XH(a) }, WH: function (a) {
            var b = this.l.S[a]; if (b.bw != this.Jk) {
                b.bw = this.Jk; b.cw = this.Vh; if (b.qd == this.Xb && 0 == (b.mb & 2147483648)) { b.xg = b.mb; a = this.l.H[b.mb]; b.$i = a.qc; if (0 != (a.qc & 2147483648)) return b.Lf = !1, b.Xi = 1, this.wc = !1, a; b.Lf = !0; b.Xi = 2; this.wc = !0; return a } if (this.tm && b.qd == this.Xb) return b.Xi = 0, b.xg = -1, null; if (0 == (b.nb & 2147483648)) {
                    b.xg = b.nb; a = this.l.H[b.nb]; if (null == a) return b.Xi = 0, b.xg = -1, null; if (0 == (a.$b &
                        2147483648)) return b.$i = a.$b, b.Lf = !0, b.Xi = 3, this.wc = !0, a; b.Lf = !1; b.Xi = 1; this.wc = !1; return a
                } b.Xi = 0; b.xg = -1; return null
            } if (b.cw != this.Vh) { var c; b.cw = this.Vh; switch (b.Xi) { case 0: return this.wc = b.Lf, null; case 1: return a = this.l.H[b.xg], this.wc = b.Lf, a; case 2: b.xg = b.$i; a = this.l.H[b.$i]; if (null == a) return null; c = a.qc; 0 != (c & 2147483648) && (b.Lf = !1, c = b.mb); b.$i = c; this.wc = b.Lf; return a; case 3: b.xg = b.$i; a = this.l.H[b.$i]; if (null == a) return null; c = a.$b; 0 != (c & 2147483648) && (b.Lf = !1, c = b.nb); b.$i = c; this.wc = b.Lf; return a } } if (0 >
                b.xg) return null; a = this.l.H[b.xg]; this.wc = b.Lf; return a
        }, XH: function (a) {
            var b, c = this.gc[a & 32767]; if (c.ww != this.Jk) {
                c.ww = this.Jk; c.xw = this.Vh; b = this.pC(c); if (0 <= b) { c.yg = b; a = this.l.H[b]; if (null == a) return c.aj = 0, c.yg = -1, null; b = a.qc; if (0 != (b & 2147483648) && (b = this.Aw(c), 0 > b)) return c.aj = 1, this.wc = c.Mf = !1, a; c.bj = b; c.aj = 2; this.wc = c.Mf = !0; return a } if (this.tm && c.yw) return c.aj = 0, c.yg = -1, null; b = this.oC(c); if (0 <= b && (c.yg = b, a = this.l.H[b], null != a)) {
                    b = a.$b; if (0 != (b & 2147483648) && (b = this.zw(c), 0 != (b & 2147483648))) return c.aj =
                        1, this.wc = c.Mf = !1, a; c.bj = b; c.aj = 3; this.wc = c.Mf = !0; return a
                } c.aj = 0; c.yg = -1; return null
            } if (c.xw != this.Vh) switch (c.xw = this.Vh, c.aj) {
                case 0: return this.wc = c.Mf, null; case 1: return a = this.l.H[c.yg], this.wc = c.Mf, a; case 2: return c.yg = c.bj, a = this.l.H[c.bj], null != a && (b = a.qc, 0 != (b & 2147483648) && (b = this.Aw(c), 0 > b && (c.Mf = !1, b = this.pC(c))), c.bj = b), this.wc = c.Mf, a; case 3: return c.yg = c.bj, a = this.l.H[c.bj], null != a && (b = a.$b, 0 != (b & 2147483648) && (b = this.zw(c), 0 != (b & 2147483648) && (c.Mf = !1, b = this.oC(c))), c.bj = b), this.wc = c.Mf,
                    a
            }if (0 > c.yg) return null; a = this.l.H[c.yg]; this.wc = c.Mf; return a
        }, Aw: function (a) { for (var b = a.lm, c; b < a.Na.length;) { c = a.Na[b + 1]; c = this.l.S[c]; if (c.qd == this.Xb && (a.yw = !0, 0 == (c.mb & 2147483648))) return a.lm = b + 2, c.mb; b += 2 } return -1 }, pC: function (a) { a.lm = 0; a.yw = !1; return this.Aw(a) }, zw: function (a) { for (var b = a.lm, c; b < a.Na.length;) { c = a.Na[b + 1]; c = this.l.S[c]; if (0 == (c.nb & 2147483648)) return a.lm = b + 2, c.nb; b += 2 } return -1 }, oC: function (a) { a.lm = 0; return this.zw(a) }, tH: function () {
            this.hu = !1; for (var a = this.l.cs, b = this.l.ds; ;) {
                for (var c =
                    null, d = null, e = this.l.HC; null != e;) { if (0 > e.index) { (c = e.next) && (n.rb(e.name, c.name) || (c = null)); break } d = e; e = e.next } if (null == e) break; e.stop = !1; for (e.index = 0; e.index < e.Eh; e.index++) { this.l.cs = e; if (this.l.ds = c) c.index = e.index; this.Kk = 0; this.nd(e.Kf[e.index], -2686976); if (e.stop) break } if (c) for (c.index = 0; c.index < c.Eh; c.index++) { this.l.cs = c; if (this.l.ds = e) e.index = c.index; this.Kk = 0; this.nd(c.Kf[c.index], -2686976); if (c.stop) break } c && (e.next = c.next); null == d ? this.l.HC = e.next : d.next = e.next
            } this.l.cs = a; this.l.ds =
                b
        }, BH: function (a, b) { for (var c = 0; c < a.length; c += 2) { var d = this.l.S[a[c + 1]]; if (d.qd == this.Xb) { var e; for (e = 0; e < b.length && b[e].fC != d; e++); e < b.length ? (e = b[e], e.Qo.length = 0) : (e = new db(d), b.push(e)); for (d = d.mb; 0 <= d;) { var f = this.l.H[d]; if (null == f) break; 0 == (f.X & G.lf) && e.Qo.push(d); d = f.qc } } } }, CH: function (a) {
            var b = this.mq.length, c = []; if (0 < b) for (var b = this.mq[b - 1], d = 0; d < b.length; d++) { for (var e = b[d], f = new db(e.fC), g = 0; g < e.Qo.length; g++)f.Qo.push(e.Qo[g]); c.push(f) } this.BH(a.xb, c); this.mq.push(c); this.Ne(a.Pz, null);
            this.mq.pop()
        }, Ae: function (a) { var b = a & 65535; 0 != (b & 32768) && (b = 65536 - b); a = this.cc[this.Je[b] + -(a >> 16)]; 0 != a && this.Ne(a, null) }, nd: function (a, b) { this.ms = b; var c = this.cc[a.Yu + -(b >> 16)]; return 0 != c ? (this.Ne(c, a), !0) : !1 }, fI: function () {
            for (var a = !1, b = this.l.Rw; b;) {
                if (this.l.Fg >= b.td) if (b.type == eb.nG) { this.l.i.yc = b.name; var c = this.cc[this.Je[-r.en] + L.iy]; 0 != c && this.Ne(c, null); a = b.Yt = !0 } else for (0 == b.Vo && (b.Vo = this.l.Fg); this.l.Fg >= b.Vo;) {
                    this.l.i.yc = b.name; this.l.i.Tw = b.index; c = this.cc[this.Je[-r.en] + L.iy];
                    0 != c && this.Ne(c, null); b.index++; b.gr--; if (0 == b.gr) { a = b.Yt = !0; break } b.Vo += b.DK
                } b = b.next
            } if (a) for (b = this.l.Rw, a = null; b;)c = b.next, b.Yt ? null == a ? this.l.Rw = c : a.next = c : a = b, b = c
        }, VG: function () {
            var a; if (0 != (this.l.Gc & h.Ym)) a = this.cc[this.Je[-r.Lp] + 1], 0 != a && (this.cc[this.Je[-r.Lp] + 1] = -1, this.Ne(a, null), this.Fo = !0); else {
                a = this.cc[this.Je[-r.en] + 3]; 0 != a && this.Ne(a, null); a = this.cc[this.Je[-r.Lp] + 1]; var b, c, d, e, f; if (0 != a) {
                    if (this.Fo) {
                        e = null; b = a; do {
                            d = this.Zb[b]; if (d != e) for (e = d, c = d.Mb; c < d.Mb + d.fe; c++)f = d.ab[c], 0 ==
                                (f.Ja & Q.hl) && (f.Ja |= Q.mp); b++
                        } while (null != this.Zb[b])
                    } this.Ne(a, null); this.cc[this.Je[-r.Lp] + 1] = 0; if (this.Fo) { e = null; b = a; do { d = this.Zb[b]; if (d != e) for (e = d, c = d.Mb; c < d.Mb + d.fe; c++)f = d.ab[c], f.Ja &= ~Q.mp; b++ } while (null != this.Zb[b]); this.Fo = !1 }
                } a = this.cc[this.Je[-r.en] + 2]; 0 != a && this.Ne(a, null); a = this.cc[this.Je[-r.en] + 1]; 0 != a && this.Ne(a, null)
            }
        }, Ne: function (a, b) {
            var c, d, e; this.FC = !1; do if (d = this.Zb[a], 0 == (d.fa & B.op)) if (this.Ie = d, this.js[0] = 0, this.js[1] = 0, this.js[2] = 0, this.js[3] = 0, 0 == (d.fa & B.Zs)) {
                this.Xb +=
                1; this.Yh = !1; e = 0; if (d.ab[e].vb(this.l, b)) for (e++; e < d.Mb && 0 != d.ab[e].ta(this.l); e++); if (e == d.Mb) if (this.FC) null != b && this.HG(b); else if (this.iu(d), 0 != (d.fa & B.Vm)) break; a++
            } else {
                this.es++; if (0 == (d.fa & B.Mx)) { c = !1; do { this.Xb++; this.Yh = !1; e = this.Oe[a]; 0 == d.ab[e].vb(this.l, b) && (this.Yh = !0); for (e++; e < d.Mb && -1507329 != d.ab[e].ka;)0 == d.ab[e].ta(this.l) && (this.Yh = !0), e++; this.Rz(); 0 == this.Yh && (c = !0); a++; d = this.Zb[a]; if (null == d) break } while (d == this.Ie) } else {
                    var f; c = this.Yh = !1; do {
                        this.Xb++; f = !1; e = this.Oe[a]; if (d.ab[e].vb(this.l,
                            b)) for (e++; e < d.Mb && -1572865 != d.ab[e].ka;) { if (0 == d.ab[e].ta(this.l)) { f = !0; break } e++ } else f = !0; 0 == f && (this.Rz(), c = !0); a++; d = this.Zb[a]; if (null == d) break
                    } while (d == this.Ie)
                } if (c && (this.Xb++, this.Qz(), d = 0 != (this.Ie.fa & B.Vm), this.iu(this.Ie), d)) break
            } else if (a++, null != this.Zb[a]) for (c = this.Zb[a]; c == d;) { a++; if (null == this.Zb[a]) break; c = this.Zb[a] } while (null != this.Zb[a])
        }, iu: function (a) {
            this.nu = null; if (0 != (a.fa & B.Lx)) {
                0 != (a.fa & B.at) && (this.kj = new N); if (0 != (a.fa & B.Xm)) {
                    var b = this.l.Ib, c = a.Ei; a.Ei = b; if (b == c ||
                        b - 1 == c) return
                } if (0 != (a.fa & B.$s)) if (0 != a.Il) a.Il--; else return; if (0 != (a.fa & B.Wm)) { b = this.l.Fg / 10; c = a.Il; if (0 != c && b < c) return; a.Il = b + a.Ei }
            } this.Jk++; this.hj = !1; this.Vh = 0; this.Kk = !0; b = 0; do c = a.ab[b + a.Mb], 0 == (c.Ja & (Q.Jx | Q.mp)) && (c.Ja &= ~U.di, c.lb(this.l)), b++; while (b < a.fe); if (this.hj) { do for (this.hj = !1, this.Vh++, b = 0; b < a.fe; b++)c = a.ab[b + a.Mb], 0 != (c.Ja & U.di) && (c.Ja &= ~U.di, c.lb(this.l)); while (this.hj) } b = this.nu; 0 != (a.fa & B.Vm) && 0 != (a.fa & B.np) && (b = null); this.nu = null; this.Kk = !1; null != this.kj && this.wH(); this.hu &&
                this.tH(); b && this.CH(b)
        }, HG: function (a) { var b; b = a.Ue; this.Xb += 1; this.Jl(a); this.Jk++; this.hj = !1; this.Vh = 0; this.Kk = !0; var c = 0, d; do { a = this.Ie.ab[this.Ie.Mb + c]; d = a.ka & 4294901760; if (262144 == d || 589824 == d) if (b == a.Qe) a.lb(this.l); else if (d = a.Eb, 0 != (d & 32768)) { var e = this.gc[d & 32767]; for (d = 0; d < e.Na.length;) { if (e.Na[d] == b) { a.lb(this.l); break } d += 2 } } c++ } while (c < this.Ie.fe); this.Kk = !1 }, wH: function () {
            if (!(1 >= this.kj.size())) {
                var a = this.l.random(this.kj.size()), b; do b = this.l.random(this.kj.size()); while (a == b); a =
                    this.kj.get(a); b = this.kj.get(b); var c = a.u, d = a.v, e = b.v; h.Yb(a, b.u); h.jc(a, e); h.Yb(b, c); h.jc(b, d); this.kj = null
            }
        }, so: function (a, b) {
            var c; this.l.Pu(); if (null != this.l && 0 == this.l.Pf && 0 != this.mn && (c = a, 2 == b && (c += O.VF), this.l.Gm = 0, 0 == this.l.Uk)) {
                this.$r = this.yc = c; this.Ae(-262150); this.Ae(-327686); c = 0; var d, e, f, g, k, q, h = new N; for (d = 0; d < this.l.tb; d++) {
                    for (; null == this.l.H[c];)c++; e = this.l.H[c]; c++; f = e.u - e.ha; g = e.v - e.ia; k = f + e.K; q = g + e.J; this.l.ij >= f && this.l.ij < k && this.l.jj >= g && this.l.jj < q && 0 != (e.Te & I.Nd) && 0 == (e.X &
                        G.lf) && (e.Ea == r.we ? 0 == (e.F.W & v.Nj) ? this.Mc.ea.Ob(e.b.Pa).Af(F.Ej, 0, 1, 1).qD(this.l.ij - e.u, this.l.jj - e.v, e.b.hb, e.b.Cb, e.b.Db) && h.add(e) : h.add(e) : h.add(e))
                } for (c = 0; c < h.size(); c++)e = h.get(c), this.Tw = e.Ue, this.Sw = e, this.Ae(-393222)
            }
        }, mJ: function () { null != this.l && 0 != this.mn && (this.l.Gm = 0, this.Ae(-524294)) }, $B: function () { 0 != this.mn && 0 == this.l.Pf && (this.l.Gm = 0) }, CJ: function (a, b, c, d, e) { a = new me(a, b, c, d, e); null == this.Nk && (this.Nk = new N); this.Nk.add(a) }, eI: function () {
            if (null != this.Nk) {
                var a; for (a = 0; a < this.Nk.size(); a++) {
                    var b =
                        this.Nk.get(a); if (null != b && 0 != b.code) switch (this.yc = b.qJ, this.JC = b.Kh, b.aK) { case 0: this.Ae(b.code); break; case 1: this.nd(b.pJ, b.code) }
                } this.Nk.clear()
            }
        }, load: function (a) {
            for (var b, c, d = 0; ;)if (b = a.file.wC(4), 69 == b[0] && 82 == b[1] && 62 == b[2] && 62 == b[3]) { this.sg = a.file.o(); 300 > this.sg && (this.sg = 300); a.file.o(); this.LB = a.file.o(); for (c = 0; c < 7 + r.ky; c++)this.Pv[c] = a.file.o(); this.Dh = a.file.o(); if (0 < this.Dh) for (this.Ag = Array(this.Dh), c = 0; c < this.Dh; c++)this.Ag[c] = new le, this.Ag[c].Mr = a.file.T(), this.Ag[c].Nr = a.file.T() } else if (69 ==
                b[0] && 82 == b[1] && 101 == b[2] && 115 == b[3]) a.file.s(), this.eo = a.file.s(), this.Td = Array(this.eo); else if (69 == b[0] && 82 == b[1] && 101 == b[2] && 118 == b[3]) for (a.file.s(), b = a.file.s(), c = 0; c < b; c++)this.Td[d] = B.create(a), d++; else if (69 == b[0] && 82 == b[1] && 111 == b[2] && 112 == b[3]) 0 != (a.file.s() & O.vE) && (this.Dl |= B.Vm); else if (60 == b[0] && 60 == b[1] && 69 == b[2] && 82 == b[3]) break; this.$A = Math.max(this.$A, d)
        }, AA: function (a) {
            var b, c; c = this.Td[a]; c.fa &= this.Dl; c.fa |= B.op; a++; for (b = !1; ;) {
                c = this.Td[a]; c.fa &= this.Dl; c.fa |= B.op; c = c.ab[0]; switch (c.ka) {
                    case -589825: c =
                        c.C[0]; c.ig |= ja.lt; a = this.AA(a); continue; case -655361: b = !0, a++
                }if (b) break; a++
            } return a
        }, tw: function () {
            var a, b, c, d, e, f, g = new N, k; for (d = 0; d < this.Td.length;)a = this.Td[d], a.fa &= this.Dl, b = a.ab[0], -589825 == b.ka && (a = b.C[0], k = new ke, k.id = a.bI, k.Oz = d, g.add(k), a.ig &= ~(ja.lt | ja.kt), 0 != (a.ig & ja.QE) && (a.ig |= ja.kt)), d++; for (d = 0; d < this.Td.length;) { a = this.Td[d]; a.fa &= this.Dl; b = a.ab[0]; if (-589825 == b.ka && (a = b.C[0], a.ig &= ~ja.lt, 0 != (a.ig & ja.kt))) { d = this.AA(d); continue } d++ } for (d = 0; d < this.Td.length; d++)switch (a = this.Td[d],
                b = a.ab[0], b.ka) { case -589825: case -655361: break; default: for (a.Ei = 0, e = a.Il = 0; e < a.Mb + a.fe; e++)if (b = a.ab[e], b.Ja = 0 > b.ka ? b.Ja & Q.xE : b.Ja & ~(U.di | Q.hl), 0 != b.hd) for (f = 0; f < b.hd; f++)switch (c = b.C[f], c.code) { case 25: c.Is = 0; break; case 13: c.SG = c.El; break; case 39: var q; for (q = 0; q < g.size(); q++)if (k = g.get(q), k.id == c.id) { c.O = k.Oz; break } } }
        }, gq: function (a) {
            var b, c, d, e, f, g, k, q, h, m, p, l, u, A; this.l = a; for (k = a = A = this.Jk = 0; k < this.l.re; k++)-1 != this.l.S[k].Qc && (this.l.S[k].bw = -1, this.l.S[k].Fd = 0, this.l.S[k].hm = -1, a++, this.l.S[k].Qc +
                1 > A && (A = this.l.S[k].Qc + 1)); this.gc = null; var v; if (0 < this.Dh) {
                    c = Array(this.Dh); for (b = 0; b < this.Dh; b++)for (g = this.Ag[b].Mr & 32767, v = c[b] = 0; v < this.l.re; v++)if (this.l.S[v].Gd == this.Ag[b].Nr) for (k = 0; 8 > k && -1 != this.l.S[v].im[k]; k++)g == this.l.S[v].im[k] && c[b]++; this.gc = Array(this.Dh); for (b = 0; b < this.Dh; b++) {
                        this.gc[b] = new ne; 0 != c[b] && (this.gc[b].Na = Array(2 * c[b])); a = 0; g = this.Ag[b].Mr & 32767; for (v = 0; v < this.l.re; v++)if (this.l.S[v].Gd == this.Ag[b].Nr) for (k = 0; 8 > k && -1 != this.l.S[v].im[k]; k++)g == this.l.S[v].im[k] && (this.gc[b].Na[2 *
                            a] = this.l.S[v].Qc, this.gc[b].Na[2 * a + 1] = v, a++); this.gc[b].ww = -1
                    }
                } this.Me = Array(200 * A + 1); a = 0; var t = []; for (v = 0; v < this.Td.length; v++) {
                    b = this.Td[v]; for (l = 0; l < b.fe + b.Mb; l++) {
                        c = b.ab[l]; c.Ja &= ~Q.Jx; 0 <= O.Vf(c.ka) && (c.Eb = this.Pl(c.Qe, O.Vf(c.ka))); if (c.ka == U.DD) k = c.C[0], k.Ga[0].code == ea.ct && 0 == k.Ga[1].code && (q = {}, q.zG = c.C[0], q.name = k.Ga[0].Lb, t.push(q), this.l.St(k.Ga[0].Lb)); else if (c.ka == U.eL || c.ka == U.dL) k = c.C[0], k.Ga[0].code == ea.ct && 0 == k.Ga[1].code && (k.Ga[0] = new bb, k.Ga[0].code = ea.Ox, k.Ga[0].value = this.l.St(k.Ga[0].Lb));
                        if (0 < c.hd) for (q = 0; q < c.hd; q++)switch (d = c.C[q], d.code) {
                            case 25: d.value = 0; break; case 21: if (0 == (c.Qe & r.It)) for (h = this.l.w.ud.Fq(); null != h; h = this.l.w.ud.jo()) { if (c.Qe == h.Df) { d.kq = h.Mi; break } } else d.kq = -1; g = d.to; -1 != g && (d.uo = this.Pl(g, d.Hr)); break; case 9: case 18: case 16: g = d.to; -1 != g && (d.uo = this.Pl(g, d.Hr)); break; case 1: d.Qb = this.Pl(d.Kh, d.type); break; case 69: for (k = 0; k < d.xb.length; k += 2)d.xb[k + 1] = this.Pl(d.xb[k], 0); break; case 15: case 27: case 28: case 45: case 46: case 22: case 23: case 52: case 59: case 53: case 62: case 54: for (h =
                                d, k = 0; k < h.Ga.length; k++)0 < O.Vf(h.Ga[k].code) && (g = h.Ga[k], g.Qb = this.Pl(g.Kh, O.Vf(g.code)))
                        }
                    } q = 0; h = B.pp | B.Lx | B.Nx; for (l = 0; l < b.Mb + b.fe; l++) {
                        c = b.ab[l]; e = O.Vf(c.ka); f = c.ka; p = m = k = 0; d = null; if (e >= r.we) switch (O.Hq(f)) {
                            case 262144: case 589824: q |= B.Nx; g = c.Qe; if (0 != (g & r.It)) for (e = this.EJ(c.Eb); -1 != e; e = this.qC())a = this.XA(b, a, this.l.S[e].Qc); else a = this.XA(b, a, g); break; case 1638400: q |= B.at; break; case -917504: d = c.C[0]; k = c.C[0]; this.bq(c.Eb, c.Qe, k.Qb, k.Kh); this.bq(k.Qb, k.Kh, c.Eb, c.Qe); g = O.Vf(c.ka); p = this.Yq(g) ?
                                I.Nd | I.fn : I.Nd | I.Rp | I.fn; k = k.type; m = this.Yq(k) ? I.Nd | I.fn : I.Nd | I.Rp | I.fn; k = 3; break; case -262144: g = O.Vf(c.ka); p = this.Yq(g) ? I.Nd : I.Nd | I.Rp; d = c.C[0]; k = c.C[0].type; m = this.Yq(k) ? I.Nd : I.Nd | I.Rp; k = 3; break; case -720896: case -786432: m = I.Qp; k = 1; break; case -851968: m = I.Pp, k = 1
                        } else switch (f) { case -327681: h &= ~B.pp; break; case -393217: h |= B.Wm; break; case -262145: h |= B.Wm; break; case -196609: h |= B.Xm + B.$s; break; case -196614: p = I.Nd; d = c.C[0]; k = 2; break; case -393222: p = I.Nd, d = c.C[1], k = 2 }if (0 != (k & 1)) for (e = this.zg(c.Eb); -1 !=
                            e; e = this.Nf())this.l.S[e].Fd |= m; if (0 != (k & 2)) for (e = this.zg(d.Qb); -1 != e; e = this.Nf())this.l.S[e].Fd |= p
                    } b.fa &= ~h; b.fa |= q
                } this.Me[a] = -1; h = Array(r.be + A + 1); b = l = 0; for (e = -r.be; 0 > e; e++, b++)h[b] = l, l += this.Pv[r.be + e]; for (v = 0; v < this.l.re; v++, b++)h[b] = l, l = this.l.S[v].Gd < r.Yf ? l + (this.Pv[r.be + this.l.S[v].Gd] + O.gi + 1) : l + (this.Mc.Bq.Lq(this.l.S[v].Gd) + O.gi + 1); m = l; this.cc = Array(m); for (k = 0; k < m; k++)this.cc[k] = 0; q = p = 0; g = Array(this.l.w.sg); for (v = 0; v < this.eo; v++)for (b = this.Td[v], b.fa &= ~B.Zs, d = !0, l = u = 0; l < b.Mb; l++) {
                    c = b.ab[l];
                    e = O.Vf(c.ka); f = c.ka; k = -O.bt(f); if (d && -2686977 != c.ka) if (0 != (c.Ja & Q.Ys) && (p++, 0 == (b.fa & B.np) && q++), 0 > e) this.cc[h[7 + e] + k]++; else { d = 0; for (e = this.zg(c.Eb); -1 != e; e = this.Nf())this.cc[h[r.be + e] + k]++, g[d++] = e; g[d] = -1; if (-917504 == O.Hq(f)) for (d = c.C[0], f = this.zg(d.Qb); -1 != f; f = this.Nf()) { for (d = 0; g[d] != f && -1 != g[d];)d++; -1 == g[d] && this.cc[h[r.be + f] + k]++ } } d = !1; if (-1507329 == c.ka || -1572865 == c.ka) d = !0, b.fa |= B.Zs, 0 == u ? u = c.ka : c.ka = u, -1572865 == u && (b.fa |= B.Mx); -2686977 == c.ka && (p++, b.fa |= B.op)
                } c = p + 1; for (b = 0; b < m; b++)0 != this.cc[b] &&
                    (l = this.cc[b], this.cc[b] = c, c += l + 1); this.Zb = Array(c); this.Oe = Array(c); for (k = 0; k < c; k++)this.Zb[k] = null, this.Oe[k] = 0; p = Array(m); for (k = 0; k < m; k++)p[k] = this.cc[k]; this.l.lj = null; m = 0; var H; u = []; var z = [], R = q + 1; for (v = 0; v < this.eo; v++) {
                        b = this.Td[v]; d = !0; for (l = 0; l < b.Mb; l++) {
                            c = b.ab[l]; e = O.Vf(c.ka); f = c.ka; k = -O.bt(f); if (d && -2686977 != c.ka) if (0 != (c.Ja & Q.Ys) && (0 != (b.fa & B.np) ? 0 < u.length && (H = u[u.length - 1], H.push(b), H.push(l)) : (this.Zb[m] = b, this.Oe[m] = l, m++)), 0 > e) {
                                if (H = h[r.be + e] + k, this.Zb[p[H]] = b, this.Oe[p[H]] = l, p[H]++,
                                    c.ka == L.WD) { d = !1; for (k = 0; k < b.Mb && b.ab[k].ka != L.XD && b.ab[k].ka != L.YD; k++); k < b.Mb && (d = !0); k = c.C[0]; if (k.Ga[0].code == ea.ct && 0 == k.Ga[1].code) for (f = k.Ga[0].Lb, this.l.St(f), k = 0; k < t.length; k++)if (e = t[k], n.rb(e.name, f)) { this.l.lj || (this.l.lj = []); H = null; for (k = 0; k < this.l.lj.length; k++)if (n.rb(f, this.l.lj[k].name)) { H = this.l.lj[k]; break } H || (H = new Kc(f), this.l.lj.push(H)); H.KD(b); H.SA |= d; e.zG.DP = k + 1; break } }
                            } else {
                                d = 0; for (e = this.zg(c.Eb); -1 != e; e = this.Nf())H = h[r.be + e] + k, this.Zb[p[H]] = b, this.Oe[p[H]] = l, p[H]++, g[d++] =
                                    e; g[d] = -1; if (-917504 == O.Hq(f)) for (d = c.C[0], f = this.zg(d.Qb); -1 != f; f = this.Nf()) { for (d = 0; g[d] != f && -1 != g[d];)d++; -1 == g[d] && (H = h[r.be + f] + k, this.Zb[p[H]] = b, this.Oe[p[H]] = l, p[H]++) }
                            } d = !1; if (-1507329 == c.ka || -1572865 == c.ka) d = !0; if (-2686977 == c.ka && 0 < u.length) { z.pop().Pz = R; H = u.pop(); for (c = 0; c < H.length; c += 2)this.Zb[R] = H[c], this.Oe[R] = H[c + 1], R++; this.Zb[R] = null; this.Oe[R] = null; R++ }
                        } if (0 != (b.fa & B.Kx)) for (H = [], u.push(H), k = 0; k < b.fe; k++)if (c = b.ab[b.Mb + k], 2883583 == c.ka) { 0 < c.hd && (d = c.C[0], z.push(d)); break }
                    } this.qk =
                        Array(A + 1 + a / 2); for (v = t = 0; v < this.l.re; v++)if (A = this.l.S[v], b = h[r.be + v], A.ew = b, 0 != (A.Dr & w.gh)) { a = 0; l = this.cc[b - O.bt(-786432)]; if (0 != l) for (; null != this.Zb[l];) { b = this.Zb[l]; c = b.ab[this.Oe[l]]; g = c.C[0].value; d = O.zH(b); for (k = b.fe; 0 < k; k--, d++)c = b.ab[d], c.ka == (524288 | A.Gd & 65535) && (a |= g); l++ } A.fw = a; b = A.Qc; for (l = a = 0; -1 != this.Me[a]; a += 2)if (this.Me[a] == b) if (c = this.Me[a + 1], 0 != (c & 32768)) A.Fd |= c; else { for (k = 0; k < l && this.qk[t + k] != c;)k++; k == l && (this.qk[t + l++] = c) } 0 < l && (A.hm = t, this.qk[t + l++] = -1, t += l) } this.Je[0] = 0; for (k =
                            1; k <= r.be; k++)this.Je[k] = h[r.be - k]; for (v = 0; v < this.l.re; v++)if (A = this.l.S[v], e = A.nb, 0 == (e & 2147483648)) { do a = this.l.H[e], a.Yu = A.ew, a.ac = A, a.Te = A.Fd, 0 != (a.ua & w.gh) && (a.A.Zw = A.fw), 0 != (a.ua & w.Mj) && 0 == (a.Te & I.Nd) && a.F.ss(!1), 0 == (a.ua & w.sy) && (a.ua &= ~w.Lj, 0 != (a.Te & I.Pp) && 0 != (this.l.w.Pb & E.Yx) && (a.ua |= w.Lj), 0 != (a.Te & (I.Nd | I.Qp)) && (a.ua |= w.Lj)), e = a.$b; while (0 == (e & 2147483648)) } this.KC = 0 != q ? !0 : !1; this.Me = null; this.mn = !0
        }, Gs: function () { this.mn = !1; this.Oe = this.Zb = this.cc = this.qk = this.gc = null }, Pl: function (a, b) {
            if (0 !=
                (a & r.It)) { var c; for (c = 0; a != this.Ag[c].Mr || b != this.Ag[c].Nr;)c++; return c | 32768 } for (c = 0; c < this.l.re && this.l.S[c].Qc != a;)c++; return c
        }, Yq: function (a) { var b; for (b = 0; b < this.l.re; b++)if (-1 != this.l.S[b].Qc && this.l.S[b].Gd == a) if (0 != (this.l.S[b].Dr & w.Mj) && 0 == (this.l.S[b].Dr & w.Ht)) break; else return !1; return !0 }, zg: function (a) { if (0 == (a & 32768)) return this.yo = -1, a; if (-1 == a) return -1; this.yo = a & 32767; this.wo = 0; return this.Nf() }, Nf: function () {
            var a; if (-1 == this.yo || this.wo >= this.gc[this.yo].Na.length) return -1; a = this.gc[this.yo].Na[this.wo +
                1]; this.wo += 2; return a
        }, EJ: function (a) { if (0 == (a & 32768)) return this.zo = -1, a; if (-1 == a) return -1; this.zo = a & 32767; this.xo = 0; return this.qC() }, qC: function () { var a; if (-1 == this.zo || this.xo >= this.gc[this.zo].Na.length) return -1; a = this.gc[this.zo].Na[this.xo + 1]; this.xo += 2; return a }, bq: function (a, b, c, d) {
            var e, f; if (0 > b) { if (null != this.gc) for (e = this.gc[a & 32767], f = 0; f < e.Na.length;)this.bq(e.Na[f + 1], e.Na[f], c, d), f += 2 } else if (0 > d) {
                if (null != this.gc) for (e = this.gc[c & 32767], f = 0; f < e.Na.length;)this.bq(a, b, e.Na[f + 1], e.Na[f]),
                    f += 2
            } else { a = this.l.S[a]; if (null == a.Wi) a.Wi = [], a = a.Wi; else for (a = a.Wi, b = 0; b < a.length; b += 2)if (d == a[b]) return; a.push(d); a.push(c) }
        }, XA: function (a, b, c) {
            var d, e, f, g, k; for (k = 0; k < a.Mb; k++)if (g = a.ab[k], 2 <= O.Vf(g.ka)) switch (e = 32768 + I.UF, f = O.Hq(g.ka), f) {
                case -917504: f = g.C[0]; for (d = this.zg(g.Eb); -1 != d; d = this.Nf())d = this.l.S[d].Qc, c == d && (e = 0, b = this.YA(b, c, f.Qb)); if (0 == e) break; for (d = this.zg(f.Qb); -1 != d; d = this.Nf())d = this.l.S[d].Qc, c == d && (b = this.YA(b, c, g.Eb)); break; case -786432: f = g.C[0], e = 32768 + f.value; case -851968: for (d =
                    this.zg(g.Eb); -1 != d; d = this.Nf())d = this.l.S[d].Qc, c == d && (this.Me[b++] = c, this.Me[b++] = e)
            }return b
        }, YA: function (a, b, c) { for (c = this.zg(c); -1 != c; c = this.Nf()) { c = this.l.S[c].Qc; var d; for (d = 0; d < a && (this.Me[d] != b || this.Me[d + 1] != c); d += 2); d == a && (this.Me[a++] = b, this.Me[a++] = c) } return a }, xH: function (a) { var b, c, d, e, f, g; for (d = 0; d < this.eo; d++)for (b = this.Td[d], e = 0; e < b.Mb + b.fe; e++)for (c = b.ab[e], f = 0; f < c.hd; f++)switch (c.C[f].code) { case 6: case 35: g = c.C[f], a.rh(g.ex) } }
    }; B.pp = 1; B.Xm = 2; B.$s = 4; B.Wm = 8; B.at = 16; B.Kx = 64; B.Vm =
        128; B.zE = 256; B.kM = 512; B.Zs = 1024; B.Nx = 2048; B.Mx = 4096; B.BE = 8192; B.op = 16384; B.np = 32768; B.Lx = B.at + B.Xm + B.$s + B.Wm; B.AE = B.zE + B.BE + B.Kx + B.np; B.create = function (a) { var b = a.file.O, c = a.file.T(), d = new B; d.Mb = a.file.sb(); d.fe = a.file.sb(); d.fa = a.file.o(); a.file.pa(2); d.Ei = a.file.s(); d.Il = a.file.s(); d.ab = Array(d.Mb + d.fe); var e, f = 0; for (e = 0; e < d.Mb; e++)d.ab[f++] = L.create(a); for (e = 0; e < d.fe; e++)d.ab[f++] = U.create(a); a.file.seek(b - c); return d }; Q.yE = 1; Q.jM = 2; Q.wE = 4; Q.mp = 8; Q.hl = 16; Q.Ys = 32; Q.iM = 64; Q.Jx = 128; Q.xE = Q.Ys + Q.yE +
            Q.wE + Q.mp + Q.hl; Q.Dj = 1; eb.nG = 0; eb.wO = 1; ya.wy = 0; ya.hO = 1; ya.iO = 2; ya.jO = 3; ya.prototype = { load: function (a) { this.Mi = a.o(); this.Df = a.o(); this.pv = a.s(); this.qv = a.s(); this.ov = a.o(); a.o(); this.OA = a.o(); a.pa(2) }, ed: function (a, b) { this.nv[a] = b } }; Lc.prototype = {
                load: function (a) {
                    this.If = a.file.s(); this.list = Array(this.If); var b, c = 0; for (b = 0; b < this.If; b++)this.list[b] = new ya, this.list[b].load(a.file), this.list[b].Mi + 1 > c && (c = this.list[b].Mi + 1), this.list[b].cr = a.Lc.ik(this.list[b].Df).Ge; this.ya = Array(c); for (b = 0; b < this.If; b++)this.ya[this.list[b].Mi] =
                        b
                }, jA: function (a) { return this.list[a] }, SH: function (a) { return a < this.ya.length ? this.list[this.ya[a]] : null }, jo: function () { var a; if (this.br < this.If) { do if (a = this.list[this.br++], 2 <= a.cr) return a; while (this.br < this.If) } return null }, Fq: function () { this.br = 0; return this.jo() }
            }; T.ht = 1; T.it = 2; T.tM = 4; T.et = 16; T.ft = 32; T.gt = 64; T.uM = 65536; T.qp = 131072; T.vM = 262144; T.prototype = {
                load: function (a) {
                    this.Ca = a.s(); this.uj = a.vC(); this.wj = a.vC(); this.ur = a.s(); this.wr = a.s(); a.Hb(); this.Ny = this.Ca; this.Qy = this.uj; this.Ry = this.wj;
                    this.Oy = this.ur; this.Py = this.wr
                }, reset: function () { this.Ca = this.Ny; this.uj = this.Qy; this.wj = this.Ry; this.ur = this.Oy; this.wr = this.Py; this.x = this.y = this.bk = this.ck = this.Wr = this.Xr = 0; this.eq = this.Bk = this.km = this.jm = null; this.$w(0); this.scale = 1; this.WC(1); this.XC(1); this.bD(this.app.na / 2); this.eD(this.app.xa / 2); this.aD(this.app.na / 2); this.dD(this.app.xa / 2); this.fD(!1); this.Ca & T.qp ? (this.de = !0, this.Qq()) : (this.de = !1, this.show()) }, lH: function () { this.fc.WJ() }, xG: function (a) {
                    null == this.jm && (this.jm = new N);
                    this.jm.add(a)
                }, Gy: function (a) { null == this.km && (this.km = new N); this.km.add(a) }, $p: function (a) { null == this.eq && (this.eq = new N); this.eq.add(a) }, aH: function (a, b) { this.fc = new Aa; this.fc.x = a; this.fc.y = b; this.Gb = new Aa; this.Gb.x = a; this.Gb.y = b; this.Ma = new Aa; this.Ma.x = a; this.Ma.y = b; this.$w(0); this.scale = 1; this.WC(1); this.XC(1); this.bD(this.app.na / 2); this.eD(this.app.xa / 2); this.aD(this.app.na / 2); this.dD(this.app.xa / 2); this.fD(!1); this.app.ie.ce(this.fc); this.app.ie.ce(this.Gb); this.app.ie.ce(this.Ma); this.tK() },
                $w: function (a) { this.angle = a; this.fc.angle = a; this.Gb.angle = a; this.Ma.angle = a }, WC: function (a) { this.hc = a; this.fc.hc = a; this.Gb.hc = a; this.Ma.hc = a }, XC: function (a) { this.ic = a; this.fc.ic = a; this.Gb.ic = a; this.Ma.ic = a }, bD: function (a) { this.Ka = a; this.fc.Ka = a; this.Gb.Ka = a; this.Ma.Ka = a }, eD: function (a) { this.Ia = a; this.fc.Ia = a; this.Gb.Ia = a; this.Ma.Ia = a }, aD: function (a) { this.ap = a = this.app.na - a; this.fc.ap = a; this.Gb.ap = a; this.Ma.ap = a }, dD: function (a) { this.cp = a = this.app.xa - a; this.fc.cp = a; this.Gb.cp = a; this.Ma.cp = a }, fD: function (a) {
                    this.bg =
                    a; this.fc.bg = a; this.Gb.bg = a; this.Ma.bg = a
                }, YJ: function (a, b) { this.fc.x = a; this.fc.y = b; this.Gb.x = a; this.Gb.y = b; this.Ma.x = a; this.Ma.y = b; this.show() }, tK: function () { this.Ca & T.et ? this.show() : this.Qq() }, Qq: function () { this.Ca &= ~T.qp; this.de && (this.fc.visible = !1, this.Gb.visible = !1, this.de = this.Ma.visible = !1) }, show: function () { 0 == this.de && (this.fc.visible = !0, this.Gb.visible = !0, this.de = this.Ma.visible = !0) }, zz: function () {
                    null != this.fc && (this.app.ie.removeChild(this.fc), this.fc = null); null != this.Gb && (this.app.ie.removeChild(this.Gb),
                        this.Gb = null); null != this.Ma && (this.app.ie.removeChild(this.Ma), this.Ma = null)
                }, wG: function (a, b, c, d) { var e = new aa; e.left = a; e.top = b; e.right = c; e.bottom = d; null == this.Bk && (this.Bk = new N); this.Bk.add(e) }, TH: function (a, b) { a += this.x; b += this.y; if (null != this.Bk) { var c, d; for (c = 0; c < this.Bk.size(); c++)if (d = this.Bk.get(c), a >= d.left && b >= d.top && a < d.right && b < d.bottom) return d } return null }, rj: function (a, b, c, d, e) {
                    b = b + this.x - a.Ka; c = c + this.y - a.Ia; var f = b + a.width, g = c + a.height, k = c; 0 != d && (k = g - d); var q, h; h = e == ta.ip ? this.jm :
                        this.km; if (null == h) return null; for (e = 0; e < h.size(); e++)if (q = h.get(e), q.x < f && q.x + q.width > b && q.y < g && q.y + q.height > k && q.rj(a, b, c, d)) return q; return null
                }, As: function (a, b, c, d, e, f) { f = f == ta.ip ? this.jm : this.km; if (null == f) return null; a += this.x; b += this.y; c += this.x; d += this.y; 0 != e && (b = d - e); for (e = 0; e < f.size(); e++) { var g = f.get(e); if (g.x < c && g.x + g.width > a && g.y < d && g.y + g.height > b && g.As(a, b, c, d)) return g } return null }
            }; ga.prototype = {
                yb: function (a, b, c) {
                    if (null != this.JI) if (this.type == r.JF) {
                        var d = this.Yd.oc, e; switch (d.Qi) {
                            case 1: switch (d.Gh) {
                                case 1: a.sd(b +
                                    this.x, c + this.y, this.width, this.height, this.Wj, this.Rd, this.Sd); break; case 2: a.vc(b + this.x, c + this.y, this.width, this.height, this.Wj, this.Rd, this.Sd); break; case 3: a.Lw(b + this.x, c + this.y, this.width, this.height, this.Wj, this.Rd, this.Sd)
                            }break; case 2: switch (d.Gh) {
                                case 1: a.sd(b + this.x, c + this.y, this.width, this.height, this.Wj, this.Rd, this.Sd); break; case 2: a.Kw(b + this.x, c + this.y, this.width, this.height, this.Wj, this.ou, 0 != this.xA, this.Rd, this.Sd); break; case 3: a.AC(b + this.x, c + this.y, this.width, this.height, this.Wj,
                                    this.ou, 0 != this.xA, this.Rd, this.Sd)
                            }break; case 3: switch (d.Gh) { case 2: e = this.app.ea.Ob(d.Fh); a.BC(e, b + this.x, c + this.y, this.width, this.height, this.Rd, this.Sd); break; case 3: e = this.app.ea.Ob(d.Fh), a.CC(e, b + this.x, c + this.y, this.width, this.height, this.Rd, this.Sd) }
                        }if (0 < this.borderWidth) switch (d.Gh) {
                            case 1: var f = e = 0, g = this.width, k = this.height; 0 != (d.oo & Ga.oF) && (e += g, g = -g); 0 != (d.oo & Ga.pF) && (f += k, k = -k); a.sd(b + this.x + e, c + this.y + f, b + this.x + e + g, c + this.y + f + k, this.borderColor, this.borderWidth); break; case 2: a.Yr(b +
                                this.x, c + this.y, this.width, this.height, this.borderColor, this.borderWidth); break; case 3: a.zC(b + this.x, c + this.y, this.width, this.height, 1, this.borderColor, this.borderWidth)
                        }
                    } else this.type == r.IF ? a.rd(this.Wc, b + this.x + this.Wc.Ka, c + this.y + this.Wc.Ia, 0, 1, 1, this.Rd, this.Sd) : null != this.U && this.U.yb(a, b, c); else a.rd(this.Wc, b + this.x + this.Wc.Ka, c + this.y + this.Wc.Ia, 0, 1, 1, this.Rd, this.Sd)
                }, RC: function (a, b) { this.Rd = a; this.Sd = b }, ed: function (a, b) {
                    b.fc.ce(this); this.type == r.my && b.$p(this); switch (this.Ye) {
                        case Y.Mp: b.xG(this);
                            b.Gy(this); break; case Y.ag: b.Gy(this); break; case Y.Gt: b.wG(this.x, this.y, this.x + this.width, this.y + this.height)
                    }
                }, rj: function (a, b, c, d) { var e; switch (this.type) { case 0: return e = this.height, this.Ye == Y.ag && (e = E.sp), a.ix(b, c, d, this.x, this.y, this.width, e, 0); case 1: if (0 != this.yl) return !0; e = F.Ej; this.Ye == Y.ag && (e = F.il); e = this.Wc.Af(e, 0, 1, 1); return a.rj(b, c, d, e, this.x, this.y, 0); case 11: if (0 != this.yl) return !0; e = F.Ej; this.Ye == Y.ag && (e = F.il); e = this.Wc.Af(e, 0, 1, 1); return a.rj(b, c, d, e, this.x, this.y, 0) }return !1 },
                As: function (a, b, c, d) { var e; switch (this.type) { case 0: if (this.Ye == Y.ag) { a = this.y + Math.min(this.height, E.sp); if (this.y < d && a > b) return !0; break } return !0; case 1: if (0 != this.yl) return !0; e = F.Ej; this.Ye == Y.ag && (e = F.il); e = this.Wc.Af(e, 0, 1, 1); return e.ix(this.x, this.y, 0, a, b, c, d, 0); case 11: if (0 != this.yl) return !0; e = F.Ej; this.Ye == Y.ag && (e = F.il); e = this.Wc.Af(e, 0, 1, 1); return e.ix(this.x, this.y, 0, a, b, c, d, 0) }return !1 }
            }; r.bO = 1; r.$N = 2; r.dO = 4; r.cO = 8; r.Op = 16; r.SF = 32; r.aO = 64; r.ZN = 1; r.YN = 2; r.vy = 4; r.be = 7; r.ny = -7; r.wN = -6; r.vN =
                -5; r.en = -4; r.Lp = -3; r.yN = -2; r.zN = -1; r.JF = 0; r.IF = 1; r.we = 2; r.fh = 3; r.oy = 4; r.py = 5; r.ly = 6; r.dn = 7; r.xN = 8; r.jy = 9; r.uN = 10; r.my = 11; r.ky = 10; r.Yf = 32; r.It = 32768; r.prototype = { sv: function (a) { this.po = a.o(); this.Ge = a.o(); this.Lh = a.o(); a.pa(2); this.Zv = a.s(); this.$v = a.s() }, load: function (a) { a.seek(this.UB); switch (this.Ge) { case 0: this.oc = new Ga; break; case 1: this.oc = new Nc; break; default: this.oc = new w }this.oc.load(a, this.Ge); this.VB = 0 }, IK: function () { this.oc = null }, kc: function (a, b) { this.oc.kc(a, b) } }; Mc.prototype = {
                    Ph: function (a) {
                        this.Vi =
                        a.s(); this.xb = Array(this.Vi); var b; for (b = this.wg = 0; b < this.Vi; b++)for (var c = 0, d; 32639 != c;)if (c = a.o(), a.o(), d = a.s(), 0 != d) { d = a.O + d; switch (c) { case 17476: this.xb[b] = new r; this.xb[b].sv(a); this.xb[b].po >= this.wg && (this.wg = this.xb[b].po + 1); break; case 17477: this.xb[b].aw = a.Hb(); break; case 17478: this.xb[b].UB = a.O }a.seek(d) } this.Mh = Array(this.wg); for (b = 0; b < this.Vi; b++)this.Mh[this.xb[b].po] = b; this.qo = Array(this.wg); this.Ui = Array(this.wg); for (a = 0; a < this.wg; a++)this.qo[a] = 0, this.Ui[a] = 0
                    }, ik: function (a) { return this.xb[this.Mh[a]] },
                    XJ: function () { var a; for (a = 0; a < this.Vi; a++)this.xb[a].Lh &= ~r.Op }, qK: function (a) { this.xb[this.Mh[a]].Lh |= r.Op }, hA: function () { var a; for (a = 0; a < this.Vi; a++)if (0 != (this.xb[a].Lh & r.Op)) return this.vq = a, this.xb[a]; return null }, mA: function () { if (this.vq < this.Vi) { var a; for (a = this.vq + 1; a < this.Vi; a++)if (0 != (this.xb[a].Lh & r.Op)) return this.vq = a, this.xb[a] } return null }, bf: function () { var a; for (a = 0; a < this.wg; a++)this.qo[a] = 0 }, pj: function (a) { this.qo[a] = 1 }, load: function (a) {
                        var b; for (b = 0; b < this.wg; b++)if (0 != this.qo[b]) {
                            if (0 ==
                                this.Ui[b] || 0 != this.Ui[b] && 0 != (this.xb[this.Mh[b]].VB & r.SF)) this.xb[this.Mh[b]].load(a), this.Ui[b] = 1
                        } else 0 != this.Ui[b] && (this.xb[this.Mh[b]].IK(), this.Ui[b] = 0); this.bf()
                    }, kc: function (a, b) { var c; for (c = 0; c < this.wg; c++)0 != this.Ui[c] && this.xb[this.Mh[c]].kc(a, b) }
                }; Y.qy = 0; Y.Mp = 1; Y.ag = 2; Y.Gt = 3; Y.KF = 4; Nc.prototype = { load: function (a) { a.pa(4); this.QB = a.o(); this.MB = a.o(); this.NB = a.s(); this.OB = a.s(); this.Fh = a.o() }, kc: function (a) { null != a && (a = a.rh(this.Fh), -1 != a && (this.Fh = a)) } }; Ga.oF = 1; Ga.pF = 2; Ga.prototype = {
                    load: function (a) {
                        a.pa(4);
                        this.QB = a.o(); this.MB = a.o(); this.NB = a.s(); this.OB = a.s(); this.Ar = a.o(); this.zr = a.Yc(); this.Gh = a.o(); this.Qi = a.o(); if (1 == this.Gh) this.oo = a.o(); else switch (this.Qi) { case 1: this.tg = this.fm = a.Yc(); break; case 2: this.tg = a.Yc(); this.fm = a.Yc(); this.no = a.s(); break; case 3: this.Fh = a.o() }
                    }, kc: function (a) { 3 == this.Qi && null != a && (a = a.rh(this.Fh), -1 != a && (ocImage = a)) }
                }; w.IN = 1; w.HN = 2; w.OF = 4; w.uy = 8; w.gh = 16; w.Kj = 32; w.KN = 64; w.MN = 128; w.RF = 256; w.Mj = 512; w.JN = 1024; w.QF = 2048; w.Ht = 4096; w.ty = 8192; w.Lj = 16384; w.sy = 32768; w.LN = 65536;
    w.ry = 131072; w.PF = 1048576; w.AN = 1; w.GN = 2; w.MF = 4; w.Np = 8; w.CN = 4; w.BN = 48; w.FN = 16; w.EN = 32; w.DN = 48; w.LF = 64; w.NF = 128; w.ON = 1; w.VN = 2; w.UN = 4; w.WN = 8; w.TN = 16; w.QN = 32; w.NN = 64; w.SN = 128; w.RN = 256; w.XN = 512; w.PN = 1024; w.prototype = Y; w.prototype = {
        load: function (a, b) {
            var c = a.O; this.Wv = Array(8); var d; a.pa(4); a.pa(2); var e = a.o(); a.pa(2); var f = a.o(), g = a.o(), k = a.o(); this.vg = a.s(); for (d = 0; 8 > d; d++)this.Wv[d] = a.T(); a.o(); var q = a.o(), h = a.o(); this.Ri = a.o(); var m = a.o(); this.uc = a.s(); a.Yc(); d = a.s(); var n = a.s(); this.mo = this.gm = null;
            0 != k && (a.seek(c + k), this.ug = new Jd, this.ug.load(a)); 0 != q && (a.seek(c + q), this.Hh = new Ed, this.Hh.load(a, 0 != (this.Ri & w.NF))); 0 != h && (a.seek(c + h), this.Si = new Dd, this.Si.load(a)); 0 != g && (a.seek(c + g), this.Pi = new Ka, this.Pi.load(a)); 0 != f && (a.seek(c + f), this.Pc = new Pc, this.Pc.load(a)); 0 != m && (a.seek(c + m), f = a.s(), a.pa(4), this.SB = a.s(), a.s(), this.RB = a.s(), 0 != f - 20 && (this.PB = a.O)); 0 != d && (a.seek(c + d), this.gm = new sa, this.gm.load(a)); 0 != n && (a.seek(c + n), this.mo = new sa, this.mo.load(a)); if (0 != e) switch (a.seek(c + e), b) {
                case 3: case 4: this.Pc =
                    new Rc; this.Pc.load(a); break; case 5: case 6: case 7: this.gb = new ha; this.gb.load(a); break; case 8: this.Pc = new Qc; this.Pc.load(a); this.vg &= ~(w.Mj | w.Ht | w.OF); break; case 9: this.Pc = new Oc, this.Pc.load(a)
            }
        }, kc: function (a, b) { null != this.Pi && this.Pi.kc(a); null != this.Pc && this.Pc.kc(a, b); null != this.gb && this.gb.kc(a, b) }
    }; Oc.prototype = { load: function (a) { a.pa(4); this.Ih = a.s(); this.Jh = a.s(); a.o(); this.TB = a.o(); this.Ed = a.s(); a.pa(8); this.Xv = a.Hb() }, kc: function () { } }; Pc.prototype = {
        load: function (a) {
            a.pa(2); this.oz = a.s();
            this.qz = a.s(); this.pz = a.s()
        }, kc: function () { }
    }; ha.RL = 0; ha.QL = 1; ha.kE = 2; ha.jE = 3; ha.PL = 4; ha.SL = 5; ha.Rs = 256; ha.prototype = {
        load: function (a) {
            a.pa(4); this.Ih = a.s(); this.Jh = a.s(); this.Yv = a.o(); this.Ze = a.o(); this.yk = a.o(); this.Ti = a.o(); switch (this.Ze) {
                case 1: case 4: this.am = a.o(); this.frames = Array(this.am); var b; for (b = 0; b < this.am; b++)this.frames[b] = a.o(); break; case 2: case 3: case 5: if (this.Ar = a.o(), this.zr = a.Yc(), this.Gh = a.o(), this.Qi = a.o(), 1 == this.Gh) this.oo = a.o(); else switch (this.Qi) {
                    case 1: this.tg = a.Yc();
                        break; case 2: this.tg = a.Yc(), this.fm = a.Yc(), this.no = a.s()
                }
            }
        }, kc: function (a, b) { switch (this.Ze) { case 1: case 4: var c; for (c = 0; c < this.am; c++)null != a && a.rh(this.frames[c]); break; case 5: null != b && b.rh(this.Ti) } }
    }; Qc.prototype = { load: function (a) { a.s(); a.s(); this.Ed = a.s(); a.Yc(); this.Ih = a.s(); this.Jh = a.s(); a.pa(4); var b = a.s(); this.text = a.Hb(b) }, kc: function () { } }; na.zO = 0; na.yO = 1; na.AO = 2; na.BO = 4; na.xO = 15; na.oG = 256; na.Ay = 512; na.prototype = {
        load: function (a) { this.Om = a.T(); this.Yo = a.o(); this.lx = a.Yc(); this.ai = a.Hb() },
        kc: function (a, b) { null != b && b.rh(this.Om) }
    }; Rc.prototype = { load: function (a) { var b = a.O; a.pa(4); this.lw = a.s(); this.mw = a.s(); this.Ak = a.s(); this.Rb = Array(this.Ak); var c = Array(this.Ak), d; for (d = 0; d < this.Ak; d++)c[d] = a.s(); for (d = 0; d < this.Ak; d++)this.Rb[d] = new na, a.seek(b + c[d]), this.Rb[d].load(a) }, kc: function (a, b) { var c; for (c = 0; c < this.Ak; c++)this.Rb[c].kc(a, b) } }; G.lf = 1; G.Ux = 2; G.NM = 4; G.hi = 8; G.ii = 16; G.YE = 32; G.Xg = 8192; G.MM = 16384; G.OM = 32768; G.prototype = {
        VC: function (a, b) {
            if (this.b.Cb != a || this.b.Db != b) {
                0 <= a && (this.b.Cb =
                    a); 0 <= b && (this.b.Db = b); this.b.L = !0; var c = this.c.h.ea.hk(this.b.Pa, this.b.hb, this.b.Cb, this.b.Db); this.K = c.width; this.J = c.height; this.ha = c.Ka; this.ia = c.Ia
            }
        }, Y: function () { }, handle: function () { }, oh: function () { }, lz: function () { }, display: function () { }, Fb: function () { }, KH: function () { return null }, RC: function () { }, Tt: function () { }, vl: function () { }, Bi: function () { return 0 }, $k: function () { }, lk: function () { }, Lm: function () { }, Vc: function () { return -1 }, Ml: function () { return 0 }, te: function () { }, ti: function () { }, Kl: function () { }
    };
    Sc.prototype = n.extend(new G, {
        handle: function () { this.F.handle(); this.b.L && (this.b.L = !1) }, Tt: function (a, b, c, d, e) { this.za = this.c.w.Ua[d]; this.wa = e; this.za.Ma.ce(this) }, yb: function (a, b, c) {
            if (this.wa && (0 == (this.X & G.hi) || this.F.Ig)) {
                var d = this.F.Sb; this.F.W & v.aG && (d |= v.yx); var e = this.c.h.ea.Ob(this.b.Pa); e && (this.dl ? a.fj(this.dl, b + this.u - this.c.ca + this.za.x - e.Ka, c + this.v - this.c.da + this.za.y - e.Ia, this.dl.width * this.b.Cb, this.dl.height * this.b.Db, d, this.F.Tb) : a.rd(e, b + this.u - this.c.ca + this.za.x, c + this.v - this.c.da +
                    this.za.y, this.b.hb, this.b.Cb, this.b.Db, d, this.F.Tb))
            }
        }, Bi: function () { return this.za.Ma.removeChild(this) }, $k: function () { this.wa = !0 }, lk: function () { this.wa = !1 }, Vc: function () { return this.za.Ma.Vc(this) }, Ml: function () { return this.za.Ma.children.length }, te: function (a) { a >= this.za.Ma.children.length && (a = this.za.Ma.children.length); 0 > a && (a = 0); this.za.Ma.te(this, a) }, Lm: function (a) { this.F.Sb = v.kf; this.F.Tb = a }
    }); J.Bx = 1; J.QD = 2; J.SD = 4; J.LL = 8; J.TD = 16; J.JL = 32; J.wL = 64; J.NL = 128; J.vL = 256; J.OL = 512; J.ML = 1024; J.zL = 2048;
    J.hp = 4096; J.yL = 8192; J.Ax = 16384; J.FL = 32768; J.OD = 65536; J.GL = 131072; J.xL = 262144; J.RD = 524288; J.HL = 1048576; J.PD = 2097152; J.EL = 12582912; J.BL = 0; J.DL = 4194304; J.CL = 8388608; J.AL = 12582912; J.KL = 16777216; J.IL = 33554432; J.prototype = n.extend(new G, {
        lD: function (a, b, c) {
            b = a.Pc; this.K = b.Ih; this.J = b.Jh; this.Ed = b.Ed; 0 != (this.Ed & J.TD) && (this.Ed |= J.OD); -1 == c && (c = 0, 0 != (this.Ed & J.Ax) && (c = b.TB)); null == b.Xv || 0 != b.Xv.length || 0 == (this.Ed & J.Ax) || c >= this.c.h.xf || c == this.c.h.xe || (this.de = 0 != (a.Ri & w.Np) ? !0 : !1, this.Ec = new Aa, this.Ec.x =
                this.u - this.c.ca, this.Ec.y = this.v - this.c.da, this.c.h.ie.ce(this), this.jw = this.u, this.kw = this.v, this.B = new m(this.c.h, this.c.h.file, this.c.h.path, !0), this.B.SC(this.c.h, c, this.Ed, this.Ec, this.K, this.J), this.B.digest(), 0 != (this.Ed & J.hp) && null == this.c.h.Ff && (this.c.h.Ff = this, this.c.h.G.pause()), this.B.fx(), this.B.vs((this.c.h.vj + this.Ec.x) * this.c.h.hc, (this.c.h.xj + this.Ec.y) * this.c.h.ic), this.B.Uo(), this.c.h.ib.push(this.B))
        }, Y: function (a) { this.lD(a, !0, -1) }, handle: function () {
            this.A.move(); if (null != this.B) {
                if (this.jw !=
                    this.u || this.kw != this.v) this.Ec.x = this.u - this.c.ca, this.Ec.y = this.v - this.c.da, this.jw = this.u, this.kw = this.v, this.B.vs(this.Ec.x * this.c.h.hc, this.Ec.y * this.c.h.ic), this.JK(); 0 == this.B.Uo() ? (this.xq(), 0 != (this.Ed & J.hp) && null != this.B.Aa && this.B.Aa.Ff == this && (this.B.Aa.Ff = null, this.B.Aa.G.resume()), this.B = null) : (this.ZB = this.level, this.level = this.B.xe)
            }
        }, yb: function (a) { this.de && null != this.B && this.B.Hz(a, this.Ec.x, this.Ec.y) }, Fb: function () {
            if (null != this.B) {
                switch (this.B.Za) { case 3: this.B.wn() }this.xq();
                this.B.Mz(); 0 != (this.Ed & J.hp) && null != this.B.Aa && this.B.Aa.Ff == this && (this.B.Aa.Ff = null, this.B.Aa.G.resume()); this.B = null
            }
        }, xq: function () { var a; for (a = 0; a < this.c.h.ib.length; a++)if (this.c.h.ib[a] == this.B) { this.c.h.ib.splice(a, 1); break } this.c.h.ie.removeChild(this.Ec) }, tQ: function () { if (null != this.B) { if (null != this.B.G) { this.B.G.ub = h.$x; return } this.Fb(!0) } this.lD(this.N, !1, -1) }, zP: function () {
            null != this.B && (null != this.B.G && (this.B.G.ub = h.vp), 0 != (this.Ed & J.hp) && null != this.B.Aa && this.B.Aa.Ff == this && (this.B.Aa.Ff =
                null, this.B.Aa.G.resume()))
        }, Qq: function () { this.de = !1 }, show: function () { this.de = !0 }, dQ: function (a) { null != this.B && null != this.B.G && 0 <= a && 4096 > a && (this.B.G.ub = h.wp, this.B.G.Hm = 32768 | a) }, Bb: function () { null != this.B && null != this.B.G && (this.B.G.ub = h.xp) }, kQ: function () { null != this.B && null != this.B.G && (this.B.G.ub = h.ot) }, uQ: function () { null != this.B && null != this.B.G && (this.B.G.ub = h.rF) }, pause: function () { null != this.B && null != this.B.G && this.B.G.pause() }, resume: function () { null != this.B && null != this.B.G && this.B.G.resume() },
        CQ: function (a, b) { null != this.B && this.B.nK(a, b) }, BQ: function (a, b) { null != this.B && this.B.mK(a, b) }, uI: function () { return null != this.B && null != this.B.G ? 0 != this.B.G.Pf : !1 }, bP: function () { return null == this.B }, cQ: function () { return this.de }, FP: function () { return this.level != this.ZB }, RP: function (a) { return null != this.B ? this.B.iA(a) : "" }, SP: function (a) { return null != this.B ? this.B.Nu(a) : 0 }, PP: function () { return this.level + 1 }, bx: function () { }, ax: function () { }, gP: function () {
            null != this.B && this.de && (hoAdRunHeader.h.xJ.removeChild(this),
                hoAdRunHeader.h.xJ.ce(this))
        }, JK: function () { if (null != this.B && null != this.B.G) { var a = this.B.G, b = 0, c; for (c = 0; c < a.tb; c++) { for (; null == a.H[b];)b++; var d = a.H[b]; b++; d.Kl() } } }, ti: function () { this.B.vs((this.c.h.vj + this.Ec.x) * this.c.h.hc, (this.c.h.xj + this.Ec.y) * this.c.h.ic); null != this.B && this.B.sm() }
    }); Tc.prototype = { Y: function () { this.Db = this.Cb = 1; this.hb = 0; this.Rc = -1 }, Fb: function () { } }; ca.Hx = 15; ca.eE = 240; ca.fE = 4; ca.cE = 61440; ca.dE = 12; ca.gE = 512; ca.iE = 1024; ca.hE = 2048; ca.prototype = n.extend(new G, {
        Y: function () {
            this.Ac =
            -1; this.Mo = this.zc = 0; this.K = this.J = 1; if (null == this.N.gb) this.J = this.$c = this.K = this.Zc = 1; else { var a = this.N.gb; this.K = this.Zc = a.Ih; this.J = this.$c = a.Jh; this.yd = a.yk; this.type = a.Ze; switch (this.type) { case 5: var b = this.Ac; -1 == b && (b = a.Ti); this.font = this.c.h.Nb.zf(b); this.Ad = this.font.Se(); this.zc = a.tg; break; case 2: case 3: this.zc = a.tg, this.Mo = a.fm } } a = this.N.Pc; this.ob = a.qz; this.Hc = a.pz; this.sa = a.oz; this.ui = !1
        }, Fb: function () { }, handle: function () { this.F.handle(); this.b.L && (this.b.L = !1) }, gg: function () {
            var a =
                this.N.gb; if (5 == this.type) { var b = rsFont; -1 == b && (b = a.Ti); return this.c.h.Nb.Jq(b) } return null
        }, Zk: function (a, b) { 5 == this.type && (this.Ac = this.c.h.Nb.cq(a), this.font = this.c.h.Nb.zf(this.Ac), this.Ad = this.font.Se(), null != b && (this.K = this.Zc = b.right - b.left, this.J = this.$c = b.bottom - b.top), this.fb()) }, Iq: function () { return this.zc }, ts: function (a) { this.zc = a; this.fb() }, qu: function (a) { 0 != this.ui || n.gv(a) || (this.ui = !0) }, qn: function (a) {
            0 == this.ui ? (a = n.zd(a), a < this.ob && (a = this.ob), a > this.Hc && (a = this.Hc), a != Math.round(this.sa) &&
                (this.sa = a, this.b.L = !0, this.fb())) : (a < this.ob && (a = this.ob), a > this.Hc && (a = this.Hc), a != this.sa && (this.sa = a, this.b.L = !0, this.fb()))
        }, YG: function (a) { this.qu(a); this.qn(this.sa + a) }, ZG: function (a) { this.qu(a); this.qn(this.sa - a) }, uP: function (a) { this.ob = a; this.qn(this.sa) }, tP: function (a) { this.Hc = a; this.qn(this.sa) }, rP: function (a) { this.zc = a; this.fb() }, sP: function (a) { this.Mo = a; this.fb() }, qP: function () { return this.sa }, pP: function () { return this.ob }, oP: function () { return this.Hc }, mP: function () { return this.zc }, nP: function () { return this.Mo },
        vl: function (a, b, c, d, e, f) { null != this.N.gb && 1 != this.La && (this.La = !0, this.My = d, this.wa = e, this.za = this.c.w.Ua[c], this.ja = this.My ? this.za.Gb : this.za.Ma, 0 > f ? this.ja.ce(this) : this.ja.aq(this, f), 5 != this.type && this.fb()) }, Bi: function () { if (null == this.N.gb || 0 == this.La) return -1; this.La = !1; var a = this.ja.Vc(this); this.ja.removeChild(this); return a }, Vc: function () { return this.La ? this.ja.Vc(this) : -1 }, Ml: function () { return this.La ? this.ja.children.length : -1 }, te: function (a) { this.La && this.ja.te(this, a) }, $k: function () {
            null !=
            this.N.gb && 0 == this.wa && (this.wa = !0, this.fb())
        }, lk: function () { null != this.N.gb && 1 == this.wa && (this.wa = !1) }, oh: function () { this.Qd || this.fb() }, fb: function () {
            var a, b = this.N.gb; switch (this.type) {
                case 4: this.Hg = this.Hc <= this.ob ? 0 : Math.floor((this.sa - this.ob) * b.am / (this.Hc - this.ob)); this.Hg = Math.min(this.Hg, b.am - 1); a = this.c.h.ea.Ob(b.frames[Math.max(this.Hg, 0)]); this.K = a.width; this.J = a.height; this.ha = a.Ka; this.ia = a.Ia; break; case 2: case 3: a = this.Zc; b.Ze == ha.kE && (a = this.$c); this.Hg = this.Hc <= this.ob ? 0 : (this.sa -
                    this.ob) * a / (this.Hc - this.ob); b.Ze == ha.jE ? (this.ia = 0, this.J = this.$c, this.K = this.Hg, this.ha = 0 != (b.yk & ha.Rs) ? this.Hg - this.Zc : 0) : (this.ha = 0, this.K = this.Zc, this.J = this.Hg, this.ia = 0 != (b.yk & ha.Rs) ? this.Hg - this.$c : 0); break; case 1: a = 0 == this.ui ? n.Ii(this.sa, this.yd) : n.zu(this.sa, this.yd); var c, d, e, f = 0, g = 0; for (c = a.length - 1; 0 <= c; c--)d = a.charCodeAt(c), e = 0, 45 == d ? e = b.frames[10] : 46 == d ? e = b.frames[12] : 43 == d ? e = b.frames[11] : 101 == d || 69 == d ? e = b.frames[13] : 48 <= d && 57 >= d && (e = b.frames[d - 48]), 0 <= e && (d = this.c.h.ea.Ob(e), null !=
                        d ? (f += d.width, g = Math.max(g, d.height)) : toto = 2); this.ha = f; this.ia = g; this.K = f; this.J = g; break; case 5: a = 0 == this.ui ? n.Ii(this.sa, this.yd) : n.zu(this.sa, this.yd), this.ha = b = null != this.jb ? this.jb.measureText(a, this.font) : (new ia(this.c.h, 16, 16)).measureText(a, this.font), this.ia = this.$c / 2 + this.Ad / 2, this.K = b, this.J = this.Ad, null == this.jb ? this.jb = new ia(this.c.h, this.K, this.J) : (this.K > this.jb.width || this.J > this.jb.height) && this.jb.resize(this.K, this.J), this.jb.xs(a, n.kp | n.lp, new aa(0, 0, 1E3, 1E3), this.font, this.zc)
            }this.Qd =
                !0
        }, yb: function (a, b, c) {
            if (this.wa && this.Qd) {
                var d, e, f; d = this.N.gb; b = b + this.u - this.ha - this.c.ca + this.za.x; c = c + this.v - this.ia - this.c.da + this.za.y; var g = this.K, k = this.J; switch (this.type) {
                    case 4: d = this.c.h.ea.Ob(d.frames[Math.max(this.Hg, 0)]); a.rd(d, b + d.Ka, c + d.Ia, 0, 1, 1, this.F.Sb, this.F.Tb); break; case 2: case 3: e = this.zc; f = this.Mo; switch (d.Qi) { case 1: a.vc(b, c, g, k, e, this.F.Sb, this.F.Tb); break; case 2: 0 != (d.yk & ha.Rs) && (dl = e, e = f, f = dl), a.Kw(b, c, g, k, e, f, 0 != d.no, this.F.Sb, this.F.Tb) }break; case 1: e = 0 == this.ui ?
                        n.Ii(this.sa, this.yd) : n.zu(this.sa, this.yd); for (f = 0; f < e.length; f++)k = e.charCodeAt(f), g = 0, 45 == k ? g = d.frames[10] : 46 == k || 44 == k ? g = d.frames[12] : 43 == k ? g = d.frames[11] : 69 == k || 101 == k ? g = d.frames[13] : 48 <= k && 57 >= k && (g = d.frames[k - 48]), g = this.c.h.ea.Ob(g), null != g && (a.rd(g, b + g.Ka, c + g.Ia, 0, 1, 1, this.F.Sb, this.F.Tb), b += g.width); break; case 5: this.jb.yb(a, b, c, this.F.Sb, this.F.Tb)
                }
            }
        }, Lm: function (a) { this.F.Sb = v.kf; this.F.Tb = a }
    }); Uc.prototype = n.extend(new G, {
        Y: function () {
            this.Ac = -1; this.zc = 0; var a = this.N.gb; this.K = this.Zc =
                a.Ih; this.J = this.$c = a.Jh; this.type = a.Ze; this.zc = a.tg; this.Xk = a.Yv; this.sa = this.c.h.pA()[this.Xk - 1]; this.yd = a.yk; if (5 == this.type) { var b = this.Ac; -1 == b && (b = a.Ti); this.font = this.c.h.Nb.zf(b); this.Ad = this.font.Se() }
        }, Fb: function () { }, handle: function () { var a = this.c.h.pA()[this.Xk - 1]; a != this.sa && (this.sa = a, this.fb()); this.F.handle(); this.b.L && (this.b.L = !1) }, gg: function () { var a = this.N.gb; if (5 == a.Ze) { var b = this.Ac; -1 == b && (b = a.Ti); return this.c.h.Nb.Jq(b) } return null }, Zk: function (a, b) {
            5 == type && (this.Ac = hoAdRunHeader.h.Nb.cq(a),
                a = this.c.h.Nb.zf(this.Ac), this.Ad = a.Se(), null != b && (this.K = this.Zc = b.right - b.left, this.J = this.$c = b.bottom - b.top), this.fb())
        }, Iq: function () { return this.zc }, ts: function (a) { this.zc = a; this.fb() }, vl: function (a, b, c, d, e, f) { null != this.N.gb && 1 != this.La && (this.La = !0, this.wa = e, this.za = this.c.w.Ua[c], this.ja = d ? this.za.Gb : this.za.Ma, 0 > f ? this.ja.ce(this) : this.ja.aq(this, f), 5 != this.type && this.fb()) }, Bi: function () {
            if (null == this.N.gb || 0 == this.La) return -1; this.La = !1; var a = this.ja.Vc(this); this.ja.removeChild(this);
            return a
        }, Vc: function () { return this.La ? this.ja.Vc(this) : -1 }, Ml: function () { return this.La ? this.ja.children.length : -1 }, te: function (a) { this.La && this.ja.te(this, a) }, $k: function () { null != this.N.gb && 0 == this.wa && (this.wa = !0, this.fb()) }, lk: function () { null != this.N.gb && 1 == this.wa && (this.wa = !1) }, ZC: function (a) { a != this.sa && (this.sa = a, this.fb()) }, oh: function () { this.Qd || this.fb() }, fb: function () {
            this.Qd = !0; this.K = this.J = 1; if (null != this.N.gb) {
                var a = this.N.gb, b, c = n.Ii(this.sa, this.yd); switch (a.Ze) {
                    case 1: var d, e, f =
                        0, g = 0; for (d = c.length - 1; 0 <= d; d--)e = c.charCodeAt(d), b = 0, 45 == e ? b = a.frames[10] : 46 == e ? b = a.frames[12] : 43 == e ? b = a.frames[11] : 101 == e || 69 == e ? b = a.frames[13] : 48 <= e && 57 >= e && (b = a.frames[e - 48]), 0 <= b && (b = this.c.h.ea.Ob(b), f += b.width, g = Math.max(g, b.height)); this.ha = f; this.ia = g; this.K = f; this.J = g; break; case 5: this.ha = a = null != this.jb ? this.jb.measureText(c, this.font) : (new ia(this.c.h, 8, 8)).measureText(c, this.font), this.ia = this.$c / 2 + this.Ad / 2, this.K = a, this.J = this.Ad, null == this.jb ? this.jb = new ia(this.c.h, this.K, this.J) :
                            (this.K > this.jb.width || this.J > this.jb.height) && this.jb.resize(this.K, this.J), this.jb.xs(c, n.kp | n.lp, new aa(0, 0, 1E3, 1E3), this.font, this.zc)
                }
            }
        }, yb: function (a, b, c) {
            if (this.wa && this.Qd) {
                this.globalAlpha = this.alpha; this.globalCompositeOperation = this.Yj; var d = this.N.gb; b = b + this.u - this.ha - this.c.ca + this.za.x; var e = c + this.v - this.ia - this.c.da + this.za.y; c = n.Ii(this.sa, this.yd); switch (this.type) {
                    case 1: var f, g; for (f = 0; f < c.length; f++) {
                        var k = c.charCodeAt(f); g = 0; 45 == k ? g = d.frames[10] : 46 == k || 44 == k ? g = d.frames[12] :
                            43 == k ? g = d.frames[11] : 69 == k || 101 == k ? g = d.frames[13] : 48 <= k && 57 >= k && (g = d.frames[k - 48]); g = this.c.h.ea.Ob(g); a.rd(g, b + g.Ka, e + g.Ia, 0, 1, 1, this.F.Sb, this.F.Tb); b += g.width
                    } break; case 5: this.jb.yb(a, b, e, this.F.Sb, this.F.Tb)
                }
            }
        }, Lm: function (a) { this.F.Sb = v.kf; this.F.Tb = a }
    }); Vc.prototype = n.extend(new G, {
        Y: function () {
            this.Ac = -1; this.zc = 0; var a = this.N.gb; this.K = this.Zc = a.Ih; this.J = this.$c = a.Jh; this.type = a.Ze; this.zc = a.tg; this.Xk = a.Yv; this.sa = this.c.h.kA()[this.Xk - 1]; this.yd = a.yk; if (5 == this.type) {
                var b = this.Ac; -1 ==
                    b && (b = a.Ti); this.font = this.c.h.Nb.zf(b); this.Ad = this.font.Se()
            }
        }, Fb: function () { }, handle: function () { var a = this.c.h.kA()[this.Xk - 1]; a != this.sa && (this.sa = a, this.fb()); this.F.handle(); this.b.L && (this.b.L = !1) }, gg: function () { var a = this.N.gb; if (5 == a.Ze) { var b = this.Ac; -1 == b && (b = a.Ti); return this.c.h.Nb.Jq(b) } return null }, Zk: function (a, b) { 5 == type && (this.Ac = hoAdRunHeader.h.Nb.cq(a), a = this.c.h.Nb.zf(this.Ac), this.Ad = a.Se(), null != b && (this.K = this.Zc = b.right - b.left, this.J = this.$c = b.bottom - b.top), this.fb()) }, Iq: function () { return this.zc },
        ts: function (a) { this.zc = a; this.fb() }, vl: function (a, b, c, d, e, f) { null != this.N.gb && 1 != this.La && (this.La = !0, this.wa = e, this.za = this.c.w.Ua[c], this.ja = d ? this.za.Gb : this.za.Ma, 0 > f ? this.ja.ce(this) : this.ja.aq(this, f), 5 != this.type && this.fb()) }, Bi: function () { if (null == this.N.gb || 0 == this.La) return -1; this.La = !1; var a = this.ja.Vc(this); this.ja.removeChild(this); return a }, Vc: function () { return this.La ? this.ja.Vc(this) : -1 }, Ml: function () { return this.La ? this.ja.children.length : -1 }, te: function (a) {
            this.La && this.ja.te(this,
                a)
        }, $k: function () { null != this.N.gb && 0 == this.wa && (this.wa = !0, this.fb()) }, lk: function () { null != this.N.gb && 1 == this.wa && (this.wa = !1) }, ZC: function (a) { a != this.sa && (this.sa = a, this.fb()) }, oh: function () { this.Qd || this.fb() }, fb: function () {
            this.Qd = !0; this.K = this.J = 1; if (null != this.N.gb) {
                var a = this.N.gb; switch (a.Ze) {
                    case 4: if (0 != this.sa) { var b = this.c.h.ea.Ob(a.frames[0]), c = this.sa * b.width; c <= this.Zc ? (this.K = c, this.J = b.height) : (this.K = this.Zc, this.J = (this.Zc / b.width + this.sa - 1) * b.height); break } this.K = this.J = 1; break;
                    case 1: var d, e, b, f = 0, g = 0, c = n.Ii(this.sa, this.yd); for (d = c.length - 1; 0 <= d; d--)b = c.charCodeAt(d), e = 0, 45 == b ? e = a.frames[10] : 46 == b ? e = a.frames[12] : 43 == b ? e = a.frames[11] : 101 == b || 69 == b ? e = a.frames[13] : 48 <= b && 57 >= b && (e = a.frames[b - 48]), 0 <= e && (b = this.c.h.ea.Ob(e), f += b.width, g = Math.max(g, b.height)); this.ha = f; this.ia = g; this.K = f; this.J = g; break; case 5: c = n.Ii(this.sa, this.yd), this.ha = a = null != this.jb ? this.jb.measureText(c, this.font) : (new ia(this.c.h, 8, 8)).measureText(c, this.font), this.ia = this.$c / 2 + this.Ad / 2, this.K = a,
                        this.J = this.Ad, null == this.jb ? this.jb = new ia(this.c.h, this.K, this.J) : (this.K > this.jb.width || this.J > this.jb.height) && this.jb.resize(this.K, this.J), this.jb.xs(c, n.kp | n.lp, new aa(0, 0, 1E3, 1E3), this.font, this.zc)
                }
            }
        }, yb: function (a, b, c) {
            if (this.wa && this.Qd) {
                this.globalAlpha = this.alpha; this.globalCompositeOperation = this.Yj; var d, e = this.N.gb; b = b + this.u - this.ha - this.c.ca + this.za.x; c = c + this.v - this.ia - this.c.da + this.za.y; switch (this.type) {
                    case 1: var f, g; d = n.Ii(this.sa, this.yd); for (f = 0; f < d.length; f++) {
                        var k = d.charCodeAt(f);
                        g = 0; 45 == k ? g = e.frames[10] : 46 == k || 44 == k ? g = e.frames[12] : 43 == k ? g = e.frames[11] : 69 == k || 101 == k ? g = e.frames[13] : 48 <= k && 57 >= k && (g = e.frames[k - 48]); g = this.c.h.ea.Ob(g); a.rd(g, b + g.Ka, c + g.Ia, 0, 1, 1, this.F.Sb, this.F.Tb); b += g.width
                    } break; case 4: if (0 != this.sa) { d = b + this.K; f = c + this.J; var k = b, q = this.sa; for (g = this.c.h.ea.Ob(e.frames[0]); c < f && 0 < q; c += g.height)for (b = k; b < d && 0 < q; b += g.width, --q)a.rd(g, b + g.Ka, c + g.Ia, 0, 1, 1, this.F.Sb, this.F.Tb) } break; case 5: this.jb.yb(a, b, c, this.F.Sb, this.F.Tb)
                }
            }
        }, Lm: function (a) {
            this.F.Sb = v.kf;
            this.F.Tb = a
        }
    }); Wc.prototype = n.extend(new G, {
        Y: function (a, b) { var c = a.Pc; this.K = c.lw; this.J = c.mw; this.Zc = c.lw; this.$c = c.mw; this.Hc = c.Ak; this.No = 0; 0 < c.Rb.length && (this.No = c.Rb[0].lx); this.Jm = null; this.Ac = -1; this.ob = 0; this.wa = !0; this.MC = b.on; 0 != (b.on & h.Vs) && 0 < c.Rb.length && (this.Jm = c.Rb[0].ai); var d = this.Ac; -1 == d && 0 < c.Rb.length && (d = c.Rb[0].Om); this.font = this.c.h.Nb.zf(d); this.jb = new ia(this.c.h, this.K, this.J) }, Fb: function () { }, handle: function () { this.F.handle(); this.b.L && (this.b.L = !1) }, gg: function () {
            var a =
                this.Ac; -1 == a && (a = this.N.Pc.Rb[0].Om); return this.c.h.Nb.Jq(a)
        }, Zk: function (a, b) { this.Ac = this.c.h.Nb.cq(a); this.font = this.c.h.Nb.zf(this.Ac); null != b && (this.K = b.right - b.left, this.J = b.bottom - b.top, this.jb.resize(this.K, this.J)); this.b.L = !0; this.fb() }, Iq: function () { return this.No }, ts: function (a) { this.No = a; this.fb() }, vl: function (a, b, c, d, e, f) { 1 != this.La && (this.La = !0, this.wa = e, this.za = this.c.w.Ua[c], this.ja = d ? this.za.Gb : this.za.Ma, 0 > f ? this.ja.ce(this) : this.ja.aq(this, f)) }, Bi: function () {
            if (0 == this.La) return -1;
            this.La = !1; var a = this.ja.Vc(this); this.ja.removeChild(this); return a
        }, Vc: function () { return this.La ? this.ja.Vc(this) : -1 }, Ml: function () { return this.La ? this.ja.children.length : -1 }, te: function (a) { this.La && this.ja.te(this, a) }, $k: function () { 0 == this.wa && (this.wa = !0) }, lk: function () { 1 == this.wa && (this.wa = !1) }, JQ: function (a) { -1 > a && (a = -1); a >= this.Hc && (a = this.Hc - 1); if (a == this.ob) return !1; this.ob = a; 0 <= a && this.FK(this.N.Pc.Rb[this.ob].ai); this.fb(); return 0 != (this.F.W & v.hh) ? !1 : !0 }, FK: function (a) { this.Jm = a; this.fb() },
        oh: function () { this.Qd || this.fb() }, fb: function () { this.Qd = !0; var a = this.N.Pc, b = a.Rb[0].Yo; this.ia = this.ha = 0; this.rect.left = 0; this.rect.top = 0; this.rect.right = this.K; this.rect.bottom = this.J; 0 <= this.ob ? a = a.Rb[this.ob].ai : (a = this.Jm, null == a && (a = "")); b &= n.kp | n.Cj | n.Xs | n.lp | n.jp | n.fi | n.oE; a = this.jb.xs(a, b, this.rect, this.font, this.No); 0 == (b & (n.jp | n.fi)) && (this.J = a) }, Lm: function (a) { this.F.Sb = v.kf; this.F.Tb = a }, yb: function (a, b, c) {
            this.wa && this.Qd && this.jb.yb(a, b + this.u - this.c.ca + this.za.x, c + this.v - this.c.da +
                this.za.y, this.F.Sb, this.F.Tb)
        }
    }); Xc.prototype = n.extend(new G, {
        Y: function () { }, Fb: function () { }, handle: function () { this.c.pause(); this.c.Or = this; this.c.w.Ua[this.c.w.nc - 1].Ma.ce(this); this.TG() }, xq: function () { this.c.w.Ua[this.c.w.nc - 1].Ma.removeChild(this) }, cI: function () {
            var a; a = this.c.h.Gf - this.c.h.Tf; var b = this.c.h.Hf - this.c.h.Uf; 0 == this.Zj ? this.c.h.Nc[m.qf] && (a = this.nA(a, b), 0 != a && (this.Zj = a)) : this.c.h.Nc[m.qf] || (this.nA(a, b) == this.Zj ? (this.c.i.yc = this.Zj, this.c.i.nd(this, -5439484), 0 != (this.N.Pc.Rb[this.Zj].Yo &
                na.oG) ? this.c.i.nd(this, -5308412) : this.c.i.nd(this, -5373948), this.xq(), this.c.Or = null, this.c.resume(), this.c.Dq(this.Vb, !0)) : this.Zj = 0)
        }, nA: function (a, b) { var c; if (null != this.Hd) for (c = 1; c < this.Hd.length; c++)if (a >= this.Hd[c].left && a < this.Hd[c].right && b > this.Hd[c].top && b < this.Hd[c].bottom) return c; return 0 }, Ty: function (a, b, c) {
            var d, e; c ? (d = 8421504, e = 16777215) : (e = 8421504, d = 16777215); a.Yr(b.left, b.top, b.right - b.left, b.bottom - b.top, 0, 1); var f = Array(3), g; for (g = 0; 3 > g; g++)f[g] = new qa; f[0].x = b.right - 1; 0 == c &&
                --f[0].x; f[0].y = b.top + 1; f[1].y = b.top + 1; f[1].x = b.left + 1; f[2].x = b.left + 1; f[2].y = b.bottom; 0 == c && --f[2].y; a.sd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1); a.sd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1); 0 == c && --f[0].x; f[0].y += 1; f[1].x += 1; f[1].y += 1; f[2].x += 1; 0 == c && --f[2].y; a.sd(f[0].x, f[0].y, f[1].x, f[1].y, d, 1); a.sd(f[1].x, f[1].y, f[2].x, f[2].y, d, 1); 0 == c && (f[0].x += 2, f[1].x = b.right - 1, f[1].y = b.bottom - 1, f[2].y = b.bottom - 1, --f[2].x, a.sd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.sd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1), --f[0].x, f[0].y += 1, --f[1].x,
                    --f[1].y, f[2].x += 1, --f[2].y, a.sd(f[0].x, f[0].y, f[1].x, f[1].y, e, 1), a.sd(f[1].x, f[1].y, f[2].x, f[2].y, e, 1))
        }, UJ: function (a, b, c) { var d = new aa; d.kz(this.Hd[b]); this.Ty(a, this.Hd[b], c); d.left += 2; d.top += 2; d.right -= 4; d.bottom -= 4; c && (d.left += 2, d.top += 2); this.Lg[b].yb(a, (d.left + d.right) / 2 - this.Lg[b].width / 2, (d.top + d.bottom) / 2 - this.Lg[b].height / 2, 0, 0) }, TG: function () {
            this.rr = new ia(this.c.h, 8, 8); var a = this.N.Pc, b = this.c, c = a.Rb[1], d = c.lx, e = 0 != (c.Yo & na.Ay), f = b.h.Nb.zf(c.Om); this.Ms = Math.floor(3 * this.rr.measureText("X",
                f) / 2); this.Gi = 4; this.Bd = 64; var g; for (g = 1; g < a.Rb.length; g++)c = a.Rb[g], 0 < c.ai.length && (c = this.rr.measureText(c.ai, f), this.Bd = Math.max(this.Bd, c + 2 * this.Ms + 4), this.Gi = Math.max(this.Gi, Math.floor(3 * f.Se() / 2))); this.Uq = Math.max(Math.floor(this.Gi / 4), 2); this.Bd += 2 * this.Ms + 4; var k = new aa; for (g = 1; g < a.Rb.length; g++)c = a.Rb[g], this.Lg[g] = new ia(b.h, this.Bd, this.Gi), k.right = this.Bd, k.bottom = this.Gi, this.Lg[g].qr(c.ai, n.Cj | n.fi, k, d, f, e ? 1 : 0, 16777215); a = a.Rb[0]; e = 0 != (a.Yo & na.Ay); f = b.h.Nb.zf(a.Om); g = Math.floor(3 *
                    this.rr.measureText("X", f) / 2); c = this.rr.measureText(a.ai, f); this.Kn = Math.floor(3 * f.Se() / 2); this.Bd = Math.max(this.Bd, c + 2 * g + 4); this.Bd > b.h.na ? this.Bd = b.h.na : this.Bd > b.w.ge && (this.Bd = b.w.ge); k.right = this.Bd; k.bottom = this.Kn; this.Lg[0] = new ia(b.h, this.Bd, this.Kn); this.Lg[0].qr(a.ai, n.Cj | n.fi, k, d, f, e ? 1 : 0, 16777215)
        }, yb: function (a) {
            var b = this.N.Pc, c = this.c, d = this.u - c.ca, c = this.v - c.da, e = new aa; e.left = d; e.top = c; var f = this.Kn + 1 + (this.Gi + this.Uq) * (b.Rb.length - 1) + this.Uq + 4; e.right = d + this.Bd; e.bottom = c + f; a.vc(e.left,
                e.top, e.right - e.left, e.bottom - e.top, 12632256, 0, 0); this.Ty(a, e, !1); e.left += 2; e.top += 2; e.right -= 2; e.bottom = e.top + this.Kn; this.Lg[0].yb(a, (e.left + e.right) / 2 - this.Lg[0].width / 2, (e.top + e.bottom) / 2 - this.Lg[0].height / 2, 0, 0); e.top = e.bottom; a.sd(e.left, e.top, e.right, e.bottom, 8421504, 1, 0, 0); e.top += 1; e.bottom += 1; a.sd(e.left, e.top, e.right, e.bottom, 16777215, 1, 0, 0); if (null == this.Hd) for (this.Hd = Array(b.Rb.length), i = 1; i < b.Rb.length; i++)this.Hd[i] = new aa, this.Hd[i].left = d + 2 + this.Ms, this.Hd[i].right = d + this.Bd - 2 - this.Ms,
                    this.Hd[i].top = c + 2 + this.Kn + 1 + this.Uq + (this.Gi + this.Uq) * (i - 1), this.Hd[i].bottom = this.Hd[i].top + this.Gi; for (i = 1; i < b.Rb.length; i++)this.UJ(a, i, this.Zj == i)
        }
    }); Yc.prototype = n.extend(new G, {
        Y: function (a, b) { this.ext.Y(this); var c = this.c.h.file.Uc(a.PB); this.uw = a.RB; this.ext.nz(c, b, a.SB) }, Tt: function (a, b, c, d, e) { this.za = this.c.w.Ua[d]; this.wa = e; 1 != this.La && (this.La = !0, this.ja = this.za.Ma, this.ja.ce(this)) }, vl: function (a, b, c, d, e) {
            this.za = this.c.w.Ua[c]; this.wa = e; 1 != this.La && (this.La = !0, this.ja = d ? this.za.Gb :
                this.za.Ma, this.ja.ce(this))
        }, Bi: function () { if (0 == this.La) return -1; this.La = !1; var a = this.ja.Vc(this); this.ja.removeChild(this); return a }, handle: function () { 0 != (this.ua & 512) ? this.F.handle() : 16 == (this.ua & 48) || 48 == (this.ua & 48) ? this.A.move() : 32 == (this.ua & 48) && this.$.Le(); var a = 0; 0 == this.Tv && (a = this.ext.Wu()); 0 != (a & Ca.xy) && (this.Tv = !0); null != this.b && this.b.L && (this.b.L = !1) }, ti: function () { this.ext.ti() }, lz: function () { }, yb: function () { }, Fb: function (a) { this.ext.vu(a) }, KH: function () { return null }, pq: function (a,
            b) { return this.ext.pq(a, b) }, action: function (a, b) { this.ext.action(a, b) }, Aq: function (a) { return this.ext.Aq(a) }, Lm: function (a) { this.F.Sb = v.kf; this.F.Tb = a }, AQ: function () { }, $k: function () { this.wa = !0 }, lk: function () { this.wa = !1 }, Vc: function () { return this.ja.Vc(this) }, Ml: function () { return this.ja.children.length }, te: function (a) { a >= this.ja.children.length && (a = this.ja.children.length); 0 > a && (a = 0); this.ja.te(this, a) }, sJ: function () { }, WG: function () { }, Kl: function () { this.ext.Kl() }, PA: function (a) { this.c.h.ea.PA(a) },
        TP: function (a) { return this.c.h.ea.Ob(a) }, JP: function () { return this.c.h }, ZP: function () { return this.u }, $P: function () { return this.v }, YP: function () { return this.K }, Se: function () { return this.J }, $C: function (a) { null != this.A ? this.A.ra.Yb(a) : (this.u = a, null != this.b && (this.b.L = !0, this.b.Oa = !0)) }, cD: function (a) { null != this.A ? this.A.ra.jc(a) : (this.v = a, null != this.b && (this.b.L = !0, this.b.Oa = !0)) }, bx: function (a) { this.K = a }, ax: function (a) { this.J = a }, So: function (a, b) { this.K = a; this.J = b }, qQ: function () { this.Tv = !1 }, IP: function (a,
            b) { if (0 == this.c.Pf) { var c = this.c.i.yc; this.c.i.yc = b; a = -(a + O.gi + 1) << 16; a |= this.Ea & 65535; this.c.i.nd(this, a); this.c.i.yc = c } }, lQ: function (a, b) { 0 == this.c.Pf && (a = -(a + O.gi + 1) << 16, a |= this.Ea & 65535, this.c.i.CJ(1, a, b, this, this.Ue)) }, pause: function () { this.c.pause() }, resume: function () { this.c.resume() }, rQ: function () { }, vP: function () { this.c.eg(this.Vb) }, setPosition: function (a, b) { null != this.A ? (this.A.ra.Yb(a), this.A.ra.jc(b)) : (this.u = a, this.v = b, null != this.b && (this.b.L = !0, this.b.Oa = !0)) }, NP: function () { return this.uw },
        zQ: function (a) { this.uw = a }, $p: function (a, b, c, d, e) { this.c.$p(a, b, c, e, d, !0) }, LP: function () { return this.c.Pw }, Nl: function () { this.c.Id++; return this.c.getExpression() }, MP: function () { return this.c.i.yc }, Uy: function (a, b, c) { return 0 != (a.ua & w.gh) && a.b.Rc == S.Jj ? a.A.ra.Uy(b, c) : 0 }, OP: function () { this.Vv = this.lo = 0; return this.UH() }, UH: function () { if (this.Vv < this.c.tb) { for (; null == this.c.H[this.lo];)this.lo++; var a = this.c.H[this.lo]; this.Vv++; this.lo++; return a } return null }, VP: function (a) {
            var b = 0, c; for (c = 0; c < this.c.tb; c++) {
                for (; null ==
                    this.c.H[b];)b++; var d = this.c.H[b]; b++; if ((d.Xu << 16 | d.Vb & 65535) == a) return d
            } return null
        }, Vz: function (a) { return this.c.Vz(a) }, Wz: function (a) { return this.c.Wz(a) }, oJ: function (a) { return hoAdRunHeader.h.oJ(a) }, kP: function () { }
    }); Qa.gO = 22; Qa.create = function (a) {
        var b = a.file.O, c = null, d = a.file.o(), e = a.file.o(); switch (e) {
            case 1: c = new te(a); break; case 2: c = new ve(a); break; case 3: c = new fa(a); break; case 4: c = new fa(a); break; case 5: c = new Ha(a); break; case 6: c = new La(a); break; case 9: c = new fb(a); break; case 10: c = new fa(a);
                break; case 11: c = new fa(a); break; case 12: c = new fa(a); break; case 13: c = new qe(a); break; case 14: c = new ad(a); break; case 15: c = new oa(a); break; case 16: c = new bd(a); break; case 17: c = new fa(a); break; case 18: c = new cd(a); break; case 19: c = new we(a); break; case 21: c = new fb(a); break; case 22: c = new oa(a); break; case 23: c = new oa(a); break; case 24: c = new pe(a); break; case 25: c = new Ha(a); break; case 26: c = new fa(a); break; case 27: c = new oa(a); break; case 28: c = new oa(a); break; case 29: c = new Ha(a); break; case 31: c = new fa(a); break; case 32: c =
                    new fa(a); break; case 34: c = new Ha(a); break; case 35: c = new La(a); break; case 36: c = new La(a); break; case 37: c = new fa(a); break; case 38: c = new ja(a); break; case 39: c = new se(a); break; case 40: c = new Ra(a); break; case 41: c = new Ra(a); break; case 42: c = new oe(a); break; case 43: c = new fa(a); break; case 44: c = new ad(a); break; case 45: c = new oa(a); break; case 46: c = new oa(a); break; case 47: c = new $c(a); break; case 48: c = new Ha(a); break; case 49: c = new fa(a); break; case 50: c = new fa(a); break; case 51: c = new $c(a); break; case 52: c = new oa(a);
                break; case 53: c = new oa(a); break; case 54: c = new oa(a); break; case 55: c = new re(a); break; case 56: c = new Ha(a); break; case 57: c = new fa(a); break; case 58: c = new fa(a); break; case 59: c = new oa(a); break; case 60: c = new fa(a); break; case 61: c = new fa(a); break; case 62: c = new oa(a); break; case 63: c = new Ra(a); break; case 64: c = new Ra(a); break; case 67: c = new fa(a); break; case 68: c = new dd(a); break; case 69: c = new ue(a)
        }c.code = e; a.file.seek(b + d); return c
    }; ja.QE = 1; ja.KM = 2; ja.lt = 4; ja.kt = 8; ja.LM = 16; ka.aE = 1; ka.$D = 2; ka.bE = 4; ka.Gx = 8; ka.prototype =
    {
        xC: function (a, b, c) {
            c.Rn = -1; if (-1 == this.to) { 0 != b && (c.dir = -1, 0 == (this.Ek & ka.Gx) && (c.dir = a.vA(this.Fr))); c.x = this.Ir; c.y = this.Jr; var d = this.rw; d > a.w.nc - 1 && (d = a.w.nc - 1); c.Rn = d; c.$t = !1 } else {
                a.i.tm = !1; d = a.i.Nq(this.uo); c.$t = a.i.wc; if (null == d) return !1; c.x = d.u; c.y = d.v; c.Rn = d.Vd; if (0 != (this.Ek & ka.$D) && 0 != (d.ua & w.Kj) && 0 <= d.b.Pa) { var e; e = d.b.hb; null != a.rp(d) && (e = 0); e = a.h.ea.hk(d.b.Pa, e, d.b.Cb, d.b.Db); c.x += e.Rg - e.Ka; c.y += e.Sg - e.Ia } if (0 != (this.Ek & ka.aE)) {
                    e = this.qw + d.c.Ub(d) & 31; var f = D.NH(this.Gr, e); c.x += D.MH(this.Gr,
                        e); c.y += f
                } else c.x += this.Ir, c.y += this.Jr; 0 != (b & 1) && (c.dir = 0 != (this.Ek & ka.Gx) ? -1 : 0 != (this.Ek & ka.bE) ? d.c.Ub(d) : a.vA(this.Fr))
            } return 0 != (b & 2) && (c.x < a.zm || c.x > a.xm || c.y < a.Dm || c.y > a.Bm) ? !1 : !0
        }
    }; bd.prototype = n.extend(new ka, {}); fb.prototype = n.extend(new ka, {}); cd.prototype = n.extend(new ka, {}); dd.prototype = {
        evaluate: function (a) {
            if (null == a.M || 0 != this.Gq && (a.M.Yk & this.Gq) != this.Zz) return !1; for (var b = 0; b < this.values.length; b++) {
                var c = this.values[b], d; d = c.global ? a.c.h.Nu(c.index) : a.M.Ol(c.index); if (!h.zl(d,
                    c.ox, c.aC)) return !1
            } return !0
        }, yH: function (a) { if (null == a.M || 0 != this.Gq && (a.M.Yk & this.Gq) != this.Zz) return !1; for (var b = 0; b < this.values.length; b++) { var c = this.values[b]; if (!h.zl(a.M.Ol(c.index), c.ox, c.aC)) return !1 } return !0 }
    }; Sa.prototype = {
        vc: function () { }, Lw: function () { }, Kw: function () { }, AC: function () { }, rd: function () { }, fj: function () { }, BC: function () { }, CC: function () { }, sd: function () { }, Yr: function () { }, zC: function () { }, nC: function (a, b, c, d) {
            var e = this.Vj[this.Vj.length - 1]; e && (a < e.x && (a = e.x), b < e.y && (b = e.y), a + c >
                e.x + e.Ks && (c = e.x + e.Ks - a), b + d > e.y + e.Pq && (d = e.y + e.Pq - b)); a = { x: a, y: b, Ks: c, Pq: d }; this.Vj.push(a); return a
        }, gC: function () { this.Vj.pop() }
    }; Ba.prototype = n.extend(new Sa, {
        Zr: function (a) { this.iw = this.dx = a; this.Sa.imageSmoothingEnabled = a; this.Sa.webkitImageSmoothingEnabled = a; this.Sa.mozImageSmoothingEnabled = a; this.Sa.msImageSmoothingEnabled = a; this.hw = -1; this.ef(0, 0) }, VC: function (a, b) {
            this.Sa.scale(a, b); this.bp = a; this.ep = b; this.Di = this.Ci = 0; 1 < this.bp ? this.Ci = 1 : 0 < this.bp && 1 > this.bp && (this.Ci = 1 / this.bp); 1 < this.ep &&
                (this.Di = 1); 0 < this.ep && 1 > this.ep && (this.Di = 1 / this.ep)
        }, nq: function (a, b, c, d) { this.Sa.clearRect(a, b, c, d) }, vc: function (a, b, c, d, e, f, g) { var k = this.Sa; this.ef(f, g); k.fillStyle = n.yf(e); e = a - Math.floor(a); f = b - Math.floor(b); 0 != e && (e = 1 - e); 0 != f && (f = 1 - f); e += this.Ci; f += this.Di; k.fillRect(a, b, c + e, d + f) }, Lw: function (a, b, c, d, e, f, g) { var k = this.Sa; this.ef(f, g); k.fillStyle = n.yf(e); n.tq(k, a, b, c, d); k.fill() }, Kw: function (a, b, c, d, e, f, g, k, q) {
            if (e == f) return this.vc(a, b, c, d, e, k, q); var h = this.Sa; this.ef(k, q); k = a - Math.floor(a);
            q = b - Math.floor(b); 0 != k && (k = 1 - k); 0 != q && (q = 1 - q); k += this.Ci; q += this.Di; this.hz(a, b, c + k, d + q, g, e, f); h.fillRect(a, b, c + k, d + q)
        }, AC: function (a, b, c, d, e, f, g, k, q) { if (e == f) return this.Lw(a, b, c, d, e, k, q); var h = this.Sa; this.ef(k, q); this.hz(a, b, c, d, g, e, f); n.tq(h, a, b, c, d); this.Sa.fill() }, rd: function (a, b, c, d, e, f, g, k) {
            var q = this.Sa, h = b - a.Ka, m = c - a.Ia; this.ef(g, k); g = b - Math.floor(b); k = c - Math.floor(c); 0 != g && (g = 1 - g); 0 != k && (k = 1 - k); g += this.Ci; k += this.Di; var n = 0, l = 0, p; 0 == a.Wb ? p = a.rc : (p = a.app.ea.ec[a.Wb], n = a.le, l = a.me); null !=
                p && (0 == d && 1 == e && 1 == f ? 0 == a.Wb && 0 == g && 0 == k ? q.drawImage(p, h, m) : q.drawImage(p, n, l, a.width, a.height, h, m, a.width + g, a.height + k) : (q.save(), q.translate(b, c), 0 != d && q.rotate(.0174532925 * -d), q.scale(Math.max(.001, e), Math.max(.001, f)), q.translate(-a.Ka, -a.Ia), q.drawImage(p, n, l, a.width, a.height, 0, 0, a.width, a.height), q.restore()))
        }, fj: function (a, b, c, d, e, f, g) { this.ef(f, g); f = b - Math.floor(b); g = c - Math.floor(c); 0 != f && (f = 1 - f); 0 != g && (g = 1 - g); f += this.Ci; g += this.Di; this.Sa.drawImage(a, b, c, d + f, e + g) }, BC: function (a, b, c, d, e,
            f, g) { var k = this.Sa; this.ef(f, g); k.save(); k.beginPath(); k.moveTo(b, c); k.lineTo(b + d, c); k.lineTo(b + d, c + e); k.lineTo(b, c + e); k.lineTo(b, c); k.clip(); f = a.width; g = a.height; d = Math.floor(d / f) + 1; e = Math.floor(e / g) + 1; var q, h, m = b - Math.floor(b), n = c - Math.floor(c); 0 != m && (m = 1 - m); 0 != n && (n = 1 - n); var m = m + this.Ci, n = n + this.Di, l = 0, p = 0, r; 0 == a.Wb ? r = a.rc : (r = a.app.ea.ec[a.Wb], l = a.le, p = a.me); if (null != r) for (q = 0; q < d; q++)for (h = 0; h < e; h++)k.drawImage(r, l, p, a.width, a.height, b + q * f, c + h * g, a.width + m, a.height + n); k.restore() }, CC: function (a,
                b, c, d, e, f, g) { if (!(a instanceof W)) throw Error("renderPatternEllipse: bad image type: " + typeof a); var k = this.Sa; this.ef(f, g); 0 == a.Wb ? null != a.rc && (k.fillStyle = k.createPattern(a.rc, "repeat")) : (a.pattern || (a.pattern = document.createElement("canvas"), a.pattern.width = a.width, a.pattern.height = a.height, k = a.pattern.getContext("2d"), k.drawImage(a.app.ea.ec[a.Wb], a.le, a.me, a.width, a.height, 0, 0, a.width, a.height)), k.fillStyle = k.createPattern(a.pattern, "repeat")); n.tq(k, b, c, d, e); this.Sa.fill() }, sd: function (a, b,
                    c, d, e, f, g, k) { var q = this.Sa; this.ef(g, k); q.strokeStyle = n.yf(e); q.lineCap = "round"; q.lineWidth = f; q.beginPath(); q.moveTo(a, b); q.lineTo(c, d); q.closePath(); q.stroke() }, Yr: function (a, b, c, d, e, f, g, k) { var q = this.Sa; this.ef(g, k); q.strokeStyle = n.yf(e); q.lineWidth = f; q.strokeRect(a, b, c, d) }, zC: function (a, b, c, d, e, f, g, k) { var q = this.Sa; this.ef(g, k); q.lineWidth = e; q.strokeStyle = n.yf(f); n.tq(q, a, b, c, d); this.Sa.stroke() }, clip: function (a, b, c, d) { var e = this.Sa; e.save(); e.beginPath(); e.rect(a, b, c, d); e.clip() }, HK: function () { this.Sa.restore() },
        nC: function () { var a = this.Sa, b = Sa.prototype.nC.apply(this, arguments); a.beginPath(); a.rect(b.x, b.y, b.Ks, b.Pq); a.clip() }, gC: function () { var a = this.Sa; Sa.prototype.gC.apply(this, arguments); if (0 < this.Vj.length) { var b = this.Vj[this.Vj.length - 1]; a.beginPath(); a.rect(b.x, b.y, b.Ks, b.Pq); a.clip() } else a.sQ() }, ef: function (a, b) {
            var c = this.Sa; if ("undefined" == typeof a) c.globalAlpha = 1, c.Yj = "source-over"; else if (a != this.hw || b != this.lJ) {
                this.hw = a; this.lJ = b; var d = a & v.xx, e = 0 != (a & v.yx) | this.dx; e != this.iw && (this.iw = e, c.imageSmoothingEnabled =
                    e, c.webkitImageSmoothingEnabled = e, c.mozImageSmoothingEnabled = e, c.msImageSmoothingEnabled = e); c.globalAlpha = 0 != (a & v.Ss) ? (b >>> 24 & 255) / 255 : d == v.kf ? (128 - b) / 128 : 1; switch (d) { case v.LD: c.Yj = "lighter"; break; case v.MD: c.Yj = "xor"; break; default: c.Yj = "source-over" }
            }
        }, hz: function (a, b, c, d, e, f, g) { a = e ? this.Sa.createLinearGradient(a, b, a, b + d) : this.Sa.createLinearGradient(a, b, a + c, b); a.addColorStop(0, n.yf(f)); a.addColorStop(1, n.yf(g)); this.Sa.fillStyle = a }
    }); sa.Xp = 1; sa.prototype = {
        load: function (a) {
            var b = a.O; a.pa(4); this.vD =
                a.s(); this.uD = a.s(); this.Xo = a.s(); this.Wo = a.Yc(); var c = a.s(), d = a.s(); a.seek(b + c); this.tn = a.Hb(); this.tn = this.tn.substr(0, this.tn.indexOf(".")); this.wz = b + d
        }
    }; ed.prototype = { sA: function () { return null } }; u.up = 0; u.Sp = 1; u.zy = 2; u.zx = 3; u.Ts = 0; u.nt = 1; u.Dx = 2; u.yy = 3; u.ni = 0; u.oi = 1; u.zj = 2; u.Aj = 3; u.Cx = 4; u.Ix = 0; u.nE = 1; u.Nt = 1; u.Yp = 2; u.prototype = {
        start: function (a, b, c, d) {
            this.Bz = b; this.ph = this.Bz.getContext("2d"); this.V = c; this.m = d; this.jr = (new Date).getTime(); this.j = a.uD; 0 == this.j && (this.j = 1); this.Vn = this.jr; this.Wn =
                this.jr + this.j; this.va = this.UA = !0
        }, finish: function () { }, Xq: function () { if (this.UA) { var a = new Date; return a.getTime() >= this.Wn ? !0 : a.getTime() >= this.Wn } return !0 }, pc: function () { this.Vn = (new Date).getTime(); this.Vn > this.Wn && (this.Vn = this.Wn); return this.Vn - this.jr }, D: function (a, b, c, d, e, f, g) { this.lr && (this.ph.globalCompositeOperation = "source-atop"); 1 == arguments.length ? this.ph.drawImage(a, 0, 0) : 0 < f && 0 < g && this.ph.drawImage(a, d, e, f, g, b, c, f, g) }, stretch: function (a, b, c, d, e, f, g, k, q) {
            this.lr && (this.ph.globalCompositeOperation =
                "source-atop"); 0 < d && 0 < e && 0 < k && 0 < q && this.ph.drawImage(a, f, g, k, q, b, c, d, e)
        }, Kb: function () { }, end: function () { }, Y: function () { }
    }; fd.prototype = {
        yK: function (a, b) {
            var c = a.N.gm; b && (c = a.N.mo); var d = null, e; if (0 != (a.ua & w.Kj)) { var f = this.app.ea.Ob(a.b.Pa), d = document.createElement("canvas"); d.width = f.width; d.height = f.height; e = d.getContext("2d"); 0 == f.Wb ? e.drawImage(f.rc, 0, 0) : e.drawImage(this.app.ea.ec[f.Wb], f.le, f.me, f.width, f.height, 0, 0, f.width, f.height) } else 32 <= a.Ea && (d = document.createElement("canvas"), d.width =
                a.K, d.height = a.J, new StandardRendered(d), d = null); if (null == d) return null; e = d.width; var g = d.height, f = document.createElement("canvas"); f.width = e; f.height = g; var k = document.createElement("canvas"); k.width = e; k.height = g; var q = document.createElement("canvas"); q.width = e; q.height = g; b ? (e = k.getContext("2d"), e.drawImage(d, 0, 0), e = f.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.Xo & sa.Xp) && this.jz(q, d, c.Wo)) : (e = q.getContext("2d"), e.drawImage(d, 0, 0), 0 != (c.Xo & sa.Xp) && this.jz(k, d, c.Wo)); c = this.Cl(c, f, k, q); null != c && (d = 0,
                    0 != (a.X & G.ii) ? (c.lr = !0, d |= u.Yp) : (c.lr = !1, d |= u.Nt), a.dl = f, c.Kb(d)); return c
        }, jz: function (a, b, c) { a = a.getContext("2d"); a.drawImage(b, 0, 0); var d = b.width; b = b.height; var e = a.getImageData(0, 0, d, b), f, g = (c & 16711680) >> 16, k = (c & 65280) >> 8, q = c & 255; for (f = 0; f < b; f++)for (c = 0; c < d; c++)0 != e.data[4 * (f * d + c) + 3] && (e.data[4 * (f * d + c)] = g, e.data[4 * (f * d + c) + 1] = k, e.data[4 * (f * d + c) + 2] = q); a.putImageData(e, 0, 0) }, Cl: function (a, b, c, d) {
            var e = null; "cctrans" == a.tn.toLowerCase() && (e = new Ma); return null != e ? (e = e.sA(a), this.app.file.seek(a.wz),
                e.lr = !1, e.Y(a, this.app.file, b, c, d), e) : null
        }
    }; Ma.zA = "BAND SE00 SE10 SE12 DOOR SE03 MOSA SE05 SE06 SCRL SE01 SE07 SE09 SE13 SE08 SE02 ZIGZ SE04 ZOOM SE11 FADE".split(" "); Ma.prototype = n.extend(new ed, {
        sA: function (a) {
            var b = a.vD; a = "" + String.fromCharCode(b & 255); b >>= 8; a += String.fromCharCode(b & 255); b >>= 8; a += String.fromCharCode(b & 255); a += String.fromCharCode(b >> 8 & 255); for (b = 0; b < Ma.zA.length && a != Ma.zA[b]; b++); a = null; switch (b) {
                case 0: a = new id; break; case 1: a = new gd; break; case 2: a = new hd; break; case 3: a = new jd;
                    break; case 4: a = new kd; break; case 5: a = new md; break; case 6: a = new nd; break; case 7: a = new od; break; case 8: a = new pd; break; case 9: a = new qd; break; case 10: a = new rd; break; case 11: a = new sd; break; case 12: a = new td; break; case 13: a = new ud; break; case 14: a = new vd; break; case 15: a = new wd; break; case 16: a = new xd; break; case 17: a = new yd; break; case 18: a = new zd; break; case 19: a = new Ad; break; case 20: a = new ld
            }return a
        }
    }); gd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.$a = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va &&
            (this.va = !1, this.g = this.m.width, this.f = this.m.height, this.VA = 8 != this.$a ? this.$a : Math.floor(8 * Math.random())); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                var b, c; switch (this.VA) {
                    case 0: b = this.g / 3 * a / this.j; c = this.f; this.D(this.m, 0, 0, this.g / 3 - b, 0, b, c); this.D(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c); b = this.g / 3; c = this.f * a / this.j; this.D(this.m, b, 0, b, this.f - c, b, c); break; case 1: b = this.g / 3 * a / this.j; c = this.f; this.D(this.m, 0, 0, this.g / 3 - b, 0, b, c); this.D(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c); b = this.g / 3; c = this.f *
                        a / this.j; this.D(this.m, b, this.f - c, b, 0, b, c); break; case 2: b = this.g / 3 * a / this.j; c = this.f; this.D(this.m, 0, 0, this.g / 3 - b, 0, b, c); this.D(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c); b = this.g / 3; c = this.f * a / this.j; this.D(this.m, b, 0, b, 0, b, c); break; case 3: b = this.g / 3 * a / this.j; c = this.f; this.D(this.m, 0, 0, this.g / 3 - b, 0, b, c); this.D(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c); b = this.g / 3; c = this.f * a / this.j; this.D(this.m, b, this.f - c, b, this.f - c, b, c); break; case 4: b = this.g / 3 * a / this.j; c = this.f; this.D(this.m, 0, 0, this.g / 3 - b, 0, b, c); this.D(this.m,
                            this.g - b, 0, 2 * this.g / 3, 0, b, c); b = this.g / 3; c = this.f / 2 * a / this.j; this.D(this.m, b, 0, b, this.f / 2 - c, b, c); this.D(this.m, b, this.f - c, b, this.f / 2, b, c); break; case 5: b = this.g / 3 * a / this.j; c = this.f; this.D(this.m, 0, 0, this.g / 3 - b, 0, b, c); this.D(this.m, this.g - b, 0, 2 * this.g / 3, 0, b, c); b = this.g / 3; c = this.f / 2 * a / this.j; this.D(this.m, b, 0, b, 0, b, c); this.D(this.m, b, this.f - c, b, this.f - c, b, c); break; case 6: b = this.g / 3; c = this.f * a / this.j; this.D(this.m, 0, this.f - c, 0, 0, b, c); this.D(this.m, b, 0, b, this.f - c, b, c); this.D(this.m, 2 * b, this.f - c, 2 * b, 0, b,
                                c); break; case 7: b = this.g / 7; c = this.f * a / this.j; this.D(this.m, 0, this.f - c, 0, 0, b, c); this.D(this.m, b, 0, b, this.f - c, b, c); this.D(this.m, 2 * b, this.f - c, 2 * b, 0, b, c); this.D(this.m, 3 * b, 0, 3 * b, this.f - c, b, c); this.D(this.m, 4 * b, this.f - c, 4 * b, 0, b, c); this.D(this.m, 5 * b, 0, 5 * b, this.f - c, b, c); this.D(this.m, 6 * b, this.f - c, 6 * b, 0, 2 * b, c); break; default: this.D(this.m)
                }
            } return null
        }, end: function () { this.finish() }
    }); hd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.$a = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va && (this.va = !1,
                this.g = this.m.width, this.f = this.m.height); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                    var b, c; this.D(this.m); switch (this.$a) {
                        case 0: b = this.g / 2 * a / this.j; b = this.g / 2 - b; c = this.f / 2 * a / this.j; c = this.f / 2 - c; this.stretch(this.V, 0, 0, b, c, 0, 0, this.g / 2, this.f / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; c = this.f / 2 - c; this.stretch(this.V, this.g / 2 + b, 0, this.g / 2 - b, c, this.g / 2, 0, this.g / 2, this.f / 2); b = this.g / 2 * a / this.j; b = this.g / 2 - b; c = this.f / 2 * a / this.j; this.stretch(this.V, 0, this.f / 2 + c, b, this.f / 2 - c, 0, this.f / 2, this.g /
                            2, this.f / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; this.stretch(this.V, this.g / 2 + b, this.f / 2 + c, this.g / 2 - b, this.f / 2 - c, this.g / 2, this.f / 2, this.g / 2, this.f / 2); break; case 1: b = this.g * a / this.j; b = this.g - b; c = this.f * a / this.j; c = this.f - c; this.D(this.V, 0, 0, this.g - b, this.f - c, b, c); break; case 2: b = this.g * a / this.j; c = this.f * a / this.j; c = this.f - c; this.D(this.V, b, 0, 0, this.f - c, this.g - b, c); break; case 3: b = this.g * a / this.j; b = this.g - b; c = this.f * a / this.j; this.D(this.V, 0, c, this.g - b, 0, b, this.f - c); break; case 4: b = this.g * a / this.j; c = this.f *
                                a / this.j; this.D(this.V, b, c, 0, 0, this.g - b, this.f - c); break; case 5: b = this.g / 2 * a / this.j; b = this.g / 2 - b; c = this.f / 2 * a / this.j; c = this.f / 2 - c; this.D(this.V, b - this.g / 2, c - this.f / 2, 0, 0, this.g / 2, this.f / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; c = this.f / 2 - c; this.D(this.V, this.g / 2 + b, c - this.f / 2, this.g / 2, 0, this.g / 2, this.f / 2); b = this.g / 2 * a / this.j; b = this.g / 2 - b; c = this.f / 2 * a / this.j; this.D(this.V, b - this.g / 2, this.f / 2 + c, 0, this.f / 2, this.g / 2, this.f / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; this.D(this.V, this.g / 2 + b, this.f / 2 + c,
                                    this.g / 2, this.f / 2, this.g / 2, this.f / 2); break; case 6: c = this.f / 2 * a / this.j; c = this.f / 2 - c; this.D(this.V, 0, c - this.f / 2, 0, 0, this.g, this.f / 2); this.D(this.V, 0, this.f - c, 0, this.f / 2, this.g, this.f / 2); break; case 7: b = this.g / 2 * a / this.j, b = this.g / 2 - b, this.D(this.V, b - this.g / 2, 0, 0, 0, this.g / 2, this.f), this.D(this.V, this.g - b, 0, this.g / 2, 0, this.g / 2, this.f)
                    }
                } return null
        }, end: function () { this.finish() }
    }); id.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.uf = b.o(); this.fu = b.o(); this.start(a, c, d, e) }, Kb: function () {
            var a = this.V.width,
            b = this.V.height, c; if (this.va) { 0 == this.uf && (this.uf = 1); switch (this.fu) { case u.up: case u.Sp: this.tc = (a + this.uf - 1) / this.uf; 0 == this.tc && (this.tc = 1, this.uf = a); break; default: this.tc = (b + this.uf - 1) / this.uf, 0 == this.tc && (this.tc = 1, this.uf = b) }this.wb = 0; this.va = !1 } if (0 >= this.uf || 0 >= this.tc || 0 == this.j) this.D(this.m); else {
                var d = this.tc * this.pc() / this.j; if (d > this.wb) {
                    var e = 0, f = 0, g = 0, k = 0; for (c = 0; c < this.uf; c++) {
                        switch (this.fu) {
                            case u.up: e = this.wb + c * this.tc; f = 0; g = d - this.wb; k = b; break; case u.Sp: e = a - (this.wb + c * this.tc) -
                                (d - this.wb); f = 0; g = d - this.wb; k = b; break; case u.zy: e = 0; f = this.wb + c * this.tc; g = a; k = d - this.wb; break; case u.zx: e = 0, f = b - (this.wb + c * this.tc) - (d - this.wb), g = a, k = d - this.wb
                        }this.D(this.m, e, f, e, f, g, k)
                    }
                } this.wb = d
            } return this.aJ
        }, end: function () { this.finish() }
    }); jd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.Ta = b.s(); this.yq = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va && (this.va = !1, this.g = this.m.width, this.f = this.m.height); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                var b, c, d, e, f, g, k, q, h, m; h = this.g /
                    this.Ta; m = this.f / this.yq; d = this.g / this.Ta; e = this.f / this.yq; for (f = 0; f < this.Ta; f++)for (g = 0; g < this.yq; g++)b = f * h, c = g * m, k = d * a / this.j, q = e * a / this.j, this.stretch(this.m, b + (d - k) / 2, c + (e - q) / 2, k, q, b + (d - k) / 2, c + (e - q) / 2, k, q)
            } return null
        }, end: function () { this.finish() }
    }); kd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.Ni = b.o(); this.start(a, c, d, e) }, Kb: function () {
            if (this.va) { switch (this.Ni) { case u.Ts: case u.nt: this.tc = this.V.width / 2; break; default: this.tc = this.V.height / 2 }this.wb = 0; this.va = !1 } if (0 == this.tc) this.D(this.m);
            else {
                var a = 0, b = 0, c = 0, d = 0, e = this.tc * this.pc() / this.j; if (e > this.wb) {
                    switch (this.Ni) { case u.Ts: a = this.V.width / 2 - e; b = 0; c = e - this.wb; d = this.m.height; break; case u.nt: a = this.wb; b = 0; c = e - this.wb; d = this.m.height; break; case u.Dx: a = 0; b = this.V.height / 2 - e; c = this.m.width; d = e - this.wb; break; case u.yy: a = 0, b = this.wb, c = this.m.width, d = e - this.wb }this.D(this.m, a, b, a, b, c, d); switch (this.Ni) {
                        case u.Ts: a = this.V.width / 2 + this.wb; break; case u.nt: a = this.V.width - e; break; case u.Dx: b = this.V.height / 2 + this.wb; break; case u.yy: b = this.V.height -
                            e
                    }this.D(this.m, a, b, a, b, c, d)
                }
            } return null
        }, end: function () { this.finish() }
    }); ld.prototype = n.extend(new u, { Y: function (a, b, c, d, e) { this.start(a, c, d, e) }, Kb: function () { this.va && (this.va = !1); var a; this.ph.globalAlpha = 1; this.D(this.V); a = this.pc() / this.j; this.ph.globalAlpha = a; this.D(this.m); return null }, end: function () { this.ph.globalAlpha = 1; this.finish() } }); md.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.Ta = b.s(); this.$a = b.s(); this.vn = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va && (this.va = !1, this.g =
                this.m.width, this.f = this.m.height); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                    var b, c, d, e, f; b = 0; var g; if (0 == this.$a) for (g = this.f / this.Ta, f = 0; f < this.Ta; f++)0 == b ? (b = 0, c = f * g, d = this.g * a / this.j, e = f == this.Ta - 1 ? this.f : g + 1, 0 == this.vn ? this.D(this.m, b, c, b, c, d, e) : this.D(this.m, b, c, this.g - d, c, d, e), b = 1) : (c = f * g, d = this.g * a / this.j, b = this.g - d, e = f == this.Ta - 1 ? this.f : g + 1, 0 == this.vn ? this.D(this.m, b, c, b, c, d, e) : this.D(this.m, b, c, 0, c, d, e), b = 0); else for (g = this.g / this.Ta, f = 0; f < this.Ta; f++)0 == b ? (b = f * g, c = 0, e = this.f * a /
                        this.j, d = f == this.Ta - 1 ? this.g : g + 1, 0 == this.vn ? this.D(this.m, b, c, b, c, d, e) : this.D(this.m, b, c, b, this.f - e, d, e), b = 1) : (b = f * g, e = this.f * a / this.j, c = this.f - e, d = f == this.Ta - 1 ? this.g : g + 1, 0 == this.vn ? this.D(this.m, b, c, b, c, d, e) : this.D(this.m, b, c, b, 0, d, e), b = 0)
                } return null
        }, end: function () { this.finish() }
    }); nd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.yv = b.s(); this.start(a, c, d, e) }, Kb: function () {
            if (this.va) {
                var a = this.V.width, b = this.V.height; this.I = Math.floor((a * this.yv / 100 + b * this.yv / 100) / 2); 0 == this.I && (this.I =
                    1); this.Fe = (a + this.I - 1) / this.I; this.pg = (b + this.I - 1) / this.I; this.vk = this.Fe * this.pg; a = Math.floor((this.vk + 7) / 8 + 2); this.tk = 0; this.he = Array(a); for (b = 0; b < a; b++)this.he[b] = 0; this.va = !1
            } if (null == this.he || 2 > this.Fe || 2 > this.pg || 0 == this.j) this.D(this.m); else {
                var c, d, b = a = 0; c = Math.floor(this.vk * this.pc() / this.j); var e = c - this.tk; if (0 != e) for (this.tk = c, d = 0; d < e; d++) {
                    for (c = 0; 1 > c; c++) {
                        var a = Math.floor(this.Fe * Math.random()), b = Math.floor(this.pg * Math.random()), f, g; f = b * this.Fe + a; g = Math.floor(f / 8); f = 1 << (f & 7); if (0 == (this.he[g] &
                            f)) { this.he[g] |= f; break } var k = g, q = (this.vk + 7) / 8, h, m = !1; for (h = g; h < q; h++, k++)if (-1 != this.he[k]) { b = Math.floor(8 * h / this.Fe); a = Math.floor(8 * h % this.Fe); for (f = 1; 0 != f; f <<= 1) { if (0 == (this.he[k] & f)) { this.he[k] |= f; m = !0; break } if (++a >= this.Fe && (a = 0, ++b >= this.pg)) break } if (m) break } if (m) break; for (h = k = 0; h < g; h++, k++) {
                                if (255 != this.he[k]) { b = Math.floor(8 * h / m_nbBlockPerLine); a = Math.floor(8 * h % m_nbBlockPerLine); for (f = 1; 0 != f; f <<= 1) { if (0 == (this.he[k] & f)) { this.he[k] |= f; m = !0; break } if (++a >= this.Fe && (a = 0, ++b >= this.pg)) break } if (m) break } if (m) break;
                                m = !1
                            }
                    } 1 > c && this.D(this.m, Math.floor(a * this.I), Math.floor(b * this.I), Math.floor(a * this.I), Math.floor(b * this.I), this.I, this.I)
                }
            } return null
        }, end: function () { this.finish() }
    }); od.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.$a = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va && (this.va = !1, this.g = this.m.width, this.f = this.m.height); var a = this.pc(), b = a / this.j; if (1 < b) this.D(this.m); else {
                var c, d, e; .25 > b ? (d = 2 * this.g * a / this.j, d *= 2, e = this.f / 7, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2, this.D(this.m, b, c, b, c, d, e), d = this.g /
                    7, e = 2 * this.f * a / this.j, e *= 2, b = this.g / 2 - d / 2, c = this.f / 2 - e / 2) : (b = this.g / 2, d = this.g * a / this.j - b, e = this.f / 2, c = 0, this.D(this.m, b, c, b, c, d, e), c = this.f / 2, e = this.f * a / this.j - c, b = d = this.g / 2, this.D(this.m, b, c, b, c, d, e), d = this.g * a / this.j - this.g / 2, b = this.g / 2 - d, c = e = this.f / 2, this.D(this.m, b, c, b, c, d, e), e = this.f * a / this.j - this.f / 2, c = this.f / 2 - e, d = this.g / 2, b = 0); this.D(this.m, b, c, b, c, d, e)
            } return null
        }, end: function () { this.finish() }
    }); pd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.$a = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va &&
            (this.va = !1, this.g = this.m.width, this.f = this.m.height, this.xv = !1); var a = this.pc(), b = a / this.j; if (1 < b) this.D(this.m); else {
                var c, d, e, f; if (.5 >= b) switch (this.$a) {
                    case 0: e = this.g * a / this.j * 2; f = this.f / 2; c = this.g - e; d = this.f / 2; this.D(this.m, 0, 0, c, d, e, f); break; case 1: e = this.g * a / this.j * 2; f = this.f / 2; c = this.g - e; d = this.f / 2; this.D(this.m, c, 0, 0, d, e, f); break; case 2: e = this.g * a / this.j * 2; f = this.f / 2; c = this.g - e; d = this.f / 2; this.D(this.m, 0, d, c, 0, e, f); break; case 3: e = this.g * a / this.j * 2, f = this.f / 2, c = this.g - e, d = this.f / 2, this.D(this.m,
                        c, d, 0, 0, e, f)
                }if (.5 < b) switch (0 == this.xv && (1 >= this.$a ? this.D(this.m, 0, 0, 0, this.f / 2, this.g, this.f / 2) : this.D(this.m, 0, this.f / 2, 0, 0, this.g, this.f / 2), this.xv = !0), b = a - this.j / 2, b /= this.j / 2, f = this.f / 2 * 1E3 * b / 1E3, this.$a) { case 0: case 1: this.stretch(this.m, 0, f, this.g, this.f / 2, 0, this.f / 2, this.g, this.f / 2); this.stretch(this.m, 0, 0, this.g, f, 0, this.f / 2 - f, this.g, f); break; case 2: case 3: this.stretch(this.m, 0, this.f / 2 - f, this.g, this.f / 2, 0, 0, this.g, this.f / 2), this.stretch(this.m, 0, this.f - f, this.g, f, 0, this.f / 2, this.g, f) }
            } return null
        },
        end: function () { this.finish() }
    }); qd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.Ni = b.s(); this.start(a, c, d, e) }, Kb: function () {
            var a = this.V.width, b = this.V.height; if (this.va) { switch (this.Ni) { case u.up: case u.Sp: this.tc = a; break; default: this.tc = b }this.wb = 0; this.va = !1 } if (0 == this.j) this.D(this.m); else {
                var c = this.tc * this.pc() / this.j; if (c > this.wb) {
                    var d = 0, e = 0; switch (this.Ni) { case u.up: d = c - a; e = 0; break; case u.Sp: d = a - c; e = 0; break; case u.zy: d = 0; e = c - b; break; case u.zx: d = 0, e = b - c }this.D(this.m, d, e, 0, 0, a, b);
                    this.wb = c
                }
            } return null
        }, end: function () { this.finish() }
    }); rd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.$a = b.s(); this.Ta = b.s(); this.Kz = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va && (this.va = !1, this.g = this.m.width, this.f = this.m.height); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                var b, c, d, e, f, g; f = this.g * this.Ta / 100; g = this.f * this.Ta / 100; d = f * a / this.j; e = g * a / this.j; b = this.g / 2 - d / 2; c = this.f / 2 - e / 2; 0 == this.Kz ? this.D(this.m, b, c, b, c, d, e) : this.stretch(this.m, b, c, d, e, this.g / 2 - f / 2, this.f / 2 - g /
                    2, f, g); b = 100 - this.Ta; f = this.g * b / 100; g = this.f * b / 100; d = f / 2 * a / this.j; e = g / 2 * a / this.j; this.D(this.m, 0, 0, 0, 0, this.g, e); this.D(this.m, 0, 0, 0, 0, d, this.f); this.D(this.m, 0, this.f - e, 0, this.f - e, this.g, e); this.D(this.m, this.g - d, 0, this.g - d, 0, d, this.f)
            } return null
        }, end: function () { this.finish() }
    }); sd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.$a = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va && (this.va = !1, this.g = this.m.width, this.f = this.m.height); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                var b,
                c; switch (this.$a) {
                    case 0: b = this.g * a / this.j; c = this.f * a / this.j; this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f); break; case 1: b = this.g * a / this.j; c = this.f * a / this.j; this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f); break; case 2: b = this.g * a / this.j; c = this.f * a / this.j; this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f); break; case 3: b = this.g * a / this.j; c = this.f * a / this.j; this.stretch(this.m, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f); break; case 4: b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; 5 > c && (c = 5); this.stretch(this.m,
                        0, 0, b, c, 0, 0, this.V.width / 2, this.V.height / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; 5 > c && (c = 5); this.stretch(this.m, this.g - b, 0, b, c, this.g / 2, 0, this.g / 2, this.f / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; this.stretch(this.m, 0, this.f - c, b, c, 0, this.f / 2, this.g / 2, this.f / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; this.stretch(this.m, this.g - b, this.f - c, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2); break; case 5: b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; 5 > c && (c = 5); this.stretch(this.m, this.g / 2 - b, this.f / 2 - c, b, c, 0, 0, this.V.width /
                            2, this.V.height / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; 5 > c && (c = 5); this.stretch(this.m, this.g / 2, this.f / 2 - c, b, c, this.g / 2, 0, this.g / 2, this.f / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; this.stretch(this.m, this.g / 2 - b, this.f / 2, b, c, 0, this.f / 2, this.g / 2, this.f / 2); b = this.g / 2 * a / this.j; c = this.f / 2 * a / this.j; this.stretch(this.m, this.g / 2, this.f / 2, b, c, this.g / 2, this.f / 2, this.g / 2, this.f / 2); break; case 6: b = this.g; c = this.f * a / this.j; this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f); break; case 7: b = this.g * a / this.j; c = this.f;
                        this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f); break; case 8: b = this.g * a / this.j; c = this.f; this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f); break; case 9: b = this.g, c = this.f * a / this.j, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f)
                }
            } return null
        }, end: function () { this.finish() }
    }); td.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.$a = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va && (this.va = !1, this.g = this.m.width, this.f = this.m.height, this.dc = 0); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                var b,
                c; switch (this.$a) {
                    case 0: 0 == this.dc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.V, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f)); break; case 1: 0 == this.dc ? (b = this.g, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.V, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
                        break; case 2: 0 == this.dc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.V, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, this.g - b, 0, b, c, 0, 0, this.g, this.f)); break; case 3: 0 == this.dc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = this.f, this.stretch(this.V, 0, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = this.f, this.stretch(this.m, 0, 0, b, c, 0, 0, this.g, this.f));
                        break; case 4: 0 == this.dc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = this.f, this.stretch(this.V, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = this.f, this.stretch(this.m, this.g / 2 - b / 2, 0, b, c, 0, 0, this.g, this.f)); break; case 5: 0 == this.dc ? (c = 2 * this.f * a / this.j, c = this.f - c, b = this.g, this.stretch(this.V, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (c = 2 * this.f * a / this.j, c -= this.f, b = this.g, this.stretch(this.m, 0, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f)); break;
                    case 6: 0 == this.dc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.V, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, this.g / 2 - b / 2, this.f / 2 - c / 2, b, c, 0, 0, this.g, this.f)); break; case 7: 0 == this.dc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = this.f, this.stretch(this.V, this.g - b, 0, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = this.f, this.stretch(this.m,
                        this.f - b, 0, b, c, 0, 0, this.g, this.f)); break; case 8: 0 == this.dc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.V, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f)); break; case 9: 0 == this.dc ? (b = this.g, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.V, 0, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = this.g, c = 2 * this.f * a / this.j, c -= this.f,
                            this.stretch(this.m, 0, this.f - c, b, c, 0, 0, this.g, this.f)); break; case 10: 0 == this.dc ? (b = 2 * this.g * a / this.j, b = this.g - b, c = 2 * this.f * a / this.j, c = this.f - c, this.stretch(this.V, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f), a >= this.j / 2 && (this.dc = 1)) : (b = 2 * this.g * a / this.j, b -= this.g, c = 2 * this.f * a / this.j, c -= this.f, this.stretch(this.m, this.g - b, this.f - c, b, c, 0, 0, this.g, this.f))
                }
            } return null
        }, end: function () { this.finish() }
    }); ud.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.$a = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va &&
            (this.va = !1, this.g = this.m.width, this.f = this.m.height, this.sk = this.rk = 0); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                var b, c, d, e; b = this.f * a / this.j; a = this.g * a / this.j; if (0 == this.$a) { e = b % 2; for (c = 0; c < this.g; c += 2) { for (d = this.rk; d < b; d++)this.D(this.m, c, d, c, d, 1, 1); for (d = this.f - b - e; d < this.f - this.rk; d++)this.D(this.m, c + 1, d + 1, c + 1, d + 1, 1, 1) } this.rk = 0 == b % 2 ? b : b - 1 } if (1 == this.$a) {
                    e = a % 2; for (d = 0; d < this.f; d++) {
                        for (c = this.sk; c < a; c += 2)this.D(this.m, c + 1, d, c + 1, d, 1, 1); for (c = this.g - a - e; c < this.g - this.sk; c += 2)this.D(this.m,
                            c, d + 1, c, d + 1, 1, 1)
                    } this.sk = 0 == a % 2 ? a : a - 1
                } if (2 == this.$a) { e = b % 2; for (c = 0; c < this.g; c += 2) { for (d = this.rk; d < b; d += 2)this.D(this.m, c, d, c, d, 1, 1); for (d = this.f - b - e; d < this.f - this.rk; d += 2)this.D(this.m, c + 1, d + 1, c + 1, d + 1, 1, 1) } e = a % 2; for (d = 0; d < this.f; d += 2) { for (c = this.sk; c < a; c += 2)this.D(this.m, c + 1, d, c + 1, d, 1, 1); for (c = this.g - a - e; c < this.g - this.sk; c += 2)this.D(this.m, c, d + 1, c, d + 1, 1, 1) } this.rk = 0 == b % 2 ? b : b - 1; this.sk = 0 == a % 2 ? a : a - 1 }
            } return null
        }, end: function () { this.finish() }
    }); vd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) {
            this.Ta =
            b.s(); this.un = b.s(); this.Jz = b.s(); this.start(a, c, d, e)
        }, Kb: function () {
            this.va && (this.va = !1, this.g = this.m.width, this.f = this.m.height, this.Vl = 0); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                var b, c, d; b = this.g / 2; d = this.f / 2; this.Vl = 6.28318 * this.Ta * a / this.j; 1 == this.Jz && (this.Vl = 6.28318 - this.Vl); c = this.g / 2 - this.g / 2 * a / this.j; b = Math.floor(b + Math.cos(this.Vl) * c); c = Math.floor(d + Math.sin(this.Vl) * c); d = this.g * a / this.j; a = this.f * a / this.j; this.stretch(this.V, 0, 0, this.g, this.f, 0, 0, this.V.width, this.V.height);
                1 == this.KQ ? this.stretch(this.m, b - d / 2, c - a / 2, d, a, 0, 0, this.g, this.f) : this.stretch(this.m, b - d / 2, c - a / 2, d, a, this.g - d, this.f - a, d, a)
            } return null
        }, end: function () { this.finish() }
    }); wd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.Ta = b.s(); this.un = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va && (this.va = !1, this.g = this.m.width, this.f = this.m.height, this.ir = 0); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                var b, c, d; b = this.g / 2; c = this.f / 2; d = 6.28318 * this.Ta * a / this.j; d -= 6.28318 * this.ir; 1 == this.un && (d = 6.28318 -
                    d); a = this.g * a / this.j; b = Math.floor(b + Math.cos(d) * a); c = Math.floor(c + Math.sin(d) * a); this.D(this.m); this.D(this.V, b - this.g / 2, c - this.f / 2, 0, 0, this.g, this.f); 0 == this.un ? 6.28318 <= d && this.ir++ : 0 >= d && this.ir++
            } return null
        }, end: function () { this.finish() }
    }); xd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.qx = b.s(); this.Os = b.o(); this.CD = b.o(); this.start(a, c, d, e) }, Kb: function () {
            var a = this.V.width, b = this.V.height; if (this.va) {
                this.I = Math.floor((a * this.qx / 100 + b * this.qx / 100) / 2); 0 == this.I && (this.I = 1); this.Fe =
                    (a + this.I - 1) / this.I; this.pg = (b + this.I - 1) / this.I; this.wv = this.CD; this.od = this.Os; switch (this.Os) {
                        case u.ni: this.aa = this.ba = 0; break; case u.oi: this.aa = a - this.I; this.ba = 0; break; case u.zj: this.aa = 0; this.ba = b - this.I; break; case u.Aj: this.aa = a - this.I; this.ba = b - this.I; break; case u.Cx: this.aa = a / 2 - this.I, this.ba = b / 2 - this.I, this.od = this.wv == u.Ix ? u.ni : u.oi, this.kr = this.aa - this.I, this.nr = this.ba - this.I, this.hr = this.ba + 2 * this.I, this.mr = this.aa + 2 * this.I, this.Fe = 2 + 2 * (this.aa + this.I - 1) / this.I, this.pg = 2 + 2 * (this.ba +
                            this.I - 1) / this.I
                    }this.vk = Math.floor(this.Fe * this.pg); this.tk = 0; this.va = !1
            } if (this.I >= a || this.I >= b) this.D(this.m); else {
                var c; c = Math.floor(this.vk * this.pc() / this.j); var d = c - this.tk; if (0 != d) for (this.tk = c, c = 0; c < d; c++)if (this.D(this.m, this.aa, this.ba, this.aa, this.ba, this.I, this.I), this.Os == u.Cx) switch (this.od) {
                    case u.ni: this.aa += this.I; this.aa >= this.mr && (this.aa -= this.I, this.ba += this.I, this.od = u.oi, this.mr += this.I); break; case u.oi: this.ba += this.I; this.ba >= this.hr && (this.ba -= this.I, this.aa -= this.I, this.od =
                        u.Aj, this.hr += this.I); break; case u.Aj: this.aa -= this.I; this.aa + this.I <= this.kr && (this.aa += this.I, this.ba -= this.I, this.od = u.zj, this.kr -= this.I); break; case u.zj: this.ba -= this.I, this.ba + this.I <= this.nr && (this.ba += this.I, this.aa += this.I, this.od = u.ni, this.nr -= this.I)
                } else switch (this.wv) {
                    case u.Ix: switch (this.od) {
                        case u.ni: this.aa += this.I; this.aa >= a && (this.aa -= this.I, this.ba += this.I, this.od = u.oi); break; case u.oi: this.aa -= this.I; 0 >= this.aa + this.I && (this.aa += this.I, this.ba += this.I, this.od = u.ni); break; case u.zj: this.aa +=
                            this.I; this.aa >= a && (this.aa -= this.I, this.ba -= this.I, this.od = u.Aj); break; case u.Aj: this.aa -= this.I, 0 >= this.aa + this.I && (this.aa += this.I, this.ba -= this.I, this.od = u.zj)
                    }break; case u.nE: switch (this.od) {
                        case u.ni: this.ba += this.I; this.ba >= b && (this.ba -= this.I, this.aa += this.I, this.od = u.zj); break; case u.oi: this.ba += this.I; this.ba >= b && (this.ba -= this.I, this.aa -= this.I, this.od = u.Aj); break; case u.zj: this.ba -= this.I; 0 >= this.ba + this.I && (this.ba += this.I, this.aa += this.I, this.od = u.ni); break; case u.Aj: this.ba -= this.I,
                            0 >= this.ba + this.I && (this.ba += this.I, this.aa -= this.I, this.od = u.oi)
                    }
                }
            } return null
        }, end: function () { this.finish() }
    }); yd.prototype = n.extend(new u, {
        Y: function (a, b, c, d, e) { this.$a = b.s(); this.Ta = b.s(); this.start(a, c, d, e) }, Kb: function () {
            this.va && (this.va = !1, this.g = this.m.width, this.f = this.m.height, this.Ef = this.uk = 0); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else {
                var b, c, d, e; 0 == this.$a ? (b = this.f / this.Ta, e = Math.floor(this.uk * b) + Math.floor(b), c = 0, d = this.g * a / this.j, d = d * this.Ta / 2, d -= this.g * this.uk, b = 0 == this.Ef ?
                    0 : this.g - d, this.D(this.m, b, c, b, c, d, e), c = this.f - e, b = 1 == this.Ef ? 0 : this.g - d, this.D(this.m, b, c, b, c, d, e), d >= this.g && (this.uk++, this.Ef++, 2 == this.Ef && (this.Ef = 0))) : (b = this.g / this.Ta, d = Math.floor(this.uk * b) + Math.floor(b), b = 0, e = this.f * a / this.j, e = e * this.Ta / 2, e -= this.f * this.uk, c = 0 == this.Ef ? 0 : this.f - e, this.D(this.m, b, c, b, c, d, e), b = this.g - d, c = 1 == this.Ef ? 0 : this.f - e, this.D(this.m, b, c, b, c, d, e), e >= this.f && (this.uk++, this.Ef++, 2 == this.Ef && (this.Ef = 0)))
            } return null
        }, end: function () { this.finish() }
    }); zd.prototype = n.extend(new u,
        { Y: function (a, b, c, d, e) { this.start(a, c, d, e) }, Kb: function (a) { var b = this.V.width, c = this.V.height; this.va && (this.va = !1); if (0 == this.j) this.D(this.m); else { var d; d = this.pc(); 0 != (a & u.Yp) ? (a = Math.floor(b - b * d / this.j), d = Math.floor(c - c * d / this.j), this.D(this.m), this.stretch(this.V, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) : (a = Math.floor(b * d / this.j), d = Math.floor(c * d / this.j), this.D(this.V), this.stretch(this.m, (b - a) / 2, (c - d) / 2, a, d, 0, 0, b, c)) } return null }, end: function () { this.finish() } }); Ad.prototype = n.extend(new u, {
            Y: function (a,
                b, c, d, e) { this.Ta = b.s(); this.start(a, c, d, e) }, Kb: function () { this.va && (this.va = !1, this.g = this.m.width, this.f = this.m.height); var a = this.pc(); if (1 < a / this.j) this.D(this.m); else { var b, c, d; 0 == this.Ta ? (c = this.g * a / this.j, d = this.f * a / this.j, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.m, 0, 0, this.g, this.f, a, b, c, d)) : (c = this.g * a / this.j, c = this.g - c, d = this.f * a / this.j, d = this.f - d, a = this.g / 2 - c / 2, b = this.f / 2 - d / 2, this.stretch(this.V, 0, 0, this.g, this.f, a, b, c, d)) } return null }, end: function () { this.finish() }
        }); t.Kg = {
            Zx: "PK\u0003\u0004",
            Ex: "PK\u0001\u0002", Us: "PK\u0005\u0006", Cy: "PK\u0006\u0007", qG: "PK\u0006\u0006", ZL: "PK\u0007\b"
        }; t.kH = { nh: !1, yi: !1, dir: !1, wf: null, Al: null }; t.prototype = function () {
            function a(d) { "/" != d.slice(-1) && (d += "/"); if (!this.files[d]) { var e = b(d); e && a.call(this, e); c.call(this, d, null, { dir: !0 }) } return this.files[d] } function b(a) { "/" == a.slice(-1) && (a = a.substring(0, a.length - 1)); var b = a.lastIndexOf("/"); return 0 < b ? a.substring(0, b) : "" } function c(c, e, h) {
                var g = b(c); g && a.call(this, g); h = h || {}; !0 === h.nh && null == h.yi && (h.yi =
                    !0); h = d(h, t.kH); h.wf = h.wf || new Date; null !== h.Al && (h.Al = h.Al.toUpperCase()); h.dir || null === e || "undefined" === typeof e ? (h.nh = !1, h.yi = !1, e = null) : t.al.Fs && e instanceof Uint8Array ? (h.nh = !1, h.yi = !0, e = t.Qg.Es(e)) : t.al.Hy && e instanceof ArrayBuffer ? (h.nh = !1, h.yi = !0, e = new Uint8Array(e), e = t.Qg.Es(e)) : h.yi && !h.nh && (!0 !== h.bC && (e = t.Qg.oD(e)), delete h.bC); return this.files[c] = new f(c, e, h)
            } function d() {
                var a = {}, b, c; for (b = 0; b < arguments.length; b++)for (c in arguments[b]) arguments[b].hasOwnProperty(c) && "undefined" ===
                    typeof a[c] && (a[c] = arguments[b][c]); return a
            } function e(a, b) { var c = "", d; for (d = 0; d < b; d++)c += String.fromCharCode(a & 255), a >>>= 8; return c } function f(a, b, c) { this.name = a; this.data = b; this.options = c } f.prototype = { Iy: function () { var a = this.data; if (null === a || "undefined" === typeof a) return ""; this.options.nh && (a = jb.decode(a)); this.options.yi || (a = t.prototype.yD(a)); return a } }; return {
                load: function () { throw Error("Load method is not defined. Is the file jszip-load.js included ?"); }, filter: function (a) {
                    var b = [], c, e, g;
                    for (c in this.files) this.files.hasOwnProperty(c) && (e = this.files[c], g = new f(e.name, e.data, d(e.options)), e = c.slice(this.root.length, c.length), c.slice(0, this.root.length) === this.root && a(e, g) && b.push(g)); return b
                }, file: function (a, b, d) { if (1 === arguments.length) { if (a instanceof RegExp) { var e = a; return this.filter(function (a, b) { return !b.options.dir && e.test(a) }) } return this.filter(function (b, c) { return !c.options.dir && b === a })[0] || null } a = this.root + a; c.call(this, a, b, d); return this }, EP: function (b) {
                    if (!b) return this;
                    if (b instanceof RegExp) return this.filter(function (a, c) { return c.options.dir && b.test(a) }); var c = a.call(this, this.root + b), d = this.clone(); d.root = c.name; return d
                }, remove: function (a) { a = this.root + a; var b = this.files[a]; b || ("/" != a.slice(-1) && (a += "/"), b = this.files[a]); if (b) if (b.options.dir) for (var b = this.filter(function (b, c) { return c.name.slice(0, a.length) === a }), c = 0; c < b.length; c++)delete this.files[b[c].name]; else delete this.files[a]; return this }, HP: function (a) {
                    var b, c; a = d(a || {}, { nh: !0, Al: "STORE", type: "base64" });
                    var f = a.Al.toUpperCase(); if (!t.vf[f]) throw f + " is not a valid compression method !"; var g = [], h = [], l = 0, m; for (m in this.files) if (this.files.hasOwnProperty(m)) {
                        b = this.files[m]; var n = this.yD(b.name), p, r, v; r = b; b = n; var z = f; p = b !== r.name; c = r.Iy(); var u = r.options; v = u.wf.getHours(); v = v << 6 | u.wf.getMinutes(); v = v << 5 | u.wf.getSeconds() / 2; r = u.wf.getFullYear() - 1980; r = r << 4 | u.wf.getMonth() + 1; r = r << 5 | u.wf.getDate(); var A = null !== c && 0 !== c.length, z = u.Al || z; if (!t.vf[z]) throw z + " is not a valid compression method !"; u = t.vf[z];
                        z = A ? u.QG(c) : ""; p = "\n\x00" + (p ? "\x00\b" : "\x00\x00") + (A ? u.pr : t.vf.STORE.pr); p += e(v, 2); p += e(r, 2); p += A ? e(this.rq(c), 4) : "\x00\x00\x00\x00"; p += A ? e(z.length, 4) : "\x00\x00\x00\x00"; p += A ? e(c.length, 4) : "\x00\x00\x00\x00"; p += e(b.length, 2); b = p += "\x00\x00"; c = z; c = t.Kg.Zx + b + n + c; n = t.Kg.Ex + "\u0014\x00" + b + "\x00\x00\x00\x00\x00\x00" + (!0 === this.files[m].options.dir ? "\u0010\x00\x00\x00" : "\x00\x00\x00\x00") + e(l, 4) + n; l += c.length; h.push(c); g.push(n)
                    } f = h.join(""); g = g.join(""); h = f + g + (t.Kg.Us + "\x00\x00\x00\x00" + e(h.length, 2) +
                        e(h.length, 2) + e(g.length, 4) + e(f.length, 4) + "\x00\x00"); switch (a.type.toLowerCase()) { case "uint8array": return t.Qg.hx(h); case "arraybuffer": return t.Qg.hx(h).buffer; case "blob": return t.Qg.BK(h); case "base64": return a.nh ? jb.encode(h) : h; default: return h }
                }, rq: function (a, b) {
                    if ("" === a || "undefined" === typeof a) return 0; var c = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666,
                        4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192,
                        31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649,
                        1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763,
                        1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285,
                        2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471,
                        3272380065, 1510334235, 755167117]; "undefined" == typeof b && (b = 0); var d; b ^= -1; for (var e = 0, f = a.length; e < f; e++)d = (b ^ a.charCodeAt(e)) & 255, d = c[d], b = b >>> 8 ^ d; return b ^ -1
                }, clone: function () { var a = new t, b; for (b in this) "function" !== typeof this[b] && (a[b] = this[b]); return a }, yD: function (a) {
                    for (var b = "", c = 0; c < a.length; c++) {
                        var d = a.charCodeAt(c); 128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d &
                            63 | 128))
                    } return b
                }, xD: function (a) { for (var b = "", c = 0, d, e, f; c < a.length;)d = a.charCodeAt(c), 128 > d ? (b += String.fromCharCode(d), c++) : 191 < d && 224 > d ? (e = a.charCodeAt(c + 1), b += String.fromCharCode((d & 31) << 6 | e & 63), c += 2) : (e = a.charCodeAt(c + 1), f = a.charCodeAt(c + 2), b += String.fromCharCode((d & 15) << 12 | (e & 63) << 6 | f & 63), c += 3); return b }
            }
        }(); t.vf = { STORE: { pr: "\x00\x00", QG: function (a) { return a }, mx: function (a) { return a } } }; t.al = {
            Hy: "undefined" !== typeof ArrayBuffer && "undefined" !== typeof Uint8Array, Fs: "undefined" !== typeof Uint8Array,
            blob: function () { if ("undefined" === typeof ArrayBuffer) return !1; var a = new ArrayBuffer(0); try { return 0 === (new Blob([a], { type: "application/zip" })).size } catch (c) { } try { var b = new (window.BlobBuilder || window.WebKitBlobBuilder || window.GF || window.yF); b.append(a); return 0 === b.getBlob("application/zip").size } catch (c) { } return !1 }()
        }; t.Qg = {
            oD: function (a) { for (var b = "", c = 0; c < a.length; c++)b += String.fromCharCode(a.charCodeAt(c) & 255); return b }, hx: function (a) {
                if (!t.al.Fs) throw Error("Uint8Array is not supported by this browser");
                for (var b = new ArrayBuffer(a.length), b = new Uint8Array(b), c = 0; c < a.length; c++)b[c] = a.charCodeAt(c); return b
            }, Es: function (a) { if (!t.al.Fs) throw Error("Uint8Array is not supported by this browser"); for (var b = "", c = 0; c < a.length; c++)b += String.fromCharCode(a[c]); return b }, BK: function (a) {
                if (!t.al.blob) throw Error("Blob is not supported by this browser"); a = t.Qg.hx(a).buffer; try { return new Blob([a], { type: "application/zip" }) } catch (c) { } try {
                    var b = new (window.BlobBuilder || window.WebKitBlobBuilder || window.GF || window.yF);
                    b.append(a); return b.getBlob("application/zip")
                } catch (c) { } throw Error("Bug : can't construct the Blob.");
            }
        }; var jb = function () {
            return {
                encode: function (a) {
                    for (var b = "", c, d, e, f, g, k, h = 0; h < a.length;)c = a.charCodeAt(h++), d = a.charCodeAt(h++), e = a.charCodeAt(h++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, k = e & 63, isNaN(d) ? g = k = 64 : isNaN(e) && (k = 64), b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g) +
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k); return b
                }, decode: function (a) {
                    var b = "", c, d, e, f, g, k = 0; for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length;)c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)),
                        c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e)); return b
                }
            }
        }(); if (!t) throw "JSZip not defined"; (function () {
            function a() { this.list = this.next = null } function b() { this.n = this.tf = this.e = 0; this.t = null } function c(c, d, e, f, g, k) {
                this.yj = 16; this.HF = 288; this.status = 0; this.root = null; this.yh = 0; var l = Array(this.yj + 1), h, m, q, n, p, r, u, v = Array(this.yj + 1), z, A, w, C = new b, R = Array(this.yj); n = Array(this.HF); var t, E = Array(this.yj + 1), H, B,
                    D; D = this.root = null; for (p = 0; p < l.length; p++)l[p] = 0; for (p = 0; p < v.length; p++)v[p] = 0; for (p = 0; p < R.length; p++)R[p] = null; for (p = 0; p < n.length; p++)n[p] = 0; for (p = 0; p < E.length; p++)E[p] = 0; h = 256 < d ? c[256] : this.yj; z = c; A = 0; p = d; do l[z[A]]++, A++; while (0 < --p); if (l[0] == d) this.root = null, this.status = this.yh = 0; else {
                        for (r = 1; r <= this.yj && 0 == l[r]; r++); u = r; k < r && (k = r); for (p = this.yj; 0 != p && 0 == l[p]; p--); q = p; k > p && (k = p); for (H = 1 << r; r < p; r++, H <<= 1)if (0 > (H -= l[r])) { this.status = 2; this.yh = k; return } if (0 > (H -= l[p])) this.status = 2, this.yh = k; else {
                            l[p] +=
                            H; E[1] = r = 0; z = l; A = 1; for (w = 2; 0 < --p;)E[w++] = r += z[A++]; z = c; p = A = 0; do 0 != (r = z[A++]) && (n[E[r]++] = p); while (++p < d); d = E[q]; E[0] = p = 0; z = n; A = 0; n = -1; t = v[0] = 0; w = null; for (B = 0; u <= q; u++)for (c = l[u]; 0 < c--;) {
                                for (; u > t + v[1 + n];) {
                                    t += v[1 + n]; n++; B = (B = q - t) > k ? k : B; if ((m = 1 << (r = u - t)) > c + 1) for (m -= c + 1, w = u; ++r < B && !((m <<= 1) <= l[++w]);)m -= l[w]; t + r > h && t < h && (r = h - t); B = 1 << r; v[1 + n] = r; w = Array(B); for (m = 0; m < B; m++)w[m] = new b; D = null == D ? this.root = new a : D.next = new a; D.next = null; D.list = w; R[n] = w; 0 < n && (E[n] = p, C.tf = v[n], C.e = 16 + r, C.t = w, r = (p & (1 << t) - 1) >>
                                        t - v[n], R[n - 1][r].e = C.e, R[n - 1][r].tf = C.tf, R[n - 1][r].n = C.n, R[n - 1][r].t = C.t)
                                } C.tf = u - t; A >= d ? C.e = 99 : z[A] < e ? (C.e = 256 > z[A] ? 16 : 15, C.n = z[A++]) : (C.e = g[z[A] - e], C.n = f[z[A++] - e]); m = 1 << u - t; for (r = p >> t; r < B; r += m)w[r].e = C.e, w[r].tf = C.tf, w[r].n = C.n, w[r].t = C.t; for (r = 1 << u - 1; 0 != (p & r); r >>= 1)p ^= r; for (p ^= r; (p & (1 << t) - 1) != E[n];)t -= v[n], n--
                            } this.yh = v[1]; this.status = 0 != H && 1 != q ? 1 : 0
                        }
                    }
            } function d(a) { for (; w < a;)A |= (I.length == J ? -1 : I.charCodeAt(J++) & 255) << w, w += 8 } function e(a) { return A & L[a] } function f(a) { A >>= a; w -= a } function g(a, b, c) {
                var g,
                k, h; if (0 == c) return 0; for (h = 0; ;) { d(D); k = B.list[e(D)]; for (g = k.e; 16 < g;) { if (99 == g) return -1; f(k.tf); g -= 16; d(g); k = k.t[e(g)]; g = k.e } f(k.tf); if (16 == g) l &= 32767, a[b + h++] = p[l++] = k.n; else { if (15 == g) break; d(g); C = k.n + e(g); f(g); d(G); k = F.list[e(G)]; for (g = k.e; 16 < g;) { if (99 == g) return -1; f(k.tf); g -= 16; d(g); k = k.t[e(g)]; g = k.e } f(k.tf); d(g); E = l - k.n - e(g); for (f(g); 0 < C && h < c;)C--, E &= 32767, l &= 32767, a[b + h++] = p[l++] = p[E++] } if (h == c) return c } z = -1; return h
            } function k(a, b, k) {
                var l, h, m, n, p, q, r, z = Array(316); for (l = 0; l < z.length; l++)z[l] =
                    0; d(5); q = 257 + e(5); f(5); d(5); r = 1 + e(5); f(5); d(4); l = 4 + e(4); f(4); if (286 < q || 30 < r) return -1; for (h = 0; h < l; h++)d(3), z[Q[h]] = e(3), f(3); for (; 19 > h; h++)z[Q[h]] = 0; D = 7; h = new c(z, 19, 19, null, null, D); if (0 != h.status) return -1; B = h.root; D = h.yh; n = q + r; for (l = m = 0; l < n;)if (d(D), p = B.list[e(D)], h = p.tf, f(h), h = p.n, 16 > h) z[l++] = m = h; else if (16 == h) { d(2); h = 3 + e(2); f(2); if (l + h > n) return -1; for (; 0 < h--;)z[l++] = m } else { 17 == h ? (d(3), h = 3 + e(3), f(3)) : (d(7), h = 11 + e(7), f(7)); if (l + h > n) return -1; for (; 0 < h--;)z[l++] = 0; m = 0 } D = 9; h = new c(z, q, 257, M, N, D); 0 == D &&
                        (h.status = 1); if (0 != h.status) return -1; B = h.root; D = h.yh; for (l = 0; l < r; l++)z[l] = z[l + q]; G = 6; h = new c(z, r, 0, O, P, G); F = h.root; G = h.yh; return 0 == G && 257 < q || 0 != h.status ? -1 : g(a, b, k)
            } function h(a, b) {
                var h, m; for (h = 0; h < b && (!R || -1 != z);) {
                    if (0 < C) { if (0 != z) for (; 0 < C && h < b;)C--, E &= 32767, l &= 32767, a[0 + h++] = p[l++] = p[E++]; else { for (; 0 < C && h < b;)C--, l &= 32767, d(8), a[0 + h++] = p[l++] = e(8), f(8); 0 == C && (z = -1) } if (h == b) break } if (-1 == z) { if (R) break; d(1); 0 != e(1) && (R = !0); f(1); d(2); z = e(2); f(2); B = null; C = 0 } switch (z) {
                        case 0: var q = a, t = 0 + h, H = b - h; m = w & 7;
                            f(m); d(16); m = e(16); f(16); d(16); if (m != (~A & 65535)) m = -1; else { f(16); C = m; for (m = 0; 0 < C && m < H;)C--, l &= 32767, d(8), q[t + m++] = p[l++] = e(8), f(8); 0 == C && (z = -1) } break; case 1: if (null != B) m = g(a, 0 + h, b - h); else a: {
                                var K; m = a; q = 0 + h; t = b - h; if (null == r) {
                                    H = Array(288); for (K = 0; 144 > K; K++)H[K] = 8; for (; 256 > K; K++)H[K] = 9; for (; 280 > K; K++)H[K] = 7; for (; 288 > K; K++)H[K] = 8; v = 7; K = new c(H, 288, 257, M, N, v); if (0 != K.status) { alert("HufBuild error: " + K.status); m = -1; break a } r = K.root; v = K.yh; for (K = 0; 30 > K; K++)H[K] = 5; n = 5; K = new c(H, 30, 0, O, P, n); if (1 < K.status) {
                                        r =
                                        null; alert("HufBuild error: " + K.status); m = -1; break a
                                    } u = K.root; n = K.yh
                                } B = r; F = u; D = v; G = n; m = g(m, q, t)
                            } break; case 2: m = null != B ? g(a, 0 + h, b - h) : k(a, 0 + h, b - h); break; default: m = -1
                    }if (-1 == m) return R ? 0 : -1; h += m
                } return h
            } function m(a) { var b, c, d; null == p && (p = Array(65536)); w = A = l = 0; z = -1; R = !1; C = E = 0; B = null; I = a; J = 0; b = Array(1024); for (a = ""; 0 < (c = h(b, b.length));)for (d = 0; d < c; d++)a += String.fromCharCode(b[d]); I = null; return a } var n, p, l, r = null, u, v, A, w, z, R, C, E, B, F, D, G, I, J, L = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767,
                65535], M = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99], O = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], P = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]; t.vf.DEFLATE ? t.vf.DEFLATE.mx = m : t.vf.DEFLATE = { pr: "\b\x00", mx: m }
        })(); (function () {
            function a(a) {
                var b =
                    "", c, d; for (d = 0; d < (a || "").length; d++)c = a.charCodeAt(d), b += "\\x" + (16 > c ? "0" : "") + c.toString(16).toUpperCase(); return b
            } function b(a) { this.stream = ""; t.al.Fs && a instanceof Uint8Array ? this.stream = t.Qg.Es(a) : t.al.Hy && a instanceof ArrayBuffer ? (a = new Uint8Array(a), this.stream = t.Qg.Es(a)) : this.stream = t.Qg.oD(a); this.index = 0 } function c(a, b) { this.options = a; this.tv = b } function d(a, b) { this.files = []; this.tv = b; a && this.load(a) } b.prototype = {
                bz: function (a) { this.az(this.index + a) }, az: function (a) {
                    if (this.stream.length < a ||
                        0 > a) throw Error("End of stream reached (stream length = " + this.stream.length + ", asked index = " + a + "). Corrupted zip ?");
                }, Km: function (a) { this.az(a); this.index = a }, hD: function (a) { this.Km(this.index + a) }, GG: function (a) { return this.stream.charCodeAt(a) }, Ba: function (a) { var b = 0, c; this.bz(a); for (c = this.index + a - 1; c >= this.index; c--)b = (b << 8) + this.GG(c); this.index += a; return b }, af: function (a) { this.bz(a); var b = this.stream.slice(this.index, this.index + a); this.index += a; return b }, OJ: function () {
                    var a = this.Ba(4); return new Date((a >>
                        25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (a & 31) << 1)
                }
            }; c.prototype = {
                rI: function () { return 1 === (this.Sy & 1) }, LK: function () { return 2048 === (this.Sy & 2048) }, SJ: function (b) {
                    var c, d; b.hD(22); this.Fu = b.Ba(2); d = b.Ba(2); this.fileName = b.af(this.Fu); b.hD(d); if (-1 == this.oq || -1 == this.Hs) throw Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)"); this.RG = b.af(this.oq); a: {
                        b = this.gz; for (c in t.vf) if (t.vf.hasOwnProperty(c) &&
                            t.vf[c].pr === b) { c = t.vf[c]; break a } c = null
                    } if (null === c) throw Error("Corrupted zip : compression " + a(this.gz) + " unknown (inner file : " + this.fileName + ")"); this.nx = c.mx(this.RG); if (this.nx.length !== this.Hs) throw Error("Bug : uncompressed data size mismatch"); if (this.tv.iP && t.prototype.rq(this.nx) !== this.rq) throw Error("Corrupted zip : CRC32 mismatch");
                }, NJ: function (a) {
                    a.af(2); a.Ba(2); this.Sy = a.Ba(2); this.gz = a.af(2); this.wf = a.OJ(); this.rq = a.Ba(4); this.oq = a.Ba(4); this.Hs = a.Ba(4); this.Fu = a.Ba(2); this.EH =
                        a.Ba(2); this.GH = a.Ba(2); this.Dz = a.Ba(2); a.Ba(2); this.DH = a.Ba(4); this.vv = a.Ba(4); if (this.rI()) throw Error("Encrypted zip are not supported"); this.fileName = a.af(this.Fu); this.QJ(a); this.rJ(a); this.Uz = a.af(this.GH); this.dir = this.DH & 16 ? !0 : !1
                }, rJ: function () { if (this.Cq[1]) { var a = new b(this.Cq[1].value); -1 === this.Hs && (this.Hs = a.Ba(8)); -1 === this.oq && (this.oq = a.Ba(8)); -1 === this.vv && (this.vv = a.Ba(8)); -1 === this.Dz && (this.Dz = a.Ba(4)) } }, QJ: function (a) {
                    var b = a.index, c, d, e; for (this.Cq = this.Cq || {}; a.index < b + this.EH;)c =
                        a.Ba(2), d = a.Ba(2), e = a.af(d), this.Cq[c] = { id: c, length: d, value: e }
                }, dI: function () { this.LK() && (this.fileName = t.prototype.xD(this.fileName), this.Uz = t.prototype.xD(this.Uz)) }
            }; d.prototype = {
                lq: function (b) { var c = this.Wa.af(4); if (c !== b) throw Error("Corrupted zip or bug : unexpected signature (" + a(c) + ", expected " + a(b) + ")"); }, IJ: function () { this.Cz = this.Wa.Ba(2); this.Ez = this.Wa.Ba(2); this.Xy = this.Wa.Ba(2); this.Wy = this.Wa.Ba(2); this.Yy = this.Wa.Ba(4); this.ku = this.Wa.Ba(4); this.PK = this.Wa.Ba(2); this.Wa.af(this.PK) },
                JJ: function () { this.NK = this.Wa.Ba(8); this.Wa.af(2); this.Wa.Ba(2); this.Cz = this.Wa.Ba(4); this.Ez = this.Wa.Ba(4); this.Xy = this.Wa.Ba(8); this.Wy = this.Wa.Ba(8); this.Yy = this.Wa.Ba(8); this.ku = this.Wa.Ba(8); this.OK = {}; for (var a = this.NK - 44, b, c, d; 0 < a;)b = this.Wa.Ba(2), c = this.Wa.Ba(4), d = this.Wa.af(c), this.OK[b] = { id: b, length: c, value: d } }, KJ: function () { this.Wa.Ba(4); this.VJ = this.Wa.Ba(8); this.pH = this.Wa.Ba(4); if (1 < this.pH) throw Error("Multi-volumes zip are not supported"); }, RJ: function () {
                    var a, b; for (a = 0; a < this.files.length; a++)b =
                        this.files[a], this.Wa.Km(b.vv), this.lq(t.Kg.Zx), b.SJ(this.Wa), b.dI()
                }, MJ: function () { var a; for (this.Wa.Km(this.ku); this.Wa.af(4) === t.Kg.Ex;)a = new c({ BD: this.BD }, this.tv), a.NJ(this.Wa), this.files.push(a) }, PJ: function () {
                    var a = this.Wa.stream.lastIndexOf(t.Kg.Us); if (-1 === a) throw Error("Corrupted zip : can't find end of central directory"); this.Wa.Km(a); this.lq(t.Kg.Us); this.IJ(); if (65535 === this.Cz || 65535 === this.Ez || 65535 === this.Xy || 65535 === this.Wy || -1 === this.Yy || -1 === this.ku) {
                        this.BD = !0; a = this.Wa.stream.lastIndexOf(t.Kg.Cy);
                        if (-1 === a) throw Error("Corrupted zip : can't find the ZIP64 end of central directory locator"); this.Wa.Km(a); this.lq(t.Kg.Cy); this.KJ(); this.Wa.Km(this.VJ); this.lq(t.Kg.qG); this.JJ()
                    }
                }, load: function (a) { this.Wa = new b(a); this.PJ(); this.MJ(); this.RJ() }
            }; t.prototype.load = function (a, b) { var c, e, f; b = b || {}; b.nh && (a = jb.decode(a)); c = (new d(a, b)).files; for (e = 0; e < c.length; e++)f = c[e], this.file(f.fileName, f.nx, { yi: !0, bC: !0, wf: f.wf, dir: f.dir }); return this }
        })(); var $d = document.getElementsByTagName("script"), ae = $d[$d.length -
            1].src; document.FQ = ae.substring(0, ae.lastIndexOf("/") + 1); ma.Runtime = Bd; ma.headerLoaded = Cd; ma.GK = "updateApplication"; ma[window.GK] = Ta; Aa.prototype = {
                yb: function (a, b, c) { if (this.visible) { this.bg && (a.Sa.save(), a.Sa.translate(this.ap, this.cp), 0 != this.angle && a.Sa.rotate(.0174532925 * -this.angle), a.Sa.scale(Math.max(.001, this.hc), Math.max(.001, this.ic)), a.Sa.translate(-this.Ka, -this.Ia)); var d; for (d = 0; d < this.children.length; d++)this.children[d].yb(a, b + this.x, c + this.y); this.bg && a.Sa.restore() } }, ce: function (a) { this.children.push(a) },
                aq: function (a, b) { b >= this.children.length ? this.children.push(a) : (0 > b && (b = 0), this.children.splice(b, 0, a)) }, WJ: function () { this.children.length = 0 }, removeChild: function (a) { var b; for (b = 0; b < this.children.length; b++)if (this.children[b] == a) return this.children.splice(b, 1), b; return -1 }, Vc: function (a) { var b; for (b = 0; b < this.children.length; b++)if (this.children[b] == a) return b; return -1 }, te: function (a, b) {
                    var c, d = null; for (c = 0; c < this.children.length; c++)if (this.children[c] == a) { d = this.children[c]; break } null != d && (this.children.splice(c,
                        1), b > c && b--, 0 > b && (b = 0), b >= this.children.length ? this.children.push(a) : this.children.splice(b, 0, a))
                }
            }; ta.ip = 0; ta.ve = 1; ta.UD = 1; ta.VD = 2; ta.Tm = 64; ta.Um = 16; ta.sp = 6; F.rO = 0; F.sO = 1; F.Ej = 0; F.il = 1; F.kv = [65535, 32767, 16383, 8191, 4095, 2047, 1023, 511, 255, 127, 63, 31, 15, 7, 3, 1]; F.Cw = [0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535]; F.Mg = new qa; F.sj = new qa; F.xl = new qa; F.zi = new qa; F.prototype = {
                su: function (a, b, c) {
                    var d, e; this.width = b.width; this.height = b.height; this.Ka = b.Ka;
                    this.Ia = b.Ia; var f = Math.floor((this.width + 15 & 4294967280) / 16); this.lineWidth = f; e = f * this.height + 1; if ("undefined" != typeof ArrayBuffer) this.R = new Uint16Array(new ArrayBuffer(2 * e)); else for (this.R = Array(e), d = 0; d < e; d++)this.R[d] = 0; d = document.createElement("canvas"); d.width = b.width; d.height = b.height; d = d.getContext("2d"); 0 == b.Wb ? d.drawImage(b.rc, 0, 0) : d.drawImage(a.ea.ec[b.Wb], b.le, b.me, b.width, b.height, 0, 0, b.width, b.height); a = d.getImageData(0, 0, this.width, this.height); if (0 == (c & F.il)) for (c = 0; c < this.height; c++) {
                        e =
                        c * b.width * 4 + 3; var g = c * f, k = 32768; for (d = 0; d < this.width; d++)0 != a.data[e] && (this.R[g] |= k), e += 4, k >>>= 1, 0 == k && (k = 32768, g++)
                    } else for (d = 0; d < this.width; d++) { for (c = 0; c < this.height && 0 == a.data[4 * (c * b.width + d) + 3]; c++); if (c < this.height) for (g = Math.min(this.height, c + ta.sp), k = 32768 >> (d & 15); c < g; c++)0 != a.data[4 * (c * b.width + d) + 3] && (e = Math.floor(c * f + (d & 4294967280) / 16), this.R[e] |= k) }
                }, $J: function (a, b, c) {
                    var d, e, f; 90 == c ? (c = 0, f = 1) : 180 == c ? (c = -1, f = 0) : 270 == c ? (c = 0, f = -1) : (f = c * Math.PI / 180, c = Math.cos(f), f = Math.sin(f)); var g, k;
                    null == b ? (e = k = 0, F.Mg.x = F.Mg.y = 0) : (g = -b.x * c, d = -b.x * f, e = -b.y * c, k = -b.y * f, F.Mg.x = Math.floor(g + k), F.Mg.y = Math.floor(e - d)); d = null == b ? a.right : a.right - b.x; g = d * c; d *= f; F.sj.x = Math.floor(g + k); F.sj.y = Math.floor(e - d); e = null == b ? a.bottom : a.bottom - b.y; F.zi.x = Math.floor(g + e * f); F.zi.y = Math.floor(e * c - d); F.xl.x = F.Mg.x + F.zi.x - F.sj.x; F.xl.y = F.Mg.y + F.zi.y - F.sj.y; c = Math.min(F.Mg.x, Math.min(F.sj.x, Math.min(F.zi.x, F.xl.x))); f = Math.min(F.Mg.y, Math.min(F.sj.y, Math.min(F.zi.y, F.xl.y))); g = Math.max(F.Mg.x, Math.max(F.sj.x, Math.max(F.zi.x,
                        F.xl.x))); d = Math.max(F.Mg.y, Math.max(F.sj.y, Math.max(F.zi.y, F.xl.y))); null != b && (b.x = -c, b.y = -f); a.right = g - c; a.bottom = d - f
                }, bH: function (a, b, c, d) {
                    var e, f, g = a.width; e = a.height; var k = new aa; k.right = Math.floor(a.width * c); k.bottom = Math.floor(a.height * d); var h = new qa; h.x = Math.floor(a.Ka * c); h.y = Math.floor(a.Ia * d); this.$J(k, h, b); var m = k.right, k = k.bottom; if (0 >= m || 0 >= k) return !1; var n = a.lineWidth, p = (m + 15 & 2147483632) / 16; this.R = "undefined" != typeof ArrayBuffer ? new Uint16Array(new ArrayBuffer(2 * (p * k + 1))) : Array(p * k +
                        1); var l; for (l = p * k; 0 <= l; l--)this.R[l] = 0; this.lineWidth = p; this.width = m; this.height = k; this.Ka = h.x; this.Ia = h.y; b *= .017453292; f = Math.cos(b); var r = Math.sin(b); b = 0; h = Math.floor(65536 * (g / 2 - (m / 2 * f - k / 2 * r) / c)); l = Math.floor(65536 * (e / 2 - (m / 2 * r + k / 2 * f) / d)); var u = Math.floor(65536 * f / c), v = Math.floor(65536 * r / d), A = m / 16, m = m % 16; d = Math.floor(65536 * f / d); c = Math.floor(65536 * r / c); var g = 65536 * g, r = 65536 * e, w, z; for (f = 0; f < k; f++) {
                            var t = h, C = l, E = b, B; for (e = 0; e < A; e++) {
                                var D = 0; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C /
                                    65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 32768)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 16384)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 8192)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 4096)); t += u;
                                C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 2048)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 1024)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 512)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>>
                                    B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 256)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 128)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 64)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 32)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r &&
                                        (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 16)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 8)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 4)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)],
                                            0 != (z & w) && (D |= 2)); t += u; C += v; 0 <= t && t < g && 0 <= C && C < r && (B = Math.floor(t / 65536), z = Math.floor(C / 65536), w = 32768 >>> B % 16, z = a.R[Math.floor(z * n + B / 16)], 0 != (z & w) && (D |= 1)); t += u; C += v; this.R[E++] = D
                            } if (0 != m) { D = 32768; for (e = B = 0; e < m; e++, D = D >> 1 & 32767) { if (0 <= t && t < g && 0 <= C && C < r) { z = Math.floor(t / 65536); var F = Math.floor(C / 65536); w = 32768 >>> z % 16; z = a.R[Math.floor(F * n + z / 16)]; 0 != (z & w) && (B |= D) } t += u; C += v } this.R[E] = B } b += p; h -= c; l += d
                        } return !0
                }, rj: function (a, b, c, d, e, f, g) {
                    var k, h, m; a <= e ? (k = this, m = Math.floor(c), c = Math.floor(g), h = Math.floor(a),
                        g = Math.floor(b), a = Math.floor(e), b = Math.floor(f)) : (k = d, d = this, m = Math.floor(g), c = Math.floor(c), h = Math.floor(e), g = Math.floor(f), a = Math.floor(a), b = Math.floor(b)); f = k.height; var n = 0; 0 != m && (f = m, g += k.height - m, n = k.height - m); e = d.height; var p = 0; 0 != c && (e = c, b += d.height - c, p = d.height - c); if (h >= a + d.width || h + k.width <= a || g >= b + e || g + f < b) return !1; c = a - h; m = Math.floor(c / 16); c %= 16; h = Math.min(h + k.width - a, d.width); h = Math.floor((h + 15) / 16); g <= b ? (a = b - g + n, n = p, g = Math.min(g + f, b + e) - b) : (a = n, n = g - b + p, g = Math.min(g + f, b + e) - g); b = a * k.lineWidth;
                    e = n * d.lineWidth; if (0 != c) switch (h) {
                        case 1: for (a = 0; a < g; a++) { n = k.R[b + m] << c; if (0 != (n & d.R[e]) || m + 1 < k.lineWidth && (n = k.R[b + m + 1] << c, n >>>= 16, 0 != (n & d.R[e]))) return !0; b += k.lineWidth; e += d.lineWidth } break; case 2: for (a = 0; a < g; a++) { n = k.R[b + m] << c; if (0 != (n & d.R[e])) return !0; n = k.R[b + m + 1] << c; p = n >>> 16; if (0 != (p & d.R[e]) || 0 != (n & d.R[e + 1]) || m + 2 < k.lineWidth && (n = k.R[b + m + 2] << c, n >>>= 16, 0 != (n & d.R[e + 1]))) return !0; b += k.lineWidth; e += d.lineWidth } break; default: for (a = 0; a < g; a++) {
                            n = k.R[b + m] << c; if (0 != (n & d.R[e])) return !0; for (f = 0; f < h - 1; f++)if (n =
                                k.R[b + m + f + 1] << c, p = n >>> 16, 0 != (p & d.R[e + f]) || 0 != (n & d.R[e + f + 1])) return !0; if (m + f + 1 < k.lineWidth && (n = k.R[b + m + f + 1] << c, n >>>= 16, 0 != (n & d.R[e + f]))) return !0; b += k.lineWidth; e += d.lineWidth
                        }
                    } else for (a = 0; a < g; a++) { for (f = 0; f < h; f++)if (n = k.R[b + m + f], 0 != (d.R[e + f] & n)) return !0; b += k.lineWidth; e += d.lineWidth } return !1
                }, ix: function (a, b, c, d, e, f, g, k) {
                    a = Math.floor(a); b = Math.floor(b); d = Math.floor(d); e = Math.floor(e); var h = 0, m = this.height; 0 < c && (h = this.height - c, b += h, m = c); c = g; 0 < k && (e += g - k, c = k); if (a >= d + f || a + this.width <= d || b >= e + c || b +
                        m < e) return !1; a <= d ? (g = d - a, a = Math.min(this.width - g, f)) : (g = 0, a = Math.min(d + f - a, this.width)); b <= e ? (h = e - b + h, b = Math.min(b + m, e + c) - e) : b = Math.min(b + m, e + c) - b; e = Math.floor(g / 8); m = Math.floor((g + a + 15) / 16) - Math.floor(g / 16); for (f = 0; f < b; f++)switch (d = (f + h) * this.lineWidth, m) {
                            case 1: c = F.kv[g & 15] & F.Cw[(g + a - 1 & 15) + 1]; if (0 != (this.R[d + e] & c)) return !0; break; case 2: c = F.kv[g & 15]; if (0 != (this.R[d + e] & c)) return !0; c = F.Cw[(g + a - 1 & 15) + 1]; if (0 != (this.R[d + e + 1] & c)) return !0; break; default: c = F.kv[g & 15]; if (0 != (this.R[d + e] & c)) return !0; for (k =
                                1; k < m - 1; k++)if (0 != this.R[d + e + k]) return !0; c = F.Cw[(g + a - 1 & 15) + 1]; if (0 != (this.R[d + e + k] & c)) return !0
                        }return !1
                }, qD: function (a, b, c, d, e) { a = Math.floor(a); b = Math.floor(b); var f = a, g = b; if (0 == c) { if (1 != d || 1 != e) f = Math.floor(f / d), g = Math.floor(g / e) } else if (f = 3.141592653589 * c / 180, c = Math.cos(f), g = Math.sin(f), f = a * c - b * g, g = b * c + a * g, 1 != d || 1 != e) f /= d, g /= e; f += this.Ka; g += this.Ia; a = Math.floor(f); b = Math.floor(g); return 0 > a || a >= this.width || 0 > b || b >= this.height ? !1 : 0 != (this.R[b * this.lineWidth + Math.floor(a / 16)] & 32768 >>> (a & 15)) ? !0 : !1 }
            };
    v.hh = 1; v.$F = 2; v.Kt = 4; v.aG = 16; v.ih = 32; v.Oj = 64; v.Nj = 128; v.vO = 0; v.uO = 1; v.mL = 0; v.kf = 1; v.pL = 2; v.MD = 3; v.iL = 4; v.sL = 5; v.lL = 6; v.nL = 7; v.jL = 8; v.LD = 9; v.rL = 10; v.tL = 11; v.kL = 12; v.oL = 13; v.qL = 13; v.xx = 4095; v.Ss = 4096; v.yx = 8192; v.prototype = {
        iI: function (a, b, c) {
            this.a = a; this.Im = c.dz; this.rs = c.ez; this.W = 0; this.W |= v.Oj; 0 == (this.a.Te & I.Nd) && (this.W &= ~v.Oj); 0 != (this.a.ac.YB & w.MF) && (this.W |= v.Nj); 0 != (c.on & h.Sm) ? (this.W |= v.hh, this.a.Ea == r.fh && (this.a.X |= G.Xg, this.W &= ~v.Oj)) : this.W |= v.ih; this.Sb = this.a.ac.XB; this.Tb = this.a.ac.WB;
            this.a.b.Rc == S.EF && (this.W |= v.$F)
        }, bv: function (a) { this.cH(a); a && this.a.N.gm && (this.a.X |= G.hi) }, handle: function () {
            var a = this.a.c, b, c, d, e; 0 != (this.a.X & G.hi) ? (this.Ig || this.Cl(!1), this.uJ()) : 0 != (this.a.X & G.ii) ? this.vJ() : 0 == (this.W & v.Kt) ? (0 != this.ns && (this.os -= a.Io, 0 > this.os && (this.os = this.ns, 0 == (this.W & v.ih) ? (this.W |= v.ih, this.Uv()) : (this.W &= ~v.ih, this.yr()))), null != this.a.A && this.a.A.move(), 0 == this.a.b.Uh && (0 != (this.a.ua & w.Lj) ? 0 == (this.a.ua & w.ty) && 0 != (a.h.Ca & m.ED) && (b = this.a.u - this.a.ha, c = this.a.v -
                this.a.ia, d = b + this.a.K, e = c + this.a.J, (d < a.zm || b > a.xm || e < a.Dm || c > a.Bm) && a.eg(this.a.Vb)) : (b = this.a.u - this.a.ha, c = this.a.v - this.a.ia, d = b + this.a.K, e = c + this.a.J, d >= a.ym && b <= a.wm && e >= a.Cm && c <= a.Am || (d >= a.zm && b <= a.xm && e >= a.Dm && c <= a.Bm ? (this.W |= v.Kt, this.rs = this.a.Bi()) : 0 == (this.a.ua & w.ty) && a.eg(this.a.Vb))))) : (b = this.a.u - this.a.ha, c = this.a.v - this.a.ia, d = b + this.a.K, e = c + this.a.J, d >= a.ym && b <= a.wm && e >= a.Cm && c <= a.Am && (this.W &= ~v.Kt, this.bv(!1), this.a.te(this.rs)))
        }, cH: function () {
            0 != (this.a.ua & w.Kj) ? this.a.Tt(this.a.u -
                this.a.c.ca, this.a.v - this.a.c.da, this.a.b.Pa, this.Im, 0 == (this.W & v.hh)) : (this.a.X |= G.YE, this.a.vl(this.a.u - this.a.c.ca, this.a.v - this.a.c.da, this.Im, 0 != (this.a.ua & w.Ht), 0 == (this.W & v.hh), -1)); this.a.RC(this.Sb, this.Tb)
        }, Cl: function (a) { this.a.X &= ~(G.hi | G.ii); if (0 == a) { if (!this.a.N.gm) return !1; this.a.X |= G.hi } else { if (!this.a.N.mo) return !1; this.a.X |= G.ii } this.Ig = this.a.c.h.Ru().yK(this.a, a); return this.Ig ? !0 : (this.a.X &= ~(G.hi | G.ii), !1) }, uJ: function () {
            if (0 != (this.a.X & G.hi)) {
                if (this.Ig.Xq()) return this.a.X &=
                    ~G.hi, this.Ig = this.a.dl = null, !1; this.Ig.Kb(u.Nt); return !0
            } return !1
        }, vJ: function () { if (0 != (this.a.X & G.ii)) { if (this.Ig.Xq()) return this.dl = this.Ig = null, this.a.c.eg(this.a.Vb), !1; this.Ig.Kb(u.Yp); return !0 } return !1 }, jI: function () { return this.Cl(!0) ? (this.a.X |= G.Xg, !0) : !1 }, Fb: function () { this.rs = this.a.Bi() }, yr: function () { 0 == (this.W & v.hh) && (this.W |= v.hh, this.a.b.L = !0, this.a.lk()) }, Uv: function () {
            0 != (this.W & v.hh) && (this.a.c.w.Ua[this.a.Vd].Ca & (T.qp | T.et)) == T.et && (this.W &= ~v.hh, this.a.X &= ~G.Xg, this.a.b.L = !0,
                this.a.$k())
        }, ss: function (a) { this.W = a ? this.W | v.Oj : this.W & ~v.Oj }, dJ: function (a, b) { this.Sb = a; this.Tb = b }
    }; Dd.prototype = { load: function (a) { this.cm = a.o(); this.Xa = Array(this.cm); var b; for (b = 0; b < this.cm; b++)this.Xa[b] = a.Hb() } }; Ed.prototype = { load: function (a, b) { this.dm = a.o(); this.values = Array(this.dm); var c; for (c = 0; c < this.dm; c++)this.values[c] = a.s(); b && (this.ma = a.s()) } }; Ia.pG = 26; Ia.cG = 10; Ia.prototype = {
        Y: function (a, b) {
            this.Yk = 0; var c = Ia.pG; null != b.Hh && b.Hh.dm > c && (c = b.Hh.dm); this.Qa = Array(c); c = Ia.cG; null != b.Si &&
                b.Si.cm > c && (c = b.Si.cm); this.Ld = Array(c); for (c = 0; c < this.Qa.length; c++)this.Qa[c] = 0; for (c = 0; c < this.Ld.length; c++)this.Ld[c] = ""; if (null != b.Hh) for (this.Yk = b.Hh.ma, c = 0; c < b.Hh.dm; c++)this.Qa[c] = b.Hh.values[c]; if (null != b.Si) for (c = 0; c < b.Si.cm; c++)this.Ld[c] = b.Si.Xa[c]
        }, Fb: function () { var a; for (a = 0; a < this.Qa.length; a++)this.Qa[a] = 0; for (a = 0; a < this.Ld.length; a++)this.Ld[a] = null }, Ol: function (a) { return a < this.Qa.length ? this.Qa[a] : 0 }, rA: function (a) { return a < this.Ld.length ? this.Ld[a] : "" }, ZC: function (a, b) {
            a >= this.M.Qa.length &&
            this.Fi(a + 10); this.Qa[a] = b
        }, Fi: function (a) { if (a > this.Qa.length) { var b; for (b = this.Qa.length; b < a; b++)this.Qa[b] = 0 } }, aI: function (a) { if (a > this.Ld.length) { var b; for (b = this.Ld.length; b < a; b++)this.Ld[b] = "" } }
    }; Na.Yf = 32; Na.prototype = {
        $G: function () { this.fk = Array(4); this.xr = Array(4); var a; for (a = 0; 4 > a; a++)this.fk[a] = null, this.xr[a] = 0; a = new Fd; a.handle = 2; this.vG(a) }, vG: function (a) { var b = a.er(); null != b && (this.fk[a.handle] = a, this.xr[a.handle] = b.Lq()) }, er: function (a) {
            a -= Na.Yf; var b = null; a < this.fk.length && null != this.fk[a] &&
                (b = this.fk[a].er()); return b
        }, Lq: function (a) { a -= Na.Yf; return a < this.fk.length ? this.xr[a] : 0 }
    }; Fd.prototype = { er: function () { switch (this.handle) { case 2: return new Ja }return null } }; Ca.kO = 1; Ca.xy = 2; Ca.prototype = {
        Y: function (a) { this.U = a; this.oa = a.c }, Lq: function () { return 0 }, nz: function () { return !1 }, Wu: function () { return Ca.xy }, vu: function () { }, lz: function () { }, sJ: function () { }, WG: function () { }, pq: function () { return !1 }, action: function () { }, Aq: function () { return null }, oA: function () { return null }, UC: function () { }, ti: function () { },
        Kl: function () { }
    }; Gd.prototype = { evaluate: function (a) { var b = a.i.kk(this.Qb); if (null == b) a.Fa[a.ga] = 0; else { var c = (this.code >> 16) - O.gi; a.tu = this; a.Fa[a.ga] = b.Aq(c) } } }; Hd.prototype = { lb: function (a) { var b = a.i.md(this); if (null != b) { var c = (this.ka >>> 16) - O.gi; a.tu = this; b.action(c, this) } }, Qu: function (a, b) { return a.i.YH(this.C[b].Qb, this) }, Mq: function (a, b) { return a.lc(this.C[b]) }, ld: function (a, b) { return a.Oq(this.C[b]) } }; Id.prototype = {
        vb: function (a, b) {
            if (null == b) return this.ta(a); b.X |= G.Ux; var c = -(this.ka >> 16) -
                O.gi - 1; a.tu = this; return b.pq(c, this) ? (a.i.Jl(b), !0) : !1
        }, ta: function (a) { var b = a.i.Re(this.Eb), c = a.i.ye, d = -(this.ka >> 16) - O.gi - 1; for (a.tu = this; null != b;)b.X &= ~G.Ux, b.pq(d, this) ? 0 != (this.Pe & Q.Dj) && (c--, a.i.jd()) : 0 == (this.Pe & Q.Dj) && (c--, a.i.jd()), b = a.i.ze(); return 0 != c ? !0 : !1 }, Qu: function (a, b) { return this.C[b] }, Mq: function (a, b) { return a.lc(this.C[b]) }, ld: function (a, b) { return a.Oq(this.C[b]) }
    }; (function () { this.element = null; this.iz = !1 }).prototype = n.extend(new Ca, {
        Kl: function () { this.setPosition(this.U.u, this.U.v) },
        ti: function () { this.setPosition(this.U.u, this.U.v); this.So(this.U.K, this.U.J) }, yQ: function (a, b) { this.element = a; a.style.position = "absolute"; this.So(this.U.K, this.U.J); this.setPosition(this.U.u, this.U.v); this.Iu && this.Zk(this.Iu); this.bu = this.U.wa = b; this.oa.h.og ? (a.style.visibility = "hidden", this.bu = !1) : a.style.visibility = b ? "visible" : "hidden"; this.oa.h.pu.appendChild(a) }, tA: function () { return this.oa.h.canvas ? this.oa.h.canvas.offsetLeft : 0 }, uA: function () {
            return this.oa.h.canvas ? this.oa.h.canvas.offsetTop :
                0
        }, $C: function (a) { this.tz = a; this.U.$C(a); this.element && (this.element.style.left = this.tA() + this.oa.h.vj + (this.U.u - this.U.c.ca) * this.oa.h.hc + "px") }, cD: function (a) { this.uz = a; this.U.cD(a); this.element && (this.element.style.top = this.uA() + this.oa.h.xj + (this.U.v - this.U.c.da) * this.oa.h.ic + "px") }, setPosition: function (a, b) {
            this.tz = a; this.uz = b; this.U.setPosition(a, b); this.element && (this.element.style.left = this.tA() + this.oa.h.vj + (this.U.u - this.U.c.ca) * this.oa.h.hc + "px", this.element.style.top = this.uA() + this.oa.h.xj +
                (this.U.v - this.U.c.da) * this.oa.h.ic + "px")
        }, bx: function (a) { this.sz = a; this.U.bx(a); this.element && (this.element.style.width = this.U.K * this.oa.h.hc + "px") }, ax: function (a) { this.rz = a; this.U.ax(a); this.element && !this.iz && (this.element.style.height = this.U.J * this.oa.h.ic + "px") }, So: function (a, b) { this.sz = a; this.rz = b; this.U.So(a, b); this.element && (this.element.style.width = this.U.K * this.oa.h.hc + "px", this.iz || (this.element.style.height = this.U.J * this.oa.h.ic + "px")) }, Zk: function (a) {
            this.Iu = a; this.element && (this.element.style.font =
                a.gg())
        }, vu: function () { this.element && this.oa.h.pu.removeChild(this.element) }, oA: function () { return this.Iu }, UC: function (a) { this.Zk(a) }, Wu: function () { this.oa.h.og || this.U.wa == this.bu || (this.bu = this.U.wa, this.element && (this.element.style.visibility = this.U.wa ? "visible" : "hidden")); this.U.u == this.tz && this.U.v == this.uz || this.setPosition(this.U.u, this.U.v); this.U.K == this.sz && this.U.J == this.rz || this.So(this.U.K, this.U.J); return 0 }
    }); S.EF = 0; S.CF = 1; S.DF = 2; S.sN = 3; S.rN = 4; S.tN = 5; S.Ft = 9; S.BF = 11; S.qN = 12; S.AF = 13;
    S.Jj = 14; S.prototype = { setData: function (a, b, c, d, e) { this.Ov = a; this.$l = b; this.KB = c; this.JB = d; this.tr = e } }; Jd.prototype = {
        load: function (a) {
            var b = a.O; this.ho = a.s(); this.Cd = Array(this.ho); var c; for (c = 0; c < this.ho; c++) {
                a.seek(b + 4 + 16 * c); var d = a.s(), e = a.s(), f = a.s(), g = a.s(); a.seek(b + f); var f = a.o(), k = a.o(), h = a.sb(), m = a.sb(); a.pa(2); var n = a.s(); switch (k) {
                    case 0: this.Cd[c] = new Rd; break; case 1: this.Cd[c] = new Md; break; case 2: this.Cd[c] = new Qd; break; case 3: this.Cd[c] = new Ld; break; case 4: this.Cd[c] = new Kd; break; case 5: this.Cd[c] =
                        new Nd; break; case 9: this.Cd[c] = new Pd; break; case 14: this.Cd[c] = new Sd
                }this.Cd[c].setData(k, f, h, n, m); this.Cd[c].load(a, g - 12); 14 == k && (a.seek(b + d), d = a.Hb(), d = d.substring(0, d.length - 4), d = d.toLowerCase(), this.Cd[c].oK(d, e))
            }
        }
    }; Kd.prototype = n.extend(new S, { load: function (a) { this.Xn = a.o(); this.bB = a.o(); this.aB = a.o(); this.dB = a.o(); this.cB = a.o() } }); Ld.prototype = n.extend(new S, { load: function (a) { this.kB = a.o(); this.hB = a.o(); this.iB = a.o(); a.o(); this.jB = a.s() } }); Md.prototype = n.extend(new S, {
        load: function (a) {
            this.lB =
            a.T(); this.nB = a.T(); this.mB = a.T(); this.oB = a.T(); a.o()
        }
    }); Nd.prototype = n.extend(new S, { load: function (a) { this.Zl = a.o(); this.EB = a.o(); this.DB = a.o(); this.Nv = a.sb(); this.GB = a.sb(); this.IB = a.sb(); a.pa(1); this.Ya = Array(this.Zl); var b, c, d; for (b = 0; b < this.Zl; b++)d = a.O, this.Ya[b] = new Od, a.qa(), c = a.qa(), this.Ya[b].load(a), a.seek(d + c) } }); Od.prototype = {
        load: function (a) {
            this.gB = a.sb(); this.Cv = a.sb(); this.Dv = a.T(); this.Ev = a.T(); this.Bv = a.T(); this.Gv = a.T(); this.fB = a.o(); this.Fv = a.o(); a = a.Hb(); 0 < a.length && (this.je =
                a)
        }
    }; Pd.prototype = n.extend(new S, { load: function (a) { this.xB = a.o(); this.sB = a.o(); this.tB = a.o(); this.wB = a.o(); this.uB = a.o(); this.vB = a.o() } }); Qd.prototype = n.extend(new S, { load: function (a) { this.BB = a.o(); this.Lv = a.o(); this.Mv = a.o(); this.AB = a.o(); a.o(); this.yB = a.o(); this.zB = a.o() } }); Rd.prototype = n.extend(new S, { load: function () { } }); Sd.prototype = n.extend(new S, { load: function (a) { a.pa(14); this.data = a.O }, oK: function (a) { this.Oc = a } }); D.Bj = [256, 251, 236, 212, 181, 142, 97, 49, 0, -49, -97, -142, -181, -212, -236, -251, -256, -251,
        -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251]; D.Pj = [0, -49, -97, -142, -181, -212, -236, -251, -256, -251, -236, -212, -181, -142, -97, -49, 0, 49, 97, 142, 181, 212, 236, 251, 256, 251, 236, 212, 181, 142, 97, 49]; D.tG = [2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288, 320, 336, 352, 368, 384, 400, 416, 432, 448, 480, 512, 544, 560, 592, 624, 640, 672, 688, 720, 736, 768, 784, 816, 848, 864, 896, 928, 944, 976, 992, 1024, 1120, 1216, 1312, 1440, 1536, 1632, 1728, 1824, 1952, 2048, 2240, 2432, 2688, 2880, 3072, 3264,
            3456, 3712, 3904, 4096, 6544, 4914, 5216, 5732, 6144, 6553, 6962, 7366, 7780, 8192, 9836, 11672, 13316, 14960, 16604, 18248, 19892, 21504, 25600, 25600]; D.kF = [-1, 8, 24, -1, 16, 12, 20, 16, 0, 4, 28, 0, -1, 8, 24, -1]; D.gl = [2599, 0, 844, 31, 479, 30, 312, 29, 210, 28, 137, 27, 78, 26, 25, 25, 0, 24]; D.We = [0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, -4, 0, -8, 0, 0, 0, -2, -2, 2, 2, -4, -4, 4, 4, -8, -8, 8, 8, -4, 4, -8, 8, 0, 0, -2, 0, 2, 0, -4, 0, 4, 0, -8, 0, 8, 0, 0, 4, 0, 8, 0, 0, -2, 2, 2, -2, -4, 4, 4, -4, -8, 8, 8, -8, 4, 4, 8, 8, 0, 0, 0, 2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 4, 0, 8, 0, 0, 0, 2, 2, -2, -2, 4, 4, -4, -4, 8, 8, -8, -8, 4, -4, 8, -8, 0, 0,
                2, 0, -2, 0, 4, 0, -4, 0, 8, 0, -8, 0, 0, -4, 0, -8, 0, 0, 2, -2, -2, 2, 4, -4, -4, 4, 8, -8, -8, 8, -4, -4, -8, -8, 0, 0]; D.cn = 1; D.MH = function (a, b) { return a * D.Bj[b] / 256 }; D.NH = function (a, b) { return a * D.Pj[b] / 256 }; D.prototype = {
                    Oi: function (a, b) {
                        this.a.c.qe++; this.Qf = this.a.c.qe; this.a.A.P = !1; if (0 == a) return this.a.c.Jf(this.a), !1; var c, d, e; for (e = 0 != (this.a.c.w.Pb & E.Kc) ? Math.floor(a * this.a.c.xc * 32) : a << 5; 2048 < e;) {
                            c = 65536 * this.a.u + (this.a.jg & 65535); d = 65536 * this.a.v + (this.a.kg & 65535); c += 2048 * D.Bj[b]; d += 2048 * D.Pj[b]; this.a.jg = c & 65535; this.a.u =
                                Math.floor(c / 65536); this.a.kg = d & 65535; this.a.v = Math.floor(d / 65536); if (this.a.c.Jf(this.a)) return !0; if (this.a.A.P) break; e -= 2048
                        } if (!this.a.A.P && (c = 65536 * this.a.u + (this.a.jg & 65535), d = 65536 * this.a.v + (this.a.kg & 65535), c += D.Bj[b] * e, d += D.Pj[b] * e, this.a.jg = c & 65535, this.a.u = Math.floor(c / 65536), this.a.kg = d & 65535, this.a.v = Math.floor(d / 65536), this.a.c.Jf(this.a))) return !0; this.a.b.L = !0; this.a.A.P || (this.a.c.Wk = 0); return this.a.A.P
                    }, ao: function (a) { 0 == a.KB && this.stop() }, gk: function (a) {
                        return 100 >= a ? D.tG[a] : a <<
                            8
                    }, bo: function (a) {
                        if (a) this.eB(!1); else switch (this.a.c.i.ms & 4294901760) {
                            case -786432: a = this.a.u - this.a.ha; var b = this.a.v - this.a.ia, c = this.a.c.Gk(a, b, a + this.a.K, b + this.a.J); a = this.a.u; b = this.a.v; 0 != (c & h.Ug) && (a = this.a.ha); 0 != (c & h.Vg) && (a = this.a.c.Jd - this.a.K + this.a.ha); 0 != (c & h.Wg) && (b = this.a.ia); 0 != (c & h.Tg) && (b = this.a.c.Kd - this.a.J + this.a.ia); this.a.u = a; this.a.v = b; break; case -851968: case -917504: a = 18 * (this.a.c.Ub(this.a) >> 2); do {
                                if (this.Pg(this.a.u + D.We[a], this.a.v + D.We[a + 1], !1)) {
                                    this.a.u += D.We[a];
                                    this.a.v += D.We[a + 1]; return
                                } a += 2
                            } while (0 != D.We[a] || 0 != D.We[a + 1]); this.a.u = this.a.b.dj; this.a.v = this.a.b.ej; this.a.b.Pa = this.a.b.Vr; this.a.b.hb = this.a.b.Ur
                        }
                    }, eB: function (a) {
                        switch (this.a.c.i.ms & 4294901760) {
                            case -786432: a = this.a.u - this.a.ha; var b = this.a.v - this.a.ia, c = this.a.c.Gk(a, b, a + this.a.K, b + this.a.J); a = this.a.u; b = this.a.v; 0 != (c & h.Ug) && (a = this.a.ha); 0 != (c & h.Vg) && (a = this.a.c.Jd - this.a.K + this.a.ha); 0 != (c & h.Wg) && (b = this.a.ia); 0 != (c & h.Tg) && (b = this.a.c.Kd - this.a.J + this.a.ia); this.a.u = a; this.a.v = b; break;
                            case -851968: case -917504: if (b = new qa, this.cJ(this.a.u, this.a.v, this.a.b.dj, this.a.b.ej, a, b)) this.a.u = b.x, this.a.v = b.y; else { b = 18 * (this.a.c.Ub(this.a) >> 2); do { if (this.Pg(this.a.u + D.We[b], this.a.v + D.We[b + 1], a)) { this.a.u += D.We[b]; this.a.v += D.We[b + 1]; return } b += 2 } while (0 != D.We[b] || 0 != D.We[b + 1]); 0 == a && (this.a.u = this.a.b.dj, this.a.v = this.a.b.ej, this.a.b.Pa = this.a.b.Vr, this.a.b.hb = this.a.b.Ur) }
                        }
                    }, Pm: function (a, b, c, d, e) {
                        var f; f = -1; e && (f = this.a.Ue); e = this.a.ac; if (0 != (e.Fd & 15)) {
                            var g = a - this.a.ha, k = b - this.a.ia;
                            if (0 != (this.a.c.Gk(g, k, g + this.a.K, k + this.a.J) & e.Fd)) return !1
                        } if (0 != (e.Fd & 16) && this.a.c.pn(this.a, this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db, a, b, c, d)) return !1; if (-1 == e.hm) return !0; a = this.a.c.em(this.a, this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db, a, b, e.Wi); if (null == a) return !0; b = this.a.c.i.qk; for (c = 0; c < a.size(); c++)if (d = a.get(c).Ue, d != f) for (g = e.hm; 0 <= b[g]; g++)if (b[g] == d) return !1; return !0
                    }, Pg: function (a, b, c) {
                        var d; d = -1; c && (d = this.a.Ue); c = this.a.ac; if (0 != (c.Fd & 15)) {
                            var e = a - this.a.ha, f = b - this.a.ia;
                            if (0 != (this.a.c.Gk(e, f, e + this.a.K, f + this.a.J) & c.Fd)) return !1
                        } if (0 != (c.Fd & 16) && this.a.c.pn(this.a, this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db, a, b, 0, E.ve)) return !1; if (-1 == c.hm) return !0; a = this.a.c.em(this.a, this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db, a, b, c.Wi); if (null == a) return !0; b = this.a.c.i.qk; for (e = 0; e < a.size(); e++)if (f = a.get(e).Ue, f != d) { var g; for (g = c.hm; 0 <= b[g]; g++)if (b[g] == f) return !1 } return !0
                    }, Xl: function (a, b, c, d, e, f, g) {
                        var k = n.zd((a + c) / 2), h = n.zd((b + d) / 2), m, p; do if (this.Pm(k + this.a.c.ca,
                            h + this.a.c.da, e, f, !1)) { if (c = k, d = h, m = k, p = h, k = n.zd((c + a) / 2), h = n.zd((d + b) / 2), k == m && h == p) return c == a && d == b || !this.Pm(a + this.a.c.ca, b + this.a.c.da, e, f, !1) || (k = a, h = b), g.x = k, g.y = h, !0 } else if (a = k, b = h, m = k, p = h, k = n.zd((c + a) / 2), h = n.zd((d + b) / 2), k == m && h == p) { if ((c != a || d != b) && this.Pm(c + this.a.c.ca, d + this.a.c.da, e, f, !1)) return g.x = c, g.y = d, !0; g.x = k; g.y = h; return !1 } while (1)
                    }, cJ: function (a, b, c, d, e, f) {
                        var g = n.zd((a + c) / 2), k = n.zd((b + d) / 2), h, m; do if (this.Pg(g, k, e)) {
                            if (c = g, d = k, h = g, m = k, g = n.zd((c + a) / 2), k = n.zd((d + b) / 2), g == h &&
                                k == m) return c == a && d == b || !this.Pg(a, b, e) || (g = a, k = b), f.x = g, f.y = k, !0
                        } else if (a = g, b = k, h = g, m = k, g = n.zd((c + a) / 2), k = n.zd((d + b) / 2), g == h && k == m) { if ((c != a || d != b) && this.Pg(c, d, e)) return f.x = c, f.y = d, !0; f.x = g; f.y = k; return !1 } while (1)
                    }, ws: function (a) { this.a.b.Rc == S.DF && (250 < a && (a = 250), 0 > a && (a = 0), this.ws(a)); this.a.b.Rc == S.Jj && this.Dd.ws(a) }, us: function (a) { this.a.b.Rc == S.Ft && (250 < a && (a = 250), 0 > a && (a = 0), this.us(a)); this.a.b.Rc == S.Jj && this.Dd.us(a) }, Ub: function () { return this.a.b.Rc == S.Jj && this.Dd.Ub ? this.Dd.Ub() : this.a.b.Va },
                    Fb: function () { }, start: function () { }
                }; ua.TJ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 30, 31, 0, 1, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 24, 25, 26, 27, 27, 28, 28, 28, 28, 29, 29, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 16, 17, 18, 19, 19, 20, 20, 20, 20, 21, 21, 22, 23, 24, 25, 28, 27, 26, 25, 0, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 20, 21, 22, 22, 23, 24, 24, 24, 24, 25, 26, 27, 28, 29, 30, 8, 7, 6, 5, 4, 8, 9, 10, 11, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16, 17, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 0, 1,
                    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 16, 15, 14, 13, 12, 11, 10, 9, 8, 12, 13, 14, 15, 15, 16, 16, 16, 16, 17, 17, 18, 19, 20, 21, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 16, 17, 18, 19, 20, 21, 22, 23, 24, 23, 22, 21, 20, 19, 18, 17, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 0, 1, 2, 0, 0, 1, 1, 2, 3, 4, 5, 8, 7, 6, 5, 4, 3, 2, 1, 0, 31, 30, 29, 28, 27, 26, 25, 24, 28, 29, 30, 31, 31, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                    31, 0, 31, 30, 29, 28, 27, 26, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 31, 30, 29, 28, 27, 25, 25, 24, 25, 26, 27, 28, 29, 30, 31, 0, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 11, 12, 13, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 16, 15, 14, 13, 12, 11, 10, 9, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]; ua.FF = [4294967292, 4294967294, 4294967295]; ua.YF = [-4, 4, -2, 2, -1, 1]; ua.ZF = [-4, 4, -4, 4, -4, 4]; ua.prototype =
                        n.extend(new D, {
                            Y: function (a, b) { this.a = a; this.a.jg = 0; this.a.kg = 0; this.a.b.Z = b.Xn; this.a.b.eb = b.Xn; this.a.b.Th = b.Xn; this.kl = b.Xn << 8; var c = b.cB; 0 != c && (c = this.gk(c), this.a.b.Th = 0); this.se = c; this.by = b.bB; this.zp = b.aB; this.Ap = ua.FF[this.zp]; this.li = !1; this.rt = -1; this.jl = this.Bp = (100 - b.dB) / 8; this.ao(b); this.a.b.L = !0 }, move: function () {
                                this.a.A.mj = !1; this.a.c.Wk = 1; this.a.b.pe = A.Cc; null != this.a.$ && this.a.$.Le(); if (0 != this.se) {
                                    var a = this.kl; if (0 < a) {
                                        var b = this.se; 0 != (this.a.c.w.Pb & E.Kc) && (b *= this.a.c.xc); a -=
                                            b; 0 > a && (a = 0); this.kl = a; this.a.b.Z = a >> 8
                                    }
                                } this.Oi(this.a.b.Z, this.a.c.Ub(this.a))
                            }, stop: function () { 0 == this.Jb && (this.Jb = this.a.b.Z | 32768, this.kl = this.a.b.Z = 0, this.a.A.P = !0) }, start: function () { var a = this.Jb; 0 != a && (a &= 32767, this.a.b.Z = a, this.kl = a << 8, this.Jb = 0, this.a.A.P = !0) }, cg: function () {
                                if (0 == this.Jb && this.a.c.Ib != this.rt) {
                                    this.rt = this.a.c.Ib; this.Qf == this.a.c.qe && this.eB(this.li); var a = this.a.u, b = this.a.v, c = 0, a = a - 8, b = b - 8; 0 == this.Pg(a, b, this.li) && (c |= 1); a += 16; 0 == this.Pg(a, b, this.li) && (c |= 2); b += 16; 0 ==
                                        this.Pg(a, b, this.li) && (c |= 4); 0 == this.Pg(a - 16, b, this.li) && (c |= 8); a = ua.TJ[32 * c + this.a.c.Ub(this.a)]; a &= this.Ap; if (!this.co(a)) { var c = b = ua.ZF[2 * this.zp + 1], d = !1; do { a -= b; a &= 31; if (this.co(a)) { d = !0; break } a += 2 * b; a &= 31; if (this.co(a)) { d = !0; break } a -= b; a &= 31; b += c } while (16 >= b); if (0 == d) { this.li = !0; this.a.b.Va = this.a.c.random(32) & this.Ap; this.a.A.mj = !0; this.a.A.P = !0; return } } this.li = !1; this.a.b.Va = a; a = this.a.c.random(100); if (a < this.by && (a >>= 2, 25 > a && (a = a - 12 & 31 & this.Ap, this.co(a)))) {
                                            this.a.b.Va = a; this.a.A.mj = !0; this.a.A.P =
                                                !0; return
                                        } a = this.a.c.Ub(this.a) & 7; 12 != this.jl && (0 == a ? (this.jl--, 0 > this.jl && (a = this.a.c.Ub(this.a) + ua.YF[this.a.c.random(2) + 2 * this.zp], a &= 31, this.co(a) && (this.a.b.Va = a, this.jl = this.Bp))) : this.jl = this.Bp); this.a.A.mj = !0; this.a.A.P = !0
                                }
                            }, co: function (a) { var b = 2048 * D.Bj[a] + (65536 * this.a.u + (this.a.jg & 65535)); a = 2048 * D.Pj[a] + (65536 * this.a.v + (this.a.kg & 65535)); b = Math.floor(b / 65536); a = Math.floor(a / 65536); return this.Pg(b, a, !1) }, df: function () { }, ff: function (a) {
                                0 > a && (a = 0); 250 < a && (a = 250); this.a.b.Z = a; this.kl = a <<
                                    8; this.Jb = 0; this.a.A.P = !0
                            }, Jg: function (a) { this.ff(a) }, reverse: function () { 0 == this.Jb && (this.a.A.P = !0, this.a.b.Va += 16, this.a.b.Va &= 31) }, Yb: function (a) { this.a.u != a && (this.a.u = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }, jc: function (a) { this.a.v != a && (this.a.v = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }
                        }); Td.prototype = n.extend(new D, {
                            Y: function (a) {
                                this.a = a; this.l = a.c; this.l.Tx(); null != this.a.F && this.a.F.ss(!1); null != this.a.F && (this.a.F.W &= ~v.ih, this.a.F.yr()); this.Cp = !0; this.a.jg = 0; this.a.kg = 0; null !=
                                    this.a.$ && this.a.$.CA(A.Cc); this.a.b.Z = 0; this.a.b.Oa = !0; this.a.b.L = !0
                            }, bv: function (a) { this.a.b.eb = this.a.b.Z; this.a.b.Th = this.a.b.Z; this.ll = a }, Fb: function () { this.IH(this.a) }, move: function () { if (this.Cp) { if (null != this.ll.$ && this.ll.$.Rh == A.vx) return; this.kD() } null != this.a.$ && this.a.$.Le(); this.Oi(this.a.b.Z, this.a.c.Ub(this.a)); if (-64 > this.a.u || this.a.u > this.a.c.Jd + 64 || -64 > this.a.v || this.a.v > this.a.c.Kd + 64) this.a.Jn = !1, this.a.c.eg(this.a.Vb); this.a.b.Oa && (this.a.b.Oa = !1, this.a.c.Jf(this.a)) }, kD: function () {
                                null !=
                                this.a.F && this.a.F.ss(!0); null != this.a.F && (this.a.F.W |= v.ih, this.a.F.Uv()); if (null != this.l.Xh) { var a = this.l.rp(this.ll); if (null != a) { var b = this.l.Xh, c = new ba; this.st = c; c.eF(this.a, ba.zF); c.$I = b.identifier; this.$m = b.oQ(a.ZI, this.a.b.Z / 250 * 50, c); c.YI = this.$m; null == this.$m && (this.st = null) } } this.Cp = !1; this.ll = null
                            }, IH: function () { null != this.$m && (pBase = this.a.c.Xh, pBase.pQ(this.$m), this.$m = null); null != this.st && (this.st = null) }, Yb: function (a) {
                                this.a.u != a && (this.a.u = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa =
                                    !0)
                            }, jc: function (a) { this.a.v != a && (this.a.v = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }, df: function () { }, reverse: function () { }, stop: function () { }, start: function () { }, cg: function () { }, ff: function () { }, Jg: function () { }
                        }); Ud.prototype = n.extend(new D, {
                            Y: function (a) { this.a = a }, move: function () { 0 == (this.a.X & G.ii) && null != this.a.$ && (this.a.$.Le(), this.a.$.Bg != A.fl + 1 && this.a.c.eg(this.a.Vb)) }, Yb: function (a) { this.a.u != a && (this.a.u = a, this.a.A.P = !0, this.a.b.L = !0) }, jc: function (a) {
                                this.a.v != a && (this.a.v = a, this.a.A.P =
                                    !0, this.a.b.L = !0)
                            }, df: function () { }, reverse: function () { }, stop: function () { }, start: function () { }, cg: function () { }, ff: function () { }, Jg: function () { }
                        }); Vd.prototype = n.extend(new D, {
                            Y: function (a, b) { this.a = a; this.a.jg = 0; this.$f = this.a.kg = 0; this.Yg = this.a.b.Z = 0; this.tt = -1; this.a.b.Uh = b.$l; this.Jo = b.hB; this.Gg = this.gk(this.Jo); this.Ko = b.iB; this.se = this.gk(this.Ko); this.a.b.eb = b.kB; this.a.b.Th = 0; this.ut = b.jB; this.nj = b.tr; this.a.b.L = !0 }, move: function () {
                                var a, b, c, d; this.a.c.Wk = 1; a = this.a.c.Ub(this.a); this.a.b.Fw =
                                    a; if (0 == this.Yg) {
                                        this.a.A.mj = !1; b = 0; c = this.a.c.Sc[this.a.b.Uh - 1] & 15; 0 != c && (d = D.kF[c], -1 != d && 0 != (1 << d & this.ut) && (b = 1, a = d)); c = this.$f; 0 == b ? 0 != c && (b = this.se, 0 != (this.a.c.w.Pb & E.Kc) && (b *= this.a.c.xc), c -= b, 0 >= c && (c = 0)) : c >> 8 < this.a.b.eb && (b = this.Gg, 0 != (this.a.c.w.Pb & E.Kc) && (b *= this.a.c.xc), c += b, c >> 8 > this.a.b.eb && (c = this.a.b.eb << 8)); this.$f = c; this.a.b.Z = c >> 8; this.a.b.Va = a; this.a.b.pe = A.Cc; null != this.a.$ && this.a.$.Le(); if (0 == this.Oi(this.a.b.Z, this.a.c.Ub(this.a))) return; if (0 == this.a.b.Z) {
                                            c = this.$f; if (0 ==
                                                c || this.a.b.Fw == this.a.c.Ub(this.a)) return; this.a.b.Z = c >> 8; this.a.b.Va = this.a.b.Fw; if (0 == this.Oi(this.a.b.Z, this.a.c.Ub(this.a))) return
                                        }
                                    } for (; 0 != this.Yg && 0 != this.a.c.Wk;)if (c = this.$f, c -= this.se, 0 < c) { if (this.$f = c, c >>= 8, this.a.b.Z = c, d = this.a.c.Ub(this.a), 0 != this.Yg && (d += 16, d &= 31), 0 == this.Oi(c, d)) break } else { this.$f = 0; this.Yg = this.a.b.Z = 0; break }
                            }, cg: function () {
                                this.Qf == this.a.c.qe && this.bo(0 != (this.nj & D.cn)); this.a.c.Ib != this.tt && (this.tt = this.a.c.Ib, this.Yg++, 12 <= this.Yg ? this.stop() : (this.a.A.mj = !0,
                                    this.a.A.P = !0))
                            }, reverse: function () { }, df: function () { }, stop: function () { this.$f = this.Yg = this.a.b.Z = 0; this.a.A.P = !0; this.Qf == this.a.c.qe && (this.bo(0 != (this.nj & D.cn)), this.Yg = 0) }, start: function () { this.a.A.P = !0; this.Jb = 0 }, Jg: function (a) { 0 > a && (a = 0); 250 < a && (a = 250); this.a.b.eb = a; this.a.b.Z > a && (this.a.b.Z = a, this.$f = a << 8); this.a.A.P = !0 }, ff: function (a) { 0 > a && (a = 0); 250 < a && (a = 250); a > this.a.b.eb && (a = this.a.b.eb); this.a.b.Z = a; this.$f = a << 8; this.a.A.P = !0 }, Yb: function (a) {
                                this.a.u != a && (this.a.u = a, this.a.A.P = !0, this.a.b.L =
                                    !0, this.a.b.Oa = !0)
                            }, jc: function (a) { this.a.v != a && (this.a.v = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }, xQ: function (a) { this.ut = a }
                        }); Wd.prototype = n.extend(new D, {
                            Y: function (a, b) { this.a = a; this.a.b.Uh = b.$l; this.vt = b.lB + this.a.u; this.wt = b.mB + this.a.v; this.xt = b.nB + this.a.u; this.yt = b.oB + this.a.v; this.Ep = this.Dp = this.a.b.Z = 0; this.a.b.Th = 0; this.a.b.eb = 100; this.nj = b.tr; this.ao(b); this.a.b.L = !0 }, move: function () {
                                var a = this.a.u, b = this.a.v, c, d, e, f; if (0 == this.Jb && 0 != this.a.c.as[this.a.b.Uh - 1] && (a = this.a.c.ij,
                                    a < this.vt && (a = this.vt), a > this.xt && (a = this.xt), b = this.a.c.jj, b < this.wt && (b = this.wt), b > this.yt && (b = this.yt), c = a - this.a.u, d = b - this.a.v, e = 0, 0 > c && (c = -c, e |= 1), 0 > d && (d = -d, e |= 2), f = c + d << 2, 250 < f && (f = 250), this.a.b.Z = f, 0 != f)) { 0 == d && (d = 1); c = (c << 8) / d; for (d = 0; !(c >= D.gl[d]); d += 2); c = D.gl[d + 1]; 0 != (e & 2) && (c = -c + 32 & 31); 0 != (e & 1) && (c = (-(c - 8 & 31) & 31) + 8 & 31); this.a.b.Va = c } 0 != this.a.b.Z && (this.Ep = 0, this.Dp = this.a.b.Z); this.Ep++; 10 < this.Ep && (this.Dp = 0); this.a.b.Z = this.Dp; null != this.a.$ && this.a.$.Le(); this.a.u = a; this.a.v = b; this.a.b.L =
                                        !0; this.a.c.qe++; this.Qf = this.a.c.qe; this.a.c.Jf(this.a)
                            }, stop: function () { this.Qf == this.a.c.qe && this.bo(0 != (this.nj & D.cn)); this.a.b.Z = 0 }, start: function () { this.Jb = 0; this.a.A.P = !0 }, cg: function () { this.stop() }, reverse: function () { }, df: function () { }, Yb: function (a) { this.a.u != a && (this.a.u = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }, jc: function (a) { this.a.v != a && (this.a.v = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }
                        }); Xd.prototype = n.extend(new D, {
                            Y: function (a, b) {
                                this.a = a; this.Jp = this.a.u; this.Kp = this.a.v;
                                this.cd = !1; this.bh = 0; this.a.Rl = 0; this.Ha = b; this.a.b.Th = b.EB; this.a.b.eb = b.DB; this.ah = 0; this.ql = null; this.wk(0); this.ao(b); this.a.b.Z = this.Dc; this.a.b.L = !0; 0 == this.Ha.Ya.length && this.stop()
                            }, move: function () {
                                this.a.Rl = 0; this.a.b.pe = A.Cc; null != this.a.$ && this.a.$.Le(); if (0 == this.Dc) { var a = this.bh; if (0 == a) { this.a.b.Z = 0; this.a.c.Jf(this.a); return } a -= this.a.c.Io; if (0 < a) { this.bh = a; this.a.b.Z = 0; this.a.c.Jf(this.a); return } this.bh = 0; this.Dc = this.Jb & 32767; this.Jb = 0; this.a.b.Z = this.Dc } a = 0 != (this.a.c.w.Pb & E.Kc) ?
                                    256 * this.a.c.xc : 256; this.a.c.Zh = a; for (var b; ;) { b = !1; this.a.c.Ho = a; a *= this.Dc; a <<= 5; 524288 >= a ? this.a.c.Vw = a : (a = 16384, a /= this.Dc, this.a.c.Ho = a, this.a.c.Vw = 524288); for (; ;) { this.Hp = !1; if (1 == this.FB(this.a.c.Vw) && 0 == this.Hp) { b = !0; break } if (this.a.c.Zh == this.a.c.Ho) { b = !0; break } if (this.a.c.Zh > this.a.c.Ho) { this.a.c.Zh -= this.a.c.Ho; a = this.a.c.Zh; break } a = this.a.c.Zh * MT_Speed; a <<= 5; this.FB(a); b = !0; break } if (b) break }
                            }, FB: function (a) {
                                a += this.ah; var b = a >>> 16; if (b < this.Ip) return this.ah = a, a = b * this.bn / 16384 + this.eh,
                                    this.a.u = b * this.an / 16384 + this.dh, this.a.v = a, this.a.b.L = !0, this.a.c.Jf(this.a), this.a.A.P; b -= this.Ip; a = b << 16 | a & 65535; 0 != this.Dc && (a /= this.Dc); this.a.c.Zh += a >> 5 & 65535; this.a.u = this.Hj; this.a.v = this.Ij; this.a.b.L = !0; this.a.c.Jf(this.a); if (this.a.A.P) return !0; this.a.Rl = this.a.c.Ib; this.a.Ql = null; b = this.ae; this.ah = 0; if (0 == this.cd) {
                                        b++; if (b < this.Ha.Zl) {
                                            this.a.Ql = this.Ha.Ya[b].je; if (null != this.ql && null != this.Ha.Ya[b].je && n.rb(this.ql, this.Ha.Ya[b].je)) return this.ae = b, this.Ve(), this.sr(); this.wk(b); this.Ve();
                                            return this.a.A.P
                                        } this.a.Tq = this.a.c.Ib; this.ae = b; if (this.cd) return this.Ve(), this.a.A.P; if (0 != this.Ha.IB) return this.cd = !0, b--, this.a.Ql = this.Ha.Ya[b].je, this.Yl(b), this.Ve(), this.a.A.P; this.HB(); if (0 == this.Ha.Nv) return this.sr(), this.Ve(), this.a.A.P; b = 0
                                    } else {
                                        if (null != this.ql && null != this.Ha.Ya[b].je && n.rb(this.ql, this.Ha.Ya[b].je)) return this.Ve(), this.sr(); this.a.Ql = this.Ha.Ya[b].je; this.bh = this.Ha.Ya[b].Fv; b--; if (0 <= b) return this.Yl(b), this.Ve(), this.a.A.P; this.HB(); if (0 == this.cd) return this.Ve(),
                                            this.a.A.P; if (0 == this.Ha.Nv) return this.sr(), this.Ve(), this.a.A.P; b = 0; this.cd = !1
                                } this.wk(b); this.Ve(); return this.a.A.P
                            }, wk: function (a) { a >= this.Ha.Ya.length ? this.stop() : (this.cd = !1, this.ae = a, this.bh = this.Ha.Ya[a].Fv, this.an = this.Ha.Ya[a].Bv, this.bn = this.Ha.Ya[a].Gv, this.dh = this.a.u, this.eh = this.a.v, this.Hj = this.a.u + this.Ha.Ya[a].Dv, this.Ij = this.a.v + this.Ha.Ya[a].Ev, this.a.b.Va = this.Ha.Ya[a].Cv, this.CB()) }, Yl: function (a) {
                                a >= this.Ha.Ya.length ? this.stop() : (this.cd = !0, this.ae = a, this.an = -this.Ha.Ya[a].Bv,
                                    this.bn = -this.Ha.Ya[a].Gv, this.dh = this.a.u, this.eh = this.a.v, this.Hj = this.a.u - this.Ha.Ya[a].Dv, this.Ij = this.a.v - this.Ha.Ya[a].Ev, this.a.b.Va = this.Ha.Ya[a].Cv + 16 & 31, this.CB())
                            }, CB: function () { this.Ip = this.Ha.Ya[this.ae].fB; var a = this.Ha.Ya[this.ae].gB, b = this.bh; 0 != b && (this.bh = 20 * b, this.Jb = a |= 32768); 0 != this.Jb && (a = 0); if (a != this.Dc || 0 != a) this.Dc = a, this.Hp = this.a.A.P = !0; this.a.b.Z = this.Dc }, Ve: function () {
                                this.a.Rl == this.a.c.Ib && (this.a.c.i.yc = 0, this.a.c.i.nd(this.a, -1310720 | this.a.Ea & 65535), this.a.c.i.nd(this.a,
                                    -2293760 | this.a.Ea & 65535)); this.a.Tq == this.a.c.Ib && (this.a.c.i.yc = 0, this.a.c.i.nd(this.a, -1376256 | this.a.Ea & 65535))
                            }, sr: function () { this.Jb = this.Dc = 0; this.a.A.P = !0; this.Hp = !1; return !0 }, HB: function () { 0 != this.Ha.GB && (this.a.u = this.Jp, this.a.v = this.Kp, this.a.b.L = !0) }, gQ: function (a) {
                                var b; for (b = 0; b < this.Ha.Zl; b++)if (null != this.Ha.Ya[b].je && n.rb(a, this.Ha.Ya[b].je)) {
                                    0 == this.cd ? (this.wk(b), this.a.Rl = this.a.c.Ib, this.a.Ql = this.Ha.Ya[b].je, this.a.Tq = 0, this.Ve()) : 0 < b && (b--, this.Yl(b), this.a.Rl = this.a.c.Ib,
                                        this.a.Ql = this.Ha.Ya[b].je, this.a.Tq = 0, this.Ve()); this.a.A.P = !0; break
                                }
                            }, hQ: function (a) {
                                var b; for (b = 0; b < this.Ha.Zl; b++)if (null != this.Ha.Ya[b].je && n.rb(a, this.Ha.Ya[b].je)) {
                                    if (b == this.ae && 0 == this.ah) break; this.ql = a; if (0 == this.cd) if (b > this.ae) { if (0 != this.Dc) break; 0 != (this.Jb & 32768) ? this.start() : this.wk(this.ae) } else { if (0 != this.Dc) { this.reverse(); break } 0 != (this.Jb & 32768) ? (this.start(), this.reverse()) : this.Yl(MT_MoveNumber - 1) } else if (b <= this.ae) {
                                        if (0 != this.Dc) break; 0 != (this.Jb & 32768) ? this.start() : this.Yl(this.ae -
                                            1)
                                    } else { if (0 != this.Dc) { this.reverse(); break } 0 != (this.Jb & 32768) ? (this.start(), this.reverse()) : this.wk(this.ae) } break
                                }
                            }, stop: function () { 0 == this.Jb && (this.Jb = this.Dc | 32768); this.Dc = 0; this.a.A.P = !0 }, start: function () { 0 != (this.Jb & 32768) && (this.Dc = this.Jb & 32767, this.Jb = this.bh = 0, this.a.A.P = !0) }, reverse: function () {
                                if (0 == this.Jb) {
                                    this.a.A.P = !0; var a = this.ae; if (0 == this.ah) (this.cd = !this.cd) ? 0 == a ? this.cd = !this.cd : (a--, this.Yl(a)) : this.wk(a); else {
                                        this.cd = !this.cd; this.an = -this.an; this.bn = -this.bn; var a = this.dh,
                                            b = this.Hj; this.dh = b; this.Hj = a; a = this.eh; this.eh = b = this.Ij; this.Ij = a; this.a.b.Va += 16; this.a.b.Va &= 31; a = this.ah >>> 16; a = this.Ip - a; this.ah = a << 16 | this.ah & 65535
                                    }
                                }
                            }, Yb: function (a) { var b = this.a.u; this.a.u = a; b -= this.dh; a -= b; this.Hj = b = this.Hj - this.dh + a; b = this.dh; this.dh = a; this.Jp -= b - a; this.a.A.P = !0; this.a.b.L = !0; this.a.b.Oa = !0 }, jc: function (a) { var b = this.a.v; this.a.v = a; b -= this.eh; a -= b; this.Ij = b = this.Ij - this.eh + a; b = this.eh; this.eh = a; this.Kp -= b - a; this.a.A.P = !0; this.a.b.L = !0; this.a.b.Oa = !0 }, ff: function (a) {
                                0 > a &&
                                (a = 0); 250 < a && (a = 250); this.Dc = a; this.a.b.Z = a; this.a.A.P = !0
                            }, Jg: function (a) { this.ff(a) }, df: function () { }
                        }); M.bN = 0; M.xF = 1; M.$M = 2; M.aN = 3; M.Zg = 0; M.ml = 1; M.Gp = 2; M.Fp = 3; M.cy = 4; M.dy = 5; M.prototype = n.extend(new D, {
                            Y: function (a, b) {
                                this.a = a; this.l = this.a.c; this.a.jg = 0; this.Md = this.a.kg = 0; this.a.b.Z = 0; this.a.b.Uh = b.$l; this.Jo = b.sB; this.Gg = this.gk(this.Jo); this.Ko = b.tB; this.se = this.gk(this.Ko); this.a.b.eb = b.xB; this.a.b.Th = 0; this.zt = b.uB; this.ey = b.vB; var c = b.wB; 3 < c && (c = M.xF); this.fy = c; this.nl = this.vd = 0; this.ol = null;
                                this.ao(b); this.a.b.L = !0; this.kb = M.Zg
                            }, move: function () {
                                var a, b; this.a.c.Wk = 1; a = this.a.c.Sc[this.a.b.Uh - 1]; this.gu(); b = this.Md; var c; 0 == this.nl && (0 >= b && (0 != (a & 4) ? (c = this.Gg, 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc), b -= c, b / 256 < -this.a.b.eb && (b = 256 * -this.a.b.eb)) : 0 > b && (c = this.se, 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc), b += c, 0 < b && (b = 0)), 0 != (a & 8) && (b = -b)), 0 <= b && (0 != (a & 8) ? (c = this.Gg, 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc), b += c, b / 256 > this.a.b.eb && (b = 256 * this.a.b.eb)) : 0 < b && (c = this.se, 0 != (this.a.c.w.Pb &
                                    E.Kc) && (c *= this.a.c.xc), b -= c, 0 > b && (b = 0)), 0 != (a & 4) && (b = -b)), this.Md = b); var d = this.vd; for (c = !1; ;) {
                                        switch (this.kb) {
                                            case 2: case 3: c = this.zt << 5; 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc); d += c; 64E3 < d && (d = 64E3); break; case 0: if (0 != (a & 1)) { if (this.l.dg(this.a.Vd, this.a.u + this.nf, this.a.v + this.pf - 4) == h.mf) break; this.kb = M.ml; c = !0; continue } if (0 != (a & 2) && this.l.dg(this.a.Vd, this.a.u + this.nf, this.a.v + this.pf + 4) != h.mf) { this.kb = M.ml; c = !0; continue } break; case 1: if (0 == c && (this.nl = 0, this.l.dg(this.a.Vd, this.a.u + this.nf,
                                                this.a.v + this.pf) == h.mf && this.l.dg(this.a.Vd, this.a.u + this.nf, this.a.v + this.pf - 4) == h.mf)) break; 0 >= d && (0 != (a & 1) ? (c = this.Gg, 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc), d -= c, c = d / 256, c < -this.a.b.eb && (d = 256 * -this.a.b.eb)) : (c = this.se, 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc), d += c, 0 < d && (d = 0)), 0 != (a & 2) && (d = -d)); 0 <= d && (0 != (a & 2) ? (c = this.Gg, 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc), d += c, c = d / 256, c > this.a.b.eb && (d = 256 * this.a.b.eb)) : (c = this.se, 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc), d -= c, 0 > d && (d = 0)), 0 != (a & 1) &&
                                                    (d = -d))
                                        }break
                                    } this.vd = d; var e = 0; 0 > b && (e = 16); c = b; var f = d; if (0 != f) { var g = 0; 0 > c && (g |= 1, c = -c); 0 > f && (g |= 2, f = -f); c = (c << 8) / f; for (e = 0; !(c >= D.gl[e]); e += 2); e = D.gl[e + 1]; 0 != (g & 2) && (e = -e + 32 & 31); 0 != (g & 1) && (e = (-(e - 8 & 31) & 31) + 8 & 31) } c = b; g = D.Bj[e]; f = D.Pj[e]; 0 > g && (g = -g); 0 > f && (f = -f); g < f && (g = f, c = d); 0 > c && (c = -c); c /= g; 250 < c && (c = 250); this.a.b.Z = c; switch (this.kb) { case 1: 0 > d ? this.a.b.Va = 8 : 0 < d && (this.a.b.Va = 24); break; case 3: this.a.b.Va = e; break; default: 0 > b ? this.a.b.Va = 16 : 0 < b && (this.a.b.Va = 0) }switch (this.kb) {
                                        case 4: this.a.b.pe =
                                            A.Qs; break; case 5: this.a.b.pe = A.gp; break; case 3: this.a.b.pe = A.tx; break; case 2: this.a.b.pe = A.ux; break; case 1: this.a.b.pe = A.sx; break; default: this.a.b.pe = A.Cc
                                    }null != this.a.$ && this.a.$.Le(); this.gu(); this.Oi(this.a.b.Z, e); this.kb != M.Zg && this.kb != M.ml || 0 != this.Fj || (b = !1, d = this.fy, 0 != d && (d--, 0 == d ? (5 == (a & 5) && (b = !0), 9 == (a & 9) && (b = !0)) : 0 != (a & d << 4) && (b = !0)), b && (this.vd = -this.ey << 8, this.kb = M.Gp)); switch (this.kb) {
                                        case 2: 0 <= this.vd && (this.kb = M.Fp); break; case 3: this.l.dg(this.a.Vd, this.a.u + this.nf, this.a.v + this.pf) !=
                                            h.mf && (this.vd = 0, this.kb = M.ml, this.a.b.Va = 8); break; case 0: if (0 != (a & 3) && 0 == (a & 12) && this.l.dg(this.a.Vd, this.a.u + this.nf, this.a.v + this.pf) != h.mf) { this.kb = M.ml; this.Md = 0; break } 0 != (a & 2) && null != this.a.$ && this.a.$.mh(A.Qs) && (this.Md = 0, this.kb = M.cy); if (this.l.dg(this.a.Vd, this.a.u + this.nf, this.a.v + this.pf) != h.mf) break; 0 == this.Pm(this.a.u, this.a.v + 10, this.mi, E.ve, !0) ? (a = this.a.u - this.a.c.ca, b = this.a.v - this.a.c.da, d = new qa, this.Xl(a, b + this.mi - 1, a, b, this.mi, E.ve, d), this.a.u = d.x + this.a.c.ca, this.a.v = d.y + this.a.c.da,
                                                this.Fj = !1) : this.kb = M.Fp; break; case 1: if (this.l.dg(this.a.Vd, this.a.u + this.nf, this.a.v + this.pf) == h.mf) { if (0 > this.vd) for (f = 0; 32 > f; f++)if (this.l.dg(this.a.Vd, this.a.u + this.nf, this.a.v + this.pf + f) != h.mf) { this.a.v += f; break } this.vd = 0 } 0 != (a & 12) && (this.kb = M.Zg, this.vd = 0); break; case 4: 0 == (a & 2) && (null != hoPtr.$ && this.a.$.mh(A.gp) ? (this.kb = M.dy, this.a.b.pe = A.gp, this.a.$.Le(), this.a.$.Hk = 1) : this.kb = M.Zg); break; case 5: null != this.a.$ && 0 == this.a.$.ne && (this.kb = M.Zg)
                                    }if (this.kb == M.Zg || this.kb == M.cy || this.kb == M.dy) {
                                        do {
                                            a =
                                            null; null != this.a.ac && (a = this.a.ac.Wi); if (null == this.a.c.em(this.a, this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db, this.a.u, this.a.v, a) && (a = this.a.c.em(this.a, this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db, this.a.u, this.a.v + 1, a), null != a && 1 == a.size())) { a = a.get(0); if ((null == this.ol || this.ol != a) && this.a.Ue != a.Ue) { this.ol = a; this.At = a.u; this.Bt = a.v; break } b = a.u - this.At; d = a.v - this.Bt; this.At = a.u; this.Bt = a.v; this.a.u += b; this.a.v += d; this.a.c.Jf(this.a); this.a.b.L = !0; break } this.ol = null
                                        } while (0)
                                    } else this.ol =
                                        null
                            }, Kv: function () { this.vd = this.Md = this.a.b.Z = 0 }, cg: function () { this.stop() }, stop: function () {
                                if (this.Qf != this.a.c.qe) this.Kv(); else {
                                    this.a.A.P = !0; var a = this.a.u - this.a.c.ca, b = this.a.v - this.a.c.da, c; switch (this.a.c.i.ms & 4294901760) {
                                        case -786432: a = this.a.u - this.a.ha; b = this.a.v - this.a.ia; c = this.a.c.Gk(a, b, a + this.a.K, b + this.a.J); a = this.a.u; b = this.a.v; 0 != (c & h.Ug) && (a = this.a.ha, this.Md = 0, this.Fj = !0); 0 != (c & h.Vg) && (a = this.a.c.Jd - this.a.K + this.a.ha, this.Md = 0, this.Fj = !0); 0 != (c & h.Wg) && (b = this.a.ia, this.vd = 0,
                                            this.Fj = !1); 0 != (c & h.Tg) && (b = this.a.c.Kd - this.a.J + this.a.ia, this.vd = 0, this.Fj = !1); this.a.u = a; this.a.v = b; this.kb = this.kb == M.Gp ? M.Fp : M.Zg; this.nl = 0; break; case -851968: case -917504: if (this.Fj = !1, c = new qa, this.kb == M.Fp) this.Xl(a, b, this.a.b.dj - this.a.c.ca, this.a.b.ej - this.a.c.da, this.mi, E.ve, c), this.a.u = c.x + this.a.c.ca, this.a.v = c.y + this.a.c.da, this.kb = M.Zg, this.a.b.L = !0, this.Pm(this.a.u, this.a.v + 1, 0, E.ve, !0) ? this.Md = this.a.b.Z = 0 : (this.nl = 0, this.a.b.Z = Math.abs(this.Md / 256), this.vd = 0); else {
                                                if (this.kb == M.Zg) {
                                                    if (this.Xl(a,
                                                        b, a, b - this.mi, 0, E.ve, c)) { this.a.u = c.x + this.a.c.ca; this.a.v = c.y + this.a.c.da; this.a.b.L = !0; break } if (this.Xl(a, b, this.a.b.dj - this.a.c.ca, this.a.b.ej - this.a.c.da, 0, E.ve, c)) { this.a.u = c.x + this.a.c.ca; this.a.v = c.y + this.a.c.da; this.a.b.L = !0; this.Kv(); break }
                                                } if (this.kb == M.Gp) { if (this.Xl(a, b, a, b - this.mi, 0, E.ve, c)) { this.a.u = c.x + this.a.c.ca; this.a.v = c.y + this.a.c.da; this.a.b.L = !0; break } this.nl = 1; this.Md = 0 } this.kb == M.ml && this.Xl(a, b, this.a.b.dj - this.a.c.ca, this.a.b.ej - this.a.c.da, 0, E.ve, c) ? (this.a.u = c.x + this.a.c.ca,
                                                    this.a.v = c.y + this.a.c.da, this.a.b.L = !0, this.Kv()) : (this.a.b.Pa = this.a.b.Vr, this.a.b.hb = this.a.b.Ur, this.Pm(this.a.u, this.a.v, 0, E.ve, !0) || (this.a.u = this.a.b.dj, this.a.v = this.a.b.ej, this.a.b.L = !0))
                                            }
                                    }
                                }
                            }, Yb: function (a) { this.a.u != a && (this.a.u = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }, jc: function (a) { this.a.v != a && (this.a.v = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }, ff: function (a) {
                                0 > a && (a = 0); 250 < a && (a = 250); a > this.a.b.eb && (a = this.a.b.eb); this.a.b.Z = a; this.Md = this.a.b.Z * D.Bj[this.a.c.Ub(this.a)]; this.vd =
                                    this.a.b.Z * D.Pj[this.a.c.Ub(this.a)]; this.a.A.P = !0
                            }, Jg: function (a) { 0 > a && (a = 0); 250 < a && (a = 250); this.a.b.eb = a; a <<= 8; this.Md > a && (this.Md = a); this.a.A.P = !0 }, us: function (a) { this.zt = a }, df: function (a) { this.a.b.Va = a; this.Md = this.a.b.Z * D.Bj[a]; this.vd = this.a.b.Z * D.Pj[a] }, gu: function () { var a; 0 < this.a.b.Pa ? a = this.a.c.h.ea.hk(this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db) : (a = new W, a.width = this.a.K, a.height = this.a.J, a.Ka = this.a.ha, a.Ia = this.a.ia); this.nf = 0; this.pf = a.height - a.Ia; this.mi = 2 * a.height + a.height >>> 3 },
                            eJ: function () { this.gu(); this.l.dg(this.a.Vd, this.a.u + this.nf, this.a.v + this.pf) == h.mf && (0 == this.a.c.pn(this.a, this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db, this.a.u, this.a.v, 0, E.ip) && (this.kb == M.Gp && 0 > this.vd || 0 == this.a.c.pn(this.a, this.a.b.Pa, this.a.b.hb, this.a.b.Cb, this.a.b.Db, this.a.u, this.a.v, this.mi, E.ve)) || this.a.c.i.nd(this.a, -851968 | this.a.Ea & 65535)) }
                        }); Ua.bG = [4294967288, 4294967292, 4294967294, 4294967295]; Ua.prototype = n.extend(new D, {
                            Y: function (a, b) {
                                this.a = a; this.wd = 0; this.$g = this.a.b.Z = 0;
                                this.gy = -1; this.a.b.Uh = b.$l; this.Jo = b.Lv; this.Gg = this.gk(b.Lv); this.Ko = b.Mv; this.se = this.gk(b.Mv); this.a.b.eb = b.BB; this.a.b.Th = 0; this.hy = b.zB; this.a.A.oj = 0; this.nj = b.tr; this.Ct = 0; this.Dt = Ua.bG[b.yB]; this.Et = b.AB; this.pl = 0; this.Gj = this.a.c.Ub(this.a); this.a.jg = 0; this.a.kg = 0; this.ao(b); this.a.b.L = !0
                            }, move: function () {
                                var a, b, c; this.a.c.Wk = 1; if (0 == this.$g) {
                                    this.a.A.mj = !1; a = this.a.c.Sc[this.a.b.Uh - 1] & 15; b = 0; 0 != (a & 8) && (b = -1); 0 != (a & 4) && (b = 1); if (0 != b) {
                                        c = this.Et; 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc); for (this.pl +=
                                            c; 100 < this.pl;)this.pl -= 100, this.Gj += b, this.Gj &= 31, this.a.b.Va = this.Gj & this.Dt; this.a.b.L = !0
                                    } c = 0; 0 != this.a.A.oj ? (0 != (a & 1) && (c = 1), 0 != (a & 2) && (c = 2)) : (0 != (a & 1) && (c = 2), 0 != (a & 2) && (c = 1)); for (b = this.wd; ;) {
                                        if (0 != (c & 1)) { if (0 == this.wd) { if (0 == this.hy) break; if (0 != (this.Ct & 3)) break; this.a.A.oj ^= 1; c = this.Gg; 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc); b += c; c = b >> 8; c > this.a.b.eb && (this.wd = b = this.a.b.eb << 8); this.wd = b; break } c = this.se; 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc); b -= c; 0 > b && (b = 0); this.wd = b } else 0 != (c & 2) && (c =
                                            this.Gg, 0 != (this.a.c.w.Pb & E.Kc) && (c *= this.a.c.xc), b += c, c = b >> 8, c > this.a.b.eb && (this.wd = b = this.a.b.eb << 8), this.wd = b); break
                                    } this.Ct = a; this.a.b.Z = this.wd >> 8; this.a.b.pe = A.Cc; null != this.a.$ && this.a.$.Le(); a = this.a.c.Ub(this.a); 0 != this.a.A.oj && (a = a + 16 & 31); if (0 == this.Oi(this.a.b.Z, a)) return
                                } do { if (0 == this.$g) break; if (0 == this.a.c.Wk) break; b = this.wd; b -= this.se; if (0 >= b) { this.$g = this.wd = 0; break } this.wd = b; b >>= 8; a = this.a.c.Ub(this.a); 0 != this.$g && (a += 16, a &= 31); if (0 == this.Oi(b, a)) break } while (1)
                            }, reverse: function () { },
                            stop: function () { this.wd = this.$g = 0; this.a.A.oj = 0; this.Qf == this.a.c.qe && (this.bo(0 != (this.nj & D.cn)), this.a.A.P = !0) }, start: function () { this.Jb = 0; this.a.A.P = !0 }, cg: function () { this.Qf == this.a.c.qe && this.bo(0 != (this.nj & D.cn)); this.a.c.Ib != this.gy && (this.$g = this.a.A.oj, this.a.A.oj = 0, this.$g++, 16 <= this.$g ? this.stop() : (this.a.A.P = !0, this.a.A.mj = !0)) }, ff: function (a) { 0 > a && (a = 0); 250 < a && (a = 250); a > this.a.b.eb && (a = this.a.b.eb); this.wd = a << 8; this.a.A.P = !0 }, Jg: function (a) {
                                0 > a && (a = 0); 250 < a && (a = 250); this.a.b.eb = a; a <<=
                                    8; this.wd > a && (this.wd = a); this.a.A.P = !0
                            }, ws: function (a) { this.Et = a }, Yb: function (a) { this.a.u != a && (this.a.u = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }, jc: function (a) { this.a.v != a && (this.a.v = a, this.a.A.P = !0, this.a.b.L = !0, this.a.b.Oa = !0) }, df: function (a) { this.Gj = a; this.a.b.Va = a & this.Dt }
                        }); Va.prototype = n.extend(new D, {
                            Y: function (a) { this.a = a; this.a.b.Z = 0; this.a.b.Oa = !0; this.a.b.L = !0 }, move: function () { null != this.a.$ && this.a.$.Le(); this.a.b.Oa && (this.a.b.Oa = !1, this.a.c.Jf(this.a)) }, Yb: function (a) {
                                this.a.u !=
                                a && (this.a.u = a, this.a.A.P = !0, this.a.b.L = !0); this.a.b.Oa = !0
                            }, jc: function (a) { this.a.v != a && (this.a.v = a, this.a.A.P = !0, this.a.b.L = !0); this.a.b.Oa = !0 }, df: function () { }, reverse: function () { }, stop: function () { }, start: function () { }, cg: function () { }, ff: function () { }, Jg: function () { }
                        }); (function (a) { this.Dd = a }).prototype = n.extend(new D, {
                            Y: function (a, b) { this.a = a; a.c.h.file.Uc(b.data); this.a.b.Oa = !0; this.a.b.L = !0 }, Fb: function () { this.Dd.Fb() }, move: function () { this.Dd.move() && (this.a.b.L = !0) }, stop: function () {
                                this.Dd.stop(this.Qf ==
                                    this.a.c.qe)
                            }, start: function () { this.Dd.start() }, cg: function () { this.Dd.cg(this.Qf == this.a.c.qe) }, ff: function (a) { this.Dd.ff(a) }, Jg: function (a) { this.Dd.Jg(a) }, reverse: function () { this.Dd.reverse() }, Yb: function (a) { this.Dd.Yb(a); this.a.b.L = !0; this.a.b.Oa = !0 }, jc: function (a) { this.Dd.jc(a); this.a.b.L = !0; this.a.b.Oa = !0 }, df: function (a) { this.Dd.df(a); this.a.b.L = !0; this.a.b.Oa = !0 }, Uy: function () { return 0 }
                        }); Da.tE = 1; Da.uE = 2; Da.hM = 4; Da.prototype = {
                            Y: function (a, b, c, d, e) {
                                null != this.ra && this.ra.Fb(); null != d && (b.b.Va =
                                    d.cz); this.Zw = b.ac.fw; b.b.Rc = -1; if (null != c.ug && a < c.ug.ho) { c = c.ug.Cd[a]; this.Yw = a; -1 == e && (e = c.Ov); b.b.Rc = e; switch (e) { case 0: this.ra = new Va; break; case 1: this.ra = new Wd; break; case 2: this.ra = new Ua; break; case 3: this.ra = new Vd; break; case 4: this.ra = new ua; break; case 5: this.ra = new Xd; break; case 9: this.ra = new M; break; case 14: this.ra = null, null == this.ra && (this.ra = new Va) }b.b.Va = this.wu(b, c.JB, b.b.Va); this.ra.Y(b, c) } -1 == b.b.Rc && (b.b.Rc = 0, this.ra = new Va, this.ra.Y(b, null), b.b.Va = 0)
                            }, nI: function (a, b, c) {
                                null != this.ra &&
                                this.ra.Fb(); a.b.Rc = b; switch (b) { case 11: this.ra = new Ud; break; case 13: this.ra = new Td }this.ra.a = a; 0 == c && this.ra.Y(a, null)
                            }, Fb: function () { this.ra.Fb() }, move: function () { this.ra.move() }, wu: function (a, b, c) { if (0 > c || 32 <= c) { var d = 0, e = b, f; for (c = 0; 32 > c; c++)f = e, e >>= 1, 0 != (f & 1) && d++; if (0 == d) c = 0; else for (d = a.c.random(d), e = b, c = 0; !(f = e, e >>= 1, 0 != (f & 1) && (d--, 0 > d)); c++); } return c }
                        }; Ja.PM = 2; Ja.QM = 4; Ja.aF = 8; Ja.prototype = n.extend(new Ca, {
                            Lq: function () { return 0 }, nz: function (a) {
                                this.BA = a.o(); this.sc = n.cC(a.Hb()); 0 == this.sc.length &&
                                    (this.sc = "Ini.ini"); a = 0; this.BA & Ja.aF && (a |= la.Vx); this.Fc = new la(this.oa.h, a); this.Be = "Group"; this.Sl = "Item"; this.ee = 0; return !1
                            }, Wu: function () { 0 < this.ee && (this.ee--, 0 == this.ee && this.Fc.Oo()); return 0 }, vu: function () { this.Fc.Oo() }, action: function (a, b) {
                                switch (a) {
                                    case 0: this.fG(b); break; case 1: this.gG(b); break; case 2: this.kG(b); break; case 3: this.dG(b); break; case 4: this.tF(b); break; case 5: this.hG(b); break; case 6: this.eG(b); break; case 7: this.mG(b); break; case 8: this.lG(b); break; case 9: this.jG(b); break; case 10: this.iG(b);
                                        break; case 11: this.sE(b); break; case 12: this.rE(b); break; case 13: this.qE(b)
                                }
                            }, fG: function (a) { this.Be = a.ld(this.oa, 0) }, gG: function (a) { this.Sl = a.ld(this.oa, 0) }, kG: function (a) { a = a.Mq(this.oa, 0).toString(); this.Fc.el(this.Be, this.Sl, a, this.sc); this.ee = 10 }, dG: function (a) { a = a.Qu(this.oa, 0); this.Fc.el(this.Be, "pos." + a.ac.Zi, a.u.toString() + "," + a.v.toString(), this.sc); this.ee = 10 }, tF: function (a) {
                                a = a.Qu(this.oa, 0); var b = this.Fc.jk(this.Be, "pos." + a.ac.Zi, "X", this.sc); if ("X" != b) {
                                    var c = b.indexOf(","), d = b.substring(c +
                                        1); a.u = parseInt(b.substring(0, c), 10); isNaN(a.u) && (a.u = 0); a.v = parseInt(d, 10); isNaN(a.v) && (a.v = 0); a.b.L = !0; a.b.Oa = !0
                                }
                            }, hG: function (a) { a = a.ld(this.oa, 0); this.Fc.el(this.Be, this.Sl, a, this.sc); this.ee = 10 }, eG: function (a) { this.sc = n.cC(a.ld(this.oa, 0)) }, mG: function (a) { var b = a.ld(this.oa, 0); a = a.Mq(this.oa, 1).toString(); this.Fc.el(this.Be, b, a, this.sc); this.ee = 10 }, lG: function (a) { var b = a.ld(this.oa, 0), c = a.ld(this.oa, 1); a = a.Mq(this.oa, 2).toString(); this.Fc.el(b, c, a, this.sc); this.ee = 10 }, jG: function (a) {
                                var b = a.ld(this.oa,
                                    0); a = a.ld(this.oa, 1); this.Fc.el(this.Be, b, a, this.sc); this.ee = 10
                            }, iG: function (a) { var b = a.ld(this.oa, 0), c = a.ld(this.oa, 1); a = a.ld(this.oa, 2); this.Fc.el(b, c, a, this.sc); this.ee = 10 }, sE: function (a) { this.Fc.yz(this.Be, a.ld(this.oa, 0), this.sc); this.ee = 10 }, rE: function (a) { this.Fc.yz(a.ld(this.oa, 0), a.ld(this.oa, 1), this.sc); this.ee = 10 }, qE: function (a) { this.Fc.mH(a.ld(this.oa, 0), this.sc); this.ee = 10 }, Aq: function (a) {
                                switch (a) {
                                    case 0: return this.UE(); case 1: return this.RE(); case 2: return this.WE(); case 3: return this.VE();
                                    case 4: return this.TE(); case 5: return this.SE()
                                }return null
                            }, UE: function () { var a = this.Fc.jk(this.Be, this.Sl, "", this.sc), a = parseInt(a, 10); isNaN(a) && (a = 0); return a }, RE: function () { return this.Fc.jk(this.Be, this.Sl, "", this.sc) }, WE: function () { var a = this.U.Nl(), a = this.Fc.jk(this.Be, a, "", this.sc), a = parseInt(a, 10); isNaN(a) && (a = 0); return a }, VE: function () { var a = this.U.Nl(), b = this.U.Nl(), a = this.Fc.jk(a, b, "", this.sc), a = parseInt(a, 10); isNaN(a) && (a = 0); return a }, TE: function () {
                                var a = this.U.Nl(); return this.Fc.jk(this.Be,
                                    a, "", this.sc)
                            }, SE: function () { var a = this.U.Nl(), b = this.U.Nl(); return this.Fc.jk(a, b, "", this.sc) }
                        }); Bd(P, pa)
};
