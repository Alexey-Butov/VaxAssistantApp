import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  let stringStatusValue = "";
  const [beenInfected, setBeenInfected] = useState(false);
  const toggleSwitch = () => setBeenInfected((previousState) => !previousState);
  stringStatusValue = String(beenInfected);
  stringStatusValue[0].toUpperCase(); // database doesn't let me use true and false but only True and False with capital letter

  return (
    <div class="form-container">
      <h1 class="title">Vaccination Data Registration</h1>
      <form
        class="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.target);
          axios.post("http://127.0.0.1:8000/citizen/add-citizen", formdata);
          for (let f of formdata.values()) console.log(f);
        }}
      >
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="FirstName"
          required
        />

        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="LastName"
          required
        />

        <p class="additional-on-field-title" id="text">
          Enter your birth date:
        </p>
        <input
          id="birth-date"
          class="form-field"
          type="date"
          placeholder="Birth Date"
          name="DateOfBirth"
          required
        />
        <input
          id="address"
          class="form-field"
          type="text"
          placeholder="Address"
          name="HomeAdress"
          required
        />

        <p class="additional-on-field-title" id="text">
          Enter your city:
        </p>
        <select class="form-field" id="city-select" name="City">
          <option value="gitega">Gitega</option>
          <option value="ndjamena">N'Djamena</option>
          <option selected value="addis-ababa">
            Addis Ababa
          </option>
          <option value="niamey">Niamey</option>
        </select>
        <input
          id="zip-code"
          class="form-field"
          type="number"
          placeholder="Zip code"
          name="ZipCode"
          pattern="[0-9]{6}"
          required
        />
        <input
          id="land-line"
          class="form-field"
          type="text"
          placeholder="Land line"
          name="LandLine"
          pattern="[0-9]{12}"
          required
        />
        <input
          id="cellular-phone"
          class="form-field"
          type="text"
          placeholder="Cellular phone"
          name="CellularPhone"
          pattern="[0-9]{12}"
          required
        />
        <br></br>
        <div className="had-covid">
          <input
            type="checkbox"
            id="Covid-check"
            name="BeenInfectedWithCovid"
            value="True"
            onClick={toggleSwitch}
          />
          <label htmlFor={`Covid-check`}>Had Covid-19</label>
        </div>
        <br></br>
        <p class="additional-on-field-title" id="text">
          Please check if you have any of the following background diseases:
        </p>
        <ul>
          <li>
            <div className="background-diseases">
              <input
                type="checkbox"
                id={`checkbox-diabetes`}
                name="diabetes"
                value="diabetes"
                onChange=""
              />
              <label htmlFor={`checkbox-diabetes`}>diabetes</label>
            </div>
          </li>
          <li>
            <div className="background-diseases">
              <input
                type="checkbox"
                id={`checkbox-cardio-vascular-problems`}
                name="cardio-vascular-problems"
                value="cardio-vascular-problems"
                onChange=""
              />
              <label htmlFor={`checkbox-diabetes`}>
                cardio-vascular-problems
              </label>
            </div>
          </li>
          <li>
            <div className="background-diseases">
              <input
                type="checkbox"
                id={`checkbox-allergies`}
                name="allergies"
                value="allergies"
                onChange=""
              />
              <label htmlFor={`checkbox-allergies`}>allergies</label>
            </div>
          </li>
          <li>
            <div className="background-diseases">
              <input type="checkbox" id={`checkbox-other`} onChange="" />
              <input
                id="other"
                class="form-field"
                type="text"
                placeholder="Other diseases"
                name="other"
              />
            </div>
          </li>
        </ul>
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
