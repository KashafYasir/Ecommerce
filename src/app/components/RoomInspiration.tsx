import React from 'react';
import '../styles/RoomInspiration.css';

const RoomInspiration: React.FC = () => {
  return (
    <div className="room-inspiration">
      <div className="text-section">
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
        <button className="explore-button">Explore More</button>
      </div>
      <div className="image-section">
        <div className="image-card">
          <img src="https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VaWiKR4~fUTro-ts52df3tIcVZazkjnfCSIU03lsur5IlnB95PqJE-r5YXPbMatFVkT1MoAVs6X9uf0tAtnkaJuF47r~g~7SFhojUsxOopoQ6~GBVRePm-FxkMuX6ZEJEsGkyhzBYJu5nFQ6ksTa0PQUfe9gPtmM8mCjoPD3x-sI5evjEA2TTYAfHf8Jtr-g4mmk2trvWWItt7C0KdsCDDjz9VL8jaTzUNk8nVGRsI5sOAnCh6wOTzJSmzetGkRaRhK~YcMv8uzFRgRloSWAzkhcRjTY0Tbypb3wUkPY3304z7S9pG7NNIpDjRFcJMlIj0HcxGCe1so6ulPaOU1fyw__" alt="Room 1" width="404" height="582" />
          <div className="image-overlay">
            <span>01 — Bed Room</span>
            <h2>Inner Peace</h2>
            <button className="arrow-button">→</button>
          </div>
        </div>
        <div className="image-card">
          <img src="https://s3-alpha-sig.figma.com/img/acc4/8179/d1b18b523420e79dda1e92951ecde49b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZoV~wcubwdUYYhfDqUwRC7E3khmM1Z9zfLuU0rVxrqc~0IDU3sbaTiSYQpN54lTmMk2uOA52o5NkHOr3uQmKbXrxM-pshzTwt99VT-izbY18EI63~xhkBJ1okDgra1uxRZrxdm8ycuezloK8~DUnzEpQgrI7u0SUNJZqdPDG2KDgi~6XYCtB4gpnC9Svvx8Av7RaZNJdcQsvNgB2Zvshjuros4sYimKyohIuNXd6Uj8Jz~HOhDPuOHMTKtYyMzjasBVSc3oJWJ4bRQgoawC0v~55jRVJlnKAqWpVnV5n02m5hbGRG1LZ~EA~gRwMnxZLV5BsVenBixf9qsp4-BfDMw__" alt="Room 2" width="372" height="486" />
        </div>
        <div className="image-card">
          <img src="https://s3-alpha-sig.figma.com/img/7065/5e8b/25a06a33769af9bf5fe8f8ed81ce75d8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwBGly5JxcCSZLRfRGp6D0Xn4qa2XvkVbyD~PcfEBB8h0jQ8o0RP28LU4UiMV8eckT7C2AK5nlpSDewPRheymhgb6JlSOX5xktk0L8YwLeiw85PwWLnia2nzilkDrsYZrnF1vjUfDbBSWplcCzk266Ay0uiZqqyXC--IxCZ1h2-wdeNvIBA-VGVQiE0oXSpvHNtyiD7CeLH4Bb-gOUNaoYXY17urgFLoZUqrAbnuGd5py~lQk0JZ4LIoL06MOCRWlH2k8iRevCjAmaZh6233Fj8ObVQCk2DrzsnHSQcKnPck-3AdnlYYaFf9kuPdMXF-Bof-L0VA-iJkZwSo7IJd6A__" alt="Room 3" width="372" height="486" />
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;

