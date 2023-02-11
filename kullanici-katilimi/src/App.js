import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import * as yup from "yup";
import Form from "./components/Form";

const formSchema = yup.object().shape({
  isim: yup
    .string("Lütfen harf giriniz")
    .required("İsim-Soyisim alanını doldurmanız zorunlu"),
  email: yup
    .string("E-mail adresinizi kontrol edin.")
    .required("E-mail alanını doldurmanız zorunlu"),
  sifre: yup
    .string("")
    .required("Şifre alanını doldurmanız zorunlu")
    .max(8, "Şifreniz maksimum 8 karekter olmalı"),
  kosul: yup.boolean().oneOf([true], "Kullanım koşullarını kabul etmelisiniz"),
});

function App() {
  const [dataForm, setDataForm] = useState({
    isim: "",
    email: "",
    sifre: "",
    kosul: true,
  });
  const [formError, setFormError] = useState({
    isim: "",
    email: "",
    sifre: "",
    kosul: "",
  });
  const [newUser, setNewUser] = useState(null);
  const [activeButton, setActiveButton] = useState(true);

  function errorControl(name, value) {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormError({
          ...formError,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormError({
          ...formError,
          [name]: err.formError[0],
        });
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    let deger = value;
    if (event.target.type === "checkbox") {
      deger = event.target.checked;
    }
    errorControl(name, deger);
    setDataForm({
      ...dataForm,
      [name]: deger,
    });
  }
  useEffect(() => {
    formSchema.isValid(dataForm).then((sonuc) => setActiveButton(!sonuc));
  }, [dataForm]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", dataForm)
      .then((response) => {
        console.log(response.data); //? control
        setNewUser(response.data);
        setDataForm({
          isim: "",
          email: "",
          sifre: "",
          kosul: false,
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <Form
        dataForm={dataForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        activeButton={activeButton}
      />
      <p>{formError.isim}</p>
      <p>{formError.email}</p>
      <p>{formError.sifre}</p>
      <p>{formError.kosul}</p>
      {newUser && (
        <p>
          {newUser.isim} ismine sahip kullanıcı {newUser.id} idsi kayıt edildi.
        </p>
      )}
    </div>
  );
}

export default App;
