import React from "react";

function Form(props) {
  const { dataForm, handleChange, handleSubmit, activeButton } = props;
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
        />
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
        />
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
        />
      </p>
      <p>
        <input
          id="kosulAlani"
          name="kosul"
          type="checkbox"
          checked={dataForm.kosul}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="kosulAlani">Accept the Conditions</label>
      </p>
      <p>
        <button type="submit" disabled={activeButton}>
          Send
        </button>
      </p>
    </form>
  );
}

export default Form;
