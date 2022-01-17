import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileBloc from '../bloc/ProfileBloc';

import { CoinContext } from '../../CoinProvider';

import UploadFile from '../../static/images/Group.svg';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import Title from '../../components/title';
import Footer from '../../admin/components/Footer';

import '../../static/css/cred.css';

const Profile = () => {
  const history = useHistory();
  const { user, getUser } = useContext(CoinContext);

  const [isLoading, setLoading] = useState(true);
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  // Loader on Button
  const [profileLoader, setProfileLoader] = useState(false);

  // Error States
  const [profileError, setProfileError] = useState('');

  useEffect(() => {
    getUser();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onProfileForm = async (e) => {
    e.preventDefault();
    setProfileLoader(true);

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append('image', photo);

    try {
      const isProfile = await ProfileBloc.createImg(formData);

      if (isProfile?.success) {
        const photo = isProfile.data.image;
        const userId = window.localStorage.getItem('userId');

        await ProfileBloc.updateImg({
          photo,
          userId
        });

        await ProfileBloc.updateText({
          photo,
          userId,
          name,
          phonenumber
        });
        setProfileLoader(false);

        history.push('/dashboard');
      }
    } catch (e) {
      setProfileLoader(false);
      setProfileError(e.response.data.error);
    }
  };
  return (
    <>
      <NavBar />
      <SideBar />
      <main>
        <Title title="Update Profile" />
        <section className="section-two">
          <div className="row">
            {profileError && (
              <h3 style={{ color: 'red', margin: 'auto auto' }}>
                {profileError}
              </h3>
            )}
            <form onSubmit={onProfileForm}>
              <div className="img-upload">
                <p>Upload Profile Picture</p>
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
                    id="photo"
                    onChange={(e) => setPhoto(e.target.files[0])}
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
                    placeholder={user[0]?.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phonenumber">Phone number</label>
                  <input
                    type="text"
                    id="phonenumber"
                    placeholder={user[0]?.phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    aria-describedby="ssndesc"
                    type="text"
                    id="email"
                    defaultValue={user[0]?.email}
                    placeholder={user[0]?.email}
                  />
                </div>
                <button className="site-btn" type="submit">
                  {profileLoader ? 'Updating' : 'Update'}
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Profile;
