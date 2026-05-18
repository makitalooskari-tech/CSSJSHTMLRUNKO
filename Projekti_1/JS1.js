function haeTekstiLista() {
    let data = localStorage.getItem("tekstiLista");

    if (data === null) {
        return [];
    }

    return JSON.parse(data);
}

function tallennaTeksti() {
    let input = document.getElementById("input2");
    let teksti = input.value;

    if (teksti === "") {
        alert("Kirjoita ensin jotain.");
        return;
    }

    let tekstiLista = haeTekstiLista();

    tekstiLista.push(teksti);

    localStorage.setItem("tekstiLista", JSON.stringify(tekstiLista));

    input.value = "";

    alert("Teksti tallennettu!");
}

function naytaTekstit() {
    let tekstiLista = haeTekstiLista();
    let tulos = document.getElementById("tulos");

    tulos.innerHTML = "";

    for (let i = 0; i < tekstiLista.length; i++) {
        tulos.innerHTML += "<p>" + tekstiLista[i] + "</p>";
    }
}

function lataaTekstitTiedostona() {
    let tekstiLista = haeTekstiLista();

    let tiedostonSisalto = "";

    for (let i = 0; i < tekstiLista.length; i++) {
        tiedostonSisalto += tekstiLista[i] + "\n";
    }

    let tiedosto = new Blob([tiedostonSisalto], { type: "text/plain" });

    let linkki = document.createElement("a");
    linkki.href = URL.createObjectURL(tiedosto);
    linkki.download = "tallennetut_tekstit.txt";

    linkki.click();
}

function tyhjennaTekstit() {
    localStorage.removeItem("tekstiLista");
    document.getElementById("tulos").innerHTML = "";
    alert("Tekstit tyhjennetty.");
}






