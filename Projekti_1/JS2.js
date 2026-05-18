function tallennaTeksti() {
  const inputKentta = document.getElementById("input2");
  const teksti = inputKentta.value;

  if (teksti.trim() === "") {
    alert("Kirjoita ensin jotain.");
    return;
  }

  // Haetaan vanhat tekstit localStoragesta
  const vanhatTekstitJSON = localStorage.getItem("tekstiLista");

  // Jos vanhoja ei ole, luodaan tyhjä lista
  let tekstiLista;

  if (vanhatTekstitJSON === null) {
    tekstiLista = [];
  } else {
    tekstiLista = JSON.parse(vanhatTekstitJSON);
  }

  // Lisätään uusi teksti listaan
  tekstiLista.push(teksti);

  // Tallennetaan lista takaisin localStorageen
  localStorage.setItem("tekstiLista", JSON.stringify(tekstiLista));

  alert("Teksti tallennettu!");

  inputKentta.value = "";
}

function naytaTekstit() {
  const tekstitJSON = localStorage.getItem("tekstiLista");

  if (tekstitJSON === null) {
    alert("Ei tallennettuja tekstejä.");
    return;
  }

  const tekstiLista = JSON.parse(tekstitJSON);

  if (tekstiLista.length === 0) {
    alert("Ei tallennettuja tekstejä.");
    return;
  }

  let viesti = "Tallennetut tekstit:\n\n";

  for (let i = 0; i < tekstiLista.length; i++) {
    viesti += (i + 1) + ". " + tekstiLista[i] + "\n";
  }

  alert(viesti);
}

function tyhjennaTekstit() {
  localStorage.removeItem("tekstiLista");

  alert("Kaikki tallennetut tekstit poistettu!");
}