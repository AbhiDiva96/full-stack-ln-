import { useEffect, useMemo, useState } from 'react'
// import axios from 'axios';
import './App.css'
import {useRecoilValue, RecoilRoot, useRecoilState} from 'recoil'
import {totalNotificationSelector , notifications} from './store/atom';0


function App() {
   
return  <>
       <RecoilRoot>
       <LinkedinHeader />
       </RecoilRoot> 
 
 </>
   
 
}



function LinkedinHeader(){
  
 
  // const[ totalnetworkCount , settotalnetworkCount] = useRecoilState(networkCount)
  // const totalMessageCount  = useRecoilValue(messageCount)
  // const totalNotificationCount = useRecoilValue(notificationCount);



const networkCount = useRecoilValue(notifications)
const overAllCount = useRecoilValue(totalNotificationSelector);

   





  return <div>

       <button>Home</button> <span />
        <button>My Network ({networkCount.network >= 100 ? "99+" : networkCount.network })</button>
       <span /> <span />
        <button>Job ({networkCount.jobs})</button>  <span />
      <button>Messaging ({networkCount.messaging})</button>
      <span /> <span />
      <button>notifications ({networkCount.notifications >= 100 ? "99+" : networkCount.notifications})</button>
      <span /> <span />
      <button>Me* ({overAllCount})</button>
      <span /> <span />
  </div>

}




export default App
