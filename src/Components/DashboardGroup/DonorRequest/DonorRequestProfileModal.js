import React from 'react';
import toast from 'react-hot-toast';
import { FiPhoneCall } from "react-icons/fi";

const DonorRequestProfileModal = ({ profileDonorRequest, setProfileDonorRequest, refetch }) => {

    const { _id, profileImg, name, bloodGroup, age, number1, number2, gender, division, district, policeStation, union, village, status } = profileDonorRequest
    // const handleDeleteRequest = () => {
    //     const url = `http://localhost:5000/donorRequest/${_id}`;
    //     fetch(url, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {
    //                 refetch()
    //                 setProfileDonorRequest(null)
    //                 toast.success('Donor Request Deleted')
    //             }
    //         })
    // }

    return (
        <div>
            <input type="checkbox" id="donor-request-profile-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="donor-request-profile-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="avatar w-full">
                        <div class="w-16 rounded-full ring ring-green-500 ring-offset-base-100 ring-offset-2 text-center mx-auto">
                            <img src={profileImg} alt='' />
                        </div>
                    </div>
                    <h2 className='text-center poppins-font mt-2 text-lg'> <span className=''>Name: </span> <span className='font-bold text-green-600'>{name}</span> <span className='text-red-500 uppercase ml-2 font-bold'>({bloodGroup})</span></h2>
                    <p className='text-center poppins-font'><span>Age:</span> <span className='font-semibold'>{age}</span></p>

                    <div className='flex justify-center items-center mt-1 mb-2'>
                        <div>
                            <FiPhoneCall className='text-2xl text-right w-full mr-3 text-green-600 mt-1' />
                        </div>
                        <div className=' mt-1 ml-4 poppins-font'>
                            <p className='inline-block mr-2 font-bold'>{number1}, </p>
                            <p className='inline-block font-bold'>{number2 ? number2 : "..."}</p>
                        </div>
                    </div>

                    <div className='flex justify-around'>
                        <div>
                            <p className='mb-1'><span className='poppins-font'>Division: </span> <span className='bangla-font font-bold'>{division}</span></p>
                            <p className='mb-1'><span className='poppins-font'>District: </span> <span className='bangla-font font-bold'>{district}</span></p>
                            <p className='mb-1'><span className='poppins-font'>Union: </span> <span className='bangla-font font-bold'>{union}</span></p>

                        </div>

                        <div>
                            <p className='mb-1'><span className='poppins-font'>Gender: </span> <span className='bangla-font font-bold text-green-600'>{gender}</span></p>
                            <p className='mb-1'><span className='poppins-font'>Station: </span> <span className='bangla-font font-bold'>{policeStation}</span></p>
                            <p className='mb-1'><span className='poppins-font'>Village: </span> <span className='bangla-font font-bold'>{village}</span></p>
                        </div>
                    </div>
                    <div className='flex justify-around mt-3'>
                        <label for="donor-request-delete-modal" className='btn btn-sm  bg-green-600 border-0 hover:bg-green-700'>Accept</label>
                        
                        <label for="donor-request-delete-modal" className='btn btn-sm bg-red-500 border-0 hover:bg-red-600'>Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonorRequestProfileModal;