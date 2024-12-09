import React from 'react';
import '../styles/GalleryComponent.css';

const GalleryComponent: React.FC = () => {
  return (
    <div className="gallery-container">
      <div className="title">
        <h2>Share your setup with</h2>
        <h1>#FuniroFurniture</h1>
      </div>
      <div className="gallery-grid">
        <img src="https://s3-alpha-sig.figma.com/img/9954/4b25/1da1dc5c1c4cd5091a6369784c3b3366?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RWBxadyPLD2ceYYiH9tw45da3BClrNT1Myao40yJ6g1HKV7GiTMJQLlwiJTAwlWOAaOB5LMWHWRsp3o3R8uQi6oLf95QzNGlVfTM5j--38OoiA0aWkY5UmGSFrA5785210ehhQuMamtZeEWncg5cz~4BbPIGZGIoH-hmfMo5s8Wl~kPLc0qd5CfjzPNb5gSeNHYStHBQSkxz5B9i7pmZx3HgFlhYzXD35v3NnnAi1OB9gzc22tg~DfOBvnxwha4Sv8m8YaSSQT4nGn6PfqZVNUuQ18cTFy9MGm9RROS0sp3aJQtD7qEr~L0YWHDFkdQ3U8FZVJVLrx-A7Ob0vtqHWQ__" alt="Image 1" width="300" height="400" />
        <img src="https://s3-alpha-sig.figma.com/img/e8ee/1dc9/413c23f2d7371be94a52ea9020db45cc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LmOPsf9DBZ4v0G2AA9BBzwyVXg3MBjcmD4EyNBQKK6DPFtzTyvIGyhr2~yQZdLJsQTlWjnmnrBE8VMcU5bKKiaybfwnnAQqwm-iQqer2T8RHwWrzUZefssBx9HQBUrnVhgEKJrGsZz2d9avJE-r~o7v-d~nN6nOQHyJhqojKwdka2srnNITSSaxMTL8FRtpdghdtOiwyDy28CwDa293G7X9HmOk63zdnpd9Y3kQFdAwpDnSYrcMcCyDdbzIq43f7BvFGxV2KMI9JwoJn0sP6YVIAIAeqq08j6Ro3f5xBfariMccGqhvlzXo5LwHhBCLLo7J8i~-~upTsn68IsI4wpw__" alt="Image 2" width="300" height="400" />
        <img src="https://s3-alpha-sig.figma.com/img/b167/0f90/40560e3b59b4fd3c2538107c6fa70736?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eAh4RmGhqhhJVzprb4nHaKobbbV2nWFta-dEy5~KIje~V-rD6S77N741exYKI4fVNYHFHHVIhmhrIqDKMd-4zzqU2-o5Dx--cHkIDMfxxTtyNpoVOg~LWyCgbHrB1GDbnFvyUhDUUTEsbdm9gDKj21gvpdHg-il4Pwf3I8YZ~ONMp6Gqi9mOSGwZFxlUCXLpVZXimpws5ueigksGu106-S6rExCJ7egRgjt~k-ZtRfKL-3gVg5zvxVCXW~g5Sj5GqILshrnwBu0rJMuWIhrqOFJLB5XqSvfRWeTT~K6ZrH-d393SJvbACJm3nTQImBab2Nsu85PkUf2SXj2rRGMxVg__" alt="Image 3" width="300" height="400" />
        <img src="https://s3-alpha-sig.figma.com/img/9532/f812/360b02673b349021a24f23d4184b4e15?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W6QG1tL-5i8CsQuwYAaI~VNglvKYtsTb7VrhB0vSsfU8cXP~p3GCGk8oH4RibKby1CDBUaGaag~cId0c9WAsFH~VnRIaqHgEaQnk1L3xdjJbqr0RENgpB2EMEXJeqhAufLzHbBtWgz8EYSjsNkC6cHC6Zen1qdPxM6bLoA~nd08G3Z98F3f3xI7k2GYPABY-KHHTQYFa1qmTgFpf~pqCZG9RwQp0l9wVzwOg2v4ztAXken19SVHI5f8TUa9~UEvO5tlFRPjWBmyW2-mHr31jHydZN8-j68cwfTywTz-x78Vri1dQEYRi6iWMHG2s4hBthqeGPtSLtAhr-EMtT0Fcgg__" alt="Image 4" width="300" height="400" />
        <img src="https://s3-alpha-sig.figma.com/img/7843/84ee/37569bf147f74d2ca44831a4a6ef3ee5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8WMTfSRXU1BLljzXqhyIis-iaAq-wdp2xCYIp9k3Mq5Q5Op93P9o-agIlYz20CqDTt5eCSUwYG~wSMmqZ4oj0onZN2wjP2q~2xLMvxYwf0dJaxUM2SxAcMTtvNqT8mAIDUhJuHrZvZ9W-AT8-67dcBU7wS6DrP82vYwaw2-k4ULgTARJmetSxmd6-Mc6Qe6iXM8k5kU7WSqmuDEvMSFjKdszfPsKhPYP-yHPIIAlVxQtT8vRI~WZdLI4bj-77sWgwNnmO88T6Rt7kY~U2syMtoLGGh3fjpF5IkrBe3XTbSA47f2xXw3UogouBYVJYJH2P68C4Bl-0KEuttWNHaxSA__" alt="Image 5" width="300" height="400" />
        <img src="https://s3-alpha-sig.figma.com/img/7843/84ee/37569bf147f74d2ca44831a4a6ef3ee5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8WMTfSRXU1BLljzXqhyIis-iaAq-wdp2xCYIp9k3Mq5Q5Op93P9o-agIlYz20CqDTt5eCSUwYG~wSMmqZ4oj0onZN2wjP2q~2xLMvxYwf0dJaxUM2SxAcMTtvNqT8mAIDUhJuHrZvZ9W-AT8-67dcBU7wS6DrP82vYwaw2-k4ULgTARJmetSxmd6-Mc6Qe6iXM8k5kU7WSqmuDEvMSFjKdszfPsKhPYP-yHPIIAlVxQtT8vRI~WZdLI4bj-77sWgwNnmO88T6Rt7kY~U2syMtoLGGh3fjpF5IkrBe3XTbSA47f2xXw3UogouBYVJYJH2P68C4Bl-0KEuttWNHaxSA__" alt="Image 6" width="300" height="400" />
        <img src="https://s3-alpha-sig.figma.com/img/057c/3bab/f9de6c6ff643cd2e7661215ad26aed46?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DG69zOupf~twoqG0nB3RC6OtKQLjC82ShT4~P6H6s9Bo5YQN21zr3ZFMpH3oBREwbzsAPd7-fdBxdcU2BzYPWRXcpaecDLfT3vSOHW4spNJIUg28DjSWM1sm9Mc0KPDe8H-cMjPviSFlRiY9h9iPHx030PKQ4CqxEIhmhmDxTpLEgiR~NWc~Eq59ShHELLwNGLsTyHjAzQ11d4BsB4f7Ar~QOb35Z147uygGEMNgh2ij7BkNVB8SIcaBQVCCpeY3da8z6hMZA3CRrYQlf9epS9-Bj2xblZEtV2xQJy9fYOdnVKYOc-v0tP6J~ayJQZkRo~mL05zVKRzI8E3z1e2qGg__" alt="Image 7" width="300" height="400" />
        <img src="https://s3-alpha-sig.figma.com/img/6b7d/b8c4/94f946a8fffd305fbd1dafe75395cc6f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CwOfQ-woySw1ExdXf6Pd37hy5rWrVNoHUq0zPrSPT2ixvJ2m-dXoUk8585lDlWBxIvXBZoBcGQ3GR1si-CyZAYYQUIQGC0jrHNFUUCUkknXY6d3Yxl~2reRERQR4zYlgirzwAcLFQmh0XBI8UoNQaj8vLs9FoDWM8M79FaibQOZSf6dEcNCffx5p42~E-b41eQmXYxzwcXEX9lVGo9lsN9RwfwapeYFAKUMt-AVmEwls2dQbXZSfc9oxE0NME90ST5M4zpm-z6jgtcXYxIvuDdRnlrn8CXg-tk5MbyeWg6GArFT3yFZpmuNw5l4J6ZqanNuPMsl~3Hh63nv705Mxbw__" alt="Image 8" width="300" height="400" />
      </div>
    </div>
  );
};

export default GalleryComponent;

