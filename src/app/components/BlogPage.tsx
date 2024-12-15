"use client"
import React, { useState } from 'react';
import '../styles/BLogPage.css';

const BlogPostCard: React.FC = () => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      maxWidth: '820px',
      margin: '20px auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <img 
        src="https://s3-alpha-sig.figma.com/img/56f7/6fe2/41417cd682c30a19eecaf20a549cee89?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4EyQfxcTT3zKEspwwUwjzHRYr6lHo-X69bquA760YFlO7-RK3be~84gg0x5noSEsVr7hVq82Y-FA0msMrzntPUe09WE3Lwp33eGM9PxX9PEyuL9Ui-dHOObi2kBiLa852lGQlNDFbvjJxJURpcnS~lWX7Tl7udmQAWT3duQfYKlOdgAElLK25V7zDtRTevzoKQo0mXLccYov6n8MjSyLQOhvKzjueqrL6e~71c3MKCqDisQ~K3VfhMx-7EUHSOya9dViYQMjntb9hVrnb1JrbzpaNKpTuIkKUSWHDTTf89egkcVwOkq69dVvsOEZ1dwBZlpR3mgMsVnZq3hbe-r8w__" 
        alt="Blog Post" 
        style={{
          width: '100%',
          height: '500px',
          objectFit: 'cover'
        }}
      />
      <div style={{ padding: '16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          color: '#9f9f9f',
          fontSize: '16px',
          marginBottom: '8px'
        }}>
          <span style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
            <img src="https://s3-alpha-sig.figma.com/img/d248/0301/96ed5dc3b3d01cf6cd369ef7aff2f296?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nwcDbvDVqfHiBZRH3jpsqUI~xNgtHRa0sgelVea-Ur4wkNV4fULrrebdVYgM9ByApm~gR3kOhKfOs439X3GwCM5KiiO5G5z4sIo5Bjm~fV5DMfa4cpTuvYW-eihxrHmd9fxsfDOoX8Za3bFa6qmc5GZT2ccnAI1GrrWMrtNrKhetq76MGvO7HO3Hx0Z8oDziLVTBMot7t0d2twKe1oElzKA2tATwx9vfYJPuyt54s08UZkxDKm0JK1FjnpZNyznHGEmcTxqlnvMdgDgnLPtJHVRgRltT~rrtFjIL3erSpLVLsFL6bL~qKuMGsQ-YXxOGYHxAcOW37pXMRBh~Gfoh6A__" alt="Admin Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            Admin
          </span>
          <span style={{ marginRight: '16px', display: 'flex', alignItems: 'center' }}>
            <img src="https://s3-alpha-sig.figma.com/img/8dee/6dec/4190307dc6c7273c0bbf5086605997e4?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CSDZR3Hl7dpNGQRiSZL0dGHwv-d3eYSw4FcWKBOHg9LTLLEm2kcNhWLRV~lweyQyVpbsH3H9sbHEbsn1nLBRVi4fxBFv-qV8NSv7J8BiLlNOgDtCEWhEIAQPKfre44nOgy1rXWOZm-EFQnJyKun4nJMrNHU-Vt5EkMa8OK0rotbQQUQSHPr4ofD207g0bmQUY-7VQNA8XKTT1mBK4RyIjthYGbhtpM4gBR6XbAJpSgF2INuIUVpecdJp54L1VOx92mX4w81MboAatTezTh9eXPUJ-PhvGjKZepxWaVsFf2tXbQt5M0QbE4-R4YgKh7cp4xsDoDdy9dDSKKM2-wKREw___" alt="Calendar Icon" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
            
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src="" alt="Tag Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
            Wood
          </span>
        </div>
        <h2 style={{
          fontSize: '30px',
          margin: '0 0 8px 0',
          fontWeight: 500,
          lineHeight: '45px'
        }}>Going all-in with millennial design</h2>
        <p style={{
          color: '#9f9f9f',
          lineHeight: '150%',
          marginBottom: '16px',
          fontSize: '15px',
          fontWeight: 400,
          fontFamily: 'Poppins'
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <a href="#" style={{
          color: '#000',
          textDecoration: 'none',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
          fontFamily: 'Poppins'
        }}>Read more</a>
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
      imageId: '/slidbar1.jpg',
        },
    {
      id: 2,
      title: 'Exploring new ways of decorating',
      date: '03 Aug 2022',
      imageId: '/slidbar3.jpg'
    },
    {
      id: 3,
      title: 'Handmade pieces that took time to make',
      date: '03 Aug 2022',
      imageId: '/slidbar4.jpg'
    },
    {
      id: 4,
      title: 'Modern home in Milan',
      date: '03 Aug 2022',
      imageId: '/slidebar5.jpg'
    },
    {
      id: 5,
      title: 'Colorful office redesign',
      date: '03 Aug 2022',
      imageId: '/slidebar6.jpg'
    }
  ];

  return (
    <div className="sidebar">
      <h2>Recent Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <img src={`${post.imageId}`} alt={post.title} width="80" height="80" />
            <div className="post-info">
              <h3>{post.title}</h3>
              <p>{post.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map(page => (
        <button
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="page-item next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="blog-page">
      <div className="content">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </div>
      <Sidebar />
    </div>
  );
};

export default BlogPage;

