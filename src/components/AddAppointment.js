import { BiCalendarPlus } from "react-icons/bi"
import { useState } from "react"

const AddAppointment = ({ onSendAppointment, lastId }) => {
  const [toggleForm, setToggleForm] = useState(false)

  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  }
  const [formData, setFormData] = useState(clearData)

  function formDataPublished() {
    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + " " + formData.aptTime,
      aptNotes: formData.aptNotes,
    }
    onSendAppointment(appointmentInfo)
    setFormData(clearData)
    setToggleForm(!toggleForm)
  }

  const handleToggleBtn = () => {
    return setToggleForm((prevState) => !prevState)
  }

  return (
    <>
      <button
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={handleToggleBtn}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" /> Add
          Appointment
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="ownerName"
                id="ownerName"
                className="max-w-lg block w-full shadow-sm  p-2 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-blue-100 sm:max-w-xs sm:text-sm border border-gray-100 rounded-md"
                onChange={(e) => {
                  setFormData({ ...formData, ownerName: e.target.value })
                }}
                value={formData.ownerName}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="petName"
                id="petName"
                className="max-w-lg block w-full shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-blue-100 p-2 border sm:max-w-xs sm:text-sm border-gray-100 rounded-md"
                onChange={(e) => {
                  setFormData({ ...formData, petName: e.target.value })
                }}
                value={formData.petName}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Date
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="date"
                name="aptDate"
                id="aptDate"
                className="max-w-lg block w-full shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-blue-100 border-gray-100 p-2 border sm:max-w-xs sm:text-sm rounded-md"
                onChange={(e) => {
                  setFormData({ ...formData, aptDate: e.target.value })
                }}
                value={formData.aptDate}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="time"
                name="aptTime"
                id="aptTime"
                className="max-w-lg block w-full shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-blue-100  p-2 border border-gray-100 sm:max-w-xs sm:text-sm rounded-md"
                onChange={(e) => {
                  setFormData({ ...formData, aptTime: e.target.value })
                }}
                value={formData.aptTime}
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                id="aptNotes"
                name="aptNotes"
                rows="3"
                className="shadow-sm  focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 focus:outline-blue-100  w-80 p-2 mt-1 block sm:text-sm border border-gray-100 rounded-md"
                placeholder="Detailed comments about the condition"
                onChange={(e) => {
                  setFormData({ ...formData, aptNotes: e.target.value })
                }}
                value={formData.aptNotes}
              ></textarea>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                onClick={formDataPublished}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default AddAppointment
