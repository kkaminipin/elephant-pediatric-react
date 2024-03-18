import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='footer__area footer__top'>
        <div className='inner'>
          <p className='footer__tit'>코끼리 소아청소년과의원</p>
          <nav className='fnb'>
            <ul className='fnb__depth-1'>
              <li className='fnb__item-1'>
                <span className='fnb__menu'>병원안내</span>
                <ul className='fnb__depth-2'>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      인사말
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      병원알림
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      진료안내
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      시설안내
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      오시는길
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      병원소식
                    </a>
                  </li>
                </ul>
              </li>
              <li className='fnb__item-1'>
                <span className='fnb__menu'>건강검진 (검진프로그램)</span>
                <ul className='fnb__depth-2'>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      소아종합건강검진
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      영유아발달종합검진
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      소아청소년건강검진
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      학생건강검진
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      성인건강검진
                    </a>
                  </li>
                </ul>
              </li>
              <li className='fnb__item-1'>
                <span className='fnb__menu'>전문클리닉</span>
                <ul className='fnb__depth-2'>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      소아내분비
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      알레르기
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      소아천식
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      아토피
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      야뇨증
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      TMA(모발미네랄검사)
                    </a>
                  </li>
                </ul>
              </li>
              <li className='fnb__item-1'>
                <span className='fnb__menu'>예방접종</span>
                <ul className='fnb__depth-2'>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      예방접종표
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      주의사항
                    </a>
                  </li>
                </ul>
              </li>
              <li className='fnb__item-1'>
                <span className='fnb__menu'>건강검진 (건강보험공단검진)</span>
                <ul className='fnb__depth-2'>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      영유아건강검진
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      일반건강검진
                    </a>
                  </li>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      생애전환건강검진
                    </a>
                  </li>
                </ul>
              </li>
              <li className='fnb__item-1'>
                <span className='fnb__menu'>WEBZIN</span>
                <ul className='fnb__depth-2'>
                  <li className='fnb__item-2'>
                    <a href='#self' className='fnb__link'>
                      WEBZIN
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <address className='footer__area footer__btm'>
        <div className='inner'>
          <ul className='footer-privacy'>
            <li className='footer-privacy__item'>
              <a href='#self' className='footer-privacy__link'>
                회원권리장전
              </a>
            </li>
            <li className='footer-privacy__item'>
              <a href='#self' className='footer-privacy__link'>
                비급여진료안내
              </a>
            </li>
            <li className='footer-privacy__item'>
              <a href='#self' className='footer-privacy__link'>
                개인정보취급방침
              </a>
            </li>
            <li className='footer-privacy__item'>
              <a href='#self' className='footer-privacy__link'>
                이메일무단수집거부
              </a>
            </li>
          </ul>
          <address className='footer-address'>
            <span className='footer-address__txt'>
              주소 : 경기도 안산시 상록구 샘골로 142 동보프라자 2층
            </span>
            <span className='footer-address__txt'>
              상담 대표전화 : 031-407-1178
            </span>
            <span className='footer-address__txt footer-address__copyright'>
              Copyright 2003 by 코끼리소아과 all rights reserved.{' '}
            </span>
          </address>
        </div>
      </address>
    </footer>
  );
};

export default Footer;
