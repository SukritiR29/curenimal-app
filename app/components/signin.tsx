// "use client";
// import React, { useState, useEffect } from 'react'
// import { auth, provider} from '@/firebaseConfig';
// import { signInWithPopup } from 'firebase/auth'
// import LostFound from '@/app/lostFound/page';


// const Signin = () => {


//     const [value, setValue] = useState(' ')
//     const handleClick = () => {
//         signInWithPopup(auth, provider).then((data) =>{
//             if(data.user?.email) {
//                 setValue(data.user.email);
//                 localStorage.setItem("email", data.user.email)
//             } else {
//                 setValue('')
//             }
//         })

//     useEffect(() => {
//         const storedEmail = localStorage.getItem('email');
//         if (storedEmail !== null) {
//             setValue(storedEmail);
//         } else {

//         }
//     }, []);
//     }
//   return (
//     <div>
//         {value?<LostFound/>:
//         <button onClick={handleClick}>Sign In With Google</button>
//        }
//     </div>
//   )
// }

// export default Signin