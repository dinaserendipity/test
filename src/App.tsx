import { useState } from 'react';

const user = {
  name: 'Надежда',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 120,
};

function MyApp() {
  const [showMessage, setShowMessage] = useState(false);
  const [count, setCount] = useState(0);
  
  const hour = new Date().getHours();
  
  let timeGreeting;
  if (hour < 12) {
    timeGreeting = 'Доброе утро!';
  } else if (hour < 18) {
    timeGreeting = 'Добрый день!';
  } else {
    timeGreeting = 'Добрый вечер!';
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f5f5f5',
      fontFamily: 'Calibri, sans-serif',
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        padding: '40px 0',
        borderBottom: '1px solid #e0e0e0',
        flexWrap: 'wrap'
      }}>
        <div style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: '50%',
          overflow: 'hidden',
          flexShrink: 0,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
          <img
            src={user.imageUrl}
            alt={'Фото ' + user.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        <div>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            color: '#1a1a1a',
            margin: '0 0 5px 0',
            letterSpacing: '-0.5px'
          }}>
            Надежда
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            margin: '0'
          }}>
            Frontend-разработчик
          </p>
        </div>
      </div>

      <div style={{
        padding: '40px 0'
      }}>
        <div style={{
          background: '#f0f0f0',
          padding: '16px 20px',
          borderRadius: '8px',
          marginBottom: '25px'
        }}>
          <p style={{ 
            color: '#333', 
            margin: 0,
            fontSize: '1.1rem'
          }}>
            {timeGreeting}
          </p>
        </div>

        <h2 style={{
          fontSize: '1.3rem',
          fontWeight: '400',
          color: '#333',
          margin: '0 0 15px 0'
        }}>
          Обо мне
        </h2>
        <p style={{
          color: '#555',
          lineHeight: '1.8',
          fontSize: '1.05rem',
          maxWidth: '650px',
          margin: '0 0 30px 0'
        }}>
          Создаю простые и понятные веб-приложения. 
          Работаю с React, TypeScript и люблю минимализм во всём.
        </p>

        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <button
            onClick={() => setShowMessage(!showMessage)}
            style={{
              background: '#1a1a1a',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '30px',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.2s',
              letterSpacing: '0.3px'
            }}
          >
            {showMessage ? 'Скрыть' : 'Сказать привет'}
          </button>

          <button
            onClick={() => setCount(count + 1)}
            style={{
              background: 'transparent',
              color: '#1a1a1a',
              border: '1px solid #d0d0d0',
              padding: '10px 24px',
              borderRadius: '30px',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            Лайк {count}
          </button>
        </div>

        {showMessage && (
          <div style={{
            background: '#f0f0f0',
            padding: '16px 20px',
            borderRadius: '8px',
            marginBottom: '30px',
            animation: 'fadeIn 0.3s ease'
          }}>
            <p style={{ color: '#333', margin: 0 }}>
              Привет, рада познакомиться!
            </p>
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '12px',
          marginBottom: '30px'
        }}>
          <div style={{
            background: 'white',
            padding: '16px 20px',
            borderRadius: '8px',
            border: '1px solid #e8e8e8',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '20px' }}>React</span>
            <p style={{ color: '#555', margin: '5px 0 0 0', fontSize: '0.9rem' }}>React</p>
          </div>
          <div style={{
            background: 'white',
            padding: '16px 20px',
            borderRadius: '8px',
            border: '1px solid #e8e8e8',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '20px' }}>UI/UX</span>
            <p style={{ color: '#555', margin: '5px 0 0 0', fontSize: '0.9rem' }}>UI/UX</p>
          </div>
          <div style={{
            background: 'white',
            padding: '16px 20px',
            borderRadius: '8px',
            border: '1px solid #e8e8e8',
            textAlign: 'center'
          }}>
            <span style={{ fontSize: '20px' }}>Responsive</span>
            <p style={{ color: '#555', margin: '5px 0 0 0', fontSize: '0.9rem' }}>Responsive</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default MyApp;