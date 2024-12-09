import React from 'react';
import '../styles/BreadCrumbs.css';

const Breadcrumb: React.FC = () => {
  return (
    <div className="breadcrumb">
      <span className="breadcrumb-item">Home</span>
      <img src="https://s3-alpha-sig.figma.com/img/2ac4/13c1/917ac944454e358f73d0af67e1f1b74e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dcTyUejgWlc1kVgybzCwPaKrpJWyUdv8KrY2sIJZuRi8KSUQ2utix0vUVY0VUq2tMhe8d2CJyxynSmWNrX9PTZvIsSFZEj~jBu6cNShZSvo1cdgYs~9Fp3VK0-n2oes~Gg5ITGW8Kea1cCFk0GptSVaIv9DFfuAhZfZwyRzN5P5ft4g4ShTmcfa-qCmiIPBjSw4CtoZE0EoAPl1cmO1h091kyeOmgVu3jE4G8q4MGRPKJXMrKz1btfWSw-VJZCYZBnCC-uEN4tN74lYbzBKy2m78C3uN82qIEybq3GV0p7yXTbr2PYTfYEgdRYge0PlDrSQxH96v3BCQ2zDhoGS-Xg__np" alt="arrow" className="breadcrumb-icon" />
      <span className="breadcrumb-item">Shop</span>
      <img src="" alt="arrow" className="breadcrumb-icon" />
      <span className="breadcrumb-current">Asgaard sofa</span>
    </div>
  );
};

export default Breadcrumb;

