import { useTheme } from './components/ThemeComponent';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const { currentTheme } = useTheme();

  return (
    <div className={currentTheme}>
      <Navbar />

      {/* Main Content */}
      <main
        style={{
          paddingTop: '70px',
          minHeight: '100vh',
          background: 'var(--color-secondary)',
          color: 'var(--text-color-secondary)',
        }}
      >
        {/* Hero Section */}
        <section
          id='home'
          style={{
            padding: '80px 24px',
            textAlign: 'center',
            background: 'var(--color-primary)',
            color: 'var(--text-color-primary)',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: '700',
                marginBottom: '16px',
                letterSpacing: '-1px',
              }}
            >
              Welcome to{' '}
              <span style={{ color: 'var(--color-accent)' }}>AVGfx</span>
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                opacity: 0.9,
                marginBottom: '24px',
              }}
            >
              Akshar Video Graphics Special Effects
            </p>
            <p
              style={{
                fontSize: '1rem',
                opacity: 0.8,
              }}
            >
              Professional Audio Video Graphics Special Effects
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section id='about' style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                marginBottom: '24px',
                color: 'var(--color-primary)',
              }}
            >
              About Us
            </h2>
            <div
              style={{
                background: 'var(--color-primary)',
                padding: '40px',
                borderRadius: '16px',
                color: 'var(--text-color-primary)',
              }}
            >
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                We are a leading provider of professional video graphics and
                special effects services. With years of experience in the
                industry, we deliver stunning visual content that captivate
                audiences and elevate brands. Our team of experts combines
                creativity with cutting-edge technology to bring your vision to
                life.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id='services'
          style={{ padding: '80px 24px', background: 'var(--color-primary)' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                marginBottom: '24px',
                color: 'var(--text-color-primary)',
              }}
            >
              Our Services
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {[
                'Video Editing',
                'Motion Graphics',
                'Visual Effects',
                'Color Grading',
                '3D Animation',
                'Title Design',
              ].map((service, index) => (
                <div
                  key={index}
                  style={{
                    background: 'var(--color-secondary)',
                    padding: '32px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--color-primary)',
                      marginBottom: '12px',
                    }}
                  >
                    {service}
                  </h3>
                  <p style={{ color: 'var(--text-color-secondary)' }}>
                    Professional {service.toLowerCase()} services tailored to
                    your needs
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id='blogs' style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                marginBottom: '24px',
                color: 'var(--color-primary)',
              }}
            >
              Latest Blogs
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {[1, 2, 3].map((blog) => (
                <article
                  key={blog}
                  style={{
                    background: 'var(--color-primary)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    color: 'var(--text-color-primary)',
                  }}
                >
                  <div
                    style={{
                      height: '180px',
                      background: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: '3rem', opacity: 0.5 }}>📷</span>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        marginBottom: '12px',
                      }}
                    >
                      Blog Post Title {blog}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        opacity: 0.8,
                        lineHeight: '1.6',
                      }}
                    >
                      Discover the latest trends in video graphics and special
                      effects. Learn tips and techniques from industry experts.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id='gallery'
          style={{ padding: '80px 24px', background: 'var(--color-primary)' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                marginBottom: '24px',
                color: 'var(--text-color-primary)',
              }}
            >
              Gallery
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '16px',
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  style={{
                    aspectRatio: '16/9',
                    background: 'var(--color-secondary)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <span style={{ fontSize: '2.5rem', opacity: 0.4 }}>🎬</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id='contact' style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                marginBottom: '24px',
                color: 'var(--color-primary)',
              }}
            >
              Contact Us
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              <div
                style={{
                  background: 'var(--color-primary)',
                  padding: '40px',
                  borderRadius: '16px',
                  color: 'var(--text-color-primary)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '16px',
                  }}
                >
                  Get in Touch
                </h3>
                <p style={{ marginBottom: '24px', opacity: 0.8 }}>
                  Have a project in mind? We'd love to hear from you!
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span>📧</span>
                    <span>contact@avgfx.com</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span>📱</span>
                    <span>+1 234 567 890</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span>📍</span>
                    <span>Your City, Country</span>
                  </div>
                </div>
              </div>
              <form
                style={{
                  background: 'var(--color-primary)',
                  padding: '40px',
                  borderRadius: '16px',
                  color: 'var(--text-color-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <input
                  type='text'
                  placeholder='Your Name'
                  style={{
                    padding: '14px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'var(--color-secondary)',
                    color: 'var(--text-color-secondary)',
                    fontSize: '1rem',
                  }}
                />
                <input
                  type='email'
                  placeholder='Your Email'
                  style={{
                    padding: '14px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'var(--color-secondary)',
                    color: 'var(--text-color-secondary)',
                    fontSize: '1rem',
                  }}
                />
                <textarea
                  placeholder='Your Message'
                  rows='4'
                  style={{
                    padding: '14px 18px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'var(--color-secondary)',
                    color: 'var(--text-color-secondary)',
                    fontSize: '1rem',
                    resize: 'vertical',
                  }}
                />
                <button
                  type='submit'
                  style={{
                    padding: '14px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    background: 'var(--color-accent)',
                    color: 'var(--text-color-primary)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            padding: '40px 24px',
            background: 'var(--color-primary)',
            color: 'var(--text-color-primary)',
            textAlign: 'center',
          }}
        >
          <p style={{ opacity: 0.8 }}>
            © 2024 AVGfx. All rights reserved. | Akshar Video Graphics Special
            Effects
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
