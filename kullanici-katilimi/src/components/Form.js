import React from "react";
import App from "../App";

function Form(props) {
  const { dataForm, handleChange, handleSubmit, activeButton, formError } =
    props;
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <p>
        <label htmlFor="isimAlani">Name-Surname: </label>
        <input
          id="isimAlani"
          name="isim"
          type="text"
          value={dataForm.isim}
          onChange={(event) => handleChange(event)}
          data-cy="cyName"
        />
        <div data-cy="cyError" className="error">
          {props.formError?.isim}
        </div>
      </p>
      <p>
        <label htmlFor="emailAlani">
          E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </label>
        <input
          id="emailAlani"
          name="email"
          type="email"
          value={dataForm.email}
          onChange={(event) => handleChange(event)}
          data-cy="cyEmail"
        />
        <div data-cy="cyError" className="error">
          {props.formError?.email}
        </div>
      </p>
      <p>
        <label htmlFor="sifreAlani">
          Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
        </label>
        <input
          id="sifreAlani"
          name="sifre"
          type="password"
          value={dataForm.sifre}
          onChange={(event) => handleChange(event)}
          data-cy="cySifre"
        />
        <div data-cy="error-isim" className="error">
          {props.formError?.sifre}
        </div>
      </p>
      <p>
        <input
          id="kosulAlani"
          name="kosul"
          type="checkbox"
          checked={dataForm.kosul}
          onChange={(event) => handleChange(event)}
          data-cy="cySartlar"
        />
        <label htmlFor="kosulAlani">Accept the Conditions</label>
        <div data-cy="error-sartlar" className="error"></div>
      </p>
      <p>
        <button type="submit" disabled={activeButton} data-cy="cyButton">
          Send
        </button>
      </p>
    </form>
  );
}

export default Form;
