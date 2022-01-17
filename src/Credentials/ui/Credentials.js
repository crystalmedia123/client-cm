import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CredentialsBloc from '../bloc/CredentialsBloc';

import Swal from 'sweetalert2';
import UploadFile from '../../static/images/Group.svg';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';

const Credentials = () => {
  const history = useHistory();
  const coinId = history.location.pathname.split('/')[2];
  const [idCard, setIdCard] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [ssn, setSsn] = useState('');
  const [name, setName] = useState('');

  // Loader on Button
  const [credentialsLoader, setCredentialsLoader] = useState(false);

  // Error States
  const [credentialsError, setCredientialsError] = useState('');

  // FORM FUNC(transactions)
  const onCredentialForm = async (e) => {
    e.preventDefault();
    setCredentialsLoader(true);

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append('image', idCard);

    try {
      const isCredentials = await CredentialsBloc.createImg(formData);

      if (isCredentials?.success) {
        const idCard = isCredentials.data.image;
        const userId = window.localStorage.getItem('userId');

        await CredentialsBloc.updateImg({
          idCard,
          userId
        });

        try {
          const isUpdateText = await CredentialsBloc.updateText({
            idCard,
            userId,
            phonenumber,
            ssn,
            name
          });
          if (isUpdateText) {
            Swal.fire({
              icon: 'success',
              text: 'Credentials Updated',
              background: '#121007',
              width: '50em'
            }).then(history.push(`/withdraw/${coinId}`));
          }
          // history.push('/withdraw');
        } catch (e) {}
      }
      setCredentialsLoader(false);
    } catch (e) {
      setCredentialsLoader(false);
      setCredientialsError(e.error.data.error);
    }
  };
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title />
        <section className="section-two">
          <h3 className="dangerr">
            <span style={{ color: 'black' }}>NOTE: </span>
            <span>
              You have to upload these files for verification purposes{' '}
            </span>
          </h3>

          <div className="row">
            {credentialsError && (
              <h3 style={{ color: 'red', margin: 'auto auto' }}>
                {credentialsError}
              </h3>
            )}
            <form style={{ margin: 'auto auto' }} onSubmit={onCredentialForm}>
              <div className="img-upload">
                <p>Upload ID Card</p>
                <div className="file-u">
                  <div className="img-ico">
                    <img
                      aria-describedby="images-info"
                      src={UploadFile}
                      alt="upload"
                    />
                  </div>
                </div>
                <small
                  style={{ width: 170, textAlign: 'center' }}
                  id="images-info"
                >
                  <input
                    type="file"
                    id="idCard"
                    onChange={(e) => setIdCard(e.target.files[0])}
                  />
                  <span style={{ color: 'red' }}>*</span> The uploaded images
                  must be 500px wide and 500px long
                </small>
              </div>
              <div className="cred-form">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="input your username...."
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phonenumber">Phone number</label>
                  <input
                    type="text"
                    id="phonenumber"
                    placeholder="input your phone number...."
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ssn">SSN</label>
                  <input
                    aria-describedby="ssndesc"
                    type="text"
                    id="ssn"
                    placeholder="input ssn.."
                    onChange={(e) => setSsn(e.target.value)}
                  />
                  <span id="ssndesc">* Note: For residence in UK</span>
                </div>
                <button className="site-btn" type="submit">
                  {credentialsLoader ? 'Submitting' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Credentials;
