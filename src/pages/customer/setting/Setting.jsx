import "./setting.scss";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { settingCustomerValidation } from "../../../utils/validation/Validation";
import { getCustomerDetail, upadteCustomer } from "../../../Store/customerReducer/customerAction";
import { useNavigate } from "react-router-dom";





const Setting = () => {



  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getCustomerDetail())
  },[dispatch])

  const user = useSelector((state) => state.customer.customer);

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const { values, handleChange, handleBlur, touched, errors, submitForm } = useFormik({
    enableReinitialize: true,

    initialValues: {
      fullName: `${user?.fullName?.firstName || ""} ${user?.fullName?.lastName || ""}`,
      email: user?.email || "",
      dialCode: "IN",
      phone: user?.phoneNumber || "",
      gender: user?.gender || "",
      address: user?.address || "",
      idProofNumber: user?.idProofNumber || "",
    },

    validationSchema: settingCustomerValidation,

    onSubmit: async (values) => {
      const data = {
        fullName: values.fullName,
        phoneNumber: values.phone,
        gender: values.gender,
        address: values.address,
        idProofNumber: values.idProofNumber,
        image: selectedImage,
        email: values.email,
      };

      dispatch(upadteCustomer(data));
      navigate('/')
    },
  });

  const imageUrl = previewImage ? previewImage : user?.profileImg ? `http://localhost:3000/profile_img/${user.profileImg}` : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300";

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="settingPage">
      <h1>Account</h1>

      <div className="settingCard">
        <div className="cardTitle">
          <FaUser />
          <span>Basic details</span>
        </div>

        <div className="profileUpload">
          <img src={imageUrl} alt="Profile" />

          <label className="uploadBtn">Change Image
            <input type="file" accept="image/*" onChange={imageChangeHandler} />
          </label>
        </div>

        <div className="formGroup">
          <label>Full name</label>
          <input name="fullName" type="text" value={values.fullName} onChange={handleChange} onBlur={handleBlur} />
        </div>

        <div className="formGroup">
          <label>Email address</label>
          <input name="email" type="text" value={values.email} onChange={handleChange} onBlur={handleBlur} />
          <small>Please contact us to change your email</small>
        </div>

        <div className="phoneRow">
          <div className="formGroup">
            <label>Dial code</label>
            <select name="dialCode" value={values.dialCode} onChange={handleChange} onBlur={handleBlur} disabled >
              <option value="IN">IN India</option>
              <option value="US">US USA</option>
              <option value="UK">UK United Kingdom</option>
            </select>
          </div>

          <div className="formGroup">
            <label>Phone number</label>
            <input name="phone" type="text" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
            {touched.phone && errors.phone && ( <p className="error">{errors.phone}</p>)}
          </div>
        </div>

        <div className="formGroup">
          <label>Gender</label>
          <select name="gender" value={values.gender} onChange={handleChange} onBlur={handleBlur} >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="formGroup">
          <label>Address</label>
          <input name="address" type="text" placeholder="Enter address" value={values.address} onChange={handleChange} onBlur={handleBlur}/>
        </div>

        <div className="formGroup">
          <label>ID Proof Number</label>
          <input name="idProofNumber" type="text" placeholder="Enter ID proof number" value={values.idProofNumber} onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>



        <div className="actionButtons">
          <button type="button" className="cancelBtn" onClick={()=> navigate('/')}>Cancel </button>
          <button type="button" className="saveBtn" onClick={submitForm}>Save changes </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;