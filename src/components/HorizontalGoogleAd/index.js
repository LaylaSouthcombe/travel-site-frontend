import React, {useEffect} from 'react';

const HorizontalGoogleAd = (props) => {
    // const { dataAdSlot } = props;  

    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    },[]);

    return (
        <>
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-5563364373682926"
                data-ad-slot="1136657549"
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
        </>
    );
  }

export default HorizontalGoogleAd;
