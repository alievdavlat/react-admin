import React from 'react'
import {ProfileDetails, ProfileHeader, ProfileSettings} from '../components'
import '../components/profile/profile.css'


const Profile = () => {
  const [activeTab, setActiveTab] = React.useState(0);

    const [profiletabs, setProfileTabs] = React.useState(0)

  return (
    <div className='profile'>
      <ProfileHeader setProfileTabs={setProfileTabs} activeTab={activeTab} setActiveTab={setActiveTab}/>

      {
        profiletabs === 0
        ? <ProfileDetails setProfileTabs={setProfileTabs} setActiveTab={setActiveTab}/>
        : <ProfileSettings/>
      }

    </div>
  )
}

export default Profile