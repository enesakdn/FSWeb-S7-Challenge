import axios from "axios";
import React, { useState } from "react";
import "./FormComponent.css";
function FormComponent() {
  const [forminput, setForminput] = useState({ büyükBoy: "", option2: "" });

  const [section1, setSection1] = useState({
    büyükBoy: false,
    option2: false,
    option3: false,
  });
  const [section2, setSection2] = useState({
    büyükBoy: false,
    option2: false,
    option3: false,
    option4: false,
  });
  const [section3, setSection3] = useState({
    büyükBoy: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
  });
  const [section4, setSection4] = useState({
    büyükBoy: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
    option8: false,
    option9: false,
    option10: false,
    option11: false,
    option12: false,
    option13: false,
    option14: false,
    option15: false,
    option16: false,
  });

  const handleSection1Change = (event) => {
    const { name, checked } = event.target;
    setSection1((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSection2Change = (event) => {
    const { name, checked } = event.target;
    setSection2((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSection3Change = (event) => {
    const { name, checked } = event.target;
    setSection3((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSection4Change = (event) => {
    const { name, checked } = event.target;
    setSection4((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const Submit = (event) => {
    event.preventDefault();
    console.log("veriyi aldık");
    axios
      .post("https://reqres.in/api/orders", forminput)
      .then((response) => {
        setForminput(response.data.data);
      })
      .catch((error) => console.log(error.response));
  };
  const [data, setData] = useState([]);
  return (
    <form onSubmit={Submit}>
      <h2>Pizza Boyutu</h2>
      <label>
        Büyük
        <input
          type="checkbox"
          name="büyükBoy"
          checked={section1.option1}
          onChange={handleSection1Change}
        />
      </label>
      <label>
        Orta
        <input
          type="checkbox"
          name="option2"
          checked={section1.option2}
          onChange={handleSection1Change}
        />
      </label>
      <label>
        Küçük
        <input
          type="checkbox"
          name="option3"
          checked={section1.option3}
          onChange={handleSection1Change}
        />
      </label>

      <h2>Hamur Kalınlığı</h2>
      <label>
        Süper İnce
        <input
          type="checkbox"
          name="option4"
          checked={section2.option4}
          onChange={handleSection2Change}
        />
      </label>
      <label>
        İnce
        <input
          type="checkbox"
          name="option5"
          checked={section2.option5}
          onChange={handleSection2Change}
        />
      </label>
      <label>
        Orta
        <input
          type="checkbox"
          name="option6"
          checked={section2.option6}
          onChange={handleSection2Change}
        />
      </label>
      <label>
        Normal
        <input
          type="checkbox"
          name="option7"
          checked={section2.option7}
          onChange={handleSection2Change}
        />
      </label>

      <h2>Peynirler</h2>
      <label>
        Mozarella
        <input
          type="checkbox"
          name="option8"
          checked={section3.option8}
          onChange={handleSection3Change}
        />
      </label>
      <label>
        Kaşar Peynir
        <input
          type="checkbox"
          name="option9"
          checked={section3.option9}
          onChange={handleSection3Change}
        />
      </label>
      <label>
        Beyaz Peynir
        <input
          type="checkbox"
          name="option10"
          checked={section3.option10}
          onChange={handleSection3Change}
        />
      </label>
      <label>
        Rokofort
        <input
          type="checkbox"
          name="option11"
          checked={section3.option11}
          onChange={handleSection3Change}
        />
      </label>
      <label>
        Küflü Peynir
        <input
          type="checkbox"
          name="option12"
          checked={section3.option12}
          onChange={handleSection3Change}
        />
      </label>

      <h2>İçindekiler</h2>
      <label>
        Sucuk
        <input
          type="checkbox"
          name="option13"
          checked={section4.option13}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Mantar
        <input
          type="checkbox"
          name="option14"
          checked={section4.option14}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Zeytin
        <input
          type="checkbox"
          name="option15"
          checked={section4.option15}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Jalepenio
        <input
          type="checkbox"
          name="option16"
          checked={section4.option16}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Mısır
        <input
          type="checkbox"
          name="option17"
          checked={section4.option17}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Domates
        <input
          type="checkbox"
          name="option18"
          checked={section4.option18}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Salam
        <input
          type="checkbox"
          name="option19"
          checked={section4.option19}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Yeşil Zeytin
        <input
          type="checkbox"
          name="option20"
          checked={section4.option20}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Yeşil Biber
        <input
          type="checkbox"
          name="option21"
          checked={section4.option21}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Kırmızı Biber
        <input
          type="checkbox"
          name="option22"
          checked={section4.option22}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Ton Balığı
        <input
          type="checkbox"
          name="option23"
          checked={section4.option23}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Ananas
        <input
          type="checkbox"
          name="option24"
          checked={section4.option24}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Tavuk
        <input
          type="checkbox"
          name="option25"
          checked={section4.option25}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Pastırma
        <input
          type="checkbox"
          name="option26"
          checked={section4.option26}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Kavurma
        <input
          type="checkbox"
          name="option27"
          checked={section4.option27}
          onChange={handleSection4Change}
        />
      </label>
      <label>
        Döner
        <input
          type="checkbox"
          name="option28"
          checked={section4.option28}
          onChange={handleSection4Change}
        />
      </label>
      <br></br>
      <button type="submit">Sipariş Ekle </button>
    </form>
  );
}

export default FormComponent;
