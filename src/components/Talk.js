import React, { useEffect } from 'react';

function TawkToChat() {
  useEffect(() => {
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/64db58bbcc26a871b02f5b06/1h7sd586r';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);

    // Clean up the script when the component unmounts
    return () => {
      s1.remove();
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      {/* Your component's content */}
    </div>
  );
}

export default TawkToChat;
