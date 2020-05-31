import React, { useEffect } from 'react';

export default function DeliveryInfo() {
    useEffect(() => {
        if (document.querySelector('.smcx-widget')) {
            document.querySelector('.smcx-widget').style.display = 'inherit';
        }
        (function (t, e, s, n) {
            var o, a, c;
            (t.SMCX = t.SMCX || []),
                e.getElementById(n) ||
                    ((o = e.getElementsByTagName(s)),
                    (a = o[o.length - 1]),
                    (c = e.createElement(s)),
                    (c.type = 'text/javascript'),
                    (c.async = !0),
                    (c.id = n),
                    (c.src =
                        'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd5dajd3XRxSrv_2Bmat8QFk2i2ePP_2BZ28OW_2BNMqm4b_2FjO_2B.js'),
                    a.parentNode.insertBefore(c, a));
        })(window, document, 'script', 'smcx-sdk');

        return function cleanup() {
            if (document.querySelector('.smcx-widget')) {
                document.querySelector('.smcx-widget').style.display = 'none';
            }
        };
    });

    return null;
}
