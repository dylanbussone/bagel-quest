import React, { useEffect } from 'react';
import Link from 'next/link';

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

    return (
        <main>
            <div>
                Please fill out the following form by 6/12/20 to make sure you're signed up!
                <br />
                <br />
                When you're finished, head over to the{' '}
                <Link href="/payment">
                    <a>Payment</a>
                </Link>{' '}
                page as well.
            </div>
            <style jsx>{`
                main {
                    max-width: 1200px;
                    margin: 0 auto;
                }
            `}</style>
        </main>
    );
}
