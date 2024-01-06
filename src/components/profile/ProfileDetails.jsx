import React from 'react'

const ProfileDetails = ({setProfileTabs, setActiveTab}) => {

  const handleOnclick = () => {
    setProfileTabs(1)
    setActiveTab(1)
  }

  return (
    <div className='profile-details'>
      <div className="profile-details-top">
        <h4>profile details</h4>

        <button onClick={() => handleOnclick()}>
            change profile
        </button>
      </div>

      <div className="profile-details-bottom">


        <div className='profile-details-bottom-details'>
            <h3>Name :</h3>
            <h4>aliev</h4>
        </div>

        <div className='profile-details-bottom-details'>
            <h3>Phone :</h3>
            <h4>+998999331564</h4>
        </div>

      

      </div>
    </div>
  )
}

export default ProfileDetails