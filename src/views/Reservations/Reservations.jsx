import React from "react";
import { useForm } from "react-hook-form";
import "./Reservations.css";
import Topbar from "../../components/Topbar/Topbar";

const Reservations = () => {
  //const [name, setName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   localStorage.setItem("name", JSON.stringify(name));
  // }, [name]);

  const onSubmit = (reservations) => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  };

  return (
    <div>
      <Topbar />
      <div className="form-content-right">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <h1>Make a reservation</h1>
          <div className="form-inputs">
            <label className="form-label">* Name</label>
            <input
              type="text"
              //value={name}
              //onChange={(e) => setName(e.target.value)}
              className="form-input"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <p>This field is required</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">* Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
            {errors.phone && <p>This field is required</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">* Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              })}
            />
            {errors.email && <p>This field is required</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">* Date</label>
            <input
              type="date"
              name="date"
              className="form-input"
              placeholder="Date"
              {...register("date", { required: true })}
            />
            {errors.date && <p>This field is required</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">* Time</label>
            <input
              type="time"
              min="12:00"
              max="20:00"
              name="time"
              className="form-input"
              placeholder="Time"
              {...register("time", { required: true })}
            />
            {errors.time && <p>Opening hours 11:00 - 20:00</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">
              * Choose a table
              <select {...register("table", { required: true })}>
                <option>For 8 people</option>
                <option>For 6 people</option>
                <option>For 5 people</option>
                <option>For 4 people</option>
              </select>
              {errors.table && <p>This field is required</p>}
            </label>
          </div>
          <div className="form-inputs">
            <label className="form-label">Note</label>
            <input
              type="text"
              name="note"
              className="form-input"
              placeholder="Note"
            />
          </div>
          <button className="form-input-btn" type="submit">
            BOOK TABLE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservations;
