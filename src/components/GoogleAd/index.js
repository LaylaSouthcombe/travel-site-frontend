import React, { useEffect } from 'react'

const GoogleAd = ({dataAdSlot}) => {

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        }
        catch (e) {
            console.log(e)
        }

    },[])

    return (
        <div className="googleAd">
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-5563364373682926"
                data-ad-slot={dataAdSlot}
                data-ad-format="auto"
                data-full-width-responsive="true">
            </ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({})
            </script>                    
        </div>
    );
  }

export default GoogleAd