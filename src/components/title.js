import React, { useContext } from 'react';

import { CoinContext } from '../CoinProvider';

import Triangle from '../static/images/Triangle.png';

const Title = ({ title }) => {
  // CONTEXT
  const { user } = useContext(CoinContext);

  //

  return (
    <>
      {/* <div className="title"> */}
      {user.map((user, index) => (
        <section key={index} className="section-one">
          <div className="user-meta">
            <div className="my-info">
              <div>Hi {user.name}</div>
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
      {/* </div> */}
    </>
  );
};

export default Title;
