import React from 'react';

const Header = () => {
  return (
    <header className='header foo'>
      <div className='inner'>
        <h1 className='logo'>
          <a href='#self' className='logo__link'>
            <img
              src='/img/common/logo.png'
              alt='코끼리 소아청소년과의원'
              className='logo__img'
            />
          </a>
        </h1>
        <div className='nav'>
          <nav className='nav__wrapper'>
            <div className='nav__header'>
              <div className='inner'>
                <p className='nav__logo'>
                  <span className='blind'>코끼리 소아청소년과의원</span>
                </p>
              </div>
            </div>
            <ul className='gnb'>
              <li className='gnb__item'>
                <span className='gnb__height'>
                  <button type='button' className='gnb__btn'>
                    병원안내
                  </button>
                </span>
                <ul className='lnb'>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      인사말
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      병원알림
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      진료안내
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      시설안내
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      오시는길
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      병원소식
                    </a>
                  </li>
                </ul>
              </li>
              <li className='gnb__item'>
                <span className='gnb__height'>
                  <button type='button' className='gnb__btn'>
                    전문클리닉
                  </button>
                </span>
                <ul className='lnb'>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      소아내분비
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      알레르기
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      소아천식
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      아토피
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      야뇨증
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      TMA(모발미네랄검사)
                    </a>
                  </li>
                </ul>
              </li>
              <li className='gnb__item'>
                <span className='gnb__height'>
                  <button type='button' className='gnb__btn'>
                    예방접종
                  </button>
                </span>
                <ul className='lnb'>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      예방접종표
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      주의사항
                    </a>
                  </li>
                </ul>
              </li>
              <li className='gnb__item'>
                <span className='gnb__height'>
                  <button type='button' className='gnb__btn'>
                    건강검진
                  </button>
                </span>
                <ul className='lnb'>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      건강검진프로그램
                    </a>
                  </li>
                  <li className='lnb__item'>
                    <a href='#self' className='lnb__link'>
                      건강보험공단검진
                    </a>
                  </li>
                </ul>
              </li>
              <li className='gnb__item'>
                <span className='gnb__height'>
                  <button type='button' className='gnb__btn'>
                    WEBZIN
                  </button>
                </span>
              </li>
            </ul>
            <button type='button' className='close'>
              <span className='close__line'>
                <span className='blind'>닫기</span>
              </span>
            </button>
          </nav>
        </div>
        <button type='button' className='hamburger'>
          <span className='hamburger__line'>
            <span className='blind'>모바일 메뉴</span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
