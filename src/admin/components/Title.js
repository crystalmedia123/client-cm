import React, { useContext } from 'react';
import Triangle from '../static/images/Triangle.png';

import { CoinContext } from '../../CoinProvider';

const Title = ({ title }) => {
  // CONTEXT
  const { user } = useContext(CoinContext);
  return (
    <>
      {user.map((user, index) => (
        <section key={index} className="section-one">
          <div className="user-meta">
            <div className="my-info">
              <div>Hi {user.name},</div>
              <div>
                <span>{user.level}</span>
                <span>
                  <strong>|</strong> Account
                </span>
                <img src={Triangle} alt="triangle" />
              </div>
            </div>
            <div className="others">
              <h3>{title}</h3>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Title;
