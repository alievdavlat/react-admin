import React from 'react'
import {ProfileDetails, ProfileHeader, ProfileSettings} from '../components'
import '../components/profile/profile.css'

const Profile = () => {

    const [profiletabs, setProfileTabs] = React.useState(0)

  return (
    <div className='profile'>
      <ProfileHeader setProfileTabs={setProfileTabs}/>

      {
        profiletabs === 0
        ? <ProfileDetails/>
        : <ProfileSettings/>
      }

    </div>
  )
}

export default Profile