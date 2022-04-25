import React from 'react';
import './Reservations.css';

const Reservations = () => {
  return ( 
  <section className="app__reservations" id="reservations">
    <div>
      <h1 className="headtext__cormorant">Book A Table Today</h1>
    </div>
    <div class="reservations-card-container">
      <div class="card-img">
      </div>
    </div>
      <div class="card-content">
        <h2>Reservations</h2>
        <form>
          <div class="form-row">
            <select name="days">
              <option value="day-select">
                Select Day
              </option>
              <option value="monday">
                Monday
              </option> 
              <option value="tuesday">
                Tuesday
              </option>
              <option value="wednesday">
                Wednesday
              </option>
              <option value="thursday">
                Thursday
              </option>
              <option value="friday">
                Friday
              </option>
              <option value="saturday">
                Saturday
              </option>
              <option value="sunday">
                Sunday
              </option>
            </select>

            <select name="time">
              <option value="time-select">
                Select Time Slot
              </option>
              <option value="18">
                18:00 - 19:00
              </option>
              <option value="19">
                19:00 - 20:00
              </option>
              <option value="20">
                20:00 - 21:00
              </option>
              <option value="21">
                21:00 - 22:00
              </option>
              <option value="22">
                22:00 - 23:00
              </option>
            </select>
          </div> 
           
          <div class="form-row">
            <input type="text" minLength="2" maxLength="70" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" pattern="^\d{3}-\d{3}-\d{4}$" required />
            <input type="email" placeholder="Email Address" required />
          </div> 

          <div class="form-row">
            <input type="number" placeholder="How Many People?" min="1"  max="30" required />
            <input type="submit" value="Reserve Table"/>
          </div>
        </form>
      </div>
  </section>
)};
 
export default Reservations;