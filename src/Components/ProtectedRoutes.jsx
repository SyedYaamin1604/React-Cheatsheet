import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Config/Firebase/firebaseMethod';
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({ component }) => {
  const [isUser, setIsUser] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(true);
      } else {
        document.getElementById('my_modal_1').showModal();
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    });
  }, [navigate]);


  return (
    <>
      {isUser ? (component) : (
        <dialog id="my_modal_1" className="modal">
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" role="dialog">
            <div className="modal-box bg-gray-300 border-4 border-black flex flex-col justify-center items-center min-w-[400px] min-h-[400px]">
              <h1 className="text-center font-bold text-5xl">You have to Login First</h1>
              <button onClick={() => setIsModalOpen(false)} className="btn bg-purple-600 hover:bg-purple-500 text-white mt-4">
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default ProtectedRoutes